# Huisstijl — Digital Promises / digitalinfrastructures.nl

Canonieke huisstijlbron. Andere repo's/agents verwijzen hierheen in plaats van
de stijl zelf te herdefiniëren.

## Namen
- Boektitel: **Digital Promises**
- Site-title (Hugo `title`): "Digital Infrastructures at Scale"
- Profile-tagline: "value, power, and risk in digital infrastructures at scale"
- Domein: digitalinfrastructures.nl

## Typografie
- Body: **Spectral** (serif) — `.post-content`, 20px, line-height 1.68
- Headings/chrome: **Titillium Web** (sans-serif), fallback `Segoe UI` —
  titels, `.book-toc-act`, `.book-nav a`, `.logo a`, `#menu a`, breadcrumbs,
  post-meta, tags, toc, footer. Letter-spacing -0.01em, font-weight 600 op
  titels/labels.
- Print (PDF): zelfde paar — `mainfont: Spectral`, `sansfont: Titillium Web`
  (vervangt theme-default Linux Libertine).
- Beslist 2026-08-20/21 na vergelijkende pass (Spectral/Newsreader/Frank Ruhl
  Libre body × IBM Plex Sans/Titillium Web/etc. headers). Niet heroverwegen
  zonder expliciet verzoek — zie Rationale onderaan.

**Implementatie:**
- Web: `assets/css/extended/fonts-typography.css` (dit repo); font `<link>`
  tags in `layouts/partials/extend_head.html` (geen CSS `@import` — breekt
  stil door Hugo's asset-bundling-volgorde).
- Print: `print/metadata.yaml` + `print/header.tex`.

## Kleuren
Geen eigen kleurenpalet — standaard PaperMod-thema (licht/donker, auto via
`prefers-color-scheme`), geen overrides in `assets/css/extended/`. Wie een
kleurkeuze nodig heeft: begin bij de PaperMod-thema-variabelen
(`themes/PaperMod/assets/css/core/`), niet bij een eigen schema.

## Beeldmerk
- Favicon: `static/favicon.ico`
- Profielfoto homepage: `static/craiyonmushrooms.png` (500×500)
- Geen los logo-bestand — site-naam in Titillium Web is het "logo".

## Schrijfstijl (boekproza, Chicago-nonfictie-defaults)
- Aanhalingstekens: dubbel (`"…"`) primair, ook voor scare-quotes; enkel
  alleen genest. Blockquotes laten de wrapping-quotes weg.
- Cursief: alleen eerste definiërende gebruik van een term, booktitels,
  vreemde woorden, epigraaf-achtige eenregelige citaten — niet voor
  substantiële meerzinnige citaten.
- Kopjes: sentence case (titel + section headers), alleen eerste woord en
  eigennamen/acroniemen met hoofdletter. Act-titels: `Act I — What you
  stand on` (hoofdletter na het em-dash).
- Unit-body start interne kopjes op `###` (niet `##` — print-collatie
  genereert zelf een `##` uit de front-matter-titel).
- Spelling: Amerikaans Engels (`-ize`, `-or`, `-yze`), bij twijfel de meer
  internationaal gangbare vorm.

## Rationale (waarom, niet heropenen zonder expliciet verzoek)
- Body-font: analytisch/gestructureerd i.p.v. "luchtig" (Newsreader
  afgewezen op dat punt).
- Heading-font: industrieel/civiele-infrastructuur-associatie i.p.v.
  corporate-tech (IBM Plex Sans afgewezen ondanks goede fit, te sterk
  "IBM's font"); Titillium Web won ook omdat het een echte, betrouwbare
  Google Font is (in tegenstelling tot Bahnschrift, die alleen lokaal
  geïnstalleerd rendert).
