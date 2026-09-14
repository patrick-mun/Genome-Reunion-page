# Génome Réunion — Plan de développement du dossier CNIL / RGPD

**Projet :** Génome Réunion  
**Porteur scientifique :** CHU de La Réunion — Service de génétique moléculaire  
**Document :** plan maître de développement et de suivi réglementaire  
**Version :** 0.3  
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
| ✅ | Validé comme choix de conception du projet |
| ⛔ | Hors phase initiale |

---

# 3. Vue d'ensemble

| Phase | Objet | Statut | Prochaine action |
|---|---|---:|---|
| 0 | Cadrage et corpus documentaire | ✅ | maintenir les sources |
| 1 | Circuit recrutement / EFS / CRB | ✅ | circuit fonctionnel clos ; formalisation institutionnelle dans les phases suivantes |
| 2 | Qualification RIPH / non-RIPH et cadre CNIL | 🟨 | phase active |
| 3 | Acteurs, responsabilités et conventions | ⬜ | après première qualification Phase 2 |
| 4 | Données et minimisation | ⬜ | arbitrer notamment l'âge et fixer le dictionnaire de données |
| 5 | Flux détaillés et pseudonymisation | ⬜ | compléter les échanges ; principe EFS déjà fixé |
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

**Statut : ✅ Circuit fonctionnel stabilisé**

**Livrable dédié :** `CNIL_01_CIRCUIT_EFS_PRELEVEMENT.md`

## 5.1 Circuit retenu

1. Le projet est expliqué au donneur **lors de l'entretien avec le médecin de l'EFS**.
2. Le participant donne un **accord écrit signé après explication du projet**.
3. Aucun tube supplémentaire n'est prévu spécifiquement pour Génome Réunion dans le circuit retenu.
4. Le matériel utilisé est un **reliquat de tube EDTA** disponible à l'EFS.
5. L'**EFS génère le code pseudonyme**.
6. L'**EFS conserve et gère la table de correspondance identité ↔ code**.
7. Le CRB ne reçoit pas l'identité directe du participant.
8. L'EFS transmet au CRB :
   - le tube EDTA reliquat identifié par son code ;
   - le site / lieu de prélèvement EFS ;
   - éventuellement l'âge, uniquement si cette donnée est finalement retenue comme nécessaire.
9. Aucune autre information personnelle n'est nécessaire à ce stade.
10. Le CRB enregistre et trace le prélèvement.
11. Le prélèvement est dirigé vers un poste d'extraction.
12. L'ADN obtenu est conservé en banque par le CRB.
13. Le CRB réalise un **aliquot d'ADN** pour les analyses autorisées de l'équipe de recherche.

> **Attention :** le site / lieu de prélèvement EFS ne doit pas être confondu avec la commune ou le lieu de résidence du participant.

## 5.2 Points résolus

- [x] acteur présentant le projet : médecin EFS ;
- [x] principe d'information préalable ;
- [x] accord écrit signé ;
- [x] utilisation d'un reliquat de tube EDTA ;
- [x] absence de tube supplémentaire dans le circuit retenu ;
- [x] EFS générateur du code pseudonyme ;
- [x] EFS gestionnaire de la table identité ↔ code ;
- [x] absence de transmission de l'identité directe au CRB ;
- [x] transmission minimale : code + tube + site de prélèvement ;
- [x] âge laissé comme variable optionnelle à arbitrer ;
- [x] transfert EFS → CRB ;
- [x] enregistrement CRB ;
- [x] extraction ADN ;
- [x] conservation de l'ADN en banque ;
- [x] aliquot destiné à l'équipe de recherche.

## 5.3 Éléments déplacés vers les phases suivantes

Ils ne bloquent plus la Phase 1 :

- [ ] transport EFS → CRB : Phase 5 / Phase 6 ;
- [ ] convention EFS–CHU : Phase 3 ;
- [ ] responsabilités juridiques EFS / CHU : Phase 3 ;
- [ ] cadre réglementaire et qualité du CRB : Phase 6 ;
- [ ] règles de conservation / destruction / retrait : Phase 6 et Phase 9 ;
- [ ] contenu réglementaire de l'information et de l'accord écrit : Phase 9 ;
- [ ] qualification RIPH / non-RIPH et cadre CNIL : Phase 2.

## 5.4 Critère de sortie

**Critère atteint.** Le circuit matériel et informationnel initial est suffisamment décrit pour engager la qualification réglementaire.

---

# 6. Phase 2 — Qualification RIPH / non-RIPH et cadre CNIL

**Statut : 🟨 Phase active**

## Objectifs

- [ ] qualifier la cohorte principale au regard du Code de la santé publique ;
- [ ] analyser spécifiquement l'utilisation d'un reliquat de tube EDTA obtenu dans le cadre du don ;
- [ ] prendre en compte que l'accord écrit est recueilli avant utilisation du reliquat ;
- [ ] prendre en compte que l'EFS conserve l'identité et la table de correspondance ;
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

### Point déjà fixé

- [x] l'EFS génère le code pseudonyme et conserve la table de correspondance identité ↔ code.

### Livrable

- [ ] `CNIL_03_ACTEURS_RESPONSABILITES.md`
- [ ] matrice RACI / RGPD.

---

# 8. Phase 4 — Données et minimisation

**Statut : ⬜**

### Cohorte principale

