# Diagnostic compact — cohérence des paramètres du corpus Génome Réunion

Chaque ligne cite fichier + numéro de ligne vérifié directement (pas de résumé de résumé). Sert
d'entrée à la session 2 (diagnostic/corrections) sans avoir besoin de rouvrir les fichiers sources
listés ici.

## 1. Divergences confirmées (à corriger)

### 1.1 — Seuil KING opérationnel : 0,0625 vs 0,0442

Le protocole tranche explicitement : `KING > 0,0442` est le seuil opérationnel d'exclusion ;
`0,0625` n'est que l'espérance théorique descriptive des cousins germains et **ne doit plus servir
de cutoff**.

**Fichiers avec la valeur correcte (0,0442) :**
- `template/GLOSSAIRE_parametres.html:425,435`
- `template/METHODOLOGIE_validation_protocole_v1_5.html:1228,1269,1569,1590,1617,1626,1828`

**Fichiers qui utilisent encore 0,0625 comme s'il s'agissait du seuil opérationnel :**
- `index.html:542` — *(landing page principale, très visible)* : « kinship ≥ 0,0625 = exclusion »
- `template/Genome_Reunion_synthese_scientifique (14) (6).html:1552,1597,1643,1839`
- `template/GENOME_REUNION_justification_choix_Sdiv.html:1271`

**Action attendue :** remplacer `0,0625` par `0,0442` comme seuil d'exclusion dans les 6 emplacements
ci-dessus ; garder `0,0625` seulement comme valeur théorique descriptive si le contexte le justifie
(comme le fait déjà `METHODOLOGIE_validation_protocole_v1_5.html:1590`, qui peut servir de formulation
modèle).

### 1.2 — Terminologie « cluster d'ascendance/inféré » vs partition continue affirmée par ailleurs

Le corpus affirme (justification §2.1) que l'admixture réunionnaise est continue, sans partition
naturelle en sous-populations — mais plusieurs documents définissent une « cellule géo-ancestrale »
via un « cluster », terme qui suggère une partition discrète.

**Occurrences à reformuler (« strate de profil ancestral inféré » ou équivalent neutre) :**
- `index.html:516` — « secteur × cluster d'ascendance inférée »
- `template/Genome_Reunion_synthese_scientifique (14) (6).html:1202` (titre de section « secteur ×
  cluster d'ascendance »), `:1581` (glossaire interne du document)
- `template/GENOME_REUNION_justification_choix_Sdiv.html:1261,1285,1320,1321`

**Non problématique / à garder comme référence :** `template/GLOSSAIRE_parametres.html` n'a pas été
relu intégralement (voir suivi inter-session §2) — vérifier s'il contient déjà une définition
canonique neutre à généraliser aux autres documents.

### 1.3 — Notation de la formule S_div non unifiée entre documents

Trois formulations différentes de la même formule, avec des noms de composantes différents :

- `template/METHODOLOGIE_validation_protocole_v1_5.html:1566` — `S_div(i) = w_PCA·PCA_i + w_ADMIX·ADMIX_i + w_IBD·IBD_i + w_ROH·ROH_i`
- `template/Genome_Reunion_synthese_scientifique (14) (6).html:1206-1210` — `S_div_geoancestry(i) = w1×PCA_score_geoancestry(i) + w2×ADMIX_score_geoancestry(i) + w3×IBD_score_geoancestry(i) + w4×ROH_score_diversity(i)`, avec en plus une variante bras-découverte ligne 1229 : `+ e × Founder_ROH_score(i)`
- `index.html:520` — `S_div(i) = 0,30 × PCA_score(i) + …` (notation encore différente, poids en dur plutôt que symbole `w`)

**Ce n'est peut-être pas une erreur de fond** (niveaux de détail différents selon le public visé),
mais l'absence de nom canonique unique par composante rend le corpus difficile à auditer. **Décision
à prendre en session 2** : adopter une seule notation formelle (probablement celle du protocole,
document de référence) et présenter les autres comme des reformulations explicitement dérivées,
pas comme des définitions concurrentes.

### 1.4 — Référence pendante à un « fichier de recommandations V3.6 » inexistant

`template/GENOME_REUNION_justification_choix_Sdiv.html:1252` renvoie l'action « ajouter une
stratégie de couverture d'ensemble comme scénario contrefactuel » à un « fichier de recommandations
V3.6 ». **Aucun fichier V3.6 n'existe dans le dépôt** (vérifié par `find`/`git log --all`, cf.
`SUIVI_HARMONISATION_METHODOLOGIE.md §0`). Cette phrase promet un document qui n'existe pas.

