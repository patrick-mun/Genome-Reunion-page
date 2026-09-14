from pathlib import Path

path = Path('presentation-ars/index.html')
html = path.read_text(encoding='utf-8')

old = '''        <div class="hero-eyebrow">Merci</div>
        <h1 class="hero-title">Merci de votre attention</h1>
        <p class="hero-hook">Représenter la diversité réunionnaise pour une médecine génomique plus pertinente et plus équitable — avec vous.</p>
        <p class="hero-subtitle" style="max-width:820px;margin-top:24px;">Laboratoire de Génétique, CHU de La Réunion<br>genome.reunion@chu-reunion.fr</p>'''

new = '''        <div class="hero-eyebrow">Merci</div>
        <h1 class="hero-title">Merci de votre attention</h1>
        <p class="hero-hook">Représenter la diversité réunionnaise pour une médecine génomique plus pertinente et plus équitable — avec vous.</p>
        <div style="display:flex;justify-content:center;gap:28px;flex-wrap:wrap;margin-top:22px;width:100%;max-width:980px;">
          <div class="team-card" style="flex:1;min-width:240px;max-width:300px;">
            <div class="team-avatar" style="background:var(--teal);">BD</div>
            <div class="team-name">Pr Bérénice Doray</div>
            <div class="team-role">Cheffe de service, Génétique — CHU de La Réunion</div>
          </div>
          <div class="team-card" style="flex:1;min-width:240px;max-width:300px;">
            <div class="team-avatar" style="background:var(--coral);">PM</div>
            <div class="team-name">Patrick Munier</div>
            <div class="team-role">Coordination du projet Génome Réunion</div>
          </div>
          <div class="team-card" style="flex:1;min-width:240px;max-width:300px;">
            <div class="team-avatar" style="background:var(--navy);border:1px solid rgba(255,255,255,0.2);">TH</div>
            <div class="team-name">Dr Thomas Huby</div>
            <div class="team-role">Coordination du projet Génome Réunion — Référent scientifique</div>
          </div>
        </div>
        <p class="hero-subtitle" style="max-width:820px;margin-top:20px;">Laboratoire de Génétique, CHU de La Réunion<br>genome.reunion@chu-reunion.fr</p>'''

if old not in html:
    raise SystemExit('Slide 25 closing block not found')

html = html.replace(old, new, 1)
path.write_text(html, encoding='utf-8')
