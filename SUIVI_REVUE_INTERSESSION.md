# Suivi inter-session — Revue de cohérence du corpus complet

**Objet :** vérifier, par lecture directe des fichiers (pas par confiance en un résumé), l'absence
de divergence factuelle entre **tous** les écrits du dépôt — documents scientifiques, pages
d'atterrissage, README, budget, communication — avec une exigence stricte de zéro divergence pour
la synthèse scientifique.

**Découpage retenu :** 3 sessions, en pipeline pour limiter la charge en tokens de chacune.

| Session | Rôle | Entrée | Sortie | Statut |
|---|---|---|---|---|
| 1 — Extraction | Lire chaque fichier une fois, en extraire les faits/paramètres/citations exactes (fichier + ligne) | fichiers bruts du dépôt | `DIAGNOSTIC_COMPACT_HARMONISATION.md` | Fait |
| 2 — Diagnostic | Repartir uniquement du fichier compact pour lister les contradictions, sans rouvrir les gros fichiers sauf pour confirmer un doute | `DIAGNOSTIC_COMPACT_HARMONISATION.md` | liste de corrections précises (fichier + ligne des deux côtés) | Fait |
| 3 — Correction | Appliquer les corrections fichier par fichier, en ne rouvrant que la portion concernée | liste de corrections | fichiers corrigés + ce suivi mis à jour | Fait (commit `0d10cf8`, écarts HARM-001/002/006/007/008) |

Règle commune aux trois sessions : **aucune ligne de ce suivi ne doit affirmer un statut
« harmonisé » ou « cohérent » sans une citation fichier + ligne vérifiée dans la session en cours.**
C'est la leçon de l'incident du `SUIVI_HARMONISATION_METHODOLOGIE.md` précédent, qui affirmait un
travail jamais fait.

## 1. Périmètre — inventaire complet du dépôt

19 fichiers texte identifiés (`.html` + `.md`), classés par pertinence pour la cohérence
scientifique :

### 1.1 Corpus scientifique — priorité haute (contiennent des paramètres chiffrés : KING, S_div, quintiles, 2 500/350/100)

| Fichier | Taille | Statut session 1 |
|---|---:|---|
| `template/Genome_Reunion_synthese_scientifique (14) (6).html` | 766 Ko | Passe ciblée faite (voir diagnostic) |
| `template/GENOME_REUNION_justification_choix_Sdiv.html` | 570 Ko | Passe ciblée faite |
| `template/METHODOLOGIE_validation_protocole_v1_5.html` | 633 Ko | Passe ciblée faite |
| `template/GLOSSAIRE_parametres.html` | 28 Ko | **Lu intégralement (post-session 3) — aucune divergence trouvée**, voir `SUIVI_HARMONISATION_METHODOLOGIE.md §4bis` |
| `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html` | 627 Ko | **Lu intégralement (post-session 3) — aucune divergence, 1 point ouvert (HARM-009)**, voir `SUIVI_HARMONISATION_METHODOLOGIE.md §4ter` |
| `index.html` (landing page principale) | 52 Ko | Passe ciblée faite |

### 1.2 Pages d'atterrissage / communication — priorité moyenne (mentionnent parfois les mêmes chiffres)

