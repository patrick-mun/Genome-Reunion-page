# Génome Réunion — Plan de développement du dossier CNIL / RGPD

**Projet :** Génome Réunion  
**Porteur scientifique :** CHU de La Réunion — Service de génétique moléculaire  
**Document :** plan maître de développement et de suivi réglementaire  
**Version :** 0.2  
**Date de mise à jour :** 14 septembre 2026  
**Statut :** document de travail évolutif

---

## 1. Objectif

Ce fichier est la **feuille de route unique** de construction du dossier CNIL / RGPD de Génome Réunion.

Il sert à :

- ordonner les travaux ;
- éviter de rédiger trop tôt des documents dépendant de décisions non prises ;
- suivre les arbitrages DPO / DRCI / DSIO / CRB / EFS ;
- tracer les décisions ;
- identifier les livrables de chaque phase ;
- préparer l'ouverture de la collecte puis l'accès scientifique à la ressource.

Ce document n'est pas le dossier CNIL définitif.

---

## 2. Règles de travail

1. Ne jamais présumer qu'une méthodologie de référence CNIL s'applique.
2. Distinguer systématiquement : **décidé / envisagé / à confirmer / à arbitrer / validé**.
3. Ne jamais qualifier un génome individuel d'« anonyme » sans démonstration.
4. Employer **pseudonymisé** et non « pseudo-anonymisé » lorsqu'un lien avec l'identité peut être restauré par un acteur autorisé.
5. Séparer la phase populationnelle initiale des extensions cliniques, pharmacogénétiques, IA et nouvelles cohortes.
6. Toute décision structurante doit être enregistrée dans le journal des décisions.

### Statuts

| Symbole | Statut |
|---|---|
| ⬜ | À faire |
| 🟨 | En cours |
| 🟧 | Bloqué |
| 🟦 | Décrit / à valider institutionnellement |
| ✅ | Validé |
| ⛔ | Hors phase initiale |

---

# 3. Vue d'ensemble

| Phase | Objet | Statut | Prochaine action |
|---|---|---:|---|
| 0 | Cadrage et corpus documentaire | ✅ | maintenir les sources |
| 1 | Circuit recrutement / EFS / CRB | 🟦 | confirmer les points institutionnels restants |
| 2 | Qualification RIPH / non-RIPH et cadre CNIL | 🟨 | prochaine phase de travail |
| 3 | Acteurs, responsabilités et conventions | ⬜ | après première qualification Phase 2 |
| 4 | Données et minimisation | ⬜ | fixer le dictionnaire de données |
| 5 | Flux détaillés et pseudonymisation | ⬜ | cartographier tous les échanges |
| 6 | Échantillons biologiques / CRB | ⬜ | cadre de conservation et aliquotage |
| 7 | Infrastructure, sécurité et hébergement | ⬜ | architecture de production |
| 8 | Gouvernance, accès et publication | ⬜ | DAC et niveaux d'accès |
| 9 | Information, droits et conservation | ⬜ | après stabilisation du traitement |
| 10 | AIPD / DPIA | ⬜ | après flux + sécurité |
| 11 | Dossier réglementaire complet | ⬜ | assembler les éléments validés |
| 12 | Validation institutionnelle et formalités | ⬜ | DRCI / DPO / CPP / CNIL selon cadre |
| 13 | Checklist avant collecte | ⬜ | validation finale |
| 14 | Ouverture contrôlée aux chercheurs | ⬜ | après gouvernance |
| 15 | Extensions futures | ⛔ | mini-projets réglementaires séparés |

---

# 4. Phase 0 — Cadrage et corpus documentaire

**Statut : ✅**

### Réalisé

- [x] périmètre général du projet identifié ;
- [x] dépôt GitHub principal identifié ;
- [x] synthèse scientifique identifiée ;
- [x] méthodologies de sélection / validation identifiées ;
- [x] infrastructure logicielle identifiée ;
- [x] première cartographie réglementaire réalisée ;
- [x] circuit EFS identifié comme premier verrou à traiter.

### Sources projet structurantes

- `README.md`
- `template/Genome_Reunion_synthese_scientifique (14) (6).html`
- `template/METHODOLOGIE_validation_protocole_v1_5.html`
- `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html`
- `template/GENOME_REUNION_justification_choix_Sdiv.html`
- `template/Genome_Reunion_synthese_infrastructure_v5_4.html`
- `template/architecture_pipeline.html`
- documents EFS / CRB / conventions à ajouter lorsqu'ils seront disponibles.

