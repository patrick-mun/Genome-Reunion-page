# Lexique complémentaire — anglicismes et terminologie statistique/méthodologique

Document de travail, à usage interne, préparatoire à la création d'un glossaire public. Il ne remplace pas les glossaires déjà publiés — il les complète.

## Ce qui existe déjà (à ne pas dupliquer)

Deux glossaires couvrent déjà la quasi-totalité des acronymes de génétique des populations et de bio-informatique :

- **Section 11 « Glossaire »** de `Genome_Reunion_synthese_scientifique.html` (Tableau 9) : Admixture, ACMG/AMP, ADMIXTURE (logiciel), CADD/REVEL/PolyPhen/SIFT, Cellule géo-ancestrale, CRB, DAC, EFS, EGA, Effet fondateur, Effet Wahlund, GDA-8, gnomAD/ExAC/TOPMed, GWAS, Haplotype, HDS/RGPD, HWE, IBD, Imputation, iScan, KING, LAI, LD, MAF, Panmixie, PCA, Phasage, PLINK, POPgen, PRS, ROH, S_div, SHAPEIT4, SNP, VUS, WGS.
- **`GLOSSAIRE_parametres.html`** (glossaire interactif) : les paramètres et concepts nommés du protocole et du moteur de simulation (S_div, K_ADMIXTURE, N_seed_pilot, endo_rate, Profil A/C/D, etc.).

