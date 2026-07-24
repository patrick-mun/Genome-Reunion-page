# Suivi d’harmonisation méthodologique — Génome Réunion

## Objet du fichier

Ce journal accompagne la branche `agent/harmonisation-methodologie-sdiv` et la pull request associée.

Il constitue le registre central de l’harmonisation documentaire entre :

- la synthèse scientifique du projet ;
- la méthodologie opérationnelle de sélection des 350 WGS ;
- la justification scientifique du score `S_div` ;
- le protocole de validation ;
- l’annexe de simulation ;
- le glossaire des paramètres ;
- la page d’orientation `methodologie.html`.

Il recense, pour chaque document modifié :

- le chemin du fichier ;
- la version avant et après modification ;
- les lignes concernées dans l’état de la branche au commit indiqué ;
- le titre de section ou l’ancre HTML correspondante ;
- la règle antérieure ;
- la correction appliquée ;
- la justification scientifique ou documentaire ;
- les autres documents à harmoniser sur la même règle ;
- le statut de validation.

> **Règle de lecture des lignes**  
> Les numéros de ligne correspondent à l’état du fichier dans le commit mentionné. Comme ils peuvent se décaler lors de corrections ultérieures, le titre de section, l’identifiant HTML ou un extrait distinctif est toujours indiqué en complément.

> **Principe d’harmonisation**  
> Une correction n’est considérée comme terminée que lorsqu’elle est cohérente dans tous les documents actifs concernés. La modification d’un seul document ne suffit pas à attribuer le statut `Harmonisé`.

---

## Statuts utilisés

| Statut | Signification |
|---|---|
| `À traiter` | Correction identifiée mais non encore appliquée |
| `En cours` | Correction appliquée partiellement ou en cours de contrôle transversal |
| `Corrigé` | Modification appliquée dans le document concerné |
| `Harmonisé` | Règle alignée dans tous les documents actifs concernés |
| `À valider` | Correction prête mais nécessitant une décision scientifique ou méthodologique |
| `Résultat futur` | Méthode préspécifiée, résultat à produire après disponibilité des données |
| `Exploratoire` | Analyse utile mais non requise pour la décision confirmatoire principale |
| `Archive` | Ancienne version conservée sans mise à jour fonctionnelle |

---

## Niveaux de priorité

| Priorité | Interprétation |
|---|---|
| `P0` | Correction obligatoire avant finalisation de la V3.6 et de la documentation active |
| `P1` | Analyse ou précision méthodologique à préspécifier avant l’analyse réelle |
| `P2` | Analyse exploratoire ou développement théorique non bloquant pour le gel |

---

## Hiérarchie documentaire retenue

| Document | Rôle de référence |
|---|---|
| Synthèse scientifique | Architecture générale du projet, ressources, objectifs, calendrier et usages |
| Méthodologie de sélection V3.6 | Définition opérationnelle de la sélection réelle des 350 WGS |
| Justification du choix `S_div` | Raisonnement scientifique, limites et comparaison des alternatives |
| Protocole de validation | Comparateurs, endpoints, seuils, seeds, règles de gel et verdict |
| Annexe B — simulation | Génération des cohortes simulées, vérité génomique et sorties nécessaires à la validation |
| Glossaire des paramètres | Noms canoniques, définitions, formules et valeurs numériques |
| `methodologie.html` | Page d’orientation vers les documents actifs et les archives |

### Documents d’audit et de travail

Les documents d’évaluation ou de recommandations, dont `GENOME_REUNION_recommandations_V3_6.html`, sont conservés comme **sources d’audit**. Ils peuvent enrichir le correctif global, mais ne deviennent pas automatiquement des documents méthodologiques actifs. Toute recommandation retenue doit être réadaptée à l’architecture documentaire ci-dessus.

---

## Règles de propagation entre documents

