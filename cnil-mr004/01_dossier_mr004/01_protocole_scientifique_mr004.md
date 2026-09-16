# Protocole scientifique MR-004 — Génome Réunion

**Version :** 0.7.4 — vérification déclarative des critères d’inclusion  
**Date :** 16 septembre 2026  
**Statut :** document de travail à relire avec l’équipe, la DRCI et le DPO  
**Règle de lecture :** toute mention **À confirmer / À arbitrer / À valider DRCI-DPO** correspond à un point institutionnel ou documentaire qui n’est pas encore formellement validé dans le dossier final.

---

# 1. Titre et identification du projet

## 1.1 Titre

**Génome Réunion — constitution d’un référentiel génomique populationnel local de première génération pour la population réunionnaise.**

**Titre court :** Génome Réunion.

## 1.2 Porteur institutionnel

**CHU de La Réunion — Service de génétique moléculaire.**

Le projet vise la constitution d’un référentiel génomique local destiné à mieux représenter la diversité génétique de la population réunionnaise dans les analyses de génétique des populations et, à terme, à améliorer certains processus d’interprétation biomédicale, notamment en génétique médicale et en pharmacogénétique.

Le projet ne vise pas à définir un « génome réunionnais » ni une identité génétique de la population. Il vise à représenter un **continuum de diversité génétique**, dans une population historiquement admixée et marquée localement par des effets fondateurs.

## 1.3 Qualification réglementaire de travail

**Hypothèse actuelle : recherche n’impliquant pas la personne humaine (RNIPH / non-RIPH), avec MR-004 comme méthodologie de référence principale à tester.**

Pour la cohorte populationnelle principale, cette qualification repose notamment sur l’utilisation secondaire d’un **reliquat de tube EDTA prélevé dans le cadre du don de sang**, sans acte ni prélèvement supplémentaire organisé pour Génome Réunion.

Pour le **volet des 100 familles nucléaires**, aucun prélèvement supplémentaire n’est prévu. Le CRB sélectionne des **reliquats d’ADN déjà conservés** provenant de patients ayant signé un **consentement recherche** après information et discussion avec le patient lors d’une consultation médicale, dans le cadre réglementaire applicable. Ces consentements encadrent les analyses de recherche nécessaires au projet.

Le CRB réalise la sélection des familles et la **pseudonymisation avant toute mise à disposition** des échantillons ou données aux équipes de recherche. Les équipes de recherche ne reçoivent pas l’identité directe des personnes concernées.

La finalité de ce volet est strictement **technique et méthodologique** : les familles nucléaires sont utilisées pour améliorer et contrôler le phasage par transmission mendélienne. Elles ne sont pas utilisées pour décrire les fréquences de variants dans la population réunionnaise, pour constituer le panel WGS des 350, ni pour les analyses pharmacogénétiques populationnelles.

La version du consentement recherche applicable et la traçabilité de sa signature seront conservées comme pièces justificatives du dossier réglementaire.

**Statut général RNIPH / MR-004 : À valider DRCI / DPO.**

## 1.4 Responsable de traitement

**Hypothèse de travail : CHU de La Réunion.**

**Statut : À confirmer institutionnellement par le DPO / DRCI / juridique.**

## 1.5 Responsable de mise en œuvre / responsable scientifique

Le dépôt identifie notamment l’équipe suivante :

- Patrick MUNIER — Service de génétique moléculaire, CHU de La Réunion ;
- Dr Thomas HUBY — responsable génétique moléculaire, CHU de La Réunion ;
- Susie GUILLY — Ingénieur, service de génétique moléculaire ;
- Dr Fanny FERROUL — Service de génétique médicale.

La désignation formelle du **responsable de mise en œuvre** et/ou de l’**investigateur / responsable scientifique institutionnel** reste à inscrire dans la version soumise.

**Statut : À confirmer.**

## 1.6 Partenaires / acteurs déjà identifiés

- EFS La Réunion — recrutement / information / codage / source du reliquat EDTA ;
- CRB du CHU de La Réunion — réception, enregistrement, extraction, conservation de l’ADN, aliquotage et sélection/pseudonymisation du volet des 100 familles nucléaires ;
- Service de génétique moléculaire du CHU de La Réunion — réalisation en interne du génotypage SNP sur **iScan Illumina** ;
- POPgen — prise en charge prévue du WGS des 350 individus sélectionnés ;
- 1000 Genomes / IGSR — panel de référence public ;
- European Genome-phenome Archive (EGA) — panels externes à accès contrôlé selon besoins analytiques.

Le rôle RGPD précis de chaque acteur est traité séparément dans la phase « acteurs / responsabilités / conventions ».

---

# 2. Synopsis du protocole

| Élément | Description actuelle |
|---|---|
| Type de recherche | RNIPH présumée — MR-004 à confirmer |
| Population principale | Environ 2 500 participants recrutés via l’EFS, résidant à La Réunion et dont les deux parents sont nés à La Réunion |
| Matériel biologique cohorte principale | Reliquats de tubes EDTA issus des dons EFS, constitués en collection au fil des dons à partir du lancement de l’étude |
| Volet familles | Environ 100 familles nucléaires sélectionnées par le CRB à partir de reliquats d’ADN déjà conservés |
| Consentement volet familles | Consentement recherche écrit et signé après information et discussion en consultation médicale |
| Pseudonymisation volet familles | Réalisée par le CRB avant mise à disposition aux équipes de recherche |
| Finalité volet familles | Amélioration et contrôle du phasage par transmission mendélienne uniquement |
| Utilisation pour fréquences / description de variants | Non |
| Utilisation pharmacogénétique des familles | Non |
| Prélèvement supplémentaire pour la recherche | Non prévu, ni pour la cohorte principale ni pour le volet familial |
| Information / accord cohorte principale | Information lors de l’entretien avec le médecin EFS + accord écrit signé |
| Pseudonymisation cohorte principale | Code généré et table identité ↔ code conservée par l’EFS |
| Données transmises au CRB | tube codé + site de prélèvement ; âge uniquement si finalement nécessaire |
| Génotypage | Génotypage SNP réalisé en interne au CHU de La Réunion sur **iScan Illumina**, avec puce de type Global Diversity Array (~1,9 M SNP dans le corpus actuel) |
| Analyses principales | QC, PCA, ADMIXTURE, KING, ROH, IBD, sélection géo-ancestrale, phasage, imputation, LAI, recalibrage des fréquences, analyses pharmacogénétiques populationnelles |
| Sélection WGS | 350 individus sélectionnés parmi les 2 500 |
| WGS | 350 génomes complets, pris en charge dans le schéma actuel par POPgen |
| Panels externes | 1000G / IGSR + datasets EGA autorisés |
| Pharmacogénétique populationnelle | Incluse : fréquences de variants pharmacogénétiques et identification de couples gène–médicament d’intérêt collectif |
| Pharmacogénétique clinique individuelle | Hors traitement initial : prescriptions, réponse au traitement, recommandation ou adaptation individuelle de posologie |
| Portail web public | Inclus : diffusion de résultats agrégés, fréquences locales et variants nouvellement observés ou de fréquence différente sous réserve de règles de contrôle de divulgation |
| Portail clinique / données individuelles | Hors traitement initial |
| Durée globale du projet | 36 mois dans le corpus scientifique / économique |
| Ressource durable | Séparée du traitement MR-004 initial ; cadre à définir ultérieurement |
| Données cliniques / IA | Hors traitement initial ; extensions à réévaluer séparément |

