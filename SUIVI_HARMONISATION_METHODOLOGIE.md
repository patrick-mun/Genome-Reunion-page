# Suivi d’harmonisation méthodologique — Génome Réunion

## Objet du fichier

Ce journal accompagne la branche `agent/harmonisation-methodologie-sdiv` et la pull request associée.

Il recense, pour chaque document modifié :

- le chemin du fichier ;
- la version avant et après modification ;
- les lignes concernées dans l’état de la branche au commit indiqué ;
- le titre de section ou l’ancre HTML correspondante ;
- la règle antérieure ;
- la correction appliquée ;
- la justification scientifique ou documentaire ;
- les autres documents à harmoniser sur la même règle ;
- le statut de validation.

> **Règle de lecture des lignes**  
> Les numéros de ligne correspondent à l’état du fichier dans le commit mentionné. Comme ils peuvent se décaler lors de corrections ultérieures, le titre de section, l’identifiant HTML ou un extrait distinctif est toujours indiqué en complément.

---

## Statuts utilisés

| Statut | Signification |
|---|---|
| `À traiter` | Correction identifiée mais non encore appliquée |
| `En cours` | Correction appliquée partiellement ou en cours de contrôle transversal |
| `Corrigé` | Modification appliquée dans le document concerné |
| `Harmonisé` | Règle alignée dans tous les documents actifs concernés |
| `À valider` | Correction prête mais nécessitant une décision scientifique ou méthodologique |
| `Archive` | Ancienne version conservée sans mise à jour fonctionnelle |

---

## Hiérarchie documentaire retenue

| Document | Rôle de référence |
|---|---|
| Synthèse scientifique | Architecture générale du projet, ressources, objectifs, calendrier et usages |
| Méthodologie de sélection | Définition opérationnelle de la sélection réelle des 350 WGS |
| Justification du choix `S_div` | Raisonnement scientifique et comparaison des alternatives |
| Protocole de validation | Comparateurs, endpoints, seuils, seeds, règles de gel et verdict |
| Annexe B — simulation | Génération des cohortes simulées et de la vérité génomique |
| Glossaire des paramètres | Noms canoniques, définitions et valeurs numériques |
| `methodologie.html` | Page d’orientation vers les documents actifs |

---

## Registre synthétique des corrections

| ID | Règle ou thème | Document maître | Documents concernés | Statut |
|---|---|---|---|---|
| HARM-001 | Seuil KING opérationnel `> 0,0442` | Protocole de validation | Synthèse, sélection, justification, glossaire | À traiter |
| HARM-002 | Remplacement de « cluster d’ascendance » par « strate de profil ancestral inféré » | Méthodologie de sélection | Synthèse, justification, protocole | À traiter |
| HARM-003 | Allocation hybride secteurs × strates avec planchers | Méthodologie de sélection | Synthèse, justification, protocole | À traiter |
| HARM-004 | Allocation nominale 322 + 28, ratio final gelé après optimisation indépendante | Protocole de validation | Sélection, synthèse, justification | À traiter |
| HARM-005 | Rôle et calendrier des 100 familles | Synthèse scientifique | Sélection, justification, protocole | À traiter |
| HARM-006 | Fréquences brutes, pondérées et recalibrées sur les 2 500 SNP | Méthodologie de sélection | Synthèse, justification | À traiter |
| HARM-007 | IBD dynamique conditionnel à l’ensemble déjà sélectionné | Méthodologie de sélection | Synthèse, justification, protocole | À traiter |
| HARM-008 | Séparation entropie ADMIXTURE et rareté globale | Méthodologie de sélection | Synthèse, justification, protocole | À traiter |
| HARM-009 | Définition robuste des distances PCA et normalisations | Méthodologie de sélection | Synthèse, justification, protocole | À traiter |
| HARM-010 | Distinction pénalité ROH du noyau / score fondateur du bras découverte | Méthodologie de sélection | Synthèse, justification, protocole, annexe B | À traiter |
| HARM-011 | Random brut sans exclusion spécifique d’apparentement | Protocole de validation | Justification, synthèse si nécessaire | À traiter |
| HARM-012 | Quintiles comme garde-fou candidat à valider | Méthodologie de sélection | Justification, protocole, synthèse | À traiter |
| HARM-013 | Set-cover limité à l’anneau exploratoire | Justification `S_div` | Protocole, sélection | À traiter |
| HARM-014 | `S_div + bras découverte` = stratégie candidate principale, non encore validée | Protocole de validation | Tous les documents actifs | À traiter |
| HARM-015 | Archivage explicite des versions obsolètes | `methodologie.html` | Anciennes méthodologies et anciens protocoles | À traiter |

---

## Détail des modifications

### Entrée type à reproduire

#### HARM-XXX — Titre de la correction

- **Fichier :** `chemin/vers/fichier.html`
- **Version :** `ancienne → nouvelle`
- **Commit :** `à renseigner`
- **Lignes après modification :** `Lxxx–Lyyy`
- **Section / ancre :** `Titre de section` / `#identifiant`
- **Statut :** `À traiter`

**Règle antérieure**

> Extrait ou résumé de la formulation remplacée.

**Modification appliquée**

> Nouvelle formulation ou description précise de la modification.

**Justification**

Explication scientifique, méthodologique ou documentaire.

**Documents associés à contrôler**

- `autre/fichier-1.html`
- `autre/fichier-2.html`

**Contrôles effectués**

- [ ] Cohérence terminologique
- [ ] Cohérence des valeurs numériques
- [ ] Cohérence avec le glossaire
- [ ] Validation du HTML
- [ ] Contrôle de la pagination Paged.js
- [ ] Contrôle des liens internes et externes

---

## Historique des commits d’harmonisation

| Date | Commit | Fichiers | Résumé | Contrôles |
|---|---|---|---|---|
| 2026-07-24 | À compléter | `SUIVI_HARMONISATION_METHODOLOGIE.md` | Création du registre central de suivi | Structure initiale créée |

---

## Contrôle transversal avant ouverture ou mise à jour de la pull request

- [ ] Aucun seuil KING opérationnel différent de `> 0,0442` dans les documents actifs
- [ ] `0,0625` utilisé uniquement comme repère théorique descriptif
- [ ] Terminologie « strate de profil ancestral inféré » harmonisée
- [ ] Allocation nominale 322 + 28 clairement distinguée du ratio final validé
- [ ] Rôle des 100 familles distingué de la cohorte des 2 500 et des 350 WGS
- [ ] Stratégie `S_div + bras découverte` décrite comme candidate principale
- [ ] Random brut défini sans exclusion spécifique de parenté
- [ ] Fréquences des variants non présentées comme directement populationnelles à partir des seuls 350 WGS
- [ ] Versions actives et archives clairement identifiées
- [ ] Tous les liens de `methodologie.html` vérifiés
- [ ] Tous les fichiers HTML actifs validés
- [ ] Pagination et rendu d’impression vérifiés

---

## Décisions restant éventuellement à valider

Cette section sera utilisée uniquement pour les points nécessitant une décision explicite avant harmonisation définitive.

| ID | Décision attendue | Options | Décision retenue | Date |
|---|---|---|---|---|
| — | Aucune décision ouverte à la création du journal | — | — | — |
