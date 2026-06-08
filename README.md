# Génome Réunion — Référentiel génomique de La Réunion

Site web officiel du projet **Génome Réunion**, un référentiel génomique local pour la population réunionnaise, porté par le **Laboratoire de Génétique du CHU de La Réunion**.

![Génome Réunion](assets/logo.svg)

---

## 📖 À propos du projet

**Génome Réunion** vise à construire le **premier référentiel génomique dédié à la population réunionnaise** — une population admixée et fondatrice, quasi absente des bases de données génomiques internationales (gnomAD, 1000 Genomes).

### Objectifs

- 🧬 **2 500 individus** génotypés sur puce SNP
- 📊 **350 WGS** sélectionnés (pris en charge par POPgen)
- 🏘️ **100 familles** nucléaires pour phasage haplotypique
- 🤖 **4 modules IA** cliniques (pathogénicité, pharmacogénétique, admixture, PRS)
- ⏱️ **36 mois** de développement (Juin 2026)

### Budget

- **Scénario Optimal** : ~1 403 000 €
- **Scénario Maximal** : ~1 709 000 €

---

## 🏗️ Structure du projet

```
Genome-Reunion-page/
├── index.html              # Page principale
├── css/
│   └── styles.css          # Feuille de styles (650+ lignes)
├── js/
│   └── script.js           # Scripts interactifs
├── assets/
│   ├── logo.svg            # Logo officiel (navigation + footer)
│   └── favicon.svg         # Favicon (onglet navigateur)
├── README.md               # Ce fichier
└── SESSION.md              # Documentation de développement
```

---

## 🎨 Design et Branding

### Identité visuelle

- **Logo** : Ondes ondulantes (bleu/teal/orange) + texte
- **Couleurs principales** :
  - Teal : `#1E6E8C`
  - Bleu foncé : `#0F3A56`
  - Orange : `#E8654A`
  - Gris : Variables CSS

- **Typographie** :
  - Titres : Georgia, serif
  - Corps : DM Sans, sans-serif
  - Navigation : Space Grotesk, sans-serif

---

## 📑 Sections du site

### 1️⃣ Héro (Hero)
Présentation accrocheur avec statistiques clés

### 2️⃣ Décisions budgétaires
Trois axes de décision stratégique avec scénarios

### 3️⃣ Contexte scientifique
L'angle mort de la médecine de précision :
- Représentation génétique insuffisante
- Biais IA hérité des cohortes euro-centrées
- Équité en santé

### 4️⃣ Singularité de La Réunion
- Admixture multicontinentale unique
- Effets fondateurs régionaux
- Composition ancestrale illustrée

### 5️⃣ Méthodologie
Pipeline en 3 couches :
- Cohorte SNP (2 500 individus)
- Familles nucléaires (100)
- Panel WGS hybride (350)

### 6️⃣ Algorithme S_div
Score géo-ancestral composite :
- PCA_score (30%)
- ADMIX_score (30%)
- IBD_score (25%)
- ROH_score (15%)

### 7️⃣ Modules IA
4 modules cliniques :
- Pathogénicité des variants
- Pharmacogénétique × admixture
- Analyse d'admixture
- Polygenic Risk Score recalibré

### 8️⃣ Budget
Visualisation détaillée des coûts par poste

### 9️⃣ Équipe
Porteur et auteurs du projet + partenaires

### 🔟 Documents
Accès à la documentation :
1. Synthèse du projet
2. Méthodologie de sélection des échantillons WGS
3. Budget
4. Présentation du projet

---

## 🚀 Installation et utilisation

### Prérequis
- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- Pas de dépendances externes requises

### Démarrage local

```bash
# 1. Cloner le repository
git clone https://github.com/patrick-mun/Genome-Reunion-page.git
cd Genome-Reunion-page

# 2. Ouvrir dans un navigateur
# Option A : Serveur local simple
python -m http.server 8000
# Puis ouvrir http://localhost:8000

# Option B : Ouvrir directement le fichier
open index.html
```

### Déploiement

