// === TRIP CONTENT · daily planner ===
// Door to door for each day: out from the accommodation for the day, back to get ready (at least an
// hour), then out for drinks and dinner. Keyed by day number (matches DAYS[].n).
//   at(time, title, {until, sub, booked, warn})        — somewhere we're due to be
//   go(time, route, modes, duration, how, {alt})       — a journey
//   ready(from, until, where, {sub, warn})             — back at the accommodation to get ready
//   note(text, {warn})                                 — where the planner differs from the itinerary;
//                                                        start it with a label such as 'To do:' (shown in bold)
const PLANNER = (() => {
  const at = (t, title, o = {}) => ({ k: 'at', t, title, ...o });
  const go = (t, route, by, dur, how, o = {}) => ({ k: 'go', t, route, by, dur, how, ...o });
  const ready = (t, until, where, o = {}) => ({ k: 'ready', t, until, where, ...o });
  const note = (text, o = {}) => ({ text, ...o });

  return {
    0: {
      stay: 'Overnight flight',
      rows: [
        at('11:30', 'Heathrow, Terminal 3', { sub: 'Leave home in time to be at the long-haul bag drop about three hours before departure.' }),
        at('14:30', 'Virgin Atlantic to Seoul Incheon', { booked: true, sub: 'Overnight, about 12 hours. Check the booking: VS208’s filed winter times are 14:10 → 11:30.' }),
      ],
    },

    1: {
      stay: 'Artmonstay · Myeong-dong',
      rows: [
        at('11:40', 'Land at Incheon, Terminal 2', { sub: 'Allow about 45 minutes for immigration and bags. Pick up a T-money card at an arrivals convenience store.' }),
        go('12:30', 'Incheon T2 → Artmonstay', ['Bus'], '70–90 min', 'Airport limousine 6015 from the T2 arrivals level straight to Myeong-dong, then a 7-minute uphill walk.', { alt: 'AREX to Seoul Station, then Line 4 two stops to Myeong-dong (75–95 min). A taxi is 60–80 min, about ₩60,000–90,000.' }),
        at('14:00', 'Drop bags · Artmonstay', { booked: true, sub: 'Check-in opens at 15:00.' }),
        go('14:10', 'Artmonstay → Myeong-dong', ['Walk'], '5 min', 'Downhill into the shopping streets.'),
        at('14:15', 'Explore Myeong-dong', { until: '15:20', sub: 'K-beauty shops, the cathedral, and the first street-food carts.' }),
        go('15:20', 'Myeong-dong → Artmonstay', ['Walk'], '5–10 min', 'Back up the hill.'),
        ready('15:30', '16:45', 'Artmonstay', { sub: 'Check in, and shower off the flight.' }),
        go('16:45', 'Artmonstay → N Seoul Tower', ['Walk', 'Cable car'], '25–45 min', 'The Namsan cable car base is 120 m from the hotel. Three minutes up, then a short climb to the tower. Sunday sunset queues can add 20–30 minutes.'),
        at('17:15', 'N Seoul Tower at sunset', { until: '18:30', sub: 'Sunset is about 17:30.' }),
        go('18:30', 'Tower → Mokmyeoksanbang', ['Cable car', 'Walk'], '15 min', 'Cable car down. The restaurant is beside the base station.'),
        at('18:45', 'Dinner · Mokmyeoksanbang', { sub: 'Last order 19:20, so be seated by 19:00. Order at the kiosk.' }),
        go('19:45', 'Mokmyeoksanbang → Myeong-dong', ['Walk'], '5–10 min', 'Downhill to the stalls.'),
        at('19:50', 'Myeong-dong street food', { sub: 'Stalls run until about 22:00. Artmonstay is a 5–10 minute walk back up.' }),
      ],
    },

    2: {
      stay: 'Artmonstay · Myeong-dong',
      rows: [
        go('08:25', 'Artmonstay → Gyeongbokgung', ['Metro'], '35 min', 'Walk to Myeong-dong station, take Line 4 one stop to Chungmuro, then change to Line 3 for Gyeongbokgung (exit 5 leads into the palace).', { alt: 'Taxi, about 20 min.' }),
        at('09:00', 'Gyeongbokgung, Geoncheonggung & Hyangwonjeong', { until: '11:15', sub: 'The guard changes at 10:00. Last entry is 16:00.' }),
        go('11:15', 'Gyeongbokgung → Bukchon', ['Walk'], '15 min', 'Out of the east gate and up into the lanes.'),
        at('11:30', 'Bukchon Hanok Village', { until: '12:30', sub: 'The Red Zone is open to visitors 10:00–17:00.' }),
        go('12:30', 'Bukchon → Gwanghwamun Square', ['Walk'], '20 min', 'Downhill past Anguk to King Sejong’s statue.'),
        at('12:50', 'Gwanghwamun Square & Cheonggyecheon', { until: '13:30', sub: 'Stroll east along the stream from Cheonggye Plaza.' }),
        go('13:30', 'Cheonggyecheon → Namdaemun Market', ['Walk'], '20 min', 'South past City Hall and Sungnyemun gate.', { alt: 'Taxi, about 10 min.' }),
        at('13:50', 'Lunch · Namdaemun Kalguksu Alley', { until: '14:30', sub: 'About 30 m inside Gate 5.' }),
        go('14:30', 'Namdaemun → Lotte World', ['Metro'], '40 min', 'Line 4 from Hoehyeon to Dongdaemun History & Culture Park, then Line 2 to Jamsil. The park connects to the station underground.'),
        at('15:10', 'Lotte World Adventure', { until: '18:15', sub: 'Check lotteworld.com for the day’s hours.' }),
        go('18:15', 'Lotte World → Artmonstay', ['Metro'], '45 min', 'Line 2 to Dongdaemun History & Culture Park, Line 4 two stops to Myeong-dong, then walk up.'),
        ready('19:00', '20:00', 'Artmonstay'),
        go('20:00', 'Artmonstay → Geumdwaeji Sikdang', ['Taxi'], '10 min', 'To 149 Dasan-ro, by Yaksu station.', { alt: 'Line 4 to Chungmuro, then Line 3 two stops to Yaksu, about 20 min.' }),
        at('20:10', 'Dinner · Geumdwaeji Sikdang', { sub: 'No bookings, and an hour’s queue is common. Last order is about 22:20. A taxi back to the hotel is about 10 min.' }),
      ],
    },

    3: {
      stay: 'Artmonstay · Myeong-dong',
      rows: [
        go('08:30', 'Artmonstay → Changdeokgung', ['Metro'], '30 min', 'Line 4 to Chungmuro, then Line 3 to Anguk (exit 3) and a 5-minute walk.', { alt: 'Taxi, about 15 min.' }),
        at('09:00', 'Changdeokgung & the Secret Garden', { until: '12:00', sub: 'The Huwon is timed tours only. The 10:30 English tour fits, so book it.' }),
        go('12:00', 'Changdeokgung → War Memorial', ['Taxi'], '20 min', 'Across town to Samgakji.', { alt: 'Line 3 to Yaksu, then Line 6 to Samgakji (exit 12), about 35 min.' }),
        at('12:30', 'War Memorial of Korea', { until: '14:45', sub: 'Have lunch at the museum café or around Samgakji.' }),
        go('14:45', 'War Memorial → Yongsan Park', ['Metro'], '15 min', 'Line 4 two stops from Samgakji to Ichon (exit 2), then into the park.'),
        at('15:00', 'Yongsan Park', { until: '15:30' }),
        at('15:30', 'National Museum of Korea', { until: '17:15', sub: 'It closes at 17:30 on Tuesdays.' }),
        go('17:15', 'Museum → Artmonstay', ['Metro'], '30 min', 'Line 4 straight from Ichon to Myeong-dong (six stops), then walk up.'),
        ready('17:45', '19:00', 'Artmonstay'),
        go('19:00', 'Artmonstay → Deoksugung', ['Walk'], '15 min', 'Across Myeong-dong to City Hall.', { alt: 'Taxi, about 7 min.' }),
        at('19:15', 'Deoksugung by night', { until: '19:45', sub: 'Last entry is 20:00. Walk the Doldam-gil lane on the way out.' }),
        go('19:45', 'Deoksugung → Miro Sikdang', ['Metro', 'Taxi'], '30 min', 'Line 2 from City Hall to Hongik University (about 15 min), then a short taxi up the hill.'),
        at('20:15', 'Dinner · Miro Sikdang', { warn: true, sub: 'Listed as closed on Tuesdays, so call 0507-1412-3777 first. Plan B: Hongdae’s barbecue places and pocha tents.' }),
        at('21:45', 'Hongdae', { sub: 'Bars and buskers. A taxi back to Artmonstay is about 20–25 min.' }),
      ],
    },

    4: {
      stay: 'Airbnb · Hanakawado, Asakusa',
      rows: [
        go('06:45', 'Artmonstay → Incheon Terminal 1', ['Metro', 'Airport rail'], '75 min', 'Line 4 two stops to Seoul Station, then AREX Express (about 43 min) or All-stop (about 59 min) to Terminal 1.', { alt: 'Limousine bus 6015 from Myeong-dong (allow 70+ min), or a taxi (about 60 min).' }),
        at('08:00', 'Incheon Terminal 1, not T2', { sub: 'Jeju Air checks in at T1.' }),
        at('10:25', 'Jeju Air 7C1103 to Tokyo Narita', { booked: true, sub: 'Arrives at Terminal 3 at 12:50. Same time zone.' }),
        go('13:30', 'Narita T3 → Airbnb', ['Walk', 'Train'], '75–90 min', 'Walk about 10 minutes (or take the shuttle) to the Terminal 2·3 station. The Keisei Access Express runs straight through to Asakusa (50–60 min, ¥1,290), then it’s 10 minutes on foot. Check the train continues onto the Asakusa Line.', { alt: 'Skyliner to Ueno, then the Ginza Line to Asakusa.' }),
        at('15:00', 'Check in · Airbnb, Hanakawado', { booked: true, sub: 'If you arrive early: the Yamato counter in Tobu Asakusa’s Ekimise building holds bags (¥500).' }),
        go('15:30', 'Airbnb → Sensō-ji', ['Walk'], '8 min', 'West through the backstreets.'),
        at('15:40', 'Sensō-ji & Nakamise-dōri', { until: '16:45', sub: 'The Main Hall closes at 17:00.' }),
        go('16:45', 'Asakusa → Ueno', ['Metro'], '10 min', 'Ginza Line, three stops.'),
        at('16:55', 'Ueno Park at dusk', { until: '17:30', sub: 'Shinobazu Pond and Benten-dō.' }),
        go('17:30', 'Ueno → Airbnb', ['Metro', 'Walk'], '20 min', 'Ginza Line back to Asakusa, then walk.'),
        ready('17:50', '18:50', 'the Airbnb'),
        go('18:50', 'Airbnb → Bar Benfiddich', ['Metro', 'Train'], '45 min', 'Ginza Line to Kanda, the JR Chūō Line rapid to Shinjuku, then 8 minutes from the west exit to 1-13-7 Nishi-Shinjuku.', { alt: 'Taxi, about 35 min.' }),
        at('19:35', 'Cocktail · Bar Benfiddich', { sub: 'It opens at 18:00 and fills fast, so phone ahead.' }),
        go('20:25', 'Benfiddich → Omoide Yokochō', ['Walk'], '5 min', 'To the alleys by the tracks at the west exit.'),
        at('20:30', 'Izakaya · Omoide Yokochō'),
        go('21:50', 'Omoide Yokochō → Golden Gai', ['Walk'], '10 min', 'Under the tracks to east Shinjuku.'),
        at('22:00', 'Golden Gai', { sub: 'Home by taxi is about 30 min (late-night surcharge, about ¥6,000–7,000), or JR and the Ginza Line before the last trains around midnight.' }),
      ],
    },

    5: {
      stay: 'Airbnb · Hanakawado, Asakusa',
      notes: [note('To do: book teamLab Planets for a 14:30 entry. Tickets are timed and aren’t sold on site.', { warn: true })],
      rows: [
        go('07:25', 'Airbnb → Tsukiji Outer Market', ['Metro'], '35 min', 'Walk to Toei Asakusa station, take the Toei Asakusa Line to Higashi-ginza (about 15 min), then a 5-minute walk.'),
        at('08:00', 'Breakfast · Tsukiji Outer Market', { until: '09:45' }),
        go('09:45', 'Tsukiji → Imperial Palace East Gardens', ['Taxi'], '15 min', 'To Ōte-mon gate.', { alt: 'Hibiya Line to Hibiya, then the Chiyoda Line one stop to Ōtemachi, about 25 min.' }),
        at('10:00', 'Imperial Palace East Gardens', { until: '11:45', sub: 'Open 09:00–16:00 today (last entry 15:30).' }),
        go('11:45', 'East Gardens → Akihabara', ['Walk', 'Train'], '25 min', 'Walk from Ōte-mon to Tokyo Station (about 12 min), then the JR Yamanote or Keihin-Tōhoku Line two stops.'),
        at('12:10', 'Akihabara, and lunch', { until: '13:45' }),
        go('13:45', 'Akihabara → teamLab Planets', ['Train'], '45 min', 'JR to Shimbashi (about 8 min), then the Yurikamome to Shin-Toyosu (about 28 min) and a 3-minute walk.', { alt: 'Taxi, about 25 min.' }),
        at('14:30', 'teamLab Planets', { until: '16:15', warn: true, sub: 'Book a 14:30 entry. Tickets are timed and aren’t sold on site.' }),
        go('16:15', 'teamLab → Airbnb', ['Metro'], '60 min', 'Walk to Toyosu station (about 10 min), take the Yūrakuchō Line to Ginza-itchōme, walk to Ginza and take the Ginza Line to Asakusa, then walk.', { alt: 'Taxi, about 30 min and ¥5,000.' }),
        ready('17:15', '18:50', 'the Airbnb'),
        go('18:50', 'Airbnb → Trattoria Buca’Massimo', ['Taxi'], '20 min', 'To 1-24-11 Tomioka, by Monzen-nakachō station. About ¥3,000.', { alt: 'Ginza Line to Nihombashi, then the Tōzai Line two stops to Monzen-nakachō, about 40 min.' }),
        at('19:30', 'Dinner · Trattoria Buca’Massimo', { booked: true, sub: 'The kitchen closes at 20:30, so don’t be late.' }),
        go('21:15', 'Monzen-nakachō → Bar Orchard Ginza', ['Metro'], '20 min', 'Ōedo Line one stop to Tsukishima, the Yūrakuchō Line to Ginza-itchōme, then a 5-minute walk.', { alt: 'Taxi, about 15 min.' }),
        at('21:35', 'Cocktails · Bar Orchard Ginza', { sub: 'Very small, so reserve or expect a wait. Home is the Ginza Line straight to Asakusa (about 30 min door to door) or a 20-minute taxi.' }),
      ],
    },

    6: {
      stay: 'Airbnb · Hanakawado, Asakusa',
      rows: [
        go('09:15', 'Airbnb → Meiji Jingū', ['Metro'], '45 min', 'Ginza Line from Asakusa to Omotesandō (about 32 min), the Chiyoda Line one stop to Meiji-jingūmae, then 3 minutes to the torii.'),
        at('10:00', 'Meiji Jingū', { until: '11:45', sub: 'The museum is open today, 10:00–16:30.' }),
        go('11:45', 'Meiji Jingū → Harajuku', ['Walk'], '5 min', 'Out of the south gate to Takeshita-dōri.'),
        at('11:50', 'Harajuku · Takeshita-dōri & Omotesandō', { until: '15:10', sub: 'Lunch along the way.' }),
        go('15:10', 'Omotesandō → Shibuya', ['Walk'], '20 min', 'Down Cat Street.'),
        at('15:30', 'Shibuya Crossing', { until: '16:45', sub: 'Sunset is about 16:40.' }),
        go('16:45', 'Shibuya → Airbnb', ['Metro'], '45 min', 'The Ginza Line runs end to end from Shibuya to Asakusa (about 33 min), then walk.'),
        ready('17:30', '18:35', 'the Airbnb'),
        go('18:35', 'Airbnb → Bar LIBRE GINZA', ['Metro'], '30 min', 'Ginza Line to Kyōbashi (about 18 min), then a 5-minute walk to 1-6-6 Ginza.'),
        at('19:05', 'Cocktail · Bar LIBRE GINZA', { until: '19:40' }),
        go('19:40', 'Bar LIBRE → Yakitori Takahashi', ['Walk'], '15 min', 'Up Chūō-dōri to 2-10-11 Nihonbashi.', { alt: 'Ginza Line one stop, Kyōbashi → Nihombashi.' }),
        at('20:00', 'Dinner · Yakitori Takahashi', { booked: true, sub: 'Ten seats and strict cancellation terms, so be on time. Home is the Ginza Line from Nihombashi to Asakusa, about 25 min door to door.' }),
      ],
    },

    7: {
      stay: 'Candeo Hotels Osaka The Tower',
      rows: [
        go('08:40', 'Airbnb → Tokyo Station', ['Metro', 'Train'], '30 min', 'With bags: Ginza Line to Kanda, then JR one stop to Tokyo. The Tōkaidō Shinkansen is on the Yaesu side.', { alt: 'Taxi, 20–25 min.' }),
        at('09:30', 'Nozomi 21 to Shin-Osaka', { booked: true, sub: 'Arrives 12:00, and it only stops for two minutes. Sit in seat E for Mt Fuji.' }),
        go('12:00', 'Shin-Osaka → Candeo Hotels', ['Metro'], '25 min', 'Midōsuji Line four stops to Yodoyabashi (exit 7), then a 6-minute walk.'),
        at('12:30', 'Drop bags · Candeo Hotels Osaka The Tower', { booked: true }),
        go('12:40', 'Hotel → Namba Yasaka Jinja', ['Metro', 'Walk'], '25 min', 'Walk to Yodoyabashi, take the Midōsuji Line three stops to Namba, then walk 10 minutes west.'),
        at('13:05', 'Namba Yasaka Jinja, and a takoyaki lunch', { until: '14:15', sub: 'The grounds close at about 17:00.' }),
        go('14:15', 'Namba → hotel', ['Metro'], '25 min', 'Midōsuji Line back to Yodoyabashi.'),
        at('15:00', 'Check in · the SkySpa', { until: '16:15', sub: 'The open-air bath is on the 31st floor. It’s gender-separated and nude bathing, so no swimwear.' }),
        go('16:20', 'Hotel → Dōtonbori', ['Metro'], '20 min', 'Yodoyabashi to Namba on the Midōsuji Line, exit 14.'),
        at('16:40', 'Dōtonbori at dusk', { until: '17:45', sub: 'Sunset is about 16:58, and the neon is on by about 17:15.' }),
        go('17:45', 'Dōtonbori → hotel', ['Metro'], '25 min', 'Midōsuji Line from Namba to Yodoyabashi, then walk.'),
        ready('18:10', '19:15', 'Candeo', { sub: 'A night soak in the SkySpa counts.' }),
        go('19:15', 'Hotel → Misono, Kobe', ['Taxi', 'Train'], '40 min', 'A short taxi (or a 15-minute walk) to JR Osaka, the Special Rapid to Sannomiya (about 21 min, every 15 min), then 5 minutes on foot.', { alt: 'Hankyu Limited Express from Osaka-umeda, about 30 min. Its West Gate is 2 minutes from Misono.' }),
        at('20:00', 'Dinner · Misono Kobe', { booked: true, sub: 'Last order 21:00, and no-shows are released after 30 min.' }),
        go('21:50', 'Kobe → hotel', ['Train', 'Taxi'], '45 min', 'JR Special Rapid from Sannomiya to Osaka, then a short taxi to Dōjimahama.'),
      ],
    },

    8: {
      stay: 'KAYA Kyoto Nijo Castle',
      rows: [
        go('08:00', 'Candeo → Nara', ['Walk', 'Metro', 'Train'], '75 min', 'With bags: walk to Yodoyabashi, take the Midōsuji Line to Namba, then the Kintetsu Nara Line Rapid Express to Kintetsu-Nara (about 40 min). There are coin lockers in the station.'),
        at('09:15', 'Nara Park, Tōdai-ji & Kasuga Taisha', { until: '13:00', sub: 'All on foot through the park: Tōdai-ji about 10:00, Kasuga Taisha about 11:30.' }),
        at('13:00', 'Lunch near Kintetsu-Nara', { until: '13:45', sub: 'Then collect the bags.' }),
        go('14:00', 'Nara → KAYA Kyoto', ['Train', 'Taxi'], '60 min', 'Kintetsu Limited Express to Kintetsu Kyoto (about 35 min, reserved seats), then a 15-minute taxi.'),
        at('15:00', 'Check in · KAYA Kyoto Nijo Castle', { booked: true }),
        go('15:30', 'KAYA → Gion', ['Taxi'], '15 min', 'To Yasaka Shrine or the top of Hanamikōji.', { alt: 'Subway via Karasuma Oike to Sanjō Keihan, then a 10-minute walk, about 30 min.' }),
        at('15:45', 'Gion at dusk', { until: '17:15', sub: 'Sunset is about 16:55. Hanamikōji, Shirakawa and Tatsumi Bridge.' }),
        go('17:15', 'Gion → KAYA', ['Taxi'], '20 min', 'Back across the river.'),
        ready('17:35', '18:40', 'KAYA'),
        go('18:40', 'KAYA → Bar Rocking Chair', ['Taxi'], '15 min', 'To Gokomachi-dōri, just south of Shijō.'),
        at('18:55', 'Cocktail · Bar Rocking Chair', { sub: 'First come, first served.' }),
        go('19:55', 'Rocking Chair → Pontochō', ['Walk'], '10 min', 'Across Kawaramachi to the alley.'),
        at('20:05', 'Dinner in Pontochō', { sub: 'Nothing booked. A taxi back to KAYA is 10–15 min.' }),
      ],
    },

    9: {
      stay: 'KAYA Kyoto Nijo Castle',
      rows: [
        go('08:35', 'KAYA → Nijō Castle', ['Walk'], '10 min', 'South down Horikawa-dōri to the East Gate.'),
        at('08:45', 'Nijō Castle', { until: '10:15', sub: 'Be at the gate for the 08:45 opening.' }),
        go('10:15', 'Nijō → Kyoto Gyoen', ['Taxi'], '10 min', 'To the Sakaimachi gate.', { alt: 'Walk about 25 min east along Marutamachi-dōri.' }),
        at('10:30', 'Kyoto Gyoen National Garden', { until: '12:10', sub: 'The palace itself is closed on Mondays.' }),
        go('12:10', 'Gyoen → Kinkaku-ji', ['Taxi'], '20 min', 'Buses are slower and crowded.'),
        at('12:30', 'Kinkaku-ji, and lunch nearby', { until: '14:25' }),
        go('14:25', 'Kinkaku-ji → Arashiyama', ['Taxi'], '30 min', 'To the north end of the bamboo grove.'),
        at('15:00', 'Arashiyama Bamboo Grove & Togetsukyō', { until: '17:00', sub: 'Sunset is about 16:55.' }),
        go('17:00', 'Arashiyama → KAYA', ['Train', 'Taxi'], '45 min', 'JR Sagano Line from Saga-Arashiyama to Nijō (about 12 min), then a 5-minute taxi or 20-minute walk.', { alt: 'Taxi all the way, about 35 min.' }),
        ready('17:45', '19:25', 'KAYA'),
        go('19:25', 'KAYA → Ten no Meshi', ['Taxi'], '20 min', 'To 255 Gionmachi Kitagawa, near Gion-Shijō.'),
        at('20:00', 'Dinner · Kyoto Tempura Ten no Meshi', { booked: true, sub: 'A taxi back to KAYA is about 15 min.' }),
      ],
    },

    10: {
      stay: 'Checking out of KAYA → Neko Yard, Hiroshima',
      notes: [note('To do: ask KAYA for a late check-out until about 16:30 (or at least somewhere to change), so you can get ready before Badu.', { warn: true })],
      rows: [
        at('07:00', 'Check out · bags with the front desk'),
        go('07:00', 'KAYA → Fushimi Inari', ['Taxi'], '25 min', 'To the main gate.', { alt: 'Karasuma Line to Kyoto, then the JR Nara Line two stops to Inari, about 35 min.' }),
        at('07:30', 'Fushimi Inari Taisha', { until: '10:30', sub: 'The lower tunnels are packed by 10:00.' }),
        go('10:30', 'Fushimi Inari → Sanjūsangen-dō', ['Train', 'Walk'], '20 min', 'Keihan Line from Fushimi-Inari to Shichijō (about 5 min), then a 7-minute walk.'),
        at('10:50', 'Sanjūsangen-dō', { until: '11:50' }),
        go('11:50', 'Sanjūsangen-dō → Kiyomizu-dera', ['Walk'], '20 min', 'Uphill along Gojō-zaka.', { alt: 'Taxi, about 8 min.' }),
        at('12:10', 'Kiyomizu-dera, Sannenzaka & Ninenzaka', { until: '15:00', sub: 'Have lunch on the lanes.' }),
        go('15:00', 'Kiyomizu → KAYA', ['Taxi'], '25 min', 'Across the city to Nijō.'),
        ready('15:25', '16:25', 'KAYA', { warn: true, sub: 'Only if KAYA agrees a late check-out, or lets you change.' }),
        go('16:25', 'KAYA → Badu', ['Taxi'], '25 min', 'Ask to be dropped at Shishigatani Fire Station and walk the last few minutes. Badu asks guests not to taxi to the door.'),
        at('17:00', 'Dinner · Badu', { booked: true }),
        go('19:30', 'Badu → KAYA → Kyoto Station', ['Taxi'], '45 min', '20–25 min to KAYA to collect the bags, then 15–20 min to the station. Be on the concourse by 20:45.'),
        at('21:07', 'Nozomi 59 to Hiroshima', { booked: true, sub: 'Arrives 22:44.' }),
        go('22:44', 'Hiroshima Station → Neko Yard', ['Taxi'], '15 min', 'Best with bags this late.', { alt: 'Tram 2 or 6 to Dobashi, about 20 min.' }),
        at('23:00', 'Check in · b hotel Neko Yard', { booked: true, sub: 'Self check-in by smart lock. The door code comes by email.' }),
      ],
    },

    11: {
      stay: 'b hotel Neko Yard · Hiroshima',
      rows: [
        go('08:20', 'Neko Yard → Peace Memorial Park', ['Walk'], '10 min', 'East across the Honkawa river.'),
        at('08:30', 'Peace Memorial Park', { until: '09:30' }),
        at('09:30', 'Peace Memorial Museum', { until: '11:45', sub: 'Book a timed web ticket.' }),
        go('11:45', 'Museum → Atomic Bomb Dome', ['Walk'], '10 min', 'North up the park’s axis.'),
        at('12:00', 'Atomic Bomb Dome, and lunch', { until: '14:00' }),
        go('14:00', 'Dome → Hiroshima Castle', ['Walk'], '20 min', 'North through Chūō Park.', { alt: 'Taxi, about 5 min.' }),
        at('14:30', 'Hiroshima Castle', { until: '15:45', sub: 'The keep is closed for good. The grounds and Ninomaru are open until 16:30.' }),
        go('15:45', 'Castle → Neko Yard', ['Taxi'], '10 min', 'Back to Nekoya-machi.', { alt: 'Walk, about 25 min.' }),
        ready('16:00', '18:15', 'Neko Yard', { sub: 'A long rest before dinner.' }),
        go('18:15', 'Neko Yard → Nagata-ya', ['Walk'], '15 min', 'Over the river by the Dome to 1-7-19 Ōtemachi.'),
        at('18:30', 'Dinner · Okonomiyaki Nagata-ya', { sub: 'No bookings, so join the queue by 18:30. Last order 20:00. Walk home past the Dome, which is lit at night.' }),
      ],
    },

    12: {
      stay: 'Branche Sumiyoshi EAST · Fukuoka',
      notes: [note('Tight: you only get the full hour if you leave the sumo promptly. An easier option is to have the bags delivered from the Hakata Station counter to the apartment (about ¥1,500, same day) and take a taxi straight there from the sumo. Check the host can take them in.', { warn: true })],
      rows: [
        at('09:15', 'Check out · Neko Yard'),
        go('09:15', 'Neko Yard → Hiroshima Station', ['Taxi'], '15 min', 'With bags. Be on the platform by 09:45.'),
        at('09:50', 'Nozomi 1 to Hakata', { booked: true, sub: 'Arrives 10:52.' }),
        go('10:52', 'Platform → luggage counter', ['Walk'], '10 min', 'The Crosta counter (2F, Shinkansen side) or TABINAKA in KITTE Hakata.'),
        at('11:05', 'Drop bags at Hakata Station'),
        go('11:10', 'Hakata Station → Canal City', ['Walk'], '15 min', 'West along Hakata-ekimae-dōri.'),
        at('11:30', 'Canal City Hakata, and ramen lunch', { until: '13:35', sub: 'Ramen Stadium is on 5F.' }),
        go('13:35', 'Canal City → Fukuoka Kokusai Center', ['Taxi'], '10 min', 'To the arena by the port.'),
        at('14:00', 'Grand Sumo · Kyushu Basho', { booked: true, until: '17:50', sub: 'The top division finishes at about 18:00.' }),
        go('17:50', 'Kokusai Center → Hakata Station', ['Taxi'], '15 min', 'Expect a taxi queue after the last bouts.'),
        at('18:10', 'Collect bags'),
        go('18:15', 'Hakata Station → Branche Sumiyoshi EAST', ['Taxi'], '7 min', 'To 4-25-15 Sumiyoshi.'),
        ready('18:30', '19:40', 'the apartment', { sub: 'Check in first.' }),
        go('19:40', 'Apartment → GohGan', ['Walk'], '10 min', 'To the 010 Building, 1-4-17 Sumiyoshi, by Canal City.'),
        at('20:00', 'Dinner · GohGan', { booked: true, sub: 'The course menu’s last order is 20:00, so be on time.' }),
      ],
    },

    13: {
      stay: 'Island Shangri-La · Hong Kong',
      notes: [note('To do: tell Rob it’s 19:30 at the Peak Tram on Garden Road.', { warn: true })],
      rows: [
        at('09:30', 'Check out · Branche Sumiyoshi EAST', { sub: 'Check-out is by 10:00.' }),
        go('09:30', 'Apartment → Fukuoka Airport, International Terminal', ['Taxi'], '25 min', 'There’s no subway stop at the International Terminal.'),
        at('13:25', 'Hong Kong Airlines HX639', { booked: true, sub: 'Hong Kong is an hour behind Japan.' }),
        at('16:40', 'Land at Hong Kong', { sub: 'Allow about 45 min for immigration and bags.' }),
        go('17:25', 'HKG → Island Shangri-La', ['Airport rail', 'Taxi'], '40 min', 'Airport Express to Hong Kong Station (24 min, every 10 min), then a 10-minute taxi.', { alt: 'Taxi direct, about 40 min and HK$400.' }),
        at('18:05', 'Check in · Island Shangri-La', { booked: true }),
        ready('18:15', '19:15', 'the hotel'),
        go('19:15', 'Hotel → Peak Tram', ['Walk'], '15 min', 'Through Hong Kong Park to the Garden Road terminus.'),
        at('19:30', 'Meet Rob · Peak Tram', { sub: 'Friday-night tram queues can be 30 min or more, and a taxi up takes about 20 min.' }),
        at('20:00', 'Victoria Peak by night', { until: '21:00', sub: 'Sky Terrace 428 is open until 22:00, or take the free Lugard Road lookout.' }),
        go('21:00', 'Peak → COA', ['Taxi'], '20 min', 'Down to Hollywood Road at Gough Street.'),
        at('21:20', 'COA, and dinner nearby', { sub: 'Put your names down at the door, then eat nearby until they text you. A taxi back to the hotel is about 10 min.' }),
      ],
    },

    14: {
      stay: 'Island Shangri-La · Hong Kong',
      rows: [
        go('09:45', 'Hotel → Mid-Levels escalator', ['Walk'], '20 min', 'Covered walkways from Pacific Place through Central to the escalator at Queen’s Road Central.'),
        at('10:05', 'Central, the escalator & Hollywood Road', { until: '12:30', sub: 'The escalator runs uphill from 10:00. Visit PMQ, Tai Kwun and Man Mo Temple.' }),
        at('12:30', 'Lunch · Man Mo Dim Sum', { until: '13:45', sub: 'Book online. There’s a HK$100 a head no-show fee.' }),
        go('13:45', 'Hollywood Road → Central Pier 7', ['Walk'], '20 min', 'Downhill to the harbour.', { alt: 'Taxi, about 10 min.' }),
        at('14:10', 'Star Ferry to Tsim Sha Tsui and back', { until: '15:10', sub: '10 minutes each way, with a walk on the promenade.' }),
        go('15:10', 'Central Pier → hotel', ['Taxi'], '15 min', 'Round to Pacific Place.', { alt: 'Walk about 20 min via IFC and the walkways.' }),
        ready('15:30', '16:40', 'the hotel'),
        go('16:40', 'Hotel → Bar Leone', ['Taxi'], '15 min', 'To 11–15 Bridges Street.'),
        at('16:55', 'Drinks · Bar Leone', { sub: 'Walk-in only, so be in the queue for the 17:00 opening.' }),
        go('19:10', 'Bar Leone → MONO', ['Walk'], '15 min', 'Downhill to 18 On Lan Street.', { alt: 'Taxi, about 5 min.' }),
        at('19:30', 'Dinner · MONO', { booked: true, sub: 'Last order 20:15. A taxi back to the hotel is about 10 min.' }),
      ],
    },

    15: {
      stay: 'Island Shangri-La · Hong Kong',
      rows: [
        go('09:10', 'Hotel → Dragon’s Back trailhead', ['Metro', 'Bus'], '50 min', 'Island Line from Admiralty to Shau Kei Wan (exit A3), then Citybus 9 to the To Tei Wan stop. Expect a Sunday queue for the 9.'),
        at('10:00', 'Hike the Dragon’s Back', { until: '13:00', sub: 'About 2.5 hours to Tai Tam Gap. There’s no shade, so carry a litre of water each.' }),
        go('13:00', 'Tai Tam Gap → Shek O', ['Bus'], '10 min', 'Bus 9 on to Shek O village. Allow for a Sunday queue.'),
        at('13:30', 'Shek O · beach & village lunch', { until: '14:30' }),
        go('14:30', 'Shek O → Stanley', ['Taxi'], '25 min', 'Round the south coast.'),
        at('15:00', 'Stanley', { until: '16:30' }),
        go('16:30', 'Stanley → Repulse Bay', ['Bus'], '15 min', 'Citybus 6, 6X or 260 towards Central.', { alt: 'Taxi, about 10 min.' }),
        at('16:45', 'Repulse Bay at golden hour', { until: '17:45', sub: 'Sunset is 17:40.' }),
        go('17:45', 'Repulse Bay → hotel', ['Taxi'], '25 min', 'Through the Aberdeen Tunnel to Admiralty.', { alt: 'Bus 6, 6X or 260 back towards Central, about 30 min.' }),
        ready('18:10', '19:15', 'the hotel'),
        go('19:15', 'Hotel → Central', ['Taxi'], '10 min', 'To Ho Lee Fook, Yat Lok or Mak’s.'),
        at('19:30', 'Relaxed dinner in Central', { sub: 'A taxi back is about 10 min. Then pack and settle the bill.' }),
      ],
    },

    16: {
      stay: 'Homeward',
      rows: [
        go('05:30', 'Island Shangri-La → HKG', ['Taxi'], '35–40 min', 'Light traffic this early. Settle the bill the night before.'),
        at('08:10', 'Cathay Pacific CX257 to London', { booked: true, sub: 'About 14h 50m non-stop.' }),
        at('~15:00', 'Land at Heathrow', { sub: 'Home the same afternoon.' }),
      ],
    },
  };
})();