---

# 5. Phase 1 — Circuit recrutement / EFS / CRB

**Statut : 🟦 Circuit décrit — validation institutionnelle restante**

**Livrable dédié :** `CNIL_01_CIRCUIT_EFS_PRELEVEMENT.md`

## 5.1 Circuit actuellement décrit

1. Le projet est expliqué au donneur **lors de l'entretien avec le médecin de l'EFS**.
2. Le participant donne un **accord écrit signé après explication du projet**.
3. Aucun tube supplémentaire n'est actuellement prévu spécifiquement pour Génome Réunion.
4. Le matériel utilisé est un **reliquat de tube EDTA** disponible à l'EFS.
5. Le reliquat est **pseudonymisé avant transfert**.
6. L'EFS transfère le prélèvement pseudonymisé au **CRB du CHU de La Réunion**.
7. Le CRB enregistre et trace le prélèvement.
8. Le prélèvement est dirigé vers un poste d'extraction.
9. L'ADN obtenu est conservé en banque par le CRB.
10. Le CRB réalise un **aliquot d'ADN** pour les analyses autorisées de l'équipe de recherche.

## 5.2 Points résolus

- [x] acteur présentant le projet : médecin EFS ;
- [x] principe d'information préalable ;
- [x] accord écrit signé ;
- [x] utilisation d'un reliquat de tube EDTA ;
- [x] absence de tube supplémentaire dans le circuit actuellement prévu ;
- [x] pseudonymisation avant transfert ;
- [x] transfert EFS → CRB ;
- [x] enregistrement CRB ;
- [x] extraction ADN ;
- [x] conservation de l'ADN en banque ;
- [x] aliquot destiné à l'équipe de recherche.

## 5.3 Points restant à confirmer

- [ ] qui attribue le premier identifiant pseudonyme ;
- [ ] où se trouve la table de correspondance identité ↔ code ;
- [ ] le CHU peut-il réidentifier ou seul l'EFS le peut-il ;
- [ ] quelles données non biologiques accompagnent le prélèvement ;
- [ ] moment exact de la signature par rapport au don ;
- [ ] conservation temporaire du tube avant transfert ;
- [ ] transport EFS → CRB : conditionnement, température, traçabilité ;
- [ ] convention EFS–CHU ;
- [ ] validation du cadre CRB pour ce stockage ;
- [ ] règles de retrait / destruction ;
- [ ] validation formelle du circuit par EFS / DRCI / DPO.

## 5.4 Critère de sortie

Le circuit opérationnel est suffisamment décrit pour **commencer la Phase 2**, mais la Phase 1 ne sera marquée ✅ qu'après validation institutionnelle des points ci-dessus.

---

# 6. Phase 2 — Qualification RIPH / non-RIPH et cadre CNIL

**Statut : 🟨 Prochaine phase active**

## Objectifs

- [ ] qualifier la cohorte principale au regard du Code de la santé publique ;
- [ ] analyser spécifiquement l'utilisation d'un reliquat de tube EDTA obtenu dans le cadre du don ;
- [ ] déterminer si le circuit relève d'une RIPH ou d'une recherche non-RIPH ;
- [ ] déterminer les conséquences sur la saisine éventuelle d'un CPP ;
- [ ] analyser MR-001 ;
- [ ] analyser MR-003 ;
- [ ] réserver MR-004 aux situations qui relèvent réellement de réutilisations non-RIPH ;
- [ ] identifier le cas échéant une nécessité d'autorisation CNIL spécifique ;
- [ ] distinguer consentement à la recherche, accord sur l'utilisation du reliquat et consentement requis pour l'examen des caractéristiques génétiques ;
- [ ] qualifier séparément le volet 100 familles si nécessaire.

### Livrable

- [ ] `CNIL_02_QUALIFICATION_REGLEMENTAIRE.md`
- [ ] arbre de décision RIPH / non-RIPH ;
- [ ] tableau MR-001 / MR-003 / MR-004 / autorisation spécifique ;
- [ ] points soumis à validation DRCI / DPO.

### Critère de sortie

Pouvoir rédiger une phrase institutionnellement validable décrivant la qualification réglementaire de la phase initiale.

---

# 7. Phase 3 — Acteurs, responsabilités et conventions

**Statut : ⬜**

### Acteurs

