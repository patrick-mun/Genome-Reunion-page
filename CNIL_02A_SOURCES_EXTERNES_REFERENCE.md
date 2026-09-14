# Génome Réunion — Sources génomiques externes et panels de référence

**Document :** CNIL_02A_SOURCES_EXTERNES_REFERENCE  
**Rattachement :** Phase 2 — qualification réglementaire / MR-004  
**Date :** 14 septembre 2026  
**Statut :** cadrage de travail à intégrer à la vérification MR-004  

---

## 1. Principe retenu

Les jeux de données génomiques externes utilisés exclusivement comme **panels de référence** pour les analyses de Génome Réunion peuvent être décrits dans le **même traitement de recherche MR-004** que l'étude initiale, dès lors qu'ils servent la même finalité scientifique et que leur utilisation est nécessaire au protocole.

Ils ne nécessitent pas, par principe, une MR-004 distincte pour chaque base ou chaque dataset.

En revanche, ils doivent être identifiés séparément dans le protocole et dans la cartographie des données comme **sources externes de données de référence**.

Cette position reste à valider avec le DPO / DRCI dans le cadre de la grille de conformité MR-004.

---

## 2. Justification réglementaire

La MR-004 impose que le protocole décrive notamment :

- l'origine des données utilisées ;
- leur nature ;
- la liste des données à caractère personnel traitées ;
- la justification de leur nécessité ;
- la méthode d'analyse ;
- les destinataires et flux pertinents ;
- les mesures de sécurité ;
- les transferts éventuels.

L'utilisation d'un panel externe pour positionner ou comparer les données réunionnaises doit donc apparaître explicitement dans le protocole, sans pour autant créer automatiquement un traitement réglementaire indépendant.

---

## 3. Catégories de sources externes prévues

### 3.1 1000 Genomes / IGSR

**Statut fonctionnel :** panel de référence génomique externe en accès ouvert.

Usages prévus dans Génome Réunion :

- ancrage des PCA ;
- référence pour ADMIXTURE ;
- comparaison de structure populationnelle ;
- phasage / imputation selon les analyses retenues ;
- contrôle de cohérence des composantes ancestrales ;
- référence méthodologique pour certaines analyses de diversité.

Les données IGSR / 1000 Genomes sont accessibles publiquement et ont été collectées dans un cadre prévoyant une large réutilisation scientifique.

### Position dossier CNIL

1000G doit être décrit comme :

> **source externe de données génomiques individuelles de référence, utilisée uniquement pour les analyses comparatives et d'ancrage nécessaires au protocole Génome Réunion.**

La disponibilité publique de ces données ne doit pas conduire à les qualifier automatiquement d'« anonymes » dans le dossier Génome Réunion.

---

### 3.2 European Genome-phenome Archive — EGA

**Statut fonctionnel :** source de données génomiques externes en accès contrôlé.

Certains jeux de données EGA pourront être nécessaires pour disposer de populations de référence insuffisamment représentées dans 1000G, notamment pour améliorer l'ancrage de certaines composantes ancestrales pertinentes pour La Réunion.

Chaque dataset EGA est soumis à ses propres conditions d'accès.

L'accès peut nécessiter :

- une demande auprès du Data Access Committee — DAC ;
- une description du projet de recherche ;
- l'identification des utilisateurs autorisés ;
- la signature ou l'acceptation d'un Data Access Agreement — DAA ;
- le respect de restrictions portant notamment sur la finalité, le stockage, la sécurité, la publication, la conservation et la redistribution.

### Position dossier CNIL

Les données EGA peuvent faire partie du même traitement MR-004 de Génome Réunion si elles sont utilisées uniquement pour la finalité scientifique définie dans le protocole.

Cependant, **la MR-004 ne remplace jamais les obligations imposées par le DAC ou le DAA du dataset EGA concerné**.

Chaque dataset devra donc être enregistré individuellement dans le dossier.

---

## 4. Registre des panels externes à constituer

Pour chaque ressource externe, documenter au minimum :

