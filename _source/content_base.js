// === TRIP CONTENT · shared ===
const HERO_PORTRAITS = [
  { p: 'ko1', caption: 'neon nights', place: 'Seoul' },
  { p: 'ja4', caption: 'beneath Fuji', place: 'Japan' },
  { p: 'hk1', caption: 'harbour lights', place: 'Hong Kong' },
];

const LEGS = [
  { n: '1', city: 'Seoul', cjk: '서울', country: 'korea', countryName: 'South Korea', nights: '3 nights', dates: '1 — 4 Nov' },
  { n: '2', city: 'Tokyo', cjk: '東京', country: 'japan', countryName: 'Japan', nights: '3 nights', dates: '4 — 7 Nov' },
  { n: '3', city: 'Osaka', cjk: '大阪 · 神戸', country: 'japan', countryName: 'Japan · + Kobe', nights: '1 night', dates: '7 — 8 Nov' },
  { n: '4', city: 'Kyoto', cjk: '京都 · 奈良', country: 'japan', countryName: 'Japan · via Nara', nights: '2 nights', dates: '8 — 10 Nov' },
  { n: '5', city: 'Hiroshima', cjk: '広島', country: 'japan', countryName: 'Japan', nights: '2 nights', dates: '10 — 12 Nov' },
  { n: '6', city: 'Fukuoka', cjk: '福岡', country: 'japan', countryName: 'Japan', nights: '1 night', dates: '12 — 13 Nov' },
  { n: '7', city: 'Hong Kong', cjk: '香港', country: 'hongkong', countryName: 'Hong Kong', nights: '3 nights', dates: '13 — 16 Nov' },
];

const JOURNEYS = [
  { group: 'In the air', items: [] },
  { group: 'On the rails', items: [] },
];
const DAYS = [];
const LOCATIONS = {};
const PLACES = [];
const STAYS = [];
const DINING = [];

function groupFor(arr, country, meta, portrait) {
  let g = arr.find(x => x.country === country);
  if (!g) { g = { country, meta, portrait, items: [] }; arr.push(g); }
  return g;
}
