# Méthodologie de sélection géo-ancestrale des 350 WGS — Génome Réunion

**Version :** 3.6  
**Statut :** méthode opérationnelle candidate, à geler après validation indépendante  
**Périmètre :** sélection de 350 individus WGS parmi 2 500 candidats génotypés sur puce SNP  
**Hors périmètre :** les 100 familles nucléaires, recrutées séparément, ne participent ni aux quotas ni aux fréquences populationnelles.

## Résumé opérationnel

La stratégie candidate principale combine un **noyau géo-ancestral** et un **bras de découverte contrôlé**. L'allocation nominale est de **322 + 28**, mais le ratio définitif est choisi sur un lot indépendant puis gelé avant l'évaluation confirmatoire. La sélection est fondée sur des données génétiques inférées, sans utiliser d'étiquette ethnique ou d'origine déclarée.

La méthode poursuit quatre objectifs simultanés :

1. préserver l'ancrage géographique de la cohorte candidate ;
2. couvrir l'espace continu des profils ancestraux inférés ;
3. limiter la redondance familiale et haplotypique ;
4. réserver une capacité explicite aux profils rares, extrêmes ou fondateurs sous-capturés par le noyau.

`S_div + bras découverte` constitue la **stratégie candidate principale en raison de sa cohérence théorique**. Son adoption définitive dépend du protocole confirmatoire et du gel des paramètres sur un lot indépendant.

## 1. Cohortes et rôles respectifs

### 1.1 Cohorte candidate SNP

Les 2 500 participants constituent la base de sélection. Après contrôle qualité, leurs données permettent :

- le calcul des PCA interne et projetée ;
- l'estimation des composantes ADMIXTURE ;
- l'estimation de la parenté KING ;
- la détection des segments IBD et des ROH ;
- la définition des secteurs et des strates de profils ancestraux inférés ;
- l'imputation ultérieure des variants WGS suffisamment imputables.

### 1.2 Panel WGS

Les 350 WGS forment un panel optimisé, et non un échantillon aléatoire simple. Ils servent à la découverte des variants, au phasage, à la construction d'un panel local et à l'étude des signatures fondatrices.

### 1.3 Familles nucléaires

Les 100 familles sont **externes** aux 2 500 candidats et aux 350 WGS de population. Elles servent au contrôle mendélien, au phasage et à l'étude des haplotypes. Elles ne contribuent ni aux quotas de sélection ni à l'estimation directe des fréquences populationnelles.

`Haplotype_utility` n'est activé avant le gel des 350 que si une information familiale ou de phasage suffisante est effectivement disponible. Sinon, son poids initial est fixé à zéro et son usage devient secondaire après séquençage.

## 2. Préparation et contrôle qualité

### 2.1 Jeux de marqueurs

Trois jeux sont produits après harmonisation du build et des brins :

- un jeu **LD-pruned** pour PCA et ADMIXTURE ;
- un jeu dense filtré pour KING, IBD et ROH ;
- un jeu harmonisé puce-WGS pour l'imputation et les audits de concordance.

### 2.2 Contrôles individuels et variants

Les seuils exacts sont gelés dans le protocole d'analyse et tracés par version. Le contrôle comprend au minimum : taux de génotypage, hétérozygotie, duplicats, sex-check lorsque disponible, effets de batch, variants multialléliques, fréquence minimale adaptée à l'analyse et contrôle HWE interprété avec prudence en population structurée.

Le HWE global n'est jamais appliqué comme exclusion aveugle : un effet Wahlund peut produire un écart biologique attendu. Les anomalies sont examinées par batch et, lorsque les effectifs le permettent, par strate.

## 3. Espaces génétiques et strates

### 3.1 PCA

La configuration PCA est préspécifiée :

- méthode de LD-pruning ;
- contrôle des lots techniques ;
- nombre de composantes principales ;
- espace interne et espace projeté sur références ;
- métrique de distance ;
- transformation et normalisation ;
- règles applicables aux petites cellules.

La normalisation utilise préférentiellement des percentiles robustes ou une transformation fondée sur la médiane et la MAD, plutôt qu'un min-max sensible aux valeurs extrêmes.

### 3.2 ADMIXTURE

Les composantes ADMIXTURE décrivent un espace continu. Trois informations sont distinguées :

- `ADMIX_entropy` : équilibre du mélange individuel ;
- `ADMIX_rarity_global` : rareté ou faible densité du profil dans la cohorte ;
- `ADMIX_reference_distance` : distance optionnelle à l'espace des références externes.

Une forte entropie n'implique pas qu'un profil soit rare.

### 3.3 Strate de profil ancestral inféré

La terminologie canonique est **strate de profil ancestral inféré**. Il s'agit d'une discrétisation algorithmique d'un espace continu PCA/ADMIXTURE, utilisée pour l'allocation et l'audit. Elle ne représente ni une population biologique, ni une ethnie, ni une origine déclarée.