---

# 3. Contexte scientifique et justification d’intérêt public

## 3.1 Contexte

Les bases génomiques internationales utilisées en diagnostic, en pharmacogénétique et en recherche représentent imparfaitement certaines populations non européennes et, plus particulièrement, les populations fortement admixées et fondatrices.

La population réunionnaise est issue d’apports historiques multiples, notamment européens, africains, malgaches, sud-asiatiques et est-asiatiques, avec des proportions variables selon les individus et les zones géographiques. Le contexte insulaire a également pu produire localement des phénomènes de dérive génétique, d’effet fondateur et d’endogamie.

Cette structure complexe n’est pas correctement décrite par une simple stratification géographique ni par des référentiels essentiellement construits à partir de populations externes.

La sous-représentation de cette diversité peut avoir des conséquences non seulement sur l’interprétation diagnostique des variants, mais également sur l’évaluation de variants pharmacogénétiques dont les fréquences peuvent varier entre populations et composantes ancestrales. L’utilisation de référentiels externes sans données locales peut donc limiter la pertinence des connaissances disponibles pour la population réunionnaise.

## 3.2 Problème scientifique

L’absence d’un référentiel local peut affecter :

- l’interprétation de la fréquence réelle de certains variants ;
- l’estimation du caractère rare ou fréquent d’un variant ;
- la proportion de variants de signification incertaine ;
- l’interprétation de certains profils de ROH / IBD ;
- l’utilisation de scores et référentiels calibrés majoritairement sur d’autres populations ;
- la reproductibilité des analyses de génétique des populations dans le contexte réunionnais ;
- l’estimation des fréquences de variants pharmacogénétiques dans une population fortement admixée ;
- la transposabilité à La Réunion de connaissances pharmacogénétiques provenant principalement de populations de référence extérieures ;
- l’identification de variants ou de profils pharmacogénétiques suffisamment fréquents localement pour justifier des études cliniques ciblées ultérieures.

Le projet cherche donc à fournir un socle populationnel permettant d’étudier les variants pharmacogénétiques **au niveau collectif**, sans utiliser à ce stade de données de prescription, de réponse au traitement ou de décision thérapeutique individuelle.

## 3.3 Problème médical et sanitaire

La sous-représentation génomique de la population réunionnaise peut conduire à une moindre pertinence locale de certains référentiels utilisés en médecine génomique.

Deux conséquences médicales principales sont considérées dans Génome Réunion :

1. **Interprétation diagnostique :** un variant fréquent localement mais rare dans les bases internationales peut être surinterprété, tandis que l’absence de données locales peut contribuer au maintien de variants de signification incertaine.
2. **Pharmacogénétique :** les fréquences de variants influençant le métabolisme, l’efficacité ou la toxicité de certains médicaments peuvent différer selon les populations et les profils d’ascendance. Sans référentiel local, il est difficile d’estimer correctement la fréquence populationnelle de ces variants et de déterminer quels couples gène–médicament méritent d’être étudiés prioritairement à La Réunion.

La phase initiale ne cherche pas à modifier directement une prescription ni à produire une recommandation individuelle de posologie. Elle vise à produire les connaissances populationnelles nécessaires pour déterminer, dans un second temps et sous un cadre réglementaire adapté, quelles études cliniques ou actions de prévention médicamenteuse pourraient être pertinentes.

## 3.4 Intérêt public

Le projet vise à produire une connaissance collective et une infrastructure scientifique locale susceptibles de réduire les biais liés à la sous-représentation génomique de La Réunion.

L’intérêt public attendu repose notamment sur :

- une meilleure description de la diversité génétique de la population réunionnaise ;
- la constitution de fréquences alléliques locales plus adaptées ;
- l’amélioration future de l’interprétation de variants en génétique médicale ;
- la réduction de certaines incertitudes liées aux variants de signification incertaine ;
- une meilleure connaissance des effets fondateurs et de la structure d’admixture ;
- la constitution d’un référentiel de fréquences de variants pharmacogénétiques pertinent pour la population réunionnaise ;
- l’identification de couples gène–médicament ou de variants pharmacogénétiques prioritaires pouvant justifier des études cliniques ciblées ultérieures ;
- la préparation d’actions futures de prévention de certains risques médicamenteux ou d’adaptation de posologie, qui devront être évaluées dans des protocoles cliniques distincts avant tout usage individuel ;
- la réduction des inégalités de connaissance liées à l’utilisation de référentiels principalement construits à partir de populations moins admixées ou mieux représentées ;
- la mise à disposition de résultats agrégés et d’une ressource de référence encadrée pour la recherche ;
- la **diffusion publique, via un portail web dédié, de résultats agrégés utiles à la communauté scientifique et médicale**, notamment des fréquences alléliques locales, des comparaisons avec les référentiels externes et des variants nouvellement observés ou présentant une fréquence sensiblement différente, dans le respect de règles de contrôle de divulgation.

La pharmacogénétique est donc considérée ici comme un **enjeu d’intérêt public populationnel et de préparation de futures recherches cliniques**, et non comme une décision thérapeutique automatisée ou une prise en charge médicale individuelle dans le cadre du présent protocole.

Le portail web public constitue un **outil de restitution et de valorisation des résultats de la recherche**. Il ne donnera pas accès aux données individuelles pseudonymisées ni à des résultats dont le niveau de détail pourrait permettre une ré-identification directe ou indirecte.

**Statut réglementaire de la justification d’intérêt public : à formaliser et valider dans la version institutionnelle.**

---

# 4. Objectifs

## 4.1 Objectif principal

**Construire un référentiel génomique populationnel réunionnais de première génération, fondé sur une cohorte large génotypée et un panel WGS optimisé, permettant de décrire la diversité génétique locale et de produire des estimations de fréquences génétiques recalibrées sur la cohorte large.**

## 4.2 Objectifs secondaires

