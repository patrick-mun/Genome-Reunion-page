/* charts.js — Génome Réunion · Rendez-vous Région Réunion
   Graphiques Chart.js (vendorisé, pas de CDN) : écart de représentation
   (slide 3), composition ancestrale illustrative (slide 4), leviers
   financiers régionaux déjà mobilisés (slide 14).
   Les slides inactives restent dans le flux (opacity/visibility, pas de
   display:none) : les canvas ont donc une taille dès le chargement et les
   graphiques peuvent être initialisés une seule fois, sans attendre
   l'activation de leur slide. */

(function () {
  'use strict';

  if (typeof Chart === 'undefined') return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  Chart.defaults.font.family = "'DM Sans', sans-serif";
  Chart.defaults.color = '#2A3A48';
  Chart.defaults.animation = reduceMotion ? false : { duration: 600 };

  var NAVY = '#0F3A56';
  var TEAL = '#1E6E8C';
  var CORAL = '#E8654A';
  var BORDER = '#D8D2C6';

  function titleFont() {
    return { family: "'Space Grotesk', sans-serif", weight: '700', size: 13 };
  }

  var repCanvas = document.getElementById('representationChart');
  if (repCanvas) {
    new Chart(repCanvas, {
      type: 'bar',
      data: {
        labels: [
          ['Ascendance européenne', 'séquences disponibles, 2009'],
          ['Ascendance africaine', 'études GWAS, 2022']
        ],
        datasets: [{
          data: [96, 1.1],
          backgroundColor: [NAVY, CORAL],
          borderRadius: 6,
          barThickness: 40
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { left: 4 } },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: function (ctx) { return ctx.parsed.x + ' %'; } } }
        },
        scales: {
          x: { min: 0, max: 100, ticks: { callback: function (v) { return v + '%'; } }, grid: { color: BORDER } },
          y: {
            grid: { display: false },
            ticks: { font: { family: "'DM Sans', sans-serif", size: 12 }, color: '#2A3A48' }
          }
        }
      }
    });
  }

  var ancestryCanvas = document.getElementById('ancestryChart');
  if (ancestryCanvas) {
    new Chart(ancestryCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Afrique / Malgache', 'Inde du Sud', 'Européen', 'Zarabe / Gujarati', 'Chinois / Asie'],
        datasets: [{
          data: [45, 25, 15, 8, 7],
          backgroundColor: [TEAL, CORAL, NAVY, 'oklch(0.55 0.12 200)', 'oklch(0.50 0.10 150)'],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '58%',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: { label: function (ctx) { return ctx.label + ' : ' + ctx.parsed + ' %'; } }
          }
        }
      }
    });
  }

  var fundingCanvas = document.getElementById('fundingChart');
  if (fundingCanvas) {
    new Chart(fundingCanvas, {
      type: 'bar',
      data: {
        labels: [
          ['Contrat de convergence', 'et de transformation 2024-2027'],
          ['FEDER-FSE+ 2021-2027', 'recherche & innovation']
        ],
        datasets: [{
          data: [563.5, 100],
          backgroundColor: [TEAL, CORAL],
          borderRadius: 6,
          barThickness: 40
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { left: 4 } },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: function (ctx) { return ctx.parsed.x + ' M€'; } } }
        },
        scales: {
          x: { min: 0, max: 600, ticks: { callback: function (v) { return v + ' M€'; } }, grid: { color: BORDER } },
          y: { grid: { display: false }, ticks: { font: { family: "'DM Sans', sans-serif", size: 12 }, color: '#2A3A48' } }
        }
      }
    });
  }
})();