La **cellule géo-ancestrale** est définie par :

`cellule géo-ancestrale = secteur géographique × strate de profil ancestral inféré`.

## 4. Allocation hybride du noyau

L'allocation combine :

1. les poids sectoriels observés dans la cohorte candidate ;
2. un plancher minimal par secteur ;
3. une subdivision par strates de profils ancestraux inférés ;
4. un plancher pour les strates rares suffisamment représentées ;
5. des règles explicites de fusion des petites cellules ;
6. une redistribution déterministe des places non attribuées ;
7. la traçabilité de chaque décision d'allocation.

Les cellules ne sont pas forcées à des tailles égales. Une allocation purement proportionnelle est évitée car elle peut supprimer les profils minoritaires ; une égalisation rigide est également évitée car elle surpondérerait artificiellement de très petites cellules.

## 5. Score dynamique du noyau `S_div`

### 5.1 Forme générale

Pour un candidat `i` et un panel déjà retenu `S` :

`S_div(i | S) = w_PCA·PCA_novelty(i | S) + w_ADMIX·ADMIX_diversity(i) + w_IBD·IBD_independence(i | S) + w_ROH·ROH_penalty_nucleus(i)`.

Les poids de travail initiaux peuvent être `0,30 / 0,30 / 0,25 / 0,15`, mais ils restent candidats jusqu'à l'analyse de sensibilité et au gel pré-confirmatoire.

### 5.2 Nouveauté PCA

`PCA_novelty` mesure la nouveauté du candidat dans l'espace PCA au regard du panel déjà retenu et/ou de la densité locale de sa cellule. La métrique exacte et ses tie-breakers sont gelés avant confirmation.

### 5.3 Diversité ADMIXTURE

Le noyau utilise principalement `ADMIX_entropy` et une correction de densité locale ou globale préspécifiée. La rareté globale n'est pas confondue avec l'entropie et peut recevoir un poids différent ou être réservée au bras découverte.

### 5.4 Indépendance IBD dynamique

La composante est recalculée à chaque itération gloutonne :

`IBD_independence(i | S) = 1 - max(R_IBD(i,j), j ∈ S)`.

Le filtre dur KING reste indépendant de cette composante dynamique. Pour les stratégies soumises à la non-redondance familiale, le seuil opérationnel est :

`kinship KING > 0,0442`.

La valeur `0,0625` peut être citée uniquement comme espérance théorique descriptive correspondant approximativement à des cousins germains ; elle n'est pas le cutoff opérationnel.

### 5.5 ROH du noyau

`ROH_penalty_nucleus` évite une concentration excessive d'individus fortement autozygotes dans le noyau. Il ne doit pas être confondu avec un score de signal fondateur. Le seuil de 100 Mb est une valeur de travail à recalibrer, non une constante universelle.

### 5.6 Procédure greedy

La sélection est itérative et reproductible :

1. appliquer les contraintes de cellule et le filtre KING ;
2. recalculer les composantes dépendant de `S` ;
3. sélectionner le candidat de score maximal ;
4. appliquer les tie-breakers gelés ;
5. répéter jusqu'au remplissage du quota ;
6. redistribuer les places impossibles selon la règle déterministe préspécifiée.

Toutes les composantes, exclusions, redistributions et tie-breakers sont journalisés.

## 6. Garde-fou anti-extrêmes

Une répartition par quintiles de score peut être utilisée comme garde-fou candidat contre une sélection concentrée uniquement sur les extrêmes. Elle n'est pas considérée comme une vérité établie. Une version avec quintiles est comparée à une version sans quintiles dans l'anneau exploratoire ; la règle n'est gelée que si la validation indépendante la soutient.

## 7. Bras de découverte

### 7.1 Fonction

Le bras de découverte capture des profils insuffisamment couverts par l'allocation du noyau. Son score est distinct :

`S_discovery(i | S) = a·PCA_global_outlier + b·ADMIX_rarity_global + c·IBD_independence_global + d·Haplotype_utility + e·Founder_ROH_score`.

### 7.2 ROH fondateur

`Founder_ROH_score` recherche un signal fondateur cohérent : partage par plusieurs individus non proches, localisation ou histoire compatibles et haplotype commun. Un ROH individuel élevé ne suffit pas à qualifier un signal fondateur.

### 7.3 Sous-bras

Le bras peut être réparti en sous-bras préspécifiés :

- extrêmes PCA globaux ;
- profils ancestraux rares ou faiblement denses ;
- signatures fondatrices cohérentes ;
- utilité haplotypique, uniquement si disponible avant gel.

## 8. Allocation noyau / découverte

L'allocation nominale de déploiement est :

- noyau géo-ancestral : 322 ;
- bras découverte : 28 ;
- total : 350.

Le protocole teste plusieurs ratios sur un lot indépendant d'optimisation. Le ratio final est gelé avant l'évaluation confirmatoire. Les seeds confirmatoires ne peuvent pas rouvrir ce choix.