1. Caractériser la structure génétique et l’admixture de la cohorte par PCA et ADMIXTURE.
2. Mesurer et contrôler la parenté génétique au sein de la cohorte au moyen de KING / IBD, uniquement entre identifiants pseudonymisés.
3. Étudier les ROH, l’autozygotie et certaines signatures d’effet fondateur.
4. Construire une sélection de 350 individus maximisant la couverture de la diversité génétique sous contrainte de budget WGS.
5. Produire le WGS des 350 individus sélectionnés.
6. Développer un panel local utile au phasage et à l’imputation.
7. Utiliser les 100 familles nucléaires comme ressource technique indépendante pour améliorer et contrôler le phasage par transmission mendélienne, sans les intégrer aux calculs de fréquences populationnelles.
8. Recalibrer les fréquences observées dans le panel WGS sur la cohorte des ~2 500 participants.
9. Comparer et contextualiser la cohorte réunionnaise à l’aide de panels externes pertinents.
10. Caractériser, à l’échelle populationnelle, la fréquence de variants pharmacogénétiques d’intérêt dans la population réunionnaise.
11. Identifier des couples gène–médicament ou des profils pharmacogénétiques susceptibles de justifier des études cliniques ciblées ultérieures, sans produire de recommandation individuelle dans la phase initiale.
12. Produire des résultats agrégés, des indicateurs de qualité et un référentiel initial utilisable dans des projets de recherche ultérieurs sous gouvernance adaptée.
13. **Mettre à disposition un portail web public de restitution des résultats agrégés**, permettant notamment de consulter des fréquences locales et des différences avec des référentiels externes, sous réserve de règles de publication empêchant la divulgation de données individuelles ou ré-identifiantes.

## 4.3 Finalités explicitement hors périmètre initial

Ne sont pas considérées comme automatiquement couvertes par le présent protocole MR-004 :

- croisement avec les données cliniques hospitalières ;
- diagnostic individuel ;
- données de prescription et d’iatrogénie ;
- pharmacogénétique clinique individuelle, incluant corrélation génotype–réponse au traitement chez un patient ;
- recommandation ou adaptation individuelle de médicament ou de posologie ;
- protéomique ;
- réutilisation de génomes AURAGEN / SeqOIA ou d’autres cohortes ;
- entraînement de modèles d’IA sur les données individuelles Génome Réunion ;
- **portail clinique ou portail donnant accès à des données individuelles/pseudonymisées ou permettant une décision médicale individualisée** ;
- utilisation des 100 familles pour estimer les fréquences populationnelles ou décrire la distribution de variants dans la population réunionnaise ;
- toute analyse visant l’identification ou la ré-identification d’un participant.

Ces extensions devront faire l’objet d’une nouvelle analyse réglementaire avant mise en œuvre.

---

# 5. Design de l’étude

## 5.1 Nature de l’étude

Étude observationnelle de génomique populationnelle reposant sur l’utilisation secondaire, à des fins scientifiques, de matériels biologiques issus de deux circuits distincts :

- **Cohorte principale EFS :** la collection biologique sera constituée à partir du lancement de l’étude, au fil des dons de sang, par récupération de reliquats de tubes EDTA issus du circuit habituel EFS, après information et accord écrit signé des donneurs. Ces reliquats ne constituent pas une collection déjà disponible avant le lancement de l’étude.
- **Volet familial CRB :** utilisation de reliquats d’ADN déjà conservés au CRB, selon les conditions décrites en section 5.4.

Aucun prélèvement sanguin supplémentaire n’est actuellement prévu spécifiquement pour Génome Réunion.

## 5.2 Cohorte principale

Environ **2 500 participants** recrutés en collaboration avec l’EFS La Réunion.

Cette cohorte constitue la base populationnelle utilisée pour :

- le génotypage SNP ;
- la caractérisation de la structure génétique ;
- l’audit de représentativité de la cohorte EFS ;
- la sélection des 350 WGS ;
- le recalibrage des fréquences issues du panel WGS ;
- l’estimation populationnelle de la fréquence de variants pharmacogénétiques accessibles par le génotypage et/ou le WGS.

## 5.3 Panel WGS

**350 individus** seront sélectionnés parmi les ~2 500 participants.

Ce panel n’est pas un échantillon aléatoire simple et **ne doit pas être interprété seul comme représentatif de la population réunionnaise**.

La sélection combine un noyau principal géo-ancestral et un bras de découverte contrôlé. Les modalités détaillées sont décrites dans la méthodologie scientifique de sélection.

Les fréquences observées dans les 350 seront donc recalibrées sur la cohorte large, y compris lorsque des variants pharmacogénétiques sont décrits à partir du WGS.

## 5.4 Volet 100 familles nucléaires

Le projet prévoit environ **100 familles nucléaires**, soit environ 300 individus, constituant une **ressource technique de phasage** distincte de la cohorte populationnelle.

Les échantillons proviennent de reliquats d’ADN déjà conservés au CRB. Les patients concernés ont signé un **consentement recherche** après information et discussion lors d’une consultation médicale, conformément au cadre institutionnel et réglementaire applicable.

Le CRB :

1. identifie les familles nucléaires répondant aux critères techniques ;
2. vérifie l’existence du consentement recherche signé ;
3. vérifie la disponibilité et la qualité des reliquats d’ADN ;
4. pseudonymise les échantillons et données avant mise à disposition ;
5. ne transmet aux équipes de recherche que les éléments nécessaires au phasage et au contrôle mendélien.

Les familles nucléaires sont utilisées uniquement pour :

- fournir des contraintes de transmission mendélienne ;
- améliorer la précision du phasage haplotypique ;
- mesurer le gain de phasage obtenu par l’ajout de données familiales ;
- contribuer aux contrôles qualité liés à la transmission.

Elles **ne sont pas utilisées** pour :

- calculer ou recalibrer les fréquences alléliques de la population réunionnaise ;
- décrire des variants ou leur distribution populationnelle ;
- sélectionner les 350 WGS ;
- réaliser les analyses pharmacogénétiques populationnelles ;
- produire une interprétation clinique individuelle.

---

# 6. Population concernée et critères d’inclusion / exclusion

## 6.1 Population cible opérationnelle

Deux sources de participants sont distinguées :

- la cohorte populationnelle principale recrutée parmi les donneurs pris en charge par l’EFS La Réunion, résidant à La Réunion et dont les deux parents sont nés à La Réunion, ayant reçu une information spécifique sur Génome Réunion ;
- le volet familial constitué à partir de personnes dont l’ADN est déjà conservé au CRB et disposant d’un consentement recherche signé recueilli après information et discussion en consultation médicale.

## 6.2 Critères d’inclusion actuellement établis — cohorte principale

- participation au circuit EFS ;
- résidence à La Réunion ;
- naissance des deux parents à La Réunion ;
- information préalable sur le projet lors de l’entretien avec le médecin EFS ;
- accord écrit signé pour la participation au projet ;
- disponibilité d’un reliquat de tube EDTA utilisable pour le projet ;
- attribution d’un identifiant pseudonyme par l’EFS ;
- quantité / qualité biologique suffisante pour permettre l’extraction et les analyses prévues.

