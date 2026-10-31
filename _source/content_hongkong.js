// === HONG KONG · 香港 ===
JOURNEYS[0].items.push(
  { mode: 'plane', country: 'hongkong', from: { code: 'FUK', name: 'Fukuoka' }, to: { code: 'HKG', name: 'Hong Kong' },
    date: 'Fri 13 November', times: '13:25 → 16:40', carrier: 'Hong Kong Airlines · HX639 · Direct',
    note: 'About 4h 15m on the clock · Hong Kong is an hour behind Japan' },
  { mode: 'plane', country: 'hongkong', from: { code: 'HKG', name: 'Hong Kong' }, to: { code: 'LHR', name: 'London Heathrow' },
    date: 'Mon 16 November', times: '08:10 → ~15:00 <em>(same day)</em>', carrier: 'Cathay Pacific · CX257 · Direct',
    note: 'About 14h 50m · lands at Heathrow Terminal 3 the same afternoon' },
);

DAYS.push(
  {
    n: 13, date: 'Fri 13 Nov', country: 'hongkong', place: 'Fukuoka → Hong Kong',
    blurb: 'A short hop south and an hour back on the clock. Meet Rob, ride up the Peak and see the whole city lit below — then agave in a candlelit Central den.',
    portrait: 'hk3', portraitCaption: 'the view from the Peak', portraitPlace: '香江美景',
    events: [
      { time: 'By 10:00', title: 'Check out · Fukuoka', desc: 'The International Terminal has no subway stop: take a taxi from Sumiyoshi (20–25 min) or the direct Nishitetsu bus from Hakata Station. Aim to be at the airport by about 11:00.' },
      { time: '13:25', title: 'Depart Fukuoka (FUK) ✈', booked: true, desc: 'Hong Kong Airlines HX639 — about four hours on the clock. <em>Hong Kong is one hour behind Japan.</em>' },
      { time: '16:40', title: 'Arrive Hong Kong (HKG)', cjk: '香港', desc: 'Airport Express to Hong Kong Station (24 min, every 10 min, tap Octopus or a contactless card), then a ten-minute taxi to Admiralty. A taxi straight from the airport is ~40 min and ~HK$400.' },
      { time: '18:05', title: 'Check in · Island Shangri-La', cjk: '港島香格里拉', spot: 'islandshangrila', booked: true, desc: 'Fifty-six floors above Pacific Place, with harbour or Peak views. Ride the glass bubble lift past the 16-storey silk painting in the atrium.' },
      { time: '19:30', title: 'Meet Rob · Victoria Peak by night', cjk: '太平山', spot: 'victoriapeak', desc: 'The classic view: a wall of towers falling away to the harbour, glowing like a circuit board. The Peak Tram leaves from Garden Road — a 10–15 minute walk through Hong Kong Park. Sit on the right going up for the “leaning towers” illusion.',
        note: 'Sunset is 17:41, before we can get there, so this is the night view. Sky Terrace 428 is open until 22:00 — or walk ten flat minutes along Lugard Road for the free lookout. Buy tram tickets only at webstore.thepeak.com.hk; Friday queues can be long, and a taxi up takes about 20 min.' },
      { time: '21:20', title: 'Dinner nearby, then drinks at COA', spot: 'coa', desc: 'Taxi down to Hollywood Road at Gough Street. COA is Jay Khan’s candlelit agave bar — No.1 in Asia three years running — with a 41-page menu of mezcal, tequila and raicilla.',
        warn: true, note: '<b>COA is drinks only</b> and walk-in — you join the queue in person at the door, then it texts you. Put your names down first, then eat close by while you wait (Gough Street and Hollywood Road are full of options). Open until 01:00 on Fridays.' },
    ]
  },
  {
    n: 14, date: 'Sat 14 Nov', country: 'hongkong', place: 'Central · Sheung Wan · SoHo',
    blurb: 'Escalators, antique shops and incense-filled temples; truffle-brie dumplings for lunch; the World’s Best Bar; then Latin-French cooking to vinyl.',
    portrait: 'hk4', portraitCaption: 'Central after dark', portraitPlace: '金多寶',
    events: [
      { time: 'Morning', title: 'Explore Central & the Mid-Levels escalator', cjk: '中環', spot: 'central', desc: 'Ride the 800 m hillside escalator up into SoHo (it switches to uphill at 10:00), then wander Hollywood Road — antique dealers, galleries, PMQ, Tai Kwun and the incense coils of <em>Man Mo Temple</em> at No.124–126. Hop a “ding ding” tram along the north shore.' },
      { time: '12:30', title: 'Lunch · Man Mo Dim Sum', cjk: '文武點心', spot: 'manmo', desc: 'East-meets-West dim sum a few doors down Hollywood Road: the signature <em>truffle-brie dumpling</em>, foie-gras xiao long bao, kefta siu mai — and a French-leaning wine list.',
        note: 'It has moved to 233 Hollywood Road (older guides show Cat Street). Book online — no-shows or late cancellations cost HK$100 a head.' },
      { time: '14:10', title: 'Star Ferry across the harbour', cjk: '天星小輪', spot: 'starferry', tag: 'optional', desc: 'Ten minutes from Central Pier 7 to Tsim Sha Tsui for a few dollars — the cheapest, loveliest harbour view in town. Walk the promenade and ride back, then to the hotel by about 15:30 to get ready.' },
      { time: '17:00', title: 'Drinks · Bar Leone', spot: 'barleone', desc: 'Lorenzo Antinori’s Roman neighbourhood bar — football shirts, Italo disco and “cocktail popolari”. Named <em>The World’s Best Bar</em> in 2025 and again on 7 Oct 2026. Order the Leone Martini and a mortadella sandwich.',
        warn: true, note: '<b>Walk-in only</b> and Saturday queues can run 1–2 hours, so be there for the 17:00 opening (about 15 min by taxi from the hotel). Mono is a 15-minute walk downhill (5 min by taxi).' },
      { time: '19:30', title: 'Dinner · MONO', spot: 'mono', booked: true, desc: 'Venezuelan chef Ricardo Chaneton cooks Latin American flavours with French technique at a 22-seat room — Danish langoustine with Ecuadorian cacao, an 18-ingredient green mole. Records from his father’s collection on the turntable. One Michelin star.',
        note: 'Journey Menu HK$1,888 per person. Last order 20:15, and it’s closed Sunday & Monday — so tonight is the only chance; confirm the booking.' },
    ]
  },
  {
    n: 15, date: 'Sun 15 Nov', country: 'hongkong', place: 'The south side · beaches & ridges',
    blurb: 'The other Hong Kong: a grassy dragon-backed ridge above the South China Sea, surf beaches, seaside villages — and a relaxed last supper in Central.',
    portrait: 'hk5', portraitCaption: 'flowers & fortune', portraitPlace: '花開富貴',
    events: [
      { time: '10:00', title: 'Hike the Dragon’s Back', cjk: '龍脊', spot: 'dragonsback', desc: 'MTR to Shau Kei Wan (exit A3), bus 9 to the To Tei Wan stop, then up onto Hong Kong’s favourite short hike: a rolling ridge with sea views on both sides. 4.8 km (~2.5 h) to Tai Tam Gap, or carry on down to Big Wave Bay (~8.5 km, 3–4 h).',
        note: 'No shade and nowhere to buy water once you start — carry a litre each. Bus 9 can queue on Sundays.' },
      { time: '13:30', title: 'Shek O · beach & village lunch', cjk: '石澳', spot: 'shekO', desc: 'A laid-back village at the island’s south-east tip, with a sandy beach between granite headlands — the natural finish to the hike.',
        note: 'No lifeguards at Shek O from 1 Nov; Big Wave Bay and Repulse Bay are still patrolled 08:00–17:00 in November.' },
      { time: '15:00', title: 'Stanley', cjk: '赤柱', spot: 'stanley', desc: 'Taxi round the coast (~20–25 min) to the breezy seaside town — Stanley Market, the waterfront promenade and Murray House, moved here stone by numbered stone from Central.' },
      { time: '16:45', title: 'Repulse Bay at golden hour', cjk: '淺水灣', spot: 'repulsebay', desc: 'Stop on the way back (buses 6, 6X or 260 to Central) for the wide crescent beach and the Kwun Yam shrine — crossing its Longevity Bridge adds three days to your life. Sunset 17:40.' },
      { time: '19:30', title: 'Relaxed dinner in Central', spot: 'sundaycentral', desc: 'Something easy for the last night: Cantonese roast goose and char siu at <em>Ho Lee Fook</em>, the Michelin-noted goose at <em>Yat Lok</em>, or a bowl of wonton noodles at <em>Mak’s Noodle</em>.' },
      { time: 'Late', title: 'Pack · settle the bill', desc: 'Settle the room tonight for an easy dawn exit.', note: 'Cathay’s In-Town Check-in at Hong Kong Station lets you drop bags the evening before — check its hours on the MTR site.' },
    ]
  },
  {
    n: 16, date: 'Mon 16 Nov', country: 'hongkong', place: 'Hong Kong → London',
    blurb: 'Up before the city, one last look at the harbour — home with a thousand photos and three countries’ worth of stories.',
    portrait: 'hk8', portraitCaption: 'pearl of the orient', portraitPlace: '東方之珠',
    events: [
      { time: '05:30', title: 'Leave the hotel', desc: 'Taxi to the airport, about 35–40 minutes in the early light.' },
      { time: '08:10', title: 'Depart Hong Kong (HKG) ✈', booked: true, desc: 'Cathay Pacific CX257, non-stop to London — about 14h 50m.' },
      { time: '~15:00', title: 'Arrive London Heathrow', desc: 'Home the same afternoon. ❤' },
    ]
  },
);

