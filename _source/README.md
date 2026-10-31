# Rebuilding the East Asia trip page

`..\index.html` is generated — edit the files here, then run:

```
python build.py
```

(needs Python with Pillow: `python -m pip install --user pillow`)

- `content_base.js` — hero portraits, route legs, shared helpers
- `content_korea.js`, `content_japan1.js` (Tokyo/Osaka/Kobe), `content_japan2.js` (Nara → Fukuoka),
  `content_hongkong.js` — the days, places, stays, dining and the detail pop-ups for each region
- `template.html` — layout and styling; `render.js` — builds the page from the content
- `research\*.json` — fact-checked notes and the photo list per region; `photos\` — the web-sized photos
- `map.svg` — the route map
- Portraits are read straight from `..\..\Aoife Portrait Photos` (`image_N` Korean,
  `japanese_geisha_N` Japanese, `portrait_N_*` Hong Kong).

In the content files, `images: ['sensoji']` uses every photo for that key and `'sensoji#2'` just the second.
