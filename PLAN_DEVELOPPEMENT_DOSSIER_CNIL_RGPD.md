# Génome Réunion — Plan de développement du dossier CNIL / RGPD

**Projet :** Génome Réunion  
**Porteur scientifique :** CHU de La Réunion — Service de génétique moléculaire  
**Document :** plan maître de développement et de suivi réglementaire  
**Version initiale :** 14 septembre 2026  
**Statut :** document de travail évolutif  

---

## 1. Objectif du document

Ce fichier sert de **feuille de route unique** pour construire progressivement le dossier CNIL / RGPD de Génome Réunion.

Il doit permettre de :

- savoir **par quoi commencer** ;
- éviter de rédiger trop tôt des documents qui dépendraient de décisions non prises ;
- suivre les arbitrages DPO / DRCI / DSIO / CRB / EFS ;
- tracer les décisions et les points encore ouverts ;
- identifier les documents à produire à chaque étape ;
- disposer d'une checklist avant l'ouverture de la collecte ;
- disposer d'une checklist avant l'ouverture de la ressource aux chercheurs.

Ce document n'est **pas** le dossier CNIL lui-même. Il organise sa construction.

---

## 2. Principes de travail

### 2.1 Règles générales

1. Ne jamais considérer une méthodologie de référence CNIL comme applicable avant démonstration.
2. Distinguer systématiquement :
   - **décidé** ;
   - **envisagé** ;
   - **à confirmer** ;
   - **à arbitrer** ;
   - **validé DPO/DRCI**.
3. Ne jamais qualifier une donnée génomique individuelle d'« anonyme » sans démonstration.
4. Séparer autant que possible :
   - la phase populationnelle initiale ;
   - le volet familles ;
   - les extensions cliniques ;
   - la pharmacogénétique clinique ;
   - l'IA ;
   - les extensions à d'autres cohortes ou populations.
5. Utiliser en priorité les sources officielles :
   - CNIL ;
   - EUR-Lex / RGPD ;
   - Légifrance / Code de la santé publique ;
   - ministère de la Santé ;
   - méthodologies de référence CNIL en vigueur.
6. Toute décision importante doit être enregistrée dans le **journal des décisions** en fin de document.

### 2.2 Statuts utilisés

| Symbole | Statut | Signification |
|---|---|---|
| ⬜ | À faire | étape non commencée |
| 🟨 | En cours | travail commencé, non stabilisé |
| 🟧 | Bloqué | décision externe ou information manquante |
| 🟦 | À valider | proposition préparée, validation institutionnelle requise |
| ✅ | Validé | décision formellement stabilisée |
| ⛔ | Hors phase initiale | volontairement exclu du traitement initial |

---

# 3. Vue d'ensemble du développement

| Phase | Objet | Statut | Dépendance principale |
|---|---|---:|---|
| 0 | Cadrage et corpus documentaire | ✅ | — |
| 1 | Qualification réglementaire du recrutement et du prélèvement EFS | 🟨 | EFS + DRCI |
| 2 | Qualification RIPH / non-RIPH et cadre CNIL potentiel | ⬜ | Phase 1 |
| 3 | Acteurs, responsabilités et contrats | ⬜ | Phases 1–2 |
| 4 | Périmètre exact des données et minimisation | ⬜ | Phases 1–2 |
| 5 | Cartographie détaillée des flux et pseudonymisation | ⬜ | Phases 3–4 |
| 6 | Échantillons biologiques et CRB | ⬜ | Phases 1–4 |
| 7 | Architecture informatique, sécurité et hébergement | ⬜ | Phase 5 |
| 8 | Gouvernance, accès scientifique et publication | ⬜ | Phases 4–7 |
| 9 | Information, droits et durées de conservation | ⬜ | Phases 2–8 |
| 10 | AIPD / DPIA | ⬜ | Phases 2–9 |
| 11 | Rédaction du dossier réglementaire complet | ⬜ | Phases 1–10 |
| 12 | Validation institutionnelle et formalités | ⬜ | Phase 11 |
| 13 | Checklist avant ouverture de la collecte | ⬜ | Phase 12 |
| 14 | Ouverture contrôlée de la ressource aux chercheurs | ⬜ | collecte + gouvernance |
| 15 | Extensions futures : clinique, pharmacogénétique, IA, nouvelles cohortes | ⛔ | nouvelle analyse dédiée |

