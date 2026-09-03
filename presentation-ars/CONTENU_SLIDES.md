# Génome Réunion — Contenu détaillé du diaporama ARS
## Document de travail slide par slide (validation avant passage au HTML/CSS/JS)

Base : plan narratif ARS (sept. 2026) + synthèse stratégique/personas (sept. 2026).
Architecture validée le 2026-09-03 : **20 slides principales** (au lieu de 15), pour un rythme
plus clair sur ~25-30 minutes, + 4 annexes inchangées.

Statut de chaque slide : 🟡 brouillon proposé · 🟢 validé · 🔴 à revoir · ⬜ à faire

**2026-09-03 — Passage au code :** les 20 slides de contenu ci-dessous ont été implémentées en
HTML/CSS/JS dans `presentation-ars/index.html`, sur le modèle visuel du diaporama DRCI
(`css/main.css` partagé, composants pipeline/callout/formula/toc-row réutilisés) et avec la
vraie PCA pilote (`js/pca-data.js`, mêmes données que le diaporama DRCI). Les statuts 🟡
ci-dessous restent la trace du contenu validé ; le rendu visuel définitif vit désormais dans
le code, pas ici.

**2026-09-03 — Amélioration visuelle :** les slides 3, 4, 5, 7, 9, 12 et 17 sont passées de
schémas plats (boîtes CSS + texte) à de vrais diagrammes SVG dessinés (entonnoir, convergence
de flux, couches concentriques, timeline), sur le modèle des figures du document de synthèse
scientifique, en gardant la palette de marque.

**2026-09-03 — Slides de transition :** ajout, comme sur le diaporama Région, d'une slide de
transition (badge numéroté + séparateur vertical + titre) à l'entrée de chacun des 4 actes.
Le diaporama compte donc désormais **24 slides dans le code** (20 slides de contenu + 4
transitions), même si la numérotation ci-dessous reste celle du contenu (1-20) pour ne pas
perturber le suivi de validation. Correspondance : les transitions sont codées en positions
03, 09, 15 et 21 du fichier HTML ; chaque slide de contenu numérotée N ci-dessous est décalée
de +1 (actes 2-4) par rapport à sa position dans le code au-delà de sa propre transition.
Restent à faire : les 3 annexes (A, C, D) et un mode présentateur éventuel.

---

## Architecture

Numérotation ci-dessous = contenu (1-20, cette section). Position réelle dans le code
(1-24, avec les 4 transitions) entre parenthèses.

### Acte 1 — Comprendre le problème (contenu 1-7 → code 01-02, 04-08)
1. Ouverture *(code 01)*
2. Sommaire / feuille de route *(code 02)*
- *Transition « Partie 1 » (code 03)*
3. Le problème global (référentiels inégalement représentatifs) *(code 04)*
4. Pourquoi La Réunion — histoire démographique *(code 05)*
5. Pourquoi La Réunion — diversité comme continuum *(code 06)*
6. La preuve locale (PCA pilote) *(code 07)*
7. Le lissage involontaire (égalité ≠ équité de pertinence) *(code 08)*

### Acte 2 — Comprendre la réponse Génome Réunion (contenu 8-12 → code 10-14)
- *Transition « Partie 2 » (code 09)*
8. Positionnement : compléter, pas remplacer *(code 10)*
9. Écosystème génomique — qui fait quoi *(code 11)*
10. Ce que le projet construit (2 500 → 350 génomes) *(code 12)*
11. Robustesse de la sélection méthodologique *(code 13)*
12. Alignement avec le PRS 2023-2033 (matrice ancrée sur 4 priorités numérotées réelles) *(code 14)*

### Acte 3 — Comprendre les bénéfices sanitaires (contenu 13-17 → code 16-20)
- *Transition « Partie 3 » (code 15)*
13. Démonstrateur 1 : diagnostic — le problème *(code 16)*
14. Démonstrateur 1 : diagnostic — l'apport *(code 17)*
15. Démonstrateur 2 : pharmacogénétique — principe *(code 18)*
16. Prioriser les risques médicamenteux (formule de priorisation) *(code 19)*
17. Trajectoire vers une plateforme régionale de sécurisation thérapeutique *(code 20)*

### Acte 4 — Rassurer et engager l'ARS (contenu 18-20 → code 22-24)
- *Transition « Partie 4 » (code 21)*
18. Éthique, données et gouvernance *(code 22)*
19. Répartition des rôles (CHU / Région / État / ARS) *(code 23)*
20. Conclusion et demande institutionnelle à l'ARS *(code 24)*

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