La résidence à La Réunion et la naissance des deux parents à La Réunion sont vérifiées sur simple déclaration du donneur lors de l’entretien EFS, sans demande de justificatif.

## 6.3 Critères d’exclusion actuellement établis ou logiquement nécessaires — cohorte principale

- non-respect des critères de résidence ou de naissance des deux parents à La Réunion ;
- absence d’accord écrit / opposition du participant ;
- absence ou insuffisance de reliquat biologique exploitable ;
- impossibilité technique d’obtenir une donnée génétique de qualité suffisante ;
- échec majeur des contrôles qualité rendant l’échantillon non exploitable pour les analyses prévues.

## 6.4 Critères restant à formaliser — cohorte principale

Le corpus actuel ne permet pas encore de considérer comme définitivement établis :

- un critère d’âge propre à la recherche ;
- le support de traçabilité de l’éligibilité au sein de l’EFS ;
- d’éventuels critères spécifiques d’exclusion liés au don de sang au-delà de ceux gérés par l’EFS.

**À confirmer avec EFS / DRCI.**

## 6.5 Critères spécifiques — volet familles

Critères actuellement identifiés :

- présence d’un reliquat d’ADN conservé au CRB ;
- existence d’un consentement recherche écrit et signé ;
- consentement recueilli après information et discussion lors d’une consultation médicale ;
- appartenance à une famille nucléaire exploitable pour le phasage par transmission ;
- quantité et qualité d’ADN suffisantes ;
- pseudonymisation par le CRB avant mise à disposition.

Les critères techniques précis définissant une famille nucléaire exploitable seront documentés dans le protocole de phasage.

---

# 7. Origine des échantillons et circuits biologiques

## 7.1 Cohorte principale — information et accord

Le projet est présenté au donneur lors de l’entretien avec le médecin de l’EFS. Les critères de résidence et de naissance des deux parents à La Réunion sont vérifiés sur simple déclaration du donneur, sans justificatif. Le participant reçoit une explication du projet puis signe un accord écrit.

La forme réglementaire définitive du document d’information / accord sera finalisée après validation de la qualification RNIPH / MR-004.

## 7.2 Cohorte principale — origine biologique

Le matériel biologique utilisé est un **reliquat de tube EDTA issu du circuit habituel du don de sang**. La collection sera constituée au fil des dons à partir du lancement de l’étude, après information et accord écrit signé des donneurs ; elle n’est pas déjà disponible avant ce lancement.

Aucun tube supplémentaire spécifique Génome Réunion n’est prévu dans le circuit actuel.

## 7.3 Cohorte principale — codage

- l’EFS génère le code pseudonyme ;
- l’EFS conserve la table identité ↔ code ;
- le CHU / CRB ne reçoit pas l’identité directe dans le circuit prévu ;
- l’équipe de recherche travaille sur les codes pseudonymes.

## 7.4 Cohorte principale — données transmises au CRB

À ce stade :

- code pseudonyme ;
- tube EDTA reliquat ;
- point de collecte EFS, fixe ou mobile ;
- âge uniquement si cette variable est finalement retenue comme scientifiquement nécessaire.

Aucune autre donnée personnelle n’est considérée comme nécessaire dans le circuit actuellement figé.

## 7.5 Cohorte principale — traitement CRB

Le CRB :

1. réceptionne et enregistre le prélèvement ;
2. assure sa traçabilité interne ;
3. réalise l’extraction de l’ADN ;
4. conserve l’ADN en banque ;
5. prépare un aliquot pour les analyses autorisées de l’équipe de recherche.

Les modalités de transport, de conservation, de retrait et de destruction sont traitées dans les documents dédiés et restent à valider avant ouverture de la collecte.

## 7.6 Volet familles — circuit CRB

Le volet familial repose sur des **reliquats d’ADN déjà conservés au CRB**.

Le CRB :

1. identifie les familles nucléaires potentiellement exploitables pour le phasage ;
2. vérifie l’existence du consentement recherche écrit et signé ;
3. vérifie la disponibilité et la qualité des reliquats d’ADN ;
4. attribue ou applique un identifiant pseudonyme adapté au projet ;
5. conserve le lien avec l’identité dans le cadre institutionnel autorisé ;
6. met à disposition des équipes de recherche uniquement les aliquots et informations pseudonymisés nécessaires au phasage et au contrôle mendélien.

Aucune identité directe n’est transmise aux équipes de recherche dans ce circuit.

---

# 8. Données utilisées et justification de nécessité

## 8.1 Données directement transmises depuis l’EFS

| Donnée | Statut | Justification actuelle |
|---|---|---|
| Code pseudonyme | Retenu | Traçabilité scientifique sans identité directe |
| Point de collecte EFS, fixe ou mobile | Retenu | Documentation de la répartition géographique de la collecte ; ne décrit pas le lieu de résidence |
| Âge | À arbitrer | À conserver uniquement si nécessité scientifique démontrée |
| Identité civile | Non transmise | Non nécessaire aux analyses scientifiques |
| Table identité ↔ code | Conservée par EFS | Non nécessaire à l’équipe de recherche |

## 8.2 Données génétiques produites

- génotypes SNP ;
- indicateurs de qualité ;
- coordonnées PCA ;
- composantes ADMIXTURE ;
- coefficients de parenté KING ;
- données / segments IBD ;
- ROH ;
- variables du score de sélection `S_div` ;
- listes de sélection WGS ;
- WGS brut / aligné / variants selon pipeline retenu ;
- données de phasage ;
- données d’imputation ;
- LAI si retenue ;
- fréquences alléliques brutes, pondérées, imputées et/ou recalibrées ;
- fréquences et annotations de variants pharmacogénétiques retenus pour l’analyse populationnelle ;
- indicateurs d’incertitude et de qualité.

## 8.3 Données du volet familial

Les données du volet familial sont limitées à ce qui est nécessaire au phasage et au contrôle mendélien :

- identifiant pseudonyme ;
- structure de parenté nécessaire à la représentation de la famille nucléaire ;
- génotypes utiles au phasage ;
- indicateurs de qualité ;
- erreurs / cohérences mendéliennes ;
- informations haplotypiques dérivées nécessaires à l’évaluation du phasage.

Ces données ne sont pas intégrées aux calculs de fréquences alléliques populationnelles et ne sont pas utilisées pour décrire des variants individuels ou populationnels.

## 8.4 Variable géographique retenue

Le **point de collecte EFS, fixe ou mobile**, est la seule donnée géographique transmise au CRB et utilisée pour les analyses. Aucune adresse, commune ou quartier de résidence n’est transmis ni ajouté aux données de recherche.

