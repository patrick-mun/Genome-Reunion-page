# Suivi d’harmonisation méthodologique — Génome Réunion

## Objet du fichier

Ce journal accompagne la branche `agent/harmonisation-methodologie-sdiv` et la pull request associée.

Il constitue le registre central de l’harmonisation entre :

- la synthèse scientifique du projet ;
- la méthodologie opérationnelle de sélection des 350 WGS ;
- la justification scientifique du choix `S_div` ;
- le protocole de validation ;
- l’annexe B consacrée au moteur de simulation ;
- le glossaire canonique des paramètres ;
- la page d’orientation `template/methodologie.html`.

Pour chaque modification, le journal indique le fichier, la version, le commit, les lignes ou ancres concernées, la règle modifiée, la justification, les documents associés et les contrôles effectués.

> **Règle de lecture des lignes**  
> Les numéros de ligne correspondent à l’état du fichier au commit indiqué. Comme ils peuvent se décaler lors des corrections suivantes, le titre de section, l’ancre HTML ou un extrait distinctif est toujours fourni.

> **Principe d’harmonisation**  
> Une correction n’est considérée comme `Harmonisée` que lorsqu’elle est cohérente dans tous les documents actifs concernés. Une modification isolée conserve le statut `Corrigé` ou `En cours`.

---

## Statuts

| Statut | Signification |
|---|---|
| `À traiter` | Correction identifiée mais non appliquée |
| `En cours` | Correction partiellement appliquée ou en contrôle transversal |
| `Corrigé` | Modification appliquée dans le document désigné |
| `Harmonisé` | Règle alignée dans tous les documents actifs concernés |
| `À valider` | Décision scientifique ou méthodologique encore requise |
| `Résultat futur` | Méthode préspécifiée ; résultat à produire après disponibilité des données |
| `Exploratoire` | Analyse utile mais non requise pour la décision confirmatoire principale |
| `Archive` | Version conservée sans mise à jour fonctionnelle |

## Priorités

| Priorité | Interprétation |
|---|---|
| `P0` | Obligatoire avant finalisation de la V3.6 et des documents actifs |
| `P1` | À préspécifier avant l’analyse de la cohorte réelle |
| `P2` | Exploratoire ou théorique, non bloquant pour le gel |

---

## Hiérarchie documentaire

| Document | Rôle de référence |
|---|---|
| Synthèse scientifique | Architecture du projet, ressources, objectifs, calendrier et usages |
| Méthodologie de sélection V3.6 | Définition opérationnelle de la sélection réelle des 350 WGS |
| Justification du choix `S_div` | Raisonnement scientifique, alternatives, limites et traçabilité des choix |
| Protocole de validation | Comparateurs, endpoints, seuils, seeds, règles de gel et verdict |
| Annexe B — simulation | Génération des cohortes simulées, vérité génomique et sorties de validation |
| Glossaire des paramètres | Noms canoniques, définitions, formules et valeurs numériques |
| `template/methodologie.html` | Orientation vers les documents actifs et identification des archives |

### Documents d’audit

Les évaluations et recommandations externes ou préparatoires, dont `GENOME_REUNION_recommandations_V3_6.html`, sont des **sources d’audit**. Elles peuvent enrichir le correctif global, mais ne créent pas automatiquement une règle méthodologique active.

---

## Règles de propagation

| Information | Document maître | Propagation attendue |
|---|---|---|
| Architecture 2 500 SNP, 350 WGS, 100 familles et calendrier | Synthèse scientifique | Résumé cohérent dans la sélection, la justification et le protocole |
| Algorithme réel, scores, quotas, contraintes et sorties | Méthodologie de sélection V3.6 | Synthèse résumée, justification scientifique et paramètres au glossaire |
| Alternatives et fondement scientifique | Justification `S_div` | Renvois dans la sélection et le protocole, sans créer de règle opérationnelle non validée |
| Comparateurs, seuils, endpoints et verdict | Protocole de validation | Statut cohérent dans tous les documents actifs |
| Génération des données et vérité simulée | Annexe B | Pas de règle de sélection finale, sauf renvoi explicite |
| Définitions et valeurs canoniques | Glossaire | Identiques dans tous les documents actifs |
| Versions, liens et archives | `methodologie.html` | Liens exacts et statut documentaire explicite |

