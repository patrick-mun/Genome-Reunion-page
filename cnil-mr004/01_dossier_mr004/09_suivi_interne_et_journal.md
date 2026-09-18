# Suivi interne et journal des modifications — Protocole scientifique MR-004

**Version :** 1.1, extraction depuis le protocole (v0.8.9) + entrée 0.8.9
**Date :** 18 septembre 2026
**Statut :** document de pilotage interne, non destiné à la version déposée
**Propriétaire documentaire :** Patrick MUNIER, Service de génétique moléculaire, CHU de La Réunion
**Validateurs attendus :** équipe projet, DRCI, DPO
**Document associé :** `01_protocole_scientifique_mr004.md`
**Pièces justificatives correspondantes :** aucune (document de pilotage, pas une pièce du dossier réglementaire)

---

> Ce document reprend les anciennes sections 22 à 25 du protocole scientifique MR-004 — traçabilité des informations intégrées, points à relire et compléter, position actuelle du protocole, journal des modifications — retirées du protocole lui-même à partir de la version 0.8.9 pour l'alléger en vue du dépôt. La numérotation d'origine (22 à 25) est conservée par souci de continuité avec les versions précédentes. Ce document suit désormais l'avancement du dossier en parallèle du protocole ; il n'a pas vocation à être déposé et ne doit pas contenir de donnée personnelle ou confidentielle (voir la règle du README du dossier).

# 22. Traçabilité des informations intégrées depuis le dépôt

| Élément intégré au protocole | Source principale dans le dépôt / projet |
|---|---|
| 2 500 SNP / 350 WGS / 100 familles | synthèse scientifique + README |
| Génotypage SNP interne au CHU sur iScan Illumina | organisation opérationnelle du projet |
| Circuit 100 familles : reliquats ADN CRB + consentement recherche signé en consultation + pseudonymisation CRB | fonctionnement du projet à documenter dans les preuves institutionnelles |
| Finalité des 100 familles limitée au phasage / contrôle mendélien | méthodologie scientifique + décision de conception |
| Panel hybride 322 + 28 (ordre de grandeur actuel) | synthèse scientifique / méthodologie de sélection |
| PCA / ADMIXTURE / KING / ROH / IBD / phasage / imputation | synthèse scientifique + méthodologies |
| Pharmacogénétique populationnelle | objectifs scientifiques du projet + synthèse scientifique |
| Portail web public de résultats agrégés | objectif de valorisation / diffusion de Génome Réunion |
| 1000G / EGA comme panels témoins | synthèse scientifique + `CNIL_02A` |
| POPGEN pour 350 WGS | README + synthèse scientifique |
| Durée de la recherche : 36 mois | synthèse scientifique / plan économique + décision de conception |
| Circuit EFS → CRB | `CNIL_01_CIRCUIT_EFS_PRELEVEMENT.md` |
| Hypothèse RNIPH + MR-004 | `CNIL_02_QUALIFICATION_REGLEMENTAIRE.md` |
| Méthodes analytiques réglementaires | `CNIL_02C_METHODES_ANALYTIQUES_MR004.md` |
| Séparation de la ressource durable | plan CNIL + grille MR-004 |
| Consentement génétique, découvertes incidentes, volet familial, portail, POPGEN, collection biologique | note d’analyse réglementaire du 16 septembre 2026 |
| Financement en attente de démarche ; durée cible de 36 mois | plan économique du projet |

---

# 23. Points à relire et compléter ensemble

## 23.1 Points institutionnels

- [ ] confirmer le responsable de traitement ;
- [ ] nommer formellement le responsable de mise en œuvre / responsable scientifique ;
- [ ] valider définitivement la qualification RNIPH ;
- [ ] confirmer la base légale RGPD ;
- [ ] vérifier l’engagement de conformité MR-004 du CHU ;
- [ ] obtenir la note de qualification motivée de la DRCI ;
- [ ] faire valider scientifiquement le protocole avant le début du traitement ;
- [ ] enregistrer l’étude au répertoire public des projets de la PDS avant son commencement ;
- [ ] inscrire le traitement au registre des activités de traitement ;
- [ ] réaliser la déclaration CODECOH et vérifier l’exigence d’un avis CPP.

## 23.2 Population / collecte