## SLIDE 4 — POURQUOI LA RÉUNION : HISTOIRE DÉMOGRAPHIQUE 🟢 (révisée 2026-09-03)

**2026-09-03 — Révision (v2, sur demande explicite) :** après un premier passage en frise
chronologique (1663/1848/XXe/Aujourd'hui, abandonné), reprend finalement le graphique de
convergence en double hélice ADN de `presentation-region/index.html` (slide "Une diversité à
représenter, pas une catégorie à définir") tel quel — mêmes tracés SVG, même palette (déjà
Lagon/Récif/Flamboyant, aucune adaptation de couleur nécessaire) — avec les 5 branches
réétiquetées pour représenter les apports démographiques historiques (Europe, Afrique &
Madagascar, Inde du Sud, Chine, océan Indien) plutôt que des flux anonymes. Titre restauré à sa
version originale. Les deux citations d'historiens de la v1 sont conservées dans un premier temps.

**2026-09-03 — Révision (v3, mise en page) :** la citation de Sudel Fuma est retirée (moins
directement liée au sujet de la slide que celle de Prosper Ève, et sa recherche d'une alternative
vérifiée s'est heurtée au blocage réseau de cet environnement pour les sources disponibles —
temoignages.re, reunionnaisdumonde.com — donc pas de remplacement inventé). La carte de gauche est
réduite (elle ne force plus la hauteur de colonne) et la citation de Prosper Ève, agrandie
(`.history-quote--lg`), est repositionnée juste en dessous, dans la même colonne. L'espace ainsi
libéré à droite permet d'agrandir le graphique de convergence vers le bas (`viewBox` de la double
hélice élargi de 300 à 380 de hauteur, contenu recentré via un `<g transform="translate(0,40)">`).

**2026-09-03 — Révision (v4, carte + frise) :** la carte de gauche passe en fond bleu marine
(`.card--navy-strong`) avec texte blanc, pour un contraste plus marqué avec le reste de la slide.
Une frise chronologique compacte (4 jalons) est ajoutée sous la citation de Prosper Ève, dans
l'espace disponible de la colonne gauche, sans remplacer le graphique de convergence qui reste
l'élément visuel principal à droite.

**2026-09-03 — Révision (v5, frise — sur demande explicite avec maquette) :** la frise est
redessinée pour reprendre exactement le style demandé — nœuds ronds colorés plus grands avec
l'année/période en blanc à l'intérieur, titre thématique en gras coloré assorti, sous-titre gris
listant les apports (classes `.frise`/`.frise-node`/`.frise-title`/`.frise-sub`, qui remplacent
`.mini-timeline`). Les 4 jalons sont recadrés en grandes vagues de peuplement plutôt qu'en dates
isolées : 1663 « Colonisation / Esclavage » (Europe · Afrique · Madagascar), 1848 « Engagisme »
(Inde du Sud · Chine · Afrique), XXe s. « Migrations » (Mayotte · Comores · Madagascar), Auj.
« Population » (Admixture unique).

### Texte écran

**Titre**
> Une population façonnée par des apports récents et multiples

**Colonne gauche**
> La population réunionnaise résulte d'une histoire démographique récente qui a mêlé plusieurs origines sur un espace insulaire clos.
>
> Message clé : Admixture récente + insularité + effets fondateurs + dérive + endogamie locale

Sous cette carte, la citation d'historien (agrandie) :
> « La Réunion est un laboratoire d'histoire humaine, un monde recomposé où se mêlent les fragments d'identités transplantées. » — Prosper Ève, *Esclavage, métissage, liberté*, 2003

**Colonne droite — graphique "Une histoire de convergences"**
5 branches colorées (Europe, Afrique · Madagascar, Inde du Sud, Chine, Océan Indien) convergent
vers un point central puis se prolongent en double hélice d'ADN. Le graphique occupe toute la
hauteur disponible de la colonne.
> Légende : Des origines et des histoires diverses, mêlées au fil du peuplement de l'île, qui convergent vers un même patrimoine génétique à mieux connaître.

### Texte oral (complet)

« La population réunionnaise résulte d'une histoire démographique récente — à l'échelle génétique, quelques siècles seulement — qui a mêlé des apports européens, africains et malgaches, sud-asiatiques, chinois, et plus largement de l'océan Indien.