---

# 4. Phase 0 — Cadrage et corpus documentaire

**Objectif :** définir le périmètre de travail et identifier les documents de référence du projet.

**Statut : ✅ Validé comme base de travail**

### Travaux réalisés

- [x] Définir les objectifs généraux du dossier CNIL / RGPD.
- [x] Définir la règle de travail section par section.
- [x] Identifier le dépôt principal : `patrick-mun/Genome-Reunion-page`.
- [x] Identifier la synthèse scientifique comme source structurante.
- [x] Identifier la synthèse d'infrastructure logicielle.
- [x] Identifier les méthodologies de sélection / validation.
- [x] Réaliser une première cartographie réglementaire exploratoire.
- [x] Identifier le recrutement EFS comme premier verrou réglementaire.

### Sources projet principales déjà identifiées

- `README.md`
- `template/Genome_Reunion_synthese_scientifique (14) (6).html`
- `template/METHODOLOGIE_validation_protocole_v1_5.html`
- `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html`
- `template/GENOME_REUNION_justification_choix_Sdiv.html`
- `template/Genome_Reunion_synthese_infrastructure_v5_4.html`
- `template/architecture_pipeline.html`
- documents EFS à intégrer lorsqu'ils seront disponibles ;
- conventions et documents institutionnels à intégrer lorsqu'ils seront disponibles.

### Critère de sortie

Le projet, ses grandes composantes et ses sources sont suffisamment définis pour commencer la qualification du recrutement et du prélèvement.

---

# 5. Phase 1 — Qualification du recrutement et du prélèvement EFS

**Objectif :** décrire factuellement ce qui se passe depuis le contact avec le donneur jusqu'à l'arrivée de l'ADN ou de l'échantillon au CHU.

**Statut : 🟨 En cours — priorité immédiate**

## 5.1 Questions à résoudre

- [ ] Qui présente Génome Réunion au donneur ?
- [ ] Qui recueille son accord ?
- [ ] À quel moment du parcours EFS ?
- [ ] Le participant est-il inclus avant, pendant ou après le don ?
- [ ] Un tube supplémentaire est-il prélevé spécifiquement pour Génome Réunion ?
- [ ] Utilise-t-on une fraction / un reliquat du prélèvement EFS existant ?
- [ ] Le prélèvement Génome Réunion peut-il être dissocié du don de sang ?
- [ ] Qui réalise matériellement le prélèvement ?
- [ ] Quel établissement est responsable du prélèvement biologique ?
- [ ] Qui attribue le premier identifiant projet ?
- [ ] Quelles données administratives restent à l'EFS ?
- [ ] Quelles données sont transmises au CHU ?
- [ ] L'EFS conserve-t-il une table d'identification ?
- [ ] Le CHU possède-t-il une seconde table de correspondance ?
- [ ] Où est stocké le matériel biologique avant transfert ?
- [ ] Quelle convention EFS–CHU doit encadrer ce circuit ?

## 5.2 Livrables

- [ ] `CNIL_01_CIRCUIT_EFS_PRELEVEMENT.md`
- [ ] schéma simple : **participant → EFS → prélèvement → codage → transport → CHU/CRB → extraction ADN**
- [ ] tableau des données détenues par l'EFS et par le CHU à chaque étape.
- [ ] liste des points à valider formellement avec EFS / DRCI.

## 5.3 Critère de sortie

La DRCI doit pouvoir comprendre exactement **quel acte est réalisé pour la recherche** et à quel moment.

> Tant que cette phase n'est pas stabilisée, ne pas figer RIPH 2 / RIPH 3 / non-RIPH ni MR-001 / MR-003.

---

# 6. Phase 2 — Qualification RIPH / non-RIPH et cadre CNIL

**Objectif :** déterminer le chemin réglementaire applicable au traitement initial.

**Statut : ⬜ À faire après Phase 1**

## 6.1 Analyse à réaliser

