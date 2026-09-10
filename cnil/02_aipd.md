# Analyse d'impact relative à la protection des données (AIPD)

**Projet Génome Réunion — référentiel génomique populationnel**

> **Statut : brouillon de travail.** Rédigé pour servir de base au DPO du CHU de La Réunion.
> Ne constitue pas un avis juridique. Les cotations de gravité et de vraisemblance sont
> **proposées**, pas validées : elles doivent être discutées et arbitrées par le DPO et le
> comité de pilotage.
>
> Structure : méthodologie AIPD de la CNIL (description · principes fondamentaux · risques ·
> validation).
>
> Version : 0.1 · 2026-09-10 · Complète `01_fiche_traitement.md`

---

## Pourquoi une AIPD est obligatoire ici

Trois critères suffisent à eux seuls, et le projet en cumule plusieurs :

- traitement de **données génétiques** (donnée sensible, art. 9 RGPD) ;
- traitement **à grande échelle** (~2 500 individus génotypés, 350 génomes entiers) ;
- **croisement** de données et mise à disposition de tiers ;
- personnes concernées incluant des **personnes vulnérables** (patients, apparentés
  n'ayant pas consenti — § 3.4).

## 1. Description du traitement

Voir `01_fiche_traitement.md` pour la description détaillée. Rappel synthétique :

| Élément | Contenu |
|---|---|
| Finalité principale | Référence génomique populationnelle réunionnaise (fréquences, imputation, phasage) |
| Finalité seconde | Ressource réutilisable par des équipes tierces sous comité d'accès |
| Sources | A — reliquats de tubes de donneurs EFS volontaires (~2 500) · B — base ADN du service de génétique (~100 familles) |
| Données | Génotypes SNP (~1,9 M), WGS (350), données dérivées (ascendance inférée, IBD, ROH, haplotypes), secteur géographique, sexe, âge |
| Cycle de vie | Recueil → pseudonymisation → extraction → génotypage / séquençage → analyse → référentiel → diffusion agrégée ou sous convention |
| Sous-traitants | Prestataire de génotypage, POPgen (WGS, France), hébergeur HDS |
| Transferts hors UE | Néant |

## 2. Principes fondamentaux

### 2.1 Proportionnalité et nécessité

**Nécessité de la finalité.** Les référentiels génomiques internationaux (gnomAD, 1000
Genomes, HGDP) représentent inégalement les populations. La population réunionnaise, issue
d'une admixture récente et multiple avec des effets fondateurs documentés dans certaines
composantes, y est faiblement représentée. Cette sous-représentation a une conséquence
opérationnelle : l'information populationnelle disponible pour interpréter un variant est
moins robuste pour un patient réunionnais. La finalité est donc une finalité de santé,
pas une finalité de connaissance générale.

**Nécessité des données collectées.** Chaque catégorie de données est justifiée par la
méthodologie du projet (voir `METHODOLOGY_selection_V3_5.md`) :

| Donnée | Justification | Alternative écartée |
|---|---|---|
| Génotypes SNP (2 500) | Structure de population, cellules géo-ancestrales, estimation de fréquences | Effectif inférieur : perte de précision sur les cellules rares |
| WGS (350) | Découverte de variants absents des puces, panel d'imputation | SNP seul : ne permet pas la découverte de variants rares locaux |
| Familles nucléaires (100) | Phasage par transmission mendélienne directe | Phasage sur panels externes seuls : moins adapté à la structure locale |
| Secteur géographique | Cellules géo-ancestrales de l'algorithme de sélection | Commune ou adresse : **écartées** au titre de la minimisation |
| Sexe, âge | Contrôle qualité, structure de population | — |

**Le dimensionnement (2 500 / 350 / 100) fait l'objet d'une justification statistique
documentée** dans la méthodologie du projet. C'est un atout du dossier : la
proportionnalité n'est pas affirmée, elle est calculée.

### 2.2 Minimisation — engagements pris

| Engagement | Portée |
|---|---|
| Aucune donnée clinique ni indication diagnostique importée de la source B | Les familles ne servent qu'au phasage ; le motif de recours au laboratoire est inutile au traitement |
| Granularité géographique limitée au secteur | Ni commune, ni adresse, ni code postal |
| Séparation stricte identité / données génomiques | Table de correspondance isolée (§ 3.1) |
| Sortie privilégiée sous forme agrégée | Données individuelles uniquement sur décision du comité d'accès |
| Aucun prélèvement supplémentaire | Reliquats et échantillons existants uniquement |

### 2.3 Licéité, loyauté, transparence

- **Base légale** : consentement (art. 6.1.a et 9.2.a RGPD).
- Source A : consentement spécifique et prospectif, recueilli dans le circuit de don.
- Source B : consentement recherche préexistant, recueilli **après explication par un
  médecin généticien** — qualité et traçabilité de l'information documentées, ce qui
  constitue un point fort du dossier.

⚠️ **Réserve** : la couverture du partage avec des équipes tierces par les consentements de
la source B reste à vérifier (`01_fiche_traitement.md` § 6.2). Deux mesures de traitement
possibles : restriction de la sélection aux versions de formulaire adéquates, ou
information complémentaire assortie d'un droit d'opposition.

### 2.4 Exactitude, durées, sécurité

- Exactitude : contrôles qualité génotypiques, détection de contamination et d'erreurs
  d'orientation allélique prévus par la méthodologie (les familles servent aussi à cela).
- Durées : voir `01_fiche_traitement.md` § 10.2 — ⚠️ à arbitrer.
- Sécurité : voir § 4 ci-dessous.

## 3. Risques spécifiques au projet

Cette section traite les risques que la méthodologie générique d'une AIPD ne capte pas.
Ce sont eux qui seront examinés en priorité.

### 3.1 Ré-identification à partir de données agrégées

**Description.** Des fréquences alléliques publiées peuvent permettre de déterminer si un
individu donné a contribué à la cohorte, dès lors qu'on dispose de son profil génomique par
ailleurs. La littérature l'a établi sur des données agrégées de GWAS (Homer et al., 2008),
ce qui a conduit à restreindre l'accès public à ce type de données, puis sur les dispositifs
de type *beacon* (Shringarpure & Bustamante, 2015).

**Facteur aggravant propre au projet.** Le risque croît quand la taille de la population de
référence diminue. Un référentiel insulaire de 2 500 individus est nettement plus exposé
qu'un référentiel continental de plusieurs centaines de milliers.

| | Cotation proposée |
|---|---|
| Gravité | **Importante** — révélation de l'appartenance à la cohorte, donc d'un lien avec le CHU pour la source B |
| Vraisemblance | **Limitée** — requiert un attaquant disposant déjà d'un profil génomique de la personne |

**Mesures.**

- Ne pas diffuser en accès libre de fréquences alléliques à granularité fine sur les
  cellules de faible effectif ; seuil minimal d'effectif par cellule publiée à définir.
- Réserver les données individuelles à un accès sous convention et décision du comité
  d'accès, jamais en accès ouvert.
- Écarter tout dispositif d'interrogation de type *beacon* en accès non contrôlé.
- Documenter dans la politique d'accès le seuil d'agrégation retenu.

⚠️ **À DÉCIDER** : le seuil minimal d'effectif par cellule géo-ancestrale publiable. C'est
un arbitrage entre utilité scientifique et protection, et il doit être écrit.

### 3.2 Ré-identification par croisement généalogique — risque majoré à La Réunion

**Description.** La reconstruction d'identité par recoupement de segments partagés entre
apparentés (*genetic genealogy*) est d'autant plus efficace que la population est
apparentée et que des bases généalogiques existent.

**Facteur aggravant propre à La Réunion.** Le projet documente lui-même des effets
fondateurs et une endogamie locale dans certaines composantes — donc un apparentement
moyen élevé. S'y ajoute l'existence de ressources généalogiques réunionnaises étendues et
d'une pratique généalogique active. La combinaison « profil génomique + secteur de
résidence + ascendance inférée » réduit significativement l'espace des candidats.

C'est, à mon sens, **le risque le plus sous-estimé du projet** : il est structurellement
plus élevé ici que pour un référentiel métropolitain de taille équivalente.

| | Cotation proposée |
|---|---|
| Gravité | **Importante** |
| Vraisemblance | **Limitée à importante** — à discuter, dépend du niveau de diffusion retenu |

**Mesures.**

- Granularité géographique au secteur uniquement, jamais en dessous (déjà acquis).
- Ne pas publier conjointement secteur, ascendance inférée et segments IBD au niveau
  individuel.
- Interdiction contractuelle, dans les conventions d'accès, de toute tentative de
  ré-identification ou de croisement avec des bases généalogiques.
- Mentionner ce risque dans la note d'information : il fait partie de ce qu'une personne
  doit savoir avant de consentir.

### 3.3 Réversibilité impossible du retrait de consentement

**Description.** Une fois des données agrégées publiées ou transmises à une équipe tierce,
le retrait du consentement ne peut pas être rétroactif. Le droit d'effacement s'exerce sur
les diffusions futures, pas sur les diffusions passées.

| | Cotation proposée |
|---|---|
| Gravité | **Limitée** — atteinte au droit, non à la personne |
| Vraisemblance | **Maximale** — c'est une propriété structurelle, pas un aléa |

**Mesures.**

- Énoncer la limite explicitement dans la note d'information, sans laisser croire à une
  réversibilité totale.
- Maintenir la table de correspondance : une pseudonymisation irréversible rendrait le
  droit d'effacement totalement inopérant.
- Tracer les diffusions réalisées, pour être capable de dire à une personne ce qui est
  encore rétractable et ce qui ne l'est pas.

### 3.4 Données concernant des tiers n'ayant pas consenti

**Description.** Une donnée génétique renseigne sur les apparentés de la personne. Le
module familial y expose particulièrement : les données d'un trio informent sur des
apparentés qui n'ont pas été sollicités. Dans une population à apparentement élevé, la
portée dépasse le cercle familial immédiat.

| | Cotation proposée |
|---|---|
| Gravité | **Limitée à importante** |
| Vraisemblance | **Importante** — inhérent à la nature de la donnée |

**Mesures.**

- Consentement individuel de chaque membre de famille participant.
- Aucune restitution d'information à des apparentés non participants.
- Mention dans la note d'information du caractère partiellement familial de la donnée
  génétique.

### 3.5 Découvertes incidentes

**Description.** Sur 350 génomes entiers, la détection fortuite d'un variant de
signification clinique est probable.

| | Cotation proposée |
|---|---|
| Gravité | **Importante** — information de santé non sollicitée, potentiellement grave |
| Vraisemblance | **Importante** sur 350 WGS |

⚠️ **DÉCISION DE PROJET REQUISE** — l'AIPD ne peut pas être finalisée sans elle. Deux
options cohérentes :

1. **Absence de retour**, annoncée sans ambiguïté avant consentement. Simple, mais
   soulève une question éthique si un variant actionnable est identifié.
2. **Retour encadré** : circuit de re-contact via un médecin généticien, consultation
   dédiée, uniquement pour des variants actionnables selon une liste prédéfinie.

Le projet a déjà posé le principe « aucun résultat individuel sans validation clinique ».
Il reste à choisir entre 1 et 2, et à écrire la procédure. Le CHU disposant d'un service de
génétique, l'option 2 est techniquement à sa portée — mais elle a un coût en consultations
qu'il faut provisionner.

### 3.6 Discordances de filiation

**Description.** Le module familial repose sur la validation des transmissions
parent-enfant. Des discordances de filiation **seront** détectées. La méthodologie du
projet l'anticipe explicitement comme nécessitant « une gestion éthique spécifique ».

| | Cotation proposée |
|---|---|
| Gravité | **Importante** — atteinte à la vie privée et familiale |
| Vraisemblance | **Importante** — statistiquement attendu sur 100 familles |

**Mesures.**

- Position recommandée : **absence de retour** de cette information, énoncée dans la note
  d'information avant signature.
- Ne pas conserver l'information de discordance au-delà du contrôle qualité qui l'a
  produite.
- Procédure interne pour les personnes de l'équipe qui y seraient exposées.

### 3.7 Stigmatisation collective

**Description.** Un référentiel génomique portant sur une population identifiée peut être
mobilisé pour des lectures essentialistes ou hiérarchisantes. Le risque ne porte pas sur un
individu mais sur le groupe, ce qui le rend atypique dans une AIPD — mais il est réel, et
c'est celui qui pèse le plus sur l'acceptabilité du projet.

| | Cotation proposée |
|---|---|
| Gravité | **Importante** (collective) |
| Vraisemblance | **Limitée** |

**Mesures.**

- Cadrage sémantique déjà retenu par le projet : mesurer et représenter une diversité
  interne, ne pas définir de catégorie ; distinction explicite entre ascendance génétique,
  identité culturelle et origine sociale.
- Aucune attribution d'appartenance ethnique à des individus (finalité exclue,
  `01_fiche_traitement.md` § 3.3).