- [ ] CHU de La Réunion ;
- [ ] Service de génétique moléculaire ;
- [ ] DRCI ;
- [ ] DPO ;
- [ ] DSIO ;
- [ ] CRB ;
- [ ] EFS La Réunion ;
- [ ] POPgen ;
- [ ] plateformes de génotypage / séquençage ;
- [ ] hébergeur éventuel ;
- [ ] partenaires scientifiques.

### À déterminer pour chaque acteur

- [ ] finalités ;
- [ ] moyens essentiels ;
- [ ] données reçues ;
- [ ] accès ;
- [ ] réutilisation éventuelle ;
- [ ] durée de conservation ;
- [ ] rôle RGPD ;
- [ ] convention / contrat nécessaire.

### Livrable

- [ ] `CNIL_03_ACTEURS_RESPONSABILITES.md`
- [ ] matrice RACI / RGPD.

---

# 8. Phase 4 — Données et minimisation

**Statut : ⬜**

### Cohorte principale

- [ ] identifiant participant ;
- [ ] sexe ;
- [ ] âge ou justification de son absence ;
- [ ] commune / secteur ;
- [ ] ascendance déclarée ;
- [ ] données SNP ;
- [ ] PCA / ADMIXTURE ;
- [ ] KING / parenté ;
- [ ] ROH / IBD ;
- [ ] données de sélection S_div ;
- [ ] WGS des 350 ;
- [ ] phasage / imputation / LAI.

### Volet familles

- [ ] structure familiale minimale ;
- [ ] liens parent-enfant ;
- [ ] informations indirectes sur les apparentés ;
- [ ] discordances de parenté ;
- [ ] données à exclure.

### Extensions hors phase initiale

- [x] données cliniques individuelles → ⛔
- [x] prescriptions / iatrogénie → ⛔
- [x] pharmacogénétique clinique → ⛔
- [x] protéomique → ⛔
- [x] AURAGEN / autres cohortes → ⛔
- [x] entraînement IA sur données réelles → ⛔

### Livrable

- [ ] `CNIL_04_DICTIONNAIRE_DONNEES.md`

---

# 9. Phase 5 — Flux et pseudonymisation

**Statut : ⬜**

Documenter selon : **source → donnée → transformation → stockage → utilisateur → destination**.

### Flux principaux

- [ ] participant → EFS ;
- [ ] EFS → CRB ;
- [ ] CRB → extraction ;
- [ ] CRB → équipe de recherche ;
- [ ] laboratoire → génotypage ;
- [ ] CHU → POPgen / WGS ;
- [ ] WGS → CHU ;
- [ ] stockage → calcul bioinformatique ;
- [ ] calcul → PostgreSQL / fichiers ;
- [ ] ressource → chercheurs internes ;
- [ ] ressource → DAC → chercheurs externes ;
- [ ] ressource → diffusion agrégée.

### Pseudonymisation

- [ ] générateur du code ;
- [ ] format ;
- [ ] table de correspondance ;
- [ ] droits d'accès ;
- [ ] absence d'identifiants directs dans les fichiers génomiques ;
- [ ] vérification des métadonnées exportées.

### Livrable

- [ ] `CNIL_05_CARTOGRAPHIE_FLUX.md`

---

# 10. Phase 6 — Échantillons biologiques / CRB

**Statut : ⬜**

- [ ] cadre réglementaire et qualité du CRB ;
- [ ] enregistrement du prélèvement ;
- [ ] conservation du tube avant extraction si applicable ;
- [ ] extraction ADN ;
- [ ] conservation de l'ADN en banque ;
- [ ] aliquotage ;
- [ ] sortie d'aliquot ;
- [ ] traçabilité ;
- [ ] durée de conservation ;
- [ ] destruction ;
- [ ] retrait participant ;
- [ ] réutilisation future.

### Livrable

- [ ] `CNIL_06_ECHANTILLONS_CRB.md`

---

# 11. Phase 7 — Infrastructure, sécurité et hébergement

**Statut : ⬜**

- [ ] on-premise / cloud / hybride ;
- [ ] périmètre HDS à déterminer ;
- [ ] localisation des données ;
- [ ] séparation dev / test / production ;
- [ ] chiffrement transit / repos ;
- [ ] gestion des clés ;
- [ ] MFA ;
- [ ] RBAC ;
- [ ] logs et audit ;
- [ ] revue des habilitations ;
- [ ] sauvegardes et restauration ;
- [ ] segmentation réseau ;
- [ ] exports et supports amovibles ;
- [ ] transferts sécurisés ;
- [ ] gestion des incidents et violations.

