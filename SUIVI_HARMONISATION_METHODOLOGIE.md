# Suivi d'harmonisation méthodologique — Génome Réunion

**Branche :** `claude/harmonisation-fichiers-depot-s3-exqj2k`
**Statut :** session 3 (correction) exécutée le 27 juillet 2026 — les écarts HARM-001, HARM-002,
HARM-006, HARM-007 et HARM-008 ont été corrigés directement dans les fichiers du dépôt par le commit
`0d10cf8` (« Session 3: applique les corrections HARM-001/002/006/007/008 »). Voir section 3 pour le
détail par écart et section 4 pour les nouveaux points vérifiés cohérents.

Pour l'historique de l'incident précédent (un ancien suivi affirmant un travail d'harmonisation
fictif), voir section 6.

## 1. Objet et méthode

Ce fichier est le registre des écarts identifiés entre les documents méthodologiques actifs du
projet Génome Réunion, et de leur statut de correction réel. Il est maintenu selon le pipeline à
3 sessions décrit dans `SUIVI_REVUE_INTERSESSION.md` :

1. **Extraction** (faite) → produit `DIAGNOSTIC_COMPACT_HARMONISATION.md`.
2. **Diagnostic** (ce fichier, session en cours) → liste les corrections précises à appliquer.
3. **Correction** (à venir) → applique les corrections fichier par fichier et met ce suivi à jour
   avec les hachages de commit réels.

## 2. État vérifié du corpus documentaire (27 juillet 2026)

