# Génome Réunion — Plan de développement du dossier CNIL / RGPD

**Projet :** Génome Réunion  
**Porteur scientifique :** CHU de La Réunion — Service de génétique moléculaire  
**Document :** plan maître de développement et de suivi réglementaire  
**Version :** 0.6  
**Date de mise à jour :** 15 septembre 2026  
**Statut :** document de travail évolutif

---

## 1. Règles de travail

1. Ne jamais présumer qu'une méthodologie de référence CNIL s'applique.
2. Distinguer : **décidé / envisagé / à confirmer / à arbitrer / validé**.
3. Employer **pseudonymisé** et non « pseudo-anonymisé » lorsqu'un lien avec l'identité peut être restauré.
4. Séparer la phase populationnelle initiale des extensions cliniques, pharmacogénétiques, IA et nouvelles cohortes.
5. Toute décision structurante doit être tracée dans le journal des décisions.
6. Le dossier de travail MR-004 est désormais structuré selon le **Starter Kit MR-004 de la Plateforme des données de santé**, avec séparation entre pièces constitutives et preuves de conformité à conserver.
7. Le dépôt GitHub étant public, les preuves confidentielles ou nominatives ne doivent jamais y être stockées ; seules les trames, index et versions expurgées peuvent y figurer.

### Statuts

| Symbole | Statut |
|---|---|
| ⬜ | À faire |
| 🟨 | En cours |
| 🟧 | Verrou / décision nécessaire |
| 🟦 | Hypothèse forte / à valider institutionnellement |
| ✅ | Validé ou fonctionnellement établi |
| ⛔ | Hors phase initiale |

---

# 2. Vue d'ensemble

| Phase | Objet | Statut | Prochaine action |
|---|---|---:|---|
| 0 | Cadrage et corpus documentaire | ✅ | maintenir les sources |
| 1 | Circuit recrutement / EFS / CRB | ✅ fonctionnellement | validation institutionnelle ultérieure |
| 2 | Qualification RNIPH / MR-004 | 🟨 | consolider le protocole Starter Kit et lever les verrous institutionnels |
| 3 | Acteurs, responsabilités et conventions | ⬜ | responsable de traitement puis rôles EFS/CRB/POPgen |
| 4 | Données et minimisation | ⬜ | dictionnaire des variables |
| 5 | Flux détaillés et pseudonymisation | ⬜ | cartographie complète |
| 6 | Échantillons biologiques / CRB | ⬜ | conservation, retrait, aliquotage |
| 7 | Infrastructure, sécurité et hébergement | ⬜ | architecture de production |
| 8 | Gouvernance, accès et publication | ⬜ | DAC et variants rares |
| 9 | Information, droits et conservation | ⬜ | notice et procédures |
| 10 | AIPD / DPIA | ⬜ | après flux + sécurité |
| 11 | Dossier réglementaire complet | ⬜ | assembler les éléments validés |
| 12 | Validation institutionnelle et formalités | ⬜ | DRCI / DPO / CNIL selon résultat |
| 13 | Checklist avant collecte | ⬜ | validation finale |
| 14 | Ouverture contrôlée aux chercheurs | ⬜ | après gouvernance |
| 15 | Extensions futures | ⛔ | analyses réglementaires séparées |

---

# 3. Phase 1 — Circuit EFS / CRB

**Statut : ✅ Fonctionnellement clôturée**  
**Livrable :** `CNIL_01_CIRCUIT_EFS_PRELEVEMENT.md`

Circuit retenu :

1. information du donneur lors de l'entretien avec le médecin EFS ;
2. accord écrit signé ;
3. aucun tube supplémentaire pour Génome Réunion ;
4. utilisation d'un reliquat EDTA EFS ;
5. code pseudonyme généré par l'EFS ;
6. table identité ↔ code conservée par l'EFS ;
7. CHU / CRB sans accès à l'identité ;
8. transfert : tube codé + centre de prélèvement ; âge uniquement si nécessaire ;
9. CRB : enregistrement → extraction → banque ADN ;
10. aliquot d'ADN pour les analyses autorisées.

---

# 4. Phase 2 — Qualification RNIPH / MR-004

**Statut : 🟨 En cours**

### Livrables déjà créés

- `CNIL_02_QUALIFICATION_REGLEMENTAIRE.md`
- `CNIL_02A_SOURCES_EXTERNES_REFERENCE.md`
- `CNIL_02B_GRILLE_CONFORMITE_MR004.md`
- `CNIL_02C_METHODES_ANALYTIQUES_MR004.md`

### Structure Starter Kit

Le dossier `cnil-mr004/` devient la structure réglementaire principale de travail :

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
│   └── 08_securite_aipd.md
└── 02_preuves_a_conserver/
    ├── README.md
    ├── 01_formalites_registre.md
    ├── 02_information_droits.md
    ├── 03_contrats_conventions.md
    ├── 04_securite_aipd_audits.md
    ├── 05_sources_externes_ega_1000g.md
    ├── 06_validation_scientifique_versions.md
    └── 07_crb_echantillons.md