Les collectes mobiles couvrent l’île. Le point de collecte documente la géographie du recrutement, sans être assimilé au lieu de résidence du participant. La composante géographique de la sélection sera interprétée dans cette limite.

## 8.5 Sexe

Le corpus scientifique mentionne le sexe notamment dans certains contrôles qualité / audits de représentativité, mais le circuit EFS actuellement figé ne prévoit pas sa transmission.

**Statut : À arbitrer.**

S’il est retenu, sa nécessité devra être documentée explicitement ; sinon il restera exclu du flux réglementaire initial.

## 8.6 Ascendance déclarée

La méthodologie scientifique repose principalement sur une ascendance **génétique inférée** via PCA / ADMIXTURE et panels de référence.

Le critère d’inclusion « deux parents nés à La Réunion » définit l’ancrage familial retenu pour la cohorte. Il ne correspond pas à une catégorie d’ascendance génétique.

Aucun recueil des origines ethniques ou continentales déclarées n’est prévu. Le critère de naissance des deux parents à La Réunion est vérifié sur simple déclaration du donneur lors de l’entretien EFS, sans justificatif. Les lieux précis de naissance des parents ne sont pas transmis aux équipes de recherche.

---

# 9. Sources externes : 1000G / IGSR / EGA

## 9.1 Rôle des panels externes

Les panels externes sont utilisés uniquement comme sources de référence pour :

- ancrer les axes PCA ;
- stabiliser l’interprétation des composantes ADMIXTURE ;
- contribuer au phasage / à l’imputation ;
- comparer la structure de la cohorte réunionnaise à des références pertinentes ;
- tester la robustesse des analyses.

Ils ne servent pas à attribuer une identité aux participants réunionnais et les fréquences finales du référentiel ne sont pas déduites directement des populations externes.

## 9.2 Sources identifiées dans le corpus scientifique

### Socle public

- **1000 Genomes high-coverage / IGSR** — socle multi-ancestral, 26 populations, utilisé pour PCA, ADMIXTURE, phasage et imputation.

### Sources prioritaires ou complémentaires à accès contrôlé / selon disponibilité

Le corpus mentionne notamment :

- MGUA Malagasy WGS ;
- MAGE Madagascar ;
- GenomeAsia 100K ;
- Angola / Mozambique WGS ;
- AGVP ;
- H3Africa ;
- éventuellement Pacific WGS à titre exploratoire.

La liste définitive dépendra des autorisations obtenues et des besoins analytiques.

## 9.3 Règle EGA

Pour chaque dataset EGA :

- accession exacte à tracer ;
- DAC / DAA à archiver ;
- finalité d’usage à documenter ;
- données importées limitées au strict nécessaire ;
- règles de stockage, conservation, publication et redistribution à respecter.

Aucun panel externe ne sera étudié comme une nouvelle cohorte autonome sans nouvelle analyse réglementaire.

---

# 10. Méthodes d’analyse génétique

La description détaillée est documentée dans `CNIL_02C_METHODES_ANALYTIQUES_MR004.md` et dans les méthodologies scientifiques du dépôt.

## 10.1 Contrôle qualité SNP

Le contrôle qualité porte notamment sur :

- taux de données manquantes ;
- hétérozygotie ;
- duplicats ;
- cohérence des données ;
- harmonisation build / strand ;
- contrôle des batchs ;
- HWE utilisé avec prudence compte tenu de l’effet Wahlund dans une population structurée.

## 10.2 PCA / ADMIXTURE

Objectifs :

- caractériser la structure génétique interne ;
- décrire l’admixture ;
- construire des profils génétiques continus ;
- contribuer à la sélection des individus WGS.

Ces outils ne sont pas utilisés pour attribuer une identité ethnique individuelle.

## 10.3 KING / parenté

KING est utilisé pour estimer la parenté entre **échantillons pseudonymisés** de la cohorte principale, afin de :

- mesurer la structure de parenté de la cohorte ;
- éviter une surreprésentation familiale excessive dans la sélection WGS ;
- contrôler les analyses sensibles à l’apparentement ;
- documenter la structure populationnelle.

KING ne poursuit **aucune finalité d’identification ou de ré-identification**.

## 10.4 ROH / IBD

Objectifs :

- caractériser l’autozygotie ;
- documenter le partage haplotypique ;
- identifier certaines signatures d’effet fondateur ;
- compléter la sélection des individus informatifs.

## 10.5 Phasage / imputation / LAI

Le phasage est réalisé sur la cohorte SNP et enrichi par les WGS. Les 100 familles nucléaires apportent en complément des **contraintes de transmission mendélienne** utilisées exclusivement pour améliorer et contrôler la qualité du phasage.

Leur apport peut être évalué par comparaison entre :

- phasage statistique sans familles ;
- phasage enrichi par les transmissions familiales ;
- phasage ultérieurement enrichi par les 350 WGS.

Les familles nucléaires ne contribuent pas aux estimations de fréquences populationnelles.

L’imputation vise à projeter une partie de l’information du WGS vers la cohorte large ; la LAI peut compléter la description d’une population fortement admixée.

## 10.6 Pharmacogénétique populationnelle

La phase initiale prévoit l’analyse, à l’échelle populationnelle, de variants pharmacogénétiques identifiés dans les données SNP et/ou WGS de la cohorte principale.

Les objectifs sont :

- estimer leurs fréquences dans la cohorte réunionnaise ;
- documenter leur distribution dans une population fortement admixée ;
- comparer, lorsque pertinent, ces fréquences avec des référentiels externes ;
- identifier des variants ou couples gène–médicament suffisamment pertinents localement pour justifier des études cliniques ultérieures.

Les données des 100 familles nucléaires ne sont pas utilisées dans ces analyses pharmacogénétiques populationnelles.

Cette analyse reste **populationnelle et descriptive**. Le protocole initial n’utilise pas de données de prescription, de réponse thérapeutique ou d’événement indésirable et ne produit aucune recommandation médicale individuelle.

---

# 11. Sélection des 350 WGS

## 11.1 Principe

La sélection vise un compromis entre :

- représentation de la diversité courante ;
- couverture géographique / géo-ancestrale ;
- capture de profils rares ou insuffisamment représentés ;
- maîtrise de la parenté ;
- intérêt pour le phasage / l’imputation ;
- contrôle des signatures ROH / fondateur.

## 11.2 Méthode

La méthode scientifique est fondée sur un score `S_div`, une logique géo-ancestrale et un bras de découverte contrôlé.

Le corpus actuel prévoit notamment :

- une sélection principale / noyau géo-ancestral ;
- un bras de découverte ;
- des analyses de sensibilité des paramètres ;
- plusieurs listes de sélection possibles (`selection_stricte_350`, `selection_hybride_350`, éventuellement consensus) ;
- validation avant gel de la liste finale.

