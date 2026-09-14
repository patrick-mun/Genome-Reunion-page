# Génome Réunion — Plan de développement du dossier CNIL / RGPD

**Projet :** Génome Réunion  
**Porteur scientifique :** CHU de La Réunion — Service de génétique moléculaire  
**Document :** plan maître de développement et de suivi réglementaire  
**Version :** 0.4  
**Date de mise à jour :** 14 septembre 2026  
**Statut :** document de travail évolutif

---

## 1. Objectif

Ce fichier est la **feuille de route unique** de construction du dossier CNIL / RGPD de Génome Réunion.

Il sert à ordonner les travaux, suivre les arbitrages DPO / DRCI / DSIO / CRB / EFS, tracer les décisions et éviter de rédiger trop tôt des documents dépendant de décisions non stabilisées.

### Règles de travail

1. Ne jamais présumer qu’une méthodologie de référence CNIL s’applique.
2. Distinguer systématiquement : **décidé / envisagé / à confirmer / à arbitrer / validé**.
3. Employer **pseudonymisé** et non « pseudo-anonymisé » lorsqu’un lien avec l’identité peut être restauré.
4. Séparer la phase populationnelle initiale des extensions cliniques, pharmacogénétiques, IA et nouvelles cohortes.
5. Toute décision structurante doit être enregistrée dans le journal des décisions.

### Statuts

| Symbole | Statut |
|---|---|
| ⬜ | À faire |
| 🟨 | En cours |
| 🟧 | Bloqué |
| 🟦 | Hypothèse forte / à valider institutionnellement |
| ✅ | Validé |
| ⛔ | Hors phase initiale |

---

# 2. Vue d’ensemble

| Phase | Objet | Statut | Prochaine action |
|---|---|---:|---|
| 0 | Cadrage et corpus documentaire | ✅ | maintenir les sources |
| 1 | Circuit recrutement / EFS / CRB | ✅ fonctionnellement | validation institutionnelle ultérieure |
| 2 | Qualification RIPH / non-RIPH et cadre CNIL | 🟨 | tester la conformité complète MR-004 |
| 3 | Acteurs, responsabilités et conventions | ⬜ | après Phase 2 |
| 4 | Données et minimisation | ⬜ | dictionnaire des variables |
| 5 | Flux détaillés et pseudonymisation | ⬜ | cartographie complète |
| 6 | Échantillons biologiques / CRB | ⬜ | cadre de banque et retrait |
| 7 | Infrastructure, sécurité et hébergement | ⬜ | architecture de production |
| 8 | Gouvernance, accès et publication | ⬜ | DAC et niveaux d’accès |
| 9 | Information, droits et conservation | ⬜ | après stabilisation du traitement |
| 10 | AIPD / DPIA | ⬜ | après flux + sécurité |
| 11 | Dossier réglementaire complet | ⬜ | assembler les éléments validés |
| 12 | Validation institutionnelle et formalités | ⬜ | DRCI / DPO / CPP / CNIL selon cadre |
| 13 | Checklist avant collecte | ⬜ | validation finale |
| 14 | Ouverture contrôlée aux chercheurs | ⬜ | après gouvernance |
| 15 | Extensions futures | ⛔ | analyses réglementaires séparées |

---

# 3. Phase 0 — Cadrage et corpus documentaire

**Statut : ✅**

Principales sources :

- `README.md`
- `template/Genome_Reunion_synthese_scientifique (14) (6).html`
- `template/METHODOLOGIE_validation_protocole_v1_5.html`
- `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html`
- `template/GENOME_REUNION_justification_choix_Sdiv.html`
- `template/Genome_Reunion_synthese_infrastructure_v5_4.html`
- `template/architecture_pipeline.html`
- documents EFS / CRB / conventions à intégrer lorsqu’ils seront disponibles.

---

# 4. Phase 1 — Circuit recrutement / EFS / CRB

**Statut : ✅ Fonctionnellement clôturée**  
**Livrable :** `CNIL_01_CIRCUIT_EFS_PRELEVEMENT.md`

## Circuit retenu

1. Présentation du projet lors de l’entretien avec le médecin EFS.
2. Information du participant et accord écrit signé.
3. Aucun tube supplémentaire pour Génome Réunion.
4. Utilisation d’un reliquat de tube EDTA du circuit EFS.
5. L’EFS génère le code pseudonyme.
6. L’EFS conserve la table identité ↔ code.
7. Le CHU / CRB ne reçoit pas l’identité.
8. Transmission au CRB : tube codé + lieu / centre de prélèvement ; âge uniquement s’il est finalement jugé nécessaire.
9. Enregistrement CRB → extraction ADN → conservation en banque.
10. Aliquot d’ADN mis à disposition de l’équipe de recherche.

Les modalités de transport, convention, durée de conservation et retrait seront traitées dans les phases dédiées et ne bloquent plus la qualification réglementaire.

---

# 5. Phase 2 — Qualification RIPH / non-RIPH et cadre CNIL

**Statut : 🟨 En cours**  
**Livrable :** `CNIL_02_QUALIFICATION_REGLEMENTAIRE.md`