| Type d’information | Document maître | Propagation attendue |
|---|---|---|
| Architecture 2 500 SNP, 350 WGS, 100 familles, calendrier | Synthèse scientifique | Résumé cohérent dans la sélection et le protocole |
| Algorithme réel, scores, quotas, contraintes, sorties | Méthodologie de sélection V3.6 | Résumé dans la synthèse, justification dans `S_div`, paramètres au glossaire |
| Alternatives et fondement scientifique | Justification `S_div` | Référence dans la sélection et le protocole, sans créer de nouvelle règle opérationnelle non validée |
| Comparateurs, seuils, endpoints et verdict | Protocole de validation | Statut cohérent dans tous les documents actifs |
| Vérité simulée et génération des données | Annexe B | Ne pas y introduire les règles de sélection finale sauf renvois explicites |
| Définitions et valeurs canoniques | Glossaire | Identiques dans tous les documents actifs |
| Version et statut des documents | `methodologie.html` | Liens exacts, versions actives, archives clairement séparées |

---

## Registre synthétique des corrections

| ID | Priorité | Règle ou thème | Document maître | Documents concernés | Statut |
|---|---:|---|---|---|---|
| HARM-001 | P0 | Seuil KING opérationnel `> 0,0442` | Protocole de validation | Synthèse, sélection, justification, glossaire | À traiter |
| HARM-002 | P0 | Remplacement de « cluster d’ascendance » par « strate de profil ancestral inféré » | Méthodologie de sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-003 | P0 | Allocation hybride secteurs × strates avec planchers et redistribution déterministe | Méthodologie de sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-004 | P0 | Allocation nominale 322 + 28, ratio final gelé après optimisation indépendante | Protocole de validation | Sélection, synthèse, justification | À traiter |
| HARM-005 | P0 | Rôle et calendrier des 100 familles | Synthèse scientifique | Sélection, justification, protocole | À traiter |
| HARM-006 | P0 | Distinction fréquences directes puce, fréquences imputées, fréquences WGS brutes et recalibration conditionnelle | Méthodologie de sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-007 | P0 | IBD dynamique conditionnel à l’ensemble déjà sélectionné | Méthodologie de sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-008 | P0 | Séparation entropie ADMIXTURE, rareté globale et distance aux références | Méthodologie de sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-009 | P0 | Définition robuste des distances PCA, du nombre de PC et des normalisations | Méthodologie de sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-010 | P0 | Distinction pénalité ROH du noyau / score fondateur du bras découverte | Méthodologie de sélection | Synthèse, justification, protocole, annexe B, glossaire | À traiter |
| HARM-011 | P0 | Random brut sans exclusion spécifique d’apparentement | Protocole de validation | Justification, synthèse si nécessaire | À traiter |
| HARM-012 | P1 | Quintiles comme garde-fou candidat à valider, et non comme vérité établie | Méthodologie de sélection | Justification, protocole, synthèse | À traiter |
| HARM-013 | P2 | Set-cover limité à l’anneau exploratoire et évalué sur données entièrement observées | Justification `S_div` | Protocole, sélection, annexe B | Exploratoire |
| HARM-014 | P0 | `S_div + bras découverte` = stratégie candidate principale, non encore validée | Protocole de validation | Tous les documents actifs | À traiter |
| HARM-015 | P0 | Archivage explicite des versions obsolètes | `methodologie.html` | Anciennes méthodologies et anciens protocoles | À traiter |
| HARM-016 | P1 | Diagnostic de corrélation et de dimensionnalité effective des composantes de `S_div` | Méthodologie de sélection | Justification, protocole, synthèse, glossaire | Résultat futur |
| HARM-017 | P1 | Probabilité théorique d’observation selon l’exposition haplotypique ancestrale | Méthodologie de sélection | Synthèse, justification, protocole, annexe B, glossaire | Résultat futur |
| HARM-018 | P2 | Formalisation de la fonction d’ensemble et sous-modularité uniquement si démontrée | Justification `S_div` | Sélection, protocole | Exploratoire |
| HARM-019 | P0 | Distinction stabilité algorithmique ADMIXTURE, robustesse aux données et représentativité du recrutement | Méthodologie de sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-020 | P0 | Séparation explicite entre méthode préspécifiée et résultats empiriques futurs | Méthodologie de sélection | Synthèse, justification, protocole | À traiter |