## 11.3 Conséquence réglementaire

Les variables dérivées utilisées par l’algorithme restent des données génétiques pseudonymisées.

La sélection n’a aucune finalité clinique individuelle ni d’identification des participants.

Les 100 familles nucléaires ne participent pas à cette sélection.

---

# 12. Production et traitement des données WGS

## 12.1 Volume

350 individus sélectionnés parmi les ~2 500 participants.

## 12.2 Production

Le corpus actuel prévoit une prise en charge du séquençage WGS par **POPgen**.

**Statut du partenaire et modalités exactes de transfert / conservation / restitution : À qualifier en Phase 3.**

## 12.3 Données produites

Selon le pipeline et la plateforme retenus :

- fichiers de séquençage bruts ;
- fichiers alignés ;
- fichiers de variants ;
- données dérivées nécessaires au QC, au phasage, à l’imputation, aux analyses pharmacogénétiques populationnelles et au référentiel.

## 12.4 Principe de sécurité

Le WGS reste une donnée personnelle génétique hautement sensible malgré la pseudonymisation.

Les données ne doivent pas être considérées comme anonymes et ne doivent pas être déposées dans un service externe non autorisé.

---

# 13. Méthodes statistiques et bioinformatiques au niveau réglementaire

Le présent protocole ne reproduit pas toutes les commandes, versions logicielles, seeds, paramètres ou seuils techniques.

Les éléments réglementairement pertinents sont :

- analyses reproductibles et versionnées ;
- séparation claire données d’entrée / données dérivées / résultats ;
- traçabilité des paramètres ;
- contrôles de cohérence entre SNP et WGS ;
- prise en compte du biais de sélection des 350 ;
- recalibrage des fréquences sur les ~2 500 ;
- analyses de sensibilité aux panels externes ;
- maîtrise des batch effects ;
- évaluation séparée du gain de phasage apporté par les familles nucléaires ;
- non-utilisation des données pour identifier ou réidentifier les participants.

Les méthodologies détaillées sont conservées comme annexes scientifiques du projet.

---

# 14. Résultats attendus

La phase initiale doit produire notamment :

- une cohorte SNP pseudonymisée de ~2 500 participants ;
- des rapports QC ;
- une description de la structure PCA / ADMIXTURE ;
- des indicateurs de parenté, ROH et IBD ;
- une sélection WGS documentée et auditée ;
- 350 WGS ;
- un panel local de première génération ;
- un phasage amélioré et contrôlé grâce aux transmissions mendéliennes des familles nucléaires ;
- des données d’imputation ;
- des fréquences génétiques locales recalibrées uniquement à partir de la cohorte populationnelle principale ;
- un ensemble de fréquences de variants pharmacogénétiques d’intérêt au niveau populationnel ;
- une liste argumentée de variants ou couples gène–médicament pouvant justifier des études cliniques spécifiques ultérieures ;
- des intervalles / statuts de fiabilité lorsque nécessaire ;
- des résultats agrégés destinés aux publications et au référentiel initial ;
- un **portail web public de restitution des résultats agrégés**.

## 14.1 Portail web public de restitution

Le portail public pourra présenter notamment :

- des fréquences alléliques locales ;
- des comparaisons avec des bases ou panels de référence externes ;
- des variants nouvellement observés dans la cohorte réunionnaise ;
- des variants dont la fréquence locale apparaît sensiblement différente de celle observée dans les référentiels externes ;
- des résultats agrégés de pharmacogénétique populationnelle ;
- des éléments méthodologiques et indicateurs de qualité nécessaires à l’interprétation des résultats publiés.

La publication d’un variant ou d’une fréquence sera conditionnée à des **règles de contrôle de divulgation**. Les variants ultra-rares, les petits sous-groupes, les haplotypes rares ou les combinaisons de variables susceptibles d’augmenter le risque de ré-identification pourront être supprimés, regroupés, masqués ou réservés à un accès contrôlé.

Le portail public ne donnera accès ni aux fichiers individuels, ni aux identifiants pseudonymes, ni aux données WGS individuelles, ni aux résultats du volet familial.

Les résultats issus du volet familial sont limités à l’évaluation et à l’amélioration du phasage. Ils ne sont pas utilisés pour produire des fréquences ou une description populationnelle des variants.

Les résultats individuels ne sont pas destinés à être rendus publics ni à guider directement une prescription dans le cadre du présent protocole.

---

# 15. Limites scientifiques

## 15.1 Taille du panel WGS

Le panel de 350 WGS est une ressource de première génération.

Le corpus scientifique considère :

- les variants de MAF ≥ 1 % comme interprétables avec prudence ;
- les variants de 0,5–1 % comme fragiles ;
- les variants < 0,5 % comme insuffisamment fiables pour une interprétation populationnelle robuste à ce stade.

Les variants ultra-rares et certains effets fondateurs localisés nécessiteront des extensions ultérieures.

## 15.2 Biais de sélection

Le panel WGS est enrichi et ne doit pas être traité comme une cohorte représentative indépendante.

Mitigation : recalibrage sur la cohorte SNP large par pondération, stratification et/ou imputation.

## 15.3 Biais de recrutement EFS

Les donneurs EFS peuvent ne pas reproduire exactement la structure de l’ensemble de la population réunionnaise. Les critères de résidence à La Réunion et de naissance des deux parents à La Réunion délimitent la population recrutée ; l’extrapolation des résultats à l’ensemble des résidents doit tenir compte de cette restriction. Le point de collecte ne permet pas de connaître leur répartition par lieu de résidence.

Le corpus prévoit un **audit de représentativité de la cohorte EFS**, avec comparaison à des données de référence populationnelles, avant interprétation finale.

Les variables exactes nécessaires à cet audit doivent être alignées avec la stratégie de minimisation des données.

## 15.4 Panels externes

Les panels externes peuvent présenter des différences de technologie, build, couverture ou qualité.

Mitigation : harmonisation, intersection de variants, QC et rapports de batch effect.

## 15.5 Pharmacogénétique

Les fréquences pharmacogénétiques produites dans cette phase sont des estimations populationnelles. Elles ne permettent pas, à elles seules, de conclure à l’efficacité, à la toxicité ou à la posologie optimale d’un médicament chez un individu.

Toute traduction clinique nécessitera des données cliniques, pharmacologiques et de prescription ainsi qu’un protocole spécifique.

---

# 16. Calendrier

## 16.1 Durée globale

Le corpus scientifique et économique actuel prévoit une durée globale de **36 mois**.

## 16.2 Phases utiles au périmètre MR-004 initial

Le calendrier actuellement décrit dans la synthèse scientifique comprend notamment :