Le site est déployable sur n'importe quel hébergement web statique :
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Etc.

---

## ✏️ Modification du contenu

### Éditer le contenu HTML
```bash
# Éditez directement index.html
vim index.html
```

### Modifier les styles
```bash
# Tous les styles sont dans css/styles.css
# Utilisez les variables CSS pour la cohérence
```

### Ajouter du JavaScript
```bash
# Ajoutez vos scripts dans js/script.js
# Ou liez d'autres fichiers JS via <script>
```

### Mettre à jour le logo
```bash
# Remplacez assets/logo.svg et assets/favicon.svg
# Hard refresh du navigateur (Ctrl+Shift+R)
```

---

## 📊 Statistiques du site

- **HTML** : ~1 000 lignes
- **CSS** : 650+ lignes (séparé)
- **JavaScript** : Minimaliste (démonstration)
- **Assets** : 2 fichiers SVG
- **Temps de chargement** : < 2s (optimisé)

---

## 🔗 Ressources externes

Tous les documents sont accessibles en ligne :

| Document | URL | Description |
|----------|-----|-------------|
| Synthèse du projet | [patrick-mun.github.io/IT-and-reseach-cost-/dossier.html](https://patrick-mun.github.io/IT-and-reseach-cost-/dossier.html) | Document scientifique complet |
| Méthodologie WGS | [patrick-mun.github.io/IT-and-reseach-cost-/METHODOLOGY_selection_V3_5%20(3).html](https://patrick-mun.github.io/IT-and-reseach-cost-/METHODOLOGY_selection_V3_5%20(3).html) | Sélection et phasage |
| Budget | [patrick-mun.github.io/IT-and-reseach-cost-/](https://patrick-mun.github.io/IT-and-reseach-cost-/) | Dossier de faisabilité |
| Présentation | [patrick-mun.github.io/genome_reunion/](https://patrick-mun.github.io/genome_reunion/) | Slides (42 pages) |

---

## 📝 Commits importants

| Commit | Description |
|--------|-------------|
| `645c309` | Mettre à jour les titres des cartes documents |
| `78916d9` | Réorganiser l'ordre des cartes documents |
| `f8f8c17` | Corriger les couleurs des scénarios budgétaires |
| `fa9448b` | Remplacer le logo texte par le logo SVG officiel |
| `20cca77` | Refactoriser le contenu : séparer CSS/JS du HTML |

Voir `git log --oneline` pour l'historique complet.

---

## 🔐 Sécurité

- ✅ Pas de dépendances npm requises (zéro supply chain risk)
- ✅ HTML, CSS, JS vanille
- ✅ Liens externes vers HTTPS uniquement
- ✅ Pas d'API backend requise

---

## 📄 Licence et Statut

**Statut** : Document de travail scientifique, non destiné à diffusion grand public

**Version** : V3.5 géo-ancestrale (pools témoins EGA + 1000G)

**Date** : Juin 2026

**Porteur** : Laboratoire de Génétique, CHU de La Réunion

---

## 👥 Équipe

- **Patrick MUNIER** — Service de génétique moléculaire, CHU de La Réunion
- **Dr Thomas HUBY** — Responsable du service, CHU de La Réunion
- **Susie GUILLY** — Ingénieure, Service de génétique moléculaire
- **Dr Fanny FERROUL** — Service de Génétique Médicale, CHU de La Réunion

---

## 🤝 Partenaires

- **POPgen** — Prise en charge intégrale du séquençage WGS (350 individus, 0 €)
- **CNG, GenomEast, CNRGH** — Plateformes de génotypage (sous-traitance)
- **EFS** — Établissement Français du Sang (donneurs volontaires)

---

## 📞 Support et documentation

Pour les détails de développement, consultez [`SESSION.md`](SESSION.md).

---

**Version du site** : 1.0  
**Dernière mise à jour** : Juin 2026  
**Repository** : [github.com/patrick-mun/Genome-Reunion-page](https://github.com/patrick-mun/Genome-Reunion-page)