---

## Précisions canoniques à appliquer

### HARM-001 — Seuil KING

- Le seuil opérationnel d’exclusion dans les stratégies concernées est `kinship KING > 0,0442`.
- La valeur `0,0625` peut apparaître uniquement comme espérance théorique descriptive correspondant approximativement à des cousins germains.
- Le comparateur random brut ne reçoit pas d’exclusion spécifique de parenté.

### HARM-002 — Terminologie ancestrale

- Utiliser `strate de profil ancestral inféré`.
- Définir cette strate comme une discrétisation algorithmique d’un espace continu PCA/ADMIXTURE.
- Ne pas l’assimiler à une population biologique, une ethnie ou une origine déclarée.
- Définir la `cellule géo-ancestrale` comme `secteur × strate de profil ancestral inféré`.

### HARM-003 — Allocation hybride

La V3.6 doit combiner :

1. les poids sectoriels observés dans la cohorte candidate ;
2. un plancher minimal par secteur ;
3. une subdivision entre strates de profils ancestraux inférés ;
4. des planchers pour les strates rares suffisamment représentées ;
5. des règles explicites de fusion des petites cellules ;
6. une redistribution déterministe des places non attribuées ;
7. la traçabilité de chaque décision d’allocation.

La littérature ou les précédents externes peuvent justifier d’éviter une allocation purement proportionnelle, mais ne doivent pas être utilisés pour imposer artificiellement des cellules de taille égale.

### HARM-004 — Allocation 322 + 28

- `322 + 28` constitue l’allocation nominale de déploiement.
- Le protocole conserve la responsabilité de tester plusieurs ratios sur un lot indépendant.
- Le ratio final est gelé avant l’évaluation confirmatoire.
- L’annexe B reste neutre vis-à-vis du ratio final et fournit seulement les données nécessaires à son évaluation.

### HARM-005 — Familles

- Les 100 familles sont externes aux 2 500 candidats et aux 350 WGS de population.
- Elles sont utilisées pour le contrôle mendélien, le phasage et l’étude des haplotypes.
- Elles ne contribuent ni aux quotas de sélection ni à l’estimation des fréquences populationnelles.
- Le terme `Haplotype_utility` n’est utilisé dans la sélection initiale que si une information familiale ou de phasage suffisante est disponible avant le gel des 350 ; sinon son poids initial est fixé à zéro et les familles sont exploitées secondairement.

### HARM-006 — Fréquences et division puce/WGS

La documentation doit distinguer quatre situations :

| Situation | Interprétation autorisée |
|---|---|
| Variant directement génotypé sur la puce | Fréquence directe dans les 2 500 après QC |
| Variant WGS correctement imputable dans les 2 500 | Fréquence imputée avec seuils de qualité et incertitude documentés |
| Variant observé uniquement dans les 350 WGS | Fréquence brute du panel sélectionné, non assimilable à une fréquence populationnelle |
| Variant disposant d’une méthode de calibration validée | Fréquence recalibrée ou pondérée, avec méthode, hypothèses et incertitude publiées |

Règles supplémentaires :

- ne pas affirmer que les 350 WGS garantissent la détection de tous les variants à MAF ≥ 1 % ;
- la probabilité théorique calculée sur 700 haplotypes indépendants ne constitue pas une garantie dans un panel enrichi et structuré ;
- la pondération inverse des probabilités de sélection n’est utilisable que si les probabilités d’inclusion sont strictement positives, calculables et validées ;
- en l’absence de telles probabilités, privilégier l’imputation dans les 2 500, la post-stratification ou une calibration sur la cohorte SNP ;
- les règles de non-publication d’une fréquence populationnelle insuffisamment soutenue doivent être explicites.

### HARM-007 — IBD dynamique

La composante d’indépendance doit être définie conditionnellement au panel déjà retenu, par exemple :

`IBD_independence(i | S) = 1 − max(R_IBD(i,j), j ∈ S)`

