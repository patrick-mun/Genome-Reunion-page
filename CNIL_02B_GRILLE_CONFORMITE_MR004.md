# Génome Réunion — Grille de conformité MR-004

**Document :** CNIL_02B_GRILLE_CONFORMITE_MR004  
**Date :** 14 septembre 2026  
**Statut :** grille de travail — à valider avec DRCI / DPO  

---

## 1. Objet

Cette grille confronte les exigences de la **MR-004** au périmètre actuellement défini pour la phase initiale du projet **Génome Réunion**.

Elle ne vaut pas déclaration de conformité. Elle sert à identifier les points déjà compatibles, les éléments à documenter et les éventuels obstacles qui imposeraient une demande d'autorisation spécifique.

### Légende

| Statut | Signification |
|---|---|
| ✅ Conforme en conception | élément déjà compatible avec la MR-004 au vu du projet décrit |
| 🟦 Probable / à valider | compatible en principe, mais validation DRCI / DPO ou preuve formelle nécessaire |
| 🟨 À compléter | exigence identifiable, mais document / procédure / justification à produire |
| 🟧 Verrou | doit être résolu avant de conclure à la conformité MR-004 |
| ⛔ Non conforme | incompatibilité identifiée avec la MR-004 |
| — | Non applicable à ce stade |

---

# 2. Résumé des verrous prioritaires

Aucune incompatibilité certaine avec la MR-004 n'est identifiée à ce stade.

Les principaux verrous sont toutefois :

1. **validation formelle de la qualification RNIPH** ;
2. **identification du responsable de traitement** ;
3. **choix et documentation de la base légale RGPD** ;
4. **protocole scientifique formel validé avant mise en œuvre** ;
5. **formulation de KING / parenté sans finalité d'identification ou de ré-identification** ;
6. **AIPD : absence de risque résiduel élevé après mesures de réduction** ;
7. **durée de conservation de l'étude initiale, distincte de la future ressource durable** ;
8. **qualification et contractualisation des prestataires / partenaires**.

---

# 3. Grille de conformité

## A. Champ d'application de la MR-004

| ID | Exigence MR-004 | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| A01 | La recherche doit être une RNIPH | Aucun acte ou prélèvement supplémentaire ; utilisation d'un reliquat EDTA du don EFS | 🟦 | Validation formelle DRCI |
| A02 | La recherche doit présenter un caractère d'intérêt public | Référentiel génomique populationnel visant amélioration des connaissances et de l'interprétation en santé | 🟦 | Rédiger la justification d'intérêt public dans le protocole |
| A03 | Un protocole doit être rédigé et validé scientifiquement avant le traitement | Corpus scientifique très développé, mais pas encore formalisé comme protocole réglementaire unique MR-004 | 🟨 | Produire et faire valider le protocole officiel |
| A04 | La recherche ne doit pas être une RIPH | Circuit actuel compatible avec RNIPH | 🟦 | Validation DRCI |
| A05 | La recherche génétique ne doit pas avoir pour objet principal ou secondaire l'identification ou la ré-identification par caractéristiques génétiques | KING est utilisé pour estimer la parenté et contrôler la structure, pas pour identifier nominativement les personnes | 🟧 | Inscrire explicitement dans le protocole que KING ne poursuit aucune finalité d'identification / ré-identification |
| A06 | Pas de traitement initial de bases médico-administratives / SNDS relevant d'un autre cadre | Aucun SNDS ni donnée médico-administrative dans la phase initiale | ✅ | Maintenir ces données hors phase initiale |
| A07 | Pas d'appariement par le responsable de traitement entre des données existantes d'un même individu issues de plusieurs centres participants | L'EFS gère le code ; le CHU ne prévoit pas d'appariement nominatif multi-centres | 🟦 | Confirmer l'absence d'appariement nominatif inter-centres par le CHU |
| A08 | Ne pas recourir à l'exception d'information de l'article 14(5)(b) RGPD | Information individuelle prévue à l'EFS | ✅ | Maintenir une information individuelle |
| A09 | L'AIPD ne doit pas conclure à un risque résiduel élevé malgré les mesures | AIPD non encore réalisée | 🟧 | Réaliser l'AIPD avant mise en œuvre ; si risque résiduel élevé, sortir de la MR-004 |
| A10 | Aucun NIR ne doit être traité dans le cadre MR-004 | Aucun NIR prévu | ✅ | Interdire son intégration au traitement scientifique |