---

## Registre synthétique des corrections

| ID | Priorité | Règle ou thème | Document maître | Documents concernés | Statut |
|---|---:|---|---|---|---|
| HARM-001 | P0 | Seuil KING opérationnel `> 0,0442` | Protocole | Synthèse, sélection, justification, glossaire | À traiter |
| HARM-002 | P0 | « strate de profil ancestral inféré » au lieu de « cluster d’ascendance » | Sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-003 | P0 | Allocation hybride secteurs × strates, planchers et redistribution déterministe | Sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-004 | P0 | Allocation nominale 322 + 28 et ratio final gelé après optimisation indépendante | Protocole | Sélection, synthèse, justification | À traiter |
| HARM-005 | P0 | Rôle et calendrier des 100 familles | Synthèse | Sélection, justification, protocole | À traiter |
| HARM-006 | P0 | Fréquences directes puce, imputées, WGS brutes et recalibration conditionnelle | Sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-007 | P0 | IBD dynamique conditionnel au panel déjà sélectionné | Sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-008 | P0 | Séparation entropie ADMIXTURE, rareté globale et distance aux références | Sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-009 | P0 | Distances PCA, nombre de PC et normalisations robustes | Sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-010 | P0 | Pénalité ROH du noyau distincte du score fondateur du bras découverte | Sélection | Synthèse, justification, protocole, annexe B, glossaire | À traiter |
| HARM-011 | P0 | Random brut sans exclusion spécifique d’apparentement | Protocole | Justification, synthèse si nécessaire | À traiter |
| HARM-012 | P1 | Quintiles comme garde-fou candidat à valider | Sélection | Justification, protocole, synthèse | À traiter |
| HARM-013 | P2 | Set-cover limité à l’anneau exploratoire sur données entièrement observées | Justification | Protocole, sélection, annexe B | Exploratoire |
| HARM-014 | P0 | `S_div + bras découverte` = stratégie candidate principale, non encore validée | Protocole | Tous les documents actifs | À traiter |
| HARM-015 | P0 | Archivage explicite des versions obsolètes | `methodologie.html` | Anciennes méthodologies et anciens protocoles | À traiter |
| HARM-016 | P1 | Corrélation et dimensionnalité effective des composantes de `S_div` | Sélection | Justification, protocole, synthèse, glossaire | Résultat futur |
| HARM-017 | P1 | Probabilité d’observation selon l’exposition haplotypique ancestrale | Sélection | Synthèse, justification, protocole, annexe B, glossaire | Résultat futur |
| HARM-018 | P2 | Sous-modularité revendiquée uniquement si démontrée | Justification | Sélection, protocole | Exploratoire |
| HARM-019 | P0 | Stabilité algorithmique ADMIXTURE distincte de la robustesse aux données et du recrutement | Sélection | Synthèse, justification, protocole, glossaire | À traiter |
| HARM-020 | P0 | Méthode préspécifiée distincte des résultats empiriques futurs | Sélection | Synthèse, justification, protocole | À traiter |

---

## Règles canoniques à appliquer

### HARM-001 — KING

- seuil opérationnel : `kinship KING > 0,0442` ;
- `0,0625` uniquement comme repère théorique descriptif ;
- random brut sans exclusion spécifique de parenté.

### HARM-002 — Terminologie ancestrale

- utiliser `strate de profil ancestral inféré` ;
- la définir comme une discrétisation algorithmique d’un espace continu PCA/ADMIXTURE ;
- ne pas l’assimiler à une population biologique, une ethnie ou une origine déclarée ;
- `cellule géo-ancestrale = secteur × strate de profil ancestral inféré`.

### HARM-003 — Allocation hybride