Elle est recalculée à chaque itération gloutonne. Le filtre dur KING reste indépendant de cette composante dynamique.

### HARM-008 — Entropie et rareté ADMIXTURE

Distinguer :

- `ADMIX_entropy` : équilibre du mélange individuel ;
- `ADMIX_rarity_global` : rareté ou faible densité du profil ancestral dans la cohorte ;
- la distance éventuelle à un espace de référence externe.

Une forte entropie ne signifie pas automatiquement qu’un profil est rare.

### HARM-009 — PCA

La V3.6 doit préciser :

- le LD-pruning ;
- le contrôle des batches ;
- le nombre de composantes principales utilisé ;
- l’espace interne ou projeté sur référence ;
- la métrique de distance ;
- la transformation et la normalisation ;
- les règles applicables aux petites cellules ;
- la préférence pour une transformation robuste par percentiles ou MAD plutôt qu’un min-max sensible aux extrêmes.

### HARM-010 — ROH

Distinguer :

- `ROH_penalty_nucleus`, destiné à éviter une concentration excessive d’individus fortement autozygotes dans le noyau ;
- `Founder_ROH_score`, utilisable dans le bras découverte lorsqu’un signal fondateur cohérent est recherché.

Un ROH individuel élevé ne constitue pas, à lui seul, un signal fondateur. Le seuil de 100 Mb reste un seuil de travail à recalibrer et non une vérité universelle.

### HARM-011 — Comparateur random

Le random brut doit conserver la structure naturelle de la cohorte après QC technique, sans exclusion spécifique fondée sur KING. Il sert précisément à mesurer l’effet des contraintes de parenté introduites dans les autres stratégies.

### HARM-012 — Quintiles

Les proportions de quintiles proposées constituent un garde-fou candidat contre une sélection excessive des extrêmes. Elles doivent être comparées à une version sans quintiles dans l’exploratoire, puis gelées uniquement si la validation indépendante les soutient.

### HARM-013 — Set-cover

- Le set-cover reste un comparateur exploratoire, pas une cinquième stratégie confirmatoire.
- Il est évalué dans les simulations ou dans une cohorte entièrement séquencée, où l’information est disponible pour tous les candidats.
- Deux variantes peuvent être distinguées : `set-cover_puce` et `set-cover_oracle_WGS`.
- Il ne faut pas annoncer une évaluation WGS ex post sur des individus réels non séquencés.

### HARM-014 — Statut de la stratégie

Formulation canonique :

> `S_div + bras découverte` constitue la stratégie candidate principale en raison de sa cohérence théorique. Son adoption définitive dépend du protocole confirmatoire et du gel des paramètres sur un lot indépendant.

### HARM-016 — Corrélation des composantes de `S_div`

La méthode doit préspécifier :

- une matrice de corrélation de Spearman entre les composantes ;
- une analyse globale et, lorsque les effectifs le permettent, par secteur ou strate ;
- une PCA des composantes standardisées ;
- la variance expliquée par les axes ;
- un diagnostic de colinéarité ou de conditionnement ;
- une analyse de stabilité selon les paramètres PCA, ADMIXTURE, IBD et ROH.

La V3.6 décrit la méthode. Les figures et résultats seront ajoutés au rapport d’analyse après traitement des 2 500 individus.

### HARM-017 — Exposition haplotypique ancestrale

Définir, pour une composante ancestrale `k`, une exposition attendue :

`H_k = 2 × somme(q_ik, i ∈ S)`

Pour une fréquence ancestrale hypothétique `p_k`, la probabilité approximative d’observer au moins une copie peut être exprimée par :

`P(observation ≥ 1) = 1 − (1 − p_k) ^ H_k`

Cette valeur doit être présentée comme une approximation théorique :

- elle ne remplace pas l’ascendance locale ;
- elle ne garantit pas l’indépendance des haplotypes ;
- elle doit être confrontée aux données simulées où la vérité ancestrale est connue ;
- elle peut soutenir une discussion sur l’extension future du nombre de WGS.

