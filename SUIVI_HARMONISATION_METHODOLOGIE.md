# Suivi d'harmonisation méthodologique — Génome Réunion

**Branche :** `agent/harmonisation-methodologie-sdiv`
**Statut :** ⚠️ **corrigé le 27 juillet 2026** — la version précédente de ce fichier décrivait un
travail d'harmonisation (fichiers V3.6 / v1.6, rapport d'évaluation, commits) qui **n'a jamais été
réalisé dans ce dépôt**. Voir section 0.

## 0. Correction apportée à ce fichier

La version précédente de ce document affirmait que le corpus méthodologique avait été harmonisé
en une version V3.6 / v1.6, listait 21 règles « HARM » toutes marquées comme « Harmonisé », citait
neuf fichiers censés avoir été créés ou modifiés, et donnait une note finale de 18,5/20.

Vérification faite sur le dépôt (`git log --all`, `git ls-tree`, recherche par nom de fichier) :

- **aucun** des fichiers suivants n'existe, sur cette branche ni dans l'historique git du dépôt :
  `template/Genome_Reunion_synthese_scientifique_V3_6.html`,
  `template/METHODOLOGY_selection_V3_6.html`, `template/METHODOLOGY_selection_V3_6.md`,
  `template/GENOME_REUNION_justification_choix_Sdiv.html`,
  `template/METHODOLOGIE_validation_protocole_v1_6.html`,
  `template/METHODOLOGIE_validation_annexeB_simulation_v1_6.html`,
  `template/GLOSSAIRE_parametres_V1_6.html`, `RAPPORT_EVALUATION_HARMONISATION.md` ;
- **aucun** des hachages de commit cités (`566fe0e1...`, `2a15be33...`, `fa1e3267...`,
  `a30d4336...`, `0598461...`, `1f322ab6...`, `2bfcae98...`, `72f24dd5...`, `0bd688f7...`) n'existe
  dans ce dépôt ;
- le seul document actif correspondant est encore `template/Genome_Reunion_synthese_scientifique
  (14) (6).html`, qui porte le libellé **V3.5** et contient toujours le seuil KING `0,0625` et le
  terme « cluster d'ascendance inférée » que la version précédente de ce fichier prétendait avoir
  corrigés.

Ce fichier est donc réécrit ci-dessous pour décrire l'état réel du corpus, sans supprimer la trace
de l'incident (voir section 8).

## 1. Objet du journal

Ce fichier sert de registre des écarts identifiés entre les documents méthodologiques actifs du
projet Génome Réunion, et de leur statut de correction réel.

## 2. État réel du corpus documentaire (27 juillet 2026)

| Document | Fichier | Version affichée |
|---|---|---|
| Synthèse scientifique | `template/Genome_Reunion_synthese_scientifique (14) (6).html` | V3.5 |
| Protocole de validation | `template/METHODOLOGIE_validation_protocole_v1_5.html` | v1.5 |
| Glossaire des paramètres | `template/GLOSSAIRE_parametres.html` | — |
| Justification du choix `S_div` | absent du dépôt | reçu hors dépôt, non commité |

Aucune version V3.6 ou v1.6 n'existe actuellement dans ce dépôt.

## 3. Écarts connus, non corrigés

Ces écarts ont été identifiés (revue d'une synthèse d'un tiers, recoupée avec le contenu réel des
fichiers du dépôt) mais **aucune correction n'a encore été appliquée** :

| ID | Écart | Où il apparaît |
|---|---|---|
| HARM-001 | Le seuil KING opérationnel est incohérent : `template/METHODOLOGIE_validation_protocole_v1_5.html` fixe `KING > 0,0442` comme seuil d'exclusion et précise que `0,0625` est une valeur théorique descriptive uniquement ; la synthèse scientifique V3.5 utilise encore `0,0625` comme s'il s'agissait du seuil opérationnel. | synthèse V3.5 §Tableau 8, glossaire |
| HARM-002 | La synthèse V3.5 définit une cellule géo-ancestrale via un « cluster d'ascendance inférée », ce qui suggère une partition en sous-populations discrètes alors que le corpus affirme par ailleurs que l'admixture réunionnaise est continue. | synthèse V3.5 |
| HARM-003 | La stratification par quintiles (20-20-30-20-10) est présentée sans distinguer clairement l'analyse avec et sans stratification comme hypothèses à comparer empiriquement. | synthèse V3.5, protocole v1.5 |
| HARM-004 | Le recalibrage fréquentiel (brut / pondéré / imputé) n'est pas formalisé avec des seuils de qualité et des cas de non-publication. | synthèse V3.5 |
| HARM-005 | Le calendrier de sélection des 350 WGS (M4–M9) et celui du recrutement des 100 familles (jusqu'à M14) ne sont pas explicitement réconciliés pour la composante `Haplotype_utility`. | synthèse V3.5 |

## 4. Prochaine action

Avant toute nouvelle affirmation de statut « harmonisé », toute correction devra :

1. être appliquée directement dans les fichiers listés en section 2 (diff vérifiable) ;
2. être accompagnée du hachage de commit réel introduisant la modification ;
3. être vérifiée par relecture du fichier modifié sur la branche, pas seulement décrite en prose.

## 5. Fichier de justification `S_div` reçu hors dépôt

Un fichier `GENOME_REUNION_justification_choix_Sdiv.html` (upload utilisateur, 1377 lignes) a été
fourni en dehors du dépôt. Il ne contient pas de valeur de seuil KING chiffrée et se réfère
lui-même à un futur « fichier de recommandations V3.6 », ce qui indique qu'il ne s'agit pas non
plus de la version V3.6 harmonisée décrite (à tort) par la précédente version de ce document. Il
n'a pas été ajouté au dépôt.

## 6. Historique de l'incident

- Une version antérieure de ce fichier (introduite par le commit `e02a9f8`, « Restaure le suivi
  d'harmonisation méthodologique », puis mergée via la PR #43) décrivait un travail d'harmonisation
  fictif : fichiers inexistants, commits inexistants, note finale inventée.
- Ce fichier a été réécrit le 27 juillet 2026 pour corriger cette information et repartir d'un état
  vérifié.
