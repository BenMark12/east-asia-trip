// === RENDERING (reads IMAGES, PORTRAITS and the content objects) ===
const COUNTRY_LABEL = {
  korea: { en: 'South Korea', cjk: '한국' },
  japan: { en: 'Japan', cjk: '日本' },
  hongkong: { en: 'Hong Kong', cjk: '香港' },
};
const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

function esc(s) { return String(s == null ? '' : s).replace(/"/g, '&quot;'); }

function imagesFor(keys) {
  const list = [];
  (Array.isArray(keys) ? keys : [keys]).forEach(k => {
    const [key, n] = k.split('#');
    const arr = IMAGES[key] || [];
    if (n) { if (arr[+n - 1] && !list.includes(arr[+n - 1])) list.push(arr[+n - 1]); }
    else arr.forEach(im => { if (im && !list.includes(im)) list.push(im); });
  });
  return list;
}
function firstImage(keys) { const l = imagesFor(keys); return l.length ? l[0] : null; }

function portraitCountry(pkey) {
  return pkey.startsWith('ko') ? 'korea' : pkey.startsWith('ja') ? 'japan' : 'hongkong';
}

function scrollHTML(pkey, opts = {}) {
  const p = PORTRAITS[pkey];
  if (!p) return '';
  const c = portraitCountry(pkey);
  const style = [
    opts.width ? `--hp-width:${opts.width}px` : '',
    `--hp-duration:${opts.duration || (5 + Math.random() * 1.8).toFixed(2)}s`,
    `--hp-delay:${opts.delay != null ? opts.delay : (Math.random() * 2).toFixed(2)}s`,
    `--hp-tilt:${opts.tilt || (2 + Math.random() * 0.9).toFixed(2)}deg`,
  ].filter(Boolean).join(';');
  const cap = opts.caption ? `<div class="hp-caption">${opts.caption}${opts.place ? `<span class="place">${opts.place}</span>` : ''}</div>` : '';
  return `
    <div class="hp ${c}" style="${style}">
      <div class="hp-nail"></div>
      <div class="hp-swing">
        <svg class="hp-cord" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><path d="M3 30 L50 1 L97 30" fill="none" stroke="#3a2a1a" stroke-width="1.3" vector-effect="non-scaling-stroke"/></svg>
        <div class="hp-rod"></div>
        <div class="hp-mount">
          <div class="hp-futai l"></div><div class="hp-futai r"></div>
          <div class="hp-frame"><img src="${p.src}" alt="${esc(p.alt || '')}" loading="lazy"></div>
        </div>
        <div class="hp-roller"></div>
      </div>
      ${cap}
    </div>`;
}

const ICONS = {
  plane: '<svg viewBox="0 0 40 20" aria-hidden="true"><path d="M1 10h9" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 2.5"/><path transform="translate(47 0) scale(-1 1)" d="M14 10l6-1.6 4.6-6h2.2l-2.2 6 5.2.3 2-2.4h1.6l-.9 3.7.9 3.7h-1.6l-2-2.4-5.2.3 2.2 6h-2.2l-4.6-6z" fill="currentColor"/></svg>',
  train: '<svg viewBox="0 0 40 20" aria-hidden="true"><path d="M2 15h36" stroke="currentColor" stroke-width="1"/><path d="M6 13.5V9c0-2 1.5-3.5 3.5-3.5H26c4 0 8 2.5 10 6.5l.5 1.5z" fill="currentColor"/><path d="M10 8h4v2.6h-4zM16 8h4v2.6h-4zM22 8h4v2.6h-4z" fill="#f5efe3"/><circle cx="11" cy="15" r="1.4" fill="currentColor"/><circle cx="29" cy="15" r="1.4" fill="currentColor"/></svg>',
};

// ---------- hero ----------
(function hero() {
  const el = document.getElementById('heroPortraits');
  el.innerHTML = HERO_PORTRAITS.map((h, i) => scrollHTML(h.p, { caption: h.caption, place: h.place, delay: i * 0.6 })).join('');

  // falling autumn leaves: maple (red / orange) and ginkgo (gold)
  const maple = c => `<svg viewBox="-12 -12 24 26"><path d="M0-11 2-4.5 7.5-7.5 5.4-1.2 11-.3 5.6 2.6 7.6 7.8 2.2 4.4 1 10.5 0 6.4-1 10.5-2.2 4.4-7.6 7.8-5.6 2.6-11-.3-5.4-1.2-7.5-7.5-2-4.5z" fill="${c}"/><path d="M0 6.4V13" stroke="${c}" stroke-width="1"/></svg>`;
  const ginkgo = c => `<svg viewBox="-12 -12 24 26"><path d="M0 11C-.6 7-.6 4-.4 1.5-6 0-10.5-5-10-9.5-6-11.5-2-11.2 0-8.5 2-11.2 6-11.5 10-9.5 10.5-5 6 0 .4 1.5.6 4 .6 7 0 11z" fill="${c}"/></svg>`;
  const colours = ['#c8442c', '#d4622b', '#b8342a', '#e0a526', '#d9a82e', '#a8243a'];
  const leaves = document.getElementById('leaves');
  let html = '';
  for (let i = 0; i < 18; i++) {
    const c = colours[i % colours.length];
    const shape = (c === '#e0a526' || c === '#d9a82e') ? ginkgo(c) : maple(c);
    const size = 14 + Math.random() * 16;
    html += `<div class="leaf" style="left:${(Math.random() * 100).toFixed(1)}%;width:${size.toFixed(0)}px;height:${size.toFixed(0)}px;--dur:${(11 + Math.random() * 10).toFixed(1)}s;--delay:${(-Math.random() * 20).toFixed(1)}s;--drift:${(-8 + Math.random() * 18).toFixed(1)}vw;--spin:${(200 + Math.random() * 500).toFixed(0)}deg;--sway:${(2.4 + Math.random() * 2).toFixed(1)}s">${shape}</div>`;
  }
  leaves.innerHTML = html;
})();

// ---------- route legs ----------
document.getElementById('routeLegs').innerHTML = LEGS.map(l => `
  <div class="leg ${l.country}">
    <div class="leg-n">stop ${l.n}</div>
    <div class="city">${l.city}<span class="cjk">${l.cjk}</span></div>
    <div class="country">${l.countryName} · ${l.nights}</div>
    <div class="dates">${l.dates}</div>
  </div>`).join('');

// ---------- journeys ----------
document.getElementById('journeyList').innerHTML = JOURNEYS.map(g => `
  <div class="journey-group-title">${g.group}</div>
  <div class="flights-grid">
    ${g.items.map(j => `
      <div class="flight-row ${j.country}">
        <div class="airport"><div class="code${j.from.cjk ? ' cjk' : ''}">${j.from.code}</div><div class="name">${j.from.name}</div></div>
        <div class="arrow">${ICONS[j.mode]}</div>
        <div class="flight-info">
          <div class="date">${j.date}</div>
          <div class="times">${j.times}</div>
          <div class="carrier">${j.carrier}</div>
          ${j.note ? `<div class="fnote">${j.note}</div>` : ''}
        </div>
        <div class="arrow">${ICONS[j.mode]}</div>
        <div class="airport"><div class="code${j.to.cjk ? ' cjk' : ''}">${j.to.code}</div><div class="name">${j.to.name}</div></div>
      </div>`).join('')}
  </div>`).join('');

// ---------- day tabs (itinerary and planner) ----------
function dayTabs(tabsEl, panelsEl, sectionId) {
  const groups = [];
  DAYS.forEach((d, idx) => {
    let g = groups[groups.length - 1];
    if (!g || g.country !== d.country) { g = { country: d.country, items: [] }; groups.push(g); }
    g.items.push({ d, idx });
  });
  tabsEl.innerHTML = groups.map(g => `
    <div class="tab-group ${g.country}">
      <div class="tab-group-label">${COUNTRY_LABEL[g.country].en}<span class="cjk">${COUNTRY_LABEL[g.country].cjk}</span></div>
      <div class="tab-row">
        ${g.items.map(({ d, idx }) => `<button class="day-tab${idx === 0 ? ' active' : ''}" data-idx="${idx}"><span class="tab-num">day ${d.n}</span><span class="tab-date">${d.date.split(' ').slice(1).join(' ')}</span></button>`).join('')}
      </div>
    </div>`).join('');

  tabsEl.addEventListener('click', ev => {
    const btn = ev.target.closest('.day-tab');
    if (!btn) return;
    const idx = +btn.dataset.idx;
    tabsEl.querySelectorAll('.day-tab').forEach(t => t.classList.toggle('active', +t.dataset.idx === idx));
    panelsEl.querySelectorAll('.day-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    const top = document.getElementById(sectionId).getBoundingClientRect().top;
    if (top < -200) tabsEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// ---------- itinerary ----------
(function itinerary() {
  const tabsEl = document.getElementById('dayTabs');
  const panelsEl = document.getElementById('dayPanels');
  dayTabs(tabsEl, panelsEl, 'itinerary');

  const last = DAYS[DAYS.length - 1].n;
  panelsEl.innerHTML = DAYS.map((d, idx) => `
    <div class="day-panel ${d.country}${idx === 0 ? ' active' : ''}">
      <div class="day-layout">
        <div class="day-aside">
          <div class="country-chip">${COUNTRY_LABEL[d.country].en}<span class="cjk">${COUNTRY_LABEL[d.country].cjk}</span></div>
          <div class="big-num">${String(d.n).padStart(2, '0')}<span class="of">/${last}</span></div>
          <div class="day-date">${d.date} · 2026</div>
          <div class="day-place"><span class="pin">◆</span>${d.place}</div>
          <div class="day-blurb">${d.blurb}</div>
          ${d.portrait ? scrollHTML(d.portrait, { caption: d.portraitCaption, place: d.portraitPlace }) : ''}
        </div>
        <div class="timeline">
          ${d.events.map(e => {
            const img = e.spot ? firstImage((LOCATIONS[e.spot] || {}).images || e.spot) : (e.img ? firstImage(e.img) : null);
            const count = e.spot ? imagesFor((LOCATIONS[e.spot] || {}).images || []).length : 0;
            const open = e.spot && LOCATIONS[e.spot] ? `openModal('${e.spot}')` : '';
            return `
            <div class="event${e.booked ? ' booked' : ''}">
              <div>
                <div class="event-time">${e.time}</div>
                <div class="event-title">${e.title}${e.cjk ? `<span class="cjk">${e.cjk}</span>` : ''}${e.booked ? '<span class="tag">booked</span>' : ''}${e.tag ? `<span class="tag">${e.tag}</span>` : ''}</div>
                <div class="event-desc">${e.desc}</div>
                ${e.note ? `<div class="event-note${e.warn ? ' warn' : ''}">${e.note}</div>` : ''}
                ${open ? `<button class="more" onclick="${open}">${count ? 'Photos &amp; details' : 'Details'} →</button>` : ''}
              </div>
              ${img ? `<button class="event-thumb" ${open ? `onclick="${open}"` : 'tabindex="-1"'} aria-label="${esc(img.caption)}"><img src="${img.src}" alt="${esc(img.caption)}" loading="lazy">${count > 1 ? `<span class="count">${count} photos</span>` : ''}</button>` : ''}
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>`).join('');
})();

// ---------- daily planner ----------
(function planner() {
  const tabsEl = document.getElementById('plannerTabs');
  const panelsEl = document.getElementById('plannerPanels');
  dayTabs(tabsEl, panelsEl, 'planner');

  const mins = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  const length = (a, b) => { const d = mins(b) - mins(a), h = Math.floor(d / 60), m = d % 60; return h ? `${h} h${m ? ` ${String(m).padStart(2, '0')}` : ''}` : `${m} min`; };

  const row = r => {
    if (r.k === 'go') return `
      <li class="plan-row go">
        <div class="plan-time">${r.t || ''}</div>
        <div class="plan-body">
          <div class="plan-leg">${r.by.map(m => `<span class="plan-mode">${m}</span>`).join('')}<span class="plan-dur">${r.dur}</span><span class="plan-route">${r.route}</span></div>
          <div class="plan-how">${r.how}</div>
          ${r.alt ? `<div class="plan-alt">Or: ${r.alt}</div>` : ''}
        </div>
      </li>`;
    if (r.k === 'ready') return `
      <li class="plan-row ready${r.warn ? ' warn' : ''}">
        <div class="plan-time">${r.t}–${r.until}</div>
        <div class="plan-body"><div class="plan-ready">
          <div class="plan-what">Back at ${r.where} · get ready<span class="len">${length(r.t, r.until)}</span></div>
          ${r.sub ? `<div class="plan-sub">${r.sub}</div>` : ''}
        </div></div>
      </li>`;
    return `
      <li class="plan-row at${r.booked ? ' booked' : ''}${r.warn ? ' warn' : ''}">
        <div class="plan-time">${r.t}${r.until ? `–${r.until}` : ''}</div>
        <div class="plan-body">
          <div class="plan-what">${r.title}${r.booked ? '<span class="tag">booked</span>' : ''}</div>
          ${r.sub ? `<div class="plan-sub">${r.sub}</div>` : ''}
        </div>
      </li>`;
  };

  panelsEl.innerHTML = DAYS.map((d, idx) => {
    const p = PLANNER[d.n] || { stay: '', rows: [] };
    const booked = p.rows.filter(r => r.booked);
    return `
    <div class="day-panel ${d.country}${idx === 0 ? ' active' : ''}">
      <div class="plan-head">
        <div>
          <div class="country-chip">${COUNTRY_LABEL[d.country].en}<span class="cjk">${COUNTRY_LABEL[d.country].cjk}</span></div>
          <div class="plan-title"><span class="n">Day ${d.n}</span> · ${d.date}</div>
          <div class="plan-place">${d.place}</div>
          <div class="plan-stay"><span class="plan-lbl">Base tonight</span>${p.stay}</div>
        </div>
        <div class="plan-booked">
          <span class="plan-lbl">Booked today</span>
          ${booked.length ? `<ul>${booked.map(r => `<li><span class="t">${r.t}</span><span>${r.title}</span></li>`).join('')}</ul>` : '<div class="none">Nothing booked.</div>'}
        </div>
      </div>
      ${(p.notes || []).map(n => `<div class="plan-note${n.warn ? ' warn' : ''}">${n.text.replace(/^([^:]{1,12}):/, '<b>$1:</b>')}</div>`).join('')}
      <ol class="plan-list">${p.rows.map(row).join('')}</ol>
    </div>`;
  }).join('');
})();

// ---------- places ----------
document.getElementById('destGrid').innerHTML = PLACES.map((p, i) => {
  const L = LOCATIONS[p.key];
  const img = firstImage(L.images);
  return `
  <div class="dest-card ${L.country}" onclick="openModal('${p.key}')">
    <div class="dest-photo">${img ? `<img src="${img.src}" alt="${esc(img.caption)}" loading="lazy">` : ''}<span class="big-cjk">${L.cjk}</span></div>
    <div class="dest-body-wrap">
      ${scrollHTML(p.portrait, { delay: (i * 0.37) % 2 })}
      <div class="dest-text">
        <div class="dest-num">— ${NUM_WORDS[i + 1] || i + 1}</div>
        <h3>${L.title}</h3>
        <div class="dest-country">${p.country}</div>
        <p class="dest-body">${p.body}</p>
        <p class="dest-fact">${L.fact}</p>
        <div class="card-hint">Tap to explore →</div>
      </div>
    </div>
  </div>`;
}).join('');

// ---------- stays ----------
document.getElementById('staysList').innerHTML = STAYS.map(g => `
  <div class="country-group ${g.country}">
    <div class="country-head">
      <h3>${COUNTRY_LABEL[g.country].en}<span class="cjk">${COUNTRY_LABEL[g.country].cjk}</span></h3>
      <span class="ch-meta">${g.meta}</span>
      ${g.portrait ? scrollHTML(g.portrait, {}) : ''}
    </div>
    <div class="hotels-grid${g.items.length === 1 ? ' single' : ''}">
      ${g.items.map(h => {
        const img = firstImage(LOCATIONS[h.key].images);
        return `
        <div class="hotel-card" onclick="openModal('${h.key}')">
          <div class="hotel-photo">${img ? `<img src="${img.src}" alt="${esc(img.caption)}" loading="lazy">` : ''}<span class="stop-num">${h.stop}</span></div>
          <div class="hotel-inner">
            <div class="hotel-stars">${h.stars}</div>
            <h3>${h.name}</h3>
            <div class="hotel-loc">${h.loc}</div>
            ${h.details.map(([l, v]) => `<div class="hotel-detail"><span class="lbl">${l}</span><span>${v}</span></div>`).join('')}
            ${h.room ? `<div class="hotel-room">${h.room}</div>` : ''}
            <div class="card-hint">Tap to explore →</div>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`).join('');

// ---------- dining ----------
document.getElementById('diningList').innerHTML = DINING.map(g => `
  <div class="country-group ${g.country}">
    <div class="country-head">
      <h3>${COUNTRY_LABEL[g.country].en}<span class="cjk">${COUNTRY_LABEL[g.country].cjk}</span></h3>
      <span class="ch-meta">${g.meta}</span>
      ${g.portrait ? scrollHTML(g.portrait, {}) : ''}
    </div>
    <div class="dining-grid">
      ${g.items.map(r => {
        const img = r.key && LOCATIONS[r.key] ? firstImage(LOCATIONS[r.key].images) : (r.img ? firstImage(r.img) : null);
        const click = r.key && LOCATIONS[r.key] ? ` clickable" onclick="openModal('${r.key}')` : '';
        return `
        <div class="dining-card${click}">
          ${img ? `<div class="dining-photo"><img src="${img.src}" alt="${esc(img.caption)}" loading="lazy"></div>` : ''}
          <div class="dining-inner">
            <div class="dining-night">${r.night}</div>
            <h3>${r.name}${r.cjk ? `<span class="cjk">${r.cjk}</span>` : ''}</h3>
            <div class="dining-loc">${r.loc}</div>
            <div class="dining-time"><span class="${r.booked ? 'booked-dot' : 'open-dot'}"></span><span>${r.time}</span></div>
            <div class="dining-desc">${r.desc}</div>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`).join('');

// ---------- photo credits ----------
document.getElementById('creditsList').innerHTML = CREDITS.map(([cap, credit, url]) =>
  `<li>${cap}${credit ? ` — ${credit}` : ''}${url ? ` · <a href="${esc(url)}" target="_blank" rel="noopener">source</a>` : ''}</li>`).join('');

// ---------- nav ----------
const nav = document.querySelector('nav.top');
window.addEventListener('scroll', () => {
  nav.style.paddingTop = nav.style.paddingBottom = window.scrollY > 100 ? '0.75rem' : '';
}, { passive: true });

// === DETAIL MODAL ===
let currentModalKey = null;
let currentImages = [];
let currentImageIdx = 0;

function openModal(key) {
  const data = LOCATIONS[key];
  if (!data) return;
  currentModalKey = key;
  currentImages = imagesFor(data.images || []);
  document.getElementById('modalContent').className = 'modal-content ' + (data.country || '') + (currentImages.length ? '' : ' no-images');
  document.getElementById('modalEyebrow').textContent = data.eyebrow || '';
  document.getElementById('modalTitle').textContent = data.title || '';
  const cjk = document.getElementById('modalCjk');
  cjk.textContent = data.cjk || '';
  cjk.style.display = data.cjk ? 'block' : 'none';
  document.getElementById('modalSub').textContent = data.subtitle || '';
  document.getElementById('modalBody').innerHTML = (data.body || []).map(p => `<p>${p}</p>`).join('');
  const factEl = document.getElementById('modalFact');
  factEl.textContent = data.fact || '';
  factEl.style.display = data.fact ? 'block' : 'none';
  const dl = document.getElementById('modalDetails');
  if (data.details && data.details.length) {
    dl.innerHTML = data.details.map(d => `<dt>${d.label}</dt><dd>${d.value}</dd>`).join('');
    dl.style.display = 'grid';
  } else {
    dl.innerHTML = '';
    dl.style.display = 'none';
  }
  const multi = currentImages.length > 1;
  document.getElementById('modalArrowPrev').hidden = !multi;
  document.getElementById('modalArrowNext').hidden = !multi;
  document.getElementById('modalThumbs').innerHTML = multi ? currentImages.map((_, i) =>
    `<button onclick="setModalImage(${i})" aria-label="View image ${i + 1}"${i === 0 ? ' class="active"' : ''}></button>`).join('') : '';
  setModalImage(0);
  const modal = document.getElementById('detailModal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('.modal-text').scrollTop = 0;
}

function setModalImage(idx) {
  const imgEl = document.getElementById('modalImgMain');
  const capEl = document.getElementById('modalImgCaption');
  const im = currentImages[idx];
  if (!im) { imgEl.removeAttribute('src'); capEl.textContent = ''; return; }
  currentImageIdx = idx;
  imgEl.src = im.src;
  imgEl.alt = im.caption || '';
  capEl.textContent = im.caption || '';
  document.querySelectorAll('#modalThumbs button').forEach((b, i) => b.classList.toggle('active', i === idx));
}

function navigateModal(dir) {
  if (!currentImages.length) return;
  setModalImage((currentImageIdx + dir + currentImages.length) % currentImages.length);
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentModalKey = null;
}

document.addEventListener('keydown', e => {
  if (!currentModalKey) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') navigateModal(-1);
  if (e.key === 'ArrowRight') navigateModal(1);
});
