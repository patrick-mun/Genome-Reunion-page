# Fiche de traitement et description des flux de données

**Projet Génome Réunion — référentiel génomique populationnel**

> **Statut : brouillon de travail.** Ce document est rédigé à partir des documents
> scientifiques et techniques du projet pour servir de base de travail au DPO du CHU de
> La Réunion et à la DRCI. Il ne constitue pas un avis juridique. Les points marqués
> ⚠️ **À CONFIRMER** doivent être tranchés avant tout dépôt.
>
> Version : 0.1 · 2026-09-10

---

## 1. Identification du traitement

| Élément | Valeur |
|---|---|
| Dénomination | Génome Réunion — constitution d'un référentiel génomique populationnel réunionnais |
| Nature | Recherche n'impliquant pas la personne humaine (RNIPH) + constitution d'un entrepôt de données de santé |
| Responsable de traitement | CHU de La Réunion (Laboratoire / Service de Génétique) — ⚠️ **À CONFIRMER** : responsabilité unique ou conjointe avec l'EFS |
| DPO | DPO du CHU de La Réunion |
| Qualification RIPH | Hors champ RIPH — aucun prélèvement dédié à la recherche (voir § 6) — ⚠️ **À CONFIRMER par la DRCI** |
| Voie envisagée | Déclaration de conformité **MR-004** pour le volet recherche ; voie entrepôt pour le volet ressource réutilisable (§ 4.2) |

## 2. Acteurs et rôles

| Acteur | Rôle dans le traitement | Qualification RGPD envisagée |
|---|---|---|
| CHU de La Réunion | Porteur scientifique, analyse, hébergement du référentiel | Responsable de traitement |
| EFS Réunion | Détenteur des tubes donneurs, recueil du consentement dans le circuit de don | ⚠️ **À CONFIRMER** : responsable conjoint ou responsable distinct amont |
| CRB | Conservation des échantillons biologiques | Sous-traitant, ou responsable de sa propre collection déclarée |
| POPgen | Réalisation du séquençage génome entier (350 échantillons) | Sous-traitant (art. 28 RGPD) — convention requise |
| Prestataire de génotypage SNP | Génotypage sur puce (2 500 + familles) | Sous-traitant (art. 28 RGPD) |
| Hébergeur | Hébergement des données génomiques | Sous-traitant — **certification HDS obligatoire** |

Chaque relation sous-traitante requiert un contrat conforme à l'article 28 du RGPD. Une
éventuelle responsabilité conjointe CHU / EFS requiert un accord au titre de l'article 26.

## 3. Finalités

### 3.1 Finalité principale — recherche

Constituer une référence génomique de la population réunionnaise permettant :

- l'estimation de fréquences alléliques locales ;
- l'amélioration de l'imputation génotypique pour cette population ;
- la reconstruction haplotypique adaptée à la structure locale (phasage) ;
- la documentation de la structure de population et de l'admixture ;
- la contextualisation de variants d'intérêt clinique et pharmacogénétique.

### 3.2 Finalité seconde — ressource réutilisable

Mettre le référentiel à disposition d'équipes de recherche tierces, **sous contrôle d'un
comité d'accès**, pour des travaux ultérieurs. Cette finalité relève du régime des
**entrepôts de données de santé** et impose une gouvernance d'accès écrite avant toute
ouverture.

### 3.3 Finalités exclues

À énoncer explicitement dans le dossier, car cela délimite le traitement :

- aucune finalité de diagnostic individuel ;
- aucun retour de résultat individuel hors procédure encadrée (§ 12.3) ;
- aucune finalité d'assurance, d'emploi ou de recherche en paternité ;
- aucune attribution d'appartenance ethnique à des individus.

## 4. Base légale et voie réglementaire

### 4.1 Base légale du traitement

**Consentement** de la personne concernée (art. 6.1.a et 9.2.a du RGPD), avec deux
régimes distincts selon la source (§ 6).

### 4.2 Voie réglementaire

| Volet | Voie envisagée |
|---|---|
| Recherche (constitution de la cohorte et analyses) | Déclaration de conformité **MR-004** |
| Ressource réutilisable avec accès tiers | Référentiel entrepôts de données de santé si éligible, sinon **autorisation spécifique** (avis CESREES puis autorisation CNIL) |
| Appariement ultérieur au SNDS | Autorisation distincte, ultérieure — mais décision d'architecture à prendre dès maintenant (§ 10.3) |