- [ ] qualifier la cohorte principale 2 500 participants ;
- [ ] qualifier le prélèvement biologique ;
- [ ] qualifier le volet 350 WGS ;
- [ ] qualifier séparément le volet 100 familles ;
- [ ] déterminer si les familles peuvent être intégrées au même protocole ;
- [ ] comparer les conditions MR-001 ;
- [ ] comparer les conditions MR-003 ;
- [ ] évaluer MR-004 uniquement pour les éventuelles réutilisations secondaires ;
- [ ] identifier les cas nécessitant une autorisation CNIL spécifique ;
- [ ] déterminer la nécessité et le type de saisine CPP ;
- [ ] documenter la base juridique RGPD ;
- [ ] documenter la condition permettant le traitement des données génétiques ;
- [ ] distinguer consentement à la recherche et consentement à l'examen génétique.

## 6.2 Livrables

- [ ] `CNIL_02_QUALIFICATION_REGLEMENTAIRE.md`
- [ ] arbre de décision RIPH / non-RIPH.
- [ ] tableau comparatif MR-001 / MR-003 / MR-004 / autorisation spécifique.
- [ ] liste des obligations résultant du cadre retenu.

## 6.3 Validation requise

- [ ] DRCI
- [ ] DPO
- [ ] direction juridique si nécessaire

## 6.4 Critère de sortie

Une phrase formelle doit pouvoir être écrite :

> « La phase initiale du projet Génome Réunion est qualifiée comme [...] et le traitement de données relève de [...] sous réserve du respect des conditions suivantes [...]. »

---

# 7. Phase 3 — Acteurs, responsabilités et contrats

**Objectif :** déterminer qui fait quoi, pour quelle finalité et sous quelle responsabilité.

**Statut : ⬜ À faire**

## 7.1 Acteurs à qualifier

- [ ] CHU de La Réunion
- [ ] Service de génétique moléculaire
- [ ] DRCI
- [ ] DPO
- [ ] DSIO
- [ ] CRB
- [ ] EFS La Réunion
- [ ] POPgen
- [ ] plateforme de génotypage
- [ ] plateforme de séquençage
- [ ] hébergeur éventuel
- [ ] EPITECH Réunion si accès à des données réelles
- [ ] partenaires scientifiques
- [ ] AURAGEN / SeqOIA uniquement pour les extensions futures

## 7.2 Pour chaque acteur

Documenter :

- [ ] finalité propre ou finalité décidée par le CHU ;
- [ ] moyens essentiels contrôlés ;
- [ ] accès aux données ;
- [ ] nature des données reçues ;
- [ ] possibilité de réutilisation ;
- [ ] durée de conservation ;
- [ ] localisation des données ;
- [ ] rôle possible : responsable, conjoint, sous-traitant, destinataire, partenaire.

## 7.3 Livrables

- [ ] `CNIL_03_ACTEURS_RESPONSABILITES.md`
- [ ] matrice RACI / RGPD.
- [ ] liste des contrats et conventions nécessaires.
- [ ] liste des articles 26 / 28 RGPD potentiellement applicables.

---

# 8. Phase 4 — Périmètre des données et minimisation

**Objectif :** fixer précisément quelles données sont réellement nécessaires à la phase initiale.

**Statut : ⬜ À faire**

## 8.1 Cohorte principale

Décider et documenter :

- [ ] sexe ;
- [ ] âge ou absence d'âge ;
- [ ] commune ;
- [ ] secteur géographique ;
- [ ] ascendance déclarée ;
- [ ] critères d'inclusion ;
- [ ] identifiant ;
- [ ] données SNP ;
- [ ] PCA ;
- [ ] ADMIXTURE ;
- [ ] KING ;
- [ ] ROH ;
- [ ] IBD ;
- [ ] données de sélection S_div ;
- [ ] données WGS des 350 ;
- [ ] données de phasage / imputation / LAI.

## 8.2 Familles

- [ ] structure familiale minimale nécessaire ;
- [ ] relations parent-enfant ;
- [ ] gestion des informations indirectes sur des apparentés ;
- [ ] gestion des discordances de parenté ;
- [ ] données non nécessaires à exclure.

## 8.3 Extensions à exclure du traitement initial

- [ ] données cliniques individuelles → ⛔
- [ ] prescriptions → ⛔
- [ ] iatrogénie → ⛔
- [ ] pharmacogénétique clinique → ⛔
- [ ] protéomique → ⛔
- [ ] AURAGEN → ⛔
- [ ] autres populations / DOM-TOM → ⛔
- [ ] entraînement de modèles IA sur données réelles → ⛔

## 8.4 Livrables

