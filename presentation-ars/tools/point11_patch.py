from pathlib import Path

html_path = Path('presentation-ars/index.html')
md_path = Path('presentation-ars/CONTENU_SLIDES.md')
html = html_path.read_text(encoding='utf-8')
md = md_path.read_text(encoding='utf-8')

# Slide 2: the fourth act now runs through the closing screen 25.
old_html = '<div class="toc-headrow"><h2>Une gouvernance</h2><span class="toc-range">Slides 21 → 24</span></div>'
new_html = '<div class="toc-headrow"><h2>Une gouvernance</h2><span class="toc-range">Slides 21 → 25</span></div>'
if old_html not in html:
    raise SystemExit('Slide 2 range marker not found')
html = html.replace(old_html, new_html, 1)

replacements = [
    (
        'Le diaporama compte donc désormais **24 slides dans le code** (20 slides de contenu + 4\ntransitions), même si la numérotation ci-dessous reste celle du contenu (1-20) pour ne pas\nperturber le suivi de validation.',
        'Le diaporama affiche désormais **25 écrans dans le code** : 20 slides de contenu + 4\ntransitions + 1 slide de clôture / remerciements. La numérotation ci-dessous reste celle du\ncontenu (1-20) pour ne pas perturber le suivi de validation.',
    ),
    (
        'Numérotation ci-dessous = contenu (1-20, cette section). Position réelle dans le code\n(1-24, avec les 4 transitions) entre parenthèses.',
        'Numérotation ci-dessous = contenu (1-20, cette section). Position réelle dans le code\n(1-25, avec les 4 transitions et la slide de clôture) entre parenthèses.',
    ),
    (
        "### Acte 4 — Rassurer et engager l'ARS (contenu 18-20 → code 22-24)\n- *Transition « Partie 4 » (code 21)*\n18. Éthique, données et gouvernance *(code 22)*\n19. Répartition des rôles (CHU / Région / État / ARS) *(code 23)*\n20. Conclusion et demande institutionnelle à l'ARS *(code 24)*",
        "### Acte 4 — Rassurer et engager l'ARS (contenu 18-20 → code 22-24, clôture code 25)\n- *Transition « Partie 4 » (code 21)*\n18. Éthique, données et gouvernance *(code 22)*\n19. Répartition des rôles (CHU / Région / État / ARS) *(code 23)*\n20. Conclusion et demande institutionnelle à l'ARS *(code 24)*\n- *Clôture / remerciements (code 25)*",
    ),
]

for old, new in replacements:
    if old not in md:
        raise SystemExit(f'MD marker not found: {old[:90]}')
    md = md.replace(old, new, 1)

html_path.write_text(html, encoding='utf-8')
md_path.write_text(md, encoding='utf-8')