- [ ] formaliser l’âge d’inclusion éventuel ;
- [ ] décider si l’âge est transmis au CRB / recherche, en classes si retenu ;
- [x] ne pas recueillir ni transmettre le sexe déclaré ; inférer le sexe chromosomique à partir du génotypage pour les contrôles qualité ;
- [x] retenir la résidence à La Réunion et la naissance des deux parents à La Réunion comme critères d’inclusion ;
- [x] vérifier les critères de résidence et de naissance des deux parents sur simple déclaration du donneur lors de l’entretien EFS, sans justificatif ;
- [ ] formaliser avec l’EFS le support de traçabilité de l’éligibilité ;
- [x] retenir uniquement le point de collecte EFS comme donnée géographique transmise, sans adresse, commune ni quartier de résidence ;
- [x] ne pas recueillir les origines ethniques ou continentales déclarées ;
- [ ] formaliser les critères d’exclusion du protocole ;
- [ ] valider la granularité du point de collecte (code de site, regroupement des sites mobiles) ;
- [ ] rédiger le formulaire de consentement (article 16-10, découvertes incidentes, case optionnelle ressource durable).

## 23.3 Méthodes

- [ ] confirmer la puce / nombre final de SNP ;
- [ ] confirmer la version finale de la stratégie 350 (322 + 28 ou ratio final issu de la validation) ;
- [ ] confirmer la liste finale des panels EGA ;
- [ ] définir la liste initiale des gènes / variants / recommandations pharmacogénétiques de référence à étudier au niveau populationnel ;
- [ ] confirmer le pipeline WGS et les formats effectivement conservés ;
- [ ] compléter la justification des effectifs avec les simulations ;
- [ ] produire le plan de gestion des données ;
- [ ] arbitrer la politique de découvertes incidentes et le statut des variants pharmacogénétiques à fort impact ;
- [x] fixer à 36 mois la durée de la recherche décrite dans ce protocole, jusqu’à la restitution des résultats agrégés.

## 23.4 Acteurs / flux

- [ ] qualifier juridiquement EFS ;
- [ ] qualifier juridiquement CRB ;
- [x] envoi direct à POPGEN des aliquots d’ADN pseudonymisés des 350 participants par le CRB ;
- [x] restitution directe des données de séquençage pseudonymisées par POPGEN au service de génétique moléculaire du CHU pour analyse ;
- [ ] identifier l’organisme séquenceur et qualifier POPGEN (sous-traitant ou responsable conjoint) ; exclure ou encadrer toute conservation de copie ;
- [ ] conclure la convention EFS / CHU sur la remise des reliquats ;
- [x] génotypage SNP réalisé en interne au CHU de La Réunion sur iScan Illumina ;
- [ ] finaliser les conventions et clauses RGPD.

## 23.5 Conservation / gouvernance / diffusion

- [x] retenir le principe de conservation des données de génotypage et de séquençage après les 36 mois ;
- [ ] fixer les durées par catégorie de données ;
- [x] retenir le principe de conservation de l’ADN restant au CRB après les 36 mois pour vérifications ou futures recherches dans un cadre adapté ;
- [ ] fixer les durées du matériel biologique ;
- [ ] séparer formellement l’étude MR-004 de la ressource durable ;
- [ ] chiffrer les seuils des règles minimales de divulgation (section 18.4) ;
- [ ] arbitrer la case optionnelle de consentement à la ressource durable ;
- [x] réserver le phasage et ses contrôles qualité aux besoins internes des analyses, sans comparaison méthodologique ni publication de ses performances (section 18.1) ;
- [ ] définir la politique de publication des variants rares / fondateurs ;
- [ ] définir le processus de validation d’un résultat avant publication sur le portail ;
- [ ] définir le DAC / accès chercheurs pour les données non publiques.

## 23.6 Volet familles

- [x] sélection par le CRB à partir de reliquats d’ADN déjà conservés ;
- [x] consentement recherche écrit et signé après information / discussion en consultation médicale ;
- [ ] vérifier sur la version applicable du formulaire que le consentement couvre l’examen génétique à des fins de recherche ; à défaut, information complémentaire individuelle ;
- [x] pseudonymisation par le CRB avant mise à disposition aux équipes ;
- [x] finalité limitée à l’amélioration / contrôle du phasage et aux transmissions mendéliennes ;
- [x] exclusion des familles des calculs de fréquences et de la description populationnelle des variants ;
- [ ] conserver la version applicable du formulaire de consentement comme preuve documentaire ;
- [ ] formaliser les critères techniques d’éligibilité des familles nucléaires ;
- [ ] documenter l’inclusion des mineurs (autorité parentale, information adaptée, majorité) ;
- [ ] documenter, le cas échéant, les situations particulières d’information (section 5.4.2) ;
- [ ] décrire la séparation fonctionnelle diagnostic / recherche dans l’AIPD ;
- [ ] arbitrer une éventuelle dissociation du calendrier du volet familial ;
- [ ] validation institutionnelle finale de l’intégration au périmètre RNIPH / MR-004.

