/* charts.js — Génome Réunion · Présentation ARS
   Graphique Chart.js (vendorisé, pas de CDN) : PCA pilote réunionnaise
   projetée sur 1000 Genomes (slide 06 — La preuve locale), données réelles
   dans pca-data.js (mêmes données que le diaporama DRCI/DSIO).
   La slide reste dans le flux (opacity/visibility, pas de display:none) :
   le canvas a donc une taille dès le chargement et le graphique peut être
   initialisé une seule fois, sans attendre l'activation de sa slide. */

(function () {
  'use strict';

  if (typeof Chart === 'undefined') return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  Chart.defaults.font.family = "'DM Sans', sans-serif";
  Chart.defaults.color = '#2A3A48';
  Chart.defaults.animation = reduceMotion ? false : { duration: 600 };

  var BORDER = '#D8D2C6';

  var pcaCanvas = document.getElementById('pcaScatterChart');
  if (pcaCanvas && typeof PCA_DATA !== 'undefined') {
    function pcaToPoints(flat) {
      var pts = [];
      for (var i = 0; i < flat.length; i += 2) pts.push({ x: flat[i], y: flat[i + 1] });
      return pts;
    }
    function pcaRefDataset(key, opacity) {
      var s = PCA_DATA[key];
      return {
        label: s.label, data: pcaToPoints(s.flat),
        backgroundColor: s.color + Math.round(opacity * 255).toString(16).padStart(2, '0'),
        pointRadius: 2.2, pointHoverRadius: 4
      };
    }
    new Chart(pcaCanvas, {
      type: 'scatter',
      data: {
        datasets: [
          pcaRefDataset('AFR', 0.35), pcaRefDataset('AMR', 0.35), pcaRefDataset('EAS', 0.35),
          pcaRefDataset('EUR', 0.35), pcaRefDataset('SAS', 0.35),
          {
            label: PCA_DATA.ETUDE.label, data: pcaToPoints(PCA_DATA.ETUDE.flat),
            backgroundColor: PCA_DATA.ETUDE.color, borderColor: PCA_DATA.ETUDE.color,
            pointStyle: 'crossRot', pointRadius: 5, pointBorderWidth: 1.5, pointHoverRadius: 7
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { boxWidth: 10, usePointStyle: true, font: { family: "'DM Sans', sans-serif", size: 12 } } },
          tooltip: { callbacks: { label: function (ctx) { return ctx.dataset.label + ' · PC1=' + ctx.parsed.x.toFixed(1) + ' PC2=' + ctx.parsed.y.toFixed(1); } } }
        },
        scales: {
          x: { title: { display: true, text: 'PC1' }, grid: { color: BORDER } },
          y: { title: { display: true, text: 'PC2' }, grid: { color: BORDER } }
        }
      }
    });
  }
})();