## 5.1 Hypothèse réglementaire actuelle

> **Hypothèse forte : phase initiale = RNIPH / non-RIPH ; MR-004 = méthodologie de référence principale à tester.**

Cette hypothèse reste soumise à validation DRCI / DPO.

### Arguments principaux

- [x] absence de prélèvement ou d’acte supplémentaire réalisé pour la recherche ;
- [x] utilisation secondaire d’un reliquat EDTA prélevé dans le cadre du don ;
- [x] information spécifique du participant ;
- [x] accord écrit ;
- [x] pseudonymisation avant transfert au CHU ;
- [x] identité conservée uniquement par l’EFS ;
- [x] production de données génétiques à partir d’un élément du corps prélevé à une autre fin ;
- [x] la MR-004 admet en principe les données génétiques strictement nécessaires à une RNIPH.

## 5.2 Vérification MR-004 à réaliser

Construire une grille :

**exigence MR-004 → situation Génome Réunion → conforme / à confirmer / non conforme → action**

Points à vérifier :

- [ ] caractère d’intérêt public ;
- [ ] responsable de traitement ;
- [ ] catégories de données autorisées ;
- [ ] justification scientifique de chaque variable ;
- [ ] information des participants ;
- [ ] droits ;
- [ ] pseudonymisation ;
- [ ] destinataires ;
- [ ] sous-traitants ;
- [ ] transferts ;
- [ ] sécurité ;
- [ ] durées de conservation ;
- [ ] AIPD ;
- [ ] registre du traitement ;
- [ ] enregistrement au répertoire public des recherches ;
- [ ] déclaration de conformité MR-004 ou nécessité d’autorisation spécifique.

## 5.3 Point génétique spécifique

Le recours à un reliquat prélevé à une autre fin fait entrer l’examen génétique dans le mécanisme spécifique prévu pour la recherche sur des éléments biologiques prélevés à d’autres fins.

À traiter :

- [ ] information relative à la finalité génétique ;
- [ ] opposition / retrait ;
- [ ] découvertes génétiques potentiellement pertinentes pour la santé ;
- [ ] possibilité de ne pas être informé de telles découvertes ;
- [ ] circuit via le médecin détenteur de l’identité si nécessaire.

## 5.4 Point critique — ressource durable

La MR-004 peut être adaptée à **l’étude initiale**, mais elle ne doit pas être considérée automatiquement comme couvrant une **ressource génomique durable multi-projets**.

Séparer :

### Étude initiale

- 2 500 SNP ;
- sélection des 350 ;
- 350 WGS ;
- structure populationnelle ;
- fréquences ;
- référentiel initial.

**Hypothèse : RNIPH + MR-004.**

### Ressource durable

- conservation à long terme ;
- réutilisations successives ;
- chercheurs externes ;
- enrichissements ;
- nouveaux projets.

**Analyse réglementaire séparée nécessaire.**

## 5.5 Point critique — publication / ré-identification

- [ ] variants ultra-rares ;
- [ ] variants fondateurs ;
- [ ] petits sous-groupes ;
- [ ] haplotypes rares ;
- [ ] données familiales ;
- [ ] combinaison secteur + ascendance + variant.

La politique de publication devra empêcher qu’une diffusion publique permette la ré-identification.

## 5.6 Volet familles

Le volet 100 familles reste à qualifier séparément selon l’origine des échantillons et l’existence éventuelle d’un prélèvement spécifique.

---

# 6. Phase 3 — Acteurs, responsabilités et conventions

**Statut : ⬜**

Acteurs à qualifier : CHU, service de génétique, DRCI, DPO, DSIO, CRB, EFS, POPgen, plateformes de génotypage / séquençage, hébergeur éventuel et partenaires scientifiques.

**Livrable :** `CNIL_03_ACTEURS_RESPONSABILITES.md` + matrice RACI / RGPD.

---

# 7. Phase 4 — Données et minimisation

**Statut : ⬜**

À fixer : code participant, sexe, âge ou absence d’âge, lieu / secteur, ascendance déclarée, SNP, PCA, ADMIXTURE, KING, ROH, IBD, S_div, WGS, phasage, imputation, LAI et données familiales nécessaires.

Extensions cliniques, prescriptions, iatrogénie, protéomique, AURAGEN et IA sur données réelles restent **hors phase initiale**.

**Livrable :** `CNIL_04_DICTIONNAIRE_DONNEES.md`.

---

# 8. Phase 5 — Flux et pseudonymisation

**Statut : ⬜**

Documenter : **source → donnée → transformation → stockage → utilisateur → destination**.

Le modèle initial est déjà établi : **EFS détient identité + table ; CRB et recherche travaillent sur le code pseudonyme**.

**Livrable :** `CNIL_05_CARTOGRAPHIE_FLUX.md`.

---

# 9. Phase 6 — Échantillons biologiques / CRB

**Statut : ⬜**

À traiter : cadre réglementaire du CRB, déclaration du programme / collection si nécessaire, conservation, aliquotage, durée, destruction, retrait et réutilisation future.

**Livrable :** `CNIL_06_ECHANTILLONS_CRB.md`.

---