| Fichier | Taille | Statut session 1 |
|---|---:|---|
| `template/Genome_Reunion_Landing_v4.html` | 81 Ko | Vérifié : mention de version seulement (V3.5, cohérent) |
| `template/Genome_Reunion_Participer_v4.html` | 55 Ko | Vérifié : aucun paramètre scientifique chiffré présent |
| `template/methodologie.html` | 12 Ko | Vérifié lors de la session précédente (page d'aiguillage, pas de paramètre) |
| `README.md` | 4,7 Ko | **Lu intégralement — 1 divergence confirmée (voir diagnostic §3.5)** |
| `SESSION.md` | 5,4 Ko | Lu intégralement — journal de session daté juin 2026, obsolète mais pas une « affirmation scientifique » ; **pas de correction de fond nécessaire, juste noter l'obsolescence** |

### 1.3 Pages sans paramètre scientifique détecté — priorité basse

| Fichier | Taille | Statut |
|---|---:|---|
| `template/communication.html` | 4,7 Ko | Scanné (mots-clés absents) — **contenu non lu en détail** |
| `template/feder.html` | 8,9 Ko | Scanné (mots-clés absents) — **contenu non lu en détail** |
| `template/financement.html` | 4,2 Ko | Scanné (mots-clés absents) — **contenu non lu en détail** |
| `template/presentation.html` | 4,7 Ko | Scanné (mots-clés absents) — **contenu non lu en détail** |
| `template/architecture_pipeline.html` | 43 Ko | Scanné : mentionne KING/S_div comme noms de modules seulement, aucun seuil chiffré — **contenu non lu en détail** |
| `template/Genome_Reunion_synthese_infrastructure_v5_4.html` | 621 Ko | Scanné : mentionne KING/S_div comme noms de modules seulement, aucun seuil chiffré — **contenu non lu en détail** |

### 1.4 Cas particulier — fichiers « bundle » packagés

| Fichier | Taille | Constat |
|---|---:|---|
| `template/Genome_Reunion_Standalone.html` | 819 Ko | **Supprimé** (confirmé par l'utilisateur : ancienne version de la landing page donneurs, orpheline — aucune page ne la liait — obsolète, remplacée). |
| `template/Stratégie visuelle Genome Reunion - Standalone.html` | 1017 Ko | Artefact auto-extractible (`__bundler_loading`, contenu échappé en JS sur une poignée de lignes géantes). **Ne peut pas être diffé/corrigé directement comme du texte** — toute correction doit passer par la source qui l'a généré, pas par édition manuelle du bundle. Confirmé par l'utilisateur : alimente activement l'onglet Communication (lié depuis `template/communication.html:184`) — **à conserver**. Contient bien des mentions 2 500 / 350 WGS / S_div / KING dans son contenu échappé — **à extraire et vérifier** si une session future le juge nécessaire, pas par lecture directe. |

## 2. Ce qui reste à faire (au-delà de la session 3)

Corrigé en session 3 (commit `0d10cf8`), voir `SUIVI_HARMONISATION_METHODOLOGIE.md §3` :
- [x] Seuil KING 0,0625 utilisé à tort comme cutoff (HARM-001).
- [x] Terminologie « cluster d'ascendance » incohérente avec l'admixture continue (HARM-002).
- [x] Notation `S_div` non unifiée — HARM-006 résolu par annotation explicite des variantes comme
  reformulations dérivées de la notation du protocole, pas par unification forcée (les notations
  restent différentes par document, mais documentées comme telles).
- [x] Référence pendante à un fichier de recommandations V3.6 inexistant (HARM-007).
- [x] `README.md` : lien mort et arborescence/table des documents obsolète (HARM-008).

Corrigé/vérifié après session 3 (hors pipeline HARM, vérification ad hoc) :
- [x] Lecture intégrale de `template/GLOSSAIRE_parametres.html` — aucune divergence, sert désormais de
  table de référence canonique (voir `SUIVI_HARMONISATION_METHODOLOGIE.md §4bis`).
- [x] Lecture sur le fond de `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html` — aucune
  divergence factuelle/terminologique, mais un point ouvert en attente d'arbitrage utilisateur :
  **HARM-009**, référence en page de garde à `Correction_3_Specification_simulateur_genomique_cadrage_v120.md`
  (« cadrage progressif d'origine »), absent du dépôt — voir `SUIVI_HARMONISATION_METHODOLOGIE.md §4ter`
  pour les options proposées. Ne pas corriger sans réponse de l'utilisateur.
- [x] Fichiers bundle « Standalone » : statut clarifié par l'utilisateur.
  `template/Genome_Reunion_Standalone.html` supprimé (ancienne landing page donneurs, orpheline,
  obsolète). `template/Stratégie visuelle Genome Reunion - Standalone.html` conservé (alimente
  l'onglet Communication).
- [x] Calendrier M4–M9 (sélection des 350) vs M4–M14 (familles) et activation de
  `Haplotype_utility` — vérifié par citation directe dans `index.html` et la synthèse scientifique :
  **aucune discordance logique**, les deux phases sont explicitement parallèles et le corpus tranche
  déjà que le module familial (M14) n'alimente jamais la sélection des 350 (gelée à M9). Voir
  `SUIVI_HARMONISATION_METHODOLOGIE.md §4quinquies` pour le détail des citations.

Toujours en attente :

- [ ] Extraire le texte du fichier bundle restant (« Stratégie visuelle… ») pour vérifier s'il reproduit des chiffres/seuils obsolètes (0,0625, « cluster ») — reste non fait, ce fichier ne peut pas être édité comme du texte brut ; à ne faire que si jugé nécessaire puisqu'il est actif et sert de support visuel, pas de référence scientifique citée par le reste du corpus.
- [ ] Vérifier la formalisation du recalibrage fréquentiel (brut/pondéré/imputé) dans tous les fichiers qui le mentionnent (synthèse §16, protocole).
- [ ] Lire en détail les fichiers de priorité basse (§1.3) au moins une fois, même s'ils ne contiennent pas de paramètre scientifique, pour vérifier les chiffres budgétaires/calendrier (le budget et les dates apparaissent dans `index.html`, `README.md`, `SESSION.md` avec des valeurs qui pourraient diverger ailleurs).

## 3. Voir aussi

Le détail des faits extraits et des divergences confirmées est dans
`DIAGNOSTIC_COMPACT_HARMONISATION.md`, à consulter en priorité par la session 2 — il n'est pas
nécessaire de relire les fichiers sources listés ci-dessus pour les éléments qui y sont déjà cités
avec leur ligne exacte.
