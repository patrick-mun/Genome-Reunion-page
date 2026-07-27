# Suivi d'harmonisation méthodologique — Génome Réunion

**Branche :** `claude/harmonisation-suivi-fichier-nqdxxs`
**Statut :** réécrit le 27 juillet 2026, en session 2 du pipeline défini par
`SUIVI_REVUE_INTERSESSION.md` — reconstruit **exclusivement** à partir de
`DIAGNOSTIC_COMPACT_HARMONISATION.md` (aucun fichier source rouvert dans cette session), conformément
à la règle du pipeline : chaque écart listé ci-dessous cite le fichier + la ligne déjà vérifiés en
session 1, aucune ligne n'affirme un statut « harmonisé » sans cette citation.

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
| Annexe B — simulation | `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html` | v1.5 | **Non inspecté sur le fond** |
| Glossaire des paramètres | `template/GLOSSAIRE_parametres.html` | — | Passe ciblée faite (seuil KING seulement) — **relecture intégrale restante** |

Aucune version V3.6 ou v1.6 n'existe dans ce dépôt (confirmé par recherche de fichiers, cf.
`DIAGNOSTIC_COMPACT_HARMONISATION.md §1.4`).

## 3. Écarts confirmés — corrections à appliquer en session 3

Chaque écart cite fichier + ligne des deux côtés (valeur/terme correct vs valeur/terme à corriger),
tel qu'extrait dans `DIAGNOSTIC_COMPACT_HARMONISATION.md`.

| ID | Écart | Référence correcte | Occurrences à corriger |
|---|---|---|---|
| HARM-001 | Seuil KING opérationnel incohérent : le protocole tranche pour `0,0442` comme seuil d'exclusion ; `0,0625` n'est que l'espérance théorique des cousins germains, à ne plus utiliser comme cutoff. | `template/GLOSSAIRE_parametres.html:425,435` ; `template/METHODOLOGIE_validation_protocole_v1_5.html:1228,1269,1569,1590,1617,1626,1828` | `index.html:542` ; `template/Genome_Reunion_synthese_scientifique (14) (6).html:1552,1597,1643,1839` ; `template/GENOME_REUNION_justification_choix_Sdiv.html:1271` |
| HARM-002 | Terminologie « cluster d'ascendance/inféré » contredit l'admixture continue affirmée par ailleurs (justification §2.1) ; suggère à tort une partition discrète. | à définir : formulation neutre type « strate de profil ancestral inféré » (voir aussi `template/GLOSSAIRE_parametres.html`, non relu intégralement — pourrait déjà contenir la définition canonique) | `index.html:516` ; `template/Genome_Reunion_synthese_scientifique (14) (6).html:1202,1581` ; `template/GENOME_REUNION_justification_choix_Sdiv.html:1261,1285,1320,1321` |
| HARM-006 | Notation de la formule `S_div` non unifiée entre documents (noms de composantes différents, poids en dur vs symboliques). Pas nécessairement une erreur de fond (granularité différente selon le public), mais rend le corpus difficile à auditer. | `template/METHODOLOGIE_validation_protocole_v1_5.html:1566` (document de référence proposé) | `template/Genome_Reunion_synthese_scientifique (14) (6).html:1206-1210,1229` (variante bras-découverte) ; `index.html:520` |
| HARM-007 | `template/GENOME_REUNION_justification_choix_Sdiv.html:1252` renvoie à un « fichier de recommandations V3.6 » qui n'existe pas dans le dépôt (vérifié par recherche de fichiers et `git log --all`). | — | `template/GENOME_REUNION_justification_choix_Sdiv.html:1252` |
| HARM-008 | `README.md` pointe vers un fichier supprimé et ne liste pas les documents actifs réels. | — | `README.md:41,69` (lien mort vers `template/METHODOLOGIE_validation_voilure_reduite_v1_2.html`, supprimé par le commit `66a473b`) ; `README.md:34-56,62-72` (arborescence et table des documents obsolètes — omettent `GLOSSAIRE_parametres.html`, `METHODOLOGIE_validation_protocole_v1_5.html`, `METHODOLOGIE_validation_annexeB_simulation_v1_5.html`, `GENOME_REUNION_justification_choix_Sdiv.html`, `methodologie.html`, `financement.html`, `presentation.html`, `Genome_Reunion_Landing_v4.html`, `Genome_Reunion_Participer_v4.html`) |

**Décisions à prendre avant correction (session 2, en attente d'arbitrage) :**

- HARM-002 : valider la formulation de remplacement retenue, idéalement après relecture intégrale de
  `template/GLOSSAIRE_parametres.html` pour vérifier s'il propose déjà une définition canonique.
- HARM-006 : confirmer que le protocole (`METHODOLOGIE_validation_protocole_v1_5.html:1566`) est bien
  la notation de référence, et documenter explicitement les autres comme reformulations dérivées
  plutôt que comme définitions concurrentes.
- HARM-007 : choisir entre créer un fichier de recommandations minimal, ou reformuler la phrase pour
  ne plus promettre un artefact absent.

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
| Seuil KING théorique descriptif | 0,0625 ≈ cousins germains, valeur non-opérationnelle | protocole `:1590,1828` | Cohérent en tant que valeur théorique (voir HARM-001 pour son usage erroné ailleurs) |

Note : cette table annule et remplace l'ancien HARM-003 (« stratification par quintiles non
distinguée ») de la version précédente de ce fichier — la session 1 a vérifié que la règle de
quintiles est en fait cohérente entre `index.html`, la synthèse et la justification (formulations
différentes, règle identique). L'écart n'est donc pas confirmé et ne doit plus être cité comme tel.

## 5. Non vérifié — hors périmètre de cette session, à traiter en session 2/3

- Lecture intégrale de `template/GLOSSAIRE_parametres.html` (vérifié seulement sur le seuil KING).
- Lecture sur le fond de `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html`.
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

## 6. Prochaine action (session 3)

Avant toute nouvelle affirmation de statut « harmonisé », toute correction devra :

1. être appliquée directement dans les fichiers listés en section 3 (diff vérifiable) ;
2. être accompagnée du hachage de commit réel introduisant la modification ;
3. être vérifiée par relecture du fichier modifié sur la branche, pas seulement décrite en prose ;
4. mettre à jour ce fichier en déplaçant l'écart corrigé de la section 3 vers la section 4, avec la
   citation de la ligne corrigée.

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