| Document | Fichier | Version affichée | Statut de lecture (session 1) |
|---|---|---|---|
| Synthèse scientifique | `template/Genome_Reunion_synthese_scientifique (14) (6).html` | V3.5 | Passe ciblée faite |
| Justification du choix `S_div` | `template/GENOME_REUNION_justification_choix_Sdiv.html` | V3.5 | Passe ciblée faite — présent dans le dépôt, référencé depuis `template/methodologie.html` |
| Protocole de validation | `template/METHODOLOGIE_validation_protocole_v1_5.html` | v1.5 | Passe ciblée faite |
| Annexe B — simulation | `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html` | v1.5 (extrait du protocole v1.4 WORKING d'origine) | **Lu intégralement (285 lignes de corps de document) — aucune divergence trouvée, un point ouvert** (voir §4ter) |
| Glossaire des paramètres | `template/GLOSSAIRE_parametres.html` | — (protocole v1.4 WORKING d'origine, contenu à jour v1.5) | **Lu intégralement (563 lignes) — aucune divergence trouvée** (voir §4bis) |

Aucune version V3.6 ou v1.6 n'existe dans ce dépôt (confirmé par recherche de fichiers, cf.
`DIAGNOSTIC_COMPACT_HARMONISATION.md §1.4`).

## 3. Écarts corrigés en session 3 (commit `0d10cf8`)

Chaque correction est vérifiée par relecture directe du fichier modifié sur la branche
`claude/harmonisation-fichiers-depot-s3-exqj2k`, pas seulement décrite en prose.

| ID | Écart | Correction appliquée | Fichiers modifiés (commit `0d10cf8`) |
|---|---|---|---|
| HARM-001 | Seuil KING opérationnel incohérent (`0,0625` utilisé comme cutoff au lieu de `0,0442`). | `0,0625` remplacé par `0,0442` comme seuil d'exclusion partout où il était utilisé comme cutoff ; conservé uniquement comme valeur théorique descriptive, explicitement qualifiée comme telle (formulation calquée sur `template/METHODOLOGIE_validation_protocole_v1_5.html:1590`). | `index.html:543` ; `template/Genome_Reunion_synthese_scientifique (14) (6).html:1221,1552,1597,1643,1839` ; `template/GENOME_REUNION_justification_choix_Sdiv.html:1271` |
| HARM-002 | Terminologie « cluster d'ascendance/inféré » contredisant l'admixture continue affirmée par ailleurs. | Remplacé par « strate de profil ancestral (inférée) » dans toutes les occurrences listées en session 2. | `index.html:516` ; `template/Genome_Reunion_synthese_scientifique (14) (6).html:1202,1204,1581` ; `template/GENOME_REUNION_justification_choix_Sdiv.html:1261,1285,1320,1321` |
| HARM-006 | Notation de la formule `S_div` non unifiée entre documents. | Notation du protocole (`METHODOLOGIE_validation_protocole_v1_5.html:1566`) confirmée comme référence formelle ; les variantes de `index.html` et de la synthèse sont désormais explicitement annotées comme reformulations dérivées de cette notation, pas comme définitions concurrentes. Les valeurs numériques des poids n'ont pas changé. | `index.html:524` (note ajoutée) ; `template/Genome_Reunion_synthese_scientifique (14) (6).html:1220` (légende du tableau 4 complétée) |
| HARM-007 | Référence à un « fichier de recommandations V3.6 » inexistant. | Phrase reformulée pour ne plus promettre un artefact absent (« reste à planifier dans une prochaine révision du protocole d'audit »). | `template/GENOME_REUNION_justification_choix_Sdiv.html:1252` |
| HARM-008 | `README.md` pointait vers un fichier supprimé et omettait les documents actifs réels. | Lien mort vers `METHODOLOGIE_validation_voilure_reduite_v1_2.html` retiré ; arborescence et table des documents mises à jour avec les 16 fichiers réellement présents dans `template/`. | `README.md` (arborescence et table des documents) |

## 4. Points vérifiés cohérents — ne pas rouvrir sauf doute nouveau

| Paramètre | Valeur | Fichiers vérifiés | Statut |
|---|---|---|---|
| Cohorte SNP | 2 500 individus | `index.html:378` ; synthèse `:1034,1119,1131` | Cohérent |
| Panel WGS | 350 individus | `index.html:394` ; synthèse `:993,1034,1143,1171` | Cohérent |
| Familles nucléaires | 100 familles (~300 indiv., hors cohorte) | `index.html:386,433` ; synthèse `:1121,1124` | Cohérent |
| Allocation noyau/découverte | 322 + 28 (nominal) | `index.html:796` ; synthèse `:1387` ; protocole `:1780` | Cohérent |
| Stratification quintiles | 20-20-30-20-10 % dès 20 individus/cellule | `index.html:617` ; synthèse `:1234` ; justification `:1278` (formulation différente, règle identique) | Cohérent |
| Poids `S_div` (valeurs numériques) | 0,30 / 0,30 / 0,25 / 0,15 (PCA/ADMIX/IBD/ROH) | synthèse `:1214-1217` ; protocole `:1567` | Cohérent (voir HARM-006 pour la notation, pas les valeurs) |
| Étiquetage de version | V3.5 (synthèse/justification/méthodologie) et v1.5 (protocole/annexe B) | `index.html:112` ; `template/methodologie.html:189,223` | Cohérent — aucune mention prématurée de V3.6/v1.6 |
| Seuil KING théorique descriptif | 0,0625 ≈ cousins germains, valeur non-opérationnelle | protocole `:1590,1828` | Cohérent en tant que valeur théorique |
| Seuil KING opérationnel (après correction) | `kinship_KING > 0,0442` comme seuil d'exclusion | `index.html:543` ; synthèse `:1221,1552,1597,1643,1839` ; justification `:1271` ; protocole `:1228,1269,1569,1590,1617,1626,1828` | Corrigé et cohérent (commit `0d10cf8`, ex-HARM-001) |
| Terminologie strate ancestrale (après correction) | « strate de profil ancestral (inférée) », plus de « cluster » | `index.html:516` ; synthèse `:1202,1204,1581` ; justification `:1261,1285,1320,1321` | Corrigé et cohérent (commit `0d10cf8`, ex-HARM-002) |
| Notation `S_div` (après annotation) | Protocole `:1566` confirmé référence formelle ; variantes de `index.html`/synthèse annotées comme reformulations dérivées | `index.html:524` ; synthèse `:1220` | Corrigé et cohérent (commit `0d10cf8`, ex-HARM-006) |

Note : cette table annule et remplace l'ancien HARM-003 (« stratification par quintiles non
distinguée ») de la version précédente de ce fichier — la session 1 a vérifié que la règle de
quintiles est en fait cohérente entre `index.html`, la synthèse et la justification (formulations
différentes, règle identique). L'écart n'est donc pas confirmé et ne doit plus être cité comme tel.

## 4bis. Glossaire des paramètres — lecture intégrale (post-session 3)

`template/GLOSSAIRE_parametres.html` (563 lignes, tableau JS de 24 entrées) lu intégralement le
27 juillet 2026. Aucune divergence trouvée par rapport aux fichiers déjà corrigés :

- Seuil KING : `0,0442` aux deux entrées concernées (`KING` ligne 425, `KING_threshold` ligne 435) —
  cohérent avec le seuil opérationnel retenu partout ailleurs après correction HARM-001. Aucune
  occurrence de `0,0625` dans tout le fichier.
- Aucune occurrence de « cluster » dans tout le fichier — rien à harmoniser avec HARM-002 ici.
- Aucune référence à un fichier V3.6/v1.6.
- Effectifs cohérents avec le reste du corpus : `N_candidate` 2 500 (ligne 432), `N_WGS` 350
  (ligne 434), `N_test` 1 000/seed (ligne 433, cohérent avec protocole `:1210`), `N_seed_pilot` 25,
  `N_seed_confirm` 200, `N_seed_founder` 1 000 (lignes 446-448, cohérent avec protocole `:1799`),
  `S_sector` 8 (ligne 437, cohérent avec « maille constante à huit secteurs »), `K_source` 2 à 6
  (ligne 438, cohérent avec annexe B `:1230` `K_source ∈ {2,3,4,5,6}`), 10 générations max
  (ligne 439, cohérent avec annexe B `:1223`).
- Point mineur, non factuel : le pied de page (ligne 414) indique que le glossaire est « extrait du
  protocole de validation v1.4 WORKING » — une note historique sur son origine (la scission en trois
  documents a eu lieu en v1.4), pas une affirmation sur la version courante. Le contenu numérique
  (seuil KING 0,0442 notamment) est bien à jour avec le v1.5 actif. Formulation à clarifier si
  l'ambiguïté gêne un lecteur externe, mais ce n'est pas un écart de fond.

## 4ter. Annexe B — spécification du moteur de simulation — lecture sur le fond

`template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html` (285 lignes de corps de document,
18 sections) lu intégralement le 27 juillet 2026. Aucune divergence factuelle ou terminologique
trouvée par rapport aux fichiers déjà corrigés ou au glossaire :

- Aucune occurrence de `0,0625`, de « cluster d'ascendance » ou de référence V3.6/v1.6. La seule
  occurrence de « cluster » concerne un « cluster HPC » de calcul (ligne 1416), sans rapport avec la
  terminologie d'ascendance visée par HARM-002.
- Effectifs et compteurs cohérents avec le glossaire et le protocole : cohorte candidate 2 500
  (ligne 1300 ; « 3 500 individus de G0 » = 2 500 + 1 000, ligne 1359), cohorte test 1 000/seed
  (lignes 1300, 1382), panel WGS 350 (mentionné à plusieurs reprises comme cible de sélection),
  25 seeds pilotes / 200 seeds confirmatoires (lignes 1373, 1380), 8 secteurs et 6 macro-composantes
  obligatoires en confirmatoire avec `K_source ∈ {2,3,4,5,6}` en développement (ligne 1230, déjà cité
  en §4bis), 10 générations maximum (ligne 1223, déjà cité en §4bis).
- Le document confirme explicitement que le seuil KING et les seuils analytiques n'interviennent
  qu'au stade de la sélection des 350 (ligne 1361 : « aucun seuil KING ou autre seuil analytique
  n'est utilisé pour générer les 3 500 individus [...] Ces seuils n'interviennent qu'au stade
  ultérieur de la sélection des 350 »), cohérent avec le partage des responsabilités
  protocole/moteur déjà établi.