- [ ] `CNIL_04_DICTIONNAIRE_DONNEES.md`
- [ ] dictionnaire complet des variables.
- [ ] justification de nécessité pour chaque variable.
- [ ] colonne : « collectée / dérivée / calculée / externe ».

---

# 9. Phase 5 — Flux de données et pseudonymisation

**Objectif :** savoir où va chaque donnée depuis sa création jusqu'à sa destruction ou son archivage.

**Statut : ⬜ À faire**

## 9.1 Flux à documenter

Pour chaque flux :

**source → donnée → transformation → stockage → utilisateur → destination**

- [ ] EFS → CHU
- [ ] EFS → CRB
- [ ] CRB → laboratoire
- [ ] laboratoire → génotypage
- [ ] génotypage → CHU
- [ ] CHU → POPgen / WGS
- [ ] POPgen → CHU
- [ ] CHU → stockage
- [ ] stockage → calcul bioinformatique
- [ ] calcul → base PostgreSQL / fichiers
- [ ] base → chercheurs internes
- [ ] base → DAC
- [ ] DAC → chercheurs externes
- [ ] base → publication agrégée

## 9.2 Pseudonymisation

- [ ] définir qui crée l'identifiant ;
- [ ] définir le format de l'identifiant ;
- [ ] définir où se trouve la table de correspondance ;
- [ ] interdire la présence d'identifiants directs dans les fichiers génomiques ;
- [ ] séparer les droits d'accès à la clé et aux données scientifiques ;
- [ ] définir les procédures de recodage si nécessaire ;
- [ ] vérifier les métadonnées de fichiers exportés.

## 9.3 Livrables

- [ ] `CNIL_05_CARTOGRAPHIE_FLUX.md`
- [ ] schéma général des flux.
- [ ] schéma de pseudonymisation.
- [ ] matrice source/destination/données/base juridique.

---

# 10. Phase 6 — Échantillons biologiques et CRB

**Objectif :** traiter séparément la gouvernance du matériel biologique.

**Statut : ⬜ À faire**

- [ ] vérifier le cadre réglementaire du CRB ;
- [ ] vérifier si Génome Réunion entre dans son périmètre existant ;
- [ ] définir propriété / responsabilité / garde des échantillons ;
- [ ] définir conditions d'aliquotage ;
- [ ] définir conditions de transfert ;
- [ ] définir durée de conservation ;
- [ ] définir politique de destruction ;
- [ ] définir conséquences d'un retrait participant ;
- [ ] définir réutilisation future autorisée ou non ;
- [ ] distinguer échantillon, ADN extrait et données génomiques.

### Livrable

- [ ] `CNIL_06_ECHANTILLONS_CRB.md`

---

# 11. Phase 7 — Architecture informatique, sécurité et hébergement

**Objectif :** transformer l'architecture logicielle en architecture de production conforme aux exigences institutionnelles.

**Statut : ⬜ À faire**

## 11.1 Infrastructure

- [ ] on-premise / cloud / hybride ;
- [ ] périmètre HDS à déterminer ;
- [ ] localisation des données ;
- [ ] environnements développement / test / production séparés ;
- [ ] interdiction de données réelles dans les environnements non autorisés.

## 11.2 Sécurité

- [ ] chiffrement en transit ;
- [ ] chiffrement au repos ;
- [ ] gestion des clés ;
- [ ] MFA ;
- [ ] RBAC ;
- [ ] journalisation ;
- [ ] conservation des logs ;
- [ ] revue périodique des droits ;
- [ ] suppression des accès au départ d'un utilisateur ;
- [ ] sauvegardes ;
- [ ] tests de restauration ;
- [ ] segmentation réseau ;
- [ ] gestion des postes ;
- [ ] exports ;
- [ ] supports amovibles ;
- [ ] transferts sécurisés ;
- [ ] supervision ;
- [ ] tests de vulnérabilité ;
- [ ] procédure d'incident ;
- [ ] procédure de violation de données.

## 11.3 Livrables

- [ ] `CNIL_07_SECURITE_INFRASTRUCTURE.md`
- [ ] schéma d'architecture de production.
- [ ] matrice des contrôles de sécurité.
- [ ] politique d'habilitation.
- [ ] politique de journalisation.

---

# 12. Phase 8 — Gouvernance, accès scientifique et publication

**Objectif :** définir les conditions d'utilisation de la ressource après sa constitution.