⚠️ **À CONFIRMER** : éligibilité du projet au référentiel entrepôts au regard de la
nature génétique des données et du volume. C'est le point qui détermine le délai
d'instruction de l'ensemble.

## 5. Catégories de personnes concernées

| Source | Population | Effectif cible |
|---|---|---|
| A — Reliquats EFS | Donneurs de sang volontaires, majeurs, en bonne santé apparente | ~2 500 |
| B — Base ADN CHU | Familles nucléaires (transmissions parent-enfant) issues de la biothèque du service de génétique | ~100 familles |

Les deux populations sont **disjointes** : les familles ne sont pas incluses dans les
2 500 individus populationnels et ne contribuent pas aux estimations de fréquences
alléliques. Cette séparation est une exigence méthodologique documentée, et elle est
également protectrice : une population de patients de génétique ne doit pas biaiser une
référence populationnelle.

## 6. Origine des échantillons et régime de consentement

### 6.1 Source A — reliquats de tubes de donneurs EFS

- Aucun prélèvement supplémentaire : utilisation des **reliquats** de tubes prélevés dans
  le cadre du don du sang, qui seraient sinon détruits.
- Donneurs **volontaires pour l'étude**, avec recueil d'un **consentement spécifique et
  prospectif** dans le circuit de don.
- Conséquence : pas de changement de finalité, et l'exigence de consentement propre à
  l'examen des caractéristiques génétiques est satisfaite d'emblée.