---

## B. Responsable de traitement, base légale et responsabilité

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| B01 | Le responsable de traitement doit être identifié | CHU pressenti, mais qualification non encore actée | 🟧 | Validation DPO / juridique / DRCI |
| B02 | La base légale de l'article 6 RGPD doit être définie | Pour un organisme public de recherche, la mission d'intérêt public est une hypothèse forte, mais non encore validée | 🟧 | Faire valider la base légale par le DPO |
| B03 | Une condition de l'article 9 RGPD doit autoriser le traitement des données sensibles | Recherche scientifique : article 9(2)(j) probable | 🟦 | Documenter avec le DPO et la loi Informatique et Libertés |
| B04 | Le DPO doit être associé à la conformité | DPO du CHU identifié comme acteur du projet | 🟦 | Formaliser la revue du dossier |
| B05 | Le responsable de traitement doit vérifier si un engagement de conformité MR-004 existe déjà pour l'établissement | Information inconnue | 🟧 | Vérifier auprès du DPO si le CHU a déjà un engagement MR-004 |
| B06 | Le traitement doit être inscrit au registre RGPD | Pas encore réalisé | 🟨 | Créer / mettre à jour la fiche registre avant mise en œuvre |
| B07 | Le projet doit être enregistré dans le répertoire public prévu pour les recherches MR-004 | Pas encore réalisé | 🟨 | Prévoir l'enregistrement auprès de la Plateforme des données de santé |

---

## C. Origine des données et des échantillons

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| C01 | Les données / échantillons doivent provenir de sources légalement constituées | Reliquat EDTA provenant de l'EFS | 🟦 | Vérifier / documenter le cadre EFS de constitution et transfert |
| C02 | Les bases ou collections biologiques sources doivent avoir accompli les formalités nécessaires | EFS + CRB impliqués | 🟨 | Obtenir la confirmation institutionnelle EFS / CRB |
| C03 | Les panels externes doivent être légalement accessibles | 1000G public ; EGA sous accès contrôlé | 🟨 | Documenter 1000G et chaque dataset EGA dans `CNIL_02A_SOURCES_EXTERNES_REFERENCE.md` |
| C04 | Les conditions contractuelles des bases à accès contrôlé doivent être respectées | EGA soumis à DAC / DAA | 🟨 | Conserver décisions DAC, DAA, limites d'usage et durée d'accès |

---

## D. Pseudonymisation et identification

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| D01 | La base de recherche ne doit pas contenir d'identifiants directs | Le CRB / équipe reçoit un tube codé, sans nom ni prénom | ✅ | Maintenir cette séparation |
| D02 | La correspondance identité ↔ code doit être détenue uniquement par les personnes initialement habilitées | EFS génère le code et conserve la table | ✅ | Formaliser les habilitations EFS |
| D03 | Le code de recherche doit être distinct d'un identifiant source directement exploitable | L'EFS génère un code, mais son format n'est pas encore documenté | 🟨 | Confirmer qu'il s'agit d'un code projet non signifiant et distinct des identifiants EFS habituels |
| D04 | Le CHU ne doit pas disposer de la table d'identification s'il n'en a pas besoin | Le CHU ne la reçoit pas | ✅ | Maintenir cette architecture |
| D05 | Le risque de ré-identification doit être pris en compte dans les outils d'analyse | WGS, parenté, ROH/IBD, rare variants : risque élevé intrinsèque | 🟨 | Mesures spécifiques dans AIPD et gouvernance |

---