# 10. Phase 7 — Infrastructure, sécurité et hébergement

**Statut : ⬜**

À traiter : architecture on-premise / cloud / hybride, HDS, chiffrement, MFA, RBAC, logs, sauvegardes, restauration, segmentation, exports, transferts, incidents et violations.

**Livrable :** `CNIL_07_SECURITE_INFRASTRUCTURE.md`.

---

# 11. Phase 8 — Gouvernance, accès et publication

**Statut : ⬜**

À traiter : comité de gouvernance, comité scientifique, DAC, niveaux d’accès, analyses sur site, exports, variants rares et audits.

**Livrable :** `CNIL_08_GOUVERNANCE_ACCES.md`.

---

# 12. Phase 9 — Information, droits et conservation

**Statut : ⬜**

À traiter : notice, droits, retrait, découvertes incidentes, durées par catégorie de données et articulation avec les analyses déjà agrégées.

**Livrable :** `CNIL_09_DROITS_CONSERVATION.md`.

---

# 13. Phase 10 — AIPD / DPIA

**Statut : ⬜**

Méthode : **menace → événement redouté → probabilité → gravité → mesures → risque résiduel**.

**Livrable :** `CNIL_10_AIPD.md`.

---

# 14. Phases 11 à 15

- **11 — Dossier complet :** assembler uniquement les éléments validés.
- **12 — Validation institutionnelle :** DRCI, DPO, DSIO, CRB, EFS, juridique, formalités CNIL / CPP selon qualification.
- **13 — Avant collecte :** test à blanc et checklist complète.
- **14 — Avant ouverture chercheurs :** DAC, charte, environnement sécurisé, journalisation et politique d’export.
- **15 — Extensions futures :** clinique, pharmacogénétique, autres cohortes, protéomique, IA, océan Indien / DOM-TOM.

---

# 15. Tableau de suivi courant

| ID | Sujet | Statut | Prochaine action |
|---|---|---:|---|
| S01 | Corpus documentaire | ✅ | maintenir les sources |
| S02 | Circuit EFS / CRB | ✅ fonctionnellement | validation institutionnelle ultérieure |
| S03 | Qualification RIPH | 🟦 RNIPH probable | validation DRCI |
| S04 | MR applicable | 🟨 MR-004 à tester | grille exhaustive de conformité |
| S05 | Responsable de traitement | ⬜ | Phase 3 |
| S06 | Statut EFS | ⬜ | Phase 3 |
| S07 | Statut POPgen | ⬜ | Phase 3 |
| S08 | Volet familles | ⬜ | qualification séparée |
| S09 | Dictionnaire de données | ⬜ | Phase 4 |
| S10 | Pseudonymisation | 🟨 principe EFS établi | Phase 5 |
| S11 | Infrastructure | ⬜ | Phase 7 |
| S12 | HDS | ⬜ | Phase 7 |
| S13 | CRB / collection | 🟨 | Phase 6 |
| S14 | Durées de conservation | ⬜ | Phase 9 |
| S15 | Ressource durable | 🟧 cadre à distinguer de MR-004 | analyse dédiée |
| S16 | Gouvernance DAC | ⬜ | Phase 8 |
| S17 | AIPD | ⬜ | Phase 10 |
| S18 | Notice / document participant final | ⬜ | Phase 9 puis 11 |
| S19 | IA | ⛔ | extension future |
| S20 | Données cliniques | ⛔ | extension future |

---

# 16. Prochaine étape

## Phase active : **Phase 2 — grille de conformité MR-004**

La prochaine tâche est de vérifier la MR-004 **article par article / exigence par exigence** contre le projet Génome Réunion.

Aucune déclaration de conformité ne sera proposée avant cette vérification.

---

# 17. Journal des décisions

| Date | Décision / constat | Statut | Impact |
|---|---|---|---|
| 2026-09-14 | Développement du dossier section par section. | ✅ | méthode générale |
| 2026-09-14 | Circuit EFS → CRB décrit et minimisé. | ✅ fonctionnellement | Phase 1 clôturée |
| 2026-09-14 | L’EFS génère les codes et conserve seul la table identité ↔ code. | ✅ projet | pseudonymisation |
| 2026-09-14 | Le CRB reçoit tube codé + lieu de prélèvement ; âge seulement si nécessaire. | ✅ / âge à arbitrer | minimisation |
| 2026-09-14 | Hypothèse réglementaire principale : RNIPH. | 🟦 à valider DRCI | Phase 2 |
| 2026-09-14 | MR-004 retenue comme cadre principal à tester pour l’étude initiale. | 🟦 à vérifier exhaustivement | Phase 2 |
| 2026-09-14 | La ressource génomique durable ne sera pas considérée automatiquement couverte par la MR-004 initiale. | ✅ méthode de séparation | analyse réglementaire future dédiée |

---

# 18. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-09-14 | Création du plan maître |
| 0.2 | 2026-09-14 | Intégration du circuit EFS → CRB |
| 0.3 | 2026-09-14 | Codage EFS et minimisation des données transmises |
| 0.4 | 2026-09-14 | Phase 2 : hypothèse RNIPH + MR-004 et séparation de la ressource durable |