- Même note d'origine « v1.4 WORKING » qu'au glossaire (page de garde, ligne tableau `Version`),
  cohérente entre les deux documents plutôt que contradictoire.

**Point ouvert, décision utilisateur en attente — HARM-009 :** la page de garde (ligne du tableau
« Documents de référence ») cite trois documents : le protocole (`METHODOLOGIE_validation_protocole_v1_5.html`,
présent), le glossaire (`GLOSSAIRE_parametres.html`, présent), et
`Correction_3_Specification_simulateur_genomique_cadrage_v120.md`, décrit comme le « cadrage
progressif d'origine » — **absent du dépôt** (vérifié par recherche de fichiers). Contrairement à
HARM-007 (corrigé), cette référence ne promet pas un artefact futur mais cite un document de travail
historique ; il n'est pas certain qu'il doive exister dans le dépôt public. Trois options ont été
proposées à l'utilisateur (laisser tel quel / retirer la mention / préciser qu'il s'agit d'un
document interne non publié) sans réponse à ce stade — **ne pas corriger sans arbitrage**.

## 5. Non vérifié — hors périmètre de cette session, à traiter en session 2/3

- Extraction et vérification du contenu des deux fichiers bundle auto-extractibles
  (`template/Genome_Reunion_Standalone.html`, `template/Stratégie visuelle Genome Reunion -
  Standalone.html`) — ne peuvent pas être diffés comme du texte brut.