La V3.6 combine : poids sectoriels observés, plancher par secteur, subdivision par strate, plancher des strates rares suffisamment représentées, fusion des petites cellules, redistribution déterministe et traçabilité. Les précédents externes justifient d’éviter une allocation purement proportionnelle, mais pas d’imposer des cellules égales.

### HARM-004 — 322 + 28

- `322 + 28` est l’allocation nominale ;
- plusieurs ratios sont testés sur un lot indépendant ;
- le ratio final est gelé avant le confirmatoire ;
- l’annexe B reste neutre vis-à-vis du ratio final.

### HARM-005 — Familles

Les 100 familles sont externes aux 2 500 candidats et aux 350 WGS de population. Elles servent au contrôle mendélien, au phasage et aux haplotypes, pas aux quotas ni aux fréquences populationnelles. `Haplotype_utility` n’intervient avant le gel que si l’information est disponible ; sinon son poids initial vaut zéro.

### HARM-006 — Fréquences

| Situation | Interprétation autorisée |
|---|---|
| Variant génotypé sur la puce | Fréquence directe dans les 2 500 après QC |
| Variant WGS correctement imputable | Fréquence imputée avec qualité et incertitude documentées |
| Variant observé uniquement dans les 350 WGS | Fréquence brute du panel sélectionné, non populationnelle |
| Méthode de calibration validée | Fréquence recalibrée ou pondérée avec hypothèses publiées |

Ne pas garantir la détection de tous les variants à MAF ≥ 1 %. L’inverse de probabilité de sélection n’est utilisable que si les probabilités d’inclusion sont positives, calculables et validées. Sinon, privilégier imputation, post-stratification ou calibration sur les 2 500.

### HARM-007 — IBD dynamique

`IBD_independence(i | S) = 1 − max(R_IBD(i,j), j ∈ S)` ; recalcul à chaque itération gloutonne. Le filtre KING reste indépendant.

### HARM-008 — ADMIXTURE

- `ADMIX_entropy` : équilibre du mélange individuel ;
- `ADMIX_rarity_global` : rareté ou faible densité du profil ;
- distance éventuelle à un espace de référence externe.

Une forte entropie n’implique pas une forte rareté.

### HARM-009 — PCA

Préspécifier LD-pruning, contrôle des batches, nombre de PC, espace interne ou projeté, métrique, transformation, normalisation et règles des petites cellules. Préférer percentiles ou MAD au min-max sensible aux extrêmes.

### HARM-010 — ROH

- `ROH_penalty_nucleus` : limite la concentration d’autozygotie dans le noyau ;
- `Founder_ROH_score` : recherche un signal fondateur cohérent dans le bras découverte.

Un ROH élevé isolé ne suffit pas. Le seuil de 100 Mb reste un seuil de travail à recalibrer.

### HARM-011 — Random

Le random brut conserve la structure naturelle de la cohorte après QC technique. Il ne reçoit pas de filtre KING spécifique, afin de mesurer l’effet des contraintes de parenté des autres stratégies.

### HARM-012 — Quintiles

Les proportions proposées sont un garde-fou candidat. Comparer avec une version sans quintiles dans l’exploratoire, puis geler uniquement si la validation indépendante le soutient.

### HARM-013 — Set-cover

Comparateur exploratoire, pas cinquième stratégie confirmatoire. Évaluation dans les simulations ou une cohorte entièrement séquencée. Variantes possibles : `set-cover_puce` et `set-cover_oracle_WGS`. Ne pas annoncer d’évaluation WGS réelle chez des individus non séquencés.

### HARM-014 — Statut de la stratégie

> `S_div + bras découverte` constitue la stratégie candidate principale en raison de sa cohérence théorique. Son adoption définitive dépend du protocole confirmatoire et du gel des paramètres sur un lot indépendant.

### HARM-016 — Corrélation des composantes

Préspécifier corrélations de Spearman, analyses globales et par strate si possible, PCA des composantes standardisées, variance expliquée, diagnostic de colinéarité et stabilité selon PCA, ADMIXTURE, IBD et ROH. La V3.6 décrit la méthode ; les figures appartiendront au rapport d’analyse des 2 500.

