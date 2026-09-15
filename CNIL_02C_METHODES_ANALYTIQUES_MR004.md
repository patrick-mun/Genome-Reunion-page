# Génome Réunion — Méthodes d’analyse des données génétiques pour le dossier MR-004

**Document :** CNIL_02C_METHODES_ANALYTIQUES_MR004  
**Date :** 15 septembre 2026  
**Statut :** section réglementaire de travail — à intégrer au protocole MR-004  

---

## 1. Objet de la section

Cette section décrit les principales méthodes d’analyse prévues dans la phase initiale de **Génome Réunion**, au niveau de détail nécessaire pour le dossier réglementaire.

Elle ne remplace pas les documents méthodologiques scientifiques détaillés du projet. Elle vise à expliquer :

- quelles données sont utilisées ;
- pourquoi elles sont nécessaires ;
- quelles transformations sont réalisées ;
- quels résultats dérivés sont produits ;
- quels risques particuliers doivent être pris en compte ;
- quelles analyses restent hors du périmètre initial.

Le dossier réglementaire décrit donc **ce que les analyses font aux données et pourquoi elles sont nécessaires**, tandis que les documents scientifiques détaillent les paramètres, logiciels, seuils, versions et procédures techniques.

---

## 2. Chaîne analytique générale

```text
Aliquot ADN pseudonymisé
        ↓
Génotypage SNP (~2 500 participants)
        ↓
Contrôle qualité des génotypes
        ↓
Structure génétique et diversité
(PCA / ADMIXTURE)
        ↓
Parenté et structure familiale
(KING / IBD)
        ↓
Autozygotie / effet fondateur
(ROH)
        ↓
Croisement avec panels externes de référence
(1000G / IGSR / datasets EGA autorisés)
        ↓
Calcul des variables nécessaires à la sélection
        ↓
Sélection géo-ancestrale des 350 individus pour WGS
(S_div + bras de découverte)
        ↓
Whole Genome Sequencing des 350
        ↓
Phasage / imputation / LAI
        ↓
Recalibrage des fréquences sur la cohorte large
        ↓
Référentiel génomique initial et résultats agrégés
```

Toutes les analyses sont réalisées sur des **identifiants pseudonymes**. L’équipe de recherche ne dispose pas de la table identité ↔ code, conservée par l’EFS.

---

## 3. Génotypage SNP

### Données utilisées

ADN extrait à partir du reliquat EDTA pseudonymisé.

### Finalité

Produire un profil génétique suffisamment dense pour :

- caractériser la structure génétique de la cohorte ;
- mesurer la diversité ;
- estimer les apparentements ;
- sélectionner les individus informatifs pour le WGS ;
- servir de socle au recalibrage ultérieur des fréquences.

### Données produites

Génotypes SNP individuels pseudonymisés.

### Justification réglementaire

Le génotypage constitue le socle nécessaire aux objectifs scientifiques de la phase initiale ; les données produites sont des données génétiques personnelles pseudonymisées.

---

## 4. Contrôle qualité

Le contrôle qualité vise à vérifier la fiabilité technique des données avant toute analyse populationnelle.

Il peut comprendre notamment :

- taux de génotypage ;
- cohérence du sexe biologique lorsque cette information est utilisée à des fins de QC ;
- hétérozygotie ;
- duplicats ;
- anomalies techniques ;
- cohérence globale des données.

Les résultats de contrôle qualité ne poursuivent aucune finalité clinique individuelle et ne doivent pas être interprétés en dehors du cadre scientifique prévu.

---

## 5. PCA et ADMIXTURE

### Finalité

Ces analyses sont utilisées pour caractériser la diversité génétique et la structure d’admixture de la cohorte réunionnaise.

### Utilisation

Elles servent notamment à :

- décrire la structure interne de la cohorte ;
- comparer les profils génétiques aux panels de référence externes ;
- éviter une sélection uniquement géographique ;
- construire la sélection géo-ancestrale des 350 WGS.

### Précaution

Ces méthodes ne sont pas utilisées pour attribuer une identité ethnique individuelle ni pour définir un « génome réunionnais ». Elles décrivent une structure génétique continue et admixée.

---

## 6. KING et analyses de parenté

### Finalité

KING est utilisé pour **estimer la parenté génétique entre échantillons pseudonymisés** afin de :

- mesurer la structure de parenté de la cohorte ;
- éviter une surreprésentation excessive d’un même groupe familial dans la sélection WGS ;
- contrôler les analyses sensibles à l’apparentement ;
- documenter la structure populationnelle.

### Limite réglementaire explicite

KING n’est pas utilisé pour identifier ou réidentifier les participants.

L’analyse porte exclusivement sur des codes pseudonymes et produit des relations entre identifiants de recherche. L’équipe de recherche ne dispose pas de la table identité ↔ code.

La finalité est donc **analytique et populationnelle**, non identifiante.

### Risque à traiter dans l’AIPD

KING peut néanmoins révéler l’existence d’un apparentement inattendu entre deux échantillons pseudonymisés. Ce risque relève de la confidentialité et de l’inférence familiale ; il devra être traité dans l’AIPD et dans la gouvernance des résultats.

---

## 7. ROH et IBD

### Finalités

Les analyses ROH et IBD permettent de documenter :

- segments d’autozygotie ;
- partage haplotypique ;
- effets fondateurs ;
- endogamie locale ;
- structure démographique récente.

