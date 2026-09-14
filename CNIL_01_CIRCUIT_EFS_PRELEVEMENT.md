# Génome Réunion — Circuit EFS, prélèvement et CRB

**Document :** CNIL_01_CIRCUIT_EFS_PRELEVEMENT  
**Date :** 14 septembre 2026  
**Statut :** ✅ Phase 1 — circuit fonctionnel stabilisé  

---

## 1. Objet

Ce document décrit le circuit prévu pour l'obtention du matériel biologique de la cohorte principale Génome Réunion, depuis l'information du donneur à l'EFS jusqu'à la mise à disposition d'un aliquot d'ADN à l'équipe de recherche.

Il s'agit d'un document de cadrage factuel. Il ne préjuge pas de la qualification RIPH / non-RIPH ni de la méthodologie de référence CNIL applicable, qui relèvent de la Phase 2.

---

## 2. Circuit fonctionnel retenu

### Étape 1 — Information du donneur

Le projet Génome Réunion est présenté au donneur lors de l'entretien avec le médecin de l'EFS.

Le participant reçoit une explication du projet avant de donner son accord.

**Statut :** ✅ retenu.

### Étape 2 — Accord écrit

La participation au projet repose sur un **accord signé du participant**, recueilli après explication du projet.

**Statut :** ✅ principe retenu.  
**À traiter ultérieurement :** forme réglementaire exacte du document, contenu, archivage, articulation avec l'examen des caractéristiques génétiques et cadre RIPH retenu.

### Étape 3 — Origine du matériel biologique

Aucun tube sanguin supplémentaire n'est prévu spécifiquement pour Génome Réunion dans le circuit actuellement retenu.

Le matériel biologique utilisé provient d'un **reliquat de tube EDTA disponible à l'EFS**.

**Statut :** ✅ retenu.

### Étape 4 — Codage et table de correspondance

L'**EFS génère l'identifiant pseudonyme** utilisé pour le transfert du prélèvement.

L'**EFS conserve et gère la table de correspondance entre l'identité du participant et cet identifiant**.

Le CHU / CRB ne reçoit pas l'identité directe du participant dans ce circuit.

**Statut :** ✅ retenu.

### Étape 5 — Données transmises au CRB

L'EFS transmet au CRB :

- le **reliquat de tube EDTA identifié par son code pseudonyme** ;
- le **lieu / site de prélèvement EFS** ;
- éventuellement l'**âge**, uniquement si cette variable est finalement retenue comme nécessaire.

Aucune autre information personnelle n'est considérée comme nécessaire à ce stade.

> **Point de vigilance :** le lieu / site de prélèvement EFS ne doit pas être confondu avec le lieu de résidence ou la commune de résidence du participant. Il s'agit de deux variables distinctes.

**Statut :** ✅ données minimales définies, avec âge **à arbitrer en Phase 4 — minimisation**.

### Étape 6 — Transfert vers le CRB

Le reliquat pseudonymisé est transmis par l'EFS au **Centre de ressources biologiques (CRB) du CHU de La Réunion**.

**Statut :** ✅ destination retenue.  
Les modalités logistiques et conventionnelles du transfert seront formalisées dans les phases consacrées aux responsabilités, aux conventions et au CRB.

### Étape 7 — Enregistrement au CRB

À réception, le CRB enregistre le prélèvement dans son système de gestion et assure sa traçabilité interne à partir de l'identifiant pseudonyme transmis par l'EFS.

**Statut :** ✅ fonctionnement retenu.

### Étape 8 — Extraction de l'ADN

Le prélèvement est dirigé vers un poste d'extraction afin d'obtenir l'ADN nécessaire au projet.

**Statut :** ✅ fonctionnement retenu.

### Étape 9 — Conservation de l'ADN

Après extraction, le CRB conserve l'ADN en banque.

**Statut :** ✅ principe retenu.  
Les durées, volumes, règles de destruction et conséquences d'un retrait seront traités dans les phases dédiées.

### Étape 10 — Mise à disposition pour les analyses

Le CRB prépare un **aliquot d'ADN** destiné aux analyses réalisées par l'équipe de recherche Génome Réunion.