### HARM-017 — Exposition haplotypique ancestrale

Pour une composante `k` : `H_k = 2 × Σ q_ik`. Pour une fréquence `p_k` : `P(observation ≥ 1) ≈ 1 − (1 − p_k)^(H_k)`. Présenter cette valeur comme approximation théorique, à compléter par indépendance haplotypique, ascendance locale et simulations.

### HARM-018 — Sous-modularité

Formaliser d’abord la fonction d’ensemble. Ne revendiquer une garantie d’approximation que si monotonie et sous-modularité sont démontrées pour la fonction réellement utilisée.

### HARM-019 — Stabilité ADMIXTURE

Distinguer :

1. stabilité entre seeds et initialisations ;
2. robustesse aux marqueurs, batches, QC et références ;
3. représentativité du recrutement EFS.

Les multi-seeds ne corrigent pas un recrutement déséquilibré.

### HARM-020 — Méthode et résultats

Les documents méthodologiques préspécifient les calculs. Les valeurs, figures et performances obtenues sur les 2 500, les 350 WGS ou les simulations sont consignées dans les rapports d’analyse, sauf mise à jour explicitement versionnée.

---

## Intégration de la justification du choix `S_div`

### AJOUT-001 — Document de justification

- **Source fournie :** `GENOME_REUNION_justification_choix_Sdiv(2).html` ;
- **Document publié dans le dépôt :** `template/GENOME_REUNION_justification_choix_Sdiv.html` ;
- **Commit du document principal :** `362274d8a45eb3b235d53059de800e3fc1c7ef8b` ;
- **Lignes :** fichier principal entier, environ L1–L282 ;
- **Ancres :** `#cover`, `#toc`, chargement de `sdiv_parts/s1.html` à `sdiv_parts/s8.html` ;
- **Statut :** `En cours`.

**Modification appliquée**

Le document absent du dépôt a été ajouté sous un nom stable. Afin de conserver des sources lisibles et modifiables, le contenu scientifique est organisé en huit fichiers de section assemblés dans une page unique sur GitHub Pages.

**Sections ajoutées**

| Fichier | Ancre | Contenu | Commit |
|---|---|---|---|
| `template/sdiv_parts/s1.html` | `#s1` | Objet et cahier des charges | `4cd69f7520da4733ad5ab9fc0f98dddd8e47e1cf` |
| `template/sdiv_parts/s2.html` | `#s2` | Contraintes de la population insulaire admixée | `48eefaac7724d0d490e141ef21fe3588ae51aabd` |
| `template/sdiv_parts/s3.html` | `#s3` | Évaluation des méthodologies existantes | `790cad835ca3ca0e07449f6c18298c93b65e9a89` |
| `template/sdiv_parts/s4.html` | `#s4` | Couverture d’ensemble | `8f3890f965e75e49da1bd5d9187ab65dbd2e6701` |
| `template/sdiv_parts/s5.html` | `#s5` | Construction de `S_div` | `25fa11be8d265f90879f40945d346b39c577b369` |
| `template/sdiv_parts/s6.html` | `#s6` | Bras de découverte | `8082da566ab8e7e97ecbfde870cb6476bed03558` |
| `template/sdiv_parts/s7.html` | `#s7` | Traçabilité et limites | `433ccd4b5effe757f1d08de2571bc737c5667459` |
| `template/sdiv_parts/s8.html` | `#s8` | Références | `e308d705f4e0759e35d6d3b3be7b7ba328fee95b` |

**Important**

L’ajout au dépôt ne signifie pas que le texte est déjà harmonisé. Les formulations V3.5, le seuil KING `0,0625`, les cellules équilibrées, la terminologie « cluster », les fréquences et les garanties de détection restent à corriger selon HARM-001 à HARM-020.

### AJOUT-002 — Carte dans la landing page méthodologique