Cette histoire s'est déroulée dans un contexte particulier : une île, donc une forme d'insularité ; des vagues de peuplement limitées dans le temps, donc des effets fondateurs ; et, pour certaines composantes ou certains territoires, une endogamie locale qui a renforcé certains profils génétiques.

Comme le résume l'historien Prosper Ève, La Réunion est un laboratoire d'histoire humaine — un monde recomposé où se mêlent des fragments d'identités transplantées. C'est exactement ce que montre ce graphique : des origines diverses qui convergent, au fil du temps, vers un même patrimoine génétique — celui que Génome Réunion se propose de mieux documenter. »

### Références mobilisées
- Prosper Ève, *Esclavage, métissage, liberté : La Réunion, 1794-1848*, 2003.
- Sudel Fuma, *La révolte des oreilles coupées*, 2011 — citation à revoir (voir note ci-dessus).
- Graphique et structure de mise en page repris de `presentation-region/index.html`.

### Concept visuel précis
- Graphique SVG de convergence (5 traits colorés de largeur variable qui se rejoignent en un point puis se prolongent en double hélice d'ADN twistée), repris à l'identique de la présentation Région — seules les 5 étiquettes de branche sont nouvelles (positionnées en marge gauche du SVG, colorées comme leur trait).
- Mise en page à deux colonnes : à gauche une carte avec le message clé, à droite le graphique + légende — patron identique à la présentation Région.
- Sous les deux colonnes, les deux citations d'historiens en pleine largeur.

### Éléments interactifs
Aucun.

### Transition
> « Cette histoire ne produit pas des groupes séparés : elle produit un continuum. »

## SLIDE 5 — POURQUOI LA RÉUNION : DIVERSITÉ COMME CONTINUUM 🟡

**2026-09-03 — Révision (sur demande explicite) :** le dégradé SVG conceptuel (barre Lagon →
Récif → Flamboyant avec nuage de points), jugé n'apporter aucune information utile, est retiré.
La slide se recentre sur la phrase pivot et son rappel — la mention « la preuve réelle suit à la
slide suivante » est reportée dans le texte de rappel pour conserver la transition vers la
slide PCA.

### Texte écran

**Titre**
> Il n'existe pas un génome réunionnais

**Phrase pivot (en exergue, la plus grande typographie de la slide)**
> Il existe une diversité réunionnaise que la médecine génomique doit apprendre à mieux représenter.

**Sous la phrase, un rappel bref et net**
> Nous ne cherchons pas à définir une identité génétique réunionnaise. Nous cherchons à représenter un continuum que les catégories continentales classiques décrivent mal. La preuve réelle suit à la slide suivante.

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

## SLIDE 9 — ÉCOSYSTÈME GÉNOMIQUE (qui fait quoi) 🟢 (révisée 2026-09-03)

**2026-09-03 — Révision (audit design/contenu) :** en passant du tableau initial à des couches
concentriques (voir historique des améliorations visuelles), cette slide était devenue redondante
avec la slide 8 (positionnement) — même message, même liste d'institutions, juste un habillage
différent. Corrigé en réintroduisant la fonction de chaque ressource sous chaque étiquette : la
slide 9 redevient une vraie fiche mémo factuelle, la slide 8 reste la démonstration conceptuelle
de la complémentarité.

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

## SLIDE 12 — ALIGNEMENT AVEC LE PRS (matrice de priorités) 🟢 (révisée 2026-09-03, ancrée sur le PRS réel)

**2026-09-03 — Révision :** la première version de cette slide mappait Génome Réunion sur des
catégories génériques ("Équité en santé", "Diagnostic"...) sans les relier aux vraies priorités
de l'ARS. Le porteur a fourni la plaquette officielle du **PRS La Réunion 2023-2033** (COS,
15 priorités à 10 ans). Cette slide est reconstruite pour citer explicitement les priorités
numérotées correspondantes — plus crédible et plus vérifiable par l'auditoire, qui a écrit ce
document lui-même.

### Les 15 priorités du COS 2023-2033 (pour référence)
1. La démocratie en santé — 2. La prévention dans le quotidien des Réunionnais — 3. Un
environnement favorable à la santé — 4. Des parcours de santé coordonnés et accessibles —
5. La réduction des inégalités sociales et territoriales de santé — 6. La santé des femmes —
7. La santé de la mère et de l'enfant — 8. La santé nutritionnelle — 9. La santé mentale —
10. Les conduites addictives — 11. La qualité de vie et la santé des personnes vivant avec un
handicap — 12. La qualité de vie et la santé des personnes âgées — 13. Les compétences et
ressources humaines en santé — 14. Le numérique au service de la santé — 15. La veille et la
surveillance sanitaire et la réponse aux situations exceptionnelles.

