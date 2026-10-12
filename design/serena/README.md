# Serena redesign prototype

Static HTML prototype for the "Clínica serena" redesign. It covers the home
page, Sobre mí, Blog, Contacto and the legal pages. All content comes from the
current site.

- `index.src.html`: home page, shared styles, navbar, mobile menu, footer and scripts
- `pages.src.html`: inner pages (Sobre mí, Blog, Contacto, legal)
- `build.py`: inlines real assets and content from the repo into `prototype.html`
- `prototype.html`: generated, self-contained, open it directly in a browser

Rebuild after editing the templates or the site content:

```sh
python3 design/serena/build.py   # requires Pillow
```

Pages are switched with the URL hash (`#conoceme`, `#blog`, `#contacto`,
`#aviso-legal`, …). Any other hash scrolls to that section on the page that
contains it.