```

## 4.1 Hypothèse actuelle

> **Hypothèse forte : la phase initiale est une RNIPH et la MR-004 constitue le cadre CNIL principal à tester.**

Cette hypothèse reste soumise à validation DRCI / DPO.

## 4.2 Résultat de la grille MR-004

Aucune incompatibilité certaine avec la MR-004 n'est identifiée à ce stade.

Les principaux verrous restent :

- [ ] **qualification RNIPH formellement validée par la DRCI** ;
- [ ] **responsable de traitement identifié** ;
- [ ] **base légale RGPD validée par le DPO** ;
- [ ] **protocole réglementaire unique rédigé et validé scientifiquement** ;
- [ ] **rôles EFS / CRB / POPgen / plateformes qualifiés** ;
- [ ] **dictionnaire des données et justification de minimisation** ;
- [ ] **information spécifique génétique conforme au CSP actuel** ;
- [ ] **durée de conservation de l'étude MR-004 séparée de la future ressource durable** ;
- [ ] **architecture de sécurité finalisée** ;
- [ ] **AIPD réalisée sans risque résiduel élevé** ;
- [ ] **vérification de l'engagement MR-004 du CHU et inscription au registre / répertoire public**.

### Position corrigée sur KING

KING est un **outil analytique de quantification / contrôle de parenté entre échantillons pseudonymisés**. Il n'est pas utilisé pour identifier nominativement les participants. Il doit être documenté dans le protocole comme méthode analytique, sans être considéré comme un verrou MR-004 en soi. Le risque lié aux inférences de parenté reste à traiter dans l'AIPD et la gouvernance.

## 4.3 Sources externes

1000G / IGSR et les datasets EGA nécessaires peuvent être intégrés au même traitement scientifique comme **panels externes de référence**, sous réserve de :

- les décrire dans le protocole ;
- documenter leur rôle analytique ;
- limiter les données importées au nécessaire ;
- respecter les conditions DAC / DAA propres à chaque dataset EGA ;
- ne pas transformer un panel externe en nouvelle cohorte étudiée pour elle-même sans réévaluation réglementaire.

## 4.4 Frontière avec la ressource durable

La MR-004 est évaluée pour **l'étude initiale** :

- 2 500 SNP ;
- sélection des 350 ;
- 350 WGS ;
- structure populationnelle ;
- fréquences ;
- référentiel initial.

La future ressource durable multi-projets devra disposer d'un cadre distinct ou complémentaire. Elle ne sera pas considérée automatiquement couverte par cette MR-004.

---

# 5. Ordre de travail retenu pour terminer la Phase 2

## Étape 2.1 — Responsable de traitement et base légale

- [ ] identifier formellement le responsable de traitement ;
- [ ] vérifier si le CHU dispose déjà d'un engagement de conformité MR-004 ;
- [ ] valider la base légale article 6 RGPD ;
- [ ] valider l'exception article 9 pour données génétiques / santé.

## Étape 2.2 — Protocole Starter Kit MR-004

- [ ] compléter `cnil-mr004/01_dossier_mr004/01_protocole_scientifique_mr004.md` ;
- [ ] intégrer finalités, personnes, données, sources, méthodes et calendrier ;
- [ ] intégrer 1000G / EGA comme sources externes ;
- [ ] intégrer les méthodes analytiques déjà documentées ;
- [ ] faire valider scientifiquement le protocole.

## Étape 2.3 — Données et acteurs

- [ ] dictionnaire des données ;
- [ ] justification scientifique variable par variable ;
- [ ] acteurs / destinataires / sous-traitants ;
- [ ] conventions / contrats.

## Étape 2.4 — Droits, conservation, sécurité

- [ ] information génétique ;
- [ ] droits / opposition / retrait ;
- [ ] durées ;
- [ ] séparation étude / ressource durable ;
- [ ] sécurité ;
- [ ] AIPD.

## Étape 2.5 — Contrôle final

- [ ] reprendre chaque ligne de `CNIL_02B_GRILLE_CONFORMITE_MR004.md` ;
- [ ] vérifier l'existence des preuves correspondantes dans l'inventaire `cnil-mr004/02_preuves_a_conserver/` ;
- [ ] si une exigence reste incompatible : analyser une demande d'autorisation spécifique ;
- [ ] sinon : préparer la mise en œuvre sous MR-004 et l'enregistrement dans le répertoire public PDS.

---

# 6. Phases suivantes

## Phase 3 — Acteurs et responsabilités

CHU, EFS, CRB, POPgen, plateformes, hébergeur, partenaires scientifiques.  
**Livrable :** `CNIL_03_ACTEURS_RESPONSABILITES.md` + matrice RACI / RGPD.

## Phase 4 — Données et minimisation

Code, sexe, âge éventuel, centre / secteur, ascendance déclarée, SNP, WGS, PCA, ADMIXTURE, KING, ROH, IBD, S_div, phasage, imputation, LAI.  
**Livrable :** `CNIL_04_DICTIONNAIRE_DONNEES.md`.

## Phase 5 — Flux et pseudonymisation

**source → donnée → transformation → stockage → utilisateur → destination**.  
**Livrable :** `CNIL_05_CARTOGRAPHIE_FLUX.md`.

## Phase 6 — Échantillons biologiques / CRB

Conservation, aliquotage, retrait, destruction, réutilisation.  
**Livrable :** `CNIL_06_ECHANTILLONS_CRB.md`.

## Phase 7 — Infrastructure / sécurité

Hébergement, chiffrement, MFA, RBAC, logs, sauvegardes, transferts, incidents.  
**Livrable :** `CNIL_07_SECURITE_INFRASTRUCTURE.md`.

## Phase 8 — Gouvernance / accès

DAC, niveaux d'accès, variants rares, publication.  
**Livrable :** `CNIL_08_GOUVERNANCE_ACCES.md`.

## Phase 9 — Information / droits / conservation

Notice, opposition, retrait, résultats génétiques, durées.  
**Livrable :** `CNIL_09_DROITS_CONSERVATION.md`.

## Phase 10 — AIPD

**menace → événement redouté → probabilité → gravité → mesures → risque résiduel**.  
**Livrable :** `CNIL_10_AIPD.md`.

---

# 7. Tableau de suivi courant

| ID | Sujet | Statut | Prochaine action |
|---|---|---:|---|
| S01 | Circuit EFS / CRB | ✅ | validation institutionnelle ultérieure |
| S02 | Qualification RNIPH | 🟦 | validation DRCI |
| S03 | Grille MR-004 | ✅ réalisée | lever les verrous |
| S04 | Structure Starter Kit MR-004 | ✅ créée | remplir progressivement les pièces |
| S05 | Responsable de traitement | 🟧 | DPO / DRCI / juridique |
| S06 | Base légale | 🟧 | DPO |
| S07 | Protocole réglementaire | 🟨 | compléter la trame Starter Kit |
| S08 | KING / parenté | ✅ méthode analytique compatible en conception | documenter dans protocole + AIPD |
| S09 | 1000G / EGA | 🟨 | annexe sources + DAC / DAA |
| S10 | Acteurs / contrats | 🟧 | Phase 3 |
| S11 | Dictionnaire de données | 🟨 | Phase 4 |
| S12 | Pseudonymisation | 🟦 | modèle EFS établi, formalisation Phase 5 |
| S13 | Ressource durable | 🟧 | cadre distinct à définir |
| S14 | Infrastructure | 🟨 | Phase 7 |
| S15 | AIPD | 🟧 | Phase 10 |
| S16 | Volet 100 familles | 🟧 | qualification séparée avant intégration |
| S17 | IA / clinique / AURAGEN | ⛔ | extensions futures |

---

# 8. Prochaine étape active

## **Étape 2.1 — Responsable de traitement et base légale**

Avant d'approfondir les documents participants ou l'AIPD, il faut déterminer :

1. qui est juridiquement responsable du traitement ;
2. si le CHU a déjà déclaré sa conformité à la MR-004 ;
3. quelle base légale article 6 RGPD sera retenue ;
4. quelle condition article 9 RGPD fonde le traitement des données génétiques.

En parallèle, le protocole scientifique MR-004 peut être complété à partir du corpus existant.

---

# 9. Journal des décisions

| Date | Décision / constat | Statut | Impact |
|---|---|---|---|
| 2026-09-14 | Circuit EFS → CRB fonctionnellement clôturé. | ✅ | Phase 1 |
| 2026-09-14 | Hypothèse principale : RNIPH. | 🟦 | validation DRCI |
| 2026-09-14 | MR-004 retenue comme cadre principal à tester. | 🟦 | Phase 2 |
| 2026-09-14 | 1000G / EGA sont intégrés comme panels externes de référence dans la même étude, avec traçabilité dédiée. | ✅ méthode | protocole / annexe sources |
| 2026-09-14 | Grille MR-004 réalisée : aucune incompatibilité certaine, plusieurs verrous à lever. | ✅ | plan de conformité |
| 2026-09-15 | KING est reclassé comme méthode analytique de parenté sur données pseudonymisées, et non comme verrou MR-004. | ✅ | protocole + AIPD |
| 2026-09-15 | Structure de dossier fondée sur le Starter Kit MR-004 créée dans `cnil-mr004/`. | ✅ | structure documentaire de référence |
| 2026-09-15 | Les preuves confidentielles seront conservées hors GitHub public dans un espace institutionnel sécurisé. | ✅ | sécurité documentaire |
| 2026-09-14 | La ressource durable reste séparée du traitement initial MR-004. | ✅ méthode | cadre futur distinct |

---

# 10. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-09-14 | Création du plan maître |
| 0.2 | 2026-09-14 | Circuit EFS → CRB |
| 0.3 | 2026-09-14 | Codage EFS et minimisation |
| 0.4 | 2026-09-14 | Hypothèse RNIPH + MR-004 et séparation ressource durable |
| 0.5 | 2026-09-14 | Grille de conformité MR-004 réalisée et ordre de levée des verrous défini |
| 0.6 | 2026-09-15 | Structure Starter Kit MR-004 créée, inventaire des preuves ajouté, KING reclassé comme méthode analytique |
