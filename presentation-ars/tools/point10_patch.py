from pathlib import Path

html_path = Path('presentation-ars/index.html')
md_path = Path('presentation-ars/CONTENU_SLIDES.md')
html = html_path.read_text(encoding='utf-8')
md = md_path.read_text(encoding='utf-8')

anchor_html = '''      <p class="pivot-quote pivot-quote--sm" style="text-align:center;">L'objectif n'est pas de tester tout le monde pour tout. L'objectif est d'identifier les quelques situations où la pharmacogénétique pourrait avoir le plus fort intérêt local.</p>
      <div class="callout callout--navy">'''
replacement_html = '''      <p class="pivot-quote pivot-quote--sm" style="text-align:center;">L'objectif n'est pas de tester tout le monde pour tout. L'objectif est d'identifier les quelques situations où la pharmacogénétique pourrait avoir le plus fort intérêt local.</p>
      <p class="text-small" style="text-align:center;margin-top:-2px;color:var(--muted);"><strong style="color:var(--navy);">Articulation sanitaire potentielle :</strong> ARS La Réunion · OMEDIT La Réunion</p>
      <div class="callout callout--navy">'''
if anchor_html not in html:
    raise SystemExit('Slide 19 HTML anchor not found')
html = html.replace(anchor_html, replacement_html, 1)

anchor_md = '''**Message clé**
> L'objectif n'est pas de tester tout le monde pour tout. L'objectif est d'identifier les quelques situations où la pharmacogénétique pourrait avoir le plus fort intérêt local.

**Référence démonstratrice (encart discret)**'''
replacement_md = '''**Message clé**
> L'objectif n'est pas de tester tout le monde pour tout. L'objectif est d'identifier les quelques situations où la pharmacogénétique pourrait avoir le plus fort intérêt local.

**Articulation sanitaire potentielle**
> ARS La Réunion · OMEDIT La Réunion — lien avec le bon usage du médicament, la prévention de l'iatrogénie et l'évaluation d'éventuelles priorités régionales.

**Référence démonstratrice (encart discret)**'''
if anchor_md not in md:
    raise SystemExit('Slide 19 MD anchor not found')
md = md.replace(anchor_md, replacement_md, 1)

oral_anchor = '''Le nombre de couples gène-médicament potentiellement intéressants est considérable. Une stratégie utile pour l'ARS doit faire l'inverse d'une approche exhaustive : partir du niveau de preuve clinique, du médicament réellement prescrit à La Réunion, de la fréquence locale du profil génétique concerné, et de la gravité du risque, pour ne retenir que les situations réellement prioritaires.

Dans PREPARE,'''
oral_replacement = '''Le nombre de couples gène-médicament potentiellement intéressants est considérable. Une stratégie utile pour l'ARS doit faire l'inverse d'une approche exhaustive : partir du niveau de preuve clinique, du médicament réellement prescrit à La Réunion, de la fréquence locale du profil génétique concerné, et de la gravité du risque, pour ne retenir que les situations réellement prioritaires.

C'est précisément à ce niveau que l'ARS et l'OMEDIT peuvent constituer une articulation sanitaire pertinente : relier les données populationnelles au bon usage du médicament, à la prévention de l'iatrogénie et à l'identification de quelques priorités régionales à évaluer.

Dans PREPARE,'''
if oral_anchor not in md:
    raise SystemExit('Slide 19 oral anchor not found')
md = md.replace(oral_anchor, oral_replacement, 1)

html_path.write_text(html, encoding='utf-8')
md_path.write_text(md, encoding='utf-8')
