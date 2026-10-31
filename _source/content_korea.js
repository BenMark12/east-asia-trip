// === KOREA · 서울 ===
JOURNEYS[0].items.push(
  { mode: 'plane', country: 'korea', from: { code: 'LHR', name: 'London Heathrow' }, to: { code: 'ICN', name: 'Seoul Incheon' },
    date: 'Sat 31 Oct → Sun 1 Nov', times: '14:30 → 11:40 <em>(+1)</em>', carrier: 'Virgin Atlantic · Direct',
    note: 'About 12h 10m overnight · Heathrow T3 → Incheon T2 · Seoul is 9 hours ahead' },
);

DAYS.push(
  {
    n: 0, date: 'Sat 31 Oct', country: 'korea', place: 'London → Seoul',
    blurb: 'Wheels up at Heathrow. The clocks jump nine hours overnight — sleep when the cabin lights go down and land ready for Seoul.',
    portrait: 'ko3', portraitCaption: 'player 067, boarding', portraitPlace: 'LHR → ICN',
    events: [
      { time: '11:30', title: 'Heathrow, Terminal 3', desc: 'Aim to be there around three hours before departure for the long-haul bag drop.' },
      { time: '14:30', title: 'Depart London Heathrow ✈', booked: true, desc: 'Virgin Atlantic direct to Seoul Incheon — about 12 hours on a Boeing 787. Overnight, so try to sleep through Siberia.',
        note: '<b>Check the booking:</b> Virgin’s filed winter schedule for this route (VS208) shows 14:10 → 11:30, slightly earlier than the times in the plan.' },
    ]
  },
  {
    n: 1, date: 'Sun 1 Nov', country: 'korea', place: 'Seoul · Myeong-dong & Namsan',
    blurb: 'Land, drop the bags and ease in gently — neon, street food and the whole city lit up below N Seoul Tower.',
    portrait: 'ko4', portraitCaption: 'soju with a view', portraitPlace: 'Namsan',
    events: [
      { time: '11:40', title: 'Arrive Incheon (ICN), Terminal 2', cjk: '인천', desc: 'Welcome to Korea. Pick up a <em>T-money</em> card at an arrivals convenience store — it works on every subway, bus and the airport train.' },
      { time: '12:30', title: 'Into the city', desc: 'Easiest with luggage: <em>limousine bus 6015</em> from T2 straight to Myeong-dong (70–90 min). Or the AREX train to Seoul Station, then Line 4 two stops to Myeong-dong (75–95 min door to door).' },
      { time: '14:00', title: 'Drop bags · Artmonstay', spot: 'artmonstay', booked: true, desc: 'Check-in opens at 15:00 (until 20:00), so leave the bags and head out. It’s a short uphill walk from Myeong-dong station.' },
      { time: 'Afternoon', title: 'Explore Myeong-dong', cjk: '명동', spot: 'myeongdong', desc: 'K-beauty shops, department stores and neon, with the 1898 Gothic Myeongdong Cathedral at the top of the hill. From late afternoon the street-food carts roll out — tornado potatoes, egg bread, grilled lobster tails.' },
      { time: '17:00', title: 'N Seoul Tower at sunset', cjk: '남산서울타워', spot: 'nseoultower', desc: 'The Namsan cable car base is just 120 m from the hotel. Sunset is around 17:30 — go up for the last light and watch the city switch on.',
        note: 'Weekend hours: observatory until 23:00. Some sources give the last cable car down as 22:00, so don’t leave it too late.' },
      { time: '18:45', title: 'Dinner · Mokmyeoksanbang', cjk: '목멱산방', spot: 'mokmyeoksanbang', desc: 'Bibimbap specialist at the foot of Namsan — toppings arrive in brassware so you mix your own. Order the signature <em>Sanbang bibimbap</em> and the cult cheese-kimchi pancake.',
        warn: true, note: '<b>Closes early:</b> last order 19:20 (doors shut 20:00), so aim to sit down by 19:00. Self-service — order at the kiosk.' },
      { time: 'Evening', title: 'Myeong-dong street food', desc: 'Stalls run until around 22:00 — a second dinner is very much allowed.' },
    ]
  },
  {
    n: 2, date: 'Mon 2 Nov', country: 'korea', place: 'Royal Seoul · Lotte World',
    blurb: 'Joseon palaces, hanok lanes and hand-cut noodles by day, a fairy-tale castle and coal-grilled pork by night.',
    portrait: 'ko6', portraitCaption: 'in hanbok at the palace', portraitPlace: 'Gyeongbokgung',
    events: [
      { time: '09:00', title: 'Gyeongbokgung Palace', cjk: '경복궁', spot: 'gyeongbokgung', desc: 'The grandest of the five palaces, stepping back towards the granite peak of Bugaksan. Arrive at opening to beat the tour groups; the <em>changing of the royal guard</em> is at 10:00.',
        note: 'Rent a hanbok from one of the shops near the gate and entry is free. Hours in November: 09:00–17:00, last entry 16:00.' },
      { time: '10:30', title: 'Geoncheonggung Residence & Hyangwonjeong', cjk: '건청궁', spot: 'geoncheonggung', desc: 'At the palace’s far northern end: King Gojong’s scholar-style residence — the first building in Korea lit by electricity — beside the island pavilion of Hyangwonjeong, one of Seoul’s prettiest autumn views.' },
      { time: '11:30', title: 'Bukchon Hanok Village', cjk: '북촌', spot: 'bukchon', desc: 'Hundreds of tile-roofed hanok climbing the hill between the palaces. Walk Bukchon-ro 11-gil for the classic view of rooftops against the city.',
        note: 'The central “Red Zone” is open to visitors only 10:00–17:00 (fines apply outside those hours). People live here, so keep it quiet.' },
      { time: '13:30', title: 'Lunch · Namdaemun Kalguksu Alley', cjk: '칼국수 골목', spot: 'namdaemun', tag: 'moved from day 1', desc: 'A narrow passage of tiny counters inside 600-year-old Namdaemun Market, serving steaming bowls of hand-cut noodle soup for a few thousand won. About 30 m inside Gate 5.',
        note: 'Moved from Sunday — most of the market and several noodle stalls close on Sundays.' },
      { time: 'Afternoon', title: 'Gwanghwamun Square & Cheonggyecheon', desc: 'Free time — the statue of King Sejong on Gwanghwamun Square, then a stroll along the Cheonggyecheon stream as it runs through downtown. Or a rest back at the hotel before the evening.' },
      { time: '', title: 'Changdeokgung & Deoksugung → moved to Tuesday', desc: 'Both palaces are <em>closed on Mondays</em>, so they’re in tomorrow’s plan instead.', warn: true, note: '<b>Heads-up:</b> confirmed on the official Royal Palaces & Tombs Center hours page.' },
      { time: '17:30', title: 'Lotte World Adventure', cjk: '롯데월드', spot: 'lotteworld', desc: 'The world’s largest indoor theme park under a glass dome, plus the Magic Island castle on Seokchon Lake beneath the 555 m Lotte World Tower. Gloriously kitsch.',
        note: 'Likely open until 21:00 on a Monday, last entry around 20:00. Check lotteworld.com for the day’s hours and late-entry tickets.' },
      { time: '20:45', title: 'Dinner · Geumdwaeji Sikdang', cjk: '금돼지식당', spot: 'geumdwaeji', desc: 'Seoul’s most famous pork barbecue (Michelin Bib Gourmand). Bone-in pork belly, aged on the bone and grilled for you over coal. Yaksu station, 35–40 min from Jamsil.',
        warn: true, note: '<b>No reservations</b> and queues of an hour are common — leave Lotte World by 20:00. Last order is around 22:20.' },
    ]
  },
  {
    n: 3, date: 'Tue 3 Nov', country: 'korea', place: 'Korean history · Hongdae',
    blurb: 'The secret garden in autumn, the story of the Korean War, the treasures of Silla — then the buskers and bars of Hongdae.',
    portrait: 'ko2', portraitCaption: 'Hongdae after dark', portraitPlace: 'Mapo-gu',
    events: [
      { time: '09:00', title: 'Changdeokgung & the Secret Garden', cjk: '창덕궁', spot: 'changdeokgung', tag: 'moved from day 2', desc: 'The most harmonious palace, built in 1405 to follow the wooded hills. Behind it lies <em>Huwon</em> — ponds, pavilions and 300-year-old trees, spectacular in autumn colour. UNESCO-listed.',
        note: 'Huwon is by timed tour only — English tours at 10:30, 11:30, 14:30 and 15:30, limited numbers, so book ahead. If today feels too full, the 15:30 tour on Sunday afternoon is an alternative.' },
      { time: '12:30', title: 'War Memorial of Korea', cjk: '전쟁기념관', spot: 'warmemorial', desc: 'A vast and moving museum of Korea’s history of conflict, with the 1950–53 war at its heart, and Asia’s largest outdoor display of tanks and aircraft. Free. Samgakji station, exit 12.',
        note: 'Allow 2–3 hours. Open 09:30–18:00 (closed Mondays — so today is right).' },
      { time: '15:00', title: 'Yongsan Park', cjk: '용산공원', spot: 'yongsanpark', desc: 'Seoul’s newest green space, on the former US Army garrison that was off-limits to Koreans for over 120 years. Walk through to the museum.' },
      { time: '15:30', title: 'National Museum of Korea', cjk: '국립중앙박물관', spot: 'nationalmuseum', desc: 'Silla gold crowns, celadon and Buddhist sculpture — free. Don’t miss the darkened <em>Room of Quiet Contemplation</em> with its two pensive bodhisattvas.',
        note: 'Closes 17:30 on Tuesdays (last entry 17:00).' },
      { time: '18:15', title: 'Deoksugung by night', cjk: '덕수궁', spot: 'deoksugung', tag: 'moved from day 2', desc: 'A compact palace where Joseon halls stand beside neoclassical stone buildings, lovely when lit after dark. Walk the stone-walled <em>Doldam-gil</em> lane outside. Open until 21:00.',
        note: 'From City Hall station, Line 2 runs straight to Hongik University (about 20 min).' },
      { time: '19:30', title: 'Hongdae', cjk: '홍대', spot: 'hongdae', desc: 'The art-school district — buskers, indie venues, photo booths, vintage shops and late bars. Quieter on a Tuesday, still buzzing.' },
      { time: '20:00', title: 'Dinner · Miro Sikdang', cjk: '미로식당', spot: 'mirosikdang', desc: 'Five tables on the hill behind Hongik University, where Seoul’s chefs eat on their nights off — skillet-sized jeon, grilled pork neck, spicy whelk salad and draught beer.',
        warn: true, note: '<b>Heads-up:</b> both Diningcode and World’s 50 Best list it as <em>closed on Tuesdays</em> (one also says Sun & Mon). Call 0507-1412-3777 to check — if it’s shut, Hongdae has plenty of late-night Korean BBQ and pocha tents.' },
    ]
  },
);