Object.assign(LOCATIONS, {
  hongkong: {
    country: 'hongkong', eyebrow: 'Stop 7 · Hong Kong', title: 'Hong Kong', cjk: '香港',
    subtitle: 'A vertical city between green hills and a great harbour',
    body: [
      'A city squeezed between steep green hills and one of the world’s great harbours, where trams, ferries and hillside escalators are part of the daily commute. The north shore of Hong Kong Island is glass towers and neon; its south side has beaches, seaside villages and ridge-top trails, all within half an hour.',
      'Mid-November is close to its best weather — highs around 24°C, low humidity and lots of sunshine. We stay in Admiralty and eat and drink in Central, Sheung Wan and SoHo.',
    ],
    fact: 'The Star Ferry and the Peak Tram both began running in 1888 — and both are still the best ways to see the city.',
    details: [
      { label: 'Nights', value: 'Three · Fri 13 — Mon 16 Nov' },
      { label: 'Weather', value: '~24°C by day, ~20°C at night · the end of typhoon season' },
      { label: 'Time', value: 'GMT +8 · one hour behind Japan' },
      { label: 'Getting about', value: 'Octopus or contactless card for MTR, trams, buses and ferries' },
    ],
    images: ['hongkong#1', 'hongkong#3', 'hongkong#2', 'victoriapeak#2', 'central#2'],
  },
  islandshangrila: {
    country: 'hongkong', eyebrow: 'Stay vii · Hong Kong', title: 'Island Shangri-La', cjk: '港島香格里拉',
    subtitle: '★★★★★ · Pacific Place, Admiralty · harbour & Peak views',
    body: [
      'A 56-storey tower rising above Pacific Place, with 544 rooms looking either up to the Peak or out over Victoria Harbour. Inside it feels like a grand palace hotel — chandeliers, Asian art and eight restaurants and bars, including two with Michelin stars (Petrus and Summer Palace).',
      'Lobster Bar and Grill does cocktails, oysters and live jazz. Mono’s chef Ricardo Chaneton used to run Petrus upstairs.',
    ],
    fact: 'The inner atrium holds a 16-storey silk landscape painting of 250 panels — best seen from the glass bubble lift between levels 39 and 56.',
    details: [
      { label: 'Check-in', value: 'Fri 13 Nov · from 15:00 (we arrive ~18:00)' },
      { label: 'Check-out', value: 'Mon 16 Nov · we leave ~05:30 — settle up on Sunday night' },
      { label: 'Address', value: 'Pacific Place, Supreme Court Road, Admiralty' },
      { label: 'Getting there', value: 'Admiralty MTR exit F → Pacific Place → reception on L6' },
    ],
    images: ['islandshangrila#2', 'islandshangrila#3', 'islandshangrila#1'],
  },
  victoriapeak: {
    country: 'hongkong', eyebrow: 'Hong Kong · Day 13', title: 'Victoria Peak', cjk: '太平山',
    subtitle: 'The view, and the tram that climbs to it',
    body: [
      'The classic Hong Kong view: a wall of skyscrapers falling away to Victoria Harbour, with Kowloon and the hills of the New Territories behind. After dark the city glows below like a circuit board.',
      'The Peak Tram has hauled passengers up the slope since 1888, tilting at up to 25.7° — sit on the right going up and the towers outside seem to lean towards the hill.',
    ],
    fact: 'Sky Terrace 428 is named for its height above sea level. The free Lugard Road lookout, ten flat minutes west, frames much the same view.',
    details: [
      { label: 'Peak Tram', value: '07:30–23:00 · Garden Road terminus · tickets at webstore.thepeak.com.hk' },
      { label: 'Sky Terrace 428', value: '08:30–22:00' },
      { label: 'Other ways up', value: 'Taxi ~20 min · bus 15 · green minibus 1 from IFC' },
    ],
    images: ['victoriapeak', 'peaktram', 'hongkong#1'],
  },
  coa: {
    country: 'hongkong', eyebrow: 'Hong Kong · Drinks · Day 13', title: 'COA', cjk: '',
    subtitle: 'Jay Khan’s agave den · Asia’s No.1 bar three years running',
    body: ['Opened in 2017 and inspired by the mezcalerías of Mexico: reclaimed-industrial walls, a mural of the agave goddess Mayahuel and a 41-page menu of tequila, mezcal, raicilla, sotol and bacanora.'],
    fact: 'It’s named after the machete-like tool used to harvest agave — a real coa from Oaxaca is set into the bar wall. It topped Asia’s 50 Best Bars in 2021, 2022 and 2023.',
    details: [
      { label: 'Hours', value: 'Fri 18:00–01:00 · closed Mondays' },
      { label: 'Address', value: '6–10 Shin Hing Street, Central (off Gough St / Hollywood Rd)' },
      { label: 'Booking', value: 'Walk-in only — join the virtual queue in person · no food' },
    ],
    images: ['coa'],
  },
  central: {
    country: 'hongkong', eyebrow: 'Hong Kong · Day 14', title: 'Central, Sheung Wan & SoHo', cjk: '中環 · 上環',
    subtitle: 'Bank towers, tram lines and steep lanes of galleries',
    body: [
      'Hong Kong’s financial heart, where towers by Foster and I. M. Pei rise over tram lines laid in 1904 and steep lanes of galleries and noodle shops. Covered walkways and hillside escalators link it all, with Sheung Wan’s dried-seafood shops and antique dealers just west.',
      'A good loop: the escalator up to SoHo, along Hollywood Road past the antique shops and Man Mo Temple, down to lunch at Man Mo Dim Sum — and Bar Leone is five minutes away.',
    ],
    fact: 'The Central–Mid-Levels escalator is about 800 m long and climbs 135 m — downhill until 10:00 for commuters, then uphill until midnight.',
    details: [
      { label: 'Escalator', value: '06:00–24:00 · uphill from 10:00' },
      { label: 'Don’t miss', value: 'Man Mo Temple, PMQ, Tai Kwun, a ding-ding tram ride' },
    ],
    images: ['central#1', 'central#3', 'soho', 'central#2'],
  },
  manmo: {
    country: 'hongkong', eyebrow: 'Hong Kong · Lunch · Day 14', title: 'Man Mo Dim Sum', cjk: '文武點心',
    subtitle: 'Swiss-born, Hong Kong-trained, playfully fusion dim sum',
    body: ['Named after the nearby Man Mo Temple. Founder Nicolas Elalouf trained under a dim sum master and stuffs hand-made dumplings with European fillings, served with a French-leaning wine list.'],
    fact: 'The truffle-brie dumpling is steamed and then pan-fried, so the crust tastes “like the bread you eat with cheese”.',
    details: [
      { label: 'Address', value: '233 Hollywood Road, Sheung Wan (it has moved)' },
      { label: 'Hours', value: 'From 12:00 daily' },
      { label: 'Booking', value: 'Online · HK$100 pp no-show / late-cancel fee' },
    ],
    images: ['manmo'],
  },
  starferry: {
    country: 'hongkong', eyebrow: 'Hong Kong · Day 14', title: 'Star Ferry', cjk: '天星小輪',
    subtitle: 'Ten minutes, a few dollars, the best view in town',
    body: ['Green-and-white ferries have chugged across Victoria Harbour since 1888. The ride between Central and Tsim Sha Tsui is still the cheapest and loveliest way to see the skyline — even better after dark.'],
    fact: 'About HK$6.50 at weekends — one of the cheapest rides in Hong Kong.',
    details: [{ label: 'Route', value: 'Central Pier 7 ↔ Tsim Sha Tsui · every 6–12 min, ~06:30–23:30' }],
    images: ['starferry', 'hongkong#2'],
  },
  barleone: {
    country: 'hongkong', eyebrow: 'Hong Kong · Drinks · Day 14', title: 'Bar Leone', cjk: '',
    subtitle: 'The World’s Best Bar, 2025 & 2026',
    body: ['Lorenzo Antinori’s homage to a Roman neighbourhood bar: football shirts on the walls, Italo disco and Pavarotti on the stereo, and “cocktail popolari” — cocktails for the people — served fast and without fuss.'],
    fact: 'Named The World’s Best Bar in 2025 and again on 7 Oct 2026, a month before we visit. Order the pre-batched Leone Martini with smoked olives.',
    details: [
      { label: 'Hours', value: 'Tue–Sun from 17:00 · closed Mondays' },
      { label: 'Address', value: '11–15 Bridges Street, Central' },
      { label: 'Booking', value: 'Walk-in only · arrive at opening' },
    ],
    images: ['barleone'],
  },
  mono: {
    country: 'hongkong', eyebrow: 'Hong Kong · Dinner · Day 14', title: 'MONO', cjk: '',
    subtitle: 'Latin American flavours, French technique · one Michelin star',
    body: ['A 22-seat room — ten at the kitchen counter — where Venezuelan chef-owner Ricardo Chaneton cooks dishes like Danish langoustine with fermented Ecuadorian cacao and an 18-ingredient green mole. Personal and warm, with records spinning in the background.'],
    fact: 'In 2022 it became Asia’s first Michelin-starred Latin American restaurant; the vinyl comes from the chef’s father’s collection.',
    details: [
      { label: 'Booking', value: 'Sat 14 Nov · 19:30' },
      { label: 'Menu', value: 'Journey Menu HK$1,888 pp · last order 20:15' },
      { label: 'Address', value: '5/F, 18 On Lan Street, Central' },
    ],
    images: ['mono'],
  },
  dragonsback: {
    country: 'hongkong', eyebrow: 'Hong Kong · Day 15', title: 'The Dragon’s Back', cjk: '龍脊',
    subtitle: 'Hong Kong Trail, Section 8',
    body: ['A rolling, grassy ridge above Shek O with sea views on both sides — islands, surf beaches and the South China Sea. A moderate climb at the start, then easy undulations along the top.'],
    fact: 'Named for the way it rises and falls like a soaring dragon — and once voted Asia’s best urban hiking trail.',
    details: [
      { label: 'Start', value: 'To Tei Wan stop, Shek O Road (bus 9 from Shau Kei Wan, exit A3)' },
      { label: 'Distance', value: '4.8 km / ~2.5 h · or ~8.5 km to Big Wave Bay' },
      { label: 'Bring', value: 'Water, sun cream — no shade, no shops, unlit after 17:40' },
    ],
    images: ['dragonsback'],
  },
  shekO: {
    country: 'hongkong', eyebrow: 'Hong Kong · Day 15', title: 'Shek O', cjk: '石澳',
    subtitle: 'A village beach at the end of the island',
    body: ['A laid-back village at the island’s south-east tip, with a sandy beach between granite headlands and a relaxed, low-rise feel. Nearby Big Wave Bay is the island’s surf beach.'],
    fact: 'Shek O and Big Wave Bay are the natural finish of the Dragon’s Back — walk the ridge and end with your feet in the sand.',
    details: [{ label: 'Getting there', value: 'Bus 9 from Shau Kei Wan · taxi to Central ~30–40 min' }, { label: 'Lifeguards', value: 'None at Shek O from 1 Nov' }],
    images: ['shekO'],
  },
  stanley: {
    country: 'hongkong', eyebrow: 'Hong Kong · Day 15', title: 'Stanley', cjk: '赤柱',
    subtitle: 'Market, promenade and a building that moved',
    body: ['A breezy seaside town on a narrow peninsula with a waterfront promenade, the rambling Stanley Market and a run of bars and restaurants facing the bay.'],
    fact: 'Murray House was built in Central in the 1840s, dismantled stone by stone in 1982 (over 3,000 numbered pieces) and rebuilt here on the waterfront.',
    details: [{ label: 'Market', value: 'Roughly 10:00–18:00' }, { label: 'Back to Central', value: 'Bus 6, 6X or 260 · ~45–50 min' }],
    images: ['stanley'],
  },
  repulsebay: {
    country: 'hongkong', eyebrow: 'Hong Kong · Day 15', title: 'Repulse Bay', cjk: '淺水灣',
    subtitle: 'The crescent beach beneath the hills',
    body: ['A wide, gently curving beach backed by green hills and pastel apartment towers, about 30 minutes from Central.'],
    fact: 'Above the beach, the wavy apartment block “The Repulse Bay” has a famous square hole — local lore says it lets dragons pass from the hills to the sea.',
    details: [{ label: 'Buses', value: '6, 6X, 260 from Exchange Square, Central' }, { label: 'Lifeguards', value: '08:00–17:00 in November' }],
    images: ['repulsebay'],
  },
  sundaycentral: {
    country: 'hongkong', eyebrow: 'Hong Kong · Dinner · Day 15', title: 'A relaxed last supper', cjk: '中環',
    subtitle: 'Three easy Sunday-night options in Central',
    body: [
      '<b>Ho Lee Fook</b> — buzzy, modern Cantonese in the Michelin Guide: roast goose, char siu and wok dishes. 3–5 Elgin Street, SoHo · Sunday 18:00–22:30.',
      '<b>Yat Lok</b> — tiny, no-frills, Michelin-recognised roast-goose institution; goose with lai fun noodles or rice. 34–38 Stanley Street · phone ahead, reportedly cash only.',
      '<b>Mak’s Noodle</b> — classic Hong Kong wonton noodles in small bowls; quick, cheap and comforting after the beaches. 77 Wellington Street · ~11:00–21:00.',
    ],
    fact: 'Hollywood Road, laid out in the 1840s, is one of Hong Kong’s oldest streets — SoHo is simply “South of Hollywood Road”.',
    details: [],
    images: ['soho', 'central#3'],
  },
});

