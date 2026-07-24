# Suivi d’harmonisation méthodologique — Génome Réunion

**Branche :** `agent/harmonisation-methodologie-sdiv`  
**Date de finalisation documentaire :** 24 juillet 2026  
**Périmètre :** corpus méthodologique actif du projet Génome Réunion.

## 1. Objet du journal

Ce fichier constitue le registre central des corrections réalisées entre :

- la synthèse scientifique ;
- la méthodologie opérationnelle de sélection des 350 WGS ;
- la justification scientifique du choix `S_div` ;
- le protocole de validation ;
- l’annexe B consacrée au moteur de simulation ;
- le glossaire canonique des paramètres ;
- la page d’orientation `template/methodologie.html`.

Une correction est considérée comme **harmonisée** uniquement lorsqu’elle est cohérente dans tous les documents actifs concernés. Les versions antérieures restent conservées comme archives et ne sont pas réécrites fonctionnellement.

## 2. Hiérarchie documentaire finale

| Document | Rôle de référence | Version active |
|---|---|---:|
| Synthèse scientifique | Architecture générale, objectifs, cohortes, usages et limites | V3.6 |
| Méthodologie de sélection | Spécification opérationnelle des 350 WGS | V3.6 |
| Justification du choix `S_div` | Raisonnement scientifique, alternatives et limites | V3.6 |
| Protocole de validation | Comparateurs, endpoints, lots indépendants, gel et verdict | v1.6 |
| Annexe B — simulation | Génération des cohortes simulées et de la vérité génomique | v1.6 |
| Glossaire des paramètres | Définitions, formules, valeurs et statuts canoniques | v1.6 |
| `template/methodologie.html` | Orientation vers les versions actives et les archives | actif |

### Règle de propagation

- la **méthodologie V3.6** est le document maître de l’algorithme réel ;
- la **synthèse** résume sans créer de règle nouvelle ;
- la **justification** explique les choix sans modifier la procédure ;
- le **protocole** décide si la stratégie est validée ;
- l’**annexe B** simule sans fixer les poids, le ratio final ou le verdict ;
- le **glossaire** fixe les termes et valeurs communes.

## 3. Registre final des règles HARM

| ID | Priorité | Règle harmonisée | Statut final |
|---|---:|---|---|
| HARM-001 | P0 | Seuil KING opérationnel `> 0,0442` ; `0,0625` descriptif uniquement | Harmonisé |
| HARM-002 | P0 | « strate de profil ancestral inféré » remplace « cluster d’ascendance » | Harmonisé |
| HARM-003 | P0 | Allocation hybride secteurs × strates, planchers, fusion et redistribution | Harmonisé |
| HARM-004 | P0 | Allocation nominale 322 + 28 ; ratio final optimisé indépendamment puis gelé | Harmonisé |
| HARM-005 | P0 | Les 100 familles sont externes aux 2 500 candidats et aux 350 WGS | Harmonisé |
| HARM-006 | P0 | Fréquences directes, imputées, WGS brutes et recalibrées séparées | Harmonisé |
| HARM-007 | P0 | IBD dynamique conditionnel au panel déjà sélectionné | Harmonisé |
| HARM-008 | P0 | Entropie ADMIXTURE, rareté globale et distance aux références séparées | Harmonisé |
| HARM-009 | P0 | PCA préspécifiée et normalisation robuste | Harmonisé |
| HARM-010 | P0 | `ROH_penalty_nucleus` distinct de `Founder_ROH_score` | Harmonisé |
| HARM-011 | P0 | Random brut sans exclusion spécifique de parenté | Harmonisé |
| HARM-012 | P1 | Quintiles définis comme garde-fou candidat à comparer | Harmonisé — à valider empiriquement |
| HARM-013 | P2 | Set-cover limité à l’anneau exploratoire | Harmonisé — exploratoire |
| HARM-014 | P0 | `S_div + bras découverte` est la stratégie candidate principale, non validée a priori | Harmonisé |
| HARM-015 | P0 | Versions obsolètes clairement identifiées comme archives | Harmonisé |
| HARM-016 | P1 | Corrélation et dimensionnalité des composantes préspécifiées | Harmonisé — résultats futurs |
| HARM-017 | P1 | Exposition haplotypique ancestrale définie comme approximation | Harmonisé — résultats futurs |
| HARM-018 | P2 | Sous-modularité revendiquée uniquement si démontrée | Harmonisé — exploratoire |
| HARM-019 | P0 | Stabilité ADMIXTURE distincte de la robustesse aux données et du recrutement | Harmonisé |
| HARM-020 | P0 | Méthodes préspécifiées séparées des résultats empiriques futurs | Harmonisé |
| HARM-021 | P0 | Justification `S_div` conservée en fichier HTML monolithique autonome | Harmonisé |