Génome Réunion ne prétend contribuer qu'aux priorités pour lesquelles l'apport est direct et
vérifiable — pas aux 15 par principe. Point notable : la **priorité 4** cite déjà littéralement,
parmi ses actions, « Améliorer le diagnostic et la prise en charge des maladies rares » — c'est
une action existante du PRS que Génome Réunion vient concrètement outiller, pas une nouvelle
demande.

**2026-09-03 — Audit design/contenu/PRS :** en recroisant les 4 priorités avec les actions
*réellement listées* dans la plaquette (pas seulement leur intitulé), un seul lien est un match
vérifié mot pour mot : la **priorité 4** (maladies rares). Les trois autres sont des
rapprochements thématiques défendables mais non vérifiés au niveau de l'action :
- **Priorité 5** (inégalités) : ses actions réelles parlent de pauvreté, désertification médicale,
  accès géographique aux soins — pas de représentativité génomique. Le lien tient sur le mot
  « inégalité », pas sur le contenu de la priorité.
- **Priorité 2** (prévention) : ses actions réelles sont des dispositifs de terrain (consultations
  aux âges clés, CLS, bus santé) — pas de pharmacogénétique.
- **Priorité 14** (numérique) : ses actions réelles sont cybersécurité, téléconsultation,
  télé-expertise, modules e-santé en formation — rien sur la gouvernance de données génomiques.
  C'est le lien le plus faible des quatre.

Présenter les 4 cartes avec la même autorité visuelle aurait laissé croire à un niveau de preuve
égal, face à un auditoire qui connaît son propre document par cœur. Corrigé : seule la priorité 4
porte le badge plein avec ✓ ; les 3 autres portent un badge en contour avec la formule « dans
l'esprit de cette priorité », et une note de bas de slide rend la distinction explicite à l'écran,
pas seulement à l'oral.

### Texte écran

**Titre**
> Une ressource ancrée dans le PRS 2023-2033, pas à côté

**Grille de 4 cartes — un seul badge plein (✓, lien vérifié), trois badges en contour (lien thématique)**

| Priorité PRS | Intitulé officiel | Apport de Génome Réunion | Niveau de preuve |
|---|---|---|---|
| 4 | Parcours de santé coordonnés et accessibles | Soutenir le diagnostic et la prise en charge des maladies rares — une action déjà inscrite au PRS | ✓ Vérifié (action citée mot pour mot) |
| 5 | Réduction des inégalités sociales et territoriales de santé | Dans l'esprit de cette priorité : réduire un angle mort de représentation dans les outils de médecine génomique | Rapprochement thématique |
| 2 | Prévention dans le quotidien des Réunionnais | Dans l'esprit de cette priorité : documenter les profils pharmacogénétiques pour prévenir des risques médicamenteux évitables | Rapprochement thématique |
| 14 | Le numérique au service de la santé | Dans l'esprit de cette priorité : constituer une ressource de données de santé gouvernée et sécurisée | Rapprochement thématique (le plus faible) |