**Action attendue :** soit créer ce fichier de recommandations (même minimal), soit reformuler la
phrase pour ne pas promettre un artefact absent.

### 1.5 — `README.md` référence un fichier supprimé

`README.md:41` (arborescence) et `README.md:69` (table des documents, lien
`METHODOLOGIE_validation_voilure_reduite_v1_2.html`) pointent vers
`template/METHODOLOGIE_validation_voilure_reduite_v1_2.html`, supprimé par le commit `66a473b`
(« Delete template/METHODOLOGIE_validation_voilure_reduite_v1_2.html »). Le lien de la table est
mort sur GitHub.

De plus, la table des documents du `README.md` (lignes 62-72) et l'arborescence (lignes 34-56) ne
mentionnent pas les fichiers réellement actifs suivants, présents dans `template/` :
`GLOSSAIRE_parametres.html`, `METHODOLOGIE_validation_protocole_v1_5.html`,
`METHODOLOGIE_validation_annexeB_simulation_v1_5.html`,
`GENOME_REUNION_justification_choix_Sdiv.html`, `methodologie.html`, `financement.html`,
`presentation.html`, `Genome_Reunion_Landing_v4.html`, `Genome_Reunion_Participer_v4.html`. Le
README est un instantané de structure obsolète.

## 2. Points vérifiés cohérents (ne pas rouvrir sauf doute nouveau)

| Paramètre | Valeur | Fichiers vérifiés | Statut |
|---|---|---|---|
| Cohorte SNP | 2 500 individus | `index.html:378`, synthèse `:1034,1119,1131` | Cohérent |
| Panel WGS | 350 individus | `index.html:394`, synthèse `:993,1034,1143,1171` | Cohérent |
| Familles nucléaires | 100 familles (~300 indiv., hors cohorte) | `index.html:386,433`, synthèse `:1121,1124` | Cohérent |
| Allocation noyau/découverte | 322 + 28 (nominal) | `index.html:796`, synthèse `:1387`, protocole `:1780` (grille de test incluant 322/28) | Cohérent |
| Stratification quintiles | 20-20-30-20-10 % dès 20 individus/cellule | `index.html:617`, synthèse `:1234`, justification `:1278` (formulation différente mais règle identique : quintile ≥20, partage binaire 6-19, glouton <6) | Cohérent |
| Poids S_div (valeurs) | 0,30 / 0,30 / 0,25 / 0,15 (PCA/ADMIX/IBD/ROH) | synthèse `:1214-1217`, protocole `:1567` | Cohérent (voir 1.3 pour la notation, pas les valeurs) |
| Étiquetage de version | V3.5 (synthèse/justification/méthodologie) et v1.5 (protocole/annexe B) | `index.html:112`, `template/methodologie.html:189,223`, tous les documents actifs | Cohérent — aucune mention prématurée de V3.6/v1.6 comme version active |
| Seuil KING théorique descriptif | 0,0625 ≈ cousins germains, valeur non-opérationnelle | protocole `:1590,1828` | Cohérent en tant que valeur théorique — le problème est son usage comme seuil ailleurs (§1.1) |

## 3. Non vérifié — hors périmètre de cette session

Voir `SUIVI_REVUE_INTERSESSION.md §2` pour la liste complète. En résumé : lecture intégrale du
glossaire et de l'annexe B, extraction du contenu des deux fichiers bundle « Standalone », calendrier
M4/M9/M14 et `Haplotype_utility`, formalisation du recalibrage fréquentiel, et lecture de fond des
pages sans paramètre scientifique détecté (communication, feder, financement, presentation,
architecture_pipeline, synthèse infrastructure).
