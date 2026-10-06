// Génère deux PDF à partir de index.html :
//  - Livret-Genome-Reunion-A5.pdf              : pages A5 dans l'ordre de lecture
//  - Livret-Genome-Reunion-A5-imposition-A4.pdf : feuilles A4 paysage prêtes à imprimer
//    en recto verso (bord court) puis à plier et agrafer au milieu.
// Usage : node build-pdf.js   (nécessite playwright et un accès à Google Fonts)
const path = require('path');
const { chromium } = require('playwright');

const READING = path.join(__dirname, 'Livret-Genome-Reunion-A5.pdf');
const IMPOSED = path.join(__dirname, 'Livret-Genome-Reunion-A5-imposition-A4.pdf');
const NEEDED = ['Space Grotesk', 'Source Sans 3'];

// Faces d'impression d'un livret agrafé de n pages (n multiple de 4) :
// [gauche, droite], recto puis verso de chaque feuille.
function sides(n) {
  const out = [];
  for (let k = 0; k < n / 2; k++) out.push(k % 2 === 0 ? [n - k, k + 1] : [k + 1, n - k]);
  return out;
}

(async () => {
  const opts = process.env.HTTPS_PROXY ? { proxy: { server: process.env.HTTPS_PROXY } } : {};
  const browser = await chromium.launch(opts);
  const page = await browser.newPage({ ignoreHTTPSErrors: true });
  await page.goto('file://' + path.join(__dirname, 'index.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(2500);

  // Les polices doivent être chargées : sinon le PDF serait en police de repli.
  const loaded = await page.evaluate(() =>
    [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/"/g, '')));
  const missing = NEEDED.filter(f => !loaded.includes(f));
  if (missing.length) {
    await browser.close();
    throw new Error('Polices non chargées : ' + missing.join(', ') + ' (réessayer, connexion requise)');
  }

  const n = await page.$$eval('section.page', ps => ps.length);
  if (n % 4) throw new Error(`${n} pages : un livret agrafé doit avoir un nombre de pages multiple de 4`);

  await page.pdf({ path: READING, preferCSSPageSize: true, printBackground: true });
  console.log('OK', READING, `(${n} pages)`);

  // Imposition : on réordonne les mêmes pages sur des feuilles A4 paysage.
  await page.evaluate((order) => {
    const pages = [...document.querySelectorAll('section.page')];
    const style = document.createElement('style');
    style.textContent = `
      @page { size: 297mm 210mm; margin: 0; }
      html, body { background: none !important; padding: 0 !important; margin: 0 !important; }
      .booklet { display: none !important; }
      .side { display: flex; justify-content: center; width: 297mm; height: 210mm;
              overflow: hidden; break-after: page; }
      .side .page { flex: none; width: 148mm !important; height: 210mm !important;
                    aspect-ratio: auto !important; border-radius: 0 !important;
                    box-shadow: none !important; margin: 0 !important;
                    break-before: auto !important; }
      .side .page::after { display: none !important; }
    `;
    document.head.appendChild(style);
    const wrap = document.createElement('div');
    for (const [l, r] of order) {
      const side = document.createElement('div');
      side.className = 'side';
      for (const p of [l, r]) side.appendChild(pages[p - 1].cloneNode(true));
      wrap.appendChild(side);
    }
    document.body.appendChild(wrap);
  }, sides(n));
  await page.waitForTimeout(500);
  await page.pdf({ path: IMPOSED, preferCSSPageSize: true, printBackground: true });
  console.log('OK', IMPOSED, `(${n / 2} faces)`);
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