**Statut : ⬜ À faire**

## 12.1 Gouvernance

- [ ] comité de gouvernance ;
- [ ] comité scientifique ;
- [ ] Data Access Committee ;
- [ ] conflits d'intérêts ;
- [ ] procédure d'appel / réexamen éventuelle.

## 12.2 Niveaux d'accès

### Public

- [ ] méthodes ;
- [ ] statistiques générales ;
- [ ] publications ;
- [ ] fréquences suffisamment agrégées.

### Contrôlé

- [ ] génotypes pseudonymisés ;
- [ ] WGS individuels ;
- [ ] métadonnées fines ;
- [ ] données familiales.

### Très restreint

- [ ] table de correspondance ;
- [ ] identité ;
- [ ] éventuelles futures données cliniques.

## 12.3 Publication de variants rares

- [ ] seuils de diffusion ;
- [ ] risque de ré-identification ;
- [ ] règles pour variants fondateurs ;
- [ ] contrôle avant publication.

## 12.4 Livrables

- [ ] `CNIL_08_GOUVERNANCE_ACCES.md`
- [ ] charte d'accès.
- [ ] formulaire de demande scientifique.
- [ ] modèle de décision DAC.
- [ ] politique de publication.

---

# 13. Phase 9 — Information, droits et conservation

**Objectif :** définir ce qui sera expliqué aux participants et comment leurs droits seront exercés.

**Statut : ⬜ À faire après stabilisation des phases précédentes**

## 13.1 Information

- [ ] finalités ;
- [ ] données génétiques ;
- [ ] destinataires ;
- [ ] partage scientifique ;
- [ ] conservation ;
- [ ] données familiales ;
- [ ] résultats collectifs ;
- [ ] retour individuel ou absence de retour ;
- [ ] découvertes incidentes ;
- [ ] usages futurs ;
- [ ] IA comme extension non automatiquement couverte.

## 13.2 Droits

- [ ] accès ;
- [ ] rectification ;
- [ ] limitation ;
- [ ] opposition si applicable ;
- [ ] retrait ;
- [ ] conséquences lorsque les données ont déjà été agrégées ;
- [ ] contact DPO ;
- [ ] CNIL.

## 13.3 Conservation

À définir par catégorie :

- [ ] identité ;
- [ ] table de correspondance ;
- [ ] consentements / preuves réglementaires ;
- [ ] SNP ;
- [ ] FASTQ ;
- [ ] BAM/CRAM ;
- [ ] VCF ;
- [ ] données dérivées ;
- [ ] fréquences ;
- [ ] logs ;
- [ ] échantillons biologiques.

### Livrables

- [ ] `CNIL_09_DROITS_CONSERVATION.md`
- [ ] tableau des durées et justifications.
- [ ] procédure de retrait.

> La notice d'information et le consentement définitifs ne seront rédigés qu'après cette étape.

---

# 14. Phase 10 — AIPD / DPIA

**Objectif :** évaluer les risques du traitement stabilisé et les mesures de réduction.

**Statut : ⬜ À faire lorsque les flux et l'architecture sont suffisamment stabilisés**

## 14.1 Risques à traiter au minimum

- [ ] unicité du génome ;
- [ ] ré-identification ;
- [ ] croisement avec bases généalogiques ;
- [ ] parenté ;
- [ ] informations sur les apparentés ;
- [ ] ascendance ;
- [ ] origine géographique ;
- [ ] stigmatisation de groupes ;
- [ ] consanguinité ;
- [ ] parenté inattendue ;
- [ ] publication de variants rares ;
- [ ] export scientifique ;
- [ ] accès interne abusif ;
- [ ] compromission de compte ;
- [ ] attaque externe ;
- [ ] perte de support ;
- [ ] défaut de sauvegarde ;
- [ ] transfert international ;
- [ ] conservation longue ;
- [ ] membership inference ;
- [ ] reconstruction à partir de statistiques agrégées ;
- [ ] futurs usages IA.

## 14.2 Méthode

Pour chaque risque :

**menace → événement redouté → probabilité → gravité → mesures existantes → mesures supplémentaires → risque résiduel**

## 14.3 Livrables

- [ ] `CNIL_10_AIPD.md`
- [ ] matrice des risques.
- [ ] plan de traitement des risques.
- [ ] liste des risques résiduels à accepter ou réduire.

