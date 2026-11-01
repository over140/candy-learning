// Two practice exams. In every question the FIRST option is the correct one;
// options are shuffled when the page renders.
const EXAMS = {
  1: {
    title: "Exam A — Football & Basketball",
    intro: "Based on the class listening text and reading text. Answer every question, then press Submit.",
    sections: [
      {
        title: "Section 1 · Listening",
        titleAr: "الاستماع",
        type: "listening",
        passageTitle: "كُرَةُ القَدَمِ وَكُرَةُ السَّلَّة",
        passage:
          "تُعَدُّ كُرَةُ القَدَمِ وَكُرَةُ السَّلَّةِ مِنَ الرِّيَاضَاتِ الجَمَاعِيَّةِ المَشْهُورَةِ فِي العَالَمِ. يَلْعَبُ النَّاسُ كُرَةَ القَدَمِ وَكُرَةَ السَّلَّةِ فِي مَلَاعِبَ مُسْتَطِيلَةِ الشَّكْلِ. " +
          "فِي كُرَةِ القَدَمِ، يَتَكَوَّنُ كُلُّ فَرِيقٍ مِنْ 11 لَاعِبًا، وَتَتَكَوَّنُ المُبَارَاةُ مِنْ شَوْطَيْنِ، مُدَّةُ كُلِّ شَوْطٍ 45 دَقِيقَةً. يَسْتَخْدِمُ اللَّاعِبُونَ أَرْجُلَهُمْ فِي اللَّعِبِ، أَمَّا حَارِسُ المَرْمَى فَيَسْتَطِيعُ اسْتِخْدَامَ يَدَيْهِ أَيْضًا. " +
          "أَمَّا كُرَةُ السَّلَّةِ، فَيَلْعَبُهَا فَرِيقَانِ، وَفِي كُلِّ فَرِيقٍ 5 لَاعِبِينَ. وَتَتَكَوَّنُ المُبَارَاةُ مِنْ شَوْطَيْنِ أَيْضًا. يَسْتَخْدِمُ اللَّاعِبُونَ أَيْدِيَهُمْ لِتَسْجِيلِ النِّقَاطِ، وَالفَرِيقُ الَّذِي يُسَجِّلُ نِقَاطًا أَكْثَرَ يَفُوزُ بِالمُبَارَاةِ. " +
          "الرِّيَاضَةُ تُقَوِّي الجِسْمَ وَتُسَاعِدُ عَلَى الحِفَاظِ عَلَى الصِّحَّةِ.",
        questions: [
          {
            q: "Football and basketball are…",
            opts: ["popular team sports in the world", "individual sports", "traditional Emirati sports", "sports played only in winter"],
            exp: "مِنَ الرِّيَاضَاتِ الجَمَاعِيَّةِ المَشْهُورَةِ فِي العَالَمِ = popular team sports in the world.",
          },
          {
            q: "What shape are the pitches / courts?",
            opts: ["rectangular", "round", "square", "triangular"],
            exp: "مَلَاعِبَ مُسْتَطِيلَةِ الشَّكْلِ = rectangular-shaped pitches.",
          },
          {
            q: "In football, how long is each half?",
            opts: ["45 minutes", "20 minutes", "10 minutes", "90 minutes"],
            exp: "مُدَّةُ كُلِّ شَوْطٍ 45 دَقِيقَةً. (90 minutes is the whole match, not one half.)",
          },
          {
            q: "In football, who can also use their hands?",
            opts: ["the goalkeeper", "every player", "only the captain", "nobody"],
            exp: "أَمَّا حَارِسُ المَرْمَى فَيَسْتَطِيعُ اسْتِخْدَامَ يَدَيْهِ أَيْضًا.",
          },
          {
            q: "In basketball, which team wins the match?",
            opts: ["the team that scores more points", "the team with more players", "the team that runs faster", "the team that plays at home"],
            exp: "الفَرِيقُ الَّذِي يُسَجِّلُ نِقَاطًا أَكْثَرَ يَفُوزُ بِالمُبَارَاةِ.",
          },
          {
            q: "What does the recording say sport does?",
            opts: ["It strengthens the body and helps keep you healthy.", "It makes you tired and bored.", "It is only for adults.", "It is dangerous for children."],
            exp: "تُقَوِّي الجِسْمَ = strengthens the body; تُسَاعِدُ عَلَى الحِفَاظِ عَلَى الصِّحَّةِ = helps to keep healthy.",
          },
        ],
      },
      {
        title: "Section 2 · Reading",
        titleAr: "القراءة",
        type: "reading",
        passageTitle: "كُرَةُ السَّلَّةِ وَكُرَةُ القَدَم",
        passage:
          "كُرَةُ السَّلَّةِ هِيَ رِيَاضَةٌ لِلصِّغَارِ وَالكِبَارِ، هِيَ رِيَاضَةٌ جَمَاعِيَّةٌ وَيَتَنَافَسُ فِيهَا فَرِيقَانِ، يَتَأَلَّفُ كُلٌّ مِنْهُمَا مِنْ خَمْسَةِ لَاعِبِينَ، يُحَاوِلُ كُلٌّ مِنْهُمَا إِدْخَالَ الكُرَةِ فِي سَلَّةِ الفَرِيقِ الثَّانِي وَيَفُوزُ الفَرِيقُ الَّذِي يُسَجِّلُ نِقَاطًا أَكْثَرَ. المَلْعَبُ فِي كُرَةِ السَّلَّةِ عَلَى شَكْلٍ مُسْتَطِيلٍ مَصْنُوعٍ مِنَ الخَشَبِ.\n\n" +
          "المُبَارَاةُ فِي كُرَةِ السَّلَّةِ تَكُونُ مِنْ شَوْطَيْنِ، وَتَبْلُغُ مُدَّةُ الشَّوْطِ الوَاحِدِ مِنْهُمَا عِشْرِينَ دَقِيقَةً، وَيُقَسَّمُ الشَّوْطُ الوَاحِدُ عَلَى قِسْمَيْنِ، يَكُونُ مُدَّةُ كُلِّ قِسْمٍ عَشْرَ دَقَائِقَ. فِي كُرَةِ السَّلَّةِ يَكُونُ اللَّعِبُ بِالأَيْدِي فَقَطْ.\n\n" +
          "كُرَةُ القَدَمِ فَهِيَ اللُّعْبَةُ الأُولَى فِي العَالَمِ، لِأَنَّهَا سَحَرَتْ عُقُولَ العَالَمِ لِذَلِكَ سُمِّيَتْ بِالسَّاحِرَةِ المُسْتَدِيرَةِ وَهِيَ لُعْبَةٌ جَمَاعِيَّةٌ وَلَيْسَتْ فَرْدِيَّةً، تَكُونُ المُبَارَاةُ مِنْ فَرِيقَيْنِ فِي كُلٍّ مِنْهُمَا 11 لَاعِبًا، يَفُوزُ الفَرِيقُ الَّذِي يُسَجِّلُ أَهْدَافًا أَكْثَرَ. المَلْعَبُ فِي كُرَةِ القَدَمِ مُسْتَطِيلُ الشَّكْلِ. مُبَارَاةُ كُرَةِ القَدَمِ تَكُونُ مِنْ شَوْطَيْنِ مُدَّةُ كُلِّ شَوْطٍ 45 دَقِيقَةً. فِي كُرَةِ القَدَمِ يَكُونُ اللَّعِبُ بِالأَرْجُلِ فَقَطْ مَا عَدَا حَارِسَ المَرْمَى. يَجِبُ أَنْ يَكُونَ فِي المُبَارَاةِ 4 حُكَّامٍ فِي كُلٍّ مِنَ الرِّيَاضَتَيْنِ.",
        questions: [
          {
            q: "Who is basketball for?",
            opts: ["young people and adults", "children only", "adults only", "professional players only"],
            exp: "رِيَاضَةٌ لِلصِّغَارِ وَالكِبَارِ = a sport for the young and the old.",
          },
          {
            q: "In basketball, each team has…",
            opts: ["5 players", "11 players", "4 players", "10 players"],
            exp: "يَتَأَلَّفُ كُلٌّ مِنْهُمَا مِنْ خَمْسَةِ لَاعِبِينَ. يَتَأَلَّفُ = يَتَكَوَّنُ = consists of.",
          },
          {
            q: "What does each basketball team try to do?",
            opts: ["put the ball in the other team's basket", "kick the ball into the goal", "hit the ball over the net", "reach the finish line first"],
            exp: "إِدْخَالَ الكُرَةِ فِي سَلَّةِ الفَرِيقِ الثَّانِي.",
          },
          {
            q: "The basketball court is rectangular and made of…",
            opts: ["wood", "grass", "sand", "metal"],
            exp: "مَصْنُوعٍ مِنَ الخَشَبِ = made of wood.",
          },
          {
            q: "How is time organised in a basketball match (in this text)?",
            opts: [
              "2 halves of 20 minutes; each half has two 10-minute parts",
              "2 halves of 45 minutes",
              "4 halves of 20 minutes",
              "1 half of 10 minutes",
            ],
            exp: "شَوْطَيْنِ … عِشْرِينَ دَقِيقَةً … قِسْمَيْنِ … عَشْرَ دَقَائِقَ.",
          },
          {
            q: "Why is football called «السَّاحِرَةُ المُسْتَدِيرَة» (the round enchantress)?",
            opts: [
              "because it has enchanted (charmed) the minds of the world",
              "because the ball is magic",
              "because it is played at night",
              "because it is the oldest sport",
            ],
            exp: "لِأَنَّهَا سَحَرَتْ عُقُولَ العَالَمِ = because it charmed the minds of the world.",
          },
          {
            q: "Which sentence about football is TRUE?",
            opts: [
              "It is a team sport, not an individual sport.",
              "It is an individual sport.",
              "Players may use their hands.",
              "Each team has 5 players.",
            ],
            exp: "لُعْبَةٌ جَمَاعِيَّةٌ وَلَيْسَتْ فَرْدِيَّةً.",
          },
          {
            q: "How many referees must there be in a match in both sports?",
            opts: ["4", "2", "1", "11"],
            exp: "يَجِبُ أَنْ يَكُونَ فِي المُبَارَاةِ 4 حُكَّامٍ فِي كُلٍّ مِنَ الرِّيَاضَتَيْنِ.",
          },
        ],
      },
      {
        title: "Section 3 · Vocabulary",
        titleAr: "المفردات",
        questions: [
          { q: "What does this word mean?", ar: "شَوْط", opts: ["half (of a match)", "goal", "team", "minute"], exp: "شَوْط = one half of a match. مُبَارَاة = match." },
          { q: "What does this word mean?", ar: "مُدَّة", opts: ["length of time", "rectangle", "winner", "match"], exp: "مُدَّةُ كُلِّ شَوْطٍ = the length of each half." },
          { q: "Choose the Arabic for “player” (male).", opts: ["لَاعِب", "لُعْبَة", "مَلْعَب", "فَرِيق"], exp: "لَاعِب = player; لُعْبَة = game; مَلْعَب = pitch; فَرِيق = team. They look alike — learn them together!" },
          { q: "What does this word mean?", ar: "مُسْتَطِيل", opts: ["rectangle / rectangular", "round", "wooden", "popular"], exp: "مُسْتَطِيلُ الشَّكْلِ = rectangular in shape. (round = مُسْتَدِير)" },
          { q: "What does this word mean?", ar: "يُسَجِّل", opts: ["scores", "allows", "wins", "loses"], exp: "يُسَجِّلُ هَدَفًا = scores a goal. يُسْمَح = allows, يَفُوز = wins, يَخْسَر = loses." },
          { q: "Which one is a traditional Emirati sport?", opts: ["سِبَاقُ الهِجْن", "كُرَةُ السَّلَّة", "التَّزَلُّجُ عَلَى الجَلِيد", "المُلَاكَمَة"], exp: "سِبَاقُ الهِجْن = camel racing — a traditional sport (رِيَاضَةٌ تُرَاثِيَّة)." },
          { q: "What does this phrase mean?", ar: "وَاقِيَاتُ السَّاقَيْن", opts: ["shin pads", "helmet", "swimming goggles", "shorts"], exp: "خُوذَة = helmet, نَظَّارَةُ السِّبَاحَة = goggles, سِرْوَالٌ قَصِير = shorts." },
          { q: "What does this word mean?", ar: "التَّعَاوُن", opts: ["teamwork / cooperation", "balance", "speed", "accuracy"], exp: "التَّوَازُن = balance, السُّرْعَة = speed, الدِّقَّة = accuracy." },
          { q: "What does this word mean?", ar: "يَتَعَادَل", opts: ["draws (a match)", "wins", "loses", "passes"], exp: "يَفُوز = wins, يَخْسَر = loses, يَتَعَادَل = draws, يُمَرِّر = passes." },
          { q: "Choose the Arabic for “opponent”.", opts: ["مُنَافِس", "حَكَم", "فَائِز", "حَارِسُ المَرْمَى"], exp: "حَكَم = referee, فَائِز = winner, حَارِسُ المَرْمَى = goalkeeper." },
        ],
      },
      {
        title: "Section 4 · Grammar",
        titleAr: "القواعد",
        questions: [
          { q: "Fill the gap.", ar: "أُحِبُّ كُرَةَ السَّلَّةِ ______ مُثِيرَة.", opts: ["لِأَنَّهَا", "لِأَنَّهُ", "لِأَنَّنِي", "لَكِنْ"], exp: "كُرَة is feminine (ends in ة), so use لِأَنَّهَا." },
          { q: "Fill the gap.", ar: "أُحِبُّ الجَرْيَ ______ مُفِيدٌ لِلصِّحَّة.", opts: ["لِأَنَّهُ", "لِأَنَّهَا", "لِأَنَّنِي", "هِيَ"], exp: "الجَرْي is masculine, and the adjective مُفِيدٌ has no ة → لِأَنَّهُ." },
          { q: "Choose the correct adjective.", ar: "السِّبَاحَةُ رِيَاضَةٌ ______ .", opts: ["مُمْتِعَة", "مُمْتِع", "مُمْتِعُون", "مُمْتِعِين"], exp: "رِيَاضَة is feminine → the adjective needs ة: مُمْتِعَة." },
          { q: "Which sentence means “I practised swimming yesterday”?", opts: ["مَارَسْتُ السِّبَاحَةَ أَمْس.", "سَأُمَارِسُ السِّبَاحَةَ أَمْس.", "أُمَارِسُ السِّبَاحَةَ غَدًا.", "مَارَسْتُ السِّبَاحَةَ غَدًا."], exp: "Past: مَارَسْتُ + أَمْس. Present: أُمَارِسُ. Future: سَأُمَارِسُ + غَدًا." },
          { q: "Which sentence means “I will play tennis tomorrow”?", opts: ["سَأَلْعَبُ التِّنِسَ غَدًا.", "لَعِبْتُ التِّنِسَ غَدًا.", "أَلْعَبُ التِّنِسَ أَمْس.", "لَعِبْتُ التِّنِسَ أَمْس."], exp: "Future = سَـ + present verb: سَأَلْعَبُ." },
          { q: "Fill the gap.", ar: "يَتَكَوَّنُ كُلُّ فَرِيقٍ ______ أَحَدَ عَشَرَ لَاعِبًا.", opts: ["مِنْ", "فِي", "عَلَى", "إِلَى"], exp: "يَتَكَوَّنُ مِنْ = consists of. Always remember the pair: يَتَكَوَّنُ + مِنْ." },
          { q: "Which sentence means “Football is faster than golf”?", opts: ["كُرَةُ القَدَمِ أَسْرَعُ مِنَ الغولف.", "كُرَةُ القَدَمِ سَرِيعٌ مِنَ الغولف.", "كُرَةُ القَدَمِ أَسْرَعُ فِي الغولف.", "كُرَةُ القَدَمِ الأَسْرَعُ عَلَى الغولف."], exp: "Comparative = أَفْعَلُ + مِنْ: أَسْرَعُ مِنْ, أَسْهَلُ مِنْ, أَصْعَبُ مِنْ." },
        ],
      },
      {
        title: "Section 5 · Connectives & sentences",
        titleAr: "أدوات الربط",
        questions: [
          { q: "Which word means “whereas / while” (for contrast)?", opts: ["بَيْنَمَا", "لِذَلِكَ", "ثُمَّ", "أَخِيرًا"], exp: "لِذَلِكَ = therefore, ثُمَّ = then, أَخِيرًا = finally." },
          { q: "Complete the sentence.", ar: "أَمَّا كُرَةُ السَّلَّةِ ______ فَرِيقَانِ.", opts: ["فَيَلْعَبُهَا", "وَيَلْعَبُهَا", "لَكِنْ يَلْعَبُهَا", "لِأَنَّ يَلْعَبُهَا"], exp: "أَمَّا … always needs فَـ in the second part: أَمَّا … فَـ …" },
          { q: "Which sentence means “Both sports need concentration”?", opts: ["تَحْتَاجُ كِلْتَا الرِّيَاضَتَيْنِ إِلَى التَّرْكِيز.", "تَخْتَلِفُ الرِّيَاضَتَانِ فِي التَّرْكِيز.", "أُفَضِّلُ التَّرْكِيزَ عَلَى الرِّيَاضَة.", "لَا يَجُوزُ التَّرْكِيزُ فِي الرِّيَاضَتَيْن."], exp: "كِلْتَا الرِّيَاضَتَيْنِ = both sports; تَحْتَاجُ إِلَى = needs." },
          { q: "Which phrase is best to START your final sentence?", opts: ["فِي الخِتَام", "فِي البِدَايَة", "ثُمَّ", "مَثَلًا"], exp: "فِي الخِتَام = in conclusion." },
          { q: "What does this sentence mean?", ar: "لَا يَجُوزُ دَفْعُ المُنَافِس.", opts: ["Pushing the opponent is not allowed.", "You must push the opponent.", "The opponent wins.", "The referee pushes the players."], exp: "لَا يَجُوزُ = is not allowed. دَفْع = pushing." },
        ],
      },
    ],
    writing: {
      task: "Write one paragraph (about 120–150 words) comparing football and basketball. Follow the 6 steps in order.",
      taskAr: "اُكْتُبْ فِقْرَةً تُقَارِنُ فِيهَا بَيْنَ كُرَةِ القَدَمِ وَكُرَةِ السَّلَّة.",
      steps: [
        "1. Introduction & countries — أُحِبُّ … وَ … . تَشْتَهِرُ … بِـ …، بَيْنَمَا تَشْتَهِرُ … بِـ …",
        "2. Time & place — يُمْكِنُ مُمَارَسَةُ … فِي …، أَمَّا … فَيُمْكِنُ مُمَارَسَتُهَا فِي … . أُمَارِسُهُمَا …",
        "3. Players & winning — فِي … يَتَكَوَّنُ كُلُّ فَرِيقٍ مِنْ …، بَيْنَمَا فِي … . يَفُوزُ فِي الرِّيَاضَةِ الأُولَى …، أَمَّا فِي الثَّانِيَةِ فَـ …",
        "4. Clothing, equipment & rules — يَحْتَاجُ لَاعِبُ … إِلَى …، بَيْنَمَا يَحْتَاجُ لَاعِبُ … إِلَى … . مِنْ قَوَاعِدِ … أَنْ …",
        "5. Skills & benefits — تَحْتَاجُ كِلْتَا الرِّيَاضَتَيْنِ إِلَى … . تُسَاعِدُ الرِّيَاضَةُ الأُولَى عَلَى …، بَيْنَمَا …",
        "6. Opinion & reason — فِي الخِتَامِ، أُفَضِّلُ … عَلَى … لِأَنَّنِي … . مَثَلًا …",
      ],
      model:
        "أُحِبُّ كُرَةَ القَدَمِ وَكُرَةَ السَّلَّةِ. تَشْتَهِرُ البَرَازِيلُ بِكُرَةِ القَدَمِ، بَيْنَمَا تَشْتَهِرُ الوِلَايَاتُ المُتَّحِدَةُ بِكُرَةِ السَّلَّةِ. " +
        "يُمْكِنُ مُمَارَسَةُ كُرَةِ القَدَمِ عَلَى مَلْعَبٍ عُشْبِيٍّ فِي الهَوَاءِ الطَّلْقِ، أَمَّا كُرَةُ السَّلَّةِ فَيُمْكِنُ مُمَارَسَتُهَا دَاخِلَ الصَّالَةِ. أُمَارِسُهُمَا بَعْدَ المَدْرَسَةِ مَرَّتَيْنِ فِي الأُسْبُوعِ. " +
        "فِي كُرَةِ القَدَمِ يَتَكَوَّنُ كُلُّ فَرِيقٍ مِنْ أَحَدَ عَشَرَ لَاعِبًا، بَيْنَمَا فِي كُرَةِ السَّلَّةِ يَتَكَوَّنُ كُلُّ فَرِيقٍ مِنْ خَمْسَةِ لَاعِبِينَ. يَفُوزُ فِي الرِّيَاضَةِ الأُولَى الفَرِيقُ الَّذِي يُسَجِّلُ أَهْدَافًا أَكْثَرَ، أَمَّا فِي الثَّانِيَةِ فَيَفُوزُ الفَرِيقُ الَّذِي يُسَجِّلُ نِقَاطًا أَكْثَرَ. " +
        "يَحْتَاجُ لَاعِبُ كُرَةِ القَدَمِ إِلَى حِذَاءٍ رِيَاضِيٍّ وَوَاقِيَاتِ السَّاقَيْنِ، بَيْنَمَا يَحْتَاجُ لَاعِبُ كُرَةِ السَّلَّةِ إِلَى قَمِيصٍ وَسِرْوَالٍ قَصِيرٍ. مِنْ قَوَاعِدِ كُرَةِ القَدَمِ أَنَّهُ لَا يَجُوزُ اللَّعِبُ بِالأَيْدِي إِلَّا لِحَارِسِ المَرْمَى، أَمَّا فِي كُرَةِ السَّلَّةِ فَيَجِبُ اللَّعِبُ بِالأَيْدِي فَقَطْ. " +
        "تَحْتَاجُ كِلْتَا الرِّيَاضَتَيْنِ إِلَى السُّرْعَةِ وَالتَّعَاوُنِ. تُسَاعِدُ الرِّيَاضَةُ الأُولَى عَلَى تَقْوِيَةِ العَضَلَاتِ، بَيْنَمَا تُسَاعِدُ الثَّانِيَةُ عَلَى تَحْسِينِ اللِّيَاقَةِ. " +
        "فِي الخِتَامِ، أُفَضِّلُ كُرَةَ السَّلَّةِ عَلَى كُرَةِ القَدَمِ لِأَنَّنِي أُحِبُّ التَّحَدِّيَ، مَثَلًا أَلْعَبُهَا مَعَ صَدِيقَاتِي فِي النَّادِي فِي عُطْلَةِ نِهَايَةِ الأُسْبُوعِ.",
      checklist: [
        "Two sports and a country known for each",
        "When and where each is practised",
        "Player numbers and venues",
        "How to win in each sport",
        "Clothing and equipment",
        "One important rule for each",
        "Skills and one benefit for each",
        "Similarities and differences",
        "My preference with a clear reason (لِأَنَّنِي)",
        "Varied linking words — don't start every sentence with وَ",
        "Correct verbs, pronouns, spelling and Arabic punctuation ، ؟ .",
      ],
    },
  },

  2: {
    title: "Exam B — Hobbies, Countries & Opinions",
    intro: "New texts you have not seen before, using the same vocabulary. Answer every question, then press Submit.",
    sections: [
      {
        title: "Section 1 · Listening",
        titleAr: "الاستماع",
        type: "listening",
        passageTitle: "التِّنِسُ وَكُرَةُ الرِّيشَة",
        passage:
          "التِّنِسُ وَكُرَةُ الرِّيشَةِ رِيَاضَتَانِ مَشْهُورَتَانِ. فِي التِّنِسِ يَلْعَبُ شَخْصٌ ضِدَّ شَخْصٍ آخَرَ. يَسْتَخْدِمُ اللَّاعِبُ المِضْرَبَ وَالكُرَةَ، وَيَلْعَبُ عَلَى مَلْعَبِ التِّنِسِ فِي الهَوَاءِ الطَّلْقِ. " +
          "أَمَّا كُرَةُ الرِّيشَةِ فَيَلْعَبُهَا النَّاسُ دَاخِلَ الصَّالَةِ، وَيَضْرِبُ اللَّاعِبُ الرِّيشَةَ فَوْقَ الشَّبَكَةِ. " +
          "تَحْتَاجُ كِلْتَا الرِّيَاضَتَيْنِ إِلَى السُّرْعَةِ وَالتَّرْكِيزِ. يَفُوزُ اللَّاعِبُ الَّذِي يَجْمَعُ نِقَاطًا أَكْثَرَ. " +
          "أَنَا أَلْعَبُ كُرَةَ الرِّيشَةِ فِي النَّادِي كُلَّ يَوْمِ سَبْتٍ، لِأَنَّهَا مُمْتِعَةٌ وَتُسَاعِدُ عَلَى الاسْتِرْخَاءِ.",
        questions: [
          {
            q: "In tennis, …",
            opts: ["one person plays against another person", "eleven players play in each team", "one person plays alone", "two teams of five play"],
            exp: "يَلْعَبُ شَخْصٌ ضِدَّ شَخْصٍ آخَرَ.",
          },
          {
            q: "What does a tennis player use?",
            opts: ["a racket and a ball", "a basket and a ball", "a bicycle", "a helmet and shin pads"],
            exp: "يَسْتَخْدِمُ اللَّاعِبُ المِضْرَبَ وَالكُرَةَ.",
          },
          {
            q: "Where do people play badminton (in this recording)?",
            opts: ["inside the hall", "in the swimming pool", "on a running track", "on a grass pitch"],
            exp: "دَاخِلَ الصَّالَةِ = inside the hall.",
          },
          {
            q: "What do both sports need?",
            opts: ["speed and concentration", "strength only", "swimming goggles", "a goalkeeper"],
            exp: "تَحْتَاجُ كِلْتَا الرِّيَاضَتَيْنِ إِلَى السُّرْعَةِ وَالتَّرْكِيزِ.",
          },
          {
            q: "Who wins?",
            opts: ["the player who collects more points", "the player who runs faster", "the player with the biggest racket", "the youngest player"],
            exp: "يَفُوزُ اللَّاعِبُ الَّذِي يَجْمَعُ نِقَاطًا أَكْثَرَ.",
          },
          {
            q: "Why does the speaker play badminton?",
            opts: ["It is enjoyable and helps with relaxation.", "It is easy and boring.", "It is dangerous and exciting.", "Her brother makes her play."],
            exp: "لِأَنَّهَا مُمْتِعَةٌ وَتُسَاعِدُ عَلَى الاسْتِرْخَاءِ.",
          },
        ],
      },
      {
        title: "Section 2 · Reading",
        titleAr: "القراءة",
        type: "reading",
        passageTitle: "هِوَايَاتِي",
        passage:
          "اِسْمِي سَارَة، وَأَنَا مِنَ الإِمَارَاتِ. فِي الوَاقِعِ، إِنَّ هُنَاكَ الكَثِيرَ مِنَ الهِوَايَاتِ وَالرِّيَاضَاتِ المَشْهُورَةِ فِي بَلَدِي، مِثْلَ سِبَاقِ الهِجْنِ وَالصَّيْدِ بِالصُّقُورِ وَكُرَةِ القَدَمِ. أَمَّا فِي إِسْبَانْيَا فَتَشْتَهِرُ كُرَةُ القَدَمِ وَمُصَارَعَةُ الثِّيرَانِ.\n\n" +
          "هِوَايَتِي المُفَضَّلَةُ هِيَ السِّبَاحَةُ وَلَيْسَتِ الجَرْيَ، لِأَنَّهَا مُمْتِعَةٌ جِدًّا وَمُفِيدَةٌ لِلصِّحَّةِ. أُمَارِسُ السِّبَاحَةَ فِي المَسْبَحِ مَرَّتَيْنِ فِي الأُسْبُوعِ بَعْدَ المَدْرَسَةِ، وَأَحْتَاجُ إِلَى مَلَابِسِ السِّبَاحَةِ وَنَظَّارَةِ السِّبَاحَةِ.\n\n" +
          "أَخِي يُحِبُّ التِّنِسَ لِأَنَّهُ مُثِيرٌ، لَكِنَّنِي لَا أُحِبُّ التِّنِسَ لِأَنَّهُ لَيْسَ سَهْلًا. تُعْجِبُنِي المُلَاكَمَةُ لِأَنَّهَا مُثِيرَةٌ، عِلْمًا أَنَّهَا خَطِيرَةٌ.\n\n" +
          "أَمْسِ مَارَسْتُ الجَرْيَ فِي الحَدِيقَةِ مَعَ أَبِي، وَغَدًا سَأَلْعَبُ كُرَةَ الرِّيشَةِ مَعَ صَدِيقَتِي فِي صَالَةٍ رِيَاضِيَّةٍ. بِرَأْيِي، الرِّيَاضَةُ تُقَوِّي العَضَلَاتِ وَتُعَلِّمُ التَّعَاوُنَ.",
        questions: [
          { q: "Where is Sara from?", opts: ["the UAE", "Spain", "China", "the United Kingdom"], exp: "وَأَنَا مِنَ الإِمَارَاتِ." },
          { q: "Which sports are popular in Sara's country (in the text)?", opts: ["camel racing, falconry and football", "football and bullfighting", "tennis and boxing", "cricket and rugby"], exp: "مِثْلَ سِبَاقِ الهِجْنِ وَالصَّيْدِ بِالصُّقُورِ وَكُرَةِ القَدَمِ. (Football and bullfighting = Spain.)" },
          { q: "What is popular in Spain?", opts: ["football and bullfighting", "camel racing and falconry", "table tennis", "swimming and running"], exp: "أَمَّا فِي إِسْبَانْيَا فَتَشْتَهِرُ كُرَةُ القَدَمِ وَمُصَارَعَةُ الثِّيرَانِ." },
          { q: "What is Sara's favourite hobby?", opts: ["swimming", "running", "tennis", "boxing"], exp: "هِوَايَتِي المُفَضَّلَةُ هِيَ السِّبَاحَةُ وَلَيْسَتِ الجَرْيَ — careful: “and NOT running”." },
          { q: "Why does she like it?", opts: ["It is very enjoyable and good for health.", "It is dangerous.", "It is easy and boring.", "Her brother likes it."], exp: "لِأَنَّهَا مُمْتِعَةٌ جِدًّا وَمُفِيدَةٌ لِلصِّحَّةِ." },
          { q: "How often does she swim?", opts: ["twice a week, after school", "every day in the morning", "only at the weekend", "only in summer"], exp: "مَرَّتَيْنِ فِي الأُسْبُوعِ بَعْدَ المَدْرَسَةِ." },
          { q: "Why doesn't Sara like tennis?", opts: ["It is not easy.", "It is boring.", "It is dangerous.", "It is too slow."], exp: "لِأَنَّهُ لَيْسَ سَهْلًا = because it is not easy." },
          { q: "What did she do YESTERDAY?", opts: ["She went running in the park with her dad.", "She swam in the pool.", "She played badminton.", "She watched boxing."], exp: "أَمْسِ مَارَسْتُ الجَرْيَ فِي الحَدِيقَةِ — past tense مَارَسْتُ." },
          { q: "What will she do TOMORROW?", opts: ["play badminton with her friend in a sports hall", "go running with her dad", "go swimming", "play tennis with her brother"], exp: "غَدًا سَأَلْعَبُ كُرَةَ الرِّيشَةِ — future سَـ + verb." },
        ],
      },
      {
        title: "Section 3 · Vocabulary",
        titleAr: "المفردات",
        questions: [
          { q: "What does this word mean?", ar: "هِوَايَة", opts: ["hobby", "sport", "game", "team"], exp: "رِيَاضَة = sport, لُعْبَة = game, فَرِيق = team." },
          { q: "What does this word mean?", ar: "مُمِلّ", opts: ["boring", "exciting", "easy", "dangerous"], exp: "مُثِير = exciting, سَهْل = easy, خَطِير = dangerous." },
          { q: "Choose the Arabic for “dangerous”.", opts: ["خَطِير", "مُثِير", "مُسَلٍّ", "سَهْل"], exp: "مُسَلٍّ = entertaining." },
          { q: "What does this phrase mean?", ar: "مُصَارَعَةُ الثِّيرَان", opts: ["bullfighting", "horse riding", "camel racing", "falconry"], exp: "رُكُوبُ الخَيْل = horse riding, سِبَاقُ الهِجْن = camel racing, الصَّيْدُ بِالصُّقُور = falconry." },
          { q: "What does this phrase mean?", ar: "نَظَّارَةُ السِّبَاحَة", opts: ["swimming goggles", "swimwear", "swimming pool", "helmet"], exp: "مَلَابِسُ السِّبَاحَة = swimwear, مَسْبَح = swimming pool." },
          { q: "What does this phrase mean?", ar: "فِي الهَوَاءِ الطَّلْق", opts: ["outdoors", "inside the hall", "behind the net", "at the club"], exp: "دَاخِلَ الصَّالَة = inside the hall, خَلْفَ الشَّبَكَة = behind the net, فِي النَّادِي = at the club." },
          { q: "What does this word mean?", ar: "يُمَرِّر", opts: ["passes", "shoots", "throws", "kicks"], exp: "يُسَدِّد = shoots, يَرْمِي = throws, يَرْكُل = kicks." },
          { q: "Choose the Arabic for “always”.", opts: ["دَائِمًا", "نَادِرًا", "أَحْيَانًا", "غَالِبًا"], exp: "نَادِرًا = rarely, أَحْيَانًا = sometimes, غَالِبًا = often." },
          { q: "What does this word mean?", ar: "المُرُونَة", opts: ["flexibility", "strength", "endurance", "accuracy"], exp: "القُوَّة = strength, التَّحَمُّل = endurance, الدِّقَّة = accuracy." },
          { q: "What does this phrase mean?", ar: "مَرَّتَيْنِ فِي الأُسْبُوع", opts: ["twice a week", "every day", "at the weekend", "every year"], exp: "كُلَّ يَوْم = every day, فِي عُطْلَةِ نِهَايَةِ الأُسْبُوع = at the weekend, كُلَّ سَنَة = every year." },
        ],
      },
      {
        title: "Section 4 · Grammar",
        titleAr: "القواعد",
        questions: [
          { q: "Fill the gap (“is not”).", ar: "كُرَةُ الرِّيشَةِ ______ سَهْلَة.", opts: ["لَيْسَتْ", "لَيْسَ", "لَسْتُ", "لَسْنَا"], exp: "كُرَة is feminine → لَيْسَتْ. Masculine → لَيْسَ." },
          { q: "Choose the correct adjective.", ar: "لَا أُحِبُّ المُلَاكَمَةَ لِأَنَّهَا ______ .", opts: ["خَطِيرَة", "خَطِير", "خَطِيرُون", "خَطَر"], exp: "لِأَنَّهَا (feminine) → adjective with ة: خَطِيرَة." },
          { q: "Choose the correct adjective.", ar: "أُفَضِّلُ التِّنِسَ لِأَنَّهُ ______ .", opts: ["مُسَلٍّ", "مُسَلِّيَة", "مُسَلِّيَات", "مُسَلِّيَان"], exp: "لِأَنَّهُ (masculine) → مُسَلٍّ. Feminine would be مُسَلِّيَة." },
          { q: "When do you use لِأَنَّنِي?", opts: ["when giving your OWN reason (because I …)", "for a feminine sport", "for a masculine sport", "for a pitch (مَلْعَب)"], exp: "لِأَنَّهَا = because it (f), لِأَنَّهُ = because it (m), لِأَنَّنِي = because I." },
          { q: "Which sentence means “The referee's decision must be respected”?", opts: ["يَجِبُ احْتِرَامُ قَرَارِ الحَكَم.", "لَا يَجُوزُ احْتِرَامُ قَرَارِ الحَكَم.", "يَفُوزُ الحَكَم.", "يُمْنَعُ الحَكَم."], exp: "يَجِبُ = must / is required. لَا يَجُوزُ = is not allowed." },
          { q: "Which verb means “I will practise”?", opts: ["سَأُمَارِسُ", "مَارَسْتُ", "أُمَارِسُ", "مَارَسَ"], exp: "سَـ + أُمَارِسُ = future. مَارَسْتُ = I practised. أُمَارِسُ = I practise." },
          { q: "Which sentence is correct: “My favourite hobby is drawing”?", opts: ["هِوَايَتِي المُفَضَّلَةُ هِيَ الرَّسْم.", "هِوَايَتِي المُفَضَّلُ هِيَ الرَّسْم.", "هِوَايَتِي المُفَضَّلَةُ هُوَ الرَّسْمَة.", "هِوَايَة المُفَضَّل أَنَا الرَّسْم."], exp: "هِوَايَة is feminine → المُفَضَّلَة + هِيَ." },
        ],
      },
      {
        title: "Section 5 · Connectives & sentences",
        titleAr: "أدوات الربط",
        questions: [
          { q: "What does this phrase mean?", ar: "مِمَّا لَا شَكَّ فِيهِ أَنَّ", opts: ["there is no doubt that", "in my opinion", "in fact", "although it is"], exp: "بِرَأْيِي = in my opinion, فِي الوَاقِع = in fact, عِلْمًا أَنَّهَا = although it is." },
          { q: "What does this phrase mean?", ar: "عِلْمًا أَنَّهَا", opts: ["although it is", "because it is", "such as", "and also"], exp: "Example: تُعْجِبُنِي المُلَاكَمَةُ لِأَنَّهَا مُثِيرَةٌ، عِلْمًا أَنَّهَا خَطِيرَةٌ." },
          { q: "Which is the best opening sentence?", opts: ["فِي الوَاقِعِ، إِنَّ هُنَاكَ الكَثِيرَ مِنَ الهِوَايَاتِ المَشْهُورَةِ فِي بَلَدِي.", "فِي الخِتَامِ، هُنَاكَ هِوَايَات.", "لِأَنَّهَا مُمْتِعَة.", "ثُمَّ أَخِيرًا الهِوَايَات."], exp: "Use the sentence frame: في الواقع، إن هناك الكثير من … في بلدي مثل …" },
          { q: "Fill the gap.", ar: "أُحِبُّ كُرَةَ القَدَمِ ______ لَا أُحِبُّ الغولف.", opts: ["لَكِنَّنِي", "لِأَنَّنِي", "مِثْلَ", "كَذَلِكَ"], exp: "لَكِنَّنِي = but I." },
          { q: "Which word means “therefore”?", opts: ["لِذَلِكَ", "لِأَنَّ", "مَثَلًا", "بَيْنَمَا"], exp: "لِأَنَّ = because, مَثَلًا = for example, بَيْنَمَا = whereas." },
        ],
      },
    ],
    writing: {
      task: "Write one paragraph (about 100–130 words) describing popular hobbies and sports in your country and in another country, and give your opinion with reasons.",
      taskAr: "اُكْتُبْ عَنِ الهِوَايَاتِ وَالرِّيَاضَاتِ المَشْهُورَةِ فِي بَلَدِكَ وَفِي بَلَدٍ آخَرَ، وَعَبِّرْ عَنْ رَأْيِكَ.",
      steps: [
        "1. فِي الوَاقِعِ، إِنَّ هُنَاكَ الكَثِيرَ مِنَ الهِوَايَاتِ وَالرِّيَاضَاتِ المَشْهُورَةِ فِي بَلَدِي مِثْلَ …",
        "2. أَمَّا فِي … فَتَشْتَهِرُ …",
        "3. هِوَايَتِي المُفَضَّلَةُ هِيَ … وَلَيْسَ / وَلَيْسَتْ …",
        "4. أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا … — لَا أُحِبُّ … لِأَنَّهُ لَيْسَ سَهْلًا",
        "5. تُعْجِبُنِي … لِأَنَّهَا مُثِيرَةٌ، عِلْمًا أَنَّهَا خَطِيرَةٌ.",
        "6. بِرَأْيِي … — مِمَّا لَا شَكَّ فِيهِ أَنَّ … — لَا بُدَّ أَنْ أُشِيرَ إِلَى أَنَّ …",
      ],
      model:
        "فِي الوَاقِعِ، إِنَّ هُنَاكَ الكَثِيرَ مِنَ الهِوَايَاتِ وَالرِّيَاضَاتِ المَشْهُورَةِ فِي بَلَدِي الإِمَارَاتِ، مِثْلَ سِبَاقِ الهِجْنِ وَالصَّيْدِ بِالصُّقُورِ وَكُرَةِ القَدَمِ. أَمَّا فِي إِسْبَانْيَا فَتَشْتَهِرُ كُرَةُ القَدَمِ وَمُصَارَعَةُ الثِّيرَانِ. " +
        "هِوَايَتِي المُفَضَّلَةُ هِيَ السِّبَاحَةُ وَلَيْسَتِ الجَرْيَ، لِأَنَّهَا مُمْتِعَةٌ جِدًّا وَمُفِيدَةٌ لِلصِّحَّةِ، وَأُمَارِسُهَا فِي المَسْبَحِ بَعْدَ المَدْرَسَةِ. " +
        "لَا أُحِبُّ الغولف لِأَنَّهُ مُمِلٌّ، لَكِنَّنِي أُفَضِّلُ التِّنِسَ لِأَنَّهُ مُسَلٍّ. تُعْجِبُنِي المُلَاكَمَةُ لِأَنَّهَا مُثِيرَةٌ، عِلْمًا أَنَّهَا خَطِيرَةٌ. " +
        "بِرَأْيِي، كُرَةُ السَّلَّةِ مُهِمَّةٌ وَمُفِيدَةٌ لِلصِّحَّةِ لِأَنَّهَا تُعَلِّمُ التَّعَاوُنَ. لَا بُدَّ أَنْ أُشِيرَ إِلَى أَنَّ الهِوَايَاتِ المَشْهُورَةَ فِي بَلَدِي جُزْءٌ مِنَ التُّرَاثِ. " +
        "مِمَّا لَا شَكَّ فِيهِ أَنَّ هَذِهِ الهِوَايَاتِ مُمْتِعَةٌ جِدًّا.",
      checklist: [
        "Popular hobbies/sports in my country (with مِثْل)",
        "Popular sports in another country (أَمَّا … فَـ …)",
        "My favourite hobby … and not … (وَلَيْسَ / وَلَيْسَتْ)",
        "Something I like + reason (لِأَنَّهُ / لِأَنَّهَا)",
        "Something I don't like + reason (لَيْسَ / لَيْسَتْ)",
        "An ‘although’ sentence (عِلْمًا أَنَّهَا)",
        "At least two high-level phrases (بِرَأْيِي، مِمَّا لَا شَكَّ فِيهِ أَنَّ، لَا بُدَّ أَنْ أُشِيرَ إِلَى أَنَّ)",
        "Adjectives agree: feminine noun → ة",
        "Arabic punctuation ، ؟ .",
      ],
    },
  },
};

