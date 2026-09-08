# Génome Réunion — Correctifs scientifiques de la présentation ARS

**Date : 3 septembre 2026**

Ce fichier trace les corrections appliquées après l’audit scientifique et institutionnel de la présentation `presentation-ars`.

## Corrections appliquées

### Slide 05 — Histoire démographique

- Remplacement de « espace insulaire clos » par une formulation décrivant des **vagues successives de peuplement dans un contexte insulaire**.
- Les **effets fondateurs** ne sont plus présentés comme une caractéristique uniforme de toute la population, mais comme documentés dans certaines composantes.
- Même prudence pour l’**endogamie locale**, limitée à certains contextes.
- Suppression de la citation directe attribuée à Prosper Ève tant que la formulation exacte et la page source ne sont pas vérifiées.
- Remplacement de « admixture unique » par **population fortement admixée**.
- Légende de convergence reformulée pour éviter l’idée d’un patrimoine homogène.

### Slide 06 — Diversité comme continuum

- Remplacement de l’affirmation selon laquelle les catégories continentales auraient été « pensées pour des populations moins admixées ».
- Nouvelle formulation : les grandes catégories continentales de référence **ne suffisent pas nécessairement à décrire la combinaison d’ascendances observée à La Réunion**.

### Slide 07 — PCA pilote

- Le titre et la légende sont reformulés pour présenter la PCA comme une **première observation compatible avec une structure fortement admixée**, et non comme une démonstration exhaustive de toute la population réunionnaise.
- Mise à jour de l’accessibilité (`aria-label`) dans le même sens.

### Slide 08 — Lissage involontaire

- Suppression de la causalité trop forte « référentiel bien représentatif → diagnostic fiable » / « référentiel peu représentatif → diagnostic incertain ».
- Remplacement par :
  - **information plus robuste** ;
  - **incertitude plus élevée**.
- Le schéma porte désormais sur la robustesse de l’information populationnelle disponible pour l’interprétation, sans prétendre déterminer à lui seul le diagnostic.

### Slide 10 — PFMG

- Notes de présentation corrigées : le PFMG est décrit comme organisant l’accès national au **séquençage génomique et à son interprétation clinique**.
- Génome Réunion est positionné comme une couche différente : **référence populationnelle locale complémentaire**.

### Slide 12 — Pipeline

- Vérification : la version actuelle affichait déjà correctement une **base de fréquences locales recalibrée sur les 2 500 participants**.
- Aucune modification visuelle nécessaire ; notes précisées pour conserver cette logique méthodologique.

### Slide 19 — Priorisation pharmacogénétique

La formule devient :

> **Fréquence locale × exposition au médicament × preuve & actionnabilité × gravité du risque = priorité régionale**

L’OMEDIT est explicitement identifié dans les notes comme interlocuteur naturel pour le **bon usage du médicament** et la prévention de l’iatrogénie.

### Slide 22 — Gouvernance

Les notes Q&A intègrent désormais les questions opérationnelles à préparer :

- hébergement ;
- comité d’accès ;
- autorisation des requêtes ;
- données pouvant quitter le CHU ;
- articulation éventuelle avec l’EDS ;
- sécurité ;
- risque de ré-identification.

### Slide 23 — Rôle de l’ARS

Le rôle ARS est précisé :

> **Lecture sanitaire, équité, prévention, articulation avec le PRS, l’OMEDIT, l’offre de soins et le système régional de santé.**

### Slide 24 — Demande institutionnelle

La demande a été resserrée pour éviter de proposer prématurément le lancement d’une plateforme ou d’un programme clinique large.

Nouvelle proposition :

> **Co-construire avec l’ARS, l’OMEDIT et le CHU une première étude de faisabilité pharmacogénétique régionale permettant d’identifier 2 à 3 couples gène–médicament prioritaires à évaluer à La Réunion.**

Cette première étape est volontairement :

- limitée ;
- mesurable ;
- fondée sur les données locales ;
- fondée sur le niveau de preuve existant ;
- préalable à toute décision de déploiement clinique.

## Principe général conservé

> **Génome Réunion ne demande pas de créer une médecine spécifique à La Réunion. Il propose de produire la connaissance locale nécessaire pour que les progrès de la médecine génomique nationale bénéficient aux Réunionnais avec le même niveau de pertinence, de sécurité et d’équité.**

## Implémentation

Les corrections visibles sont centralisées dans `js/app.js` afin d’éviter une réécriture globale risquée du fichier HTML pendant cette passe de correction. Elles sont ciblées sur les `data-label` des slides et documentées dans le code.

Lors d’une prochaine passe structurelle du diaporama, ces formulations pourront être réintégrées directement dans `index.html` et dans `CONTENU_SLIDES.md` afin de supprimer cette couche de normalisation à l’exécution.