## 4. Règles canoniques appliquées

### 4.1 Parenté

- seuil opérationnel : `kinship KING > 0,0442` ;
- `0,0625` : espérance théorique descriptive de cousins germains ;
- random brut : QC technique uniquement, sans filtre KING spécifique ;
- autres stratégies : filtre appliqué selon leur définition préspécifiée.

### 4.2 Terminologie ancestrale

- terme canonique : **strate de profil ancestral inféré** ;
- définition : discrétisation algorithmique d’un espace continu PCA/ADMIXTURE ;
- interdiction de l’assimiler à une population biologique, une ethnie ou une origine déclarée ;
- `cellule géo-ancestrale = secteur × strate de profil ancestral inféré`.

### 4.3 Allocation

La V3.6 combine :

1. poids sectoriels observés ;
2. plancher minimal par secteur ;
3. subdivision par strate ;
4. protection des strates rares suffisamment représentées ;
5. fusion explicite des petites cellules ;
6. redistribution déterministe ;
7. traçabilité complète.

Les cellules ne sont pas forcées à des tailles égales.

### 4.4 Score et composantes

`S_div(i | S) = w_PCA·PCA_novelty(i | S) + w_ADMIX·ADMIX_diversity(i) + w_IBD·IBD_independence(i | S) + w_ROH·ROH_penalty_nucleus(i)`.

`IBD_independence(i | S) = 1 − max(R_IBD(i,j), j ∈ S)` est recalculé à chaque itération.

Sont distingués :

- `ADMIX_entropy` ;
- `ADMIX_rarity_global` ;
- `ADMIX_reference_distance` ;
- `ROH_penalty_nucleus` ;
- `Founder_ROH_score`.

### 4.5 Noyau et découverte

- allocation nominale : 322 noyau + 28 découverte ;
- ratio final : choisi sur un lot indépendant et gelé avant confirmation ;
- `Haplotype_utility` : activé avant gel uniquement si le phasage est disponible ; sinon poids initial nul ;
- quintiles : garde-fou candidat, comparé à une version sans quintiles.

### 4.6 Fréquences

| Situation | Interprétation autorisée |
|---|---|
| Variant génotypé directement sur la puce | fréquence directe dans les 2 500 après QC |
| Variant WGS correctement imputable | fréquence imputée avec qualité et incertitude |
| Variant observé uniquement dans les 350 WGS | fréquence brute descriptive, non automatiquement populationnelle |
| Méthode de calibration validée | fréquence recalibrée ou pondérée avec hypothèses publiées |

Les 350 WGS ne garantissent pas la détection de tous les variants à MAF ≥ 1 %.

Pour une composante ancestrale `k` :

- `H_k = 2 × Σ_i q_ik` ;
- `P(observation ≥ 1) ≈ 1 − (1 − p_k)^(H_k)`.

Ces valeurs sont des approximations théoriques, non des garanties.

## 5. Fichiers actifs modifiés ou ajoutés

| Fichier | Lignes de la version relue | Modification principale | Commit d’introduction ou de correction |
|---|---:|---|---|
| `template/Genome_Reunion_synthese_scientifique_V3_6.html` | L1–L342 | Nouvelle synthèse scientifique harmonisée | `566fe0e13bf52ee69e7ad9663250cfdfb2850e31` |
| `template/METHODOLOGY_selection_V3_6.html` | L1–L49 | Version HTML opérationnelle V3.6 | `2a15be33e78d00609f42b94ba78751c008c08130` |
| `template/METHODOLOGY_selection_V3_6.md` | L1–L279 | Source détaillée et éditable de la méthodologie | `fa1e32678ef81082481cbd32b06434480ee58423` |
| `template/GENOME_REUNION_justification_choix_Sdiv.html` | L1–L485 | Justification V3.6 monolithique et autonome | `a30d4336e9360ad22c1367a0d836241bb2fa95e9` |
| `template/METHODOLOGIE_validation_protocole_v1_6.html` | L1–L283 | Nouveau protocole confirmatoire harmonisé | `05984617ed0d5f3688fbbf3c71b6de97788bf701` |
| `template/METHODOLOGIE_validation_annexeB_simulation_v1_6.html` | L1–L249 | Nouvelle annexe B complète et neutre sur le verdict | `1f322ab6622d03b63c62402be11103bd43747b9f` |
| `template/GLOSSAIRE_parametres_V1_6.html` | L1–L237 | Glossaire canonique harmonisé | `2bfcae9a8137afc0c6ae9cf67c3a2ad61a59d76a` |
| `template/methodologie.html` | L1–L115 | Cartes actives V3.6/v1.6 et séparation des archives | `72f24dd52dbd7fbb711ab1b43086374fb2f0d3c7` |
| `RAPPORT_EVALUATION_HARMONISATION.md` | L1–L102 environ | Évaluation globale après double relecture | `0bd688f7b64d29ca7098305a72cfb552f3a17a13` |