---

# 24. Position actuelle du protocole

Au stade de cette version 0.8.9, le corpus du dépôt et les décisions de conception permettent de décrire de manière cohérente :

- la justification scientifique et médicale ;
- l’intérêt public incluant la pharmacogénétique populationnelle ;
- les objectifs ;
- la cohorte principale ;
- le circuit biologique EFS → CRB ;
- le génotypage SNP réalisé en interne au CHU sur iScan Illumina ;
- le circuit des 100 familles nucléaires à partir de reliquats d’ADN du CRB et de consentements recherche signés ;
- la finalité strictement technique du volet familial pour l’amélioration du phasage ;
- la pseudonymisation ;
- les grandes catégories de données ;
- les panels externes ;
- les méthodes analytiques ;
- la sélection des 350 WGS ;
- les limites scientifiques ;
- le calendrier général ;
- le **portail web public de restitution des résultats agrégés**, séparé des données individuelles et soumis à des règles de contrôle de divulgation ;
- les exclusions du traitement initial ;
- le consentement génétique et la base légale RGPD envisagée ;
- la procédure de découvertes incidentes ;
- les règles minimales du portail public ;
- l’encadrement de la collection biologique.

Restent ouverts avant dépôt : la note de qualification DRCI, la qualification de POPGEN, les seuils du portail, la politique de découvertes incidentes, les modalités du volet familial et la déclaration CODECOH.

Les principaux éléments encore manquants relèvent surtout des **arbitrages institutionnels, du dictionnaire final de données, des responsabilités, des durées de conservation, des contrats et de la définition formelle des règles de diffusion publique**, et non d’un manque de description scientifique du projet.

---

# 25. Journal des modifications

## Version 0.8.10

- Figure 1 (section 5) : correction de la légende, qui ne citait pas les sections 10.6 et 11.3 alors que deux des trois exclusions affichées (sélection des 350, pharmacogénétique) y sont détaillées. Correction de l'espacement entre le texte d'exclusion et la flèche de la figure, qui se chevauchaient visuellement (relevé par l'auteur sur une capture d'écran).

## Version 0.8.9

- Extraction des sections 22 à 25 du protocole scientifique vers le présent document de suivi, pour alléger le protocole en vue du dépôt ; mise à jour du renvoi correspondant dans l'en-tête du protocole.
- Ajout de deux schémas de synthèse dans le protocole (en complément du texte existant, sans rien y retirer) : Figure 1 « Trois populations aux usages distincts » (section 5) et Figure 2 « Circuit des échantillons et frontière de pseudonymisation » (section 7).

## Version 0.8.8

- Sections 1.3, 10.5, 10.6 et 11.3 : allègement des répétitions du principe « familles nucléaires non utilisées pour les fréquences / la pharmacogénétique / la sélection des 350 », remplacées par des renvois courts à la section 5.4 (canonique), sur le modèle déjà appliqué en section 8.3. Correction d'une désynchronisation : cet allègement avait déjà été appliqué au HTML publié lors de la régénération 0.8.4 mais jamais reporté dans la source markdown.

## Version 0.8.7

- Section 13.1 : remplacement des deux sous-titres non numérotés (« Puissance statistique... », « Précision du phasage... ») par des amorces en gras dans le paragraphe, pour s'aligner sur la convention typographique déjà utilisée ailleurs dans le document (par exemple section 19.1) plutôt que d'introduire un nouveau niveau de titre.

## Version 0.8.6

- Section 13.1 : ajout de la justification bibliographique du dimensionnement pour la précision du phasage haplotypique (Browning & Browning 2011 ; Williams et al. 2012 ; Avadhanam & Williams 2025 ; Delaneau et al. 2019 ; Hofmeister et al. 2023), distincte de la puissance statistique sur les fréquences alléliques déjà présente ; explicitation du rôle des 100 familles nucléaires et de l'inutilisabilité des panels externes du fait de l'admixture (renvois aux sections 5.4, 9.1 et 10.5).

## Version 0.8.5

