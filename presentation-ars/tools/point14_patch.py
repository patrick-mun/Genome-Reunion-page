from pathlib import Path

path = Path('presentation-ars/CONTENU_SLIDES.md')
md = path.read_text(encoding='utf-8')

replacements = [
    (
        'plus clair sur ~25-30 minutes, + 4 annexes inchangées.',
        'plus clair sur ~25-30 minutes, + 3 annexes prévues (A, C, D) ; l’ancienne annexe B a été fusionnée dans le corps de la présentation.',
    ),
    (
        '12. Alignement avec le PRS 2023-2033 (matrice ancrée sur 4 priorités numérotées réelles) *(code 14)*',
        '12. Alignement avec le PRS 2023-2033 (1 ancrage direct vérifié + 3 convergences thématiques) *(code 14)*',
    ),
    (
        '### Annexes (inchangées)\nA. Méthodologie de sélection détaillée\nB. *(fusionnée dans la slide 9 principale — annexe B supprimée)*\nC. Pharmacogénétique : de la preuve au déploiement\nD. Test de résistance rapide (Q&A par direction ARS)',
        '### Annexes prévues\nA. Méthodologie de sélection détaillée\nC. Pharmacogénétique : de la preuve au déploiement\nD. Test de résistance rapide (Q&A par direction ARS)\n\n*Ancienne annexe B : fusionnée dans la slide 9 principale et supprimée comme annexe autonome.*',
    ),
]

for old, new in replacements:
    if old not in md:
        raise SystemExit(f'Marker not found: {old[:100]}')
    md = md.replace(old, new, 1)

path.write_text(md, encoding='utf-8')