## 6. HARM-021 — Retour au fichier `S_div` monolithique

La version finale de `template/GENOME_REUNION_justification_choix_Sdiv.html` :

- contient tout le contenu scientifique dans un fichier unique ;
- ne charge plus aucun fragment dynamique ;
- conserve le nom stable utilisé par la landing page ;
- peut être relue et modifiée directement dans le dépôt.

Les huit fragments provisoires `template/sdiv_parts/s1.html` à `s8.html` ont été supprimés dans les commits :

- `ece3574b4a09af0ca4ce9c523b4ac68fbc1c721f` ;
- `3af57b6ea368bacd0153eb8baed20b9155474bb5` ;
- `9e0fc91baafa301d32de86fcf18793f4d06e7240` ;
- `442b765f02355b4b7d2bec00d406f8303d50415b` ;
- `0316a68b15157344f56f673a33587b74b7b77197` ;
- `f8a5206984409fe81b7e85488e97cad348e6f1f0` ;
- `9ae7ee3c84f5b3cf466908ea65ab5d1e4e26b290` ;
- `8ed1e2830d75df72829ed4df781998b9bc6eed2e`.

Leur absence a été contrôlée directement sur la branche.

## 7. Archives conservées

Les fichiers suivants sont conservés sans correction fonctionnelle et sont identifiés comme archives dans la landing page :

- `template/METHODOLOGIE_validation_protocole_v1_5.html` ;
- `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html` ;
- méthodologie de sélection V3.5 hébergée sur l’ancien site externe.

Ils ne doivent plus être utilisés comme versions de référence.

## 8. Contrôles réalisés

### Contrôle scientifique

- [x] cohérence des effectifs 2 500 / 350 / 100 ;
- [x] rôle distinct des familles ;
- [x] seuil KING harmonisé ;
- [x] contradiction du random supprimée ;
- [x] terminologie ancestrale harmonisée ;
- [x] allocation hybride cohérente ;
- [x] IBD dynamique ;
- [x] séparation ADMIXTURE entropie/rareté ;
- [x] séparation des deux usages ROH ;
- [x] ratio nominal et gel indépendant ;
- [x] set-cover limité à l’exploratoire ;
- [x] quintiles présentés comme candidats ;
- [x] fréquences correctement qualifiées ;
- [x] absence de garantie à MAF ≥ 1 % ;
- [x] méthode distincte des résultats futurs ;
- [x] statut candidat de `S_div` cohérent.

### Contrôle documentaire et technique

- [x] relecture locale de tous les documents actifs ;
- [x] relecture directe des fichiers publiés sur la branche GitHub ;
- [x] parsing HTML des documents actifs ;
- [x] présence d’un seul `DOCTYPE`, d’un titre et d’un H1 ;
- [x] liens relatifs de la landing vérifiés statiquement ;
- [x] fragments `sdiv_parts` supprimés ;
- [x] 85 contrôles automatisés de présence et de cohérence ;
- [x] comparaison globale de la branche avec `main` ;
- [ ] contrôle visuel final du responsive et de l’impression sur GitHub Pages avant fusion.

## 9. Évaluation finale

Le rapport détaillé est disponible dans `RAPPORT_EVALUATION_HARMONISATION.md`.

**Note globale : 18,5 / 20.**

Points forts :

- hiérarchie documentaire claire ;
- absence de contradiction scientifique majeure résiduelle dans le corpus actif ;
- paramètres et statuts explicitement séparés ;
- validation confirmatoire indépendante ;
- traçabilité suffisante pour une revue ciblée de pull request.

## 10. Réserve éditoriale hors corpus méthodologique actif

La page générale `index.html` contient encore une mention historique de V3.5. Elle n’est pas utilisée comme document méthodologique de référence et n’a pas été réécrite dans ce lot afin d’éviter une modification large de la landing page générale. Sa mise à jour devra faire l’objet d’une correction éditoriale séparée ou d’un petit commit dédié avant fusion si elle est jugée nécessaire.

## 11. Statut avant pull request

- corpus méthodologique actif : **harmonisé** ;
- justification `S_div` : **monolithique et harmonisée** ;
- versions antérieures : **archivées** ;
- rapport d’évaluation : **finalisé** ;
- pull request : **à ouvrir en brouillon** ;
- fusion dans `main` : **non autorisée sans validation explicite**.
