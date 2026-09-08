/* app.js — Génome Réunion · Présentation ARS La Réunion
   Navigation du deck, accessibilité clavier, menu mobile. */

(function () {
  'use strict';

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

  function slideHash(i) {
    return '#slide-' + (clamp(i) + 1);
  }

  function indexFromHash(hash) {
    var raw = (hash || '').replace(/^#/, '');
    var named = raw.match(/^slide-(\d+)$/i);

    if (named) {
      var displayedNumber = parseInt(named[1], 10);
      if (displayedNumber >= 1 && displayedNumber <= total) {
        return { valid: true, index: displayedNumber - 1, legacy: false };
      }
      return { valid: false, index: 0, legacy: false };
    }

    // Compatibilité avec les anciens liens numériques zéro-based : #21 = slide 22.
    if (/^\d+$/.test(raw)) {
      var legacyIndex = parseInt(raw, 10);
      if (legacyIndex >= 0 && legacyIndex < total) {
        return { valid: true, index: legacyIndex, legacy: true };
      }
    }

    return { valid: false, index: 0, legacy: false };
  }

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
    history.replaceState(null, '', slideHash(current));
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

  // Deep-link lisible : #slide-22 ouvre la slide 22.
  // Les anciens liens numériques zéro-based restent acceptés : #21 ouvre aussi la slide 22.
  var initial = indexFromHash(location.hash);
  current = clamp(initial.valid ? initial.index : 0);
  render();

  if (initial.valid && initial.legacy) {
    history.replaceState(null, '', slideHash(current));
  }

  window.addEventListener('hashchange', function () {
    var target = indexFromHash(location.hash);
    if (target.valid) goTo(target.index, { force: true });
  });

  window.deckApp = { goTo: goTo, next: next, prev: prev, getIndex: function () { return current; }, total: total, slides: slides };
})();
