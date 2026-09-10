# Export PDF de secours — Présentation DRCI (31/07/2026)

Génère `Presentation_DRCI_31-07-2026.pdf`, un PDF paysage (16:9, une slide par page) à
utiliser en cas de coupure réseau, ou pour l'envoyer par email avant une réunion. C'est
une image pure de chaque écran : pas de barre de navigation, pas de notes orateur.

Ce diaporama (support présenté à la DRCI le 31/07/2026, lié depuis
[`template/presentation.html`](../template/presentation.html)) vit dans un dépôt séparé :
[patrick-mun/drci_reunnion_projet](https://github.com/patrick-mun/drci_reunnion_projet),
publié sur https://patrick-mun.github.io/drci_reunnion_projet/. Ce dossier ne contient
donc pas le diaporama lui-même, seulement l'outil d'export et le PDF déjà généré.

## Régénérer le PDF

```bash
git clone https://github.com/patrick-mun/drci_reunnion_projet.git /tmp/drci_reunnion_projet

cd drci-presentation-export
npm install        # une seule fois
node export-pdf.js /tmp/drci_reunnion_projet
```

Le script démarre son propre serveur local à partir du clone fourni, capture chaque slide
via l'impression native de Chromium headless (Playwright — texte et vecteurs nets, pas
une capture d'écran rasterisée), puis fusionne le tout en un seul PDF avec `pdf-lib`.