- **M1–3** : accès et harmonisation des panels témoins 1000G / EGA ;
- **M1–5** : validation externe / simulations / comparaison des stratégies de sélection ;
- **M4–9** : génotypage SNP réalisé en interne au CHU sur iScan Illumina, traitement de la cohorte Réunion, QC, PCA / ADMIXTURE, calcul `S_div`, sélection des 350 ;
- **M4–14** : sélection des 100 familles nucléaires au CRB, génotypage, contrôles mendéliens et amélioration du phasage ;
- **M8–22** : WGS des 350, retour des données, QC, base de variants, recalibrage des fréquences et analyses populationnelles associées, dont la pharmacogénétique descriptive ;
- **M22–36** : consolidation des résultats agrégés, définition des règles de contrôle de divulgation et mise en ligne progressive du portail public de restitution.

Les phases d’IA clinique, de portail clinique ou de décision médicale individualisée **ne sont pas automatiquement incluses dans le présent périmètre MR-004 initial**.

## 16.3 Point à harmoniser

Le calendrier réglementaire final devra distinguer clairement :

- la durée de la **recherche MR-004 initiale** ;
- la durée du projet institutionnel global sur 36 mois ;
- la durée éventuelle de la future ressource durable.

**À arbitrer avant version finale.**

---

# 17. Durées de conservation

## 17.1 Matériel biologique

Le corpus économique budgète une conservation CRB sur **36 mois**, mais cette durée correspond à un **horizon de projet / chiffrage** et ne constitue pas à elle seule une durée réglementaire de conservation validée.

La durée de conservation des reliquats, de l’ADN en banque et des aliquots doit être définie avec le CRB / DRCI / DPO, y compris pour le volet familial.

## 17.2 Données génétiques

Les durées de conservation doivent être définies séparément pour :

- génotypes SNP ;
- FASTQ ;
- BAM / CRAM ;
- VCF / gVCF ;
- données dérivées ;
- rapports QC ;
- fréquences agrégées, y compris pharmacogénétiques ;
- données de phasage issues du volet familial ;
- logs et traces d’audit.

Les résultats rendus publics via le portail devront être distingués des données personnelles et pseudonymisées ayant servi à les produire. La pérennisation du portail au-delà de la recherche initiale sera réévaluée avec le cadre de la future ressource durable.

## 17.3 Ressource durable

La conservation à long terme dans une ressource génomique multi-projets n’est pas considérée comme automatiquement couverte par le présent traitement MR-004.

**Statut : cadre distinct à définir.**

---

# 18. Publications et diffusion des résultats

## 18.1 Publications scientifiques

Les publications porteront principalement sur :

- résultats méthodologiques ;
- structure populationnelle ;
- caractéristiques de la cohorte ;
- fréquences et statistiques agrégées ;
- fréquences populationnelles de variants pharmacogénétiques et priorisation de couples gène–médicament pour de futures études ;
- performance / validation des méthodes de sélection ;
- résultats de phasage / imputation et de recalibrage.

## 18.2 Données individuelles

Les données individuelles pseudonymisées ne sont pas destinées à une publication ouverte.

## 18.3 Variants rares / fondateurs

Une vigilance renforcée est requise pour :

- variants ultra-rares ;
- variants fondateurs ;
- haplotypes rares ;
- petits sous-groupes ;
- combinaisons secteur + profil ancestral + variant susceptibles d’augmenter le risque de ré-identification.

Une politique spécifique de publication / contrôle de divulgation devra être définie avant ouverture publique du portail.

## 18.4 Portail web public

Le projet prévoit la création d’un **portail web public de restitution des résultats agrégés de Génome Réunion**.

Ce portail pourra permettre la consultation de résultats validés issus de la recherche, notamment :

- fréquence locale d’un variant ;
- comparaison de cette fréquence à des référentiels externes ;
- identification de variants nouvellement observés dans la cohorte ;
- mise en évidence de différences de fréquence jugées scientifiquement pertinentes ;
- informations agrégées relatives à certains variants pharmacogénétiques ;
- niveau de qualité, de couverture ou d’incertitude associé à l’estimation publiée.

Avant publication, chaque catégorie de résultat devra respecter des règles de minimisation et de contrôle de divulgation. Un résultat ne devra pas être rendu public lorsque la combinaison de sa rareté, de la taille du sous-groupe ou des informations associées crée un risque excessif de ré-identification.

Le portail n’exposera **aucune donnée individuelle pseudonymisée**, aucun identifiant de participant, aucune donnée familiale individuelle et aucun fichier génomique individuel.

## 18.5 Accès scientifique futur

Le principe envisagé pour les données individuelles reste un accès contrôlé, distinct du portail public. La diffusion plus large concerne uniquement les résultats suffisamment agrégés et validés pour publication.

La gouvernance définitive, le Data Access Committee, les critères d’accès et les règles d’export relèvent d’un document spécifique et du cadre futur de la ressource durable.

---

# 19. Information des participants et droits

Deux circuits doivent être distingués :

- **cohorte principale EFS** : information spécifique sur Génome Réunion lors de l’entretien EFS et accord écrit signé ;
- **volet familial CRB** : reliquats d’ADN déjà conservés provenant de patients ayant signé un consentement recherche après information et discussion en consultation médicale ; les familles sont ensuite sélectionnées et pseudonymisées par le CRB avant mise à disposition aux équipes.

Le volet familial étant limité au phasage et au contrôle mendélien, ses données ne sont pas utilisées pour les fréquences populationnelles, la description des variants ou la pharmacogénétique.

La version finale de la note d’information de la cohorte EFS devra préciser notamment :

- finalité de la recherche ;
- nature génétique des données ;
- existence d’analyses pharmacogénétiques populationnelles sans décision thérapeutique individuelle dans la phase initiale ;
- existence d’un portail public de restitution de résultats agrégés ;
- principe de non-publication des données individuelles et des résultats à risque de ré-identification ;
- pseudonymisation ;
- rôle respectif EFS / CHU / CRB ;
- catégories de données utilisées ;
- panels externes ;
- destinataires ;
- durée de conservation ;
- publications ;
- absence de décision clinique automatique ;
- modalités d’opposition / retrait ;
- droits RGPD ;
- contact DPO ;
- règles relatives aux éventuelles découvertes génétiques pertinentes pour la santé.

Le consentement recherche utilisé pour le volet familial et sa version applicable seront conservés comme preuves documentaires du dossier.

---

# 20. Sécurité et confidentialité — principes applicables au protocole

Les mesures détaillées sont traitées dans `08_securite_aipd.md` et dans l’AIPD.

Principes déjà retenus :

