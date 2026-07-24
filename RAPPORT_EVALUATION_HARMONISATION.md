# Rapport d’évaluation de l’harmonisation méthodologique

**Projet :** Génome Réunion  
**Branche :** `agent/harmonisation-methodologie-sdiv`  
**Date :** 24 juillet 2026  
**Périmètre :** documents actifs de synthèse, sélection, justification `S_div`, protocole, annexe B, glossaire et landing page méthodologique.

## Verdict final avant pull request

L’harmonisation est **scientifiquement cohérente et prête pour une revue de pull request**. La relecture a été réalisée une première fois sur les fichiers locaux, puis une seconde fois directement sur les fichiers publiés dans la branche GitHub.

**Note globale : 18,5 / 20**

- cohérence scientifique : **19 / 20** ;
- séparation des rôles documentaires : **19 / 20** ;
- reproductibilité et traçabilité : **18,5 / 20** ;
- lisibilité documentaire : **18 / 20** ;
- validation technique : **18 / 20**.

## Documents actifs relus

| Document | Version | Statut après relecture |
|---|---:|---|
| Synthèse scientifique | V3.6 | cohérente |
| Méthodologie de sélection HTML et Markdown | V3.6 | document maître opérationnel |
| Justification du choix `S_div` | V3.6 | cohérente, monolithique et autonome |
| Protocole de validation | v1.6 | cohérent, contradiction random supprimée |
| Annexe B simulation | v1.6 | cohérente et neutre sur la sélection finale |
| Glossaire canonique | v1.6 | cohérent |
| Landing page méthodologique | active/archive | cohérente |

## Résultats du contrôle transversal

### Seuil KING

- `KING > 0,0442` est le seul seuil opérationnel d’exclusion dans les stratégies concernées ;
- `0,0625` est limité à un rôle théorique descriptif ;
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
- fragments provisoires `template/sdiv_parts/` supprimés et vérifiés absents ;
- versions v1.5 et V3.5 conservées comme archives ;
- landing page orientée vers les versions actives V3.6/v1.6.

## Contrôles techniques

- parsing HTML local réussi pour tous les fichiers actifs ;
- un seul `DOCTYPE`, un titre HTML et un H1 par document ;
- absence de dépendance aux fragments `sdiv_parts` ;
- liens relatifs de la landing page résolus vers les fichiers actifs présents sur la branche ;
- 85 contrôles automatisés de présence, terminologie et cohérence exécutés ;
- comparaison GitHub `main...agent/harmonisation-methodologie-sdiv` relue ;
- relecture distante des contenus publiés effectuée.

Le rendu navigateur automatisé par Playwright/Chromium n’a pas pu être exécuté dans l’environnement de travail. Le HTML a été parsé et les liens ont été vérifiés statiquement. Le contrôle visuel GitHub Pages restera un garde-fou avant fusion, et non une réserve sur la cohérence scientifique.

## Limites résiduelles

1. La page générale `index.html` contient encore une mention historique de V3.5. Elle est hors de la landing méthodologique active et mérite une correction éditoriale séparée afin d’éviter une réécriture large du site dans cette PR.
2. Les résultats empiriques, figures de corrélation et performances ne peuvent être évalués avant les données réelles ou les simulations. Les méthodes correspondantes sont préspécifiées et correctement identifiées comme résultats futurs.
3. Le contrôle visuel de l’impression et du responsive doit être confirmé sur GitHub Pages avant fusion.

## Conclusion

La correction a supprimé les contradictions principales et clarifié la hiérarchie documentaire. La méthodologie V3.6 spécifie, la synthèse résume, la justification explique, le protocole décide, l’annexe simule et le glossaire fixe les définitions. Le lot est prêt pour une pull request ciblée, sans fusion automatique.