| Champ | Contenu attendu |
|---|---|
| Ressource | 1000G / IGSR / EGA / autre |
| Dataset / accession | identifiant exact |
| Organisme source | IGSR, EGA, consortium, etc. |
| Type d'accès | public / contrôlé |
| Population(s) de référence | populations effectivement retenues |
| Données utilisées | SNP, VCF, haplotypes, WGS, métadonnées minimales, etc. |
| Finalité dans Génome Réunion | PCA, ADMIXTURE, phasage, imputation, comparaison, etc. |
| Nécessité scientifique | justification de l'utilisation |
| Données réellement téléchargées | liste minimale |
| Lieu de stockage | environnement Génome Réunion autorisé |
| Utilisateurs autorisés | rôles / équipe |
| Durée de conservation | à définir selon nécessité et conditions d'accès |
| Redistribution | autorisée / interdite / conditionnelle |
| Conditions particulières | DAA, DAC, publication, embargo, etc. |
| Transfert international éventuel | à analyser si pertinent |
| Date de validation d'accès | le cas échéant |

---

## 5. Règle de minimisation

Seules les données externes nécessaires aux analyses prévues doivent être intégrées.

Exemples :

- ne pas importer de phénotypes EGA inutiles si seuls les génotypes sont nécessaires à la PCA ;
- ne pas télécharger des données WGS brutes si des génotypes harmonisés suffisent ;
- sélectionner les populations de référence pertinentes plutôt que l'intégralité d'un dataset lorsque cela est possible ;
- ne pas conserver indéfiniment des fichiers externes si le DAA ou le protocole n'en justifie pas la conservation.

---

## 6. Séparation logique dans les analyses

Le pipeline doit distinguer clairement :

```text
Données Génome Réunion pseudonymisées
            +
Panels externes de référence
            ↓
Harmonisation build / variants / strand / QC
            ↓
PCA / ADMIXTURE / phasage / imputation / analyses comparatives
            ↓
Résultats Génome Réunion
```

Les identifiants des individus des panels externes ne doivent pas être confondus avec les codes participants Génome Réunion.

Les règles d'accès imposées aux données EGA doivent rester applicables même lorsque celles-ci sont intégrées à un environnement de calcul commun.

---

## 7. Quand une analyse réglementaire séparée deviendrait nécessaire

Une source externe ne doit plus être considérée comme simple panel de référence de l'étude initiale si son utilisation devient une finalité autonome, par exemple :

- étude scientifique spécifique de la cohorte externe elle-même ;
- analyse de ses phénotypes pour une question sans lien direct avec le protocole Génome Réunion ;
- création d'une nouvelle cohorte combinée destinée à plusieurs recherches indépendantes ;
- conservation de ces données dans une ressource durable multi-projets ;
- redistribution à des tiers non couverts par les conditions d'accès ;
- utilisation pour entraîner un modèle IA réutilisable au-delà de l'étude initiale ;
- utilisation incompatible avec le consentement ou le DAA du dataset source.

Dans ces situations, il faudra réexaminer la finalité, le rôle du CHU, le cadre CNIL et les conventions applicables.

---

## 8. Position de travail retenue

> **1000G / IGSR et les datasets EGA nécessaires aux analyses de Génome Réunion seront intégrés au protocole MR-004 initial comme sources externes de référence, et non comme études réglementaires indépendantes. Ils feront toutefois l'objet d'un inventaire séparé et traçable. Pour chaque dataset EGA, les autorisations DAC et les obligations du DAA devront être respectées indépendamment de la conformité MR-004.**

---

## 9. À intégrer dans la grille de conformité MR-004

- [ ] lister les panels externes prévus ;
- [ ] préciser leur origine et leur statut d'accès ;
- [ ] justifier leur nécessité scientifique ;
- [ ] documenter les catégories de données importées ;
- [ ] vérifier la minimisation ;
- [ ] vérifier les conditions contractuelles EGA ;
- [ ] documenter stockage et accès ;
- [ ] analyser les transferts éventuels ;
- [ ] vérifier les règles de conservation et suppression ;
- [ ] tracer les versions / accessions réellement utilisées.