### Livrable

- [ ] `CNIL_07_SECURITE_INFRASTRUCTURE.md`

---

# 12. Phase 8 — Gouvernance, accès et publication

**Statut : ⬜**

- [ ] comité de gouvernance ;
- [ ] comité scientifique ;
- [ ] Data Access Committee ;
- [ ] données publiques ;
- [ ] données en accès contrôlé ;
- [ ] données très restreintes ;
- [ ] analyses sur site ;
- [ ] règles d'export ;
- [ ] variants rares / fondateurs ;
- [ ] retrait des droits ;
- [ ] audits.

### Livrable

- [ ] `CNIL_08_GOUVERNANCE_ACCES.md`

---

# 13. Phase 9 — Information, droits et conservation

**Statut : ⬜**

- [ ] finalités ;
- [ ] données génétiques ;
- [ ] destinataires ;
- [ ] partage scientifique ;
- [ ] résultats collectifs ;
- [ ] retour individuel ou absence de retour ;
- [ ] découvertes incidentes ;
- [ ] droits d'accès / rectification / limitation / opposition selon cadre ;
- [ ] retrait ;
- [ ] conséquences sur les analyses déjà agrégées ;
- [ ] durées : identité / consentement / SNP / FASTQ / BAM-CRAM / VCF / dérivés / logs / échantillons.

### Livrable

- [ ] `CNIL_09_DROITS_CONSERVATION.md`

> La notice et le document de consentement définitifs ne sont rédigés qu'après stabilisation de cette phase.

---

# 14. Phase 10 — AIPD / DPIA

**Statut : ⬜**

Traiter au minimum :

- [ ] unicité du génome ;
- [ ] ré-identification ;
- [ ] parenté ;
- [ ] apparentés ;
- [ ] ascendance ;
- [ ] origine géographique ;
- [ ] stigmatisation ;
- [ ] consanguinité / parenté inattendue ;
- [ ] variants rares ;
- [ ] export scientifique ;
- [ ] compromission de compte ;
- [ ] attaques externes ;
- [ ] transferts ;
- [ ] conservation longue ;
- [ ] membership inference ;
- [ ] reconstruction à partir de données agrégées ;
- [ ] futurs usages IA.

### Méthode

**menace → événement redouté → probabilité → gravité → mesures → risque résiduel**

### Livrable

- [ ] `CNIL_10_AIPD.md`

---

# 15. Phases 11 à 14 — Finalisation et ouverture

## Phase 11 — Dossier complet

- [ ] fiche traitement ;
- [ ] résumé exécutif ;
- [ ] description scientifique ;
- [ ] finalités / bases juridiques ;
- [ ] personnes / données ;
- [ ] flux ;
- [ ] acteurs / destinataires / sous-traitants ;
- [ ] sécurité ;
- [ ] conservation ;
- [ ] droits ;
- [ ] gouvernance ;
- [ ] AIPD ;
- [ ] registre ;
- [ ] notice ;
- [ ] consentement si requis ;
- [ ] procédures et chartes.

## Phase 12 — Validation institutionnelle

- [ ] DRCI ;
- [ ] DPO ;
- [ ] DSIO ;
- [ ] CRB ;
- [ ] EFS ;
- [ ] juridique ;
- [ ] CPP si applicable ;
- [ ] déclaration MR si applicable ;
- [ ] autorisation CNIL si nécessaire ;
- [ ] conventions et contrats.

## Phase 13 — Avant ouverture de la collecte

- [ ] circuit EFS validé ;
- [ ] qualification réglementaire validée ;
- [ ] documents participant validés ;
- [ ] CRB prêt ;
- [ ] pseudonymisation opérationnelle ;
- [ ] infrastructure sécurisée ;
- [ ] habilitations ;
- [ ] sauvegardes ;
- [ ] AIPD validée ;
- [ ] personnel formé ;
- [ ] test à blanc du circuit.

## Phase 14 — Avant ouverture aux chercheurs

- [ ] DAC constitué ;
- [ ] charte d'accès ;
- [ ] classification des données ;
- [ ] environnement sécurisé ;
- [ ] procédure de demande ;
- [ ] contrat utilisateur ;
- [ ] journalisation ;
- [ ] politique d'export ;
- [ ] audit périodique.

---

# 16. Phase 15 — Extensions futures

**Statut : ⛔ Hors phase initiale**

Chaque extension devra être réanalysée séparément :