---

# 15. Phase 11 — Rédaction du dossier réglementaire complet

**Objectif :** assembler uniquement les éléments déjà validés.

**Statut : ⬜ À faire**

## Livrables prévus

- [ ] fiche d'identité du traitement ;
- [ ] résumé exécutif ;
- [ ] description scientifique ;
- [ ] finalités ;
- [ ] base juridique ;
- [ ] catégories de personnes ;
- [ ] catégories de données ;
- [ ] origine des données ;
- [ ] flux ;
- [ ] acteurs et responsabilités ;
- [ ] destinataires ;
- [ ] sous-traitants ;
- [ ] transferts ;
- [ ] sécurité ;
- [ ] durées ;
- [ ] droits ;
- [ ] gouvernance ;
- [ ] AIPD ;
- [ ] registre du traitement ;
- [ ] notice d'information ;
- [ ] consentement si requis ;
- [ ] charte d'accès ;
- [ ] procédure d'accès scientifique ;
- [ ] politique de publication ;
- [ ] politique variants rares ;
- [ ] procédure de retrait ;
- [ ] procédure de violation de données ;
- [ ] liste des contrats ;
- [ ] liste des validations DPO/DRCI restantes.

---

# 16. Phase 12 — Validation institutionnelle et formalités

**Statut : ⬜ À faire**

- [ ] validation scientifique ;
- [ ] validation DRCI ;
- [ ] validation DPO ;
- [ ] validation DSIO ;
- [ ] validation CRB ;
- [ ] validation EFS ;
- [ ] validation juridique ;
- [ ] CPP si applicable ;
- [ ] déclaration de conformité à la MR retenue si applicable ;
- [ ] autorisation CNIL si nécessaire ;
- [ ] contrats article 28 ;
- [ ] accords de responsabilité conjointe article 26 si nécessaires ;
- [ ] conventions de transfert / accès ;
- [ ] intégration au registre du CHU.

---

# 17. Phase 13 — Checklist avant ouverture de la collecte

**Statut : ⬜ À faire**

La collecte ne doit pas être ouverte tant que les éléments nécessaires ne sont pas validés.

- [ ] qualification réglementaire validée ;
- [ ] promoteur identifié si applicable ;
- [ ] responsable de traitement identifié ;
- [ ] formalités CNIL/CPP réalisées ;
- [ ] information participant validée ;
- [ ] consentement validé si requis ;
- [ ] circuit EFS validé ;
- [ ] convention EFS–CHU signée ;
- [ ] CRB prêt ;
- [ ] pseudonymisation opérationnelle ;
- [ ] habilitations créées ;
- [ ] MFA opérationnelle lorsque requise ;
- [ ] chiffrement opérationnel ;
- [ ] logs opérationnels ;
- [ ] sauvegardes testées ;
- [ ] procédure incident disponible ;
- [ ] AIPD validée ;
- [ ] personnel formé ;
- [ ] test à blanc du circuit complet réalisé.

---

# 18. Phase 14 — Ouverture de la ressource aux chercheurs

**Statut : ⬜ Future**

Avant tout accès externe :

- [ ] DAC constitué ;
- [ ] charte d'accès validée ;
- [ ] catégories de données classées ;
- [ ] règles variants rares validées ;
- [ ] environnement sécurisé disponible ;
- [ ] procédure de demande testée ;
- [ ] contrat utilisateur disponible ;
- [ ] journalisation des accès active ;
- [ ] politique d'export active ;
- [ ] retrait automatique des droits prévu ;
- [ ] audit périodique planifié.

---

# 19. Phase 15 — Extensions futures

**Statut : ⛔ Hors phase initiale**

Chaque extension doit être considérée comme un mini-projet réglementaire et ne doit jamais être supposée couverte automatiquement.

Extensions identifiées :

- données cliniques hospitalières ;
- diagnostic ;
- maladies rares ;
- pharmacogénétique clinique ;
- prescriptions ;
- iatrogénie ;
- données biologiques ;
- protéomique ;
- AURAGEN / SeqOIA ;
- autres populations de l'océan Indien ;
- autres DOM-TOM ;
- entraînement de modèles IA ;
- utilisation de modèles commerciaux / API externes.

Pour chaque extension, réexaminer :

