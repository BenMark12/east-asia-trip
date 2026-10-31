"""Build the single-file East Asia itinerary page.

Inputs : template.html, render.js, content_*.js (this folder), research/*.json manifests + downloaded
         images (scratchpad), portraits from 'C:\\Dev\\Asia Trip\\Aoife Portrait Photos'.
Output : C:\\Dev\\Asia Trip\\East-Asia-Trip\\index.html  (everything embedded, like the original)

Hong Kong portraits: files named portrait_N_*.png (or containing 'hong' / 'hk_') in the portrait folder;
if none are present, neon-sign placeholders are generated instead.
"""
import base64, glob, io, json, os, re, site, sys

sys.path.append(site.getusersitepackages())
from PIL import Image, ImageOps

HERE = os.path.dirname(os.path.abspath(__file__))
# Two layouts: the project copy (East-Asia-Trip\_source, with research\ and photos\ beside this
# script) or the original working folder the research was gathered in.
SOURCE_MODE = os.path.isdir(os.path.join(HERE, 'research'))
SP = HERE if SOURCE_MODE else os.path.dirname(os.path.dirname(HERE))
PORTRAIT_DIR = r'C:\Dev\Asia Trip\Aoife Portrait Photos'
OUT_DIR = os.path.dirname(HERE) if SOURCE_MODE else r'C:\Dev\Asia Trip\East-Asia-Trip'
MAP_SVG = os.path.join(HERE, 'map.svg') if SOURCE_MODE else os.path.join(SP, 'build', 'map.svg')
CACHE = os.path.join(HERE, '.cache') if SOURCE_MODE else os.path.join(SP, 'build', 'cache')
SOURCES_TXT = os.path.join(HERE if SOURCE_MODE else os.path.join(SP, 'build'), 'image_sources.txt')

def read(p):
    with open(p, encoding='utf-8') as f:
        return f.read()

def to_data_uri(im, max_w, quality, max_h=None):
    im = ImageOps.exif_transpose(im)
    if im.mode not in ('RGB',):
        bg = Image.new('RGB', im.size, (29, 31, 43))
        if im.mode in ('RGBA', 'LA', 'P'):
            im = im.convert('RGBA')
            bg.paste(im, mask=im.split()[-1])
            im = bg
        else:
            im = im.convert('RGB')
    w, h = im.size
    scale = min(1.0, max_w / w, (max_h / h) if max_h else 1.0)
    if scale < 1.0:
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, 'WEBP', quality=quality, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()

# ---------- web photos from research manifests ----------
EXTRA = os.path.join(HERE, 'extra_images.json')   # optional manual additions / overrides
images, sources, total = {}, [], 0
manifests = sorted(glob.glob(os.path.join(SP, 'research', '*.json')))
entries = {}
for m in manifests:
    data = json.loads(read(m))
    for key, lst in (data.get('images') or {}).items():
        entries.setdefault(key, []).extend(lst)
if os.path.exists(EXTRA):
    extra = json.loads(read(EXTRA))
    for key, lst in extra.get('replace', {}).items():
        entries[key] = lst
    for key, lst in extra.get('add', {}).items():
        entries.setdefault(key, []).extend(lst)
    for f in extra.get('exclude', []):
        for key in entries:
            entries[key] = [e for e in entries[key] if os.path.basename(e['file']) != f]
# Only embed photos the content actually references ('key' = all of them, 'key#n' = the nth).
CONTENT_FILES = ['content_base.js', 'content_korea.js', 'content_japan1.js', 'content_japan2.js', 'content_hongkong.js', 'content_final.js']
content_src = '\n'.join(read(os.path.join(HERE, f)) for f in CONTENT_FILES if os.path.exists(os.path.join(HERE, f)))
wanted = {}
for arr in re.findall(r"images:\s*\[([^\]]*)\]", content_src) + re.findall(r"img:\s*('[^']*')", content_src):
    for ref in re.findall(r"'([^']+)'", arr):
        k, _, n = ref.partition('#')
        wanted.setdefault(k, set()).add(int(n) if n else 'all')
os.makedirs(CACHE, exist_ok=True)
PHOTO_W, PHOTO_H, PHOTO_Q = 800, 600, 54
def photo_uri(path):
    if path.lower().endswith('.webp'):   # already web-sized (project copy) — embed as-is
        with open(path, 'rb') as f:
            return 'data:image/webp;base64,' + base64.b64encode(f.read()).decode()
    st = os.stat(path)
    tag = re.sub(r'[^A-Za-z0-9]', '_', os.path.basename(path)) + f'_{int(st.st_mtime)}_{st.st_size}_{PHOTO_W}_{PHOTO_H}_{PHOTO_Q}.txt'
    cp = os.path.join(CACHE, tag)
    if os.path.exists(cp):
        return read(cp)
    with Image.open(path) as im:
        im.load()
        uri = to_data_uri(im, PHOTO_W, PHOTO_Q, max_h=PHOTO_H)
    with open(cp, 'w', encoding='utf-8') as f:
        f.write(uri)
    return uri