- données cliniques hospitalières ;
- diagnostic / maladies rares ;
- pharmacogénétique clinique ;
- prescriptions / iatrogénie ;
- protéomique ;
- AURAGEN / SeqOIA ;
- autres populations de l'océan Indien / DOM-TOM ;
- entraînement ou inférence IA sur données génomiques ;
- modèles commerciaux et API externes.

---

# 17. Tableau de suivi courant

| ID | Sujet | Statut | Prochaine action |
|---|---|---:|---|
| S01 | Corpus documentaire | ✅ | maintenir les sources |
| S02 | Circuit EFS / CRB | 🟦 | faire confirmer les points ouverts |
| S03 | Qualification RIPH | 🟨 | analyser le circuit désormais décrit |
| S04 | MR applicable | 🟧 | après première qualification RIPH/non-RIPH |
| S05 | Responsable de traitement | ⬜ | Phase 3 |
| S06 | Statut EFS | ⬜ | Phase 3 |
| S07 | Statut POPgen | ⬜ | Phase 3 |
| S08 | Volet familles | ⬜ | Phase 2 puis Phase 4 |
| S09 | Dictionnaire de données | ⬜ | Phase 4 |
| S10 | Pseudonymisation | ⬜ | Phase 5 |
| S11 | Infrastructure de production | ⬜ | Phase 7 |
| S12 | HDS | ⬜ | Phase 7 |
| S13 | CRB | 🟨 | circuit connu, cadre à valider |
| S14 | Durées de conservation | ⬜ | Phase 9 |
| S15 | Gouvernance DAC | ⬜ | Phase 8 |
| S16 | AIPD | ⬜ | Phase 10 |
| S17 | Notice / consentement final | ⬜ | Phase 9 puis 11 |
| S18 | IA | ⛔ | extension future |
| S19 | Données cliniques | ⛔ | extension future |
| S20 | AURAGEN / autres cohortes | ⛔ | extension future |

---

# 18. Prochaine étape

## Phase active : **Phase 2 — qualification réglementaire**

Le circuit matériel est maintenant suffisamment décrit pour commencer l'analyse réglementaire suivante :

> **accord écrit lors de l'entretien EFS → utilisation d'un reliquat de tube EDTA → pseudonymisation → transfert au CRB → extraction → banque ADN → aliquot recherche**

L'objectif de la prochaine étape sera de déterminer, sans présumer du résultat, si ce montage relève d'une **RIPH ou d'une recherche non-RIPH**, puis d'en déduire le cadre CNIL à tester.

---

# 19. Journal des décisions

| Date | Décision / constat | Statut | Impact |
|---|---|---|---|
| 2026-09-14 | Le dossier sera développé section par section. | ✅ | méthode générale |
| 2026-09-14 | La phase initiale est séparée des extensions cliniques et IA. | 🟦 | périmètre initial |
| 2026-09-14 | Le recrutement EFS est traité avant la qualification RIPH / MR. | ✅ | ordre de travail |
| 2026-09-14 | Le projet est expliqué lors de l'entretien avec le médecin EFS et l'accord du participant est signé après explication. | 🟦 | circuit EFS |
| 2026-09-14 | Le matériel biologique prévu est un reliquat de tube EDTA ; aucun tube supplémentaire n'est actuellement prévu pour le projet. | 🟦 | élément majeur de qualification réglementaire |
| 2026-09-14 | Le reliquat est pseudonymisé avant transfert EFS → CRB. | 🟦 | architecture de pseudonymisation à préciser |
| 2026-09-14 | Le CRB enregistre le prélèvement, extrait l'ADN, conserve l'ADN en banque et prépare un aliquot pour l'équipe de recherche. | 🟦 | gouvernance CRB à formaliser |
| 2026-09-14 | Les données génomiques individuelles restent considérées comme données personnelles pseudonymisées tant qu'une anonymisation réelle n'est pas démontrée. | 🟦 | vocabulaire / sécurité |
| 2026-09-14 | L'AIPD sera réalisée après stabilisation des flux, acteurs et mesures de sécurité. | ✅ | ordre de travail |

---

# 20. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-09-14 | Création du plan maître |
| 0.2 | 2026-09-14 | Intégration du circuit EFS → CRB → extraction → banque ADN → aliquot ; Phase 2 ouverte |

---

**Règle de maintenance :** après chaque décision importante, mettre à jour le statut de la phase, le tableau de suivi, le journal des décisions et l'historique.