## 9. Comparateurs et validation

Les stratégies confirmatoires sont définies dans le protocole de validation. Le comparateur **random brut** conserve la structure naturelle de la cohorte après QC technique et ne reçoit pas d'exclusion spécifique de parenté. Les stratégies géographique stricte, maximin et `S_div` appliquent le filtre KING selon leur définition préspécifiée.

Le set-cover reste un comparateur exploratoire, et non une cinquième stratégie confirmatoire. Il est évalué uniquement dans les simulations ou dans une cohorte entièrement séquencée :

- `set-cover_puce` ;
- `set-cover_oracle_WGS`.

Aucune évaluation WGS ex post n'est revendiquée pour des individus réels qui n'ont pas été séquencés.

## 10. Diagnostics préspécifiés

### 10.1 Corrélation des composantes

La méthode préspécifie :

- matrice de corrélation de Spearman ;
- analyses globales et, si possible, par secteur ou strate ;
- PCA des composantes standardisées ;
- variance expliquée ;
- diagnostic de colinéarité ou de conditionnement ;
- stabilité selon les paramètres PCA, ADMIXTURE, IBD et ROH.

Les figures et valeurs sont des résultats futurs et appartiennent au rapport d'analyse des 2 500.

### 10.2 Stabilité ADMIXTURE

Trois niveaux sont séparés :

1. stabilité algorithmique entre seeds et initialisations ;
2. robustesse aux marqueurs, batches, QC et panels de référence ;
3. représentativité du recrutement EFS.

Les multi-seeds ne corrigent pas un recrutement déséquilibré.

### 10.3 Sous-modularité

La fonction d'ensemble réellement optimisée doit être formalisée avant toute revendication mathématique. Une garantie d'approximation n'est annoncée que si monotonie et sous-modularité sont démontrées pour cette fonction exacte.

## 11. Fréquences et division du travail puce/WGS

Quatre situations sont distinguées :

| Situation | Interprétation autorisée |
|---|---|
| Variant directement génotypé sur la puce | fréquence directe dans les 2 500 après QC |
| Variant WGS correctement imputable dans les 2 500 | fréquence imputée avec seuils de qualité et incertitude documentés |
| Variant observé uniquement dans les 350 WGS | fréquence brute du panel sélectionné, non assimilable à une fréquence populationnelle |
| Variant disposant d'une méthode de calibration validée | fréquence recalibrée ou pondérée, avec hypothèses et incertitude publiées |

La pondération inverse des probabilités de sélection n'est utilisée que si les probabilités d'inclusion sont strictement positives, calculables et validées. Sinon, la priorité va à l'imputation dans les 2 500, à la post-stratification ou à une calibration sur la cohorte SNP.

Le panel de 350 WGS ne garantit pas la détection de tous les variants à MAF ≥ 1 %. Le calcul sur 700 haplotypes indépendants est un ordre de grandeur théorique, non une garantie dans un panel structuré et enrichi.

## 12. Exposition haplotypique ancestrale

Pour une composante ancestrale `k`, l'exposition attendue peut être résumée par :

`H_k = 2 × Σ_i q_ik`.

Pour un variant de fréquence `p_k` dans ce fond :

`P(observation ≥ 1) ≈ 1 - (1 - p_k)^(H_k)`.

Cette approximation ne constitue pas un plancher garanti. Elle doit être complétée par l'indépendance haplotypique, l'ascendance locale et les simulations où la vérité est connue.

## 13. Sorties obligatoires

La sélection produit au minimum :

- la liste finale et l'ordre d'entrée ;
- les scores bruts et normalisés ;
- les composantes détaillées ;
- les cellules, quotas, planchers, fusions et redistributions ;
- les exclusions KING et autres exclusions QC ;
- les décisions du greedy et les tie-breakers ;
- les versions des logiciels, références et paramètres ;
- un rapport de couverture sectorielle, ancestrale, PCA, IBD et ROH ;
- un manifeste permettant la reproduction exacte.

## 14. Gel, versions et résultats futurs

Les documents méthodologiques préspécifient les calculs et décisions. Les valeurs, figures et performances obtenues sur les 2 500, les 350 WGS ou les simulations sont consignées dans des rapports d'analyse versionnés.

Le snapshot de gel comprend : données de référence, QC, paramètres PCA/ADMIXTURE, définition des strates, poids, scores, seuil KING, allocation noyau/découverte, tie-breakers, comparateurs et endpoints. Toute modification postérieure nécessite une nouvelle version et ne peut être appliquée rétroactivement au lot confirmatoire.

## 15. Statut final

La V3.6 est la spécification opérationnelle à soumettre à validation. Elle ne présente ni les performances attendues comme acquises, ni `S_div` comme optimum mathématique. La décision finale est rendue par le protocole confirmatoire, avec conservation explicite des résultats négatifs ou non concluants.