- **Fichier :** `template/methodologie.html` ;
- **Commit :** `3974dd15a5be78f9f1b9e4c5c45af490dc205c96` ;
- **Section :** grille documentaire, carte « Justification du choix méthodologique S_div » ;
- **Lien :** `GENOME_REUNION_justification_choix_Sdiv.html` ;
- **Statut :** `Corrigé`.

La landing page comporte désormais cinq cartes : méthodologie de sélection, justification `S_div`, protocole de validation, moteur de simulation et glossaire. Les liens internes du dépôt utilisent des chemins relatifs adaptés à GitHub Pages.

---

## Matrice documentaire de contrôle

| Document | Corrections principales |
|---|---|
| Synthèse scientifique | HARM-001 à 010, 012, 014, 016, 017, 019, 020 |
| Méthodologie de sélection V3.6 | HARM-001 à 010, 012 à 020 |
| Justification `S_div` | HARM-001 à 008, 010 à 020 |
| Protocole de validation | HARM-001 à 014, 016 à 020 selon portée |
| Annexe B | HARM-010, 013, 017 et renvois terminologiques seulement |
| Glossaire | HARM-001 à 010, 016, 017, 019 |
| `methodologie.html` | HARM-014, HARM-015, liens et versions |

---

## Historique des commits

| Date | Commit | Fichiers | Résumé |
|---|---|---|---|
| 2026-07-24 | `9b0c2b8f2147e825c3b0cc300b43bda7a8ac0659` | `SUIVI_HARMONISATION_METHODOLOGIE.md` | Création du registre |
| 2026-07-24 | `0dd4c93999210369d926c852a4bc4381a7c1e233` | registre | Intégration des recommandations V3.6 pertinentes |
| 2026-07-24 | `4cd69f7` à `e308d70` | `template/sdiv_parts/` | Ajout des huit sections de la justification |
| 2026-07-24 | `362274d8a45eb3b235d53059de800e3fc1c7ef8b` | page principale `S_div` | Assemblage de la page unique |
| 2026-07-24 | `3974dd15a5be78f9f1b9e4c5c45af490dc205c96` | `template/methodologie.html` | Ajout de la carte et normalisation des liens |
| 2026-07-24 | À compléter par ce commit | registre | Enregistrement de l’intégration `S_div` |

---

## Contrôle transversal avant pull request

- [ ] Aucun seuil KING opérationnel différent de `> 0,0442` dans les documents actifs
- [ ] `0,0625` utilisé uniquement comme repère théorique descriptif
- [ ] Terminologie « strate de profil ancestral inféré » harmonisée
- [ ] Allocation hybride documentée et cellules égales non imposées
- [ ] Allocation nominale 322 + 28 distinguée du ratio final validé
- [ ] Rôle des 100 familles distinct des 2 500 candidats et des 350 WGS
- [ ] Random brut sans exclusion spécifique de parenté
- [ ] IBD recalculé dynamiquement pendant la sélection
- [ ] Entropie, rareté et distance aux références séparées
- [ ] Pénalité ROH du noyau distincte du score fondateur
- [ ] Fréquences des 350 WGS non présentées comme automatiquement populationnelles
- [ ] Set-cover limité à l’exploratoire
- [ ] `S_div + bras découverte` présenté comme stratégie candidate
- [ ] Méthodes préspécifiées séparées des résultats futurs
- [ ] Stabilité ADMIXTURE séparée de la représentativité du recrutement
- [ ] Versions actives et archives identifiées
- [x] Justification `S_div` présente dans le dépôt
- [x] Carte `S_div` présente dans `template/methodologie.html`
- [ ] Chargement des huit sections contrôlé sur GitHub Pages après fusion
- [ ] Pagination Paged.js contrôlée après fusion
- [ ] Tous les liens internes et externes vérifiés
- [ ] Tous les fichiers HTML actifs validés

---

## Décisions ouvertes

| ID | Décision | Statut |
|---|---|---|
| — | Aucune décision supplémentaire requise pour l’ajout du document et de sa carte | Clos |

Les décisions scientifiques restantes sont celles portées par HARM-001 à HARM-020 et seront traitées dans l’ordre défini par la hiérarchie documentaire.