// Word-by-word English glosses for the listening passages (read-along mode).
// One entry per space-separated Arabic word, in the same order as the passage.
EXAMS[1].sections[0].gloss = [
  "is considered", "ball", "foot → football", "and ball", "basket → basketball",
  "among", "the sports", "team (sports)", "popular", "in", "the world",
  "play", "people", "ball", "foot → football", "and ball", "basket → basketball",
  "in / on", "pitches / courts", "rectangular", "(in) shape",
  "in", "ball", "foot → football", "consists", "each", "team", "of", "eleven", "players",
  "and consists", "the match", "of", "two halves", "length (of time)", "each", "half", "forty-five", "minutes",
  "use", "the players", "their legs / feet", "in", "the playing",
  "as for", "keeper", "the goal → goalkeeper", "so he can", "use", "his two hands", "also",
  "as for", "ball", "basket → basketball", "so it is played by", "two teams",
  "and in", "each", "team", "five", "players",
  "and consists", "the match", "of", "two halves", "also",
  "use", "the players", "their hands", "to score", "the points",
  "and the team", "that", "scores", "points", "more", "wins", "the match",
  "sport", "strengthens", "the body", "and helps", "with", "keeping", "(of)", "health",
];

EXAMS[2].sections[0].gloss = [
  "tennis", "and ball", "feather → badminton", "two sports", "popular",
  "in", "tennis", "plays", "a person", "against", "a person", "another",
  "uses", "the player", "the racket", "and the ball",
  "and plays", "on", "court", "tennis", "in", "the air", "open → outdoors",
  "as for", "ball", "feather → badminton", "so it is played by", "people", "inside", "the hall",
  "and hits", "the player", "the shuttlecock", "over", "the net",
  "need", "both", "sports", "(for)", "speed", "and concentration",
  "wins", "the player", "who", "collects", "points", "more",
  "I", "play", "ball", "feather → badminton", "at", "the club", "every", "day", "Saturday",
  "because it (is)", "enjoyable", "and helps", "with", "relaxation",
];
