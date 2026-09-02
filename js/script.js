// Génome Réunion - Script principal

document.addEventListener('DOMContentLoaded', function () {
  console.log('Génome Réunion page loaded');
  initNewsModal();
});

// ─── Actualités (officielles + brouillons locaux) ────────────────────────

const NEWS_DRAFTS_KEY = 'gr_actualites_brouillons';

const TAG_CLASS = {
  'Nouveau document': 'tag-doc',
  'Mise à jour': 'tag-update',
  'Réorganisation': 'tag-reorg',
  'Correction': 'tag-fix',
  'Agenda': 'tag-agenda',
  'Autre': 'tag-autre'
};

// Liste officielle, visible par tous les visiteurs. Alimentée manuellement
// à chaque évolution notable du site.
const OFFICIAL_NEWS = [
  {
    date: '02/09/2026',
    category: 'Nouveau document',
    title: 'Présentation pour la Région Réunion',
    desc: "Mise en ligne du support de présentation (20 slides) préparé pour le rendez-vous avec le Conseil régional : adhésion de principe au projet et alignement avec les orientations régionales.",
    link: { url: 'presentation-region/index.html', label: 'Voir la présentation →' }
  },
  {
    date: '31/07/2026',
    category: 'Agenda',
    title: 'Réunion DRCI — 10h à 11h30',
    desc: "Présentation du projet : plan économique, ressources humaines, montage du dossier FEDER et évaluation des besoins, ainsi que la communication et les conventions.",
    link: { url: 'https://teams.microsoft.com/meet/31234095055717?p=oDUpADNLgcQn8uMeZj', label: 'Rejoindre la réunion Teams →' }
  },
  {
    date: '28/07/2026',
    category: 'Correction',
    title: 'Normalisation',
    desc: "Ajout d'une normalisation en amont de la pondération des paramètres du score S-div, afin d'harmoniser les valeurs de chaque paramètre (PCA, Admixture, IBD, ROH)."
  },
  {
    date: '28/07/2026',
    category: 'Correction',
    title: 'Bibliographie',
    desc: "Analyse complète de la bibliographie pour corriger les références manquantes et les erreurs de recopie."
  },
  {
    date: '28/07/2026',
    category: 'Nouveau document',
    title: 'Justification du score S-div',
    desc: "Document de synthèse justifiant le score de sélection des échantillons retenu pour la constitution du noyau."
  },
  {
    date: '21/07/2026',
    category: 'Nouveau document',
    title: 'Carte « Présentation »',
    desc: "Regroupe la présentation générale du projet et le support de la réunion du 31/07/2026 à la DRCI."
  },
  {
    date: '17/07/2026',
    category: 'Nouveau document',
    title: 'Carte « Financement »',
    desc: "Regroupe le dossier de candidature FEDER et ses annexes budgétaires."
  },
  {
    date: '17/07/2026',
    category: 'Mise à jour',
    title: 'Page Méthodologie enrichie',
    desc: "Ajout du protocole de validation v1.5, de la spécification du moteur de simulation et du glossaire des paramètres."
  },
  {
    date: '17/07/2026',
    category: 'Réorganisation',
    title: 'Grille de documents réorganisée',
    desc: "Regroupement des cartes Méthodologie et Financement, repositionnement dans la grille de la section Documents."
  }
];

function loadDrafts() {
  try {
    const raw = localStorage.getItem(NEWS_DRAFTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveDrafts(drafts) {
  localStorage.setItem(NEWS_DRAFTS_KEY, JSON.stringify(drafts));
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderEntry(entry, { removable = false, id = null } = {}) {
  const tagClass = TAG_CLASS[entry.category] || 'tag-autre';
  const actions = removable
    ? `<div class="news-draft-actions">
         <button type="button" data-copy-draft="${id}">Copier</button>
         <button type="button" class="danger" data-delete-draft="${id}">Supprimer</button>
       </div>`
    : '';
  // entry.link n'existe que sur les entrées officielles (données de confiance
  // définies dans ce fichier), jamais sur les brouillons saisis par l'utilisateur.
  const link = entry.link
    ? `<a class="news-entry-link" href="${escapeHtml(entry.link.url)}" target="_blank" rel="noopener">${escapeHtml(entry.link.label)}</a>`
    : '';
  return `
    <div class="news-entry">
      <div class="news-entry-date">${escapeHtml(entry.date)}</div>
      <div>
        <span class="news-entry-tag ${tagClass}">${escapeHtml(entry.category)}</span>
        <div class="news-entry-title">${escapeHtml(entry.title)}</div>
        <p class="news-entry-desc">${escapeHtml(entry.desc)}</p>
        ${link}
        ${actions}
      </div>
    </div>`;
}

function renderOfficialList() {
  const el = document.getElementById('newsOfficialList');
  if (!el) return;
  el.innerHTML = OFFICIAL_NEWS.map(entry => renderEntry(entry)).join('');
}

function renderDraftsList() {
  const el = document.getElementById('newsDraftsList');
  if (!el) return;
  const drafts = loadDrafts();
  if (drafts.length === 0) {
    el.innerHTML = '<p class="news-empty">Aucun brouillon enregistré sur cet appareil.</p>';
    return;
  }
  el.innerHTML = drafts
    .slice()
    .reverse()
    .map(d => renderEntry(d, { removable: true, id: d.id }))
    .join('');
}

function initNewsModal() {
  const btn = document.getElementById('newsBtn');
  const overlay = document.getElementById('newsOverlay');
  const closeBtn = document.getElementById('newsCloseBtn');
  const tabs = document.querySelectorAll('.news-tab');
  const panels = {
    consulter: document.getElementById('newsPanelConsulter'),
    ajouter: document.getElementById('newsPanelAjouter')
  };
  const form = document.getElementById('newsDraftForm');
  const draftsListEl = document.getElementById('newsDraftsList');

  if (!btn || !overlay) return;

  function openModal() {
    overlay.classList.add('open');
    renderOfficialList();
    renderDraftsList();
  }
  function closeModal() {
    overlay.classList.remove('open');
  }

  btn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      Object.values(panels).forEach(p => p.classList.remove('active'));
      panels[tab.dataset.tab].classList.add('active');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('newsDraftTitle').value.trim();
    const category = document.getElementById('newsDraftCategory').value;
    const desc = document.getElementById('newsDraftDesc').value.trim();
    if (!title || !desc) return;

    const drafts = loadDrafts();
    drafts.push({
      id: Date.now().toString(36),
      date: new Date().toLocaleDateString('fr-FR'),
      category,
      title,
      desc
    });
    saveDrafts(drafts);
    form.reset();
    renderDraftsList();

    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === 'consulter'));
    Object.entries(panels).forEach(([key, p]) => p.classList.toggle('active', key === 'consulter'));
  });

  draftsListEl.addEventListener('click', (e) => {
    const delId = e.target.getAttribute('data-delete-draft');
    const copyId = e.target.getAttribute('data-copy-draft');
    if (delId) {
      saveDrafts(loadDrafts().filter(d => d.id !== delId));
      renderDraftsList();
    } else if (copyId) {
      const draft = loadDrafts().find(d => d.id === copyId);
      if (draft) {
        const text = `${draft.date} | ${draft.category} | ${draft.title} — ${draft.desc}`;
        if (navigator.clipboard) navigator.clipboard.writeText(text);
      }
    }
  });
}