La liste ci-dessous ne reprend aucun de ces termes. Elle couvre des mots employés dans la synthèse, la méthodologie, l'annexe simulation et l'infrastructure, mais jamais définis nulle part — repérés par relecture systématique des documents (fréquence d'usage indiquée à titre indicatif).

---

## Méthodologie et gestion de projet

### Seed *(graine, graine aléatoire)*
Valeur numérique qui initialise un générateur de nombres pseudo-aléatoires. Chaque simulation, tirage d'échantillon ou rééchantillonnage du protocole part d'un seed enregistré et tracé dans un manifeste, ce qui permet de reproduire exactement un run donné et de distinguer un vrai résultat scientifique d'un simple coup de chance. Les documents distinguent une « graine maîtresse » par seed, dont toutes les sous-graines des étapes stochastiques sont dérivées de façon déterministe.
*Usage : ~90 occurrences dans la synthèse et la méthodologie — le terme le plus fréquent de cette liste, jamais expliqué en langage clair.*

### Pipeline *(chaîne de traitement)*
Suite ordonnée d'étapes de calcul automatisées (contrôle qualité, PCA, ADMIXTURE, phasage, imputation…) appliquées successivement aux données génétiques, chaque étape prenant en entrée la sortie de la précédente.
*Usage : « le pipeline d'optimisation », « pipeline WGS ».*

### Workflow *(flux de travail)*
Enchaînement concret des tâches et de leurs dépendances pour réaliser une opération manuelle ou semi-automatisée (ex. workflow de génotypage Illumina : amplification, fragmentation, hybridation, coloration, scan). Proche de « pipeline », mais désigne plutôt une procédure opérationnelle qu'une chaîne de calcul.

### Framework
Structure logicielle ou méthodologique réutilisable qui fournit des briques de base sur lesquelles une analyse spécifique vient se greffer, plutôt qu'un outil ponctuel. Apparaît surtout dans des titres d'articles cités en bibliographie (ex. cadre de sélection d'un panel de référence pour l'imputation).

### Benchmark
Point de comparaison ou étalon servant à évaluer la performance d'une méthode. La synthèse présente explicitement S_div comme un « benchmark informationnel » basé sur PCA/ADMIXTURE/IBD : un point de référence auquel comparer un tirage aléatoire, pas une preuve de supériorité absolue.

### Dataset *(jeu de données)*
Ensemble structuré de données réunies pour une analyse donnée (ex. « Dataset EGA » pour un jeu de génomes déposé dans une archive à accès contrôlé). Employé de façon interchangeable avec « jeu de données ».

### Dashboard *(tableau de bord)*
Interface de visualisation regroupant en un coup d'œil des indicateurs de suivi (ex. le fichier `dashboard.html` cité dans l'infrastructure pour visualiser l'avancement des jobs).

### Monitoring *(surveillance continue)*
Suivi continu et automatisé d'un indicateur dans le temps pour détecter une dérive. Employé pour la surveillance de la dérive des modèles d'IA (« datadrift »), avec réentraînement semestriel prévu en réponse.

### Cloud *(informatique en nuage)*
Hébergement des données et du calcul sur des serveurs distants mutualisés d'un prestataire, facturés à l'usage, par opposition à l'« on-premise » (serveurs possédés et hébergés en interne). Le budget infrastructure arbitre entre les deux options (« on-premise (334 k€) ou cloud HDS (270 k€ OPEX) »).

### Cluster *(grappe de calcul)*
Ensemble de plusieurs ordinateurs/serveurs reliés pour fonctionner comme une seule ressource de calcul plus puissante (ex. « cluster HPC »). À ne pas confondre avec le sens statistique de « cluster » (regroupement d'individus similaires).

### Batch *(lot)*
Groupe d'échantillons traités ensemble techniquement (même plaque de génotypage, même run de séquençage…). Un « effet batch » (ou « effet de lot ») est un biais technique introduit par cette différence de traitement plutôt que par une vraie différence biologique — d'où le « contrôle batch » mentionné en contrôle qualité.

### Cutoff *(seuil de coupure)*
Valeur numérique au-delà ou en deçà de laquelle une décision binaire est appliquée (inclure/exclure, positif/négatif). Le document précise par exemple qu'une valeur donnée « ne doit plus être utilisée comme cutoff d'exclusion ».

### Design *(plan / protocole d'étude)*
Ici, l'agencement méthodologique global d'une étude (répartition des groupes, comparaisons prévues) — pas le sens esthétique courant du mot en français. Le document note par exemple qu'un design d'étude externe « n'est pas directement celui de Génome Réunion ».

### End-to-end *(de bout en bout)*
Qui couvre l'intégralité d'une chaîne, du début à la fin, sans étape non testée entre les deux (ex. « Recette V3.5 end-to-end » : un test qui vérifie tout le pipeline en une fois, pas seulement des modules isolés).

### Stress-test *(test de robustesse / à la limite)*
Scénario délibérément construit pour être défavorable ou extrême, afin de vérifier qu'une méthode résiste à un cas difficile plutôt que de mesurer sa performance en conditions normales. Le « Profil D » du protocole est explicitement un stress-test d'isolat cryptique — le seul test réellement adverse du protocole.

---

## Statistique et apprentissage automatique

### Greedy *(glouton, algorithme glouton)*
Stratégie d'optimisation qui choisit à chaque étape le meilleur choix immédiat, sans revenir en arrière ni chercher l'optimum global. La sélection du noyau géo-ancestral de S_div est explicitement décrite comme une « procédure greedy », ce qui explique pourquoi des règles de départage (« tie-breakers ») doivent être figées à l'avance.

### Tie-breaker *(critère de départage)*
Règle supplémentaire utilisée pour trancher lorsque deux options sont à égalité selon le critère principal. Les tie-breakers de la sélection greedy de S_div doivent être stabilisés et gelés avant l'ouverture des seeds, pour éviter qu'on les ajuste après coup en fonction du résultat souhaité.

### Bootstrap
Méthode statistique de rééchantillonnage avec remise : on tire un grand nombre de nouveaux échantillons à partir des données déjà observées (ici, des seeds) pour estimer la variabilité d'un résultat sans hypothèse sur sa distribution théorique. Utilisée dans le protocole pour obtenir les intervalles de confiance du R² d'imputation (« les IC de R² sont obtenus par bootstrap apparié des seeds »).

### Resampling *(rééchantillonnage)*
Terme générique qui englobe le bootstrap et d'autres méthodes de nouveaux tirages à partir d'un même jeu de données, utilisé ici pour vérifier la stabilité d'un résultat (ex. « resampling candidat/test »).

### Random Forest *(forêt aléatoire)*
Méthode d'apprentissage automatique qui combine un grand nombre d'arbres de décision entraînés sur des sous-échantillons différents, et fait voter/moyenner leurs prédictions. Citée comme piste explorée pour prédire des pharmacorésistances locales à partir de variants génétiques.

### Machine learning *(apprentissage automatique)*
Famille de méthodes statistiques qui apprennent un modèle prédictif à partir des données plutôt que de règles écrites à la main (dont Random Forest fait partie). Mentionné notamment à propos du risque de « datadrift » des modèles d'IA nécessitant un monitoring.

### Outlier *(valeur aberrante / individu atypique)*
Observation qui s'écarte fortement du reste de la distribution. Dans la formule de S_div, la composante « PCA_global_outlier » désigne à quel point la position d'un individu dans l'espace des composantes principales est atypique par rapport au reste de l'échantillon — une originalité génétique recherchée ici, pas un défaut de mesure à corriger.

### Population stratification *(stratification de population)*
Présence, au sein d'un échantillon supposé homogène, de sous-groupes d'origines ancestrales différentes et donc de fréquences alléliques différentes. Peut fausser une analyse si elle n'est pas prise en compte (via PCA, ADMIXTURE) — c'est le mécanisme sous-jacent à l'effet Wahlund, déjà présent dans le glossaire principal.

---

## Génétique des populations et bio-informatique (compléments)

### Bottleneck *(goulot d'étranglement démographique)*
Épisode où l'effectif d'une population chute fortement puis se reconstitue, ce qui réduit et remanie durablement sa diversité génétique — un mécanisme apparenté à l'effet fondateur, déjà présent dans le glossaire principal. Apparaît dans le simulateur comme paramètre de scénario (« durée_bottleneck_gen »).

### Coverage *(couverture de séquençage)*
Nombre moyen de fois qu'une même position du génome est lue lors du séquençage. Plus la couverture est élevée (ex. « high-coverage », 30×), plus la détection des variants est fiable, au prix d'un coût plus élevé ; un « low-coverage » ou « mid-pass » (couverture partielle) est un compromis coût/qualité utilisé par certaines ressources citées en bibliographie.

### Read *(lecture de séquençage)*
Séquence courte d'ADN produite brute par un séquenceur, qu'il faut ensuite aligner (« read alignment ») sur un génome de référence pour reconstituer le génome complet. Mentionné à propos de l'outil BWA, utilisé « si le pipeline WGS inclut l'alignement des reads courts ».

---

## Méthode utilisée pour cette liste

Extraction du texte brut des principaux documents (synthèse scientifique, synthèse infrastructure, méthodologie protocole, annexe B simulation, justification S_div, architecture pipeline), puis recherche d'une liste de candidats (anglicismes courants + vocabulaire statistique/ML) avec comptage d'occurrences, puis lecture du contexte réel de chaque terme retenu pour vérifier qu'il est effectivement utilisé comme vocabulaire du projet (et pas seulement à l'intérieur d'un titre d'article cité en bibliographie, auquel cas il a été écarté).

Termes rencontrés mais écartés car cantonnés à des titres d'articles en bibliographie (pas du vocabulaire propre au projet) : *ancestry, sequencing, cohort, insights, screening, tracking, clustering, sampling, framework* (partiellement), *reporting*.