Object.assign(LOCATIONS, {
  seoul: {
    country: 'korea', eyebrow: 'Stop 1 · South Korea', title: 'Seoul', cjk: '서울',
    subtitle: 'Palaces, hanok lanes and neon under the autumn ginkgo',
    body: [
      'A capital of nearly ten million where Joseon-dynasty palaces and tile-roofed hanok lanes sit beneath granite peaks and glass towers. Seoul has been Korea’s capital since 1394, and its five royal palaces are the heart of the old city.',
      'Early November is prime time: crisp, clear days in the mid-teens, with palace gardens turning red and gold — forecasts put the autumn colour near its peak right on our dates. We’re based in Myeong-dong, at the foot of Namsan and its tower.',
    ],
    fact: 'Gyeongbokgung was founded in 1395, the year after the new Joseon dynasty made Seoul its capital.',
    details: [
      { label: 'Nights', value: 'Three · Sun 1 — Wed 4 Nov' },
      { label: 'Base', value: 'Myeong-dong / Namsan, Jung-gu' },
      { label: 'Weather', value: 'Cool and dry, ~15°C by day, single figures at night' },
      { label: 'Getting about', value: 'T-money card on the subway — fast, cheap, signed in English' },
    ],
    images: ['seoul#2', 'seoul#1', 'seoul#3', 'gyeongbokgung#2', 'bukchon#2', 'myeongdong#2'],
  },
  artmonstay: {
    country: 'korea', eyebrow: 'Stay i · Seoul', title: 'Artmonstay Myeong-dong', cjk: '아트몬스테이',
    subtitle: 'Boutique guesthouse below Namsan · duplex rooms · rooftop terrace',
    body: [
      'A small, friendly guesthouse of about a dozen rooms on the lanes climbing from Myeong-dong towards Namsan. Rooms are split-level duplexes with heated floors, and the rooftop terrace looks straight up at N Seoul Tower.',
      'There’s a café on the ground floor, a shared kitchen and laundry, and rooftop drinks on an honesty system. Reviewers mention the uphill approach and steep stairs inside the rooms — pack light-ish.',
    ],
    fact: 'It’s only about 120 m from the Namsan cable car — you can ride up to N Seoul Tower without touching the subway.',
    details: [
      { label: 'Check-in', value: 'Sun 1 Nov · 15:00–20:00 (front desk 08:00–21:00)' },
      { label: 'Check-out', value: 'Wed 4 Nov · by 11:00 — but we leave ~06:45 for the airport' },
      { label: 'Address', value: '42 Toegye-ro 20na-gil, Jung-gu, Seoul' },
      { label: 'Nearest', value: 'Myeong-dong station (Line 4), ~7 min walk' },
    ],
    images: ['artmonstay'],
  },
  myeongdong: {
    country: 'korea', eyebrow: 'Seoul · Day 1', title: 'Myeong-dong', cjk: '명동',
    subtitle: 'K-beauty, neon and street-food carts',
    body: ['Seoul’s busiest shopping district: a grid of pedestrian lanes packed with K-beauty stores, department stores and neon. From late afternoon, rows of street-food carts roll out with tornado potatoes, grilled lobster tails and gyeran-ppang egg bread.'],
    fact: 'Myeongdong Cathedral, completed in 1898 at the top of the district, was Korea’s first Gothic-style brick church.',
    details: [{ label: 'Hours', value: 'Shops ~10:00–22:00 · stalls late afternoon to ~22:00' }, { label: 'Station', value: 'Myeong-dong (Line 4)' }],
    images: ['myeongdong'],
  },
  nseoultower: {
    country: 'korea', eyebrow: 'Seoul · Day 1', title: 'N Seoul Tower', cjk: '남산서울타워',
    subtitle: 'The city from the summit of Namsan',
    body: ['A 236 m tower on the forested summit of Namsan, right in the middle of Seoul. From the observatory the whole city spreads out in every direction — best at sunset as the lights come on. The terrace railings are buried under thousands of love locks.'],
    fact: 'It was built as a broadcast mast and only opened to the public in 1980.',
    details: [{ label: 'Hours', value: 'Weekends 10:00–23:00 (last entry 30 min before)' }, { label: 'Getting up', value: 'Namsan cable car, 120 m from the hotel' }, { label: 'Sunset', value: '~17:30 in early November' }],
    images: ['nseoultower'],
  },
  mokmyeoksanbang: {
    country: 'korea', eyebrow: 'Seoul · Dinner · Day 1', title: 'Mokmyeoksanbang', cjk: '목멱산방',
    subtitle: 'Bibimbap at the foot of Namsan',
    body: ['A bibimbap specialist serving half a dozen kinds, from the signature Sanbang to bulgogi and raw-beef yukhoe. The toppings and gochujang arrive in traditional brassware so you mix your own; the cheese-kimchi pancake is the cult side dish.'],
    fact: 'The name comes from Mokmyeoksan, the old name for Namsan. It began in a hanok the city built to show visitors traditional Korean food.',
    details: [{ label: 'Hours', value: 'Daily 11:00–20:00 · last order 19:20' }, { label: 'Address', value: '71 Toegye-ro 20-gil, Jung-gu (by the cable car)' }, { label: 'Tip', value: 'Self-service: order at the kiosk, collect your tray' }],
    images: ['mokmyeoksanbang'],
  },
  gyeongbokgung: {
    country: 'korea', eyebrow: 'Seoul · Day 2', title: 'Gyeongbokgung Palace', cjk: '경복궁',
    subtitle: 'The great palace of the Joseon kings',
    body: [
      'The grandest of Seoul’s five Joseon palaces. Its gates and halls step back towards the rocky peak of Bugaksan. Highlights are the soaring throne hall Geunjeongjeon and Gyeonghoeru, the royal banquet pavilion that seems to float on its square pond.',
      'Burned during the Japanese invasions of 1592, it lay in ruins for about 270 years until it was rebuilt in the 1860s.',
    ],
    fact: 'Wear a hanbok and entry is free — rental shops line the streets by the gate.',
    details: [{ label: 'Hours', value: 'Nov: 09:00–17:00 (last entry 16:00) · closed Tuesdays' }, { label: 'Guard ceremony', value: '10:00 and 14:00' }, { label: 'Ticket', value: '₩3,000' }],
    images: ['gyeongbokgung', 'seoul#2'],
  },
  geoncheonggung: {
    country: 'korea', eyebrow: 'Seoul · Day 2', title: 'Geoncheonggung Residence', cjk: '건청궁',
    subtitle: 'A king’s private retreat inside Gyeongbokgung',
    body: ['A secluded compound at the far northern end of Gyeongbokgung, behind the Hyangwonjeong pond. King Gojong built it in 1873 in the plain, unpainted style of a scholar-aristocrat’s house — very different from the palace’s painted halls.'],
    fact: 'In 1887 it became the first place in Korea lit by electric light; in 1895 Empress Myeongseong was assassinated here. It was rebuilt in 2007.',
    details: [{ label: 'Hours', value: 'As Gyeongbokgung — included in the ticket' }],
    images: ['geoncheonggung', 'seoul#2'],
  },
  bukchon: {
    country: 'korea', eyebrow: 'Seoul · Day 2', title: 'Bukchon Hanok Village', cjk: '북촌한옥마을',
    subtitle: 'Six hundred years of residential Seoul',
    body: ['A hillside neighbourhood of hundreds of tile-roofed hanok between Gyeongbokgung and Changdeokgung. Lanes like Bukchon-ro 11-gil frame views of the rooftops against the modern city.'],
    fact: 'Since March 2025 visitors may only enter its “Red Zone” between 10:00 and 17:00 — Seoul’s first tourist curfew.',
    details: [{ label: 'Visiting', value: 'Red Zone 10:00–17:00 · residents live here' }, { label: 'Station', value: 'Anguk (Line 3), exits 2 & 3' }],
    images: ['bukchon', 'seoul#3'],
  },
  namdaemun: {
    country: 'korea', eyebrow: 'Seoul · Lunch · Day 2', title: 'Namdaemun Kalguksu Alley', cjk: '남대문 칼국수 골목',
    subtitle: 'Hand-cut noodles in Korea’s oldest market',
    body: ['Namdaemun is Korea’s oldest and largest traditional market, with more than 10,000 stalls beside Sungnyemun gate. Tucked inside is Kalguksu Alley, a narrow passage of tiny counters serving cheap, steaming bowls of hand-cut noodle soup — often with a free side of cold noodles.'],
    fact: 'The market traces its roots to 1414, making it over 600 years old.',
    details: [{ label: 'Where', value: 'About 30 m inside Gate 5, on the left · Hoehyeon station exit 5' }, { label: 'Note', value: 'Mostly closed on Sundays — hence Monday' }],
    images: ['namdaemun'],
  },
  changdeokgung: {
    country: 'korea', eyebrow: 'Seoul · Day 3', title: 'Changdeokgung & Huwon', cjk: '창덕궁 · 후원',
    subtitle: 'The palace that follows the hills, and its Secret Garden',
    body: [
      'The most harmonious of the palaces, laid out to follow the wooded hills rather than a rigid grid. It served as the main royal residence for longer than any other.',
      'Behind it lies Huwon, the Secret Garden: ponds, pavilions and 300-year-old trees, visited only on timed tours. In early November it should be ablaze.',
    ],
    fact: 'Built in 1405, Changdeokgung is a UNESCO World Heritage Site (1997).',
    details: [{ label: 'Hours', value: 'Nov: 09:00–17:30 (last entry 16:30) · closed Mondays' }, { label: 'Huwon tours', value: 'English 10:30, 11:30, 14:30, 15:30 · book ahead' }, { label: 'Station', value: 'Anguk (Line 3), exit 3' }],
    images: ['changdeokgung'],
  },
  warmemorial: {
    country: 'korea', eyebrow: 'Seoul · Day 3', title: 'War Memorial of Korea', cjk: '전쟁기념관',
    subtitle: 'Korea’s story of conflict, and of those who fell',
    body: ['A vast, sobering museum that tells Korea’s history of conflict from ancient times to the Korean War, with 1950–53 at its heart. Outside, a field of real tanks, aircraft and artillery makes it Asia’s largest war-equipment display; the long galleries of names honour the fallen, including UN troops.'],
    fact: 'Its memorial salutes those who “answered the call to defend a country they never knew and a people they never met.”',
    details: [{ label: 'Hours', value: 'Tue–Sun 09:30–18:00 (last entry 17:30) · free' }, { label: 'Station', value: 'Samgakji (Lines 4 & 6), exit 12' }],
    images: ['warmemorial'],
  },
  yongsanpark: {
    country: 'korea', eyebrow: 'Seoul · Day 3', title: 'Yongsan Park', cjk: '용산공원',
    subtitle: 'A garrison returned to the city',
    body: ['Seoul’s newest big green space is being created on the former US Army Yongsan Garrison, between the War Memorial and the National Museum — lawns, preserved officers’ houses and old garrison buildings, with Yongsan Family Park’s lake beside the museum.'],
    fact: 'The land was occupied first by the Japanese army and then the US Army — off-limits to Koreans for more than 120 years.',
    details: [{ label: 'Hours', value: 'Children’s Garden Tue–Sun 09:00–18:00 · Family Park 24h' }],
    images: ['yongsanpark'],
  },
  nationalmuseum: {
    country: 'korea', eyebrow: 'Seoul · Day 3', title: 'National Museum of Korea', cjk: '국립중앙박물관',
    subtitle: 'Five thousand years of Korean treasures',
    body: ['One of Asia’s largest museums: a monumental modern building holding Korea’s finest treasures, from Silla gold crowns to celadon and Buddhist sculpture. The permanent galleries are free.'],
    fact: 'Two 6th–7th-century gilt-bronze pensive bodhisattvas sit alone in their own dark, hushed gallery — the Room of Quiet Contemplation.',
    details: [{ label: 'Hours', value: 'Tue 09:30–17:30 (last entry 17:00)' }, { label: 'Station', value: 'Ichon (Line 4), exit 2' }],
    images: ['nationalmuseum'],
  },
  deoksugung: {
    country: 'korea', eyebrow: 'Seoul · Day 3', title: 'Deoksugung Palace', cjk: '덕수궁',
    subtitle: 'Where Joseon met the Korean Empire',
    body: ['A compact palace in the heart of downtown, where traditional halls stand beside neoclassical stone buildings from Korea’s brief imperial era. Lovely after dark, and the stone-walled Doldam-gil lane outside is one of Seoul’s classic autumn walks.'],
    fact: 'Emperor Gojong lived here; its Seokjojeon, a Western-style stone hall completed in 1910, is now a museum of that era.',
    details: [{ label: 'Hours', value: '09:00–21:00 (last entry 20:00) · closed Mondays' }, { label: 'Station', value: 'City Hall (Lines 1 & 2), exit 2' }],
    images: ['deoksugung'],
  },
  lotteworld: {
    country: 'korea', eyebrow: 'Seoul · Day 2', title: 'Lotte World Adventure', cjk: '롯데월드',
    subtitle: 'A theme park under glass, and a castle on the lake',
    body: ['A giant theme park in two halves: the indoor Adventure world of rides and parades under a glass dome, and the fairy-tale Magic Island castle on Seokchon Lake, beneath the 555 m Lotte World Tower.'],
    fact: 'Opened in 1989, it’s recognised by Guinness as the world’s largest indoor theme park.',
    details: [{ label: 'Hours', value: 'Likely 10:00–21:00 Mon · last entry ~20:00 (check the day)' }, { label: 'Station', value: 'Jamsil (Lines 2 & 8), connected underground' }],
    images: ['lotteworld'],
  },
  geumdwaeji: {
    country: 'korea', eyebrow: 'Seoul · Dinner · Day 2', title: 'Geumdwaeji Sikdang', cjk: '금돼지식당',
    subtitle: 'The Gold Pig · Michelin Bib Gourmand pork barbecue',
    body: ['Seoul’s most famous pork-barbecue joint, behind gold-on-white tiles in Sindang-dong. Thick cuts of premium pork are grilled for you over coal, crisp outside and juicy within. There is almost always a queue.'],
    fact: 'The signature bone-in pork belly comes from Yorkshire–Berkshire–Duroc pigs and is aged on the bone for about two weeks.',
    details: [{ label: 'Hours', value: 'Daily 11:30–23:00 · last order ~22:20' }, { label: 'Address', value: '149 Dasan-ro, Jung-gu · Yaksu station' }, { label: 'Booking', value: 'None — queue' }],
    images: ['geumdwaeji'],
  },
  hongdae: {
    country: 'korea', eyebrow: 'Seoul · Day 3', title: 'Hongdae', cjk: '홍대',
    subtitle: 'Buskers, indie stages and late nights',
    body: ['The youthful, arty district around Hongik University: street buskers, indie music venues, vintage shops, photo booths and late-night bars. It hums every evening, though weekends are wildest.'],
    fact: 'Hongik is one of Korea’s top art schools — its students shaped Seoul’s indie and busking scene.',
    details: [{ label: 'Station', value: 'Hongik University (Line 2 / AREX), exit 9' }],
    images: ['hongdae'],
  },
  mirosikdang: {
    country: 'korea', eyebrow: 'Seoul · Dinner · Day 3', title: 'Miro Sikdang', cjk: '미로식당',
    subtitle: 'Five tables where Seoul’s chefs eat',
    body: ['A tiny, ultra-casual Korean pub-restaurant on the hill behind Hongik University, run by chef Park Seung-jae. Famous as the place Seoul’s chefs go on their nights off: skillet-sized squash-and-potato jeon, spicy whelk salad, grilled pork neck, bulgogi and draught beer.'],
    fact: 'Listed by World’s 50 Best Discovery and The Infatuation — with only five tables, reservations are essential.',
    details: [{ label: 'Hours', value: 'Dinner only · listed as closed Tuesdays — call ahead' }, { label: 'Address', value: '80 Wausan-ro 30-gil, Mapo-gu · taxi is easiest' }, { label: 'Phone', value: '0507-1412-3777' }],
    images: ['mirosikdang'],
  },
});