Le terme recommandé est `probabilité théorique d’observation selon l’exposition haplotypique ancestrale`, et non `plancher de détection`.

### HARM-018 — Sous-modularité

- Formaliser d’abord la fonction d’ensemble réellement optimisée.
- Déterminer ensuite si elle est monotone et sous-modulaire.
- Ne revendiquer aucune garantie d’approximation sans démonstration formelle.
- Conserver cette analyse dans une note mathématique, une annexe ou un développement méthodologique exploratoire.

### HARM-019 — Stabilité ADMIXTURE et représentativité

Distinguer trois niveaux :

| Niveau | Question |
|---|---|
| Stabilité algorithmique | Les composantes sont-elles reproductibles entre seeds et initialisations ? |
| Robustesse aux données | Résistent-elles aux marqueurs, QC, batches et panels de référence ? |
| Représentativité du recrutement | La cohorte couvre-t-elle suffisamment la diversité géographique et ancestrale de la population cible ? |

Les multi-seeds et l’alignement des composantes ne corrigent pas un biais de recrutement, une commune sous-représentée ou une absence de trajectoire ancestrale.

### HARM-020 — Méthode versus résultats futurs

Chaque document doit distinguer clairement :

- les règles et analyses préspécifiées avant les données ;
- les paramètres gelés avant le confirmatoire ;
- les résultats empiriques produits après analyse ;
- les analyses exploratoires qui ne participent pas au verdict principal.

Aucune figure fondée sur les 2 500 individus ne doit être présentée comme disponible avant l’analyse réelle.

---

## Matrice d’harmonisation par document

| Document | Corrections principales à intégrer |
|---|---|
| Synthèse scientifique | HARM-001 à 006, résumé de HARM-007 à 010, HARM-014, HARM-017, HARM-019 et HARM-020 |
| Méthodologie de sélection V3.6 | HARM-001 à 010, HARM-012, HARM-014, HARM-016 à 020 |
| Justification du choix `S_div` | HARM-001 à 010, HARM-012 à 014, HARM-016 à 019 |
| Protocole de validation | HARM-001 à 005, HARM-007 à 014, HARM-016 à 020 |
| Annexe B — simulation | HARM-010, sorties nécessaires à HARM-013 et HARM-017, renvois terminologiques sans introduire les règles de sélection finale |
| Glossaire | Définitions canoniques de HARM-001 à 010, HARM-016, HARM-017 et HARM-019 |
| `methodologie.html` | HARM-014, HARM-015, versions, rôles, liens et distinction documents actifs / audits / archives |

---

## Ordre de traitement retenu

1. Corriger la contradiction du random dans le protocole de validation.
2. Construire ou réviser la méthodologie de sélection V3.6, document opérationnel central.
3. Corriger la justification scientifique de `S_div` et ses alternatives.
4. Harmoniser la synthèse scientifique.
5. Mettre à jour le glossaire canonique.
6. Vérifier l’annexe B uniquement sur les sorties, renvois et termes concernés.
7. Mettre à jour `methodologie.html` et classer les anciennes versions en archives.
8. Effectuer le contrôle transversal de cohérence, de HTML, de pagination et de liens.
9. Mettre à jour ce journal avec les lignes exactes et les commits de chaque fichier.

---

## Détail des modifications

### Entrée type à reproduire

#### HARM-XXX — Titre de la correction

- **Fichier :** `chemin/vers/fichier.html`
- **Version :** `ancienne → nouvelle`
- **Commit :** `à renseigner`
- **Lignes après modification :** `Lxxx–Lyyy`
- **Section / ancre :** `Titre de section` / `#identifiant`
- **Statut :** `À traiter`

**Règle antérieure**

> Extrait ou résumé de la formulation remplacée.

**Modification appliquée**

> Nouvelle formulation ou description précise de la modification.

**Justification**

Explication scientifique, méthodologique ou documentaire.

**Documents associés à contrôler**

- `autre/fichier-1.html`
- `autre/fichier-2.html`

