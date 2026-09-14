# Génome Réunion — Plan de développement du dossier CNIL / RGPD

**Projet :** Génome Réunion  
**Porteur scientifique :** CHU de La Réunion — Service de génétique moléculaire  
**Document :** plan maître de développement et de suivi réglementaire  
**Version :** 0.5  
**Date de mise à jour :** 14 septembre 2026  
**Statut :** document de travail évolutif

---

## 1. Règles de travail

1. Ne jamais présumer qu'une méthodologie de référence CNIL s'applique.
2. Distinguer : **décidé / envisagé / à confirmer / à arbitrer / validé**.
3. Employer **pseudonymisé** et non « pseudo-anonymisé » lorsqu'un lien avec l'identité peut être restauré.
4. Séparer la phase populationnelle initiale des extensions cliniques, pharmacogénétiques, IA et nouvelles cohortes.
5. Toute décision structurante doit être tracée dans le journal des décisions.

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
| 2 | Qualification RNIPH / MR-004 | 🟨 | lever les verrous de la grille MR-004 |
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

### Livrables

- `CNIL_02_QUALIFICATION_REGLEMENTAIRE.md`
- `CNIL_02A_SOURCES_EXTERNES_REFERENCE.md`
- `CNIL_02B_GRILLE_CONFORMITE_MR004.md`

## 4.1 Hypothèse actuelle

> **Hypothèse forte : la phase initiale est une RNIPH et la MR-004 constitue le cadre CNIL principal à tester.**

Cette hypothèse reste soumise à validation DRCI / DPO.

## 4.2 Résultat de la grille MR-004

Aucune incompatibilité certaine avec la MR-004 n'est identifiée à ce stade.

Les principaux verrous sont :

- [ ] **qualification RNIPH formellement validée par la DRCI** ;
- [ ] **responsable de traitement identifié** ;
- [ ] **base légale RGPD validée par le DPO** ;
- [ ] **protocole réglementaire unique rédigé et validé scientifiquement** ;
- [ ] **KING / parenté explicitement limité à l'analyse de structure et au contrôle de parenté, sans finalité d'identification ou de ré-identification** ;
- [ ] **rôles EFS / CRB / POPgen / plateformes qualifiés** ;
- [ ] **dictionnaire des données et justification de minimisation** ;
- [ ] **information spécifique génétique conforme au CSP actuel** ;
- [ ] **durée de conservation de l'étude MR-004 séparée de la future ressource durable** ;
- [ ] **architecture de sécurité finalisée** ;
- [ ] **AIPD réalisée sans risque résiduel élevé** ;
- [ ] **vérification de l'engagement MR-004 du CHU et inscription au registre / répertoire public**.

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

## Étape 2.2 — Protocole réglementaire

- [ ] transformer la documentation scientifique existante en protocole MR-004 unique ;
- [ ] intégrer finalités, personnes, données, sources, méthode et durée ;
- [ ] intégrer 1000G / EGA comme sources externes ;
- [ ] préciser explicitement que KING n'a aucune finalité d'identification / ré-identification.

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
- [ ] convertir les lignes 🟧 / 🟨 en ✅ ou 🟦 validé ;
- [ ] si une exigence reste incompatible : analyser une demande d'autorisation spécifique ;
- [ ] sinon : préparer la mise en œuvre sous MR-004.

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
| S04 | Responsable de traitement | 🟧 | DPO / DRCI / juridique |
| S05 | Base légale | 🟧 | DPO |
| S06 | Protocole réglementaire | 🟨 | formaliser le corpus scientifique |
| S07 | KING / parenté | 🟧 | verrouiller la finalité non-identifiante |
| S08 | 1000G / EGA | 🟨 | annexe sources + DAC / DAA |
| S09 | Acteurs / contrats | 🟧 | Phase 3 |
| S10 | Dictionnaire de données | 🟨 | Phase 4 |
| S11 | Pseudonymisation | 🟦 | modèle EFS établi, formalisation Phase 5 |
| S12 | Ressource durable | 🟧 | cadre distinct à définir |
| S13 | Infrastructure | 🟨 | Phase 7 |
| S14 | AIPD | 🟧 | Phase 10 |
| S15 | Volet 100 familles | 🟧 | qualification séparée avant intégration |
| S16 | IA / clinique / AURAGEN | ⛔ | extensions futures |

---

# 8. Prochaine étape active

## **Étape 2.1 — Responsable de traitement et base légale**

Avant d'approfondir les documents participants ou l'AIPD, il faut déterminer :

1. qui est juridiquement responsable du traitement ;
2. si le CHU a déjà déclaré sa conformité à la MR-004 ;
3. quelle base légale article 6 RGPD sera retenue ;
4. quelle condition article 9 RGPD fonde le traitement des données génétiques.

---

# 9. Journal des décisions

| Date | Décision / constat | Statut | Impact |
|---|---|---|---|
| 2026-09-14 | Circuit EFS → CRB fonctionnellement clôturé. | ✅ | Phase 1 |
| 2026-09-14 | Hypothèse principale : RNIPH. | 🟦 | validation DRCI |
| 2026-09-14 | MR-004 retenue comme cadre principal à tester. | 🟦 | Phase 2 |
| 2026-09-14 | 1000G / EGA sont intégrés comme panels externes de référence dans la même étude, avec traçabilité dédiée. | ✅ méthode | protocole / annexe sources |
| 2026-09-14 | Grille MR-004 réalisée : aucune incompatibilité certaine, plusieurs verrous à lever. | ✅ | plan de conformité |
| 2026-09-14 | KING doit être décrit comme outil d'estimation / contrôle de parenté sans finalité d'identification ou ré-identification. | 🟧 à formaliser | condition MR-004 critique |
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