PLACES.push({ key: 'seoul', portrait: 'ko5', country: 'South Korea',
  body: 'Five Joseon palaces, hanok lanes and Namsan’s tower above a city that never really switches off — and the ginkgo trees turning gold.' });

STAYS.push({ country: 'korea', meta: '3 nights · Myeong-dong', portrait: 'ko7', items: [
  { key: 'artmonstay', stop: 'stay i.', stars: 'Boutique guesthouse', name: 'Artmonstay', loc: 'Myeong-dong · Seoul',
    details: [['Check-in', 'Sun 1 Nov · from 15:00'], ['Check-out', 'Wed 4 Nov · by 11:00'], ['Nights', 'Three']], room: 'Duplex room · rooftop views of N Seoul Tower' },
]});

DINING.push({ country: 'korea', meta: 'Seoul · three nights', portrait: 'ko8', items: [
  { key: 'mokmyeoksanbang', night: 'Sun 1 Nov · first night', name: 'Mokmyeoksanbang', cjk: '목멱산방', loc: 'Namsan · Jung-gu', time: 'Early dinner — last order 19:20',
    desc: 'Mix-your-own bibimbap served in brassware, plus the cult cheese-kimchi pancake. <em>A two-minute walk from the hotel.</em>' },
  { key: 'namdaemun', night: 'Mon 2 Nov · lunch', name: 'Kalguksu Alley', cjk: '칼국수 골목', loc: 'Namdaemun Market', time: 'Lunch — walk-in counters',
    desc: 'Hand-cut noodle soup at tiny counters inside the 600-year-old market. Cheap, steaming and very local.' },
  { key: 'geumdwaeji', night: 'Mon 2 Nov · after Lotte World', name: 'Geumdwaeji Sikdang', cjk: '금돼지식당', loc: 'Sindang · Yaksu station', time: '~20:45 — no bookings, queue',
    desc: 'Michelin Bib Gourmand pork barbecue: aged bone-in belly grilled for you over coal. <em>Worth the wait.</em>' },
  { key: 'mirosikdang', night: 'Tue 3 Nov · Hongdae night', name: 'Miro Sikdang', cjk: '미로식당', loc: 'Wausan hill · Hongdae', time: 'Dinner — listed closed Tuesdays, call ahead',
    desc: 'Five tables where Seoul’s chefs eat on their night off: giant jeon, grilled pork neck, draught beer.' },
]});