## E. Nature et minimisation des données

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| E01 | Chaque catégorie doit être strictement nécessaire et scientifiquement justifiée | Justification scientifique existe globalement mais pas encore sous forme de dictionnaire réglementaire | 🟨 | Phase 4 : dictionnaire de données + justification variable par variable |
| E02 | Données génétiques autorisées si strictement nécessaires | SNP et WGS constituent le cœur scientifique du projet | ✅ | Formaliser la nécessité dans le protocole |
| E03 | Examen génétique sur élément prélevé à une autre fin : information spécifique nécessaire | Accord écrit prévu à l'EFS | 🟨 | Vérifier conformité au régime actuel L.1130-5 et D.1131-22-1 à D.1131-22-5 CSP |
| E04 | Origine ethnique possible uniquement si scientifiquement nécessaire | Ascendance déclarée / structure ancestrale envisagée | 🟨 | Définir vocabulaire, nécessité, granularité et distinction avec ascendance génétique inférée |
| E05 | Âge autorisé si nécessaire | Âge seulement envisagé | 🟦 | Décider en Phase 4 ; ne pas le collecter s'il est inutile |
| E06 | Sexe autorisé si nécessaire | Utilisé notamment pour QC / analyses | 🟨 | Justification formelle dans le protocole |
| E07 | Lieu / centre de prélèvement : ne pas créer une géolocalisation fine injustifiée | Centre EFS prévu comme métadonnée | 🟨 | Utiliser un code de centre / secteur et non une adresse fine |
| E08 | Données cliniques non nécessaires à la phase initiale | Exclues du périmètre initial | ✅ | Maintenir séparation des extensions cliniques |
| E09 | Données 1000G / EGA : seulement les variables nécessaires à l'ancrage / comparaison | Panels utilisés pour PCA, ADMIXTURE, phasage / référence | 🟨 | Minimiser les champs importés et documenter leur rôle analytique |

---

## F. Destinataires, partenaires et sous-traitants

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| F01 | Les destinataires doivent être identifiés, habilités et limités à leur fonction | Cartographie complète non encore réalisée | 🟨 | Phase 3 puis Phase 5 |
| F02 | Les données directement identifiantes doivent rester limitées aux acteurs autorisés | Identité maintenue à l'EFS | ✅ | Maintenir cette séparation |
| F03 | Rôle de l'EFS à qualifier | Source / centre participant possible ; rôle RGPD à confirmer | 🟧 | Phase 3 |
| F04 | Rôle du CRB à qualifier | Centre participant / sous-traitant / service interne selon organisation | 🟧 | Phase 3 / 6 |
| F05 | Rôle de POPgen à qualifier | WGS pris en charge, autonomie scientifique inconnue | 🟧 | Vérifier instructions, réutilisation et conservation des données |
| F06 | Plateforme de génotypage à qualifier | Non encore retenue définitivement | 🟧 | Contrat, localisation et accès aux données |
| F07 | Les sous-traitants doivent être encadrés par un acte conforme à l'article 28 RGPD | Contrats non encore établis | 🟧 | Préparer les clauses contractuelles |
| F08 | Tout nouveau sous-traitant doit faire l'objet d'une évaluation / audit sécurité | Non encore organisé | 🟨 | Intégrer au processus de sélection des prestataires |

---

## G. Information et droits des participants

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| G01 | Information individuelle préalable conforme aux articles 13 / 14 RGPD | Explication + accord écrit prévus, contenu réglementaire non encore rédigé | 🟨 | Phase 9 : notice complète |
| G02 | Caractère facultatif de la participation clairement indiqué | Participation volontaire prévue | ✅ | Le mentionner explicitement dans la notice |
| G03 | Information spécifique sur l'examen génétique | Principe prévu mais texte non encore formalisé | 🟨 | Intégrer les exigences CSP actuelles |
| G04 | Droit d'opposition opérationnel | À organiser via EFS / responsable de traitement | 🟨 | Définir circuit et point de contact |
| G05 | Droit d'accès / rectification opérationnel | Non formalisé | 🟨 | Définir procédure et articulation EFS ↔ CHU |
| G06 | Droit à l'effacement / limitation et exceptions liées à la recherche | Non formalisé | 🟨 | Rédiger procédure de retrait / effacement |
| G07 | Réponse aux demandes dans les délais RGPD | Processus non défini | 🟨 | Procédure DPO / projet |
| G08 | Gestion des découvertes génétiques potentiellement pertinentes | Non encore arbitrée | 🟨 | Procédure conforme à L.1130-5 II et information du participant |

