# Génome Réunion — Contenu détaillé du diaporama ARS
## Document de travail slide par slide (validation avant passage au HTML/CSS/JS)

Base : plan narratif ARS (sept. 2026) + synthèse stratégique/personas (sept. 2026).
Architecture validée le 2026-09-03 : **20 slides principales** (au lieu de 15), pour un rythme
plus clair sur ~25-30 minutes, + 4 annexes inchangées.

Statut de chaque slide : 🟡 brouillon proposé · 🟢 validé · 🔴 à revoir · ⬜ à faire

---

## Architecture

### Acte 1 — Comprendre le problème (slides 1-7)
1. Ouverture
2. Sommaire / feuille de route *(nouvelle)*
3. Le problème global (référentiels inégalement représentatifs)
4. Pourquoi La Réunion — histoire démographique *(scindée de l'ancienne slide 3)*
5. Pourquoi La Réunion — diversité comme continuum *(scindée de l'ancienne slide 3)*
6. La preuve locale (PCA pilote)
7. Le lissage involontaire (égalité ≠ équité de pertinence)

### Acte 2 — Comprendre la réponse Génome Réunion (slides 8-12)
8. Positionnement : compléter, pas remplacer
9. Écosystème génomique — qui fait quoi *(remontée de l'ancienne annexe B)*
10. Ce que le projet construit (2 500 → 350 génomes)
11. Robustesse de la sélection méthodologique
12. Alignement avec les priorités ARS (matrice)

### Acte 3 — Comprendre les bénéfices sanitaires (slides 13-17)
13. Démonstrateur 1 : diagnostic — le problème
14. Démonstrateur 1 : diagnostic — l'apport *(scindée de l'ancienne slide 10)*
15. Démonstrateur 2 : pharmacogénétique — principe
16. Prioriser les risques médicamenteux (formule de priorisation)
17. Trajectoire vers une plateforme régionale de sécurisation thérapeutique

### Acte 4 — Rassurer et engager l'ARS (slides 18-20)
18. Éthique, données et gouvernance
19. Répartition des rôles (CHU / Région / État / ARS) *(scindée de l'ancienne slide 15)*
20. Conclusion et demande institutionnelle à l'ARS

### Annexes (inchangées)
A. Méthodologie de sélection détaillée
B. *(fusionnée dans la slide 9 principale — annexe B supprimée)*
C. Pharmacogénétique : de la preuve au déploiement
D. Test de résistance rapide (Q&A par direction ARS)

---

## SLIDE 1 — OUVERTURE 🟢 (validée)

### Texte écran

**Titre**
> Génome Réunion

**Sous-titre**
> Pour une médecine génomique plus pertinente et plus équitable à La Réunion

**Accroche (petite ligne sous le sous-titre)**
> Mieux représenter la diversité réunionnaise pour mieux contextualiser diagnostic, médicament et prévention.

Rien d'autre à l'écran : pas de logo institutionnel tiers, pas de chiffres, pas de PCA à ce stade.

### Texte oral (complet)

« Génome Réunion part d'une question simple : est-ce que les outils actuels de médecine génomique disposent du même niveau d'information lorsqu'ils sont appliqués à un patient réunionnais que lorsqu'ils sont appliqués aux populations historiquement les mieux représentées dans les référentiels ?

C'est cette question — pas une question de recherche fondamentale, une question de pertinence clinique — qui structure toute la présentation. »

### Références mobilisées
Aucune à ce stade (slide d'ouverture).

### Concept visuel précis
- Fond dégradé Brume → Lagon (#0F3A56), très épuré.
- Silhouette discrète de l'île de La Réunion en filigrane, faible opacité, positionnée bas-droite.
- Motif d'ondes/flux subtil en surimpression (identité visuelle Génome Réunion), animation lente en boucle possible (CSS, pas de JS lourd).
- Logo Génome Réunion en haut à gauche, petit.
- Typographie : titre en serif (Georgia), sous-titre en sans-serif (DM Sans) — cohérent avec charte existante.
- Aucune couleur "ethnique" codée, aucune carte de flux migratoires ici (réservée slide 4).

### Éléments interactifs
Aucun. C'est la slide la plus sobre du diaporama — elle doit installer un silence, pas une interaction.

### Transition
> « Pour répondre, il faut d'abord regarder comment ces référentiels ont été construits. »

---

## SLIDE 2 — SOMMAIRE / FEUILLE DE ROUTE 🟢 (validée)

### Texte écran

**Titre**
> Le fil du propos

**Quatre étapes (affichées comme une chaîne, pas une liste académique)**
> 1. Un constat — 2. Une réponse — 3. Deux usages sanitaires — 4. Une gouvernance

Sous chaque étape, une ligne courte :
1. **Un constat** — pourquoi une médecine égale pour tous n'est pas toujours une médecine également pertinente pour tous.
2. **Une réponse** — ce que Génome Réunion construit, et ce qu'il ne remplace pas.
3. **Deux usages sanitaires** — diagnostic et pharmacogénétique.
4. **Une gouvernance** — les conditions de confiance, et ce que l'ARS peut rendre possible.

### Texte oral (complet)

« Je vais suivre quatre temps. D'abord un constat, qui n'est pas un constat sur La Réunion mais sur la façon dont les connaissances génomiques ont été construites. Ensuite la réponse que nous proposons, et surtout ce qu'elle ne prétend pas être. Puis deux usages sanitaires concrets, volontairement limités à deux, pour rester démonstratifs plutôt qu'exhaustifs. Et enfin la question de la gouvernance, parce qu'une ressource de cette nature n'a de valeur que si le cadre dans lequel elle est construite est aussi solide que la science elle-même. »

### Références mobilisées
Aucune (slide de navigation).

### Concept visuel précis
- Fond Sable clair, sobre — rupture volontaire avec le fond Lagon de la slide 1 pour signaler qu'on entre dans le corps du propos.
- Chaîne horizontale de 4 pastilles numérotées reliées par un trait fin (même grammaire visuelle que les schémas causaux utilisés plus loin — familiarise l'œil tôt).
- Pas d'icônes ethniques, pas de pictogrammes médicaux surchargés — des mots seulement.
- Numéros en Flamboyant (#E8654A), texte en Lagon profond.

### Éléments interactifs
Optionnel : au clic sur une pastille, on saute directement à l'acte correspondant (si le mode diaporama le permet). Pas indispensable pour une présentation orale linéaire — à activer seulement si le fichier est aussi consulté en autonomie par l'ARS après la réunion.

### Transition
> « Premier temps : le constat. »

---

## SLIDE 3 — LE PROBLÈME GLOBAL 🟢 (validée)

### Texte écran

**Titre**
> Une même médecine, mais des référentiels inégalement représentatifs

**Trois affirmations, l'une sous l'autre, sobres**
- Les outils génomiques reposent sur des référentiels de population.
- Ces référentiels représentent historiquement mieux certaines ascendances que d'autres.
- Cette différence peut influencer certains usages cliniques.

**Phrase forte (mise en exergue, typographie plus grande)**
> L'égalité d'accès aux outils ne garantit pas toujours l'équité de pertinence.

### Texte oral (complet)

« Le problème n'est pas que les grandes bases de données soient mauvaises. Elles sont indispensables, et rien de ce que nous proposons ne les remet en cause.

Mais une base internationale peut être excellente tout en décrivant imparfaitement certaines populations — simplement parce qu'elle a été constituée, historiquement, à partir de cohortes qui ne représentaient pas également toutes les ascendances humaines.

Deux publications de référence l'ont documenté : Popejoy et Fullerton dans Nature en 2016, et plus récemment Fatumo et ses collègues dans Nature Medicine en 2022. Ce n'est donc pas une hypothèse, c'est un constat publié et réplicable. »

### Références mobilisées
- Popejoy & Fullerton, *Nature*, 2016.
- Fatumo et al., *Nature Medicine*, 2022.
- Distinction à garder claire en note de bas de slide ou en réponse Q&A : nombre de séquences ≠ participants GWAS ≠ ascendance ≠ diversité des populations ≠ données de référence (cf. synthèse §7.1) — ne pas surcharger l'écran avec cette nuance, la garder pour l'oral/Q&A si la question vient.

### Concept visuel précis
- Schéma vertical à 3 blocs reliés par des flèches descendantes :
  **Données de référence** → **Algorithmes / interprétation / recommandations** → **Patients**
- Sur le bloc "Données de référence", une représentation visuelle très simple (pas de carte du monde, pas de drapeaux) suggérant une profondeur de représentation inégale — par exemple une barre segmentée où certains segments sont plus "denses" que d'autres, sans légende ethnique, juste "profondeur de représentation historique variable selon les populations".
- Couleurs : Lagon/Récif pour les blocs neutres, un seul accent Flamboyant sur la barre de densité pour attirer l'œil sans dramatiser.
- Éviter tout visuel qui ressemblerait à une hiérarchie de qualité entre populations — c'est une question de profondeur de données, pas de valeur.

### Éléments interactifs
Aucun nécessaire. Slide à laisser respirer — c'est la première où l'auditoire doit vraiment s'arrêter sur l'idée, pas la parcourir vite.

### Transition
> « Cette question devient particulièrement importante lorsqu'on regarde la structure démographique de La Réunion. »

## SLIDE 4 — POURQUOI LA RÉUNION : HISTOIRE DÉMOGRAPHIQUE 🟡

### Texte écran

**Titre**
> Une population façonnée par des apports récents et multiples

**Schéma de flux (voir concept visuel) avec, en légende sobre :**
> Europe · Afrique et Madagascar · Inde du Sud · Chine · océan Indien

**Ligne de synthèse sous le schéma**
> Admixture récente + insularité + effets fondateurs + dérive + endogamie locale

### Texte oral (complet)

« La population réunionnaise résulte d'une histoire démographique récente — à l'échelle génétique, quelques siècles seulement — qui a mêlé des apports européens, africains et malgaches, sud-asiatiques, chinois, et plus largement de l'océan Indien.

Cette histoire s'est déroulée dans un contexte particulier : une île, donc une forme d'insularité ; des vagues de peuplement limitées dans le temps, donc des effets fondateurs ; et, pour certaines composantes ou certains territoires, une endogamie locale qui a renforcé certains profils génétiques.

Aucun de ces mécanismes n'est propre à La Réunion — on les retrouve dans beaucoup de populations insulaires ou d'histoire récente. Ce qui est propre à La Réunion, c'est leur combinaison, sur une population de cette taille, avec cette diversité de sources. »

### Références mobilisées
- Travaux spécifiques à La Réunion et à l'océan Indien (littérature de peuplement/démographie génétique locale — à citer précisément selon les sources internes disponibles au moment de la mise en forme finale).

### Concept visuel précis
- Carte stylisée de l'océan Indien (pas une carte politique détaillée — un tracé simplifié, cohérent avec le style "silhouette" de la slide 1) avec La Réunion au centre.
- Flèches de flux convergentes vers l'île depuis 5 directions (Europe, Afrique/Madagascar, Inde du Sud, Chine, océan Indien), chacune dans une nuance de la palette Lagon/Récif — **jamais de couleur "raciale" codée par flux** (ex. pas de bleu pour l'Europe et de brun pour l'Afrique : utiliser une seule gamme chromatique déclinée en intensité, pas en teinte).
- Épaisseur des flèches non proportionnelle à des données précises (on n'a pas ces chiffres) — toutes d'épaisseur comparable, pour ne pas suggérer une hiérarchie d'apport.
- Sous la carte, la ligne de synthèse en typographie discrète, presque une légende scientifique.

### Éléments interactifs
Aucun.

### Transition
> « Cette histoire ne produit pas des groupes séparés : elle produit un continuum. »

## SLIDE 5 — POURQUOI LA RÉUNION : DIVERSITÉ COMME CONTINUUM 🟡

### Texte écran

**Titre**
> Il n'existe pas un génome réunionnais

**Phrase pivot (en exergue, la plus grande typographie de la slide)**
> Il existe une diversité réunionnaise que la médecine génomique doit apprendre à mieux représenter.

**Sous la phrase, un rappel bref et net**
> Nous ne cherchons pas à définir une identité génétique réunionnaise. Nous cherchons à représenter un continuum que les catégories continentales classiques décrivent mal.

### Texte oral (complet)

« Il faut être précis sur ce point, parce que c'est celui sur lequel on nous attend le plus : nous ne cherchons pas à définir une identité génétique réunionnaise, et nous ne cherchons pas non plus à faire correspondre chaque Réunionnais à une des cinq sources que je viens de montrer.

Ce que produit cette histoire, c'est un continuum : la plupart des individus portent, à des degrés divers, des segments de génome hérités de plusieurs de ces apports à la fois. Les catégories continentales classiques — que les référentiels internationaux utilisent souvent pour se structurer — décrivent mal ce continuum, parce qu'elles ont été pensées pour des populations moins admixées.

C'est ce point précis, et lui seul, qui justifie l'existence de Génome Réunion : pas une différence d'identité, une différence de structure de diversité. »

### Références mobilisées
Aucune nouvelle — cette slide est une clarification conceptuelle de la slide 4, pas un nouvel apport de preuve (la preuve arrive slide suivante avec la PCA).

### Concept visuel précis
- Rupture volontaire avec le schéma de flux de la slide précédente : ici, un seul visuel abstrait — un dégradé continu de points (nuage), sans groupes ni frontières visibles, suggérant un continuum plutôt que des clusters.
- Pas de PCA réelle ici (réservée slide 6) : ce nuage est un schéma conceptuel, explicitement non issu de données, pour ne pas préempter la preuve réelle.
- Fond Sable, nuage en dégradé Lagon → Récif → Flamboyant très doux, aucune ligne de séparation entre "groupes".
- La phrase pivot occupe le centre optique de la slide — c'est la slide-mémoire du diaporama, celle que l'auditoire doit pouvoir répéter après coup.

### Précaution (rappel du plan narratif)
Ne jamais associer visuellement les groupes d'ascendance à des couleurs "ethniques" fixes — appliqué strictement ici et à la slide 4.

### Éléments interactifs
Aucun.

### Transition
> « Et ce continuum n'est pas seulement une déduction historique : nous commençons déjà à l'observer dans nos propres données. »

---

## SLIDE 6 — LA PREUVE LOCALE (PCA) 🟡

### Texte écran

**Titre**
> Une première observation locale : la diversité réunionnaise forme un continuum

**Visuel principal**
PCA pilote (~75 individus réunionnais) projetée sur les populations de référence 1000 Genomes,
individus réunionnais mis en évidence, populations de référence simplifiées en fond.

**Légende sous la figure (courte, factuelle)**
> Cohorte pilote, n ≈ 75. Projection sur 1000 Genomes.

**Phrase de cadrage (juste au-dessus ou à côté de la figure)**
> Cette cohorte pilote ne décrit pas toute La Réunion. Elle montre cependant que la diversité observée localement ne se superpose pas à une seule population de référence.

### Texte oral (complet)

« Voici une première donnée réelle, pas un schéma conceptuel. C'est une analyse en composantes principales — une méthode statistique standard pour visualiser la proximité génétique entre individus — réalisée sur environ 75 personnes réunionnaises, projetées sur les populations de référence du projet 1000 Genomes.

Je veux être précis sur ce que cette figure montre et ce qu'elle ne montre pas. C'est une cohorte encore petite : elle ne prétend pas représenter toute l'île. Mais elle montre déjà, très concrètement, pourquoi un simple rattachement à une population de référence unique serait artificiel : les individus réunionnais se positionnent entre plusieurs pôles de référence, avec de nombreuses positions intermédiaires — exactement ce que prédisait le raisonnement historique que je viens de présenter. »

### Références mobilisées
- Données pilotes Génome Réunion (PCA interne, ~75 individus).
- 1000 Genomes Project (populations de référence).

### Concept visuel précis
- La figure PCA elle-même : axes PC1/PC2 sobres, sans grille chargée, légende de populations de référence en gris/beige discret, points réunionnais en Flamboyant pour ressortir nettement.
- Pas de cercles ou polygones dessinés autour de "groupes" — laisser le nuage parler, cohérent avec le message anti-catégorisation des slides précédentes.
- La phrase de cadrage doit être visuellement aussi importante que la figure elle-même (même poids visuel), pour qu'elle ne soit pas lue comme une "petite note" mais comme une des deux informations centrales de la slide.

### Éléments interactifs
Aucun indispensable. Si le format final le permet, un survol des points réunionnais pourrait afficher "cohorte pilote" en rappel — reste optionnel, à activer seulement si le rendu HTML est aussi utilisé en consultation libre.

### Transition
> « Cette différence de représentation devient un problème sanitaire lorsqu'elle influence l'interprétation ou la performance d'un outil. »

---

## SLIDE 7 — LE LISSAGE INVOLONTAIRE 🟡

### Texte écran

**Titre**
> Quand l'égalité de traitement peut produire une inégalité de pertinence

**Chaîne causale (schéma vertical, voir concept visuel)**
> Même politique de santé → Même outil / même recommandation → Référentiels différemment représentatifs → Niveau d'information variable → Inégalité potentielle de pertinence

**Phrase forte**
> Le diagnostic, le médicament ou le test peuvent être les mêmes ; le niveau d'information disponible pour les interpréter peut ne pas l'être.

**Encadré de précaution (visuellement distinct, ton rassurant)**
> Il ne s'agit ni d'une discrimination volontaire ni d'une mauvaise politique de santé. Il s'agit d'un angle mort produit par l'état actuel des connaissances.

### Texte oral (complet)

« C'est le concept central de toute cette présentation, donc je vais prendre le temps de le poser clairement.

Une politique de santé nationale peut être parfaitement égalitaire dans son intention — le même outil, la même recommandation, le même parcours pour tous. Mais si cette politique s'appuie sur des connaissances scientifiques qui représentent différemment les populations, alors le niveau d'information réellement disponible pour interpréter un résultat, chez un patient donné, peut varier.

Ce n'est pas une inégalité de traitement. Personne ne décide de traiter différemment un patient réunionnais. C'est une inégalité de pertinence, involontaire, qui vient de l'état actuel des connaissances — pas d'une intention, pas d'une politique, pas d'un choix.

L'enjeu de Génome Réunion n'est donc pas de contester une politique nationale. C'est d'éviter qu'une politique uniforme ne masque, sans le vouloir, des différences de représentation qui comptent pour le soin. »

### Références mobilisées
Reprend et synthétise les preuves déjà posées slides 3 et 6 — pas de nouvelle référence introduite ici, volontairement : cette slide est un moment de synthèse conceptuelle, pas d'apport factuel supplémentaire.

### Concept visuel précis
- Chaîne verticale à 5 maillons reliés par des flèches, densité croissante de couleur Flamboyant à mesure qu'on descend vers "inégalité potentielle de pertinence" — pour donner une sensation de dérive progressive plutôt qu'un saut brutal.
- L'encadré de précaution est visuellement séparé (fond légèrement distinct, encadré arrondi) pour qu'il ne soit jamais lu comme accessoire — c'est la phrase la plus politiquement sensible du diaporama et elle doit être vue, pas juste dite à l'oral.
- Éviter tout rouge alarmiste : rester dans la palette de marque (Flamboyant reste chaud mais pas "signal danger").

### Éléments interactifs
Aucun. C'est une slide de bascule conceptuelle — elle doit être lue lentement, pas manipulée.

### Transition
> « La réponse n'est pas de remplacer les dispositifs existants. Elle est de les compléter. »

## SLIDE 8 — POSITIONNEMENT (compléter, pas remplacer) 🟡

### Texte écran

**Titre**
> Compléter les référentiels, pas les remplacer

**Schéma à 4 niveaux (voir concept visuel)**
> Référentiels internationaux (gnomAD / 1000 Genomes / HGDP) → Dispositifs nationaux (PFMG / AURAGEN / SeqOIA) → Ressource locale (Génome Réunion) → Usage (interprétation / pharmacogénétique / recherche / prévention)

**Phrase centrale**
> Génome Réunion ne remplace pas les grandes bases internationales : il les complète là où elles décrivent insuffisamment notre population.

### Texte oral (complet)

« Avant d'aller plus loin, je veux répondre directement à l'objection la plus naturelle : "cela existe déjà".

Oui — et c'est heureux. Les référentiels internationaux comme gnomAD, 1000 Genomes ou HGDP sont indispensables. Les dispositifs nationaux comme le Plan France Médecine Génomique, AURAGEN ou SeqOIA font un travail que Génome Réunion ne cherche ni à dupliquer ni à concurrencer.

La différence tient en une question. Le Plan France Médecine Génomique répond à : pouvons-nous séquencer ce patient et identifier ses variants ? Génome Réunion répond à une question différente : disposons-nous d'un référentiel suffisamment représentatif pour interpréter certains de ces variants dans le contexte réunionnais ? Ce n'est pas la même couche du système. »

### Références mobilisées
- gnomAD, 1000 Genomes, HGDP (référentiels internationaux).
- Plan France Médecine Génomique, AURAGEN, SeqOIA (dispositifs nationaux).

### Concept visuel précis
- 4 blocs empilés horizontalement ou en escalier (pas une pyramide hiérarchique — plutôt des couches côte à côte de largeur égale, pour éviter de suggérer que Génome Réunion serait "au sommet" ou "à la base").
- Chaque bloc dans une teinte de la même famille Lagon/Récif, le bloc "Ressource locale / Génome Réunion" seul en Flamboyant pour le repérer immédiatement.
- Flèches fines entre les blocs, horizontales, suggérant un flux de complémentarité et non une hiérarchie de valeur.
- La phrase centrale en dessous du schéma, cadre sobre.

### Éléments interactifs
Aucun.

### Transition
> « Pour situer précisément cette complémentarité, voici comment se répartissent les rôles dans l'écosystème génomique. »

---

## SLIDE 9 — ÉCOSYSTÈME GÉNOMIQUE (qui fait quoi) 🟡

### Texte écran

**Titre**
> Génome Réunion dans l'écosystème génomique

**Tableau (repris et enrichi de l'ancienne annexe B, remontée en slide principale)**

| Ressource | Fonction |
|---|---|
| 1000 Genomes | Populations de référence internationales |
| gnomAD | Fréquences alléliques internationales |
| HGDP | Diversité génétique mondiale |
| Plan France Médecine Génomique | Stratégie nationale de médecine génomique |
| AURAGEN / SeqOIA | Séquençage génomique clinique |
| **Génome Réunion** | **Référence populationnelle locale complémentaire** |

**Message sous le tableau**
> Complémentarité, jamais substitution.

### Texte oral (complet)

« Ce tableau n'a qu'un objectif : que vous repartiez avec une carte claire de qui fait quoi, pour ne jamais confondre Génome Réunion avec un doublon d'un dispositif existant.

Les référentiels internationaux fournissent les populations et fréquences de référence à l'échelle mondiale. Les dispositifs nationaux assurent le séquençage clinique et la stratégie nationale. Génome Réunion occupe une case qui, aujourd'hui, n'est occupée par aucun de ces dispositifs : la référence populationnelle locale, construite spécifiquement pour la diversité réunionnaise. »

### Références mobilisées
Reprend les mêmes entités que la slide 8 — cette slide est la version "carte de synthèse" que l'ARS peut garder après la réunion, notamment si le support est transmis en PDF.

### Concept visuel précis
- Tableau sobre, 2 colonnes, alternance de fond très légère entre les lignes pour la lisibilité.
- Ligne "Génome Réunion" mise en évidence (fond Flamboyant très clair ou bordure Flamboyant), sans être criarde.
- Message final centré sous le tableau, en petites capitales, comme une signature.
- Slide volontairement dense en texte par rapport aux autres — c'est la seule du diaporama pensée aussi comme "fiche mémo" autonome, donc c'est assumé.

### Éléments interactifs
Aucun.

### Transition
> « Pour construire cette référence, le projet s'appuie d'abord sur une cohorte large. »

## SLIDE 10 — CE QUE LE PROJET CONSTRUIT 🟡

### Texte écran

**Titre**
> De 2 500 participants à une référence génomique locale

**Pipeline (schéma horizontal, voir concept visuel)**
> ≈ 2 500 participants génotypés → caractérisation de la diversité → sélection d'environ 350 génomes informatifs → séquençage du génome entier (WGS) → base de fréquences locales → ressource sanitaire et scientifique

**Encart séparé**
> + ≈ 100 familles nucléaires, pour la reconstruction haplotypique

### Texte oral (complet)

« Concrètement, voici ce que construit le projet. Nous ne séquençons pas quelques centaines de personnes au hasard.

Nous commençons par génotyper environ 2 500 participants — une technique plus légère que le séquençage complet, qui permet de caractériser la structure de diversité de la population. C'est seulement à partir de cette caractérisation que nous sélectionnons environ 350 génomes pour un séquençage complet : ceux qui apportent le plus d'information sur la diversité observée.

À cela s'ajoute un volet spécifique d'environ 100 familles nucléaires — parents et enfants — qui permet de reconstruire des haplotypes, c'est-à-dire des blocs de variants transmis ensemble, une information précieuse pour l'interprétation clinique future. »

### Références mobilisées
Chiffres internes du projet (2 500 participants, 350 génomes WGS, 100 familles) — cohérents avec la méthodologie de sélection déjà publiée par le projet (cf. `template/` : documents de méthodologie de sélection).

### Concept visuel précis
- Pipeline horizontal en 5 étapes, flèches fines, icônes minimalistes (pas de pictogrammes ADN clichés type double hélice tournante — rester sobre, une forme géométrique simple par étape suffit).
- L'encart "familles nucléaires" positionné en dessous du pipeline, relié par une ligne pointillée plutôt qu'intégré dans la chaîne principale, pour marquer que c'est un volet complémentaire parallèle et non une étape séquentielle.
- Chiffres clés (2 500 / 350 / 100) en grande typographie Flamboyant, seuls éléments "chiffrés" de toute la slide pour qu'ils ressortent.

### Éléments interactifs
Aucun.

### Transition
> « Dans une population admixée, la manière de sélectionner ces génomes est aussi importante que leur nombre. »

---

## SLIDE 11 — ROBUSTESSE DE LA SÉLECTION 🟡

### Texte écran

**Titre**
> Représenter la diversité plutôt que multiplier les génomes redondants

**Comparaison à deux volets (voir concept visuel)**
> Tirage aléatoire : plusieurs individus très proches dans l'espace de diversité
> Sélection raisonnée : meilleure couverture de l'espace génétique

**Mention discrète en bas de slide (petite typographie, registre "détails disponibles sur demande")**
> Critères pris en compte : structure de population (PCA, ADMIXTURE), parenté, homozygotie (ROH/IBD), diversité, répartition géographique.

### Texte oral (complet)

« La méthode complète est disponible en détail si vous le souhaitez — elle est d'ailleurs publiée. Mais le principe tient en une phrase : nous ne voulons pas consommer un budget de séquençage sur des génomes redondants quand l'objectif est de construire une référence populationnelle.

Un tirage aléatoire de 350 personnes dans une cohorte de 2 500 aurait de bonnes chances de sur-représenter les profils les plus fréquents et de sous-représenter les profils rares — exactement le problème que nous cherchons à corriger, reproduit à notre propre échelle. La sélection raisonnée, à l'inverse, vise une couverture maximale de la diversité observée, en tenant compte de la structure de population, de la parenté entre participants, et de la géographie. »

### Références mobilisées
Méthodologie de sélection du projet (documents `template/` : justification des choix, protocole de validation) — disponible en annexe A pour le niveau de détail technique complet.

### Concept visuel précis
- Deux schémas côte à côte, même style que les autres nuages conceptuels du diaporama (cohérence avec slide 5) :
  - à gauche, un nuage de points avec plusieurs points sélectionnés (en Flamboyant) regroupés dans une même zone dense ;
  - à droite, le même nuage avec des points sélectionnés bien répartis sur toute l'étendue du nuage.
- Pas de jargon visible à l'écran (PCA, ADMIXTURE, ROH, IBD restent en petite légende technique, non commentés à l'oral sauf question).
- Cette slide doit se lire quasi sans texte — l'opposition visuelle entre les deux nuages doit suffire à faire comprendre le principe avant même la phrase orale.

### Éléments interactifs
Aucun.

### Transition
> « Cette ressource n'a de valeur pour l'ARS que si elle répond à des priorités sanitaires concrètes. »

## SLIDE 12 — ALIGNEMENT AVEC L'ARS (matrice priorités) 🟡

### Texte écran

**Titre**
> Une ressource à l'intersection de plusieurs priorités sanitaires

**Matrice (tableau 2 colonnes)**

| Priorité ARS | Apport potentiel de Génome Réunion |
|---|---|
| Équité en santé | Réduire un angle mort de représentation |
| Diagnostic | Contextualiser certains variants |
| Maladies rares | Soutenir l'interprétation et les parcours |
| Médicament | Documenter les profils pharmacogénétiques |
| Prévention | Identifier des risques évitables |
| Données | Créer une ressource gouvernée et sécurisée |
| Innovation | Transformer une connaissance locale en usage |

**Message clé**
> L'intérêt du projet pour l'ARS se situe à l'intersection de l'équité, du diagnostic, du médicament, des données et de la prévention.

### Texte oral (complet)

« Cette matrice résume, en une seule slide, pourquoi ce projet relève selon nous du champ de l'ARS et pas seulement du champ de la recherche.

Je ne vais pas commenter chaque ligne — le tableau reste sous vos yeux — mais je veux insister sur un point : ce ne sont pas sept bénéfices indépendants. C'est une même ressource qui, selon l'angle sous lequel on la regarde, éclaire l'équité, le diagnostic, les maladies rares, le médicament, la prévention, la gouvernance des données et l'innovation. C'est cette transversalité qui, à notre sens, justifie que l'ARS s'y intéresse au-delà d'un simple soutien scientifique. »

### Références mobilisées
Aucune nouvelle — synthèse volontaire de tout l'Acte 2 sous une forme actionnable pour l'auditoire ARS.

### Concept visuel précis
- Tableau à deux colonnes, ligne par ligne, avec une puce de couleur discrète (dégradé Lagon→Flamboyant) en début de ligne plutôt qu'un tableau à bordures lourdes — évite l'effet "tableur administratif".
- Le message clé en bas de slide, dans un bandeau distinct, reprend les mots-clés du tableau en gras pour créer un effet de rappel visuel immédiat.
- C'est la seule slide de l'Acte 2 avec un fond légèrement différent (Sable plus soutenu) pour marquer qu'on referme ce chapitre et qu'on bascule vers les démonstrateurs concrets.

### Éléments interactifs
Aucun.

### Transition
> « Le premier usage concret est probablement celui qui est déjà le plus proche de notre pratique quotidienne : l'interprétation diagnostique. »

## SLIDE 13 — DÉMONSTRATEUR 1 : DIAGNOSTIC — LE PROBLÈME 🟡

### Texte écran

**Titre**
> Diagnostic : ce variant est-il réellement rare ?

**Question centrale (grande typographie, seule sur l'écran ou presque)**
> Ce variant est-il réellement rare, ou est-il simplement mal représenté dans les bases disponibles ?

**Sous la question, une situation clinique en une phrase**
> Un généticien retrouve chez un patient un variant absent — ou très rare — des bases de données de contrôle disponibles.

### Texte oral (complet)

« Je veux partir d'une situation que tout généticien clinique connaît. Vous retrouvez chez un patient un variant qui apparaît absent, ou extrêmement rare, dans les bases de contrôle que vous consultez pour l'interprétation.

Deux explications sont possibles, et elles ne mènent pas à la même conclusion clinique. Soit ce variant est effectivement rare dans la population générale — ce qui est une information en soi. Soit il n'est pas rare, mais la population qui le porte le plus est simplement sous-représentée dans les bases que vous consultez — et dans ce cas, l'apparente rareté ne reflète pas la biologie, elle reflète un manque de données.

C'est exactement le problème documenté par Manrai et ses collègues dans le New England Journal of Medicine : des variants ont été surinterprétés comme pathogènes parce que les populations de contrôle disponibles à l'époque ne représentaient pas suffisamment certaines ascendances. »

### Références mobilisées
- Manrai et al., *New England Journal of Medicine* — erreurs d'interprétation liées à une représentation insuffisante de certaines populations de contrôle.

### Concept visuel précis
- Slide volontairement épurée : la question centrale occupe le centre de l'écran, grande typographie, seule vraie "image" de la slide est typographique.
- En dessous, une icône très simple évoquant un dossier/variant (un petit rectangle avec une marque, pas d'illustration ADN) associée à la phrase de situation clinique.
- Fond Lagon profond (rupture avec le fond Sable des slides précédentes) pour signaler l'entrée dans le premier démonstrateur, cohérent avec le fond de la slide 1.

### Éléments interactifs
Aucun — c'est une slide de tension, à laisser en silence quelques secondes à l'oral avant d'enchaîner.

### Transition
> « Une donnée supplémentaire peut aider à répondre à cette question. »

---

## SLIDE 14 — DÉMONSTRATEUR 1 : DIAGNOSTIC — L'APPORT 🟡

### Texte écran

**Titre**
> Une donnée de plus pour interpréter, jamais pour décider seule

**Schéma (voir concept visuel)**
> Variant trouvé chez le patient → Référentiels internationaux + fréquence réunionnaise → Information supplémentaire pour l'interprétation

**Message clé**
> Génome Réunion ne pose pas le diagnostic. Il apporte une donnée supplémentaire susceptible de réduire certaines incertitudes.

### Texte oral (complet)

« Voici ce que Génome Réunion peut apporter, très concrètement, à la situation que je viens de décrire : une fréquence populationnelle locale, qui vient s'ajouter — jamais se substituer — aux référentiels internationaux déjà consultés.

Je veux être précis sur les limites. Une fréquence locale ne remplace aucun des autres critères d'interprétation : pas la ségrégation familiale, pas les prédictions fonctionnelles, pas les données cliniques. Mais elle peut empêcher qu'un variant paraisse exceptionnel uniquement parce que la population qui le porte le plus est mal représentée ailleurs.

Nous ne prétendons pas que cela résoudra tous les variants de signification incertaine. Nous disons que cela peut contribuer, dans certains cas, à mieux les instruire. »

### Références mobilisées
- Reprend Manrai et al. (slide 13) comme justification du mécanisme.
- Base de fréquences locales Génome Réunion (issue du pipeline présenté slide 10).

### Concept visuel précis
- Schéma horizontal à 3 étapes, dans le même langage graphique que le pipeline de la slide 10, pour créer une continuité visuelle explicite entre "ce que le projet construit" et "ce que ça sert à faire".
- Le bloc "fréquence réunionnaise" en Flamboyant, les autres blocs en Lagon/Récif — cohérent avec le code couleur "apport local" déjà établi.
- Le message clé en bas, avec la deuxième phrase ("il apporte une donnée...") légèrement plus petite que la première, pour marquer une hiérarchie : l'affirmation de prudence prime sur la promesse.

### Éléments interactifs
Aucun.

### Transition
> « Le même problème de représentation se retrouve dans un autre domaine déjà utilisé en médecine : la pharmacogénétique. »

## SLIDE 15 — DÉMONSTRATEUR 2 : PHARMACOGÉNÉTIQUE — PRINCIPE ⬜ (à faire)

## SLIDE 16 — PRIORISER LES RISQUES MÉDICAMENTEUX ⬜ (à faire)

## SLIDE 17 — TRAJECTOIRE PHARMACOGÉNOMIQUE ⬜ (à faire)

## SLIDE 18 — ÉTHIQUE, DONNÉES, CONFIANCE ⬜ (à faire)

## SLIDE 19 — RÉPARTITION DES RÔLES (CHU / Région / État / ARS) ⬜ (à faire)

## SLIDE 20 — CONCLUSION / DEMANDE ARS ⬜ (à faire)
Note : demande finale centrée sur l'accompagnement d'un axe pharmacogénétique/prévention avec l'OMEDIT
(choix validé le 2026-09-03), en s'appuyant si utile sur la reconnaissance de l'intérêt sanitaire comme socle.

## ANNEXES A, C, D ⬜ (à faire)

---

## Personas (support de préparation Q&A, pas nécessairement des slides)

⬜ À formaliser après le corps du diaporama : garant-partenaire de l'équité sanitaire (principal) +
direction générale / offre de soins / santé publique / numérique / pharmacologie.