**Contrôles effectués**

- [ ] Cohérence terminologique
- [ ] Cohérence des valeurs numériques
- [ ] Cohérence avec le glossaire
- [ ] Distinction méthode / résultat futur
- [ ] Validation du HTML
- [ ] Contrôle de la pagination Paged.js
- [ ] Contrôle des liens internes et externes

---

## Historique des commits d’harmonisation

| Date | Commit | Fichiers | Résumé | Contrôles |
|---|---|---|---|---|
| 2026-07-24 | `9b0c2b8f2147e825c3b0cc300b43bda7a8ac0659` | `SUIVI_HARMONISATION_METHODOLOGIE.md` | Création du registre central de suivi | Structure initiale créée |
| 2026-07-24 | Voir historique de la branche | `SUIVI_HARMONISATION_METHODOLOGIE.md` | Intégration réadaptée des recommandations complémentaires V3.6 | Matrice et règles transversales enrichies |

---

## Contrôle transversal avant ouverture ou mise à jour de la pull request

### Seuils, terminologie et allocation

- [ ] Aucun seuil KING opérationnel différent de `> 0,0442` dans les documents actifs
- [ ] `0,0625` utilisé uniquement comme repère théorique descriptif
- [ ] Terminologie `strate de profil ancestral inféré` harmonisée
- [ ] Aucune strate assimilée à une population biologique ou à une origine déclarée
- [ ] Allocation hybride, petites cellules, planchers et redistribution documentés
- [ ] Allocation nominale 322 + 28 clairement distinguée du ratio final validé

### Cohortes, familles et fréquences

- [ ] Rôle des 100 familles distingué de la cohorte des 2 500 et des 350 WGS
- [ ] Fréquences puce directes, imputées, WGS brutes et recalibrées distinguées
- [ ] Aucune fréquence issue des seuls 350 WGS présentée automatiquement comme populationnelle
- [ ] Aucune garantie absolue de détection des variants à MAF ≥ 1 %
- [ ] Règles de non-publication ou de qualification des fréquences explicites

### Scores et algorithmes

- [ ] IBD dynamique recalculé à chaque itération
- [ ] Entropie ADMIXTURE distincte de la rareté globale
- [ ] Paramètres PCA et transformations robustes préspécifiés
- [ ] Pénalité ROH du noyau distincte du signal fondateur du bras découverte
- [ ] Quintiles présentés comme garde-fou candidat
- [ ] Corrélation et dimensionnalité des composantes de `S_div` préspécifiées

### Validation et analyses exploratoires

- [ ] Stratégie `S_div + bras découverte` décrite comme candidate principale
- [ ] Random brut défini sans exclusion spécifique de parenté
- [ ] Set-cover conservé dans l’anneau exploratoire
- [ ] Aucune comparaison WGS réelle annoncée pour des candidats non séquencés
- [ ] Sous-modularité non revendiquée sans démonstration
- [ ] Stabilité algorithmique ADMIXTURE distinguée de la représentativité du recrutement
- [ ] Méthodes préspécifiées distinguées des résultats empiriques futurs

### Documents et rendu

- [ ] Versions actives, documents d’audit et archives clairement identifiés
- [ ] Tous les liens de `methodologie.html` vérifiés
- [ ] Tous les fichiers HTML actifs validés
- [ ] Pagination et rendu d’impression vérifiés
- [ ] Les numéros de ligne et ancres sont renseignés dans ce journal
- [ ] Chaque correction indique son commit et ses documents associés

---

## Décisions restant éventuellement à valider

Cette section est réservée aux points nécessitant une décision explicite avant harmonisation définitive.

| ID | Décision attendue | Options | Décision retenue | Date |
|---|---|---|---|---|
| HARM-012 | Forme définitive du garde-fou par quintiles | Stratifié / non stratifié / autre distribution gelée | À déterminer par validation indépendante | — |
| HARM-018 | Poursuite d’une démonstration de sous-modularité | Note théorique / annexe / abandon si non applicable | Non bloquant | — |
