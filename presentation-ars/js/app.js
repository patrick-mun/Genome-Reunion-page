/* app.js — Génome Réunion · Présentation ARS La Réunion
   Navigation du deck, accessibilité clavier, menu mobile.

   Correctifs scientifiques ARS — 2026-09-03
   Les ajustements ci-dessous sont centralisés ici afin de préserver la structure HTML
   actuelle du diaporama tout en maintenant des formulations institutionnelles et
   scientifiques prudentes. Chaque correction est ciblée par data-label et échoue
   silencieusement si la structure de la slide évolue.
*/

(function () {
  'use strict';

  function slideByLabel(prefix) {
    return document.querySelector('.slide[data-label^="' + prefix + '"]');
  }

  function replaceSvgText(slide, from, to) {
    if (!slide) return;
    Array.prototype.slice.call(slide.querySelectorAll('svg text')).forEach(function (node) {
      if (node.textContent.trim() === from) node.textContent = to;
    });
  }

  function applyScientificCorrections() {
    var s05 = slideByLabel('05 —');
    if (s05) {
      s05.dataset.notes = 'Admixture récente + insularité ; effets fondateurs et endogamie à présenter comme documentés dans certaines composantes ou certains contextes, jamais comme caractéristiques uniformes de toute la population.';

      var historyIntro = s05.querySelector('.card--navy-strong .text-body');
      if (historyIntro) {
        historyIntro.textContent = "La population réunionnaise résulte d'une histoire démographique récente, marquée par des vagues successives de peuplement et par la rencontre de plusieurs origines dans un contexte insulaire.";
      }

      var historyCallout = s05.querySelector('.card--navy-strong .callout');
      if (historyCallout) {
        historyCallout.innerHTML = '<div class="callout-title">Message clé</div>Admixture récente + insularité + effets fondateurs documentés dans certaines composantes + dérive + endogamie locale dans certains contextes';
      }

      /* Citation directe retirée tant que la formulation exacte et la page source
         de Prosper Ève ne sont pas vérifiées. */
      var unverifiedQuote = s05.querySelector('.history-quote');
      if (unverifiedQuote) unverifiedQuote.remove();

      var currentSub = Array.prototype.slice.call(s05.querySelectorAll('.frise-sub')).pop();
      if (currentSub) currentSub.textContent = 'Population fortement admixée';

      var confluenceCaption = s05.querySelector('.confluence-caption');
      if (confluenceCaption) {
        confluenceCaption.textContent = "Des origines et des histoires diverses, mêlées au fil du peuplement de l'île, qui ont contribué à un patrimoine génétique aujourd'hui fortement admixé et à mieux documenter.";
      }
    }

    var s06 = slideByLabel('06 —');
    if (s06) {
      var continuumBody = s06.querySelector('.text-body');
      if (continuumBody) {
        continuumBody.textContent = "Nous ne cherchons pas à définir une identité génétique réunionnaise. Nous cherchons à représenter un continuum de diversité. Les grandes catégories continentales de référence ne suffisent pas nécessairement à décrire la combinaison d'ascendances observée à La Réunion. La preuve pilote suit à la slide suivante.";
      }
    }

    var s07 = slideByLabel('07 —');
    if (s07) {
      s07.dataset.notes = 'PCA pilote n≈75 projetée sur 1000 Genomes : première observation compatible avec une structure fortement admixée et des positions intermédiaires ; ne pas présenter comme démonstration exhaustive de toute La Réunion.';
      var pcaTitle = s07.querySelector('.slide-title');
      if (pcaTitle) pcaTitle.textContent = "Une première observation locale : des positions compatibles avec un continuum d'admixture";
      var pcaCaption = s07.querySelector('.pca-caption');
      if (pcaCaption) {
        pcaCaption.textContent = "Cette cohorte pilote ne décrit pas toute La Réunion. Elle montre des positions intermédiaires entre plusieurs populations de référence, compatibles avec une structure fortement admixée.";
      }
      var pcaCanvas = s07.querySelector('#pcaScatterChart');
      if (pcaCanvas) {
        pcaCanvas.setAttribute('aria-label', "PCA globale : projection de la cohorte pilote réunionnaise (n≈75) sur les composantes principales des populations de référence 1000 Genomes. Les positions intermédiaires observées sont compatibles avec une structure fortement admixée ; cette cohorte pilote ne constitue pas une représentation exhaustive de La Réunion.");
      }
    }

    var s08 = slideByLabel('08 —');
    if (s08) {
      var lissageSvg = s08.querySelector('svg');
      if (lissageSvg) {
        lissageSvg.setAttribute('aria-label', "Même politique de santé et même outil appliqués à tous, mais le niveau d'information populationnelle disponible varie selon la représentativité du référentiel : une représentation plus robuste réduit l'incertitude populationnelle, sans déterminer à elle seule le diagnostic clinique.");
      }
      var patientNodes = Array.prototype.slice.call(s08.querySelectorAll('svg text')).filter(function (node) {
        return node.textContent.trim() === 'Patient';
      });
      patientNodes.forEach(function (node) { node.textContent = 'Interprétation'; });
      replaceSvgText(s08, '✓ diagnostic fiable', 'information plus robuste');
      replaceSvgText(s08, '! diagnostic incertain', 'incertitude plus élevée');
      s08.dataset.notes = "Concept central : la représentativité modifie la robustesse de l'information populationnelle disponible pour l'interprétation ; elle ne garantit ni n'invalide à elle seule un diagnostic.";
    }

    var s10 = slideByLabel('10 —');
    if (s10) {
      s10.dataset.notes = "Le PFMG organise l'accès national au séquençage génomique et à son interprétation clinique. Génome Réunion apporte une couche différente : une référence populationnelle locale complémentaire, sans duplication des dispositifs nationaux.";
    }

    var s12 = slideByLabel('12 —');
    if (s12) {
      s12.dataset.notes = '2 500 participants génotypés → sélection raisonnée de 350 génomes WGS → identification des variants → fréquences locales recalibrées sur la cohorte large de 2 500 participants.';
    }

    var s19 = slideByLabel('19 —');
    if (s19) {
      Array.prototype.slice.call(s19.querySelectorAll('.formula-text span')).forEach(function (node) {
        if (node.textContent.trim() === 'Niveau de preuve') node.textContent = 'Preuve & actionnabilité';
      });
      s19.dataset.notes = "Priorisation populationnelle : fréquence locale × exposition au médicament × preuve et actionnabilité × gravité du risque. L'OMEDIT constitue un interlocuteur naturel pour relier ce travail au bon usage et à la prévention de l'iatrogénie.";
    }

    var s22 = slideByLabel('22 —');
    if (s22) {
      s22.dataset.notes = "Préparer en Q&A : lieu d'hébergement, comité d'accès, critères d'autorisation des requêtes, données pouvant quitter le CHU, articulation éventuelle avec l'EDS, sécurité et risque de ré-identification des données agrégées.";
    }

    var s23 = slideByLabel('23 —');
    if (s23) {
      var arsRole = s23.querySelector('.role-card--ars .role-desc');
      if (arsRole) {
        arsRole.textContent = 'Lecture sanitaire, équité, prévention, articulation avec le PRS, l’OMEDIT, l’offre de soins et le système régional de santé';
      }
    }

    var s24 = slideByLabel('24 —');
    if (s24) {
      s24.dataset.notes = "Demande pragmatique : co-construire avec l'ARS et l'OMEDIT une première étude de faisabilité pharmacogénétique régionale permettant d'identifier 2 à 3 couples gène–médicament prioritaires à évaluer à La Réunion.";
      var askTexts = s24.querySelectorAll('.ask-text');
      if (askTexts.length > 0) {
        askTexts[0].textContent = "Ce que nous proposons aujourd'hui à l'ARS et à l'OMEDIT : co-construire avec le CHU une première étude de faisabilité pharmacogénétique régionale, afin d'identifier à partir des données locales et du niveau de preuve existant 2 à 3 couples gène–médicament prioritaires à évaluer à La Réunion.";
      }
      if (askTexts.length > 1) {
        askTexts[1].textContent = "Cette première étape, limitée et mesurable, permettrait d'instruire sur des données réelles l'intérêt d'un déploiement ultérieur en prévention et sécurisation thérapeutique.";
      }
    }
  }

  applyScientificCorrections();

  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var total = slides.length;
  var deck = document.getElementById('deck');
  var pf = document.getElementById('pf');
  var ctr = document.getElementById('ctr');
  var bp = document.getElementById('bp');
  var bn = document.getElementById('bn');
  var navLogo = document.getElementById('nav-logo');
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobile-menu');
  var pills = Array.prototype.slice.call(document.querySelectorAll('.sec-pill'));

  var current = 0;

  function clamp(i) { return Math.max(0, Math.min(total - 1, i)); }

  function partAt(i) {
    return slides[i] ? slides[i].dataset.part || '' : '';
  }

  function updatePills() {
    var part = partAt(current);
    var order = ['hero', 'constat', 'reponse', 'benefices', 'gouvernance'];
    var partIndex = order.indexOf(part);
    pills.forEach(function (pill, i) {
      pill.classList.toggle('active', i === partIndex);
    });
  }

  function render() {
    slides.forEach(function (s, i) {
      s.classList.toggle('is-active', i === current);
      s.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });
    pf.style.width = ((current + 1) / total * 100) + '%';
    ctr.textContent = (current + 1) + ' / ' + total;
    bp.disabled = current === 0;
    bn.disabled = current === total - 1;
    updatePills();
    slides[current].querySelector('.slide-inner').scrollTop = 0;
  }

  function goTo(i, opts) {
    var next = clamp(i);
    if (next === current && !(opts && opts.force)) return;
    current = next;
    render();
    history.replaceState(null, '', '#' + current);
    broadcastState();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function broadcastState() {
    var payload = { type: 'deck:state', index: current, total: total };
    try {
      if (window.opener) window.opener.postMessage(payload, '*');
      if (window.parent && window.parent !== window) window.parent.postMessage(payload, '*');
    } catch (e) { /* cross-origin no-op */ }
  }

  window.addEventListener('message', function (e) {
    var data = e.data;
    if (!data || typeof data !== 'object') return;
    if (data.type === 'deck:goto' && Number.isInteger(data.index)) {
      goTo(data.index, { force: true });
    }
  });

  bp.addEventListener('click', prev);
  bn.addEventListener('click', next);

  navLogo.addEventListener('click', function () { goTo(0); });
  navLogo.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo(0); }
  });

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      goTo(parseInt(pill.dataset.goto, 10));
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  if (burger) {
    burger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.target && /input|textarea/i.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    else if (e.key === 'End') { e.preventDefault(); goTo(total - 1); }
    else if (e.key === 'Escape') { mobileMenu.classList.remove('open'); }
  });

  // Support tactile (swipe) basique
  var touchStartX = null;
  document.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) { dx < 0 ? next() : prev(); }
    touchStartX = null;
  }, { passive: true });

  // Point d'entrée : hash d'URL (#12) permet le deep-link
  var initial = parseInt(location.hash.replace('#', ''), 10);
  current = clamp(Number.isInteger(initial) ? initial : 0);
  render();

  window.addEventListener('hashchange', function () {
    var i = parseInt(location.hash.replace('#', ''), 10);
    if (Number.isInteger(i)) goTo(i, { force: true });
  });

  window.deckApp = { goTo: goTo, next: next, prev: prev, getIndex: function () { return current; }, total: total, slides: slides };
})();