---

## H. Durée de conservation et séparation avec la ressource durable

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| H01 | Données actives de recherche : conservation jusqu'à 2 ans après la dernière publication ou jusqu'au rapport final s'il n'y a pas de publication | Projet vise une ressource durable | 🟧 | Définir une durée propre à l'étude MR-004 et séparer la ressource durable |
| H02 | Archivage ultérieur : maximum 20 ans ou durée réglementaire applicable | Non défini | 🟨 | Phase 9 |
| H03 | Toute nouvelle réutilisation compatible nécessite ses propres formalités | Ressource destinée à d'autres recherches futures | 🟧 | Mettre en place un cadre distinct pour l'entrepôt / ressource durable |

---

## I. Sécurité et AIPD

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| I01 | AIPD obligatoire dans le cadre MR-004 | Non réalisée | 🟧 | Phase 10 |
| I02 | Schéma fonctionnel des flux | Circuit EFS partiellement décrit ; flux complets à faire | 🟨 | Phase 5 |
| I03 | Politique de sécurité formalisée | Architecture envisagée mais non stabilisée | 🟨 | Phase 7 |
| I04 | Gestion des habilitations et authentification | À définir | 🟨 | MFA / RBAC / revue périodique |
| I05 | Traçabilité et journalisation des accès | Prévue dans l'architecture logicielle mais production à finaliser | 🟨 | Phase 7 |
| I06 | Chiffrement des transmissions | Prévu comme exigence | 🟨 | Définir protocoles EFS / CRB / plateformes |
| I07 | Les données ne doivent pas être saisies ou copiées dans des outils hors périmètre autorisé | Règle à formaliser | 🟨 | Interdire stockage local et services non autorisés |
| I08 | Outils d'analyse : limitation des recherches ciblées susceptibles de ré-identifier | Non encore spécifié | 🟨 | Ajouter contrôles dans interface / gouvernance |
| I09 | Sauvegarde / restauration / intégrité | Architecture non finalisée | 🟨 | Phase 7 |
| I10 | Gestion des violations de données | Procédure non encore rédigée | 🟨 | Phase 7 / 11 |

---

## J. Transferts internationaux

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| J01 | Tout transfert de données réunionnaises hors UE doit respecter le chapitre V RGPD | Aucun transfert hors UE confirmé à ce stade | 🟦 | Vérifier localisation POPgen, génotypage, cloud et partenaires |
| J02 | Les personnes doivent être informées des transferts éventuels | Non applicable tant qu'aucun transfert n'est retenu | — | Réévaluer si architecture internationale |
| J03 | L'accès à des données EGA ne doit pas être confondu avec un transfert des données Génome Réunion | EGA utilisé comme source entrante / panel de référence | ✅ | Documenter séparément les conditions EGA |

---

## K. Publication et partage scientifique

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| K01 | Les publications ne doivent pas contenir de données directement identifiantes | Aucun identifiant direct prévu | ✅ | Maintenir la règle |
| K02 | Les données rares / localisées doivent faire l'objet d'un contrôle du risque de ré-identification | Risque important sur variants rares, fondateurs, haplotypes | 🟨 | Politique spécifique Phase 8 |
| K03 | Réanalyse par expert indépendant : accès sécurisé, sans extraction lorsque des données individuelles sont nécessaires | Pas encore organisé | 🟨 | Prévoir une solution d'accès contrôlé |
| K04 | Diffusion scientifique limitée aux données nécessaires | À formaliser | 🟨 | Intégrer dans politique de publication |

