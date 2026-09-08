from pathlib import Path

html_path = Path('presentation-ars/index.html')
md_path = Path('presentation-ars/CONTENU_SLIDES.md')
html = html_path.read_text(encoding='utf-8')
md = md_path.read_text(encoding='utf-8')

replacements_html = [
    (
        'data-notes="Une trajectoire, pas une annonce — la décision thérapeutique reste médicale."',
        'data-notes="Trajectoire prospective conditionnée par la faisabilité, la validation locale et une décision institutionnelle ; la décision thérapeutique reste médicale."',
    ),
    (
        '<h1 class="slide-title" style="font-size:38px;">Vers une plateforme régionale de sécurisation thérapeutique</h1>',
        '<h1 class="slide-title" style="font-size:38px;">Une trajectoire possible vers la sécurisation thérapeutique</h1>',
    ),
    (
        '<p class="safety-text">La plateforme fournirait une aide à la décision ; la décision thérapeutique resterait médicale.</p>',
        '<p class="safety-text">Un éventuel outil régional d’aide à la décision ne serait envisagé qu’après validation locale et décision institutionnelle ; la décision thérapeutique resterait médicale.</p>',
    ),
]
for old, new in replacements_html:
    if old not in html:
        raise SystemExit(f'HTML marker not found: {old[:90]}')
    html = html.replace(old, new, 1)

replacements_md = [
    (
        '17. Trajectoire vers une plateforme régionale de sécurisation thérapeutique *(code 20)*',
        '17. Trajectoire possible vers la sécurisation thérapeutique *(code 20)*',
    ),
    (
        '> Vers une plateforme régionale de sécurisation thérapeutique',
        '> Une trajectoire possible vers la sécurisation thérapeutique',
    ),
    (
        'Reprend PREPARE / U-PGx (slide 16) comme précédent de plateforme de pharmacogénétique préemptive à l\'échelle d\'un système de santé.',
        'Reprend PREPARE / U-PGx (slide 16) comme précédent d\'implémentation d\'une stratégie pharmacogénétique préemptive à l\'échelle d\'un système de santé ; cela ne préjuge pas de la forme d\'un éventuel dispositif réunionnais.',
    ),
]
for old, new in replacements_md:
    if old not in md:
        raise SystemExit(f'MD marker not found: {old[:90]}')
    md = md.replace(old, new, 1)

old_oral = """Je veux montrer où cette logique peut mener, à long terme, sans la présenter comme déjà acquise — c'est une trajectoire, pas une annonce.

À partir des fréquences pharmacogénétiques locales et de la priorisation que je viens de décrire, l'étape suivante serait des études cliniques ciblées, menées avec le CHU, les généticiens, les pharmacologues et l'OMEDIT, pour valider localement l'intérêt de certains couples gène-médicament. Ce n'est qu'après cette validation qu'on pourrait envisager une intégration dans une aide à la décision clinique — par exemple une alerte contextualisée au moment de la prescription.

Je le dis clairement, parce que c'est un point sur lequel nous ne voulons laisser aucune ambiguïté : nous ne proposons pas aujourd'hui un système qui adapterait automatiquement une dose. Nous proposons une trajectoire : connaissance, puis validation, puis seulement, éventuellement, intégration dans une aide à la décision. La décision thérapeutique resterait, à chaque étape, une décision médicale."""
new_oral = """Je veux montrer une trajectoire possible, pas annoncer une plateforme déjà décidée.

À partir des fréquences pharmacogénétiques locales et de la priorisation que je viens de décrire, l'étape suivante serait d'abord une étude de faisabilité puis, si elle est concluante, des études cliniques ciblées avec le CHU, les généticiens, les pharmacologues et l'OMEDIT. L'objectif serait de valider localement l'intérêt de quelques couples gène-médicament prioritaires.

Ce n'est qu'après cette validation, et après une décision institutionnelle sur l'opportunité, la gouvernance et l'intégration au système de soins, qu'un éventuel outil d'aide à la décision pourrait être envisagé. Nous ne proposons donc pas aujourd'hui un système qui adapterait automatiquement une dose : nous proposons une séquence connaissance, faisabilité, validation, puis décision. La décision thérapeutique resterait, à chaque étape, une décision médicale."""
if old_oral not in md:
    raise SystemExit('Oral block not found in CONTENU_SLIDES.md')
md = md.replace(old_oral, new_oral, 1)

html_path.write_text(html, encoding='utf-8')
md_path.write_text(md, encoding='utf-8')
