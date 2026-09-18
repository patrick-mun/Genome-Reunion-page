# Génome Réunion — Structure de dossier MR-004

**Référence de travail :** Starter Kit MR-004 de la Plateforme des données de santé (PDS / Health Data Hub)  
**Date :** 15 septembre 2026  
**Statut :** structure de travail évolutive

---

## 1. Objectif

Ce dossier organise les pièces à préparer pour la mise en œuvre de la phase initiale de **Génome Réunion** sous l’hypothèse **RNIPH / MR-004**.

Il sépare :

1. les **pièces constitutives du dossier de travail MR-004** ;
2. les **documents de preuve à conserver** pour démontrer la conformité si le DPO, la DRCI, la CNIL, la PDS ou un auditeur les demande.

> **Important : ce dépôt GitHub est public.** Aucune preuve confidentielle, donnée personnelle, convention signée, AIPD détaillée, architecture sensible, liste d’habilitations, journal d’accès ou document nominatif ne doit être déposé ici. Le dépôt ne contient que des trames, index et documents non sensibles. Les originaux doivent être conservés dans un espace institutionnel sécurisé du CHU.

---

## 2. Pièces du Starter Kit MR-004 à couvrir

La PDS met à disposition pour la MR-004 :

- un guide pédagogique ;
- une checklist de conformité MR-004 ;
- un modèle de protocole scientifique ;
- un modèle de note d’information individuelle ;
- une déclaration publique d’intérêt uniquement dans certains cas liés au SNDS.

Pour Génome Réunion, la structure de travail retenue est la suivante :

```text
cnil-mr004/
├── README.md
├── 01_dossier_mr004/
│   ├── 01_protocole_scientifique_mr004.md
│   ├── 02_checklist_conformite_mr004.md
│   ├── 03_note_information_individuelle.md
│   ├── 04_qualification_rniph_interet_public_base_legale.md
│   ├── 05_donnees_sources_methodes.md
│   ├── 06_acteurs_flux_responsabilites.md
│   ├── 07_conservation_gouvernance.md
│   ├── 08_securite_aipd.md
│   └── 09_suivi_interne_et_journal.md
└── 02_preuves_a_conserver/
    ├── README.md
    ├── 01_formalites_registre.md
    ├── 02_information_droits.md
    ├── 03_contrats_conventions.md
    ├── 04_securite_aipd_audits.md
    ├── 05_sources_externes_ega_1000g.md
    └── 06_validation_scientifique_versions.md
```

---

## 3. Documents existants du dépôt à réutiliser

Les documents suivants alimentent directement cette structure et ne doivent pas être dupliqués inutilement :

- `CNIL_01_CIRCUIT_EFS_PRELEVEMENT.md`
- `CNIL_02_QUALIFICATION_REGLEMENTAIRE.md`
- `CNIL_02A_SOURCES_EXTERNES_REFERENCE.md`
- `CNIL_02B_GRILLE_CONFORMITE_MR004.md`
- `CNIL_02C_METHODES_ANALYTIQUES_MR004.md`
- `PLAN_DEVELOPPEMENT_DOSSIER_CNIL_RGPD.md`

Ils seront progressivement intégrés ou référencés dans le protocole réglementaire final.

---

## 4. Règle de classement

Chaque pièce doit porter au minimum :

- un titre ;
- une version ;
- une date ;
- un statut : brouillon / à valider / validé ;
- le propriétaire documentaire ;
- les validateurs attendus ;
- la référence aux pièces justificatives correspondantes.

Les preuves institutionnelles réelles doivent être indexées dans `02_preuves_a_conserver/`, mais stockées ailleurs si elles sont confidentielles.