- Clause dans les conventions d'accès sur les usages proscrits.
- Restitution collective des résultats à la population, prévue par la gouvernance du projet.

### 3.8 Interface sous-traitant — sortie des échantillons

**Description.** Les 350 échantillons destinés au WGS quittent le CHU pour le séquençage.
Risque à l'interface (transport, conservation, retour des données brutes, sort des
échantillons résiduels chez le sous-traitant).

| | Cotation proposée |
|---|---|
| Gravité | **Importante** |
| Vraisemblance | **Limitée** |

**Mesures.** Contrat art. 28 précisant : pseudonymisation avant envoi, interdiction de tout
usage secondaire, sort des échantillons et des données brutes en fin de prestation
(destruction ou restitution documentée), sécurité du transport, absence de sous-traitance
ultérieure sans autorisation.

## 4. Risques génériques (méthodologie CNIL)

### 4.1 Accès illégitime aux données

| | Cotation proposée |
|---|---|
| Gravité | **Maximale** — donnée génétique, non révocable, informative sur la parentèle |
| Vraisemblance | **Limitée** compte tenu des mesures |

**Mesures existantes ou prévues** (volet Systèmes d'information du projet) : hébergement
certifié HDS, chiffrement AES-256 au repos et en transit, séparation identité / données
génomiques, authentification à double facteur, habilitations RBAC nominatives, journal
d'audit complet, test d'intrusion annuel, analyse de vulnérabilités continue, CI/CD
sécurisé.

⚠️ **À PRÉCISER** : détenteur, localisation et procédure de mobilisation de la table de
correspondance. C'est le point unique de défaillance du dispositif de pseudonymisation, et
la première question d'un évaluateur.

### 4.2 Modification non désirée des données

| | Cotation proposée |
|---|---|
| Gravité | **Importante** — une erreur sur un référentiel se propage à tous ses usages en aval |
| Vraisemblance | **Limitée** |

**Mesures.** Contrôles qualité génotypiques, validation des transmissions mendéliennes par
le module familial, détection de contamination et d'erreurs d'orientation allélique,
versionnage du référentiel, journal d'audit, traçabilité des versions diffusées.

Point d'attention propre à un référentiel : une version erronée déjà diffusée continue de
produire des effets chez les tiers. Prévoir une procédure de notification de correction aux
détenteurs d'une version.

### 4.3 Disparition des données

| | Cotation proposée |
|---|---|
| Gravité | **Limitée** — perte scientifique et de l'investissement, atteinte faible aux personnes |
| Vraisemblance | **Négligeable à limitée** |

**Mesures.** Sauvegarde 3-2-1 (3 copies, 2 supports, 1 hors site), rétention 10 ans
minimum, PRA/PCA avec RTO < 4 h et RPO < 24 h.

## 5. Synthèse des risques

| # | Risque | Gravité | Vraisemblance | Priorité de traitement |
|---|---|---|---|---|
| 4.1 | Accès illégitime | Maximale | Limitée | Haute |
| 3.5 | Découvertes incidentes | Importante | Importante | **Haute — décision requise** |
| 3.6 | Discordances de filiation | Importante | Importante | **Haute — décision requise** |
| 3.2 | Ré-identification généalogique | Importante | Limitée à importante | Haute |
| 3.1 | Ré-identification par agrégats | Importante | Limitée | Haute |
| 3.4 | Données de tiers non consentants | Limitée à importante | Importante | Moyenne |
| 3.7 | Stigmatisation collective | Importante (collective) | Limitée | Moyenne |
| 3.8 | Interface sous-traitant | Importante | Limitée | Moyenne |
| 4.2 | Modification non désirée | Importante | Limitée | Moyenne |
| 3.3 | Retrait non rétroactif | Limitée | Maximale | Transparence |
| 4.3 | Disparition | Limitée | Négligeable à limitée | Basse |

## 6. Points bloquants pour la finalisation

L'AIPD ne peut pas être présentée au DPO comme finalisée avant arbitrage de ces cinq
points :

| # | Décision | Bloque |
|---|---|---|
| 1 | Position sur les découvertes incidentes | § 3.5 · note d'information |
| 2 | Position sur les discordances de filiation | § 3.6 · note d'information |
| 3 | Seuil d'effectif minimal par cellule publiable | § 3.1 · politique d'accès |
| 4 | Détenteur et hébergement de la table de correspondance | § 4.1 |
| 5 | Conservation du moyen d'appariement SNDS futur | `01` § 10.3 |

## 7. Validation

| Étape | Responsable | Statut |
|---|---|---|
| Rédaction | Équipe projet | Brouillon v0.1 |
| Avis du DPO | DPO CHU | À solliciter |
| Consultation des personnes concernées ou de leurs représentants | À déterminer | Non engagée |
| Avis du comité d'éthique du CHU | Comité d'éthique | À solliciter |
| Décision du responsable de traitement | Direction générale CHU | — |

> **Note de méthode.** Les références bibliographiques citées en § 3.1 (Homer et al. 2008 ;
> Shringarpure & Bustamante 2015) doivent être vérifiées et complétées avant intégration au
> dossier définitif — elles sont mentionnées ici de mémoire, sans accès aux sources.