---

## L. Panels externes 1000G / EGA

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| L01 | Leur utilisation doit être décrite dans le protocole | 1000G et EGA nécessaires pour ancrage / comparaison | 🟨 | Ajouter une section « Sources externes » au protocole |
| L02 | 1000G / IGSR : données publiques utilisées uniquement dans la finalité scientifique annoncée | Oui | ✅ | Conserver provenance et versions |
| L03 | EGA : accès autorisé par les DAC concernés | Demandes / accès à organiser par dataset | 🟨 | Archiver les autorisations DAC |
| L04 | EGA : respecter DAA, restrictions de finalité, stockage et redistribution | À vérifier pour chaque accession | 🟨 | Matrice par dataset dans `CNIL_02A_SOURCES_EXTERNES_REFERENCE.md` |
| L05 | Aucun dataset externe ne doit devenir une nouvelle cohorte étudiée pour elle-même sans réévaluation réglementaire | Panels utilisés comme référence uniquement | ✅ | Réexaminer si la finalité évolue |

---

## M. Volet des 100 familles

| ID | Exigence | Situation Génome Réunion | Statut | Action |
|---|---|---|---:|---|
| M01 | Le volet familial ne peut être rattaché à cette grille qu'une fois son circuit biologique qualifié | Origine des prélèvements et modalité de recrutement non encore figées | 🟧 | Qualification réglementaire séparée avant intégration |

---

# 4. Conclusion actuelle

## Compatibilité générale

La phase initiale de Génome Réunion apparaît **compatible en principe avec une RNIPH encadrée par la MR-004**, mais la conformité ne peut pas encore être déclarée.

Aucun point n'est actuellement classé **⛔ Non conforme**, mais plusieurs **verrous 🟧** empêchent de conclure :

- validation RNIPH ;
- responsable de traitement ;
- base légale ;
- finalité KING / parenté ;
- AIPD et risque résiduel ;
- durée de conservation versus ressource durable ;
- rôles et contrats EFS / CRB / POPgen / plateformes ;
- volet familles.

## Position de travail

> **La MR-004 reste le cadre prioritaire à poursuivre. La prochaine étape n'est pas de déposer une déclaration, mais de lever les verrous identifiés dans cette grille.**

---

# 5. Ordre recommandé pour lever les verrous

1. **Responsable de traitement + base légale** — DPO / DRCI.
2. **Protocole réglementaire unique** — formaliser la synthèse scientifique existante.
3. **Formulation KING / parenté** — exclure explicitement toute finalité d'identification / ré-identification.
4. **Acteurs et rôles** — EFS, CRB, POPgen, génotypage.
5. **Dictionnaire de données / minimisation**.
6. **Information génétique et droits**.
7. **Durées de conservation et séparation de la ressource durable**.
8. **Architecture / sécurité / AIPD**.
9. **Vérification finale de conformité MR-004**.

---

# 6. Sources officielles principales

- CNIL — MR-004 : https://www.cnil.fr/fr/recherches-nimpliquant-pas-la-personne-humaine-etudes-et-evaluations-dans-le-domaine-de-la-sante
- Légifrance — Délibération CNIL n° 2018-155 du 3 mai 2018 : https://www.legifrance.gouv.fr/cnil/id/CNILTEXT000037202328
- CNIL — Formalités des recherches en santé : https://www.cnil.fr/fr/recherches-sante-quelles-formalites
- Code de la santé publique — article L.1130-5 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043891459
- Code de la santé publique — articles D.1131-22-1 à D.1131-22-5 : https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000048854098
- RGPD — articles 6, 9, 25, 30, 32, 35 et chapitre V : https://eur-lex.europa.eu/eli/reg/2016/679/oj

---

**Règle de maintenance :** toute décision institutionnelle doit entraîner la mise à jour du statut de la ligne concernée et l'ajout de la preuve ou du document associé.