L'ADN de banque reste conservé au CRB ; l'équipe de recherche reçoit l'aliquot nécessaire aux analyses autorisées.

**Statut :** ✅ principe retenu.

---

## 3. Schéma fonctionnel

```text
Donneur EFS
   ↓
Entretien avec le médecin EFS
   ↓
Information sur Génome Réunion
   ↓
Accord écrit signé
   ↓
Don / prélèvement EFS habituel
   ↓
Reliquat de tube EDTA
   ↓
EFS : génération du code pseudonyme
   ↓
EFS : conservation de la table identité ↔ code
   ↓
Transmission au CRB :
code + tube EDTA + site de prélèvement
(+ âge uniquement si retenu)
   ↓
Enregistrement CRB
   ↓
Extraction ADN
   ↓
Banque ADN du CRB
   ↓
Aliquot dédié au projet
   ↓
Équipe de recherche Génome Réunion
   ↓
Génotypage / analyses autorisées
```

---

## 4. Répartition minimale de l'information

| Élément | EFS | CRB / CHU | Équipe de recherche |
|---|---:|---:|---:|
| Identité civile | Oui | Non dans ce circuit | Non |
| Table identité ↔ code | Oui | Non | Non |
| Code pseudonyme | Oui | Oui | Oui selon besoin |
| Tube EDTA reliquat | Oui avant transfert | Oui | Non après extraction sauf besoin spécifique |
| Site / lieu de prélèvement EFS | Oui | Oui | Oui si nécessaire à l'analyse |
| Âge | Oui si disponible | **À arbitrer** | **À arbitrer** |
| Autres données personnelles | Non transmises à ce stade | Non | Non |
| ADN extrait | Non | Oui | Aliquot uniquement |

---

## 5. Éléments établis — Phase 1

- [x] information du participant lors de l'entretien avec le médecin EFS ;
- [x] accord écrit signé après explication du projet ;
- [x] utilisation d'un reliquat de tube EDTA ;
- [x] absence de tube supplémentaire spécifiquement prélevé pour Génome Réunion dans le circuit retenu ;
- [x] EFS générateur du code pseudonyme ;
- [x] EFS gestionnaire de la table identité ↔ code ;
- [x] absence de transmission de l'identité directe au CRB ;
- [x] données transmises limitées au code, au tube et au site de prélèvement ;
- [x] âge identifié comme variable optionnelle à arbitrer ;
- [x] transfert EFS → CRB ;
- [x] enregistrement du prélèvement au CRB ;
- [x] extraction de l'ADN ;
- [x] conservation de l'ADN en banque par le CRB ;
- [x] préparation d'un aliquot pour les analyses de l'équipe de recherche.

---

## 6. Éléments déplacés vers les phases suivantes

Ces points ne bloquent plus la description fonctionnelle de la Phase 1 mais devront être formalisés avant l'ouverture de la collecte :

- modalités de transport EFS → CRB ;
- convention EFS–CHU ;
- responsabilités juridiques respectives ;
- cadre réglementaire et qualité du CRB ;
- règles de conservation et de destruction ;
- conséquences d'un retrait du participant ;
- règles de sortie d'aliquots ;
- validation du document d'information et de l'accord écrit ;
- qualification RIPH / non-RIPH ;
- cadre CNIL applicable.

---

## 7. Point de vigilance terminologique

Le terme **« pseudo-anonymisé »** ne sera pas utilisé dans le dossier réglementaire.

Le terme retenu est **« pseudonymisé »**, puisque l'EFS conserve une table permettant de restaurer le lien avec l'identité du participant.

Les données génétiques produites à partir de l'échantillon ne seront pas considérées comme anonymes par défaut.

---

## 8. Conclusion de la Phase 1

La **Phase 1 est fonctionnellement achevée**.

Le circuit de base retenu est :

> **information et accord écrit à l'EFS → reliquat de tube EDTA → codage par l'EFS → table de correspondance conservée à l'EFS → transmission minimale au CRB → extraction → banque ADN → aliquot recherche.**

La variable **âge** reste volontairement non figée et sera examinée en Phase 4 au titre de la nécessité scientifique et de la minimisation des données.

La prochaine étape est la **Phase 2 — qualification réglementaire RIPH / non-RIPH et cadre CNIL**.
