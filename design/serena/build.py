"""Build the self-contained Serena prototype (prototype.html).

Reads the page templates in this folder plus the real site content and
assets from the repo (photos, logos, icons, posts.json, reviews.json, legal
pages), resizes images and inlines everything as data URIs.

Usage: python3 design/serena/build.py   (requires Pillow)
"""

import base64
import io
import json
import re
from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
ASSETS = ROOT / 'src/_assets'
STATIC = ROOT / 'public/static'


def data_uri(img: Image.Image, fmt: str, quality: int = 70) -> str:
    buf = io.BytesIO()
    if fmt == 'jpeg':
        img.convert('RGB').save(buf, 'JPEG', quality=quality, optimize=True)
    else:
        img.save(buf, 'PNG', optimize=True)
    return f'data:image/{fmt};base64,' + base64.b64encode(buf.getvalue()).decode()


def photo(path: Path, size: int = 900, quality: int = 70) -> str:
    img = Image.open(path)
    img.thumbnail((size, size))
    return data_uri(img, 'jpeg', quality)


def logo(path: Path, box=(320, 120)) -> str:
    img = Image.open(path).convert('RGBA')
    img = img.crop(img.getbbox() or (0, 0, *img.size))
    img.thumbnail(box)
    return data_uri(img, 'png')


def icon(path: Path) -> str:
    img = Image.open(path).convert('RGBA')
    img.thumbnail((96, 96))
    return data_uri(img, 'png')


def legal_html(slug: str) -> str:
    """Convert a legal page's JSX body into plain HTML."""
    src = (ROOT / f'src/app/legal/{slug}/page.tsx').read_text()
    body = re.search(r'<div className="legalText">(.*)</div>\s*</Layout>', src, re.S).group(1)
    body = body.replace("{' '}", ' ').replace('className=', 'class=')
    body = re.sub(r'\{/\*.*?\*/\}', '', body, flags=re.S)
    body = re.sub(r'<h2 class="legalTextTitle">.*?</h2>', '', body, flags=re.S)
    return re.sub(r'\s+', ' ', body)


personal = ASSETS / 'pictures/personal'
logos = ASSETS / 'logos'
icons = ASSETS / 'icons'
collab = STATIC / 'collaborators'

press_logos = {
    name: logo(collab / f'{name}.webp', (360, 90))
    for name in ['laProvinciaLogo', 'sparLogo', 'canarias7Logo', 'cadenaSerLogo']
}
press_names = {
    'laProvinciaLogo': 'La Provincia',
    'sparLogo': 'Spar',
    'canarias7Logo': 'Canarias7',
    'cadenaSerLogo': 'Cadena SER',
}

# Brand logo is used as-is (white R + green leaf), only trimmed and resized
brand = Image.open(logos / 'logoVerdeBlanco.png').convert('RGBA')
brand = brand.crop(brand.getbbox())
brand.thumbnail((560, 200))

replacements = {
    'LOGO_WHITE': data_uri(brand, 'png'),
    'IMG_VERTICAL': photo(personal / 'roshniVertical.webp'),
    'IMG_HERO_CENTER': photo(personal / 'roshniHeroCenter.jpg'),
    'IMG_PROFILE2': photo(personal / 'roshniProfile2.webp'),
    'IMG_PROFILE3': photo(personal / 'roshniProfile3.webp'),
    'IMG_HERO_RIGHT': photo(personal / 'roshniHeroRight.webp', 1400, 72),
    'ICON_STOMACH': icon(icons / 'stomach.webp'),
    'ICON_INTOL': icon(icons / 'intolerance.webp'),
    'ICON_IMMUNE': icon(icons / 'immunity.webp'),
    'ICON_DIAB': icon(icons / 'diabetes.webp'),
    'ICON_FAT': icon(icons / 'fat.webp'),
    'POST1': photo(STATIC / 'blog/roshniHps2.webp', 700),
    'POST2': photo(STATIC / 'blog/beneficiosParaUnaDieta.webp', 700),
    'POST3': photo(STATIC / 'blog/roshniHps.webp', 700),
    'LOGO_LAPROVINCIA': press_logos['laProvinciaLogo'],
    'LOGO_SPAR': press_logos['sparLogo'],
    'LOGO_CANARIAS7': press_logos['canarias7Logo'],
    'LOGO_SER': press_logos['cadenaSerLogo'],
    'L_UNED': logo(logos / 'uned.webp'),
    'L_COMPLUTENSE': logo(logos / 'complutense.webp'),
    'L_CIME': logo(logos / 'cime.webp'),
    'L_EDRIA': logo(logos / 'edria.webp'),
    'L_FRESENIUS': logo(logos / 'fresenius.webp'),
    'L_HEBE': logo(logos / 'hebe.webp'),
    'L_HPS': logo(logos / 'hps.webp'),
    'LEGAL_AVISO': legal_html('aviso-legal'),
    'LEGAL_PRIV': legal_html('politica-de-privacidad'),
    'LEGAL_COOKIES': legal_html('politica-de-cookies'),
    'LEGAL_NAV': (
        '<span class="eyebrow">Legal</span><nav aria-label="Documentos legales">'
        '<a href="#aviso-legal">Aviso Legal</a>'
        '<a href="#politica-de-privacidad">Política de Privacidad</a>'
        '<a href="#politica-de-cookies">Política de Cookies</a></nav>'
    ),
}

posts = []
for p in json.loads((ROOT / 'src/app/blog/posts.json').read_text()):
    source = Path(p['collaboratorLogo']).stem if p['collaboratorLogo'] else ''
    posts.append({
        'title': p['title'],
        'description': p['description'],
        'link': p['link'],
        'image': photo(ROOT / 'public' / p['image'].lstrip('/'), 640, 65),
        'logo': press_logos.get(source, ''),
        'source': press_names.get(source, ''),
    })
replacements['POSTS_JSON'] = json.dumps(posts, ensure_ascii=False)

reviews = json.loads((ROOT / 'src/_components/RotatingReviews/reviews.json').read_text())
replacements['REVIEWS_JSON'] = json.dumps(
    [{'autor': r['autor'], 'text': r['text']} for r in reviews], ensure_ascii=False
)

html = (HERE / 'index.src.html').read_text()
html = html.replace('{{NEW_PAGES}}', (HERE / 'pages.src.html').read_text())
for key, value in replacements.items():
    html = html.replace('{{%s}}' % key, value)

leftover = re.findall(r'\{\{[A-Z_0-9]+\}\}', html)
assert not leftover, f'Unfilled placeholders: {leftover}'

(HERE / 'prototype.html').write_text(html)
print(f'Built {HERE / "prototype.html"} ({len(html) / 1e6:.1f} MB)')