- Calendrier M4–M9 (sélection des 350 WGS) vs M4–M14 (familles) et activation de
  `Haplotype_utility` — évoqué par une revue antérieure mais **pas revérifié par citation directe**
  dans cette session ; ne doit plus être cité comme écart confirmé tant qu'aucune ligne précise n'a
  été relevée.
- Formalisation du recalibrage fréquentiel (brut/pondéré/imputé) — même remarque : évoqué mais non
  revérifié par citation directe dans cette session.
- Lecture de fond des pages sans paramètre scientifique détecté (`communication.html`, `feder.html`,
  `financement.html`, `presentation.html`, `architecture_pipeline.html`,
  `Genome_Reunion_synthese_infrastructure_v5_4.html`), notamment pour les chiffres budgétaires et de
  calendrier.

Cette section annule et remplace les anciens HARM-004 (« recalibrage fréquentiel non formalisé ») et
HARM-005 (« calendrier 350/familles non réconcilié ») de la version précédente de ce fichier : ces
points n'ont pas de citation fichier + ligne vérifiée dans cette session et ne doivent donc plus être
présentés comme des écarts confirmés, seulement comme des points en attente de vérification.

## 6. Session 3 — bilan et reste à faire

Les cinq écarts confirmés en session 2 (HARM-001, HARM-002, HARM-006, HARM-007, HARM-008) ont été
corrigés par le commit `0d10cf8` sur la branche `claude/harmonisation-fichiers-depot-s3-exqj2k`, et
vérifiés par relecture directe des fichiers modifiés (voir section 3 pour le détail des lignes).

`template/GLOSSAIRE_parametres.html` a depuis été lu intégralement (voir section 4bis) : aucune
divergence, rien à corriger dans ce fichier.

Points non corrigés dans cette session, car hors périmètre des écarts confirmés (voir section 5 pour
le détail) :
- HARM-007 a été résolu par reformulation (pas de création de fichier de recommandations) ; à
  documenter si un fichier de recommandations est finalement créé plus tard.
- Les points listés en section 5 (annexe B, fichiers bundle, calendrier M4-M9/M14, recalibrage
  fréquentiel, pages sans paramètre scientifique) restent non vérifiés et hors périmètre de cette
  session de correction.

## 7. Historique de l'incident

- Une version antérieure de ce fichier (introduite par le commit `e02a9f8`, « Restaure le suivi
  d'harmonisation méthodologique », mergée via la PR #43) décrivait un travail d'harmonisation
  fictif : fichiers V3.6/v1.6 inexistants, commits inexistants, note finale inventée.
- Ce fichier a été réécrit une première fois le 27 juillet 2026 (commit `3ca19ee` et suivants) pour
  corriger cette information et repartir d'un état vérifié, en listant cinq écarts (HARM-001 à
  HARM-005) dont certains n'avaient pas encore de citation fichier + ligne vérifiée.
- Ce fichier a été réécrit une seconde fois le 27 juillet 2026 (session 2 du pipeline défini par
  `SUIVI_REVUE_INTERSESSION.md`), en repartant exclusivement de
  `DIAGNOSTIC_COMPACT_HARMONISATION.md` : les écarts HARM-001 et HARM-002 sont confirmés avec
  citations précises des deux côtés, trois nouveaux écarts sourcés (HARM-006 à HARM-008) sont
  ajoutés, et les anciens HARM-003/004/005 sont retirés de la liste des écarts confirmés faute de
  citation vérifiée dans cette session (HARM-003 s'avère même non fondé — voir section 4).
- Session 3 (27 juillet 2026, branche `claude/harmonisation-fichiers-depot-s3-exqj2k`) a appliqué les
  cinq écarts de la section 3 par le commit `0d10cf8`, vérifié chaque correction par relecture directe
  des fichiers modifiés, et mis à jour ce suivi (déplacement en section 4, bilan en section 6).