- [ ] finalité ;
- [ ] base juridique ;
- [ ] information ;
- [ ] consentement ;
- [ ] compatibilité avec la MR ;
- [ ] AIPD ;
- [ ] destinataires ;
- [ ] transferts ;
- [ ] hébergement ;
- [ ] sécurité ;
- [ ] comité d'accès.

---

# 20. Tableau de suivi courant

| ID | Sujet | Statut | Responsable / interlocuteur | Prochaine action |
|---|---|---:|---|---|
| S01 | Corpus documentaire | ✅ | Projet | maintenir la liste des sources |
| S02 | Circuit EFS exact | 🟨 | EFS / DRCI | documenter le prélèvement et le codage |
| S03 | Qualification RIPH | 🟧 | DRCI | attendre S02 |
| S04 | MR applicable | 🟧 | DPO / DRCI | attendre S02 + S03 |
| S05 | Responsable de traitement | ⬜ | CHU / DPO | traiter après qualification |
| S06 | Statut EFS | ⬜ | DPO / juridique | traiter avec flux et convention |
| S07 | Statut POPgen | ⬜ | DRCI / juridique | préciser autonomie et réutilisation |
| S08 | Volet 100 familles | ⬜ | DRCI / DPO | déterminer intégration ou sous-volet |
| S09 | Dictionnaire de données | ⬜ | scientifique + DPO | après périmètre initial |
| S10 | Architecture de pseudonymisation | ⬜ | DSIO / DPO | après cartographie flux |
| S11 | Infrastructure de production | ⬜ | DSIO | arbitrer on-prem/cloud/hybride |
| S12 | HDS | ⬜ | DPO / DSIO / juridique | qualifier selon architecture et origine des données |
| S13 | CRB | ⬜ | CRB / DRCI | vérifier cadre de conservation |
| S14 | Durées de conservation | ⬜ | DPO / scientifique | après flux et finalités |
| S15 | Gouvernance DAC | ⬜ | projet / DRCI | phase 8 |
| S16 | AIPD | ⬜ | DPO / projet | après stabilisation flux + sécurité |
| S17 | Notice / consentement | ⬜ | DRCI / DPO | seulement après qualification |
| S18 | IA | ⛔ | futur | hors traitement initial |
| S19 | Données cliniques | ⛔ | futur | hors traitement initial |
| S20 | AURAGEN / autres cohortes | ⛔ | futur | nouvelle analyse dédiée |

---

# 21. Prochaine étape recommandée

## Étape active : **Phase 1 — circuit EFS**

Ne pas commencer par l'AIPD, le consentement ou l'architecture cloud.

La prochaine séance de travail doit produire uniquement une description factuelle du parcours :

> **Donneur EFS → information Génome Réunion → inclusion → prélèvement / récupération de matériel biologique → codage → transport → réception CHU/CRB → extraction ADN**

Une fois ce circuit validé, il devient possible de traiter proprement la qualification **RIPH / non-RIPH**.

---

# 22. Journal des décisions

| Date | Décision / constat | Statut | Impact |
|---|---|---|---|
| 2026-09-14 | Le dossier CNIL sera développé section par section et non comme un document massif produit en une fois. | ✅ | méthode générale |
| 2026-09-14 | La phase initiale doit être distinguée des extensions cliniques et IA. | 🟦 À confirmer institutionnellement | simplifie le périmètre réglementaire initial |
| 2026-09-14 | Le recrutement / prélèvement EFS constitue le premier verrou à résoudre avant de figer RIPH ou MR. | ✅ comme priorité méthodologique | Phase 1 prioritaire |
| 2026-09-14 | Les données génomiques individuelles seront traitées comme données personnelles pseudonymisées tant qu'une anonymisation réelle n'est pas démontrée. | 🟦 À valider DPO | vocabulaire et architecture |
| 2026-09-14 | L'AIPD sera réalisée après stabilisation suffisante des flux, acteurs et mesures de sécurité. | ✅ comme ordre de travail | évite une AIPD prématurée |

---

# 23. Historique des mises à jour

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-09-14 | Création du plan maître CNIL / RGPD et du tableau de suivi |

---

**Règle de maintenance :** après chaque décision importante ou validation institutionnelle, mettre à jour au minimum :

1. le statut de la phase concernée ;
2. le tableau de suivi courant ;
3. le journal des décisions ;
4. l'historique des mises à jour.
