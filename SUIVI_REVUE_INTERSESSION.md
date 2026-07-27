# Suivi inter-session — Revue de cohérence du corpus complet

**Objet :** vérifier, par lecture directe des fichiers (pas par confiance en un résumé), l'absence
de divergence factuelle entre **tous** les écrits du dépôt — documents scientifiques, pages
d'atterrissage, README, budget, communication — avec une exigence stricte de zéro divergence pour
la synthèse scientifique.

**Découpage retenu :** 3 sessions, en pipeline pour limiter la charge en tokens de chacune.

| Session | Rôle | Entrée | Sortie |
|---|---|---|---|
| 1 — Extraction | Lire chaque fichier une fois, en extraire les faits/paramètres/citations exactes (fichier + ligne) | fichiers bruts du dépôt | `DIAGNOSTIC_COMPACT_HARMONISATION.md` |
| 2 — Diagnostic | Repartir uniquement du fichier compact pour lister les contradictions, sans rouvrir les gros fichiers sauf pour confirmer un doute | `DIAGNOSTIC_COMPACT_HARMONISATION.md` | liste de corrections précises (fichier + ligne des deux côtés) |
| 3 — Correction | Appliquer les corrections fichier par fichier, en ne rouvrant que la portion concernée | liste de corrections | fichiers corrigés + ce suivi mis à jour |

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
| `template/GLOSSAIRE_parametres.html` | 28 Ko | Passe ciblée faite (KING seulement) — **relecture intégrale restante** |
| `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html` | 627 Ko | **Non inspecté sur le fond** |
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
| `template/Genome_Reunion_Standalone.html` | 819 Ko | Artefact auto-extractible (`__bundler_loading`, contenu échappé en JS sur une poignée de lignes géantes). **Ne peut pas être diffé/corrigé directement comme du texte** — toute correction doit passer par la source qui l'a généré, pas par édition manuelle du bundle. À statuer : encore utilisé par le site ou artefact obsolète à archiver ? |
| `template/Stratégie visuelle Genome Reunion - Standalone.html` | 1017 Ko | Même nature que ci-dessus. Contient bien des mentions 2 500 / 350 WGS / S_div / KING dans son contenu échappé — **à extraire et vérifier en session 2 ou 3**, pas par lecture directe. |

## 2. Ce qui reste à faire (répartition suggérée pour sessions 2 et 3)

- [ ] Lire intégralement `template/GLOSSAIRE_parametres.html` (actuellement vérifié seulement sur le seuil KING) et en faire la table de référence canonique.
- [ ] Lire `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html` sur le fond (non fait).
- [ ] Extraire le texte des deux fichiers bundle (`Standalone.html` et « Stratégie visuelle… ») pour vérifier s'ils reproduisent les chiffres/seuils obsolètes (0,0625, « cluster »).
- [ ] Décider du calendrier M4–M9 (sélection des 350) vs M4–M14 (familles) et de l'activation de `Haplotype_utility` — évoqué dans la revue précédente, pas revérifié dans cette passe.
- [ ] Vérifier la formalisation du recalibrage fréquentiel (brut/pondéré/imputé) dans tous les fichiers qui le mentionnent (synthèse §16, protocole).
- [ ] Trancher la question de nommage de la formule `S_div` (voir diagnostic §3.3) : notation unique à adopter partout, ou notations volontairement différentes par document (pédagogique vs formelle) — à documenter explicitement si c'est le cas.
- [ ] Lire en détail les fichiers de priorité basse (§1.3) au moins une fois, même s'ils ne contiennent pas de paramètre scientifique, pour vérifier les chiffres budgétaires/calendrier (le budget et les dates apparaissent dans `index.html`, `README.md`, `SESSION.md` avec des valeurs qui pourraient diverger ailleurs).

## 3. Voir aussi

Le détail des faits extraits et des divergences confirmées est dans
`DIAGNOSTIC_COMPACT_HARMONISATION.md`, à consulter en priorité par la session 2 — il n'est pas
nécessaire de relire les fichiers sources listés ci-dessus pour les éléments qui y sont déjà cités
avec leur ligne exacte.