Ces analyses participent également à la sélection d’individus informatifs pour le WGS.

### Précaution

Les résultats individuels restent des données génétiques dérivées pseudonymisées. Leur diffusion publique n’est pas prévue sous forme individuelle.

---

## 8. Panels externes de référence : 1000G / IGSR / EGA

Les panels externes sont utilisés pour contextualiser les profils génétiques réunionnais.

Ils peuvent servir à :

- ancrer les axes PCA ;
- stabiliser l’interprétation des composantes ADMIXTURE ;
- fournir des haplotypes de référence ;
- contribuer au phasage et à l’imputation ;
- comparer la cohorte à des populations de référence pertinentes.

Les données externes ne sont pas utilisées pour identifier les participants réunionnais.

Leur utilisation est documentée séparément dans `CNIL_02A_SOURCES_EXTERNES_REFERENCE.md`.

Pour les jeux EGA à accès contrôlé, les décisions DAC, DAA et restrictions propres à chaque dataset doivent être respectées.

---

## 9. Sélection des 350 WGS

La sélection WGS n’est pas un tirage aléatoire simple.

Elle vise à maximiser la couverture de la diversité génétique de la cohorte tout en maintenant une représentativité populationnelle exploitable.

Elle combine notamment :

- structure géographique ;
- profils d’ascendance génétique ;
- diversité PCA / ADMIXTURE ;
- parenté ;
- ROH / IBD ;
- bras de découverte pour profils rares ou insuffisamment représentés.

Le score `S_div` et les règles détaillées de sélection sont décrits dans les documents méthodologiques scientifiques du projet.

Pour le dossier réglementaire, la justification essentielle est que ces variables sont utilisées afin de sélectionner les individus les plus informatifs pour le WGS, sans finalité d’identification.

---

## 10. Whole Genome Sequencing des 350 individus

Le WGS produit des données génomiques individuelles à très haute résolution.

### Données produites

Selon le pipeline retenu :

- fichiers bruts de séquençage ;
- données alignées ;
- variants ;
- données dérivées nécessaires aux analyses.

### Risque particulier

Le WGS présente un risque élevé de ré-identification intrinsèque et doit être considéré comme une donnée personnelle génétique hautement sensible, même pseudonymisée.

Les conditions de transfert vers la plateforme de séquençage, de conservation, de restitution et de suppression devront être documentées dans les phases « acteurs », « flux » et « sécurité ».

---

## 11. Phasage, imputation et LAI

### Finalités

Le phasage et l’imputation permettent d’améliorer la reconstruction haplotypique et de projeter l’information issue du WGS vers la cohorte large.

La Local Ancestry Inference (LAI) peut être utilisée pour décrire l’ascendance locale le long du génome dans une population fortement admixée.

### Données utilisées

- SNP des ~2 500 participants ;
- WGS des 350 ;
- panels externes ;
- éventuellement données familiales si le volet familial est réglementairement intégré ultérieurement.

Le volet des 100 familles n’est pas automatiquement inclus dans cette section tant que sa qualification réglementaire propre n’est pas stabilisée.

---

## 12. Recalibrage des fréquences

Les 350 WGS sont sélectionnés de manière enrichie et ne constituent pas seuls un échantillon représentatif de la population.

Les fréquences observées dans les 350 ne sont donc pas utilisées naïvement comme fréquences populationnelles finales.

Le projet prévoit un recalibrage sur la cohorte large des ~2 500 participants au moyen de méthodes de pondération, stratification et/ou imputation.

Cette étape vise à produire des estimations plus robustes de fréquences génétiques locales.

---

## 13. Résultats produits

La phase initiale peut produire notamment :

- statistiques de contrôle qualité ;
- coordonnées PCA ;
- composantes ADMIXTURE ;
- coefficients de parenté ;
- mesures ROH / IBD ;
- listes de sélection WGS ;
- données de phasage et imputation ;
- fréquences alléliques locales ;
- indicateurs de qualité et d’incertitude ;
- résultats agrégés destinés aux publications et au référentiel initial.

Les résultats individuels ne sont pas destinés à être rendus publics.

---

## 14. Analyses exclues de la phase initiale

Ne sont pas considérés comme automatiquement couverts par la présente phase MR-004 :

- croisement avec des données cliniques hospitalières ;
- diagnostic individuel ;
- données de prescription / iatrogénie ;
- pharmacogénétique clinique individuelle ;
- protéomique ;
- réutilisation AURAGEN / autres cohortes ;
- entraînement de modèles IA sur données réelles ;
- toute analyse visant l’identification ou la ré-identification d’une personne.

Ces extensions feront l’objet d’une nouvelle analyse réglementaire avant mise en œuvre.

---

## 15. Renvoi aux documents scientifiques

Le présent document reste volontairement synthétique.

Les détails techniques sont documentés dans les fichiers scientifiques du projet, notamment :

- `template/Genome_Reunion_synthese_scientifique (14) (6).html` ;
- `template/GENOME_REUNION_justification_choix_Sdiv.html` ;
- `template/METHODOLOGIE_validation_protocole_v1_5.html` ;
- `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html`.

Le protocole réglementaire final pourra reprendre cette section sous une forme condensée et renvoyer vers ces annexes pour les paramètres scientifiques détaillés.