PLACES.push({ key: 'hongkong', portrait: 'hk6', country: 'Hong Kong SAR',
  body: 'Neon and glass on the harbour, trams and escalators up the hills, and — half an hour south — ridges, surf beaches and seaside villages.' });

groupFor(STAYS, 'hongkong', '3 nights · Admiralty', 'hk7').items.push(
  { key: 'islandshangrila', stop: 'stay vii.', stars: '★★★★★', name: 'Island Shangri-La', loc: 'Admiralty · Hong Kong',
    details: [['Check-in', 'Fri 13 Nov · from 15:00'], ['Check-out', 'Mon 16 Nov · early start'], ['Nights', 'Three']], room: 'Harbour or Peak views from the 56-storey tower' },
);

groupFor(DINING, 'hongkong', 'Hong Kong · three nights', 'hk2').items.push(
  { key: 'coa', night: 'Fri 13 Nov · with Rob', name: 'COA', loc: 'Shin Hing St · Central', time: 'Late — walk-in queue, drinks only',
    desc: 'Agave cocktails in a candlelit den — three-time No.1 in Asia. <em>Put names down, eat nearby while you wait.</em>' },
  { key: 'manmo', night: 'Sat 14 Nov · lunch', name: 'Man Mo Dim Sum', cjk: '文武點心', loc: 'Hollywood Rd · Sheung Wan', time: 'Lunch — book online',
    desc: 'Truffle-brie dumplings, foie-gras xiao long bao and a French wine list.' },
  { key: 'barleone', night: 'Sat 14 Nov · aperitivo', name: 'Bar Leone', loc: 'Bridges St · Central', time: '17:00 — walk-in, arrive at opening',
    desc: 'The World’s Best Bar, two years running. <em>Leone Martini and a mortadella sandwich.</em>' },
  { key: 'mono', night: 'Sat 14 Nov · the big dinner', name: 'MONO', loc: 'On Lan St · Central', time: '19:30 — booked', booked: true,
    desc: 'One-Michelin-star Latin-French tasting menu to the sound of vinyl.' },
  { key: 'sundaycentral', night: 'Sun 15 Nov · last night', name: 'Somewhere easy in Central', loc: 'SoHo · Central', time: 'Walk-in — Ho Lee Fook, Yat Lok or Mak’s',
    desc: 'Roast goose, char siu or wonton noodles after a day on the beaches.' },
);