- [x] code pseudonyme ;
- [x] site / lieu de prélèvement EFS transmis au CRB ;
- [ ] âge : **à arbitrer selon nécessité scientifique et réglementaire** ;
- [ ] sexe ;
- [ ] commune / secteur de résidence si réellement nécessaire ;
- [ ] ascendance déclarée ;
- [ ] données SNP ;
- [ ] PCA / ADMIXTURE ;
- [ ] KING / parenté ;
- [ ] ROH / IBD ;
- [ ] données de sélection S_div ;
- [ ] WGS des 350 ;
- [ ] phasage / imputation / LAI.

### Règle de minimisation déjà retenue

À l'étape EFS → CRB, aucune donnée personnelle supplémentaire n'est transmise en dehors du **code**, du **site de prélèvement**, et éventuellement de l'**âge** si sa nécessité est démontrée.

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
- [x] EFS → CRB : code + tube EDTA reliquat + site de prélèvement (+ âge si retenu) ;
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

- [x] générateur du code : **EFS** ;
- [ ] format du code ;
- [x] table de correspondance : **gérée et conservée par l'EFS** ;
- [ ] droits d'accès internes EFS à la table ;
- [x] absence d'identité directe transmise au CRB dans le circuit retenu ;
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
- [ ] durées : identité / accord / SNP / FASTQ / BAM-CRAM / VCF / dérivés / logs / échantillons.

### Livrable

- [ ] `CNIL_09_DROITS_CONSERVATION.md`

> La notice et le document d'accord / consentement définitifs ne sont rédigés qu'après stabilisation de cette phase.

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
- [ ] consentement / accord si requis ;
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

- [ ] circuit EFS validé institutionnellement ;
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
| S02 | Circuit EFS / CRB | ✅ | phase fonctionnelle close |
| S03 | Qualification RIPH | 🟨 | analyser le circuit désormais stabilisé |
| S04 | MR applicable | 🟧 | après première qualification RIPH/non-RIPH |
| S05 | Responsable de traitement | ⬜ | Phase 3 |
| S06 | Statut EFS | ⬜ | Phase 3 |
| S07 | Statut POPgen | ⬜ | Phase 3 |
| S08 | Volet familles | ⬜ | Phase 2 puis Phase 4 |
| S09 | Dictionnaire de données | ⬜ | Phase 4 ; arbitrer l'âge |
| S10 | Pseudonymisation | 🟨 | principe EFS fixé ; compléter droits/format en Phase 5 |
| S11 | Infrastructure de production | ⬜ | Phase 7 |
| S12 | HDS | ⬜ | Phase 7 |
| S13 | CRB | 🟨 | circuit connu, cadre à formaliser |
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

Le circuit matériel et le périmètre minimal de transmission sont maintenant stabilisés :

> **accord écrit lors de l'entretien EFS → reliquat de tube EDTA → code généré par l'EFS → table identité/code conservée à l'EFS → transmission au CRB du code + tube + site de prélèvement (+ âge uniquement si retenu) → extraction → banque ADN → aliquot recherche.**

L'objectif de la prochaine étape est de déterminer, sans présumer du résultat, si ce montage relève d'une **RIPH ou d'une recherche non-RIPH**, puis d'en déduire le cadre CNIL à tester.

---

# 19. Journal des décisions

| Date | Décision / constat | Statut | Impact |
|---|---|---|---|
| 2026-09-14 | Le dossier sera développé section par section. | ✅ | méthode générale |
| 2026-09-14 | La phase initiale est séparée des extensions cliniques et IA. | 🟦 | périmètre initial |
| 2026-09-14 | Le recrutement EFS est traité avant la qualification RIPH / MR. | ✅ | ordre de travail |
| 2026-09-14 | Le projet est expliqué lors de l'entretien avec le médecin EFS et l'accord du participant est signé après explication. | ✅ | circuit EFS |
| 2026-09-14 | Le matériel biologique prévu est un reliquat de tube EDTA ; aucun tube supplémentaire n'est prévu pour le projet. | ✅ | élément majeur de qualification réglementaire |
| 2026-09-14 | L'EFS génère le code pseudonyme et conserve la table de correspondance identité ↔ code. | ✅ | architecture de pseudonymisation initiale |
| 2026-09-14 | Le CRB ne reçoit pas l'identité directe ; la transmission initiale est limitée au code, au tube et au site de prélèvement. | ✅ | minimisation des données |
| 2026-09-14 | L'âge reste une variable optionnelle et sera retenu seulement si sa nécessité est démontrée. | 🟨 À arbitrer Phase 4 | minimisation |
| 2026-09-14 | Le site de prélèvement EFS est distingué du lieu de résidence du participant. | ✅ | dictionnaire de données |
| 2026-09-14 | Le CRB enregistre le prélèvement, extrait l'ADN, conserve l'ADN en banque et prépare un aliquot pour l'équipe de recherche. | ✅ | circuit CRB |
| 2026-09-14 | Les données génomiques individuelles restent considérées comme données personnelles pseudonymisées tant qu'une anonymisation réelle n'est pas démontrée. | 🟦 | vocabulaire / sécurité |
| 2026-09-14 | L'AIPD sera réalisée après stabilisation des flux, acteurs et mesures de sécurité. | ✅ | ordre de travail |

---

# 20. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-09-14 | Création du plan maître |
| 0.2 | 2026-09-14 | Intégration du circuit EFS → CRB → extraction → banque ADN → aliquot ; Phase 2 ouverte |
| 0.3 | 2026-09-14 | Phase 1 clôturée : code et table gérés par l'EFS ; transmission minimale au CRB ; âge laissé à arbitrer |

---

**Règle de maintenance :** après chaque décision importante, mettre à jour le statut de la phase, le tableau de suivi, le journal des décisions et l'historique.