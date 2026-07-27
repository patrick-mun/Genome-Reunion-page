# Génome Réunion — Référentiel génomique de La Réunion

Site web officiel du projet **Génome Réunion**, un référentiel génomique local pour la population réunionnaise, porté par le **Laboratoire de Génétique du CHU de La Réunion**.

---

## Site en ligne

**[https://patrick-mun.github.io/Genome-Reunion-page/](https://patrick-mun.github.io/Genome-Reunion-page/)**

---

## À propos du projet

**Génome Réunion** vise à construire le **premier référentiel génomique dédié à la population réunionnaise** — une population admixée et fondatrice, quasi absente des bases de données génomiques internationales (gnomAD, 1000 Genomes).

### Objectifs

- **2 500 individus** génotypés sur puce SNP (~1,9 M SNP)
- **350 WGS** sélectionnés via algorithme S_div (pris en charge par POPgen — 0 €)
- **100 familles** nucléaires pour phasage haplotypique
- **4 modules IA** cliniques (pathogénicité, pharmacogénétique, admixture, PRS)
- **36 mois** de développement · Version V3.5 géo-ancestrale · Juin 2026

### Budget

- **Scénario Minimal** : ~1 403 000 € (sous-traitance + cloud hybride + Prop. RH 2)
- **Scénario Maximal** : ~1 709 000 € (iScan + on-premise + Prop. RH 2)

---

## Structure du projet

```
Genome-Reunion-page/
├── index.html                          # Page principale (GitHub Pages)
├── template/                           # Documents HTML
│   ├── methodologie.html               # Page d'aiguillage vers les documents méthodologiques
│   ├── GENOME_REUNION_justification_choix_Sdiv.html
│   ├── GLOSSAIRE_parametres.html
│   ├── METHODOLOGIE_validation_protocole_v1_5.html
│   ├── METHODOLOGIE_validation_annexeB_simulation_v1_5.html
│   ├── Genome_Reunion_synthese_scientifique (14) (6).html
│   ├── Genome_Reunion_Landing_v4.html
│   ├── Genome_Reunion_Participer_v4.html
│   ├── feder.html                      # Demande de financement FEDER
│   ├── financement.html                # Page financement
│   ├── presentation.html               # Page présentation
│   ├── communication.html              # Supports de communication
│   ├── architecture_pipeline.html      # Architecture du pipeline de validation
│   ├── Genome_Reunion_synthese_infrastructure_v5_4.html
│   └── Stratégie visuelle Genome Reunion - Standalone.html  # Bundle auto-extractible, alimente l'onglet Communication
├── css/
│   └── styles.css                      # Feuille de styles
├── js/
│   └── script.js                       # Scripts interactifs
├── assets/
│   ├── logo.svg                        # Logo officiel
│   └── favicon.svg                     # Favicon
└── data/
    ├── Dossier_FEDER_Genome_Reunion_iScan_IT.docx
    └── Annexe_FEDER_Genome_Reunion_iScan_IT.xlsx
```

---

## Documents disponibles

| Document | URL |
|----------|-----|
| Synthèse du projet (V3.5) | [Voir](https://htmlpreview.github.io/?https://github.com/patrick-mun/Genome-Reunion-page/blob/main/template/Genome_Reunion_synthese_scientifique%20(14)%20(6).html) |
| Justification du choix S_div (V3.5) | [Voir](https://htmlpreview.github.io/?https://github.com/patrick-mun/Genome-Reunion-page/blob/main/template/GENOME_REUNION_justification_choix_Sdiv.html) |
| Glossaire des paramètres | [Voir](https://htmlpreview.github.io/?https://github.com/patrick-mun/Genome-Reunion-page/blob/main/template/GLOSSAIRE_parametres.html) |
| Protocole de validation (v1.5) | [Voir](https://htmlpreview.github.io/?https://github.com/patrick-mun/Genome-Reunion-page/blob/main/template/METHODOLOGIE_validation_protocole_v1_5.html) |
| Annexe B — simulation (v1.5) | [Voir](https://htmlpreview.github.io/?https://github.com/patrick-mun/Genome-Reunion-page/blob/main/template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html) |
| Page d'aiguillage méthodologie | [Voir](https://patrick-mun.github.io/Genome-Reunion-page/template/methodologie.html) |
| Budget | [Voir](https://patrick-mun.github.io/IT-and-reseach-cost-/) |
| Présentation (42 slides) | [Voir](https://patrick-mun.github.io/genome_reunion/) |
| Synthèse infrastructure logicielle v5.4 | [Voir](https://htmlpreview.github.io/?https://github.com/patrick-mun/Genome-Reunion-page/blob/main/template/Genome_Reunion_synthese_infrastructure_v5_4.html) |
| Architecture pipeline de validation | [Voir](https://htmlpreview.github.io/?https://github.com/patrick-mun/Genome-Reunion-page/blob/main/template/architecture_pipeline.html) |
| Demande de financement FEDER | [Voir](https://patrick-mun.github.io/Genome-Reunion-page/template/feder.html) |
| Financement | [Voir](https://patrick-mun.github.io/Genome-Reunion-page/template/financement.html) |
| Présentation (page) | [Voir](https://patrick-mun.github.io/Genome-Reunion-page/template/presentation.html) |
| Communication | [Voir](https://patrick-mun.github.io/Genome-Reunion-page/template/communication.html) |

---

## Démarrage local

```bash
git clone https://github.com/patrick-mun/Genome-Reunion-page.git
cd Genome-Reunion-page
python -m http.server 8000
# Ouvrir http://localhost:8000
```

---

## Équipe

- **Patrick MUNIER** — Service de génétique moléculaire, CHU de La Réunion
- **Dr Thomas HUBY** — Responsable génétique moléculaire, CHU de La Réunion
- **Susie GUILLY** — Ingénieure, Service de génétique moléculaire
- **Dr Fanny FERROUL** — Service de Génétique Médicale, CHU de La Réunion

## Partenaires

- **POPgen** — Séquençage WGS 350 individus (0 € pour le laboratoire)
- **CNG · GenomEast · CNRGH** — Plateformes de génotypage
- **EFS** — Établissement Français du Sang (donneurs volontaires)

---

**Statut** : Document de travail scientifique · Version V3.5 géo-ancestrale · Juin 2026  
**Repository** : [github.com/patrick-mun/Genome-Reunion-page](https://github.com/patrick-mun/Genome-Reunion-page)
