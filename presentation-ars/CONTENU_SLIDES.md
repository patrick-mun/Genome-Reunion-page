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

## SLIDE 2 — SOMMAIRE / FEUILLE DE ROUTE 🟡

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

## SLIDE 3 — LE PROBLÈME GLOBAL 🟡

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

## SLIDE 4 — POURQUOI LA RÉUNION : HISTOIRE DÉMOGRAPHIQUE ⬜ (à faire)

## SLIDE 5 — POURQUOI LA RÉUNION : DIVERSITÉ COMME CONTINUUM ⬜ (à faire)

## SLIDE 6 — LA PREUVE LOCALE (PCA) ⬜ (à faire)

## SLIDE 7 — LE LISSAGE INVOLONTAIRE ⬜ (à faire)

## SLIDE 8 — POSITIONNEMENT (compléter, pas remplacer) ⬜ (à faire)

## SLIDE 9 — ÉCOSYSTÈME GÉNOMIQUE (qui fait quoi) ⬜ (à faire)

## SLIDE 10 — CE QUE LE PROJET CONSTRUIT ⬜ (à faire)

## SLIDE 11 — ROBUSTESSE DE LA SÉLECTION ⬜ (à faire)

## SLIDE 12 — ALIGNEMENT AVEC L'ARS (matrice priorités) ⬜ (à faire)

## SLIDE 13 — DÉMONSTRATEUR 1 : DIAGNOSTIC — LE PROBLÈME ⬜ (à faire)

## SLIDE 14 — DÉMONSTRATEUR 1 : DIAGNOSTIC — L'APPORT ⬜ (à faire)

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
