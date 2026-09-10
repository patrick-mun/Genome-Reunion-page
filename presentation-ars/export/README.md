# Export PDF de secours — Présentation ARS La Réunion

Génère `Presentation_ARS_La_Reunion.pdf`, un PDF paysage (16:9, une slide par page) à
utiliser en cas de coupure réseau, de panne de projecteur, ou pour l'envoyer par email
avant la réunion. C'est une image pure de chaque écran : pas de barre de navigation,
pas de notes orateur.

## Régénérer le PDF

À chaque modification du diaporama (`../index.html`, `../css/`, `../js/`), regénérer le
PDF pour qu'il reste synchronisé :

```bash
cd presentation-ars/export
npm install        # une seule fois
npm run export
```

Le script démarre son propre petit serveur local (pas besoin d'en lancer un séparément),
capture chaque slide via Chromium headless (Playwright) au format d'impression natif du
navigateur (texte et vecteurs nets, pas une capture d'écran rasterisée), puis fusionne le
tout en un seul PDF avec `pdf-lib`.
