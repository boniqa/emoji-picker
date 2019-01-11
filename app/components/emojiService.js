angular.module('gitApp').factory('emojiService', [function(){

 
 var emojiList =   {
        "2764": {
          "name": "red heart",
          "shortname": ":heart:",
          "shortname_alternates": [],
          "keywords": [
            "heart"
          ],
          "unicode_output": "2764"
        },
        "1f9e1": {
          "name": "orange heart",
          "shortname": ":orange_heart:",
          "shortname_alternates": [],
          "keywords": [
            "orange"
          ],
          "unicode_output": "1f9e1"
        },
        "1f49b": {
          "name": "yellow heart",
          "shortname": ":yellow_heart:",
          "shortname_alternates": [],
          "keywords": [
            "yellow"
          ],
          "unicode_output": "1f49b"
        },
        "1f49a": {
          "name": "green heart",
          "shortname": ":green_heart:",
          "shortname_alternates": [],
          "keywords": [
            "green"
          ],
          "unicode_output": "1f49a"
        },
        "1f499": {
          "name": "blue heart",
          "shortname": ":blue_heart:",
          "shortname_alternates": [],
          "keywords": [
            "blue"
          ],
          "unicode_output": "1f499"
        },
        "1f49c": {
          "name": "purple heart",
          "shortname": ":purple_heart:",
          "shortname_alternates": [],
          "keywords": [
            "purple"
          ],
          "unicode_output": "1f49c"
        },
        "1f5a4": {
          "name": "black heart",
          "shortname": ":black_heart:",
          "shortname_alternates": [],
          "keywords": [
            "black",
            "evil",
            "wicked"
          ],
          "unicode_output": "1f5a4"
        },
        "1f494": {
          "name": "broken heart",
          "shortname": ":broken_heart:",
          "shortname_alternates": [],
          "keywords": [
            "break",
            "broken"
          ],
          "unicode_output": "1f494"
        },
        "2763": {
          "name": "heavy heart exclamation",
          "shortname": ":heart_exclamation:",
          "shortname_alternates": [
            ":heavy_heart_exclamation_mark_ornament:"
          ],
          "keywords": [
            "exclamation",
            "mark",
            "punctuation"
          ],
          "unicode_output": "2763"
        },
        "1f495": {
          "name": "two hearts",
          "shortname": ":two_hearts:",
          "shortname_alternates": [],
          "keywords": [
            "love"
          ],
          "unicode_output": "1f495"
        },
        "1f49e": {
          "name": "revolving hearts",
          "shortname": ":revolving_hearts:",
          "shortname_alternates": [],
          "keywords": [
            "revolving"
          ],
          "unicode_output": "1f49e"
        },
        "1f493": {
          "name": "beating heart",
          "shortname": ":heartbeat:",
          "shortname_alternates": [],
          "keywords": [
            "beating",
            "heartbeat",
            "pulsating"
          ],
          "unicode_output": "1f493"
        },
        "1f497": {
          "name": "growing heart",
          "shortname": ":heartpulse:",
          "shortname_alternates": [],
          "keywords": [
            "excited",
            "growing",
            "nervous",
            "pulse"
          ],
          "unicode_output": "1f497"
        },
        "1f496": {
          "name": "sparkling heart",
          "shortname": ":sparkling_heart:",
          "shortname_alternates": [],
          "keywords": [
            "excited",
            "sparkle"
          ],
          "unicode_output": "1f496"
        },
        "1f498": {
          "name": "heart with arrow",
          "shortname": ":cupid:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "cupid"
          ],
          "unicode_output": "1f498"
        },
        "1f49d": {
          "name": "heart with ribbon",
          "shortname": ":gift_heart:",
          "shortname_alternates": [],
          "keywords": [
            "ribbon",
            "valentine"
          ],
          "unicode_output": "1f49d"
        },
        "1f49f": {
          "name": "heart decoration",
          "shortname": ":heart_decoration:",
          "shortname_alternates": [],
          "keywords": [
            "heart"
          ],
          "unicode_output": "1f49f"
        },
        "262e": {
          "name": "peace symbol",
          "shortname": ":peace:",
          "shortname_alternates": [
            ":peace_symbol:"
          ],
          "keywords": [
            "peace"
          ],
          "unicode_output": "262e"
        },
        "271d": {
          "name": "latin cross",
          "shortname": ":cross:",
          "shortname_alternates": [
            ":latin_cross:"
          ],
          "keywords": [
            "Christian",
            "cross",
            "religion"
          ],
          "unicode_output": "271d"
        },
        "262a": {
          "name": "star and crescent",
          "shortname": ":star_and_crescent:",
          "shortname_alternates": [],
          "keywords": [
            "Muslim",
            "islam",
            "religion"
          ],
          "unicode_output": "262a"
        },
        "1f549": {
          "name": "om",
          "shortname": ":om_symbol:",
          "shortname_alternates": [],
          "keywords": [
            "Hindu",
            "religion"
          ],
          "unicode_output": "1f549"
        },
        "2638": {
          "name": "wheel of dharma",
          "shortname": ":wheel_of_dharma:",
          "shortname_alternates": [],
          "keywords": [
            "Buddhist",
            "dharma",
            "religion",
            "wheel"
          ],
          "unicode_output": "2638"
        },
        "2721": {
          "name": "star of David",
          "shortname": ":star_of_david:",
          "shortname_alternates": [],
          "keywords": [
            "David",
            "Jew",
            "Jewish",
            "religion",
            "star"
          ],
          "unicode_output": "2721"
        },
        "1f52f": {
          "name": "dotted six-pointed star",
          "shortname": ":six_pointed_star:",
          "shortname_alternates": [],
          "keywords": [
            "fortune",
            "star"
          ],
          "unicode_output": "1f52f"
        },
        "1f54e": {
          "name": "menorah",
          "shortname": ":menorah:",
          "shortname_alternates": [],
          "keywords": [
            "candelabrum",
            "candlestick",
            "religion"
          ],
          "unicode_output": "1f54e"
        },
        "262f": {
          "name": "yin yang",
          "shortname": ":yin_yang:",
          "shortname_alternates": [],
          "keywords": [
            "religion",
            "tao",
            "taoist",
            "yang",
            "yin"
          ],
          "unicode_output": "262f"
        },
        "2626": {
          "name": "orthodox cross",
          "shortname": ":orthodox_cross:",
          "shortname_alternates": [],
          "keywords": [
            "Christian",
            "cross",
            "religion"
          ],
          "unicode_output": "2626"
        },
        "1f6d0": {
          "name": "place of worship",
          "shortname": ":place_of_worship:",
          "shortname_alternates": [
            ":worship_symbol:"
          ],
          "keywords": [
            "religion",
            "worship"
          ],
          "unicode_output": "1f6d0"
        },
        "26ce": {
          "name": "Ophiuchus",
          "shortname": ":ophiuchus:",
          "shortname_alternates": [],
          "keywords": [
            "bearer",
            "serpent",
            "snake",
            "zodiac"
          ],
          "unicode_output": "26ce"
        },
        "2648": {
          "name": "Aries",
          "shortname": ":aries:",
          "shortname_alternates": [],
          "keywords": [
            "ram",
            "zodiac"
          ],
          "unicode_output": "2648"
        },
        "2649": {
          "name": "Taurus",
          "shortname": ":taurus:",
          "shortname_alternates": [],
          "keywords": [
            "bull",
            "ox",
            "zodiac"
          ],
          "unicode_output": "2649"
        },
        "264a": {
          "name": "Gemini",
          "shortname": ":gemini:",
          "shortname_alternates": [],
          "keywords": [
            "twins",
            "zodiac"
          ],
          "unicode_output": "264a"
        },
        "264b": {
          "name": "Cancer",
          "shortname": ":cancer:",
          "shortname_alternates": [],
          "keywords": [
            "crab",
            "zodiac"
          ],
          "unicode_output": "264b"
        },
        "264c": {
          "name": "Leo",
          "shortname": ":leo:",
          "shortname_alternates": [],
          "keywords": [
            "lion",
            "zodiac"
          ],
          "unicode_output": "264c"
        },
        "264d": {
          "name": "Virgo",
          "shortname": ":virgo:",
          "shortname_alternates": [],
          "keywords": [
            "zodiac"
          ],
          "unicode_output": "264d"
        },
        "264e": {
          "name": "Libra",
          "shortname": ":libra:",
          "shortname_alternates": [],
          "keywords": [
            "balance",
            "justice",
            "scales",
            "zodiac"
          ],
          "unicode_output": "264e"
        },
        "264f": {
          "name": "Scorpio",
          "shortname": ":scorpius:",
          "shortname_alternates": [],
          "keywords": [
            "scorpio",
            "scorpion",
            "zodiac"
          ],
          "unicode_output": "264f"
        },
        "2650": {
          "name": "Sagittarius",
          "shortname": ":sagittarius:",
          "shortname_alternates": [],
          "keywords": [
            "archer",
            "zodiac"
          ],
          "unicode_output": "2650"
        },
        "2651": {
          "name": "Capricorn",
          "shortname": ":capricorn:",
          "shortname_alternates": [],
          "keywords": [
            "goat",
            "zodiac"
          ],
          "unicode_output": "2651"
        },
        "2652": {
          "name": "Aquarius",
          "shortname": ":aquarius:",
          "shortname_alternates": [],
          "keywords": [
            "bearer",
            "water",
            "zodiac"
          ],
          "unicode_output": "2652"
        },
        "2653": {
          "name": "Pisces",
          "shortname": ":pisces:",
          "shortname_alternates": [],
          "keywords": [
            "fish",
            "zodiac"
          ],
          "unicode_output": "2653"
        },
        "1f194": {
          "name": "ID button",
          "shortname": ":id:",
          "shortname_alternates": [],
          "keywords": [
            "id",
            "identity"
          ],
          "unicode_output": "1f194"
        },
        "269b": {
          "name": "atom symbol",
          "shortname": ":atom:",
          "shortname_alternates": [
            ":atom_symbol:"
          ],
          "keywords": [
            "atheist",
            "atom"
          ],
          "unicode_output": "269b"
        },
        "267e": {
          "name": "infinity",
          "shortname": ":infinity:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "267e-fe0f"
        },
        "1f251": {
          "name": "Japanese “acceptable” button",
          "shortname": ":accept:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“acceptable”",
            "可"
          ],
          "unicode_output": "1f251"
        },
        "2622": {
          "name": "radioactive",
          "shortname": ":radioactive:",
          "shortname_alternates": [
            ":radioactive_sign:"
          ],
          "keywords": [
            "radioactive",
            "sign"
          ],
          "unicode_output": "2622"
        },
        "2623": {
          "name": "biohazard",
          "shortname": ":biohazard:",
          "shortname_alternates": [
            ":biohazard_sign:"
          ],
          "keywords": [
            "biohazard",
            "sign"
          ],
          "unicode_output": "2623"
        },
        "1f4f4": {
          "name": "mobile phone off",
          "shortname": ":mobile_phone_off:",
          "shortname_alternates": [],
          "keywords": [
            "cell",
            "mobile",
            "off",
            "phone",
            "telephone"
          ],
          "unicode_output": "1f4f4"
        },
        "1f4f3": {
          "name": "vibration mode",
          "shortname": ":vibration_mode:",
          "shortname_alternates": [],
          "keywords": [
            "cell",
            "mobile",
            "mode",
            "phone",
            "telephone",
            "vibration"
          ],
          "unicode_output": "1f4f3"
        },
        "1f236": {
          "name": "Japanese “not free of charge” button",
          "shortname": ":u6709:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“not free of charge”",
            "有"
          ],
          "unicode_output": "1f236"
        },
        "1f21a": {
          "name": "Japanese “free of charge” button",
          "shortname": ":u7121:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“free of charge”",
            "無"
          ],
          "unicode_output": "1f21a"
        },
        "1f238": {
          "name": "Japanese “application” button",
          "shortname": ":u7533:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“application”",
            "申"
          ],
          "unicode_output": "1f238"
        },
        "1f23a": {
          "name": "Japanese “open for business” button",
          "shortname": ":u55b6:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“open for business”",
            "営"
          ],
          "unicode_output": "1f23a"
        },
        "1f237": {
          "name": "Japanese “monthly amount” button",
          "shortname": ":u6708:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“monthly amount”",
            "月"
          ],
          "unicode_output": "1f237"
        },
        "2734": {
          "name": "eight-pointed star",
          "shortname": ":eight_pointed_black_star:",
          "shortname_alternates": [],
          "keywords": [
            "star"
          ],
          "unicode_output": "2734"
        },
        "1f19a": {
          "name": "VS button",
          "shortname": ":vs:",
          "shortname_alternates": [],
          "keywords": [
            "versus",
            "vs"
          ],
          "unicode_output": "1f19a"
        },
        "1f4ae": {
          "name": "white flower",
          "shortname": ":white_flower:",
          "shortname_alternates": [],
          "keywords": [
            "flower"
          ],
          "unicode_output": "1f4ae"
        },
        "1f250": {
          "name": "Japanese “bargain” button",
          "shortname": ":ideograph_advantage:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“bargain”",
            "得"
          ],
          "unicode_output": "1f250"
        },
        "3299": {
          "name": "Japanese “secret” button",
          "shortname": ":secret:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“secret”",
            "秘"
          ],
          "unicode_output": "3299"
        },
        "3297": {
          "name": "Japanese “congratulations” button",
          "shortname": ":congratulations:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“congratulations”",
            "祝"
          ],
          "unicode_output": "3297"
        },
        "1f234": {
          "name": "Japanese “passing grade” button",
          "shortname": ":u5408:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“passing grade”",
            "合"
          ],
          "unicode_output": "1f234"
        },
        "1f235": {
          "name": "Japanese “no vacancy” button",
          "shortname": ":u6e80:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“no vacancy”",
            "満"
          ],
          "unicode_output": "1f235"
        },
        "1f239": {
          "name": "Japanese “discount” button",
          "shortname": ":u5272:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“discount”",
            "割"
          ],
          "unicode_output": "1f239"
        },
        "1f232": {
          "name": "Japanese “prohibited” button",
          "shortname": ":u7981:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“prohibited”",
            "禁"
          ],
          "unicode_output": "1f232"
        },
        "1f170": {
          "name": "A button (blood type)",
          "shortname": ":a:",
          "shortname_alternates": [],
          "keywords": [
            "a",
            "blood type"
          ],
          "unicode_output": "1f170"
        },
        "1f171": {
          "name": "B button (blood type)",
          "shortname": ":b:",
          "shortname_alternates": [],
          "keywords": [
            "b",
            "blood type"
          ],
          "unicode_output": "1f171"
        },
        "1f18e": {
          "name": "AB button (blood type)",
          "shortname": ":ab:",
          "shortname_alternates": [],
          "keywords": [
            "ab",
            "blood type"
          ],
          "unicode_output": "1f18e"
        },
        "1f191": {
          "name": "CL button",
          "shortname": ":cl:",
          "shortname_alternates": [],
          "keywords": [
            "cl"
          ],
          "unicode_output": "1f191"
        },
        "1f17e": {
          "name": "O button (blood type)",
          "shortname": ":o2:",
          "shortname_alternates": [],
          "keywords": [
            "blood type",
            "o"
          ],
          "unicode_output": "1f17e"
        },
        "1f198": {
          "name": "SOS button",
          "shortname": ":sos:",
          "shortname_alternates": [],
          "keywords": [
            "help",
            "sos"
          ],
          "unicode_output": "1f198"
        },
        "274c": {
          "name": "cross mark",
          "shortname": ":x:",
          "shortname_alternates": [],
          "keywords": [
            "cancel",
            "mark",
            "multiplication",
            "multiply",
            "x"
          ],
          "unicode_output": "274c"
        },
        "2b55": {
          "name": "heavy large circle",
          "shortname": ":o:",
          "shortname_alternates": [],
          "keywords": [
            "circle",
            "o"
          ],
          "unicode_output": "2b55"
        },
        "1f6d1": {
          "name": "stop sign",
          "shortname": ":octagonal_sign:",
          "shortname_alternates": [
            ":stop_sign:"
          ],
          "keywords": [
            "octagonal",
            "sign",
            "stop"
          ],
          "unicode_output": "1f6d1"
        },
        "26d4": {
          "name": "no entry",
          "shortname": ":no_entry:",
          "shortname_alternates": [],
          "keywords": [
            "entry",
            "forbidden",
            "no",
            "not",
            "prohibited",
            "traffic"
          ],
          "unicode_output": "26d4"
        },
        "1f4db": {
          "name": "name badge",
          "shortname": ":name_badge:",
          "shortname_alternates": [],
          "keywords": [
            "badge",
            "name"
          ],
          "unicode_output": "1f4db"
        },
        "1f6ab": {
          "name": "prohibited",
          "shortname": ":no_entry_sign:",
          "shortname_alternates": [],
          "keywords": [
            "entry",
            "forbidden",
            "no",
            "not"
          ],
          "unicode_output": "1f6ab"
        },
        "1f4af": {
          "name": "hundred points",
          "shortname": ":100:",
          "shortname_alternates": [],
          "keywords": [
            "100",
            "full",
            "hundred",
            "score"
          ],
          "unicode_output": "1f4af"
        },
        "1f4a2": {
          "name": "anger symbol",
          "shortname": ":anger:",
          "shortname_alternates": [],
          "keywords": [
            "angry",
            "comic",
            "mad"
          ],
          "unicode_output": "1f4a2"
        },
        "2668": {
          "name": "hot springs",
          "shortname": ":hotsprings:",
          "shortname_alternates": [],
          "keywords": [
            "hot",
            "hotsprings",
            "springs",
            "steaming"
          ],
          "unicode_output": "2668"
        },
        "1f6b7": {
          "name": "no pedestrians",
          "shortname": ":no_pedestrians:",
          "shortname_alternates": [],
          "keywords": [
            "forbidden",
            "no",
            "not",
            "pedestrian",
            "prohibited"
          ],
          "unicode_output": "1f6b7"
        },
        "1f6af": {
          "name": "no littering",
          "shortname": ":do_not_litter:",
          "shortname_alternates": [],
          "keywords": [
            "forbidden",
            "litter",
            "no",
            "not",
            "prohibited"
          ],
          "unicode_output": "1f6af"
        },
        "1f6b3": {
          "name": "no bicycles",
          "shortname": ":no_bicycles:",
          "shortname_alternates": [],
          "keywords": [
            "bicycle",
            "bike",
            "forbidden",
            "no",
            "not",
            "prohibited"
          ],
          "unicode_output": "1f6b3"
        },
        "1f6b1": {
          "name": "non-potable water",
          "shortname": ":non-potable_water:",
          "shortname_alternates": [],
          "keywords": [
            "non-drinking",
            "non-potable",
            "water"
          ],
          "unicode_output": "1f6b1"
        },
        "1f51e": {
          "name": "no one under eighteen",
          "shortname": ":underage:",
          "shortname_alternates": [],
          "keywords": [
            "18",
            "age restriction",
            "eighteen",
            "forbidden",
            "no",
            "not",
            "prohibited",
            "underage"
          ],
          "unicode_output": "1f51e"
        },
        "1f4f5": {
          "name": "no mobile phones",
          "shortname": ":no_mobile_phones:",
          "shortname_alternates": [],
          "keywords": [
            "cell",
            "forbidden",
            "mobile",
            "no",
            "not",
            "phone",
            "prohibited",
            "telephone"
          ],
          "unicode_output": "1f4f5"
        },
        "1f6ad": {
          "name": "no smoking",
          "shortname": ":no_smoking:",
          "shortname_alternates": [],
          "keywords": [
            "forbidden",
            "no",
            "not",
            "prohibited",
            "smoking"
          ],
          "unicode_output": "1f6ad"
        },
        "2757": {
          "name": "exclamation mark",
          "shortname": ":exclamation:",
          "shortname_alternates": [],
          "keywords": [
            "exclamation",
            "mark",
            "punctuation"
          ],
          "unicode_output": "2757"
        },
        "2755": {
          "name": "white exclamation mark",
          "shortname": ":grey_exclamation:",
          "shortname_alternates": [],
          "keywords": [
            "exclamation",
            "mark",
            "outlined",
            "punctuation"
          ],
          "unicode_output": "2755"
        },
        "2753": {
          "name": "question mark",
          "shortname": ":question:",
          "shortname_alternates": [],
          "keywords": [
            "mark",
            "punctuation",
            "question"
          ],
          "unicode_output": "2753"
        },
        "2754": {
          "name": "white question mark",
          "shortname": ":grey_question:",
          "shortname_alternates": [],
          "keywords": [
            "mark",
            "outlined",
            "punctuation",
            "question"
          ],
          "unicode_output": "2754"
        },
        "203c": {
          "name": "double exclamation mark",
          "shortname": ":bangbang:",
          "shortname_alternates": [],
          "keywords": [
            "bangbang",
            "exclamation",
            "mark",
            "punctuation"
          ],
          "unicode_output": "203c"
        },
        "2049": {
          "name": "exclamation question mark",
          "shortname": ":interrobang:",
          "shortname_alternates": [],
          "keywords": [
            "exclamation",
            "interrobang",
            "mark",
            "punctuation",
            "question"
          ],
          "unicode_output": "2049"
        },
        "1f505": {
          "name": "dim button",
          "shortname": ":low_brightness:",
          "shortname_alternates": [],
          "keywords": [
            "brightness",
            "dim",
            "low"
          ],
          "unicode_output": "1f505"
        },
        "1f506": {
          "name": "bright button",
          "shortname": ":high_brightness:",
          "shortname_alternates": [],
          "keywords": [
            "bright",
            "brightness"
          ],
          "unicode_output": "1f506"
        },
        "303d": {
          "name": "part alternation mark",
          "shortname": ":part_alternation_mark:",
          "shortname_alternates": [],
          "keywords": [
            "mark",
            "part"
          ],
          "unicode_output": "303d"
        },
        "26a0": {
          "name": "warning",
          "shortname": ":warning:",
          "shortname_alternates": [],
          "keywords": [
            "warning"
          ],
          "unicode_output": "26a0"
        },
        "1f6b8": {
          "name": "children crossing",
          "shortname": ":children_crossing:",
          "shortname_alternates": [],
          "keywords": [
            "child",
            "crossing",
            "pedestrian",
            "traffic"
          ],
          "unicode_output": "1f6b8"
        },
        "1f531": {
          "name": "trident emblem",
          "shortname": ":trident:",
          "shortname_alternates": [],
          "keywords": [
            "anchor",
            "emblem",
            "ship",
            "tool",
            "trident"
          ],
          "unicode_output": "1f531"
        },
        "269c": {
          "name": "fleur-de-lis",
          "shortname": ":fleur-de-lis:",
          "shortname_alternates": [],
          "keywords": [
            "fleur-de-lis"
          ],
          "unicode_output": "269c"
        },
        "1f530": {
          "name": "Japanese symbol for beginner",
          "shortname": ":beginner:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "beginner",
            "chevron",
            "green",
            "leaf",
            "tool",
            "yellow"
          ],
          "unicode_output": "1f530"
        },
        "267b": {
          "name": "recycling symbol",
          "shortname": ":recycle:",
          "shortname_alternates": [],
          "keywords": [
            "recycle"
          ],
          "unicode_output": "267b"
        },
        "2705": {
          "name": "white heavy check mark",
          "shortname": ":white_check_mark:",
          "shortname_alternates": [],
          "keywords": [
            "check",
            "mark"
          ],
          "unicode_output": "2705"
        },
        "1f22f": {
          "name": "Japanese “reserved” button",
          "shortname": ":u6307:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“reserved”",
            "指"
          ],
          "unicode_output": "1f22f"
        },
        "1f4b9": {
          "name": "chart increasing with yen",
          "shortname": ":chart:",
          "shortname_alternates": [],
          "keywords": [
            "bank",
            "chart",
            "currency",
            "graph",
            "growth",
            "market",
            "money",
            "rise",
            "trend",
            "upward",
            "yen"
          ],
          "unicode_output": "1f4b9"
        },
        "2747": {
          "name": "sparkle",
          "shortname": ":sparkle:",
          "shortname_alternates": [],
          "keywords": [
            "sparkle"
          ],
          "unicode_output": "2747"
        },
        "2733": {
          "name": "eight-spoked asterisk",
          "shortname": ":eight_spoked_asterisk:",
          "shortname_alternates": [],
          "keywords": [
            "asterisk"
          ],
          "unicode_output": "2733"
        },
        "274e": {
          "name": "cross mark button",
          "shortname": ":negative_squared_cross_mark:",
          "shortname_alternates": [],
          "keywords": [
            "mark",
            "square"
          ],
          "unicode_output": "274e"
        },
        "1f310": {
          "name": "globe with meridians",
          "shortname": ":globe_with_meridians:",
          "shortname_alternates": [],
          "keywords": [
            "earth",
            "globe",
            "meridians",
            "world"
          ],
          "unicode_output": "1f310"
        },
        "1f4a0": {
          "name": "diamond with a dot",
          "shortname": ":diamond_shape_with_a_dot_inside:",
          "shortname_alternates": [],
          "keywords": [
            "comic",
            "diamond",
            "geometric",
            "inside"
          ],
          "unicode_output": "1f4a0"
        },
        "24c2": {
          "name": "circled M",
          "shortname": ":m:",
          "shortname_alternates": [],
          "keywords": [
            "circle",
            "m"
          ],
          "unicode_output": "24c2"
        },
        "1f300": {
          "name": "cyclone",
          "shortname": ":cyclone:",
          "shortname_alternates": [],
          "keywords": [
            "dizzy",
            "twister",
            "typhoon"
          ],
          "unicode_output": "1f300"
        },
        "1f4a4": {
          "name": "zzz",
          "shortname": ":zzz:",
          "shortname_alternates": [],
          "keywords": [
            "comic",
            "sleep"
          ],
          "unicode_output": "1f4a4"
        },
        "1f3e7": {
          "name": "ATM sign",
          "shortname": ":atm:",
          "shortname_alternates": [],
          "keywords": [
            "atm",
            "automated",
            "bank",
            "teller"
          ],
          "unicode_output": "1f3e7"
        },
        "1f6be": {
          "name": "water closet",
          "shortname": ":wc:",
          "shortname_alternates": [],
          "keywords": [
            "closet",
            "lavatory",
            "restroom",
            "water",
            "wc"
          ],
          "unicode_output": "1f6be"
        },
        "267f": {
          "name": "wheelchair symbol",
          "shortname": ":wheelchair:",
          "shortname_alternates": [],
          "keywords": [
            "access"
          ],
          "unicode_output": "267f"
        },
        "1f17f": {
          "name": "P button",
          "shortname": ":parking:",
          "shortname_alternates": [],
          "keywords": [
            "parking"
          ],
          "unicode_output": "1f17f"
        },
        "1f233": {
          "name": "Japanese “vacancy” button",
          "shortname": ":u7a7a:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ideograph",
            "“vacancy”",
            "空"
          ],
          "unicode_output": "1f233"
        },
        "1f202": {
          "name": "Japanese “service charge” button",
          "shortname": ":sa:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "katakana",
            "“service charge”",
            "サ"
          ],
          "unicode_output": "1f202"
        },
        "1f6c2": {
          "name": "passport control",
          "shortname": ":passport_control:",
          "shortname_alternates": [],
          "keywords": [
            "control",
            "passport"
          ],
          "unicode_output": "1f6c2"
        },
        "1f6c3": {
          "name": "customs",
          "shortname": ":customs:",
          "shortname_alternates": [],
          "keywords": [
            "customs"
          ],
          "unicode_output": "1f6c3"
        },
        "1f6c4": {
          "name": "baggage claim",
          "shortname": ":baggage_claim:",
          "shortname_alternates": [],
          "keywords": [
            "baggage",
            "claim"
          ],
          "unicode_output": "1f6c4"
        },
        "1f6c5": {
          "name": "left luggage",
          "shortname": ":left_luggage:",
          "shortname_alternates": [],
          "keywords": [
            "baggage",
            "locker",
            "luggage"
          ],
          "unicode_output": "1f6c5"
        },
        "1f6b9": {
          "name": "men’s room",
          "shortname": ":mens:",
          "shortname_alternates": [],
          "keywords": [
            "lavatory",
            "man",
            "restroom",
            "wc"
          ],
          "unicode_output": "1f6b9"
        },
        "1f6ba": {
          "name": "women’s room",
          "shortname": ":womens:",
          "shortname_alternates": [],
          "keywords": [
            "lavatory",
            "restroom",
            "wc",
            "woman"
          ],
          "unicode_output": "1f6ba"
        },
        "1f6bc": {
          "name": "baby symbol",
          "shortname": ":baby_symbol:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "changing"
          ],
          "unicode_output": "1f6bc"
        },
        "1f6bb": {
          "name": "restroom",
          "shortname": ":restroom:",
          "shortname_alternates": [],
          "keywords": [
            "WC",
            "lavatory",
            "restroom"
          ],
          "unicode_output": "1f6bb"
        },
        "1f6ae": {
          "name": "litter in bin sign",
          "shortname": ":put_litter_in_its_place:",
          "shortname_alternates": [],
          "keywords": [
            "litter",
            "litter bin"
          ],
          "unicode_output": "1f6ae"
        },
        "1f3a6": {
          "name": "cinema",
          "shortname": ":cinema:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "film",
            "movie"
          ],
          "unicode_output": "1f3a6"
        },
        "1f4f6": {
          "name": "antenna bars",
          "shortname": ":signal_strength:",
          "shortname_alternates": [],
          "keywords": [
            "antenna",
            "bar",
            "cell",
            "mobile",
            "phone",
            "signal",
            "telephone"
          ],
          "unicode_output": "1f4f6"
        },
        "1f201": {
          "name": "Japanese “here” button",
          "shortname": ":koko:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "katakana",
            "“here”",
            "ココ"
          ],
          "unicode_output": "1f201"
        },
        "1f523": {
          "name": "input symbols",
          "shortname": ":symbols:",
          "shortname_alternates": [],
          "keywords": [
            "input",
            "〒♪&%"
          ],
          "unicode_output": "1f523"
        },
        "2139": {
          "name": "information",
          "shortname": ":information_source:",
          "shortname_alternates": [],
          "keywords": [
            "i",
            "information"
          ],
          "unicode_output": "2139"
        },
        "1f524": {
          "name": "input latin letters",
          "shortname": ":abc:",
          "shortname_alternates": [],
          "keywords": [
            "abc",
            "alphabet",
            "input",
            "latin",
            "letters"
          ],
          "unicode_output": "1f524"
        },
        "1f521": {
          "name": "input latin lowercase",
          "shortname": ":abcd:",
          "shortname_alternates": [],
          "keywords": [
            "abcd",
            "input",
            "latin",
            "letters",
            "lowercase"
          ],
          "unicode_output": "1f521"
        },
        "1f520": {
          "name": "input latin uppercase",
          "shortname": ":capital_abcd:",
          "shortname_alternates": [],
          "keywords": [
            "ABCD",
            "input",
            "latin",
            "letters",
            "uppercase"
          ],
          "unicode_output": "1f520"
        },
        "1f196": {
          "name": "NG button",
          "shortname": ":ng:",
          "shortname_alternates": [],
          "keywords": [
            "ng"
          ],
          "unicode_output": "1f196"
        },
        "1f197": {
          "name": "OK button",
          "shortname": ":ok:",
          "shortname_alternates": [],
          "keywords": [
            "OK"
          ],
          "unicode_output": "1f197"
        },
        "1f199": {
          "name": "UP! button",
          "shortname": ":up:",
          "shortname_alternates": [],
          "keywords": [
            "mark",
            "up"
          ],
          "unicode_output": "1f199"
        },
        "1f192": {
          "name": "COOL button",
          "shortname": ":cool:",
          "shortname_alternates": [],
          "keywords": [
            "cool"
          ],
          "unicode_output": "1f192"
        },
        "1f195": {
          "name": "NEW button",
          "shortname": ":new:",
          "shortname_alternates": [],
          "keywords": [
            "new"
          ],
          "unicode_output": "1f195"
        },
        "1f193": {
          "name": "FREE button",
          "shortname": ":free:",
          "shortname_alternates": [],
          "keywords": [
            "free"
          ],
          "unicode_output": "1f193"
        },
        "0030-20e3": {
          "name": "keycap: 0",
          "shortname": ":zero:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0030-fe0f-20e3"
        },
        "0031-20e3": {
          "name": "keycap: 1",
          "shortname": ":one:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0031-fe0f-20e3"
        },
        "0032-20e3": {
          "name": "keycap: 2",
          "shortname": ":two:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0032-fe0f-20e3"
        },
        "0033-20e3": {
          "name": "keycap: 3",
          "shortname": ":three:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0033-fe0f-20e3"
        },
        "0034-20e3": {
          "name": "keycap: 4",
          "shortname": ":four:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0034-fe0f-20e3"
        },
        "0035-20e3": {
          "name": "keycap: 5",
          "shortname": ":five:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0035-fe0f-20e3"
        },
        "0036-20e3": {
          "name": "keycap: 6",
          "shortname": ":six:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0036-fe0f-20e3"
        },
        "0037-20e3": {
          "name": "keycap: 7",
          "shortname": ":seven:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0037-fe0f-20e3"
        },
        "0038-20e3": {
          "name": "keycap: 8",
          "shortname": ":eight:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0038-fe0f-20e3"
        },
        "0039-20e3": {
          "name": "keycap: 9",
          "shortname": ":nine:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0039-fe0f-20e3"
        },
        "1f51f": {
          "name": "keycap: 10",
          "shortname": ":keycap_ten:",
          "shortname_alternates": [],
          "keywords": [
            "keycap 10"
          ],
          "unicode_output": "1f51f"
        },
        "1f522": {
          "name": "input numbers",
          "shortname": ":1234:",
          "shortname_alternates": [],
          "keywords": [
            "1234",
            "input",
            "numbers"
          ],
          "unicode_output": "1f522"
        },
        "0023-20e3": {
          "name": "keycap: #",
          "shortname": ":hash:",
          "shortname_alternates": [],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "0023-fe0f-20e3"
        },
        "002a-20e3": {
          "name": "keycap: *",
          "shortname": ":asterisk:",
          "shortname_alternates": [
            ":keycap_asterisk:"
          ],
          "keywords": [
            "keycap"
          ],
          "unicode_output": "002a-fe0f-20e3"
        },
        "23cf": {
          "name": "eject button",
          "shortname": ":eject:",
          "shortname_alternates": [
            ":eject_symbol:"
          ],
          "keywords": [
            "eject"
          ],
          "unicode_output": "23cf"
        },
        "25b6": {
          "name": "play button",
          "shortname": ":arrow_forward:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "play",
            "right",
            "triangle"
          ],
          "unicode_output": "25b6"
        },
        "23f8": {
          "name": "pause button",
          "shortname": ":pause_button:",
          "shortname_alternates": [
            ":double_vertical_bar:"
          ],
          "keywords": [
            "bar",
            "double",
            "pause",
            "vertical"
          ],
          "unicode_output": "23f8"
        },
        "23ef": {
          "name": "play or pause button",
          "shortname": ":play_pause:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "pause",
            "play",
            "right",
            "triangle"
          ],
          "unicode_output": "23ef"
        },
        "23f9": {
          "name": "stop button",
          "shortname": ":stop_button:",
          "shortname_alternates": [],
          "keywords": [
            "square",
            "stop"
          ],
          "unicode_output": "23f9"
        },
        "23fa": {
          "name": "record button",
          "shortname": ":record_button:",
          "shortname_alternates": [],
          "keywords": [
            "circle",
            "record"
          ],
          "unicode_output": "23fa"
        },
        "23ed": {
          "name": "next track button",
          "shortname": ":track_next:",
          "shortname_alternates": [
            ":next_track:"
          ],
          "keywords": [
            "arrow",
            "next scene",
            "next track",
            "triangle"
          ],
          "unicode_output": "23ed"
        },
        "23ee": {
          "name": "last track button",
          "shortname": ":track_previous:",
          "shortname_alternates": [
            ":previous_track:"
          ],
          "keywords": [
            "arrow",
            "previous scene",
            "previous track",
            "triangle"
          ],
          "unicode_output": "23ee"
        },
        "23e9": {
          "name": "fast-forward button",
          "shortname": ":fast_forward:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "double",
            "fast",
            "forward"
          ],
          "unicode_output": "23e9"
        },
        "23ea": {
          "name": "fast reverse button",
          "shortname": ":rewind:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "double",
            "rewind"
          ],
          "unicode_output": "23ea"
        },
        "23eb": {
          "name": "fast up button",
          "shortname": ":arrow_double_up:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "double"
          ],
          "unicode_output": "23eb"
        },
        "23ec": {
          "name": "fast down button",
          "shortname": ":arrow_double_down:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "double",
            "down"
          ],
          "unicode_output": "23ec"
        },
        "25c0": {
          "name": "reverse button",
          "shortname": ":arrow_backward:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "left",
            "reverse",
            "triangle"
          ],
          "unicode_output": "25c0"
        },
        "1f53c": {
          "name": "upwards button",
          "shortname": ":arrow_up_small:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "button",
            "red"
          ],
          "unicode_output": "1f53c"
        },
        "1f53d": {
          "name": "downwards button",
          "shortname": ":arrow_down_small:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "button",
            "down",
            "red"
          ],
          "unicode_output": "1f53d"
        },
        "27a1": {
          "name": "right arrow",
          "shortname": ":arrow_right:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "cardinal",
            "direction",
            "east"
          ],
          "unicode_output": "27a1"
        },
        "2b05": {
          "name": "left arrow",
          "shortname": ":arrow_left:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "cardinal",
            "direction",
            "west"
          ],
          "unicode_output": "2b05"
        },
        "2b06": {
          "name": "up arrow",
          "shortname": ":arrow_up:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "cardinal",
            "direction",
            "north"
          ],
          "unicode_output": "2b06"
        },
        "2b07": {
          "name": "down arrow",
          "shortname": ":arrow_down:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "cardinal",
            "direction",
            "down",
            "south"
          ],
          "unicode_output": "2b07"
        },
        "2197": {
          "name": "up-right arrow",
          "shortname": ":arrow_upper_right:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "direction",
            "intercardinal",
            "northeast"
          ],
          "unicode_output": "2197"
        },
        "2198": {
          "name": "down-right arrow",
          "shortname": ":arrow_lower_right:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "direction",
            "intercardinal",
            "southeast"
          ],
          "unicode_output": "2198"
        },
        "2199": {
          "name": "down-left arrow",
          "shortname": ":arrow_lower_left:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "direction",
            "intercardinal",
            "southwest"
          ],
          "unicode_output": "2199"
        },
        "2196": {
          "name": "up-left arrow",
          "shortname": ":arrow_upper_left:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "direction",
            "intercardinal",
            "northwest"
          ],
          "unicode_output": "2196"
        },
        "2195": {
          "name": "up-down arrow",
          "shortname": ":arrow_up_down:",
          "shortname_alternates": [],
          "keywords": [
            "arrow"
          ],
          "unicode_output": "2195"
        },
        "2194": {
          "name": "left-right arrow",
          "shortname": ":left_right_arrow:",
          "shortname_alternates": [],
          "keywords": [
            "arrow"
          ],
          "unicode_output": "2194"
        },
        "21aa": {
          "name": "left arrow curving right",
          "shortname": ":arrow_right_hook:",
          "shortname_alternates": [],
          "keywords": [
            "arrow"
          ],
          "unicode_output": "21aa"
        },
        "21a9": {
          "name": "right arrow curving left",
          "shortname": ":leftwards_arrow_with_hook:",
          "shortname_alternates": [],
          "keywords": [
            "arrow"
          ],
          "unicode_output": "21a9"
        },
        "2934": {
          "name": "right arrow curving up",
          "shortname": ":arrow_heading_up:",
          "shortname_alternates": [],
          "keywords": [
            "arrow"
          ],
          "unicode_output": "2934"
        },
        "2935": {
          "name": "right arrow curving down",
          "shortname": ":arrow_heading_down:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "down"
          ],
          "unicode_output": "2935"
        },
        "1f500": {
          "name": "shuffle tracks button",
          "shortname": ":twisted_rightwards_arrows:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "crossed"
          ],
          "unicode_output": "1f500"
        },
        "1f501": {
          "name": "repeat button",
          "shortname": ":repeat:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "clockwise",
            "repeat"
          ],
          "unicode_output": "1f501"
        },
        "1f502": {
          "name": "repeat single button",
          "shortname": ":repeat_one:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "clockwise",
            "once"
          ],
          "unicode_output": "1f502"
        },
        "1f504": {
          "name": "counterclockwise arrows button",
          "shortname": ":arrows_counterclockwise:",
          "shortname_alternates": [],
          "keywords": [
            "anticlockwise",
            "arrow",
            "counterclockwise",
            "withershins"
          ],
          "unicode_output": "1f504"
        },
        "1f503": {
          "name": "clockwise vertical arrows",
          "shortname": ":arrows_clockwise:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "clockwise",
            "reload"
          ],
          "unicode_output": "1f503"
        },
        "1f3b5": {
          "name": "musical note",
          "shortname": ":musical_note:",
          "shortname_alternates": [],
          "keywords": [
            "music",
            "note"
          ],
          "unicode_output": "1f3b5"
        },
        "1f3b6": {
          "name": "musical notes",
          "shortname": ":notes:",
          "shortname_alternates": [],
          "keywords": [
            "music",
            "note",
            "notes"
          ],
          "unicode_output": "1f3b6"
        },
        "2795": {
          "name": "heavy plus sign",
          "shortname": ":heavy_plus_sign:",
          "shortname_alternates": [],
          "keywords": [
            "math",
            "plus"
          ],
          "unicode_output": "2795"
        },
        "2796": {
          "name": "heavy minus sign",
          "shortname": ":heavy_minus_sign:",
          "shortname_alternates": [],
          "keywords": [
            "math",
            "minus"
          ],
          "unicode_output": "2796"
        },
        "2797": {
          "name": "heavy division sign",
          "shortname": ":heavy_division_sign:",
          "shortname_alternates": [],
          "keywords": [
            "division",
            "math"
          ],
          "unicode_output": "2797"
        },
        "2716": {
          "name": "heavy multiplication x",
          "shortname": ":heavy_multiplication_x:",
          "shortname_alternates": [],
          "keywords": [
            "cancel",
            "multiplication",
            "multiply",
            "x"
          ],
          "unicode_output": "2716"
        },
        "1f4b2": {
          "name": "heavy dollar sign",
          "shortname": ":heavy_dollar_sign:",
          "shortname_alternates": [],
          "keywords": [
            "currency",
            "dollar",
            "money"
          ],
          "unicode_output": "1f4b2"
        },
        "1f4b1": {
          "name": "currency exchange",
          "shortname": ":currency_exchange:",
          "shortname_alternates": [],
          "keywords": [
            "bank",
            "currency",
            "exchange",
            "money"
          ],
          "unicode_output": "1f4b1"
        },
        "2122": {
          "name": "trade mark",
          "shortname": ":tm:",
          "shortname_alternates": [],
          "keywords": [
            "mark",
            "tm",
            "trademark"
          ],
          "unicode_output": "2122"
        },
        "00a9": {
          "name": "copyright",
          "shortname": ":copyright:",
          "shortname_alternates": [],
          "keywords": [
            "copyright"
          ],
          "unicode_output": "00a9"
        },
        "00ae": {
          "name": "registered",
          "shortname": ":registered:",
          "shortname_alternates": [],
          "keywords": [
            "registered"
          ],
          "unicode_output": "00ae"
        },
        "3030": {
          "name": "wavy dash",
          "shortname": ":wavy_dash:",
          "shortname_alternates": [],
          "keywords": [
            "dash",
            "punctuation",
            "wavy"
          ],
          "unicode_output": "3030"
        },
        "27b0": {
          "name": "curly loop",
          "shortname": ":curly_loop:",
          "shortname_alternates": [],
          "keywords": [
            "curl",
            "loop"
          ],
          "unicode_output": "27b0"
        },
        "27bf": {
          "name": "double curly loop",
          "shortname": ":loop:",
          "shortname_alternates": [],
          "keywords": [
            "curl",
            "double",
            "loop"
          ],
          "unicode_output": "27bf"
        },
        "1f51a": {
          "name": "END arrow",
          "shortname": ":end:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "end"
          ],
          "unicode_output": "1f51a"
        },
        "1f519": {
          "name": "BACK arrow",
          "shortname": ":back:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "back"
          ],
          "unicode_output": "1f519"
        },
        "1f51b": {
          "name": "ON! arrow",
          "shortname": ":on:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "mark",
            "on"
          ],
          "unicode_output": "1f51b"
        },
        "1f51d": {
          "name": "TOP arrow",
          "shortname": ":top:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "top",
            "up"
          ],
          "unicode_output": "1f51d"
        },
        "1f51c": {
          "name": "SOON arrow",
          "shortname": ":soon:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "soon"
          ],
          "unicode_output": "1f51c"
        },
        "2714": {
          "name": "heavy check mark",
          "shortname": ":heavy_check_mark:",
          "shortname_alternates": [],
          "keywords": [
            "check",
            "mark"
          ],
          "unicode_output": "2714"
        },
        "2611": {
          "name": "ballot box with check",
          "shortname": ":ballot_box_with_check:",
          "shortname_alternates": [],
          "keywords": [
            "ballot",
            "box",
            "check"
          ],
          "unicode_output": "2611"
        },
        "1f518": {
          "name": "radio button",
          "shortname": ":radio_button:",
          "shortname_alternates": [],
          "keywords": [
            "button",
            "geometric",
            "radio"
          ],
          "unicode_output": "1f518"
        },
        "26aa": {
          "name": "white circle",
          "shortname": ":white_circle:",
          "shortname_alternates": [],
          "keywords": [
            "circle",
            "geometric"
          ],
          "unicode_output": "26aa"
        },
        "26ab": {
          "name": "black circle",
          "shortname": ":black_circle:",
          "shortname_alternates": [],
          "keywords": [
            "circle",
            "geometric"
          ],
          "unicode_output": "26ab"
        },
        "1f534": {
          "name": "red circle",
          "shortname": ":red_circle:",
          "shortname_alternates": [],
          "keywords": [
            "circle",
            "geometric",
            "red"
          ],
          "unicode_output": "1f534"
        },
        "1f535": {
          "name": "blue circle",
          "shortname": ":blue_circle:",
          "shortname_alternates": [],
          "keywords": [
            "blue",
            "circle",
            "geometric"
          ],
          "unicode_output": "1f535"
        },
        "1f53a": {
          "name": "red triangle pointed up",
          "shortname": ":small_red_triangle:",
          "shortname_alternates": [],
          "keywords": [
            "geometric",
            "red"
          ],
          "unicode_output": "1f53a"
        },
        "1f53b": {
          "name": "red triangle pointed down",
          "shortname": ":small_red_triangle_down:",
          "shortname_alternates": [],
          "keywords": [
            "down",
            "geometric",
            "red"
          ],
          "unicode_output": "1f53b"
        },
        "1f538": {
          "name": "small orange diamond",
          "shortname": ":small_orange_diamond:",
          "shortname_alternates": [],
          "keywords": [
            "diamond",
            "geometric",
            "orange"
          ],
          "unicode_output": "1f538"
        },
        "1f539": {
          "name": "small blue diamond",
          "shortname": ":small_blue_diamond:",
          "shortname_alternates": [],
          "keywords": [
            "blue",
            "diamond",
            "geometric"
          ],
          "unicode_output": "1f539"
        },
        "1f536": {
          "name": "large orange diamond",
          "shortname": ":large_orange_diamond:",
          "shortname_alternates": [],
          "keywords": [
            "diamond",
            "geometric",
            "orange"
          ],
          "unicode_output": "1f536"
        },
        "1f537": {
          "name": "large blue diamond",
          "shortname": ":large_blue_diamond:",
          "shortname_alternates": [],
          "keywords": [
            "blue",
            "diamond",
            "geometric"
          ],
          "unicode_output": "1f537"
        },
        "1f533": {
          "name": "white square button",
          "shortname": ":white_square_button:",
          "shortname_alternates": [],
          "keywords": [
            "button",
            "geometric",
            "outlined",
            "square"
          ],
          "unicode_output": "1f533"
        },
        "1f532": {
          "name": "black square button",
          "shortname": ":black_square_button:",
          "shortname_alternates": [],
          "keywords": [
            "button",
            "geometric",
            "square"
          ],
          "unicode_output": "1f532"
        },
        "25aa": {
          "name": "black small square",
          "shortname": ":black_small_square:",
          "shortname_alternates": [],
          "keywords": [
            "geometric",
            "square"
          ],
          "unicode_output": "25aa"
        },
        "25ab": {
          "name": "white small square",
          "shortname": ":white_small_square:",
          "shortname_alternates": [],
          "keywords": [
            "geometric",
            "square"
          ],
          "unicode_output": "25ab"
        },
        "25fe": {
          "name": "black medium-small square",
          "shortname": ":black_medium_small_square:",
          "shortname_alternates": [],
          "keywords": [
            "geometric",
            "square"
          ],
          "unicode_output": "25fe"
        },
        "25fd": {
          "name": "white medium-small square",
          "shortname": ":white_medium_small_square:",
          "shortname_alternates": [],
          "keywords": [
            "geometric",
            "square"
          ],
          "unicode_output": "25fd"
        },
        "25fc": {
          "name": "black medium square",
          "shortname": ":black_medium_square:",
          "shortname_alternates": [],
          "keywords": [
            "geometric",
            "square"
          ],
          "unicode_output": "25fc"
        },
        "25fb": {
          "name": "white medium square",
          "shortname": ":white_medium_square:",
          "shortname_alternates": [],
          "keywords": [
            "geometric",
            "square"
          ],
          "unicode_output": "25fb"
        },
        "2b1b": {
          "name": "black large square",
          "shortname": ":black_large_square:",
          "shortname_alternates": [],
          "keywords": [
            "geometric",
            "square"
          ],
          "unicode_output": "2b1b"
        },
        "2b1c": {
          "name": "white large square",
          "shortname": ":white_large_square:",
          "shortname_alternates": [],
          "keywords": [
            "geometric",
            "square"
          ],
          "unicode_output": "2b1c"
        },
        "1f508": {
          "name": "speaker low volume",
          "shortname": ":speaker:",
          "shortname_alternates": [],
          "keywords": [
            "soft"
          ],
          "unicode_output": "1f508"
        },
        "1f507": {
          "name": "muted speaker",
          "shortname": ":mute:",
          "shortname_alternates": [],
          "keywords": [
            "mute",
            "quiet",
            "silent",
            "speaker"
          ],
          "unicode_output": "1f507"
        },
        "1f509": {
          "name": "speaker medium volume",
          "shortname": ":sound:",
          "shortname_alternates": [],
          "keywords": [
            "medium"
          ],
          "unicode_output": "1f509"
        },
        "1f50a": {
          "name": "speaker high volume",
          "shortname": ":loud_sound:",
          "shortname_alternates": [],
          "keywords": [
            "loud"
          ],
          "unicode_output": "1f50a"
        },
        "1f514": {
          "name": "bell",
          "shortname": ":bell:",
          "shortname_alternates": [],
          "keywords": [
            "bell"
          ],
          "unicode_output": "1f514"
        },
        "1f515": {
          "name": "bell with slash",
          "shortname": ":no_bell:",
          "shortname_alternates": [],
          "keywords": [
            "bell",
            "forbidden",
            "mute",
            "no",
            "not",
            "prohibited",
            "quiet",
            "silent"
          ],
          "unicode_output": "1f515"
        },
        "1f4e3": {
          "name": "megaphone",
          "shortname": ":mega:",
          "shortname_alternates": [],
          "keywords": [
            "cheering"
          ],
          "unicode_output": "1f4e3"
        },
        "1f4e2": {
          "name": "loudspeaker",
          "shortname": ":loudspeaker:",
          "shortname_alternates": [],
          "keywords": [
            "loud",
            "public address"
          ],
          "unicode_output": "1f4e2"
        },
        "1f5e8": {
          "name": "left speech bubble",
          "shortname": ":speech_left:",
          "shortname_alternates": [
            ":left_speech_bubble:"
          ],
          "keywords": [
            "dialog",
            "speech"
          ],
          "unicode_output": "1f5e8"
        },
        "1f441-1f5e8": {
          "name": "eye in speech bubble",
          "shortname": ":eye_in_speech_bubble:",
          "shortname_alternates": [],
          "keywords": [
            "eye",
            "speech bubble",
            "witness"
          ],
          "unicode_output": "1f441-fe0f-200d-1f5e8-fe0f"
        },
        "1f4ac": {
          "name": "speech balloon",
          "shortname": ":speech_balloon:",
          "shortname_alternates": [],
          "keywords": [
            "balloon",
            "bubble",
            "comic",
            "dialog",
            "speech"
          ],
          "unicode_output": "1f4ac"
        },
        "1f4ad": {
          "name": "thought balloon",
          "shortname": ":thought_balloon:",
          "shortname_alternates": [],
          "keywords": [
            "balloon",
            "bubble",
            "comic",
            "thought"
          ],
          "unicode_output": "1f4ad"
        },
        "1f5ef": {
          "name": "right anger bubble",
          "shortname": ":anger_right:",
          "shortname_alternates": [
            ":right_anger_bubble:"
          ],
          "keywords": [
            "angry",
            "balloon",
            "bubble",
            "mad"
          ],
          "unicode_output": "1f5ef"
        },
        "2660": {
          "name": "spade suit",
          "shortname": ":spades:",
          "shortname_alternates": [],
          "keywords": [
            "card",
            "game"
          ],
          "unicode_output": "2660"
        },
        "2663": {
          "name": "club suit",
          "shortname": ":clubs:",
          "shortname_alternates": [],
          "keywords": [
            "card",
            "game"
          ],
          "unicode_output": "2663"
        },
        "2665": {
          "name": "heart suit",
          "shortname": ":hearts:",
          "shortname_alternates": [],
          "keywords": [
            "card",
            "game"
          ],
          "unicode_output": "2665"
        },
        "2666": {
          "name": "diamond suit",
          "shortname": ":diamonds:",
          "shortname_alternates": [],
          "keywords": [
            "card",
            "game"
          ],
          "unicode_output": "2666"
        },
        "1f0cf": {
          "name": "joker",
          "shortname": ":black_joker:",
          "shortname_alternates": [],
          "keywords": [
            "card",
            "game",
            "wildcard"
          ],
          "unicode_output": "1f0cf"
        },
        "1f3b4": {
          "name": "flower playing cards",
          "shortname": ":flower_playing_cards:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "card",
            "flower",
            "game",
            "playing"
          ],
          "unicode_output": "1f3b4"
        },
        "1f004": {
          "name": "mahjong red dragon",
          "shortname": ":mahjong:",
          "shortname_alternates": [],
          "keywords": [
            "game",
            "mahjong",
            "red"
          ],
          "unicode_output": "1f004"
        },
        "1f550": {
          "name": "one o’clock",
          "shortname": ":clock1:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "1",
            "1:00",
            "clock",
            "one",
            "o’clock"
          ],
          "unicode_output": "1f550"
        },
        "1f551": {
          "name": "two o’clock",
          "shortname": ":clock2:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "2",
            "2:00",
            "clock",
            "o’clock",
            "two"
          ],
          "unicode_output": "1f551"
        },
        "1f552": {
          "name": "three o’clock",
          "shortname": ":clock3:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "3",
            "3:00",
            "clock",
            "o’clock",
            "three"
          ],
          "unicode_output": "1f552"
        },
        "1f553": {
          "name": "four o’clock",
          "shortname": ":clock4:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "4",
            "4:00",
            "clock",
            "four",
            "o’clock"
          ],
          "unicode_output": "1f553"
        },
        "1f554": {
          "name": "five o’clock",
          "shortname": ":clock5:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "5",
            "5:00",
            "clock",
            "five",
            "o’clock"
          ],
          "unicode_output": "1f554"
        },
        "1f555": {
          "name": "six o’clock",
          "shortname": ":clock6:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "6",
            "6:00",
            "clock",
            "o’clock",
            "six"
          ],
          "unicode_output": "1f555"
        },
        "1f556": {
          "name": "seven o’clock",
          "shortname": ":clock7:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "7",
            "7:00",
            "clock",
            "o’clock",
            "seven"
          ],
          "unicode_output": "1f556"
        },
        "1f557": {
          "name": "eight o’clock",
          "shortname": ":clock8:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "8",
            "8:00",
            "clock",
            "eight",
            "o’clock"
          ],
          "unicode_output": "1f557"
        },
        "1f558": {
          "name": "nine o’clock",
          "shortname": ":clock9:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "9",
            "9:00",
            "clock",
            "nine",
            "o’clock"
          ],
          "unicode_output": "1f558"
        },
        "1f559": {
          "name": "ten o’clock",
          "shortname": ":clock10:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "10",
            "10:00",
            "clock",
            "o’clock",
            "ten"
          ],
          "unicode_output": "1f559"
        },
        "1f55a": {
          "name": "eleven o’clock",
          "shortname": ":clock11:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "11",
            "11:00",
            "clock",
            "eleven",
            "o’clock"
          ],
          "unicode_output": "1f55a"
        },
        "1f55b": {
          "name": "twelve o’clock",
          "shortname": ":clock12:",
          "shortname_alternates": [],
          "keywords": [
            "00",
            "12",
            "12:00",
            "clock",
            "o’clock",
            "twelve"
          ],
          "unicode_output": "1f55b"
        },
        "1f55c": {
          "name": "one-thirty",
          "shortname": ":clock130:",
          "shortname_alternates": [],
          "keywords": [
            "1",
            "1:30",
            "30",
            "clock",
            "one",
            "thirty"
          ],
          "unicode_output": "1f55c"
        },
        "1f55d": {
          "name": "two-thirty",
          "shortname": ":clock230:",
          "shortname_alternates": [],
          "keywords": [
            "2",
            "2:30",
            "30",
            "clock",
            "thirty",
            "two"
          ],
          "unicode_output": "1f55d"
        },
        "1f55e": {
          "name": "three-thirty",
          "shortname": ":clock330:",
          "shortname_alternates": [],
          "keywords": [
            "3",
            "30",
            "3:30",
            "clock",
            "thirty",
            "three"
          ],
          "unicode_output": "1f55e"
        },
        "1f55f": {
          "name": "four-thirty",
          "shortname": ":clock430:",
          "shortname_alternates": [],
          "keywords": [
            "4",
            "30",
            "4:30",
            "clock",
            "four",
            "thirty"
          ],
          "unicode_output": "1f55f"
        },
        "1f560": {
          "name": "five-thirty",
          "shortname": ":clock530:",
          "shortname_alternates": [],
          "keywords": [
            "5",
            "30",
            "5:30",
            "clock",
            "five",
            "thirty"
          ],
          "unicode_output": "1f560"
        },
        "1f561": {
          "name": "six-thirty",
          "shortname": ":clock630:",
          "shortname_alternates": [],
          "keywords": [
            "6",
            "30",
            "6:30",
            "clock",
            "six",
            "thirty"
          ],
          "unicode_output": "1f561"
        },
        "1f562": {
          "name": "seven-thirty",
          "shortname": ":clock730:",
          "shortname_alternates": [],
          "keywords": [
            "7",
            "30",
            "7:30",
            "clock",
            "seven",
            "thirty"
          ],
          "unicode_output": "1f562"
        },
        "1f563": {
          "name": "eight-thirty",
          "shortname": ":clock830:",
          "shortname_alternates": [],
          "keywords": [
            "8",
            "30",
            "8:30",
            "clock",
            "eight",
            "thirty"
          ],
          "unicode_output": "1f563"
        },
        "1f564": {
          "name": "nine-thirty",
          "shortname": ":clock930:",
          "shortname_alternates": [],
          "keywords": [
            "9",
            "30",
            "9:30",
            "clock",
            "nine",
            "thirty"
          ],
          "unicode_output": "1f564"
        },
        "1f565": {
          "name": "ten-thirty",
          "shortname": ":clock1030:",
          "shortname_alternates": [],
          "keywords": [
            "10",
            "10:30",
            "30",
            "clock",
            "ten",
            "thirty"
          ],
          "unicode_output": "1f565"
        },
        "1f566": {
          "name": "eleven-thirty",
          "shortname": ":clock1130:",
          "shortname_alternates": [],
          "keywords": [
            "11",
            "11:30",
            "30",
            "clock",
            "eleven",
            "thirty"
          ],
          "unicode_output": "1f566"
        },
        "1f567": {
          "name": "twelve-thirty",
          "shortname": ":clock1230:",
          "shortname_alternates": [],
          "keywords": [
            "12",
            "12:30",
            "30",
            "clock",
            "thirty",
            "twelve"
          ],
          "unicode_output": "1f567"
        },
        "0030": {
          "name": "digit zero",
          "shortname": ":digit_zero:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0030"
        },
        "0031": {
          "name": "digit one",
          "shortname": ":digit_one:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0031"
        },
        "0032": {
          "name": "digit two",
          "shortname": ":digit_two:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0032"
        },
        "0033": {
          "name": "digit three",
          "shortname": ":digit_three:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0033"
        },
        "0034": {
          "name": "digit four",
          "shortname": ":digit_four:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0034"
        },
        "0035": {
          "name": "digit five",
          "shortname": ":digit_five:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0035"
        },
        "0036": {
          "name": "digit six",
          "shortname": ":digit_six:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0036"
        },
        "0037": {
          "name": "digit seven",
          "shortname": ":digit_seven:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0037"
        },
        "0038": {
          "name": "digit eight",
          "shortname": ":digit_eight:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0038"
        },
        "0039": {
          "name": "digit nine",
          "shortname": ":digit_nine:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0039"
        },
        "0023": {
          "name": "pound symbol",
          "shortname": ":pound_symbol:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "0023"
        },
        "002a": {
          "name": "asterisk",
          "shortname": ":asterisk_symbol:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "002a"
        },
        "2640": {
          "name": "female sign",
          "shortname": ":female_sign:",
          "shortname_alternates": [],
          "keywords": [
            "woman"
          ],
          "unicode_output": "2640"
        },
        "2642": {
          "name": "male sign",
          "shortname": ":male_sign:",
          "shortname_alternates": [],
          "keywords": [
            "man"
          ],
          "unicode_output": "2642"
        },
        "2695": {
          "name": "medical symbol",
          "shortname": ":medical_symbol:",
          "shortname_alternates": [],
          "keywords": [
            "aesculapius",
            "medicine",
            "staff"
          ],
          "unicode_output": "2695"
        },
        "26bd": {
          "name": "soccer ball",
          "shortname": ":soccer:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "football",
            "soccer"
          ],
          "unicode_output": "26bd"
        },
        "1f3c0": {
          "name": "basketball",
          "shortname": ":basketball:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "hoop"
          ],
          "unicode_output": "1f3c0"
        },
        "1f3c8": {
          "name": "american football",
          "shortname": ":football:",
          "shortname_alternates": [],
          "keywords": [
            "american",
            "ball",
            "football"
          ],
          "unicode_output": "1f3c8"
        },
        "26be": {
          "name": "baseball",
          "shortname": ":baseball:",
          "shortname_alternates": [],
          "keywords": [
            "ball"
          ],
          "unicode_output": "26be"
        },
        "1f94e": {
          "name": "softball",
          "shortname": ":softball:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f94e"
        },
        "1f3be": {
          "name": "tennis",
          "shortname": ":tennis:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "racquet"
          ],
          "unicode_output": "1f3be"
        },
        "1f3d0": {
          "name": "volleyball",
          "shortname": ":volleyball:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "game"
          ],
          "unicode_output": "1f3d0"
        },
        "1f3c9": {
          "name": "rugby football",
          "shortname": ":rugby_football:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "football",
            "rugby"
          ],
          "unicode_output": "1f3c9"
        },
        "1f3b1": {
          "name": "pool 8 ball",
          "shortname": ":8ball:",
          "shortname_alternates": [],
          "keywords": [
            "8",
            "8 ball",
            "ball",
            "billiard",
            "eight",
            "game"
          ],
          "unicode_output": "1f3b1"
        },
        "1f3d3": {
          "name": "ping pong",
          "shortname": ":ping_pong:",
          "shortname_alternates": [
            ":table_tennis:"
          ],
          "keywords": [
            "ball",
            "bat",
            "game",
            "paddle",
            "ping pong",
            "table tennis"
          ],
          "unicode_output": "1f3d3"
        },
        "1f3f8": {
          "name": "badminton",
          "shortname": ":badminton:",
          "shortname_alternates": [],
          "keywords": [
            "birdie",
            "game",
            "racquet",
            "shuttlecock"
          ],
          "unicode_output": "1f3f8"
        },
        "1f945": {
          "name": "goal net",
          "shortname": ":goal:",
          "shortname_alternates": [
            ":goal_net:"
          ],
          "keywords": [
            "goal",
            "net"
          ],
          "unicode_output": "1f945"
        },
        "1f3d2": {
          "name": "ice hockey",
          "shortname": ":hockey:",
          "shortname_alternates": [],
          "keywords": [
            "game",
            "hockey",
            "ice",
            "puck",
            "stick"
          ],
          "unicode_output": "1f3d2"
        },
        "1f3d1": {
          "name": "field hockey",
          "shortname": ":field_hockey:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "field",
            "game",
            "hockey",
            "stick"
          ],
          "unicode_output": "1f3d1"
        },
        "1f3cf": {
          "name": "cricket game",
          "shortname": ":cricket_game:",
          "shortname_alternates": [
            ":cricket_bat_ball:"
          ],
          "keywords": [
            "ball",
            "bat",
            "game"
          ],
          "unicode_output": "1f3cf"
        },
        "1f94d": {
          "name": "lacrosse",
          "shortname": ":lacrosse:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f94d"
        },
        "26f3": {
          "name": "flag in hole",
          "shortname": ":golf:",
          "shortname_alternates": [],
          "keywords": [
            "golf",
            "hole"
          ],
          "unicode_output": "26f3"
        },
        "1f94f": {
          "name": "flying disc",
          "shortname": ":flying_disc:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f94f"
        },
        "1f3f9": {
          "name": "bow and arrow",
          "shortname": ":bow_and_arrow:",
          "shortname_alternates": [
            ":archery:"
          ],
          "keywords": [
            "Sagittarius",
            "archer",
            "archery",
            "arrow",
            "bow",
            "tool",
            "weapon",
            "zodiac"
          ],
          "unicode_output": "1f3f9"
        },
        "1f3a3": {
          "name": "fishing pole",
          "shortname": ":fishing_pole_and_fish:",
          "shortname_alternates": [],
          "keywords": [
            "fish",
            "pole"
          ],
          "unicode_output": "1f3a3"
        },
        "1f94a": {
          "name": "boxing glove",
          "shortname": ":boxing_glove:",
          "shortname_alternates": [
            ":boxing_gloves:"
          ],
          "keywords": [
            "boxing",
            "glove"
          ],
          "unicode_output": "1f94a"
        },
        "1f94b": {
          "name": "martial arts uniform",
          "shortname": ":martial_arts_uniform:",
          "shortname_alternates": [
            ":karate_uniform:"
          ],
          "keywords": [
            "judo",
            "karate",
            "martial arts",
            "taekwondo",
            "uniform"
          ],
          "unicode_output": "1f94b"
        },
        "1f3bd": {
          "name": "running shirt",
          "shortname": ":running_shirt_with_sash:",
          "shortname_alternates": [],
          "keywords": [
            "athletics",
            "running",
            "sash",
            "shirt"
          ],
          "unicode_output": "1f3bd"
        },
        "1f6f9": {
          "name": "skateboard",
          "shortname": ":skateboard:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f6f9"
        },
        "26f8": {
          "name": "ice skate",
          "shortname": ":ice_skate:",
          "shortname_alternates": [],
          "keywords": [
            "ice",
            "skate"
          ],
          "unicode_output": "26f8"
        },
        "1f94c": {
          "name": "curling stone",
          "shortname": ":curling_stone:",
          "shortname_alternates": [],
          "keywords": [
            "game",
            "rock"
          ],
          "unicode_output": "1f94c"
        },
        "1f6f7": {
          "name": "sled",
          "shortname": ":sled:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f6f7"
        },
        "1f3bf": {
          "name": "skis",
          "shortname": ":ski:",
          "shortname_alternates": [],
          "keywords": [
            "ski",
            "snow"
          ],
          "unicode_output": "1f3bf"
        },
        "26f7": {
          "name": "skier",
          "shortname": ":skier:",
          "shortname_alternates": [],
          "keywords": [
            "ski",
            "snow"
          ],
          "unicode_output": "26f7"
        },
        "1f3c2": {
          "name": "snowboarder",
          "shortname": ":snowboarder:",
          "shortname_alternates": [],
          "keywords": [
            "ski",
            "snow",
            "snowboard"
          ],
          "unicode_output": "1f3c2"
        },
        "1f3c2-1f3fb": {
          "name": "snowboarder: light skin tone",
          "shortname": ":snowboarder_tone1:",
          "shortname_alternates": [
            ":snowboarder_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "ski",
            "snow",
            "snowboard"
          ],
          "unicode_output": "1f3c2-1f3fb"
        },
        "1f3c2-1f3fc": {
          "name": "snowboarder: medium-light skin tone",
          "shortname": ":snowboarder_tone2:",
          "shortname_alternates": [
            ":snowboarder_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "ski",
            "snow",
            "snowboard"
          ],
          "unicode_output": "1f3c2-1f3fc"
        },
        "1f3c2-1f3fd": {
          "name": "snowboarder: medium skin tone",
          "shortname": ":snowboarder_tone3:",
          "shortname_alternates": [
            ":snowboarder_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "ski",
            "snow",
            "snowboard"
          ],
          "unicode_output": "1f3c2-1f3fd"
        },
        "1f3c2-1f3fe": {
          "name": "snowboarder: medium-dark skin tone",
          "shortname": ":snowboarder_tone4:",
          "shortname_alternates": [
            ":snowboarder_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "ski",
            "snow",
            "snowboard"
          ],
          "unicode_output": "1f3c2-1f3fe"
        },
        "1f3c2-1f3ff": {
          "name": "snowboarder: dark skin tone",
          "shortname": ":snowboarder_tone5:",
          "shortname_alternates": [
            ":snowboarder_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "ski",
            "snow",
            "snowboard"
          ],
          "unicode_output": "1f3c2-1f3ff"
        },
        "1f3cb": {
          "name": "person lifting weights",
          "shortname": ":person_lifting_weights:",
          "shortname_alternates": [
            ":lifter:",
            ":weight_lifter:"
          ],
          "keywords": [
            "lifter",
            "weight"
          ],
          "unicode_output": "1f3cb"
        },
        "1f3cb-1f3fb": {
          "name": "person lifting weights: light skin tone",
          "shortname": ":person_lifting_weights_tone1:",
          "shortname_alternates": [
            ":lifter_tone1:",
            ":weight_lifter_tone1:"
          ],
          "keywords": [
            "lifter",
            "light skin tone",
            "weight"
          ],
          "unicode_output": "1f3cb-1f3fb"
        },
        "1f3cb-1f3fc": {
          "name": "person lifting weights: medium-light skin tone",
          "shortname": ":person_lifting_weights_tone2:",
          "shortname_alternates": [
            ":lifter_tone2:",
            ":weight_lifter_tone2:"
          ],
          "keywords": [
            "lifter",
            "medium-light skin tone",
            "weight"
          ],
          "unicode_output": "1f3cb-1f3fc"
        },
        "1f3cb-1f3fd": {
          "name": "person lifting weights: medium skin tone",
          "shortname": ":person_lifting_weights_tone3:",
          "shortname_alternates": [
            ":lifter_tone3:",
            ":weight_lifter_tone3:"
          ],
          "keywords": [
            "lifter",
            "medium skin tone",
            "weight"
          ],
          "unicode_output": "1f3cb-1f3fd"
        },
        "1f3cb-1f3fe": {
          "name": "person lifting weights: medium-dark skin tone",
          "shortname": ":person_lifting_weights_tone4:",
          "shortname_alternates": [
            ":lifter_tone4:",
            ":weight_lifter_tone4:"
          ],
          "keywords": [
            "lifter",
            "medium-dark skin tone",
            "weight"
          ],
          "unicode_output": "1f3cb-1f3fe"
        },
        "1f3cb-1f3ff": {
          "name": "person lifting weights: dark skin tone",
          "shortname": ":person_lifting_weights_tone5:",
          "shortname_alternates": [
            ":lifter_tone5:",
            ":weight_lifter_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "lifter",
            "weight"
          ],
          "unicode_output": "1f3cb-1f3ff"
        },
        "1f3cb-2640": {
          "name": "woman lifting weights",
          "shortname": ":woman_lifting_weights:",
          "shortname_alternates": [],
          "keywords": [
            "weight lifter",
            "woman"
          ],
          "unicode_output": "1f3cb-fe0f-200d-2640-fe0f"
        },
        "1f3cb-1f3fb-2640": {
          "name": "woman lifting weights: light skin tone",
          "shortname": ":woman_lifting_weights_tone1:",
          "shortname_alternates": [
            ":woman_lifting_weights_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "weight lifter",
            "woman"
          ],
          "unicode_output": "1f3cb-1f3fb-200d-2640-fe0f"
        },
        "1f3cb-1f3fc-2640": {
          "name": "woman lifting weights: medium-light skin tone",
          "shortname": ":woman_lifting_weights_tone2:",
          "shortname_alternates": [
            ":woman_lifting_weights_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "weight lifter",
            "woman"
          ],
          "unicode_output": "1f3cb-1f3fc-200d-2640-fe0f"
        },
        "1f3cb-1f3fd-2640": {
          "name": "woman lifting weights: medium skin tone",
          "shortname": ":woman_lifting_weights_tone3:",
          "shortname_alternates": [
            ":woman_lifting_weights_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "weight lifter",
            "woman"
          ],
          "unicode_output": "1f3cb-1f3fd-200d-2640-fe0f"
        },
        "1f3cb-1f3fe-2640": {
          "name": "woman lifting weights: medium-dark skin tone",
          "shortname": ":woman_lifting_weights_tone4:",
          "shortname_alternates": [
            ":woman_lifting_weights_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "weight lifter",
            "woman"
          ],
          "unicode_output": "1f3cb-1f3fe-200d-2640-fe0f"
        },
        "1f3cb-1f3ff-2640": {
          "name": "woman lifting weights: dark skin tone",
          "shortname": ":woman_lifting_weights_tone5:",
          "shortname_alternates": [
            ":woman_lifting_weights_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "weight lifter",
            "woman"
          ],
          "unicode_output": "1f3cb-1f3ff-200d-2640-fe0f"
        },
        "1f3cb-2642": {
          "name": "man lifting weights",
          "shortname": ":man_lifting_weights:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "weight lifter"
          ],
          "unicode_output": "1f3cb-fe0f-200d-2642-fe0f"
        },
        "1f3cb-1f3fb-2642": {
          "name": "man lifting weights: light skin tone",
          "shortname": ":man_lifting_weights_tone1:",
          "shortname_alternates": [
            ":man_lifting_weights_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "man",
            "weight lifter"
          ],
          "unicode_output": "1f3cb-1f3fb-200d-2642-fe0f"
        },
        "1f3cb-1f3fc-2642": {
          "name": "man lifting weights: medium-light skin tone",
          "shortname": ":man_lifting_weights_tone2:",
          "shortname_alternates": [
            ":man_lifting_weights_medium_light_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-light skin tone",
            "weight lifter"
          ],
          "unicode_output": "1f3cb-1f3fc-200d-2642-fe0f"
        },
        "1f3cb-1f3fd-2642": {
          "name": "man lifting weights: medium skin tone",
          "shortname": ":man_lifting_weights_tone3:",
          "shortname_alternates": [
            ":man_lifting_weights_medium_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium skin tone",
            "weight lifter"
          ],
          "unicode_output": "1f3cb-1f3fd-200d-2642-fe0f"
        },
        "1f3cb-1f3fe-2642": {
          "name": "man lifting weights: medium-dark skin tone",
          "shortname": ":man_lifting_weights_tone4:",
          "shortname_alternates": [
            ":man_lifting_weights_medium_dark_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-dark skin tone",
            "weight lifter"
          ],
          "unicode_output": "1f3cb-1f3fe-200d-2642-fe0f"
        },
        "1f3cb-1f3ff-2642": {
          "name": "man lifting weights: dark skin tone",
          "shortname": ":man_lifting_weights_tone5:",
          "shortname_alternates": [
            ":man_lifting_weights_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "man",
            "weight lifter"
          ],
          "unicode_output": "1f3cb-1f3ff-200d-2642-fe0f"
        },
        "1f93c": {
          "name": "people wrestling",
          "shortname": ":people_wrestling:",
          "shortname_alternates": [
            ":wrestlers:",
            ":wrestling:"
          ],
          "keywords": [
            "wrestle",
            "wrestler"
          ],
          "unicode_output": "1f93c"
        },
        "1f93c-2640": {
          "name": "women wrestling",
          "shortname": ":women_wrestling:",
          "shortname_alternates": [],
          "keywords": [
            "women",
            "wrestle"
          ],
          "unicode_output": "1f93c-200d-2640-fe0f"
        },
        "1f93c-2642": {
          "name": "men wrestling",
          "shortname": ":men_wrestling:",
          "shortname_alternates": [],
          "keywords": [
            "men",
            "wrestle"
          ],
          "unicode_output": "1f93c-200d-2642-fe0f"
        },
        "1f938": {
          "name": "person cartwheeling",
          "shortname": ":person_doing_cartwheel:",
          "shortname_alternates": [
            ":cartwheel:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics"
          ],
          "unicode_output": "1f938"
        },
        "1f938-1f3fb": {
          "name": "person cartwheeling: light skin tone",
          "shortname": ":person_doing_cartwheel_tone1:",
          "shortname_alternates": [
            ":cartwheel_tone1:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "light skin tone"
          ],
          "unicode_output": "1f938-1f3fb"
        },
        "1f938-1f3fc": {
          "name": "person cartwheeling: medium-light skin tone",
          "shortname": ":person_doing_cartwheel_tone2:",
          "shortname_alternates": [
            ":cartwheel_tone2:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "medium-light skin tone"
          ],
          "unicode_output": "1f938-1f3fc"
        },
        "1f938-1f3fd": {
          "name": "person cartwheeling: medium skin tone",
          "shortname": ":person_doing_cartwheel_tone3:",
          "shortname_alternates": [
            ":cartwheel_tone3:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "medium skin tone"
          ],
          "unicode_output": "1f938-1f3fd"
        },
        "1f938-1f3fe": {
          "name": "person cartwheeling: medium-dark skin tone",
          "shortname": ":person_doing_cartwheel_tone4:",
          "shortname_alternates": [
            ":cartwheel_tone4:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f938-1f3fe"
        },
        "1f938-1f3ff": {
          "name": "person cartwheeling: dark skin tone",
          "shortname": ":person_doing_cartwheel_tone5:",
          "shortname_alternates": [
            ":cartwheel_tone5:"
          ],
          "keywords": [
            "cartwheel",
            "dark skin tone",
            "gymnastics"
          ],
          "unicode_output": "1f938-1f3ff"
        },
        "1f938-2640": {
          "name": "woman cartwheeling",
          "shortname": ":woman_cartwheeling:",
          "shortname_alternates": [],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "woman"
          ],
          "unicode_output": "1f938-200d-2640-fe0f"
        },
        "1f938-1f3fb-2640": {
          "name": "woman cartwheeling: light skin tone",
          "shortname": ":woman_cartwheeling_tone1:",
          "shortname_alternates": [
            ":woman_cartwheeling_light_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f938-1f3fb-200d-2640-fe0f"
        },
        "1f938-1f3fc-2640": {
          "name": "woman cartwheeling: medium-light skin tone",
          "shortname": ":woman_cartwheeling_tone2:",
          "shortname_alternates": [
            ":woman_cartwheeling_medium_light_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f938-1f3fc-200d-2640-fe0f"
        },
        "1f938-1f3fd-2640": {
          "name": "woman cartwheeling: medium skin tone",
          "shortname": ":woman_cartwheeling_tone3:",
          "shortname_alternates": [
            ":woman_cartwheeling_medium_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f938-1f3fd-200d-2640-fe0f"
        },
        "1f938-1f3fe-2640": {
          "name": "woman cartwheeling: medium-dark skin tone",
          "shortname": ":woman_cartwheeling_tone4:",
          "shortname_alternates": [
            ":woman_cartwheeling_medium_dark_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f938-1f3fe-200d-2640-fe0f"
        },
        "1f938-1f3ff-2640": {
          "name": "woman cartwheeling: dark skin tone",
          "shortname": ":woman_cartwheeling_tone5:",
          "shortname_alternates": [
            ":woman_cartwheeling_dark_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "dark skin tone",
            "gymnastics",
            "woman"
          ],
          "unicode_output": "1f938-1f3ff-200d-2640-fe0f"
        },
        "1f938-2642": {
          "name": "man cartwheeling",
          "shortname": ":man_cartwheeling:",
          "shortname_alternates": [],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "man"
          ],
          "unicode_output": "1f938-200d-2642-fe0f"
        },
        "1f938-1f3fb-2642": {
          "name": "man cartwheeling: light skin tone",
          "shortname": ":man_cartwheeling_tone1:",
          "shortname_alternates": [
            ":man_cartwheeling_light_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f938-1f3fb-200d-2642-fe0f"
        },
        "1f938-1f3fc-2642": {
          "name": "man cartwheeling: medium-light skin tone",
          "shortname": ":man_cartwheeling_tone2:",
          "shortname_alternates": [
            ":man_cartwheeling_medium_light_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f938-1f3fc-200d-2642-fe0f"
        },
        "1f938-1f3fd-2642": {
          "name": "man cartwheeling: medium skin tone",
          "shortname": ":man_cartwheeling_tone3:",
          "shortname_alternates": [
            ":man_cartwheeling_medium_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f938-1f3fd-200d-2642-fe0f"
        },
        "1f938-1f3fe-2642": {
          "name": "man cartwheeling: medium-dark skin tone",
          "shortname": ":man_cartwheeling_tone4:",
          "shortname_alternates": [
            ":man_cartwheeling_medium_dark_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "gymnastics",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f938-1f3fe-200d-2642-fe0f"
        },
        "1f938-1f3ff-2642": {
          "name": "man cartwheeling: dark skin tone",
          "shortname": ":man_cartwheeling_tone5:",
          "shortname_alternates": [
            ":man_cartwheeling_dark_skin_tone:"
          ],
          "keywords": [
            "cartwheel",
            "dark skin tone",
            "gymnastics",
            "man"
          ],
          "unicode_output": "1f938-1f3ff-200d-2642-fe0f"
        },
        "26f9": {
          "name": "person bouncing ball",
          "shortname": ":person_bouncing_ball:",
          "shortname_alternates": [
            ":basketball_player:",
            ":person_with_ball:"
          ],
          "keywords": [
            "ball"
          ],
          "unicode_output": "26f9"
        },
        "26f9-1f3fb": {
          "name": "person bouncing ball: light skin tone",
          "shortname": ":person_bouncing_ball_tone1:",
          "shortname_alternates": [
            ":basketball_player_tone1:",
            ":person_with_ball_tone1:"
          ],
          "keywords": [
            "ball",
            "light skin tone"
          ],
          "unicode_output": "26f9-1f3fb"
        },
        "26f9-1f3fc": {
          "name": "person bouncing ball: medium-light skin tone",
          "shortname": ":person_bouncing_ball_tone2:",
          "shortname_alternates": [
            ":basketball_player_tone2:",
            ":person_with_ball_tone2:"
          ],
          "keywords": [
            "ball",
            "medium-light skin tone"
          ],
          "unicode_output": "26f9-1f3fc"
        },
        "26f9-1f3fd": {
          "name": "person bouncing ball: medium skin tone",
          "shortname": ":person_bouncing_ball_tone3:",
          "shortname_alternates": [
            ":basketball_player_tone3:",
            ":person_with_ball_tone3:"
          ],
          "keywords": [
            "ball",
            "medium skin tone"
          ],
          "unicode_output": "26f9-1f3fd"
        },
        "26f9-1f3fe": {
          "name": "person bouncing ball: medium-dark skin tone",
          "shortname": ":person_bouncing_ball_tone4:",
          "shortname_alternates": [
            ":basketball_player_tone4:",
            ":person_with_ball_tone4:"
          ],
          "keywords": [
            "ball",
            "medium-dark skin tone"
          ],
          "unicode_output": "26f9-1f3fe"
        },
        "26f9-1f3ff": {
          "name": "person bouncing ball: dark skin tone",
          "shortname": ":person_bouncing_ball_tone5:",
          "shortname_alternates": [
            ":basketball_player_tone5:",
            ":person_with_ball_tone5:"
          ],
          "keywords": [
            "ball",
            "dark skin tone"
          ],
          "unicode_output": "26f9-1f3ff"
        },
        "26f9-2640": {
          "name": "woman bouncing ball",
          "shortname": ":woman_bouncing_ball:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "woman"
          ],
          "unicode_output": "26f9-fe0f-200d-2640-fe0f"
        },
        "26f9-1f3fb-2640": {
          "name": "woman bouncing ball: light skin tone",
          "shortname": ":woman_bouncing_ball_tone1:",
          "shortname_alternates": [
            ":woman_bouncing_ball_light_skin_tone:"
          ],
          "keywords": [
            "ball",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "26f9-1f3fb-200d-2640-fe0f"
        },
        "26f9-1f3fc-2640": {
          "name": "woman bouncing ball: medium-light skin tone",
          "shortname": ":woman_bouncing_ball_tone2:",
          "shortname_alternates": [
            ":woman_bouncing_ball_medium_light_skin_tone:"
          ],
          "keywords": [
            "ball",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "26f9-1f3fc-200d-2640-fe0f"
        },
        "26f9-1f3fd-2640": {
          "name": "woman bouncing ball: medium skin tone",
          "shortname": ":woman_bouncing_ball_tone3:",
          "shortname_alternates": [
            ":woman_bouncing_ball_medium_skin_tone:"
          ],
          "keywords": [
            "ball",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "26f9-1f3fd-200d-2640-fe0f"
        },
        "26f9-1f3fe-2640": {
          "name": "woman bouncing ball: medium-dark skin tone",
          "shortname": ":woman_bouncing_ball_tone4:",
          "shortname_alternates": [
            ":woman_bouncing_ball_medium_dark_skin_tone:"
          ],
          "keywords": [
            "ball",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "26f9-1f3fe-200d-2640-fe0f"
        },
        "26f9-1f3ff-2640": {
          "name": "woman bouncing ball: dark skin tone",
          "shortname": ":woman_bouncing_ball_tone5:",
          "shortname_alternates": [
            ":woman_bouncing_ball_dark_skin_tone:"
          ],
          "keywords": [
            "ball",
            "dark skin tone",
            "woman"
          ],
          "unicode_output": "26f9-1f3ff-200d-2640-fe0f"
        },
        "26f9-2642": {
          "name": "man bouncing ball",
          "shortname": ":man_bouncing_ball:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "man"
          ],
          "unicode_output": "26f9-fe0f-200d-2642-fe0f"
        },
        "26f9-1f3fb-2642": {
          "name": "man bouncing ball: light skin tone",
          "shortname": ":man_bouncing_ball_tone1:",
          "shortname_alternates": [
            ":man_bouncing_ball_light_skin_tone:"
          ],
          "keywords": [
            "ball",
            "light skin tone",
            "man"
          ],
          "unicode_output": "26f9-1f3fb-200d-2642-fe0f"
        },
        "26f9-1f3fc-2642": {
          "name": "man bouncing ball: medium-light skin tone",
          "shortname": ":man_bouncing_ball_tone2:",
          "shortname_alternates": [
            ":man_bouncing_ball_medium_light_skin_tone:"
          ],
          "keywords": [
            "ball",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "26f9-1f3fc-200d-2642-fe0f"
        },
        "26f9-1f3fd-2642": {
          "name": "man bouncing ball: medium skin tone",
          "shortname": ":man_bouncing_ball_tone3:",
          "shortname_alternates": [
            ":man_bouncing_ball_medium_skin_tone:"
          ],
          "keywords": [
            "ball",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "26f9-1f3fd-200d-2642-fe0f"
        },
        "26f9-1f3fe-2642": {
          "name": "man bouncing ball: medium-dark skin tone",
          "shortname": ":man_bouncing_ball_tone4:",
          "shortname_alternates": [
            ":man_bouncing_ball_medium_dark_skin_tone:"
          ],
          "keywords": [
            "ball",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "26f9-1f3fe-200d-2642-fe0f"
        },
        "26f9-1f3ff-2642": {
          "name": "man bouncing ball: dark skin tone",
          "shortname": ":man_bouncing_ball_tone5:",
          "shortname_alternates": [
            ":man_bouncing_ball_dark_skin_tone:"
          ],
          "keywords": [
            "ball",
            "dark skin tone",
            "man"
          ],
          "unicode_output": "26f9-1f3ff-200d-2642-fe0f"
        },
        "1f93a": {
          "name": "person fencing",
          "shortname": ":person_fencing:",
          "shortname_alternates": [
            ":fencer:",
            ":fencing:"
          ],
          "keywords": [
            "fencer",
            "fencing",
            "sword"
          ],
          "unicode_output": "1f93a"
        },
        "1f93e": {
          "name": "person playing handball",
          "shortname": ":person_playing_handball:",
          "shortname_alternates": [
            ":handball:"
          ],
          "keywords": [
            "ball",
            "handball"
          ],
          "unicode_output": "1f93e"
        },
        "1f93e-1f3fb": {
          "name": "person playing handball: light skin tone",
          "shortname": ":person_playing_handball_tone1:",
          "shortname_alternates": [
            ":handball_tone1:"
          ],
          "keywords": [
            "ball",
            "handball",
            "light skin tone"
          ],
          "unicode_output": "1f93e-1f3fb"
        },
        "1f93e-1f3fc": {
          "name": "person playing handball: medium-light skin tone",
          "shortname": ":person_playing_handball_tone2:",
          "shortname_alternates": [
            ":handball_tone2:"
          ],
          "keywords": [
            "ball",
            "handball",
            "medium-light skin tone"
          ],
          "unicode_output": "1f93e-1f3fc"
        },
        "1f93e-1f3fd": {
          "name": "person playing handball: medium skin tone",
          "shortname": ":person_playing_handball_tone3:",
          "shortname_alternates": [
            ":handball_tone3:"
          ],
          "keywords": [
            "ball",
            "handball",
            "medium skin tone"
          ],
          "unicode_output": "1f93e-1f3fd"
        },
        "1f93e-1f3fe": {
          "name": "person playing handball: medium-dark skin tone",
          "shortname": ":person_playing_handball_tone4:",
          "shortname_alternates": [
            ":handball_tone4:"
          ],
          "keywords": [
            "ball",
            "handball",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f93e-1f3fe"
        },
        "1f93e-1f3ff": {
          "name": "person playing handball: dark skin tone",
          "shortname": ":person_playing_handball_tone5:",
          "shortname_alternates": [
            ":handball_tone5:"
          ],
          "keywords": [
            "ball",
            "dark skin tone",
            "handball"
          ],
          "unicode_output": "1f93e-1f3ff"
        },
        "1f93e-2640": {
          "name": "woman playing handball",
          "shortname": ":woman_playing_handball:",
          "shortname_alternates": [],
          "keywords": [
            "handball",
            "woman"
          ],
          "unicode_output": "1f93e-200d-2640-fe0f"
        },
        "1f93e-1f3fb-2640": {
          "name": "woman playing handball: light skin tone",
          "shortname": ":woman_playing_handball_tone1:",
          "shortname_alternates": [
            ":woman_playing_handball_light_skin_tone:"
          ],
          "keywords": [
            "handball",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f93e-1f3fb-200d-2640-fe0f"
        },
        "1f93e-1f3fc-2640": {
          "name": "woman playing handball: medium-light skin tone",
          "shortname": ":woman_playing_handball_tone2:",
          "shortname_alternates": [
            ":woman_playing_handball_medium_light_skin_tone:"
          ],
          "keywords": [
            "handball",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f93e-1f3fc-200d-2640-fe0f"
        },
        "1f93e-1f3fd-2640": {
          "name": "woman playing handball: medium skin tone",
          "shortname": ":woman_playing_handball_tone3:",
          "shortname_alternates": [
            ":woman_playing_handball_medium_skin_tone:"
          ],
          "keywords": [
            "handball",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f93e-1f3fd-200d-2640-fe0f"
        },
        "1f93e-1f3fe-2640": {
          "name": "woman playing handball: medium-dark skin tone",
          "shortname": ":woman_playing_handball_tone4:",
          "shortname_alternates": [
            ":woman_playing_handball_medium_dark_skin_tone:"
          ],
          "keywords": [
            "handball",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f93e-1f3fe-200d-2640-fe0f"
        },
        "1f93e-1f3ff-2640": {
          "name": "woman playing handball: dark skin tone",
          "shortname": ":woman_playing_handball_tone5:",
          "shortname_alternates": [
            ":woman_playing_handball_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "handball",
            "woman"
          ],
          "unicode_output": "1f93e-1f3ff-200d-2640-fe0f"
        },
        "1f93e-2642": {
          "name": "man playing handball",
          "shortname": ":man_playing_handball:",
          "shortname_alternates": [],
          "keywords": [
            "handball",
            "man"
          ],
          "unicode_output": "1f93e-200d-2642-fe0f"
        },
        "1f93e-1f3fb-2642": {
          "name": "man playing handball: light skin tone",
          "shortname": ":man_playing_handball_tone1:",
          "shortname_alternates": [
            ":man_playing_handball_light_skin_tone:"
          ],
          "keywords": [
            "handball",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f93e-1f3fb-200d-2642-fe0f"
        },
        "1f93e-1f3fc-2642": {
          "name": "man playing handball: medium-light skin tone",
          "shortname": ":man_playing_handball_tone2:",
          "shortname_alternates": [
            ":man_playing_handball_medium_light_skin_tone:"
          ],
          "keywords": [
            "handball",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f93e-1f3fc-200d-2642-fe0f"
        },
        "1f93e-1f3fd-2642": {
          "name": "man playing handball: medium skin tone",
          "shortname": ":man_playing_handball_tone3:",
          "shortname_alternates": [
            ":man_playing_handball_medium_skin_tone:"
          ],
          "keywords": [
            "handball",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f93e-1f3fd-200d-2642-fe0f"
        },
        "1f93e-1f3fe-2642": {
          "name": "man playing handball: medium-dark skin tone",
          "shortname": ":man_playing_handball_tone4:",
          "shortname_alternates": [
            ":man_playing_handball_medium_dark_skin_tone:"
          ],
          "keywords": [
            "handball",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f93e-1f3fe-200d-2642-fe0f"
        },
        "1f93e-1f3ff-2642": {
          "name": "man playing handball: dark skin tone",
          "shortname": ":man_playing_handball_tone5:",
          "shortname_alternates": [
            ":man_playing_handball_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "handball",
            "man"
          ],
          "unicode_output": "1f93e-1f3ff-200d-2642-fe0f"
        },
        "1f3cc": {
          "name": "person golfing",
          "shortname": ":person_golfing:",
          "shortname_alternates": [
            ":golfer:"
          ],
          "keywords": [
            "ball",
            "golf"
          ],
          "unicode_output": "1f3cc"
        },
        "1f3cc-1f3fb": {
          "name": "person golfing: light skin tone",
          "shortname": ":person_golfing_tone1:",
          "shortname_alternates": [
            ":person_golfing_light_skin_tone:"
          ],
          "keywords": [
            "ball",
            "golf",
            "light skin tone"
          ],
          "unicode_output": "1f3cc-1f3fb"
        },
        "1f3cc-1f3fc": {
          "name": "person golfing: medium-light skin tone",
          "shortname": ":person_golfing_tone2:",
          "shortname_alternates": [
            ":person_golfing_medium_light_skin_tone:"
          ],
          "keywords": [
            "ball",
            "golf",
            "medium-light skin tone"
          ],
          "unicode_output": "1f3cc-1f3fc"
        },
        "1f3cc-1f3fd": {
          "name": "person golfing: medium skin tone",
          "shortname": ":person_golfing_tone3:",
          "shortname_alternates": [
            ":person_golfing_medium_skin_tone:"
          ],
          "keywords": [
            "ball",
            "golf",
            "medium skin tone"
          ],
          "unicode_output": "1f3cc-1f3fd"
        },
        "1f3cc-1f3fe": {
          "name": "person golfing: medium-dark skin tone",
          "shortname": ":person_golfing_tone4:",
          "shortname_alternates": [
            ":person_golfing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "ball",
            "golf",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f3cc-1f3fe"
        },
        "1f3cc-1f3ff": {
          "name": "person golfing: dark skin tone",
          "shortname": ":person_golfing_tone5:",
          "shortname_alternates": [
            ":person_golfing_dark_skin_tone:"
          ],
          "keywords": [
            "ball",
            "dark skin tone",
            "golf"
          ],
          "unicode_output": "1f3cc-1f3ff"
        },
        "1f3cc-2640": {
          "name": "woman golfing",
          "shortname": ":woman_golfing:",
          "shortname_alternates": [],
          "keywords": [
            "golf",
            "woman"
          ],
          "unicode_output": "1f3cc-fe0f-200d-2640-fe0f"
        },
        "1f3cc-1f3fb-2640": {
          "name": "woman golfing: light skin tone",
          "shortname": ":woman_golfing_tone1:",
          "shortname_alternates": [
            ":woman_golfing_light_skin_tone:"
          ],
          "keywords": [
            "golf",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f3cc-1f3fb-200d-2640-fe0f"
        },
        "1f3cc-1f3fc-2640": {
          "name": "woman golfing: medium-light skin tone",
          "shortname": ":woman_golfing_tone2:",
          "shortname_alternates": [
            ":woman_golfing_medium_light_skin_tone:"
          ],
          "keywords": [
            "golf",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f3cc-1f3fc-200d-2640-fe0f"
        },
        "1f3cc-1f3fd-2640": {
          "name": "woman golfing: medium skin tone",
          "shortname": ":woman_golfing_tone3:",
          "shortname_alternates": [
            ":woman_golfing_medium_skin_tone:"
          ],
          "keywords": [
            "golf",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f3cc-1f3fd-200d-2640-fe0f"
        },
        "1f3cc-1f3fe-2640": {
          "name": "woman golfing: medium-dark skin tone",
          "shortname": ":woman_golfing_tone4:",
          "shortname_alternates": [
            ":woman_golfing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "golf",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f3cc-1f3fe-200d-2640-fe0f"
        },
        "1f3cc-1f3ff-2640": {
          "name": "woman golfing: dark skin tone",
          "shortname": ":woman_golfing_tone5:",
          "shortname_alternates": [
            ":woman_golfing_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "golf",
            "woman"
          ],
          "unicode_output": "1f3cc-1f3ff-200d-2640-fe0f"
        },
        "1f3cc-2642": {
          "name": "man golfing",
          "shortname": ":man_golfing:",
          "shortname_alternates": [],
          "keywords": [
            "golf",
            "man"
          ],
          "unicode_output": "1f3cc-fe0f-200d-2642-fe0f"
        },
        "1f3cc-1f3fb-2642": {
          "name": "man golfing: light skin tone",
          "shortname": ":man_golfing_tone1:",
          "shortname_alternates": [
            ":man_golfing_light_skin_tone:"
          ],
          "keywords": [
            "golf",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f3cc-1f3fb-200d-2642-fe0f"
        },
        "1f3cc-1f3fc-2642": {
          "name": "man golfing: medium-light skin tone",
          "shortname": ":man_golfing_tone2:",
          "shortname_alternates": [
            ":man_golfing_medium_light_skin_tone:"
          ],
          "keywords": [
            "golf",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f3cc-1f3fc-200d-2642-fe0f"
        },
        "1f3cc-1f3fd-2642": {
          "name": "man golfing: medium skin tone",
          "shortname": ":man_golfing_tone3:",
          "shortname_alternates": [
            ":man_golfing_medium_skin_tone:"
          ],
          "keywords": [
            "golf",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f3cc-1f3fd-200d-2642-fe0f"
        },
        "1f3cc-1f3fe-2642": {
          "name": "man golfing: medium-dark skin tone",
          "shortname": ":man_golfing_tone4:",
          "shortname_alternates": [
            ":man_golfing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "golf",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f3cc-1f3fe-200d-2642-fe0f"
        },
        "1f3cc-1f3ff-2642": {
          "name": "man golfing: dark skin tone",
          "shortname": ":man_golfing_tone5:",
          "shortname_alternates": [
            ":man_golfing_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "golf",
            "man"
          ],
          "unicode_output": "1f3cc-1f3ff-200d-2642-fe0f"
        },
        "1f3c7": {
          "name": "horse racing",
          "shortname": ":horse_racing:",
          "shortname_alternates": [],
          "keywords": [
            "horse",
            "jockey",
            "racehorse",
            "racing"
          ],
          "unicode_output": "1f3c7"
        },
        "1f3c7-1f3fb": {
          "name": "horse racing: light skin tone",
          "shortname": ":horse_racing_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "horse",
            "jockey",
            "light skin tone",
            "racehorse",
            "racing"
          ],
          "unicode_output": "1f3c7-1f3fb"
        },
        "1f3c7-1f3fc": {
          "name": "horse racing: medium-light skin tone",
          "shortname": ":horse_racing_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "horse",
            "jockey",
            "medium-light skin tone",
            "racehorse",
            "racing"
          ],
          "unicode_output": "1f3c7-1f3fc"
        },
        "1f3c7-1f3fd": {
          "name": "horse racing: medium skin tone",
          "shortname": ":horse_racing_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "horse",
            "jockey",
            "medium skin tone",
            "racehorse",
            "racing"
          ],
          "unicode_output": "1f3c7-1f3fd"
        },
        "1f3c7-1f3fe": {
          "name": "horse racing: medium-dark skin tone",
          "shortname": ":horse_racing_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "horse",
            "jockey",
            "medium-dark skin tone",
            "racehorse",
            "racing"
          ],
          "unicode_output": "1f3c7-1f3fe"
        },
        "1f3c7-1f3ff": {
          "name": "horse racing: dark skin tone",
          "shortname": ":horse_racing_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "horse",
            "jockey",
            "racehorse",
            "racing"
          ],
          "unicode_output": "1f3c7-1f3ff"
        },
        "1f9d8": {
          "name": "person in lotus position",
          "shortname": ":person_in_lotus_position:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9d8"
        },
        "1f9d8-1f3fb": {
          "name": "person in lotus position: light skin tone",
          "shortname": ":person_in_lotus_position_tone1:",
          "shortname_alternates": [
            ":person_in_lotus_position_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "meditation",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fb"
        },
        "1f9d8-1f3fc": {
          "name": "person in lotus position: medium-light skin tone",
          "shortname": ":person_in_lotus_position_tone2:",
          "shortname_alternates": [
            ":person_in_lotus_position_medium_light_skin_tone:"
          ],
          "keywords": [
            "meditation",
            "medium-light skin tone",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fc"
        },
        "1f9d8-1f3fd": {
          "name": "person in lotus position: medium skin tone",
          "shortname": ":person_in_lotus_position_tone3:",
          "shortname_alternates": [
            ":person_in_lotus_position_medium_skin_tone:"
          ],
          "keywords": [
            "meditation",
            "medium skin tone",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fd"
        },
        "1f9d8-1f3fe": {
          "name": "person in lotus position: medium-dark skin tone",
          "shortname": ":person_in_lotus_position_tone4:",
          "shortname_alternates": [
            ":person_in_lotus_position_medium_dark_skin_tone:"
          ],
          "keywords": [
            "meditation",
            "medium-dark skin tone",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fe"
        },
        "1f9d8-1f3ff": {
          "name": "person in lotus position: dark skin tone",
          "shortname": ":person_in_lotus_position_tone5:",
          "shortname_alternates": [
            ":person_in_lotus_position_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "meditation",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3ff"
        },
        "1f9d8-2640": {
          "name": "woman in lotus position",
          "shortname": ":woman_in_lotus_position:",
          "shortname_alternates": [],
          "keywords": [
            "meditation",
            "yoga"
          ],
          "unicode_output": "1f9d8-200d-2640-fe0f"
        },
        "1f9d8-1f3fb-2640": {
          "name": "woman in lotus position: light skin tone",
          "shortname": ":woman_in_lotus_position_tone1:",
          "shortname_alternates": [
            ":woman_in_lotus_position_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "meditation",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fb-200d-2640-fe0f"
        },
        "1f9d8-1f3fc-2640": {
          "name": "woman in lotus position: medium-light skin tone",
          "shortname": ":woman_in_lotus_position_tone2:",
          "shortname_alternates": [
            ":woman_in_lotus_position_medium_light_skin_tone:"
          ],
          "keywords": [
            "meditation",
            "medium-light skin tone",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fc-200d-2640-fe0f"
        },
        "1f9d8-1f3fd-2640": {
          "name": "woman in lotus position: medium skin tone",
          "shortname": ":woman_in_lotus_position_tone3:",
          "shortname_alternates": [
            ":woman_in_lotus_position_medium_skin_tone:"
          ],
          "keywords": [
            "meditation",
            "medium skin tone",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fd-200d-2640-fe0f"
        },
        "1f9d8-1f3fe-2640": {
          "name": "woman in lotus position: medium-dark skin tone",
          "shortname": ":woman_in_lotus_position_tone4:",
          "shortname_alternates": [
            ":woman_in_lotus_position_medium_dark_skin_tone:"
          ],
          "keywords": [
            "meditation",
            "medium-dark skin tone",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fe-200d-2640-fe0f"
        },
        "1f9d8-1f3ff-2640": {
          "name": "woman in lotus position: dark skin tone",
          "shortname": ":woman_in_lotus_position_tone5:",
          "shortname_alternates": [
            ":woman_in_lotus_position_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "meditation",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3ff-200d-2640-fe0f"
        },
        "1f9d8-2642": {
          "name": "man in lotus position",
          "shortname": ":man_in_lotus_position:",
          "shortname_alternates": [],
          "keywords": [
            "meditation",
            "yoga"
          ],
          "unicode_output": "1f9d8-200d-2642-fe0f"
        },
        "1f9d8-1f3fb-2642": {
          "name": "man in lotus position: light skin tone",
          "shortname": ":man_in_lotus_position_tone1:",
          "shortname_alternates": [
            ":man_in_lotus_position_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "meditation",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fb-200d-2642-fe0f"
        },
        "1f9d8-1f3fc-2642": {
          "name": "man in lotus position: medium-light skin tone",
          "shortname": ":man_in_lotus_position_tone2:",
          "shortname_alternates": [
            ":man_in_lotus_position_medium_light_skin_tone:"
          ],
          "keywords": [
            "meditation",
            "medium-light skin tone",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fc-200d-2642-fe0f"
        },
        "1f9d8-1f3fd-2642": {
          "name": "man in lotus position: medium skin tone",
          "shortname": ":man_in_lotus_position_tone3:",
          "shortname_alternates": [
            ":man_in_lotus_position_medium_skin_tone:"
          ],
          "keywords": [
            "meditation",
            "medium skin tone",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fd-200d-2642-fe0f"
        },
        "1f9d8-1f3fe-2642": {
          "name": "man in lotus position: medium-dark skin tone",
          "shortname": ":man_in_lotus_position_tone4:",
          "shortname_alternates": [
            ":man_in_lotus_position_medium_dark_skin_tone:"
          ],
          "keywords": [
            "meditation",
            "medium-dark skin tone",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3fe-200d-2642-fe0f"
        },
        "1f9d8-1f3ff-2642": {
          "name": "man in lotus position: dark skin tone",
          "shortname": ":man_in_lotus_position_tone5:",
          "shortname_alternates": [
            ":man_in_lotus_position_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "meditation",
            "yoga"
          ],
          "unicode_output": "1f9d8-1f3ff-200d-2642-fe0f"
        },
        "1f3c4": {
          "name": "person surfing",
          "shortname": ":person_surfing:",
          "shortname_alternates": [
            ":surfer:"
          ],
          "keywords": [
            "surfing"
          ],
          "unicode_output": "1f3c4"
        },
        "1f3c4-1f3fb": {
          "name": "person surfing: light skin tone",
          "shortname": ":person_surfing_tone1:",
          "shortname_alternates": [
            ":surfer_tone1:"
          ],
          "keywords": [
            "light skin tone",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3fb"
        },
        "1f3c4-1f3fc": {
          "name": "person surfing: medium-light skin tone",
          "shortname": ":person_surfing_tone2:",
          "shortname_alternates": [
            ":surfer_tone2:"
          ],
          "keywords": [
            "medium-light skin tone",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3fc"
        },
        "1f3c4-1f3fd": {
          "name": "person surfing: medium skin tone",
          "shortname": ":person_surfing_tone3:",
          "shortname_alternates": [
            ":surfer_tone3:"
          ],
          "keywords": [
            "medium skin tone",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3fd"
        },
        "1f3c4-1f3fe": {
          "name": "person surfing: medium-dark skin tone",
          "shortname": ":person_surfing_tone4:",
          "shortname_alternates": [
            ":surfer_tone4:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3fe"
        },
        "1f3c4-1f3ff": {
          "name": "person surfing: dark skin tone",
          "shortname": ":person_surfing_tone5:",
          "shortname_alternates": [
            ":surfer_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3ff"
        },
        "1f3c4-2640": {
          "name": "woman surfing",
          "shortname": ":woman_surfing:",
          "shortname_alternates": [],
          "keywords": [
            "surfing",
            "woman"
          ],
          "unicode_output": "1f3c4-200d-2640-fe0f"
        },
        "1f3c4-1f3fb-2640": {
          "name": "woman surfing: light skin tone",
          "shortname": ":woman_surfing_tone1:",
          "shortname_alternates": [
            ":woman_surfing_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "surfing",
            "woman"
          ],
          "unicode_output": "1f3c4-1f3fb-200d-2640-fe0f"
        },
        "1f3c4-1f3fc-2640": {
          "name": "woman surfing: medium-light skin tone",
          "shortname": ":woman_surfing_tone2:",
          "shortname_alternates": [
            ":woman_surfing_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "surfing",
            "woman"
          ],
          "unicode_output": "1f3c4-1f3fc-200d-2640-fe0f"
        },
        "1f3c4-1f3fd-2640": {
          "name": "woman surfing: medium skin tone",
          "shortname": ":woman_surfing_tone3:",
          "shortname_alternates": [
            ":woman_surfing_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "surfing",
            "woman"
          ],
          "unicode_output": "1f3c4-1f3fd-200d-2640-fe0f"
        },
        "1f3c4-1f3fe-2640": {
          "name": "woman surfing: medium-dark skin tone",
          "shortname": ":woman_surfing_tone4:",
          "shortname_alternates": [
            ":woman_surfing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "surfing",
            "woman"
          ],
          "unicode_output": "1f3c4-1f3fe-200d-2640-fe0f"
        },
        "1f3c4-1f3ff-2640": {
          "name": "woman surfing: dark skin tone",
          "shortname": ":woman_surfing_tone5:",
          "shortname_alternates": [
            ":woman_surfing_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "surfing",
            "woman"
          ],
          "unicode_output": "1f3c4-1f3ff-200d-2640-fe0f"
        },
        "1f3c4-2642": {
          "name": "man surfing",
          "shortname": ":man_surfing:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "surfing"
          ],
          "unicode_output": "1f3c4-200d-2642-fe0f"
        },
        "1f3c4-1f3fb-2642": {
          "name": "man surfing: light skin tone",
          "shortname": ":man_surfing_tone1:",
          "shortname_alternates": [
            ":man_surfing_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "man",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3fb-200d-2642-fe0f"
        },
        "1f3c4-1f3fc-2642": {
          "name": "man surfing: medium-light skin tone",
          "shortname": ":man_surfing_tone2:",
          "shortname_alternates": [
            ":man_surfing_medium_light_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-light skin tone",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3fc-200d-2642-fe0f"
        },
        "1f3c4-1f3fd-2642": {
          "name": "man surfing: medium skin tone",
          "shortname": ":man_surfing_tone3:",
          "shortname_alternates": [
            ":man_surfing_medium_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium skin tone",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3fd-200d-2642-fe0f"
        },
        "1f3c4-1f3fe-2642": {
          "name": "man surfing: medium-dark skin tone",
          "shortname": ":man_surfing_tone4:",
          "shortname_alternates": [
            ":man_surfing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-dark skin tone",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3fe-200d-2642-fe0f"
        },
        "1f3c4-1f3ff-2642": {
          "name": "man surfing: dark skin tone",
          "shortname": ":man_surfing_tone5:",
          "shortname_alternates": [
            ":man_surfing_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "man",
            "surfing"
          ],
          "unicode_output": "1f3c4-1f3ff-200d-2642-fe0f"
        },
        "1f3ca": {
          "name": "person swimming",
          "shortname": ":person_swimming:",
          "shortname_alternates": [
            ":swimmer:"
          ],
          "keywords": [
            "swim"
          ],
          "unicode_output": "1f3ca"
        },
        "1f3ca-1f3fb": {
          "name": "person swimming: light skin tone",
          "shortname": ":person_swimming_tone1:",
          "shortname_alternates": [
            ":swimmer_tone1:"
          ],
          "keywords": [
            "light skin tone",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3fb"
        },
        "1f3ca-1f3fc": {
          "name": "person swimming: medium-light skin tone",
          "shortname": ":person_swimming_tone2:",
          "shortname_alternates": [
            ":swimmer_tone2:"
          ],
          "keywords": [
            "medium-light skin tone",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3fc"
        },
        "1f3ca-1f3fd": {
          "name": "person swimming: medium skin tone",
          "shortname": ":person_swimming_tone3:",
          "shortname_alternates": [
            ":swimmer_tone3:"
          ],
          "keywords": [
            "medium skin tone",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3fd"
        },
        "1f3ca-1f3fe": {
          "name": "person swimming: medium-dark skin tone",
          "shortname": ":person_swimming_tone4:",
          "shortname_alternates": [
            ":swimmer_tone4:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3fe"
        },
        "1f3ca-1f3ff": {
          "name": "person swimming: dark skin tone",
          "shortname": ":person_swimming_tone5:",
          "shortname_alternates": [
            ":swimmer_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3ff"
        },
        "1f3ca-2640": {
          "name": "woman swimming",
          "shortname": ":woman_swimming:",
          "shortname_alternates": [],
          "keywords": [
            "swim",
            "woman"
          ],
          "unicode_output": "1f3ca-200d-2640-fe0f"
        },
        "1f3ca-1f3fb-2640": {
          "name": "woman swimming: light skin tone",
          "shortname": ":woman_swimming_tone1:",
          "shortname_alternates": [
            ":woman_swimming_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "swim",
            "woman"
          ],
          "unicode_output": "1f3ca-1f3fb-200d-2640-fe0f"
        },
        "1f3ca-1f3fc-2640": {
          "name": "woman swimming: medium-light skin tone",
          "shortname": ":woman_swimming_tone2:",
          "shortname_alternates": [
            ":woman_swimming_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "swim",
            "woman"
          ],
          "unicode_output": "1f3ca-1f3fc-200d-2640-fe0f"
        },
        "1f3ca-1f3fd-2640": {
          "name": "woman swimming: medium skin tone",
          "shortname": ":woman_swimming_tone3:",
          "shortname_alternates": [
            ":woman_swimming_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "swim",
            "woman"
          ],
          "unicode_output": "1f3ca-1f3fd-200d-2640-fe0f"
        },
        "1f3ca-1f3fe-2640": {
          "name": "woman swimming: medium-dark skin tone",
          "shortname": ":woman_swimming_tone4:",
          "shortname_alternates": [
            ":woman_swimming_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "swim",
            "woman"
          ],
          "unicode_output": "1f3ca-1f3fe-200d-2640-fe0f"
        },
        "1f3ca-1f3ff-2640": {
          "name": "woman swimming: dark skin tone",
          "shortname": ":woman_swimming_tone5:",
          "shortname_alternates": [
            ":woman_swimming_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "swim",
            "woman"
          ],
          "unicode_output": "1f3ca-1f3ff-200d-2640-fe0f"
        },
        "1f3ca-2642": {
          "name": "man swimming",
          "shortname": ":man_swimming:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "swim"
          ],
          "unicode_output": "1f3ca-200d-2642-fe0f"
        },
        "1f3ca-1f3fb-2642": {
          "name": "man swimming: light skin tone",
          "shortname": ":man_swimming_tone1:",
          "shortname_alternates": [
            ":man_swimming_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "man",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3fb-200d-2642-fe0f"
        },
        "1f3ca-1f3fc-2642": {
          "name": "man swimming: medium-light skin tone",
          "shortname": ":man_swimming_tone2:",
          "shortname_alternates": [
            ":man_swimming_medium_light_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-light skin tone",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3fc-200d-2642-fe0f"
        },
        "1f3ca-1f3fd-2642": {
          "name": "man swimming: medium skin tone",
          "shortname": ":man_swimming_tone3:",
          "shortname_alternates": [
            ":man_swimming_medium_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium skin tone",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3fd-200d-2642-fe0f"
        },
        "1f3ca-1f3fe-2642": {
          "name": "man swimming: medium-dark skin tone",
          "shortname": ":man_swimming_tone4:",
          "shortname_alternates": [
            ":man_swimming_medium_dark_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-dark skin tone",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3fe-200d-2642-fe0f"
        },
        "1f3ca-1f3ff-2642": {
          "name": "man swimming: dark skin tone",
          "shortname": ":man_swimming_tone5:",
          "shortname_alternates": [
            ":man_swimming_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "man",
            "swim"
          ],
          "unicode_output": "1f3ca-1f3ff-200d-2642-fe0f"
        },
        "1f93d": {
          "name": "person playing water polo",
          "shortname": ":person_playing_water_polo:",
          "shortname_alternates": [
            ":water_polo:"
          ],
          "keywords": [
            "polo",
            "water"
          ],
          "unicode_output": "1f93d"
        },
        "1f93d-1f3fb": {
          "name": "person playing water polo: light skin tone",
          "shortname": ":person_playing_water_polo_tone1:",
          "shortname_alternates": [
            ":water_polo_tone1:"
          ],
          "keywords": [
            "light skin tone",
            "polo",
            "water"
          ],
          "unicode_output": "1f93d-1f3fb"
        },
        "1f93d-1f3fc": {
          "name": "person playing water polo: medium-light skin tone",
          "shortname": ":person_playing_water_polo_tone2:",
          "shortname_alternates": [
            ":water_polo_tone2:"
          ],
          "keywords": [
            "medium-light skin tone",
            "polo",
            "water"
          ],
          "unicode_output": "1f93d-1f3fc"
        },
        "1f93d-1f3fd": {
          "name": "person playing water polo: medium skin tone",
          "shortname": ":person_playing_water_polo_tone3:",
          "shortname_alternates": [
            ":water_polo_tone3:"
          ],
          "keywords": [
            "medium skin tone",
            "polo",
            "water"
          ],
          "unicode_output": "1f93d-1f3fd"
        },
        "1f93d-1f3fe": {
          "name": "person playing water polo: medium-dark skin tone",
          "shortname": ":person_playing_water_polo_tone4:",
          "shortname_alternates": [
            ":water_polo_tone4:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "polo",
            "water"
          ],
          "unicode_output": "1f93d-1f3fe"
        },
        "1f93d-1f3ff": {
          "name": "person playing water polo: dark skin tone",
          "shortname": ":person_playing_water_polo_tone5:",
          "shortname_alternates": [
            ":water_polo_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "polo",
            "water"
          ],
          "unicode_output": "1f93d-1f3ff"
        },
        "1f93d-2640": {
          "name": "woman playing water polo",
          "shortname": ":woman_playing_water_polo:",
          "shortname_alternates": [],
          "keywords": [
            "water polo",
            "woman"
          ],
          "unicode_output": "1f93d-200d-2640-fe0f"
        },
        "1f93d-1f3fb-2640": {
          "name": "woman playing water polo: light skin tone",
          "shortname": ":woman_playing_water_polo_tone1:",
          "shortname_alternates": [
            ":woman_playing_water_polo_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "water polo",
            "woman"
          ],
          "unicode_output": "1f93d-1f3fb-200d-2640-fe0f"
        },
        "1f93d-1f3fc-2640": {
          "name": "woman playing water polo: medium-light skin tone",
          "shortname": ":woman_playing_water_polo_tone2:",
          "shortname_alternates": [
            ":woman_playing_water_polo_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "water polo",
            "woman"
          ],
          "unicode_output": "1f93d-1f3fc-200d-2640-fe0f"
        },
        "1f93d-1f3fd-2640": {
          "name": "woman playing water polo: medium skin tone",
          "shortname": ":woman_playing_water_polo_tone3:",
          "shortname_alternates": [
            ":woman_playing_water_polo_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "water polo",
            "woman"
          ],
          "unicode_output": "1f93d-1f3fd-200d-2640-fe0f"
        },
        "1f93d-1f3fe-2640": {
          "name": "woman playing water polo: medium-dark skin tone",
          "shortname": ":woman_playing_water_polo_tone4:",
          "shortname_alternates": [
            ":woman_playing_water_polo_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "water polo",
            "woman"
          ],
          "unicode_output": "1f93d-1f3fe-200d-2640-fe0f"
        },
        "1f93d-1f3ff-2640": {
          "name": "woman playing water polo: dark skin tone",
          "shortname": ":woman_playing_water_polo_tone5:",
          "shortname_alternates": [
            ":woman_playing_water_polo_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "water polo",
            "woman"
          ],
          "unicode_output": "1f93d-1f3ff-200d-2640-fe0f"
        },
        "1f93d-2642": {
          "name": "man playing water polo",
          "shortname": ":man_playing_water_polo:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "water polo"
          ],
          "unicode_output": "1f93d-200d-2642-fe0f"
        },
        "1f93d-1f3fb-2642": {
          "name": "man playing water polo: light skin tone",
          "shortname": ":man_playing_water_polo_tone1:",
          "shortname_alternates": [
            ":man_playing_water_polo_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "man",
            "water polo"
          ],
          "unicode_output": "1f93d-1f3fb-200d-2642-fe0f"
        },
        "1f93d-1f3fc-2642": {
          "name": "man playing water polo: medium-light skin tone",
          "shortname": ":man_playing_water_polo_tone2:",
          "shortname_alternates": [
            ":man_playing_water_polo_medium_light_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-light skin tone",
            "water polo"
          ],
          "unicode_output": "1f93d-1f3fc-200d-2642-fe0f"
        },
        "1f93d-1f3fd-2642": {
          "name": "man playing water polo: medium skin tone",
          "shortname": ":man_playing_water_polo_tone3:",
          "shortname_alternates": [
            ":man_playing_water_polo_medium_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium skin tone",
            "water polo"
          ],
          "unicode_output": "1f93d-1f3fd-200d-2642-fe0f"
        },
        "1f93d-1f3fe-2642": {
          "name": "man playing water polo: medium-dark skin tone",
          "shortname": ":man_playing_water_polo_tone4:",
          "shortname_alternates": [
            ":man_playing_water_polo_medium_dark_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-dark skin tone",
            "water polo"
          ],
          "unicode_output": "1f93d-1f3fe-200d-2642-fe0f"
        },
        "1f93d-1f3ff-2642": {
          "name": "man playing water polo: dark skin tone",
          "shortname": ":man_playing_water_polo_tone5:",
          "shortname_alternates": [
            ":man_playing_water_polo_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "man",
            "water polo"
          ],
          "unicode_output": "1f93d-1f3ff-200d-2642-fe0f"
        },
        "1f6a3": {
          "name": "person rowing boat",
          "shortname": ":person_rowing_boat:",
          "shortname_alternates": [
            ":rowboat:"
          ],
          "keywords": [
            "boat",
            "rowboat"
          ],
          "unicode_output": "1f6a3"
        },
        "1f6a3-1f3fb": {
          "name": "person rowing boat: light skin tone",
          "shortname": ":person_rowing_boat_tone1:",
          "shortname_alternates": [
            ":rowboat_tone1:"
          ],
          "keywords": [
            "boat",
            "light skin tone",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3fb"
        },
        "1f6a3-1f3fc": {
          "name": "person rowing boat: medium-light skin tone",
          "shortname": ":person_rowing_boat_tone2:",
          "shortname_alternates": [
            ":rowboat_tone2:"
          ],
          "keywords": [
            "boat",
            "medium-light skin tone",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3fc"
        },
        "1f6a3-1f3fd": {
          "name": "person rowing boat: medium skin tone",
          "shortname": ":person_rowing_boat_tone3:",
          "shortname_alternates": [
            ":rowboat_tone3:"
          ],
          "keywords": [
            "boat",
            "medium skin tone",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3fd"
        },
        "1f6a3-1f3fe": {
          "name": "person rowing boat: medium-dark skin tone",
          "shortname": ":person_rowing_boat_tone4:",
          "shortname_alternates": [
            ":rowboat_tone4:"
          ],
          "keywords": [
            "boat",
            "medium-dark skin tone",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3fe"
        },
        "1f6a3-1f3ff": {
          "name": "person rowing boat: dark skin tone",
          "shortname": ":person_rowing_boat_tone5:",
          "shortname_alternates": [
            ":rowboat_tone5:"
          ],
          "keywords": [
            "boat",
            "dark skin tone",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3ff"
        },
        "1f6a3-2640": {
          "name": "woman rowing boat",
          "shortname": ":woman_rowing_boat:",
          "shortname_alternates": [],
          "keywords": [
            "boat",
            "rowboat",
            "woman"
          ],
          "unicode_output": "1f6a3-200d-2640-fe0f"
        },
        "1f6a3-1f3fb-2640": {
          "name": "woman rowing boat: light skin tone",
          "shortname": ":woman_rowing_boat_tone1:",
          "shortname_alternates": [
            ":woman_rowing_boat_light_skin_tone:"
          ],
          "keywords": [
            "boat",
            "light skin tone",
            "rowboat",
            "woman"
          ],
          "unicode_output": "1f6a3-1f3fb-200d-2640-fe0f"
        },
        "1f6a3-1f3fc-2640": {
          "name": "woman rowing boat: medium-light skin tone",
          "shortname": ":woman_rowing_boat_tone2:",
          "shortname_alternates": [
            ":woman_rowing_boat_medium_light_skin_tone:"
          ],
          "keywords": [
            "boat",
            "medium-light skin tone",
            "rowboat",
            "woman"
          ],
          "unicode_output": "1f6a3-1f3fc-200d-2640-fe0f"
        },
        "1f6a3-1f3fd-2640": {
          "name": "woman rowing boat: medium skin tone",
          "shortname": ":woman_rowing_boat_tone3:",
          "shortname_alternates": [
            ":woman_rowing_boat_medium_skin_tone:"
          ],
          "keywords": [
            "boat",
            "medium skin tone",
            "rowboat",
            "woman"
          ],
          "unicode_output": "1f6a3-1f3fd-200d-2640-fe0f"
        },
        "1f6a3-1f3fe-2640": {
          "name": "woman rowing boat: medium-dark skin tone",
          "shortname": ":woman_rowing_boat_tone4:",
          "shortname_alternates": [
            ":woman_rowing_boat_medium_dark_skin_tone:"
          ],
          "keywords": [
            "boat",
            "medium-dark skin tone",
            "rowboat",
            "woman"
          ],
          "unicode_output": "1f6a3-1f3fe-200d-2640-fe0f"
        },
        "1f6a3-1f3ff-2640": {
          "name": "woman rowing boat: dark skin tone",
          "shortname": ":woman_rowing_boat_tone5:",
          "shortname_alternates": [
            ":woman_rowing_boat_dark_skin_tone:"
          ],
          "keywords": [
            "boat",
            "dark skin tone",
            "rowboat",
            "woman"
          ],
          "unicode_output": "1f6a3-1f3ff-200d-2640-fe0f"
        },
        "1f6a3-2642": {
          "name": "man rowing boat",
          "shortname": ":man_rowing_boat:",
          "shortname_alternates": [],
          "keywords": [
            "boat",
            "man",
            "rowboat"
          ],
          "unicode_output": "1f6a3-200d-2642-fe0f"
        },
        "1f6a3-1f3fb-2642": {
          "name": "man rowing boat: light skin tone",
          "shortname": ":man_rowing_boat_tone1:",
          "shortname_alternates": [
            ":man_rowing_boat_light_skin_tone:"
          ],
          "keywords": [
            "boat",
            "light skin tone",
            "man",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3fb-200d-2642-fe0f"
        },
        "1f6a3-1f3fc-2642": {
          "name": "man rowing boat: medium-light skin tone",
          "shortname": ":man_rowing_boat_tone2:",
          "shortname_alternates": [
            ":man_rowing_boat_medium_light_skin_tone:"
          ],
          "keywords": [
            "boat",
            "man",
            "medium-light skin tone",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3fc-200d-2642-fe0f"
        },
        "1f6a3-1f3fd-2642": {
          "name": "man rowing boat: medium skin tone",
          "shortname": ":man_rowing_boat_tone3:",
          "shortname_alternates": [
            ":man_rowing_boat_medium_skin_tone:"
          ],
          "keywords": [
            "boat",
            "man",
            "medium skin tone",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3fd-200d-2642-fe0f"
        },
        "1f6a3-1f3fe-2642": {
          "name": "man rowing boat: medium-dark skin tone",
          "shortname": ":man_rowing_boat_tone4:",
          "shortname_alternates": [
            ":man_rowing_boat_medium_dark_skin_tone:"
          ],
          "keywords": [
            "boat",
            "man",
            "medium-dark skin tone",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3fe-200d-2642-fe0f"
        },
        "1f6a3-1f3ff-2642": {
          "name": "man rowing boat: dark skin tone",
          "shortname": ":man_rowing_boat_tone5:",
          "shortname_alternates": [
            ":man_rowing_boat_dark_skin_tone:"
          ],
          "keywords": [
            "boat",
            "dark skin tone",
            "man",
            "rowboat"
          ],
          "unicode_output": "1f6a3-1f3ff-200d-2642-fe0f"
        },
        "1f9d7": {
          "name": "person climbing",
          "shortname": ":person_climbing:",
          "shortname_alternates": [],
          "keywords": [
            "climber"
          ],
          "unicode_output": "1f9d7"
        },
        "1f9d7-1f3fb": {
          "name": "person climbing: light skin tone",
          "shortname": ":person_climbing_tone1:",
          "shortname_alternates": [
            ":person_climbing_light_skin_tone:"
          ],
          "keywords": [
            "climber",
            "light skin tone"
          ],
          "unicode_output": "1f9d7-1f3fb"
        },
        "1f9d7-1f3fc": {
          "name": "person climbing: medium-light skin tone",
          "shortname": ":person_climbing_tone2:",
          "shortname_alternates": [
            ":person_climbing_medium_light_skin_tone:"
          ],
          "keywords": [
            "climber",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9d7-1f3fc"
        },
        "1f9d7-1f3fd": {
          "name": "person climbing: medium skin tone",
          "shortname": ":person_climbing_tone3:",
          "shortname_alternates": [
            ":person_climbing_medium_skin_tone:"
          ],
          "keywords": [
            "climber",
            "medium skin tone"
          ],
          "unicode_output": "1f9d7-1f3fd"
        },
        "1f9d7-1f3fe": {
          "name": "person climbing: medium-dark skin tone",
          "shortname": ":person_climbing_tone4:",
          "shortname_alternates": [
            ":person_climbing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "climber",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9d7-1f3fe"
        },
        "1f9d7-1f3ff": {
          "name": "person climbing: dark skin tone",
          "shortname": ":person_climbing_tone5:",
          "shortname_alternates": [
            ":person_climbing_dark_skin_tone:"
          ],
          "keywords": [
            "climber",
            "dark skin tone"
          ],
          "unicode_output": "1f9d7-1f3ff"
        },
        "1f9d7-2640": {
          "name": "woman climbing",
          "shortname": ":woman_climbing:",
          "shortname_alternates": [],
          "keywords": [
            "climber"
          ],
          "unicode_output": "1f9d7-200d-2640-fe0f"
        },
        "1f9d7-1f3fb-2640": {
          "name": "woman climbing: light skin tone",
          "shortname": ":woman_climbing_tone1:",
          "shortname_alternates": [
            ":woman_climbing_light_skin_tone:"
          ],
          "keywords": [
            "climber",
            "light skin tone"
          ],
          "unicode_output": "1f9d7-1f3fb-200d-2640-fe0f"
        },
        "1f9d7-1f3fc-2640": {
          "name": "woman climbing: medium-light skin tone",
          "shortname": ":woman_climbing_tone2:",
          "shortname_alternates": [
            ":woman_climbing_medium_light_skin_tone:"
          ],
          "keywords": [
            "climber",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9d7-1f3fc-200d-2640-fe0f"
        },
        "1f9d7-1f3fd-2640": {
          "name": "woman climbing: medium skin tone",
          "shortname": ":woman_climbing_tone3:",
          "shortname_alternates": [
            ":woman_climbing_medium_skin_tone:"
          ],
          "keywords": [
            "climber",
            "medium skin tone"
          ],
          "unicode_output": "1f9d7-1f3fd-200d-2640-fe0f"
        },
        "1f9d7-1f3fe-2640": {
          "name": "woman climbing: medium-dark skin tone",
          "shortname": ":woman_climbing_tone4:",
          "shortname_alternates": [
            ":woman_climbing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "climber",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9d7-1f3fe-200d-2640-fe0f"
        },
        "1f9d7-1f3ff-2640": {
          "name": "woman climbing: dark skin tone",
          "shortname": ":woman_climbing_tone5:",
          "shortname_alternates": [
            ":woman_climbing_dark_skin_tone:"
          ],
          "keywords": [
            "climber",
            "dark skin tone"
          ],
          "unicode_output": "1f9d7-1f3ff-200d-2640-fe0f"
        },
        "1f9d7-2642": {
          "name": "man climbing",
          "shortname": ":man_climbing:",
          "shortname_alternates": [],
          "keywords": [
            "climber"
          ],
          "unicode_output": "1f9d7-200d-2642-fe0f"
        },
        "1f9d7-1f3fb-2642": {
          "name": "man climbing: light skin tone",
          "shortname": ":man_climbing_tone1:",
          "shortname_alternates": [
            ":man_climbing_light_skin_tone:"
          ],
          "keywords": [
            "climber",
            "light skin tone"
          ],
          "unicode_output": "1f9d7-1f3fb-200d-2642-fe0f"
        },
        "1f9d7-1f3fc-2642": {
          "name": "man climbing: medium-light skin tone",
          "shortname": ":man_climbing_tone2:",
          "shortname_alternates": [
            ":man_climbing_medium_light_skin_tone:"
          ],
          "keywords": [
            "climber",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9d7-1f3fc-200d-2642-fe0f"
        },
        "1f9d7-1f3fd-2642": {
          "name": "man climbing: medium skin tone",
          "shortname": ":man_climbing_tone3:",
          "shortname_alternates": [
            ":man_climbing_medium_skin_tone:"
          ],
          "keywords": [
            "climber",
            "medium skin tone"
          ],
          "unicode_output": "1f9d7-1f3fd-200d-2642-fe0f"
        },
        "1f9d7-1f3fe-2642": {
          "name": "man climbing: medium-dark skin tone",
          "shortname": ":man_climbing_tone4:",
          "shortname_alternates": [
            ":man_climbing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "climber",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9d7-1f3fe-200d-2642-fe0f"
        },
        "1f9d7-1f3ff-2642": {
          "name": "man climbing: dark skin tone",
          "shortname": ":man_climbing_tone5:",
          "shortname_alternates": [
            ":man_climbing_dark_skin_tone:"
          ],
          "keywords": [
            "climber",
            "dark skin tone"
          ],
          "unicode_output": "1f9d7-1f3ff-200d-2642-fe0f"
        },
        "1f6b5": {
          "name": "person mountain biking",
          "shortname": ":person_mountain_biking:",
          "shortname_alternates": [
            ":mountain_bicyclist:"
          ],
          "keywords": [
            "bicycle",
            "bicyclist",
            "bike",
            "cyclist",
            "mountain"
          ],
          "unicode_output": "1f6b5"
        },
        "1f6b5-1f3fb": {
          "name": "person mountain biking: light skin tone",
          "shortname": ":person_mountain_biking_tone1:",
          "shortname_alternates": [
            ":mountain_bicyclist_tone1:"
          ],
          "keywords": [
            "bicycle",
            "bicyclist",
            "bike",
            "cyclist",
            "light skin tone",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3fb"
        },
        "1f6b5-1f3fc": {
          "name": "person mountain biking: medium-light skin tone",
          "shortname": ":person_mountain_biking_tone2:",
          "shortname_alternates": [
            ":mountain_bicyclist_tone2:"
          ],
          "keywords": [
            "bicycle",
            "bicyclist",
            "bike",
            "cyclist",
            "medium-light skin tone",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3fc"
        },
        "1f6b5-1f3fd": {
          "name": "person mountain biking: medium skin tone",
          "shortname": ":person_mountain_biking_tone3:",
          "shortname_alternates": [
            ":mountain_bicyclist_tone3:"
          ],
          "keywords": [
            "bicycle",
            "bicyclist",
            "bike",
            "cyclist",
            "medium skin tone",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3fd"
        },
        "1f6b5-1f3fe": {
          "name": "person mountain biking: medium-dark skin tone",
          "shortname": ":person_mountain_biking_tone4:",
          "shortname_alternates": [
            ":mountain_bicyclist_tone4:"
          ],
          "keywords": [
            "bicycle",
            "bicyclist",
            "bike",
            "cyclist",
            "medium-dark skin tone",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3fe"
        },
        "1f6b5-1f3ff": {
          "name": "person mountain biking: dark skin tone",
          "shortname": ":person_mountain_biking_tone5:",
          "shortname_alternates": [
            ":mountain_bicyclist_tone5:"
          ],
          "keywords": [
            "bicycle",
            "bicyclist",
            "bike",
            "cyclist",
            "dark skin tone",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3ff"
        },
        "1f6b5-2640": {
          "name": "woman mountain biking",
          "shortname": ":woman_mountain_biking:",
          "shortname_alternates": [],
          "keywords": [
            "bicycle",
            "bike",
            "biking",
            "cyclist",
            "mountain",
            "woman"
          ],
          "unicode_output": "1f6b5-200d-2640-fe0f"
        },
        "1f6b5-1f3fb-2640": {
          "name": "woman mountain biking: light skin tone",
          "shortname": ":woman_mountain_biking_tone1:",
          "shortname_alternates": [
            ":woman_mountain_biking_light_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "biking",
            "cyclist",
            "light skin tone",
            "mountain",
            "woman"
          ],
          "unicode_output": "1f6b5-1f3fb-200d-2640-fe0f"
        },
        "1f6b5-1f3fc-2640": {
          "name": "woman mountain biking: medium-light skin tone",
          "shortname": ":woman_mountain_biking_tone2:",
          "shortname_alternates": [
            ":woman_mountain_biking_medium_light_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "biking",
            "cyclist",
            "medium-light skin tone",
            "mountain",
            "woman"
          ],
          "unicode_output": "1f6b5-1f3fc-200d-2640-fe0f"
        },
        "1f6b5-1f3fd-2640": {
          "name": "woman mountain biking: medium skin tone",
          "shortname": ":woman_mountain_biking_tone3:",
          "shortname_alternates": [
            ":woman_mountain_biking_medium_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "biking",
            "cyclist",
            "medium skin tone",
            "mountain",
            "woman"
          ],
          "unicode_output": "1f6b5-1f3fd-200d-2640-fe0f"
        },
        "1f6b5-1f3fe-2640": {
          "name": "woman mountain biking: medium-dark skin tone",
          "shortname": ":woman_mountain_biking_tone4:",
          "shortname_alternates": [
            ":woman_mountain_biking_medium_dark_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "biking",
            "cyclist",
            "medium-dark skin tone",
            "mountain",
            "woman"
          ],
          "unicode_output": "1f6b5-1f3fe-200d-2640-fe0f"
        },
        "1f6b5-1f3ff-2640": {
          "name": "woman mountain biking: dark skin tone",
          "shortname": ":woman_mountain_biking_tone5:",
          "shortname_alternates": [
            ":woman_mountain_biking_dark_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "biking",
            "cyclist",
            "dark skin tone",
            "mountain",
            "woman"
          ],
          "unicode_output": "1f6b5-1f3ff-200d-2640-fe0f"
        },
        "1f6b5-2642": {
          "name": "man mountain biking",
          "shortname": ":man_mountain_biking:",
          "shortname_alternates": [],
          "keywords": [
            "bicycle",
            "bike",
            "cyclist",
            "man",
            "mountain"
          ],
          "unicode_output": "1f6b5-200d-2642-fe0f"
        },
        "1f6b5-1f3fb-2642": {
          "name": "man mountain biking: light skin tone",
          "shortname": ":man_mountain_biking_tone1:",
          "shortname_alternates": [
            ":man_mountain_biking_light_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "cyclist",
            "light skin tone",
            "man",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3fb-200d-2642-fe0f"
        },
        "1f6b5-1f3fc-2642": {
          "name": "man mountain biking: medium-light skin tone",
          "shortname": ":man_mountain_biking_tone2:",
          "shortname_alternates": [
            ":man_mountain_biking_medium_light_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "cyclist",
            "man",
            "medium-light skin tone",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3fc-200d-2642-fe0f"
        },
        "1f6b5-1f3fd-2642": {
          "name": "man mountain biking: medium skin tone",
          "shortname": ":man_mountain_biking_tone3:",
          "shortname_alternates": [
            ":man_mountain_biking_medium_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "cyclist",
            "man",
            "medium skin tone",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3fd-200d-2642-fe0f"
        },
        "1f6b5-1f3fe-2642": {
          "name": "man mountain biking: medium-dark skin tone",
          "shortname": ":man_mountain_biking_tone4:",
          "shortname_alternates": [
            ":man_mountain_biking_medium_dark_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "cyclist",
            "man",
            "medium-dark skin tone",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3fe-200d-2642-fe0f"
        },
        "1f6b5-1f3ff-2642": {
          "name": "man mountain biking: dark skin tone",
          "shortname": ":man_mountain_biking_tone5:",
          "shortname_alternates": [
            ":man_mountain_biking_dark_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "bike",
            "cyclist",
            "dark skin tone",
            "man",
            "mountain"
          ],
          "unicode_output": "1f6b5-1f3ff-200d-2642-fe0f"
        },
        "1f6b4": {
          "name": "person biking",
          "shortname": ":person_biking:",
          "shortname_alternates": [
            ":bicyclist:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist"
          ],
          "unicode_output": "1f6b4"
        },
        "1f6b4-1f3fb": {
          "name": "person biking: light skin tone",
          "shortname": ":person_biking_tone1:",
          "shortname_alternates": [
            ":bicyclist_tone1:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "light skin tone"
          ],
          "unicode_output": "1f6b4-1f3fb"
        },
        "1f6b4-1f3fc": {
          "name": "person biking: medium-light skin tone",
          "shortname": ":person_biking_tone2:",
          "shortname_alternates": [
            ":bicyclist_tone2:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "medium-light skin tone"
          ],
          "unicode_output": "1f6b4-1f3fc"
        },
        "1f6b4-1f3fd": {
          "name": "person biking: medium skin tone",
          "shortname": ":person_biking_tone3:",
          "shortname_alternates": [
            ":bicyclist_tone3:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "medium skin tone"
          ],
          "unicode_output": "1f6b4-1f3fd"
        },
        "1f6b4-1f3fe": {
          "name": "person biking: medium-dark skin tone",
          "shortname": ":person_biking_tone4:",
          "shortname_alternates": [
            ":bicyclist_tone4:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f6b4-1f3fe"
        },
        "1f6b4-1f3ff": {
          "name": "person biking: dark skin tone",
          "shortname": ":person_biking_tone5:",
          "shortname_alternates": [
            ":bicyclist_tone5:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "dark skin tone"
          ],
          "unicode_output": "1f6b4-1f3ff"
        },
        "1f6b4-2640": {
          "name": "woman biking",
          "shortname": ":woman_biking:",
          "shortname_alternates": [],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "woman"
          ],
          "unicode_output": "1f6b4-200d-2640-fe0f"
        },
        "1f6b4-1f3fb-2640": {
          "name": "woman biking: light skin tone",
          "shortname": ":woman_biking_tone1:",
          "shortname_alternates": [
            ":woman_biking_light_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f6b4-1f3fb-200d-2640-fe0f"
        },
        "1f6b4-1f3fc-2640": {
          "name": "woman biking: medium-light skin tone",
          "shortname": ":woman_biking_tone2:",
          "shortname_alternates": [
            ":woman_biking_medium_light_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f6b4-1f3fc-200d-2640-fe0f"
        },
        "1f6b4-1f3fd-2640": {
          "name": "woman biking: medium skin tone",
          "shortname": ":woman_biking_tone3:",
          "shortname_alternates": [
            ":woman_biking_medium_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f6b4-1f3fd-200d-2640-fe0f"
        },
        "1f6b4-1f3fe-2640": {
          "name": "woman biking: medium-dark skin tone",
          "shortname": ":woman_biking_tone4:",
          "shortname_alternates": [
            ":woman_biking_medium_dark_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f6b4-1f3fe-200d-2640-fe0f"
        },
        "1f6b4-1f3ff-2640": {
          "name": "woman biking: dark skin tone",
          "shortname": ":woman_biking_tone5:",
          "shortname_alternates": [
            ":woman_biking_dark_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "dark skin tone",
            "woman"
          ],
          "unicode_output": "1f6b4-1f3ff-200d-2640-fe0f"
        },
        "1f6b4-2642": {
          "name": "man biking",
          "shortname": ":man_biking:",
          "shortname_alternates": [],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "man"
          ],
          "unicode_output": "1f6b4-200d-2642-fe0f"
        },
        "1f6b4-1f3fb-2642": {
          "name": "man biking: light skin tone",
          "shortname": ":man_biking_tone1:",
          "shortname_alternates": [
            ":man_biking_light_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f6b4-1f3fb-200d-2642-fe0f"
        },
        "1f6b4-1f3fc-2642": {
          "name": "man biking: medium-light skin tone",
          "shortname": ":man_biking_tone2:",
          "shortname_alternates": [
            ":man_biking_medium_light_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f6b4-1f3fc-200d-2642-fe0f"
        },
        "1f6b4-1f3fd-2642": {
          "name": "man biking: medium skin tone",
          "shortname": ":man_biking_tone3:",
          "shortname_alternates": [
            ":man_biking_medium_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f6b4-1f3fd-200d-2642-fe0f"
        },
        "1f6b4-1f3fe-2642": {
          "name": "man biking: medium-dark skin tone",
          "shortname": ":man_biking_tone4:",
          "shortname_alternates": [
            ":man_biking_medium_dark_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f6b4-1f3fe-200d-2642-fe0f"
        },
        "1f6b4-1f3ff-2642": {
          "name": "man biking: dark skin tone",
          "shortname": ":man_biking_tone5:",
          "shortname_alternates": [
            ":man_biking_dark_skin_tone:"
          ],
          "keywords": [
            "bicycle",
            "biking",
            "cyclist",
            "dark skin tone",
            "man"
          ],
          "unicode_output": "1f6b4-1f3ff-200d-2642-fe0f"
        },
        "1f3c6": {
          "name": "trophy",
          "shortname": ":trophy:",
          "shortname_alternates": [],
          "keywords": [
            "prize"
          ],
          "unicode_output": "1f3c6"
        },
        "1f947": {
          "name": "1st place medal",
          "shortname": ":first_place:",
          "shortname_alternates": [
            ":first_place_medal:"
          ],
          "keywords": [
            "first",
            "gold",
            "medal"
          ],
          "unicode_output": "1f947"
        },
        "1f948": {
          "name": "2nd place medal",
          "shortname": ":second_place:",
          "shortname_alternates": [
            ":second_place_medal:"
          ],
          "keywords": [
            "medal",
            "second",
            "silver"
          ],
          "unicode_output": "1f948"
        },
        "1f949": {
          "name": "3rd place medal",
          "shortname": ":third_place:",
          "shortname_alternates": [
            ":third_place_medal:"
          ],
          "keywords": [
            "bronze",
            "medal",
            "third"
          ],
          "unicode_output": "1f949"
        },
        "1f3c5": {
          "name": "sports medal",
          "shortname": ":medal:",
          "shortname_alternates": [
            ":sports_medal:"
          ],
          "keywords": [
            "medal"
          ],
          "unicode_output": "1f3c5"
        },
        "1f396": {
          "name": "military medal",
          "shortname": ":military_medal:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "medal",
            "military"
          ],
          "unicode_output": "1f396"
        },
        "1f3f5": {
          "name": "rosette",
          "shortname": ":rosette:",
          "shortname_alternates": [],
          "keywords": [
            "plant"
          ],
          "unicode_output": "1f3f5"
        },
        "1f397": {
          "name": "reminder ribbon",
          "shortname": ":reminder_ribbon:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "reminder",
            "ribbon"
          ],
          "unicode_output": "1f397"
        },
        "1f3ab": {
          "name": "ticket",
          "shortname": ":ticket:",
          "shortname_alternates": [],
          "keywords": [
            "admission"
          ],
          "unicode_output": "1f3ab"
        },
        "1f39f": {
          "name": "admission tickets",
          "shortname": ":tickets:",
          "shortname_alternates": [
            ":admission_tickets:"
          ],
          "keywords": [
            "admission",
            "ticket"
          ],
          "unicode_output": "1f39f"
        },
        "1f3aa": {
          "name": "circus tent",
          "shortname": ":circus_tent:",
          "shortname_alternates": [],
          "keywords": [
            "circus",
            "tent"
          ],
          "unicode_output": "1f3aa"
        },
        "1f939": {
          "name": "person juggling",
          "shortname": ":person_juggling:",
          "shortname_alternates": [
            ":juggling:",
            ":juggler:"
          ],
          "keywords": [
            "balance",
            "juggle",
            "multitask",
            "skill"
          ],
          "unicode_output": "1f939"
        },
        "1f939-1f3fb": {
          "name": "person juggling: light skin tone",
          "shortname": ":person_juggling_tone1:",
          "shortname_alternates": [
            ":juggling_tone1:",
            ":juggler_tone1:"
          ],
          "keywords": [
            "balance",
            "juggle",
            "light skin tone",
            "multitask",
            "skill"
          ],
          "unicode_output": "1f939-1f3fb"
        },
        "1f939-1f3fc": {
          "name": "person juggling: medium-light skin tone",
          "shortname": ":person_juggling_tone2:",
          "shortname_alternates": [
            ":juggling_tone2:",
            ":juggler_tone2:"
          ],
          "keywords": [
            "balance",
            "juggle",
            "medium-light skin tone",
            "multitask",
            "skill"
          ],
          "unicode_output": "1f939-1f3fc"
        },
        "1f939-1f3fd": {
          "name": "person juggling: medium skin tone",
          "shortname": ":person_juggling_tone3:",
          "shortname_alternates": [
            ":juggling_tone3:",
            ":juggler_tone3:"
          ],
          "keywords": [
            "balance",
            "juggle",
            "medium skin tone",
            "multitask",
            "skill"
          ],
          "unicode_output": "1f939-1f3fd"
        },
        "1f939-1f3fe": {
          "name": "person juggling: medium-dark skin tone",
          "shortname": ":person_juggling_tone4:",
          "shortname_alternates": [
            ":juggling_tone4:",
            ":juggler_tone4:"
          ],
          "keywords": [
            "balance",
            "juggle",
            "medium-dark skin tone",
            "multitask",
            "skill"
          ],
          "unicode_output": "1f939-1f3fe"
        },
        "1f939-1f3ff": {
          "name": "person juggling: dark skin tone",
          "shortname": ":person_juggling_tone5:",
          "shortname_alternates": [
            ":juggling_tone5:",
            ":juggler_tone5:"
          ],
          "keywords": [
            "balance",
            "dark skin tone",
            "juggle",
            "multitask",
            "skill"
          ],
          "unicode_output": "1f939-1f3ff"
        },
        "1f939-2640": {
          "name": "woman juggling",
          "shortname": ":woman_juggling:",
          "shortname_alternates": [],
          "keywords": [
            "juggling",
            "multitask",
            "woman"
          ],
          "unicode_output": "1f939-200d-2640-fe0f"
        },
        "1f939-1f3fb-2640": {
          "name": "woman juggling: light skin tone",
          "shortname": ":woman_juggling_tone1:",
          "shortname_alternates": [
            ":woman_juggling_light_skin_tone:"
          ],
          "keywords": [
            "juggling",
            "light skin tone",
            "multitask",
            "woman"
          ],
          "unicode_output": "1f939-1f3fb-200d-2640-fe0f"
        },
        "1f939-1f3fc-2640": {
          "name": "woman juggling: medium-light skin tone",
          "shortname": ":woman_juggling_tone2:",
          "shortname_alternates": [
            ":woman_juggling_medium_light_skin_tone:"
          ],
          "keywords": [
            "juggling",
            "medium-light skin tone",
            "multitask",
            "woman"
          ],
          "unicode_output": "1f939-1f3fc-200d-2640-fe0f"
        },
        "1f939-1f3fd-2640": {
          "name": "woman juggling: medium skin tone",
          "shortname": ":woman_juggling_tone3:",
          "shortname_alternates": [
            ":woman_juggling_medium_skin_tone:"
          ],
          "keywords": [
            "juggling",
            "medium skin tone",
            "multitask",
            "woman"
          ],
          "unicode_output": "1f939-1f3fd-200d-2640-fe0f"
        },
        "1f939-1f3fe-2640": {
          "name": "woman juggling: medium-dark skin tone",
          "shortname": ":woman_juggling_tone4:",
          "shortname_alternates": [
            ":woman_juggling_medium_dark_skin_tone:"
          ],
          "keywords": [
            "juggling",
            "medium-dark skin tone",
            "multitask",
            "woman"
          ],
          "unicode_output": "1f939-1f3fe-200d-2640-fe0f"
        },
        "1f939-1f3ff-2640": {
          "name": "woman juggling: dark skin tone",
          "shortname": ":woman_juggling_tone5:",
          "shortname_alternates": [
            ":woman_juggling_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "juggling",
            "multitask",
            "woman"
          ],
          "unicode_output": "1f939-1f3ff-200d-2640-fe0f"
        },
        "1f939-2642": {
          "name": "man juggling",
          "shortname": ":man_juggling:",
          "shortname_alternates": [],
          "keywords": [
            "juggling",
            "man",
            "multitask"
          ],
          "unicode_output": "1f939-200d-2642-fe0f"
        },
        "1f939-1f3fb-2642": {
          "name": "man juggling: light skin tone",
          "shortname": ":man_juggling_tone1:",
          "shortname_alternates": [
            ":man_juggling_light_skin_tone:"
          ],
          "keywords": [
            "juggling",
            "light skin tone",
            "man",
            "multitask"
          ],
          "unicode_output": "1f939-1f3fb-200d-2642-fe0f"
        },
        "1f939-1f3fc-2642": {
          "name": "man juggling: medium-light skin tone",
          "shortname": ":man_juggling_tone2:",
          "shortname_alternates": [
            ":man_juggling_medium_light_skin_tone:"
          ],
          "keywords": [
            "juggling",
            "man",
            "medium-light skin tone",
            "multitask"
          ],
          "unicode_output": "1f939-1f3fc-200d-2642-fe0f"
        },
        "1f939-1f3fd-2642": {
          "name": "man juggling: medium skin tone",
          "shortname": ":man_juggling_tone3:",
          "shortname_alternates": [
            ":man_juggling_medium_skin_tone:"
          ],
          "keywords": [
            "juggling",
            "man",
            "medium skin tone",
            "multitask"
          ],
          "unicode_output": "1f939-1f3fd-200d-2642-fe0f"
        },
        "1f939-1f3fe-2642": {
          "name": "man juggling: medium-dark skin tone",
          "shortname": ":man_juggling_tone4:",
          "shortname_alternates": [
            ":man_juggling_medium_dark_skin_tone:"
          ],
          "keywords": [
            "juggling",
            "man",
            "medium-dark skin tone",
            "multitask"
          ],
          "unicode_output": "1f939-1f3fe-200d-2642-fe0f"
        },
        "1f939-1f3ff-2642": {
          "name": "man juggling: dark skin tone",
          "shortname": ":man_juggling_tone5:",
          "shortname_alternates": [
            ":man_juggling_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "juggling",
            "man",
            "multitask"
          ],
          "unicode_output": "1f939-1f3ff-200d-2642-fe0f"
        },
        "1f3ad": {
          "name": "performing arts",
          "shortname": ":performing_arts:",
          "shortname_alternates": [],
          "keywords": [
            "art",
            "mask",
            "performing",
            "theater",
            "theatre"
          ],
          "unicode_output": "1f3ad"
        },
        "1f3a8": {
          "name": "artist palette",
          "shortname": ":art:",
          "shortname_alternates": [],
          "keywords": [
            "art",
            "museum",
            "painting",
            "palette"
          ],
          "unicode_output": "1f3a8"
        },
        "1f3ac": {
          "name": "clapper board",
          "shortname": ":clapper:",
          "shortname_alternates": [],
          "keywords": [
            "clapper",
            "movie"
          ],
          "unicode_output": "1f3ac"
        },
        "1f3a4": {
          "name": "microphone",
          "shortname": ":microphone:",
          "shortname_alternates": [],
          "keywords": [
            "karaoke",
            "mic"
          ],
          "unicode_output": "1f3a4"
        },
        "1f3a7": {
          "name": "headphone",
          "shortname": ":headphones:",
          "shortname_alternates": [],
          "keywords": [
            "earbud"
          ],
          "unicode_output": "1f3a7"
        },
        "1f3bc": {
          "name": "musical score",
          "shortname": ":musical_score:",
          "shortname_alternates": [],
          "keywords": [
            "music",
            "score"
          ],
          "unicode_output": "1f3bc"
        },
        "1f3b9": {
          "name": "musical keyboard",
          "shortname": ":musical_keyboard:",
          "shortname_alternates": [],
          "keywords": [
            "instrument",
            "keyboard",
            "music",
            "piano"
          ],
          "unicode_output": "1f3b9"
        },
        "1f941": {
          "name": "drum",
          "shortname": ":drum:",
          "shortname_alternates": [
            ":drum_with_drumsticks:"
          ],
          "keywords": [
            "drum",
            "drumsticks",
            "music"
          ],
          "unicode_output": "1f941"
        },
        "1f3b7": {
          "name": "saxophone",
          "shortname": ":saxophone:",
          "shortname_alternates": [],
          "keywords": [
            "instrument",
            "music",
            "sax"
          ],
          "unicode_output": "1f3b7"
        },
        "1f3ba": {
          "name": "trumpet",
          "shortname": ":trumpet:",
          "shortname_alternates": [],
          "keywords": [
            "instrument",
            "music"
          ],
          "unicode_output": "1f3ba"
        },
        "1f3b8": {
          "name": "guitar",
          "shortname": ":guitar:",
          "shortname_alternates": [],
          "keywords": [
            "instrument",
            "music"
          ],
          "unicode_output": "1f3b8"
        },
        "1f3bb": {
          "name": "violin",
          "shortname": ":violin:",
          "shortname_alternates": [],
          "keywords": [
            "instrument",
            "music"
          ],
          "unicode_output": "1f3bb"
        },
        "1f3b2": {
          "name": "game die",
          "shortname": ":game_die:",
          "shortname_alternates": [],
          "keywords": [
            "dice",
            "die",
            "game"
          ],
          "unicode_output": "1f3b2"
        },
        "1f3af": {
          "name": "direct hit",
          "shortname": ":dart:",
          "shortname_alternates": [],
          "keywords": [
            "bull",
            "bullseye",
            "dart",
            "eye",
            "game",
            "hit",
            "target"
          ],
          "unicode_output": "1f3af"
        },
        "1f3b3": {
          "name": "bowling",
          "shortname": ":bowling:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "game"
          ],
          "unicode_output": "1f3b3"
        },
        "1f3ae": {
          "name": "video game",
          "shortname": ":video_game:",
          "shortname_alternates": [],
          "keywords": [
            "controller",
            "game"
          ],
          "unicode_output": "1f3ae"
        },
        "1f3b0": {
          "name": "slot machine",
          "shortname": ":slot_machine:",
          "shortname_alternates": [],
          "keywords": [
            "game",
            "slot"
          ],
          "unicode_output": "1f3b0"
        },
        "231a": {
          "name": "watch",
          "shortname": ":watch:",
          "shortname_alternates": [],
          "keywords": [
            "clock"
          ],
          "unicode_output": "231a"
        },
        "1f4f1": {
          "name": "mobile phone",
          "shortname": ":iphone:",
          "shortname_alternates": [],
          "keywords": [
            "cell",
            "mobile",
            "phone",
            "telephone"
          ],
          "unicode_output": "1f4f1"
        },
        "1f4f2": {
          "name": "mobile phone with arrow",
          "shortname": ":calling:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "call",
            "cell",
            "mobile",
            "phone",
            "receive",
            "telephone"
          ],
          "unicode_output": "1f4f2"
        },
        "1f4bb": {
          "name": "laptop computer",
          "shortname": ":computer:",
          "shortname_alternates": [],
          "keywords": [
            "computer",
            "pc",
            "personal"
          ],
          "unicode_output": "1f4bb"
        },
        "2328": {
          "name": "keyboard",
          "shortname": ":keyboard:",
          "shortname_alternates": [],
          "keywords": [
            "computer"
          ],
          "unicode_output": "2328"
        },
        "1f5a5": {
          "name": "desktop computer",
          "shortname": ":desktop:",
          "shortname_alternates": [
            ":desktop_computer:"
          ],
          "keywords": [
            "computer",
            "desktop"
          ],
          "unicode_output": "1f5a5"
        },
        "1f5a8": {
          "name": "printer",
          "shortname": ":printer:",
          "shortname_alternates": [],
          "keywords": [
            "computer"
          ],
          "unicode_output": "1f5a8"
        },
        "1f5b1": {
          "name": "computer mouse",
          "shortname": ":mouse_three_button:",
          "shortname_alternates": [
            ":three_button_mouse:"
          ],
          "keywords": [
            "computer"
          ],
          "unicode_output": "1f5b1"
        },
        "1f5b2": {
          "name": "trackball",
          "shortname": ":trackball:",
          "shortname_alternates": [],
          "keywords": [
            "computer"
          ],
          "unicode_output": "1f5b2"
        },
        "1f579": {
          "name": "joystick",
          "shortname": ":joystick:",
          "shortname_alternates": [],
          "keywords": [
            "game",
            "video game"
          ],
          "unicode_output": "1f579"
        },
        "265f": {
          "name": "chess pawn",
          "shortname": ":chess_pawn:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "265f-fe0f"
        },
        "1f9e9": {
          "name": "jigsaw",
          "shortname": ":jigsaw:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9e9"
        },
        "1f5dc": {
          "name": "clamp",
          "shortname": ":compression:",
          "shortname_alternates": [],
          "keywords": [
            "compress",
            "tool",
            "vice"
          ],
          "unicode_output": "1f5dc"
        },
        "1f4bd": {
          "name": "computer disk",
          "shortname": ":minidisc:",
          "shortname_alternates": [],
          "keywords": [
            "computer",
            "disk",
            "minidisk",
            "optical"
          ],
          "unicode_output": "1f4bd"
        },
        "1f4be": {
          "name": "floppy disk",
          "shortname": ":floppy_disk:",
          "shortname_alternates": [],
          "keywords": [
            "computer",
            "disk",
            "floppy"
          ],
          "unicode_output": "1f4be"
        },
        "1f4bf": {
          "name": "optical disk",
          "shortname": ":cd:",
          "shortname_alternates": [],
          "keywords": [
            "cd",
            "computer",
            "disk",
            "optical"
          ],
          "unicode_output": "1f4bf"
        },
        "1f4c0": {
          "name": "dvd",
          "shortname": ":dvd:",
          "shortname_alternates": [],
          "keywords": [
            "blu-ray",
            "computer",
            "disk",
            "dvd",
            "optical"
          ],
          "unicode_output": "1f4c0"
        },
        "1f4fc": {
          "name": "videocassette",
          "shortname": ":vhs:",
          "shortname_alternates": [],
          "keywords": [
            "tape",
            "vhs",
            "video"
          ],
          "unicode_output": "1f4fc"
        },
        "1f4f7": {
          "name": "camera",
          "shortname": ":camera:",
          "shortname_alternates": [],
          "keywords": [
            "video"
          ],
          "unicode_output": "1f4f7"
        },
        "1f4f8": {
          "name": "camera with flash",
          "shortname": ":camera_with_flash:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "flash",
            "video"
          ],
          "unicode_output": "1f4f8"
        },
        "1f4f9": {
          "name": "video camera",
          "shortname": ":video_camera:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "video"
          ],
          "unicode_output": "1f4f9"
        },
        "1f3a5": {
          "name": "movie camera",
          "shortname": ":movie_camera:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "cinema",
            "movie"
          ],
          "unicode_output": "1f3a5"
        },
        "1f4fd": {
          "name": "film projector",
          "shortname": ":projector:",
          "shortname_alternates": [
            ":film_projector:"
          ],
          "keywords": [
            "cinema",
            "film",
            "movie",
            "projector",
            "video"
          ],
          "unicode_output": "1f4fd"
        },
        "1f39e": {
          "name": "film frames",
          "shortname": ":film_frames:",
          "shortname_alternates": [],
          "keywords": [
            "cinema",
            "film",
            "frames",
            "movie"
          ],
          "unicode_output": "1f39e"
        },
        "1f4de": {
          "name": "telephone receiver",
          "shortname": ":telephone_receiver:",
          "shortname_alternates": [],
          "keywords": [
            "phone",
            "receiver",
            "telephone"
          ],
          "unicode_output": "1f4de"
        },
        "260e": {
          "name": "telephone",
          "shortname": ":telephone:",
          "shortname_alternates": [],
          "keywords": [
            "phone"
          ],
          "unicode_output": "260e"
        },
        "1f4df": {
          "name": "pager",
          "shortname": ":pager:",
          "shortname_alternates": [],
          "keywords": [
            "pager"
          ],
          "unicode_output": "1f4df"
        },
        "1f4e0": {
          "name": "fax machine",
          "shortname": ":fax:",
          "shortname_alternates": [],
          "keywords": [
            "fax"
          ],
          "unicode_output": "1f4e0"
        },
        "1f4fa": {
          "name": "television",
          "shortname": ":tv:",
          "shortname_alternates": [],
          "keywords": [
            "tv",
            "video"
          ],
          "unicode_output": "1f4fa"
        },
        "1f4fb": {
          "name": "radio",
          "shortname": ":radio:",
          "shortname_alternates": [],
          "keywords": [
            "video"
          ],
          "unicode_output": "1f4fb"
        },
        "1f399": {
          "name": "studio microphone",
          "shortname": ":microphone2:",
          "shortname_alternates": [
            ":studio_microphone:"
          ],
          "keywords": [
            "mic",
            "microphone",
            "music",
            "studio"
          ],
          "unicode_output": "1f399"
        },
        "1f39a": {
          "name": "level slider",
          "shortname": ":level_slider:",
          "shortname_alternates": [],
          "keywords": [
            "level",
            "music",
            "slider"
          ],
          "unicode_output": "1f39a"
        },
        "1f39b": {
          "name": "control knobs",
          "shortname": ":control_knobs:",
          "shortname_alternates": [],
          "keywords": [
            "control",
            "knobs",
            "music"
          ],
          "unicode_output": "1f39b"
        },
        "23f1": {
          "name": "stopwatch",
          "shortname": ":stopwatch:",
          "shortname_alternates": [],
          "keywords": [
            "clock"
          ],
          "unicode_output": "23f1"
        },
        "23f2": {
          "name": "timer clock",
          "shortname": ":timer:",
          "shortname_alternates": [
            ":timer_clock:"
          ],
          "keywords": [
            "clock",
            "timer"
          ],
          "unicode_output": "23f2"
        },
        "23f0": {
          "name": "alarm clock",
          "shortname": ":alarm_clock:",
          "shortname_alternates": [],
          "keywords": [
            "alarm",
            "clock"
          ],
          "unicode_output": "23f0"
        },
        "1f570": {
          "name": "mantelpiece clock",
          "shortname": ":clock:",
          "shortname_alternates": [
            ":mantlepiece_clock:"
          ],
          "keywords": [
            "clock"
          ],
          "unicode_output": "1f570"
        },
        "231b": {
          "name": "hourglass done",
          "shortname": ":hourglass:",
          "shortname_alternates": [],
          "keywords": [
            "sand",
            "timer"
          ],
          "unicode_output": "231b"
        },
        "23f3": {
          "name": "hourglass not done",
          "shortname": ":hourglass_flowing_sand:",
          "shortname_alternates": [],
          "keywords": [
            "hourglass",
            "sand",
            "timer"
          ],
          "unicode_output": "23f3"
        },
        "1f4e1": {
          "name": "satellite antenna",
          "shortname": ":satellite:",
          "shortname_alternates": [],
          "keywords": [
            "antenna",
            "dish",
            "satellite"
          ],
          "unicode_output": "1f4e1"
        },
        "1f9ed": {
          "name": "compass",
          "shortname": ":compass:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9ed"
        },
        "1f50b": {
          "name": "battery",
          "shortname": ":battery:",
          "shortname_alternates": [],
          "keywords": [
            "battery"
          ],
          "unicode_output": "1f50b"
        },
        "1f50c": {
          "name": "electric plug",
          "shortname": ":electric_plug:",
          "shortname_alternates": [],
          "keywords": [
            "electric",
            "electricity",
            "plug"
          ],
          "unicode_output": "1f50c"
        },
        "1f9f2": {
          "name": "magnet",
          "shortname": ":magnet:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f2"
        },
        "1f4a1": {
          "name": "light bulb",
          "shortname": ":bulb:",
          "shortname_alternates": [],
          "keywords": [
            "bulb",
            "comic",
            "electric",
            "idea",
            "light"
          ],
          "unicode_output": "1f4a1"
        },
        "1f526": {
          "name": "flashlight",
          "shortname": ":flashlight:",
          "shortname_alternates": [],
          "keywords": [
            "electric",
            "light",
            "tool",
            "torch"
          ],
          "unicode_output": "1f526"
        },
        "1f56f": {
          "name": "candle",
          "shortname": ":candle:",
          "shortname_alternates": [],
          "keywords": [
            "light"
          ],
          "unicode_output": "1f56f"
        },
        "1f9ef": {
          "name": "fire extinguisher",
          "shortname": ":fire_extinguisher:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9ef"
        },
        "1f5d1": {
          "name": "wastebasket",
          "shortname": ":wastebasket:",
          "shortname_alternates": [],
          "keywords": [
            "wastebasket"
          ],
          "unicode_output": "1f5d1"
        },
        "1f6e2": {
          "name": "oil drum",
          "shortname": ":oil:",
          "shortname_alternates": [
            ":oil_drum:"
          ],
          "keywords": [
            "drum",
            "oil"
          ],
          "unicode_output": "1f6e2"
        },
        "1f4b8": {
          "name": "money with wings",
          "shortname": ":money_with_wings:",
          "shortname_alternates": [],
          "keywords": [
            "bank",
            "banknote",
            "bill",
            "dollar",
            "fly",
            "money",
            "note",
            "wings"
          ],
          "unicode_output": "1f4b8"
        },
        "1f4b5": {
          "name": "dollar banknote",
          "shortname": ":dollar:",
          "shortname_alternates": [],
          "keywords": [
            "bank",
            "banknote",
            "bill",
            "currency",
            "dollar",
            "money",
            "note"
          ],
          "unicode_output": "1f4b5"
        },
        "1f4b4": {
          "name": "yen banknote",
          "shortname": ":yen:",
          "shortname_alternates": [],
          "keywords": [
            "bank",
            "banknote",
            "bill",
            "currency",
            "money",
            "note",
            "yen"
          ],
          "unicode_output": "1f4b4"
        },
        "1f4b6": {
          "name": "euro banknote",
          "shortname": ":euro:",
          "shortname_alternates": [],
          "keywords": [
            "bank",
            "banknote",
            "bill",
            "currency",
            "euro",
            "money",
            "note"
          ],
          "unicode_output": "1f4b6"
        },
        "1f4b7": {
          "name": "pound banknote",
          "shortname": ":pound:",
          "shortname_alternates": [],
          "keywords": [
            "bank",
            "banknote",
            "bill",
            "currency",
            "money",
            "note",
            "pound"
          ],
          "unicode_output": "1f4b7"
        },
        "1f4b0": {
          "name": "money bag",
          "shortname": ":moneybag:",
          "shortname_alternates": [],
          "keywords": [
            "bag",
            "dollar",
            "money",
            "moneybag"
          ],
          "unicode_output": "1f4b0"
        },
        "1f4b3": {
          "name": "credit card",
          "shortname": ":credit_card:",
          "shortname_alternates": [],
          "keywords": [
            "bank",
            "card",
            "credit",
            "money"
          ],
          "unicode_output": "1f4b3"
        },
        "1f48e": {
          "name": "gem stone",
          "shortname": ":gem:",
          "shortname_alternates": [],
          "keywords": [
            "diamond",
            "gem",
            "jewel"
          ],
          "unicode_output": "1f48e"
        },
        "1f9ff": {
          "name": "nazar amulet",
          "shortname": ":nazar_amulet:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9ff"
        },
        "1f9f1": {
          "name": "bricks",
          "shortname": ":bricks:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f1"
        },
        "2696": {
          "name": "balance scale",
          "shortname": ":scales:",
          "shortname_alternates": [],
          "keywords": [
            "Libra",
            "balance",
            "justice",
            "scales",
            "tool",
            "weight",
            "zodiac"
          ],
          "unicode_output": "2696"
        },
        "1f9f0": {
          "name": "toolbox",
          "shortname": ":toolbox:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f0"
        },
        "1f527": {
          "name": "wrench",
          "shortname": ":wrench:",
          "shortname_alternates": [],
          "keywords": [
            "spanner",
            "tool",
            "wrench"
          ],
          "unicode_output": "1f527"
        },
        "1f528": {
          "name": "hammer",
          "shortname": ":hammer:",
          "shortname_alternates": [],
          "keywords": [
            "tool"
          ],
          "unicode_output": "1f528"
        },
        "2692": {
          "name": "hammer and pick",
          "shortname": ":hammer_pick:",
          "shortname_alternates": [
            ":hammer_and_pick:"
          ],
          "keywords": [
            "hammer",
            "pick",
            "tool"
          ],
          "unicode_output": "2692"
        },
        "1f6e0": {
          "name": "hammer and wrench",
          "shortname": ":tools:",
          "shortname_alternates": [
            ":hammer_and_wrench:"
          ],
          "keywords": [
            "hammer",
            "spanner",
            "tool",
            "wrench"
          ],
          "unicode_output": "1f6e0"
        },
        "26cf": {
          "name": "pick",
          "shortname": ":pick:",
          "shortname_alternates": [],
          "keywords": [
            "mining",
            "tool"
          ],
          "unicode_output": "26cf"
        },
        "1f529": {
          "name": "nut and bolt",
          "shortname": ":nut_and_bolt:",
          "shortname_alternates": [],
          "keywords": [
            "bolt",
            "nut",
            "tool"
          ],
          "unicode_output": "1f529"
        },
        "2699": {
          "name": "gear",
          "shortname": ":gear:",
          "shortname_alternates": [],
          "keywords": [
            "tool"
          ],
          "unicode_output": "2699"
        },
        "26d3": {
          "name": "chains",
          "shortname": ":chains:",
          "shortname_alternates": [],
          "keywords": [
            "chain"
          ],
          "unicode_output": "26d3"
        },
        "1f52b": {
          "name": "pistol",
          "shortname": ":gun:",
          "shortname_alternates": [],
          "keywords": [
            "gun",
            "handgun",
            "revolver",
            "tool",
            "weapon"
          ],
          "unicode_output": "1f52b"
        },
        "1f4a3": {
          "name": "bomb",
          "shortname": ":bomb:",
          "shortname_alternates": [],
          "keywords": [
            "comic"
          ],
          "unicode_output": "1f4a3"
        },
        "1f52a": {
          "name": "kitchen knife",
          "shortname": ":knife:",
          "shortname_alternates": [],
          "keywords": [
            "cooking",
            "hocho",
            "knife",
            "tool",
            "weapon"
          ],
          "unicode_output": "1f52a"
        },
        "1f5e1": {
          "name": "dagger",
          "shortname": ":dagger:",
          "shortname_alternates": [
            ":dagger_knife:"
          ],
          "keywords": [
            "knife",
            "weapon"
          ],
          "unicode_output": "1f5e1"
        },
        "2694": {
          "name": "crossed swords",
          "shortname": ":crossed_swords:",
          "shortname_alternates": [],
          "keywords": [
            "crossed",
            "swords",
            "weapon"
          ],
          "unicode_output": "2694"
        },
        "1f6e1": {
          "name": "shield",
          "shortname": ":shield:",
          "shortname_alternates": [],
          "keywords": [
            "weapon"
          ],
          "unicode_output": "1f6e1"
        },
        "1f6ac": {
          "name": "cigarette",
          "shortname": ":smoking:",
          "shortname_alternates": [],
          "keywords": [
            "smoking"
          ],
          "unicode_output": "1f6ac"
        },
        "26b0": {
          "name": "coffin",
          "shortname": ":coffin:",
          "shortname_alternates": [],
          "keywords": [
            "death"
          ],
          "unicode_output": "26b0"
        },
        "26b1": {
          "name": "funeral urn",
          "shortname": ":urn:",
          "shortname_alternates": [
            ":funeral_urn:"
          ],
          "keywords": [
            "ashes",
            "death",
            "funeral",
            "urn"
          ],
          "unicode_output": "26b1"
        },
        "1f3fa": {
          "name": "amphora",
          "shortname": ":amphora:",
          "shortname_alternates": [],
          "keywords": [
            "Aquarius",
            "cooking",
            "drink",
            "jug",
            "tool",
            "weapon",
            "zodiac"
          ],
          "unicode_output": "1f3fa"
        },
        "1f52e": {
          "name": "crystal ball",
          "shortname": ":crystal_ball:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "crystal",
            "fairy tale",
            "fantasy",
            "fortune",
            "tool"
          ],
          "unicode_output": "1f52e"
        },
        "1f4ff": {
          "name": "prayer beads",
          "shortname": ":prayer_beads:",
          "shortname_alternates": [],
          "keywords": [
            "beads",
            "clothing",
            "necklace",
            "prayer",
            "religion"
          ],
          "unicode_output": "1f4ff"
        },
        "1f488": {
          "name": "barber pole",
          "shortname": ":barber:",
          "shortname_alternates": [],
          "keywords": [
            "barber",
            "haircut",
            "pole"
          ],
          "unicode_output": "1f488"
        },
        "2697": {
          "name": "alembic",
          "shortname": ":alembic:",
          "shortname_alternates": [],
          "keywords": [
            "chemistry",
            "tool"
          ],
          "unicode_output": "2697"
        },
        "1f9ea": {
          "name": "test tube",
          "shortname": ":test_tube:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9ea"
        },
        "1f9eb": {
          "name": "petri dish",
          "shortname": ":petri_dish:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9eb"
        },
        "1f9ec": {
          "name": "dna",
          "shortname": ":dna:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9ec"
        },
        "1f9ee": {
          "name": "abacus",
          "shortname": ":abacus:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9ee"
        },
        "1f52d": {
          "name": "telescope",
          "shortname": ":telescope:",
          "shortname_alternates": [],
          "keywords": [
            "science",
            "tool"
          ],
          "unicode_output": "1f52d"
        },
        "1f52c": {
          "name": "microscope",
          "shortname": ":microscope:",
          "shortname_alternates": [],
          "keywords": [
            "science",
            "tool"
          ],
          "unicode_output": "1f52c"
        },
        "1f573": {
          "name": "hole",
          "shortname": ":hole:",
          "shortname_alternates": [],
          "keywords": [
            "hole"
          ],
          "unicode_output": "1f573"
        },
        "1f48a": {
          "name": "pill",
          "shortname": ":pill:",
          "shortname_alternates": [],
          "keywords": [
            "doctor",
            "medicine",
            "sick"
          ],
          "unicode_output": "1f48a"
        },
        "1f489": {
          "name": "syringe",
          "shortname": ":syringe:",
          "shortname_alternates": [],
          "keywords": [
            "doctor",
            "medicine",
            "needle",
            "shot",
            "sick",
            "tool"
          ],
          "unicode_output": "1f489"
        },
        "1f321": {
          "name": "thermometer",
          "shortname": ":thermometer:",
          "shortname_alternates": [],
          "keywords": [
            "weather"
          ],
          "unicode_output": "1f321"
        },
        "1f6bd": {
          "name": "toilet",
          "shortname": ":toilet:",
          "shortname_alternates": [],
          "keywords": [
            "toilet"
          ],
          "unicode_output": "1f6bd"
        },
        "1f6b0": {
          "name": "potable water",
          "shortname": ":potable_water:",
          "shortname_alternates": [],
          "keywords": [
            "drinking",
            "potable",
            "water"
          ],
          "unicode_output": "1f6b0"
        },
        "1f6bf": {
          "name": "shower",
          "shortname": ":shower:",
          "shortname_alternates": [],
          "keywords": [
            "water"
          ],
          "unicode_output": "1f6bf"
        },
        "1f6c1": {
          "name": "bathtub",
          "shortname": ":bathtub:",
          "shortname_alternates": [],
          "keywords": [
            "bath"
          ],
          "unicode_output": "1f6c1"
        },
        "1f6c0": {
          "name": "person taking bath",
          "shortname": ":bath:",
          "shortname_alternates": [],
          "keywords": [
            "bath",
            "bathtub"
          ],
          "unicode_output": "1f6c0"
        },
        "1f6c0-1f3fb": {
          "name": "person taking bath: light skin tone",
          "shortname": ":bath_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "bath",
            "bathtub",
            "light skin tone"
          ],
          "unicode_output": "1f6c0-1f3fb"
        },
        "1f6c0-1f3fc": {
          "name": "person taking bath: medium-light skin tone",
          "shortname": ":bath_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "bath",
            "bathtub",
            "medium-light skin tone"
          ],
          "unicode_output": "1f6c0-1f3fc"
        },
        "1f6c0-1f3fd": {
          "name": "person taking bath: medium skin tone",
          "shortname": ":bath_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "bath",
            "bathtub",
            "medium skin tone"
          ],
          "unicode_output": "1f6c0-1f3fd"
        },
        "1f6c0-1f3fe": {
          "name": "person taking bath: medium-dark skin tone",
          "shortname": ":bath_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "bath",
            "bathtub",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f6c0-1f3fe"
        },
        "1f6c0-1f3ff": {
          "name": "person taking bath: dark skin tone",
          "shortname": ":bath_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "bath",
            "bathtub",
            "dark skin tone"
          ],
          "unicode_output": "1f6c0-1f3ff"
        },
        "1f9f9": {
          "name": "broom",
          "shortname": ":broom:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f9"
        },
        "1f9fa": {
          "name": "basket",
          "shortname": ":basket:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9fa"
        },
        "1f9fb": {
          "name": "roll of paper",
          "shortname": ":roll_of_paper:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9fb"
        },
        "1f9fc": {
          "name": "soap",
          "shortname": ":soap:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9fc"
        },
        "1f9fd": {
          "name": "sponge",
          "shortname": ":sponge:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9fd"
        },
        "1f9f4": {
          "name": "squeeze bottle",
          "shortname": ":squeeze_bottle:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f4"
        },
        "1f9f5": {
          "name": "thread",
          "shortname": ":thread:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f5"
        },
        "1f9f6": {
          "name": "yarn",
          "shortname": ":yarn:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f6"
        },
        "1f6ce": {
          "name": "bellhop bell",
          "shortname": ":bellhop:",
          "shortname_alternates": [
            ":bellhop_bell:"
          ],
          "keywords": [
            "bell",
            "bellhop",
            "hotel"
          ],
          "unicode_output": "1f6ce"
        },
        "1f511": {
          "name": "key",
          "shortname": ":key:",
          "shortname_alternates": [],
          "keywords": [
            "lock",
            "password"
          ],
          "unicode_output": "1f511"
        },
        "1f5dd": {
          "name": "old key",
          "shortname": ":key2:",
          "shortname_alternates": [
            ":old_key:"
          ],
          "keywords": [
            "clue",
            "key",
            "lock",
            "old"
          ],
          "unicode_output": "1f5dd"
        },
        "1f6aa": {
          "name": "door",
          "shortname": ":door:",
          "shortname_alternates": [],
          "keywords": [
            "door"
          ],
          "unicode_output": "1f6aa"
        },
        "1f6cb": {
          "name": "couch and lamp",
          "shortname": ":couch:",
          "shortname_alternates": [
            ":couch_and_lamp:"
          ],
          "keywords": [
            "couch",
            "hotel",
            "lamp"
          ],
          "unicode_output": "1f6cb"
        },
        "1f6cf": {
          "name": "bed",
          "shortname": ":bed:",
          "shortname_alternates": [],
          "keywords": [
            "hotel",
            "sleep"
          ],
          "unicode_output": "1f6cf"
        },
        "1f6cc": {
          "name": "person in bed",
          "shortname": ":sleeping_accommodation:",
          "shortname_alternates": [],
          "keywords": [
            "hotel",
            "sleep"
          ],
          "unicode_output": "1f6cc"
        },
        "1f6cc-1f3fb": {
          "name": "person in bed: light skin tone",
          "shortname": ":person_in_bed_tone1:",
          "shortname_alternates": [
            ":person_in_bed_light_skin_tone:"
          ],
          "keywords": [
            "hotel",
            "light skin tone",
            "sleep"
          ],
          "unicode_output": "1f6cc-1f3fb"
        },
        "1f6cc-1f3fc": {
          "name": "person in bed: medium-light skin tone",
          "shortname": ":person_in_bed_tone2:",
          "shortname_alternates": [
            ":person_in_bed_medium_light_skin_tone:"
          ],
          "keywords": [
            "hotel",
            "medium-light skin tone",
            "sleep"
          ],
          "unicode_output": "1f6cc-1f3fc"
        },
        "1f6cc-1f3fd": {
          "name": "person in bed: medium skin tone",
          "shortname": ":person_in_bed_tone3:",
          "shortname_alternates": [
            ":person_in_bed_medium_skin_tone:"
          ],
          "keywords": [
            "hotel",
            "medium skin tone",
            "sleep"
          ],
          "unicode_output": "1f6cc-1f3fd"
        },
        "1f6cc-1f3fe": {
          "name": "person in bed: medium-dark skin tone",
          "shortname": ":person_in_bed_tone4:",
          "shortname_alternates": [
            ":person_in_bed_medium_dark_skin_tone:"
          ],
          "keywords": [
            "hotel",
            "medium-dark skin tone",
            "sleep"
          ],
          "unicode_output": "1f6cc-1f3fe"
        },
        "1f6cc-1f3ff": {
          "name": "person in bed: dark skin tone",
          "shortname": ":person_in_bed_tone5:",
          "shortname_alternates": [
            ":person_in_bed_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "hotel",
            "sleep"
          ],
          "unicode_output": "1f6cc-1f3ff"
        },
        "1f9f8": {
          "name": "teddy bear",
          "shortname": ":teddy_bear:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f8"
        },
        "1f5bc": {
          "name": "framed picture",
          "shortname": ":frame_photo:",
          "shortname_alternates": [
            ":frame_with_picture:"
          ],
          "keywords": [
            "art",
            "frame",
            "museum",
            "painting",
            "picture"
          ],
          "unicode_output": "1f5bc"
        },
        "1f6cd": {
          "name": "shopping bags",
          "shortname": ":shopping_bags:",
          "shortname_alternates": [],
          "keywords": [
            "bag",
            "hotel",
            "shopping"
          ],
          "unicode_output": "1f6cd"
        },
        "1f6d2": {
          "name": "shopping cart",
          "shortname": ":shopping_cart:",
          "shortname_alternates": [
            ":shopping_trolley:"
          ],
          "keywords": [
            "cart",
            "shopping",
            "trolley"
          ],
          "unicode_output": "1f6d2"
        },
        "1f381": {
          "name": "wrapped gift",
          "shortname": ":gift:",
          "shortname_alternates": [],
          "keywords": [
            "box",
            "celebration",
            "gift",
            "present",
            "wrapped"
          ],
          "unicode_output": "1f381"
        },
        "1f388": {
          "name": "balloon",
          "shortname": ":balloon:",
          "shortname_alternates": [],
          "keywords": [
            "celebration"
          ],
          "unicode_output": "1f388"
        },
        "1f38f": {
          "name": "carp streamer",
          "shortname": ":flags:",
          "shortname_alternates": [],
          "keywords": [
            "carp",
            "celebration",
            "streamer"
          ],
          "unicode_output": "1f38f"
        },
        "1f380": {
          "name": "ribbon",
          "shortname": ":ribbon:",
          "shortname_alternates": [],
          "keywords": [
            "celebration"
          ],
          "unicode_output": "1f380"
        },
        "1f38a": {
          "name": "confetti ball",
          "shortname": ":confetti_ball:",
          "shortname_alternates": [],
          "keywords": [
            "ball",
            "celebration",
            "confetti"
          ],
          "unicode_output": "1f38a"
        },
        "1f389": {
          "name": "party popper",
          "shortname": ":tada:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "party",
            "popper",
            "tada"
          ],
          "unicode_output": "1f389"
        },
        "1f38e": {
          "name": "Japanese dolls",
          "shortname": ":dolls:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "celebration",
            "doll",
            "festival"
          ],
          "unicode_output": "1f38e"
        },
        "1f3ee": {
          "name": "red paper lantern",
          "shortname": ":izakaya_lantern:",
          "shortname_alternates": [],
          "keywords": [
            "bar",
            "lantern",
            "light",
            "red"
          ],
          "unicode_output": "1f3ee"
        },
        "1f390": {
          "name": "wind chime",
          "shortname": ":wind_chime:",
          "shortname_alternates": [],
          "keywords": [
            "bell",
            "celebration",
            "chime",
            "wind"
          ],
          "unicode_output": "1f390"
        },
        "1f9e7": {
          "name": "red envelope",
          "shortname": ":red_envelope:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9e7"
        },
        "2709": {
          "name": "envelope",
          "shortname": ":envelope:",
          "shortname_alternates": [],
          "keywords": [
            "email",
            "letter"
          ],
          "unicode_output": "2709"
        },
        "1f4e9": {
          "name": "envelope with arrow",
          "shortname": ":envelope_with_arrow:",
          "shortname_alternates": [],
          "keywords": [
            "arrow",
            "down",
            "e-mail",
            "email",
            "envelope",
            "letter",
            "mail",
            "outgoing",
            "sent"
          ],
          "unicode_output": "1f4e9"
        },
        "1f4e8": {
          "name": "incoming envelope",
          "shortname": ":incoming_envelope:",
          "shortname_alternates": [],
          "keywords": [
            "e-mail",
            "email",
            "envelope",
            "incoming",
            "letter",
            "mail",
            "receive"
          ],
          "unicode_output": "1f4e8"
        },
        "1f4e7": {
          "name": "e-mail",
          "shortname": ":e-mail:",
          "shortname_alternates": [
            ":email:"
          ],
          "keywords": [
            "email",
            "letter",
            "mail"
          ],
          "unicode_output": "1f4e7"
        },
        "1f48c": {
          "name": "love letter",
          "shortname": ":love_letter:",
          "shortname_alternates": [],
          "keywords": [
            "heart",
            "letter",
            "love",
            "mail"
          ],
          "unicode_output": "1f48c"
        },
        "1f4e5": {
          "name": "inbox tray",
          "shortname": ":inbox_tray:",
          "shortname_alternates": [],
          "keywords": [
            "box",
            "inbox",
            "letter",
            "mail",
            "receive",
            "tray"
          ],
          "unicode_output": "1f4e5"
        },
        "1f4e4": {
          "name": "outbox tray",
          "shortname": ":outbox_tray:",
          "shortname_alternates": [],
          "keywords": [
            "box",
            "letter",
            "mail",
            "outbox",
            "sent",
            "tray"
          ],
          "unicode_output": "1f4e4"
        },
        "1f4e6": {
          "name": "package",
          "shortname": ":package:",
          "shortname_alternates": [],
          "keywords": [
            "box",
            "parcel"
          ],
          "unicode_output": "1f4e6"
        },
        "1f3f7": {
          "name": "label",
          "shortname": ":label:",
          "shortname_alternates": [],
          "keywords": [
            "label"
          ],
          "unicode_output": "1f3f7"
        },
        "1f4ea": {
          "name": "closed mailbox with lowered flag",
          "shortname": ":mailbox_closed:",
          "shortname_alternates": [],
          "keywords": [
            "closed",
            "lowered",
            "mail",
            "mailbox",
            "postbox"
          ],
          "unicode_output": "1f4ea"
        },
        "1f4eb": {
          "name": "closed mailbox with raised flag",
          "shortname": ":mailbox:",
          "shortname_alternates": [],
          "keywords": [
            "closed",
            "mail",
            "mailbox",
            "postbox"
          ],
          "unicode_output": "1f4eb"
        },
        "1f4ec": {
          "name": "open mailbox with raised flag",
          "shortname": ":mailbox_with_mail:",
          "shortname_alternates": [],
          "keywords": [
            "mail",
            "mailbox",
            "open",
            "postbox"
          ],
          "unicode_output": "1f4ec"
        },
        "1f4ed": {
          "name": "open mailbox with lowered flag",
          "shortname": ":mailbox_with_no_mail:",
          "shortname_alternates": [],
          "keywords": [
            "lowered",
            "mail",
            "mailbox",
            "open",
            "postbox"
          ],
          "unicode_output": "1f4ed"
        },
        "1f4ee": {
          "name": "postbox",
          "shortname": ":postbox:",
          "shortname_alternates": [],
          "keywords": [
            "mail",
            "mailbox"
          ],
          "unicode_output": "1f4ee"
        },
        "1f4ef": {
          "name": "postal horn",
          "shortname": ":postal_horn:",
          "shortname_alternates": [],
          "keywords": [
            "horn",
            "post",
            "postal"
          ],
          "unicode_output": "1f4ef"
        },
        "1f4dc": {
          "name": "scroll",
          "shortname": ":scroll:",
          "shortname_alternates": [],
          "keywords": [
            "paper"
          ],
          "unicode_output": "1f4dc"
        },
        "1f4c3": {
          "name": "page with curl",
          "shortname": ":page_with_curl:",
          "shortname_alternates": [],
          "keywords": [
            "curl",
            "document",
            "page"
          ],
          "unicode_output": "1f4c3"
        },
        "1f4c4": {
          "name": "page facing up",
          "shortname": ":page_facing_up:",
          "shortname_alternates": [],
          "keywords": [
            "document",
            "page"
          ],
          "unicode_output": "1f4c4"
        },
        "1f9fe": {
          "name": "receipt",
          "shortname": ":receipt:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9fe"
        },
        "1f4d1": {
          "name": "bookmark tabs",
          "shortname": ":bookmark_tabs:",
          "shortname_alternates": [],
          "keywords": [
            "bookmark",
            "mark",
            "marker",
            "tabs"
          ],
          "unicode_output": "1f4d1"
        },
        "1f4ca": {
          "name": "bar chart",
          "shortname": ":bar_chart:",
          "shortname_alternates": [],
          "keywords": [
            "bar",
            "chart",
            "graph"
          ],
          "unicode_output": "1f4ca"
        },
        "1f4c8": {
          "name": "chart increasing",
          "shortname": ":chart_with_upwards_trend:",
          "shortname_alternates": [],
          "keywords": [
            "chart",
            "graph",
            "growth",
            "trend",
            "upward"
          ],
          "unicode_output": "1f4c8"
        },
        "1f4c9": {
          "name": "chart decreasing",
          "shortname": ":chart_with_downwards_trend:",
          "shortname_alternates": [],
          "keywords": [
            "chart",
            "down",
            "graph",
            "trend"
          ],
          "unicode_output": "1f4c9"
        },
        "1f5d2": {
          "name": "spiral notepad",
          "shortname": ":notepad_spiral:",
          "shortname_alternates": [
            ":spiral_note_pad:"
          ],
          "keywords": [
            "note",
            "pad",
            "spiral"
          ],
          "unicode_output": "1f5d2"
        },
        "1f5d3": {
          "name": "spiral calendar",
          "shortname": ":calendar_spiral:",
          "shortname_alternates": [
            ":spiral_calendar_pad:"
          ],
          "keywords": [
            "calendar",
            "pad",
            "spiral"
          ],
          "unicode_output": "1f5d3"
        },
        "1f4c6": {
          "name": "tear-off calendar",
          "shortname": ":calendar:",
          "shortname_alternates": [],
          "keywords": [
            "calendar"
          ],
          "unicode_output": "1f4c6"
        },
        "1f4c5": {
          "name": "calendar",
          "shortname": ":date:",
          "shortname_alternates": [],
          "keywords": [
            "date"
          ],
          "unicode_output": "1f4c5"
        },
        "1f4c7": {
          "name": "card index",
          "shortname": ":card_index:",
          "shortname_alternates": [],
          "keywords": [
            "card",
            "index",
            "rolodex"
          ],
          "unicode_output": "1f4c7"
        },
        "1f5c3": {
          "name": "card file box",
          "shortname": ":card_box:",
          "shortname_alternates": [
            ":card_file_box:"
          ],
          "keywords": [
            "box",
            "card",
            "file"
          ],
          "unicode_output": "1f5c3"
        },
        "1f5f3": {
          "name": "ballot box with ballot",
          "shortname": ":ballot_box:",
          "shortname_alternates": [
            ":ballot_box_with_ballot:"
          ],
          "keywords": [
            "ballot",
            "box"
          ],
          "unicode_output": "1f5f3"
        },
        "1f5c4": {
          "name": "file cabinet",
          "shortname": ":file_cabinet:",
          "shortname_alternates": [],
          "keywords": [
            "cabinet",
            "file",
            "filing"
          ],
          "unicode_output": "1f5c4"
        },
        "1f4cb": {
          "name": "clipboard",
          "shortname": ":clipboard:",
          "shortname_alternates": [],
          "keywords": [
            "clipboard"
          ],
          "unicode_output": "1f4cb"
        },
        "1f4c1": {
          "name": "file folder",
          "shortname": ":file_folder:",
          "shortname_alternates": [],
          "keywords": [
            "file",
            "folder"
          ],
          "unicode_output": "1f4c1"
        },
        "1f4c2": {
          "name": "open file folder",
          "shortname": ":open_file_folder:",
          "shortname_alternates": [],
          "keywords": [
            "file",
            "folder",
            "open"
          ],
          "unicode_output": "1f4c2"
        },
        "1f5c2": {
          "name": "card index dividers",
          "shortname": ":dividers:",
          "shortname_alternates": [
            ":card_index_dividers:"
          ],
          "keywords": [
            "card",
            "dividers",
            "index"
          ],
          "unicode_output": "1f5c2"
        },
        "1f5de": {
          "name": "rolled-up newspaper",
          "shortname": ":newspaper2:",
          "shortname_alternates": [
            ":rolled_up_newspaper:"
          ],
          "keywords": [
            "news",
            "newspaper",
            "paper",
            "rolled"
          ],
          "unicode_output": "1f5de"
        },
        "1f4f0": {
          "name": "newspaper",
          "shortname": ":newspaper:",
          "shortname_alternates": [],
          "keywords": [
            "news",
            "paper"
          ],
          "unicode_output": "1f4f0"
        },
        "1f4d3": {
          "name": "notebook",
          "shortname": ":notebook:",
          "shortname_alternates": [],
          "keywords": [
            "notebook"
          ],
          "unicode_output": "1f4d3"
        },
        "1f4d4": {
          "name": "notebook with decorative cover",
          "shortname": ":notebook_with_decorative_cover:",
          "shortname_alternates": [],
          "keywords": [
            "book",
            "cover",
            "decorated",
            "notebook"
          ],
          "unicode_output": "1f4d4"
        },
        "1f4d2": {
          "name": "ledger",
          "shortname": ":ledger:",
          "shortname_alternates": [],
          "keywords": [
            "notebook"
          ],
          "unicode_output": "1f4d2"
        },
        "1f4d5": {
          "name": "closed book",
          "shortname": ":closed_book:",
          "shortname_alternates": [],
          "keywords": [
            "book",
            "closed"
          ],
          "unicode_output": "1f4d5"
        },
        "1f4d7": {
          "name": "green book",
          "shortname": ":green_book:",
          "shortname_alternates": [],
          "keywords": [
            "book",
            "green"
          ],
          "unicode_output": "1f4d7"
        },
        "1f4d8": {
          "name": "blue book",
          "shortname": ":blue_book:",
          "shortname_alternates": [],
          "keywords": [
            "blue",
            "book"
          ],
          "unicode_output": "1f4d8"
        },
        "1f4d9": {
          "name": "orange book",
          "shortname": ":orange_book:",
          "shortname_alternates": [],
          "keywords": [
            "book",
            "orange"
          ],
          "unicode_output": "1f4d9"
        },
        "1f4da": {
          "name": "books",
          "shortname": ":books:",
          "shortname_alternates": [],
          "keywords": [
            "book"
          ],
          "unicode_output": "1f4da"
        },
        "1f4d6": {
          "name": "open book",
          "shortname": ":book:",
          "shortname_alternates": [],
          "keywords": [
            "book",
            "open"
          ],
          "unicode_output": "1f4d6"
        },
        "1f516": {
          "name": "bookmark",
          "shortname": ":bookmark:",
          "shortname_alternates": [],
          "keywords": [
            "mark"
          ],
          "unicode_output": "1f516"
        },
        "1f517": {
          "name": "link",
          "shortname": ":link:",
          "shortname_alternates": [],
          "keywords": [
            "link"
          ],
          "unicode_output": "1f517"
        },
        "1f4ce": {
          "name": "paperclip",
          "shortname": ":paperclip:",
          "shortname_alternates": [],
          "keywords": [
            "paperclip"
          ],
          "unicode_output": "1f4ce"
        },
        "1f587": {
          "name": "linked paperclips",
          "shortname": ":paperclips:",
          "shortname_alternates": [
            ":linked_paperclips:"
          ],
          "keywords": [
            "link",
            "paperclip"
          ],
          "unicode_output": "1f587"
        },
        "1f4d0": {
          "name": "triangular ruler",
          "shortname": ":triangular_ruler:",
          "shortname_alternates": [],
          "keywords": [
            "ruler",
            "set",
            "triangle"
          ],
          "unicode_output": "1f4d0"
        },
        "1f4cf": {
          "name": "straight ruler",
          "shortname": ":straight_ruler:",
          "shortname_alternates": [],
          "keywords": [
            "ruler",
            "straight edge"
          ],
          "unicode_output": "1f4cf"
        },
        "1f9f7": {
          "name": "safety pin",
          "shortname": ":safety_pin:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f7"
        },
        "1f4cc": {
          "name": "pushpin",
          "shortname": ":pushpin:",
          "shortname_alternates": [],
          "keywords": [
            "pin"
          ],
          "unicode_output": "1f4cc"
        },
        "1f4cd": {
          "name": "round pushpin",
          "shortname": ":round_pushpin:",
          "shortname_alternates": [],
          "keywords": [
            "pin",
            "pushpin"
          ],
          "unicode_output": "1f4cd"
        },
        "2702": {
          "name": "scissors",
          "shortname": ":scissors:",
          "shortname_alternates": [],
          "keywords": [
            "cutting",
            "tool"
          ],
          "unicode_output": "2702"
        },
        "1f58a": {
          "name": "pen",
          "shortname": ":pen_ballpoint:",
          "shortname_alternates": [
            ":lower_left_ballpoint_pen:"
          ],
          "keywords": [
            "ballpoint"
          ],
          "unicode_output": "1f58a"
        },
        "1f58b": {
          "name": "fountain pen",
          "shortname": ":pen_fountain:",
          "shortname_alternates": [
            ":lower_left_fountain_pen:"
          ],
          "keywords": [
            "fountain",
            "pen"
          ],
          "unicode_output": "1f58b"
        },
        "2712": {
          "name": "black nib",
          "shortname": ":black_nib:",
          "shortname_alternates": [],
          "keywords": [
            "nib",
            "pen"
          ],
          "unicode_output": "2712"
        },
        "1f58c": {
          "name": "paintbrush",
          "shortname": ":paintbrush:",
          "shortname_alternates": [
            ":lower_left_paintbrush:"
          ],
          "keywords": [
            "painting"
          ],
          "unicode_output": "1f58c"
        },
        "1f58d": {
          "name": "crayon",
          "shortname": ":crayon:",
          "shortname_alternates": [
            ":lower_left_crayon:"
          ],
          "keywords": [
            "crayon"
          ],
          "unicode_output": "1f58d"
        },
        "1f4dd": {
          "name": "memo",
          "shortname": ":pencil:",
          "shortname_alternates": [
            ":memo:"
          ],
          "keywords": [
            "pencil"
          ],
          "unicode_output": "1f4dd"
        },
        "270f": {
          "name": "pencil",
          "shortname": ":pencil2:",
          "shortname_alternates": [],
          "keywords": [
            "pencil"
          ],
          "unicode_output": "270f"
        },
        "1f50d": {
          "name": "magnifying glass tilted left",
          "shortname": ":mag:",
          "shortname_alternates": [],
          "keywords": [
            "glass",
            "magnifying",
            "search",
            "tool"
          ],
          "unicode_output": "1f50d"
        },
        "1f50e": {
          "name": "magnifying glass tilted right",
          "shortname": ":mag_right:",
          "shortname_alternates": [],
          "keywords": [
            "glass",
            "magnifying",
            "search",
            "tool"
          ],
          "unicode_output": "1f50e"
        },
        "1f50f": {
          "name": "locked with pen",
          "shortname": ":lock_with_ink_pen:",
          "shortname_alternates": [],
          "keywords": [
            "ink",
            "lock",
            "nib",
            "pen",
            "privacy"
          ],
          "unicode_output": "1f50f"
        },
        "1f510": {
          "name": "locked with key",
          "shortname": ":closed_lock_with_key:",
          "shortname_alternates": [],
          "keywords": [
            "closed",
            "key",
            "lock",
            "secure"
          ],
          "unicode_output": "1f510"
        },
        "1f436": {
          "name": "dog face",
          "shortname": ":dog:",
          "shortname_alternates": [],
          "keywords": [
            "dog",
            "face",
            "pet"
          ],
          "unicode_output": "1f436"
        },
        "1f431": {
          "name": "cat face",
          "shortname": ":cat:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "face",
            "pet"
          ],
          "unicode_output": "1f431"
        },
        "1f42d": {
          "name": "mouse face",
          "shortname": ":mouse:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "mouse"
          ],
          "unicode_output": "1f42d"
        },
        "1f439": {
          "name": "hamster face",
          "shortname": ":hamster:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "hamster",
            "pet"
          ],
          "unicode_output": "1f439"
        },
        "1f430": {
          "name": "rabbit face",
          "shortname": ":rabbit:",
          "shortname_alternates": [],
          "keywords": [
            "bunny",
            "face",
            "pet",
            "rabbit"
          ],
          "unicode_output": "1f430"
        },
        "1f98a": {
          "name": "fox face",
          "shortname": ":fox:",
          "shortname_alternates": [
            ":fox_face:"
          ],
          "keywords": [
            "face",
            "fox"
          ],
          "unicode_output": "1f98a"
        },
        "1f99d": {
          "name": "raccoon",
          "shortname": ":raccoon:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f99d"
        },
        "1f43b": {
          "name": "bear face",
          "shortname": ":bear:",
          "shortname_alternates": [],
          "keywords": [
            "bear",
            "face"
          ],
          "unicode_output": "1f43b"
        },
        "1f43c": {
          "name": "panda face",
          "shortname": ":panda_face:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "panda"
          ],
          "unicode_output": "1f43c"
        },
        "1f998": {
          "name": "kangaroo",
          "shortname": ":kangaroo:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f998"
        },
        "1f9a1": {
          "name": "badger",
          "shortname": ":badger:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9a1"
        },
        "1f428": {
          "name": "koala",
          "shortname": ":koala:",
          "shortname_alternates": [],
          "keywords": [
            "bear"
          ],
          "unicode_output": "1f428"
        },
        "1f42f": {
          "name": "tiger face",
          "shortname": ":tiger:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "tiger"
          ],
          "unicode_output": "1f42f"
        },
        "1f981": {
          "name": "lion face",
          "shortname": ":lion_face:",
          "shortname_alternates": [
            ":lion:"
          ],
          "keywords": [
            "Leo",
            "face",
            "lion",
            "zodiac"
          ],
          "unicode_output": "1f981"
        },
        "1f42e": {
          "name": "cow face",
          "shortname": ":cow:",
          "shortname_alternates": [],
          "keywords": [
            "cow",
            "face"
          ],
          "unicode_output": "1f42e"
        },
        "1f437": {
          "name": "pig face",
          "shortname": ":pig:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "pig"
          ],
          "unicode_output": "1f437"
        },
        "1f43d": {
          "name": "pig nose",
          "shortname": ":pig_nose:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "nose",
            "pig"
          ],
          "unicode_output": "1f43d"
        },
        "1f438": {
          "name": "frog face",
          "shortname": ":frog:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "frog"
          ],
          "unicode_output": "1f438"
        },
        "1f435": {
          "name": "monkey face",
          "shortname": ":monkey_face:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "monkey"
          ],
          "unicode_output": "1f435"
        },
        "1f648": {
          "name": "see-no-evil monkey",
          "shortname": ":see_no_evil:",
          "shortname_alternates": [],
          "keywords": [
            "evil",
            "face",
            "forbidden",
            "gesture",
            "monkey",
            "no",
            "not",
            "prohibited",
            "see"
          ],
          "unicode_output": "1f648"
        },
        "1f649": {
          "name": "hear-no-evil monkey",
          "shortname": ":hear_no_evil:",
          "shortname_alternates": [],
          "keywords": [
            "evil",
            "face",
            "forbidden",
            "gesture",
            "hear",
            "monkey",
            "no",
            "not",
            "prohibited"
          ],
          "unicode_output": "1f649"
        },
        "1f64a": {
          "name": "speak-no-evil monkey",
          "shortname": ":speak_no_evil:",
          "shortname_alternates": [],
          "keywords": [
            "evil",
            "face",
            "forbidden",
            "gesture",
            "monkey",
            "no",
            "not",
            "prohibited",
            "speak"
          ],
          "unicode_output": "1f64a"
        },
        "1f412": {
          "name": "monkey",
          "shortname": ":monkey:",
          "shortname_alternates": [],
          "keywords": [
            "monkey"
          ],
          "unicode_output": "1f412"
        },
        "1f414": {
          "name": "chicken",
          "shortname": ":chicken:",
          "shortname_alternates": [],
          "keywords": [
            "bird",
            "chicken"
          ],
          "unicode_output": "1f414"
        },
        "1f427": {
          "name": "penguin",
          "shortname": ":penguin:",
          "shortname_alternates": [],
          "keywords": [
            "bird",
            "penguin"
          ],
          "unicode_output": "1f427"
        },
        "1f426": {
          "name": "bird",
          "shortname": ":bird:",
          "shortname_alternates": [],
          "keywords": [
            "bird"
          ],
          "unicode_output": "1f426"
        },
        "1f424": {
          "name": "baby chick",
          "shortname": ":baby_chick:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "bird",
            "chick"
          ],
          "unicode_output": "1f424"
        },
        "1f423": {
          "name": "hatching chick",
          "shortname": ":hatching_chick:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "bird",
            "chick",
            "hatching"
          ],
          "unicode_output": "1f423"
        },
        "1f425": {
          "name": "front-facing baby chick",
          "shortname": ":hatched_chick:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "bird",
            "chick"
          ],
          "unicode_output": "1f425"
        },
        "1f986": {
          "name": "duck",
          "shortname": ":duck:",
          "shortname_alternates": [],
          "keywords": [
            "bird",
            "duck"
          ],
          "unicode_output": "1f986"
        },
        "1f9a2": {
          "name": "swan",
          "shortname": ":swan:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9a2"
        },
        "1f985": {
          "name": "eagle",
          "shortname": ":eagle:",
          "shortname_alternates": [],
          "keywords": [
            "bird",
            "eagle"
          ],
          "unicode_output": "1f985"
        },
        "1f989": {
          "name": "owl",
          "shortname": ":owl:",
          "shortname_alternates": [],
          "keywords": [
            "bird",
            "owl",
            "wise"
          ],
          "unicode_output": "1f989"
        },
        "1f99c": {
          "name": "parrot",
          "shortname": ":parrot:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f99c"
        },
        "1f99a": {
          "name": "peacock",
          "shortname": ":peacock:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f99a"
        },
        "1f987": {
          "name": "bat",
          "shortname": ":bat:",
          "shortname_alternates": [],
          "keywords": [
            "bat",
            "vampire"
          ],
          "unicode_output": "1f987"
        },
        "1f43a": {
          "name": "wolf face",
          "shortname": ":wolf:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "wolf"
          ],
          "unicode_output": "1f43a"
        },
        "1f417": {
          "name": "boar",
          "shortname": ":boar:",
          "shortname_alternates": [],
          "keywords": [
            "pig"
          ],
          "unicode_output": "1f417"
        },
        "1f434": {
          "name": "horse face",
          "shortname": ":horse:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "horse"
          ],
          "unicode_output": "1f434"
        },
        "1f984": {
          "name": "unicorn face",
          "shortname": ":unicorn:",
          "shortname_alternates": [
            ":unicorn_face:"
          ],
          "keywords": [
            "face",
            "unicorn"
          ],
          "unicode_output": "1f984"
        },
        "1f41d": {
          "name": "honeybee",
          "shortname": ":bee:",
          "shortname_alternates": [],
          "keywords": [
            "bee",
            "insect"
          ],
          "unicode_output": "1f41d"
        },
        "1f41b": {
          "name": "bug",
          "shortname": ":bug:",
          "shortname_alternates": [],
          "keywords": [
            "insect"
          ],
          "unicode_output": "1f41b"
        },
        "1f98b": {
          "name": "butterfly",
          "shortname": ":butterfly:",
          "shortname_alternates": [],
          "keywords": [
            "butterfly",
            "insect",
            "pretty"
          ],
          "unicode_output": "1f98b"
        },
        "1f40c": {
          "name": "snail",
          "shortname": ":snail:",
          "shortname_alternates": [],
          "keywords": [
            "snail"
          ],
          "unicode_output": "1f40c"
        },
        "1f41a": {
          "name": "spiral shell",
          "shortname": ":shell:",
          "shortname_alternates": [],
          "keywords": [
            "shell",
            "spiral"
          ],
          "unicode_output": "1f41a"
        },
        "1f41e": {
          "name": "lady beetle",
          "shortname": ":beetle:",
          "shortname_alternates": [],
          "keywords": [
            "beetle",
            "insect",
            "ladybird",
            "ladybug"
          ],
          "unicode_output": "1f41e"
        },
        "1f41c": {
          "name": "ant",
          "shortname": ":ant:",
          "shortname_alternates": [],
          "keywords": [
            "insect"
          ],
          "unicode_output": "1f41c"
        },
        "1f997": {
          "name": "cricket",
          "shortname": ":cricket:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f997"
        },
        "1f577": {
          "name": "spider",
          "shortname": ":spider:",
          "shortname_alternates": [],
          "keywords": [
            "insect"
          ],
          "unicode_output": "1f577"
        },
        "1f578": {
          "name": "spider web",
          "shortname": ":spider_web:",
          "shortname_alternates": [],
          "keywords": [
            "spider",
            "web"
          ],
          "unicode_output": "1f578"
        },
        "1f982": {
          "name": "scorpion",
          "shortname": ":scorpion:",
          "shortname_alternates": [],
          "keywords": [
            "Scorpius",
            "scorpio",
            "zodiac"
          ],
          "unicode_output": "1f982"
        },
        "1f99f": {
          "name": "mosquito",
          "shortname": ":mosquito:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f99f"
        },
        "1f9a0": {
          "name": "microbe",
          "shortname": ":microbe:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9a0"
        },
        "1f422": {
          "name": "turtle",
          "shortname": ":turtle:",
          "shortname_alternates": [],
          "keywords": [
            "terrapin",
            "tortoise",
            "turtle"
          ],
          "unicode_output": "1f422"
        },
        "1f40d": {
          "name": "snake",
          "shortname": ":snake:",
          "shortname_alternates": [],
          "keywords": [
            "Ophiuchus",
            "bearer",
            "serpent",
            "zodiac"
          ],
          "unicode_output": "1f40d"
        },
        "1f98e": {
          "name": "lizard",
          "shortname": ":lizard:",
          "shortname_alternates": [],
          "keywords": [
            "lizard",
            "reptile"
          ],
          "unicode_output": "1f98e"
        },
        "1f996": {
          "name": "T-Rex",
          "shortname": ":t_rex:",
          "shortname_alternates": [],
          "keywords": [
            "Tyrannosaurus Rex"
          ],
          "unicode_output": "1f996"
        },
        "1f995": {
          "name": "sauropod",
          "shortname": ":sauropod:",
          "shortname_alternates": [],
          "keywords": [
            "brachiosaurus",
            "brontosaurus",
            "diplodocus"
          ],
          "unicode_output": "1f995"
        },
        "1f419": {
          "name": "octopus",
          "shortname": ":octopus:",
          "shortname_alternates": [],
          "keywords": [
            "octopus"
          ],
          "unicode_output": "1f419"
        },
        "1f991": {
          "name": "squid",
          "shortname": ":squid:",
          "shortname_alternates": [],
          "keywords": [
            "food",
            "molusc",
            "squid"
          ],
          "unicode_output": "1f991"
        },
        "1f990": {
          "name": "shrimp",
          "shortname": ":shrimp:",
          "shortname_alternates": [],
          "keywords": [
            "food",
            "shellfish",
            "shrimp",
            "small"
          ],
          "unicode_output": "1f990"
        },
        "1f980": {
          "name": "crab",
          "shortname": ":crab:",
          "shortname_alternates": [],
          "keywords": [
            "Cancer",
            "zodiac"
          ],
          "unicode_output": "1f980"
        },
        "1f99e": {
          "name": "lobster",
          "shortname": ":lobster:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f99e"
        },
        "1f421": {
          "name": "blowfish",
          "shortname": ":blowfish:",
          "shortname_alternates": [],
          "keywords": [
            "fish"
          ],
          "unicode_output": "1f421"
        },
        "1f420": {
          "name": "tropical fish",
          "shortname": ":tropical_fish:",
          "shortname_alternates": [],
          "keywords": [
            "fish",
            "tropical"
          ],
          "unicode_output": "1f420"
        },
        "1f41f": {
          "name": "fish",
          "shortname": ":fish:",
          "shortname_alternates": [],
          "keywords": [
            "Pisces",
            "zodiac"
          ],
          "unicode_output": "1f41f"
        },
        "1f42c": {
          "name": "dolphin",
          "shortname": ":dolphin:",
          "shortname_alternates": [],
          "keywords": [
            "flipper"
          ],
          "unicode_output": "1f42c"
        },
        "1f433": {
          "name": "spouting whale",
          "shortname": ":whale:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "spouting",
            "whale"
          ],
          "unicode_output": "1f433"
        },
        "1f40b": {
          "name": "whale",
          "shortname": ":whale2:",
          "shortname_alternates": [],
          "keywords": [
            "whale"
          ],
          "unicode_output": "1f40b"
        },
        "1f988": {
          "name": "shark",
          "shortname": ":shark:",
          "shortname_alternates": [],
          "keywords": [
            "fish",
            "shark"
          ],
          "unicode_output": "1f988"
        },
        "1f40a": {
          "name": "crocodile",
          "shortname": ":crocodile:",
          "shortname_alternates": [],
          "keywords": [
            "crocodile"
          ],
          "unicode_output": "1f40a"
        },
        "1f405": {
          "name": "tiger",
          "shortname": ":tiger2:",
          "shortname_alternates": [],
          "keywords": [
            "tiger"
          ],
          "unicode_output": "1f405"
        },
        "1f406": {
          "name": "leopard",
          "shortname": ":leopard:",
          "shortname_alternates": [],
          "keywords": [
            "leopard"
          ],
          "unicode_output": "1f406"
        },
        "1f993": {
          "name": "zebra",
          "shortname": ":zebra:",
          "shortname_alternates": [],
          "keywords": [
            "stripe"
          ],
          "unicode_output": "1f993"
        },
        "1f98d": {
          "name": "gorilla",
          "shortname": ":gorilla:",
          "shortname_alternates": [],
          "keywords": [
            "gorilla"
          ],
          "unicode_output": "1f98d"
        },
        "1f418": {
          "name": "elephant",
          "shortname": ":elephant:",
          "shortname_alternates": [],
          "keywords": [
            "elephant"
          ],
          "unicode_output": "1f418"
        },
        "1f98f": {
          "name": "rhinoceros",
          "shortname": ":rhino:",
          "shortname_alternates": [
            ":rhinoceros:"
          ],
          "keywords": [
            "rhinoceros"
          ],
          "unicode_output": "1f98f"
        },
        "1f99b": {
          "name": "hippopotamus",
          "shortname": ":hippopotamus:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f99b"
        },
        "1f42a": {
          "name": "camel",
          "shortname": ":dromedary_camel:",
          "shortname_alternates": [],
          "keywords": [
            "dromedary",
            "hump"
          ],
          "unicode_output": "1f42a"
        },
        "1f42b": {
          "name": "two-hump camel",
          "shortname": ":camel:",
          "shortname_alternates": [],
          "keywords": [
            "bactrian",
            "camel",
            "hump"
          ],
          "unicode_output": "1f42b"
        },
        "1f992": {
          "name": "giraffe",
          "shortname": ":giraffe:",
          "shortname_alternates": [],
          "keywords": [
            "spots"
          ],
          "unicode_output": "1f992"
        },
        "1f999": {
          "name": "llama",
          "shortname": ":llama:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f999"
        },
        "1f403": {
          "name": "water buffalo",
          "shortname": ":water_buffalo:",
          "shortname_alternates": [],
          "keywords": [
            "buffalo",
            "water"
          ],
          "unicode_output": "1f403"
        },
        "1f402": {
          "name": "ox",
          "shortname": ":ox:",
          "shortname_alternates": [],
          "keywords": [
            "Taurus",
            "bull",
            "zodiac"
          ],
          "unicode_output": "1f402"
        },
        "1f404": {
          "name": "cow",
          "shortname": ":cow2:",
          "shortname_alternates": [],
          "keywords": [
            "cow"
          ],
          "unicode_output": "1f404"
        },
        "1f40e": {
          "name": "horse",
          "shortname": ":racehorse:",
          "shortname_alternates": [],
          "keywords": [
            "equestrian",
            "racehorse",
            "racing"
          ],
          "unicode_output": "1f40e"
        },
        "1f416": {
          "name": "pig",
          "shortname": ":pig2:",
          "shortname_alternates": [],
          "keywords": [
            "sow"
          ],
          "unicode_output": "1f416"
        },
        "1f40f": {
          "name": "ram",
          "shortname": ":ram:",
          "shortname_alternates": [],
          "keywords": [
            "Aries",
            "male",
            "sheep",
            "zodiac"
          ],
          "unicode_output": "1f40f"
        },
        "1f411": {
          "name": "ewe",
          "shortname": ":sheep:",
          "shortname_alternates": [],
          "keywords": [
            "female",
            "sheep"
          ],
          "unicode_output": "1f411"
        },
        "1f410": {
          "name": "goat",
          "shortname": ":goat:",
          "shortname_alternates": [],
          "keywords": [
            "Capricorn",
            "zodiac"
          ],
          "unicode_output": "1f410"
        },
        "1f98c": {
          "name": "deer",
          "shortname": ":deer:",
          "shortname_alternates": [],
          "keywords": [
            "deer"
          ],
          "unicode_output": "1f98c"
        },
        "1f415": {
          "name": "dog",
          "shortname": ":dog2:",
          "shortname_alternates": [],
          "keywords": [
            "pet"
          ],
          "unicode_output": "1f415"
        },
        "1f429": {
          "name": "poodle",
          "shortname": ":poodle:",
          "shortname_alternates": [],
          "keywords": [
            "dog"
          ],
          "unicode_output": "1f429"
        },
        "1f408": {
          "name": "cat",
          "shortname": ":cat2:",
          "shortname_alternates": [],
          "keywords": [
            "pet"
          ],
          "unicode_output": "1f408"
        },
        "1f413": {
          "name": "rooster",
          "shortname": ":rooster:",
          "shortname_alternates": [],
          "keywords": [
            "bird",
            "rooster"
          ],
          "unicode_output": "1f413"
        },
        "1f983": {
          "name": "turkey",
          "shortname": ":turkey:",
          "shortname_alternates": [],
          "keywords": [
            "bird",
            "turkey"
          ],
          "unicode_output": "1f983"
        },
        "1f54a": {
          "name": "dove",
          "shortname": ":dove:",
          "shortname_alternates": [
            ":dove_of_peace:"
          ],
          "keywords": [
            "bird",
            "fly",
            "peace"
          ],
          "unicode_output": "1f54a"
        },
        "1f407": {
          "name": "rabbit",
          "shortname": ":rabbit2:",
          "shortname_alternates": [],
          "keywords": [
            "bunny",
            "pet"
          ],
          "unicode_output": "1f407"
        },
        "1f401": {
          "name": "mouse",
          "shortname": ":mouse2:",
          "shortname_alternates": [],
          "keywords": [
            "mouse"
          ],
          "unicode_output": "1f401"
        },
        "1f400": {
          "name": "rat",
          "shortname": ":rat:",
          "shortname_alternates": [],
          "keywords": [
            "rat"
          ],
          "unicode_output": "1f400"
        },
        "1f43f": {
          "name": "chipmunk",
          "shortname": ":chipmunk:",
          "shortname_alternates": [],
          "keywords": [
            "chipmunk"
          ],
          "unicode_output": "1f43f"
        },
        "1f994": {
          "name": "hedgehog",
          "shortname": ":hedgehog:",
          "shortname_alternates": [],
          "keywords": [
            "spiny"
          ],
          "unicode_output": "1f994"
        },
        "1f43e": {
          "name": "paw prints",
          "shortname": ":feet:",
          "shortname_alternates": [
            ":paw_prints:"
          ],
          "keywords": [
            "feet",
            "paw",
            "print"
          ],
          "unicode_output": "1f43e"
        },
        "1f409": {
          "name": "dragon",
          "shortname": ":dragon:",
          "shortname_alternates": [],
          "keywords": [
            "fairy tale"
          ],
          "unicode_output": "1f409"
        },
        "1f432": {
          "name": "dragon face",
          "shortname": ":dragon_face:",
          "shortname_alternates": [],
          "keywords": [
            "dragon",
            "face",
            "fairy tale"
          ],
          "unicode_output": "1f432"
        },
        "1f335": {
          "name": "cactus",
          "shortname": ":cactus:",
          "shortname_alternates": [],
          "keywords": [
            "plant"
          ],
          "unicode_output": "1f335"
        },
        "1f384": {
          "name": "Christmas tree",
          "shortname": ":christmas_tree:",
          "shortname_alternates": [],
          "keywords": [
            "Christmas",
            "celebration",
            "tree"
          ],
          "unicode_output": "1f384"
        },
        "1f332": {
          "name": "evergreen tree",
          "shortname": ":evergreen_tree:",
          "shortname_alternates": [],
          "keywords": [
            "tree"
          ],
          "unicode_output": "1f332"
        },
        "1f333": {
          "name": "deciduous tree",
          "shortname": ":deciduous_tree:",
          "shortname_alternates": [],
          "keywords": [
            "deciduous",
            "shedding",
            "tree"
          ],
          "unicode_output": "1f333"
        },
        "1f334": {
          "name": "palm tree",
          "shortname": ":palm_tree:",
          "shortname_alternates": [],
          "keywords": [
            "palm",
            "tree"
          ],
          "unicode_output": "1f334"
        },
        "1f331": {
          "name": "seedling",
          "shortname": ":seedling:",
          "shortname_alternates": [],
          "keywords": [
            "young"
          ],
          "unicode_output": "1f331"
        },
        "1f33f": {
          "name": "herb",
          "shortname": ":herb:",
          "shortname_alternates": [],
          "keywords": [
            "leaf"
          ],
          "unicode_output": "1f33f"
        },
        "2618": {
          "name": "shamrock",
          "shortname": ":shamrock:",
          "shortname_alternates": [],
          "keywords": [
            "plant"
          ],
          "unicode_output": "2618"
        },
        "1f340": {
          "name": "four leaf clover",
          "shortname": ":four_leaf_clover:",
          "shortname_alternates": [],
          "keywords": [
            "4",
            "clover",
            "four",
            "leaf"
          ],
          "unicode_output": "1f340"
        },
        "1f38d": {
          "name": "pine decoration",
          "shortname": ":bamboo:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "bamboo",
            "celebration",
            "pine"
          ],
          "unicode_output": "1f38d"
        },
        "1f38b": {
          "name": "tanabata tree",
          "shortname": ":tanabata_tree:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "banner",
            "celebration",
            "tree"
          ],
          "unicode_output": "1f38b"
        },
        "1f343": {
          "name": "leaf fluttering in wind",
          "shortname": ":leaves:",
          "shortname_alternates": [],
          "keywords": [
            "blow",
            "flutter",
            "leaf",
            "wind"
          ],
          "unicode_output": "1f343"
        },
        "1f342": {
          "name": "fallen leaf",
          "shortname": ":fallen_leaf:",
          "shortname_alternates": [],
          "keywords": [
            "falling",
            "leaf"
          ],
          "unicode_output": "1f342"
        },
        "1f341": {
          "name": "maple leaf",
          "shortname": ":maple_leaf:",
          "shortname_alternates": [],
          "keywords": [
            "falling",
            "leaf",
            "maple"
          ],
          "unicode_output": "1f341"
        },
        "1f344": {
          "name": "mushroom",
          "shortname": ":mushroom:",
          "shortname_alternates": [],
          "keywords": [
            "toadstool"
          ],
          "unicode_output": "1f344"
        },
        "1f33e": {
          "name": "sheaf of rice",
          "shortname": ":ear_of_rice:",
          "shortname_alternates": [],
          "keywords": [
            "ear",
            "grain",
            "rice"
          ],
          "unicode_output": "1f33e"
        },
        "1f490": {
          "name": "bouquet",
          "shortname": ":bouquet:",
          "shortname_alternates": [],
          "keywords": [
            "flower"
          ],
          "unicode_output": "1f490"
        },
        "1f337": {
          "name": "tulip",
          "shortname": ":tulip:",
          "shortname_alternates": [],
          "keywords": [
            "flower"
          ],
          "unicode_output": "1f337"
        },
        "1f339": {
          "name": "rose",
          "shortname": ":rose:",
          "shortname_alternates": [],
          "keywords": [
            "flower"
          ],
          "unicode_output": "1f339"
        },
        "1f940": {
          "name": "wilted flower",
          "shortname": ":wilted_rose:",
          "shortname_alternates": [
            ":wilted_flower:"
          ],
          "keywords": [
            "flower",
            "wilted"
          ],
          "unicode_output": "1f940"
        },
        "1f33a": {
          "name": "hibiscus",
          "shortname": ":hibiscus:",
          "shortname_alternates": [],
          "keywords": [
            "flower"
          ],
          "unicode_output": "1f33a"
        },
        "1f338": {
          "name": "cherry blossom",
          "shortname": ":cherry_blossom:",
          "shortname_alternates": [],
          "keywords": [
            "blossom",
            "cherry",
            "flower"
          ],
          "unicode_output": "1f338"
        },
        "1f33c": {
          "name": "blossom",
          "shortname": ":blossom:",
          "shortname_alternates": [],
          "keywords": [
            "flower"
          ],
          "unicode_output": "1f33c"
        },
        "1f33b": {
          "name": "sunflower",
          "shortname": ":sunflower:",
          "shortname_alternates": [],
          "keywords": [
            "flower",
            "sun"
          ],
          "unicode_output": "1f33b"
        },
        "1f31e": {
          "name": "sun with face",
          "shortname": ":sun_with_face:",
          "shortname_alternates": [],
          "keywords": [
            "bright",
            "face",
            "sun"
          ],
          "unicode_output": "1f31e"
        },
        "1f31d": {
          "name": "full moon face",
          "shortname": ":full_moon_with_face:",
          "shortname_alternates": [],
          "keywords": [
            "bright",
            "face",
            "full",
            "moon"
          ],
          "unicode_output": "1f31d"
        },
        "1f31b": {
          "name": "first quarter moon face",
          "shortname": ":first_quarter_moon_with_face:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "moon",
            "quarter"
          ],
          "unicode_output": "1f31b"
        },
        "1f31c": {
          "name": "last quarter moon face",
          "shortname": ":last_quarter_moon_with_face:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "moon",
            "quarter"
          ],
          "unicode_output": "1f31c"
        },
        "1f31a": {
          "name": "new moon face",
          "shortname": ":new_moon_with_face:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "moon"
          ],
          "unicode_output": "1f31a"
        },
        "1f315": {
          "name": "full moon",
          "shortname": ":full_moon:",
          "shortname_alternates": [],
          "keywords": [
            "full",
            "moon"
          ],
          "unicode_output": "1f315"
        },
        "1f316": {
          "name": "waning gibbous moon",
          "shortname": ":waning_gibbous_moon:",
          "shortname_alternates": [],
          "keywords": [
            "gibbous",
            "moon",
            "waning"
          ],
          "unicode_output": "1f316"
        },
        "1f317": {
          "name": "last quarter moon",
          "shortname": ":last_quarter_moon:",
          "shortname_alternates": [],
          "keywords": [
            "moon",
            "quarter"
          ],
          "unicode_output": "1f317"
        },
        "1f318": {
          "name": "waning crescent moon",
          "shortname": ":waning_crescent_moon:",
          "shortname_alternates": [],
          "keywords": [
            "crescent",
            "moon",
            "waning"
          ],
          "unicode_output": "1f318"
        },
        "1f311": {
          "name": "new moon",
          "shortname": ":new_moon:",
          "shortname_alternates": [],
          "keywords": [
            "dark",
            "moon"
          ],
          "unicode_output": "1f311"
        },
        "1f312": {
          "name": "waxing crescent moon",
          "shortname": ":waxing_crescent_moon:",
          "shortname_alternates": [],
          "keywords": [
            "crescent",
            "moon",
            "waxing"
          ],
          "unicode_output": "1f312"
        },
        "1f313": {
          "name": "first quarter moon",
          "shortname": ":first_quarter_moon:",
          "shortname_alternates": [],
          "keywords": [
            "moon",
            "quarter"
          ],
          "unicode_output": "1f313"
        },
        "1f314": {
          "name": "waxing gibbous moon",
          "shortname": ":waxing_gibbous_moon:",
          "shortname_alternates": [],
          "keywords": [
            "gibbous",
            "moon",
            "waxing"
          ],
          "unicode_output": "1f314"
        },
        "1f319": {
          "name": "crescent moon",
          "shortname": ":crescent_moon:",
          "shortname_alternates": [],
          "keywords": [
            "crescent",
            "moon"
          ],
          "unicode_output": "1f319"
        },
        "1f30e": {
          "name": "globe showing Americas",
          "shortname": ":earth_americas:",
          "shortname_alternates": [],
          "keywords": [
            "Americas",
            "earth",
            "globe",
            "world"
          ],
          "unicode_output": "1f30e"
        },
        "1f30d": {
          "name": "globe showing Europe-Africa",
          "shortname": ":earth_africa:",
          "shortname_alternates": [],
          "keywords": [
            "Africa",
            "Europe",
            "earth",
            "globe",
            "world"
          ],
          "unicode_output": "1f30d"
        },
        "1f30f": {
          "name": "globe showing Asia-Australia",
          "shortname": ":earth_asia:",
          "shortname_alternates": [],
          "keywords": [
            "Asia",
            "Australia",
            "earth",
            "globe",
            "world"
          ],
          "unicode_output": "1f30f"
        },
        "1f4ab": {
          "name": "dizzy",
          "shortname": ":dizzy:",
          "shortname_alternates": [],
          "keywords": [
            "comic",
            "star"
          ],
          "unicode_output": "1f4ab"
        },
        "2b50": {
          "name": "star",
          "shortname": ":star:",
          "shortname_alternates": [],
          "keywords": [
            "star"
          ],
          "unicode_output": "2b50"
        },
        "1f31f": {
          "name": "glowing star",
          "shortname": ":star2:",
          "shortname_alternates": [],
          "keywords": [
            "glittery",
            "glow",
            "shining",
            "sparkle",
            "star"
          ],
          "unicode_output": "1f31f"
        },
        "2728": {
          "name": "sparkles",
          "shortname": ":sparkles:",
          "shortname_alternates": [],
          "keywords": [
            "sparkle",
            "star"
          ],
          "unicode_output": "2728"
        },
        "26a1": {
          "name": "high voltage",
          "shortname": ":zap:",
          "shortname_alternates": [],
          "keywords": [
            "danger",
            "electric",
            "electricity",
            "lightning",
            "voltage",
            "zap"
          ],
          "unicode_output": "26a1"
        },
        "2604": {
          "name": "comet",
          "shortname": ":comet:",
          "shortname_alternates": [],
          "keywords": [
            "space"
          ],
          "unicode_output": "2604"
        },
        "1f4a5": {
          "name": "collision",
          "shortname": ":boom:",
          "shortname_alternates": [],
          "keywords": [
            "boom",
            "comic"
          ],
          "unicode_output": "1f4a5"
        },
        "1f525": {
          "name": "fire",
          "shortname": ":fire:",
          "shortname_alternates": [
            ":flame:"
          ],
          "keywords": [
            "flame",
            "tool"
          ],
          "unicode_output": "1f525"
        },
        "1f32a": {
          "name": "tornado",
          "shortname": ":cloud_tornado:",
          "shortname_alternates": [
            ":cloud_with_tornado:"
          ],
          "keywords": [
            "cloud",
            "whirlwind"
          ],
          "unicode_output": "1f32a"
        },
        "1f308": {
          "name": "rainbow",
          "shortname": ":rainbow:",
          "shortname_alternates": [],
          "keywords": [
            "rain"
          ],
          "unicode_output": "1f308"
        },
        "2600": {
          "name": "sun",
          "shortname": ":sunny:",
          "shortname_alternates": [],
          "keywords": [
            "bright",
            "rays",
            "sunny"
          ],
          "unicode_output": "2600"
        },
        "1f324": {
          "name": "sun behind small cloud",
          "shortname": ":white_sun_small_cloud:",
          "shortname_alternates": [
            ":white_sun_with_small_cloud:"
          ],
          "keywords": [
            "cloud",
            "sun"
          ],
          "unicode_output": "1f324"
        },
        "26c5": {
          "name": "sun behind cloud",
          "shortname": ":partly_sunny:",
          "shortname_alternates": [],
          "keywords": [
            "cloud",
            "sun"
          ],
          "unicode_output": "26c5"
        },
        "1f325": {
          "name": "sun behind large cloud",
          "shortname": ":white_sun_cloud:",
          "shortname_alternates": [
            ":white_sun_behind_cloud:"
          ],
          "keywords": [
            "cloud",
            "sun"
          ],
          "unicode_output": "1f325"
        },
        "2601": {
          "name": "cloud",
          "shortname": ":cloud:",
          "shortname_alternates": [],
          "keywords": [
            "weather"
          ],
          "unicode_output": "2601"
        },
        "1f326": {
          "name": "sun behind rain cloud",
          "shortname": ":white_sun_rain_cloud:",
          "shortname_alternates": [
            ":white_sun_behind_cloud_with_rain:"
          ],
          "keywords": [
            "cloud",
            "rain",
            "sun"
          ],
          "unicode_output": "1f326"
        },
        "1f327": {
          "name": "cloud with rain",
          "shortname": ":cloud_rain:",
          "shortname_alternates": [
            ":cloud_with_rain:"
          ],
          "keywords": [
            "cloud",
            "rain"
          ],
          "unicode_output": "1f327"
        },
        "26c8": {
          "name": "cloud with lightning and rain",
          "shortname": ":thunder_cloud_rain:",
          "shortname_alternates": [
            ":thunder_cloud_and_rain:"
          ],
          "keywords": [
            "cloud",
            "rain",
            "thunder"
          ],
          "unicode_output": "26c8"
        },
        "1f329": {
          "name": "cloud with lightning",
          "shortname": ":cloud_lightning:",
          "shortname_alternates": [
            ":cloud_with_lightning:"
          ],
          "keywords": [
            "cloud",
            "lightning"
          ],
          "unicode_output": "1f329"
        },
        "1f328": {
          "name": "cloud with snow",
          "shortname": ":cloud_snow:",
          "shortname_alternates": [
            ":cloud_with_snow:"
          ],
          "keywords": [
            "cloud",
            "cold",
            "snow"
          ],
          "unicode_output": "1f328"
        },
        "2744": {
          "name": "snowflake",
          "shortname": ":snowflake:",
          "shortname_alternates": [],
          "keywords": [
            "cold",
            "snow"
          ],
          "unicode_output": "2744"
        },
        "2603": {
          "name": "snowman",
          "shortname": ":snowman2:",
          "shortname_alternates": [],
          "keywords": [
            "cold",
            "snow"
          ],
          "unicode_output": "2603"
        },
        "26c4": {
          "name": "snowman without snow",
          "shortname": ":snowman:",
          "shortname_alternates": [],
          "keywords": [
            "cold",
            "snow",
            "snowman"
          ],
          "unicode_output": "26c4"
        },
        "1f32c": {
          "name": "wind face",
          "shortname": ":wind_blowing_face:",
          "shortname_alternates": [],
          "keywords": [
            "blow",
            "cloud",
            "face",
            "wind"
          ],
          "unicode_output": "1f32c"
        },
        "1f4a8": {
          "name": "dashing away",
          "shortname": ":dash:",
          "shortname_alternates": [],
          "keywords": [
            "comic",
            "dash",
            "running"
          ],
          "unicode_output": "1f4a8"
        },
        "1f4a7": {
          "name": "droplet",
          "shortname": ":droplet:",
          "shortname_alternates": [],
          "keywords": [
            "cold",
            "comic",
            "drop",
            "sweat"
          ],
          "unicode_output": "1f4a7"
        },
        "1f4a6": {
          "name": "sweat droplets",
          "shortname": ":sweat_drops:",
          "shortname_alternates": [],
          "keywords": [
            "comic",
            "splashing",
            "sweat"
          ],
          "unicode_output": "1f4a6"
        },
        "2614": {
          "name": "umbrella with rain drops",
          "shortname": ":umbrella:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "drop",
            "rain",
            "umbrella"
          ],
          "unicode_output": "2614"
        },
        "2602": {
          "name": "umbrella",
          "shortname": ":umbrella2:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "rain"
          ],
          "unicode_output": "2602"
        },
        "1f30a": {
          "name": "water wave",
          "shortname": ":ocean:",
          "shortname_alternates": [],
          "keywords": [
            "ocean",
            "water",
            "wave"
          ],
          "unicode_output": "1f30a"
        },
        "1f32b": {
          "name": "fog",
          "shortname": ":fog:",
          "shortname_alternates": [],
          "keywords": [
            "cloud"
          ],
          "unicode_output": "1f32b"
        },
        "1f34f": {
          "name": "green apple",
          "shortname": ":green_apple:",
          "shortname_alternates": [],
          "keywords": [
            "apple",
            "fruit",
            "green"
          ],
          "unicode_output": "1f34f"
        },
        "1f34e": {
          "name": "red apple",
          "shortname": ":apple:",
          "shortname_alternates": [],
          "keywords": [
            "apple",
            "fruit",
            "red"
          ],
          "unicode_output": "1f34e"
        },
        "1f350": {
          "name": "pear",
          "shortname": ":pear:",
          "shortname_alternates": [],
          "keywords": [
            "fruit"
          ],
          "unicode_output": "1f350"
        },
        "1f34a": {
          "name": "tangerine",
          "shortname": ":tangerine:",
          "shortname_alternates": [],
          "keywords": [
            "fruit",
            "orange"
          ],
          "unicode_output": "1f34a"
        },
        "1f34b": {
          "name": "lemon",
          "shortname": ":lemon:",
          "shortname_alternates": [],
          "keywords": [
            "citrus",
            "fruit"
          ],
          "unicode_output": "1f34b"
        },
        "1f34c": {
          "name": "banana",
          "shortname": ":banana:",
          "shortname_alternates": [],
          "keywords": [
            "fruit"
          ],
          "unicode_output": "1f34c"
        },
        "1f349": {
          "name": "watermelon",
          "shortname": ":watermelon:",
          "shortname_alternates": [],
          "keywords": [
            "fruit"
          ],
          "unicode_output": "1f349"
        },
        "1f347": {
          "name": "grapes",
          "shortname": ":grapes:",
          "shortname_alternates": [],
          "keywords": [
            "fruit",
            "grape"
          ],
          "unicode_output": "1f347"
        },
        "1f353": {
          "name": "strawberry",
          "shortname": ":strawberry:",
          "shortname_alternates": [],
          "keywords": [
            "berry",
            "fruit"
          ],
          "unicode_output": "1f353"
        },
        "1f348": {
          "name": "melon",
          "shortname": ":melon:",
          "shortname_alternates": [],
          "keywords": [
            "fruit"
          ],
          "unicode_output": "1f348"
        },
        "1f352": {
          "name": "cherries",
          "shortname": ":cherries:",
          "shortname_alternates": [],
          "keywords": [
            "cherry",
            "fruit"
          ],
          "unicode_output": "1f352"
        },
        "1f351": {
          "name": "peach",
          "shortname": ":peach:",
          "shortname_alternates": [],
          "keywords": [
            "fruit"
          ],
          "unicode_output": "1f351"
        },
        "1f96d": {
          "name": "mango",
          "shortname": ":mango:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f96d"
        },
        "1f34d": {
          "name": "pineapple",
          "shortname": ":pineapple:",
          "shortname_alternates": [],
          "keywords": [
            "fruit"
          ],
          "unicode_output": "1f34d"
        },
        "1f965": {
          "name": "coconut",
          "shortname": ":coconut:",
          "shortname_alternates": [],
          "keywords": [
            "palm",
            "piña colada"
          ],
          "unicode_output": "1f965"
        },
        "1f95d": {
          "name": "kiwi fruit",
          "shortname": ":kiwi:",
          "shortname_alternates": [
            ":kiwifruit:"
          ],
          "keywords": [
            "food",
            "fruit",
            "kiwi"
          ],
          "unicode_output": "1f95d"
        },
        "1f345": {
          "name": "tomato",
          "shortname": ":tomato:",
          "shortname_alternates": [],
          "keywords": [
            "fruit",
            "vegetable"
          ],
          "unicode_output": "1f345"
        },
        "1f346": {
          "name": "eggplant",
          "shortname": ":eggplant:",
          "shortname_alternates": [],
          "keywords": [
            "aubergine",
            "vegetable"
          ],
          "unicode_output": "1f346"
        },
        "1f951": {
          "name": "avocado",
          "shortname": ":avocado:",
          "shortname_alternates": [],
          "keywords": [
            "avocado",
            "food",
            "fruit"
          ],
          "unicode_output": "1f951"
        },
        "1f966": {
          "name": "broccoli",
          "shortname": ":broccoli:",
          "shortname_alternates": [],
          "keywords": [
            "wild cabbage"
          ],
          "unicode_output": "1f966"
        },
        "1f96c": {
          "name": "leafy green",
          "shortname": ":leafy_green:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f96c"
        },
        "1f952": {
          "name": "cucumber",
          "shortname": ":cucumber:",
          "shortname_alternates": [],
          "keywords": [
            "cucumber",
            "food",
            "pickle",
            "vegetable"
          ],
          "unicode_output": "1f952"
        },
        "1f336": {
          "name": "hot pepper",
          "shortname": ":hot_pepper:",
          "shortname_alternates": [],
          "keywords": [
            "hot",
            "pepper"
          ],
          "unicode_output": "1f336"
        },
        "1f33d": {
          "name": "ear of corn",
          "shortname": ":corn:",
          "shortname_alternates": [],
          "keywords": [
            "corn",
            "ear",
            "maize",
            "maze"
          ],
          "unicode_output": "1f33d"
        },
        "1f955": {
          "name": "carrot",
          "shortname": ":carrot:",
          "shortname_alternates": [],
          "keywords": [
            "carrot",
            "food",
            "vegetable"
          ],
          "unicode_output": "1f955"
        },
        "1f954": {
          "name": "potato",
          "shortname": ":potato:",
          "shortname_alternates": [],
          "keywords": [
            "food",
            "potato",
            "vegetable"
          ],
          "unicode_output": "1f954"
        },
        "1f360": {
          "name": "roasted sweet potato",
          "shortname": ":sweet_potato:",
          "shortname_alternates": [],
          "keywords": [
            "potato",
            "roasted",
            "sweet"
          ],
          "unicode_output": "1f360"
        },
        "1f950": {
          "name": "croissant",
          "shortname": ":croissant:",
          "shortname_alternates": [],
          "keywords": [
            "bread",
            "crescent roll",
            "croissant",
            "food",
            "french"
          ],
          "unicode_output": "1f950"
        },
        "1f35e": {
          "name": "bread",
          "shortname": ":bread:",
          "shortname_alternates": [],
          "keywords": [
            "loaf"
          ],
          "unicode_output": "1f35e"
        },
        "1f956": {
          "name": "baguette bread",
          "shortname": ":french_bread:",
          "shortname_alternates": [
            ":baguette_bread:"
          ],
          "keywords": [
            "baguette",
            "bread",
            "food",
            "french"
          ],
          "unicode_output": "1f956"
        },
        "1f968": {
          "name": "pretzel",
          "shortname": ":pretzel:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f968"
        },
        "1f96f": {
          "name": "bagel",
          "shortname": ":bagel:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f96f"
        },
        "1f9c0": {
          "name": "cheese wedge",
          "shortname": ":cheese:",
          "shortname_alternates": [
            ":cheese_wedge:"
          ],
          "keywords": [
            "cheese"
          ],
          "unicode_output": "1f9c0"
        },
        "1f95a": {
          "name": "egg",
          "shortname": ":egg:",
          "shortname_alternates": [],
          "keywords": [
            "egg",
            "food"
          ],
          "unicode_output": "1f95a"
        },
        "1f373": {
          "name": "cooking",
          "shortname": ":cooking:",
          "shortname_alternates": [],
          "keywords": [
            "egg",
            "frying",
            "pan"
          ],
          "unicode_output": "1f373"
        },
        "1f95e": {
          "name": "pancakes",
          "shortname": ":pancakes:",
          "shortname_alternates": [],
          "keywords": [
            "crêpe",
            "food",
            "hotcake",
            "pancake"
          ],
          "unicode_output": "1f95e"
        },
        "1f953": {
          "name": "bacon",
          "shortname": ":bacon:",
          "shortname_alternates": [],
          "keywords": [
            "bacon",
            "food",
            "meat"
          ],
          "unicode_output": "1f953"
        },
        "1f969": {
          "name": "cut of meat",
          "shortname": ":cut_of_meat:",
          "shortname_alternates": [],
          "keywords": [
            "chop",
            "lambchop",
            "porkchop",
            "steak"
          ],
          "unicode_output": "1f969"
        },
        "1f357": {
          "name": "poultry leg",
          "shortname": ":poultry_leg:",
          "shortname_alternates": [],
          "keywords": [
            "bone",
            "chicken",
            "leg",
            "poultry"
          ],
          "unicode_output": "1f357"
        },
        "1f356": {
          "name": "meat on bone",
          "shortname": ":meat_on_bone:",
          "shortname_alternates": [],
          "keywords": [
            "bone",
            "meat"
          ],
          "unicode_output": "1f356"
        },
        "1f32d": {
          "name": "hot dog",
          "shortname": ":hotdog:",
          "shortname_alternates": [
            ":hot_dog:"
          ],
          "keywords": [
            "frankfurter",
            "hotdog",
            "sausage"
          ],
          "unicode_output": "1f32d"
        },
        "1f354": {
          "name": "hamburger",
          "shortname": ":hamburger:",
          "shortname_alternates": [],
          "keywords": [
            "burger"
          ],
          "unicode_output": "1f354"
        },
        "1f35f": {
          "name": "french fries",
          "shortname": ":fries:",
          "shortname_alternates": [],
          "keywords": [
            "french",
            "fries"
          ],
          "unicode_output": "1f35f"
        },
        "1f355": {
          "name": "pizza",
          "shortname": ":pizza:",
          "shortname_alternates": [],
          "keywords": [
            "cheese",
            "slice"
          ],
          "unicode_output": "1f355"
        },
        "1f96a": {
          "name": "sandwich",
          "shortname": ":sandwich:",
          "shortname_alternates": [],
          "keywords": [
            "bread"
          ],
          "unicode_output": "1f96a"
        },
        "1f959": {
          "name": "stuffed flatbread",
          "shortname": ":stuffed_flatbread:",
          "shortname_alternates": [
            ":stuffed_pita:"
          ],
          "keywords": [
            "falafel",
            "flatbread",
            "food",
            "gyro",
            "kebab",
            "stuffed"
          ],
          "unicode_output": "1f959"
        },
        "1f32e": {
          "name": "taco",
          "shortname": ":taco:",
          "shortname_alternates": [],
          "keywords": [
            "mexican"
          ],
          "unicode_output": "1f32e"
        },
        "1f32f": {
          "name": "burrito",
          "shortname": ":burrito:",
          "shortname_alternates": [],
          "keywords": [
            "mexican",
            "wrap"
          ],
          "unicode_output": "1f32f"
        },
        "1f957": {
          "name": "green salad",
          "shortname": ":salad:",
          "shortname_alternates": [
            ":green_salad:"
          ],
          "keywords": [
            "food",
            "green",
            "salad"
          ],
          "unicode_output": "1f957"
        },
        "1f958": {
          "name": "shallow pan of food",
          "shortname": ":shallow_pan_of_food:",
          "shortname_alternates": [
            ":paella:"
          ],
          "keywords": [
            "casserole",
            "food",
            "paella",
            "pan",
            "shallow"
          ],
          "unicode_output": "1f958"
        },
        "1f96b": {
          "name": "canned food",
          "shortname": ":canned_food:",
          "shortname_alternates": [],
          "keywords": [
            "can"
          ],
          "unicode_output": "1f96b"
        },
        "1f35d": {
          "name": "spaghetti",
          "shortname": ":spaghetti:",
          "shortname_alternates": [],
          "keywords": [
            "pasta"
          ],
          "unicode_output": "1f35d"
        },
        "1f35c": {
          "name": "steaming bowl",
          "shortname": ":ramen:",
          "shortname_alternates": [],
          "keywords": [
            "bowl",
            "noodle",
            "ramen",
            "steaming"
          ],
          "unicode_output": "1f35c"
        },
        "1f372": {
          "name": "pot of food",
          "shortname": ":stew:",
          "shortname_alternates": [],
          "keywords": [
            "pot",
            "stew"
          ],
          "unicode_output": "1f372"
        },
        "1f35b": {
          "name": "curry rice",
          "shortname": ":curry:",
          "shortname_alternates": [],
          "keywords": [
            "curry",
            "rice"
          ],
          "unicode_output": "1f35b"
        },
        "1f363": {
          "name": "sushi",
          "shortname": ":sushi:",
          "shortname_alternates": [],
          "keywords": [
            "sushi"
          ],
          "unicode_output": "1f363"
        },
        "1f371": {
          "name": "bento box",
          "shortname": ":bento:",
          "shortname_alternates": [],
          "keywords": [
            "bento",
            "box"
          ],
          "unicode_output": "1f371"
        },
        "1f364": {
          "name": "fried shrimp",
          "shortname": ":fried_shrimp:",
          "shortname_alternates": [],
          "keywords": [
            "fried",
            "prawn",
            "shrimp",
            "tempura"
          ],
          "unicode_output": "1f364"
        },
        "1f359": {
          "name": "rice ball",
          "shortname": ":rice_ball:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "ball",
            "rice"
          ],
          "unicode_output": "1f359"
        },
        "1f35a": {
          "name": "cooked rice",
          "shortname": ":rice:",
          "shortname_alternates": [],
          "keywords": [
            "cooked",
            "rice"
          ],
          "unicode_output": "1f35a"
        },
        "1f358": {
          "name": "rice cracker",
          "shortname": ":rice_cracker:",
          "shortname_alternates": [],
          "keywords": [
            "cracker",
            "rice"
          ],
          "unicode_output": "1f358"
        },
        "1f365": {
          "name": "fish cake with swirl",
          "shortname": ":fish_cake:",
          "shortname_alternates": [],
          "keywords": [
            "cake",
            "fish",
            "pastry",
            "swirl"
          ],
          "unicode_output": "1f365"
        },
        "1f960": {
          "name": "fortune cookie",
          "shortname": ":fortune_cookie:",
          "shortname_alternates": [],
          "keywords": [
            "prophecy"
          ],
          "unicode_output": "1f960"
        },
        "1f362": {
          "name": "oden",
          "shortname": ":oden:",
          "shortname_alternates": [],
          "keywords": [
            "kebab",
            "seafood",
            "skewer",
            "stick"
          ],
          "unicode_output": "1f362"
        },
        "1f361": {
          "name": "dango",
          "shortname": ":dango:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "dessert",
            "skewer",
            "stick",
            "sweet"
          ],
          "unicode_output": "1f361"
        },
        "1f367": {
          "name": "shaved ice",
          "shortname": ":shaved_ice:",
          "shortname_alternates": [],
          "keywords": [
            "dessert",
            "ice",
            "shaved",
            "sweet"
          ],
          "unicode_output": "1f367"
        },
        "1f368": {
          "name": "ice cream",
          "shortname": ":ice_cream:",
          "shortname_alternates": [],
          "keywords": [
            "cream",
            "dessert",
            "ice",
            "sweet"
          ],
          "unicode_output": "1f368"
        },
        "1f366": {
          "name": "soft ice cream",
          "shortname": ":icecream:",
          "shortname_alternates": [],
          "keywords": [
            "cream",
            "dessert",
            "ice",
            "icecream",
            "soft",
            "sweet"
          ],
          "unicode_output": "1f366"
        },
        "1f967": {
          "name": "pie",
          "shortname": ":pie:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f967"
        },
        "1f370": {
          "name": "shortcake",
          "shortname": ":cake:",
          "shortname_alternates": [],
          "keywords": [
            "cake",
            "dessert",
            "pastry",
            "slice",
            "sweet"
          ],
          "unicode_output": "1f370"
        },
        "1f382": {
          "name": "birthday cake",
          "shortname": ":birthday:",
          "shortname_alternates": [],
          "keywords": [
            "birthday",
            "cake",
            "celebration",
            "dessert",
            "pastry",
            "sweet"
          ],
          "unicode_output": "1f382"
        },
        "1f96e": {
          "name": "moon cake",
          "shortname": ":moon_cake:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f96e"
        },
        "1f9c1": {
          "name": "cupcake",
          "shortname": ":cupcake:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9c1"
        },
        "1f36e": {
          "name": "custard",
          "shortname": ":custard:",
          "shortname_alternates": [
            ":pudding:",
            ":flan:"
          ],
          "keywords": [
            "dessert",
            "pudding",
            "sweet"
          ],
          "unicode_output": "1f36e"
        },
        "1f36d": {
          "name": "lollipop",
          "shortname": ":lollipop:",
          "shortname_alternates": [],
          "keywords": [
            "candy",
            "dessert",
            "sweet"
          ],
          "unicode_output": "1f36d"
        },
        "1f36c": {
          "name": "candy",
          "shortname": ":candy:",
          "shortname_alternates": [],
          "keywords": [
            "dessert",
            "sweet"
          ],
          "unicode_output": "1f36c"
        },
        "1f36b": {
          "name": "chocolate bar",
          "shortname": ":chocolate_bar:",
          "shortname_alternates": [],
          "keywords": [
            "bar",
            "chocolate",
            "dessert",
            "sweet"
          ],
          "unicode_output": "1f36b"
        },
        "1f37f": {
          "name": "popcorn",
          "shortname": ":popcorn:",
          "shortname_alternates": [],
          "keywords": [
            "popcorn"
          ],
          "unicode_output": "1f37f"
        },
        "1f9c2": {
          "name": "salt",
          "shortname": ":salt:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9c2"
        },
        "1f369": {
          "name": "doughnut",
          "shortname": ":doughnut:",
          "shortname_alternates": [],
          "keywords": [
            "dessert",
            "donut",
            "sweet"
          ],
          "unicode_output": "1f369"
        },
        "1f95f": {
          "name": "dumpling",
          "shortname": ":dumpling:",
          "shortname_alternates": [],
          "keywords": [
            "empanada",
            "gyōza",
            "jiaozi",
            "pierogi",
            "potsticker"
          ],
          "unicode_output": "1f95f"
        },
        "1f36a": {
          "name": "cookie",
          "shortname": ":cookie:",
          "shortname_alternates": [],
          "keywords": [
            "dessert",
            "sweet"
          ],
          "unicode_output": "1f36a"
        },
        "1f330": {
          "name": "chestnut",
          "shortname": ":chestnut:",
          "shortname_alternates": [],
          "keywords": [
            "plant"
          ],
          "unicode_output": "1f330"
        },
        "1f95c": {
          "name": "peanuts",
          "shortname": ":peanuts:",
          "shortname_alternates": [
            ":shelled_peanut:"
          ],
          "keywords": [
            "food",
            "nut",
            "peanut",
            "vegetable"
          ],
          "unicode_output": "1f95c"
        },
        "1f36f": {
          "name": "honey pot",
          "shortname": ":honey_pot:",
          "shortname_alternates": [],
          "keywords": [
            "honey",
            "honeypot",
            "pot",
            "sweet"
          ],
          "unicode_output": "1f36f"
        },
        "1f95b": {
          "name": "glass of milk",
          "shortname": ":milk:",
          "shortname_alternates": [
            ":glass_of_milk:"
          ],
          "keywords": [
            "drink",
            "glass",
            "milk"
          ],
          "unicode_output": "1f95b"
        },
        "1f37c": {
          "name": "baby bottle",
          "shortname": ":baby_bottle:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "bottle",
            "drink",
            "milk"
          ],
          "unicode_output": "1f37c"
        },
        "2615": {
          "name": "hot beverage",
          "shortname": ":coffee:",
          "shortname_alternates": [],
          "keywords": [
            "beverage",
            "coffee",
            "drink",
            "hot",
            "steaming",
            "tea"
          ],
          "unicode_output": "2615"
        },
        "1f375": {
          "name": "teacup without handle",
          "shortname": ":tea:",
          "shortname_alternates": [],
          "keywords": [
            "beverage",
            "cup",
            "drink",
            "tea",
            "teacup"
          ],
          "unicode_output": "1f375"
        },
        "1f964": {
          "name": "cup with straw",
          "shortname": ":cup_with_straw:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f964"
        },
        "1f376": {
          "name": "sake",
          "shortname": ":sake:",
          "shortname_alternates": [],
          "keywords": [
            "bar",
            "beverage",
            "bottle",
            "cup",
            "drink"
          ],
          "unicode_output": "1f376"
        },
        "1f37a": {
          "name": "beer mug",
          "shortname": ":beer:",
          "shortname_alternates": [],
          "keywords": [
            "bar",
            "beer",
            "drink",
            "mug"
          ],
          "unicode_output": "1f37a"
        },
        "1f37b": {
          "name": "clinking beer mugs",
          "shortname": ":beers:",
          "shortname_alternates": [],
          "keywords": [
            "bar",
            "beer",
            "clink",
            "drink",
            "mug"
          ],
          "unicode_output": "1f37b"
        },
        "1f942": {
          "name": "clinking glasses",
          "shortname": ":champagne_glass:",
          "shortname_alternates": [
            ":clinking_glass:"
          ],
          "keywords": [
            "celebrate",
            "clink",
            "drink",
            "glass"
          ],
          "unicode_output": "1f942"
        },
        "1f377": {
          "name": "wine glass",
          "shortname": ":wine_glass:",
          "shortname_alternates": [],
          "keywords": [
            "bar",
            "beverage",
            "drink",
            "glass",
            "wine"
          ],
          "unicode_output": "1f377"
        },
        "1f943": {
          "name": "tumbler glass",
          "shortname": ":tumbler_glass:",
          "shortname_alternates": [
            ":whisky:"
          ],
          "keywords": [
            "glass",
            "liquor",
            "shot",
            "tumbler",
            "whisky"
          ],
          "unicode_output": "1f943"
        },
        "1f378": {
          "name": "cocktail glass",
          "shortname": ":cocktail:",
          "shortname_alternates": [],
          "keywords": [
            "bar",
            "cocktail",
            "drink",
            "glass"
          ],
          "unicode_output": "1f378"
        },
        "1f379": {
          "name": "tropical drink",
          "shortname": ":tropical_drink:",
          "shortname_alternates": [],
          "keywords": [
            "bar",
            "drink",
            "tropical"
          ],
          "unicode_output": "1f379"
        },
        "1f37e": {
          "name": "bottle with popping cork",
          "shortname": ":champagne:",
          "shortname_alternates": [
            ":bottle_with_popping_cork:"
          ],
          "keywords": [
            "bar",
            "bottle",
            "cork",
            "drink",
            "popping"
          ],
          "unicode_output": "1f37e"
        },
        "1f944": {
          "name": "spoon",
          "shortname": ":spoon:",
          "shortname_alternates": [],
          "keywords": [
            "spoon",
            "tableware"
          ],
          "unicode_output": "1f944"
        },
        "1f374": {
          "name": "fork and knife",
          "shortname": ":fork_and_knife:",
          "shortname_alternates": [],
          "keywords": [
            "cooking",
            "fork",
            "knife"
          ],
          "unicode_output": "1f374"
        },
        "1f37d": {
          "name": "fork and knife with plate",
          "shortname": ":fork_knife_plate:",
          "shortname_alternates": [
            ":fork_and_knife_with_plate:"
          ],
          "keywords": [
            "cooking",
            "fork",
            "knife",
            "plate"
          ],
          "unicode_output": "1f37d"
        },
        "1f963": {
          "name": "bowl with spoon",
          "shortname": ":bowl_with_spoon:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f963"
        },
        "1f961": {
          "name": "takeout box",
          "shortname": ":takeout_box:",
          "shortname_alternates": [],
          "keywords": [
            "oyster pail"
          ],
          "unicode_output": "1f961"
        },
        "1f962": {
          "name": "chopsticks",
          "shortname": ":chopsticks:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f962"
        },
        "1f600": {
          "name": "grinning face",
          "shortname": ":grinning:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "grin"
          ],
          "unicode_output": "1f600"
        },
        "1f603": {
          "name": "grinning face with big eyes",
          "shortname": ":smiley:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "mouth",
            "open",
            "smile"
          ],
          "unicode_output": "1f603"
        },
        "1f604": {
          "name": "grinning face with smiling eyes",
          "shortname": ":smile:",
          "shortname_alternates": [],
          "keywords": [
            "eye",
            "face",
            "mouth",
            "open",
            "smile"
          ],
          "unicode_output": "1f604"
        },
        "1f601": {
          "name": "beaming face with smiling eyes",
          "shortname": ":grin:",
          "shortname_alternates": [],
          "keywords": [
            "eye",
            "face",
            "grin",
            "smile"
          ],
          "unicode_output": "1f601"
        },
        "1f606": {
          "name": "grinning squinting face",
          "shortname": ":laughing:",
          "shortname_alternates": [
            ":satisfied:"
          ],
          "keywords": [
            "face",
            "laugh",
            "mouth",
            "open",
            "satisfied",
            "smile"
          ],
          "unicode_output": "1f606"
        },
        "1f605": {
          "name": "grinning face with sweat",
          "shortname": ":sweat_smile:",
          "shortname_alternates": [],
          "keywords": [
            "cold",
            "face",
            "open",
            "smile",
            "sweat"
          ],
          "unicode_output": "1f605"
        },
        "1f602": {
          "name": "face with tears of joy",
          "shortname": ":joy:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "joy",
            "laugh",
            "tear"
          ],
          "unicode_output": "1f602"
        },
        "1f923": {
          "name": "rolling on the floor laughing",
          "shortname": ":rofl:",
          "shortname_alternates": [
            ":rolling_on_the_floor_laughing:"
          ],
          "keywords": [
            "face",
            "floor",
            "laugh",
            "rolling"
          ],
          "unicode_output": "1f923"
        },
        "263a": {
          "name": "smiling face",
          "shortname": ":relaxed:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "outlined",
            "relaxed",
            "smile"
          ],
          "unicode_output": "263a"
        },
        "1f60a": {
          "name": "smiling face with smiling eyes",
          "shortname": ":blush:",
          "shortname_alternates": [],
          "keywords": [
            "blush",
            "eye",
            "face",
            "smile"
          ],
          "unicode_output": "1f60a"
        },
        "1f607": {
          "name": "smiling face with halo",
          "shortname": ":innocent:",
          "shortname_alternates": [],
          "keywords": [
            "angel",
            "face",
            "fairy tale",
            "fantasy",
            "halo",
            "innocent",
            "smile"
          ],
          "unicode_output": "1f607"
        },
        "1f642": {
          "name": "slightly smiling face",
          "shortname": ":slight_smile:",
          "shortname_alternates": [
            ":slightly_smiling_face:"
          ],
          "keywords": [
            "face",
            "smile"
          ],
          "unicode_output": "1f642"
        },
        "1f643": {
          "name": "upside-down face",
          "shortname": ":upside_down:",
          "shortname_alternates": [
            ":upside_down_face:"
          ],
          "keywords": [
            "face",
            "upside-down"
          ],
          "unicode_output": "1f643"
        },
        "1f609": {
          "name": "winking face",
          "shortname": ":wink:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "wink"
          ],
          "unicode_output": "1f609"
        },
        "1f60c": {
          "name": "relieved face",
          "shortname": ":relieved:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "relieved"
          ],
          "unicode_output": "1f60c"
        },
        "1f60d": {
          "name": "smiling face with heart-eyes",
          "shortname": ":heart_eyes:",
          "shortname_alternates": [],
          "keywords": [
            "eye",
            "face",
            "love",
            "smile"
          ],
          "unicode_output": "1f60d"
        },
        "1f618": {
          "name": "face blowing a kiss",
          "shortname": ":kissing_heart:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "kiss"
          ],
          "unicode_output": "1f618"
        },
        "1f970": {
          "name": "smiling face with 3 hearts",
          "shortname": ":smiling_face_with_3_hearts:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f970"
        },
        "1f617": {
          "name": "kissing face",
          "shortname": ":kissing:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "kiss"
          ],
          "unicode_output": "1f617"
        },
        "1f619": {
          "name": "kissing face with smiling eyes",
          "shortname": ":kissing_smiling_eyes:",
          "shortname_alternates": [],
          "keywords": [
            "eye",
            "face",
            "kiss",
            "smile"
          ],
          "unicode_output": "1f619"
        },
        "1f61a": {
          "name": "kissing face with closed eyes",
          "shortname": ":kissing_closed_eyes:",
          "shortname_alternates": [],
          "keywords": [
            "closed",
            "eye",
            "face",
            "kiss"
          ],
          "unicode_output": "1f61a"
        },
        "1f60b": {
          "name": "face savoring food",
          "shortname": ":yum:",
          "shortname_alternates": [],
          "keywords": [
            "delicious",
            "face",
            "savouring",
            "smile",
            "um",
            "yum"
          ],
          "unicode_output": "1f60b"
        },
        "1f61b": {
          "name": "face with tongue",
          "shortname": ":stuck_out_tongue:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "tongue"
          ],
          "unicode_output": "1f61b"
        },
        "1f61d": {
          "name": "squinting face with tongue",
          "shortname": ":stuck_out_tongue_closed_eyes:",
          "shortname_alternates": [],
          "keywords": [
            "eye",
            "face",
            "horrible",
            "taste",
            "tongue"
          ],
          "unicode_output": "1f61d"
        },
        "1f61c": {
          "name": "winking face with tongue",
          "shortname": ":stuck_out_tongue_winking_eye:",
          "shortname_alternates": [],
          "keywords": [
            "eye",
            "face",
            "joke",
            "tongue",
            "wink"
          ],
          "unicode_output": "1f61c"
        },
        "1f92a": {
          "name": "zany face",
          "shortname": ":zany_face:",
          "shortname_alternates": [],
          "keywords": [
            "eye",
            "large",
            "small"
          ],
          "unicode_output": "1f92a"
        },
        "1f928": {
          "name": "face with raised eyebrow",
          "shortname": ":face_with_raised_eyebrow:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f928"
        },
        "1f9d0": {
          "name": "face with monocle",
          "shortname": ":face_with_monocle:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9d0"
        },
        "1f913": {
          "name": "nerd face",
          "shortname": ":nerd:",
          "shortname_alternates": [
            ":nerd_face:"
          ],
          "keywords": [
            "face",
            "geek",
            "nerd"
          ],
          "unicode_output": "1f913"
        },
        "1f60e": {
          "name": "smiling face with sunglasses",
          "shortname": ":sunglasses:",
          "shortname_alternates": [],
          "keywords": [
            "bright",
            "cool",
            "eye",
            "eyewear",
            "face",
            "glasses",
            "smile",
            "sun",
            "sunglasses"
          ],
          "unicode_output": "1f60e"
        },
        "1f929": {
          "name": "star-struck",
          "shortname": ":star_struck:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f929"
        },
        "1f973": {
          "name": "partying face",
          "shortname": ":partying_face:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f973"
        },
        "1f60f": {
          "name": "smirking face",
          "shortname": ":smirk:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "smirk"
          ],
          "unicode_output": "1f60f"
        },
        "1f612": {
          "name": "unamused face",
          "shortname": ":unamused:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "unamused",
            "unhappy"
          ],
          "unicode_output": "1f612"
        },
        "1f61e": {
          "name": "disappointed face",
          "shortname": ":disappointed:",
          "shortname_alternates": [],
          "keywords": [
            "disappointed",
            "face"
          ],
          "unicode_output": "1f61e"
        },
        "1f614": {
          "name": "pensive face",
          "shortname": ":pensive:",
          "shortname_alternates": [],
          "keywords": [
            "dejected",
            "face",
            "pensive"
          ],
          "unicode_output": "1f614"
        },
        "1f61f": {
          "name": "worried face",
          "shortname": ":worried:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "worried"
          ],
          "unicode_output": "1f61f"
        },
        "1f615": {
          "name": "confused face",
          "shortname": ":confused:",
          "shortname_alternates": [],
          "keywords": [
            "confused",
            "face"
          ],
          "unicode_output": "1f615"
        },
        "1f641": {
          "name": "slightly frowning face",
          "shortname": ":slight_frown:",
          "shortname_alternates": [
            ":slightly_frowning_face:"
          ],
          "keywords": [
            "face",
            "frown"
          ],
          "unicode_output": "1f641"
        },
        "2639": {
          "name": "frowning face",
          "shortname": ":frowning2:",
          "shortname_alternates": [
            ":white_frowning_face:"
          ],
          "keywords": [
            "face",
            "frown"
          ],
          "unicode_output": "2639"
        },
        "1f623": {
          "name": "persevering face",
          "shortname": ":persevere:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "persevere"
          ],
          "unicode_output": "1f623"
        },
        "1f616": {
          "name": "confounded face",
          "shortname": ":confounded:",
          "shortname_alternates": [],
          "keywords": [
            "confounded",
            "face"
          ],
          "unicode_output": "1f616"
        },
        "1f62b": {
          "name": "tired face",
          "shortname": ":tired_face:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "tired"
          ],
          "unicode_output": "1f62b"
        },
        "1f629": {
          "name": "weary face",
          "shortname": ":weary:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "tired",
            "weary"
          ],
          "unicode_output": "1f629"
        },
        "1f622": {
          "name": "crying face",
          "shortname": ":cry:",
          "shortname_alternates": [],
          "keywords": [
            "cry",
            "face",
            "sad",
            "tear"
          ],
          "unicode_output": "1f622"
        },
        "1f62d": {
          "name": "loudly crying face",
          "shortname": ":sob:",
          "shortname_alternates": [],
          "keywords": [
            "cry",
            "face",
            "sad",
            "sob",
            "tear"
          ],
          "unicode_output": "1f62d"
        },
        "1f624": {
          "name": "face with steam from nose",
          "shortname": ":triumph:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "triumph",
            "won"
          ],
          "unicode_output": "1f624"
        },
        "1f620": {
          "name": "angry face",
          "shortname": ":angry:",
          "shortname_alternates": [],
          "keywords": [
            "angry",
            "face",
            "mad"
          ],
          "unicode_output": "1f620"
        },
        "1f621": {
          "name": "pouting face",
          "shortname": ":rage:",
          "shortname_alternates": [],
          "keywords": [
            "angry",
            "face",
            "mad",
            "pouting",
            "rage",
            "red"
          ],
          "unicode_output": "1f621"
        },
        "1f92c": {
          "name": "face with symbols on mouth",
          "shortname": ":face_with_symbols_over_mouth:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f92c"
        },
        "1f92f": {
          "name": "exploding head",
          "shortname": ":exploding_head:",
          "shortname_alternates": [],
          "keywords": [
            "shocked"
          ],
          "unicode_output": "1f92f"
        },
        "1f633": {
          "name": "flushed face",
          "shortname": ":flushed:",
          "shortname_alternates": [],
          "keywords": [
            "dazed",
            "face",
            "flushed"
          ],
          "unicode_output": "1f633"
        },
        "1f631": {
          "name": "face screaming in fear",
          "shortname": ":scream:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "fear",
            "fearful",
            "munch",
            "scared",
            "scream"
          ],
          "unicode_output": "1f631"
        },
        "1f628": {
          "name": "fearful face",
          "shortname": ":fearful:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "fear",
            "fearful",
            "scared"
          ],
          "unicode_output": "1f628"
        },
        "1f630": {
          "name": "anxious face with sweat",
          "shortname": ":cold_sweat:",
          "shortname_alternates": [],
          "keywords": [
            "blue",
            "cold",
            "face",
            "mouth",
            "open",
            "rushed",
            "sweat"
          ],
          "unicode_output": "1f630"
        },
        "1f975": {
          "name": "hot face",
          "shortname": ":hot_face:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f975"
        },
        "1f976": {
          "name": "cold face",
          "shortname": ":cold_face:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f976"
        },
        "1f97a": {
          "name": "pleading face",
          "shortname": ":pleading_face:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f97a"
        },
        "1f625": {
          "name": "sad but relieved face",
          "shortname": ":disappointed_relieved:",
          "shortname_alternates": [],
          "keywords": [
            "disappointed",
            "face",
            "relieved",
            "whew"
          ],
          "unicode_output": "1f625"
        },
        "1f613": {
          "name": "downcast face with sweat",
          "shortname": ":sweat:",
          "shortname_alternates": [],
          "keywords": [
            "cold",
            "face",
            "sweat"
          ],
          "unicode_output": "1f613"
        },
        "1f917": {
          "name": "hugging face",
          "shortname": ":hugging:",
          "shortname_alternates": [
            ":hugging_face:"
          ],
          "keywords": [
            "face",
            "hug",
            "hugging"
          ],
          "unicode_output": "1f917"
        },
        "1f914": {
          "name": "thinking face",
          "shortname": ":thinking:",
          "shortname_alternates": [
            ":thinking_face:"
          ],
          "keywords": [
            "face",
            "thinking"
          ],
          "unicode_output": "1f914"
        },
        "1f92d": {
          "name": "face with hand over mouth",
          "shortname": ":face_with_hand_over_mouth:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f92d"
        },
        "1f92b": {
          "name": "shushing face",
          "shortname": ":shushing_face:",
          "shortname_alternates": [],
          "keywords": [
            "quiet",
            "shush"
          ],
          "unicode_output": "1f92b"
        },
        "1f925": {
          "name": "lying face",
          "shortname": ":lying_face:",
          "shortname_alternates": [
            ":liar:"
          ],
          "keywords": [
            "face",
            "lie",
            "pinocchio"
          ],
          "unicode_output": "1f925"
        },
        "1f636": {
          "name": "face without mouth",
          "shortname": ":no_mouth:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "mouth",
            "quiet",
            "silent"
          ],
          "unicode_output": "1f636"
        },
        "1f610": {
          "name": "neutral face",
          "shortname": ":neutral_face:",
          "shortname_alternates": [],
          "keywords": [
            "deadpan",
            "face",
            "neutral"
          ],
          "unicode_output": "1f610"
        },
        "1f611": {
          "name": "expressionless face",
          "shortname": ":expressionless:",
          "shortname_alternates": [],
          "keywords": [
            "expressionless",
            "face",
            "inexpressive",
            "unexpressive"
          ],
          "unicode_output": "1f611"
        },
        "1f62c": {
          "name": "grimacing face",
          "shortname": ":grimacing:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "grimace"
          ],
          "unicode_output": "1f62c"
        },
        "1f644": {
          "name": "face with rolling eyes",
          "shortname": ":rolling_eyes:",
          "shortname_alternates": [
            ":face_with_rolling_eyes:"
          ],
          "keywords": [
            "eyes",
            "face",
            "rolling"
          ],
          "unicode_output": "1f644"
        },
        "1f62f": {
          "name": "hushed face",
          "shortname": ":hushed:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "hushed",
            "stunned",
            "surprised"
          ],
          "unicode_output": "1f62f"
        },
        "1f626": {
          "name": "frowning face with open mouth",
          "shortname": ":frowning:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "frown",
            "mouth",
            "open"
          ],
          "unicode_output": "1f626"
        },
        "1f627": {
          "name": "anguished face",
          "shortname": ":anguished:",
          "shortname_alternates": [],
          "keywords": [
            "anguished",
            "face"
          ],
          "unicode_output": "1f627"
        },
        "1f62e": {
          "name": "face with open mouth",
          "shortname": ":open_mouth:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "mouth",
            "open",
            "sympathy"
          ],
          "unicode_output": "1f62e"
        },
        "1f632": {
          "name": "astonished face",
          "shortname": ":astonished:",
          "shortname_alternates": [],
          "keywords": [
            "astonished",
            "face",
            "shocked",
            "totally"
          ],
          "unicode_output": "1f632"
        },
        "1f634": {
          "name": "sleeping face",
          "shortname": ":sleeping:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "sleep",
            "zzz"
          ],
          "unicode_output": "1f634"
        },
        "1f924": {
          "name": "drooling face",
          "shortname": ":drooling_face:",
          "shortname_alternates": [
            ":drool:"
          ],
          "keywords": [
            "drooling",
            "face"
          ],
          "unicode_output": "1f924"
        },
        "1f62a": {
          "name": "sleepy face",
          "shortname": ":sleepy:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "sleep"
          ],
          "unicode_output": "1f62a"
        },
        "1f635": {
          "name": "dizzy face",
          "shortname": ":dizzy_face:",
          "shortname_alternates": [],
          "keywords": [
            "dizzy",
            "face"
          ],
          "unicode_output": "1f635"
        },
        "1f910": {
          "name": "zipper-mouth face",
          "shortname": ":zipper_mouth:",
          "shortname_alternates": [
            ":zipper_mouth_face:"
          ],
          "keywords": [
            "face",
            "mouth",
            "zipper"
          ],
          "unicode_output": "1f910"
        },
        "1f974": {
          "name": "woozy face",
          "shortname": ":woozy_face:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f974"
        },
        "1f922": {
          "name": "nauseated face",
          "shortname": ":nauseated_face:",
          "shortname_alternates": [
            ":sick:"
          ],
          "keywords": [
            "face",
            "nauseated",
            "vomit"
          ],
          "unicode_output": "1f922"
        },
        "1f92e": {
          "name": "face vomiting",
          "shortname": ":face_vomiting:",
          "shortname_alternates": [],
          "keywords": [
            "sick",
            "vomit"
          ],
          "unicode_output": "1f92e"
        },
        "1f927": {
          "name": "sneezing face",
          "shortname": ":sneezing_face:",
          "shortname_alternates": [
            ":sneeze:"
          ],
          "keywords": [
            "face",
            "gesundheit",
            "sneeze"
          ],
          "unicode_output": "1f927"
        },
        "1f637": {
          "name": "face with medical mask",
          "shortname": ":mask:",
          "shortname_alternates": [],
          "keywords": [
            "cold",
            "doctor",
            "face",
            "mask",
            "medicine",
            "sick"
          ],
          "unicode_output": "1f637"
        },
        "1f912": {
          "name": "face with thermometer",
          "shortname": ":thermometer_face:",
          "shortname_alternates": [
            ":face_with_thermometer:"
          ],
          "keywords": [
            "face",
            "ill",
            "sick",
            "thermometer"
          ],
          "unicode_output": "1f912"
        },
        "1f915": {
          "name": "face with head-bandage",
          "shortname": ":head_bandage:",
          "shortname_alternates": [
            ":face_with_head_bandage:"
          ],
          "keywords": [
            "bandage",
            "face",
            "hurt",
            "injury"
          ],
          "unicode_output": "1f915"
        },
        "1f911": {
          "name": "money-mouth face",
          "shortname": ":money_mouth:",
          "shortname_alternates": [
            ":money_mouth_face:"
          ],
          "keywords": [
            "face",
            "money",
            "mouth"
          ],
          "unicode_output": "1f911"
        },
        "1f920": {
          "name": "cowboy hat face",
          "shortname": ":cowboy:",
          "shortname_alternates": [
            ":face_with_cowboy_hat:"
          ],
          "keywords": [
            "cowboy",
            "cowgirl",
            "face",
            "hat"
          ],
          "unicode_output": "1f920"
        },
        "1f608": {
          "name": "smiling face with horns",
          "shortname": ":smiling_imp:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "fairy tale",
            "fantasy",
            "horns",
            "smile"
          ],
          "unicode_output": "1f608"
        },
        "1f47f": {
          "name": "angry face with horns",
          "shortname": ":imp:",
          "shortname_alternates": [],
          "keywords": [
            "demon",
            "devil",
            "face",
            "fairy tale",
            "fantasy",
            "imp"
          ],
          "unicode_output": "1f47f"
        },
        "1f479": {
          "name": "ogre",
          "shortname": ":japanese_ogre:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f479"
        },
        "1f47a": {
          "name": "goblin",
          "shortname": ":japanese_goblin:",
          "shortname_alternates": [],
          "keywords": [
            "creature",
            "face",
            "fairy tale",
            "fantasy",
            "monster"
          ],
          "unicode_output": "1f47a"
        },
        "1f921": {
          "name": "clown face",
          "shortname": ":clown:",
          "shortname_alternates": [
            ":clown_face:"
          ],
          "keywords": [
            "clown",
            "face"
          ],
          "unicode_output": "1f921"
        },
        "1f4a9": {
          "name": "pile of poo",
          "shortname": ":poop:",
          "shortname_alternates": [
            ":shit:",
            ":hankey:",
            ":poo:"
          ],
          "keywords": [
            "comic",
            "dung",
            "face",
            "monster",
            "poo",
            "poop"
          ],
          "unicode_output": "1f4a9"
        },
        "1f47b": {
          "name": "ghost",
          "shortname": ":ghost:",
          "shortname_alternates": [],
          "keywords": [
            "creature",
            "face",
            "fairy tale",
            "fantasy",
            "monster"
          ],
          "unicode_output": "1f47b"
        },
        "1f480": {
          "name": "skull",
          "shortname": ":skull:",
          "shortname_alternates": [
            ":skeleton:"
          ],
          "keywords": [
            "death",
            "face",
            "fairy tale",
            "monster"
          ],
          "unicode_output": "1f480"
        },
        "2620": {
          "name": "skull and crossbones",
          "shortname": ":skull_crossbones:",
          "shortname_alternates": [
            ":skull_and_crossbones:"
          ],
          "keywords": [
            "crossbones",
            "death",
            "face",
            "monster",
            "skull"
          ],
          "unicode_output": "2620"
        },
        "1f47d": {
          "name": "alien",
          "shortname": ":alien:",
          "shortname_alternates": [],
          "keywords": [
            "creature",
            "extraterrestrial",
            "face",
            "fairy tale",
            "fantasy",
            "monster",
            "ufo"
          ],
          "unicode_output": "1f47d"
        },
        "1f47e": {
          "name": "alien monster",
          "shortname": ":space_invader:",
          "shortname_alternates": [],
          "keywords": [
            "alien",
            "creature",
            "extraterrestrial",
            "face",
            "fairy tale",
            "fantasy",
            "monster",
            "ufo"
          ],
          "unicode_output": "1f47e"
        },
        "1f916": {
          "name": "robot face",
          "shortname": ":robot:",
          "shortname_alternates": [
            ":robot_face:"
          ],
          "keywords": [
            "face",
            "monster",
            "robot"
          ],
          "unicode_output": "1f916"
        },
        "1f383": {
          "name": "jack-o-lantern",
          "shortname": ":jack_o_lantern:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "halloween",
            "jack",
            "lantern"
          ],
          "unicode_output": "1f383"
        },
        "1f63a": {
          "name": "grinning cat face",
          "shortname": ":smiley_cat:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "face",
            "mouth",
            "open",
            "smile"
          ],
          "unicode_output": "1f63a"
        },
        "1f638": {
          "name": "grinning cat face with smiling eyes",
          "shortname": ":smile_cat:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "eye",
            "face",
            "grin",
            "smile"
          ],
          "unicode_output": "1f638"
        },
        "1f639": {
          "name": "cat face with tears of joy",
          "shortname": ":joy_cat:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "face",
            "joy",
            "tear"
          ],
          "unicode_output": "1f639"
        },
        "1f63b": {
          "name": "smiling cat face with heart-eyes",
          "shortname": ":heart_eyes_cat:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "eye",
            "face",
            "love",
            "smile"
          ],
          "unicode_output": "1f63b"
        },
        "1f63c": {
          "name": "cat face with wry smile",
          "shortname": ":smirk_cat:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "face",
            "ironic",
            "smile",
            "wry"
          ],
          "unicode_output": "1f63c"
        },
        "1f63d": {
          "name": "kissing cat face",
          "shortname": ":kissing_cat:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "eye",
            "face",
            "kiss"
          ],
          "unicode_output": "1f63d"
        },
        "1f640": {
          "name": "weary cat face",
          "shortname": ":scream_cat:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "face",
            "oh",
            "surprised",
            "weary"
          ],
          "unicode_output": "1f640"
        },
        "1f63f": {
          "name": "crying cat face",
          "shortname": ":crying_cat_face:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "cry",
            "face",
            "sad",
            "tear"
          ],
          "unicode_output": "1f63f"
        },
        "1f63e": {
          "name": "pouting cat face",
          "shortname": ":pouting_cat:",
          "shortname_alternates": [],
          "keywords": [
            "cat",
            "face",
            "pouting"
          ],
          "unicode_output": "1f63e"
        },
        "1f932": {
          "name": "palms up together",
          "shortname": ":palms_up_together:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f932"
        },
        "1f932-1f3fb": {
          "name": "palms up together: light skin tone",
          "shortname": ":palms_up_together_tone1:",
          "shortname_alternates": [
            ":palms_up_together_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "prayer"
          ],
          "unicode_output": "1f932-1f3fb"
        },
        "1f932-1f3fc": {
          "name": "palms up together: medium-light skin tone",
          "shortname": ":palms_up_together_tone2:",
          "shortname_alternates": [
            ":palms_up_together_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "prayer"
          ],
          "unicode_output": "1f932-1f3fc"
        },
        "1f932-1f3fd": {
          "name": "palms up together: medium skin tone",
          "shortname": ":palms_up_together_tone3:",
          "shortname_alternates": [
            ":palms_up_together_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "prayer"
          ],
          "unicode_output": "1f932-1f3fd"
        },
        "1f932-1f3fe": {
          "name": "palms up together: medium-dark skin tone",
          "shortname": ":palms_up_together_tone4:",
          "shortname_alternates": [
            ":palms_up_together_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "prayer"
          ],
          "unicode_output": "1f932-1f3fe"
        },
        "1f932-1f3ff": {
          "name": "palms up together: dark skin tone",
          "shortname": ":palms_up_together_tone5:",
          "shortname_alternates": [
            ":palms_up_together_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "prayer"
          ],
          "unicode_output": "1f932-1f3ff"
        },
        "1f450": {
          "name": "open hands",
          "shortname": ":open_hands:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "open"
          ],
          "unicode_output": "1f450"
        },
        "1f450-1f3fb": {
          "name": "open hands: light skin tone",
          "shortname": ":open_hands_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "light skin tone",
            "open"
          ],
          "unicode_output": "1f450-1f3fb"
        },
        "1f450-1f3fc": {
          "name": "open hands: medium-light skin tone",
          "shortname": ":open_hands_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-light skin tone",
            "open"
          ],
          "unicode_output": "1f450-1f3fc"
        },
        "1f450-1f3fd": {
          "name": "open hands: medium skin tone",
          "shortname": ":open_hands_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium skin tone",
            "open"
          ],
          "unicode_output": "1f450-1f3fd"
        },
        "1f450-1f3fe": {
          "name": "open hands: medium-dark skin tone",
          "shortname": ":open_hands_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-dark skin tone",
            "open"
          ],
          "unicode_output": "1f450-1f3fe"
        },
        "1f450-1f3ff": {
          "name": "open hands: dark skin tone",
          "shortname": ":open_hands_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "hand",
            "open"
          ],
          "unicode_output": "1f450-1f3ff"
        },
        "1f64c": {
          "name": "raising hands",
          "shortname": ":raised_hands:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "gesture",
            "hand",
            "hooray",
            "raised"
          ],
          "unicode_output": "1f64c"
        },
        "1f64c-1f3fb": {
          "name": "raising hands: light skin tone",
          "shortname": ":raised_hands_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "gesture",
            "hand",
            "hooray",
            "light skin tone",
            "raised"
          ],
          "unicode_output": "1f64c-1f3fb"
        },
        "1f64c-1f3fc": {
          "name": "raising hands: medium-light skin tone",
          "shortname": ":raised_hands_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "gesture",
            "hand",
            "hooray",
            "medium-light skin tone",
            "raised"
          ],
          "unicode_output": "1f64c-1f3fc"
        },
        "1f64c-1f3fd": {
          "name": "raising hands: medium skin tone",
          "shortname": ":raised_hands_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "gesture",
            "hand",
            "hooray",
            "medium skin tone",
            "raised"
          ],
          "unicode_output": "1f64c-1f3fd"
        },
        "1f64c-1f3fe": {
          "name": "raising hands: medium-dark skin tone",
          "shortname": ":raised_hands_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "gesture",
            "hand",
            "hooray",
            "medium-dark skin tone",
            "raised"
          ],
          "unicode_output": "1f64c-1f3fe"
        },
        "1f64c-1f3ff": {
          "name": "raising hands: dark skin tone",
          "shortname": ":raised_hands_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "dark skin tone",
            "gesture",
            "hand",
            "hooray",
            "raised"
          ],
          "unicode_output": "1f64c-1f3ff"
        },
        "1f44f": {
          "name": "clapping hands",
          "shortname": ":clap:",
          "shortname_alternates": [],
          "keywords": [
            "clap",
            "hand"
          ],
          "unicode_output": "1f44f"
        },
        "1f44f-1f3fb": {
          "name": "clapping hands: light skin tone",
          "shortname": ":clap_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "clap",
            "hand",
            "light skin tone"
          ],
          "unicode_output": "1f44f-1f3fb"
        },
        "1f44f-1f3fc": {
          "name": "clapping hands: medium-light skin tone",
          "shortname": ":clap_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "clap",
            "hand",
            "medium-light skin tone"
          ],
          "unicode_output": "1f44f-1f3fc"
        },
        "1f44f-1f3fd": {
          "name": "clapping hands: medium skin tone",
          "shortname": ":clap_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "clap",
            "hand",
            "medium skin tone"
          ],
          "unicode_output": "1f44f-1f3fd"
        },
        "1f44f-1f3fe": {
          "name": "clapping hands: medium-dark skin tone",
          "shortname": ":clap_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "clap",
            "hand",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f44f-1f3fe"
        },
        "1f44f-1f3ff": {
          "name": "clapping hands: dark skin tone",
          "shortname": ":clap_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "clap",
            "dark skin tone",
            "hand"
          ],
          "unicode_output": "1f44f-1f3ff"
        },
        "1f91d": {
          "name": "handshake",
          "shortname": ":handshake:",
          "shortname_alternates": [
            ":shaking_hands:"
          ],
          "keywords": [
            "agreement",
            "hand",
            "handshake",
            "meeting",
            "shake"
          ],
          "unicode_output": "1f91d"
        },
        "1f44d": {
          "name": "thumbs up",
          "shortname": ":thumbsup:",
          "shortname_alternates": [
            ":+1:",
            ":thumbup:"
          ],
          "keywords": [
            "+1",
            "hand",
            "thumb",
            "up"
          ],
          "unicode_output": "1f44d"
        },
        "1f44d-1f3fb": {
          "name": "thumbs up: light skin tone",
          "shortname": ":thumbsup_tone1:",
          "shortname_alternates": [
            ":+1_tone1:",
            ":thumbup_tone1:"
          ],
          "keywords": [
            "+1",
            "hand",
            "light skin tone",
            "thumb",
            "up"
          ],
          "unicode_output": "1f44d-1f3fb"
        },
        "1f44d-1f3fc": {
          "name": "thumbs up: medium-light skin tone",
          "shortname": ":thumbsup_tone2:",
          "shortname_alternates": [
            ":+1_tone2:",
            ":thumbup_tone2:"
          ],
          "keywords": [
            "+1",
            "hand",
            "medium-light skin tone",
            "thumb",
            "up"
          ],
          "unicode_output": "1f44d-1f3fc"
        },
        "1f44d-1f3fd": {
          "name": "thumbs up: medium skin tone",
          "shortname": ":thumbsup_tone3:",
          "shortname_alternates": [
            ":+1_tone3:",
            ":thumbup_tone3:"
          ],
          "keywords": [
            "+1",
            "hand",
            "medium skin tone",
            "thumb",
            "up"
          ],
          "unicode_output": "1f44d-1f3fd"
        },
        "1f44d-1f3fe": {
          "name": "thumbs up: medium-dark skin tone",
          "shortname": ":thumbsup_tone4:",
          "shortname_alternates": [
            ":+1_tone4:",
            ":thumbup_tone4:"
          ],
          "keywords": [
            "+1",
            "hand",
            "medium-dark skin tone",
            "thumb",
            "up"
          ],
          "unicode_output": "1f44d-1f3fe"
        },
        "1f44d-1f3ff": {
          "name": "thumbs up: dark skin tone",
          "shortname": ":thumbsup_tone5:",
          "shortname_alternates": [
            ":+1_tone5:",
            ":thumbup_tone5:"
          ],
          "keywords": [
            "+1",
            "dark skin tone",
            "hand",
            "thumb",
            "up"
          ],
          "unicode_output": "1f44d-1f3ff"
        },
        "1f44e": {
          "name": "thumbs down",
          "shortname": ":thumbsdown:",
          "shortname_alternates": [
            ":-1:",
            ":thumbdown:"
          ],
          "keywords": [
            "-1",
            "down",
            "hand",
            "thumb"
          ],
          "unicode_output": "1f44e"
        },
        "1f44e-1f3fb": {
          "name": "thumbs down: light skin tone",
          "shortname": ":thumbsdown_tone1:",
          "shortname_alternates": [
            ":-1_tone1:",
            ":thumbdown_tone1:"
          ],
          "keywords": [
            "-1",
            "down",
            "hand",
            "light skin tone",
            "thumb"
          ],
          "unicode_output": "1f44e-1f3fb"
        },
        "1f44e-1f3fc": {
          "name": "thumbs down: medium-light skin tone",
          "shortname": ":thumbsdown_tone2:",
          "shortname_alternates": [
            ":-1_tone2:",
            ":thumbdown_tone2:"
          ],
          "keywords": [
            "-1",
            "down",
            "hand",
            "medium-light skin tone",
            "thumb"
          ],
          "unicode_output": "1f44e-1f3fc"
        },
        "1f44e-1f3fd": {
          "name": "thumbs down: medium skin tone",
          "shortname": ":thumbsdown_tone3:",
          "shortname_alternates": [
            ":-1_tone3:",
            ":thumbdown_tone3:"
          ],
          "keywords": [
            "-1",
            "down",
            "hand",
            "medium skin tone",
            "thumb"
          ],
          "unicode_output": "1f44e-1f3fd"
        },
        "1f44e-1f3fe": {
          "name": "thumbs down: medium-dark skin tone",
          "shortname": ":thumbsdown_tone4:",
          "shortname_alternates": [
            ":-1_tone4:",
            ":thumbdown_tone4:"
          ],
          "keywords": [
            "-1",
            "down",
            "hand",
            "medium-dark skin tone",
            "thumb"
          ],
          "unicode_output": "1f44e-1f3fe"
        },
        "1f44e-1f3ff": {
          "name": "thumbs down: dark skin tone",
          "shortname": ":thumbsdown_tone5:",
          "shortname_alternates": [
            ":-1_tone5:",
            ":thumbdown_tone5:"
          ],
          "keywords": [
            "-1",
            "dark skin tone",
            "down",
            "hand",
            "thumb"
          ],
          "unicode_output": "1f44e-1f3ff"
        },
        "1f44a": {
          "name": "oncoming fist",
          "shortname": ":punch:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "punch"
          ],
          "unicode_output": "1f44a"
        },
        "1f44a-1f3fb": {
          "name": "oncoming fist: light skin tone",
          "shortname": ":punch_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "light skin tone",
            "punch"
          ],
          "unicode_output": "1f44a-1f3fb"
        },
        "1f44a-1f3fc": {
          "name": "oncoming fist: medium-light skin tone",
          "shortname": ":punch_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "medium-light skin tone",
            "punch"
          ],
          "unicode_output": "1f44a-1f3fc"
        },
        "1f44a-1f3fd": {
          "name": "oncoming fist: medium skin tone",
          "shortname": ":punch_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "medium skin tone",
            "punch"
          ],
          "unicode_output": "1f44a-1f3fd"
        },
        "1f44a-1f3fe": {
          "name": "oncoming fist: medium-dark skin tone",
          "shortname": ":punch_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "medium-dark skin tone",
            "punch"
          ],
          "unicode_output": "1f44a-1f3fe"
        },
        "1f44a-1f3ff": {
          "name": "oncoming fist: dark skin tone",
          "shortname": ":punch_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "dark skin tone",
            "fist",
            "hand",
            "punch"
          ],
          "unicode_output": "1f44a-1f3ff"
        },
        "270a": {
          "name": "raised fist",
          "shortname": ":fist:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "punch"
          ],
          "unicode_output": "270a"
        },
        "270a-1f3fb": {
          "name": "raised fist: light skin tone",
          "shortname": ":fist_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "light skin tone",
            "punch"
          ],
          "unicode_output": "270a-1f3fb"
        },
        "270a-1f3fc": {
          "name": "raised fist: medium-light skin tone",
          "shortname": ":fist_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "medium-light skin tone",
            "punch"
          ],
          "unicode_output": "270a-1f3fc"
        },
        "270a-1f3fd": {
          "name": "raised fist: medium skin tone",
          "shortname": ":fist_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "medium skin tone",
            "punch"
          ],
          "unicode_output": "270a-1f3fd"
        },
        "270a-1f3fe": {
          "name": "raised fist: medium-dark skin tone",
          "shortname": ":fist_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "fist",
            "hand",
            "medium-dark skin tone",
            "punch"
          ],
          "unicode_output": "270a-1f3fe"
        },
        "270a-1f3ff": {
          "name": "raised fist: dark skin tone",
          "shortname": ":fist_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "clenched",
            "dark skin tone",
            "fist",
            "hand",
            "punch"
          ],
          "unicode_output": "270a-1f3ff"
        },
        "1f91b": {
          "name": "left-facing fist",
          "shortname": ":left_facing_fist:",
          "shortname_alternates": [
            ":left_fist:"
          ],
          "keywords": [
            "fist",
            "leftwards"
          ],
          "unicode_output": "1f91b"
        },
        "1f91b-1f3fb": {
          "name": "left-facing fist: light skin tone",
          "shortname": ":left_facing_fist_tone1:",
          "shortname_alternates": [
            ":left_fist_tone1:"
          ],
          "keywords": [
            "fist",
            "leftwards",
            "light skin tone"
          ],
          "unicode_output": "1f91b-1f3fb"
        },
        "1f91b-1f3fc": {
          "name": "left-facing fist: medium-light skin tone",
          "shortname": ":left_facing_fist_tone2:",
          "shortname_alternates": [
            ":left_fist_tone2:"
          ],
          "keywords": [
            "fist",
            "leftwards",
            "medium-light skin tone"
          ],
          "unicode_output": "1f91b-1f3fc"
        },
        "1f91b-1f3fd": {
          "name": "left-facing fist: medium skin tone",
          "shortname": ":left_facing_fist_tone3:",
          "shortname_alternates": [
            ":left_fist_tone3:"
          ],
          "keywords": [
            "fist",
            "leftwards",
            "medium skin tone"
          ],
          "unicode_output": "1f91b-1f3fd"
        },
        "1f91b-1f3fe": {
          "name": "left-facing fist: medium-dark skin tone",
          "shortname": ":left_facing_fist_tone4:",
          "shortname_alternates": [
            ":left_fist_tone4:"
          ],
          "keywords": [
            "fist",
            "leftwards",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f91b-1f3fe"
        },
        "1f91b-1f3ff": {
          "name": "left-facing fist: dark skin tone",
          "shortname": ":left_facing_fist_tone5:",
          "shortname_alternates": [
            ":left_fist_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "fist",
            "leftwards"
          ],
          "unicode_output": "1f91b-1f3ff"
        },
        "1f91c": {
          "name": "right-facing fist",
          "shortname": ":right_facing_fist:",
          "shortname_alternates": [
            ":right_fist:"
          ],
          "keywords": [
            "fist",
            "rightwards"
          ],
          "unicode_output": "1f91c"
        },
        "1f91c-1f3fb": {
          "name": "right-facing fist: light skin tone",
          "shortname": ":right_facing_fist_tone1:",
          "shortname_alternates": [
            ":right_fist_tone1:"
          ],
          "keywords": [
            "fist",
            "light skin tone",
            "rightwards"
          ],
          "unicode_output": "1f91c-1f3fb"
        },
        "1f91c-1f3fc": {
          "name": "right-facing fist: medium-light skin tone",
          "shortname": ":right_facing_fist_tone2:",
          "shortname_alternates": [
            ":right_fist_tone2:"
          ],
          "keywords": [
            "fist",
            "medium-light skin tone",
            "rightwards"
          ],
          "unicode_output": "1f91c-1f3fc"
        },
        "1f91c-1f3fd": {
          "name": "right-facing fist: medium skin tone",
          "shortname": ":right_facing_fist_tone3:",
          "shortname_alternates": [
            ":right_fist_tone3:"
          ],
          "keywords": [
            "fist",
            "medium skin tone",
            "rightwards"
          ],
          "unicode_output": "1f91c-1f3fd"
        },
        "1f91c-1f3fe": {
          "name": "right-facing fist: medium-dark skin tone",
          "shortname": ":right_facing_fist_tone4:",
          "shortname_alternates": [
            ":right_fist_tone4:"
          ],
          "keywords": [
            "fist",
            "medium-dark skin tone",
            "rightwards"
          ],
          "unicode_output": "1f91c-1f3fe"
        },
        "1f91c-1f3ff": {
          "name": "right-facing fist: dark skin tone",
          "shortname": ":right_facing_fist_tone5:",
          "shortname_alternates": [
            ":right_fist_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "fist",
            "rightwards"
          ],
          "unicode_output": "1f91c-1f3ff"
        },
        "1f91e": {
          "name": "crossed fingers",
          "shortname": ":fingers_crossed:",
          "shortname_alternates": [
            ":hand_with_index_and_middle_finger_crossed:"
          ],
          "keywords": [
            "cross",
            "finger",
            "hand",
            "luck"
          ],
          "unicode_output": "1f91e"
        },
        "1f91e-1f3fb": {
          "name": "crossed fingers: light skin tone",
          "shortname": ":fingers_crossed_tone1:",
          "shortname_alternates": [
            ":hand_with_index_and_middle_fingers_crossed_tone1:"
          ],
          "keywords": [
            "cross",
            "finger",
            "hand",
            "light skin tone",
            "luck"
          ],
          "unicode_output": "1f91e-1f3fb"
        },
        "1f91e-1f3fc": {
          "name": "crossed fingers: medium-light skin tone",
          "shortname": ":fingers_crossed_tone2:",
          "shortname_alternates": [
            ":hand_with_index_and_middle_fingers_crossed_tone2:"
          ],
          "keywords": [
            "cross",
            "finger",
            "hand",
            "luck",
            "medium-light skin tone"
          ],
          "unicode_output": "1f91e-1f3fc"
        },
        "1f91e-1f3fd": {
          "name": "crossed fingers: medium skin tone",
          "shortname": ":fingers_crossed_tone3:",
          "shortname_alternates": [
            ":hand_with_index_and_middle_fingers_crossed_tone3:"
          ],
          "keywords": [
            "cross",
            "finger",
            "hand",
            "luck",
            "medium skin tone"
          ],
          "unicode_output": "1f91e-1f3fd"
        },
        "1f91e-1f3fe": {
          "name": "crossed fingers: medium-dark skin tone",
          "shortname": ":fingers_crossed_tone4:",
          "shortname_alternates": [
            ":hand_with_index_and_middle_fingers_crossed_tone4:"
          ],
          "keywords": [
            "cross",
            "finger",
            "hand",
            "luck",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f91e-1f3fe"
        },
        "1f91e-1f3ff": {
          "name": "crossed fingers: dark skin tone",
          "shortname": ":fingers_crossed_tone5:",
          "shortname_alternates": [
            ":hand_with_index_and_middle_fingers_crossed_tone5:"
          ],
          "keywords": [
            "cross",
            "dark skin tone",
            "finger",
            "hand",
            "luck"
          ],
          "unicode_output": "1f91e-1f3ff"
        },
        "270c": {
          "name": "victory hand",
          "shortname": ":v:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "v",
            "victory"
          ],
          "unicode_output": "270c"
        },
        "270c-1f3fb": {
          "name": "victory hand: light skin tone",
          "shortname": ":v_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "light skin tone",
            "v",
            "victory"
          ],
          "unicode_output": "270c-1f3fb"
        },
        "270c-1f3fc": {
          "name": "victory hand: medium-light skin tone",
          "shortname": ":v_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-light skin tone",
            "v",
            "victory"
          ],
          "unicode_output": "270c-1f3fc"
        },
        "270c-1f3fd": {
          "name": "victory hand: medium skin tone",
          "shortname": ":v_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium skin tone",
            "v",
            "victory"
          ],
          "unicode_output": "270c-1f3fd"
        },
        "270c-1f3fe": {
          "name": "victory hand: medium-dark skin tone",
          "shortname": ":v_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-dark skin tone",
            "v",
            "victory"
          ],
          "unicode_output": "270c-1f3fe"
        },
        "270c-1f3ff": {
          "name": "victory hand: dark skin tone",
          "shortname": ":v_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "hand",
            "v",
            "victory"
          ],
          "unicode_output": "270c-1f3ff"
        },
        "1f91f": {
          "name": "love-you gesture",
          "shortname": ":love_you_gesture:",
          "shortname_alternates": [],
          "keywords": [
            "ILY",
            "hand"
          ],
          "unicode_output": "1f91f"
        },
        "1f91f-1f3fb": {
          "name": "love-you gesture: light skin tone",
          "shortname": ":love_you_gesture_tone1:",
          "shortname_alternates": [
            ":love_you_gesture_light_skin_tone:"
          ],
          "keywords": [
            "ILY",
            "hand",
            "light skin tone"
          ],
          "unicode_output": "1f91f-1f3fb"
        },
        "1f91f-1f3fc": {
          "name": "love-you gesture: medium-light skin tone",
          "shortname": ":love_you_gesture_tone2:",
          "shortname_alternates": [
            ":love_you_gesture_medium_light_skin_tone:"
          ],
          "keywords": [
            "ILY",
            "hand",
            "medium-light skin tone"
          ],
          "unicode_output": "1f91f-1f3fc"
        },
        "1f91f-1f3fd": {
          "name": "love-you gesture: medium skin tone",
          "shortname": ":love_you_gesture_tone3:",
          "shortname_alternates": [
            ":love_you_gesture_medium_skin_tone:"
          ],
          "keywords": [
            "ILY",
            "hand",
            "medium skin tone"
          ],
          "unicode_output": "1f91f-1f3fd"
        },
        "1f91f-1f3fe": {
          "name": "love-you gesture: medium-dark skin tone",
          "shortname": ":love_you_gesture_tone4:",
          "shortname_alternates": [
            ":love_you_gesture_medium_dark_skin_tone:"
          ],
          "keywords": [
            "ILY",
            "hand",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f91f-1f3fe"
        },
        "1f91f-1f3ff": {
          "name": "love-you gesture: dark skin tone",
          "shortname": ":love_you_gesture_tone5:",
          "shortname_alternates": [
            ":love_you_gesture_dark_skin_tone:"
          ],
          "keywords": [
            "ILY",
            "dark skin tone",
            "hand"
          ],
          "unicode_output": "1f91f-1f3ff"
        },
        "1f918": {
          "name": "sign of the horns",
          "shortname": ":metal:",
          "shortname_alternates": [
            ":sign_of_the_horns:"
          ],
          "keywords": [
            "finger",
            "hand",
            "horns",
            "rock-on"
          ],
          "unicode_output": "1f918"
        },
        "1f918-1f3fb": {
          "name": "sign of the horns: light skin tone",
          "shortname": ":metal_tone1:",
          "shortname_alternates": [
            ":sign_of_the_horns_tone1:"
          ],
          "keywords": [
            "finger",
            "hand",
            "horns",
            "light skin tone",
            "rock-on"
          ],
          "unicode_output": "1f918-1f3fb"
        },
        "1f918-1f3fc": {
          "name": "sign of the horns: medium-light skin tone",
          "shortname": ":metal_tone2:",
          "shortname_alternates": [
            ":sign_of_the_horns_tone2:"
          ],
          "keywords": [
            "finger",
            "hand",
            "horns",
            "medium-light skin tone",
            "rock-on"
          ],
          "unicode_output": "1f918-1f3fc"
        },
        "1f918-1f3fd": {
          "name": "sign of the horns: medium skin tone",
          "shortname": ":metal_tone3:",
          "shortname_alternates": [
            ":sign_of_the_horns_tone3:"
          ],
          "keywords": [
            "finger",
            "hand",
            "horns",
            "medium skin tone",
            "rock-on"
          ],
          "unicode_output": "1f918-1f3fd"
        },
        "1f918-1f3fe": {
          "name": "sign of the horns: medium-dark skin tone",
          "shortname": ":metal_tone4:",
          "shortname_alternates": [
            ":sign_of_the_horns_tone4:"
          ],
          "keywords": [
            "finger",
            "hand",
            "horns",
            "medium-dark skin tone",
            "rock-on"
          ],
          "unicode_output": "1f918-1f3fe"
        },
        "1f918-1f3ff": {
          "name": "sign of the horns: dark skin tone",
          "shortname": ":metal_tone5:",
          "shortname_alternates": [
            ":sign_of_the_horns_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "finger",
            "hand",
            "horns",
            "rock-on"
          ],
          "unicode_output": "1f918-1f3ff"
        },
        "1f44c": {
          "name": "OK hand",
          "shortname": ":ok_hand:",
          "shortname_alternates": [],
          "keywords": [
            "OK",
            "hand"
          ],
          "unicode_output": "1f44c"
        },
        "1f44c-1f3fb": {
          "name": "OK hand: light skin tone",
          "shortname": ":ok_hand_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "OK",
            "hand",
            "light skin tone"
          ],
          "unicode_output": "1f44c-1f3fb"
        },
        "1f44c-1f3fc": {
          "name": "OK hand: medium-light skin tone",
          "shortname": ":ok_hand_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "OK",
            "hand",
            "medium-light skin tone"
          ],
          "unicode_output": "1f44c-1f3fc"
        },
        "1f44c-1f3fd": {
          "name": "OK hand: medium skin tone",
          "shortname": ":ok_hand_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "OK",
            "hand",
            "medium skin tone"
          ],
          "unicode_output": "1f44c-1f3fd"
        },
        "1f44c-1f3fe": {
          "name": "OK hand: medium-dark skin tone",
          "shortname": ":ok_hand_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "OK",
            "hand",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f44c-1f3fe"
        },
        "1f44c-1f3ff": {
          "name": "OK hand: dark skin tone",
          "shortname": ":ok_hand_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "OK",
            "dark skin tone",
            "hand"
          ],
          "unicode_output": "1f44c-1f3ff"
        },
        "1f448": {
          "name": "backhand index pointing left",
          "shortname": ":point_left:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "point"
          ],
          "unicode_output": "1f448"
        },
        "1f448-1f3fb": {
          "name": "backhand index pointing left: light skin tone",
          "shortname": ":point_left_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "light skin tone",
            "point"
          ],
          "unicode_output": "1f448-1f3fb"
        },
        "1f448-1f3fc": {
          "name": "backhand index pointing left: medium-light skin tone",
          "shortname": ":point_left_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "medium-light skin tone",
            "point"
          ],
          "unicode_output": "1f448-1f3fc"
        },
        "1f448-1f3fd": {
          "name": "backhand index pointing left: medium skin tone",
          "shortname": ":point_left_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "medium skin tone",
            "point"
          ],
          "unicode_output": "1f448-1f3fd"
        },
        "1f448-1f3fe": {
          "name": "backhand index pointing left: medium-dark skin tone",
          "shortname": ":point_left_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "medium-dark skin tone",
            "point"
          ],
          "unicode_output": "1f448-1f3fe"
        },
        "1f448-1f3ff": {
          "name": "backhand index pointing left: dark skin tone",
          "shortname": ":point_left_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "dark skin tone",
            "finger",
            "hand",
            "index",
            "point"
          ],
          "unicode_output": "1f448-1f3ff"
        },
        "1f449": {
          "name": "backhand index pointing right",
          "shortname": ":point_right:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "point"
          ],
          "unicode_output": "1f449"
        },
        "1f449-1f3fb": {
          "name": "backhand index pointing right: light skin tone",
          "shortname": ":point_right_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "light skin tone",
            "point"
          ],
          "unicode_output": "1f449-1f3fb"
        },
        "1f449-1f3fc": {
          "name": "backhand index pointing right: medium-light skin tone",
          "shortname": ":point_right_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "medium-light skin tone",
            "point"
          ],
          "unicode_output": "1f449-1f3fc"
        },
        "1f449-1f3fd": {
          "name": "backhand index pointing right: medium skin tone",
          "shortname": ":point_right_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "medium skin tone",
            "point"
          ],
          "unicode_output": "1f449-1f3fd"
        },
        "1f449-1f3fe": {
          "name": "backhand index pointing right: medium-dark skin tone",
          "shortname": ":point_right_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "medium-dark skin tone",
            "point"
          ],
          "unicode_output": "1f449-1f3fe"
        },
        "1f449-1f3ff": {
          "name": "backhand index pointing right: dark skin tone",
          "shortname": ":point_right_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "dark skin tone",
            "finger",
            "hand",
            "index",
            "point"
          ],
          "unicode_output": "1f449-1f3ff"
        },
        "1f446": {
          "name": "backhand index pointing up",
          "shortname": ":point_up_2:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "point",
            "up"
          ],
          "unicode_output": "1f446"
        },
        "1f446-1f3fb": {
          "name": "backhand index pointing up: light skin tone",
          "shortname": ":point_up_2_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "light skin tone",
            "point",
            "up"
          ],
          "unicode_output": "1f446-1f3fb"
        },
        "1f446-1f3fc": {
          "name": "backhand index pointing up: medium-light skin tone",
          "shortname": ":point_up_2_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "medium-light skin tone",
            "point",
            "up"
          ],
          "unicode_output": "1f446-1f3fc"
        },
        "1f446-1f3fd": {
          "name": "backhand index pointing up: medium skin tone",
          "shortname": ":point_up_2_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "medium skin tone",
            "point",
            "up"
          ],
          "unicode_output": "1f446-1f3fd"
        },
        "1f446-1f3fe": {
          "name": "backhand index pointing up: medium-dark skin tone",
          "shortname": ":point_up_2_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "finger",
            "hand",
            "index",
            "medium-dark skin tone",
            "point",
            "up"
          ],
          "unicode_output": "1f446-1f3fe"
        },
        "1f446-1f3ff": {
          "name": "backhand index pointing up: dark skin tone",
          "shortname": ":point_up_2_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "dark skin tone",
            "finger",
            "hand",
            "index",
            "point",
            "up"
          ],
          "unicode_output": "1f446-1f3ff"
        },
        "1f447": {
          "name": "backhand index pointing down",
          "shortname": ":point_down:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "down",
            "finger",
            "hand",
            "index",
            "point"
          ],
          "unicode_output": "1f447"
        },
        "1f447-1f3fb": {
          "name": "backhand index pointing down: light skin tone",
          "shortname": ":point_down_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "down",
            "finger",
            "hand",
            "index",
            "light skin tone",
            "point"
          ],
          "unicode_output": "1f447-1f3fb"
        },
        "1f447-1f3fc": {
          "name": "backhand index pointing down: medium-light skin tone",
          "shortname": ":point_down_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "down",
            "finger",
            "hand",
            "index",
            "medium-light skin tone",
            "point"
          ],
          "unicode_output": "1f447-1f3fc"
        },
        "1f447-1f3fd": {
          "name": "backhand index pointing down: medium skin tone",
          "shortname": ":point_down_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "down",
            "finger",
            "hand",
            "index",
            "medium skin tone",
            "point"
          ],
          "unicode_output": "1f447-1f3fd"
        },
        "1f447-1f3fe": {
          "name": "backhand index pointing down: medium-dark skin tone",
          "shortname": ":point_down_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "down",
            "finger",
            "hand",
            "index",
            "medium-dark skin tone",
            "point"
          ],
          "unicode_output": "1f447-1f3fe"
        },
        "1f447-1f3ff": {
          "name": "backhand index pointing down: dark skin tone",
          "shortname": ":point_down_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "backhand",
            "dark skin tone",
            "down",
            "finger",
            "hand",
            "index",
            "point"
          ],
          "unicode_output": "1f447-1f3ff"
        },
        "261d": {
          "name": "index pointing up",
          "shortname": ":point_up:",
          "shortname_alternates": [],
          "keywords": [
            "finger",
            "hand",
            "index",
            "point",
            "up"
          ],
          "unicode_output": "261d"
        },
        "261d-1f3fb": {
          "name": "index pointing up: light skin tone",
          "shortname": ":point_up_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "finger",
            "hand",
            "index",
            "light skin tone",
            "point",
            "up"
          ],
          "unicode_output": "261d-1f3fb"
        },
        "261d-1f3fc": {
          "name": "index pointing up: medium-light skin tone",
          "shortname": ":point_up_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "finger",
            "hand",
            "index",
            "medium-light skin tone",
            "point",
            "up"
          ],
          "unicode_output": "261d-1f3fc"
        },
        "261d-1f3fd": {
          "name": "index pointing up: medium skin tone",
          "shortname": ":point_up_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "finger",
            "hand",
            "index",
            "medium skin tone",
            "point",
            "up"
          ],
          "unicode_output": "261d-1f3fd"
        },
        "261d-1f3fe": {
          "name": "index pointing up: medium-dark skin tone",
          "shortname": ":point_up_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "finger",
            "hand",
            "index",
            "medium-dark skin tone",
            "point",
            "up"
          ],
          "unicode_output": "261d-1f3fe"
        },
        "261d-1f3ff": {
          "name": "index pointing up: dark skin tone",
          "shortname": ":point_up_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "finger",
            "hand",
            "index",
            "point",
            "up"
          ],
          "unicode_output": "261d-1f3ff"
        },
        "270b": {
          "name": "raised hand",
          "shortname": ":raised_hand:",
          "shortname_alternates": [],
          "keywords": [
            "hand"
          ],
          "unicode_output": "270b"
        },
        "270b-1f3fb": {
          "name": "raised hand: light skin tone",
          "shortname": ":raised_hand_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "light skin tone"
          ],
          "unicode_output": "270b-1f3fb"
        },
        "270b-1f3fc": {
          "name": "raised hand: medium-light skin tone",
          "shortname": ":raised_hand_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-light skin tone"
          ],
          "unicode_output": "270b-1f3fc"
        },
        "270b-1f3fd": {
          "name": "raised hand: medium skin tone",
          "shortname": ":raised_hand_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium skin tone"
          ],
          "unicode_output": "270b-1f3fd"
        },
        "270b-1f3fe": {
          "name": "raised hand: medium-dark skin tone",
          "shortname": ":raised_hand_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-dark skin tone"
          ],
          "unicode_output": "270b-1f3fe"
        },
        "270b-1f3ff": {
          "name": "raised hand: dark skin tone",
          "shortname": ":raised_hand_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "hand"
          ],
          "unicode_output": "270b-1f3ff"
        },
        "1f91a": {
          "name": "raised back of hand",
          "shortname": ":raised_back_of_hand:",
          "shortname_alternates": [
            ":back_of_hand:"
          ],
          "keywords": [
            "backhand",
            "raised"
          ],
          "unicode_output": "1f91a"
        },
        "1f91a-1f3fb": {
          "name": "raised back of hand: light skin tone",
          "shortname": ":raised_back_of_hand_tone1:",
          "shortname_alternates": [
            ":back_of_hand_tone1:"
          ],
          "keywords": [
            "backhand",
            "light skin tone",
            "raised"
          ],
          "unicode_output": "1f91a-1f3fb"
        },
        "1f91a-1f3fc": {
          "name": "raised back of hand: medium-light skin tone",
          "shortname": ":raised_back_of_hand_tone2:",
          "shortname_alternates": [
            ":back_of_hand_tone2:"
          ],
          "keywords": [
            "backhand",
            "medium-light skin tone",
            "raised"
          ],
          "unicode_output": "1f91a-1f3fc"
        },
        "1f91a-1f3fd": {
          "name": "raised back of hand: medium skin tone",
          "shortname": ":raised_back_of_hand_tone3:",
          "shortname_alternates": [
            ":back_of_hand_tone3:"
          ],
          "keywords": [
            "backhand",
            "medium skin tone",
            "raised"
          ],
          "unicode_output": "1f91a-1f3fd"
        },
        "1f91a-1f3fe": {
          "name": "raised back of hand: medium-dark skin tone",
          "shortname": ":raised_back_of_hand_tone4:",
          "shortname_alternates": [
            ":back_of_hand_tone4:"
          ],
          "keywords": [
            "backhand",
            "medium-dark skin tone",
            "raised"
          ],
          "unicode_output": "1f91a-1f3fe"
        },
        "1f91a-1f3ff": {
          "name": "raised back of hand: dark skin tone",
          "shortname": ":raised_back_of_hand_tone5:",
          "shortname_alternates": [
            ":back_of_hand_tone5:"
          ],
          "keywords": [
            "backhand",
            "dark skin tone",
            "raised"
          ],
          "unicode_output": "1f91a-1f3ff"
        },
        "1f590": {
          "name": "hand with fingers splayed",
          "shortname": ":hand_splayed:",
          "shortname_alternates": [
            ":raised_hand_with_fingers_splayed:"
          ],
          "keywords": [
            "finger",
            "hand",
            "splayed"
          ],
          "unicode_output": "1f590"
        },
        "1f590-1f3fb": {
          "name": "hand with fingers splayed: light skin tone",
          "shortname": ":hand_splayed_tone1:",
          "shortname_alternates": [
            ":raised_hand_with_fingers_splayed_tone1:"
          ],
          "keywords": [
            "finger",
            "hand",
            "light skin tone",
            "splayed"
          ],
          "unicode_output": "1f590-1f3fb"
        },
        "1f590-1f3fc": {
          "name": "hand with fingers splayed: medium-light skin tone",
          "shortname": ":hand_splayed_tone2:",
          "shortname_alternates": [
            ":raised_hand_with_fingers_splayed_tone2:"
          ],
          "keywords": [
            "finger",
            "hand",
            "medium-light skin tone",
            "splayed"
          ],
          "unicode_output": "1f590-1f3fc"
        },
        "1f590-1f3fd": {
          "name": "hand with fingers splayed: medium skin tone",
          "shortname": ":hand_splayed_tone3:",
          "shortname_alternates": [
            ":raised_hand_with_fingers_splayed_tone3:"
          ],
          "keywords": [
            "finger",
            "hand",
            "medium skin tone",
            "splayed"
          ],
          "unicode_output": "1f590-1f3fd"
        },
        "1f590-1f3fe": {
          "name": "hand with fingers splayed: medium-dark skin tone",
          "shortname": ":hand_splayed_tone4:",
          "shortname_alternates": [
            ":raised_hand_with_fingers_splayed_tone4:"
          ],
          "keywords": [
            "finger",
            "hand",
            "medium-dark skin tone",
            "splayed"
          ],
          "unicode_output": "1f590-1f3fe"
        },
        "1f590-1f3ff": {
          "name": "hand with fingers splayed: dark skin tone",
          "shortname": ":hand_splayed_tone5:",
          "shortname_alternates": [
            ":raised_hand_with_fingers_splayed_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "finger",
            "hand",
            "splayed"
          ],
          "unicode_output": "1f590-1f3ff"
        },
        "1f596": {
          "name": "vulcan salute",
          "shortname": ":vulcan:",
          "shortname_alternates": [
            ":raised_hand_with_part_between_middle_and_ring_fingers:"
          ],
          "keywords": [
            "finger",
            "hand",
            "spock",
            "vulcan"
          ],
          "unicode_output": "1f596"
        },
        "1f596-1f3fb": {
          "name": "vulcan salute: light skin tone",
          "shortname": ":vulcan_tone1:",
          "shortname_alternates": [
            ":raised_hand_with_part_between_middle_and_ring_fingers_tone1:"
          ],
          "keywords": [
            "finger",
            "hand",
            "light skin tone",
            "spock",
            "vulcan"
          ],
          "unicode_output": "1f596-1f3fb"
        },
        "1f596-1f3fc": {
          "name": "vulcan salute: medium-light skin tone",
          "shortname": ":vulcan_tone2:",
          "shortname_alternates": [
            ":raised_hand_with_part_between_middle_and_ring_fingers_tone2:"
          ],
          "keywords": [
            "finger",
            "hand",
            "medium-light skin tone",
            "spock",
            "vulcan"
          ],
          "unicode_output": "1f596-1f3fc"
        },
        "1f596-1f3fd": {
          "name": "vulcan salute: medium skin tone",
          "shortname": ":vulcan_tone3:",
          "shortname_alternates": [
            ":raised_hand_with_part_between_middle_and_ring_fingers_tone3:"
          ],
          "keywords": [
            "finger",
            "hand",
            "medium skin tone",
            "spock",
            "vulcan"
          ],
          "unicode_output": "1f596-1f3fd"
        },
        "1f596-1f3fe": {
          "name": "vulcan salute: medium-dark skin tone",
          "shortname": ":vulcan_tone4:",
          "shortname_alternates": [
            ":raised_hand_with_part_between_middle_and_ring_fingers_tone4:"
          ],
          "keywords": [
            "finger",
            "hand",
            "medium-dark skin tone",
            "spock",
            "vulcan"
          ],
          "unicode_output": "1f596-1f3fe"
        },
        "1f596-1f3ff": {
          "name": "vulcan salute: dark skin tone",
          "shortname": ":vulcan_tone5:",
          "shortname_alternates": [
            ":raised_hand_with_part_between_middle_and_ring_fingers_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "finger",
            "hand",
            "spock",
            "vulcan"
          ],
          "unicode_output": "1f596-1f3ff"
        },
        "1f44b": {
          "name": "waving hand",
          "shortname": ":wave:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "wave",
            "waving"
          ],
          "unicode_output": "1f44b"
        },
        "1f44b-1f3fb": {
          "name": "waving hand: light skin tone",
          "shortname": ":wave_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "light skin tone",
            "wave",
            "waving"
          ],
          "unicode_output": "1f44b-1f3fb"
        },
        "1f44b-1f3fc": {
          "name": "waving hand: medium-light skin tone",
          "shortname": ":wave_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-light skin tone",
            "wave",
            "waving"
          ],
          "unicode_output": "1f44b-1f3fc"
        },
        "1f44b-1f3fd": {
          "name": "waving hand: medium skin tone",
          "shortname": ":wave_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium skin tone",
            "wave",
            "waving"
          ],
          "unicode_output": "1f44b-1f3fd"
        },
        "1f44b-1f3fe": {
          "name": "waving hand: medium-dark skin tone",
          "shortname": ":wave_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-dark skin tone",
            "wave",
            "waving"
          ],
          "unicode_output": "1f44b-1f3fe"
        },
        "1f44b-1f3ff": {
          "name": "waving hand: dark skin tone",
          "shortname": ":wave_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "hand",
            "wave",
            "waving"
          ],
          "unicode_output": "1f44b-1f3ff"
        },
        "1f919": {
          "name": "call me hand",
          "shortname": ":call_me:",
          "shortname_alternates": [
            ":call_me_hand:"
          ],
          "keywords": [
            "call",
            "hand"
          ],
          "unicode_output": "1f919"
        },
        "1f919-1f3fb": {
          "name": "call me hand: light skin tone",
          "shortname": ":call_me_tone1:",
          "shortname_alternates": [
            ":call_me_hand_tone1:"
          ],
          "keywords": [
            "call",
            "hand",
            "light skin tone"
          ],
          "unicode_output": "1f919-1f3fb"
        },
        "1f919-1f3fc": {
          "name": "call me hand: medium-light skin tone",
          "shortname": ":call_me_tone2:",
          "shortname_alternates": [
            ":call_me_hand_tone2:"
          ],
          "keywords": [
            "call",
            "hand",
            "medium-light skin tone"
          ],
          "unicode_output": "1f919-1f3fc"
        },
        "1f919-1f3fd": {
          "name": "call me hand: medium skin tone",
          "shortname": ":call_me_tone3:",
          "shortname_alternates": [
            ":call_me_hand_tone3:"
          ],
          "keywords": [
            "call",
            "hand",
            "medium skin tone"
          ],
          "unicode_output": "1f919-1f3fd"
        },
        "1f919-1f3fe": {
          "name": "call me hand: medium-dark skin tone",
          "shortname": ":call_me_tone4:",
          "shortname_alternates": [
            ":call_me_hand_tone4:"
          ],
          "keywords": [
            "call",
            "hand",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f919-1f3fe"
        },
        "1f919-1f3ff": {
          "name": "call me hand: dark skin tone",
          "shortname": ":call_me_tone5:",
          "shortname_alternates": [
            ":call_me_hand_tone5:"
          ],
          "keywords": [
            "call",
            "dark skin tone",
            "hand"
          ],
          "unicode_output": "1f919-1f3ff"
        },
        "1f4aa": {
          "name": "flexed biceps",
          "shortname": ":muscle:",
          "shortname_alternates": [],
          "keywords": [
            "biceps",
            "comic",
            "flex",
            "muscle"
          ],
          "unicode_output": "1f4aa"
        },
        "1f4aa-1f3fb": {
          "name": "flexed biceps: light skin tone",
          "shortname": ":muscle_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "biceps",
            "comic",
            "flex",
            "light skin tone",
            "muscle"
          ],
          "unicode_output": "1f4aa-1f3fb"
        },
        "1f4aa-1f3fc": {
          "name": "flexed biceps: medium-light skin tone",
          "shortname": ":muscle_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "biceps",
            "comic",
            "flex",
            "medium-light skin tone",
            "muscle"
          ],
          "unicode_output": "1f4aa-1f3fc"
        },
        "1f4aa-1f3fd": {
          "name": "flexed biceps: medium skin tone",
          "shortname": ":muscle_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "biceps",
            "comic",
            "flex",
            "medium skin tone",
            "muscle"
          ],
          "unicode_output": "1f4aa-1f3fd"
        },
        "1f4aa-1f3fe": {
          "name": "flexed biceps: medium-dark skin tone",
          "shortname": ":muscle_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "biceps",
            "comic",
            "flex",
            "medium-dark skin tone",
            "muscle"
          ],
          "unicode_output": "1f4aa-1f3fe"
        },
        "1f4aa-1f3ff": {
          "name": "flexed biceps: dark skin tone",
          "shortname": ":muscle_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "biceps",
            "comic",
            "dark skin tone",
            "flex",
            "muscle"
          ],
          "unicode_output": "1f4aa-1f3ff"
        },
        "1f9b5": {
          "name": "leg",
          "shortname": ":leg:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b5"
        },
        "1f9b5-1f3fb": {
          "name": "leg: light skin tone",
          "shortname": ":leg_tone1:",
          "shortname_alternates": [
            ":leg_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b5-1f3fb"
        },
        "1f9b5-1f3fc": {
          "name": "leg: medium-light skin tone",
          "shortname": ":leg_tone2:",
          "shortname_alternates": [
            ":leg_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b5-1f3fc"
        },
        "1f9b5-1f3fd": {
          "name": "leg: medium skin tone",
          "shortname": ":leg_tone3:",
          "shortname_alternates": [
            ":leg_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b5-1f3fd"
        },
        "1f9b5-1f3fe": {
          "name": "leg: medium-dark skin tone",
          "shortname": ":leg_tone4:",
          "shortname_alternates": [
            ":leg_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b5-1f3fe"
        },
        "1f9b5-1f3ff": {
          "name": "leg: dark skin tone",
          "shortname": ":leg_tone5:",
          "shortname_alternates": [
            ":leg_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b5-1f3ff"
        },
        "1f9b6": {
          "name": "foot",
          "shortname": ":foot:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b6"
        },
        "1f9b6-1f3fb": {
          "name": "foot: light skin tone",
          "shortname": ":foot_tone1:",
          "shortname_alternates": [
            ":foot_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b6-1f3fb"
        },
        "1f9b6-1f3fc": {
          "name": "foot: medium-light skin tone",
          "shortname": ":foot_tone2:",
          "shortname_alternates": [
            ":foot_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b6-1f3fc"
        },
        "1f9b6-1f3fd": {
          "name": "foot: medium skin tone",
          "shortname": ":foot_tone3:",
          "shortname_alternates": [
            ":foot_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b6-1f3fd"
        },
        "1f9b6-1f3fe": {
          "name": "foot: medium-dark skin tone",
          "shortname": ":foot_tone4:",
          "shortname_alternates": [
            ":foot_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b6-1f3fe"
        },
        "1f9b6-1f3ff": {
          "name": "foot: dark skin tone",
          "shortname": ":foot_tone5:",
          "shortname_alternates": [
            ":foot_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b6-1f3ff"
        },
        "1f595": {
          "name": "middle finger",
          "shortname": ":middle_finger:",
          "shortname_alternates": [
            ":reversed_hand_with_middle_finger_extended:"
          ],
          "keywords": [
            "finger",
            "hand"
          ],
          "unicode_output": "1f595"
        },
        "1f595-1f3fb": {
          "name": "middle finger: light skin tone",
          "shortname": ":middle_finger_tone1:",
          "shortname_alternates": [
            ":reversed_hand_with_middle_finger_extended_tone1:"
          ],
          "keywords": [
            "finger",
            "hand",
            "light skin tone"
          ],
          "unicode_output": "1f595-1f3fb"
        },
        "1f595-1f3fc": {
          "name": "middle finger: medium-light skin tone",
          "shortname": ":middle_finger_tone2:",
          "shortname_alternates": [
            ":reversed_hand_with_middle_finger_extended_tone2:"
          ],
          "keywords": [
            "finger",
            "hand",
            "medium-light skin tone"
          ],
          "unicode_output": "1f595-1f3fc"
        },
        "1f595-1f3fd": {
          "name": "middle finger: medium skin tone",
          "shortname": ":middle_finger_tone3:",
          "shortname_alternates": [
            ":reversed_hand_with_middle_finger_extended_tone3:"
          ],
          "keywords": [
            "finger",
            "hand",
            "medium skin tone"
          ],
          "unicode_output": "1f595-1f3fd"
        },
        "1f595-1f3fe": {
          "name": "middle finger: medium-dark skin tone",
          "shortname": ":middle_finger_tone4:",
          "shortname_alternates": [
            ":reversed_hand_with_middle_finger_extended_tone4:"
          ],
          "keywords": [
            "finger",
            "hand",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f595-1f3fe"
        },
        "1f595-1f3ff": {
          "name": "middle finger: dark skin tone",
          "shortname": ":middle_finger_tone5:",
          "shortname_alternates": [
            ":reversed_hand_with_middle_finger_extended_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "finger",
            "hand"
          ],
          "unicode_output": "1f595-1f3ff"
        },
        "270d": {
          "name": "writing hand",
          "shortname": ":writing_hand:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "write"
          ],
          "unicode_output": "270d"
        },
        "270d-1f3fb": {
          "name": "writing hand: light skin tone",
          "shortname": ":writing_hand_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "light skin tone",
            "write"
          ],
          "unicode_output": "270d-1f3fb"
        },
        "270d-1f3fc": {
          "name": "writing hand: medium-light skin tone",
          "shortname": ":writing_hand_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-light skin tone",
            "write"
          ],
          "unicode_output": "270d-1f3fc"
        },
        "270d-1f3fd": {
          "name": "writing hand: medium skin tone",
          "shortname": ":writing_hand_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium skin tone",
            "write"
          ],
          "unicode_output": "270d-1f3fd"
        },
        "270d-1f3fe": {
          "name": "writing hand: medium-dark skin tone",
          "shortname": ":writing_hand_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "hand",
            "medium-dark skin tone",
            "write"
          ],
          "unicode_output": "270d-1f3fe"
        },
        "270d-1f3ff": {
          "name": "writing hand: dark skin tone",
          "shortname": ":writing_hand_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "hand",
            "write"
          ],
          "unicode_output": "270d-1f3ff"
        },
        "1f64f": {
          "name": "folded hands",
          "shortname": ":pray:",
          "shortname_alternates": [],
          "keywords": [
            "ask",
            "bow",
            "folded",
            "gesture",
            "hand",
            "please",
            "pray",
            "thanks"
          ],
          "unicode_output": "1f64f"
        },
        "1f64f-1f3fb": {
          "name": "folded hands: light skin tone",
          "shortname": ":pray_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "ask",
            "bow",
            "folded",
            "gesture",
            "hand",
            "light skin tone",
            "please",
            "pray",
            "thanks"
          ],
          "unicode_output": "1f64f-1f3fb"
        },
        "1f64f-1f3fc": {
          "name": "folded hands: medium-light skin tone",
          "shortname": ":pray_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "ask",
            "bow",
            "folded",
            "gesture",
            "hand",
            "medium-light skin tone",
            "please",
            "pray",
            "thanks"
          ],
          "unicode_output": "1f64f-1f3fc"
        },
        "1f64f-1f3fd": {
          "name": "folded hands: medium skin tone",
          "shortname": ":pray_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "ask",
            "bow",
            "folded",
            "gesture",
            "hand",
            "medium skin tone",
            "please",
            "pray",
            "thanks"
          ],
          "unicode_output": "1f64f-1f3fd"
        },
        "1f64f-1f3fe": {
          "name": "folded hands: medium-dark skin tone",
          "shortname": ":pray_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "ask",
            "bow",
            "folded",
            "gesture",
            "hand",
            "medium-dark skin tone",
            "please",
            "pray",
            "thanks"
          ],
          "unicode_output": "1f64f-1f3fe"
        },
        "1f64f-1f3ff": {
          "name": "folded hands: dark skin tone",
          "shortname": ":pray_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "ask",
            "bow",
            "dark skin tone",
            "folded",
            "gesture",
            "hand",
            "please",
            "pray",
            "thanks"
          ],
          "unicode_output": "1f64f-1f3ff"
        },
        "1f48d": {
          "name": "ring",
          "shortname": ":ring:",
          "shortname_alternates": [],
          "keywords": [
            "diamond"
          ],
          "unicode_output": "1f48d"
        },
        "1f484": {
          "name": "lipstick",
          "shortname": ":lipstick:",
          "shortname_alternates": [],
          "keywords": [
            "cosmetics",
            "makeup"
          ],
          "unicode_output": "1f484"
        },
        "1f48b": {
          "name": "kiss mark",
          "shortname": ":kiss:",
          "shortname_alternates": [],
          "keywords": [
            "kiss",
            "lips"
          ],
          "unicode_output": "1f48b"
        },
        "1f444": {
          "name": "mouth",
          "shortname": ":lips:",
          "shortname_alternates": [],
          "keywords": [
            "lips"
          ],
          "unicode_output": "1f444"
        },
        "1f445": {
          "name": "tongue",
          "shortname": ":tongue:",
          "shortname_alternates": [],
          "keywords": [
            "body"
          ],
          "unicode_output": "1f445"
        },
        "1f442": {
          "name": "ear",
          "shortname": ":ear:",
          "shortname_alternates": [],
          "keywords": [
            "body"
          ],
          "unicode_output": "1f442"
        },
        "1f442-1f3fb": {
          "name": "ear: light skin tone",
          "shortname": ":ear_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "light skin tone"
          ],
          "unicode_output": "1f442-1f3fb"
        },
        "1f442-1f3fc": {
          "name": "ear: medium-light skin tone",
          "shortname": ":ear_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "medium-light skin tone"
          ],
          "unicode_output": "1f442-1f3fc"
        },
        "1f442-1f3fd": {
          "name": "ear: medium skin tone",
          "shortname": ":ear_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "medium skin tone"
          ],
          "unicode_output": "1f442-1f3fd"
        },
        "1f442-1f3fe": {
          "name": "ear: medium-dark skin tone",
          "shortname": ":ear_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f442-1f3fe"
        },
        "1f442-1f3ff": {
          "name": "ear: dark skin tone",
          "shortname": ":ear_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "dark skin tone"
          ],
          "unicode_output": "1f442-1f3ff"
        },
        "1f443": {
          "name": "nose",
          "shortname": ":nose:",
          "shortname_alternates": [],
          "keywords": [
            "body"
          ],
          "unicode_output": "1f443"
        },
        "1f443-1f3fb": {
          "name": "nose: light skin tone",
          "shortname": ":nose_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "light skin tone"
          ],
          "unicode_output": "1f443-1f3fb"
        },
        "1f443-1f3fc": {
          "name": "nose: medium-light skin tone",
          "shortname": ":nose_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "medium-light skin tone"
          ],
          "unicode_output": "1f443-1f3fc"
        },
        "1f443-1f3fd": {
          "name": "nose: medium skin tone",
          "shortname": ":nose_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "medium skin tone"
          ],
          "unicode_output": "1f443-1f3fd"
        },
        "1f443-1f3fe": {
          "name": "nose: medium-dark skin tone",
          "shortname": ":nose_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f443-1f3fe"
        },
        "1f443-1f3ff": {
          "name": "nose: dark skin tone",
          "shortname": ":nose_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "body",
            "dark skin tone"
          ],
          "unicode_output": "1f443-1f3ff"
        },
        "1f463": {
          "name": "footprints",
          "shortname": ":footprints:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "footprint",
            "print"
          ],
          "unicode_output": "1f463"
        },
        "1f441": {
          "name": "eye",
          "shortname": ":eye:",
          "shortname_alternates": [],
          "keywords": [
            "body"
          ],
          "unicode_output": "1f441"
        },
        "1f440": {
          "name": "eyes",
          "shortname": ":eyes:",
          "shortname_alternates": [],
          "keywords": [
            "eye",
            "face"
          ],
          "unicode_output": "1f440"
        },
        "1f9e0": {
          "name": "brain",
          "shortname": ":brain:",
          "shortname_alternates": [],
          "keywords": [
            "intelligent"
          ],
          "unicode_output": "1f9e0"
        },
        "1f9b4": {
          "name": "bone",
          "shortname": ":bone:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b4"
        },
        "1f9b7": {
          "name": "tooth",
          "shortname": ":tooth:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b7"
        },
        "1f5e3": {
          "name": "speaking head",
          "shortname": ":speaking_head:",
          "shortname_alternates": [
            ":speaking_head_in_silhouette:"
          ],
          "keywords": [
            "face",
            "head",
            "silhouette",
            "speak",
            "speaking"
          ],
          "unicode_output": "1f5e3"
        },
        "1f464": {
          "name": "bust in silhouette",
          "shortname": ":bust_in_silhouette:",
          "shortname_alternates": [],
          "keywords": [
            "bust",
            "silhouette"
          ],
          "unicode_output": "1f464"
        },
        "1f465": {
          "name": "busts in silhouette",
          "shortname": ":busts_in_silhouette:",
          "shortname_alternates": [],
          "keywords": [
            "bust",
            "silhouette"
          ],
          "unicode_output": "1f465"
        },
        "1f476": {
          "name": "baby",
          "shortname": ":baby:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "young"
          ],
          "unicode_output": "1f476"
        },
        "1f476-1f3fb": {
          "name": "baby: light skin tone",
          "shortname": ":baby_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "light skin tone",
            "young"
          ],
          "unicode_output": "1f476-1f3fb"
        },
        "1f476-1f3fc": {
          "name": "baby: medium-light skin tone",
          "shortname": ":baby_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "medium-light skin tone",
            "young"
          ],
          "unicode_output": "1f476-1f3fc"
        },
        "1f476-1f3fd": {
          "name": "baby: medium skin tone",
          "shortname": ":baby_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "medium skin tone",
            "young"
          ],
          "unicode_output": "1f476-1f3fd"
        },
        "1f476-1f3fe": {
          "name": "baby: medium-dark skin tone",
          "shortname": ":baby_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "medium-dark skin tone",
            "young"
          ],
          "unicode_output": "1f476-1f3fe"
        },
        "1f476-1f3ff": {
          "name": "baby: dark skin tone",
          "shortname": ":baby_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "dark skin tone",
            "young"
          ],
          "unicode_output": "1f476-1f3ff"
        },
        "1f467": {
          "name": "girl",
          "shortname": ":girl:",
          "shortname_alternates": [],
          "keywords": [
            "Virgo",
            "young",
            "zodiac"
          ],
          "unicode_output": "1f467"
        },
        "1f467-1f3fb": {
          "name": "girl: light skin tone",
          "shortname": ":girl_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "Virgo",
            "light skin tone",
            "young",
            "zodiac"
          ],
          "unicode_output": "1f467-1f3fb"
        },
        "1f467-1f3fc": {
          "name": "girl: medium-light skin tone",
          "shortname": ":girl_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "Virgo",
            "medium-light skin tone",
            "young",
            "zodiac"
          ],
          "unicode_output": "1f467-1f3fc"
        },
        "1f467-1f3fd": {
          "name": "girl: medium skin tone",
          "shortname": ":girl_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "Virgo",
            "medium skin tone",
            "young",
            "zodiac"
          ],
          "unicode_output": "1f467-1f3fd"
        },
        "1f467-1f3fe": {
          "name": "girl: medium-dark skin tone",
          "shortname": ":girl_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "Virgo",
            "medium-dark skin tone",
            "young",
            "zodiac"
          ],
          "unicode_output": "1f467-1f3fe"
        },
        "1f467-1f3ff": {
          "name": "girl: dark skin tone",
          "shortname": ":girl_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "Virgo",
            "dark skin tone",
            "young",
            "zodiac"
          ],
          "unicode_output": "1f467-1f3ff"
        },
        "1f9d2": {
          "name": "child",
          "shortname": ":child:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9d2"
        },
        "1f9d2-1f3fb": {
          "name": "child: light skin tone",
          "shortname": ":child_tone1:",
          "shortname_alternates": [
            ":child_light_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "light skin tone",
            "young"
          ],
          "unicode_output": "1f9d2-1f3fb"
        },
        "1f9d2-1f3fc": {
          "name": "child: medium-light skin tone",
          "shortname": ":child_tone2:",
          "shortname_alternates": [
            ":child_medium_light_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "medium-light skin tone",
            "young"
          ],
          "unicode_output": "1f9d2-1f3fc"
        },
        "1f9d2-1f3fd": {
          "name": "child: medium skin tone",
          "shortname": ":child_tone3:",
          "shortname_alternates": [
            ":child_medium_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "medium skin tone",
            "young"
          ],
          "unicode_output": "1f9d2-1f3fd"
        },
        "1f9d2-1f3fe": {
          "name": "child: medium-dark skin tone",
          "shortname": ":child_tone4:",
          "shortname_alternates": [
            ":child_medium_dark_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "medium-dark skin tone",
            "young"
          ],
          "unicode_output": "1f9d2-1f3fe"
        },
        "1f9d2-1f3ff": {
          "name": "child: dark skin tone",
          "shortname": ":child_tone5:",
          "shortname_alternates": [
            ":child_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "gender-neutral",
            "young"
          ],
          "unicode_output": "1f9d2-1f3ff"
        },
        "1f466": {
          "name": "boy",
          "shortname": ":boy:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "young"
          ],
          "unicode_output": "1f466"
        },
        "1f466-1f3fb": {
          "name": "boy: light skin tone",
          "shortname": ":boy_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "light skin tone",
            "young"
          ],
          "unicode_output": "1f466-1f3fb"
        },
        "1f466-1f3fc": {
          "name": "boy: medium-light skin tone",
          "shortname": ":boy_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "medium-light skin tone",
            "young"
          ],
          "unicode_output": "1f466-1f3fc"
        },
        "1f466-1f3fd": {
          "name": "boy: medium skin tone",
          "shortname": ":boy_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "medium skin tone",
            "young"
          ],
          "unicode_output": "1f466-1f3fd"
        },
        "1f466-1f3fe": {
          "name": "boy: medium-dark skin tone",
          "shortname": ":boy_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "medium-dark skin tone",
            "young"
          ],
          "unicode_output": "1f466-1f3fe"
        },
        "1f466-1f3ff": {
          "name": "boy: dark skin tone",
          "shortname": ":boy_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "dark skin tone",
            "young"
          ],
          "unicode_output": "1f466-1f3ff"
        },
        "1f469": {
          "name": "woman",
          "shortname": ":woman:",
          "shortname_alternates": [],
          "keywords": [
            "woman"
          ],
          "unicode_output": "1f469"
        },
        "1f469-1f3fb": {
          "name": "woman: light skin tone",
          "shortname": ":woman_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb"
        },
        "1f469-1f3fc": {
          "name": "woman: medium-light skin tone",
          "shortname": ":woman_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc"
        },
        "1f469-1f3fd": {
          "name": "woman: medium skin tone",
          "shortname": ":woman_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd"
        },
        "1f469-1f3fe": {
          "name": "woman: medium-dark skin tone",
          "shortname": ":woman_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe"
        },
        "1f469-1f3ff": {
          "name": "woman: dark skin tone",
          "shortname": ":woman_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff"
        },
        "1f9d1": {
          "name": "adult",
          "shortname": ":adult:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9d1"
        },
        "1f9d1-1f3fb": {
          "name": "adult: light skin tone",
          "shortname": ":adult_tone1:",
          "shortname_alternates": [
            ":adult_light_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "light skin tone"
          ],
          "unicode_output": "1f9d1-1f3fb"
        },
        "1f9d1-1f3fc": {
          "name": "adult: medium-light skin tone",
          "shortname": ":adult_tone2:",
          "shortname_alternates": [
            ":adult_medium_light_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9d1-1f3fc"
        },
        "1f9d1-1f3fd": {
          "name": "adult: medium skin tone",
          "shortname": ":adult_tone3:",
          "shortname_alternates": [
            ":adult_medium_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "medium skin tone"
          ],
          "unicode_output": "1f9d1-1f3fd"
        },
        "1f9d1-1f3fe": {
          "name": "adult: medium-dark skin tone",
          "shortname": ":adult_tone4:",
          "shortname_alternates": [
            ":adult_medium_dark_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9d1-1f3fe"
        },
        "1f9d1-1f3ff": {
          "name": "adult: dark skin tone",
          "shortname": ":adult_tone5:",
          "shortname_alternates": [
            ":adult_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "gender-neutral"
          ],
          "unicode_output": "1f9d1-1f3ff"
        },
        "1f468": {
          "name": "man",
          "shortname": ":man:",
          "shortname_alternates": [],
          "keywords": [
            "man"
          ],
          "unicode_output": "1f468"
        },
        "1f468-1f3fb": {
          "name": "man: light skin tone",
          "shortname": ":man_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f468-1f3fb"
        },
        "1f468-1f3fc": {
          "name": "man: medium-light skin tone",
          "shortname": ":man_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f468-1f3fc"
        },
        "1f468-1f3fd": {
          "name": "man: medium skin tone",
          "shortname": ":man_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f468-1f3fd"
        },
        "1f468-1f3fe": {
          "name": "man: medium-dark skin tone",
          "shortname": ":man_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f468-1f3fe"
        },
        "1f468-1f3ff": {
          "name": "man: dark skin tone",
          "shortname": ":man_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "man"
          ],
          "unicode_output": "1f468-1f3ff"
        },
        "1f471": {
          "name": "blond-haired person",
          "shortname": ":blond_haired_person:",
          "shortname_alternates": [
            ":person_with_blond_hair:"
          ],
          "keywords": [
            "blond"
          ],
          "unicode_output": "1f471"
        },
        "1f471-1f3fb": {
          "name": "blond-haired person: light skin tone",
          "shortname": ":blond_haired_person_tone1:",
          "shortname_alternates": [
            ":person_with_blond_hair_tone1:"
          ],
          "keywords": [
            "blond",
            "light skin tone"
          ],
          "unicode_output": "1f471-1f3fb"
        },
        "1f471-1f3fc": {
          "name": "blond-haired person: medium-light skin tone",
          "shortname": ":blond_haired_person_tone2:",
          "shortname_alternates": [
            ":person_with_blond_hair_tone2:"
          ],
          "keywords": [
            "blond",
            "medium-light skin tone"
          ],
          "unicode_output": "1f471-1f3fc"
        },
        "1f471-1f3fd": {
          "name": "blond-haired person: medium skin tone",
          "shortname": ":blond_haired_person_tone3:",
          "shortname_alternates": [
            ":person_with_blond_hair_tone3:"
          ],
          "keywords": [
            "blond",
            "medium skin tone"
          ],
          "unicode_output": "1f471-1f3fd"
        },
        "1f471-1f3fe": {
          "name": "blond-haired person: medium-dark skin tone",
          "shortname": ":blond_haired_person_tone4:",
          "shortname_alternates": [
            ":person_with_blond_hair_tone4:"
          ],
          "keywords": [
            "blond",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f471-1f3fe"
        },
        "1f471-1f3ff": {
          "name": "blond-haired person: dark skin tone",
          "shortname": ":blond_haired_person_tone5:",
          "shortname_alternates": [
            ":person_with_blond_hair_tone5:"
          ],
          "keywords": [
            "blond",
            "dark skin tone"
          ],
          "unicode_output": "1f471-1f3ff"
        },
        "1f471-2640": {
          "name": "blond-haired woman",
          "shortname": ":blond-haired_woman:",
          "shortname_alternates": [],
          "keywords": [
            "blonde",
            "woman"
          ],
          "unicode_output": "1f471-200d-2640-fe0f"
        },
        "1f471-1f3fb-2640": {
          "name": "blond-haired woman: light skin tone",
          "shortname": ":blond-haired_woman_tone1:",
          "shortname_alternates": [
            ":blond-haired_woman_light_skin_tone:"
          ],
          "keywords": [
            "blonde",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f471-1f3fb-200d-2640-fe0f"
        },
        "1f471-1f3fc-2640": {
          "name": "blond-haired woman: medium-light skin tone",
          "shortname": ":blond-haired_woman_tone2:",
          "shortname_alternates": [
            ":blond-haired_woman_medium_light_skin_tone:"
          ],
          "keywords": [
            "blonde",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f471-1f3fc-200d-2640-fe0f"
        },
        "1f471-1f3fd-2640": {
          "name": "blond-haired woman: medium skin tone",
          "shortname": ":blond-haired_woman_tone3:",
          "shortname_alternates": [
            ":blond-haired_woman_medium_skin_tone:"
          ],
          "keywords": [
            "blonde",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f471-1f3fd-200d-2640-fe0f"
        },
        "1f471-1f3fe-2640": {
          "name": "blond-haired woman: medium-dark skin tone",
          "shortname": ":blond-haired_woman_tone4:",
          "shortname_alternates": [
            ":blond-haired_woman_medium_dark_skin_tone:"
          ],
          "keywords": [
            "blonde",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f471-1f3fe-200d-2640-fe0f"
        },
        "1f471-1f3ff-2640": {
          "name": "blond-haired woman: dark skin tone",
          "shortname": ":blond-haired_woman_tone5:",
          "shortname_alternates": [
            ":blond-haired_woman_dark_skin_tone:"
          ],
          "keywords": [
            "blonde",
            "dark skin tone",
            "woman"
          ],
          "unicode_output": "1f471-1f3ff-200d-2640-fe0f"
        },
        "1f471-2642": {
          "name": "blond-haired man",
          "shortname": ":blond-haired_man:",
          "shortname_alternates": [],
          "keywords": [
            "blond",
            "man"
          ],
          "unicode_output": "1f471-200d-2642-fe0f"
        },
        "1f471-1f3fb-2642": {
          "name": "blond-haired man: light skin tone",
          "shortname": ":blond-haired_man_tone1:",
          "shortname_alternates": [
            ":blond-haired_man_light_skin_tone:"
          ],
          "keywords": [
            "blond",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f471-1f3fb-200d-2642-fe0f"
        },
        "1f471-1f3fc-2642": {
          "name": "blond-haired man: medium-light skin tone",
          "shortname": ":blond-haired_man_tone2:",
          "shortname_alternates": [
            ":blond-haired_man_medium_light_skin_tone:"
          ],
          "keywords": [
            "blond",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f471-1f3fc-200d-2642-fe0f"
        },
        "1f471-1f3fd-2642": {
          "name": "blond-haired man: medium skin tone",
          "shortname": ":blond-haired_man_tone3:",
          "shortname_alternates": [
            ":blond-haired_man_medium_skin_tone:"
          ],
          "keywords": [
            "blond",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f471-1f3fd-200d-2642-fe0f"
        },
        "1f471-1f3fe-2642": {
          "name": "blond-haired man: medium-dark skin tone",
          "shortname": ":blond-haired_man_tone4:",
          "shortname_alternates": [
            ":blond-haired_man_medium_dark_skin_tone:"
          ],
          "keywords": [
            "blond",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f471-1f3fe-200d-2642-fe0f"
        },
        "1f471-1f3ff-2642": {
          "name": "blond-haired man: dark skin tone",
          "shortname": ":blond-haired_man_tone5:",
          "shortname_alternates": [
            ":blond-haired_man_dark_skin_tone:"
          ],
          "keywords": [
            "blond",
            "dark skin tone",
            "man"
          ],
          "unicode_output": "1f471-1f3ff-200d-2642-fe0f"
        },
        "1f469-1f9b0": {
          "name": "woman, red haired",
          "shortname": ":woman_red_haired:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-200d-1f9b0"
        },
        "1f469-1f3fb-1f9b0": {
          "name": "woman, red haired: light skin tone",
          "shortname": ":woman_red_haired_tone1:",
          "shortname_alternates": [
            ":woman_red_haired_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fb-200d-1f9b0"
        },
        "1f469-1f3fc-1f9b0": {
          "name": "woman, red haired: medium-light skin tone",
          "shortname": ":woman_red_haired_tone2:",
          "shortname_alternates": [
            ":woman_red_haired_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fc-200d-1f9b0"
        },
        "1f469-1f3fd-1f9b0": {
          "name": "woman, red haired: medium skin tone",
          "shortname": ":woman_red_haired_tone3:",
          "shortname_alternates": [
            ":woman_red_haired_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fd-200d-1f9b0"
        },
        "1f469-1f3fe-1f9b0": {
          "name": "woman, red haired: medium-dark skin tone",
          "shortname": ":woman_red_haired_tone4:",
          "shortname_alternates": [
            ":woman_red_haired_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fe-200d-1f9b0"
        },
        "1f469-1f3ff-1f9b0": {
          "name": "woman, red haired: dark skin tone",
          "shortname": ":woman_red_haired_tone5:",
          "shortname_alternates": [
            ":woman_red_haired_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3ff-200d-1f9b0"
        },
        "1f468-1f9b0": {
          "name": "man, red haired",
          "shortname": ":man_red_haired:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-200d-1f9b0"
        },
        "1f468-1f3fb-1f9b0": {
          "name": "man, red haired: light skin tone",
          "shortname": ":man_red_haired_tone1:",
          "shortname_alternates": [
            ":man_red_haired_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fb-200d-1f9b0"
        },
        "1f468-1f3fc-1f9b0": {
          "name": "man, red haired: medium-light skin tone",
          "shortname": ":man_red_haired_tone2:",
          "shortname_alternates": [
            ":man_red_haired_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fc-200d-1f9b0"
        },
        "1f468-1f3fd-1f9b0": {
          "name": "man, red haired: medium skin tone",
          "shortname": ":man_red_haired_tone3:",
          "shortname_alternates": [
            ":man_red_haired_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fd-200d-1f9b0"
        },
        "1f468-1f3fe-1f9b0": {
          "name": "man, red haired: medium-dark skin tone",
          "shortname": ":man_red_haired_tone4:",
          "shortname_alternates": [
            ":man_red_haired_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fe-200d-1f9b0"
        },
        "1f468-1f3ff-1f9b0": {
          "name": "man, red haired: dark skin tone",
          "shortname": ":man_red_haired_tone5:",
          "shortname_alternates": [
            ":man_red_haired_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3ff-200d-1f9b0"
        },
        "1f469-1f9b1": {
          "name": "woman, curly haired",
          "shortname": ":woman_curly_haired:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-200d-1f9b1"
        },
        "1f469-1f3fb-1f9b1": {
          "name": "woman, curly haired: light skin tone",
          "shortname": ":woman_curly_haired_tone1:",
          "shortname_alternates": [
            ":woman_curly_haired_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fb-200d-1f9b1"
        },
        "1f469-1f3fc-1f9b1": {
          "name": "woman, curly haired: medium-light skin tone",
          "shortname": ":woman_curly_haired_tone2:",
          "shortname_alternates": [
            ":woman_curly_haired_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fc-200d-1f9b1"
        },
        "1f469-1f3fd-1f9b1": {
          "name": "woman, curly haired: medium skin tone",
          "shortname": ":woman_curly_haired_tone3:",
          "shortname_alternates": [
            ":woman_curly_haired_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fd-200d-1f9b1"
        },
        "1f469-1f3fe-1f9b1": {
          "name": "woman, curly haired: medium-dark skin tone",
          "shortname": ":woman_curly_haired_tone4:",
          "shortname_alternates": [
            ":woman_curly_haired_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fe-200d-1f9b1"
        },
        "1f469-1f3ff-1f9b1": {
          "name": "woman, curly haired: dark skin tone",
          "shortname": ":woman_curly_haired_tone5:",
          "shortname_alternates": [
            ":woman_curly_haired_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3ff-200d-1f9b1"
        },
        "1f468-1f9b1": {
          "name": "man, curly haired",
          "shortname": ":man_curly_haired:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-200d-1f9b1"
        },
        "1f468-1f3fb-1f9b1": {
          "name": "man, curly haired: light skin tone",
          "shortname": ":man_curly_haired_tone1:",
          "shortname_alternates": [
            ":man_curly_haired_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fb-200d-1f9b1"
        },
        "1f468-1f3fc-1f9b1": {
          "name": "man, curly haired: medium-light skin tone",
          "shortname": ":man_curly_haired_tone2:",
          "shortname_alternates": [
            ":man_curly_haired_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fc-200d-1f9b1"
        },
        "1f468-1f3fd-1f9b1": {
          "name": "man, curly haired: medium skin tone",
          "shortname": ":man_curly_haired_tone3:",
          "shortname_alternates": [
            ":man_curly_haired_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fd-200d-1f9b1"
        },
        "1f468-1f3fe-1f9b1": {
          "name": "man, curly haired: medium-dark skin tone",
          "shortname": ":man_curly_haired_tone4:",
          "shortname_alternates": [
            ":man_curly_haired_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fe-200d-1f9b1"
        },
        "1f468-1f3ff-1f9b1": {
          "name": "man, curly haired: dark skin tone",
          "shortname": ":man_curly_haired_tone5:",
          "shortname_alternates": [
            ":man_curly_haired_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3ff-200d-1f9b1"
        },
        "1f469-1f9b3": {
          "name": "woman, white haired",
          "shortname": ":woman_white_haired:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-200d-1f9b3"
        },
        "1f469-1f3fb-1f9b3": {
          "name": "woman, white haired: light skin tone",
          "shortname": ":woman_white_haired_tone1:",
          "shortname_alternates": [
            ":woman_white_haired_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fb-200d-1f9b3"
        },
        "1f469-1f3fc-1f9b3": {
          "name": "woman, white haired: medium-light skin tone",
          "shortname": ":woman_white_haired_tone2:",
          "shortname_alternates": [
            ":woman_white_haired_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fc-200d-1f9b3"
        },
        "1f469-1f3fd-1f9b3": {
          "name": "woman, white haired: medium skin tone",
          "shortname": ":woman_white_haired_tone3:",
          "shortname_alternates": [
            ":woman_white_haired_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fd-200d-1f9b3"
        },
        "1f469-1f3fe-1f9b3": {
          "name": "woman, white haired: medium-dark skin tone",
          "shortname": ":woman_white_haired_tone4:",
          "shortname_alternates": [
            ":woman_white_haired_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fe-200d-1f9b3"
        },
        "1f469-1f3ff-1f9b3": {
          "name": "woman, white haired: dark skin tone",
          "shortname": ":woman_white_haired_tone5:",
          "shortname_alternates": [
            ":woman_white_haired_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3ff-200d-1f9b3"
        },
        "1f468-1f9b3": {
          "name": "man, white haired",
          "shortname": ":man_white_haired:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-200d-1f9b3"
        },
        "1f468-1f3fb-1f9b3": {
          "name": "man, white haired: light skin tone",
          "shortname": ":man_white_haired_tone1:",
          "shortname_alternates": [
            ":man_white_haired_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fb-200d-1f9b3"
        },
        "1f468-1f3fc-1f9b3": {
          "name": "man, white haired: medium-light skin tone",
          "shortname": ":man_white_haired_tone2:",
          "shortname_alternates": [
            ":man_white_haired_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fc-200d-1f9b3"
        },
        "1f468-1f3fd-1f9b3": {
          "name": "man, white haired: medium skin tone",
          "shortname": ":man_white_haired_tone3:",
          "shortname_alternates": [
            ":man_white_haired_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fd-200d-1f9b3"
        },
        "1f468-1f3fe-1f9b3": {
          "name": "man, white haired: medium-dark skin tone",
          "shortname": ":man_white_haired_tone4:",
          "shortname_alternates": [
            ":man_white_haired_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fe-200d-1f9b3"
        },
        "1f468-1f3ff-1f9b3": {
          "name": "man, white haired: dark skin tone",
          "shortname": ":man_white_haired_tone5:",
          "shortname_alternates": [
            ":man_white_haired_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3ff-200d-1f9b3"
        },
        "1f469-1f9b2": {
          "name": "woman, bald",
          "shortname": ":woman_bald:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-200d-1f9b2"
        },
        "1f469-1f3fb-1f9b2": {
          "name": "woman, bald: light skin tone",
          "shortname": ":woman_bald_tone1:",
          "shortname_alternates": [
            ":woman_bald_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fb-200d-1f9b2"
        },
        "1f469-1f3fc-1f9b2": {
          "name": "woman, bald: medium-light skin tone",
          "shortname": ":woman_bald_tone2:",
          "shortname_alternates": [
            ":woman_bald_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fc-200d-1f9b2"
        },
        "1f469-1f3fd-1f9b2": {
          "name": "woman, bald: medium skin tone",
          "shortname": ":woman_bald_tone3:",
          "shortname_alternates": [
            ":woman_bald_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fd-200d-1f9b2"
        },
        "1f469-1f3fe-1f9b2": {
          "name": "woman, bald: medium-dark skin tone",
          "shortname": ":woman_bald_tone4:",
          "shortname_alternates": [
            ":woman_bald_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3fe-200d-1f9b2"
        },
        "1f469-1f3ff-1f9b2": {
          "name": "woman, bald: dark skin tone",
          "shortname": ":woman_bald_tone5:",
          "shortname_alternates": [
            ":woman_bald_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f469-1f3ff-200d-1f9b2"
        },
        "1f468-1f9b2": {
          "name": "man, bald",
          "shortname": ":man_bald:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-200d-1f9b2"
        },
        "1f468-1f3fb-1f9b2": {
          "name": "man, bald: light skin tone",
          "shortname": ":man_bald_tone1:",
          "shortname_alternates": [
            ":man_bald_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fb-200d-1f9b2"
        },
        "1f468-1f3fc-1f9b2": {
          "name": "man, bald: medium-light skin tone",
          "shortname": ":man_bald_tone2:",
          "shortname_alternates": [
            ":man_bald_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fc-200d-1f9b2"
        },
        "1f468-1f3fd-1f9b2": {
          "name": "man, bald: medium skin tone",
          "shortname": ":man_bald_tone3:",
          "shortname_alternates": [
            ":man_bald_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fd-200d-1f9b2"
        },
        "1f468-1f3fe-1f9b2": {
          "name": "man, bald: medium-dark skin tone",
          "shortname": ":man_bald_tone4:",
          "shortname_alternates": [
            ":man_bald_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3fe-200d-1f9b2"
        },
        "1f468-1f3ff-1f9b2": {
          "name": "man, bald: dark skin tone",
          "shortname": ":man_bald_tone5:",
          "shortname_alternates": [
            ":man_bald_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f468-1f3ff-200d-1f9b2"
        },
        "1f9d4": {
          "name": "bearded person",
          "shortname": ":bearded_person:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9d4"
        },
        "1f9d4-1f3fb": {
          "name": "bearded person: light skin tone",
          "shortname": ":bearded_person_tone1:",
          "shortname_alternates": [
            ":bearded_person_light_skin_tone:"
          ],
          "keywords": [
            "beard",
            "light skin tone"
          ],
          "unicode_output": "1f9d4-1f3fb"
        },
        "1f9d4-1f3fc": {
          "name": "bearded person: medium-light skin tone",
          "shortname": ":bearded_person_tone2:",
          "shortname_alternates": [
            ":bearded_person_medium_light_skin_tone:"
          ],
          "keywords": [
            "beard",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9d4-1f3fc"
        },
        "1f9d4-1f3fd": {
          "name": "bearded person: medium skin tone",
          "shortname": ":bearded_person_tone3:",
          "shortname_alternates": [
            ":bearded_person_medium_skin_tone:"
          ],
          "keywords": [
            "beard",
            "medium skin tone"
          ],
          "unicode_output": "1f9d4-1f3fd"
        },
        "1f9d4-1f3fe": {
          "name": "bearded person: medium-dark skin tone",
          "shortname": ":bearded_person_tone4:",
          "shortname_alternates": [
            ":bearded_person_medium_dark_skin_tone:"
          ],
          "keywords": [
            "beard",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9d4-1f3fe"
        },
        "1f9d4-1f3ff": {
          "name": "bearded person: dark skin tone",
          "shortname": ":bearded_person_tone5:",
          "shortname_alternates": [
            ":bearded_person_dark_skin_tone:"
          ],
          "keywords": [
            "beard",
            "dark skin tone"
          ],
          "unicode_output": "1f9d4-1f3ff"
        },
        "1f475": {
          "name": "old woman",
          "shortname": ":older_woman:",
          "shortname_alternates": [
            ":grandma:"
          ],
          "keywords": [
            "old",
            "woman"
          ],
          "unicode_output": "1f475"
        },
        "1f475-1f3fb": {
          "name": "old woman: light skin tone",
          "shortname": ":older_woman_tone1:",
          "shortname_alternates": [
            ":grandma_tone1:"
          ],
          "keywords": [
            "light skin tone",
            "old",
            "woman"
          ],
          "unicode_output": "1f475-1f3fb"
        },
        "1f475-1f3fc": {
          "name": "old woman: medium-light skin tone",
          "shortname": ":older_woman_tone2:",
          "shortname_alternates": [
            ":grandma_tone2:"
          ],
          "keywords": [
            "medium-light skin tone",
            "old",
            "woman"
          ],
          "unicode_output": "1f475-1f3fc"
        },
        "1f475-1f3fd": {
          "name": "old woman: medium skin tone",
          "shortname": ":older_woman_tone3:",
          "shortname_alternates": [
            ":grandma_tone3:"
          ],
          "keywords": [
            "medium skin tone",
            "old",
            "woman"
          ],
          "unicode_output": "1f475-1f3fd"
        },
        "1f475-1f3fe": {
          "name": "old woman: medium-dark skin tone",
          "shortname": ":older_woman_tone4:",
          "shortname_alternates": [
            ":grandma_tone4:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "old",
            "woman"
          ],
          "unicode_output": "1f475-1f3fe"
        },
        "1f475-1f3ff": {
          "name": "old woman: dark skin tone",
          "shortname": ":older_woman_tone5:",
          "shortname_alternates": [
            ":grandma_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "old",
            "woman"
          ],
          "unicode_output": "1f475-1f3ff"
        },
        "1f9d3": {
          "name": "older adult",
          "shortname": ":older_adult:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9d3"
        },
        "1f9d3-1f3fb": {
          "name": "older adult: light skin tone",
          "shortname": ":older_adult_tone1:",
          "shortname_alternates": [
            ":older_adult_light_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "light skin tone",
            "old"
          ],
          "unicode_output": "1f9d3-1f3fb"
        },
        "1f9d3-1f3fc": {
          "name": "older adult: medium-light skin tone",
          "shortname": ":older_adult_tone2:",
          "shortname_alternates": [
            ":older_adult_medium_light_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "medium-light skin tone",
            "old"
          ],
          "unicode_output": "1f9d3-1f3fc"
        },
        "1f9d3-1f3fd": {
          "name": "older adult: medium skin tone",
          "shortname": ":older_adult_tone3:",
          "shortname_alternates": [
            ":older_adult_medium_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "medium skin tone",
            "old"
          ],
          "unicode_output": "1f9d3-1f3fd"
        },
        "1f9d3-1f3fe": {
          "name": "older adult: medium-dark skin tone",
          "shortname": ":older_adult_tone4:",
          "shortname_alternates": [
            ":older_adult_medium_dark_skin_tone:"
          ],
          "keywords": [
            "gender-neutral",
            "medium-dark skin tone",
            "old"
          ],
          "unicode_output": "1f9d3-1f3fe"
        },
        "1f9d3-1f3ff": {
          "name": "older adult: dark skin tone",
          "shortname": ":older_adult_tone5:",
          "shortname_alternates": [
            ":older_adult_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "gender-neutral",
            "old"
          ],
          "unicode_output": "1f9d3-1f3ff"
        },
        "1f474": {
          "name": "old man",
          "shortname": ":older_man:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "old"
          ],
          "unicode_output": "1f474"
        },
        "1f474-1f3fb": {
          "name": "old man: light skin tone",
          "shortname": ":older_man_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "light skin tone",
            "man",
            "old"
          ],
          "unicode_output": "1f474-1f3fb"
        },
        "1f474-1f3fc": {
          "name": "old man: medium-light skin tone",
          "shortname": ":older_man_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "medium-light skin tone",
            "old"
          ],
          "unicode_output": "1f474-1f3fc"
        },
        "1f474-1f3fd": {
          "name": "old man: medium skin tone",
          "shortname": ":older_man_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "medium skin tone",
            "old"
          ],
          "unicode_output": "1f474-1f3fd"
        },
        "1f474-1f3fe": {
          "name": "old man: medium-dark skin tone",
          "shortname": ":older_man_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "medium-dark skin tone",
            "old"
          ],
          "unicode_output": "1f474-1f3fe"
        },
        "1f474-1f3ff": {
          "name": "old man: dark skin tone",
          "shortname": ":older_man_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "man",
            "old"
          ],
          "unicode_output": "1f474-1f3ff"
        },
        "1f472": {
          "name": "man with Chinese cap",
          "shortname": ":man_with_chinese_cap:",
          "shortname_alternates": [
            ":man_with_gua_pi_mao:"
          ],
          "keywords": [
            "gua pi mao",
            "hat",
            "man"
          ],
          "unicode_output": "1f472"
        },
        "1f472-1f3fb": {
          "name": "man with Chinese cap: light skin tone",
          "shortname": ":man_with_chinese_cap_tone1:",
          "shortname_alternates": [
            ":man_with_gua_pi_mao_tone1:"
          ],
          "keywords": [
            "gua pi mao",
            "hat",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f472-1f3fb"
        },
        "1f472-1f3fc": {
          "name": "man with Chinese cap: medium-light skin tone",
          "shortname": ":man_with_chinese_cap_tone2:",
          "shortname_alternates": [
            ":man_with_gua_pi_mao_tone2:"
          ],
          "keywords": [
            "gua pi mao",
            "hat",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f472-1f3fc"
        },
        "1f472-1f3fd": {
          "name": "man with Chinese cap: medium skin tone",
          "shortname": ":man_with_chinese_cap_tone3:",
          "shortname_alternates": [
            ":man_with_gua_pi_mao_tone3:"
          ],
          "keywords": [
            "gua pi mao",
            "hat",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f472-1f3fd"
        },
        "1f472-1f3fe": {
          "name": "man with Chinese cap: medium-dark skin tone",
          "shortname": ":man_with_chinese_cap_tone4:",
          "shortname_alternates": [
            ":man_with_gua_pi_mao_tone4:"
          ],
          "keywords": [
            "gua pi mao",
            "hat",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f472-1f3fe"
        },
        "1f472-1f3ff": {
          "name": "man with Chinese cap: dark skin tone",
          "shortname": ":man_with_chinese_cap_tone5:",
          "shortname_alternates": [
            ":man_with_gua_pi_mao_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "gua pi mao",
            "hat",
            "man"
          ],
          "unicode_output": "1f472-1f3ff"
        },
        "1f473": {
          "name": "person wearing turban",
          "shortname": ":person_wearing_turban:",
          "shortname_alternates": [
            ":man_with_turban:"
          ],
          "keywords": [
            "turban"
          ],
          "unicode_output": "1f473"
        },
        "1f473-1f3fb": {
          "name": "person wearing turban: light skin tone",
          "shortname": ":person_wearing_turban_tone1:",
          "shortname_alternates": [
            ":man_with_turban_tone1:"
          ],
          "keywords": [
            "light skin tone",
            "turban"
          ],
          "unicode_output": "1f473-1f3fb"
        },
        "1f473-1f3fc": {
          "name": "person wearing turban: medium-light skin tone",
          "shortname": ":person_wearing_turban_tone2:",
          "shortname_alternates": [
            ":man_with_turban_tone2:"
          ],
          "keywords": [
            "medium-light skin tone",
            "turban"
          ],
          "unicode_output": "1f473-1f3fc"
        },
        "1f473-1f3fd": {
          "name": "person wearing turban: medium skin tone",
          "shortname": ":person_wearing_turban_tone3:",
          "shortname_alternates": [
            ":man_with_turban_tone3:"
          ],
          "keywords": [
            "medium skin tone",
            "turban"
          ],
          "unicode_output": "1f473-1f3fd"
        },
        "1f473-1f3fe": {
          "name": "person wearing turban: medium-dark skin tone",
          "shortname": ":person_wearing_turban_tone4:",
          "shortname_alternates": [
            ":man_with_turban_tone4:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "turban"
          ],
          "unicode_output": "1f473-1f3fe"
        },
        "1f473-1f3ff": {
          "name": "person wearing turban: dark skin tone",
          "shortname": ":person_wearing_turban_tone5:",
          "shortname_alternates": [
            ":man_with_turban_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "turban"
          ],
          "unicode_output": "1f473-1f3ff"
        },
        "1f473-2640": {
          "name": "woman wearing turban",
          "shortname": ":woman_wearing_turban:",
          "shortname_alternates": [],
          "keywords": [
            "turban",
            "woman"
          ],
          "unicode_output": "1f473-200d-2640-fe0f"
        },
        "1f473-1f3fb-2640": {
          "name": "woman wearing turban: light skin tone",
          "shortname": ":woman_wearing_turban_tone1:",
          "shortname_alternates": [
            ":woman_wearing_turban_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "turban",
            "woman"
          ],
          "unicode_output": "1f473-1f3fb-200d-2640-fe0f"
        },
        "1f473-1f3fc-2640": {
          "name": "woman wearing turban: medium-light skin tone",
          "shortname": ":woman_wearing_turban_tone2:",
          "shortname_alternates": [
            ":woman_wearing_turban_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "turban",
            "woman"
          ],
          "unicode_output": "1f473-1f3fc-200d-2640-fe0f"
        },
        "1f473-1f3fd-2640": {
          "name": "woman wearing turban: medium skin tone",
          "shortname": ":woman_wearing_turban_tone3:",
          "shortname_alternates": [
            ":woman_wearing_turban_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "turban",
            "woman"
          ],
          "unicode_output": "1f473-1f3fd-200d-2640-fe0f"
        },
        "1f473-1f3fe-2640": {
          "name": "woman wearing turban: medium-dark skin tone",
          "shortname": ":woman_wearing_turban_tone4:",
          "shortname_alternates": [
            ":woman_wearing_turban_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "turban",
            "woman"
          ],
          "unicode_output": "1f473-1f3fe-200d-2640-fe0f"
        },
        "1f473-1f3ff-2640": {
          "name": "woman wearing turban: dark skin tone",
          "shortname": ":woman_wearing_turban_tone5:",
          "shortname_alternates": [
            ":woman_wearing_turban_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "turban",
            "woman"
          ],
          "unicode_output": "1f473-1f3ff-200d-2640-fe0f"
        },
        "1f473-2642": {
          "name": "man wearing turban",
          "shortname": ":man_wearing_turban:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "turban"
          ],
          "unicode_output": "1f473-200d-2642-fe0f"
        },
        "1f473-1f3fb-2642": {
          "name": "man wearing turban: light skin tone",
          "shortname": ":man_wearing_turban_tone1:",
          "shortname_alternates": [
            ":man_wearing_turban_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "man",
            "turban"
          ],
          "unicode_output": "1f473-1f3fb-200d-2642-fe0f"
        },
        "1f473-1f3fc-2642": {
          "name": "man wearing turban: medium-light skin tone",
          "shortname": ":man_wearing_turban_tone2:",
          "shortname_alternates": [
            ":man_wearing_turban_medium_light_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-light skin tone",
            "turban"
          ],
          "unicode_output": "1f473-1f3fc-200d-2642-fe0f"
        },
        "1f473-1f3fd-2642": {
          "name": "man wearing turban: medium skin tone",
          "shortname": ":man_wearing_turban_tone3:",
          "shortname_alternates": [
            ":man_wearing_turban_medium_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium skin tone",
            "turban"
          ],
          "unicode_output": "1f473-1f3fd-200d-2642-fe0f"
        },
        "1f473-1f3fe-2642": {
          "name": "man wearing turban: medium-dark skin tone",
          "shortname": ":man_wearing_turban_tone4:",
          "shortname_alternates": [
            ":man_wearing_turban_medium_dark_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-dark skin tone",
            "turban"
          ],
          "unicode_output": "1f473-1f3fe-200d-2642-fe0f"
        },
        "1f473-1f3ff-2642": {
          "name": "man wearing turban: dark skin tone",
          "shortname": ":man_wearing_turban_tone5:",
          "shortname_alternates": [
            ":man_wearing_turban_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "man",
            "turban"
          ],
          "unicode_output": "1f473-1f3ff-200d-2642-fe0f"
        },
        "1f9d5": {
          "name": "woman with headscarf",
          "shortname": ":woman_with_headscarf:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9d5"
        },
        "1f9d5-1f3fb": {
          "name": "woman with headscarf: light skin tone",
          "shortname": ":woman_with_headscarf_tone1:",
          "shortname_alternates": [
            ":woman_with_headscarf_light_skin_tone:"
          ],
          "keywords": [
            "headscarf",
            "hijab",
            "light skin tone",
            "mantilla",
            "tichel"
          ],
          "unicode_output": "1f9d5-1f3fb"
        },
        "1f9d5-1f3fc": {
          "name": "woman with headscarf: medium-light skin tone",
          "shortname": ":woman_with_headscarf_tone2:",
          "shortname_alternates": [
            ":woman_with_headscarf_medium_light_skin_tone:"
          ],
          "keywords": [
            "headscarf",
            "hijab",
            "mantilla",
            "medium-light skin tone",
            "tichel"
          ],
          "unicode_output": "1f9d5-1f3fc"
        },
        "1f9d5-1f3fd": {
          "name": "woman with headscarf: medium skin tone",
          "shortname": ":woman_with_headscarf_tone3:",
          "shortname_alternates": [
            ":woman_with_headscarf_medium_skin_tone:"
          ],
          "keywords": [
            "headscarf",
            "hijab",
            "mantilla",
            "medium skin tone",
            "tichel"
          ],
          "unicode_output": "1f9d5-1f3fd"
        },
        "1f9d5-1f3fe": {
          "name": "woman with headscarf: medium-dark skin tone",
          "shortname": ":woman_with_headscarf_tone4:",
          "shortname_alternates": [
            ":woman_with_headscarf_medium_dark_skin_tone:"
          ],
          "keywords": [
            "headscarf",
            "hijab",
            "mantilla",
            "medium-dark skin tone",
            "tichel"
          ],
          "unicode_output": "1f9d5-1f3fe"
        },
        "1f9d5-1f3ff": {
          "name": "woman with headscarf: dark skin tone",
          "shortname": ":woman_with_headscarf_tone5:",
          "shortname_alternates": [
            ":woman_with_headscarf_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "headscarf",
            "hijab",
            "mantilla",
            "tichel"
          ],
          "unicode_output": "1f9d5-1f3ff"
        },
        "1f46e": {
          "name": "police officer",
          "shortname": ":police_officer:",
          "shortname_alternates": [
            ":cop:"
          ],
          "keywords": [
            "cop",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e"
        },
        "1f46e-1f3fb": {
          "name": "police officer: light skin tone",
          "shortname": ":police_officer_tone1:",
          "shortname_alternates": [
            ":cop_tone1:"
          ],
          "keywords": [
            "cop",
            "light skin tone",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3fb"
        },
        "1f46e-1f3fc": {
          "name": "police officer: medium-light skin tone",
          "shortname": ":police_officer_tone2:",
          "shortname_alternates": [
            ":cop_tone2:"
          ],
          "keywords": [
            "cop",
            "medium-light skin tone",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3fc"
        },
        "1f46e-1f3fd": {
          "name": "police officer: medium skin tone",
          "shortname": ":police_officer_tone3:",
          "shortname_alternates": [
            ":cop_tone3:"
          ],
          "keywords": [
            "cop",
            "medium skin tone",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3fd"
        },
        "1f46e-1f3fe": {
          "name": "police officer: medium-dark skin tone",
          "shortname": ":police_officer_tone4:",
          "shortname_alternates": [
            ":cop_tone4:"
          ],
          "keywords": [
            "cop",
            "medium-dark skin tone",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3fe"
        },
        "1f46e-1f3ff": {
          "name": "police officer: dark skin tone",
          "shortname": ":police_officer_tone5:",
          "shortname_alternates": [
            ":cop_tone5:"
          ],
          "keywords": [
            "cop",
            "dark skin tone",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3ff"
        },
        "1f46e-2640": {
          "name": "woman police officer",
          "shortname": ":woman_police_officer:",
          "shortname_alternates": [],
          "keywords": [
            "cop",
            "officer",
            "police",
            "woman"
          ],
          "unicode_output": "1f46e-200d-2640-fe0f"
        },
        "1f46e-1f3fb-2640": {
          "name": "woman police officer: light skin tone",
          "shortname": ":woman_police_officer_tone1:",
          "shortname_alternates": [
            ":woman_police_officer_light_skin_tone:"
          ],
          "keywords": [
            "cop",
            "light skin tone",
            "officer",
            "police",
            "woman"
          ],
          "unicode_output": "1f46e-1f3fb-200d-2640-fe0f"
        },
        "1f46e-1f3fc-2640": {
          "name": "woman police officer: medium-light skin tone",
          "shortname": ":woman_police_officer_tone2:",
          "shortname_alternates": [
            ":woman_police_officer_medium_light_skin_tone:"
          ],
          "keywords": [
            "cop",
            "medium-light skin tone",
            "officer",
            "police",
            "woman"
          ],
          "unicode_output": "1f46e-1f3fc-200d-2640-fe0f"
        },
        "1f46e-1f3fd-2640": {
          "name": "woman police officer: medium skin tone",
          "shortname": ":woman_police_officer_tone3:",
          "shortname_alternates": [
            ":woman_police_officer_medium_skin_tone:"
          ],
          "keywords": [
            "cop",
            "medium skin tone",
            "officer",
            "police",
            "woman"
          ],
          "unicode_output": "1f46e-1f3fd-200d-2640-fe0f"
        },
        "1f46e-1f3fe-2640": {
          "name": "woman police officer: medium-dark skin tone",
          "shortname": ":woman_police_officer_tone4:",
          "shortname_alternates": [
            ":woman_police_officer_medium_dark_skin_tone:"
          ],
          "keywords": [
            "cop",
            "medium-dark skin tone",
            "officer",
            "police",
            "woman"
          ],
          "unicode_output": "1f46e-1f3fe-200d-2640-fe0f"
        },
        "1f46e-1f3ff-2640": {
          "name": "woman police officer: dark skin tone",
          "shortname": ":woman_police_officer_tone5:",
          "shortname_alternates": [
            ":woman_police_officer_dark_skin_tone:"
          ],
          "keywords": [
            "cop",
            "dark skin tone",
            "officer",
            "police",
            "woman"
          ],
          "unicode_output": "1f46e-1f3ff-200d-2640-fe0f"
        },
        "1f46e-2642": {
          "name": "man police officer",
          "shortname": ":man_police_officer:",
          "shortname_alternates": [],
          "keywords": [
            "cop",
            "man",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-200d-2642-fe0f"
        },
        "1f46e-1f3fb-2642": {
          "name": "man police officer: light skin tone",
          "shortname": ":man_police_officer_tone1:",
          "shortname_alternates": [
            ":man_police_officer_light_skin_tone:"
          ],
          "keywords": [
            "cop",
            "light skin tone",
            "man",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3fb-200d-2642-fe0f"
        },
        "1f46e-1f3fc-2642": {
          "name": "man police officer: medium-light skin tone",
          "shortname": ":man_police_officer_tone2:",
          "shortname_alternates": [
            ":man_police_officer_medium_light_skin_tone:"
          ],
          "keywords": [
            "cop",
            "man",
            "medium-light skin tone",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3fc-200d-2642-fe0f"
        },
        "1f46e-1f3fd-2642": {
          "name": "man police officer: medium skin tone",
          "shortname": ":man_police_officer_tone3:",
          "shortname_alternates": [
            ":man_police_officer_medium_skin_tone:"
          ],
          "keywords": [
            "cop",
            "man",
            "medium skin tone",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3fd-200d-2642-fe0f"
        },
        "1f46e-1f3fe-2642": {
          "name": "man police officer: medium-dark skin tone",
          "shortname": ":man_police_officer_tone4:",
          "shortname_alternates": [
            ":man_police_officer_medium_dark_skin_tone:"
          ],
          "keywords": [
            "cop",
            "man",
            "medium-dark skin tone",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3fe-200d-2642-fe0f"
        },
        "1f46e-1f3ff-2642": {
          "name": "man police officer: dark skin tone",
          "shortname": ":man_police_officer_tone5:",
          "shortname_alternates": [
            ":man_police_officer_dark_skin_tone:"
          ],
          "keywords": [
            "cop",
            "dark skin tone",
            "man",
            "officer",
            "police"
          ],
          "unicode_output": "1f46e-1f3ff-200d-2642-fe0f"
        },
        "1f477": {
          "name": "construction worker",
          "shortname": ":construction_worker:",
          "shortname_alternates": [],
          "keywords": [
            "construction",
            "hat",
            "worker"
          ],
          "unicode_output": "1f477"
        },
        "1f477-1f3fb": {
          "name": "construction worker: light skin tone",
          "shortname": ":construction_worker_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "construction",
            "hat",
            "light skin tone",
            "worker"
          ],
          "unicode_output": "1f477-1f3fb"
        },
        "1f477-1f3fc": {
          "name": "construction worker: medium-light skin tone",
          "shortname": ":construction_worker_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "construction",
            "hat",
            "medium-light skin tone",
            "worker"
          ],
          "unicode_output": "1f477-1f3fc"
        },
        "1f477-1f3fd": {
          "name": "construction worker: medium skin tone",
          "shortname": ":construction_worker_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "construction",
            "hat",
            "medium skin tone",
            "worker"
          ],
          "unicode_output": "1f477-1f3fd"
        },
        "1f477-1f3fe": {
          "name": "construction worker: medium-dark skin tone",
          "shortname": ":construction_worker_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "construction",
            "hat",
            "medium-dark skin tone",
            "worker"
          ],
          "unicode_output": "1f477-1f3fe"
        },
        "1f477-1f3ff": {
          "name": "construction worker: dark skin tone",
          "shortname": ":construction_worker_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "construction",
            "dark skin tone",
            "hat",
            "worker"
          ],
          "unicode_output": "1f477-1f3ff"
        },
        "1f477-2640": {
          "name": "woman construction worker",
          "shortname": ":woman_construction_worker:",
          "shortname_alternates": [],
          "keywords": [
            "construction",
            "woman",
            "worker"
          ],
          "unicode_output": "1f477-200d-2640-fe0f"
        },
        "1f477-1f3fb-2640": {
          "name": "woman construction worker: light skin tone",
          "shortname": ":woman_construction_worker_tone1:",
          "shortname_alternates": [
            ":woman_construction_worker_light_skin_tone:"
          ],
          "keywords": [
            "construction",
            "light skin tone",
            "woman",
            "worker"
          ],
          "unicode_output": "1f477-1f3fb-200d-2640-fe0f"
        },
        "1f477-1f3fc-2640": {
          "name": "woman construction worker: medium-light skin tone",
          "shortname": ":woman_construction_worker_tone2:",
          "shortname_alternates": [
            ":woman_construction_worker_medium_light_skin_tone:"
          ],
          "keywords": [
            "construction",
            "medium-light skin tone",
            "woman",
            "worker"
          ],
          "unicode_output": "1f477-1f3fc-200d-2640-fe0f"
        },
        "1f477-1f3fd-2640": {
          "name": "woman construction worker: medium skin tone",
          "shortname": ":woman_construction_worker_tone3:",
          "shortname_alternates": [
            ":woman_construction_worker_medium_skin_tone:"
          ],
          "keywords": [
            "construction",
            "medium skin tone",
            "woman",
            "worker"
          ],
          "unicode_output": "1f477-1f3fd-200d-2640-fe0f"
        },
        "1f477-1f3fe-2640": {
          "name": "woman construction worker: medium-dark skin tone",
          "shortname": ":woman_construction_worker_tone4:",
          "shortname_alternates": [
            ":woman_construction_worker_medium_dark_skin_tone:"
          ],
          "keywords": [
            "construction",
            "medium-dark skin tone",
            "woman",
            "worker"
          ],
          "unicode_output": "1f477-1f3fe-200d-2640-fe0f"
        },
        "1f477-1f3ff-2640": {
          "name": "woman construction worker: dark skin tone",
          "shortname": ":woman_construction_worker_tone5:",
          "shortname_alternates": [
            ":woman_construction_worker_dark_skin_tone:"
          ],
          "keywords": [
            "construction",
            "dark skin tone",
            "woman",
            "worker"
          ],
          "unicode_output": "1f477-1f3ff-200d-2640-fe0f"
        },
        "1f477-2642": {
          "name": "man construction worker",
          "shortname": ":man_construction_worker:",
          "shortname_alternates": [],
          "keywords": [
            "construction",
            "man",
            "worker"
          ],
          "unicode_output": "1f477-200d-2642-fe0f"
        },
        "1f477-1f3fb-2642": {
          "name": "man construction worker: light skin tone",
          "shortname": ":man_construction_worker_tone1:",
          "shortname_alternates": [
            ":man_construction_worker_light_skin_tone:"
          ],
          "keywords": [
            "construction",
            "light skin tone",
            "man",
            "worker"
          ],
          "unicode_output": "1f477-1f3fb-200d-2642-fe0f"
        },
        "1f477-1f3fc-2642": {
          "name": "man construction worker: medium-light skin tone",
          "shortname": ":man_construction_worker_tone2:",
          "shortname_alternates": [
            ":man_construction_worker_medium_light_skin_tone:"
          ],
          "keywords": [
            "construction",
            "man",
            "medium-light skin tone",
            "worker"
          ],
          "unicode_output": "1f477-1f3fc-200d-2642-fe0f"
        },
        "1f477-1f3fd-2642": {
          "name": "man construction worker: medium skin tone",
          "shortname": ":man_construction_worker_tone3:",
          "shortname_alternates": [
            ":man_construction_worker_medium_skin_tone:"
          ],
          "keywords": [
            "construction",
            "man",
            "medium skin tone",
            "worker"
          ],
          "unicode_output": "1f477-1f3fd-200d-2642-fe0f"
        },
        "1f477-1f3fe-2642": {
          "name": "man construction worker: medium-dark skin tone",
          "shortname": ":man_construction_worker_tone4:",
          "shortname_alternates": [
            ":man_construction_worker_medium_dark_skin_tone:"
          ],
          "keywords": [
            "construction",
            "man",
            "medium-dark skin tone",
            "worker"
          ],
          "unicode_output": "1f477-1f3fe-200d-2642-fe0f"
        },
        "1f477-1f3ff-2642": {
          "name": "man construction worker: dark skin tone",
          "shortname": ":man_construction_worker_tone5:",
          "shortname_alternates": [
            ":man_construction_worker_dark_skin_tone:"
          ],
          "keywords": [
            "construction",
            "dark skin tone",
            "man",
            "worker"
          ],
          "unicode_output": "1f477-1f3ff-200d-2642-fe0f"
        },
        "1f482": {
          "name": "guard",
          "shortname": ":guard:",
          "shortname_alternates": [
            ":guardsman:"
          ],
          "keywords": [
            "guard"
          ],
          "unicode_output": "1f482"
        },
        "1f482-1f3fb": {
          "name": "guard: light skin tone",
          "shortname": ":guard_tone1:",
          "shortname_alternates": [
            ":guardsman_tone1:"
          ],
          "keywords": [
            "guard",
            "light skin tone"
          ],
          "unicode_output": "1f482-1f3fb"
        },
        "1f482-1f3fc": {
          "name": "guard: medium-light skin tone",
          "shortname": ":guard_tone2:",
          "shortname_alternates": [
            ":guardsman_tone2:"
          ],
          "keywords": [
            "guard",
            "medium-light skin tone"
          ],
          "unicode_output": "1f482-1f3fc"
        },
        "1f482-1f3fd": {
          "name": "guard: medium skin tone",
          "shortname": ":guard_tone3:",
          "shortname_alternates": [
            ":guardsman_tone3:"
          ],
          "keywords": [
            "guard",
            "medium skin tone"
          ],
          "unicode_output": "1f482-1f3fd"
        },
        "1f482-1f3fe": {
          "name": "guard: medium-dark skin tone",
          "shortname": ":guard_tone4:",
          "shortname_alternates": [
            ":guardsman_tone4:"
          ],
          "keywords": [
            "guard",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f482-1f3fe"
        },
        "1f482-1f3ff": {
          "name": "guard: dark skin tone",
          "shortname": ":guard_tone5:",
          "shortname_alternates": [
            ":guardsman_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "guard"
          ],
          "unicode_output": "1f482-1f3ff"
        },
        "1f482-2640": {
          "name": "woman guard",
          "shortname": ":woman_guard:",
          "shortname_alternates": [],
          "keywords": [
            "guard",
            "woman"
          ],
          "unicode_output": "1f482-200d-2640-fe0f"
        },
        "1f482-1f3fb-2640": {
          "name": "woman guard: light skin tone",
          "shortname": ":woman_guard_tone1:",
          "shortname_alternates": [
            ":woman_guard_light_skin_tone:"
          ],
          "keywords": [
            "guard",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f482-1f3fb-200d-2640-fe0f"
        },
        "1f482-1f3fc-2640": {
          "name": "woman guard: medium-light skin tone",
          "shortname": ":woman_guard_tone2:",
          "shortname_alternates": [
            ":woman_guard_medium_light_skin_tone:"
          ],
          "keywords": [
            "guard",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f482-1f3fc-200d-2640-fe0f"
        },
        "1f482-1f3fd-2640": {
          "name": "woman guard: medium skin tone",
          "shortname": ":woman_guard_tone3:",
          "shortname_alternates": [
            ":woman_guard_medium_skin_tone:"
          ],
          "keywords": [
            "guard",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f482-1f3fd-200d-2640-fe0f"
        },
        "1f482-1f3fe-2640": {
          "name": "woman guard: medium-dark skin tone",
          "shortname": ":woman_guard_tone4:",
          "shortname_alternates": [
            ":woman_guard_medium_dark_skin_tone:"
          ],
          "keywords": [
            "guard",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f482-1f3fe-200d-2640-fe0f"
        },
        "1f482-1f3ff-2640": {
          "name": "woman guard: dark skin tone",
          "shortname": ":woman_guard_tone5:",
          "shortname_alternates": [
            ":woman_guard_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "guard",
            "woman"
          ],
          "unicode_output": "1f482-1f3ff-200d-2640-fe0f"
        },
        "1f482-2642": {
          "name": "man guard",
          "shortname": ":man_guard:",
          "shortname_alternates": [],
          "keywords": [
            "guard",
            "man"
          ],
          "unicode_output": "1f482-200d-2642-fe0f"
        },
        "1f482-1f3fb-2642": {
          "name": "man guard: light skin tone",
          "shortname": ":man_guard_tone1:",
          "shortname_alternates": [
            ":man_guard_light_skin_tone:"
          ],
          "keywords": [
            "guard",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f482-1f3fb-200d-2642-fe0f"
        },
        "1f482-1f3fc-2642": {
          "name": "man guard: medium-light skin tone",
          "shortname": ":man_guard_tone2:",
          "shortname_alternates": [
            ":man_guard_medium_light_skin_tone:"
          ],
          "keywords": [
            "guard",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f482-1f3fc-200d-2642-fe0f"
        },
        "1f482-1f3fd-2642": {
          "name": "man guard: medium skin tone",
          "shortname": ":man_guard_tone3:",
          "shortname_alternates": [
            ":man_guard_medium_skin_tone:"
          ],
          "keywords": [
            "guard",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f482-1f3fd-200d-2642-fe0f"
        },
        "1f482-1f3fe-2642": {
          "name": "man guard: medium-dark skin tone",
          "shortname": ":man_guard_tone4:",
          "shortname_alternates": [
            ":man_guard_medium_dark_skin_tone:"
          ],
          "keywords": [
            "guard",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f482-1f3fe-200d-2642-fe0f"
        },
        "1f482-1f3ff-2642": {
          "name": "man guard: dark skin tone",
          "shortname": ":man_guard_tone5:",
          "shortname_alternates": [
            ":man_guard_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "guard",
            "man"
          ],
          "unicode_output": "1f482-1f3ff-200d-2642-fe0f"
        },
        "1f575": {
          "name": "detective",
          "shortname": ":detective:",
          "shortname_alternates": [
            ":spy:",
            ":sleuth_or_spy:"
          ],
          "keywords": [
            "detective",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575"
        },
        "1f575-1f3fb": {
          "name": "detective: light skin tone",
          "shortname": ":detective_tone1:",
          "shortname_alternates": [
            ":spy_tone1:",
            ":sleuth_or_spy_tone1:"
          ],
          "keywords": [
            "detective",
            "light skin tone",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3fb"
        },
        "1f575-1f3fc": {
          "name": "detective: medium-light skin tone",
          "shortname": ":detective_tone2:",
          "shortname_alternates": [
            ":spy_tone2:",
            ":sleuth_or_spy_tone2:"
          ],
          "keywords": [
            "detective",
            "medium-light skin tone",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3fc"
        },
        "1f575-1f3fd": {
          "name": "detective: medium skin tone",
          "shortname": ":detective_tone3:",
          "shortname_alternates": [
            ":spy_tone3:",
            ":sleuth_or_spy_tone3:"
          ],
          "keywords": [
            "detective",
            "medium skin tone",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3fd"
        },
        "1f575-1f3fe": {
          "name": "detective: medium-dark skin tone",
          "shortname": ":detective_tone4:",
          "shortname_alternates": [
            ":spy_tone4:",
            ":sleuth_or_spy_tone4:"
          ],
          "keywords": [
            "detective",
            "medium-dark skin tone",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3fe"
        },
        "1f575-1f3ff": {
          "name": "detective: dark skin tone",
          "shortname": ":detective_tone5:",
          "shortname_alternates": [
            ":spy_tone5:",
            ":sleuth_or_spy_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "detective",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3ff"
        },
        "1f575-2640": {
          "name": "woman detective",
          "shortname": ":woman_detective:",
          "shortname_alternates": [],
          "keywords": [
            "detective",
            "sleuth",
            "spy",
            "woman"
          ],
          "unicode_output": "1f575-fe0f-200d-2640-fe0f"
        },
        "1f575-1f3fb-2640": {
          "name": "woman detective: light skin tone",
          "shortname": ":woman_detective_tone1:",
          "shortname_alternates": [
            ":woman_detective_light_skin_tone:"
          ],
          "keywords": [
            "detective",
            "light skin tone",
            "sleuth",
            "spy",
            "woman"
          ],
          "unicode_output": "1f575-1f3fb-200d-2640-fe0f"
        },
        "1f575-1f3fc-2640": {
          "name": "woman detective: medium-light skin tone",
          "shortname": ":woman_detective_tone2:",
          "shortname_alternates": [
            ":woman_detective_medium_light_skin_tone:"
          ],
          "keywords": [
            "detective",
            "medium-light skin tone",
            "sleuth",
            "spy",
            "woman"
          ],
          "unicode_output": "1f575-1f3fc-200d-2640-fe0f"
        },
        "1f575-1f3fd-2640": {
          "name": "woman detective: medium skin tone",
          "shortname": ":woman_detective_tone3:",
          "shortname_alternates": [
            ":woman_detective_medium_skin_tone:"
          ],
          "keywords": [
            "detective",
            "medium skin tone",
            "sleuth",
            "spy",
            "woman"
          ],
          "unicode_output": "1f575-1f3fd-200d-2640-fe0f"
        },
        "1f575-1f3fe-2640": {
          "name": "woman detective: medium-dark skin tone",
          "shortname": ":woman_detective_tone4:",
          "shortname_alternates": [
            ":woman_detective_medium_dark_skin_tone:"
          ],
          "keywords": [
            "detective",
            "medium-dark skin tone",
            "sleuth",
            "spy",
            "woman"
          ],
          "unicode_output": "1f575-1f3fe-200d-2640-fe0f"
        },
        "1f575-1f3ff-2640": {
          "name": "woman detective: dark skin tone",
          "shortname": ":woman_detective_tone5:",
          "shortname_alternates": [
            ":woman_detective_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "detective",
            "sleuth",
            "spy",
            "woman"
          ],
          "unicode_output": "1f575-1f3ff-200d-2640-fe0f"
        },
        "1f575-2642": {
          "name": "man detective",
          "shortname": ":man_detective:",
          "shortname_alternates": [],
          "keywords": [
            "detective",
            "man",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-fe0f-200d-2642-fe0f"
        },
        "1f575-1f3fb-2642": {
          "name": "man detective: light skin tone",
          "shortname": ":man_detective_tone1:",
          "shortname_alternates": [
            ":man_detective_light_skin_tone:"
          ],
          "keywords": [
            "detective",
            "light skin tone",
            "man",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3fb-200d-2642-fe0f"
        },
        "1f575-1f3fc-2642": {
          "name": "man detective: medium-light skin tone",
          "shortname": ":man_detective_tone2:",
          "shortname_alternates": [
            ":man_detective_medium_light_skin_tone:"
          ],
          "keywords": [
            "detective",
            "man",
            "medium-light skin tone",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3fc-200d-2642-fe0f"
        },
        "1f575-1f3fd-2642": {
          "name": "man detective: medium skin tone",
          "shortname": ":man_detective_tone3:",
          "shortname_alternates": [
            ":man_detective_medium_skin_tone:"
          ],
          "keywords": [
            "detective",
            "man",
            "medium skin tone",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3fd-200d-2642-fe0f"
        },
        "1f575-1f3fe-2642": {
          "name": "man detective: medium-dark skin tone",
          "shortname": ":man_detective_tone4:",
          "shortname_alternates": [
            ":man_detective_medium_dark_skin_tone:"
          ],
          "keywords": [
            "detective",
            "man",
            "medium-dark skin tone",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3fe-200d-2642-fe0f"
        },
        "1f575-1f3ff-2642": {
          "name": "man detective: dark skin tone",
          "shortname": ":man_detective_tone5:",
          "shortname_alternates": [
            ":man_detective_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "detective",
            "man",
            "sleuth",
            "spy"
          ],
          "unicode_output": "1f575-1f3ff-200d-2642-fe0f"
        },
        "1f469-2695": {
          "name": "woman health worker",
          "shortname": ":woman_health_worker:",
          "shortname_alternates": [],
          "keywords": [
            "doctor",
            "healthcare",
            "nurse",
            "therapist",
            "woman"
          ],
          "unicode_output": "1f469-200d-2695-fe0f"
        },
        "1f469-1f3fb-2695": {
          "name": "woman health worker: light skin tone",
          "shortname": ":woman_health_worker_tone1:",
          "shortname_alternates": [
            ":woman_health_worker_light_skin_tone:"
          ],
          "keywords": [
            "doctor",
            "healthcare",
            "light skin tone",
            "nurse",
            "therapist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-2695-fe0f"
        },
        "1f469-1f3fc-2695": {
          "name": "woman health worker: medium-light skin tone",
          "shortname": ":woman_health_worker_tone2:",
          "shortname_alternates": [
            ":woman_health_worker_medium_light_skin_tone:"
          ],
          "keywords": [
            "doctor",
            "healthcare",
            "medium-light skin tone",
            "nurse",
            "therapist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-2695-fe0f"
        },
        "1f469-1f3fd-2695": {
          "name": "woman health worker: medium skin tone",
          "shortname": ":woman_health_worker_tone3:",
          "shortname_alternates": [
            ":woman_health_worker_medium_skin_tone:"
          ],
          "keywords": [
            "doctor",
            "healthcare",
            "medium skin tone",
            "nurse",
            "therapist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-2695-fe0f"
        },
        "1f469-1f3fe-2695": {
          "name": "woman health worker: medium-dark skin tone",
          "shortname": ":woman_health_worker_tone4:",
          "shortname_alternates": [
            ":woman_health_worker_medium_dark_skin_tone:"
          ],
          "keywords": [
            "doctor",
            "healthcare",
            "medium-dark skin tone",
            "nurse",
            "therapist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-2695-fe0f"
        },
        "1f469-1f3ff-2695": {
          "name": "woman health worker: dark skin tone",
          "shortname": ":woman_health_worker_tone5:",
          "shortname_alternates": [
            ":woman_health_worker_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "doctor",
            "healthcare",
            "nurse",
            "therapist",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-2695-fe0f"
        },
        "1f468-2695": {
          "name": "man health worker",
          "shortname": ":man_health_worker:",
          "shortname_alternates": [],
          "keywords": [
            "doctor",
            "healthcare",
            "man",
            "nurse",
            "therapist"
          ],
          "unicode_output": "1f468-200d-2695-fe0f"
        },
        "1f468-1f3fb-2695": {
          "name": "man health worker: light skin tone",
          "shortname": ":man_health_worker_tone1:",
          "shortname_alternates": [
            ":man_health_worker_light_skin_tone:"
          ],
          "keywords": [
            "doctor",
            "healthcare",
            "light skin tone",
            "man",
            "nurse",
            "therapist"
          ],
          "unicode_output": "1f468-1f3fb-200d-2695-fe0f"
        },
        "1f468-1f3fc-2695": {
          "name": "man health worker: medium-light skin tone",
          "shortname": ":man_health_worker_tone2:",
          "shortname_alternates": [
            ":man_health_worker_medium_light_skin_tone:"
          ],
          "keywords": [
            "doctor",
            "healthcare",
            "man",
            "medium-light skin tone",
            "nurse",
            "therapist"
          ],
          "unicode_output": "1f468-1f3fc-200d-2695-fe0f"
        },
        "1f468-1f3fd-2695": {
          "name": "man health worker: medium skin tone",
          "shortname": ":man_health_worker_tone3:",
          "shortname_alternates": [
            ":man_health_worker_medium_skin_tone:"
          ],
          "keywords": [
            "doctor",
            "healthcare",
            "man",
            "medium skin tone",
            "nurse",
            "therapist"
          ],
          "unicode_output": "1f468-1f3fd-200d-2695-fe0f"
        },
        "1f468-1f3fe-2695": {
          "name": "man health worker: medium-dark skin tone",
          "shortname": ":man_health_worker_tone4:",
          "shortname_alternates": [
            ":man_health_worker_medium_dark_skin_tone:"
          ],
          "keywords": [
            "doctor",
            "healthcare",
            "man",
            "medium-dark skin tone",
            "nurse",
            "therapist"
          ],
          "unicode_output": "1f468-1f3fe-200d-2695-fe0f"
        },
        "1f468-1f3ff-2695": {
          "name": "man health worker: dark skin tone",
          "shortname": ":man_health_worker_tone5:",
          "shortname_alternates": [
            ":man_health_worker_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "doctor",
            "healthcare",
            "man",
            "nurse",
            "therapist"
          ],
          "unicode_output": "1f468-1f3ff-200d-2695-fe0f"
        },
        "1f469-1f33e": {
          "name": "woman farmer",
          "shortname": ":woman_farmer:",
          "shortname_alternates": [],
          "keywords": [
            "farmer",
            "gardener",
            "rancher",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f33e"
        },
        "1f469-1f3fb-1f33e": {
          "name": "woman farmer: light skin tone",
          "shortname": ":woman_farmer_tone1:",
          "shortname_alternates": [
            ":woman_farmer_light_skin_tone:"
          ],
          "keywords": [
            "farmer",
            "gardener",
            "light skin tone",
            "rancher",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f33e"
        },
        "1f469-1f3fc-1f33e": {
          "name": "woman farmer: medium-light skin tone",
          "shortname": ":woman_farmer_tone2:",
          "shortname_alternates": [
            ":woman_farmer_medium_light_skin_tone:"
          ],
          "keywords": [
            "farmer",
            "gardener",
            "medium-light skin tone",
            "rancher",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f33e"
        },
        "1f469-1f3fd-1f33e": {
          "name": "woman farmer: medium skin tone",
          "shortname": ":woman_farmer_tone3:",
          "shortname_alternates": [
            ":woman_farmer_medium_skin_tone:"
          ],
          "keywords": [
            "farmer",
            "gardener",
            "medium skin tone",
            "rancher",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f33e"
        },
        "1f469-1f3fe-1f33e": {
          "name": "woman farmer: medium-dark skin tone",
          "shortname": ":woman_farmer_tone4:",
          "shortname_alternates": [
            ":woman_farmer_medium_dark_skin_tone:"
          ],
          "keywords": [
            "farmer",
            "gardener",
            "medium-dark skin tone",
            "rancher",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f33e"
        },
        "1f469-1f3ff-1f33e": {
          "name": "woman farmer: dark skin tone",
          "shortname": ":woman_farmer_tone5:",
          "shortname_alternates": [
            ":woman_farmer_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "farmer",
            "gardener",
            "rancher",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f33e"
        },
        "1f468-1f33e": {
          "name": "man farmer",
          "shortname": ":man_farmer:",
          "shortname_alternates": [],
          "keywords": [
            "farmer",
            "gardener",
            "man",
            "rancher"
          ],
          "unicode_output": "1f468-200d-1f33e"
        },
        "1f468-1f3fb-1f33e": {
          "name": "man farmer: light skin tone",
          "shortname": ":man_farmer_tone1:",
          "shortname_alternates": [
            ":man_farmer_light_skin_tone:"
          ],
          "keywords": [
            "farmer",
            "gardener",
            "light skin tone",
            "man",
            "rancher"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f33e"
        },
        "1f468-1f3fc-1f33e": {
          "name": "man farmer: medium-light skin tone",
          "shortname": ":man_farmer_tone2:",
          "shortname_alternates": [
            ":man_farmer_medium_light_skin_tone:"
          ],
          "keywords": [
            "farmer",
            "gardener",
            "man",
            "medium-light skin tone",
            "rancher"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f33e"
        },
        "1f468-1f3fd-1f33e": {
          "name": "man farmer: medium skin tone",
          "shortname": ":man_farmer_tone3:",
          "shortname_alternates": [
            ":man_farmer_medium_skin_tone:"
          ],
          "keywords": [
            "farmer",
            "gardener",
            "man",
            "medium skin tone",
            "rancher"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f33e"
        },
        "1f468-1f3fe-1f33e": {
          "name": "man farmer: medium-dark skin tone",
          "shortname": ":man_farmer_tone4:",
          "shortname_alternates": [
            ":man_farmer_medium_dark_skin_tone:"
          ],
          "keywords": [
            "farmer",
            "gardener",
            "man",
            "medium-dark skin tone",
            "rancher"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f33e"
        },
        "1f468-1f3ff-1f33e": {
          "name": "man farmer: dark skin tone",
          "shortname": ":man_farmer_tone5:",
          "shortname_alternates": [
            ":man_farmer_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "farmer",
            "gardener",
            "man",
            "rancher"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f33e"
        },
        "1f469-1f373": {
          "name": "woman cook",
          "shortname": ":woman_cook:",
          "shortname_alternates": [],
          "keywords": [
            "chef",
            "cook",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f373"
        },
        "1f469-1f3fb-1f373": {
          "name": "woman cook: light skin tone",
          "shortname": ":woman_cook_tone1:",
          "shortname_alternates": [
            ":woman_cook_light_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f373"
        },
        "1f469-1f3fc-1f373": {
          "name": "woman cook: medium-light skin tone",
          "shortname": ":woman_cook_tone2:",
          "shortname_alternates": [
            ":woman_cook_medium_light_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f373"
        },
        "1f469-1f3fd-1f373": {
          "name": "woman cook: medium skin tone",
          "shortname": ":woman_cook_tone3:",
          "shortname_alternates": [
            ":woman_cook_medium_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f373"
        },
        "1f469-1f3fe-1f373": {
          "name": "woman cook: medium-dark skin tone",
          "shortname": ":woman_cook_tone4:",
          "shortname_alternates": [
            ":woman_cook_medium_dark_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f373"
        },
        "1f469-1f3ff-1f373": {
          "name": "woman cook: dark skin tone",
          "shortname": ":woman_cook_tone5:",
          "shortname_alternates": [
            ":woman_cook_dark_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "dark skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f373"
        },
        "1f468-1f373": {
          "name": "man cook",
          "shortname": ":man_cook:",
          "shortname_alternates": [],
          "keywords": [
            "chef",
            "cook",
            "man"
          ],
          "unicode_output": "1f468-200d-1f373"
        },
        "1f468-1f3fb-1f373": {
          "name": "man cook: light skin tone",
          "shortname": ":man_cook_tone1:",
          "shortname_alternates": [
            ":man_cook_light_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f373"
        },
        "1f468-1f3fc-1f373": {
          "name": "man cook: medium-light skin tone",
          "shortname": ":man_cook_tone2:",
          "shortname_alternates": [
            ":man_cook_medium_light_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f373"
        },
        "1f468-1f3fd-1f373": {
          "name": "man cook: medium skin tone",
          "shortname": ":man_cook_tone3:",
          "shortname_alternates": [
            ":man_cook_medium_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f373"
        },
        "1f468-1f3fe-1f373": {
          "name": "man cook: medium-dark skin tone",
          "shortname": ":man_cook_tone4:",
          "shortname_alternates": [
            ":man_cook_medium_dark_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f373"
        },
        "1f468-1f3ff-1f373": {
          "name": "man cook: dark skin tone",
          "shortname": ":man_cook_tone5:",
          "shortname_alternates": [
            ":man_cook_dark_skin_tone:"
          ],
          "keywords": [
            "chef",
            "cook",
            "dark skin tone",
            "man"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f373"
        },
        "1f469-1f393": {
          "name": "woman student",
          "shortname": ":woman_student:",
          "shortname_alternates": [],
          "keywords": [
            "graduate",
            "student",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f393"
        },
        "1f469-1f3fb-1f393": {
          "name": "woman student: light skin tone",
          "shortname": ":woman_student_tone1:",
          "shortname_alternates": [
            ":woman_student_light_skin_tone:"
          ],
          "keywords": [
            "graduate",
            "light skin tone",
            "student",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f393"
        },
        "1f469-1f3fc-1f393": {
          "name": "woman student: medium-light skin tone",
          "shortname": ":woman_student_tone2:",
          "shortname_alternates": [
            ":woman_student_medium_light_skin_tone:"
          ],
          "keywords": [
            "graduate",
            "medium-light skin tone",
            "student",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f393"
        },
        "1f469-1f3fd-1f393": {
          "name": "woman student: medium skin tone",
          "shortname": ":woman_student_tone3:",
          "shortname_alternates": [
            ":woman_student_medium_skin_tone:"
          ],
          "keywords": [
            "graduate",
            "medium skin tone",
            "student",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f393"
        },
        "1f469-1f3fe-1f393": {
          "name": "woman student: medium-dark skin tone",
          "shortname": ":woman_student_tone4:",
          "shortname_alternates": [
            ":woman_student_medium_dark_skin_tone:"
          ],
          "keywords": [
            "graduate",
            "medium-dark skin tone",
            "student",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f393"
        },
        "1f469-1f3ff-1f393": {
          "name": "woman student: dark skin tone",
          "shortname": ":woman_student_tone5:",
          "shortname_alternates": [
            ":woman_student_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "graduate",
            "student",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f393"
        },
        "1f468-1f393": {
          "name": "man student",
          "shortname": ":man_student:",
          "shortname_alternates": [],
          "keywords": [
            "graduate",
            "man",
            "student"
          ],
          "unicode_output": "1f468-200d-1f393"
        },
        "1f468-1f3fb-1f393": {
          "name": "man student: light skin tone",
          "shortname": ":man_student_tone1:",
          "shortname_alternates": [
            ":man_student_light_skin_tone:"
          ],
          "keywords": [
            "graduate",
            "light skin tone",
            "man",
            "student"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f393"
        },
        "1f468-1f3fc-1f393": {
          "name": "man student: medium-light skin tone",
          "shortname": ":man_student_tone2:",
          "shortname_alternates": [
            ":man_student_medium_light_skin_tone:"
          ],
          "keywords": [
            "graduate",
            "man",
            "medium-light skin tone",
            "student"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f393"
        },
        "1f468-1f3fd-1f393": {
          "name": "man student: medium skin tone",
          "shortname": ":man_student_tone3:",
          "shortname_alternates": [
            ":man_student_medium_skin_tone:"
          ],
          "keywords": [
            "graduate",
            "man",
            "medium skin tone",
            "student"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f393"
        },
        "1f468-1f3fe-1f393": {
          "name": "man student: medium-dark skin tone",
          "shortname": ":man_student_tone4:",
          "shortname_alternates": [
            ":man_student_medium_dark_skin_tone:"
          ],
          "keywords": [
            "graduate",
            "man",
            "medium-dark skin tone",
            "student"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f393"
        },
        "1f468-1f3ff-1f393": {
          "name": "man student: dark skin tone",
          "shortname": ":man_student_tone5:",
          "shortname_alternates": [
            ":man_student_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "graduate",
            "man",
            "student"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f393"
        },
        "1f469-1f3a4": {
          "name": "woman singer",
          "shortname": ":woman_singer:",
          "shortname_alternates": [],
          "keywords": [
            "actor",
            "entertainer",
            "rock",
            "singer",
            "star",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f3a4"
        },
        "1f469-1f3fb-1f3a4": {
          "name": "woman singer: light skin tone",
          "shortname": ":woman_singer_tone1:",
          "shortname_alternates": [
            ":woman_singer_light_skin_tone:"
          ],
          "keywords": [
            "actor",
            "entertainer",
            "light skin tone",
            "rock",
            "singer",
            "star",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f3a4"
        },
        "1f469-1f3fc-1f3a4": {
          "name": "woman singer: medium-light skin tone",
          "shortname": ":woman_singer_tone2:",
          "shortname_alternates": [
            ":woman_singer_medium_light_skin_tone:"
          ],
          "keywords": [
            "actor",
            "entertainer",
            "medium-light skin tone",
            "rock",
            "singer",
            "star",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f3a4"
        },
        "1f469-1f3fd-1f3a4": {
          "name": "woman singer: medium skin tone",
          "shortname": ":woman_singer_tone3:",
          "shortname_alternates": [
            ":woman_singer_medium_skin_tone:"
          ],
          "keywords": [
            "actor",
            "entertainer",
            "medium skin tone",
            "rock",
            "singer",
            "star",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f3a4"
        },
        "1f469-1f3fe-1f3a4": {
          "name": "woman singer: medium-dark skin tone",
          "shortname": ":woman_singer_tone4:",
          "shortname_alternates": [
            ":woman_singer_medium_dark_skin_tone:"
          ],
          "keywords": [
            "actor",
            "entertainer",
            "medium-dark skin tone",
            "rock",
            "singer",
            "star",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f3a4"
        },
        "1f469-1f3ff-1f3a4": {
          "name": "woman singer: dark skin tone",
          "shortname": ":woman_singer_tone5:",
          "shortname_alternates": [
            ":woman_singer_dark_skin_tone:"
          ],
          "keywords": [
            "actor",
            "dark skin tone",
            "entertainer",
            "rock",
            "singer",
            "star",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f3a4"
        },
        "1f468-1f3a4": {
          "name": "man singer",
          "shortname": ":man_singer:",
          "shortname_alternates": [],
          "keywords": [
            "actor",
            "entertainer",
            "man",
            "rock",
            "singer",
            "star"
          ],
          "unicode_output": "1f468-200d-1f3a4"
        },
        "1f468-1f3fb-1f3a4": {
          "name": "man singer: light skin tone",
          "shortname": ":man_singer_tone1:",
          "shortname_alternates": [
            ":man_singer_light_skin_tone:"
          ],
          "keywords": [
            "actor",
            "entertainer",
            "light skin tone",
            "man",
            "rock",
            "singer",
            "star"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f3a4"
        },
        "1f468-1f3fc-1f3a4": {
          "name": "man singer: medium-light skin tone",
          "shortname": ":man_singer_tone2:",
          "shortname_alternates": [
            ":man_singer_medium_light_skin_tone:"
          ],
          "keywords": [
            "actor",
            "entertainer",
            "man",
            "medium-light skin tone",
            "rock",
            "singer",
            "star"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f3a4"
        },
        "1f468-1f3fd-1f3a4": {
          "name": "man singer: medium skin tone",
          "shortname": ":man_singer_tone3:",
          "shortname_alternates": [
            ":man_singer_medium_skin_tone:"
          ],
          "keywords": [
            "actor",
            "entertainer",
            "man",
            "medium skin tone",
            "rock",
            "singer",
            "star"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f3a4"
        },
        "1f468-1f3fe-1f3a4": {
          "name": "man singer: medium-dark skin tone",
          "shortname": ":man_singer_tone4:",
          "shortname_alternates": [
            ":man_singer_medium_dark_skin_tone:"
          ],
          "keywords": [
            "actor",
            "entertainer",
            "man",
            "medium-dark skin tone",
            "rock",
            "singer",
            "star"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f3a4"
        },
        "1f468-1f3ff-1f3a4": {
          "name": "man singer: dark skin tone",
          "shortname": ":man_singer_tone5:",
          "shortname_alternates": [
            ":man_singer_dark_skin_tone:"
          ],
          "keywords": [
            "actor",
            "dark skin tone",
            "entertainer",
            "man",
            "rock",
            "singer",
            "star"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f3a4"
        },
        "1f469-1f3eb": {
          "name": "woman teacher",
          "shortname": ":woman_teacher:",
          "shortname_alternates": [],
          "keywords": [
            "instructor",
            "professor",
            "teacher",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f3eb"
        },
        "1f469-1f3fb-1f3eb": {
          "name": "woman teacher: light skin tone",
          "shortname": ":woman_teacher_tone1:",
          "shortname_alternates": [
            ":woman_teacher_light_skin_tone:"
          ],
          "keywords": [
            "instructor",
            "light skin tone",
            "professor",
            "teacher",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f3eb"
        },
        "1f469-1f3fc-1f3eb": {
          "name": "woman teacher: medium-light skin tone",
          "shortname": ":woman_teacher_tone2:",
          "shortname_alternates": [
            ":woman_teacher_medium_light_skin_tone:"
          ],
          "keywords": [
            "instructor",
            "medium-light skin tone",
            "professor",
            "teacher",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f3eb"
        },
        "1f469-1f3fd-1f3eb": {
          "name": "woman teacher: medium skin tone",
          "shortname": ":woman_teacher_tone3:",
          "shortname_alternates": [
            ":woman_teacher_medium_skin_tone:"
          ],
          "keywords": [
            "instructor",
            "medium skin tone",
            "professor",
            "teacher",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f3eb"
        },
        "1f469-1f3fe-1f3eb": {
          "name": "woman teacher: medium-dark skin tone",
          "shortname": ":woman_teacher_tone4:",
          "shortname_alternates": [
            ":woman_teacher_medium_dark_skin_tone:"
          ],
          "keywords": [
            "instructor",
            "medium-dark skin tone",
            "professor",
            "teacher",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f3eb"
        },
        "1f469-1f3ff-1f3eb": {
          "name": "woman teacher: dark skin tone",
          "shortname": ":woman_teacher_tone5:",
          "shortname_alternates": [
            ":woman_teacher_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "instructor",
            "professor",
            "teacher",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f3eb"
        },
        "1f468-1f3eb": {
          "name": "man teacher",
          "shortname": ":man_teacher:",
          "shortname_alternates": [],
          "keywords": [
            "instructor",
            "man",
            "professor",
            "teacher"
          ],
          "unicode_output": "1f468-200d-1f3eb"
        },
        "1f468-1f3fb-1f3eb": {
          "name": "man teacher: light skin tone",
          "shortname": ":man_teacher_tone1:",
          "shortname_alternates": [
            ":man_teacher_light_skin_tone:"
          ],
          "keywords": [
            "instructor",
            "light skin tone",
            "man",
            "professor",
            "teacher"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f3eb"
        },
        "1f468-1f3fc-1f3eb": {
          "name": "man teacher: medium-light skin tone",
          "shortname": ":man_teacher_tone2:",
          "shortname_alternates": [
            ":man_teacher_medium_light_skin_tone:"
          ],
          "keywords": [
            "instructor",
            "man",
            "medium-light skin tone",
            "professor",
            "teacher"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f3eb"
        },
        "1f468-1f3fd-1f3eb": {
          "name": "man teacher: medium skin tone",
          "shortname": ":man_teacher_tone3:",
          "shortname_alternates": [
            ":man_teacher_medium_skin_tone:"
          ],
          "keywords": [
            "instructor",
            "man",
            "medium skin tone",
            "professor",
            "teacher"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f3eb"
        },
        "1f468-1f3fe-1f3eb": {
          "name": "man teacher: medium-dark skin tone",
          "shortname": ":man_teacher_tone4:",
          "shortname_alternates": [
            ":man_teacher_medium_dark_skin_tone:"
          ],
          "keywords": [
            "instructor",
            "man",
            "medium-dark skin tone",
            "professor",
            "teacher"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f3eb"
        },
        "1f468-1f3ff-1f3eb": {
          "name": "man teacher: dark skin tone",
          "shortname": ":man_teacher_tone5:",
          "shortname_alternates": [
            ":man_teacher_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "instructor",
            "man",
            "professor",
            "teacher"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f3eb"
        },
        "1f469-1f3ed": {
          "name": "woman factory worker",
          "shortname": ":woman_factory_worker:",
          "shortname_alternates": [],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "woman",
            "worker"
          ],
          "unicode_output": "1f469-200d-1f3ed"
        },
        "1f469-1f3fb-1f3ed": {
          "name": "woman factory worker: light skin tone",
          "shortname": ":woman_factory_worker_tone1:",
          "shortname_alternates": [
            ":woman_factory_worker_light_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "light skin tone",
            "woman",
            "worker"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f3ed"
        },
        "1f469-1f3fc-1f3ed": {
          "name": "woman factory worker: medium-light skin tone",
          "shortname": ":woman_factory_worker_tone2:",
          "shortname_alternates": [
            ":woman_factory_worker_medium_light_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "medium-light skin tone",
            "woman",
            "worker"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f3ed"
        },
        "1f469-1f3fd-1f3ed": {
          "name": "woman factory worker: medium skin tone",
          "shortname": ":woman_factory_worker_tone3:",
          "shortname_alternates": [
            ":woman_factory_worker_medium_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "medium skin tone",
            "woman",
            "worker"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f3ed"
        },
        "1f469-1f3fe-1f3ed": {
          "name": "woman factory worker: medium-dark skin tone",
          "shortname": ":woman_factory_worker_tone4:",
          "shortname_alternates": [
            ":woman_factory_worker_medium_dark_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "medium-dark skin tone",
            "woman",
            "worker"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f3ed"
        },
        "1f469-1f3ff-1f3ed": {
          "name": "woman factory worker: dark skin tone",
          "shortname": ":woman_factory_worker_tone5:",
          "shortname_alternates": [
            ":woman_factory_worker_dark_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "dark skin tone",
            "factory",
            "industrial",
            "woman",
            "worker"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f3ed"
        },
        "1f468-1f3ed": {
          "name": "man factory worker",
          "shortname": ":man_factory_worker:",
          "shortname_alternates": [],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "man",
            "worker"
          ],
          "unicode_output": "1f468-200d-1f3ed"
        },
        "1f468-1f3fb-1f3ed": {
          "name": "man factory worker: light skin tone",
          "shortname": ":man_factory_worker_tone1:",
          "shortname_alternates": [
            ":man_factory_worker_light_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "light skin tone",
            "man",
            "worker"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f3ed"
        },
        "1f468-1f3fc-1f3ed": {
          "name": "man factory worker: medium-light skin tone",
          "shortname": ":man_factory_worker_tone2:",
          "shortname_alternates": [
            ":man_factory_worker_medium_light_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "man",
            "medium-light skin tone",
            "worker"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f3ed"
        },
        "1f468-1f3fd-1f3ed": {
          "name": "man factory worker: medium skin tone",
          "shortname": ":man_factory_worker_tone3:",
          "shortname_alternates": [
            ":man_factory_worker_medium_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "man",
            "medium skin tone",
            "worker"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f3ed"
        },
        "1f468-1f3fe-1f3ed": {
          "name": "man factory worker: medium-dark skin tone",
          "shortname": ":man_factory_worker_tone4:",
          "shortname_alternates": [
            ":man_factory_worker_medium_dark_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "factory",
            "industrial",
            "man",
            "medium-dark skin tone",
            "worker"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f3ed"
        },
        "1f468-1f3ff-1f3ed": {
          "name": "man factory worker: dark skin tone",
          "shortname": ":man_factory_worker_tone5:",
          "shortname_alternates": [
            ":man_factory_worker_dark_skin_tone:"
          ],
          "keywords": [
            "assembly",
            "dark skin tone",
            "factory",
            "industrial",
            "man",
            "worker"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f3ed"
        },
        "1f469-1f4bb": {
          "name": "woman technologist",
          "shortname": ":woman_technologist:",
          "shortname_alternates": [],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "software",
            "technologist",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f4bb"
        },
        "1f469-1f3fb-1f4bb": {
          "name": "woman technologist: light skin tone",
          "shortname": ":woman_technologist_tone1:",
          "shortname_alternates": [
            ":woman_technologist_light_skin_tone:"
          ],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "light skin tone",
            "software",
            "technologist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f4bb"
        },
        "1f469-1f3fc-1f4bb": {
          "name": "woman technologist: medium-light skin tone",
          "shortname": ":woman_technologist_tone2:",
          "shortname_alternates": [
            ":woman_technologist_medium_light_skin_tone:"
          ],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "medium-light skin tone",
            "software",
            "technologist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f4bb"
        },
        "1f469-1f3fd-1f4bb": {
          "name": "woman technologist: medium skin tone",
          "shortname": ":woman_technologist_tone3:",
          "shortname_alternates": [
            ":woman_technologist_medium_skin_tone:"
          ],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "medium skin tone",
            "software",
            "technologist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f4bb"
        },
        "1f469-1f3fe-1f4bb": {
          "name": "woman technologist: medium-dark skin tone",
          "shortname": ":woman_technologist_tone4:",
          "shortname_alternates": [
            ":woman_technologist_medium_dark_skin_tone:"
          ],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "medium-dark skin tone",
            "software",
            "technologist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f4bb"
        },
        "1f469-1f3ff-1f4bb": {
          "name": "woman technologist: dark skin tone",
          "shortname": ":woman_technologist_tone5:",
          "shortname_alternates": [
            ":woman_technologist_dark_skin_tone:"
          ],
          "keywords": [
            "coder",
            "dark skin tone",
            "developer",
            "inventor",
            "software",
            "technologist",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f4bb"
        },
        "1f468-1f4bb": {
          "name": "man technologist",
          "shortname": ":man_technologist:",
          "shortname_alternates": [],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "man",
            "software",
            "technologist"
          ],
          "unicode_output": "1f468-200d-1f4bb"
        },
        "1f468-1f3fb-1f4bb": {
          "name": "man technologist: light skin tone",
          "shortname": ":man_technologist_tone1:",
          "shortname_alternates": [
            ":man_technologist_light_skin_tone:"
          ],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "light skin tone",
            "man",
            "software",
            "technologist"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f4bb"
        },
        "1f468-1f3fc-1f4bb": {
          "name": "man technologist: medium-light skin tone",
          "shortname": ":man_technologist_tone2:",
          "shortname_alternates": [
            ":man_technologist_medium_light_skin_tone:"
          ],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "man",
            "medium-light skin tone",
            "software",
            "technologist"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f4bb"
        },
        "1f468-1f3fd-1f4bb": {
          "name": "man technologist: medium skin tone",
          "shortname": ":man_technologist_tone3:",
          "shortname_alternates": [
            ":man_technologist_medium_skin_tone:"
          ],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "man",
            "medium skin tone",
            "software",
            "technologist"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f4bb"
        },
        "1f468-1f3fe-1f4bb": {
          "name": "man technologist: medium-dark skin tone",
          "shortname": ":man_technologist_tone4:",
          "shortname_alternates": [
            ":man_technologist_medium_dark_skin_tone:"
          ],
          "keywords": [
            "coder",
            "developer",
            "inventor",
            "man",
            "medium-dark skin tone",
            "software",
            "technologist"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f4bb"
        },
        "1f468-1f3ff-1f4bb": {
          "name": "man technologist: dark skin tone",
          "shortname": ":man_technologist_tone5:",
          "shortname_alternates": [
            ":man_technologist_dark_skin_tone:"
          ],
          "keywords": [
            "coder",
            "dark skin tone",
            "developer",
            "inventor",
            "man",
            "software",
            "technologist"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f4bb"
        },
        "1f469-1f4bc": {
          "name": "woman office worker",
          "shortname": ":woman_office_worker:",
          "shortname_alternates": [],
          "keywords": [
            "architect",
            "business",
            "manager",
            "office",
            "white-collar",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f4bc"
        },
        "1f469-1f3fb-1f4bc": {
          "name": "woman office worker: light skin tone",
          "shortname": ":woman_office_worker_tone1:",
          "shortname_alternates": [
            ":woman_office_worker_light_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "light skin tone",
            "manager",
            "office",
            "white-collar",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f4bc"
        },
        "1f469-1f3fc-1f4bc": {
          "name": "woman office worker: medium-light skin tone",
          "shortname": ":woman_office_worker_tone2:",
          "shortname_alternates": [
            ":woman_office_worker_medium_light_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "manager",
            "medium-light skin tone",
            "office",
            "white-collar",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f4bc"
        },
        "1f469-1f3fd-1f4bc": {
          "name": "woman office worker: medium skin tone",
          "shortname": ":woman_office_worker_tone3:",
          "shortname_alternates": [
            ":woman_office_worker_medium_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "manager",
            "medium skin tone",
            "office",
            "white-collar",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f4bc"
        },
        "1f469-1f3fe-1f4bc": {
          "name": "woman office worker: medium-dark skin tone",
          "shortname": ":woman_office_worker_tone4:",
          "shortname_alternates": [
            ":woman_office_worker_medium_dark_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "manager",
            "medium-dark skin tone",
            "office",
            "white-collar",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f4bc"
        },
        "1f469-1f3ff-1f4bc": {
          "name": "woman office worker: dark skin tone",
          "shortname": ":woman_office_worker_tone5:",
          "shortname_alternates": [
            ":woman_office_worker_dark_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "dark skin tone",
            "manager",
            "office",
            "white-collar",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f4bc"
        },
        "1f468-1f4bc": {
          "name": "man office worker",
          "shortname": ":man_office_worker:",
          "shortname_alternates": [],
          "keywords": [
            "architect",
            "business",
            "man",
            "manager",
            "office",
            "white-collar"
          ],
          "unicode_output": "1f468-200d-1f4bc"
        },
        "1f468-1f3fb-1f4bc": {
          "name": "man office worker: light skin tone",
          "shortname": ":man_office_worker_tone1:",
          "shortname_alternates": [
            ":man_office_worker_light_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "light skin tone",
            "man",
            "manager",
            "office",
            "white-collar"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f4bc"
        },
        "1f468-1f3fc-1f4bc": {
          "name": "man office worker: medium-light skin tone",
          "shortname": ":man_office_worker_tone2:",
          "shortname_alternates": [
            ":man_office_worker_medium_light_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "man",
            "manager",
            "medium-light skin tone",
            "office",
            "white-collar"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f4bc"
        },
        "1f468-1f3fd-1f4bc": {
          "name": "man office worker: medium skin tone",
          "shortname": ":man_office_worker_tone3:",
          "shortname_alternates": [
            ":man_office_worker_medium_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "man",
            "manager",
            "medium skin tone",
            "office",
            "white-collar"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f4bc"
        },
        "1f468-1f3fe-1f4bc": {
          "name": "man office worker: medium-dark skin tone",
          "shortname": ":man_office_worker_tone4:",
          "shortname_alternates": [
            ":man_office_worker_medium_dark_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "man",
            "manager",
            "medium-dark skin tone",
            "office",
            "white-collar"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f4bc"
        },
        "1f468-1f3ff-1f4bc": {
          "name": "man office worker: dark skin tone",
          "shortname": ":man_office_worker_tone5:",
          "shortname_alternates": [
            ":man_office_worker_dark_skin_tone:"
          ],
          "keywords": [
            "architect",
            "business",
            "dark skin tone",
            "man",
            "manager",
            "office",
            "white-collar"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f4bc"
        },
        "1f469-1f527": {
          "name": "woman mechanic",
          "shortname": ":woman_mechanic:",
          "shortname_alternates": [],
          "keywords": [
            "electrician",
            "mechanic",
            "plumber",
            "tradesperson",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f527"
        },
        "1f469-1f3fb-1f527": {
          "name": "woman mechanic: light skin tone",
          "shortname": ":woman_mechanic_tone1:",
          "shortname_alternates": [
            ":woman_mechanic_light_skin_tone:"
          ],
          "keywords": [
            "electrician",
            "light skin tone",
            "mechanic",
            "plumber",
            "tradesperson",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f527"
        },
        "1f469-1f3fc-1f527": {
          "name": "woman mechanic: medium-light skin tone",
          "shortname": ":woman_mechanic_tone2:",
          "shortname_alternates": [
            ":woman_mechanic_medium_light_skin_tone:"
          ],
          "keywords": [
            "electrician",
            "mechanic",
            "medium-light skin tone",
            "plumber",
            "tradesperson",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f527"
        },
        "1f469-1f3fd-1f527": {
          "name": "woman mechanic: medium skin tone",
          "shortname": ":woman_mechanic_tone3:",
          "shortname_alternates": [
            ":woman_mechanic_medium_skin_tone:"
          ],
          "keywords": [
            "electrician",
            "mechanic",
            "medium skin tone",
            "plumber",
            "tradesperson",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f527"
        },
        "1f469-1f3fe-1f527": {
          "name": "woman mechanic: medium-dark skin tone",
          "shortname": ":woman_mechanic_tone4:",
          "shortname_alternates": [
            ":woman_mechanic_medium_dark_skin_tone:"
          ],
          "keywords": [
            "electrician",
            "mechanic",
            "medium-dark skin tone",
            "plumber",
            "tradesperson",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f527"
        },
        "1f469-1f3ff-1f527": {
          "name": "woman mechanic: dark skin tone",
          "shortname": ":woman_mechanic_tone5:",
          "shortname_alternates": [
            ":woman_mechanic_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "electrician",
            "mechanic",
            "plumber",
            "tradesperson",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f527"
        },
        "1f468-1f527": {
          "name": "man mechanic",
          "shortname": ":man_mechanic:",
          "shortname_alternates": [],
          "keywords": [
            "electrician",
            "man",
            "mechanic",
            "plumber",
            "tradesperson"
          ],
          "unicode_output": "1f468-200d-1f527"
        },
        "1f468-1f3fb-1f527": {
          "name": "man mechanic: light skin tone",
          "shortname": ":man_mechanic_tone1:",
          "shortname_alternates": [
            ":man_mechanic_light_skin_tone:"
          ],
          "keywords": [
            "electrician",
            "light skin tone",
            "man",
            "mechanic",
            "plumber",
            "tradesperson"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f527"
        },
        "1f468-1f3fc-1f527": {
          "name": "man mechanic: medium-light skin tone",
          "shortname": ":man_mechanic_tone2:",
          "shortname_alternates": [
            ":man_mechanic_medium_light_skin_tone:"
          ],
          "keywords": [
            "electrician",
            "man",
            "mechanic",
            "medium-light skin tone",
            "plumber",
            "tradesperson"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f527"
        },
        "1f468-1f3fd-1f527": {
          "name": "man mechanic: medium skin tone",
          "shortname": ":man_mechanic_tone3:",
          "shortname_alternates": [
            ":man_mechanic_medium_skin_tone:"
          ],
          "keywords": [
            "electrician",
            "man",
            "mechanic",
            "medium skin tone",
            "plumber",
            "tradesperson"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f527"
        },
        "1f468-1f3fe-1f527": {
          "name": "man mechanic: medium-dark skin tone",
          "shortname": ":man_mechanic_tone4:",
          "shortname_alternates": [
            ":man_mechanic_medium_dark_skin_tone:"
          ],
          "keywords": [
            "electrician",
            "man",
            "mechanic",
            "medium-dark skin tone",
            "plumber",
            "tradesperson"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f527"
        },
        "1f468-1f3ff-1f527": {
          "name": "man mechanic: dark skin tone",
          "shortname": ":man_mechanic_tone5:",
          "shortname_alternates": [
            ":man_mechanic_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "electrician",
            "man",
            "mechanic",
            "plumber",
            "tradesperson"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f527"
        },
        "1f469-1f52c": {
          "name": "woman scientist",
          "shortname": ":woman_scientist:",
          "shortname_alternates": [],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "mathematician",
            "physicist",
            "scientist",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f52c"
        },
        "1f469-1f3fb-1f52c": {
          "name": "woman scientist: light skin tone",
          "shortname": ":woman_scientist_tone1:",
          "shortname_alternates": [
            ":woman_scientist_light_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "light skin tone",
            "mathematician",
            "physicist",
            "scientist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f52c"
        },
        "1f469-1f3fc-1f52c": {
          "name": "woman scientist: medium-light skin tone",
          "shortname": ":woman_scientist_tone2:",
          "shortname_alternates": [
            ":woman_scientist_medium_light_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "mathematician",
            "medium-light skin tone",
            "physicist",
            "scientist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f52c"
        },
        "1f469-1f3fd-1f52c": {
          "name": "woman scientist: medium skin tone",
          "shortname": ":woman_scientist_tone3:",
          "shortname_alternates": [
            ":woman_scientist_medium_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "mathematician",
            "medium skin tone",
            "physicist",
            "scientist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f52c"
        },
        "1f469-1f3fe-1f52c": {
          "name": "woman scientist: medium-dark skin tone",
          "shortname": ":woman_scientist_tone4:",
          "shortname_alternates": [
            ":woman_scientist_medium_dark_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "mathematician",
            "medium-dark skin tone",
            "physicist",
            "scientist",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f52c"
        },
        "1f469-1f3ff-1f52c": {
          "name": "woman scientist: dark skin tone",
          "shortname": ":woman_scientist_tone5:",
          "shortname_alternates": [
            ":woman_scientist_dark_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "dark skin tone",
            "engineer",
            "mathematician",
            "physicist",
            "scientist",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f52c"
        },
        "1f468-1f52c": {
          "name": "man scientist",
          "shortname": ":man_scientist:",
          "shortname_alternates": [],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "man",
            "mathematician",
            "physicist",
            "scientist"
          ],
          "unicode_output": "1f468-200d-1f52c"
        },
        "1f468-1f3fb-1f52c": {
          "name": "man scientist: light skin tone",
          "shortname": ":man_scientist_tone1:",
          "shortname_alternates": [
            ":man_scientist_light_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "light skin tone",
            "man",
            "mathematician",
            "physicist",
            "scientist"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f52c"
        },
        "1f468-1f3fc-1f52c": {
          "name": "man scientist: medium-light skin tone",
          "shortname": ":man_scientist_tone2:",
          "shortname_alternates": [
            ":man_scientist_medium_light_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "man",
            "mathematician",
            "medium-light skin tone",
            "physicist",
            "scientist"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f52c"
        },
        "1f468-1f3fd-1f52c": {
          "name": "man scientist: medium skin tone",
          "shortname": ":man_scientist_tone3:",
          "shortname_alternates": [
            ":man_scientist_medium_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "man",
            "mathematician",
            "medium skin tone",
            "physicist",
            "scientist"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f52c"
        },
        "1f468-1f3fe-1f52c": {
          "name": "man scientist: medium-dark skin tone",
          "shortname": ":man_scientist_tone4:",
          "shortname_alternates": [
            ":man_scientist_medium_dark_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "engineer",
            "man",
            "mathematician",
            "medium-dark skin tone",
            "physicist",
            "scientist"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f52c"
        },
        "1f468-1f3ff-1f52c": {
          "name": "man scientist: dark skin tone",
          "shortname": ":man_scientist_tone5:",
          "shortname_alternates": [
            ":man_scientist_dark_skin_tone:"
          ],
          "keywords": [
            "biologist",
            "chemist",
            "dark skin tone",
            "engineer",
            "man",
            "mathematician",
            "physicist",
            "scientist"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f52c"
        },
        "1f469-1f3a8": {
          "name": "woman artist",
          "shortname": ":woman_artist:",
          "shortname_alternates": [],
          "keywords": [
            "artist",
            "palette",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f3a8"
        },
        "1f469-1f3fb-1f3a8": {
          "name": "woman artist: light skin tone",
          "shortname": ":woman_artist_tone1:",
          "shortname_alternates": [
            ":woman_artist_light_skin_tone:"
          ],
          "keywords": [
            "artist",
            "light skin tone",
            "palette",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f3a8"
        },
        "1f469-1f3fc-1f3a8": {
          "name": "woman artist: medium-light skin tone",
          "shortname": ":woman_artist_tone2:",
          "shortname_alternates": [
            ":woman_artist_medium_light_skin_tone:"
          ],
          "keywords": [
            "artist",
            "medium-light skin tone",
            "palette",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f3a8"
        },
        "1f469-1f3fd-1f3a8": {
          "name": "woman artist: medium skin tone",
          "shortname": ":woman_artist_tone3:",
          "shortname_alternates": [
            ":woman_artist_medium_skin_tone:"
          ],
          "keywords": [
            "artist",
            "medium skin tone",
            "palette",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f3a8"
        },
        "1f469-1f3fe-1f3a8": {
          "name": "woman artist: medium-dark skin tone",
          "shortname": ":woman_artist_tone4:",
          "shortname_alternates": [
            ":woman_artist_medium_dark_skin_tone:"
          ],
          "keywords": [
            "artist",
            "medium-dark skin tone",
            "palette",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f3a8"
        },
        "1f469-1f3ff-1f3a8": {
          "name": "woman artist: dark skin tone",
          "shortname": ":woman_artist_tone5:",
          "shortname_alternates": [
            ":woman_artist_dark_skin_tone:"
          ],
          "keywords": [
            "artist",
            "dark skin tone",
            "palette",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f3a8"
        },
        "1f468-1f3a8": {
          "name": "man artist",
          "shortname": ":man_artist:",
          "shortname_alternates": [],
          "keywords": [
            "artist",
            "man",
            "palette"
          ],
          "unicode_output": "1f468-200d-1f3a8"
        },
        "1f468-1f3fb-1f3a8": {
          "name": "man artist: light skin tone",
          "shortname": ":man_artist_tone1:",
          "shortname_alternates": [
            ":man_artist_light_skin_tone:"
          ],
          "keywords": [
            "artist",
            "light skin tone",
            "man",
            "palette"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f3a8"
        },
        "1f468-1f3fc-1f3a8": {
          "name": "man artist: medium-light skin tone",
          "shortname": ":man_artist_tone2:",
          "shortname_alternates": [
            ":man_artist_medium_light_skin_tone:"
          ],
          "keywords": [
            "artist",
            "man",
            "medium-light skin tone",
            "palette"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f3a8"
        },
        "1f468-1f3fd-1f3a8": {
          "name": "man artist: medium skin tone",
          "shortname": ":man_artist_tone3:",
          "shortname_alternates": [
            ":man_artist_medium_skin_tone:"
          ],
          "keywords": [
            "artist",
            "man",
            "medium skin tone",
            "palette"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f3a8"
        },
        "1f468-1f3fe-1f3a8": {
          "name": "man artist: medium-dark skin tone",
          "shortname": ":man_artist_tone4:",
          "shortname_alternates": [
            ":man_artist_medium_dark_skin_tone:"
          ],
          "keywords": [
            "artist",
            "man",
            "medium-dark skin tone",
            "palette"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f3a8"
        },
        "1f468-1f3ff-1f3a8": {
          "name": "man artist: dark skin tone",
          "shortname": ":man_artist_tone5:",
          "shortname_alternates": [
            ":man_artist_dark_skin_tone:"
          ],
          "keywords": [
            "artist",
            "dark skin tone",
            "man",
            "palette"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f3a8"
        },
        "1f469-1f692": {
          "name": "woman firefighter",
          "shortname": ":woman_firefighter:",
          "shortname_alternates": [],
          "keywords": [
            "firefighter",
            "firetruck",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f692"
        },
        "1f469-1f3fb-1f692": {
          "name": "woman firefighter: light skin tone",
          "shortname": ":woman_firefighter_tone1:",
          "shortname_alternates": [
            ":woman_firefighter_light_skin_tone:"
          ],
          "keywords": [
            "firefighter",
            "firetruck",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f692"
        },
        "1f469-1f3fc-1f692": {
          "name": "woman firefighter: medium-light skin tone",
          "shortname": ":woman_firefighter_tone2:",
          "shortname_alternates": [
            ":woman_firefighter_medium_light_skin_tone:"
          ],
          "keywords": [
            "firefighter",
            "firetruck",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f692"
        },
        "1f469-1f3fd-1f692": {
          "name": "woman firefighter: medium skin tone",
          "shortname": ":woman_firefighter_tone3:",
          "shortname_alternates": [
            ":woman_firefighter_medium_skin_tone:"
          ],
          "keywords": [
            "firefighter",
            "firetruck",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f692"
        },
        "1f469-1f3fe-1f692": {
          "name": "woman firefighter: medium-dark skin tone",
          "shortname": ":woman_firefighter_tone4:",
          "shortname_alternates": [
            ":woman_firefighter_medium_dark_skin_tone:"
          ],
          "keywords": [
            "firefighter",
            "firetruck",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f692"
        },
        "1f469-1f3ff-1f692": {
          "name": "woman firefighter: dark skin tone",
          "shortname": ":woman_firefighter_tone5:",
          "shortname_alternates": [
            ":woman_firefighter_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "firefighter",
            "firetruck",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f692"
        },
        "1f468-1f692": {
          "name": "man firefighter",
          "shortname": ":man_firefighter:",
          "shortname_alternates": [],
          "keywords": [
            "firefighter",
            "firetruck",
            "man"
          ],
          "unicode_output": "1f468-200d-1f692"
        },
        "1f468-1f3fb-1f692": {
          "name": "man firefighter: light skin tone",
          "shortname": ":man_firefighter_tone1:",
          "shortname_alternates": [
            ":man_firefighter_light_skin_tone:"
          ],
          "keywords": [
            "firefighter",
            "firetruck",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f692"
        },
        "1f468-1f3fc-1f692": {
          "name": "man firefighter: medium-light skin tone",
          "shortname": ":man_firefighter_tone2:",
          "shortname_alternates": [
            ":man_firefighter_medium_light_skin_tone:"
          ],
          "keywords": [
            "firefighter",
            "firetruck",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f692"
        },
        "1f468-1f3fd-1f692": {
          "name": "man firefighter: medium skin tone",
          "shortname": ":man_firefighter_tone3:",
          "shortname_alternates": [
            ":man_firefighter_medium_skin_tone:"
          ],
          "keywords": [
            "firefighter",
            "firetruck",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f692"
        },
        "1f468-1f3fe-1f692": {
          "name": "man firefighter: medium-dark skin tone",
          "shortname": ":man_firefighter_tone4:",
          "shortname_alternates": [
            ":man_firefighter_medium_dark_skin_tone:"
          ],
          "keywords": [
            "firefighter",
            "firetruck",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f692"
        },
        "1f468-1f3ff-1f692": {
          "name": "man firefighter: dark skin tone",
          "shortname": ":man_firefighter_tone5:",
          "shortname_alternates": [
            ":man_firefighter_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "firefighter",
            "firetruck",
            "man"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f692"
        },
        "1f469-2708": {
          "name": "woman pilot",
          "shortname": ":woman_pilot:",
          "shortname_alternates": [],
          "keywords": [
            "pilot",
            "plane",
            "woman"
          ],
          "unicode_output": "1f469-200d-2708-fe0f"
        },
        "1f469-1f3fb-2708": {
          "name": "woman pilot: light skin tone",
          "shortname": ":woman_pilot_tone1:",
          "shortname_alternates": [
            ":woman_pilot_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "pilot",
            "plane",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-2708-fe0f"
        },
        "1f469-1f3fc-2708": {
          "name": "woman pilot: medium-light skin tone",
          "shortname": ":woman_pilot_tone2:",
          "shortname_alternates": [
            ":woman_pilot_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "pilot",
            "plane",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-2708-fe0f"
        },
        "1f469-1f3fd-2708": {
          "name": "woman pilot: medium skin tone",
          "shortname": ":woman_pilot_tone3:",
          "shortname_alternates": [
            ":woman_pilot_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "pilot",
            "plane",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-2708-fe0f"
        },
        "1f469-1f3fe-2708": {
          "name": "woman pilot: medium-dark skin tone",
          "shortname": ":woman_pilot_tone4:",
          "shortname_alternates": [
            ":woman_pilot_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "pilot",
            "plane",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-2708-fe0f"
        },
        "1f469-1f3ff-2708": {
          "name": "woman pilot: dark skin tone",
          "shortname": ":woman_pilot_tone5:",
          "shortname_alternates": [
            ":woman_pilot_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "pilot",
            "plane",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-2708-fe0f"
        },
        "1f468-2708": {
          "name": "man pilot",
          "shortname": ":man_pilot:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "pilot",
            "plane"
          ],
          "unicode_output": "1f468-200d-2708-fe0f"
        },
        "1f468-1f3fb-2708": {
          "name": "man pilot: light skin tone",
          "shortname": ":man_pilot_tone1:",
          "shortname_alternates": [
            ":man_pilot_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "man",
            "pilot",
            "plane"
          ],
          "unicode_output": "1f468-1f3fb-200d-2708-fe0f"
        },
        "1f468-1f3fc-2708": {
          "name": "man pilot: medium-light skin tone",
          "shortname": ":man_pilot_tone2:",
          "shortname_alternates": [
            ":man_pilot_medium_light_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-light skin tone",
            "pilot",
            "plane"
          ],
          "unicode_output": "1f468-1f3fc-200d-2708-fe0f"
        },
        "1f468-1f3fd-2708": {
          "name": "man pilot: medium skin tone",
          "shortname": ":man_pilot_tone3:",
          "shortname_alternates": [
            ":man_pilot_medium_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium skin tone",
            "pilot",
            "plane"
          ],
          "unicode_output": "1f468-1f3fd-200d-2708-fe0f"
        },
        "1f468-1f3fe-2708": {
          "name": "man pilot: medium-dark skin tone",
          "shortname": ":man_pilot_tone4:",
          "shortname_alternates": [
            ":man_pilot_medium_dark_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-dark skin tone",
            "pilot",
            "plane"
          ],
          "unicode_output": "1f468-1f3fe-200d-2708-fe0f"
        },
        "1f468-1f3ff-2708": {
          "name": "man pilot: dark skin tone",
          "shortname": ":man_pilot_tone5:",
          "shortname_alternates": [
            ":man_pilot_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "man",
            "pilot",
            "plane"
          ],
          "unicode_output": "1f468-1f3ff-200d-2708-fe0f"
        },
        "1f469-1f680": {
          "name": "woman astronaut",
          "shortname": ":woman_astronaut:",
          "shortname_alternates": [],
          "keywords": [
            "astronaut",
            "rocket",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f680"
        },
        "1f469-1f3fb-1f680": {
          "name": "woman astronaut: light skin tone",
          "shortname": ":woman_astronaut_tone1:",
          "shortname_alternates": [
            ":woman_astronaut_light_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "light skin tone",
            "rocket",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-1f680"
        },
        "1f469-1f3fc-1f680": {
          "name": "woman astronaut: medium-light skin tone",
          "shortname": ":woman_astronaut_tone2:",
          "shortname_alternates": [
            ":woman_astronaut_medium_light_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "medium-light skin tone",
            "rocket",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-1f680"
        },
        "1f469-1f3fd-1f680": {
          "name": "woman astronaut: medium skin tone",
          "shortname": ":woman_astronaut_tone3:",
          "shortname_alternates": [
            ":woman_astronaut_medium_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "medium skin tone",
            "rocket",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-1f680"
        },
        "1f469-1f3fe-1f680": {
          "name": "woman astronaut: medium-dark skin tone",
          "shortname": ":woman_astronaut_tone4:",
          "shortname_alternates": [
            ":woman_astronaut_medium_dark_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "medium-dark skin tone",
            "rocket",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-1f680"
        },
        "1f469-1f3ff-1f680": {
          "name": "woman astronaut: dark skin tone",
          "shortname": ":woman_astronaut_tone5:",
          "shortname_alternates": [
            ":woman_astronaut_dark_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "dark skin tone",
            "rocket",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-1f680"
        },
        "1f468-1f680": {
          "name": "man astronaut",
          "shortname": ":man_astronaut:",
          "shortname_alternates": [],
          "keywords": [
            "astronaut",
            "man",
            "rocket"
          ],
          "unicode_output": "1f468-200d-1f680"
        },
        "1f468-1f3fb-1f680": {
          "name": "man astronaut: light skin tone",
          "shortname": ":man_astronaut_tone1:",
          "shortname_alternates": [
            ":man_astronaut_light_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "light skin tone",
            "man",
            "rocket"
          ],
          "unicode_output": "1f468-1f3fb-200d-1f680"
        },
        "1f468-1f3fc-1f680": {
          "name": "man astronaut: medium-light skin tone",
          "shortname": ":man_astronaut_tone2:",
          "shortname_alternates": [
            ":man_astronaut_medium_light_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "man",
            "medium-light skin tone",
            "rocket"
          ],
          "unicode_output": "1f468-1f3fc-200d-1f680"
        },
        "1f468-1f3fd-1f680": {
          "name": "man astronaut: medium skin tone",
          "shortname": ":man_astronaut_tone3:",
          "shortname_alternates": [
            ":man_astronaut_medium_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "man",
            "medium skin tone",
            "rocket"
          ],
          "unicode_output": "1f468-1f3fd-200d-1f680"
        },
        "1f468-1f3fe-1f680": {
          "name": "man astronaut: medium-dark skin tone",
          "shortname": ":man_astronaut_tone4:",
          "shortname_alternates": [
            ":man_astronaut_medium_dark_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "man",
            "medium-dark skin tone",
            "rocket"
          ],
          "unicode_output": "1f468-1f3fe-200d-1f680"
        },
        "1f468-1f3ff-1f680": {
          "name": "man astronaut: dark skin tone",
          "shortname": ":man_astronaut_tone5:",
          "shortname_alternates": [
            ":man_astronaut_dark_skin_tone:"
          ],
          "keywords": [
            "astronaut",
            "dark skin tone",
            "man",
            "rocket"
          ],
          "unicode_output": "1f468-1f3ff-200d-1f680"
        },
        "1f469-2696": {
          "name": "woman judge",
          "shortname": ":woman_judge:",
          "shortname_alternates": [],
          "keywords": [
            "judge",
            "scales",
            "woman"
          ],
          "unicode_output": "1f469-200d-2696-fe0f"
        },
        "1f469-1f3fb-2696": {
          "name": "woman judge: light skin tone",
          "shortname": ":woman_judge_tone1:",
          "shortname_alternates": [
            ":woman_judge_light_skin_tone:"
          ],
          "keywords": [
            "judge",
            "light skin tone",
            "scales",
            "woman"
          ],
          "unicode_output": "1f469-1f3fb-200d-2696-fe0f"
        },
        "1f469-1f3fc-2696": {
          "name": "woman judge: medium-light skin tone",
          "shortname": ":woman_judge_tone2:",
          "shortname_alternates": [
            ":woman_judge_medium_light_skin_tone:"
          ],
          "keywords": [
            "judge",
            "medium-light skin tone",
            "scales",
            "woman"
          ],
          "unicode_output": "1f469-1f3fc-200d-2696-fe0f"
        },
        "1f469-1f3fd-2696": {
          "name": "woman judge: medium skin tone",
          "shortname": ":woman_judge_tone3:",
          "shortname_alternates": [
            ":woman_judge_medium_skin_tone:"
          ],
          "keywords": [
            "judge",
            "medium skin tone",
            "scales",
            "woman"
          ],
          "unicode_output": "1f469-1f3fd-200d-2696-fe0f"
        },
        "1f469-1f3fe-2696": {
          "name": "woman judge: medium-dark skin tone",
          "shortname": ":woman_judge_tone4:",
          "shortname_alternates": [
            ":woman_judge_medium_dark_skin_tone:"
          ],
          "keywords": [
            "judge",
            "medium-dark skin tone",
            "scales",
            "woman"
          ],
          "unicode_output": "1f469-1f3fe-200d-2696-fe0f"
        },
        "1f469-1f3ff-2696": {
          "name": "woman judge: dark skin tone",
          "shortname": ":woman_judge_tone5:",
          "shortname_alternates": [
            ":woman_judge_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "judge",
            "scales",
            "woman"
          ],
          "unicode_output": "1f469-1f3ff-200d-2696-fe0f"
        },
        "1f468-2696": {
          "name": "man judge",
          "shortname": ":man_judge:",
          "shortname_alternates": [],
          "keywords": [
            "justice",
            "man",
            "scales"
          ],
          "unicode_output": "1f468-200d-2696-fe0f"
        },
        "1f468-1f3fb-2696": {
          "name": "man judge: light skin tone",
          "shortname": ":man_judge_tone1:",
          "shortname_alternates": [
            ":man_judge_light_skin_tone:"
          ],
          "keywords": [
            "justice",
            "light skin tone",
            "man",
            "scales"
          ],
          "unicode_output": "1f468-1f3fb-200d-2696-fe0f"
        },
        "1f468-1f3fc-2696": {
          "name": "man judge: medium-light skin tone",
          "shortname": ":man_judge_tone2:",
          "shortname_alternates": [
            ":man_judge_medium_light_skin_tone:"
          ],
          "keywords": [
            "justice",
            "man",
            "medium-light skin tone",
            "scales"
          ],
          "unicode_output": "1f468-1f3fc-200d-2696-fe0f"
        },
        "1f468-1f3fd-2696": {
          "name": "man judge: medium skin tone",
          "shortname": ":man_judge_tone3:",
          "shortname_alternates": [
            ":man_judge_medium_skin_tone:"
          ],
          "keywords": [
            "justice",
            "man",
            "medium skin tone",
            "scales"
          ],
          "unicode_output": "1f468-1f3fd-200d-2696-fe0f"
        },
        "1f468-1f3fe-2696": {
          "name": "man judge: medium-dark skin tone",
          "shortname": ":man_judge_tone4:",
          "shortname_alternates": [
            ":man_judge_medium_dark_skin_tone:"
          ],
          "keywords": [
            "justice",
            "man",
            "medium-dark skin tone",
            "scales"
          ],
          "unicode_output": "1f468-1f3fe-200d-2696-fe0f"
        },
        "1f468-1f3ff-2696": {
          "name": "man judge: dark skin tone",
          "shortname": ":man_judge_tone5:",
          "shortname_alternates": [
            ":man_judge_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "justice",
            "man",
            "scales"
          ],
          "unicode_output": "1f468-1f3ff-200d-2696-fe0f"
        },
        "1f470": {
          "name": "bride with veil",
          "shortname": ":bride_with_veil:",
          "shortname_alternates": [],
          "keywords": [
            "bride",
            "veil",
            "wedding"
          ],
          "unicode_output": "1f470"
        },
        "1f470-1f3fb": {
          "name": "bride with veil: light skin tone",
          "shortname": ":bride_with_veil_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "bride",
            "light skin tone",
            "veil",
            "wedding"
          ],
          "unicode_output": "1f470-1f3fb"
        },
        "1f470-1f3fc": {
          "name": "bride with veil: medium-light skin tone",
          "shortname": ":bride_with_veil_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "bride",
            "medium-light skin tone",
            "veil",
            "wedding"
          ],
          "unicode_output": "1f470-1f3fc"
        },
        "1f470-1f3fd": {
          "name": "bride with veil: medium skin tone",
          "shortname": ":bride_with_veil_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "bride",
            "medium skin tone",
            "veil",
            "wedding"
          ],
          "unicode_output": "1f470-1f3fd"
        },
        "1f470-1f3fe": {
          "name": "bride with veil: medium-dark skin tone",
          "shortname": ":bride_with_veil_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "bride",
            "medium-dark skin tone",
            "veil",
            "wedding"
          ],
          "unicode_output": "1f470-1f3fe"
        },
        "1f470-1f3ff": {
          "name": "bride with veil: dark skin tone",
          "shortname": ":bride_with_veil_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "bride",
            "dark skin tone",
            "veil",
            "wedding"
          ],
          "unicode_output": "1f470-1f3ff"
        },
        "1f935": {
          "name": "man in tuxedo",
          "shortname": ":man_in_tuxedo:",
          "shortname_alternates": [],
          "keywords": [
            "groom",
            "man",
            "tuxedo"
          ],
          "unicode_output": "1f935"
        },
        "1f935-1f3fb": {
          "name": "man in tuxedo: light skin tone",
          "shortname": ":man_in_tuxedo_tone1:",
          "shortname_alternates": [
            ":tuxedo_tone1:"
          ],
          "keywords": [
            "groom",
            "light skin tone",
            "man",
            "tuxedo"
          ],
          "unicode_output": "1f935-1f3fb"
        },
        "1f935-1f3fc": {
          "name": "man in tuxedo: medium-light skin tone",
          "shortname": ":man_in_tuxedo_tone2:",
          "shortname_alternates": [
            ":tuxedo_tone2:"
          ],
          "keywords": [
            "groom",
            "man",
            "medium-light skin tone",
            "tuxedo"
          ],
          "unicode_output": "1f935-1f3fc"
        },
        "1f935-1f3fd": {
          "name": "man in tuxedo: medium skin tone",
          "shortname": ":man_in_tuxedo_tone3:",
          "shortname_alternates": [
            ":tuxedo_tone3:"
          ],
          "keywords": [
            "groom",
            "man",
            "medium skin tone",
            "tuxedo"
          ],
          "unicode_output": "1f935-1f3fd"
        },
        "1f935-1f3fe": {
          "name": "man in tuxedo: medium-dark skin tone",
          "shortname": ":man_in_tuxedo_tone4:",
          "shortname_alternates": [
            ":tuxedo_tone4:"
          ],
          "keywords": [
            "groom",
            "man",
            "medium-dark skin tone",
            "tuxedo"
          ],
          "unicode_output": "1f935-1f3fe"
        },
        "1f935-1f3ff": {
          "name": "man in tuxedo: dark skin tone",
          "shortname": ":man_in_tuxedo_tone5:",
          "shortname_alternates": [
            ":tuxedo_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "groom",
            "man",
            "tuxedo"
          ],
          "unicode_output": "1f935-1f3ff"
        },
        "1f478": {
          "name": "princess",
          "shortname": ":princess:",
          "shortname_alternates": [],
          "keywords": [
            "fairy tale",
            "fantasy"
          ],
          "unicode_output": "1f478"
        },
        "1f478-1f3fb": {
          "name": "princess: light skin tone",
          "shortname": ":princess_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "fairy tale",
            "fantasy",
            "light skin tone"
          ],
          "unicode_output": "1f478-1f3fb"
        },
        "1f478-1f3fc": {
          "name": "princess: medium-light skin tone",
          "shortname": ":princess_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "fairy tale",
            "fantasy",
            "medium-light skin tone"
          ],
          "unicode_output": "1f478-1f3fc"
        },
        "1f478-1f3fd": {
          "name": "princess: medium skin tone",
          "shortname": ":princess_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "fairy tale",
            "fantasy",
            "medium skin tone"
          ],
          "unicode_output": "1f478-1f3fd"
        },
        "1f478-1f3fe": {
          "name": "princess: medium-dark skin tone",
          "shortname": ":princess_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "fairy tale",
            "fantasy",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f478-1f3fe"
        },
        "1f478-1f3ff": {
          "name": "princess: dark skin tone",
          "shortname": ":princess_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "fairy tale",
            "fantasy"
          ],
          "unicode_output": "1f478-1f3ff"
        },
        "1f934": {
          "name": "prince",
          "shortname": ":prince:",
          "shortname_alternates": [],
          "keywords": [
            "prince"
          ],
          "unicode_output": "1f934"
        },
        "1f934-1f3fb": {
          "name": "prince: light skin tone",
          "shortname": ":prince_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "light skin tone",
            "prince"
          ],
          "unicode_output": "1f934-1f3fb"
        },
        "1f934-1f3fc": {
          "name": "prince: medium-light skin tone",
          "shortname": ":prince_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "medium-light skin tone",
            "prince"
          ],
          "unicode_output": "1f934-1f3fc"
        },
        "1f934-1f3fd": {
          "name": "prince: medium skin tone",
          "shortname": ":prince_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "medium skin tone",
            "prince"
          ],
          "unicode_output": "1f934-1f3fd"
        },
        "1f934-1f3fe": {
          "name": "prince: medium-dark skin tone",
          "shortname": ":prince_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "medium-dark skin tone",
            "prince"
          ],
          "unicode_output": "1f934-1f3fe"
        },
        "1f934-1f3ff": {
          "name": "prince: dark skin tone",
          "shortname": ":prince_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "prince"
          ],
          "unicode_output": "1f934-1f3ff"
        },
        "1f936": {
          "name": "Mrs. Claus",
          "shortname": ":mrs_claus:",
          "shortname_alternates": [
            ":mother_christmas:"
          ],
          "keywords": [
            "Christmas",
            "Mrs.",
            "celebration",
            "claus",
            "mother"
          ],
          "unicode_output": "1f936"
        },
        "1f936-1f3fb": {
          "name": "Mrs. Claus: light skin tone",
          "shortname": ":mrs_claus_tone1:",
          "shortname_alternates": [
            ":mother_christmas_tone1:"
          ],
          "keywords": [
            "Christmas",
            "Mrs.",
            "celebration",
            "claus",
            "light skin tone",
            "mother"
          ],
          "unicode_output": "1f936-1f3fb"
        },
        "1f936-1f3fd": {
          "name": "Mrs. Claus: medium skin tone",
          "shortname": ":mrs_claus_tone3:",
          "shortname_alternates": [
            ":mother_christmas_tone3:"
          ],
          "keywords": [
            "Christmas",
            "Mrs.",
            "celebration",
            "claus",
            "medium skin tone",
            "mother"
          ],
          "unicode_output": "1f936-1f3fd"
        },
        "1f936-1f3fc": {
          "name": "Mrs. Claus: medium-light skin tone",
          "shortname": ":mrs_claus_tone2:",
          "shortname_alternates": [
            ":mother_christmas_tone2:"
          ],
          "keywords": [
            "Christmas",
            "Mrs.",
            "celebration",
            "claus",
            "medium-light skin tone",
            "mother"
          ],
          "unicode_output": "1f936-1f3fc"
        },
        "1f936-1f3fe": {
          "name": "Mrs. Claus: medium-dark skin tone",
          "shortname": ":mrs_claus_tone4:",
          "shortname_alternates": [
            ":mother_christmas_tone4:"
          ],
          "keywords": [
            "Christmas",
            "Mrs.",
            "celebration",
            "claus",
            "medium-dark skin tone",
            "mother"
          ],
          "unicode_output": "1f936-1f3fe"
        },
        "1f936-1f3ff": {
          "name": "Mrs. Claus: dark skin tone",
          "shortname": ":mrs_claus_tone5:",
          "shortname_alternates": [
            ":mother_christmas_tone5:"
          ],
          "keywords": [
            "Christmas",
            "Mrs.",
            "celebration",
            "claus",
            "dark skin tone",
            "mother"
          ],
          "unicode_output": "1f936-1f3ff"
        },
        "1f385": {
          "name": "Santa Claus",
          "shortname": ":santa:",
          "shortname_alternates": [],
          "keywords": [
            "Christmas",
            "celebration",
            "claus",
            "father",
            "santa"
          ],
          "unicode_output": "1f385"
        },
        "1f385-1f3fb": {
          "name": "Santa Claus: light skin tone",
          "shortname": ":santa_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "Christmas",
            "celebration",
            "claus",
            "father",
            "light skin tone",
            "santa"
          ],
          "unicode_output": "1f385-1f3fb"
        },
        "1f385-1f3fc": {
          "name": "Santa Claus: medium-light skin tone",
          "shortname": ":santa_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "Christmas",
            "celebration",
            "claus",
            "father",
            "medium-light skin tone",
            "santa"
          ],
          "unicode_output": "1f385-1f3fc"
        },
        "1f385-1f3fd": {
          "name": "Santa Claus: medium skin tone",
          "shortname": ":santa_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "Christmas",
            "celebration",
            "claus",
            "father",
            "medium skin tone",
            "santa"
          ],
          "unicode_output": "1f385-1f3fd"
        },
        "1f385-1f3fe": {
          "name": "Santa Claus: medium-dark skin tone",
          "shortname": ":santa_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "Christmas",
            "celebration",
            "claus",
            "father",
            "medium-dark skin tone",
            "santa"
          ],
          "unicode_output": "1f385-1f3fe"
        },
        "1f385-1f3ff": {
          "name": "Santa Claus: dark skin tone",
          "shortname": ":santa_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "Christmas",
            "celebration",
            "claus",
            "dark skin tone",
            "father",
            "santa"
          ],
          "unicode_output": "1f385-1f3ff"
        },
        "1f9b8": {
          "name": "superhero",
          "shortname": ":superhero:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8"
        },
        "1f9b8-1f3fb": {
          "name": "superhero: light skin tone",
          "shortname": ":superhero_tone1:",
          "shortname_alternates": [
            ":superhero_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fb"
        },
        "1f9b8-1f3fc": {
          "name": "superhero: medium-light skin tone",
          "shortname": ":superhero_tone2:",
          "shortname_alternates": [
            ":superhero_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fc"
        },
        "1f9b8-1f3fd": {
          "name": "superhero: medium skin tone",
          "shortname": ":superhero_tone3:",
          "shortname_alternates": [
            ":superhero_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fd"
        },
        "1f9b8-1f3fe": {
          "name": "superhero: medium-dark skin tone",
          "shortname": ":superhero_tone4:",
          "shortname_alternates": [
            ":superhero_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fe"
        },
        "1f9b8-1f3ff": {
          "name": "superhero: dark skin tone",
          "shortname": ":superhero_tone5:",
          "shortname_alternates": [
            ":superhero_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3ff"
        },
        "1f9b8-2640": {
          "name": "woman superhero",
          "shortname": ":woman_superhero:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-200d-2640-fe0f"
        },
        "1f9b8-1f3fb-2640": {
          "name": "woman superhero: light skin tone",
          "shortname": ":woman_superhero_tone1:",
          "shortname_alternates": [
            ":woman_superhero_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fb-200d-2640-fe0f"
        },
        "1f9b8-1f3fc-2640": {
          "name": "woman superhero: medium-light skin tone",
          "shortname": ":woman_superhero_tone2:",
          "shortname_alternates": [
            ":woman_superhero_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fc-200d-2640-fe0f"
        },
        "1f9b8-1f3fd-2640": {
          "name": "woman superhero: medium skin tone",
          "shortname": ":woman_superhero_tone3:",
          "shortname_alternates": [
            ":woman_superhero_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fd-200d-2640-fe0f"
        },
        "1f9b8-1f3fe-2640": {
          "name": "woman superhero: medium-dark skin tone",
          "shortname": ":woman_superhero_tone4:",
          "shortname_alternates": [
            ":woman_superhero_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fe-200d-2640-fe0f"
        },
        "1f9b8-1f3ff-2640": {
          "name": "woman superhero: dark skin tone",
          "shortname": ":woman_superhero_tone5:",
          "shortname_alternates": [
            ":woman_superhero_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3ff-200d-2640-fe0f"
        },
        "1f9b8-2642": {
          "name": "man superhero",
          "shortname": ":man_superhero:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-200d-2642-fe0f"
        },
        "1f9b8-1f3fb-2642": {
          "name": "man superhero: light skin tone",
          "shortname": ":man_superhero_tone1:",
          "shortname_alternates": [
            ":man_superhero_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fb-200d-2642-fe0f"
        },
        "1f9b8-1f3fc-2642": {
          "name": "man superhero: medium-light skin tone",
          "shortname": ":man_superhero_tone2:",
          "shortname_alternates": [
            ":man_superhero_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fc-200d-2642-fe0f"
        },
        "1f9b8-1f3fd-2642": {
          "name": "man superhero: medium skin tone",
          "shortname": ":man_superhero_tone3:",
          "shortname_alternates": [
            ":man_superhero_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fd-200d-2642-fe0f"
        },
        "1f9b8-1f3fe-2642": {
          "name": "man superhero: medium-dark skin tone",
          "shortname": ":man_superhero_tone4:",
          "shortname_alternates": [
            ":man_superhero_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3fe-200d-2642-fe0f"
        },
        "1f9b8-1f3ff-2642": {
          "name": "man superhero: dark skin tone",
          "shortname": ":man_superhero_tone5:",
          "shortname_alternates": [
            ":man_superhero_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b8-1f3ff-200d-2642-fe0f"
        },
        "1f9b9": {
          "name": "supervillain",
          "shortname": ":supervillain:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9"
        },
        "1f9b9-1f3fb": {
          "name": "supervillain: light skin tone",
          "shortname": ":supervillain_tone1:",
          "shortname_alternates": [
            ":supervillain_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fb"
        },
        "1f9b9-1f3fc": {
          "name": "supervillain: medium-light skin tone",
          "shortname": ":supervillain_tone2:",
          "shortname_alternates": [
            ":supervillain_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fc"
        },
        "1f9b9-1f3fd": {
          "name": "supervillain: medium skin tone",
          "shortname": ":supervillain_tone3:",
          "shortname_alternates": [
            ":supervillain_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fd"
        },
        "1f9b9-1f3fe": {
          "name": "supervillain: medium-dark skin tone",
          "shortname": ":supervillain_tone4:",
          "shortname_alternates": [
            ":supervillain_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fe"
        },
        "1f9b9-1f3ff": {
          "name": "supervillain: dark skin tone",
          "shortname": ":supervillain_tone5:",
          "shortname_alternates": [
            ":supervillain_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3ff"
        },
        "1f9b9-1f3fb-2640": {
          "name": "woman supervillain: light skin tone",
          "shortname": ":woman_supervillain_tone1:",
          "shortname_alternates": [
            ":woman_supervillain_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fb-200d-2640-fe0f"
        },
        "1f9b9-2640": {
          "name": "woman supervillain",
          "shortname": ":woman_supervillain:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-200d-2640-fe0f"
        },
        "1f9b9-1f3fc-2640": {
          "name": "woman supervillain: medium-light skin tone",
          "shortname": ":woman_supervillain_tone2:",
          "shortname_alternates": [
            ":woman_supervillain_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fc-200d-2640-fe0f"
        },
        "1f9b9-1f3fd-2640": {
          "name": "woman supervillain: medium skin tone",
          "shortname": ":woman_supervillain_tone3:",
          "shortname_alternates": [
            ":woman_supervillain_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fd-200d-2640-fe0f"
        },
        "1f9b9-1f3fe-2640": {
          "name": "woman supervillain: medium-dark skin tone",
          "shortname": ":woman_supervillain_tone4:",
          "shortname_alternates": [
            ":woman_supervillain_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fe-200d-2640-fe0f"
        },
        "1f9b9-1f3ff-2640": {
          "name": "woman supervillain: dark skin tone",
          "shortname": ":woman_supervillain_tone5:",
          "shortname_alternates": [
            ":woman_supervillain_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3ff-200d-2640-fe0f"
        },
        "1f9b9-2642": {
          "name": "man supervillain",
          "shortname": ":man_supervillain:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-200d-2642-fe0f"
        },
        "1f9b9-1f3fb-2642": {
          "name": "man supervillain: light skin tone",
          "shortname": ":man_supervillain_tone1:",
          "shortname_alternates": [
            ":man_supervillain_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fb-200d-2642-fe0f"
        },
        "1f9b9-1f3fc-2642": {
          "name": "man supervillain: medium-light skin tone",
          "shortname": ":man_supervillain_tone2:",
          "shortname_alternates": [
            ":man_supervillain_medium_light_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fc-200d-2642-fe0f"
        },
        "1f9b9-1f3fd-2642": {
          "name": "man supervillain: medium skin tone",
          "shortname": ":man_supervillain_tone3:",
          "shortname_alternates": [
            ":man_supervillain_medium_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fd-200d-2642-fe0f"
        },
        "1f9b9-1f3fe-2642": {
          "name": "man supervillain: medium-dark skin tone",
          "shortname": ":man_supervillain_tone4:",
          "shortname_alternates": [
            ":man_supervillain_medium_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3fe-200d-2642-fe0f"
        },
        "1f9b9-1f3ff-2642": {
          "name": "man supervillain: dark skin tone",
          "shortname": ":man_supervillain_tone5:",
          "shortname_alternates": [
            ":man_supervillain_dark_skin_tone:"
          ],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b9-1f3ff-200d-2642-fe0f"
        },
        "1f9d9": {
          "name": "mage",
          "shortname": ":mage:",
          "shortname_alternates": [],
          "keywords": [
            "sorcerer",
            "sorceress",
            "witch",
            "wizard"
          ],
          "unicode_output": "1f9d9"
        },
        "1f9d9-1f3fb": {
          "name": "mage: light skin tone",
          "shortname": ":mage_tone1:",
          "shortname_alternates": [
            ":mage_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "sorcerer",
            "sorceress",
            "witch",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3fb"
        },
        "1f9d9-1f3fc": {
          "name": "mage: medium-light skin tone",
          "shortname": ":mage_tone2:",
          "shortname_alternates": [
            ":mage_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "sorcerer",
            "sorceress",
            "witch",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3fc"
        },
        "1f9d9-1f3fd": {
          "name": "mage: medium skin tone",
          "shortname": ":mage_tone3:",
          "shortname_alternates": [
            ":mage_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "sorcerer",
            "sorceress",
            "witch",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3fd"
        },
        "1f9d9-1f3fe": {
          "name": "mage: medium-dark skin tone",
          "shortname": ":mage_tone4:",
          "shortname_alternates": [
            ":mage_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "sorcerer",
            "sorceress",
            "witch",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3fe"
        },
        "1f9d9-1f3ff": {
          "name": "mage: dark skin tone",
          "shortname": ":mage_tone5:",
          "shortname_alternates": [
            ":mage_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "sorcerer",
            "sorceress",
            "witch",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3ff"
        },
        "1f9d9-2640": {
          "name": "woman mage",
          "shortname": ":woman_mage:",
          "shortname_alternates": [],
          "keywords": [
            "sorceress",
            "witch"
          ],
          "unicode_output": "1f9d9-200d-2640-fe0f"
        },
        "1f9d9-1f3fb-2640": {
          "name": "woman mage: light skin tone",
          "shortname": ":woman_mage_tone1:",
          "shortname_alternates": [
            ":woman_mage_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "sorceress",
            "witch"
          ],
          "unicode_output": "1f9d9-1f3fb-200d-2640-fe0f"
        },
        "1f9d9-1f3fc-2640": {
          "name": "woman mage: medium-light skin tone",
          "shortname": ":woman_mage_tone2:",
          "shortname_alternates": [
            ":woman_mage_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "sorceress",
            "witch"
          ],
          "unicode_output": "1f9d9-1f3fc-200d-2640-fe0f"
        },
        "1f9d9-1f3fd-2640": {
          "name": "woman mage: medium skin tone",
          "shortname": ":woman_mage_tone3:",
          "shortname_alternates": [
            ":woman_mage_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "sorceress",
            "witch"
          ],
          "unicode_output": "1f9d9-1f3fd-200d-2640-fe0f"
        },
        "1f9d9-1f3fe-2640": {
          "name": "woman mage: medium-dark skin tone",
          "shortname": ":woman_mage_tone4:",
          "shortname_alternates": [
            ":woman_mage_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "sorceress",
            "witch"
          ],
          "unicode_output": "1f9d9-1f3fe-200d-2640-fe0f"
        },
        "1f9d9-1f3ff-2640": {
          "name": "woman mage: dark skin tone",
          "shortname": ":woman_mage_tone5:",
          "shortname_alternates": [
            ":woman_mage_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "sorceress",
            "witch"
          ],
          "unicode_output": "1f9d9-1f3ff-200d-2640-fe0f"
        },
        "1f9d9-2642": {
          "name": "man mage",
          "shortname": ":man_mage:",
          "shortname_alternates": [],
          "keywords": [
            "sorcerer",
            "wizard"
          ],
          "unicode_output": "1f9d9-200d-2642-fe0f"
        },
        "1f9d9-1f3fb-2642": {
          "name": "man mage: light skin tone",
          "shortname": ":man_mage_tone1:",
          "shortname_alternates": [
            ":man_mage_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "sorcerer",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3fb-200d-2642-fe0f"
        },
        "1f9d9-1f3fc-2642": {
          "name": "man mage: medium-light skin tone",
          "shortname": ":man_mage_tone2:",
          "shortname_alternates": [
            ":man_mage_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "sorcerer",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3fc-200d-2642-fe0f"
        },
        "1f9d9-1f3fd-2642": {
          "name": "man mage: medium skin tone",
          "shortname": ":man_mage_tone3:",
          "shortname_alternates": [
            ":man_mage_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "sorcerer",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3fd-200d-2642-fe0f"
        },
        "1f9d9-1f3fe-2642": {
          "name": "man mage: medium-dark skin tone",
          "shortname": ":man_mage_tone4:",
          "shortname_alternates": [
            ":man_mage_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "sorcerer",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3fe-200d-2642-fe0f"
        },
        "1f9d9-1f3ff-2642": {
          "name": "man mage: dark skin tone",
          "shortname": ":man_mage_tone5:",
          "shortname_alternates": [
            ":man_mage_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "sorcerer",
            "wizard"
          ],
          "unicode_output": "1f9d9-1f3ff-200d-2642-fe0f"
        },
        "1f9dd": {
          "name": "elf",
          "shortname": ":elf:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9dd"
        },
        "1f9dd-1f3fb": {
          "name": "elf: light skin tone",
          "shortname": ":elf_tone1:",
          "shortname_alternates": [
            ":elf_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "magical"
          ],
          "unicode_output": "1f9dd-1f3fb"
        },
        "1f9dd-1f3fc": {
          "name": "elf: medium-light skin tone",
          "shortname": ":elf_tone2:",
          "shortname_alternates": [
            ":elf_medium_light_skin_tone:"
          ],
          "keywords": [
            "magical",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9dd-1f3fc"
        },
        "1f9dd-1f3fd": {
          "name": "elf: medium skin tone",
          "shortname": ":elf_tone3:",
          "shortname_alternates": [
            ":elf_medium_skin_tone:"
          ],
          "keywords": [
            "magical",
            "medium skin tone"
          ],
          "unicode_output": "1f9dd-1f3fd"
        },
        "1f9dd-1f3fe": {
          "name": "elf: medium-dark skin tone",
          "shortname": ":elf_tone4:",
          "shortname_alternates": [
            ":elf_medium_dark_skin_tone:"
          ],
          "keywords": [
            "magical",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9dd-1f3fe"
        },
        "1f9dd-1f3ff": {
          "name": "elf: dark skin tone",
          "shortname": ":elf_tone5:",
          "shortname_alternates": [
            ":elf_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "magical"
          ],
          "unicode_output": "1f9dd-1f3ff"
        },
        "1f9dd-2640": {
          "name": "woman elf",
          "shortname": ":woman_elf:",
          "shortname_alternates": [],
          "keywords": [
            "magical"
          ],
          "unicode_output": "1f9dd-200d-2640-fe0f"
        },
        "1f9dd-1f3fb-2640": {
          "name": "woman elf: light skin tone",
          "shortname": ":woman_elf_tone1:",
          "shortname_alternates": [
            ":woman_elf_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "magical"
          ],
          "unicode_output": "1f9dd-1f3fb-200d-2640-fe0f"
        },
        "1f9dd-1f3fc-2640": {
          "name": "woman elf: medium-light skin tone",
          "shortname": ":woman_elf_tone2:",
          "shortname_alternates": [
            ":woman_elf_medium_light_skin_tone:"
          ],
          "keywords": [
            "magical",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9dd-1f3fc-200d-2640-fe0f"
        },
        "1f9dd-1f3fd-2640": {
          "name": "woman elf: medium skin tone",
          "shortname": ":woman_elf_tone3:",
          "shortname_alternates": [
            ":woman_elf_medium_skin_tone:"
          ],
          "keywords": [
            "magical",
            "medium skin tone"
          ],
          "unicode_output": "1f9dd-1f3fd-200d-2640-fe0f"
        },
        "1f9dd-1f3fe-2640": {
          "name": "woman elf: medium-dark skin tone",
          "shortname": ":woman_elf_tone4:",
          "shortname_alternates": [
            ":woman_elf_medium_dark_skin_tone:"
          ],
          "keywords": [
            "magical",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9dd-1f3fe-200d-2640-fe0f"
        },
        "1f9dd-1f3ff-2640": {
          "name": "woman elf: dark skin tone",
          "shortname": ":woman_elf_tone5:",
          "shortname_alternates": [
            ":woman_elf_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "magical"
          ],
          "unicode_output": "1f9dd-1f3ff-200d-2640-fe0f"
        },
        "1f9dd-2642": {
          "name": "man elf",
          "shortname": ":man_elf:",
          "shortname_alternates": [],
          "keywords": [
            "magical"
          ],
          "unicode_output": "1f9dd-200d-2642-fe0f"
        },
        "1f9dd-1f3fb-2642": {
          "name": "man elf: light skin tone",
          "shortname": ":man_elf_tone1:",
          "shortname_alternates": [
            ":man_elf_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "magical"
          ],
          "unicode_output": "1f9dd-1f3fb-200d-2642-fe0f"
        },
        "1f9dd-1f3fc-2642": {
          "name": "man elf: medium-light skin tone",
          "shortname": ":man_elf_tone2:",
          "shortname_alternates": [
            ":man_elf_medium_light_skin_tone:"
          ],
          "keywords": [
            "magical",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9dd-1f3fc-200d-2642-fe0f"
        },
        "1f9dd-1f3fd-2642": {
          "name": "man elf: medium skin tone",
          "shortname": ":man_elf_tone3:",
          "shortname_alternates": [
            ":man_elf_medium_skin_tone:"
          ],
          "keywords": [
            "magical",
            "medium skin tone"
          ],
          "unicode_output": "1f9dd-1f3fd-200d-2642-fe0f"
        },
        "1f9dd-1f3fe-2642": {
          "name": "man elf: medium-dark skin tone",
          "shortname": ":man_elf_tone4:",
          "shortname_alternates": [
            ":man_elf_medium_dark_skin_tone:"
          ],
          "keywords": [
            "magical",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9dd-1f3fe-200d-2642-fe0f"
        },
        "1f9dd-1f3ff-2642": {
          "name": "man elf: dark skin tone",
          "shortname": ":man_elf_tone5:",
          "shortname_alternates": [
            ":man_elf_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "magical"
          ],
          "unicode_output": "1f9dd-1f3ff-200d-2642-fe0f"
        },
        "1f9db": {
          "name": "vampire",
          "shortname": ":vampire:",
          "shortname_alternates": [],
          "keywords": [
            "Dracula",
            "undead"
          ],
          "unicode_output": "1f9db"
        },
        "1f9db-1f3fb": {
          "name": "vampire: light skin tone",
          "shortname": ":vampire_tone1:",
          "shortname_alternates": [
            ":vampire_light_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "light skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fb"
        },
        "1f9db-1f3fc": {
          "name": "vampire: medium-light skin tone",
          "shortname": ":vampire_tone2:",
          "shortname_alternates": [
            ":vampire_medium_light_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "medium-light skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fc"
        },
        "1f9db-1f3fd": {
          "name": "vampire: medium skin tone",
          "shortname": ":vampire_tone3:",
          "shortname_alternates": [
            ":vampire_medium_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "medium skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fd"
        },
        "1f9db-1f3fe": {
          "name": "vampire: medium-dark skin tone",
          "shortname": ":vampire_tone4:",
          "shortname_alternates": [
            ":vampire_medium_dark_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "medium-dark skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fe"
        },
        "1f9db-1f3ff": {
          "name": "vampire: dark skin tone",
          "shortname": ":vampire_tone5:",
          "shortname_alternates": [
            ":vampire_dark_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "dark skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3ff"
        },
        "1f9db-2640": {
          "name": "woman vampire",
          "shortname": ":woman_vampire:",
          "shortname_alternates": [],
          "keywords": [
            "undead"
          ],
          "unicode_output": "1f9db-200d-2640-fe0f"
        },
        "1f9db-1f3fb-2640": {
          "name": "woman vampire: light skin tone",
          "shortname": ":woman_vampire_tone1:",
          "shortname_alternates": [
            ":woman_vampire_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fb-200d-2640-fe0f"
        },
        "1f9db-1f3fc-2640": {
          "name": "woman vampire: medium-light skin tone",
          "shortname": ":woman_vampire_tone2:",
          "shortname_alternates": [
            ":woman_vampire_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fc-200d-2640-fe0f"
        },
        "1f9db-1f3fd-2640": {
          "name": "woman vampire: medium skin tone",
          "shortname": ":woman_vampire_tone3:",
          "shortname_alternates": [
            ":woman_vampire_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fd-200d-2640-fe0f"
        },
        "1f9db-1f3fe-2640": {
          "name": "woman vampire: medium-dark skin tone",
          "shortname": ":woman_vampire_tone4:",
          "shortname_alternates": [
            ":woman_vampire_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fe-200d-2640-fe0f"
        },
        "1f9db-1f3ff-2640": {
          "name": "woman vampire: dark skin tone",
          "shortname": ":woman_vampire_tone5:",
          "shortname_alternates": [
            ":woman_vampire_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3ff-200d-2640-fe0f"
        },
        "1f9db-2642": {
          "name": "man vampire",
          "shortname": ":man_vampire:",
          "shortname_alternates": [],
          "keywords": [
            "Dracula",
            "undead"
          ],
          "unicode_output": "1f9db-200d-2642-fe0f"
        },
        "1f9db-1f3fb-2642": {
          "name": "man vampire: light skin tone",
          "shortname": ":man_vampire_tone1:",
          "shortname_alternates": [
            ":man_vampire_light_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "light skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fb-200d-2642-fe0f"
        },
        "1f9db-1f3fc-2642": {
          "name": "man vampire: medium-light skin tone",
          "shortname": ":man_vampire_tone2:",
          "shortname_alternates": [
            ":man_vampire_medium_light_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "medium-light skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fc-200d-2642-fe0f"
        },
        "1f9db-1f3fd-2642": {
          "name": "man vampire: medium skin tone",
          "shortname": ":man_vampire_tone3:",
          "shortname_alternates": [
            ":man_vampire_medium_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "medium skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fd-200d-2642-fe0f"
        },
        "1f9db-1f3fe-2642": {
          "name": "man vampire: medium-dark skin tone",
          "shortname": ":man_vampire_tone4:",
          "shortname_alternates": [
            ":man_vampire_medium_dark_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "medium-dark skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3fe-200d-2642-fe0f"
        },
        "1f9db-1f3ff-2642": {
          "name": "man vampire: dark skin tone",
          "shortname": ":man_vampire_tone5:",
          "shortname_alternates": [
            ":man_vampire_dark_skin_tone:"
          ],
          "keywords": [
            "Dracula",
            "dark skin tone",
            "undead"
          ],
          "unicode_output": "1f9db-1f3ff-200d-2642-fe0f"
        },
        "1f9df": {
          "name": "zombie",
          "shortname": ":zombie:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9df"
        },
        "1f9df-2640": {
          "name": "woman zombie",
          "shortname": ":woman_zombie:",
          "shortname_alternates": [],
          "keywords": [
            "undead",
            "walking dead"
          ],
          "unicode_output": "1f9df-200d-2640-fe0f"
        },
        "1f9df-2642": {
          "name": "man zombie",
          "shortname": ":man_zombie:",
          "shortname_alternates": [],
          "keywords": [
            "undead",
            "walking dead"
          ],
          "unicode_output": "1f9df-200d-2642-fe0f"
        },
        "1f9de": {
          "name": "genie",
          "shortname": ":genie:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9de"
        },
        "1f9de-2640": {
          "name": "woman genie",
          "shortname": ":woman_genie:",
          "shortname_alternates": [],
          "keywords": [
            "djinn"
          ],
          "unicode_output": "1f9de-200d-2640-fe0f"
        },
        "1f9de-2642": {
          "name": "man genie",
          "shortname": ":man_genie:",
          "shortname_alternates": [],
          "keywords": [
            "djinn"
          ],
          "unicode_output": "1f9de-200d-2642-fe0f"
        },
        "1f9dc": {
          "name": "merperson",
          "shortname": ":merperson:",
          "shortname_alternates": [],
          "keywords": [
            "mermaid",
            "merman",
            "merwoman"
          ],
          "unicode_output": "1f9dc"
        },
        "1f9dc-1f3fb": {
          "name": "merperson: light skin tone",
          "shortname": ":merperson_tone1:",
          "shortname_alternates": [
            ":merperson_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "mermaid",
            "merman",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3fb"
        },
        "1f9dc-1f3fc": {
          "name": "merperson: medium-light skin tone",
          "shortname": ":merperson_tone2:",
          "shortname_alternates": [
            ":merperson_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "mermaid",
            "merman",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3fc"
        },
        "1f9dc-1f3fd": {
          "name": "merperson: medium skin tone",
          "shortname": ":merperson_tone3:",
          "shortname_alternates": [
            ":merperson_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "mermaid",
            "merman",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3fd"
        },
        "1f9dc-1f3fe": {
          "name": "merperson: medium-dark skin tone",
          "shortname": ":merperson_tone4:",
          "shortname_alternates": [
            ":merperson_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "mermaid",
            "merman",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3fe"
        },
        "1f9dc-1f3ff": {
          "name": "merperson: dark skin tone",
          "shortname": ":merperson_tone5:",
          "shortname_alternates": [
            ":merperson_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "mermaid",
            "merman",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3ff"
        },
        "1f9dc-2640": {
          "name": "mermaid",
          "shortname": ":mermaid:",
          "shortname_alternates": [],
          "keywords": [
            "merwoman"
          ],
          "unicode_output": "1f9dc-200d-2640-fe0f"
        },
        "1f9dc-1f3fb-2640": {
          "name": "mermaid: light skin tone",
          "shortname": ":mermaid_tone1:",
          "shortname_alternates": [
            ":mermaid_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3fb-200d-2640-fe0f"
        },
        "1f9dc-1f3fc-2640": {
          "name": "mermaid: medium-light skin tone",
          "shortname": ":mermaid_tone2:",
          "shortname_alternates": [
            ":mermaid_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3fc-200d-2640-fe0f"
        },
        "1f9dc-1f3fd-2640": {
          "name": "mermaid: medium skin tone",
          "shortname": ":mermaid_tone3:",
          "shortname_alternates": [
            ":mermaid_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3fd-200d-2640-fe0f"
        },
        "1f9dc-1f3fe-2640": {
          "name": "mermaid: medium-dark skin tone",
          "shortname": ":mermaid_tone4:",
          "shortname_alternates": [
            ":mermaid_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3fe-200d-2640-fe0f"
        },
        "1f9dc-1f3ff-2640": {
          "name": "mermaid: dark skin tone",
          "shortname": ":mermaid_tone5:",
          "shortname_alternates": [
            ":mermaid_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "merwoman"
          ],
          "unicode_output": "1f9dc-1f3ff-200d-2640-fe0f"
        },
        "1f9dc-2642": {
          "name": "merman",
          "shortname": ":merman:",
          "shortname_alternates": [],
          "keywords": [
            "Triton"
          ],
          "unicode_output": "1f9dc-200d-2642-fe0f"
        },
        "1f9dc-1f3fb-2642": {
          "name": "merman: light skin tone",
          "shortname": ":merman_tone1:",
          "shortname_alternates": [
            ":merman_light_skin_tone:"
          ],
          "keywords": [
            "Triton",
            "light skin tone"
          ],
          "unicode_output": "1f9dc-1f3fb-200d-2642-fe0f"
        },
        "1f9dc-1f3fc-2642": {
          "name": "merman: medium-light skin tone",
          "shortname": ":merman_tone2:",
          "shortname_alternates": [
            ":merman_medium_light_skin_tone:"
          ],
          "keywords": [
            "Triton",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9dc-1f3fc-200d-2642-fe0f"
        },
        "1f9dc-1f3fd-2642": {
          "name": "merman: medium skin tone",
          "shortname": ":merman_tone3:",
          "shortname_alternates": [
            ":merman_medium_skin_tone:"
          ],
          "keywords": [
            "Triton",
            "medium skin tone"
          ],
          "unicode_output": "1f9dc-1f3fd-200d-2642-fe0f"
        },
        "1f9dc-1f3fe-2642": {
          "name": "merman: medium-dark skin tone",
          "shortname": ":merman_tone4:",
          "shortname_alternates": [
            ":merman_medium_dark_skin_tone:"
          ],
          "keywords": [
            "Triton",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9dc-1f3fe-200d-2642-fe0f"
        },
        "1f9dc-1f3ff-2642": {
          "name": "merman: dark skin tone",
          "shortname": ":merman_tone5:",
          "shortname_alternates": [
            ":merman_dark_skin_tone:"
          ],
          "keywords": [
            "Triton",
            "dark skin tone"
          ],
          "unicode_output": "1f9dc-1f3ff-200d-2642-fe0f"
        },
        "1f9da": {
          "name": "fairy",
          "shortname": ":fairy:",
          "shortname_alternates": [],
          "keywords": [
            "Oberon",
            "Puck",
            "Titania"
          ],
          "unicode_output": "1f9da"
        },
        "1f9da-1f3fb": {
          "name": "fairy: light skin tone",
          "shortname": ":fairy_tone1:",
          "shortname_alternates": [
            ":fairy_light_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "Titania",
            "light skin tone"
          ],
          "unicode_output": "1f9da-1f3fb"
        },
        "1f9da-1f3fc": {
          "name": "fairy: medium-light skin tone",
          "shortname": ":fairy_tone2:",
          "shortname_alternates": [
            ":fairy_medium_light_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "Titania",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9da-1f3fc"
        },
        "1f9da-1f3fd": {
          "name": "fairy: medium skin tone",
          "shortname": ":fairy_tone3:",
          "shortname_alternates": [
            ":fairy_medium_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "Titania",
            "medium skin tone"
          ],
          "unicode_output": "1f9da-1f3fd"
        },
        "1f9da-1f3fe": {
          "name": "fairy: medium-dark skin tone",
          "shortname": ":fairy_tone4:",
          "shortname_alternates": [
            ":fairy_medium_dark_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "Titania",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9da-1f3fe"
        },
        "1f9da-1f3ff": {
          "name": "fairy: dark skin tone",
          "shortname": ":fairy_tone5:",
          "shortname_alternates": [
            ":fairy_dark_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "Titania",
            "dark skin tone"
          ],
          "unicode_output": "1f9da-1f3ff"
        },
        "1f9da-2640": {
          "name": "woman fairy",
          "shortname": ":woman_fairy:",
          "shortname_alternates": [],
          "keywords": [
            "Titania"
          ],
          "unicode_output": "1f9da-200d-2640-fe0f"
        },
        "1f9da-1f3fb-2640": {
          "name": "woman fairy: light skin tone",
          "shortname": ":woman_fairy_tone1:",
          "shortname_alternates": [
            ":woman_fairy_light_skin_tone:"
          ],
          "keywords": [
            "Titania",
            "light skin tone"
          ],
          "unicode_output": "1f9da-1f3fb-200d-2640-fe0f"
        },
        "1f9da-1f3fc-2640": {
          "name": "woman fairy: medium-light skin tone",
          "shortname": ":woman_fairy_tone2:",
          "shortname_alternates": [
            ":woman_fairy_medium_light_skin_tone:"
          ],
          "keywords": [
            "Titania",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9da-1f3fc-200d-2640-fe0f"
        },
        "1f9da-1f3fd-2640": {
          "name": "woman fairy: medium skin tone",
          "shortname": ":woman_fairy_tone3:",
          "shortname_alternates": [
            ":woman_fairy_medium_skin_tone:"
          ],
          "keywords": [
            "Titania",
            "medium skin tone"
          ],
          "unicode_output": "1f9da-1f3fd-200d-2640-fe0f"
        },
        "1f9da-1f3fe-2640": {
          "name": "woman fairy: medium-dark skin tone",
          "shortname": ":woman_fairy_tone4:",
          "shortname_alternates": [
            ":woman_fairy_medium_dark_skin_tone:"
          ],
          "keywords": [
            "Titania",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9da-1f3fe-200d-2640-fe0f"
        },
        "1f9da-1f3ff-2640": {
          "name": "woman fairy: dark skin tone",
          "shortname": ":woman_fairy_tone5:",
          "shortname_alternates": [
            ":woman_fairy_dark_skin_tone:"
          ],
          "keywords": [
            "Titania",
            "dark skin tone"
          ],
          "unicode_output": "1f9da-1f3ff-200d-2640-fe0f"
        },
        "1f9da-2642": {
          "name": "man fairy",
          "shortname": ":man_fairy:",
          "shortname_alternates": [],
          "keywords": [
            "Oberon",
            "Puck"
          ],
          "unicode_output": "1f9da-200d-2642-fe0f"
        },
        "1f9da-1f3fb-2642": {
          "name": "man fairy: light skin tone",
          "shortname": ":man_fairy_tone1:",
          "shortname_alternates": [
            ":man_fairy_light_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "light skin tone"
          ],
          "unicode_output": "1f9da-1f3fb-200d-2642-fe0f"
        },
        "1f9da-1f3fc-2642": {
          "name": "man fairy: medium-light skin tone",
          "shortname": ":man_fairy_tone2:",
          "shortname_alternates": [
            ":man_fairy_medium_light_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "medium-light skin tone"
          ],
          "unicode_output": "1f9da-1f3fc-200d-2642-fe0f"
        },
        "1f9da-1f3fd-2642": {
          "name": "man fairy: medium skin tone",
          "shortname": ":man_fairy_tone3:",
          "shortname_alternates": [
            ":man_fairy_medium_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "medium skin tone"
          ],
          "unicode_output": "1f9da-1f3fd-200d-2642-fe0f"
        },
        "1f9da-1f3fe-2642": {
          "name": "man fairy: medium-dark skin tone",
          "shortname": ":man_fairy_tone4:",
          "shortname_alternates": [
            ":man_fairy_medium_dark_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f9da-1f3fe-200d-2642-fe0f"
        },
        "1f9da-1f3ff-2642": {
          "name": "man fairy: dark skin tone",
          "shortname": ":man_fairy_tone5:",
          "shortname_alternates": [
            ":man_fairy_dark_skin_tone:"
          ],
          "keywords": [
            "Oberon",
            "Puck",
            "dark skin tone"
          ],
          "unicode_output": "1f9da-1f3ff-200d-2642-fe0f"
        },
        "1f47c": {
          "name": "baby angel",
          "shortname": ":angel:",
          "shortname_alternates": [],
          "keywords": [
            "angel",
            "baby",
            "face",
            "fairy tale",
            "fantasy"
          ],
          "unicode_output": "1f47c"
        },
        "1f47c-1f3fb": {
          "name": "baby angel: light skin tone",
          "shortname": ":angel_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "angel",
            "baby",
            "face",
            "fairy tale",
            "fantasy",
            "light skin tone"
          ],
          "unicode_output": "1f47c-1f3fb"
        },
        "1f47c-1f3fc": {
          "name": "baby angel: medium-light skin tone",
          "shortname": ":angel_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "angel",
            "baby",
            "face",
            "fairy tale",
            "fantasy",
            "medium-light skin tone"
          ],
          "unicode_output": "1f47c-1f3fc"
        },
        "1f47c-1f3fd": {
          "name": "baby angel: medium skin tone",
          "shortname": ":angel_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "angel",
            "baby",
            "face",
            "fairy tale",
            "fantasy",
            "medium skin tone"
          ],
          "unicode_output": "1f47c-1f3fd"
        },
        "1f47c-1f3fe": {
          "name": "baby angel: medium-dark skin tone",
          "shortname": ":angel_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "angel",
            "baby",
            "face",
            "fairy tale",
            "fantasy",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f47c-1f3fe"
        },
        "1f47c-1f3ff": {
          "name": "baby angel: dark skin tone",
          "shortname": ":angel_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "angel",
            "baby",
            "dark skin tone",
            "face",
            "fairy tale",
            "fantasy"
          ],
          "unicode_output": "1f47c-1f3ff"
        },
        "1f930": {
          "name": "pregnant woman",
          "shortname": ":pregnant_woman:",
          "shortname_alternates": [
            ":expecting_woman:"
          ],
          "keywords": [
            "pregnant",
            "woman"
          ],
          "unicode_output": "1f930"
        },
        "1f930-1f3fb": {
          "name": "pregnant woman: light skin tone",
          "shortname": ":pregnant_woman_tone1:",
          "shortname_alternates": [
            ":expecting_woman_tone1:"
          ],
          "keywords": [
            "light skin tone",
            "pregnant",
            "woman"
          ],
          "unicode_output": "1f930-1f3fb"
        },
        "1f930-1f3fc": {
          "name": "pregnant woman: medium-light skin tone",
          "shortname": ":pregnant_woman_tone2:",
          "shortname_alternates": [
            ":expecting_woman_tone2:"
          ],
          "keywords": [
            "medium-light skin tone",
            "pregnant",
            "woman"
          ],
          "unicode_output": "1f930-1f3fc"
        },
        "1f930-1f3fd": {
          "name": "pregnant woman: medium skin tone",
          "shortname": ":pregnant_woman_tone3:",
          "shortname_alternates": [
            ":expecting_woman_tone3:"
          ],
          "keywords": [
            "medium skin tone",
            "pregnant",
            "woman"
          ],
          "unicode_output": "1f930-1f3fd"
        },
        "1f930-1f3fe": {
          "name": "pregnant woman: medium-dark skin tone",
          "shortname": ":pregnant_woman_tone4:",
          "shortname_alternates": [
            ":expecting_woman_tone4:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "pregnant",
            "woman"
          ],
          "unicode_output": "1f930-1f3fe"
        },
        "1f930-1f3ff": {
          "name": "pregnant woman: dark skin tone",
          "shortname": ":pregnant_woman_tone5:",
          "shortname_alternates": [
            ":expecting_woman_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "pregnant",
            "woman"
          ],
          "unicode_output": "1f930-1f3ff"
        },
        "1f931": {
          "name": "breast-feeding",
          "shortname": ":breast_feeding:",
          "shortname_alternates": [],
          "keywords": [
            "baby",
            "breast",
            "nursing"
          ],
          "unicode_output": "1f931"
        },
        "1f931-1f3fb": {
          "name": "breast-feeding: light skin tone",
          "shortname": ":breast_feeding_tone1:",
          "shortname_alternates": [
            ":breast_feeding_light_skin_tone:"
          ],
          "keywords": [
            "baby",
            "breast",
            "light skin tone",
            "nursing"
          ],
          "unicode_output": "1f931-1f3fb"
        },
        "1f931-1f3fc": {
          "name": "breast-feeding: medium-light skin tone",
          "shortname": ":breast_feeding_tone2:",
          "shortname_alternates": [
            ":breast_feeding_medium_light_skin_tone:"
          ],
          "keywords": [
            "baby",
            "breast",
            "medium-light skin tone",
            "nursing"
          ],
          "unicode_output": "1f931-1f3fc"
        },
        "1f931-1f3fd": {
          "name": "breast-feeding: medium skin tone",
          "shortname": ":breast_feeding_tone3:",
          "shortname_alternates": [
            ":breast_feeding_medium_skin_tone:"
          ],
          "keywords": [
            "baby",
            "breast",
            "medium skin tone",
            "nursing"
          ],
          "unicode_output": "1f931-1f3fd"
        },
        "1f931-1f3fe": {
          "name": "breast-feeding: medium-dark skin tone",
          "shortname": ":breast_feeding_tone4:",
          "shortname_alternates": [
            ":breast_feeding_medium_dark_skin_tone:"
          ],
          "keywords": [
            "baby",
            "breast",
            "medium-dark skin tone",
            "nursing"
          ],
          "unicode_output": "1f931-1f3fe"
        },
        "1f931-1f3ff": {
          "name": "breast-feeding: dark skin tone",
          "shortname": ":breast_feeding_tone5:",
          "shortname_alternates": [
            ":breast_feeding_dark_skin_tone:"
          ],
          "keywords": [
            "baby",
            "breast",
            "dark skin tone",
            "nursing"
          ],
          "unicode_output": "1f931-1f3ff"
        },
        "1f647": {
          "name": "person bowing",
          "shortname": ":person_bowing:",
          "shortname_alternates": [
            ":bow:"
          ],
          "keywords": [
            "apology",
            "bow",
            "gesture",
            "sorry"
          ],
          "unicode_output": "1f647"
        },
        "1f647-1f3fb": {
          "name": "person bowing: light skin tone",
          "shortname": ":person_bowing_tone1:",
          "shortname_alternates": [
            ":bow_tone1:"
          ],
          "keywords": [
            "apology",
            "bow",
            "gesture",
            "light skin tone",
            "sorry"
          ],
          "unicode_output": "1f647-1f3fb"
        },
        "1f647-1f3fc": {
          "name": "person bowing: medium-light skin tone",
          "shortname": ":person_bowing_tone2:",
          "shortname_alternates": [
            ":bow_tone2:"
          ],
          "keywords": [
            "apology",
            "bow",
            "gesture",
            "medium-light skin tone",
            "sorry"
          ],
          "unicode_output": "1f647-1f3fc"
        },
        "1f647-1f3fd": {
          "name": "person bowing: medium skin tone",
          "shortname": ":person_bowing_tone3:",
          "shortname_alternates": [
            ":bow_tone3:"
          ],
          "keywords": [
            "apology",
            "bow",
            "gesture",
            "medium skin tone",
            "sorry"
          ],
          "unicode_output": "1f647-1f3fd"
        },
        "1f647-1f3fe": {
          "name": "person bowing: medium-dark skin tone",
          "shortname": ":person_bowing_tone4:",
          "shortname_alternates": [
            ":bow_tone4:"
          ],
          "keywords": [
            "apology",
            "bow",
            "gesture",
            "medium-dark skin tone",
            "sorry"
          ],
          "unicode_output": "1f647-1f3fe"
        },
        "1f647-1f3ff": {
          "name": "person bowing: dark skin tone",
          "shortname": ":person_bowing_tone5:",
          "shortname_alternates": [
            ":bow_tone5:"
          ],
          "keywords": [
            "apology",
            "bow",
            "dark skin tone",
            "gesture",
            "sorry"
          ],
          "unicode_output": "1f647-1f3ff"
        },
        "1f647-2640": {
          "name": "woman bowing",
          "shortname": ":woman_bowing:",
          "shortname_alternates": [],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "sorry",
            "woman"
          ],
          "unicode_output": "1f647-200d-2640-fe0f"
        },
        "1f647-1f3fb-2640": {
          "name": "woman bowing: light skin tone",
          "shortname": ":woman_bowing_tone1:",
          "shortname_alternates": [
            ":woman_bowing_light_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "light skin tone",
            "sorry",
            "woman"
          ],
          "unicode_output": "1f647-1f3fb-200d-2640-fe0f"
        },
        "1f647-1f3fc-2640": {
          "name": "woman bowing: medium-light skin tone",
          "shortname": ":woman_bowing_tone2:",
          "shortname_alternates": [
            ":woman_bowing_medium_light_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "medium-light skin tone",
            "sorry",
            "woman"
          ],
          "unicode_output": "1f647-1f3fc-200d-2640-fe0f"
        },
        "1f647-1f3fd-2640": {
          "name": "woman bowing: medium skin tone",
          "shortname": ":woman_bowing_tone3:",
          "shortname_alternates": [
            ":woman_bowing_medium_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "medium skin tone",
            "sorry",
            "woman"
          ],
          "unicode_output": "1f647-1f3fd-200d-2640-fe0f"
        },
        "1f647-1f3fe-2640": {
          "name": "woman bowing: medium-dark skin tone",
          "shortname": ":woman_bowing_tone4:",
          "shortname_alternates": [
            ":woman_bowing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "medium-dark skin tone",
            "sorry",
            "woman"
          ],
          "unicode_output": "1f647-1f3fe-200d-2640-fe0f"
        },
        "1f647-1f3ff-2640": {
          "name": "woman bowing: dark skin tone",
          "shortname": ":woman_bowing_tone5:",
          "shortname_alternates": [
            ":woman_bowing_dark_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "dark skin tone",
            "favor",
            "gesture",
            "sorry",
            "woman"
          ],
          "unicode_output": "1f647-1f3ff-200d-2640-fe0f"
        },
        "1f647-2642": {
          "name": "man bowing",
          "shortname": ":man_bowing:",
          "shortname_alternates": [],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "man",
            "sorry"
          ],
          "unicode_output": "1f647-200d-2642-fe0f"
        },
        "1f647-1f3fb-2642": {
          "name": "man bowing: light skin tone",
          "shortname": ":man_bowing_tone1:",
          "shortname_alternates": [
            ":man_bowing_light_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "light skin tone",
            "man",
            "sorry"
          ],
          "unicode_output": "1f647-1f3fb-200d-2642-fe0f"
        },
        "1f647-1f3fc-2642": {
          "name": "man bowing: medium-light skin tone",
          "shortname": ":man_bowing_tone2:",
          "shortname_alternates": [
            ":man_bowing_medium_light_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "man",
            "medium-light skin tone",
            "sorry"
          ],
          "unicode_output": "1f647-1f3fc-200d-2642-fe0f"
        },
        "1f647-1f3fd-2642": {
          "name": "man bowing: medium skin tone",
          "shortname": ":man_bowing_tone3:",
          "shortname_alternates": [
            ":man_bowing_medium_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "man",
            "medium skin tone",
            "sorry"
          ],
          "unicode_output": "1f647-1f3fd-200d-2642-fe0f"
        },
        "1f647-1f3fe-2642": {
          "name": "man bowing: medium-dark skin tone",
          "shortname": ":man_bowing_tone4:",
          "shortname_alternates": [
            ":man_bowing_medium_dark_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "favor",
            "gesture",
            "man",
            "medium-dark skin tone",
            "sorry"
          ],
          "unicode_output": "1f647-1f3fe-200d-2642-fe0f"
        },
        "1f647-1f3ff-2642": {
          "name": "man bowing: dark skin tone",
          "shortname": ":man_bowing_tone5:",
          "shortname_alternates": [
            ":man_bowing_dark_skin_tone:"
          ],
          "keywords": [
            "apology",
            "bowing",
            "dark skin tone",
            "favor",
            "gesture",
            "man",
            "sorry"
          ],
          "unicode_output": "1f647-1f3ff-200d-2642-fe0f"
        },
        "1f481": {
          "name": "person tipping hand",
          "shortname": ":person_tipping_hand:",
          "shortname_alternates": [
            ":information_desk_person:"
          ],
          "keywords": [
            "hand",
            "help",
            "information",
            "sassy",
            "tipping"
          ],
          "unicode_output": "1f481"
        },
        "1f481-1f3fb": {
          "name": "person tipping hand: light skin tone",
          "shortname": ":person_tipping_hand_tone1:",
          "shortname_alternates": [
            ":information_desk_person_tone1:"
          ],
          "keywords": [
            "hand",
            "help",
            "information",
            "light skin tone",
            "sassy",
            "tipping"
          ],
          "unicode_output": "1f481-1f3fb"
        },
        "1f481-1f3fc": {
          "name": "person tipping hand: medium-light skin tone",
          "shortname": ":person_tipping_hand_tone2:",
          "shortname_alternates": [
            ":information_desk_person_tone2:"
          ],
          "keywords": [
            "hand",
            "help",
            "information",
            "medium-light skin tone",
            "sassy",
            "tipping"
          ],
          "unicode_output": "1f481-1f3fc"
        },
        "1f481-1f3fd": {
          "name": "person tipping hand: medium skin tone",
          "shortname": ":person_tipping_hand_tone3:",
          "shortname_alternates": [
            ":information_desk_person_tone3:"
          ],
          "keywords": [
            "hand",
            "help",
            "information",
            "medium skin tone",
            "sassy",
            "tipping"
          ],
          "unicode_output": "1f481-1f3fd"
        },
        "1f481-1f3fe": {
          "name": "person tipping hand: medium-dark skin tone",
          "shortname": ":person_tipping_hand_tone4:",
          "shortname_alternates": [
            ":information_desk_person_tone4:"
          ],
          "keywords": [
            "hand",
            "help",
            "information",
            "medium-dark skin tone",
            "sassy",
            "tipping"
          ],
          "unicode_output": "1f481-1f3fe"
        },
        "1f481-1f3ff": {
          "name": "person tipping hand: dark skin tone",
          "shortname": ":person_tipping_hand_tone5:",
          "shortname_alternates": [
            ":information_desk_person_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "hand",
            "help",
            "information",
            "sassy",
            "tipping"
          ],
          "unicode_output": "1f481-1f3ff"
        },
        "1f481-2640": {
          "name": "woman tipping hand",
          "shortname": ":woman_tipping_hand:",
          "shortname_alternates": [],
          "keywords": [
            "sassy",
            "tipping hand",
            "woman"
          ],
          "unicode_output": "1f481-200d-2640-fe0f"
        },
        "1f481-1f3fb-2640": {
          "name": "woman tipping hand: light skin tone",
          "shortname": ":woman_tipping_hand_tone1:",
          "shortname_alternates": [
            ":woman_tipping_hand_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "sassy",
            "tipping hand",
            "woman"
          ],
          "unicode_output": "1f481-1f3fb-200d-2640-fe0f"
        },
        "1f481-1f3fc-2640": {
          "name": "woman tipping hand: medium-light skin tone",
          "shortname": ":woman_tipping_hand_tone2:",
          "shortname_alternates": [
            ":woman_tipping_hand_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "sassy",
            "tipping hand",
            "woman"
          ],
          "unicode_output": "1f481-1f3fc-200d-2640-fe0f"
        },
        "1f481-1f3fd-2640": {
          "name": "woman tipping hand: medium skin tone",
          "shortname": ":woman_tipping_hand_tone3:",
          "shortname_alternates": [
            ":woman_tipping_hand_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "sassy",
            "tipping hand",
            "woman"
          ],
          "unicode_output": "1f481-1f3fd-200d-2640-fe0f"
        },
        "1f481-1f3fe-2640": {
          "name": "woman tipping hand: medium-dark skin tone",
          "shortname": ":woman_tipping_hand_tone4:",
          "shortname_alternates": [
            ":woman_tipping_hand_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "sassy",
            "tipping hand",
            "woman"
          ],
          "unicode_output": "1f481-1f3fe-200d-2640-fe0f"
        },
        "1f481-1f3ff-2640": {
          "name": "woman tipping hand: dark skin tone",
          "shortname": ":woman_tipping_hand_tone5:",
          "shortname_alternates": [
            ":woman_tipping_hand_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "sassy",
            "tipping hand",
            "woman"
          ],
          "unicode_output": "1f481-1f3ff-200d-2640-fe0f"
        },
        "1f481-2642": {
          "name": "man tipping hand",
          "shortname": ":man_tipping_hand:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "sassy",
            "tipping hand"
          ],
          "unicode_output": "1f481-200d-2642-fe0f"
        },
        "1f481-1f3fb-2642": {
          "name": "man tipping hand: light skin tone",
          "shortname": ":man_tipping_hand_tone1:",
          "shortname_alternates": [
            ":man_tipping_hand_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "man",
            "sassy",
            "tipping hand"
          ],
          "unicode_output": "1f481-1f3fb-200d-2642-fe0f"
        },
        "1f481-1f3fc-2642": {
          "name": "man tipping hand: medium-light skin tone",
          "shortname": ":man_tipping_hand_tone2:",
          "shortname_alternates": [
            ":man_tipping_hand_medium_light_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-light skin tone",
            "sassy",
            "tipping hand"
          ],
          "unicode_output": "1f481-1f3fc-200d-2642-fe0f"
        },
        "1f481-1f3fd-2642": {
          "name": "man tipping hand: medium skin tone",
          "shortname": ":man_tipping_hand_tone3:",
          "shortname_alternates": [
            ":man_tipping_hand_medium_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium skin tone",
            "sassy",
            "tipping hand"
          ],
          "unicode_output": "1f481-1f3fd-200d-2642-fe0f"
        },
        "1f481-1f3fe-2642": {
          "name": "man tipping hand: medium-dark skin tone",
          "shortname": ":man_tipping_hand_tone4:",
          "shortname_alternates": [
            ":man_tipping_hand_medium_dark_skin_tone:"
          ],
          "keywords": [
            "man",
            "medium-dark skin tone",
            "sassy",
            "tipping hand"
          ],
          "unicode_output": "1f481-1f3fe-200d-2642-fe0f"
        },
        "1f481-1f3ff-2642": {
          "name": "man tipping hand: dark skin tone",
          "shortname": ":man_tipping_hand_tone5:",
          "shortname_alternates": [
            ":man_tipping_hand_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "man",
            "sassy",
            "tipping hand"
          ],
          "unicode_output": "1f481-1f3ff-200d-2642-fe0f"
        },
        "1f645": {
          "name": "person gesturing NO",
          "shortname": ":person_gesturing_no:",
          "shortname_alternates": [
            ":no_good:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "no",
            "not",
            "prohibited"
          ],
          "unicode_output": "1f645"
        },
        "1f645-1f3fb": {
          "name": "person gesturing NO: light skin tone",
          "shortname": ":person_gesturing_no_tone1:",
          "shortname_alternates": [
            ":no_good_tone1:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "light skin tone",
            "no",
            "not",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3fb"
        },
        "1f645-1f3fc": {
          "name": "person gesturing NO: medium-light skin tone",
          "shortname": ":person_gesturing_no_tone2:",
          "shortname_alternates": [
            ":no_good_tone2:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "medium-light skin tone",
            "no",
            "not",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3fc"
        },
        "1f645-1f3fd": {
          "name": "person gesturing NO: medium skin tone",
          "shortname": ":person_gesturing_no_tone3:",
          "shortname_alternates": [
            ":no_good_tone3:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "medium skin tone",
            "no",
            "not",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3fd"
        },
        "1f645-1f3fe": {
          "name": "person gesturing NO: medium-dark skin tone",
          "shortname": ":person_gesturing_no_tone4:",
          "shortname_alternates": [
            ":no_good_tone4:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "medium-dark skin tone",
            "no",
            "not",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3fe"
        },
        "1f645-1f3ff": {
          "name": "person gesturing NO: dark skin tone",
          "shortname": ":person_gesturing_no_tone5:",
          "shortname_alternates": [
            ":no_good_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "forbidden",
            "gesture",
            "hand",
            "no",
            "not",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3ff"
        },
        "1f645-2640": {
          "name": "woman gesturing NO",
          "shortname": ":woman_gesturing_no:",
          "shortname_alternates": [],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "no",
            "prohibited",
            "woman"
          ],
          "unicode_output": "1f645-200d-2640-fe0f"
        },
        "1f645-1f3fb-2640": {
          "name": "woman gesturing NO: light skin tone",
          "shortname": ":woman_gesturing_no_tone1:",
          "shortname_alternates": [
            ":woman_gesturing_no_light_skin_tone:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "light skin tone",
            "no",
            "prohibited",
            "woman"
          ],
          "unicode_output": "1f645-1f3fb-200d-2640-fe0f"
        },
        "1f645-1f3fc-2640": {
          "name": "woman gesturing NO: medium-light skin tone",
          "shortname": ":woman_gesturing_no_tone2:",
          "shortname_alternates": [
            ":woman_gesturing_no_medium_light_skin_tone:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "medium-light skin tone",
            "no",
            "prohibited",
            "woman"
          ],
          "unicode_output": "1f645-1f3fc-200d-2640-fe0f"
        },
        "1f645-1f3fd-2640": {
          "name": "woman gesturing NO: medium skin tone",
          "shortname": ":woman_gesturing_no_tone3:",
          "shortname_alternates": [
            ":woman_gesturing_no_medium_skin_tone:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "medium skin tone",
            "no",
            "prohibited",
            "woman"
          ],
          "unicode_output": "1f645-1f3fd-200d-2640-fe0f"
        },
        "1f645-1f3fe-2640": {
          "name": "woman gesturing NO: medium-dark skin tone",
          "shortname": ":woman_gesturing_no_tone4:",
          "shortname_alternates": [
            ":woman_gesturing_no_medium_dark_skin_tone:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "medium-dark skin tone",
            "no",
            "prohibited",
            "woman"
          ],
          "unicode_output": "1f645-1f3fe-200d-2640-fe0f"
        },
        "1f645-1f3ff-2640": {
          "name": "woman gesturing NO: dark skin tone",
          "shortname": ":woman_gesturing_no_tone5:",
          "shortname_alternates": [
            ":woman_gesturing_no_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "forbidden",
            "gesture",
            "hand",
            "no",
            "prohibited",
            "woman"
          ],
          "unicode_output": "1f645-1f3ff-200d-2640-fe0f"
        },
        "1f645-2642": {
          "name": "man gesturing NO",
          "shortname": ":man_gesturing_no:",
          "shortname_alternates": [],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "man",
            "no",
            "prohibited"
          ],
          "unicode_output": "1f645-200d-2642-fe0f"
        },
        "1f645-1f3fb-2642": {
          "name": "man gesturing NO: light skin tone",
          "shortname": ":man_gesturing_no_tone1:",
          "shortname_alternates": [
            ":man_gesturing_no_light_skin_tone:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "light skin tone",
            "man",
            "no",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3fb-200d-2642-fe0f"
        },
        "1f645-1f3fc-2642": {
          "name": "man gesturing NO: medium-light skin tone",
          "shortname": ":man_gesturing_no_tone2:",
          "shortname_alternates": [
            ":man_gesturing_no_medium_light_skin_tone:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "man",
            "medium-light skin tone",
            "no",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3fc-200d-2642-fe0f"
        },
        "1f645-1f3fd-2642": {
          "name": "man gesturing NO: medium skin tone",
          "shortname": ":man_gesturing_no_tone3:",
          "shortname_alternates": [
            ":man_gesturing_no_medium_skin_tone:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "man",
            "medium skin tone",
            "no",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3fd-200d-2642-fe0f"
        },
        "1f645-1f3fe-2642": {
          "name": "man gesturing NO: medium-dark skin tone",
          "shortname": ":man_gesturing_no_tone4:",
          "shortname_alternates": [
            ":man_gesturing_no_medium_dark_skin_tone:"
          ],
          "keywords": [
            "forbidden",
            "gesture",
            "hand",
            "man",
            "medium-dark skin tone",
            "no",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3fe-200d-2642-fe0f"
        },
        "1f645-1f3ff-2642": {
          "name": "man gesturing NO: dark skin tone",
          "shortname": ":man_gesturing_no_tone5:",
          "shortname_alternates": [
            ":man_gesturing_no_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "forbidden",
            "gesture",
            "hand",
            "man",
            "no",
            "prohibited"
          ],
          "unicode_output": "1f645-1f3ff-200d-2642-fe0f"
        },
        "1f646": {
          "name": "person gesturing OK",
          "shortname": ":person_gesturing_ok:",
          "shortname_alternates": [
            ":ok_woman:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand"
          ],
          "unicode_output": "1f646"
        },
        "1f646-1f3fb": {
          "name": "person gesturing OK: light skin tone",
          "shortname": ":person_gesturing_ok_tone1:",
          "shortname_alternates": [
            ":ok_woman_tone1:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "light skin tone"
          ],
          "unicode_output": "1f646-1f3fb"
        },
        "1f646-1f3fc": {
          "name": "person gesturing OK: medium-light skin tone",
          "shortname": ":person_gesturing_ok_tone2:",
          "shortname_alternates": [
            ":ok_woman_tone2:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "medium-light skin tone"
          ],
          "unicode_output": "1f646-1f3fc"
        },
        "1f646-1f3fd": {
          "name": "person gesturing OK: medium skin tone",
          "shortname": ":person_gesturing_ok_tone3:",
          "shortname_alternates": [
            ":ok_woman_tone3:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "medium skin tone"
          ],
          "unicode_output": "1f646-1f3fd"
        },
        "1f646-1f3fe": {
          "name": "person gesturing OK: medium-dark skin tone",
          "shortname": ":person_gesturing_ok_tone4:",
          "shortname_alternates": [
            ":ok_woman_tone4:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f646-1f3fe"
        },
        "1f646-1f3ff": {
          "name": "person gesturing OK: dark skin tone",
          "shortname": ":person_gesturing_ok_tone5:",
          "shortname_alternates": [
            ":ok_woman_tone5:"
          ],
          "keywords": [
            "OK",
            "dark skin tone",
            "gesture",
            "hand"
          ],
          "unicode_output": "1f646-1f3ff"
        },
        "1f646-2640": {
          "name": "woman gesturing OK",
          "shortname": ":woman_gesturing_ok:",
          "shortname_alternates": [],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "woman"
          ],
          "unicode_output": "1f646-200d-2640-fe0f"
        },
        "1f646-1f3fb-2640": {
          "name": "woman gesturing OK: light skin tone",
          "shortname": ":woman_gesturing_ok_tone1:",
          "shortname_alternates": [
            ":woman_gesturing_ok_light_skin_tone:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f646-1f3fb-200d-2640-fe0f"
        },
        "1f646-1f3fc-2640": {
          "name": "woman gesturing OK: medium-light skin tone",
          "shortname": ":woman_gesturing_ok_tone2:",
          "shortname_alternates": [
            ":woman_gesturing_ok_medium_light_skin_tone:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f646-1f3fc-200d-2640-fe0f"
        },
        "1f646-1f3fd-2640": {
          "name": "woman gesturing OK: medium skin tone",
          "shortname": ":woman_gesturing_ok_tone3:",
          "shortname_alternates": [
            ":woman_gesturing_ok_medium_skin_tone:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f646-1f3fd-200d-2640-fe0f"
        },
        "1f646-1f3fe-2640": {
          "name": "woman gesturing OK: medium-dark skin tone",
          "shortname": ":woman_gesturing_ok_tone4:",
          "shortname_alternates": [
            ":woman_gesturing_ok_medium_dark_skin_tone:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f646-1f3fe-200d-2640-fe0f"
        },
        "1f646-1f3ff-2640": {
          "name": "woman gesturing OK: dark skin tone",
          "shortname": ":woman_gesturing_ok_tone5:",
          "shortname_alternates": [
            ":woman_gesturing_ok_dark_skin_tone:"
          ],
          "keywords": [
            "OK",
            "dark skin tone",
            "gesture",
            "hand",
            "woman"
          ],
          "unicode_output": "1f646-1f3ff-200d-2640-fe0f"
        },
        "1f646-2642": {
          "name": "man gesturing OK",
          "shortname": ":man_gesturing_ok:",
          "shortname_alternates": [],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "man"
          ],
          "unicode_output": "1f646-200d-2642-fe0f"
        },
        "1f646-1f3fb-2642": {
          "name": "man gesturing OK: light skin tone",
          "shortname": ":man_gesturing_ok_tone1:",
          "shortname_alternates": [
            ":man_gesturing_ok_light_skin_tone:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f646-1f3fb-200d-2642-fe0f"
        },
        "1f646-1f3fc-2642": {
          "name": "man gesturing OK: medium-light skin tone",
          "shortname": ":man_gesturing_ok_tone2:",
          "shortname_alternates": [
            ":man_gesturing_ok_medium_light_skin_tone:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f646-1f3fc-200d-2642-fe0f"
        },
        "1f646-1f3fd-2642": {
          "name": "man gesturing OK: medium skin tone",
          "shortname": ":man_gesturing_ok_tone3:",
          "shortname_alternates": [
            ":man_gesturing_ok_medium_skin_tone:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f646-1f3fd-200d-2642-fe0f"
        },
        "1f646-1f3fe-2642": {
          "name": "man gesturing OK: medium-dark skin tone",
          "shortname": ":man_gesturing_ok_tone4:",
          "shortname_alternates": [
            ":man_gesturing_ok_medium_dark_skin_tone:"
          ],
          "keywords": [
            "OK",
            "gesture",
            "hand",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f646-1f3fe-200d-2642-fe0f"
        },
        "1f646-1f3ff-2642": {
          "name": "man gesturing OK: dark skin tone",
          "shortname": ":man_gesturing_ok_tone5:",
          "shortname_alternates": [
            ":man_gesturing_ok_dark_skin_tone:"
          ],
          "keywords": [
            "OK",
            "dark skin tone",
            "gesture",
            "hand",
            "man"
          ],
          "unicode_output": "1f646-1f3ff-200d-2642-fe0f"
        },
        "1f64b": {
          "name": "person raising hand",
          "shortname": ":person_raising_hand:",
          "shortname_alternates": [
            ":raising_hand:"
          ],
          "keywords": [
            "gesture",
            "hand",
            "happy",
            "raised"
          ],
          "unicode_output": "1f64b"
        },
        "1f64b-1f3fb": {
          "name": "person raising hand: light skin tone",
          "shortname": ":person_raising_hand_tone1:",
          "shortname_alternates": [
            ":raising_hand_tone1:"
          ],
          "keywords": [
            "gesture",
            "hand",
            "happy",
            "light skin tone",
            "raised"
          ],
          "unicode_output": "1f64b-1f3fb"
        },
        "1f64b-1f3fc": {
          "name": "person raising hand: medium-light skin tone",
          "shortname": ":person_raising_hand_tone2:",
          "shortname_alternates": [
            ":raising_hand_tone2:"
          ],
          "keywords": [
            "gesture",
            "hand",
            "happy",
            "medium-light skin tone",
            "raised"
          ],
          "unicode_output": "1f64b-1f3fc"
        },
        "1f64b-1f3fd": {
          "name": "person raising hand: medium skin tone",
          "shortname": ":person_raising_hand_tone3:",
          "shortname_alternates": [
            ":raising_hand_tone3:"
          ],
          "keywords": [
            "gesture",
            "hand",
            "happy",
            "medium skin tone",
            "raised"
          ],
          "unicode_output": "1f64b-1f3fd"
        },
        "1f64b-1f3fe": {
          "name": "person raising hand: medium-dark skin tone",
          "shortname": ":person_raising_hand_tone4:",
          "shortname_alternates": [
            ":raising_hand_tone4:"
          ],
          "keywords": [
            "gesture",
            "hand",
            "happy",
            "medium-dark skin tone",
            "raised"
          ],
          "unicode_output": "1f64b-1f3fe"
        },
        "1f64b-1f3ff": {
          "name": "person raising hand: dark skin tone",
          "shortname": ":person_raising_hand_tone5:",
          "shortname_alternates": [
            ":raising_hand_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "gesture",
            "hand",
            "happy",
            "raised"
          ],
          "unicode_output": "1f64b-1f3ff"
        },
        "1f64b-2640": {
          "name": "woman raising hand",
          "shortname": ":woman_raising_hand:",
          "shortname_alternates": [],
          "keywords": [
            "gesture",
            "raising hand",
            "woman"
          ],
          "unicode_output": "1f64b-200d-2640-fe0f"
        },
        "1f64b-1f3fb-2640": {
          "name": "woman raising hand: light skin tone",
          "shortname": ":woman_raising_hand_tone1:",
          "shortname_alternates": [
            ":woman_raising_hand_light_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "light skin tone",
            "raising hand",
            "woman"
          ],
          "unicode_output": "1f64b-1f3fb-200d-2640-fe0f"
        },
        "1f64b-1f3fc-2640": {
          "name": "woman raising hand: medium-light skin tone",
          "shortname": ":woman_raising_hand_tone2:",
          "shortname_alternates": [
            ":woman_raising_hand_medium_light_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "medium-light skin tone",
            "raising hand",
            "woman"
          ],
          "unicode_output": "1f64b-1f3fc-200d-2640-fe0f"
        },
        "1f64b-1f3fd-2640": {
          "name": "woman raising hand: medium skin tone",
          "shortname": ":woman_raising_hand_tone3:",
          "shortname_alternates": [
            ":woman_raising_hand_medium_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "medium skin tone",
            "raising hand",
            "woman"
          ],
          "unicode_output": "1f64b-1f3fd-200d-2640-fe0f"
        },
        "1f64b-1f3fe-2640": {
          "name": "woman raising hand: medium-dark skin tone",
          "shortname": ":woman_raising_hand_tone4:",
          "shortname_alternates": [
            ":woman_raising_hand_medium_dark_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "medium-dark skin tone",
            "raising hand",
            "woman"
          ],
          "unicode_output": "1f64b-1f3fe-200d-2640-fe0f"
        },
        "1f64b-1f3ff-2640": {
          "name": "woman raising hand: dark skin tone",
          "shortname": ":woman_raising_hand_tone5:",
          "shortname_alternates": [
            ":woman_raising_hand_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "gesture",
            "raising hand",
            "woman"
          ],
          "unicode_output": "1f64b-1f3ff-200d-2640-fe0f"
        },
        "1f64b-2642": {
          "name": "man raising hand",
          "shortname": ":man_raising_hand:",
          "shortname_alternates": [],
          "keywords": [
            "gesture",
            "man",
            "raising hand"
          ],
          "unicode_output": "1f64b-200d-2642-fe0f"
        },
        "1f64b-1f3fb-2642": {
          "name": "man raising hand: light skin tone",
          "shortname": ":man_raising_hand_tone1:",
          "shortname_alternates": [
            ":man_raising_hand_light_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "light skin tone",
            "man",
            "raising hand"
          ],
          "unicode_output": "1f64b-1f3fb-200d-2642-fe0f"
        },
        "1f64b-1f3fc-2642": {
          "name": "man raising hand: medium-light skin tone",
          "shortname": ":man_raising_hand_tone2:",
          "shortname_alternates": [
            ":man_raising_hand_medium_light_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "man",
            "medium-light skin tone",
            "raising hand"
          ],
          "unicode_output": "1f64b-1f3fc-200d-2642-fe0f"
        },
        "1f64b-1f3fd-2642": {
          "name": "man raising hand: medium skin tone",
          "shortname": ":man_raising_hand_tone3:",
          "shortname_alternates": [
            ":man_raising_hand_medium_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "man",
            "medium skin tone",
            "raising hand"
          ],
          "unicode_output": "1f64b-1f3fd-200d-2642-fe0f"
        },
        "1f64b-1f3fe-2642": {
          "name": "man raising hand: medium-dark skin tone",
          "shortname": ":man_raising_hand_tone4:",
          "shortname_alternates": [
            ":man_raising_hand_medium_dark_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "man",
            "medium-dark skin tone",
            "raising hand"
          ],
          "unicode_output": "1f64b-1f3fe-200d-2642-fe0f"
        },
        "1f64b-1f3ff-2642": {
          "name": "man raising hand: dark skin tone",
          "shortname": ":man_raising_hand_tone5:",
          "shortname_alternates": [
            ":man_raising_hand_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "gesture",
            "man",
            "raising hand"
          ],
          "unicode_output": "1f64b-1f3ff-200d-2642-fe0f"
        },
        "1f926": {
          "name": "person facepalming",
          "shortname": ":person_facepalming:",
          "shortname_alternates": [
            ":face_palm:",
            ":facepalm:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "face",
            "palm"
          ],
          "unicode_output": "1f926"
        },
        "1f926-1f3fb": {
          "name": "person facepalming: light skin tone",
          "shortname": ":person_facepalming_tone1:",
          "shortname_alternates": [
            ":face_palm_tone1:",
            ":facepalm_tone1:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "face",
            "light skin tone",
            "palm"
          ],
          "unicode_output": "1f926-1f3fb"
        },
        "1f926-1f3fc": {
          "name": "person facepalming: medium-light skin tone",
          "shortname": ":person_facepalming_tone2:",
          "shortname_alternates": [
            ":face_palm_tone2:",
            ":facepalm_tone2:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "face",
            "medium-light skin tone",
            "palm"
          ],
          "unicode_output": "1f926-1f3fc"
        },
        "1f926-1f3fd": {
          "name": "person facepalming: medium skin tone",
          "shortname": ":person_facepalming_tone3:",
          "shortname_alternates": [
            ":face_palm_tone3:",
            ":facepalm_tone3:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "face",
            "medium skin tone",
            "palm"
          ],
          "unicode_output": "1f926-1f3fd"
        },
        "1f926-1f3fe": {
          "name": "person facepalming: medium-dark skin tone",
          "shortname": ":person_facepalming_tone4:",
          "shortname_alternates": [
            ":face_palm_tone4:",
            ":facepalm_tone4:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "face",
            "medium-dark skin tone",
            "palm"
          ],
          "unicode_output": "1f926-1f3fe"
        },
        "1f926-1f3ff": {
          "name": "person facepalming: dark skin tone",
          "shortname": ":person_facepalming_tone5:",
          "shortname_alternates": [
            ":face_palm_tone5:",
            ":facepalm_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "disbelief",
            "exasperation",
            "face",
            "palm"
          ],
          "unicode_output": "1f926-1f3ff"
        },
        "1f926-2640": {
          "name": "woman facepalming",
          "shortname": ":woman_facepalming:",
          "shortname_alternates": [],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "woman"
          ],
          "unicode_output": "1f926-200d-2640-fe0f"
        },
        "1f926-1f3fb-2640": {
          "name": "woman facepalming: light skin tone",
          "shortname": ":woman_facepalming_tone1:",
          "shortname_alternates": [
            ":woman_facepalming_light_skin_tone:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f926-1f3fb-200d-2640-fe0f"
        },
        "1f926-1f3fc-2640": {
          "name": "woman facepalming: medium-light skin tone",
          "shortname": ":woman_facepalming_tone2:",
          "shortname_alternates": [
            ":woman_facepalming_medium_light_skin_tone:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f926-1f3fc-200d-2640-fe0f"
        },
        "1f926-1f3fd-2640": {
          "name": "woman facepalming: medium skin tone",
          "shortname": ":woman_facepalming_tone3:",
          "shortname_alternates": [
            ":woman_facepalming_medium_skin_tone:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f926-1f3fd-200d-2640-fe0f"
        },
        "1f926-1f3fe-2640": {
          "name": "woman facepalming: medium-dark skin tone",
          "shortname": ":woman_facepalming_tone4:",
          "shortname_alternates": [
            ":woman_facepalming_medium_dark_skin_tone:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f926-1f3fe-200d-2640-fe0f"
        },
        "1f926-1f3ff-2640": {
          "name": "woman facepalming: dark skin tone",
          "shortname": ":woman_facepalming_tone5:",
          "shortname_alternates": [
            ":woman_facepalming_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "disbelief",
            "exasperation",
            "facepalm",
            "woman"
          ],
          "unicode_output": "1f926-1f3ff-200d-2640-fe0f"
        },
        "1f926-2642": {
          "name": "man facepalming",
          "shortname": ":man_facepalming:",
          "shortname_alternates": [],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "man"
          ],
          "unicode_output": "1f926-200d-2642-fe0f"
        },
        "1f926-1f3fb-2642": {
          "name": "man facepalming: light skin tone",
          "shortname": ":man_facepalming_tone1:",
          "shortname_alternates": [
            ":man_facepalming_light_skin_tone:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f926-1f3fb-200d-2642-fe0f"
        },
        "1f926-1f3fc-2642": {
          "name": "man facepalming: medium-light skin tone",
          "shortname": ":man_facepalming_tone2:",
          "shortname_alternates": [
            ":man_facepalming_medium_light_skin_tone:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f926-1f3fc-200d-2642-fe0f"
        },
        "1f926-1f3fd-2642": {
          "name": "man facepalming: medium skin tone",
          "shortname": ":man_facepalming_tone3:",
          "shortname_alternates": [
            ":man_facepalming_medium_skin_tone:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f926-1f3fd-200d-2642-fe0f"
        },
        "1f926-1f3fe-2642": {
          "name": "man facepalming: medium-dark skin tone",
          "shortname": ":man_facepalming_tone4:",
          "shortname_alternates": [
            ":man_facepalming_medium_dark_skin_tone:"
          ],
          "keywords": [
            "disbelief",
            "exasperation",
            "facepalm",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f926-1f3fe-200d-2642-fe0f"
        },
        "1f926-1f3ff-2642": {
          "name": "man facepalming: dark skin tone",
          "shortname": ":man_facepalming_tone5:",
          "shortname_alternates": [
            ":man_facepalming_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "disbelief",
            "exasperation",
            "facepalm",
            "man"
          ],
          "unicode_output": "1f926-1f3ff-200d-2642-fe0f"
        },
        "1f937": {
          "name": "person shrugging",
          "shortname": ":person_shrugging:",
          "shortname_alternates": [
            ":shrug:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "shrug"
          ],
          "unicode_output": "1f937"
        },
        "1f937-1f3fb": {
          "name": "person shrugging: light skin tone",
          "shortname": ":person_shrugging_tone1:",
          "shortname_alternates": [
            ":shrug_tone1:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "light skin tone",
            "shrug"
          ],
          "unicode_output": "1f937-1f3fb"
        },
        "1f937-1f3fc": {
          "name": "person shrugging: medium-light skin tone",
          "shortname": ":person_shrugging_tone2:",
          "shortname_alternates": [
            ":shrug_tone2:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "medium-light skin tone",
            "shrug"
          ],
          "unicode_output": "1f937-1f3fc"
        },
        "1f937-1f3fd": {
          "name": "person shrugging: medium skin tone",
          "shortname": ":person_shrugging_tone3:",
          "shortname_alternates": [
            ":shrug_tone3:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "medium skin tone",
            "shrug"
          ],
          "unicode_output": "1f937-1f3fd"
        },
        "1f937-1f3fe": {
          "name": "person shrugging: medium-dark skin tone",
          "shortname": ":person_shrugging_tone4:",
          "shortname_alternates": [
            ":shrug_tone4:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "medium-dark skin tone",
            "shrug"
          ],
          "unicode_output": "1f937-1f3fe"
        },
        "1f937-1f3ff": {
          "name": "person shrugging: dark skin tone",
          "shortname": ":person_shrugging_tone5:",
          "shortname_alternates": [
            ":shrug_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "doubt",
            "ignorance",
            "indifference",
            "shrug"
          ],
          "unicode_output": "1f937-1f3ff"
        },
        "1f937-2640": {
          "name": "woman shrugging",
          "shortname": ":woman_shrugging:",
          "shortname_alternates": [],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "shrug",
            "woman"
          ],
          "unicode_output": "1f937-200d-2640-fe0f"
        },
        "1f937-1f3fb-2640": {
          "name": "woman shrugging: light skin tone",
          "shortname": ":woman_shrugging_tone1:",
          "shortname_alternates": [
            ":woman_shrugging_light_skin_tone:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "light skin tone",
            "shrug",
            "woman"
          ],
          "unicode_output": "1f937-1f3fb-200d-2640-fe0f"
        },
        "1f937-1f3fc-2640": {
          "name": "woman shrugging: medium-light skin tone",
          "shortname": ":woman_shrugging_tone2:",
          "shortname_alternates": [
            ":woman_shrugging_medium_light_skin_tone:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "medium-light skin tone",
            "shrug",
            "woman"
          ],
          "unicode_output": "1f937-1f3fc-200d-2640-fe0f"
        },
        "1f937-1f3fd-2640": {
          "name": "woman shrugging: medium skin tone",
          "shortname": ":woman_shrugging_tone3:",
          "shortname_alternates": [
            ":woman_shrugging_medium_skin_tone:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "medium skin tone",
            "shrug",
            "woman"
          ],
          "unicode_output": "1f937-1f3fd-200d-2640-fe0f"
        },
        "1f937-1f3fe-2640": {
          "name": "woman shrugging: medium-dark skin tone",
          "shortname": ":woman_shrugging_tone4:",
          "shortname_alternates": [
            ":woman_shrugging_medium_dark_skin_tone:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "medium-dark skin tone",
            "shrug",
            "woman"
          ],
          "unicode_output": "1f937-1f3fe-200d-2640-fe0f"
        },
        "1f937-1f3ff-2640": {
          "name": "woman shrugging: dark skin tone",
          "shortname": ":woman_shrugging_tone5:",
          "shortname_alternates": [
            ":woman_shrugging_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "doubt",
            "ignorance",
            "indifference",
            "shrug",
            "woman"
          ],
          "unicode_output": "1f937-1f3ff-200d-2640-fe0f"
        },
        "1f937-2642": {
          "name": "man shrugging",
          "shortname": ":man_shrugging:",
          "shortname_alternates": [],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "man",
            "shrug"
          ],
          "unicode_output": "1f937-200d-2642-fe0f"
        },
        "1f937-1f3fb-2642": {
          "name": "man shrugging: light skin tone",
          "shortname": ":man_shrugging_tone1:",
          "shortname_alternates": [
            ":man_shrugging_light_skin_tone:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "light skin tone",
            "man",
            "shrug"
          ],
          "unicode_output": "1f937-1f3fb-200d-2642-fe0f"
        },
        "1f937-1f3fc-2642": {
          "name": "man shrugging: medium-light skin tone",
          "shortname": ":man_shrugging_tone2:",
          "shortname_alternates": [
            ":man_shrugging_medium_light_skin_tone:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "man",
            "medium-light skin tone",
            "shrug"
          ],
          "unicode_output": "1f937-1f3fc-200d-2642-fe0f"
        },
        "1f937-1f3fd-2642": {
          "name": "man shrugging: medium skin tone",
          "shortname": ":man_shrugging_tone3:",
          "shortname_alternates": [
            ":man_shrugging_medium_skin_tone:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "man",
            "medium skin tone",
            "shrug"
          ],
          "unicode_output": "1f937-1f3fd-200d-2642-fe0f"
        },
        "1f937-1f3fe-2642": {
          "name": "man shrugging: medium-dark skin tone",
          "shortname": ":man_shrugging_tone4:",
          "shortname_alternates": [
            ":man_shrugging_medium_dark_skin_tone:"
          ],
          "keywords": [
            "doubt",
            "ignorance",
            "indifference",
            "man",
            "medium-dark skin tone",
            "shrug"
          ],
          "unicode_output": "1f937-1f3fe-200d-2642-fe0f"
        },
        "1f937-1f3ff-2642": {
          "name": "man shrugging: dark skin tone",
          "shortname": ":man_shrugging_tone5:",
          "shortname_alternates": [
            ":man_shrugging_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "doubt",
            "ignorance",
            "indifference",
            "man",
            "shrug"
          ],
          "unicode_output": "1f937-1f3ff-200d-2642-fe0f"
        },
        "1f64e": {
          "name": "person pouting",
          "shortname": ":person_pouting:",
          "shortname_alternates": [
            ":person_with_pouting_face:"
          ],
          "keywords": [
            "gesture",
            "pouting"
          ],
          "unicode_output": "1f64e"
        },
        "1f64e-1f3fb": {
          "name": "person pouting: light skin tone",
          "shortname": ":person_pouting_tone1:",
          "shortname_alternates": [
            ":person_with_pouting_face_tone1:"
          ],
          "keywords": [
            "gesture",
            "light skin tone",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3fb"
        },
        "1f64e-1f3fc": {
          "name": "person pouting: medium-light skin tone",
          "shortname": ":person_pouting_tone2:",
          "shortname_alternates": [
            ":person_with_pouting_face_tone2:"
          ],
          "keywords": [
            "gesture",
            "medium-light skin tone",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3fc"
        },
        "1f64e-1f3fd": {
          "name": "person pouting: medium skin tone",
          "shortname": ":person_pouting_tone3:",
          "shortname_alternates": [
            ":person_with_pouting_face_tone3:"
          ],
          "keywords": [
            "gesture",
            "medium skin tone",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3fd"
        },
        "1f64e-1f3fe": {
          "name": "person pouting: medium-dark skin tone",
          "shortname": ":person_pouting_tone4:",
          "shortname_alternates": [
            ":person_with_pouting_face_tone4:"
          ],
          "keywords": [
            "gesture",
            "medium-dark skin tone",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3fe"
        },
        "1f64e-1f3ff": {
          "name": "person pouting: dark skin tone",
          "shortname": ":person_pouting_tone5:",
          "shortname_alternates": [
            ":person_with_pouting_face_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "gesture",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3ff"
        },
        "1f64e-2640": {
          "name": "woman pouting",
          "shortname": ":woman_pouting:",
          "shortname_alternates": [],
          "keywords": [
            "gesture",
            "pouting",
            "woman"
          ],
          "unicode_output": "1f64e-200d-2640-fe0f"
        },
        "1f64e-1f3fb-2640": {
          "name": "woman pouting: light skin tone",
          "shortname": ":woman_pouting_tone1:",
          "shortname_alternates": [
            ":woman_pouting_light_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "light skin tone",
            "pouting",
            "woman"
          ],
          "unicode_output": "1f64e-1f3fb-200d-2640-fe0f"
        },
        "1f64e-1f3fc-2640": {
          "name": "woman pouting: medium-light skin tone",
          "shortname": ":woman_pouting_tone2:",
          "shortname_alternates": [
            ":woman_pouting_medium_light_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "medium-light skin tone",
            "pouting",
            "woman"
          ],
          "unicode_output": "1f64e-1f3fc-200d-2640-fe0f"
        },
        "1f64e-1f3fd-2640": {
          "name": "woman pouting: medium skin tone",
          "shortname": ":woman_pouting_tone3:",
          "shortname_alternates": [
            ":woman_pouting_medium_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "medium skin tone",
            "pouting",
            "woman"
          ],
          "unicode_output": "1f64e-1f3fd-200d-2640-fe0f"
        },
        "1f64e-1f3fe-2640": {
          "name": "woman pouting: medium-dark skin tone",
          "shortname": ":woman_pouting_tone4:",
          "shortname_alternates": [
            ":woman_pouting_medium_dark_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "medium-dark skin tone",
            "pouting",
            "woman"
          ],
          "unicode_output": "1f64e-1f3fe-200d-2640-fe0f"
        },
        "1f64e-1f3ff-2640": {
          "name": "woman pouting: dark skin tone",
          "shortname": ":woman_pouting_tone5:",
          "shortname_alternates": [
            ":woman_pouting_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "gesture",
            "pouting",
            "woman"
          ],
          "unicode_output": "1f64e-1f3ff-200d-2640-fe0f"
        },
        "1f64e-2642": {
          "name": "man pouting",
          "shortname": ":man_pouting:",
          "shortname_alternates": [],
          "keywords": [
            "gesture",
            "man",
            "pouting"
          ],
          "unicode_output": "1f64e-200d-2642-fe0f"
        },
        "1f64e-1f3fb-2642": {
          "name": "man pouting: light skin tone",
          "shortname": ":man_pouting_tone1:",
          "shortname_alternates": [
            ":man_pouting_light_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "light skin tone",
            "man",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3fb-200d-2642-fe0f"
        },
        "1f64e-1f3fc-2642": {
          "name": "man pouting: medium-light skin tone",
          "shortname": ":man_pouting_tone2:",
          "shortname_alternates": [
            ":man_pouting_medium_light_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "man",
            "medium-light skin tone",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3fc-200d-2642-fe0f"
        },
        "1f64e-1f3fd-2642": {
          "name": "man pouting: medium skin tone",
          "shortname": ":man_pouting_tone3:",
          "shortname_alternates": [
            ":man_pouting_medium_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "man",
            "medium skin tone",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3fd-200d-2642-fe0f"
        },
        "1f64e-1f3fe-2642": {
          "name": "man pouting: medium-dark skin tone",
          "shortname": ":man_pouting_tone4:",
          "shortname_alternates": [
            ":man_pouting_medium_dark_skin_tone:"
          ],
          "keywords": [
            "gesture",
            "man",
            "medium-dark skin tone",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3fe-200d-2642-fe0f"
        },
        "1f64e-1f3ff-2642": {
          "name": "man pouting: dark skin tone",
          "shortname": ":man_pouting_tone5:",
          "shortname_alternates": [
            ":man_pouting_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "gesture",
            "man",
            "pouting"
          ],
          "unicode_output": "1f64e-1f3ff-200d-2642-fe0f"
        },
        "1f64d": {
          "name": "person frowning",
          "shortname": ":person_frowning:",
          "shortname_alternates": [],
          "keywords": [
            "frown",
            "gesture"
          ],
          "unicode_output": "1f64d"
        },
        "1f64d-1f3fb": {
          "name": "person frowning: light skin tone",
          "shortname": ":person_frowning_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "frown",
            "gesture",
            "light skin tone"
          ],
          "unicode_output": "1f64d-1f3fb"
        },
        "1f64d-1f3fc": {
          "name": "person frowning: medium-light skin tone",
          "shortname": ":person_frowning_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "frown",
            "gesture",
            "medium-light skin tone"
          ],
          "unicode_output": "1f64d-1f3fc"
        },
        "1f64d-1f3fd": {
          "name": "person frowning: medium skin tone",
          "shortname": ":person_frowning_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "frown",
            "gesture",
            "medium skin tone"
          ],
          "unicode_output": "1f64d-1f3fd"
        },
        "1f64d-1f3fe": {
          "name": "person frowning: medium-dark skin tone",
          "shortname": ":person_frowning_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "frown",
            "gesture",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f64d-1f3fe"
        },
        "1f64d-1f3ff": {
          "name": "person frowning: dark skin tone",
          "shortname": ":person_frowning_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dark skin tone",
            "frown",
            "gesture"
          ],
          "unicode_output": "1f64d-1f3ff"
        },
        "1f64d-2640": {
          "name": "woman frowning",
          "shortname": ":woman_frowning:",
          "shortname_alternates": [],
          "keywords": [
            "frowning",
            "gesture",
            "woman"
          ],
          "unicode_output": "1f64d-200d-2640-fe0f"
        },
        "1f64d-1f3fb-2640": {
          "name": "woman frowning: light skin tone",
          "shortname": ":woman_frowning_tone1:",
          "shortname_alternates": [
            ":woman_frowning_light_skin_tone:"
          ],
          "keywords": [
            "frowning",
            "gesture",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f64d-1f3fb-200d-2640-fe0f"
        },
        "1f64d-1f3fc-2640": {
          "name": "woman frowning: medium-light skin tone",
          "shortname": ":woman_frowning_tone2:",
          "shortname_alternates": [
            ":woman_frowning_medium_light_skin_tone:"
          ],
          "keywords": [
            "frowning",
            "gesture",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f64d-1f3fc-200d-2640-fe0f"
        },
        "1f64d-1f3fd-2640": {
          "name": "woman frowning: medium skin tone",
          "shortname": ":woman_frowning_tone3:",
          "shortname_alternates": [
            ":woman_frowning_medium_skin_tone:"
          ],
          "keywords": [
            "frowning",
            "gesture",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f64d-1f3fd-200d-2640-fe0f"
        },
        "1f64d-1f3fe-2640": {
          "name": "woman frowning: medium-dark skin tone",
          "shortname": ":woman_frowning_tone4:",
          "shortname_alternates": [
            ":woman_frowning_medium_dark_skin_tone:"
          ],
          "keywords": [
            "frowning",
            "gesture",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f64d-1f3fe-200d-2640-fe0f"
        },
        "1f64d-1f3ff-2640": {
          "name": "woman frowning: dark skin tone",
          "shortname": ":woman_frowning_tone5:",
          "shortname_alternates": [
            ":woman_frowning_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "frowning",
            "gesture",
            "woman"
          ],
          "unicode_output": "1f64d-1f3ff-200d-2640-fe0f"
        },
        "1f64d-2642": {
          "name": "man frowning",
          "shortname": ":man_frowning:",
          "shortname_alternates": [],
          "keywords": [
            "frowning",
            "gesture",
            "man"
          ],
          "unicode_output": "1f64d-200d-2642-fe0f"
        },
        "1f64d-1f3fb-2642": {
          "name": "man frowning: light skin tone",
          "shortname": ":man_frowning_tone1:",
          "shortname_alternates": [
            ":man_frowning_light_skin_tone:"
          ],
          "keywords": [
            "frowning",
            "gesture",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f64d-1f3fb-200d-2642-fe0f"
        },
        "1f64d-1f3fc-2642": {
          "name": "man frowning: medium-light skin tone",
          "shortname": ":man_frowning_tone2:",
          "shortname_alternates": [
            ":man_frowning_medium_light_skin_tone:"
          ],
          "keywords": [
            "frowning",
            "gesture",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f64d-1f3fc-200d-2642-fe0f"
        },
        "1f64d-1f3fd-2642": {
          "name": "man frowning: medium skin tone",
          "shortname": ":man_frowning_tone3:",
          "shortname_alternates": [
            ":man_frowning_medium_skin_tone:"
          ],
          "keywords": [
            "frowning",
            "gesture",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f64d-1f3fd-200d-2642-fe0f"
        },
        "1f64d-1f3fe-2642": {
          "name": "man frowning: medium-dark skin tone",
          "shortname": ":man_frowning_tone4:",
          "shortname_alternates": [
            ":man_frowning_medium_dark_skin_tone:"
          ],
          "keywords": [
            "frowning",
            "gesture",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f64d-1f3fe-200d-2642-fe0f"
        },
        "1f64d-1f3ff-2642": {
          "name": "man frowning: dark skin tone",
          "shortname": ":man_frowning_tone5:",
          "shortname_alternates": [
            ":man_frowning_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "frowning",
            "gesture",
            "man"
          ],
          "unicode_output": "1f64d-1f3ff-200d-2642-fe0f"
        },
        "1f487": {
          "name": "person getting haircut",
          "shortname": ":person_getting_haircut:",
          "shortname_alternates": [
            ":haircut:"
          ],
          "keywords": [
            "barber",
            "beauty",
            "haircut",
            "parlor"
          ],
          "unicode_output": "1f487"
        },
        "1f487-1f3fb": {
          "name": "person getting haircut: light skin tone",
          "shortname": ":person_getting_haircut_tone1:",
          "shortname_alternates": [
            ":haircut_tone1:"
          ],
          "keywords": [
            "barber",
            "beauty",
            "haircut",
            "light skin tone",
            "parlor"
          ],
          "unicode_output": "1f487-1f3fb"
        },
        "1f487-1f3fc": {
          "name": "person getting haircut: medium-light skin tone",
          "shortname": ":person_getting_haircut_tone2:",
          "shortname_alternates": [
            ":haircut_tone2:"
          ],
          "keywords": [
            "barber",
            "beauty",
            "haircut",
            "medium-light skin tone",
            "parlor"
          ],
          "unicode_output": "1f487-1f3fc"
        },
        "1f487-1f3fd": {
          "name": "person getting haircut: medium skin tone",
          "shortname": ":person_getting_haircut_tone3:",
          "shortname_alternates": [
            ":haircut_tone3:"
          ],
          "keywords": [
            "barber",
            "beauty",
            "haircut",
            "medium skin tone",
            "parlor"
          ],
          "unicode_output": "1f487-1f3fd"
        },
        "1f487-1f3fe": {
          "name": "person getting haircut: medium-dark skin tone",
          "shortname": ":person_getting_haircut_tone4:",
          "shortname_alternates": [
            ":haircut_tone4:"
          ],
          "keywords": [
            "barber",
            "beauty",
            "haircut",
            "medium-dark skin tone",
            "parlor"
          ],
          "unicode_output": "1f487-1f3fe"
        },
        "1f487-1f3ff": {
          "name": "person getting haircut: dark skin tone",
          "shortname": ":person_getting_haircut_tone5:",
          "shortname_alternates": [
            ":haircut_tone5:"
          ],
          "keywords": [
            "barber",
            "beauty",
            "dark skin tone",
            "haircut",
            "parlor"
          ],
          "unicode_output": "1f487-1f3ff"
        },
        "1f487-2640": {
          "name": "woman getting haircut",
          "shortname": ":woman_getting_haircut:",
          "shortname_alternates": [],
          "keywords": [
            "haircut",
            "woman"
          ],
          "unicode_output": "1f487-200d-2640-fe0f"
        },
        "1f487-1f3fb-2640": {
          "name": "woman getting haircut: light skin tone",
          "shortname": ":woman_getting_haircut_tone1:",
          "shortname_alternates": [
            ":woman_getting_haircut_light_skin_tone:"
          ],
          "keywords": [
            "haircut",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f487-1f3fb-200d-2640-fe0f"
        },
        "1f487-1f3fc-2640": {
          "name": "woman getting haircut: medium-light skin tone",
          "shortname": ":woman_getting_haircut_tone2:",
          "shortname_alternates": [
            ":woman_getting_haircut_medium_light_skin_tone:"
          ],
          "keywords": [
            "haircut",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f487-1f3fc-200d-2640-fe0f"
        },
        "1f487-1f3fd-2640": {
          "name": "woman getting haircut: medium skin tone",
          "shortname": ":woman_getting_haircut_tone3:",
          "shortname_alternates": [
            ":woman_getting_haircut_medium_skin_tone:"
          ],
          "keywords": [
            "haircut",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f487-1f3fd-200d-2640-fe0f"
        },
        "1f487-1f3fe-2640": {
          "name": "woman getting haircut: medium-dark skin tone",
          "shortname": ":woman_getting_haircut_tone4:",
          "shortname_alternates": [
            ":woman_getting_haircut_medium_dark_skin_tone:"
          ],
          "keywords": [
            "haircut",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f487-1f3fe-200d-2640-fe0f"
        },
        "1f487-1f3ff-2640": {
          "name": "woman getting haircut: dark skin tone",
          "shortname": ":woman_getting_haircut_tone5:",
          "shortname_alternates": [
            ":woman_getting_haircut_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "haircut",
            "woman"
          ],
          "unicode_output": "1f487-1f3ff-200d-2640-fe0f"
        },
        "1f487-2642": {
          "name": "man getting haircut",
          "shortname": ":man_getting_haircut:",
          "shortname_alternates": [],
          "keywords": [
            "haircut",
            "man"
          ],
          "unicode_output": "1f487-200d-2642-fe0f"
        },
        "1f487-1f3fb-2642": {
          "name": "man getting haircut: light skin tone",
          "shortname": ":man_getting_haircut_tone1:",
          "shortname_alternates": [
            ":man_getting_haircut_light_skin_tone:"
          ],
          "keywords": [
            "haircut",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f487-1f3fb-200d-2642-fe0f"
        },
        "1f487-1f3fc-2642": {
          "name": "man getting haircut: medium-light skin tone",
          "shortname": ":man_getting_haircut_tone2:",
          "shortname_alternates": [
            ":man_getting_haircut_medium_light_skin_tone:"
          ],
          "keywords": [
            "haircut",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f487-1f3fc-200d-2642-fe0f"
        },
        "1f487-1f3fd-2642": {
          "name": "man getting haircut: medium skin tone",
          "shortname": ":man_getting_haircut_tone3:",
          "shortname_alternates": [
            ":man_getting_haircut_medium_skin_tone:"
          ],
          "keywords": [
            "haircut",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f487-1f3fd-200d-2642-fe0f"
        },
        "1f487-1f3fe-2642": {
          "name": "man getting haircut: medium-dark skin tone",
          "shortname": ":man_getting_haircut_tone4:",
          "shortname_alternates": [
            ":man_getting_haircut_medium_dark_skin_tone:"
          ],
          "keywords": [
            "haircut",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f487-1f3fe-200d-2642-fe0f"
        },
        "1f487-1f3ff-2642": {
          "name": "man getting haircut: dark skin tone",
          "shortname": ":man_getting_haircut_tone5:",
          "shortname_alternates": [
            ":man_getting_haircut_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "haircut",
            "man"
          ],
          "unicode_output": "1f487-1f3ff-200d-2642-fe0f"
        },
        "1f486": {
          "name": "person getting massage",
          "shortname": ":person_getting_massage:",
          "shortname_alternates": [
            ":massage:"
          ],
          "keywords": [
            "face",
            "massage",
            "salon"
          ],
          "unicode_output": "1f486"
        },
        "1f486-1f3fb": {
          "name": "person getting massage: light skin tone",
          "shortname": ":person_getting_massage_tone1:",
          "shortname_alternates": [
            ":massage_tone1:"
          ],
          "keywords": [
            "face",
            "light skin tone",
            "massage",
            "salon"
          ],
          "unicode_output": "1f486-1f3fb"
        },
        "1f486-1f3fc": {
          "name": "person getting massage: medium-light skin tone",
          "shortname": ":person_getting_massage_tone2:",
          "shortname_alternates": [
            ":massage_tone2:"
          ],
          "keywords": [
            "face",
            "massage",
            "medium-light skin tone",
            "salon"
          ],
          "unicode_output": "1f486-1f3fc"
        },
        "1f486-1f3fd": {
          "name": "person getting massage: medium skin tone",
          "shortname": ":person_getting_massage_tone3:",
          "shortname_alternates": [
            ":massage_tone3:"
          ],
          "keywords": [
            "face",
            "massage",
            "medium skin tone",
            "salon"
          ],
          "unicode_output": "1f486-1f3fd"
        },
        "1f486-1f3fe": {
          "name": "person getting massage: medium-dark skin tone",
          "shortname": ":person_getting_massage_tone4:",
          "shortname_alternates": [
            ":massage_tone4:"
          ],
          "keywords": [
            "face",
            "massage",
            "medium-dark skin tone",
            "salon"
          ],
          "unicode_output": "1f486-1f3fe"
        },
        "1f486-1f3ff": {
          "name": "person getting massage: dark skin tone",
          "shortname": ":person_getting_massage_tone5:",
          "shortname_alternates": [
            ":massage_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "face",
            "massage",
            "salon"
          ],
          "unicode_output": "1f486-1f3ff"
        },
        "1f486-2640": {
          "name": "woman getting massage",
          "shortname": ":woman_getting_face_massage:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "massage",
            "woman"
          ],
          "unicode_output": "1f486-200d-2640-fe0f"
        },
        "1f486-1f3fb-2640": {
          "name": "woman getting massage: light skin tone",
          "shortname": ":woman_getting_face_massage_tone1:",
          "shortname_alternates": [
            ":woman_getting_face_massage_light_skin_tone:"
          ],
          "keywords": [
            "face",
            "light skin tone",
            "massage",
            "woman"
          ],
          "unicode_output": "1f486-1f3fb-200d-2640-fe0f"
        },
        "1f486-1f3fc-2640": {
          "name": "woman getting massage: medium-light skin tone",
          "shortname": ":woman_getting_face_massage_tone2:",
          "shortname_alternates": [
            ":woman_getting_face_massage_medium_light_skin_tone:"
          ],
          "keywords": [
            "face",
            "massage",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f486-1f3fc-200d-2640-fe0f"
        },
        "1f486-1f3fd-2640": {
          "name": "woman getting massage: medium skin tone",
          "shortname": ":woman_getting_face_massage_tone3:",
          "shortname_alternates": [
            ":woman_getting_face_massage_medium_skin_tone:"
          ],
          "keywords": [
            "face",
            "massage",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f486-1f3fd-200d-2640-fe0f"
        },
        "1f486-1f3fe-2640": {
          "name": "woman getting massage: medium-dark skin tone",
          "shortname": ":woman_getting_face_massage_tone4:",
          "shortname_alternates": [
            ":woman_getting_face_massage_medium_dark_skin_tone:"
          ],
          "keywords": [
            "face",
            "massage",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f486-1f3fe-200d-2640-fe0f"
        },
        "1f486-1f3ff-2640": {
          "name": "woman getting massage: dark skin tone",
          "shortname": ":woman_getting_face_massage_tone5:",
          "shortname_alternates": [
            ":woman_getting_face_massage_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "face",
            "massage",
            "woman"
          ],
          "unicode_output": "1f486-1f3ff-200d-2640-fe0f"
        },
        "1f486-2642": {
          "name": "man getting massage",
          "shortname": ":man_getting_face_massage:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "man",
            "massage"
          ],
          "unicode_output": "1f486-200d-2642-fe0f"
        },
        "1f486-1f3fb-2642": {
          "name": "man getting massage: light skin tone",
          "shortname": ":man_getting_face_massage_tone1:",
          "shortname_alternates": [
            ":man_getting_face_massage_light_skin_tone:"
          ],
          "keywords": [
            "face",
            "light skin tone",
            "man",
            "massage"
          ],
          "unicode_output": "1f486-1f3fb-200d-2642-fe0f"
        },
        "1f486-1f3fc-2642": {
          "name": "man getting massage: medium-light skin tone",
          "shortname": ":man_getting_face_massage_tone2:",
          "shortname_alternates": [
            ":man_getting_face_massage_medium_light_skin_tone:"
          ],
          "keywords": [
            "face",
            "man",
            "massage",
            "medium-light skin tone"
          ],
          "unicode_output": "1f486-1f3fc-200d-2642-fe0f"
        },
        "1f486-1f3fd-2642": {
          "name": "man getting massage: medium skin tone",
          "shortname": ":man_getting_face_massage_tone3:",
          "shortname_alternates": [
            ":man_getting_face_massage_medium_skin_tone:"
          ],
          "keywords": [
            "face",
            "man",
            "massage",
            "medium skin tone"
          ],
          "unicode_output": "1f486-1f3fd-200d-2642-fe0f"
        },
        "1f486-1f3fe-2642": {
          "name": "man getting massage: medium-dark skin tone",
          "shortname": ":man_getting_face_massage_tone4:",
          "shortname_alternates": [
            ":man_getting_face_massage_medium_dark_skin_tone:"
          ],
          "keywords": [
            "face",
            "man",
            "massage",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f486-1f3fe-200d-2642-fe0f"
        },
        "1f486-1f3ff-2642": {
          "name": "man getting massage: dark skin tone",
          "shortname": ":man_getting_face_massage_tone5:",
          "shortname_alternates": [
            ":man_getting_face_massage_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "face",
            "man",
            "massage"
          ],
          "unicode_output": "1f486-1f3ff-200d-2642-fe0f"
        },
        "1f9d6": {
          "name": "person in steamy room",
          "shortname": ":person_in_steamy_room:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9d6"
        },
        "1f9d6-1f3fb": {
          "name": "person in steamy room: light skin tone",
          "shortname": ":person_in_steamy_room_tone1:",
          "shortname_alternates": [
            ":person_in_steamy_room_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fb"
        },
        "1f9d6-1f3fc": {
          "name": "person in steamy room: medium-light skin tone",
          "shortname": ":person_in_steamy_room_tone2:",
          "shortname_alternates": [
            ":person_in_steamy_room_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fc"
        },
        "1f9d6-1f3fd": {
          "name": "person in steamy room: medium skin tone",
          "shortname": ":person_in_steamy_room_tone3:",
          "shortname_alternates": [
            ":person_in_steamy_room_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fd"
        },
        "1f9d6-1f3fe": {
          "name": "person in steamy room: medium-dark skin tone",
          "shortname": ":person_in_steamy_room_tone4:",
          "shortname_alternates": [
            ":person_in_steamy_room_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fe"
        },
        "1f9d6-1f3ff": {
          "name": "person in steamy room: dark skin tone",
          "shortname": ":person_in_steamy_room_tone5:",
          "shortname_alternates": [
            ":person_in_steamy_room_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3ff"
        },
        "1f9d6-2640": {
          "name": "woman in steamy room",
          "shortname": ":woman_in_steamy_room:",
          "shortname_alternates": [],
          "keywords": [
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-200d-2640-fe0f"
        },
        "1f9d6-1f3fb-2640": {
          "name": "woman in steamy room: light skin tone",
          "shortname": ":woman_in_steamy_room_tone1:",
          "shortname_alternates": [
            ":woman_in_steamy_room_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fb-200d-2640-fe0f"
        },
        "1f9d6-1f3fc-2640": {
          "name": "woman in steamy room: medium-light skin tone",
          "shortname": ":woman_in_steamy_room_tone2:",
          "shortname_alternates": [
            ":woman_in_steamy_room_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fc-200d-2640-fe0f"
        },
        "1f9d6-1f3fd-2640": {
          "name": "woman in steamy room: medium skin tone",
          "shortname": ":woman_in_steamy_room_tone3:",
          "shortname_alternates": [
            ":woman_in_steamy_room_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fd-200d-2640-fe0f"
        },
        "1f9d6-1f3fe-2640": {
          "name": "woman in steamy room: medium-dark skin tone",
          "shortname": ":woman_in_steamy_room_tone4:",
          "shortname_alternates": [
            ":woman_in_steamy_room_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fe-200d-2640-fe0f"
        },
        "1f9d6-1f3ff-2640": {
          "name": "woman in steamy room: dark skin tone",
          "shortname": ":woman_in_steamy_room_tone5:",
          "shortname_alternates": [
            ":woman_in_steamy_room_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3ff-200d-2640-fe0f"
        },
        "1f9d6-2642": {
          "name": "man in steamy room",
          "shortname": ":man_in_steamy_room:",
          "shortname_alternates": [],
          "keywords": [
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-200d-2642-fe0f"
        },
        "1f9d6-1f3fb-2642": {
          "name": "man in steamy room: light skin tone",
          "shortname": ":man_in_steamy_room_tone1:",
          "shortname_alternates": [
            ":man_in_steamy_room_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fb-200d-2642-fe0f"
        },
        "1f9d6-1f3fc-2642": {
          "name": "man in steamy room: medium-light skin tone",
          "shortname": ":man_in_steamy_room_tone2:",
          "shortname_alternates": [
            ":man_in_steamy_room_medium_light_skin_tone:"
          ],
          "keywords": [
            "medium-light skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fc-200d-2642-fe0f"
        },
        "1f9d6-1f3fd-2642": {
          "name": "man in steamy room: medium skin tone",
          "shortname": ":man_in_steamy_room_tone3:",
          "shortname_alternates": [
            ":man_in_steamy_room_medium_skin_tone:"
          ],
          "keywords": [
            "medium skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fd-200d-2642-fe0f"
        },
        "1f9d6-1f3fe-2642": {
          "name": "man in steamy room: medium-dark skin tone",
          "shortname": ":man_in_steamy_room_tone4:",
          "shortname_alternates": [
            ":man_in_steamy_room_medium_dark_skin_tone:"
          ],
          "keywords": [
            "medium-dark skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3fe-200d-2642-fe0f"
        },
        "1f9d6-1f3ff-2642": {
          "name": "man in steamy room: dark skin tone",
          "shortname": ":man_in_steamy_room_tone5:",
          "shortname_alternates": [
            ":man_in_steamy_room_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "sauna",
            "steam room"
          ],
          "unicode_output": "1f9d6-1f3ff-200d-2642-fe0f"
        },
        "1f485": {
          "name": "nail polish",
          "shortname": ":nail_care:",
          "shortname_alternates": [],
          "keywords": [
            "care",
            "cosmetics",
            "manicure",
            "nail",
            "polish"
          ],
          "unicode_output": "1f485"
        },
        "1f485-1f3fb": {
          "name": "nail polish: light skin tone",
          "shortname": ":nail_care_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "care",
            "cosmetics",
            "light skin tone",
            "manicure",
            "nail",
            "polish"
          ],
          "unicode_output": "1f485-1f3fb"
        },
        "1f485-1f3fc": {
          "name": "nail polish: medium-light skin tone",
          "shortname": ":nail_care_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "care",
            "cosmetics",
            "manicure",
            "medium-light skin tone",
            "nail",
            "polish"
          ],
          "unicode_output": "1f485-1f3fc"
        },
        "1f485-1f3fd": {
          "name": "nail polish: medium skin tone",
          "shortname": ":nail_care_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "care",
            "cosmetics",
            "manicure",
            "medium skin tone",
            "nail",
            "polish"
          ],
          "unicode_output": "1f485-1f3fd"
        },
        "1f485-1f3fe": {
          "name": "nail polish: medium-dark skin tone",
          "shortname": ":nail_care_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "care",
            "cosmetics",
            "manicure",
            "medium-dark skin tone",
            "nail",
            "polish"
          ],
          "unicode_output": "1f485-1f3fe"
        },
        "1f485-1f3ff": {
          "name": "nail polish: dark skin tone",
          "shortname": ":nail_care_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "care",
            "cosmetics",
            "dark skin tone",
            "manicure",
            "nail",
            "polish"
          ],
          "unicode_output": "1f485-1f3ff"
        },
        "1f933": {
          "name": "selfie",
          "shortname": ":selfie:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "phone",
            "selfie"
          ],
          "unicode_output": "1f933"
        },
        "1f933-1f3fb": {
          "name": "selfie: light skin tone",
          "shortname": ":selfie_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "light skin tone",
            "phone",
            "selfie"
          ],
          "unicode_output": "1f933-1f3fb"
        },
        "1f933-1f3fc": {
          "name": "selfie: medium-light skin tone",
          "shortname": ":selfie_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "medium-light skin tone",
            "phone",
            "selfie"
          ],
          "unicode_output": "1f933-1f3fc"
        },
        "1f933-1f3fd": {
          "name": "selfie: medium skin tone",
          "shortname": ":selfie_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "medium skin tone",
            "phone",
            "selfie"
          ],
          "unicode_output": "1f933-1f3fd"
        },
        "1f933-1f3fe": {
          "name": "selfie: medium-dark skin tone",
          "shortname": ":selfie_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "medium-dark skin tone",
            "phone",
            "selfie"
          ],
          "unicode_output": "1f933-1f3fe"
        },
        "1f933-1f3ff": {
          "name": "selfie: dark skin tone",
          "shortname": ":selfie_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "camera",
            "dark skin tone",
            "phone",
            "selfie"
          ],
          "unicode_output": "1f933-1f3ff"
        },
        "1f483": {
          "name": "woman dancing",
          "shortname": ":dancer:",
          "shortname_alternates": [],
          "keywords": [
            "dancing",
            "woman"
          ],
          "unicode_output": "1f483"
        },
        "1f483-1f3fb": {
          "name": "woman dancing: light skin tone",
          "shortname": ":dancer_tone1:",
          "shortname_alternates": [],
          "keywords": [
            "dancing",
            "light skin tone",
            "woman"
          ],
          "unicode_output": "1f483-1f3fb"
        },
        "1f483-1f3fc": {
          "name": "woman dancing: medium-light skin tone",
          "shortname": ":dancer_tone2:",
          "shortname_alternates": [],
          "keywords": [
            "dancing",
            "medium-light skin tone",
            "woman"
          ],
          "unicode_output": "1f483-1f3fc"
        },
        "1f483-1f3fd": {
          "name": "woman dancing: medium skin tone",
          "shortname": ":dancer_tone3:",
          "shortname_alternates": [],
          "keywords": [
            "dancing",
            "medium skin tone",
            "woman"
          ],
          "unicode_output": "1f483-1f3fd"
        },
        "1f483-1f3fe": {
          "name": "woman dancing: medium-dark skin tone",
          "shortname": ":dancer_tone4:",
          "shortname_alternates": [],
          "keywords": [
            "dancing",
            "medium-dark skin tone",
            "woman"
          ],
          "unicode_output": "1f483-1f3fe"
        },
        "1f483-1f3ff": {
          "name": "woman dancing: dark skin tone",
          "shortname": ":dancer_tone5:",
          "shortname_alternates": [],
          "keywords": [
            "dancing",
            "dark skin tone",
            "woman"
          ],
          "unicode_output": "1f483-1f3ff"
        },
        "1f57a": {
          "name": "man dancing",
          "shortname": ":man_dancing:",
          "shortname_alternates": [
            ":male_dancer:"
          ],
          "keywords": [
            "dance",
            "man"
          ],
          "unicode_output": "1f57a"
        },
        "1f57a-1f3fb": {
          "name": "man dancing: light skin tone",
          "shortname": ":man_dancing_tone1:",
          "shortname_alternates": [
            ":male_dancer_tone1:"
          ],
          "keywords": [
            "dance",
            "light skin tone",
            "man"
          ],
          "unicode_output": "1f57a-1f3fb"
        },
        "1f57a-1f3fc": {
          "name": "man dancing: medium-light skin tone",
          "shortname": ":man_dancing_tone2:",
          "shortname_alternates": [
            ":male_dancer_tone2:"
          ],
          "keywords": [
            "dance",
            "man",
            "medium-light skin tone"
          ],
          "unicode_output": "1f57a-1f3fc"
        },
        "1f57a-1f3fd": {
          "name": "man dancing: medium skin tone",
          "shortname": ":man_dancing_tone3:",
          "shortname_alternates": [
            ":male_dancer_tone3:"
          ],
          "keywords": [
            "dance",
            "man",
            "medium skin tone"
          ],
          "unicode_output": "1f57a-1f3fd"
        },
        "1f57a-1f3ff": {
          "name": "man dancing: dark skin tone",
          "shortname": ":man_dancing_tone5:",
          "shortname_alternates": [
            ":male_dancer_tone5:"
          ],
          "keywords": [
            "dance",
            "dark skin tone",
            "man"
          ],
          "unicode_output": "1f57a-1f3ff"
        },
        "1f57a-1f3fe": {
          "name": "man dancing: medium-dark skin tone",
          "shortname": ":man_dancing_tone4:",
          "shortname_alternates": [
            ":male_dancer_tone4:"
          ],
          "keywords": [
            "dance",
            "man",
            "medium-dark skin tone"
          ],
          "unicode_output": "1f57a-1f3fe"
        },
        "1f46f": {
          "name": "people with bunny ears",
          "shortname": ":people_with_bunny_ears_partying:",
          "shortname_alternates": [
            ":dancers:"
          ],
          "keywords": [
            "bunny ear",
            "dancer",
            "partying"
          ],
          "unicode_output": "1f46f"
        },
        "1f46f-2640": {
          "name": "women with bunny ears",
          "shortname": ":women_with_bunny_ears_partying:",
          "shortname_alternates": [],
          "keywords": [
            "bunny ear",
            "dancer",
            "partying",
            "women"
          ],
          "unicode_output": "1f46f-200d-2640-fe0f"
        },
        "1f46f-2642": {
          "name": "men with bunny ears",
          "shortname": ":men_with_bunny_ears_partying:",
          "shortname_alternates": [],
          "keywords": [
            "bunny ear",
            "dancer",
            "men",
            "partying"
          ],
          "unicode_output": "1f46f-200d-2642-fe0f"
        },
        "1f574": {
          "name": "man in suit levitating",
          "shortname": ":levitate:",
          "shortname_alternates": [
            ":man_in_business_suit_levitating:"
          ],
          "keywords": [
            "business",
            "man",
            "suit"
          ],
          "unicode_output": "1f574"
        },
        "1f574-1f3fb": {
          "name": "man in suit levitating: light skin tone",
          "shortname": ":levitate_tone1:",
          "shortname_alternates": [
            ":man_in_business_suit_levitating_tone1:",
            ":man_in_business_suit_levitating_light_skin_tone:"
          ],
          "keywords": [
            "business",
            "light skin tone",
            "man",
            "suit"
          ],
          "unicode_output": "1f574-1f3fb"
        },
        "1f574-1f3fc": {
          "name": "man in suit levitating: medium-light skin tone",
          "shortname": ":levitate_tone2:",
          "shortname_alternates": [
            ":man_in_business_suit_levitating_tone2:",
            ":man_in_business_suit_levitating_medium_light_skin_tone:"
          ],
          "keywords": [
            "business",
            "man",
            "medium-light skin tone",
            "suit"
          ],
          "unicode_output": "1f574-1f3fc"
        },
        "1f574-1f3fd": {
          "name": "man in suit levitating: medium skin tone",
          "shortname": ":levitate_tone3:",
          "shortname_alternates": [
            ":man_in_business_suit_levitating_tone3:",
            ":man_in_business_suit_levitating_medium_skin_tone:"
          ],
          "keywords": [
            "business",
            "man",
            "medium skin tone",
            "suit"
          ],
          "unicode_output": "1f574-1f3fd"
        },
        "1f574-1f3fe": {
          "name": "man in suit levitating: medium-dark skin tone",
          "shortname": ":levitate_tone4:",
          "shortname_alternates": [
            ":man_in_business_suit_levitating_tone4:",
            ":man_in_business_suit_levitating_medium_dark_skin_tone:"
          ],
          "keywords": [
            "business",
            "man",
            "medium-dark skin tone",
            "suit"
          ],
          "unicode_output": "1f574-1f3fe"
        },
        "1f574-1f3ff": {
          "name": "man in suit levitating: dark skin tone",
          "shortname": ":levitate_tone5:",
          "shortname_alternates": [
            ":man_in_business_suit_levitating_tone5:",
            ":man_in_business_suit_levitating_dark_skin_tone:"
          ],
          "keywords": [
            "business",
            "dark skin tone",
            "man",
            "suit"
          ],
          "unicode_output": "1f574-1f3ff"
        },
        "1f6b6": {
          "name": "person walking",
          "shortname": ":person_walking:",
          "shortname_alternates": [
            ":walking:"
          ],
          "keywords": [
            "hike",
            "walk",
            "walking"
          ],
          "unicode_output": "1f6b6"
        },
        "1f6b6-1f3fb": {
          "name": "person walking: light skin tone",
          "shortname": ":person_walking_tone1:",
          "shortname_alternates": [
            ":walking_tone1:"
          ],
          "keywords": [
            "hike",
            "light skin tone",
            "walk",
            "walking"
          ],
          "unicode_output": "1f6b6-1f3fb"
        },
        "1f6b6-1f3fc": {
          "name": "person walking: medium-light skin tone",
          "shortname": ":person_walking_tone2:",
          "shortname_alternates": [
            ":walking_tone2:"
          ],
          "keywords": [
            "hike",
            "medium-light skin tone",
            "walk",
            "walking"
          ],
          "unicode_output": "1f6b6-1f3fc"
        },
        "1f6b6-1f3fd": {
          "name": "person walking: medium skin tone",
          "shortname": ":person_walking_tone3:",
          "shortname_alternates": [
            ":walking_tone3:"
          ],
          "keywords": [
            "hike",
            "medium skin tone",
            "walk",
            "walking"
          ],
          "unicode_output": "1f6b6-1f3fd"
        },
        "1f6b6-1f3fe": {
          "name": "person walking: medium-dark skin tone",
          "shortname": ":person_walking_tone4:",
          "shortname_alternates": [
            ":walking_tone4:"
          ],
          "keywords": [
            "hike",
            "medium-dark skin tone",
            "walk",
            "walking"
          ],
          "unicode_output": "1f6b6-1f3fe"
        },
        "1f6b6-1f3ff": {
          "name": "person walking: dark skin tone",
          "shortname": ":person_walking_tone5:",
          "shortname_alternates": [
            ":walking_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "hike",
            "walk",
            "walking"
          ],
          "unicode_output": "1f6b6-1f3ff"
        },
        "1f6b6-2640": {
          "name": "woman walking",
          "shortname": ":woman_walking:",
          "shortname_alternates": [],
          "keywords": [
            "hike",
            "walk",
            "woman"
          ],
          "unicode_output": "1f6b6-200d-2640-fe0f"
        },
        "1f6b6-1f3fb-2640": {
          "name": "woman walking: light skin tone",
          "shortname": ":woman_walking_tone1:",
          "shortname_alternates": [
            ":woman_walking_light_skin_tone:"
          ],
          "keywords": [
            "hike",
            "light skin tone",
            "walk",
            "woman"
          ],
          "unicode_output": "1f6b6-1f3fb-200d-2640-fe0f"
        },
        "1f6b6-1f3fc-2640": {
          "name": "woman walking: medium-light skin tone",
          "shortname": ":woman_walking_tone2:",
          "shortname_alternates": [
            ":woman_walking_medium_light_skin_tone:"
          ],
          "keywords": [
            "hike",
            "medium-light skin tone",
            "walk",
            "woman"
          ],
          "unicode_output": "1f6b6-1f3fc-200d-2640-fe0f"
        },
        "1f6b6-1f3fd-2640": {
          "name": "woman walking: medium skin tone",
          "shortname": ":woman_walking_tone3:",
          "shortname_alternates": [
            ":woman_walking_medium_skin_tone:"
          ],
          "keywords": [
            "hike",
            "medium skin tone",
            "walk",
            "woman"
          ],
          "unicode_output": "1f6b6-1f3fd-200d-2640-fe0f"
        },
        "1f6b6-1f3fe-2640": {
          "name": "woman walking: medium-dark skin tone",
          "shortname": ":woman_walking_tone4:",
          "shortname_alternates": [
            ":woman_walking_medium_dark_skin_tone:"
          ],
          "keywords": [
            "hike",
            "medium-dark skin tone",
            "walk",
            "woman"
          ],
          "unicode_output": "1f6b6-1f3fe-200d-2640-fe0f"
        },
        "1f6b6-1f3ff-2640": {
          "name": "woman walking: dark skin tone",
          "shortname": ":woman_walking_tone5:",
          "shortname_alternates": [
            ":woman_walking_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "hike",
            "walk",
            "woman"
          ],
          "unicode_output": "1f6b6-1f3ff-200d-2640-fe0f"
        },
        "1f6b6-2642": {
          "name": "man walking",
          "shortname": ":man_walking:",
          "shortname_alternates": [],
          "keywords": [
            "hike",
            "man",
            "walk"
          ],
          "unicode_output": "1f6b6-200d-2642-fe0f"
        },
        "1f6b6-1f3fb-2642": {
          "name": "man walking: light skin tone",
          "shortname": ":man_walking_tone1:",
          "shortname_alternates": [
            ":man_walking_light_skin_tone:"
          ],
          "keywords": [
            "hike",
            "light skin tone",
            "man",
            "walk"
          ],
          "unicode_output": "1f6b6-1f3fb-200d-2642-fe0f"
        },
        "1f6b6-1f3fc-2642": {
          "name": "man walking: medium-light skin tone",
          "shortname": ":man_walking_tone2:",
          "shortname_alternates": [
            ":man_walking_medium_light_skin_tone:"
          ],
          "keywords": [
            "hike",
            "man",
            "medium-light skin tone",
            "walk"
          ],
          "unicode_output": "1f6b6-1f3fc-200d-2642-fe0f"
        },
        "1f6b6-1f3fd-2642": {
          "name": "man walking: medium skin tone",
          "shortname": ":man_walking_tone3:",
          "shortname_alternates": [
            ":man_walking_medium_skin_tone:"
          ],
          "keywords": [
            "hike",
            "man",
            "medium skin tone",
            "walk"
          ],
          "unicode_output": "1f6b6-1f3fd-200d-2642-fe0f"
        },
        "1f6b6-1f3fe-2642": {
          "name": "man walking: medium-dark skin tone",
          "shortname": ":man_walking_tone4:",
          "shortname_alternates": [
            ":man_walking_medium_dark_skin_tone:"
          ],
          "keywords": [
            "hike",
            "man",
            "medium-dark skin tone",
            "walk"
          ],
          "unicode_output": "1f6b6-1f3fe-200d-2642-fe0f"
        },
        "1f6b6-1f3ff-2642": {
          "name": "man walking: dark skin tone",
          "shortname": ":man_walking_tone5:",
          "shortname_alternates": [
            ":man_walking_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "hike",
            "man",
            "walk"
          ],
          "unicode_output": "1f6b6-1f3ff-200d-2642-fe0f"
        },
        "1f3c3": {
          "name": "person running",
          "shortname": ":person_running:",
          "shortname_alternates": [
            ":runner:"
          ],
          "keywords": [
            "marathon",
            "running"
          ],
          "unicode_output": "1f3c3"
        },
        "1f3c3-1f3fb": {
          "name": "person running: light skin tone",
          "shortname": ":person_running_tone1:",
          "shortname_alternates": [
            ":runner_tone1:"
          ],
          "keywords": [
            "light skin tone",
            "marathon",
            "running"
          ],
          "unicode_output": "1f3c3-1f3fb"
        },
        "1f3c3-1f3fc": {
          "name": "person running: medium-light skin tone",
          "shortname": ":person_running_tone2:",
          "shortname_alternates": [
            ":runner_tone2:"
          ],
          "keywords": [
            "marathon",
            "medium-light skin tone",
            "running"
          ],
          "unicode_output": "1f3c3-1f3fc"
        },
        "1f3c3-1f3fd": {
          "name": "person running: medium skin tone",
          "shortname": ":person_running_tone3:",
          "shortname_alternates": [
            ":runner_tone3:"
          ],
          "keywords": [
            "marathon",
            "medium skin tone",
            "running"
          ],
          "unicode_output": "1f3c3-1f3fd"
        },
        "1f3c3-1f3fe": {
          "name": "person running: medium-dark skin tone",
          "shortname": ":person_running_tone4:",
          "shortname_alternates": [
            ":runner_tone4:"
          ],
          "keywords": [
            "marathon",
            "medium-dark skin tone",
            "running"
          ],
          "unicode_output": "1f3c3-1f3fe"
        },
        "1f3c3-1f3ff": {
          "name": "person running: dark skin tone",
          "shortname": ":person_running_tone5:",
          "shortname_alternates": [
            ":runner_tone5:"
          ],
          "keywords": [
            "dark skin tone",
            "marathon",
            "running"
          ],
          "unicode_output": "1f3c3-1f3ff"
        },
        "1f3c3-2640": {
          "name": "woman running",
          "shortname": ":woman_running:",
          "shortname_alternates": [],
          "keywords": [
            "marathon",
            "racing",
            "running",
            "woman"
          ],
          "unicode_output": "1f3c3-200d-2640-fe0f"
        },
        "1f3c3-1f3fb-2640": {
          "name": "woman running: light skin tone",
          "shortname": ":woman_running_tone1:",
          "shortname_alternates": [
            ":woman_running_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "marathon",
            "racing",
            "running",
            "woman"
          ],
          "unicode_output": "1f3c3-1f3fb-200d-2640-fe0f"
        },
        "1f3c3-1f3fc-2640": {
          "name": "woman running: medium-light skin tone",
          "shortname": ":woman_running_tone2:",
          "shortname_alternates": [
            ":woman_running_medium_light_skin_tone:"
          ],
          "keywords": [
            "marathon",
            "medium-light skin tone",
            "racing",
            "running",
            "woman"
          ],
          "unicode_output": "1f3c3-1f3fc-200d-2640-fe0f"
        },
        "1f3c3-1f3fd-2640": {
          "name": "woman running: medium skin tone",
          "shortname": ":woman_running_tone3:",
          "shortname_alternates": [
            ":woman_running_medium_skin_tone:"
          ],
          "keywords": [
            "marathon",
            "medium skin tone",
            "racing",
            "running",
            "woman"
          ],
          "unicode_output": "1f3c3-1f3fd-200d-2640-fe0f"
        },
        "1f3c3-1f3fe-2640": {
          "name": "woman running: medium-dark skin tone",
          "shortname": ":woman_running_tone4:",
          "shortname_alternates": [
            ":woman_running_medium_dark_skin_tone:"
          ],
          "keywords": [
            "marathon",
            "medium-dark skin tone",
            "racing",
            "running",
            "woman"
          ],
          "unicode_output": "1f3c3-1f3fe-200d-2640-fe0f"
        },
        "1f3c3-1f3ff-2640": {
          "name": "woman running: dark skin tone",
          "shortname": ":woman_running_tone5:",
          "shortname_alternates": [
            ":woman_running_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "marathon",
            "racing",
            "running",
            "woman"
          ],
          "unicode_output": "1f3c3-1f3ff-200d-2640-fe0f"
        },
        "1f3c3-2642": {
          "name": "man running",
          "shortname": ":man_running:",
          "shortname_alternates": [],
          "keywords": [
            "man",
            "marathon",
            "racing",
            "running"
          ],
          "unicode_output": "1f3c3-200d-2642-fe0f"
        },
        "1f3c3-1f3fb-2642": {
          "name": "man running: light skin tone",
          "shortname": ":man_running_tone1:",
          "shortname_alternates": [
            ":man_running_light_skin_tone:"
          ],
          "keywords": [
            "light skin tone",
            "man",
            "marathon",
            "racing",
            "running"
          ],
          "unicode_output": "1f3c3-1f3fb-200d-2642-fe0f"
        },
        "1f3c3-1f3fc-2642": {
          "name": "man running: medium-light skin tone",
          "shortname": ":man_running_tone2:",
          "shortname_alternates": [
            ":man_running_medium_light_skin_tone:"
          ],
          "keywords": [
            "man",
            "marathon",
            "medium-light skin tone",
            "racing",
            "running"
          ],
          "unicode_output": "1f3c3-1f3fc-200d-2642-fe0f"
        },
        "1f3c3-1f3fd-2642": {
          "name": "man running: medium skin tone",
          "shortname": ":man_running_tone3:",
          "shortname_alternates": [
            ":man_running_medium_skin_tone:"
          ],
          "keywords": [
            "man",
            "marathon",
            "medium skin tone",
            "racing",
            "running"
          ],
          "unicode_output": "1f3c3-1f3fd-200d-2642-fe0f"
        },
        "1f3c3-1f3fe-2642": {
          "name": "man running: medium-dark skin tone",
          "shortname": ":man_running_tone4:",
          "shortname_alternates": [
            ":man_running_medium_dark_skin_tone:"
          ],
          "keywords": [
            "man",
            "marathon",
            "medium-dark skin tone",
            "racing",
            "running"
          ],
          "unicode_output": "1f3c3-1f3fe-200d-2642-fe0f"
        },
        "1f3c3-1f3ff-2642": {
          "name": "man running: dark skin tone",
          "shortname": ":man_running_tone5:",
          "shortname_alternates": [
            ":man_running_dark_skin_tone:"
          ],
          "keywords": [
            "dark skin tone",
            "man",
            "marathon",
            "racing",
            "running"
          ],
          "unicode_output": "1f3c3-1f3ff-200d-2642-fe0f"
        },
        "1f46b": {
          "name": "man and woman holding hands",
          "shortname": ":couple:",
          "shortname_alternates": [],
          "keywords": [
            "couple",
            "hand",
            "hold",
            "man",
            "woman"
          ],
          "unicode_output": "1f46b"
        },
        "1f46d": {
          "name": "two women holding hands",
          "shortname": ":two_women_holding_hands:",
          "shortname_alternates": [],
          "keywords": [
            "couple",
            "hand",
            "hold",
            "woman"
          ],
          "unicode_output": "1f46d"
        },
        "1f46c": {
          "name": "two men holding hands",
          "shortname": ":two_men_holding_hands:",
          "shortname_alternates": [],
          "keywords": [
            "Gemini",
            "couple",
            "hand",
            "hold",
            "man",
            "twins",
            "zodiac"
          ],
          "unicode_output": "1f46c"
        },
        "1f491": {
          "name": "couple with heart",
          "shortname": ":couple_with_heart:",
          "shortname_alternates": [],
          "keywords": [
            "couple",
            "love"
          ],
          "unicode_output": "1f491"
        },
        "1f469-2764-1f468": {
          "name": "couple with heart: woman, man",
          "shortname": ":couple_with_heart_woman_man:",
          "shortname_alternates": [],
          "keywords": [
            "couple",
            "love",
            "man",
            "woman"
          ],
          "unicode_output": "1f469-200d-2764-fe0f-200d-1f468"
        },
        "1f469-2764-1f469": {
          "name": "couple with heart: woman, woman",
          "shortname": ":couple_ww:",
          "shortname_alternates": [
            ":couple_with_heart_ww:"
          ],
          "keywords": [
            "couple",
            "love",
            "woman"
          ],
          "unicode_output": "1f469-200d-2764-fe0f-200d-1f469"
        },
        "1f468-2764-1f468": {
          "name": "couple with heart: man, man",
          "shortname": ":couple_mm:",
          "shortname_alternates": [
            ":couple_with_heart_mm:"
          ],
          "keywords": [
            "couple",
            "love",
            "man"
          ],
          "unicode_output": "1f468-200d-2764-fe0f-200d-1f468"
        },
        "1f48f": {
          "name": "kiss",
          "shortname": ":couplekiss:",
          "shortname_alternates": [],
          "keywords": [
            "couple"
          ],
          "unicode_output": "1f48f"
        },
        "1f469-2764-1f48b-1f468": {
          "name": "kiss: woman, man",
          "shortname": ":kiss_woman_man:",
          "shortname_alternates": [],
          "keywords": [
            "couple",
            "man",
            "woman"
          ],
          "unicode_output": "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468"
        },
        "1f469-2764-1f48b-1f469": {
          "name": "kiss: woman, woman",
          "shortname": ":kiss_ww:",
          "shortname_alternates": [
            ":couplekiss_ww:"
          ],
          "keywords": [
            "couple",
            "woman"
          ],
          "unicode_output": "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469"
        },
        "1f468-2764-1f48b-1f468": {
          "name": "kiss: man, man",
          "shortname": ":kiss_mm:",
          "shortname_alternates": [
            ":couplekiss_mm:"
          ],
          "keywords": [
            "couple",
            "man"
          ],
          "unicode_output": "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468"
        },
        "1f46a": {
          "name": "family",
          "shortname": ":family:",
          "shortname_alternates": [],
          "keywords": [
            "family"
          ],
          "unicode_output": "1f46a"
        },
        "1f468-1f469-1f466": {
          "name": "family: man, woman, boy",
          "shortname": ":family_man_woman_boy:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "man",
            "woman"
          ],
          "unicode_output": "1f468-200d-1f469-200d-1f466"
        },
        "1f468-1f469-1f467": {
          "name": "family: man, woman, girl",
          "shortname": ":family_mwg:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "man",
            "woman"
          ],
          "unicode_output": "1f468-200d-1f469-200d-1f467"
        },
        "1f468-1f469-1f467-1f466": {
          "name": "family: man, woman, girl, boy",
          "shortname": ":family_mwgb:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "girl",
            "man",
            "woman"
          ],
          "unicode_output": "1f468-200d-1f469-200d-1f467-200d-1f466"
        },
        "1f468-1f469-1f466-1f466": {
          "name": "family: man, woman, boy, boy",
          "shortname": ":family_mwbb:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "man",
            "woman"
          ],
          "unicode_output": "1f468-200d-1f469-200d-1f466-200d-1f466"
        },
        "1f468-1f469-1f467-1f467": {
          "name": "family: man, woman, girl, girl",
          "shortname": ":family_mwgg:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "man",
            "woman"
          ],
          "unicode_output": "1f468-200d-1f469-200d-1f467-200d-1f467"
        },
        "1f469-1f469-1f466": {
          "name": "family: woman, woman, boy",
          "shortname": ":family_wwb:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f469-200d-1f466"
        },
        "1f469-1f469-1f467": {
          "name": "family: woman, woman, girl",
          "shortname": ":family_wwg:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f469-200d-1f467"
        },
        "1f469-1f469-1f467-1f466": {
          "name": "family: woman, woman, girl, boy",
          "shortname": ":family_wwgb:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "girl",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f469-200d-1f467-200d-1f466"
        },
        "1f469-1f469-1f466-1f466": {
          "name": "family: woman, woman, boy, boy",
          "shortname": ":family_wwbb:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f469-200d-1f466-200d-1f466"
        },
        "1f469-1f469-1f467-1f467": {
          "name": "family: woman, woman, girl, girl",
          "shortname": ":family_wwgg:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f469-200d-1f467-200d-1f467"
        },
        "1f468-1f468-1f466": {
          "name": "family: man, man, boy",
          "shortname": ":family_mmb:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "man"
          ],
          "unicode_output": "1f468-200d-1f468-200d-1f466"
        },
        "1f468-1f468-1f467": {
          "name": "family: man, man, girl",
          "shortname": ":family_mmg:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "man"
          ],
          "unicode_output": "1f468-200d-1f468-200d-1f467"
        },
        "1f468-1f468-1f467-1f466": {
          "name": "family: man, man, girl, boy",
          "shortname": ":family_mmgb:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "girl",
            "man"
          ],
          "unicode_output": "1f468-200d-1f468-200d-1f467-200d-1f466"
        },
        "1f468-1f468-1f466-1f466": {
          "name": "family: man, man, boy, boy",
          "shortname": ":family_mmbb:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "man"
          ],
          "unicode_output": "1f468-200d-1f468-200d-1f466-200d-1f466"
        },
        "1f468-1f468-1f467-1f467": {
          "name": "family: man, man, girl, girl",
          "shortname": ":family_mmgg:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "man"
          ],
          "unicode_output": "1f468-200d-1f468-200d-1f467-200d-1f467"
        },
        "1f469-1f466": {
          "name": "family: woman, boy",
          "shortname": ":family_woman_boy:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f466"
        },
        "1f469-1f467": {
          "name": "family: woman, girl",
          "shortname": ":family_woman_girl:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f467"
        },
        "1f469-1f467-1f466": {
          "name": "family: woman, girl, boy",
          "shortname": ":family_woman_girl_boy:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "girl",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f467-200d-1f466"
        },
        "1f469-1f466-1f466": {
          "name": "family: woman, boy, boy",
          "shortname": ":family_woman_boy_boy:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f466-200d-1f466"
        },
        "1f469-1f467-1f467": {
          "name": "family: woman, girl, girl",
          "shortname": ":family_woman_girl_girl:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "woman"
          ],
          "unicode_output": "1f469-200d-1f467-200d-1f467"
        },
        "1f468-1f466": {
          "name": "family: man, boy",
          "shortname": ":family_man_boy:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "man"
          ],
          "unicode_output": "1f468-200d-1f466"
        },
        "1f468-1f467": {
          "name": "family: man, girl",
          "shortname": ":family_man_girl:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "man"
          ],
          "unicode_output": "1f468-200d-1f467"
        },
        "1f468-1f467-1f466": {
          "name": "family: man, girl, boy",
          "shortname": ":family_man_girl_boy:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "girl",
            "man"
          ],
          "unicode_output": "1f468-200d-1f467-200d-1f466"
        },
        "1f468-1f466-1f466": {
          "name": "family: man, boy, boy",
          "shortname": ":family_man_boy_boy:",
          "shortname_alternates": [],
          "keywords": [
            "boy",
            "family",
            "man"
          ],
          "unicode_output": "1f468-200d-1f466-200d-1f466"
        },
        "1f468-1f467-1f467": {
          "name": "family: man, girl, girl",
          "shortname": ":family_man_girl_girl:",
          "shortname_alternates": [],
          "keywords": [
            "family",
            "girl",
            "man"
          ],
          "unicode_output": "1f468-200d-1f467-200d-1f467"
        },
        "1f9e5": {
          "name": "coat",
          "shortname": ":coat:",
          "shortname_alternates": [],
          "keywords": [
            "jacket"
          ],
          "unicode_output": "1f9e5"
        },
        "1f45a": {
          "name": "woman’s clothes",
          "shortname": ":womans_clothes:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "woman"
          ],
          "unicode_output": "1f45a"
        },
        "1f455": {
          "name": "t-shirt",
          "shortname": ":shirt:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "shirt",
            "tshirt"
          ],
          "unicode_output": "1f455"
        },
        "1f456": {
          "name": "jeans",
          "shortname": ":jeans:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "pants",
            "trousers"
          ],
          "unicode_output": "1f456"
        },
        "1f454": {
          "name": "necktie",
          "shortname": ":necktie:",
          "shortname_alternates": [],
          "keywords": [
            "clothing"
          ],
          "unicode_output": "1f454"
        },
        "1f457": {
          "name": "dress",
          "shortname": ":dress:",
          "shortname_alternates": [],
          "keywords": [
            "clothing"
          ],
          "unicode_output": "1f457"
        },
        "1f459": {
          "name": "bikini",
          "shortname": ":bikini:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "swim"
          ],
          "unicode_output": "1f459"
        },
        "1f458": {
          "name": "kimono",
          "shortname": ":kimono:",
          "shortname_alternates": [],
          "keywords": [
            "clothing"
          ],
          "unicode_output": "1f458"
        },
        "1f97c": {
          "name": "lab coat",
          "shortname": ":lab_coat:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f97c"
        },
        "1f460": {
          "name": "high-heeled shoe",
          "shortname": ":high_heel:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "heel",
            "shoe",
            "woman"
          ],
          "unicode_output": "1f460"
        },
        "1f461": {
          "name": "woman’s sandal",
          "shortname": ":sandal:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "sandal",
            "shoe",
            "woman"
          ],
          "unicode_output": "1f461"
        },
        "1f462": {
          "name": "woman’s boot",
          "shortname": ":boot:",
          "shortname_alternates": [],
          "keywords": [
            "boot",
            "clothing",
            "shoe",
            "woman"
          ],
          "unicode_output": "1f462"
        },
        "1f45e": {
          "name": "man’s shoe",
          "shortname": ":mans_shoe:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "man",
            "shoe"
          ],
          "unicode_output": "1f45e"
        },
        "1f45f": {
          "name": "running shoe",
          "shortname": ":athletic_shoe:",
          "shortname_alternates": [],
          "keywords": [
            "athletic",
            "clothing",
            "shoe",
            "sneaker"
          ],
          "unicode_output": "1f45f"
        },
        "1f97e": {
          "name": "hiking boot",
          "shortname": ":hiking_boot:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f97e"
        },
        "1f97f": {
          "name": "woman’s flat shoe",
          "shortname": ":womans_flat_shoe:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f97f"
        },
        "1f9e6": {
          "name": "socks",
          "shortname": ":socks:",
          "shortname_alternates": [],
          "keywords": [
            "stocking"
          ],
          "unicode_output": "1f9e6"
        },
        "1f9e4": {
          "name": "gloves",
          "shortname": ":gloves:",
          "shortname_alternates": [],
          "keywords": [
            "hand"
          ],
          "unicode_output": "1f9e4"
        },
        "1f9e3": {
          "name": "scarf",
          "shortname": ":scarf:",
          "shortname_alternates": [],
          "keywords": [
            "neck"
          ],
          "unicode_output": "1f9e3"
        },
        "1f3a9": {
          "name": "top hat",
          "shortname": ":tophat:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "hat",
            "top",
            "tophat"
          ],
          "unicode_output": "1f3a9"
        },
        "1f9e2": {
          "name": "billed cap",
          "shortname": ":billed_cap:",
          "shortname_alternates": [],
          "keywords": [
            "baseball cap"
          ],
          "unicode_output": "1f9e2"
        },
        "1f452": {
          "name": "woman’s hat",
          "shortname": ":womans_hat:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "hat",
            "woman"
          ],
          "unicode_output": "1f452"
        },
        "1f393": {
          "name": "graduation cap",
          "shortname": ":mortar_board:",
          "shortname_alternates": [],
          "keywords": [
            "cap",
            "celebration",
            "clothing",
            "graduation",
            "hat"
          ],
          "unicode_output": "1f393"
        },
        "26d1": {
          "name": "rescue worker’s helmet",
          "shortname": ":helmet_with_cross:",
          "shortname_alternates": [
            ":helmet_with_white_cross:"
          ],
          "keywords": [
            "aid",
            "cross",
            "face",
            "hat",
            "helmet"
          ],
          "unicode_output": "26d1"
        },
        "1f451": {
          "name": "crown",
          "shortname": ":crown:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "king",
            "queen"
          ],
          "unicode_output": "1f451"
        },
        "1f45d": {
          "name": "clutch bag",
          "shortname": ":pouch:",
          "shortname_alternates": [],
          "keywords": [
            "bag",
            "clothing",
            "pouch"
          ],
          "unicode_output": "1f45d"
        },
        "1f45b": {
          "name": "purse",
          "shortname": ":purse:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "coin"
          ],
          "unicode_output": "1f45b"
        },
        "1f45c": {
          "name": "handbag",
          "shortname": ":handbag:",
          "shortname_alternates": [],
          "keywords": [
            "bag",
            "clothing",
            "purse"
          ],
          "unicode_output": "1f45c"
        },
        "1f4bc": {
          "name": "briefcase",
          "shortname": ":briefcase:",
          "shortname_alternates": [],
          "keywords": [
            "briefcase"
          ],
          "unicode_output": "1f4bc"
        },
        "1f392": {
          "name": "school backpack",
          "shortname": ":school_satchel:",
          "shortname_alternates": [],
          "keywords": [
            "bag",
            "satchel",
            "school"
          ],
          "unicode_output": "1f392"
        },
        "1f453": {
          "name": "glasses",
          "shortname": ":eyeglasses:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "eye",
            "eyeglasses",
            "eyewear"
          ],
          "unicode_output": "1f453"
        },
        "1f576": {
          "name": "sunglasses",
          "shortname": ":dark_sunglasses:",
          "shortname_alternates": [],
          "keywords": [
            "dark",
            "eye",
            "eyewear",
            "glasses"
          ],
          "unicode_output": "1f576"
        },
        "1f97d": {
          "name": "goggles",
          "shortname": ":goggles:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f97d"
        },
        "1f302": {
          "name": "closed umbrella",
          "shortname": ":closed_umbrella:",
          "shortname_alternates": [],
          "keywords": [
            "clothing",
            "rain",
            "umbrella"
          ],
          "unicode_output": "1f302"
        },
        "1f9b0": {
          "name": "red-haired",
          "shortname": ":red_haired:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b0"
        },
        "1f9b1": {
          "name": "curly-haired",
          "shortname": ":curly_haired:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b1"
        },
        "1f9b3": {
          "name": "white-haired",
          "shortname": ":white_haired:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b3"
        },
        "1f9b2": {
          "name": "bald",
          "shortname": ":bald:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9b2"
        },
        "1f1ff": {
          "name": "regional indicator symbol letter z",
          "shortname": ":regional_indicator_z:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1ff"
        },
        "1f1fe": {
          "name": "regional indicator symbol letter y",
          "shortname": ":regional_indicator_y:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1fe"
        },
        "1f1fd": {
          "name": "regional indicator symbol letter x",
          "shortname": ":regional_indicator_x:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1fd"
        },
        "1f1fc": {
          "name": "regional indicator symbol letter w",
          "shortname": ":regional_indicator_w:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1fc"
        },
        "1f1fb": {
          "name": "regional indicator symbol letter v",
          "shortname": ":regional_indicator_v:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1fb"
        },
        "1f1fa": {
          "name": "regional indicator symbol letter u",
          "shortname": ":regional_indicator_u:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1fa"
        },
        "1f1f9": {
          "name": "regional indicator symbol letter t",
          "shortname": ":regional_indicator_t:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f9"
        },
        "1f1f8": {
          "name": "regional indicator symbol letter s",
          "shortname": ":regional_indicator_s:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f8"
        },
        "1f1f7": {
          "name": "regional indicator symbol letter r",
          "shortname": ":regional_indicator_r:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f7"
        },
        "1f1f6": {
          "name": "regional indicator symbol letter q",
          "shortname": ":regional_indicator_q:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f6"
        },
        "1f1f5": {
          "name": "regional indicator symbol letter p",
          "shortname": ":regional_indicator_p:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f5"
        },
        "1f1f4": {
          "name": "regional indicator symbol letter o",
          "shortname": ":regional_indicator_o:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f4"
        },
        "1f1f3": {
          "name": "regional indicator symbol letter n",
          "shortname": ":regional_indicator_n:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f3"
        },
        "1f1f2": {
          "name": "regional indicator symbol letter m",
          "shortname": ":regional_indicator_m:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f2"
        },
        "1f1f1": {
          "name": "regional indicator symbol letter l",
          "shortname": ":regional_indicator_l:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f1"
        },
        "1f1f0": {
          "name": "regional indicator symbol letter k",
          "shortname": ":regional_indicator_k:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1f0"
        },
        "1f1ef": {
          "name": "regional indicator symbol letter j",
          "shortname": ":regional_indicator_j:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1ef"
        },
        "1f1ee": {
          "name": "regional indicator symbol letter i",
          "shortname": ":regional_indicator_i:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1ee"
        },
        "1f1ed": {
          "name": "regional indicator symbol letter h",
          "shortname": ":regional_indicator_h:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1ed"
        },
        "1f1ec": {
          "name": "regional indicator symbol letter g",
          "shortname": ":regional_indicator_g:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1ec"
        },
        "1f1eb": {
          "name": "regional indicator symbol letter f",
          "shortname": ":regional_indicator_f:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1eb"
        },
        "1f1ea": {
          "name": "regional indicator symbol letter e",
          "shortname": ":regional_indicator_e:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1ea"
        },
        "1f1e9": {
          "name": "regional indicator symbol letter d",
          "shortname": ":regional_indicator_d:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1e9"
        },
        "1f1e8": {
          "name": "regional indicator symbol letter c",
          "shortname": ":regional_indicator_c:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1e8"
        },
        "1f1e7": {
          "name": "regional indicator symbol letter b",
          "shortname": ":regional_indicator_b:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1e7"
        },
        "1f1e6": {
          "name": "regional indicator symbol letter a",
          "shortname": ":regional_indicator_a:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f1e6"
        },
        "1f697": {
          "name": "automobile",
          "shortname": ":red_car:",
          "shortname_alternates": [],
          "keywords": [
            "car"
          ],
          "unicode_output": "1f697"
        },
        "1f695": {
          "name": "taxi",
          "shortname": ":taxi:",
          "shortname_alternates": [],
          "keywords": [
            "vehicle"
          ],
          "unicode_output": "1f695"
        },
        "1f699": {
          "name": "sport utility vehicle",
          "shortname": ":blue_car:",
          "shortname_alternates": [],
          "keywords": [
            "recreational",
            "sport utility"
          ],
          "unicode_output": "1f699"
        },
        "1f68c": {
          "name": "bus",
          "shortname": ":bus:",
          "shortname_alternates": [],
          "keywords": [
            "vehicle"
          ],
          "unicode_output": "1f68c"
        },
        "1f68e": {
          "name": "trolleybus",
          "shortname": ":trolleybus:",
          "shortname_alternates": [],
          "keywords": [
            "bus",
            "tram",
            "trolley"
          ],
          "unicode_output": "1f68e"
        },
        "1f3ce": {
          "name": "racing car",
          "shortname": ":race_car:",
          "shortname_alternates": [
            ":racing_car:"
          ],
          "keywords": [
            "car",
            "racing"
          ],
          "unicode_output": "1f3ce"
        },
        "1f693": {
          "name": "police car",
          "shortname": ":police_car:",
          "shortname_alternates": [],
          "keywords": [
            "car",
            "patrol",
            "police"
          ],
          "unicode_output": "1f693"
        },
        "1f691": {
          "name": "ambulance",
          "shortname": ":ambulance:",
          "shortname_alternates": [],
          "keywords": [
            "vehicle"
          ],
          "unicode_output": "1f691"
        },
        "1f692": {
          "name": "fire engine",
          "shortname": ":fire_engine:",
          "shortname_alternates": [],
          "keywords": [
            "engine",
            "fire",
            "truck"
          ],
          "unicode_output": "1f692"
        },
        "1f690": {
          "name": "minibus",
          "shortname": ":minibus:",
          "shortname_alternates": [],
          "keywords": [
            "bus"
          ],
          "unicode_output": "1f690"
        },
        "1f69a": {
          "name": "delivery truck",
          "shortname": ":truck:",
          "shortname_alternates": [],
          "keywords": [
            "delivery",
            "truck"
          ],
          "unicode_output": "1f69a"
        },
        "1f69b": {
          "name": "articulated lorry",
          "shortname": ":articulated_lorry:",
          "shortname_alternates": [],
          "keywords": [
            "lorry",
            "semi",
            "truck"
          ],
          "unicode_output": "1f69b"
        },
        "1f69c": {
          "name": "tractor",
          "shortname": ":tractor:",
          "shortname_alternates": [],
          "keywords": [
            "vehicle"
          ],
          "unicode_output": "1f69c"
        },
        "1f6f4": {
          "name": "kick scooter",
          "shortname": ":scooter:",
          "shortname_alternates": [],
          "keywords": [
            "kick",
            "scooter"
          ],
          "unicode_output": "1f6f4"
        },
        "1f6b2": {
          "name": "bicycle",
          "shortname": ":bike:",
          "shortname_alternates": [],
          "keywords": [
            "bike"
          ],
          "unicode_output": "1f6b2"
        },
        "1f6f5": {
          "name": "motor scooter",
          "shortname": ":motor_scooter:",
          "shortname_alternates": [
            ":motorbike:"
          ],
          "keywords": [
            "motor",
            "scooter"
          ],
          "unicode_output": "1f6f5"
        },
        "1f3cd": {
          "name": "motorcycle",
          "shortname": ":motorcycle:",
          "shortname_alternates": [
            ":racing_motorcycle:"
          ],
          "keywords": [
            "racing"
          ],
          "unicode_output": "1f3cd"
        },
        "1f6a8": {
          "name": "police car light",
          "shortname": ":rotating_light:",
          "shortname_alternates": [],
          "keywords": [
            "beacon",
            "car",
            "light",
            "police",
            "revolving"
          ],
          "unicode_output": "1f6a8"
        },
        "1f694": {
          "name": "oncoming police car",
          "shortname": ":oncoming_police_car:",
          "shortname_alternates": [],
          "keywords": [
            "car",
            "oncoming",
            "police"
          ],
          "unicode_output": "1f694"
        },
        "1f68d": {
          "name": "oncoming bus",
          "shortname": ":oncoming_bus:",
          "shortname_alternates": [],
          "keywords": [
            "bus",
            "oncoming"
          ],
          "unicode_output": "1f68d"
        },
        "1f698": {
          "name": "oncoming automobile",
          "shortname": ":oncoming_automobile:",
          "shortname_alternates": [],
          "keywords": [
            "automobile",
            "car",
            "oncoming"
          ],
          "unicode_output": "1f698"
        },
        "1f696": {
          "name": "oncoming taxi",
          "shortname": ":oncoming_taxi:",
          "shortname_alternates": [],
          "keywords": [
            "oncoming",
            "taxi"
          ],
          "unicode_output": "1f696"
        },
        "1f6a1": {
          "name": "aerial tramway",
          "shortname": ":aerial_tramway:",
          "shortname_alternates": [],
          "keywords": [
            "aerial",
            "cable",
            "car",
            "gondola",
            "tramway"
          ],
          "unicode_output": "1f6a1"
        },
        "1f6a0": {
          "name": "mountain cableway",
          "shortname": ":mountain_cableway:",
          "shortname_alternates": [],
          "keywords": [
            "cable",
            "gondola",
            "mountain"
          ],
          "unicode_output": "1f6a0"
        },
        "1f69f": {
          "name": "suspension railway",
          "shortname": ":suspension_railway:",
          "shortname_alternates": [],
          "keywords": [
            "railway",
            "suspension"
          ],
          "unicode_output": "1f69f"
        },
        "1f683": {
          "name": "railway car",
          "shortname": ":railway_car:",
          "shortname_alternates": [],
          "keywords": [
            "car",
            "electric",
            "railway",
            "train",
            "tram",
            "trolleybus"
          ],
          "unicode_output": "1f683"
        },
        "1f68b": {
          "name": "tram car",
          "shortname": ":train:",
          "shortname_alternates": [],
          "keywords": [
            "car",
            "tram",
            "trolleybus"
          ],
          "unicode_output": "1f68b"
        },
        "1f69e": {
          "name": "mountain railway",
          "shortname": ":mountain_railway:",
          "shortname_alternates": [],
          "keywords": [
            "car",
            "mountain",
            "railway"
          ],
          "unicode_output": "1f69e"
        },
        "1f69d": {
          "name": "monorail",
          "shortname": ":monorail:",
          "shortname_alternates": [],
          "keywords": [
            "vehicle"
          ],
          "unicode_output": "1f69d"
        },
        "1f684": {
          "name": "high-speed train",
          "shortname": ":bullettrain_side:",
          "shortname_alternates": [],
          "keywords": [
            "railway",
            "shinkansen",
            "speed",
            "train"
          ],
          "unicode_output": "1f684"
        },
        "1f685": {
          "name": "bullet train",
          "shortname": ":bullettrain_front:",
          "shortname_alternates": [],
          "keywords": [
            "bullet",
            "railway",
            "shinkansen",
            "speed",
            "train"
          ],
          "unicode_output": "1f685"
        },
        "1f688": {
          "name": "light rail",
          "shortname": ":light_rail:",
          "shortname_alternates": [],
          "keywords": [
            "railway"
          ],
          "unicode_output": "1f688"
        },
        "1f682": {
          "name": "locomotive",
          "shortname": ":steam_locomotive:",
          "shortname_alternates": [],
          "keywords": [
            "engine",
            "railway",
            "steam",
            "train"
          ],
          "unicode_output": "1f682"
        },
        "1f686": {
          "name": "train",
          "shortname": ":train2:",
          "shortname_alternates": [],
          "keywords": [
            "railway"
          ],
          "unicode_output": "1f686"
        },
        "1f687": {
          "name": "metro",
          "shortname": ":metro:",
          "shortname_alternates": [],
          "keywords": [
            "subway"
          ],
          "unicode_output": "1f687"
        },
        "1f68a": {
          "name": "tram",
          "shortname": ":tram:",
          "shortname_alternates": [],
          "keywords": [
            "trolleybus"
          ],
          "unicode_output": "1f68a"
        },
        "1f689": {
          "name": "station",
          "shortname": ":station:",
          "shortname_alternates": [],
          "keywords": [
            "railway",
            "train"
          ],
          "unicode_output": "1f689"
        },
        "2708": {
          "name": "airplane",
          "shortname": ":airplane:",
          "shortname_alternates": [],
          "keywords": [
            "aeroplane",
            "airplane"
          ],
          "unicode_output": "2708"
        },
        "1f6eb": {
          "name": "airplane departure",
          "shortname": ":airplane_departure:",
          "shortname_alternates": [],
          "keywords": [
            "aeroplane",
            "airplane",
            "check-in",
            "departure",
            "departures"
          ],
          "unicode_output": "1f6eb"
        },
        "1f6ec": {
          "name": "airplane arrival",
          "shortname": ":airplane_arriving:",
          "shortname_alternates": [],
          "keywords": [
            "aeroplane",
            "airplane",
            "arrivals",
            "arriving",
            "landing"
          ],
          "unicode_output": "1f6ec"
        },
        "1f6e9": {
          "name": "small airplane",
          "shortname": ":airplane_small:",
          "shortname_alternates": [
            ":small_airplane:"
          ],
          "keywords": [
            "aeroplane",
            "airplane"
          ],
          "unicode_output": "1f6e9"
        },
        "1f4ba": {
          "name": "seat",
          "shortname": ":seat:",
          "shortname_alternates": [],
          "keywords": [
            "chair"
          ],
          "unicode_output": "1f4ba"
        },
        "1f9f3": {
          "name": "luggage",
          "shortname": ":luggage:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9f3"
        },
        "1f6f0": {
          "name": "satellite",
          "shortname": ":satellite_orbital:",
          "shortname_alternates": [],
          "keywords": [
            "space"
          ],
          "unicode_output": "1f6f0"
        },
        "1f680": {
          "name": "rocket",
          "shortname": ":rocket:",
          "shortname_alternates": [],
          "keywords": [
            "space"
          ],
          "unicode_output": "1f680"
        },
        "1f6f8": {
          "name": "flying saucer",
          "shortname": ":flying_saucer:",
          "shortname_alternates": [],
          "keywords": [
            "UFO"
          ],
          "unicode_output": "1f6f8"
        },
        "1f681": {
          "name": "helicopter",
          "shortname": ":helicopter:",
          "shortname_alternates": [],
          "keywords": [
            "vehicle"
          ],
          "unicode_output": "1f681"
        },
        "1f6f6": {
          "name": "canoe",
          "shortname": ":canoe:",
          "shortname_alternates": [
            ":kayak:"
          ],
          "keywords": [
            "boat",
            "canoe"
          ],
          "unicode_output": "1f6f6"
        },
        "26f5": {
          "name": "sailboat",
          "shortname": ":sailboat:",
          "shortname_alternates": [],
          "keywords": [
            "boat",
            "resort",
            "sea",
            "yacht"
          ],
          "unicode_output": "26f5"
        },
        "1f6a4": {
          "name": "speedboat",
          "shortname": ":speedboat:",
          "shortname_alternates": [],
          "keywords": [
            "boat"
          ],
          "unicode_output": "1f6a4"
        },
        "1f6e5": {
          "name": "motor boat",
          "shortname": ":motorboat:",
          "shortname_alternates": [],
          "keywords": [
            "boat",
            "motorboat"
          ],
          "unicode_output": "1f6e5"
        },
        "1f6f3": {
          "name": "passenger ship",
          "shortname": ":cruise_ship:",
          "shortname_alternates": [
            ":passenger_ship:"
          ],
          "keywords": [
            "passenger",
            "ship"
          ],
          "unicode_output": "1f6f3"
        },
        "26f4": {
          "name": "ferry",
          "shortname": ":ferry:",
          "shortname_alternates": [],
          "keywords": [
            "boat",
            "passenger"
          ],
          "unicode_output": "26f4"
        },
        "1f6a2": {
          "name": "ship",
          "shortname": ":ship:",
          "shortname_alternates": [],
          "keywords": [
            "boat",
            "passenger"
          ],
          "unicode_output": "1f6a2"
        },
        "2693": {
          "name": "anchor",
          "shortname": ":anchor:",
          "shortname_alternates": [],
          "keywords": [
            "ship",
            "tool"
          ],
          "unicode_output": "2693"
        },
        "26fd": {
          "name": "fuel pump",
          "shortname": ":fuelpump:",
          "shortname_alternates": [],
          "keywords": [
            "fuel",
            "fuelpump",
            "gas",
            "pump",
            "station"
          ],
          "unicode_output": "26fd"
        },
        "1f6a7": {
          "name": "construction",
          "shortname": ":construction:",
          "shortname_alternates": [],
          "keywords": [
            "barrier"
          ],
          "unicode_output": "1f6a7"
        },
        "1f6a6": {
          "name": "vertical traffic light",
          "shortname": ":vertical_traffic_light:",
          "shortname_alternates": [],
          "keywords": [
            "light",
            "signal",
            "traffic"
          ],
          "unicode_output": "1f6a6"
        },
        "1f6a5": {
          "name": "horizontal traffic light",
          "shortname": ":traffic_light:",
          "shortname_alternates": [],
          "keywords": [
            "light",
            "signal",
            "traffic"
          ],
          "unicode_output": "1f6a5"
        },
        "1f68f": {
          "name": "bus stop",
          "shortname": ":busstop:",
          "shortname_alternates": [],
          "keywords": [
            "bus",
            "busstop",
            "stop"
          ],
          "unicode_output": "1f68f"
        },
        "1f5fa": {
          "name": "world map",
          "shortname": ":map:",
          "shortname_alternates": [
            ":world_map:"
          ],
          "keywords": [
            "map",
            "world"
          ],
          "unicode_output": "1f5fa"
        },
        "1f5ff": {
          "name": "moai",
          "shortname": ":moyai:",
          "shortname_alternates": [],
          "keywords": [
            "face",
            "moyai",
            "statue"
          ],
          "unicode_output": "1f5ff"
        },
        "1f5fd": {
          "name": "Statue of Liberty",
          "shortname": ":statue_of_liberty:",
          "shortname_alternates": [],
          "keywords": [
            "liberty",
            "statue"
          ],
          "unicode_output": "1f5fd"
        },
        "1f5fc": {
          "name": "Tokyo tower",
          "shortname": ":tokyo_tower:",
          "shortname_alternates": [],
          "keywords": [
            "Tokyo",
            "tower"
          ],
          "unicode_output": "1f5fc"
        },
        "1f3f0": {
          "name": "castle",
          "shortname": ":european_castle:",
          "shortname_alternates": [],
          "keywords": [
            "European"
          ],
          "unicode_output": "1f3f0"
        },
        "1f3ef": {
          "name": "Japanese castle",
          "shortname": ":japanese_castle:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "castle"
          ],
          "unicode_output": "1f3ef"
        },
        "1f3df": {
          "name": "stadium",
          "shortname": ":stadium:",
          "shortname_alternates": [],
          "keywords": [
            "stadium"
          ],
          "unicode_output": "1f3df"
        },
        "1f3a1": {
          "name": "ferris wheel",
          "shortname": ":ferris_wheel:",
          "shortname_alternates": [],
          "keywords": [
            "amusement park",
            "ferris",
            "wheel"
          ],
          "unicode_output": "1f3a1"
        },
        "1f3a2": {
          "name": "roller coaster",
          "shortname": ":roller_coaster:",
          "shortname_alternates": [],
          "keywords": [
            "amusement park",
            "coaster",
            "roller"
          ],
          "unicode_output": "1f3a2"
        },
        "1f3a0": {
          "name": "carousel horse",
          "shortname": ":carousel_horse:",
          "shortname_alternates": [],
          "keywords": [
            "carousel",
            "horse"
          ],
          "unicode_output": "1f3a0"
        },
        "26f2": {
          "name": "fountain",
          "shortname": ":fountain:",
          "shortname_alternates": [],
          "keywords": [
            "fountain"
          ],
          "unicode_output": "26f2"
        },
        "26f1": {
          "name": "umbrella on ground",
          "shortname": ":beach_umbrella:",
          "shortname_alternates": [
            ":umbrella_on_ground:"
          ],
          "keywords": [
            "rain",
            "sun",
            "umbrella"
          ],
          "unicode_output": "26f1"
        },
        "1f3d6": {
          "name": "beach with umbrella",
          "shortname": ":beach:",
          "shortname_alternates": [
            ":beach_with_umbrella:"
          ],
          "keywords": [
            "beach",
            "umbrella"
          ],
          "unicode_output": "1f3d6"
        },
        "1f3dd": {
          "name": "desert island",
          "shortname": ":island:",
          "shortname_alternates": [
            ":desert_island:"
          ],
          "keywords": [
            "desert",
            "island"
          ],
          "unicode_output": "1f3dd"
        },
        "1f3dc": {
          "name": "desert",
          "shortname": ":desert:",
          "shortname_alternates": [],
          "keywords": [
            "desert"
          ],
          "unicode_output": "1f3dc"
        },
        "1f30b": {
          "name": "volcano",
          "shortname": ":volcano:",
          "shortname_alternates": [],
          "keywords": [
            "eruption",
            "mountain"
          ],
          "unicode_output": "1f30b"
        },
        "26f0": {
          "name": "mountain",
          "shortname": ":mountain:",
          "shortname_alternates": [],
          "keywords": [
            "mountain"
          ],
          "unicode_output": "26f0"
        },
        "1f3d4": {
          "name": "snow-capped mountain",
          "shortname": ":mountain_snow:",
          "shortname_alternates": [
            ":snow_capped_mountain:"
          ],
          "keywords": [
            "cold",
            "mountain",
            "snow"
          ],
          "unicode_output": "1f3d4"
        },
        "1f5fb": {
          "name": "mount fuji",
          "shortname": ":mount_fuji:",
          "shortname_alternates": [],
          "keywords": [
            "fuji",
            "mountain"
          ],
          "unicode_output": "1f5fb"
        },
        "1f3d5": {
          "name": "camping",
          "shortname": ":camping:",
          "shortname_alternates": [],
          "keywords": [
            "camping"
          ],
          "unicode_output": "1f3d5"
        },
        "26fa": {
          "name": "tent",
          "shortname": ":tent:",
          "shortname_alternates": [],
          "keywords": [
            "camping"
          ],
          "unicode_output": "26fa"
        },
        "1f3e0": {
          "name": "house",
          "shortname": ":house:",
          "shortname_alternates": [],
          "keywords": [
            "home",
            "house"
          ],
          "unicode_output": "1f3e0"
        },
        "1f3e1": {
          "name": "house with garden",
          "shortname": ":house_with_garden:",
          "shortname_alternates": [],
          "keywords": [
            "garden",
            "home",
            "house"
          ],
          "unicode_output": "1f3e1"
        },
        "1f3d8": {
          "name": "houses",
          "shortname": ":homes:",
          "shortname_alternates": [
            ":house_buildings:"
          ],
          "keywords": [
            "houses"
          ],
          "unicode_output": "1f3d8"
        },
        "1f3da": {
          "name": "derelict house",
          "shortname": ":house_abandoned:",
          "shortname_alternates": [
            ":derelict_house_building:"
          ],
          "keywords": [
            "derelict",
            "house"
          ],
          "unicode_output": "1f3da"
        },
        "1f3d7": {
          "name": "building construction",
          "shortname": ":construction_site:",
          "shortname_alternates": [
            ":building_construction:"
          ],
          "keywords": [
            "construction"
          ],
          "unicode_output": "1f3d7"
        },
        "1f3ed": {
          "name": "factory",
          "shortname": ":factory:",
          "shortname_alternates": [],
          "keywords": [
            "building"
          ],
          "unicode_output": "1f3ed"
        },
        "1f3e2": {
          "name": "office building",
          "shortname": ":office:",
          "shortname_alternates": [],
          "keywords": [
            "building"
          ],
          "unicode_output": "1f3e2"
        },
        "1f3ec": {
          "name": "department store",
          "shortname": ":department_store:",
          "shortname_alternates": [],
          "keywords": [
            "department",
            "store"
          ],
          "unicode_output": "1f3ec"
        },
        "1f3e3": {
          "name": "Japanese post office",
          "shortname": ":post_office:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "post"
          ],
          "unicode_output": "1f3e3"
        },
        "1f3e4": {
          "name": "post office",
          "shortname": ":european_post_office:",
          "shortname_alternates": [],
          "keywords": [
            "European",
            "post"
          ],
          "unicode_output": "1f3e4"
        },
        "1f3e5": {
          "name": "hospital",
          "shortname": ":hospital:",
          "shortname_alternates": [],
          "keywords": [
            "doctor",
            "medicine"
          ],
          "unicode_output": "1f3e5"
        },
        "1f3e6": {
          "name": "bank",
          "shortname": ":bank:",
          "shortname_alternates": [],
          "keywords": [
            "building"
          ],
          "unicode_output": "1f3e6"
        },
        "1f3e8": {
          "name": "hotel",
          "shortname": ":hotel:",
          "shortname_alternates": [],
          "keywords": [
            "building"
          ],
          "unicode_output": "1f3e8"
        },
        "1f3ea": {
          "name": "convenience store",
          "shortname": ":convenience_store:",
          "shortname_alternates": [],
          "keywords": [
            "convenience",
            "store"
          ],
          "unicode_output": "1f3ea"
        },
        "1f3eb": {
          "name": "school",
          "shortname": ":school:",
          "shortname_alternates": [],
          "keywords": [
            "building"
          ],
          "unicode_output": "1f3eb"
        },
        "1f3e9": {
          "name": "love hotel",
          "shortname": ":love_hotel:",
          "shortname_alternates": [],
          "keywords": [
            "hotel",
            "love"
          ],
          "unicode_output": "1f3e9"
        },
        "1f492": {
          "name": "wedding",
          "shortname": ":wedding:",
          "shortname_alternates": [],
          "keywords": [
            "chapel",
            "romance"
          ],
          "unicode_output": "1f492"
        },
        "1f3db": {
          "name": "classical building",
          "shortname": ":classical_building:",
          "shortname_alternates": [],
          "keywords": [
            "classical"
          ],
          "unicode_output": "1f3db"
        },
        "26ea": {
          "name": "church",
          "shortname": ":church:",
          "shortname_alternates": [],
          "keywords": [
            "Christian",
            "cross",
            "religion"
          ],
          "unicode_output": "26ea"
        },
        "1f54c": {
          "name": "mosque",
          "shortname": ":mosque:",
          "shortname_alternates": [],
          "keywords": [
            "Muslim",
            "islam",
            "religion"
          ],
          "unicode_output": "1f54c"
        },
        "1f54d": {
          "name": "synagogue",
          "shortname": ":synagogue:",
          "shortname_alternates": [],
          "keywords": [
            "Jew",
            "Jewish",
            "religion",
            "temple"
          ],
          "unicode_output": "1f54d"
        },
        "1f54b": {
          "name": "kaaba",
          "shortname": ":kaaba:",
          "shortname_alternates": [],
          "keywords": [
            "Muslim",
            "islam",
            "religion"
          ],
          "unicode_output": "1f54b"
        },
        "26e9": {
          "name": "shinto shrine",
          "shortname": ":shinto_shrine:",
          "shortname_alternates": [],
          "keywords": [
            "religion",
            "shinto",
            "shrine"
          ],
          "unicode_output": "26e9"
        },
        "1f6e4": {
          "name": "railway track",
          "shortname": ":railway_track:",
          "shortname_alternates": [
            ":railroad_track:"
          ],
          "keywords": [
            "railway",
            "train"
          ],
          "unicode_output": "1f6e4"
        },
        "1f6e3": {
          "name": "motorway",
          "shortname": ":motorway:",
          "shortname_alternates": [],
          "keywords": [
            "highway",
            "road"
          ],
          "unicode_output": "1f6e3"
        },
        "1f5fe": {
          "name": "map of Japan",
          "shortname": ":japan:",
          "shortname_alternates": [],
          "keywords": [
            "Japan",
            "map"
          ],
          "unicode_output": "1f5fe"
        },
        "1f391": {
          "name": "moon viewing ceremony",
          "shortname": ":rice_scene:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "ceremony",
            "moon"
          ],
          "unicode_output": "1f391"
        },
        "1f3de": {
          "name": "national park",
          "shortname": ":park:",
          "shortname_alternates": [
            ":national_park:"
          ],
          "keywords": [
            "park"
          ],
          "unicode_output": "1f3de"
        },
        "1f305": {
          "name": "sunrise",
          "shortname": ":sunrise:",
          "shortname_alternates": [],
          "keywords": [
            "morning",
            "sun"
          ],
          "unicode_output": "1f305"
        },
        "1f304": {
          "name": "sunrise over mountains",
          "shortname": ":sunrise_over_mountains:",
          "shortname_alternates": [],
          "keywords": [
            "morning",
            "mountain",
            "sun",
            "sunrise"
          ],
          "unicode_output": "1f304"
        },
        "1f320": {
          "name": "shooting star",
          "shortname": ":stars:",
          "shortname_alternates": [],
          "keywords": [
            "falling",
            "shooting",
            "star"
          ],
          "unicode_output": "1f320"
        },
        "1f387": {
          "name": "sparkler",
          "shortname": ":sparkler:",
          "shortname_alternates": [],
          "keywords": [
            "celebration",
            "fireworks",
            "sparkle"
          ],
          "unicode_output": "1f387"
        },
        "1f386": {
          "name": "fireworks",
          "shortname": ":fireworks:",
          "shortname_alternates": [],
          "keywords": [
            "celebration"
          ],
          "unicode_output": "1f386"
        },
        "1f9e8": {
          "name": "firecracker",
          "shortname": ":firecracker:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f9e8"
        },
        "1f307": {
          "name": "sunset",
          "shortname": ":city_sunset:",
          "shortname_alternates": [
            ":city_sunrise:"
          ],
          "keywords": [
            "dusk",
            "sun"
          ],
          "unicode_output": "1f307"
        },
        "1f306": {
          "name": "cityscape at dusk",
          "shortname": ":city_dusk:",
          "shortname_alternates": [],
          "keywords": [
            "city",
            "dusk",
            "evening",
            "landscape",
            "sun",
            "sunset"
          ],
          "unicode_output": "1f306"
        },
        "1f3d9": {
          "name": "cityscape",
          "shortname": ":cityscape:",
          "shortname_alternates": [],
          "keywords": [
            "city"
          ],
          "unicode_output": "1f3d9"
        },
        "1f303": {
          "name": "night with stars",
          "shortname": ":night_with_stars:",
          "shortname_alternates": [],
          "keywords": [
            "night",
            "star"
          ],
          "unicode_output": "1f303"
        },
        "1f30c": {
          "name": "milky way",
          "shortname": ":milky_way:",
          "shortname_alternates": [],
          "keywords": [
            "space"
          ],
          "unicode_output": "1f30c"
        },
        "1f309": {
          "name": "bridge at night",
          "shortname": ":bridge_at_night:",
          "shortname_alternates": [],
          "keywords": [
            "bridge",
            "night"
          ],
          "unicode_output": "1f309"
        },
        "1f512": {
          "name": "locked",
          "shortname": ":lock:",
          "shortname_alternates": [],
          "keywords": [
            "closed"
          ],
          "unicode_output": "1f512"
        },
        "1f513": {
          "name": "unlocked",
          "shortname": ":unlock:",
          "shortname_alternates": [],
          "keywords": [
            "lock",
            "open",
            "unlock"
          ],
          "unicode_output": "1f513"
        },
        "1f301": {
          "name": "foggy",
          "shortname": ":foggy:",
          "shortname_alternates": [],
          "keywords": [
            "fog"
          ],
          "unicode_output": "1f301"
        },
        "1f3f3": {
          "name": "white flag",
          "shortname": ":flag_white:",
          "shortname_alternates": [
            ":waving_white_flag:"
          ],
          "keywords": [
            "waving"
          ],
          "unicode_output": "1f3f3"
        },
        "1f3f4": {
          "name": "black flag",
          "shortname": ":flag_black:",
          "shortname_alternates": [
            ":waving_black_flag:"
          ],
          "keywords": [
            "waving"
          ],
          "unicode_output": "1f3f4"
        },
        "1f3c1": {
          "name": "chequered flag",
          "shortname": ":checkered_flag:",
          "shortname_alternates": [],
          "keywords": [
            "checkered",
            "chequered",
            "racing"
          ],
          "unicode_output": "1f3c1"
        },
        "1f6a9": {
          "name": "triangular flag",
          "shortname": ":triangular_flag_on_post:",
          "shortname_alternates": [],
          "keywords": [
            "post"
          ],
          "unicode_output": "1f6a9"
        },
        "1f3f3-1f308": {
          "name": "rainbow flag",
          "shortname": ":rainbow_flag:",
          "shortname_alternates": [
            ":gay_pride_flag:"
          ],
          "keywords": [
            "rainbow"
          ],
          "unicode_output": "1f3f3-fe0f-200d-1f308"
        },
        "1f3f4-2620": {
          "name": "pirate flag",
          "shortname": ":pirate_flag:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f3f4-200d-2620-fe0f"
        },
        "1f1e6-1f1eb": {
          "name": "Afghanistan",
          "shortname": ":flag_af:",
          "shortname_alternates": [
            ":af:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1eb"
        },
        "1f1e6-1f1fd": {
          "name": "Åland Islands",
          "shortname": ":flag_ax:",
          "shortname_alternates": [
            ":ax:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1fd"
        },
        "1f1e6-1f1f1": {
          "name": "Albania",
          "shortname": ":flag_al:",
          "shortname_alternates": [
            ":al:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1f1"
        },
        "1f1e9-1f1ff": {
          "name": "Algeria",
          "shortname": ":flag_dz:",
          "shortname_alternates": [
            ":dz:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e9-1f1ff"
        },
        "1f1e6-1f1f8": {
          "name": "American Samoa",
          "shortname": ":flag_as:",
          "shortname_alternates": [
            ":as:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1f8"
        },
        "1f1e6-1f1e9": {
          "name": "Andorra",
          "shortname": ":flag_ad:",
          "shortname_alternates": [
            ":ad:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1e9"
        },
        "1f1e6-1f1f4": {
          "name": "Angola",
          "shortname": ":flag_ao:",
          "shortname_alternates": [
            ":ao:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1f4"
        },
        "1f1e6-1f1ee": {
          "name": "Anguilla",
          "shortname": ":flag_ai:",
          "shortname_alternates": [
            ":ai:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1ee"
        },
        "1f1e6-1f1f6": {
          "name": "Antarctica",
          "shortname": ":flag_aq:",
          "shortname_alternates": [
            ":aq:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1f6"
        },
        "1f1e6-1f1ec": {
          "name": "Antigua & Barbuda",
          "shortname": ":flag_ag:",
          "shortname_alternates": [
            ":ag:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1ec"
        },
        "1f1e6-1f1f7": {
          "name": "Argentina",
          "shortname": ":flag_ar:",
          "shortname_alternates": [
            ":ar:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1f7"
        },
        "1f1e6-1f1f2": {
          "name": "Armenia",
          "shortname": ":flag_am:",
          "shortname_alternates": [
            ":am:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1f2"
        },
        "1f1e6-1f1fc": {
          "name": "Aruba",
          "shortname": ":flag_aw:",
          "shortname_alternates": [
            ":aw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1fc"
        },
        "1f1e6-1f1fa": {
          "name": "Australia",
          "shortname": ":flag_au:",
          "shortname_alternates": [
            ":au:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1fa"
        },
        "1f1e6-1f1f9": {
          "name": "Austria",
          "shortname": ":flag_at:",
          "shortname_alternates": [
            ":at:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1f9"
        },
        "1f1e6-1f1ff": {
          "name": "Azerbaijan",
          "shortname": ":flag_az:",
          "shortname_alternates": [
            ":az:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1ff"
        },
        "1f1e7-1f1f8": {
          "name": "Bahamas",
          "shortname": ":flag_bs:",
          "shortname_alternates": [
            ":bs:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1f8"
        },
        "1f1e7-1f1ed": {
          "name": "Bahrain",
          "shortname": ":flag_bh:",
          "shortname_alternates": [
            ":bh:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1ed"
        },
        "1f1e7-1f1e9": {
          "name": "Bangladesh",
          "shortname": ":flag_bd:",
          "shortname_alternates": [
            ":bd:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1e9"
        },
        "1f1e7-1f1e7": {
          "name": "Barbados",
          "shortname": ":flag_bb:",
          "shortname_alternates": [
            ":bb:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1e7"
        },
        "1f1e7-1f1fe": {
          "name": "Belarus",
          "shortname": ":flag_by:",
          "shortname_alternates": [
            ":by:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1fe"
        },
        "1f1e7-1f1ea": {
          "name": "Belgium",
          "shortname": ":flag_be:",
          "shortname_alternates": [
            ":be:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1ea"
        },
        "1f1e7-1f1ff": {
          "name": "Belize",
          "shortname": ":flag_bz:",
          "shortname_alternates": [
            ":bz:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1ff"
        },
        "1f1e7-1f1ef": {
          "name": "Benin",
          "shortname": ":flag_bj:",
          "shortname_alternates": [
            ":bj:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1ef"
        },
        "1f1e7-1f1f2": {
          "name": "Bermuda",
          "shortname": ":flag_bm:",
          "shortname_alternates": [
            ":bm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1f2"
        },
        "1f1e7-1f1f9": {
          "name": "Bhutan",
          "shortname": ":flag_bt:",
          "shortname_alternates": [
            ":bt:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1f9"
        },
        "1f1e7-1f1f4": {
          "name": "Bolivia",
          "shortname": ":flag_bo:",
          "shortname_alternates": [
            ":bo:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1f4"
        },
        "1f1e7-1f1e6": {
          "name": "Bosnia & Herzegovina",
          "shortname": ":flag_ba:",
          "shortname_alternates": [
            ":ba:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1e6"
        },
        "1f1e7-1f1fc": {
          "name": "Botswana",
          "shortname": ":flag_bw:",
          "shortname_alternates": [
            ":bw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1fc"
        },
        "1f1e7-1f1f7": {
          "name": "Brazil",
          "shortname": ":flag_br:",
          "shortname_alternates": [
            ":br:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1f7"
        },
        "1f1ee-1f1f4": {
          "name": "British Indian Ocean Territory",
          "shortname": ":flag_io:",
          "shortname_alternates": [
            ":io:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1f4"
        },
        "1f1fb-1f1ec": {
          "name": "British Virgin Islands",
          "shortname": ":flag_vg:",
          "shortname_alternates": [
            ":vg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fb-1f1ec"
        },
        "1f1e7-1f1f3": {
          "name": "Brunei",
          "shortname": ":flag_bn:",
          "shortname_alternates": [
            ":bn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1f3"
        },
        "1f1e7-1f1ec": {
          "name": "Bulgaria",
          "shortname": ":flag_bg:",
          "shortname_alternates": [
            ":bg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1ec"
        },
        "1f1e7-1f1eb": {
          "name": "Burkina Faso",
          "shortname": ":flag_bf:",
          "shortname_alternates": [
            ":bf:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1eb"
        },
        "1f1e7-1f1ee": {
          "name": "Burundi",
          "shortname": ":flag_bi:",
          "shortname_alternates": [
            ":bi:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1ee"
        },
        "1f1f0-1f1ed": {
          "name": "Cambodia",
          "shortname": ":flag_kh:",
          "shortname_alternates": [
            ":kh:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1ed"
        },
        "1f1e8-1f1f2": {
          "name": "Cameroon",
          "shortname": ":flag_cm:",
          "shortname_alternates": [
            ":cm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1f2"
        },
        "1f1e8-1f1e6": {
          "name": "Canada",
          "shortname": ":flag_ca:",
          "shortname_alternates": [
            ":ca:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1e6"
        },
        "1f1ee-1f1e8": {
          "name": "Canary Islands",
          "shortname": ":flag_ic:",
          "shortname_alternates": [
            ":ic:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1e8"
        },
        "1f1e8-1f1fb": {
          "name": "Cape Verde",
          "shortname": ":flag_cv:",
          "shortname_alternates": [
            ":cv:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1fb"
        },
        "1f1e7-1f1f6": {
          "name": "Caribbean Netherlands",
          "shortname": ":flag_bq:",
          "shortname_alternates": [
            ":bq:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1f6"
        },
        "1f1f0-1f1fe": {
          "name": "Cayman Islands",
          "shortname": ":flag_ky:",
          "shortname_alternates": [
            ":ky:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1fe"
        },
        "1f1e8-1f1eb": {
          "name": "Central African Republic",
          "shortname": ":flag_cf:",
          "shortname_alternates": [
            ":cf:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1eb"
        },
        "1f1f9-1f1e9": {
          "name": "Chad",
          "shortname": ":flag_td:",
          "shortname_alternates": [
            ":td:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1e9"
        },
        "1f1e8-1f1f1": {
          "name": "Chile",
          "shortname": ":flag_cl:",
          "shortname_alternates": [
            ":chile:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1f1"
        },
        "1f1e8-1f1f3": {
          "name": "China",
          "shortname": ":flag_cn:",
          "shortname_alternates": [
            ":cn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1f3"
        },
        "1f1e8-1f1fd": {
          "name": "Christmas Island",
          "shortname": ":flag_cx:",
          "shortname_alternates": [
            ":cx:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1fd"
        },
        "1f1e8-1f1e8": {
          "name": "Cocos (Keeling) Islands",
          "shortname": ":flag_cc:",
          "shortname_alternates": [
            ":cc:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1e8"
        },
        "1f1e8-1f1f4": {
          "name": "Colombia",
          "shortname": ":flag_co:",
          "shortname_alternates": [
            ":co:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1f4"
        },
        "1f1f0-1f1f2": {
          "name": "Comoros",
          "shortname": ":flag_km:",
          "shortname_alternates": [
            ":km:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1f2"
        },
        "1f1e8-1f1ec": {
          "name": "Congo - Brazzaville",
          "shortname": ":flag_cg:",
          "shortname_alternates": [
            ":cg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1ec"
        },
        "1f1e8-1f1e9": {
          "name": "Congo - Kinshasa",
          "shortname": ":flag_cd:",
          "shortname_alternates": [
            ":congo:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1e9"
        },
        "1f1e8-1f1f0": {
          "name": "Cook Islands",
          "shortname": ":flag_ck:",
          "shortname_alternates": [
            ":ck:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1f0"
        },
        "1f1e8-1f1f7": {
          "name": "Costa Rica",
          "shortname": ":flag_cr:",
          "shortname_alternates": [
            ":cr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1f7"
        },
        "1f1e8-1f1ee": {
          "name": "Côte d’Ivoire",
          "shortname": ":flag_ci:",
          "shortname_alternates": [
            ":ci:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1ee"
        },
        "1f1ed-1f1f7": {
          "name": "Croatia",
          "shortname": ":flag_hr:",
          "shortname_alternates": [
            ":hr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ed-1f1f7"
        },
        "1f1e8-1f1fa": {
          "name": "Cuba",
          "shortname": ":flag_cu:",
          "shortname_alternates": [
            ":cu:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1fa"
        },
        "1f1e8-1f1fc": {
          "name": "Curaçao",
          "shortname": ":flag_cw:",
          "shortname_alternates": [
            ":cw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1fc"
        },
        "1f1e8-1f1fe": {
          "name": "Cyprus",
          "shortname": ":flag_cy:",
          "shortname_alternates": [
            ":cy:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1fe"
        },
        "1f1e8-1f1ff": {
          "name": "Czechia",
          "shortname": ":flag_cz:",
          "shortname_alternates": [
            ":cz:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1ff"
        },
        "1f1e9-1f1f0": {
          "name": "Denmark",
          "shortname": ":flag_dk:",
          "shortname_alternates": [
            ":dk:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e9-1f1f0"
        },
        "1f1e9-1f1ef": {
          "name": "Djibouti",
          "shortname": ":flag_dj:",
          "shortname_alternates": [
            ":dj:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e9-1f1ef"
        },
        "1f1e9-1f1f2": {
          "name": "Dominica",
          "shortname": ":flag_dm:",
          "shortname_alternates": [
            ":dm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e9-1f1f2"
        },
        "1f1e9-1f1f4": {
          "name": "Dominican Republic",
          "shortname": ":flag_do:",
          "shortname_alternates": [
            ":do:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e9-1f1f4"
        },
        "1f1ea-1f1e8": {
          "name": "Ecuador",
          "shortname": ":flag_ec:",
          "shortname_alternates": [
            ":ec:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ea-1f1e8"
        },
        "1f1ea-1f1ec": {
          "name": "Egypt",
          "shortname": ":flag_eg:",
          "shortname_alternates": [
            ":eg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ea-1f1ec"
        },
        "1f1f8-1f1fb": {
          "name": "El Salvador",
          "shortname": ":flag_sv:",
          "shortname_alternates": [
            ":sv:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1fb"
        },
        "1f1ec-1f1f6": {
          "name": "Equatorial Guinea",
          "shortname": ":flag_gq:",
          "shortname_alternates": [
            ":gq:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1f6"
        },
        "1f1ea-1f1f7": {
          "name": "Eritrea",
          "shortname": ":flag_er:",
          "shortname_alternates": [
            ":er:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ea-1f1f7"
        },
        "1f1ea-1f1ea": {
          "name": "Estonia",
          "shortname": ":flag_ee:",
          "shortname_alternates": [
            ":ee:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ea-1f1ea"
        },
        "1f1ea-1f1f9": {
          "name": "Ethiopia",
          "shortname": ":flag_et:",
          "shortname_alternates": [
            ":et:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ea-1f1f9"
        },
        "1f1ea-1f1fa": {
          "name": "European Union",
          "shortname": ":flag_eu:",
          "shortname_alternates": [
            ":eu:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ea-1f1fa"
        },
        "1f1eb-1f1f0": {
          "name": "Falkland Islands",
          "shortname": ":flag_fk:",
          "shortname_alternates": [
            ":fk:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1eb-1f1f0"
        },
        "1f1eb-1f1f4": {
          "name": "Faroe Islands",
          "shortname": ":flag_fo:",
          "shortname_alternates": [
            ":fo:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1eb-1f1f4"
        },
        "1f1eb-1f1ef": {
          "name": "Fiji",
          "shortname": ":flag_fj:",
          "shortname_alternates": [
            ":fj:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1eb-1f1ef"
        },
        "1f1eb-1f1ee": {
          "name": "Finland",
          "shortname": ":flag_fi:",
          "shortname_alternates": [
            ":fi:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1eb-1f1ee"
        },
        "1f1eb-1f1f7": {
          "name": "France",
          "shortname": ":flag_fr:",
          "shortname_alternates": [
            ":fr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1eb-1f1f7"
        },
        "1f1ec-1f1eb": {
          "name": "French Guiana",
          "shortname": ":flag_gf:",
          "shortname_alternates": [
            ":gf:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1eb"
        },
        "1f1f5-1f1eb": {
          "name": "French Polynesia",
          "shortname": ":flag_pf:",
          "shortname_alternates": [
            ":pf:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1eb"
        },
        "1f1f9-1f1eb": {
          "name": "French Southern Territories",
          "shortname": ":flag_tf:",
          "shortname_alternates": [
            ":tf:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1eb"
        },
        "1f1ec-1f1e6": {
          "name": "Gabon",
          "shortname": ":flag_ga:",
          "shortname_alternates": [
            ":ga:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1e6"
        },
        "1f1ec-1f1f2": {
          "name": "Gambia",
          "shortname": ":flag_gm:",
          "shortname_alternates": [
            ":gm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1f2"
        },
        "1f1ec-1f1ea": {
          "name": "Georgia",
          "shortname": ":flag_ge:",
          "shortname_alternates": [
            ":ge:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1ea"
        },
        "1f1e9-1f1ea": {
          "name": "Germany",
          "shortname": ":flag_de:",
          "shortname_alternates": [
            ":de:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e9-1f1ea"
        },
        "1f1ec-1f1ed": {
          "name": "Ghana",
          "shortname": ":flag_gh:",
          "shortname_alternates": [
            ":gh:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1ed"
        },
        "1f1ec-1f1ee": {
          "name": "Gibraltar",
          "shortname": ":flag_gi:",
          "shortname_alternates": [
            ":gi:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1ee"
        },
        "1f1ec-1f1f7": {
          "name": "Greece",
          "shortname": ":flag_gr:",
          "shortname_alternates": [
            ":gr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1f7"
        },
        "1f1ec-1f1f1": {
          "name": "Greenland",
          "shortname": ":flag_gl:",
          "shortname_alternates": [
            ":gl:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1f1"
        },
        "1f1ec-1f1e9": {
          "name": "Grenada",
          "shortname": ":flag_gd:",
          "shortname_alternates": [
            ":gd:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1e9"
        },
        "1f1ec-1f1f5": {
          "name": "Guadeloupe",
          "shortname": ":flag_gp:",
          "shortname_alternates": [
            ":gp:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1f5"
        },
        "1f1ec-1f1fa": {
          "name": "Guam",
          "shortname": ":flag_gu:",
          "shortname_alternates": [
            ":gu:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1fa"
        },
        "1f1ec-1f1f9": {
          "name": "Guatemala",
          "shortname": ":flag_gt:",
          "shortname_alternates": [
            ":gt:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1f9"
        },
        "1f1ec-1f1ec": {
          "name": "Guernsey",
          "shortname": ":flag_gg:",
          "shortname_alternates": [
            ":gg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1ec"
        },
        "1f1ec-1f1f3": {
          "name": "Guinea",
          "shortname": ":flag_gn:",
          "shortname_alternates": [
            ":gn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1f3"
        },
        "1f1ec-1f1fc": {
          "name": "Guinea-Bissau",
          "shortname": ":flag_gw:",
          "shortname_alternates": [
            ":gw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1fc"
        },
        "1f1ec-1f1fe": {
          "name": "Guyana",
          "shortname": ":flag_gy:",
          "shortname_alternates": [
            ":gy:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1fe"
        },
        "1f1ed-1f1f9": {
          "name": "Haiti",
          "shortname": ":flag_ht:",
          "shortname_alternates": [
            ":ht:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ed-1f1f9"
        },
        "1f1ed-1f1f3": {
          "name": "Honduras",
          "shortname": ":flag_hn:",
          "shortname_alternates": [
            ":hn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ed-1f1f3"
        },
        "1f1ed-1f1f0": {
          "name": "Hong Kong SAR China",
          "shortname": ":flag_hk:",
          "shortname_alternates": [
            ":hk:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ed-1f1f0"
        },
        "1f1ed-1f1fa": {
          "name": "Hungary",
          "shortname": ":flag_hu:",
          "shortname_alternates": [
            ":hu:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ed-1f1fa"
        },
        "1f1ee-1f1f8": {
          "name": "Iceland",
          "shortname": ":flag_is:",
          "shortname_alternates": [
            ":is:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1f8"
        },
        "1f1ee-1f1f3": {
          "name": "India",
          "shortname": ":flag_in:",
          "shortname_alternates": [
            ":in:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1f3"
        },
        "1f1ee-1f1e9": {
          "name": "Indonesia",
          "shortname": ":flag_id:",
          "shortname_alternates": [
            ":indonesia:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1e9"
        },
        "1f1ee-1f1f7": {
          "name": "Iran",
          "shortname": ":flag_ir:",
          "shortname_alternates": [
            ":ir:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1f7"
        },
        "1f1ee-1f1f6": {
          "name": "Iraq",
          "shortname": ":flag_iq:",
          "shortname_alternates": [
            ":iq:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1f6"
        },
        "1f1ee-1f1ea": {
          "name": "Ireland",
          "shortname": ":flag_ie:",
          "shortname_alternates": [
            ":ie:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1ea"
        },
        "1f1ee-1f1f2": {
          "name": "Isle of Man",
          "shortname": ":flag_im:",
          "shortname_alternates": [
            ":im:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1f2"
        },
        "1f1ee-1f1f1": {
          "name": "Israel",
          "shortname": ":flag_il:",
          "shortname_alternates": [
            ":il:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1f1"
        },
        "1f1ee-1f1f9": {
          "name": "Italy",
          "shortname": ":flag_it:",
          "shortname_alternates": [
            ":it:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ee-1f1f9"
        },
        "1f1ef-1f1f2": {
          "name": "Jamaica",
          "shortname": ":flag_jm:",
          "shortname_alternates": [
            ":jm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ef-1f1f2"
        },
        "1f1ef-1f1f5": {
          "name": "Japan",
          "shortname": ":flag_jp:",
          "shortname_alternates": [
            ":jp:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ef-1f1f5"
        },
        "1f38c": {
          "name": "crossed flags",
          "shortname": ":crossed_flags:",
          "shortname_alternates": [],
          "keywords": [
            "Japanese",
            "celebration",
            "cross",
            "crossed"
          ],
          "unicode_output": "1f38c"
        },
        "1f1ef-1f1ea": {
          "name": "Jersey",
          "shortname": ":flag_je:",
          "shortname_alternates": [
            ":je:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ef-1f1ea"
        },
        "1f1ef-1f1f4": {
          "name": "Jordan",
          "shortname": ":flag_jo:",
          "shortname_alternates": [
            ":jo:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ef-1f1f4"
        },
        "1f1f0-1f1ff": {
          "name": "Kazakhstan",
          "shortname": ":flag_kz:",
          "shortname_alternates": [
            ":kz:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1ff"
        },
        "1f1f0-1f1ea": {
          "name": "Kenya",
          "shortname": ":flag_ke:",
          "shortname_alternates": [
            ":ke:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1ea"
        },
        "1f1f0-1f1ee": {
          "name": "Kiribati",
          "shortname": ":flag_ki:",
          "shortname_alternates": [
            ":ki:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1ee"
        },
        "1f1fd-1f1f0": {
          "name": "Kosovo",
          "shortname": ":flag_xk:",
          "shortname_alternates": [
            ":xk:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fd-1f1f0"
        },
        "1f1f0-1f1fc": {
          "name": "Kuwait",
          "shortname": ":flag_kw:",
          "shortname_alternates": [
            ":kw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1fc"
        },
        "1f1f0-1f1ec": {
          "name": "Kyrgyzstan",
          "shortname": ":flag_kg:",
          "shortname_alternates": [
            ":kg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1ec"
        },
        "1f1f1-1f1e6": {
          "name": "Laos",
          "shortname": ":flag_la:",
          "shortname_alternates": [
            ":la:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1e6"
        },
        "1f1f1-1f1fb": {
          "name": "Latvia",
          "shortname": ":flag_lv:",
          "shortname_alternates": [
            ":lv:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1fb"
        },
        "1f1f1-1f1e7": {
          "name": "Lebanon",
          "shortname": ":flag_lb:",
          "shortname_alternates": [
            ":lb:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1e7"
        },
        "1f1f1-1f1f8": {
          "name": "Lesotho",
          "shortname": ":flag_ls:",
          "shortname_alternates": [
            ":ls:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1f8"
        },
        "1f1f1-1f1f7": {
          "name": "Liberia",
          "shortname": ":flag_lr:",
          "shortname_alternates": [
            ":lr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1f7"
        },
        "1f1f1-1f1fe": {
          "name": "Libya",
          "shortname": ":flag_ly:",
          "shortname_alternates": [
            ":ly:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1fe"
        },
        "1f1f1-1f1ee": {
          "name": "Liechtenstein",
          "shortname": ":flag_li:",
          "shortname_alternates": [
            ":li:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1ee"
        },
        "1f1f1-1f1f9": {
          "name": "Lithuania",
          "shortname": ":flag_lt:",
          "shortname_alternates": [
            ":lt:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1f9"
        },
        "1f1f1-1f1fa": {
          "name": "Luxembourg",
          "shortname": ":flag_lu:",
          "shortname_alternates": [
            ":lu:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1fa"
        },
        "1f1f2-1f1f4": {
          "name": "Macau SAR China",
          "shortname": ":flag_mo:",
          "shortname_alternates": [
            ":mo:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f4"
        },
        "1f1f2-1f1f0": {
          "name": "Macedonia",
          "shortname": ":flag_mk:",
          "shortname_alternates": [
            ":mk:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f0"
        },
        "1f1f2-1f1ec": {
          "name": "Madagascar",
          "shortname": ":flag_mg:",
          "shortname_alternates": [
            ":mg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1ec"
        },
        "1f1f2-1f1fc": {
          "name": "Malawi",
          "shortname": ":flag_mw:",
          "shortname_alternates": [
            ":mw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1fc"
        },
        "1f1f2-1f1fe": {
          "name": "Malaysia",
          "shortname": ":flag_my:",
          "shortname_alternates": [
            ":my:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1fe"
        },
        "1f1f2-1f1fb": {
          "name": "Maldives",
          "shortname": ":flag_mv:",
          "shortname_alternates": [
            ":mv:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1fb"
        },
        "1f1f2-1f1f1": {
          "name": "Mali",
          "shortname": ":flag_ml:",
          "shortname_alternates": [
            ":ml:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f1"
        },
        "1f1f2-1f1f9": {
          "name": "Malta",
          "shortname": ":flag_mt:",
          "shortname_alternates": [
            ":mt:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f9"
        },
        "1f1f2-1f1ed": {
          "name": "Marshall Islands",
          "shortname": ":flag_mh:",
          "shortname_alternates": [
            ":mh:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1ed"
        },
        "1f1f2-1f1f6": {
          "name": "Martinique",
          "shortname": ":flag_mq:",
          "shortname_alternates": [
            ":mq:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f6"
        },
        "1f1f2-1f1f7": {
          "name": "Mauritania",
          "shortname": ":flag_mr:",
          "shortname_alternates": [
            ":mr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f7"
        },
        "1f1f2-1f1fa": {
          "name": "Mauritius",
          "shortname": ":flag_mu:",
          "shortname_alternates": [
            ":mu:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1fa"
        },
        "1f1fe-1f1f9": {
          "name": "Mayotte",
          "shortname": ":flag_yt:",
          "shortname_alternates": [
            ":yt:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fe-1f1f9"
        },
        "1f1f2-1f1fd": {
          "name": "Mexico",
          "shortname": ":flag_mx:",
          "shortname_alternates": [
            ":mx:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1fd"
        },
        "1f1eb-1f1f2": {
          "name": "Micronesia",
          "shortname": ":flag_fm:",
          "shortname_alternates": [
            ":fm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1eb-1f1f2"
        },
        "1f1f2-1f1e9": {
          "name": "Moldova",
          "shortname": ":flag_md:",
          "shortname_alternates": [
            ":md:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1e9"
        },
        "1f1f2-1f1e8": {
          "name": "Monaco",
          "shortname": ":flag_mc:",
          "shortname_alternates": [
            ":mc:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1e8"
        },
        "1f1f2-1f1f3": {
          "name": "Mongolia",
          "shortname": ":flag_mn:",
          "shortname_alternates": [
            ":mn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f3"
        },
        "1f1f2-1f1ea": {
          "name": "Montenegro",
          "shortname": ":flag_me:",
          "shortname_alternates": [
            ":me:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1ea"
        },
        "1f1f2-1f1f8": {
          "name": "Montserrat",
          "shortname": ":flag_ms:",
          "shortname_alternates": [
            ":ms:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f8"
        },
        "1f1f2-1f1e6": {
          "name": "Morocco",
          "shortname": ":flag_ma:",
          "shortname_alternates": [
            ":ma:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1e6"
        },
        "1f1f2-1f1ff": {
          "name": "Mozambique",
          "shortname": ":flag_mz:",
          "shortname_alternates": [
            ":mz:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1ff"
        },
        "1f1f2-1f1f2": {
          "name": "Myanmar (Burma)",
          "shortname": ":flag_mm:",
          "shortname_alternates": [
            ":mm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f2"
        },
        "1f1f3-1f1e6": {
          "name": "Namibia",
          "shortname": ":flag_na:",
          "shortname_alternates": [
            ":na:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1e6"
        },
        "1f1f3-1f1f7": {
          "name": "Nauru",
          "shortname": ":flag_nr:",
          "shortname_alternates": [
            ":nr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1f7"
        },
        "1f1f3-1f1f5": {
          "name": "Nepal",
          "shortname": ":flag_np:",
          "shortname_alternates": [
            ":np:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1f5"
        },
        "1f1f3-1f1f1": {
          "name": "Netherlands",
          "shortname": ":flag_nl:",
          "shortname_alternates": [
            ":nl:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1f1"
        },
        "1f1f3-1f1e8": {
          "name": "New Caledonia",
          "shortname": ":flag_nc:",
          "shortname_alternates": [
            ":nc:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1e8"
        },
        "1f1f3-1f1ff": {
          "name": "New Zealand",
          "shortname": ":flag_nz:",
          "shortname_alternates": [
            ":nz:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1ff"
        },
        "1f1f3-1f1ee": {
          "name": "Nicaragua",
          "shortname": ":flag_ni:",
          "shortname_alternates": [
            ":ni:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1ee"
        },
        "1f1f3-1f1ea": {
          "name": "Niger",
          "shortname": ":flag_ne:",
          "shortname_alternates": [
            ":ne:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1ea"
        },
        "1f1f3-1f1ec": {
          "name": "Nigeria",
          "shortname": ":flag_ng:",
          "shortname_alternates": [
            ":nigeria:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1ec"
        },
        "1f1f3-1f1fa": {
          "name": "Niue",
          "shortname": ":flag_nu:",
          "shortname_alternates": [
            ":nu:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1fa"
        },
        "1f1f3-1f1eb": {
          "name": "Norfolk Island",
          "shortname": ":flag_nf:",
          "shortname_alternates": [
            ":nf:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1eb"
        },
        "1f1f0-1f1f5": {
          "name": "North Korea",
          "shortname": ":flag_kp:",
          "shortname_alternates": [
            ":kp:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1f5"
        },
        "1f1f2-1f1f5": {
          "name": "Northern Mariana Islands",
          "shortname": ":flag_mp:",
          "shortname_alternates": [
            ":mp:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1f5"
        },
        "1f1f3-1f1f4": {
          "name": "Norway",
          "shortname": ":flag_no:",
          "shortname_alternates": [
            ":no:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f3-1f1f4"
        },
        "1f1f4-1f1f2": {
          "name": "Oman",
          "shortname": ":flag_om:",
          "shortname_alternates": [
            ":om:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f4-1f1f2"
        },
        "1f1f5-1f1f0": {
          "name": "Pakistan",
          "shortname": ":flag_pk:",
          "shortname_alternates": [
            ":pk:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1f0"
        },
        "1f1f5-1f1fc": {
          "name": "Palau",
          "shortname": ":flag_pw:",
          "shortname_alternates": [
            ":pw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1fc"
        },
        "1f1f5-1f1f8": {
          "name": "Palestinian Territories",
          "shortname": ":flag_ps:",
          "shortname_alternates": [
            ":ps:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1f8"
        },
        "1f1f5-1f1e6": {
          "name": "Panama",
          "shortname": ":flag_pa:",
          "shortname_alternates": [
            ":pa:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1e6"
        },
        "1f1f5-1f1ec": {
          "name": "Papua New Guinea",
          "shortname": ":flag_pg:",
          "shortname_alternates": [
            ":pg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1ec"
        },
        "1f1f5-1f1fe": {
          "name": "Paraguay",
          "shortname": ":flag_py:",
          "shortname_alternates": [
            ":py:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1fe"
        },
        "1f1f5-1f1ea": {
          "name": "Peru",
          "shortname": ":flag_pe:",
          "shortname_alternates": [
            ":pe:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1ea"
        },
        "1f1f5-1f1ed": {
          "name": "Philippines",
          "shortname": ":flag_ph:",
          "shortname_alternates": [
            ":ph:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1ed"
        },
        "1f1f5-1f1f3": {
          "name": "Pitcairn Islands",
          "shortname": ":flag_pn:",
          "shortname_alternates": [
            ":pn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1f3"
        },
        "1f1f5-1f1f1": {
          "name": "Poland",
          "shortname": ":flag_pl:",
          "shortname_alternates": [
            ":pl:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1f1"
        },
        "1f1f5-1f1f9": {
          "name": "Portugal",
          "shortname": ":flag_pt:",
          "shortname_alternates": [
            ":pt:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1f9"
        },
        "1f1f5-1f1f7": {
          "name": "Puerto Rico",
          "shortname": ":flag_pr:",
          "shortname_alternates": [
            ":pr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1f7"
        },
        "1f1f6-1f1e6": {
          "name": "Qatar",
          "shortname": ":flag_qa:",
          "shortname_alternates": [
            ":qa:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f6-1f1e6"
        },
        "1f1f7-1f1ea": {
          "name": "Réunion",
          "shortname": ":flag_re:",
          "shortname_alternates": [
            ":re:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f7-1f1ea"
        },
        "1f1f7-1f1f4": {
          "name": "Romania",
          "shortname": ":flag_ro:",
          "shortname_alternates": [
            ":ro:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f7-1f1f4"
        },
        "1f1f7-1f1fa": {
          "name": "Russia",
          "shortname": ":flag_ru:",
          "shortname_alternates": [
            ":ru:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f7-1f1fa"
        },
        "1f1f7-1f1fc": {
          "name": "Rwanda",
          "shortname": ":flag_rw:",
          "shortname_alternates": [
            ":rw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f7-1f1fc"
        },
        "1f1fc-1f1f8": {
          "name": "Samoa",
          "shortname": ":flag_ws:",
          "shortname_alternates": [
            ":ws:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fc-1f1f8"
        },
        "1f1f8-1f1f2": {
          "name": "San Marino",
          "shortname": ":flag_sm:",
          "shortname_alternates": [
            ":sm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1f2"
        },
        "1f1f8-1f1f9": {
          "name": "São Tomé & Príncipe",
          "shortname": ":flag_st:",
          "shortname_alternates": [
            ":st:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1f9"
        },
        "1f1f8-1f1e6": {
          "name": "Saudi Arabia",
          "shortname": ":flag_sa:",
          "shortname_alternates": [
            ":saudiarabia:",
            ":saudi:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1e6"
        },
        "1f1f8-1f1f3": {
          "name": "Senegal",
          "shortname": ":flag_sn:",
          "shortname_alternates": [
            ":sn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1f3"
        },
        "1f1f7-1f1f8": {
          "name": "Serbia",
          "shortname": ":flag_rs:",
          "shortname_alternates": [
            ":rs:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f7-1f1f8"
        },
        "1f1f8-1f1e8": {
          "name": "Seychelles",
          "shortname": ":flag_sc:",
          "shortname_alternates": [
            ":sc:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1e8"
        },
        "1f1f8-1f1f1": {
          "name": "Sierra Leone",
          "shortname": ":flag_sl:",
          "shortname_alternates": [
            ":sl:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1f1"
        },
        "1f1f8-1f1ec": {
          "name": "Singapore",
          "shortname": ":flag_sg:",
          "shortname_alternates": [
            ":sg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1ec"
        },
        "1f1f8-1f1fd": {
          "name": "Sint Maarten",
          "shortname": ":flag_sx:",
          "shortname_alternates": [
            ":sx:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1fd"
        },
        "1f1f8-1f1f0": {
          "name": "Slovakia",
          "shortname": ":flag_sk:",
          "shortname_alternates": [
            ":sk:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1f0"
        },
        "1f1f8-1f1ee": {
          "name": "Slovenia",
          "shortname": ":flag_si:",
          "shortname_alternates": [
            ":si:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1ee"
        },
        "1f1ec-1f1f8": {
          "name": "South Georgia & South Sandwich Islands",
          "shortname": ":flag_gs:",
          "shortname_alternates": [
            ":gs:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1f8"
        },
        "1f1f8-1f1e7": {
          "name": "Solomon Islands",
          "shortname": ":flag_sb:",
          "shortname_alternates": [
            ":sb:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1e7"
        },
        "1f1f8-1f1f4": {
          "name": "Somalia",
          "shortname": ":flag_so:",
          "shortname_alternates": [
            ":so:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1f4"
        },
        "1f1ff-1f1e6": {
          "name": "South Africa",
          "shortname": ":flag_za:",
          "shortname_alternates": [
            ":za:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ff-1f1e6"
        },
        "1f1f0-1f1f7": {
          "name": "South Korea",
          "shortname": ":flag_kr:",
          "shortname_alternates": [
            ":kr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1f7"
        },
        "1f1f8-1f1f8": {
          "name": "South Sudan",
          "shortname": ":flag_ss:",
          "shortname_alternates": [
            ":ss:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1f8"
        },
        "1f1ea-1f1f8": {
          "name": "Spain",
          "shortname": ":flag_es:",
          "shortname_alternates": [
            ":es:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ea-1f1f8"
        },
        "1f1f1-1f1f0": {
          "name": "Sri Lanka",
          "shortname": ":flag_lk:",
          "shortname_alternates": [
            ":lk:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1f0"
        },
        "1f1e7-1f1f1": {
          "name": "St. Barthélemy",
          "shortname": ":flag_bl:",
          "shortname_alternates": [
            ":bl:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1f1"
        },
        "1f1f8-1f1ed": {
          "name": "St. Helena",
          "shortname": ":flag_sh:",
          "shortname_alternates": [
            ":sh:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1ed"
        },
        "1f1f0-1f1f3": {
          "name": "St. Kitts & Nevis",
          "shortname": ":flag_kn:",
          "shortname_alternates": [
            ":kn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f0-1f1f3"
        },
        "1f1f1-1f1e8": {
          "name": "St. Lucia",
          "shortname": ":flag_lc:",
          "shortname_alternates": [
            ":lc:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f1-1f1e8"
        },
        "1f1f5-1f1f2": {
          "name": "St. Pierre & Miquelon",
          "shortname": ":flag_pm:",
          "shortname_alternates": [
            ":pm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f5-1f1f2"
        },
        "1f1fb-1f1e8": {
          "name": "St. Vincent & Grenadines",
          "shortname": ":flag_vc:",
          "shortname_alternates": [
            ":vc:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fb-1f1e8"
        },
        "1f1f8-1f1e9": {
          "name": "Sudan",
          "shortname": ":flag_sd:",
          "shortname_alternates": [
            ":sd:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1e9"
        },
        "1f1f8-1f1f7": {
          "name": "Suriname",
          "shortname": ":flag_sr:",
          "shortname_alternates": [
            ":sr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1f7"
        },
        "1f1f8-1f1ff": {
          "name": "Swaziland",
          "shortname": ":flag_sz:",
          "shortname_alternates": [
            ":sz:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1ff"
        },
        "1f1f8-1f1ea": {
          "name": "Sweden",
          "shortname": ":flag_se:",
          "shortname_alternates": [
            ":se:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1ea"
        },
        "1f1e8-1f1ed": {
          "name": "Switzerland",
          "shortname": ":flag_ch:",
          "shortname_alternates": [
            ":ch:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1ed"
        },
        "1f1f8-1f1fe": {
          "name": "Syria",
          "shortname": ":flag_sy:",
          "shortname_alternates": [
            ":sy:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1fe"
        },
        "1f1f9-1f1fc": {
          "name": "Taiwan",
          "shortname": ":flag_tw:",
          "shortname_alternates": [
            ":tw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1fc"
        },
        "1f1f9-1f1ef": {
          "name": "Tajikistan",
          "shortname": ":flag_tj:",
          "shortname_alternates": [
            ":tj:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1ef"
        },
        "1f1f9-1f1ff": {
          "name": "Tanzania",
          "shortname": ":flag_tz:",
          "shortname_alternates": [
            ":tz:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1ff"
        },
        "1f1f9-1f1ed": {
          "name": "Thailand",
          "shortname": ":flag_th:",
          "shortname_alternates": [
            ":th:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1ed"
        },
        "1f1f9-1f1f1": {
          "name": "Timor-Leste",
          "shortname": ":flag_tl:",
          "shortname_alternates": [
            ":tl:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1f1"
        },
        "1f1f9-1f1ec": {
          "name": "Togo",
          "shortname": ":flag_tg:",
          "shortname_alternates": [
            ":tg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1ec"
        },
        "1f1f9-1f1f0": {
          "name": "Tokelau",
          "shortname": ":flag_tk:",
          "shortname_alternates": [
            ":tk:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1f0"
        },
        "1f1f9-1f1f4": {
          "name": "Tonga",
          "shortname": ":flag_to:",
          "shortname_alternates": [
            ":to:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1f4"
        },
        "1f1f9-1f1f9": {
          "name": "Trinidad & Tobago",
          "shortname": ":flag_tt:",
          "shortname_alternates": [
            ":tt:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1f9"
        },
        "1f1f9-1f1f3": {
          "name": "Tunisia",
          "shortname": ":flag_tn:",
          "shortname_alternates": [
            ":tn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1f3"
        },
        "1f1f9-1f1f7": {
          "name": "Turkey",
          "shortname": ":flag_tr:",
          "shortname_alternates": [
            ":tr:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1f7"
        },
        "1f1f9-1f1f2": {
          "name": "Turkmenistan",
          "shortname": ":flag_tm:",
          "shortname_alternates": [
            ":turkmenistan:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1f2"
        },
        "1f1f9-1f1e8": {
          "name": "Turks & Caicos Islands",
          "shortname": ":flag_tc:",
          "shortname_alternates": [
            ":tc:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1e8"
        },
        "1f1fb-1f1ee": {
          "name": "U.S. Virgin Islands",
          "shortname": ":flag_vi:",
          "shortname_alternates": [
            ":vi:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fb-1f1ee"
        },
        "1f1f9-1f1fb": {
          "name": "Tuvalu",
          "shortname": ":flag_tv:",
          "shortname_alternates": [
            ":tuvalu:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1fb"
        },
        "1f1fa-1f1ec": {
          "name": "Uganda",
          "shortname": ":flag_ug:",
          "shortname_alternates": [
            ":ug:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fa-1f1ec"
        },
        "1f1fa-1f1e6": {
          "name": "Ukraine",
          "shortname": ":flag_ua:",
          "shortname_alternates": [
            ":ua:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fa-1f1e6"
        },
        "1f1e6-1f1ea": {
          "name": "United Arab Emirates",
          "shortname": ":flag_ae:",
          "shortname_alternates": [
            ":ae:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1ea"
        },
        "1f1ec-1f1e7": {
          "name": "United Kingdom",
          "shortname": ":flag_gb:",
          "shortname_alternates": [
            ":gb:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ec-1f1e7"
        },
        "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f": {
          "name": "England",
          "shortname": ":england:",
          "shortname_alternates": [],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f"
        },
        "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f": {
          "name": "Scotland",
          "shortname": ":scotland:",
          "shortname_alternates": [],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f"
        },
        "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f": {
          "name": "Wales",
          "shortname": ":wales:",
          "shortname_alternates": [],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f"
        },
        "1f1fa-1f1f8": {
          "name": "United States",
          "shortname": ":flag_us:",
          "shortname_alternates": [
            ":us:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fa-1f1f8"
        },
        "1f1fa-1f1fe": {
          "name": "Uruguay",
          "shortname": ":flag_uy:",
          "shortname_alternates": [
            ":uy:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fa-1f1fe"
        },
        "1f1fa-1f1ff": {
          "name": "Uzbekistan",
          "shortname": ":flag_uz:",
          "shortname_alternates": [
            ":uz:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fa-1f1ff"
        },
        "1f1fb-1f1fa": {
          "name": "Vanuatu",
          "shortname": ":flag_vu:",
          "shortname_alternates": [
            ":vu:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fb-1f1fa"
        },
        "1f1fb-1f1e6": {
          "name": "Vatican City",
          "shortname": ":flag_va:",
          "shortname_alternates": [
            ":va:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fb-1f1e6"
        },
        "1f1fb-1f1ea": {
          "name": "Venezuela",
          "shortname": ":flag_ve:",
          "shortname_alternates": [
            ":ve:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fb-1f1ea"
        },
        "1f1fb-1f1f3": {
          "name": "Vietnam",
          "shortname": ":flag_vn:",
          "shortname_alternates": [
            ":vn:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fb-1f1f3"
        },
        "1f1fc-1f1eb": {
          "name": "Wallis & Futuna",
          "shortname": ":flag_wf:",
          "shortname_alternates": [
            ":wf:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fc-1f1eb"
        },
        "1f1ea-1f1ed": {
          "name": "Western Sahara",
          "shortname": ":flag_eh:",
          "shortname_alternates": [
            ":eh:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ea-1f1ed"
        },
        "1f1fe-1f1ea": {
          "name": "Yemen",
          "shortname": ":flag_ye:",
          "shortname_alternates": [
            ":ye:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fe-1f1ea"
        },
        "1f1ff-1f1f2": {
          "name": "Zambia",
          "shortname": ":flag_zm:",
          "shortname_alternates": [
            ":zm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ff-1f1f2"
        },
        "1f1ff-1f1fc": {
          "name": "Zimbabwe",
          "shortname": ":flag_zw:",
          "shortname_alternates": [
            ":zw:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ff-1f1fc"
        },
        "1f1e6-1f1e8": {
          "name": "Ascension Island",
          "shortname": ":flag_ac:",
          "shortname_alternates": [
            ":ac:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e6-1f1e8"
        },
        "1f1e7-1f1fb": {
          "name": "Bouvet Island",
          "shortname": ":flag_bv:",
          "shortname_alternates": [
            ":bv:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e7-1f1fb"
        },
        "1f1e8-1f1f5": {
          "name": "Clipperton Island",
          "shortname": ":flag_cp:",
          "shortname_alternates": [
            ":cp:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e8-1f1f5"
        },
        "1f1ea-1f1e6": {
          "name": "Ceuta & Melilla",
          "shortname": ":flag_ea:",
          "shortname_alternates": [
            ":ea:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ea-1f1e6"
        },
        "1f1e9-1f1ec": {
          "name": "Diego Garcia",
          "shortname": ":flag_dg:",
          "shortname_alternates": [
            ":dg:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1e9-1f1ec"
        },
        "1f1ed-1f1f2": {
          "name": "Heard & McDonald Islands",
          "shortname": ":flag_hm:",
          "shortname_alternates": [
            ":hm:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1ed-1f1f2"
        },
        "1f1f2-1f1eb": {
          "name": "St. Martin",
          "shortname": ":flag_mf:",
          "shortname_alternates": [
            ":mf:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f2-1f1eb"
        },
        "1f1f8-1f1ef": {
          "name": "Svalbard & Jan Mayen",
          "shortname": ":flag_sj:",
          "shortname_alternates": [
            ":sj:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f8-1f1ef"
        },
        "1f1f9-1f1e6": {
          "name": "Tristan da Cunha",
          "shortname": ":flag_ta:",
          "shortname_alternates": [
            ":ta:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1f9-1f1e6"
        },
        "1f1fa-1f1f2": {
          "name": "U.S. Outlying Islands",
          "shortname": ":flag_um:",
          "shortname_alternates": [
            ":um:"
          ],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fa-1f1f2"
        },
        "1f1fa-1f1f3": {
          "name": "United Nations",
          "shortname": ":united_nations:",
          "shortname_alternates": [],
          "keywords": [
            "flag"
          ],
          "unicode_output": "1f1fa-1f1f3"
        },
        "1f3fb": {
          "name": "light skin tone",
          "shortname": ":tone1:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f3fb"
        },
        "1f3fc": {
          "name": "medium-light skin tone",
          "shortname": ":tone2:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f3fc"
        },
        "1f3fd": {
          "name": "medium skin tone",
          "shortname": ":tone3:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f3fd"
        },
        "1f3fe": {
          "name": "medium-dark skin tone",
          "shortname": ":tone4:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f3fe"
        },
        "1f3ff": {
          "name": "dark skin tone",
          "shortname": ":tone5:",
          "shortname_alternates": [],
          "keywords": [
            ""
          ],
          "unicode_output": "1f3ff"
        }
      };

    var factory = {
        emojiList: emojiList
    };

    return factory;
  
  }]);