- identité et table de correspondance de la cohorte principale conservées à l’EFS ;
- pour le volet familial, pseudonymisation réalisée par le CRB avant mise à disposition aux équipes ;
- recherche sur identifiants pseudonymes ;
- absence d’identifiants directs dans les fichiers analytiques ;
- droits d’accès limités aux personnels habilités ;
- journalisation et traçabilité ;
- chiffrement des transferts et du stockage selon architecture retenue ;
- séparation des environnements de développement, test et production ;
- interdiction d’utiliser des services externes non autorisés avec les données génomiques ;
- gestion spécifique des exports et des données WGS ;
- séparation technique entre l’environnement contenant les données individuelles/pseudonymisées et le portail public ;
- publication sur le portail uniquement de résultats préalablement agrégés, validés et soumis aux règles de contrôle de divulgation ;
- AIPD obligatoire avant mise en œuvre.

L’architecture finale (on-premise / hybride / autre) reste à valider par la DSIO / DPO.

---

# 21. Documents réglementaires et annexes associés

Le protocole doit être lu avec :

- `CNIL_01_CIRCUIT_EFS_PRELEVEMENT.md` ;
- `CNIL_02_QUALIFICATION_REGLEMENTAIRE.md` ;
- `CNIL_02A_SOURCES_EXTERNES_REFERENCE.md` ;
- `CNIL_02B_GRILLE_CONFORMITE_MR004.md` ;
- `CNIL_02C_METHODES_ANALYTIQUES_MR004.md` ;
- `cnil-mr004/01_dossier_mr004/02_checklist_conformite_mr004.md` ;
- `cnil-mr004/01_dossier_mr004/03_note_information_individuelle.md` ;
- `cnil-mr004/01_dossier_mr004/04_qualification_rniph_interet_public_base_legale.md` ;
- `cnil-mr004/01_dossier_mr004/05_donnees_sources_methodes.md` ;
- `cnil-mr004/01_dossier_mr004/06_acteurs_flux_responsabilites.md` ;
- `cnil-mr004/01_dossier_mr004/07_conservation_gouvernance.md` ;
- `cnil-mr004/01_dossier_mr004/08_securite_aipd.md`.

Annexes scientifiques de référence :

- `template/Genome_Reunion_synthese_scientifique (14) (6).html` ;
- `template/GENOME_REUNION_justification_choix_Sdiv.html` ;
- `template/METHODOLOGIE_validation_protocole_v1_5.html` ;
- `template/METHODOLOGIE_validation_annexeB_simulation_v1_5.html` ;
- `template/Genome_Reunion_synthese_infrastructure_v5_4.html` ;
- `template/architecture_pipeline.html`.

---

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
| POPgen pour 350 WGS | README + synthèse scientifique |
| Durée globale 36 mois | synthèse scientifique / plan économique |
| Circuit EFS → CRB | `CNIL_01_CIRCUIT_EFS_PRELEVEMENT.md` |
| Hypothèse RNIPH + MR-004 | `CNIL_02_QUALIFICATION_REGLEMENTAIRE.md` |
| Méthodes analytiques réglementaires | `CNIL_02C_METHODES_ANALYTIQUES_MR004.md` |
| Séparation de la ressource durable | plan CNIL + grille MR-004 |

---

# 23. Points à relire et compléter ensemble

## 23.1 Points institutionnels

- [ ] confirmer le responsable de traitement ;
- [ ] nommer formellement le responsable de mise en œuvre / responsable scientifique ;
- [ ] valider définitivement la qualification RNIPH ;
- [ ] confirmer la base légale RGPD ;
- [ ] vérifier l’engagement de conformité MR-004 du CHU.

## 23.2 Population / collecte

- [ ] formaliser l’âge d’inclusion éventuel ;
- [ ] décider si l’âge est transmis au CRB / recherche ;
- [ ] décider si le sexe est nécessaire ;
- [x] retenir la résidence à La Réunion et la naissance des deux parents à La Réunion comme critères d’inclusion ;
- [x] vérifier les critères de résidence et de naissance des deux parents sur simple déclaration du donneur lors de l’entretien EFS, sans justificatif ;
- [ ] formaliser avec l’EFS le support de traçabilité de l’éligibilité ;
- [x] retenir uniquement le point de collecte EFS comme donnée géographique transmise, sans adresse, commune ni quartier de résidence ;
- [x] ne pas recueillir les origines ethniques ou continentales déclarées ;
- [ ] formaliser les critères d’exclusion du protocole.

## 23.3 Méthodes

- [ ] confirmer la puce / nombre final de SNP ;
- [ ] confirmer la version finale de la stratégie 350 (322 + 28 ou ratio final issu de la validation) ;
- [ ] confirmer la liste finale des panels EGA ;
- [ ] définir la liste initiale des gènes / variants / recommandations pharmacogénétiques de référence à étudier au niveau populationnel ;
- [ ] confirmer le pipeline WGS et les formats effectivement conservés ;
- [ ] harmoniser le calendrier réglementaire avec le calendrier scientifique final.

## 23.4 Acteurs / flux

- [ ] qualifier juridiquement EFS ;
- [ ] qualifier juridiquement CRB ;
- [ ] qualifier POPgen ;
- [x] génotypage SNP réalisé en interne au CHU de La Réunion sur iScan Illumina ;
- [ ] finaliser les conventions et clauses RGPD.

## 23.5 Conservation / gouvernance / diffusion

- [ ] fixer les durées par catégorie de données ;
- [ ] fixer les durées du matériel biologique ;
- [ ] séparer formellement l’étude MR-004 de la ressource durable ;
- [ ] définir les seuils et règles de contrôle de divulgation applicables au portail public ;
- [ ] définir la politique de publication des variants rares / fondateurs ;
- [ ] définir le processus de validation d’un résultat avant publication sur le portail ;
- [ ] définir le DAC / accès chercheurs pour les données non publiques.

## 23.6 Volet familles

- [x] sélection par le CRB à partir de reliquats d’ADN déjà conservés ;
- [x] consentement recherche écrit et signé après information / discussion en consultation médicale ;
- [x] consentement couvrant les analyses de recherche nécessaires au volet ;
- [x] pseudonymisation par le CRB avant mise à disposition aux équipes ;
- [x] finalité limitée à l’amélioration / contrôle du phasage et aux transmissions mendéliennes ;
- [x] exclusion des familles des calculs de fréquences et de la description populationnelle des variants ;
- [ ] conserver la version applicable du formulaire de consentement comme preuve documentaire ;
- [ ] formaliser les critères techniques d’éligibilité des familles nucléaires ;
- [ ] validation institutionnelle finale de l’intégration au périmètre RNIPH / MR-004.

---

# 24. Position actuelle du protocole

Au stade de cette version 0.7.4, le corpus du dépôt et les décisions de conception permettent de décrire de manière cohérente :

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
- les exclusions du traitement initial.

Les principaux éléments encore manquants relèvent surtout des **arbitrages institutionnels, du dictionnaire final de données, des responsabilités, des durées de conservation, des contrats et de la définition formelle des règles de diffusion publique**, et non d’un manque de description scientifique du projet.