- Sections 1.8, 2 et 22 : la voie de financement FEDER envisagée n’étant plus mobilisable, remplacement de l’affirmation d’un financement acquis par un statut « démarche à engager » ; la durée cible de 36 mois est maintenue, aucune analyse ne pouvant de toute façon débuter avant financement complet du projet.

## Version 0.8.4

- Section 17.3 : rédaction allégée du cadre de la ressource durable ; suppression de la promesse de dispense d’information ultérieure liée à la case optionnelle.

## Version 0.8.3

- Section 5.4.2 : remplacement de l’exclusion automatique des familles par un examen des conditions d’utilisation de l’échantillon ; harmonisation par renvois courts en sections 6.5 et 23.6.

## Version 0.8.2

- Section 1.7 : intégration de la rédaction validée distinguant consentement génétique et fondement RGPD ; retrait de la justification par le portail public ; clarification du retrait et maintien des modalités opérationnelles à valider avec la DRCI et le DPO.

## Version 0.8.1

- Retrait de la comparaison méthodologique et de la publication des performances du phasage ; maintien des contrôles qualité internes (sections 5.4, 8.3, 10.5, 13, 14, 18.1 et 23.5).
- Réintégration des décisions validées en versions 0.7.17 et 0.7.18 : note écrite conservée par le donneur avant signature et circuit de retrait via l’EFS, avec possibilité de contacter directement le DPO (sections 2, 6.2, 7.1 et 19).
- Les autres propositions et points à arbitrer de la version 0.8.0 sont conservés pour la poursuite de la relecture.

## Version 0.8.0 (historique)

| Section | Modification | Motif |
|---|---|---|
| En-tête, 1, 2, 6, 7, 10, 16, 20 | Suppression des tirets cadratins et demi-cadratins ; « POPgen » harmonisé en « POPGEN » | Règle typographique du projet |
| 1.3 | Argumentaire de qualification RNIPH et conséquence d’une requalification | Qualification présentée comme simple hypothèse |
| 1.3, 6.5, 19.2, 23.6 | Vérification de la couverture de l’examen génétique par le consentement familial ; case 23.6 décochée | Article D. 1131-22-5 ; information individuelle exigée par la MR-004 |
| 1.7 | Consentement génétique (article 16-10), base légale RGPD, articulation retrait / opposition | « Accord écrit » sans qualification juridique |
| 1.8 | Financement FEDER | Rubrique attendue d’un protocole ; mention reprise dans la description du répertoire public |
| 2, 5.1, 6.2, 6.3, 7.1, 7.2, 19 | « Accord écrit » remplacé par « consentement exprès écrit » | Idem 1.7 |
| 5.4.1 à 5.4.3 | Mineurs, personnes ne pouvant pas être informées, dissociation possible | Angles morts du volet familial |
| 7.4, 8.1, 8.4 | Code de site sans date ; âge en classes ; absence de géocodage des personnes | Quasi-identifiants ; exclusion du géocodage par la MR-004 |
| 7.7 | Déclaration CODECOH, avis CPP à vérifier, conventions | Collection biologique non mentionnée |
| 8.3, 14.1, 19 | Répétitions sur le volet familial remplacées par des renvois à 5.4 | Allègement |
| 10.2, 10.5, 10.6, 20 | Ascendance inférée ; exécution locale ; renvoi pharmacogénétique vers 19.1 ; séparation fonctionnelle | AIPD ; transferts hors UE |
| 12.2 | Statut de POPGEN, qualification RGPD, devenir des données et des échantillons | POPGEN est un projet de recherche, pas un prestataire |
| 13.1, 13.2 | Justification des effectifs ; plan de gestion des données | Rubriques manquantes |
| 14, 18.1 | Publication possible d’indicateurs agrégés de phasage | Décision de la version 0.7.16 modifiée, à arbitrer |
| 14.1, 18.3, 18.4 | Règles minimales de divulgation du portail | Exigence de la MR-004 sur la présentation des résultats |
| 16.2 | Étape M0 des formalités préalables | Enregistrement et validation avant commencement |
| 17 | Distinction archivage / futures recherches ; case optionnelle ressource durable | Périmètre de la MR-004 |
| 19.1 | Procédure de découvertes incidentes | Articles L. 1130-5 et D. 1131-22-4 |
| 21 à 24 | Mention d’annexe interne ; références réglementaires ; checklist complétée ; position mise à jour | Préparation du dépôt |