**Note de bas de slide (affichée à l'écran)**
> ✓ Action déjà écrite au PRS · les 3 autres priorités sont des rapprochements thématiques, pas des actions vérifiées mot pour mot.

**Message clé**
> Génome Réunion ne demande pas d'ajouter une priorité au PRS : il apporte une donnée locale à des priorités qui y figurent déjà.

### Texte oral (complet)

« Cette slide n'invente rien : elle reprend des priorités que vous avez vous-mêmes fixées dans le PRS 2023-2033, et montre où Génome Réunion vient les outiller — mais je veux être précis sur le niveau de preuve de chacune, pas les présenter comme équivalentes.

La priorité 4 est la plus directe : parmi ses actions figure déjà "améliorer le diagnostic et la prise en charge des maladies rares". Ce n'est pas nous qui proposons cette priorité — elle existe déjà dans votre feuille de route, mot pour mot. Ce que nous proposons, c'est une ressource locale pour mieux la servir.

Les trois autres cartes sont des rapprochements thématiques, pas des correspondances d'action vérifiées : la priorité 5 sur le mot "inégalité", la priorité 2 sur l'esprit de prévention que porte notre trajectoire pharmacogénétique, la priorité 14 sur l'exigence de gouvernance des données. Je préfère vous le dire ainsi plutôt que de laisser croire à quatre correspondances de même solidité.

Nous ne prétendons pas contribuer aux quinze priorités du PRS. Nous préférons documenter précisément une contribution vérifiée et trois convergences d'esprit, plutôt que de revendiquer une pertinence générale non vérifiable. »

### Références mobilisées
Plaquette de présentation du PRS La Réunion 2023-2033 (ARS La Réunion, Cadre d'Orientations
Stratégiques — 15 priorités à 10 ans), fournie par le porteur de projet.

### Concept visuel précis
- Grille de 4 cartes (au lieu du tableau à 7 lignes de la version précédente), chacune avec un
  badge coloré "Priorité N du PRS" en haut, l'intitulé officiel de la priorité, puis l'apport de
  Génome Réunion — plus crédible qu'une simple liste de mots-clés génériques.
- Un seul badge/carte non chiffré resterait acceptable pour une contribution transversale, mais
  volontairement évité ici : les 4 cartes retenues sont toutes rattachées à un numéro de priorité
  vérifiable, pour ne jamais donner l'impression d'un survol non maîtrisé du document.

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

## SLIDE 15 — DÉMONSTRATEUR 2 : PHARMACOGÉNÉTIQUE — PRINCIPE 🟡

### Texte écran

**Titre**
> Médicament : la diversité génétique peut modifier efficacité, toxicité et posologie

**Schéma causal**
> Variation génétique → enzyme / transporteur / cible → exposition au médicament → efficacité / toxicité / dose

**Exemples (registre discret, en légende, pas en titre)**
> CYP2C19 · CYP2D6 · CYP2C9 · TPMT · NUDT15

**Message clé**
> Génome Réunion ne remplace pas le test pharmacogénétique du patient. Il permet de mieux connaître le paysage pharmacogénétique de la population dans laquelle ce patient est pris en charge.

### Texte oral (complet)

« Deuxième démonstrateur : la pharmacogénétique. C'est un domaine où la génétique influence directement une décision thérapeutique, et où des recommandations existent déjà pour un certain nombre de couples gène-médicament — via la HAS, le CPIC, le DPWG, ou le RNPGx en France.

Le principe est simple : une variation génétique, dans un gène codant une enzyme, un transporteur ou une cible thérapeutique, peut modifier l'exposition réelle d'un patient à un médicament, et donc son efficacité, sa toxicité, ou la dose optimale à utiliser.

Notre question n'est pas de contester ces recommandations, qui reposent sur des preuves solides. Notre question est différente : quelle est la fréquence réelle, à La Réunion, des profils génétiques concernés par ces recommandations ? Génome Réunion ne remplace jamais le test individuel du patient — il permet de mieux connaître le paysage pharmacogénétique de la population dans laquelle ce patient est pris en charge. »

### Références mobilisées
- Recommandations HAS / CPIC / DPWG / RNPGx pour les couples gène-médicament cités.
- Gènes structurants : CYP2C19, CYP2D6, CYP2C9, TPMT, NUDT15.

### Concept visuel précis
- Schéma causal horizontal à 4 étapes, même grammaire graphique que les schémas précédents (cohérence visuelle sur tout le diaporama).
- Les 5 gènes cités en petite ligne de légende sous le schéma, taille de texte volontairement réduite — ce sont des exemples, pas le cœur du message, pour éviter que la slide ne devienne une liste de gènes à mémoriser.
- Le message clé occupe la même position et la même hiérarchie visuelle que celui du diagnostic (slide 14) — effet miroir assumé entre les deux démonstrateurs pour que l'auditoire reconnaisse la structure.

### Éléments interactifs
Aucun.

### Transition
> « Cette connaissance devient réellement sanitaire lorsqu'on la croise avec les médicaments utilisés et la gravité des événements évitables. »

---

## SLIDE 16 — PRIORISER LES RISQUES MÉDICAMENTEUX 🟡

### Texte écran

**Titre**
> De la génomique à une stratégie de prévention ciblée

**Formule visuelle**
> Fréquence du profil génétique × Exposition locale au médicament × Niveau de preuve × Gravité du risque = Priorité régionale

**Message clé**
> L'objectif n'est pas de tester tout le monde pour tout. L'objectif est d'identifier les quelques situations où la pharmacogénétique pourrait avoir le plus fort intérêt local.

**Référence démonstratrice (encart discret)**
> PREPARE / U-PGx : une stratégie pharmacogénétique préemptive peut réduire certains effets indésirables — la transférabilité à une population très admixée reste à documenter localement.

### Texte oral (complet)

« Le nombre de couples gène-médicament potentiellement intéressants est considérable. Une stratégie utile pour l'ARS doit faire l'inverse d'une approche exhaustive : partir du niveau de preuve clinique, du médicament réellement prescrit à La Réunion, de la fréquence locale du profil génétique concerné, et de la gravité du risque, pour ne retenir que les situations réellement prioritaires.

L'étude européenne PREPARE, menée dans le cadre du consortium U-PGx, a démontré qu'une stratégie pharmacogénétique préemptive — c'est-à-dire connue avant la prescription plutôt que découverte après un incident — pouvait réduire certains effets indésirables. C'est un démonstrateur solide de l'intérêt clinique de l'approche.

Mais cette étude n'a pas été conduite sur une population aussi admixée que celle de La Réunion. La question de la transférabilité de ces résultats reste donc, à ce stade, une question à documenter — pas une réponse déjà acquise. »

### Références mobilisées
- PREPARE / U-PGx (démonstrateur européen de pharmacogénétique préemptive).
- Niveaux de preuve HAS / CPIC / DPWG / RNPGx (repris de la slide 15) comme composante de la formule de priorisation.

### Concept visuel précis
- La formule visuelle est le point focal de la slide : 4 termes multipliés, présentés comme des pastilles reliées par des symboles "×", avec le résultat "Priorité régionale" isolé à droite après un "=" — esthétique proche d'une équation lisible, pas d'une formule mathématique intimidante.
- Chaque terme de la formule dans une pastille de taille identique (pour ne pas suggérer qu'un facteur pèse plus qu'un autre visuellement — la pondération réelle est une question méthodologique, pas un message de cette slide).
- L'encart PREPARE en bas, plus petit, cadre distinct, avec la nuance de transférabilité clairement lisible et non reléguée à l'oral seul.

### Éléments interactifs
Aucun.

### Transition
> « À terme, cette logique peut déboucher sur un outil régional de sécurisation thérapeutique. »

## SLIDE 17 — TRAJECTOIRE PHARMACOGÉNOMIQUE 🟡

### Texte écran

**Titre**
> Vers une plateforme régionale de sécurisation thérapeutique

**Trajectoire (schéma vertical, voir concept visuel)**
> Génome Réunion → fréquences pharmacogénétiques locales → priorisation gène-médicament → études cliniques ciblées → validation locale → aide à la décision clinique → prévention

**Cas d'usage futur (encart séparé, présenté explicitement comme prospectif)**
> Lors d'une prescription : médicament concerné → information pharmacogénétique disponible ? → alerte contextualisée → recommandation validée → décision du médecin ou du pharmacien

**Phrase de sécurité (encadrée, ton institutionnel net)**
> La plateforme fournirait une aide à la décision ; la décision thérapeutique resterait médicale.

### Texte oral (complet)

« Je veux montrer où cette logique peut mener, à long terme, sans la présenter comme déjà acquise — c'est une trajectoire, pas une annonce.

À partir des fréquences pharmacogénétiques locales et de la priorisation que je viens de décrire, l'étape suivante serait des études cliniques ciblées, menées avec le CHU, les généticiens, les pharmacologues et l'OMEDIT, pour valider localement l'intérêt de certains couples gène-médicament. Ce n'est qu'après cette validation qu'on pourrait envisager une intégration dans une aide à la décision clinique — par exemple une alerte contextualisée au moment de la prescription.

Je le dis clairement, parce que c'est un point sur lequel nous ne voulons laisser aucune ambiguïté : nous ne proposons pas aujourd'hui un système qui adapterait automatiquement une dose. Nous proposons une trajectoire : connaissance, puis validation, puis seulement, éventuellement, intégration dans une aide à la décision. La décision thérapeutique resterait, à chaque étape, une décision médicale. »

### Références mobilisées
Reprend PREPARE / U-PGx (slide 16) comme précédent de plateforme de pharmacogénétique préemptive à l'échelle d'un système de santé.

### Concept visuel précis
- Trajectoire verticale en 7 étapes, dégradé de Lagon (début, connaissance) vers Flamboyant (fin, prévention) — cohérent avec le code couleur "dérive progressive" déjà utilisé slide 7, mais ici en registre positif (construction) plutôt qu'en registre d'alerte.
- Marquer visuellement une rupture nette entre les 3 premières étapes (déjà engagées ou proches) et les 4 dernières (prospectives) — par exemple un trait plein pour les premières, pointillé pour les suivantes.
- L'encart "cas d'usage futur" clairement étiqueté comme un exemple illustratif prospectif (bordure pointillée, mention "à terme" visible), jamais présenté comme un écran de logiciel existant.
- La phrase de sécurité dans un encadré à part, fond distinct, position basse de la slide — dernière chose lue, pour qu'elle reste la note de sortie de cette slide.

### Éléments interactifs
Aucun.

### Transition
> « Une telle ressource ne peut cependant être légitime que si la gouvernance des données est aussi robuste que la science. »

## SLIDE 18 — ÉTHIQUE, DONNÉES, CONFIANCE 🟡

### Texte écran

**Titre**
> Une ressource sensible qui exige une gouvernance explicite

**5 blocs (grille, voir concept visuel)**
- **Participants** — consentement, information
- **Données** — pseudonymisation, sécurité
- **Accès** — gouvernance, droits d'usage
- **Usage clinique** — distinction recherche / diagnostic
- **Population** — non-stigmatisation, restitution

**Phrase pivot (en exergue)**
> Ascendance génétique, identité culturelle et origine sociale ne sont pas des notions interchangeables.

### Texte oral (complet)

« Nous travaillons sur une donnée extrêmement informative, et donc sensible. La question qui se pose n'est donc pas seulement ce que nous pouvons techniquement faire avec elle, mais dans quel cadre nous décidons collectivement de le faire.

Cinq dimensions structurent ce cadre. Le consentement et l'information des participants, en amont. La pseudonymisation et la sécurité des données, sur le plan technique. La gouvernance de l'accès et des droits d'usage, sur le plan organisationnel. La distinction claire entre recherche et diagnostic, sur le plan clinique. Et, pour la population dans son ensemble, la question de la non-stigmatisation et de la restitution des résultats.

Je veux insister sur un point de vocabulaire, parce qu'il est central pour éviter tout malentendu : l'ascendance génétique, l'identité culturelle et l'origine sociale ne sont pas des notions interchangeables. Ce projet étudie la première. Il ne prétend rien dire des deux autres. »

### Références mobilisées
Principes de gouvernance internes au projet (cf. `template/` : documents de gouvernance et données) — cadre RGPD applicable, à préciser si la question est posée en Q&A plutôt qu'affiché à l'écran.

### Concept visuel précis
- Grille de 5 blocs de taille égale, disposés en ligne ou en arc léger, chaque bloc avec une icône minimaliste distincte (cadenas pour données, poignée de main pour consentement, etc.) — pas d'icônes ADN ni de symboles ethniques.
- La phrase pivot occupe une position centrale forte, seule sur sa propre bande visuelle sous la grille — c'est, avec la slide 5, l'autre "phrase-mémoire" du diaporama.
- Palette volontairement plus sobre que les slides de démonstrateurs (moins de Flamboyant, plus de Lagon/gris) pour installer un registre de sérieux institutionnel.

### Éléments interactifs
Aucun.

### Transition
> « C'est précisément à ce stade que le rôle de chaque acteur — CHU, Région, État, ARS — devient structurant. »

---

## SLIDE 19 — RÉPARTITION DES RÔLES (CHU / Région / État / ARS) 🟡

### Texte écran

**Titre**
> Une articulation claire entre quatre acteurs

**4 blocs (voir concept visuel)**
- **CHU** — expertise clinique, génétique, données, recherche
- **Région** — infrastructure, innovation, capacité territoriale
- **État et dispositifs nationaux** — séquençage, référentiels, cadre national
- **ARS** — lecture sanitaire, équité, prévention, articulation avec le système de soins

### Texte oral (complet)

« Avant de conclure, je veux être précis sur un point d'organisation, parce qu'il conditionne la crédibilité de tout ce qui précède : ce projet n'a pas besoin que l'ARS fasse le travail d'un autre acteur.

Le CHU porte l'expertise clinique, génétique et scientifique — c'est le porteur médical naturel du projet. La Région apporte l'infrastructure et une capacité d'investissement territorial. L'État et les dispositifs nationaux fournissent le cadre, le séquençage clinique et les référentiels de référence.

L'ARS a un rôle différent de ces trois-là, et c'est précisément celui qui nous intéresse ici : une lecture sanitaire du projet, une attention à l'équité, une articulation avec le Projet régional de santé, l'offre de soins et la prévention. Ce n'est pas un rôle de financeur parmi d'autres. C'est un rôle qu'aucun des trois autres acteurs ne peut occuper à sa place. »

### Références mobilisées
Articulation institutionnelle du projet — cohérente avec la présentation Région existante (`presentation-region/`), sans reprendre son angle recherche/innovation : ici, seul le rôle de chaque acteur est rappelé, du point de vue sanitaire.

### Concept visuel précis
- 4 blocs de largeur égale, disposés en ligne, sans hiérarchie visuelle entre eux (même taille, même poids typographique) — le message est la complémentarité, pas une préséance d'un acteur sur un autre.
- Le bloc ARS légèrement mis en avant (bordure Flamboyant, les 3 autres en Lagon/Récif neutres) puisque c'est l'acteur auquel s'adresse la présentation, sans que cela ne minimise visuellement les trois autres.
- Pas de logos institutionnels tiers (CHU, Région, État) sans autorisation préalable de les utiliser — à confirmer avant mise en forme finale ; à défaut, rester en texte seul.

### Éléments interactifs
Aucun.

### Transition
> « Ce que cette articulation rend possible, c'est la transformation d'une infrastructure scientifique en ressource sanitaire — et c'est précisément ce que nous venons vous proposer. »

## SLIDE 20 — CONCLUSION / DEMANDE ARS 🟡

### Texte écran

**Titre**
> Faire de Génome Réunion une ressource sanitaire, pas seulement scientifique

**Phrase finale (la plus grande typographie du diaporama après la slide 5)**
> Génome Réunion ne demande pas de créer une médecine spécifique à La Réunion. Il propose de produire la connaissance locale nécessaire pour que les progrès de la médecine génomique nationale bénéficient aux Réunionnais avec le même niveau de pertinence, de sécurité et d'équité.

**Demande institutionnelle (bloc distinct, en bas de slide — le seul appel à l'action du diaporama)**
> Ce que nous demandons aujourd'hui à l'ARS : accompagner, avec l'OMEDIT, le lancement d'un axe pharmacogénétique et prévention — première étape concrète et mesurable d'articulation entre Génome Réunion et une politique de santé régionale.
>
> Cette étape s'inscrit dans une reconnaissance plus large de l'intérêt sanitaire du projet, que nous souhaitons construire avec vous dans la durée.

### Texte oral (complet)

« Je termine sur ce que nous venons concrètement vous demander, parce qu'une adhésion intellectuelle ne suffit pas — elle doit pouvoir se traduire en une action.

Notre demande est volontairement resserrée sur un point précis : que l'ARS accompagne, avec l'OMEDIT, le lancement d'un axe pharmacogénétique et prévention. C'est le point d'entrée le plus concret et le plus mesurable de tout ce que j'ai présenté aujourd'hui — il s'appuie sur une méthodologie déjà solide, sur un précédent européen documenté avec PREPARE, et sur un partenaire naturel, l'OMEDIT, dont c'est directement le champ de compétence.

Nous ne venons pas demander de créer une médecine spécifique à La Réunion. Nous venons demander à produire la connaissance locale nécessaire pour que les progrès de la médecine génomique nationale bénéficient aux Réunionnais avec le même niveau de pertinence, de sécurité et d'équité. »

### Références mobilisées
Synthèse de l'ensemble du diaporama — dernière slide, pas de nouvelle preuve introduite.

### Concept visuel précis
- Fond Lagon profond, retour au visuel de la slide 1 — boucle narrative assumée, l'auditoire referme le cercle ouvert à l'ouverture.
- La phrase finale centrée, seule dans le tiers supérieur de l'écran.
- Le bloc "demande institutionnelle" clairement isolé visuellement (encadré net, fond Flamboyant très clair, bordure marquée) — c'est la seule slide du diaporama avec un encadré de cette intensité, pour qu'il soit immédiatement identifiable comme "la" chose à retenir et à discuter.
- Pas de logo de clôture générique type "Merci" surchargé — rester sur le contenu jusqu'à la dernière seconde, la formule de politesse orale suffit.

### Éléments interactifs
Aucun.

### Transition
Fin du corps principal — bascule orale vers les questions, avec accès possible aux annexes A, C, D selon les questions posées.

## ANNEXES A, C, D ⬜ (à faire)

---

## Personas (support de préparation Q&A, pas nécessairement des slides)

🟢 Validé — landing page unique `presentation-ars/personas.html` regroupant les 6 personas
fonctionnels : garant-partenaire de l'équité sanitaire (principal) + direction générale /
offre de soins / santé publique / numérique / pharmacologie.
