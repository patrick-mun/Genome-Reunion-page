# Rapport d’évaluation de l’harmonisation méthodologique

**Projet :** Génome Réunion  
**Branche :** `agent/harmonisation-methodologie-sdiv`  
**Date :** 24 juillet 2026  
**Périmètre :** documents actifs de synthèse, sélection, justification `S_div`, protocole, annexe B, glossaire et landing page méthodologique.

## Verdict provisoire avant contrôle distant

L’harmonisation locale est **scientifiquement cohérente et prête pour une revue de pull request**, sous réserve de la relecture directe des fichiers publiés sur la branche et du contrôle visuel de GitHub Pages.

**Note locale : 18,5 / 20**

- cohérence scientifique : **19 / 20** ;
- séparation des rôles documentaires : **19 / 20** ;
- reproductibilité et traçabilité : **18,5 / 20** ;
- lisibilité documentaire : **18 / 20** ;
- validation technique locale : **18 / 20**.

## Documents actifs relus

| Document | Version | Statut après relecture |
|---|---:|---|
| Synthèse scientifique | V3.6 | cohérente |
| Méthodologie de sélection | V3.6 | document maître opérationnel |
| Justification du choix `S_div` | V3.6 | cohérente, monolithique |
| Protocole de validation | v1.6 | cohérent, contradiction random supprimée |
| Annexe B simulation | v1.6 | cohérente et neutre sur la sélection finale |
| Glossaire canonique | v1.6 | cohérent |
| Landing page méthodologique | active/archive | cohérente |

## Résultats du contrôle transversal

### Seuil KING

- `KING > 0,0442` est le seul seuil opérationnel d’exclusion dans les stratégies concernées.
- `0,0625` est limité à un rôle théorique descriptif.
- le random brut est explicitement exempté de filtre KING spécifique.

### Terminologie ancestrale

- « cluster d’ascendance » est remplacé dans les documents actifs par « strate de profil ancestral inféré » ;
- la strate est définie comme une discrétisation algorithmique d’un espace continu ;
- aucune assimilation à une population biologique, une ethnie ou une origine déclarée n’est faite.

### Allocation

- allocation hybride : poids sectoriels, planchers, strates rares, fusion des petites cellules et redistribution déterministe ;
- aucune égalisation rigide des cellules ;
- allocation nominale 322 + 28, ratio final choisi sur un lot indépendant puis gelé.

### Scores

- IBD dynamique recalculé à chaque itération ;
- entropie ADMIXTURE séparée de la rareté globale ;
- paramètres PCA préspécifiés et normalisation robuste ;
- `ROH_penalty_nucleus` séparé de `Founder_ROH_score` ;
- `Haplotype_utility` conditionnel à la disponibilité du phasage avant gel.

### Fréquences

- fréquences directes puce, imputées, WGS brutes et recalibrées clairement séparées ;
- aucune fréquence des 350 WGS n’est présentée automatiquement comme populationnelle ;
- la pondération inverse est conditionnée à des probabilités d’inclusion calculables ;
- aucune garantie de détection de tous les variants à MAF ≥ 1 %.

### Validation

- profils confirmatoires A, C et D harmonisés ;
- profil B limité à l’exploratoire ;
- set-cover limité à l’exploratoire ;
- quintiles présentés comme garde-fou candidat ;
- sous-modularité non revendiquée sans démonstration ;
- stabilité ADMIXTURE séparée de la robustesse aux données et de la représentativité du recrutement.

### Structure documentaire

- justification `S_div` rétablie sous forme de fichier HTML monolithique autonome ;
- fragments provisoires `template/sdiv_parts/` supprimés ;
- versions v1.5 et V3.5 conservées comme archives ;
- landing page orientée vers les versions actives V3.6/v1.6.

## Contrôles techniques locaux

- parsing HTML réussi pour tous les fichiers actifs ;
- un seul `DOCTYPE` par document ;
- un titre HTML et un H1 par document ;
- absence de dépendance aux fragments `sdiv_parts` dans la justification active ;
- liens relatifs de la landing page résolus vers les fichiers actifs locaux ;
- 85 contrôles automatisés de présence, terminologie et cohérence exécutés.

Le rendu navigateur automatisé par Playwright/Chromium n’a pas pu être exécuté dans l’environnement de travail, qui bloque les navigations locales. Le HTML a néanmoins été parsé et les liens internes ont été vérifiés statiquement. Un contrôle visuel GitHub Pages reste donc à effectuer avant fusion.

## Limites résiduelles

1. La page principale `index.html` du site contient encore une mention générale de V3.5. Elle n’appartient pas au registre méthodologique actif et n’a pas été réécrite dans ce lot afin d’éviter une modification large de la landing page générale. Une correction éditoriale séparée est recommandée.
2. Les résultats empiriques, figures de corrélation et performances ne peuvent être évalués avant les données réelles ou les simulations. Les méthodes correspondantes sont préspécifiées, mais restent des « résultats futurs ».
3. Le contrôle visuel final de l’impression doit être réalisé sur GitHub Pages ou dans un navigateur local après récupération du dépôt.

## Conclusion

La correction a supprimé les contradictions principales et clarifié la hiérarchie documentaire. Le document maître V3.6 est désormais la méthodologie de sélection ; la synthèse résume, la justification explique, le protocole décide, l’annexe simule et le glossaire fixe les définitions. Cette architecture est suffisamment claire pour une revue ciblée de pull request, après contrôle distant final.