for key, lst in entries.items():
    want = wanted.get(key, set())
    for i, e in enumerate(lst):
        slot = images.setdefault(key, [])
        path = e['file'] if os.path.isabs(e['file']) else os.path.join(SP, e['file'])
        if not ('all' in want or (i + 1) in want):
            slot.append(None)          # keep positions stable for 'key#n' references
            continue
        if not os.path.exists(path):
            print('  missing image', key, path)
            slot.append(None)
            continue
        try:
            uri = photo_uri(path)
        except Exception as ex:
            print('  bad image', key, path, ex)
            slot.append(None)
            continue
        total += len(uri)
        slot.append({'src': uri, 'caption': e.get('caption', '')})
        sources.append((key, e.get('caption', ''), e.get('source_url', ''), e.get('credit', '')))
for k in sorted(set(wanted) - set(entries)):
    print('  referenced but no photos:', k)
print(f'photos: {len(sources)} embedded in {len(images)} keys, {total/1e6:.2f} MB')

# ---------- portraits ----------
def num(p):
    m = re.search(r'(\d+)', os.path.basename(p).split('(')[0])
    return int(m.group(1)) if m else 0

files = sorted(glob.glob(os.path.join(PORTRAIT_DIR, '*.png')) + glob.glob(os.path.join(PORTRAIT_DIR, '*.jp*g')) +
               glob.glob(os.path.join(PORTRAIT_DIR, '*.webp')))
hk_files = [f for f in files if re.search(r'hong|hk[_\- ]|^portrait_', os.path.basename(f), re.I)]
ja_files = [f for f in files if re.search(r'geisha|japan', os.path.basename(f), re.I)]
ko_files = [f for f in files if f not in hk_files and f not in ja_files and re.match(r'image_', os.path.basename(f), re.I)]
portraits = {}
for prefix, lst in (('ko', ko_files), ('ja', ja_files), ('hk', hk_files)):
    for i, f in enumerate(sorted(lst, key=num)):
        with Image.open(f) as im:
            im.load()
            portraits[f'{prefix}{i + 1}'] = {'src': to_data_uri(im, 320, 82), 'alt': ''}

NEON = ['香港', '太平山', '中環', '淺水灣', '維港', '飲茶', '酒店', '再見']
NEON_EN = ['HONG KONG', 'THE PEAK', 'CENTRAL', 'REPULSE BAY', 'HARBOUR', 'YUM CHA', 'HOTEL', 'GOODBYE']
def neon_svg(i):
    zh, en = NEON[i], NEON_EN[i]
    n = len(zh)
    step = 62 if n <= 2 else 54
    top = 120 if n <= 2 else 92
    h = step * n + 34
    chars = ''.join(f'<text x="170" y="{top + 40 + k * step}" text-anchor="middle">{c}</text>' for k, c in enumerate(zh))
    windows = ''.join(f'<rect x="{x}" y="{y}" width="4" height="5" fill="#ffd27a" opacity="{0.35 + ((x * 7 + y * 3) % 10) / 20:.2f}"/>'
                      for x in range(14, 330, 13) for y in range(430, 540, 14) if (x * 31 + y * 17) % 5 < 2)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 545" width="340" height="545">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#241238"/><stop offset="0.6" stop-color="#120c22"/><stop offset="1" stop-color="#07060d"/></linearGradient>
<filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<filter id="glow2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
<rect width="340" height="545" fill="url(#g)"/>
<circle cx="268" cy="70" r="26" fill="#f4ead2" opacity="0.18"/>
<path d="M0 545V470h20v-40h18v20h16v-70h24v50h14v-30h20v80h18v-120l14-14 14 14v120h16v-60h22v40h18v-90h26v100h16v-40h20v70h22v-30h18v-60h14v120z" fill="#05040a"/>
{windows}
<rect x="{170 - 52}" y="{top - 18}" width="104" height="{h}" rx="10" fill="#1a0b1e" stroke="#ff4f9a" stroke-width="3.5" filter="url(#glow)"/>
<g font-family="'Noto Serif TC','Songti TC','PMingLiU','MingLiU','Microsoft JhengHei',serif" font-size="{50 if n <= 2 else 44}" font-weight="700" fill="#ffd6ea" filter="url(#glow)">{chars}</g>
<rect x="60" y="{top + h + 4}" width="220" height="40" rx="6" fill="#0d1a17" stroke="#3ff2c1" stroke-width="2.5" filter="url(#glow2)"/>
<text x="170" y="{top + h + 31}" text-anchor="middle" font-family="Georgia,serif" font-size="18" letter-spacing="5" fill="#b9ffe9" filter="url(#glow2)">{en}</text>
</svg>'''
    return 'data:image/svg+xml;base64,' + base64.b64encode(svg.encode('utf-8')).decode()

if not hk_files:
    for i in range(8):
        portraits[f'hk{i + 1}'] = {'src': neon_svg(i), 'alt': 'Hong Kong neon sign'}
else:  # cycle real portraits if fewer than 8
    real = [portraits[f'hk{i + 1}'] for i in range(len(hk_files))]
    for i in range(8):
        portraits[f'hk{i + 1}'] = real[i % len(real)]
print('portraits:', {p: sum(1 for k in portraits if k.startswith(p)) for p in ('ko', 'ja', 'hk')},
      '(HK placeholders)' if not hk_files else '(HK real)')

# ---------- ornaments ----------
DIVIDER = '''<div class="divider" aria-hidden="true">
  <svg viewBox="0 0 560 44" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round">
      <path d="M40 22 H210"/><path d="M350 22 H520"/>
      <path d="M90 22 a14 14 0 0 1 28 0 a14 14 0 0 1 28 0 a14 14 0 0 1 28 0"/>
      <path d="M100 22 a4 4 0 0 1 8 0 M128 22 a4 4 0 0 1 8 0 M156 22 a4 4 0 0 1 8 0"/>
      <path d="M386 22 a14 14 0 0 1 28 0 a14 14 0 0 1 28 0 a14 14 0 0 1 28 0"/>
      <path d="M396 22 a4 4 0 0 1 8 0 M424 22 a4 4 0 0 1 8 0 M452 22 a4 4 0 0 1 8 0"/>
      <path d="M210 22 q10 -12 22 -6 q-8 4 -4 10 M350 22 q-10 -12 -22 -6 q8 4 4 10"/>
      <circle cx="280" cy="22" r="19"/>
    </g>
    <g transform="translate(280 22)" fill="#c8442c">
      <circle cx="0" cy="-7.2" r="5"/><circle cx="6.85" cy="-2.2" r="5"/><circle cx="4.23" cy="5.83" r="5"/><circle cx="-4.23" cy="5.83" r="5"/><circle cx="-6.85" cy="-2.2" r="5"/>
      <circle r="2.6" fill="#f5efe3"/>
    </g>
    <circle cx="24" cy="22" r="3" fill="currentColor"/><circle cx="536" cy="22" r="3" fill="currentColor"/>
  </svg>
</div>'''
CORNER_SVG = '''<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="0.9" stroke-linecap="square">
  <path d="M4 86V4H86"/><path d="M12 86V12H86"/>
  <path d="M20 60V20H60V44H36V32H48"/>
  <path d="M20 74V68M74 20H68"/>
  <circle cx="30" cy="74" r="2.2" fill="currentColor"/><circle cx="74" cy="30" r="2.2" fill="currentColor"/>
</g></svg>'''
corner = lambda pos: f'<div class="corner-orn {pos}" aria-hidden="true">{CORNER_SVG}</div>'

# ---------- assemble ----------
tpl = read(os.path.join(HERE, 'template.html'))
credits, seen = [], set()
for key, cap, url, credit in sources:
    if (cap, url) not in seen:
        seen.add((cap, url))
        credits.append([cap, credit, url])
data_js = ('const IMAGES = ' + json.dumps(images, ensure_ascii=False) + ';\n' +
           'const PORTRAITS = ' + json.dumps(portraits, ensure_ascii=False) + ';\n' +
           'const CREDITS = ' + json.dumps(credits, ensure_ascii=False) + ';')
out = (tpl.replace('{{MAP_SVG}}', read(MAP_SVG))
          .replace('{{DIVIDER}}', DIVIDER)
          .replace('{{CORNER_TL}}', corner('tl')).replace('{{CORNER_TR}}', corner('tr')).replace('{{CORNER_BR}}', corner('br'))
          .replace('{{DATA_SCRIPT}}', data_js)
          .replace('{{CONTENT_SCRIPT}}', content_src)
          .replace('{{RENDER_SCRIPT}}', read(os.path.join(HERE, 'render.js'))))
assert '{{' not in out.replace('${', ''), 'unreplaced placeholder'
os.makedirs(OUT_DIR, exist_ok=True)
with open(os.path.join(OUT_DIR, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(out)
with open(SOURCES_TXT, 'w', encoding='utf-8') as f:
    for s in sources:
        f.write(' | '.join(s) + '\n')
print(f'wrote {os.path.join(OUT_DIR, "index.html")}  ({len(out)/1e6:.2f} MB)')