⚠️ **À CONFIRMER** : modalités opérationnelles du recueil dans le circuit EFS (qui
présente la note d'information, qui archive le consentement, comment il est lié au tube)
et avis du comité scientifique de l'EFS sur l'usage des reliquats.

### 6.2 Source B — base ADN du service de génétique

- Échantillons **déjà constitués**, issus de la biothèque du service.
- Consentement recherche **préexistant**, recueilli après explication par un **médecin
  généticien** — traçabilité et qualité de l'information documentées.
- Périmètre déclaré : diagnostic **et recherche au sens large**.

⚠️ **À CONFIRMER — point le plus sensible du dossier :**

1. **Inventaire des versions successives de formulaire** de consentement utilisées sur la
   période, et cartographie de ce que chacune couvre.
2. Le partage avec des **équipes tierces** (finalité § 3.2) est-il couvert ? Un
   consentement recueilli en colloque singulier porte naturellement sur la recherche du
   service, rarement sur une ressource partagée.
3. Cas particuliers : personnes mineures au moment du recueil et aujourd'hui majeures ;
   personnes décédées.

**Stratégie recommandée** : plutôt qu'une campagne de ré-information, restreindre la
sélection des 100 familles à celles consenties sous une version de formulaire
suffisamment large. La méthodologie n'exige que des familles « géographiquement
diversifiées », ce qui laisse la latitude nécessaire. À défaut, la voie
**information complémentaire + droit d'opposition** est plus légère qu'un
re-consentement.

## 7. Catégories de données traitées

### 7.1 Données d'identification

Conservées **séparément** des données génomiques, avec table de correspondance sous accès
restreint (§ 11).

- Source A : identité gérée par l'EFS dans son circuit de don.
- Source B : identité gérée dans le système du service de génétique.

### 7.2 Données génomiques

| Donnée | Périmètre |
|---|---|
| Génotypes SNP sur puce (~1,9 M SNP) | 2 500 individus + membres des 100 familles |
| Séquence génome entier (WGS) | 350 individus, sélectionnés parmi les 2 500 |
| Données dérivées | Proportions d'ascendance inférées, segments IBD, ROH, haplotypes phasés, fréquences alléliques agrégées |

### 7.3 Données associées

| Donnée | Justification | Minimisation |
|---|---|---|
| Sexe, âge (ou tranche d'âge) | Contrôle qualité, structure de population | Tranche d'âge à privilégier |
| Secteur géographique de résidence | Cellules géo-ancestrales de l'algorithme de sélection | **Granularité « secteur » uniquement** — ni commune, ni adresse |
| Lien de parenté déclaré | Phasage, validation des transmissions (source B) | Limité aux liens nécessaires |

### 7.4 Recommandation de minimisation

**Ne pas importer l'indication diagnostique ni aucune donnée clinique** de la source B.
Les familles ne servent qu'au phasage : le motif de recours au laboratoire n'est pas
nécessaire au traitement. C'est un argument de minimisation fort et facile à tenir devant
un évaluateur — à condition de s'y engager explicitement.

## 8. Flux de données

### 8.1 Flux — source A (reliquats EFS)

```
Don du sang (EFS Réunion)
  │  information + consentement spécifique recueillis dans le circuit de don
  ▼
Reliquat de tube identifié → pseudonymisation à la source
  │  (table de correspondance conservée par l'entité désignée, cf. § 11)
  ▼
Conservation CRB  ──────────────►  Extraction ADN
                                     │
                    ┌────────────────┴────────────────┐
                    ▼                                 ▼
        Génotypage SNP (prestataire)      Sélection algorithmique S_div
              2 500 individus                        │
                    │                                ▼
                    │                    Séquençage WGS — POPgen (France)
                    │                          350 individus
                    └────────────────┬────────────────┘
                                     ▼
                   Référentiel génomique — hébergement certifié HDS
                                     │
                                     ▼
                      Fréquences alléliques · haplotypes ·
                      panels d'imputation (données agrégées)
```

### 8.2 Flux — source B (base ADN CHU)

```
Biothèque ADN du service de génétique
  │  consentement recherche préexistant (§ 6.2) · filtrage sur version de formulaire
  ▼
Sélection de ~100 familles nucléaires, géographiquement diversifiées
  │  pseudonymisation · aucune donnée clinique importée (§ 7.4)
  ▼
Génotypage SNP (prestataire)
  ▼
Module de phasage — combiné aux 2 500 (hors estimation de fréquences)
  ▼
Référentiel génomique — hébergement certifié HDS
```

### 8.3 Flux de sortie (finalité § 3.2)

Mise à disposition d'équipes tierces, **après décision d'un comité d'accès**, sous forme
de données agrégées ou de données individuelles pseudonymisées selon le cas. Les
modalités sont à définir dans la politique de gouvernance des accès, qui conditionne
l'ouverture de la ressource.

## 9. Destinataires

| Destinataire | Données | Cadre |
|---|---|---|
| Équipe projet CHU | Données pseudonymisées | Habilitation nominative, RBAC |
| Prestataire de génotypage | Échantillons pseudonymisés | Contrat art. 28 |
| POPgen | Échantillons pseudonymisés (350) | Contrat art. 28 |
| Équipes de recherche tierces | Selon décision du comité d'accès | Convention par projet — après autorisation entrepôt |
| Communauté scientifique | Données agrégées (publications, fréquences) | Voir risque de ré-identification, § 12.4 |

## 10. Transferts, durées et perspectives

### 10.1 Transferts hors Union européenne

**Néant.** Le séquençage est réalisé en France. Aucun transfert relevant du chapitre V du
RGPD n'est prévu à ce stade. Tout recours ultérieur à un prestataire hors UE imposerait
une réévaluation.

### 10.2 Durées de conservation

⚠️ **À CONFIRMER — valeurs à arbitrer avec le DPO :**

| Donnée | Durée proposée |
|---|---|
| Échantillons biologiques | Selon la déclaration de collection du CRB |
| Données génomiques individuelles | Durée du référentiel, à borner explicitement |
| Table de correspondance identité / pseudonyme | À borner ; conditionne l'exercice des droits (§ 12) |
| Sauvegardes | 10 ans minimum (règle 3-2-1 retenue au volet SI) |
| Données agrégées et publiées | Sans limite, par nature irréversible |

### 10.3 Appariement ultérieur au SNDS — décision à prendre maintenant

Un appariement au SNDS repose sur un pseudonyme dérivé de traits d'identité. **Si la
pseudonymisation est conçue sans conserver le moyen de recalculer ce pseudonyme,
l'appariement futur devient définitivement impossible.**

Cette décision doit être prise à la conception, pas au moment de l'appariement. Deux
options :

1. Conserver, sous accès strictement séparé, les éléments permettant le calcul ultérieur.
2. Renoncer explicitement à tout appariement SNDS.

L'option 1 doit être mentionnée comme perspective dans le dossier initial, même si
l'appariement lui-même fera l'objet d'une autorisation distincte.

## 11. Mesures de sécurité

Reprises du volet Systèmes d'information du projet :

| Domaine | Mesure |
|---|---|
| Hébergement | Certification **HDS** obligatoire pour toutes les données génomiques |
| Pseudonymisation | Séparation stricte identité / données génomiques |
| Chiffrement | AES-256 au repos et en transit |
| Authentification | Double facteur |
| Habilitations | RBAC, habilitations nominatives |
| Traçabilité | Journal d'audit complet |
| Sauvegarde | Règle 3-2-1 (3 copies, 2 supports, 1 hors site) |
| Continuité | PRA / PCA — RTO < 4 h, RPO < 24 h |
| Contrôle | Test d'intrusion annuel, CI/CD sécurisé, analyse de vulnérabilités continue |

⚠️ **À PRÉCISER** : qui détient la table de correspondance, où elle est hébergée, et
selon quelle procédure elle peut être mobilisée. C'est la première question que posera un
évaluateur.

## 12. Droits des personnes

### 12.1 Information

- Source A : note d'information remise dans le circuit de don, avant consentement.
- Source B : information initiale délivrée par un médecin généticien ; information
  complémentaire à prévoir si le périmètre du consentement ne couvre pas le partage avec
  des tiers (§ 6.2).

### 12.2 Retrait du consentement et effacement

Point difficile à traiter honnêtement dans le dossier, car il sera examiné :

- retrait possible à tout moment, sans justification ;
- effet : retrait du référentiel pour toute diffusion **future**, destruction de
  l'échantillon résiduel ;
- limite à énoncer franchement : **les diffusions déjà réalisées et les données agrégées
  déjà publiées ne sont pas rétractables**. Le dire dans la note d'information plutôt que
  de laisser croire à une réversibilité totale.

Le maintien de la table de correspondance conditionne la capacité à honorer un retrait :
une pseudonymisation irréversible rendrait le droit d'effacement inopérant.

### 12.3 Découvertes incidentes — position à arrêter

⚠️ **DÉCISION DE PROJET REQUISE.** Sur 350 génomes entiers, la probabilité d'une trouvaille
de signification clinique n'est pas négligeable. Le dossier doit énoncer une position, et
la note d'information la refléter :

- retour individuel, ou absence de retour ;
- si retour : par quel circuit clinique, avec quelle validation, et avec quelle
  consultation de génétique associée.

Le principe déjà retenu par le projet — « aucun résultat individuel sans validation
clinique » — doit être transformé en procédure écrite.

### 12.4 Apparentements inattendus — position à arrêter

⚠️ **DÉCISION DE PROJET REQUISE.** Le module familial repose sur la validation des
transmissions parent-enfant : des discordances de filiation **seront** détectées. La
méthodologie du projet l'anticipe déjà comme nécessitant « une gestion éthique
spécifique ».

Position usuelle et recommandée : absence de retour de cette information, énoncée
explicitement dans la note d'information avant signature.

### 12.5 Risque de ré-identification

À traiter dans l'AIPD, mais à mentionner ici car il structure les modalités de diffusion :
sur une population insulaire d'effectif limité, des fréquences alléliques agrégées
peuvent porter un risque de ré-identification. Ce risque conditionne le niveau de
granularité des données publiables et les règles du comité d'accès.

## 13. Récapitulatif des points ouverts

| # | Point | Qui décide |
|---|---|---|
| 1 | Éligibilité au référentiel entrepôts, ou autorisation spécifique | DPO + CNIL |
| 2 | Inventaire des versions de consentement de la base ADN | Service de génétique |
| 3 | Couverture du partage avec des tiers par ces consentements | DPO |
| 4 | Qualification hors-RIPH formelle | DRCI |
| 5 | Responsabilité de traitement : CHU seul ou conjointe avec l'EFS | DPO + EFS |
| 6 | Déclaration de collection biologique — périmètre du CRB suffisant ? | DRCI + CRB |
| 7 | Détenteur et hébergement de la table de correspondance | DSIO + DPO |
| 8 | Conservation du moyen d'appariement SNDS futur | Comité de pilotage |
| 9 | Position sur les découvertes incidentes | Comité de pilotage + généticiens |
| 10 | Position sur les apparentements inattendus | Comité de pilotage + généticiens |
| 11 | Durées de conservation | DPO |

## 14. Documents restant à produire

| Document | Dépend de |
|---|---|
| AIPD (analyse d'impact) | Cette fiche · points 1, 7, 9, 10, 12.5 |
| Note d'information + formulaire de consentement (source A) | Points 9, 10 |
| Note d'information complémentaire (source B) | Points 2, 3 |
| Politique de gouvernance des accès | Point 1 · conditionne l'ouverture |
| Conventions art. 26 / art. 28 | Point 5 |
