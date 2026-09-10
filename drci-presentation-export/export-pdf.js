/* export-pdf.js — Génome Réunion · Présentation DRCI (31/07/2026)
   Génère un PDF paysage (une slide par page, image pure — sans notes orateur,
   sans barre de navigation) à partir du diaporama HTML/JS hébergé séparément
   sur https://github.com/patrick-mun/drci_reunnion_projet et publié sur
   https://patrick-mun.github.io/drci_reunnion_projet/ — utile en cas de
   coupure réseau ou pour l'envoyer par email.

   Ce diaporama vit dans un dépôt distinct de celui-ci : ce script a donc
   besoin d'un clone local de ce dépôt en argument.

   Usage : node export-pdf.js <chemin-vers-clone-drci_reunnion_projet> [sortie.pdf]
   Dépendances : npm install (dans ce dossier) avant la première exécution.
*/

const { chromium } = require('playwright');
const { PDFDocument } = require('pdf-lib');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DECK_DIR = process.argv[2] && path.resolve(process.argv[2]);
if (!DECK_DIR || !fs.existsSync(path.join(DECK_DIR, 'index.html'))) {
  console.error('Usage: node export-pdf.js <chemin-vers-clone-drci_reunnion_projet> [sortie.pdf]');
  console.error('Clonez d\'abord : git clone https://github.com/patrick-mun/drci_reunnion_projet.git');
  process.exit(1);
}

const PORT = 8932;
const OUT_PATH = path.resolve(process.argv[3] || path.join(__dirname, 'Presentation_DRCI_31-07-2026.pdf'));

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
};

const HIDE_CHROME_CSS = `
  #nav, #prog, #mobile-menu, #burger { display: none !important; }
  #deck-viewport { top: 0 !important; }
  .slide-inner { overflow: hidden !important; }
  * { transition: none !important; animation: none !important; }
`;

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const filePath = path.join(DECK_DIR, decodeURIComponent(req.url.split('?')[0]));
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        const ext = path.extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(PORT, () => resolve(server));
  });
}

(async () => {
  const server = await startServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'screen' });
  await page.addStyleTag({ content: HIDE_CHROME_CSS });

  const total = await page.evaluate(() => window.deckApp.total);
  const pageBuffers = [];
  for (let i = 1; i <= total; i++) {
    await page.evaluate((idx) => window.deckApp.goTo(idx - 1, { force: true }), i);
    await page.waitForTimeout(600);
    const pdfBuf = await page.pdf({
      width: '1600px',
      height: '900px',
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    pageBuffers.push(pdfBuf);
    console.log(`Slide ${i}/${total} capturée`);
  }

  await browser.close();
  server.close();

  const merged = await PDFDocument.create();
  for (const buf of pageBuffers) {
    const src = await PDFDocument.load(buf);
    const [copiedPage] = await merged.copyPages(src, [0]);
    merged.addPage(copiedPage);
  }
  fs.writeFileSync(OUT_PATH, await merged.save());
  console.log('PDF généré :', OUT_PATH);
})();
