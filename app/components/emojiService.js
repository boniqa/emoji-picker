angular.module('gitApp').factory('emojiService', [function(){

 var convert = function convert(unicode) {
  if(unicode.indexOf("-") > -1) {
      var parts = [];
      var s = unicode.split('-');
      for(var i = 0; i < s.length; i++) {
          var part = parseInt(s[i], 16);
          if (part >= 0x10000 && part <= 0x10FFFF) {
              var hi = Math.floor((part - 0x10000) / 0x400) + 0xD800;
              var lo = ((part - 0x10000) % 0x400) + 0xDC00;
              part = (String.fromCharCode(hi) + String.fromCharCode(lo));
          }
          else {
              part = String.fromCharCode(part);
          }
          parts.push(part);
      }
      return parts.join('');
  }
  else {
      var s = parseInt(unicode, 16);
      if (s >= 0x10000 && s <= 0x10FFFF) {
          var hi = Math.floor((s - 0x10000) / 0x400) + 0xD800;
          var lo = ((s - 0x10000) % 0x400) + 0xDC00;
          return (String.fromCharCode(hi) + String.fromCharCode(lo));
      }
      else {
          return String.fromCharCode(s);
      }
  }
};

 var emojiList = [
  {
    "name": "exclamation question mark",
    "category": "symbols",
    "shortname": ":interrobang:",
    "keyWords": [
      "exclamation",
      "interrobang",
      "mark",
      "punctuation",
      "question"
    ],
    "output": "2049"
  },
  {
    "name": "trade mark",
    "category": "symbols",
    "shortname": ":tm:",
    "keyWords": [
      "mark",
      "tm",
      "trademark"
    ],
    "output": "2122"
  },
  {
    "name": "information",
    "category": "symbols",
    "shortname": ":information_source:",
    "keyWords": [
      "i",
      "information"
    ],
    "output": "2139"
  },
  {
    "name": "left-right arrow",
    "category": "symbols",
    "shortname": ":left_right_arrow:",
    "keyWords": [
      "arrow"
    ],
    "output": "2194"
  },
  {
    "name": "up-down arrow",
    "category": "symbols",
    "shortname": ":arrow_up_down:",
    "keyWords": [
      "arrow"
    ],
    "output": "2195"
  },
  {
    "name": "up-left arrow",
    "category": "symbols",
    "shortname": ":arrow_upper_left:",
    "keyWords": [
      "arrow",
      "direction",
      "intercardinal",
      "northwest"
    ],
    "output": "2196"
  },
  {
    "name": "up-right arrow",
    "category": "symbols",
    "shortname": ":arrow_upper_right:",
    "keyWords": [
      "arrow",
      "direction",
      "intercardinal",
      "northeast"
    ],
    "output": "2197"
  },
  {
    "name": "down-right arrow",
    "category": "symbols",
    "shortname": ":arrow_lower_right:",
    "keyWords": [
      "arrow",
      "direction",
      "intercardinal",
      "southeast"
    ],
    "output": "2198"
  },
  {
    "name": "down-left arrow",
    "category": "symbols",
    "shortname": ":arrow_lower_left:",
    "keyWords": [
      "arrow",
      "direction",
      "intercardinal",
      "southwest"
    ],
    "output": "2199"
  },
  {
    "name": "keyboard",
    "category": "objects",
    "shortname": ":keyboard:",
    "keyWords": [
      "computer"
    ],
    "output": "2328"
  },
  {
    "name": "sun",
    "category": "nature",
    "shortname": ":sunny:",
    "keyWords": [
      "bright",
      "rays",
      "sunny"
    ],
    "output": "2600"
  },
  {
    "name": "cloud",
    "category": "nature",
    "shortname": ":cloud:",
    "keyWords": [
      "weather"
    ],
    "output": "2601"
  },
  {
    "name": "umbrella",
    "category": "nature",
    "shortname": ":umbrella2:",
    "keyWords": [
      "clothing",
      "rain"
    ],
    "output": "2602"
  },
  {
    "name": "snowman",
    "category": "nature",
    "shortname": ":snowman2:",
    "keyWords": [
      "cold",
      "snow"
    ],
    "output": "2603"
  },
  {
    "name": "comet",
    "category": "nature",
    "shortname": ":comet:",
    "keyWords": [
      "space"
    ],
    "output": "2604"
  },
  {
    "name": "ballot box with check",
    "category": "symbols",
    "shortname": ":ballot_box_with_check:",
    "keyWords": [
      "ballot",
      "box",
      "check"
    ],
    "output": "2611"
  },
  {
    "name": "umbrella with rain drops",
    "category": "nature",
    "shortname": ":umbrella:",
    "keyWords": [
      "clothing",
      "drop",
      "rain",
      "umbrella"
    ],
    "output": "2614"
  },
  {
    "name": "hot beverage",
    "category": "food",
    "shortname": ":coffee:",
    "keyWords": [
      "beverage",
      "coffee",
      "drink",
      "hot",
      "steaming",
      "tea"
    ],
    "output": "2615"
  },
  {
    "name": "shamrock",
    "category": "nature",
    "shortname": ":shamrock:",
    "keyWords": [
      "plant"
    ],
    "output": "2618"
  },
  {
    "name": "skull and crossbones",
    "category": "people",
    "shortname": ":skull_crossbones:",
    "keyWords": [
      "crossbones",
      "death",
      "face",
      "monster",
      "skull"
    ],
    "output": "2620"
  },
  {
    "name": "radioactive",
    "category": "symbols",
    "shortname": ":radioactive:",
    "keyWords": [
      "radioactive",
      "sign"
    ],
    "output": "2622"
  },
  {
    "name": "biohazard",
    "category": "symbols",
    "shortname": ":biohazard:",
    "keyWords": [
      "biohazard",
      "sign"
    ],
    "output": "2623"
  },
  {
    "name": "orthodox cross",
    "category": "symbols",
    "shortname": ":orthodox_cross:",
    "keyWords": [
      "Christian",
      "cross",
      "religion"
    ],
    "output": "2626"
  },
  {
    "name": "wheel of dharma",
    "category": "symbols",
    "shortname": ":wheel_of_dharma:",
    "keyWords": [
      "Buddhist",
      "dharma",
      "religion",
      "wheel"
    ],
    "output": "2638"
  },
  {
    "name": "female sign",
    "category": "symbols",
    "shortname": ":female_sign:",
    "keyWords": [
      "woman"
    ],
    "output": "2640"
  },
  {
    "name": "male sign",
    "category": "symbols",
    "shortname": ":male_sign:",
    "keyWords": [
      "man"
    ],
    "output": "2642"
  },
  {
    "name": "Aries",
    "category": "symbols",
    "shortname": ":aries:",
    "keyWords": [
      "ram",
      "zodiac"
    ],
    "output": "2648"
  },
  {
    "name": "Taurus",
    "category": "symbols",
    "shortname": ":taurus:",
    "keyWords": [
      "bull",
      "ox",
      "zodiac"
    ],
    "output": "2649"
  },
  {
    "name": "Sagittarius",
    "category": "symbols",
    "shortname": ":sagittarius:",
    "keyWords": [
      "archer",
      "zodiac"
    ],
    "output": "2650"
  },
  {
    "name": "Capricorn",
    "category": "symbols",
    "shortname": ":capricorn:",
    "keyWords": [
      "goat",
      "zodiac"
    ],
    "output": "2651"
  },
  {
    "name": "Aquarius",
    "category": "symbols",
    "shortname": ":aquarius:",
    "keyWords": [
      "bearer",
      "water",
      "zodiac"
    ],
    "output": "2652"
  },
  {
    "name": "Pisces",
    "category": "symbols",
    "shortname": ":pisces:",
    "keyWords": [
      "fish",
      "zodiac"
    ],
    "output": "2653"
  },
  {
    "name": "spade suit",
    "category": "symbols",
    "shortname": ":spades:",
    "keyWords": [
      "card",
      "game"
    ],
    "output": "2660"
  },
  {
    "name": "club suit",
    "category": "symbols",
    "shortname": ":clubs:",
    "keyWords": [
      "card",
      "game"
    ],
    "output": "2663"
  },
  {
    "name": "heart suit",
    "category": "symbols",
    "shortname": ":hearts:",
    "keyWords": [
      "card",
      "game"
    ],
    "output": "2665"
  },
  {
    "name": "diamond suit",
    "category": "symbols",
    "shortname": ":diamonds:",
    "keyWords": [
      "card",
      "game"
    ],
    "output": "2666"
  },
  {
    "name": "hot springs",
    "category": "symbols",
    "shortname": ":hotsprings:",
    "keyWords": [
      "hot",
      "hotsprings",
      "springs",
      "steaming"
    ],
    "output": "2668"
  },
  {
    "name": "hammer and pick",
    "category": "objects",
    "shortname": ":hammer_pick:",
    "keyWords": [
      "hammer",
      "pick",
      "tool"
    ],
    "output": "2692"
  },
  {
    "name": "anchor",
    "category": "travel",
    "shortname": ":anchor:",
    "keyWords": [
      "ship",
      "tool"
    ],
    "output": "2693"
  },
  {
    "name": "crossed swords",
    "category": "objects",
    "shortname": ":crossed_swords:",
    "keyWords": [
      "crossed",
      "swords",
      "weapon"
    ],
    "output": "2694"
  },
  {
    "name": "medical symbol",
    "category": "symbols",
    "shortname": ":medical_symbol:",
    "keyWords": [
      "aesculapius",
      "medicine",
      "staff"
    ],
    "output": "2695"
  },
  {
    "name": "balance scale",
    "category": "objects",
    "shortname": ":scales:",
    "keyWords": [
      "Libra",
      "balance",
      "justice",
      "scales",
      "tool",
      "weight",
      "zodiac"
    ],
    "output": "2696"
  },
  {
    "name": "alembic",
    "category": "objects",
    "shortname": ":alembic:",
    "keyWords": [
      "chemistry",
      "tool"
    ],
    "output": "2697"
  },
  {
    "name": "gear",
    "category": "objects",
    "shortname": ":gear:",
    "keyWords": [
      "tool"
    ],
    "output": "2699"
  },
  {
    "name": "scissors",
    "category": "objects",
    "shortname": ":scissors:",
    "keyWords": [
      "cutting",
      "tool"
    ],
    "output": "2702"
  },
  {
    "name": "white heavy check mark",
    "category": "symbols",
    "shortname": ":white_check_mark:",
    "keyWords": [
      "check",
      "mark"
    ],
    "output": "2705"
  },
  {
    "name": "airplane",
    "category": "travel",
    "shortname": ":airplane:",
    "keyWords": [
      "aeroplane",
      "airplane"
    ],
    "output": "2708"
  },
  {
    "name": "envelope",
    "category": "objects",
    "shortname": ":envelope:",
    "keyWords": [
      "email",
      "letter"
    ],
    "output": "2709"
  },
  {
    "name": "black nib",
    "category": "objects",
    "shortname": ":black_nib:",
    "keyWords": [
      "nib",
      "pen"
    ],
    "output": "2712"
  },
  {
    "name": "heavy check mark",
    "category": "symbols",
    "shortname": ":heavy_check_mark:",
    "keyWords": [
      "check",
      "mark"
    ],
    "output": "2714"
  },
  {
    "name": "heavy multiplication x",
    "category": "symbols",
    "shortname": ":heavy_multiplication_x:",
    "keyWords": [
      "cancel",
      "multiplication",
      "multiply",
      "x"
    ],
    "output": "2716"
  },
  {
    "name": "star of David",
    "category": "symbols",
    "shortname": ":star_of_david:",
    "keyWords": [
      "David",
      "Jew",
      "Jewish",
      "religion",
      "star"
    ],
    "output": "2721"
  },
  {
    "name": "sparkles",
    "category": "nature",
    "shortname": ":sparkles:",
    "keyWords": [
      "sparkle",
      "star"
    ],
    "output": "2728"
  },
  {
    "name": "eight-spoked asterisk",
    "category": "symbols",
    "shortname": ":eight_spoked_asterisk:",
    "keyWords": [
      "asterisk"
    ],
    "output": "2733"
  },
  {
    "name": "eight-pointed star",
    "category": "symbols",
    "shortname": ":eight_pointed_black_star:",
    "keyWords": [
      "star"
    ],
    "output": "2734"
  },
  {
    "name": "snowflake",
    "category": "nature",
    "shortname": ":snowflake:",
    "keyWords": [
      "cold",
      "snow"
    ],
    "output": "2744"
  },
  {
    "name": "sparkle",
    "category": "symbols",
    "shortname": ":sparkle:",
    "keyWords": [
      "sparkle"
    ],
    "output": "2747"
  },
  {
    "name": "question mark",
    "category": "symbols",
    "shortname": ":question:",
    "keyWords": [
      "mark",
      "punctuation",
      "question"
    ],
    "output": "2753"
  },
  {
    "name": "white question mark",
    "category": "symbols",
    "shortname": ":grey_question:",
    "keyWords": [
      "mark",
      "outlined",
      "punctuation",
      "question"
    ],
    "output": "2754"
  },
  {
    "name": "white exclamation mark",
    "category": "symbols",
    "shortname": ":grey_exclamation:",
    "keyWords": [
      "exclamation",
      "mark",
      "outlined",
      "punctuation"
    ],
    "output": "2755"
  },
  {
    "name": "exclamation mark",
    "category": "symbols",
    "shortname": ":exclamation:",
    "keyWords": [
      "exclamation",
      "mark",
      "punctuation"
    ],
    "output": "2757"
  },
  {
    "name": "heavy heart exclamation",
    "category": "symbols",
    "shortname": ":heart_exclamation:",
    "keyWords": [
      "exclamation",
      "mark",
      "punctuation"
    ],
    "output": "2763"
  },
  {
    "name": "red heart",
    "category": "symbols",
    "shortname": ":heart:",
    "keyWords": [
      "heart"
    ],
    "output": "2764"
  },
  {
    "name": "heavy plus sign",
    "category": "symbols",
    "shortname": ":heavy_plus_sign:",
    "keyWords": [
      "math",
      "plus"
    ],
    "output": "2795"
  },
  {
    "name": "heavy minus sign",
    "category": "symbols",
    "shortname": ":heavy_minus_sign:",
    "keyWords": [
      "math",
      "minus"
    ],
    "output": "2796"
  },
  {
    "name": "heavy division sign",
    "category": "symbols",
    "shortname": ":heavy_division_sign:",
    "keyWords": [
      "division",
      "math"
    ],
    "output": "2797"
  },
  {
    "name": "right arrow curving up",
    "category": "symbols",
    "shortname": ":arrow_heading_up:",
    "keyWords": [
      "arrow"
    ],
    "output": "2934"
  },
  {
    "name": "right arrow curving down",
    "category": "symbols",
    "shortname": ":arrow_heading_down:",
    "keyWords": [
      "arrow",
      "down"
    ],
    "output": "2935"
  },
  {
    "name": "wavy dash",
    "category": "symbols",
    "shortname": ":wavy_dash:",
    "keyWords": [
      "dash",
      "punctuation",
      "wavy"
    ],
    "output": "3030"
  },
  {
    "name": "Japanese “congratulations” button",
    "category": "symbols",
    "shortname": ":congratulations:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“congratulations”",
      "祝"
    ],
    "output": "3297"
  },
  {
    "name": "Japanese “secret” button",
    "category": "symbols",
    "shortname": ":secret:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“secret”",
      "秘"
    ],
    "output": "3299"
  },
  {
    "name": "orange heart",
    "category": "symbols",
    "shortname": ":orange_heart:",
    "keyWords": [
      "orange"
    ],
    "output": "1f9e1"
  },
  {
    "name": "yellow heart",
    "category": "symbols",
    "shortname": ":yellow_heart:",
    "keyWords": [
      "yellow"
    ],
    "output": "1f49b"
  },
  {
    "name": "green heart",
    "category": "symbols",
    "shortname": ":green_heart:",
    "keyWords": [
      "green"
    ],
    "output": "1f49a"
  },
  {
    "name": "blue heart",
    "category": "symbols",
    "shortname": ":blue_heart:",
    "keyWords": [
      "blue"
    ],
    "output": "1f499"
  },
  {
    "name": "purple heart",
    "category": "symbols",
    "shortname": ":purple_heart:",
    "keyWords": [
      "purple"
    ],
    "output": "1f49c"
  },
  {
    "name": "black heart",
    "category": "symbols",
    "shortname": ":black_heart:",
    "keyWords": [
      "black",
      "evil",
      "wicked"
    ],
    "output": "1f5a4"
  },
  {
    "name": "broken heart",
    "category": "symbols",
    "shortname": ":broken_heart:",
    "keyWords": [
      "break",
      "broken"
    ],
    "output": "1f494"
  },
  {
    "name": "two hearts",
    "category": "symbols",
    "shortname": ":two_hearts:",
    "keyWords": [
      "love"
    ],
    "output": "1f495"
  },
  {
    "name": "revolving hearts",
    "category": "symbols",
    "shortname": ":revolving_hearts:",
    "keyWords": [
      "revolving"
    ],
    "output": "1f49e"
  },
  {
    "name": "beating heart",
    "category": "symbols",
    "shortname": ":heartbeat:",
    "keyWords": [
      "beating",
      "heartbeat",
      "pulsating"
    ],
    "output": "1f493"
  },
  {
    "name": "growing heart",
    "category": "symbols",
    "shortname": ":heartpulse:",
    "keyWords": [
      "excited",
      "growing",
      "nervous",
      "pulse"
    ],
    "output": "1f497"
  },
  {
    "name": "sparkling heart",
    "category": "symbols",
    "shortname": ":sparkling_heart:",
    "keyWords": [
      "excited",
      "sparkle"
    ],
    "output": "1f496"
  },
  {
    "name": "heart with arrow",
    "category": "symbols",
    "shortname": ":cupid:",
    "keyWords": [
      "arrow",
      "cupid"
    ],
    "output": "1f498"
  },
  {
    "name": "heart with ribbon",
    "category": "symbols",
    "shortname": ":gift_heart:",
    "keyWords": [
      "ribbon",
      "valentine"
    ],
    "output": "1f49d"
  },
  {
    "name": "heart decoration",
    "category": "symbols",
    "shortname": ":heart_decoration:",
    "keyWords": [
      "heart"
    ],
    "output": "1f49f"
  },
  {
    "name": "peace symbol",
    "category": "symbols",
    "shortname": ":peace:",
    "keyWords": [
      "peace"
    ],
    "output": "262e"
  },
  {
    "name": "latin cross",
    "category": "symbols",
    "shortname": ":cross:",
    "keyWords": [
      "Christian",
      "cross",
      "religion"
    ],
    "output": "271d"
  },
  {
    "name": "star and crescent",
    "category": "symbols",
    "shortname": ":star_and_crescent:",
    "keyWords": [
      "Muslim",
      "islam",
      "religion"
    ],
    "output": "262a"
  },
  {
    "name": "om",
    "category": "symbols",
    "shortname": ":om_symbol:",
    "keyWords": [
      "Hindu",
      "religion"
    ],
    "output": "1f549"
  },
  {
    "name": "dotted six-pointed star",
    "category": "symbols",
    "shortname": ":six_pointed_star:",
    "keyWords": [
      "fortune",
      "star"
    ],
    "output": "1f52f"
  },
  {
    "name": "menorah",
    "category": "symbols",
    "shortname": ":menorah:",
    "keyWords": [
      "candelabrum",
      "candlestick",
      "religion"
    ],
    "output": "1f54e"
  },
  {
    "name": "yin yang",
    "category": "symbols",
    "shortname": ":yin_yang:",
    "keyWords": [
      "religion",
      "tao",
      "taoist",
      "yang",
      "yin"
    ],
    "output": "262f"
  },
  {
    "name": "place of worship",
    "category": "symbols",
    "shortname": ":place_of_worship:",
    "keyWords": [
      "religion",
      "worship"
    ],
    "output": "1f6d0"
  },
  {
    "name": "Ophiuchus",
    "category": "symbols",
    "shortname": ":ophiuchus:",
    "keyWords": [
      "bearer",
      "serpent",
      "snake",
      "zodiac"
    ],
    "output": "26ce"
  },
  {
    "name": "Gemini",
    "category": "symbols",
    "shortname": ":gemini:",
    "keyWords": [
      "twins",
      "zodiac"
    ],
    "output": "264a"
  },
  {
    "name": "Cancer",
    "category": "symbols",
    "shortname": ":cancer:",
    "keyWords": [
      "crab",
      "zodiac"
    ],
    "output": "264b"
  },
  {
    "name": "Leo",
    "category": "symbols",
    "shortname": ":leo:",
    "keyWords": [
      "lion",
      "zodiac"
    ],
    "output": "264c"
  },
  {
    "name": "Virgo",
    "category": "symbols",
    "shortname": ":virgo:",
    "keyWords": [
      "zodiac"
    ],
    "output": "264d"
  },
  {
    "name": "Libra",
    "category": "symbols",
    "shortname": ":libra:",
    "keyWords": [
      "balance",
      "justice",
      "scales",
      "zodiac"
    ],
    "output": "264e"
  },
  {
    "name": "Scorpio",
    "category": "symbols",
    "shortname": ":scorpius:",
    "keyWords": [
      "scorpio",
      "scorpion",
      "zodiac"
    ],
    "output": "264f"
  },
  {
    "name": "ID button",
    "category": "symbols",
    "shortname": ":id:",
    "keyWords": [
      "id",
      "identity"
    ],
    "output": "1f194"
  },
  {
    "name": "atom symbol",
    "category": "symbols",
    "shortname": ":atom:",
    "keyWords": [
      "atheist",
      "atom"
    ],
    "output": "269b"
  },
  {
    "name": "infinity",
    "category": "symbols",
    "shortname": ":infinity:",
    "keyWords": [
      ""
    ],
    "output": "267e-fe0f"
  },
  {
    "name": "Japanese “acceptable” button",
    "category": "symbols",
    "shortname": ":accept:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“acceptable”",
      "可"
    ],
    "output": "1f251"
  },
  {
    "name": "mobile phone off",
    "category": "symbols",
    "shortname": ":mobile_phone_off:",
    "keyWords": [
      "cell",
      "mobile",
      "off",
      "phone",
      "telephone"
    ],
    "output": "1f4f4"
  },
  {
    "name": "vibration mode",
    "category": "symbols",
    "shortname": ":vibration_mode:",
    "keyWords": [
      "cell",
      "mobile",
      "mode",
      "phone",
      "telephone",
      "vibration"
    ],
    "output": "1f4f3"
  },
  {
    "name": "Japanese “not free of charge” button",
    "category": "symbols",
    "shortname": ":u6709:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“not free of charge”",
      "有"
    ],
    "output": "1f236"
  },
  {
    "name": "Japanese “free of charge” button",
    "category": "symbols",
    "shortname": ":u7121:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“free of charge”",
      "無"
    ],
    "output": "1f21a"
  },
  {
    "name": "Japanese “application” button",
    "category": "symbols",
    "shortname": ":u7533:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“application”",
      "申"
    ],
    "output": "1f238"
  },
  {
    "name": "Japanese “open for business” button",
    "category": "symbols",
    "shortname": ":u55b6:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“open for business”",
      "営"
    ],
    "output": "1f23a"
  },
  {
    "name": "Japanese “monthly amount” button",
    "category": "symbols",
    "shortname": ":u6708:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“monthly amount”",
      "月"
    ],
    "output": "1f237"
  },
  {
    "name": "VS button",
    "category": "symbols",
    "shortname": ":vs:",
    "keyWords": [
      "versus",
      "vs"
    ],
    "output": "1f19a"
  },
  {
    "name": "white flower",
    "category": "symbols",
    "shortname": ":white_flower:",
    "keyWords": [
      "flower"
    ],
    "output": "1f4ae"
  },
  {
    "name": "Japanese “bargain” button",
    "category": "symbols",
    "shortname": ":ideograph_advantage:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“bargain”",
      "得"
    ],
    "output": "1f250"
  },
  {
    "name": "Japanese “passing grade” button",
    "category": "symbols",
    "shortname": ":u5408:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“passing grade”",
      "合"
    ],
    "output": "1f234"
  },
  {
    "name": "Japanese “no vacancy” button",
    "category": "symbols",
    "shortname": ":u6e80:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“no vacancy”",
      "満"
    ],
    "output": "1f235"
  },
  {
    "name": "Japanese “discount” button",
    "category": "symbols",
    "shortname": ":u5272:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“discount”",
      "割"
    ],
    "output": "1f239"
  },
  {
    "name": "Japanese “prohibited” button",
    "category": "symbols",
    "shortname": ":u7981:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“prohibited”",
      "禁"
    ],
    "output": "1f232"
  },
  {
    "name": "A button (blood type)",
    "category": "symbols",
    "shortname": ":a:",
    "keyWords": [
      "a",
      "blood type"
    ],
    "output": "1f170"
  },
  {
    "name": "B button (blood type)",
    "category": "symbols",
    "shortname": ":b:",
    "keyWords": [
      "b",
      "blood type"
    ],
    "output": "1f171"
  },
  {
    "name": "AB button (blood type)",
    "category": "symbols",
    "shortname": ":ab:",
    "keyWords": [
      "ab",
      "blood type"
    ],
    "output": "1f18e"
  },
  {
    "name": "CL button",
    "category": "symbols",
    "shortname": ":cl:",
    "keyWords": [
      "cl"
    ],
    "output": "1f191"
  },
  {
    "name": "O button (blood type)",
    "category": "symbols",
    "shortname": ":o2:",
    "keyWords": [
      "blood type",
      "o"
    ],
    "output": "1f17e"
  },
  {
    "name": "SOS button",
    "category": "symbols",
    "shortname": ":sos:",
    "keyWords": [
      "help",
      "sos"
    ],
    "output": "1f198"
  },
  {
    "name": "cross mark",
    "category": "symbols",
    "shortname": ":x:",
    "keyWords": [
      "cancel",
      "mark",
      "multiplication",
      "multiply",
      "x"
    ],
    "output": "274c"
  },
  {
    "name": "heavy large circle",
    "category": "symbols",
    "shortname": ":o:",
    "keyWords": [
      "circle",
      "o"
    ],
    "output": "2b55"
  },
  {
    "name": "stop sign",
    "category": "symbols",
    "shortname": ":octagonal_sign:",
    "keyWords": [
      "octagonal",
      "sign",
      "stop"
    ],
    "output": "1f6d1"
  },
  {
    "name": "no entry",
    "category": "symbols",
    "shortname": ":no_entry:",
    "keyWords": [
      "entry",
      "forbidden",
      "no",
      "not",
      "prohibited",
      "traffic"
    ],
    "output": "26d4"
  },
  {
    "name": "name badge",
    "category": "symbols",
    "shortname": ":name_badge:",
    "keyWords": [
      "badge",
      "name"
    ],
    "output": "1f4db"
  },
  {
    "name": "prohibited",
    "category": "symbols",
    "shortname": ":no_entry_sign:",
    "keyWords": [
      "entry",
      "forbidden",
      "no",
      "not"
    ],
    "output": "1f6ab"
  },
  {
    "name": "hundred points",
    "category": "symbols",
    "shortname": ":100:",
    "keyWords": [
      "100",
      "full",
      "hundred",
      "score"
    ],
    "output": "1f4af"
  },
  {
    "name": "anger symbol",
    "category": "symbols",
    "shortname": ":anger:",
    "keyWords": [
      "angry",
      "comic",
      "mad"
    ],
    "output": "1f4a2"
  },
  {
    "name": "no pedestrians",
    "category": "symbols",
    "shortname": ":no_pedestrians:",
    "keyWords": [
      "forbidden",
      "no",
      "not",
      "pedestrian",
      "prohibited"
    ],
    "output": "1f6b7"
  },
  {
    "name": "no littering",
    "category": "symbols",
    "shortname": ":do_not_litter:",
    "keyWords": [
      "forbidden",
      "litter",
      "no",
      "not",
      "prohibited"
    ],
    "output": "1f6af"
  },
  {
    "name": "no bicycles",
    "category": "symbols",
    "shortname": ":no_bicycles:",
    "keyWords": [
      "bicycle",
      "bike",
      "forbidden",
      "no",
      "not",
      "prohibited"
    ],
    "output": "1f6b3"
  },
  {
    "name": "non-potable water",
    "category": "symbols",
    "shortname": ":non-potable_water:",
    "keyWords": [
      "non-drinking",
      "non-potable",
      "water"
    ],
    "output": "1f6b1"
  },
  {
    "name": "no one under eighteen",
    "category": "symbols",
    "shortname": ":underage:",
    "keyWords": [
      "18",
      "age restriction",
      "eighteen",
      "forbidden",
      "no",
      "not",
      "prohibited",
      "underage"
    ],
    "output": "1f51e"
  },
  {
    "name": "no mobile phones",
    "category": "symbols",
    "shortname": ":no_mobile_phones:",
    "keyWords": [
      "cell",
      "forbidden",
      "mobile",
      "no",
      "not",
      "phone",
      "prohibited",
      "telephone"
    ],
    "output": "1f4f5"
  },
  {
    "name": "no smoking",
    "category": "symbols",
    "shortname": ":no_smoking:",
    "keyWords": [
      "forbidden",
      "no",
      "not",
      "prohibited",
      "smoking"
    ],
    "output": "1f6ad"
  },
  {
    "name": "double exclamation mark",
    "category": "symbols",
    "shortname": ":bangbang:",
    "keyWords": [
      "bangbang",
      "exclamation",
      "mark",
      "punctuation"
    ],
    "output": "203c"
  },
  {
    "name": "dim button",
    "category": "symbols",
    "shortname": ":low_brightness:",
    "keyWords": [
      "brightness",
      "dim",
      "low"
    ],
    "output": "1f505"
  },
  {
    "name": "bright button",
    "category": "symbols",
    "shortname": ":high_brightness:",
    "keyWords": [
      "bright",
      "brightness"
    ],
    "output": "1f506"
  },
  {
    "name": "part alternation mark",
    "category": "symbols",
    "shortname": ":part_alternation_mark:",
    "keyWords": [
      "mark",
      "part"
    ],
    "output": "303d"
  },
  {
    "name": "warning",
    "category": "symbols",
    "shortname": ":warning:",
    "keyWords": [
      "warning"
    ],
    "output": "26a0"
  },
  {
    "name": "children crossing",
    "category": "symbols",
    "shortname": ":children_crossing:",
    "keyWords": [
      "child",
      "crossing",
      "pedestrian",
      "traffic"
    ],
    "output": "1f6b8"
  },
  {
    "name": "trident emblem",
    "category": "symbols",
    "shortname": ":trident:",
    "keyWords": [
      "anchor",
      "emblem",
      "ship",
      "tool",
      "trident"
    ],
    "output": "1f531"
  },
  {
    "name": "fleur-de-lis",
    "category": "symbols",
    "shortname": ":fleur-de-lis:",
    "keyWords": [
      "fleur-de-lis"
    ],
    "output": "269c"
  },
  {
    "name": "Japanese symbol for beginner",
    "category": "symbols",
    "shortname": ":beginner:",
    "keyWords": [
      "Japanese",
      "beginner",
      "chevron",
      "green",
      "leaf",
      "tool",
      "yellow"
    ],
    "output": "1f530"
  },
  {
    "name": "recycling symbol",
    "category": "symbols",
    "shortname": ":recycle:",
    "keyWords": [
      "recycle"
    ],
    "output": "267b"
  },
  {
    "name": "Japanese “reserved” button",
    "category": "symbols",
    "shortname": ":u6307:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“reserved”",
      "指"
    ],
    "output": "1f22f"
  },
  {
    "name": "chart increasing with yen",
    "category": "symbols",
    "shortname": ":chart:",
    "keyWords": [
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
    "output": "1f4b9"
  },
  {
    "name": "cross mark button",
    "category": "symbols",
    "shortname": ":negative_squared_cross_mark:",
    "keyWords": [
      "mark",
      "square"
    ],
    "output": "274e"
  },
  {
    "name": "globe with meridians",
    "category": "symbols",
    "shortname": ":globe_with_meridians:",
    "keyWords": [
      "earth",
      "globe",
      "meridians",
      "world"
    ],
    "output": "1f310"
  },
  {
    "name": "diamond with a dot",
    "category": "symbols",
    "shortname": ":diamond_shape_with_a_dot_inside:",
    "keyWords": [
      "comic",
      "diamond",
      "geometric",
      "inside"
    ],
    "output": "1f4a0"
  },
  {
    "name": "circled M",
    "category": "symbols",
    "shortname": ":m:",
    "keyWords": [
      "circle",
      "m"
    ],
    "output": "24c2"
  },
  {
    "name": "cyclone",
    "category": "symbols",
    "shortname": ":cyclone:",
    "keyWords": [
      "dizzy",
      "twister",
      "typhoon"
    ],
    "output": "1f300"
  },
  {
    "name": "zzz",
    "category": "symbols",
    "shortname": ":zzz:",
    "keyWords": [
      "comic",
      "sleep"
    ],
    "output": "1f4a4"
  },
  {
    "name": "ATM sign",
    "category": "symbols",
    "shortname": ":atm:",
    "keyWords": [
      "atm",
      "automated",
      "bank",
      "teller"
    ],
    "output": "1f3e7"
  },
  {
    "name": "water closet",
    "category": "symbols",
    "shortname": ":wc:",
    "keyWords": [
      "closet",
      "lavatory",
      "restroom",
      "water",
      "wc"
    ],
    "output": "1f6be"
  },
  {
    "name": "wheelchair symbol",
    "category": "symbols",
    "shortname": ":wheelchair:",
    "keyWords": [
      "access"
    ],
    "output": "267f"
  },
  {
    "name": "P button",
    "category": "symbols",
    "shortname": ":parking:",
    "keyWords": [
      "parking"
    ],
    "output": "1f17f"
  },
  {
    "name": "Japanese “vacancy” button",
    "category": "symbols",
    "shortname": ":u7a7a:",
    "keyWords": [
      "Japanese",
      "ideograph",
      "“vacancy”",
      "空"
    ],
    "output": "1f233"
  },
  {
    "name": "Japanese “service charge” button",
    "category": "symbols",
    "shortname": ":sa:",
    "keyWords": [
      "Japanese",
      "katakana",
      "“service charge”",
      "サ"
    ],
    "output": "1f202"
  },
  {
    "name": "passport control",
    "category": "symbols",
    "shortname": ":passport_control:",
    "keyWords": [
      "control",
      "passport"
    ],
    "output": "1f6c2"
  },
  {
    "name": "customs",
    "category": "symbols",
    "shortname": ":customs:",
    "keyWords": [
      "customs"
    ],
    "output": "1f6c3"
  },
  {
    "name": "baggage claim",
    "category": "symbols",
    "shortname": ":baggage_claim:",
    "keyWords": [
      "baggage",
      "claim"
    ],
    "output": "1f6c4"
  },
  {
    "name": "left luggage",
    "category": "symbols",
    "shortname": ":left_luggage:",
    "keyWords": [
      "baggage",
      "locker",
      "luggage"
    ],
    "output": "1f6c5"
  },
  {
    "name": "men’s room",
    "category": "symbols",
    "shortname": ":mens:",
    "keyWords": [
      "lavatory",
      "man",
      "restroom",
      "wc"
    ],
    "output": "1f6b9"
  },
  {
    "name": "women’s room",
    "category": "symbols",
    "shortname": ":womens:",
    "keyWords": [
      "lavatory",
      "restroom",
      "wc",
      "woman"
    ],
    "output": "1f6ba"
  },
  {
    "name": "baby symbol",
    "category": "symbols",
    "shortname": ":baby_symbol:",
    "keyWords": [
      "baby",
      "changing"
    ],
    "output": "1f6bc"
  },
  {
    "name": "restroom",
    "category": "symbols",
    "shortname": ":restroom:",
    "keyWords": [
      "WC",
      "lavatory",
      "restroom"
    ],
    "output": "1f6bb"
  },
  {
    "name": "litter in bin sign",
    "category": "symbols",
    "shortname": ":put_litter_in_its_place:",
    "keyWords": [
      "litter",
      "litter bin"
    ],
    "output": "1f6ae"
  },
  {
    "name": "cinema",
    "category": "symbols",
    "shortname": ":cinema:",
    "keyWords": [
      "camera",
      "film",
      "movie"
    ],
    "output": "1f3a6"
  },
  {
    "name": "antenna bars",
    "category": "symbols",
    "shortname": ":signal_strength:",
    "keyWords": [
      "antenna",
      "bar",
      "cell",
      "mobile",
      "phone",
      "signal",
      "telephone"
    ],
    "output": "1f4f6"
  },
  {
    "name": "Japanese “here” button",
    "category": "symbols",
    "shortname": ":koko:",
    "keyWords": [
      "Japanese",
      "katakana",
      "“here”",
      "ココ"
    ],
    "output": "1f201"
  },
  {
    "name": "input symbols",
    "category": "symbols",
    "shortname": ":symbols:",
    "keyWords": [
      "input",
      "〒♪&amp;%"
    ],
    "output": "1f523"
  },
  {
    "name": "input latin letters",
    "category": "symbols",
    "shortname": ":abc:",
    "keyWords": [
      "abc",
      "alphabet",
      "input",
      "latin",
      "letters"
    ],
    "output": "1f524"
  },
  {
    "name": "input latin lowercase",
    "category": "symbols",
    "shortname": ":abcd:",
    "keyWords": [
      "abcd",
      "input",
      "latin",
      "letters",
      "lowercase"
    ],
    "output": "1f521"
  },
  {
    "name": "input latin uppercase",
    "category": "symbols",
    "shortname": ":capital_abcd:",
    "keyWords": [
      "ABCD",
      "input",
      "latin",
      "letters",
      "uppercase"
    ],
    "output": "1f520"
  },
  {
    "name": "NG button",
    "category": "symbols",
    "shortname": ":ng:",
    "keyWords": [
      "ng"
    ],
    "output": "1f196"
  },
  {
    "name": "OK button",
    "category": "symbols",
    "shortname": ":ok:",
    "keyWords": [
      "OK"
    ],
    "output": "1f197"
  },
  {
    "name": "UP! button",
    "category": "symbols",
    "shortname": ":up:",
    "keyWords": [
      "mark",
      "up"
    ],
    "output": "1f199"
  },
  {
    "name": "COOL button",
    "category": "symbols",
    "shortname": ":cool:",
    "keyWords": [
      "cool"
    ],
    "output": "1f192"
  },
  {
    "name": "NEW button",
    "category": "symbols",
    "shortname": ":new:",
    "keyWords": [
      "new"
    ],
    "output": "1f195"
  },
  {
    "name": "FREE button",
    "category": "symbols",
    "shortname": ":free:",
    "keyWords": [
      "free"
    ],
    "output": "1f193"
  },
  {
    "name": "keycap: 0",
    "category": "symbols",
    "shortname": ":zero:",
    "keyWords": [
      "keycap"
    ],
    "output": "0030-fe0f-20e3"
  },
  {
    "name": "keycap: 1",
    "category": "symbols",
    "shortname": ":one:",
    "keyWords": [
      "keycap"
    ],
    "output": "0031-fe0f-20e3"
  },
  {
    "name": "keycap: 2",
    "category": "symbols",
    "shortname": ":two:",
    "keyWords": [
      "keycap"
    ],
    "output": "0032-fe0f-20e3"
  },
  {
    "name": "keycap: 3",
    "category": "symbols",
    "shortname": ":three:",
    "keyWords": [
      "keycap"
    ],
    "output": "0033-fe0f-20e3"
  },
  {
    "name": "keycap: 4",
    "category": "symbols",
    "shortname": ":four:",
    "keyWords": [
      "keycap"
    ],
    "output": "0034-fe0f-20e3"
  },
  {
    "name": "keycap: 5",
    "category": "symbols",
    "shortname": ":five:",
    "keyWords": [
      "keycap"
    ],
    "output": "0035-fe0f-20e3"
  },
  {
    "name": "keycap: 6",
    "category": "symbols",
    "shortname": ":six:",
    "keyWords": [
      "keycap"
    ],
    "output": "0036-fe0f-20e3"
  },
  {
    "name": "keycap: 7",
    "category": "symbols",
    "shortname": ":seven:",
    "keyWords": [
      "keycap"
    ],
    "output": "0037-fe0f-20e3"
  },
  {
    "name": "keycap: 8",
    "category": "symbols",
    "shortname": ":eight:",
    "keyWords": [
      "keycap"
    ],
    "output": "0038-fe0f-20e3"
  },
  {
    "name": "keycap: 9",
    "category": "symbols",
    "shortname": ":nine:",
    "keyWords": [
      "keycap"
    ],
    "output": "0039-fe0f-20e3"
  },
  {
    "name": "keycap: 10",
    "category": "symbols",
    "shortname": ":keycap_ten:",
    "keyWords": [
      "keycap 10"
    ],
    "output": "1f51f"
  },
  {
    "name": "input numbers",
    "category": "symbols",
    "shortname": ":1234:",
    "keyWords": [
      "1234",
      "input",
      "numbers"
    ],
    "output": "1f522"
  },
  {
    "name": "keycap: #",
    "category": "symbols",
    "shortname": ":hash:",
    "keyWords": [
      "keycap"
    ],
    "output": "0023-fe0f-20e3"
  },
  {
    "name": "keycap: *",
    "category": "symbols",
    "shortname": ":asterisk:",
    "keyWords": [
      "keycap"
    ],
    "output": "002a-fe0f-20e3"
  },
  {
    "name": "eject button",
    "category": "symbols",
    "shortname": ":eject:",
    "keyWords": [
      "eject"
    ],
    "output": "23cf"
  },
  {
    "name": "play button",
    "category": "symbols",
    "shortname": ":arrow_forward:",
    "keyWords": [
      "arrow",
      "play",
      "right",
      "triangle"
    ],
    "output": "25b6"
  },
  {
    "name": "pause button",
    "category": "symbols",
    "shortname": ":pause_button:",
    "keyWords": [
      "bar",
      "double",
      "pause",
      "vertical"
    ],
    "output": "23f8"
  },
  {
    "name": "play or pause button",
    "category": "symbols",
    "shortname": ":play_pause:",
    "keyWords": [
      "arrow",
      "pause",
      "play",
      "right",
      "triangle"
    ],
    "output": "23ef"
  },
  {
    "name": "stop button",
    "category": "symbols",
    "shortname": ":stop_button:",
    "keyWords": [
      "square",
      "stop"
    ],
    "output": "23f9"
  },
  {
    "name": "record button",
    "category": "symbols",
    "shortname": ":record_button:",
    "keyWords": [
      "circle",
      "record"
    ],
    "output": "23fa"
  },
  {
    "name": "next track button",
    "category": "symbols",
    "shortname": ":track_next:",
    "keyWords": [
      "arrow",
      "next scene",
      "next track",
      "triangle"
    ],
    "output": "23ed"
  },
  {
    "name": "last track button",
    "category": "symbols",
    "shortname": ":track_previous:",
    "keyWords": [
      "arrow",
      "previous scene",
      "previous track",
      "triangle"
    ],
    "output": "23ee"
  },
  {
    "name": "fast-forward button",
    "category": "symbols",
    "shortname": ":fast_forward:",
    "keyWords": [
      "arrow",
      "double",
      "fast",
      "forward"
    ],
    "output": "23e9"
  },
  {
    "name": "fast reverse button",
    "category": "symbols",
    "shortname": ":rewind:",
    "keyWords": [
      "arrow",
      "double",
      "rewind"
    ],
    "output": "23ea"
  },
  {
    "name": "fast up button",
    "category": "symbols",
    "shortname": ":arrow_double_up:",
    "keyWords": [
      "arrow",
      "double"
    ],
    "output": "23eb"
  },
  {
    "name": "fast down button",
    "category": "symbols",
    "shortname": ":arrow_double_down:",
    "keyWords": [
      "arrow",
      "double",
      "down"
    ],
    "output": "23ec"
  },
  {
    "name": "reverse button",
    "category": "symbols",
    "shortname": ":arrow_backward:",
    "keyWords": [
      "arrow",
      "left",
      "reverse",
      "triangle"
    ],
    "output": "25c0"
  },
  {
    "name": "upwards button",
    "category": "symbols",
    "shortname": ":arrow_up_small:",
    "keyWords": [
      "arrow",
      "button",
      "red"
    ],
    "output": "1f53c"
  },
  {
    "name": "downwards button",
    "category": "symbols",
    "shortname": ":arrow_down_small:",
    "keyWords": [
      "arrow",
      "button",
      "down",
      "red"
    ],
    "output": "1f53d"
  },
  {
    "name": "right arrow",
    "category": "symbols",
    "shortname": ":arrow_right:",
    "keyWords": [
      "arrow",
      "cardinal",
      "direction",
      "east"
    ],
    "output": "27a1"
  },
  {
    "name": "left arrow",
    "category": "symbols",
    "shortname": ":arrow_left:",
    "keyWords": [
      "arrow",
      "cardinal",
      "direction",
      "west"
    ],
    "output": "2b05"
  },
  {
    "name": "up arrow",
    "category": "symbols",
    "shortname": ":arrow_up:",
    "keyWords": [
      "arrow",
      "cardinal",
      "direction",
      "north"
    ],
    "output": "2b06"
  },
  {
    "name": "down arrow",
    "category": "symbols",
    "shortname": ":arrow_down:",
    "keyWords": [
      "arrow",
      "cardinal",
      "direction",
      "down",
      "south"
    ],
    "output": "2b07"
  },
  {
    "name": "left arrow curving right",
    "category": "symbols",
    "shortname": ":arrow_right_hook:",
    "keyWords": [
      "arrow"
    ],
    "output": "21aa"
  },
  {
    "name": "right arrow curving left",
    "category": "symbols",
    "shortname": ":leftwards_arrow_with_hook:",
    "keyWords": [
      "arrow"
    ],
    "output": "21a9"
  },
  {
    "name": "shuffle tracks button",
    "category": "symbols",
    "shortname": ":twisted_rightwards_arrows:",
    "keyWords": [
      "arrow",
      "crossed"
    ],
    "output": "1f500"
  },
  {
    "name": "repeat button",
    "category": "symbols",
    "shortname": ":repeat:",
    "keyWords": [
      "arrow",
      "clockwise",
      "repeat"
    ],
    "output": "1f501"
  },
  {
    "name": "repeat single button",
    "category": "symbols",
    "shortname": ":repeat_one:",
    "keyWords": [
      "arrow",
      "clockwise",
      "once"
    ],
    "output": "1f502"
  },
  {
    "name": "counterclockwise arrows button",
    "category": "symbols",
    "shortname": ":arrows_counterclockwise:",
    "keyWords": [
      "anticlockwise",
      "arrow",
      "counterclockwise",
      "withershins"
    ],
    "output": "1f504"
  },
  {
    "name": "clockwise vertical arrows",
    "category": "symbols",
    "shortname": ":arrows_clockwise:",
    "keyWords": [
      "arrow",
      "clockwise",
      "reload"
    ],
    "output": "1f503"
  },
  {
    "name": "musical note",
    "category": "symbols",
    "shortname": ":musical_note:",
    "keyWords": [
      "music",
      "note"
    ],
    "output": "1f3b5"
  },
  {
    "name": "musical notes",
    "category": "symbols",
    "shortname": ":notes:",
    "keyWords": [
      "music",
      "note",
      "notes"
    ],
    "output": "1f3b6"
  },
  {
    "name": "heavy dollar sign",
    "category": "symbols",
    "shortname": ":heavy_dollar_sign:",
    "keyWords": [
      "currency",
      "dollar",
      "money"
    ],
    "output": "1f4b2"
  },
  {
    "name": "currency exchange",
    "category": "symbols",
    "shortname": ":currency_exchange:",
    "keyWords": [
      "bank",
      "currency",
      "exchange",
      "money"
    ],
    "output": "1f4b1"
  },
  {
    "name": "copyright",
    "category": "symbols",
    "shortname": ":copyright:",
    "keyWords": [
      "copyright"
    ],
    "output": "00a9"
  },
  {
    "name": "registered",
    "category": "symbols",
    "shortname": ":registered:",
    "keyWords": [
      "registered"
    ],
    "output": "00ae"
  },
  {
    "name": "curly loop",
    "category": "symbols",
    "shortname": ":curly_loop:",
    "keyWords": [
      "curl",
      "loop"
    ],
    "output": "27b0"
  },
  {
    "name": "double curly loop",
    "category": "symbols",
    "shortname": ":loop:",
    "keyWords": [
      "curl",
      "double",
      "loop"
    ],
    "output": "27bf"
  },
  {
    "name": "END arrow",
    "category": "symbols",
    "shortname": ":end:",
    "keyWords": [
      "arrow",
      "end"
    ],
    "output": "1f51a"
  },
  {
    "name": "BACK arrow",
    "category": "symbols",
    "shortname": ":back:",
    "keyWords": [
      "arrow",
      "back"
    ],
    "output": "1f519"
  },
  {
    "name": "ON! arrow",
    "category": "symbols",
    "shortname": ":on:",
    "keyWords": [
      "arrow",
      "mark",
      "on"
    ],
    "output": "1f51b"
  },
  {
    "name": "TOP arrow",
    "category": "symbols",
    "shortname": ":top:",
    "keyWords": [
      "arrow",
      "top",
      "up"
    ],
    "output": "1f51d"
  },
  {
    "name": "SOON arrow",
    "category": "symbols",
    "shortname": ":soon:",
    "keyWords": [
      "arrow",
      "soon"
    ],
    "output": "1f51c"
  },
  {
    "name": "radio button",
    "category": "symbols",
    "shortname": ":radio_button:",
    "keyWords": [
      "button",
      "geometric",
      "radio"
    ],
    "output": "1f518"
  },
  {
    "name": "white circle",
    "category": "symbols",
    "shortname": ":white_circle:",
    "keyWords": [
      "circle",
      "geometric"
    ],
    "output": "26aa"
  },
  {
    "name": "black circle",
    "category": "symbols",
    "shortname": ":black_circle:",
    "keyWords": [
      "circle",
      "geometric"
    ],
    "output": "26ab"
  },
  {
    "name": "red circle",
    "category": "symbols",
    "shortname": ":red_circle:",
    "keyWords": [
      "circle",
      "geometric",
      "red"
    ],
    "output": "1f534"
  },
  {
    "name": "blue circle",
    "category": "symbols",
    "shortname": ":blue_circle:",
    "keyWords": [
      "blue",
      "circle",
      "geometric"
    ],
    "output": "1f535"
  },
  {
    "name": "red triangle pointed up",
    "category": "symbols",
    "shortname": ":small_red_triangle:",
    "keyWords": [
      "geometric",
      "red"
    ],
    "output": "1f53a"
  },
  {
    "name": "red triangle pointed down",
    "category": "symbols",
    "shortname": ":small_red_triangle_down:",
    "keyWords": [
      "down",
      "geometric",
      "red"
    ],
    "output": "1f53b"
  },
  {
    "name": "small orange diamond",
    "category": "symbols",
    "shortname": ":small_orange_diamond:",
    "keyWords": [
      "diamond",
      "geometric",
      "orange"
    ],
    "output": "1f538"
  },
  {
    "name": "small blue diamond",
    "category": "symbols",
    "shortname": ":small_blue_diamond:",
    "keyWords": [
      "blue",
      "diamond",
      "geometric"
    ],
    "output": "1f539"
  },
  {
    "name": "large orange diamond",
    "category": "symbols",
    "shortname": ":large_orange_diamond:",
    "keyWords": [
      "diamond",
      "geometric",
      "orange"
    ],
    "output": "1f536"
  },
  {
    "name": "large blue diamond",
    "category": "symbols",
    "shortname": ":large_blue_diamond:",
    "keyWords": [
      "blue",
      "diamond",
      "geometric"
    ],
    "output": "1f537"
  },
  {
    "name": "white square button",
    "category": "symbols",
    "shortname": ":white_square_button:",
    "keyWords": [
      "button",
      "geometric",
      "outlined",
      "square"
    ],
    "output": "1f533"
  },
  {
    "name": "black square button",
    "category": "symbols",
    "shortname": ":black_square_button:",
    "keyWords": [
      "button",
      "geometric",
      "square"
    ],
    "output": "1f532"
  },
  {
    "name": "black small square",
    "category": "symbols",
    "shortname": ":black_small_square:",
    "keyWords": [
      "geometric",
      "square"
    ],
    "output": "25aa"
  },
  {
    "name": "white small square",
    "category": "symbols",
    "shortname": ":white_small_square:",
    "keyWords": [
      "geometric",
      "square"
    ],
    "output": "25ab"
  },
  {
    "name": "black medium-small square",
    "category": "symbols",
    "shortname": ":black_medium_small_square:",
    "keyWords": [
      "geometric",
      "square"
    ],
    "output": "25fe"
  },
  {
    "name": "white medium-small square",
    "category": "symbols",
    "shortname": ":white_medium_small_square:",
    "keyWords": [
      "geometric",
      "square"
    ],
    "output": "25fd"
  },
  {
    "name": "black medium square",
    "category": "symbols",
    "shortname": ":black_medium_square:",
    "keyWords": [
      "geometric",
      "square"
    ],
    "output": "25fc"
  },
  {
    "name": "white medium square",
    "category": "symbols",
    "shortname": ":white_medium_square:",
    "keyWords": [
      "geometric",
      "square"
    ],
    "output": "25fb"
  },
  {
    "name": "black large square",
    "category": "symbols",
    "shortname": ":black_large_square:",
    "keyWords": [
      "geometric",
      "square"
    ],
    "output": "2b1b"
  },
  {
    "name": "white large square",
    "category": "symbols",
    "shortname": ":white_large_square:",
    "keyWords": [
      "geometric",
      "square"
    ],
    "output": "2b1c"
  },
  {
    "name": "speaker low volume",
    "category": "symbols",
    "shortname": ":speaker:",
    "keyWords": [
      "soft"
    ],
    "output": "1f508"
  },
  {
    "name": "muted speaker",
    "category": "symbols",
    "shortname": ":mute:",
    "keyWords": [
      "mute",
      "quiet",
      "silent",
      "speaker"
    ],
    "output": "1f507"
  },
  {
    "name": "speaker medium volume",
    "category": "symbols",
    "shortname": ":sound:",
    "keyWords": [
      "medium"
    ],
    "output": "1f509"
  },
  {
    "name": "speaker high volume",
    "category": "symbols",
    "shortname": ":loud_sound:",
    "keyWords": [
      "loud"
    ],
    "output": "1f50a"
  },
  {
    "name": "bell",
    "category": "symbols",
    "shortname": ":bell:",
    "keyWords": [
      "bell"
    ],
    "output": "1f514"
  },
  {
    "name": "bell with slash",
    "category": "symbols",
    "shortname": ":no_bell:",
    "keyWords": [
      "bell",
      "forbidden",
      "mute",
      "no",
      "not",
      "prohibited",
      "quiet",
      "silent"
    ],
    "output": "1f515"
  },
  {
    "name": "megaphone",
    "category": "symbols",
    "shortname": ":mega:",
    "keyWords": [
      "cheering"
    ],
    "output": "1f4e3"
  },
  {
    "name": "loudspeaker",
    "category": "symbols",
    "shortname": ":loudspeaker:",
    "keyWords": [
      "loud",
      "public address"
    ],
    "output": "1f4e2"
  },
  {
    "name": "left speech bubble",
    "category": "symbols",
    "shortname": ":speech_left:",
    "keyWords": [
      "dialog",
      "speech"
    ],
    "output": "1f5e8"
  },
  {
    "name": "eye in speech bubble",
    "category": "symbols",
    "shortname": ":eye_in_speech_bubble:",
    "keyWords": [
      "eye",
      "speech bubble",
      "witness"
    ],
    "output": "1f441-fe0f-200d-1f5e8-fe0f"
  },
  {
    "name": "speech balloon",
    "category": "symbols",
    "shortname": ":speech_balloon:",
    "keyWords": [
      "balloon",
      "bubble",
      "comic",
      "dialog",
      "speech"
    ],
    "output": "1f4ac"
  },
  {
    "name": "thought balloon",
    "category": "symbols",
    "shortname": ":thought_balloon:",
    "keyWords": [
      "balloon",
      "bubble",
      "comic",
      "thought"
    ],
    "output": "1f4ad"
  },
  {
    "name": "right anger bubble",
    "category": "symbols",
    "shortname": ":anger_right:",
    "keyWords": [
      "angry",
      "balloon",
      "bubble",
      "mad"
    ],
    "output": "1f5ef"
  },
  {
    "name": "joker",
    "category": "symbols",
    "shortname": ":black_joker:",
    "keyWords": [
      "card",
      "game",
      "wildcard"
    ],
    "output": "1f0cf"
  },
  {
    "name": "flower playing cards",
    "category": "symbols",
    "shortname": ":flower_playing_cards:",
    "keyWords": [
      "Japanese",
      "card",
      "flower",
      "game",
      "playing"
    ],
    "output": "1f3b4"
  },
  {
    "name": "mahjong red dragon",
    "category": "symbols",
    "shortname": ":mahjong:",
    "keyWords": [
      "game",
      "mahjong",
      "red"
    ],
    "output": "1f004"
  },
  {
    "name": "one o’clock",
    "category": "symbols",
    "shortname": ":clock1:",
    "keyWords": [
      "00",
      "1",
      "1:00",
      "clock",
      "one",
      "o’clock"
    ],
    "output": "1f550"
  },
  {
    "name": "two o’clock",
    "category": "symbols",
    "shortname": ":clock2:",
    "keyWords": [
      "00",
      "2",
      "2:00",
      "clock",
      "o’clock",
      "two"
    ],
    "output": "1f551"
  },
  {
    "name": "three o’clock",
    "category": "symbols",
    "shortname": ":clock3:",
    "keyWords": [
      "00",
      "3",
      "3:00",
      "clock",
      "o’clock",
      "three"
    ],
    "output": "1f552"
  },
  {
    "name": "four o’clock",
    "category": "symbols",
    "shortname": ":clock4:",
    "keyWords": [
      "00",
      "4",
      "4:00",
      "clock",
      "four",
      "o’clock"
    ],
    "output": "1f553"
  },
  {
    "name": "five o’clock",
    "category": "symbols",
    "shortname": ":clock5:",
    "keyWords": [
      "00",
      "5",
      "5:00",
      "clock",
      "five",
      "o’clock"
    ],
    "output": "1f554"
  },
  {
    "name": "six o’clock",
    "category": "symbols",
    "shortname": ":clock6:",
    "keyWords": [
      "00",
      "6",
      "6:00",
      "clock",
      "o’clock",
      "six"
    ],
    "output": "1f555"
  },
  {
    "name": "seven o’clock",
    "category": "symbols",
    "shortname": ":clock7:",
    "keyWords": [
      "00",
      "7",
      "7:00",
      "clock",
      "o’clock",
      "seven"
    ],
    "output": "1f556"
  },
  {
    "name": "eight o’clock",
    "category": "symbols",
    "shortname": ":clock8:",
    "keyWords": [
      "00",
      "8",
      "8:00",
      "clock",
      "eight",
      "o’clock"
    ],
    "output": "1f557"
  },
  {
    "name": "nine o’clock",
    "category": "symbols",
    "shortname": ":clock9:",
    "keyWords": [
      "00",
      "9",
      "9:00",
      "clock",
      "nine",
      "o’clock"
    ],
    "output": "1f558"
  },
  {
    "name": "ten o’clock",
    "category": "symbols",
    "shortname": ":clock10:",
    "keyWords": [
      "00",
      "10",
      "10:00",
      "clock",
      "o’clock",
      "ten"
    ],
    "output": "1f559"
  },
  {
    "name": "eleven o’clock",
    "category": "symbols",
    "shortname": ":clock11:",
    "keyWords": [
      "00",
      "11",
      "11:00",
      "clock",
      "eleven",
      "o’clock"
    ],
    "output": "1f55a"
  },
  {
    "name": "twelve o’clock",
    "category": "symbols",
    "shortname": ":clock12:",
    "keyWords": [
      "00",
      "12",
      "12:00",
      "clock",
      "o’clock",
      "twelve"
    ],
    "output": "1f55b"
  },
  {
    "name": "one-thirty",
    "category": "symbols",
    "shortname": ":clock130:",
    "keyWords": [
      "1",
      "1:30",
      "30",
      "clock",
      "one",
      "thirty"
    ],
    "output": "1f55c"
  },
  {
    "name": "two-thirty",
    "category": "symbols",
    "shortname": ":clock230:",
    "keyWords": [
      "2",
      "2:30",
      "30",
      "clock",
      "thirty",
      "two"
    ],
    "output": "1f55d"
  },
  {
    "name": "three-thirty",
    "category": "symbols",
    "shortname": ":clock330:",
    "keyWords": [
      "3",
      "30",
      "3:30",
      "clock",
      "thirty",
      "three"
    ],
    "output": "1f55e"
  },
  {
    "name": "four-thirty",
    "category": "symbols",
    "shortname": ":clock430:",
    "keyWords": [
      "4",
      "30",
      "4:30",
      "clock",
      "four",
      "thirty"
    ],
    "output": "1f55f"
  },
  {
    "name": "five-thirty",
    "category": "symbols",
    "shortname": ":clock530:",
    "keyWords": [
      "5",
      "30",
      "5:30",
      "clock",
      "five",
      "thirty"
    ],
    "output": "1f560"
  },
  {
    "name": "six-thirty",
    "category": "symbols",
    "shortname": ":clock630:",
    "keyWords": [
      "6",
      "30",
      "6:30",
      "clock",
      "six",
      "thirty"
    ],
    "output": "1f561"
  },
  {
    "name": "seven-thirty",
    "category": "symbols",
    "shortname": ":clock730:",
    "keyWords": [
      "7",
      "30",
      "7:30",
      "clock",
      "seven",
      "thirty"
    ],
    "output": "1f562"
  },
  {
    "name": "eight-thirty",
    "category": "symbols",
    "shortname": ":clock830:",
    "keyWords": [
      "8",
      "30",
      "8:30",
      "clock",
      "eight",
      "thirty"
    ],
    "output": "1f563"
  },
  {
    "name": "nine-thirty",
    "category": "symbols",
    "shortname": ":clock930:",
    "keyWords": [
      "9",
      "30",
      "9:30",
      "clock",
      "nine",
      "thirty"
    ],
    "output": "1f564"
  },
  {
    "name": "ten-thirty",
    "category": "symbols",
    "shortname": ":clock1030:",
    "keyWords": [
      "10",
      "10:30",
      "30",
      "clock",
      "ten",
      "thirty"
    ],
    "output": "1f565"
  },
  {
    "name": "eleven-thirty",
    "category": "symbols",
    "shortname": ":clock1130:",
    "keyWords": [
      "11",
      "11:30",
      "30",
      "clock",
      "eleven",
      "thirty"
    ],
    "output": "1f566"
  },
  {
    "name": "twelve-thirty",
    "category": "symbols",
    "shortname": ":clock1230:",
    "keyWords": [
      "12",
      "12:30",
      "30",
      "clock",
      "thirty",
      "twelve"
    ],
    "output": "1f567"
  },
  {
    "name": "digit zero",
    "category": "symbols",
    "shortname": ":digit_zero:",
    "keyWords": [
      ""
    ],
    "output": "0030"
  },
  {
    "name": "digit one",
    "category": "symbols",
    "shortname": ":digit_one:",
    "keyWords": [
      ""
    ],
    "output": "0031"
  },
  {
    "name": "digit two",
    "category": "symbols",
    "shortname": ":digit_two:",
    "keyWords": [
      ""
    ],
    "output": "0032"
  },
  {
    "name": "digit three",
    "category": "symbols",
    "shortname": ":digit_three:",
    "keyWords": [
      ""
    ],
    "output": "0033"
  },
  {
    "name": "digit four",
    "category": "symbols",
    "shortname": ":digit_four:",
    "keyWords": [
      ""
    ],
    "output": "0034"
  },
  {
    "name": "digit five",
    "category": "symbols",
    "shortname": ":digit_five:",
    "keyWords": [
      ""
    ],
    "output": "0035"
  },
  {
    "name": "digit six",
    "category": "symbols",
    "shortname": ":digit_six:",
    "keyWords": [
      ""
    ],
    "output": "0036"
  },
  {
    "name": "digit seven",
    "category": "symbols",
    "shortname": ":digit_seven:",
    "keyWords": [
      ""
    ],
    "output": "0037"
  },
  {
    "name": "digit eight",
    "category": "symbols",
    "shortname": ":digit_eight:",
    "keyWords": [
      ""
    ],
    "output": "0038"
  },
  {
    "name": "digit nine",
    "category": "symbols",
    "shortname": ":digit_nine:",
    "keyWords": [
      ""
    ],
    "output": "0039"
  },
  {
    "name": "pound symbol",
    "category": "symbols",
    "shortname": ":pound_symbol:",
    "keyWords": [
      ""
    ],
    "output": "0023"
  },
  {
    "name": "asterisk",
    "category": "symbols",
    "shortname": ":asterisk_symbol:",
    "keyWords": [
      ""
    ],
    "output": "002a"
  },
  {
    "name": "soccer ball",
    "category": "activity",
    "shortname": ":soccer:",
    "keyWords": [
      "ball",
      "football",
      "soccer"
    ],
    "output": "26bd"
  },
  {
    "name": "basketball",
    "category": "activity",
    "shortname": ":basketball:",
    "keyWords": [
      "ball",
      "hoop"
    ],
    "output": "1f3c0"
  },
  {
    "name": "american football",
    "category": "activity",
    "shortname": ":football:",
    "keyWords": [
      "american",
      "ball",
      "football"
    ],
    "output": "1f3c8"
  },
  {
    "name": "baseball",
    "category": "activity",
    "shortname": ":baseball:",
    "keyWords": [
      "ball"
    ],
    "output": "26be"
  },
  {
    "name": "softball",
    "category": "activity",
    "shortname": ":softball:",
    "keyWords": [
      ""
    ],
    "output": "1f94e"
  },
  {
    "name": "tennis",
    "category": "activity",
    "shortname": ":tennis:",
    "keyWords": [
      "ball",
      "racquet"
    ],
    "output": "1f3be"
  },
  {
    "name": "volleyball",
    "category": "activity",
    "shortname": ":volleyball:",
    "keyWords": [
      "ball",
      "game"
    ],
    "output": "1f3d0"
  },
  {
    "name": "rugby football",
    "category": "activity",
    "shortname": ":rugby_football:",
    "keyWords": [
      "ball",
      "football",
      "rugby"
    ],
    "output": "1f3c9"
  },
  {
    "name": "pool 8 ball",
    "category": "activity",
    "shortname": ":8ball:",
    "keyWords": [
      "8",
      "8 ball",
      "ball",
      "billiard",
      "eight",
      "game"
    ],
    "output": "1f3b1"
  },
  {
    "name": "ping pong",
    "category": "activity",
    "shortname": ":ping_pong:",
    "keyWords": [
      "ball",
      "bat",
      "game",
      "paddle",
      "ping pong",
      "table tennis"
    ],
    "output": "1f3d3"
  },
  {
    "name": "badminton",
    "category": "activity",
    "shortname": ":badminton:",
    "keyWords": [
      "birdie",
      "game",
      "racquet",
      "shuttlecock"
    ],
    "output": "1f3f8"
  },
  {
    "name": "goal net",
    "category": "activity",
    "shortname": ":goal:",
    "keyWords": [
      "goal",
      "net"
    ],
    "output": "1f945"
  },
  {
    "name": "ice hockey",
    "category": "activity",
    "shortname": ":hockey:",
    "keyWords": [
      "game",
      "hockey",
      "ice",
      "puck",
      "stick"
    ],
    "output": "1f3d2"
  },
  {
    "name": "field hockey",
    "category": "activity",
    "shortname": ":field_hockey:",
    "keyWords": [
      "ball",
      "field",
      "game",
      "hockey",
      "stick"
    ],
    "output": "1f3d1"
  },
  {
    "name": "cricket game",
    "category": "activity",
    "shortname": ":cricket_game:",
    "keyWords": [
      "ball",
      "bat",
      "game"
    ],
    "output": "1f3cf"
  },
  {
    "name": "lacrosse",
    "category": "activity",
    "shortname": ":lacrosse:",
    "keyWords": [
      ""
    ],
    "output": "1f94d"
  },
  {
    "name": "flag in hole",
    "category": "activity",
    "shortname": ":golf:",
    "keyWords": [
      "golf",
      "hole"
    ],
    "output": "26f3"
  },
  {
    "name": "flying disc",
    "category": "activity",
    "shortname": ":flying_disc:",
    "keyWords": [
      ""
    ],
    "output": "1f94f"
  },
  {
    "name": "bow and arrow",
    "category": "activity",
    "shortname": ":bow_and_arrow:",
    "keyWords": [
      "Sagittarius",
      "archer",
      "archery",
      "arrow",
      "bow",
      "tool",
      "weapon",
      "zodiac"
    ],
    "output": "1f3f9"
  },
  {
    "name": "fishing pole",
    "category": "activity",
    "shortname": ":fishing_pole_and_fish:",
    "keyWords": [
      "fish",
      "pole"
    ],
    "output": "1f3a3"
  },
  {
    "name": "boxing glove",
    "category": "activity",
    "shortname": ":boxing_glove:",
    "keyWords": [
      "boxing",
      "glove"
    ],
    "output": "1f94a"
  },
  {
    "name": "martial arts uniform",
    "category": "activity",
    "shortname": ":martial_arts_uniform:",
    "keyWords": [
      "judo",
      "karate",
      "martial arts",
      "taekwondo",
      "uniform"
    ],
    "output": "1f94b"
  },
  {
    "name": "running shirt",
    "category": "activity",
    "shortname": ":running_shirt_with_sash:",
    "keyWords": [
      "athletics",
      "running",
      "sash",
      "shirt"
    ],
    "output": "1f3bd"
  },
  {
    "name": "skateboard",
    "category": "activity",
    "shortname": ":skateboard:",
    "keyWords": [
      ""
    ],
    "output": "1f6f9"
  },
  {
    "name": "ice skate",
    "category": "activity",
    "shortname": ":ice_skate:",
    "keyWords": [
      "ice",
      "skate"
    ],
    "output": "26f8"
  },
  {
    "name": "curling stone",
    "category": "activity",
    "shortname": ":curling_stone:",
    "keyWords": [
      "game",
      "rock"
    ],
    "output": "1f94c"
  },
  {
    "name": "sled",
    "category": "activity",
    "shortname": ":sled:",
    "keyWords": [
      ""
    ],
    "output": "1f6f7"
  },
  {
    "name": "skis",
    "category": "activity",
    "shortname": ":ski:",
    "keyWords": [
      "ski",
      "snow"
    ],
    "output": "1f3bf"
  },
  {
    "name": "skier",
    "category": "activity",
    "shortname": ":skier:",
    "keyWords": [
      "ski",
      "snow"
    ],
    "output": "26f7"
  },
  {
    "name": "snowboarder",
    "category": "activity",
    "shortname": ":snowboarder:",
    "keyWords": [
      "ski",
      "snow",
      "snowboard"
    ],
    "output": "1f3c2"
  },
  {
    "name": "snowboarder: light skin tone",
    "category": "activity",
    "shortname": ":snowboarder_tone1:",
    "keyWords": [
      "light skin tone",
      "ski",
      "snow",
      "snowboard"
    ],
    "output": "1f3c2-1f3fb"
  },
  {
    "name": "snowboarder: medium-light skin tone",
    "category": "activity",
    "shortname": ":snowboarder_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "ski",
      "snow",
      "snowboard"
    ],
    "output": "1f3c2-1f3fc"
  },
  {
    "name": "snowboarder: medium skin tone",
    "category": "activity",
    "shortname": ":snowboarder_tone3:",
    "keyWords": [
      "medium skin tone",
      "ski",
      "snow",
      "snowboard"
    ],
    "output": "1f3c2-1f3fd"
  },
  {
    "name": "snowboarder: medium-dark skin tone",
    "category": "activity",
    "shortname": ":snowboarder_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "ski",
      "snow",
      "snowboard"
    ],
    "output": "1f3c2-1f3fe"
  },
  {
    "name": "snowboarder: dark skin tone",
    "category": "activity",
    "shortname": ":snowboarder_tone5:",
    "keyWords": [
      "dark skin tone",
      "ski",
      "snow",
      "snowboard"
    ],
    "output": "1f3c2-1f3ff"
  },
  {
    "name": "person lifting weights",
    "category": "activity",
    "shortname": ":person_lifting_weights:",
    "keyWords": [
      "lifter",
      "weight"
    ],
    "output": "1f3cb"
  },
  {
    "name": "person lifting weights: light skin tone",
    "category": "activity",
    "shortname": ":person_lifting_weights_tone1:",
    "keyWords": [
      "lifter",
      "light skin tone",
      "weight"
    ],
    "output": "1f3cb-1f3fb"
  },
  {
    "name": "person lifting weights: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_lifting_weights_tone2:",
    "keyWords": [
      "lifter",
      "medium-light skin tone",
      "weight"
    ],
    "output": "1f3cb-1f3fc"
  },
  {
    "name": "person lifting weights: medium skin tone",
    "category": "activity",
    "shortname": ":person_lifting_weights_tone3:",
    "keyWords": [
      "lifter",
      "medium skin tone",
      "weight"
    ],
    "output": "1f3cb-1f3fd"
  },
  {
    "name": "person lifting weights: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_lifting_weights_tone4:",
    "keyWords": [
      "lifter",
      "medium-dark skin tone",
      "weight"
    ],
    "output": "1f3cb-1f3fe"
  },
  {
    "name": "person lifting weights: dark skin tone",
    "category": "activity",
    "shortname": ":person_lifting_weights_tone5:",
    "keyWords": [
      "dark skin tone",
      "lifter",
      "weight"
    ],
    "output": "1f3cb-1f3ff"
  },
  {
    "name": "woman lifting weights",
    "category": "activity",
    "shortname": ":woman_lifting_weights:",
    "keyWords": [
      "weight lifter",
      "woman"
    ],
    "output": "1f3cb-fe0f-200d-2640-fe0f"
  },
  {
    "name": "woman lifting weights: light skin tone",
    "category": "activity",
    "shortname": ":woman_lifting_weights_tone1:",
    "keyWords": [
      "light skin tone",
      "weight lifter",
      "woman"
    ],
    "output": "1f3cb-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman lifting weights: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_lifting_weights_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "weight lifter",
      "woman"
    ],
    "output": "1f3cb-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman lifting weights: medium skin tone",
    "category": "activity",
    "shortname": ":woman_lifting_weights_tone3:",
    "keyWords": [
      "medium skin tone",
      "weight lifter",
      "woman"
    ],
    "output": "1f3cb-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman lifting weights: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_lifting_weights_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "weight lifter",
      "woman"
    ],
    "output": "1f3cb-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman lifting weights: dark skin tone",
    "category": "activity",
    "shortname": ":woman_lifting_weights_tone5:",
    "keyWords": [
      "dark skin tone",
      "weight lifter",
      "woman"
    ],
    "output": "1f3cb-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man lifting weights",
    "category": "activity",
    "shortname": ":man_lifting_weights:",
    "keyWords": [
      "man",
      "weight lifter"
    ],
    "output": "1f3cb-fe0f-200d-2642-fe0f"
  },
  {
    "name": "man lifting weights: light skin tone",
    "category": "activity",
    "shortname": ":man_lifting_weights_tone1:",
    "keyWords": [
      "light skin tone",
      "man",
      "weight lifter"
    ],
    "output": "1f3cb-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man lifting weights: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_lifting_weights_tone2:",
    "keyWords": [
      "man",
      "medium-light skin tone",
      "weight lifter"
    ],
    "output": "1f3cb-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man lifting weights: medium skin tone",
    "category": "activity",
    "shortname": ":man_lifting_weights_tone3:",
    "keyWords": [
      "man",
      "medium skin tone",
      "weight lifter"
    ],
    "output": "1f3cb-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man lifting weights: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_lifting_weights_tone4:",
    "keyWords": [
      "man",
      "medium-dark skin tone",
      "weight lifter"
    ],
    "output": "1f3cb-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man lifting weights: dark skin tone",
    "category": "activity",
    "shortname": ":man_lifting_weights_tone5:",
    "keyWords": [
      "dark skin tone",
      "man",
      "weight lifter"
    ],
    "output": "1f3cb-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "people wrestling",
    "category": "activity",
    "shortname": ":people_wrestling:",
    "keyWords": [
      "wrestle",
      "wrestler"
    ],
    "output": "1f93c"
  },
  {
    "name": "women wrestling",
    "category": "activity",
    "shortname": ":women_wrestling:",
    "keyWords": [
      "women",
      "wrestle"
    ],
    "output": "1f93c-200d-2640-fe0f"
  },
  {
    "name": "men wrestling",
    "category": "activity",
    "shortname": ":men_wrestling:",
    "keyWords": [
      "men",
      "wrestle"
    ],
    "output": "1f93c-200d-2642-fe0f"
  },
  {
    "name": "person cartwheeling",
    "category": "activity",
    "shortname": ":person_doing_cartwheel:",
    "keyWords": [
      "cartwheel",
      "gymnastics"
    ],
    "output": "1f938"
  },
  {
    "name": "person cartwheeling: light skin tone",
    "category": "activity",
    "shortname": ":person_doing_cartwheel_tone1:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "light skin tone"
    ],
    "output": "1f938-1f3fb"
  },
  {
    "name": "person cartwheeling: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_doing_cartwheel_tone2:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "medium-light skin tone"
    ],
    "output": "1f938-1f3fc"
  },
  {
    "name": "person cartwheeling: medium skin tone",
    "category": "activity",
    "shortname": ":person_doing_cartwheel_tone3:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "medium skin tone"
    ],
    "output": "1f938-1f3fd"
  },
  {
    "name": "person cartwheeling: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_doing_cartwheel_tone4:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "medium-dark skin tone"
    ],
    "output": "1f938-1f3fe"
  },
  {
    "name": "person cartwheeling: dark skin tone",
    "category": "activity",
    "shortname": ":person_doing_cartwheel_tone5:",
    "keyWords": [
      "cartwheel",
      "dark skin tone",
      "gymnastics"
    ],
    "output": "1f938-1f3ff"
  },
  {
    "name": "woman cartwheeling",
    "category": "activity",
    "shortname": ":woman_cartwheeling:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "woman"
    ],
    "output": "1f938-200d-2640-fe0f"
  },
  {
    "name": "woman cartwheeling: light skin tone",
    "category": "activity",
    "shortname": ":woman_cartwheeling_tone1:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "light skin tone",
      "woman"
    ],
    "output": "1f938-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman cartwheeling: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_cartwheeling_tone2:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f938-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman cartwheeling: medium skin tone",
    "category": "activity",
    "shortname": ":woman_cartwheeling_tone3:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "medium skin tone",
      "woman"
    ],
    "output": "1f938-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman cartwheeling: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_cartwheeling_tone4:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f938-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman cartwheeling: dark skin tone",
    "category": "activity",
    "shortname": ":woman_cartwheeling_tone5:",
    "keyWords": [
      "cartwheel",
      "dark skin tone",
      "gymnastics",
      "woman"
    ],
    "output": "1f938-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man cartwheeling",
    "category": "activity",
    "shortname": ":man_cartwheeling:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "man"
    ],
    "output": "1f938-200d-2642-fe0f"
  },
  {
    "name": "man cartwheeling: light skin tone",
    "category": "activity",
    "shortname": ":man_cartwheeling_tone1:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "light skin tone",
      "man"
    ],
    "output": "1f938-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man cartwheeling: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_cartwheeling_tone2:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f938-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man cartwheeling: medium skin tone",
    "category": "activity",
    "shortname": ":man_cartwheeling_tone3:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "man",
      "medium skin tone"
    ],
    "output": "1f938-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man cartwheeling: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_cartwheeling_tone4:",
    "keyWords": [
      "cartwheel",
      "gymnastics",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f938-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man cartwheeling: dark skin tone",
    "category": "activity",
    "shortname": ":man_cartwheeling_tone5:",
    "keyWords": [
      "cartwheel",
      "dark skin tone",
      "gymnastics",
      "man"
    ],
    "output": "1f938-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person bouncing ball",
    "category": "activity",
    "shortname": ":person_bouncing_ball:",
    "keyWords": [
      "ball"
    ],
    "output": "26f9"
  },
  {
    "name": "person bouncing ball: light skin tone",
    "category": "activity",
    "shortname": ":person_bouncing_ball_tone1:",
    "keyWords": [
      "ball",
      "light skin tone"
    ],
    "output": "26f9-1f3fb"
  },
  {
    "name": "person bouncing ball: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_bouncing_ball_tone2:",
    "keyWords": [
      "ball",
      "medium-light skin tone"
    ],
    "output": "26f9-1f3fc"
  },
  {
    "name": "person bouncing ball: medium skin tone",
    "category": "activity",
    "shortname": ":person_bouncing_ball_tone3:",
    "keyWords": [
      "ball",
      "medium skin tone"
    ],
    "output": "26f9-1f3fd"
  },
  {
    "name": "person bouncing ball: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_bouncing_ball_tone4:",
    "keyWords": [
      "ball",
      "medium-dark skin tone"
    ],
    "output": "26f9-1f3fe"
  },
  {
    "name": "person bouncing ball: dark skin tone",
    "category": "activity",
    "shortname": ":person_bouncing_ball_tone5:",
    "keyWords": [
      "ball",
      "dark skin tone"
    ],
    "output": "26f9-1f3ff"
  },
  {
    "name": "woman bouncing ball",
    "category": "activity",
    "shortname": ":woman_bouncing_ball:",
    "keyWords": [
      "ball",
      "woman"
    ],
    "output": "26f9-fe0f-200d-2640-fe0f"
  },
  {
    "name": "woman bouncing ball: light skin tone",
    "category": "activity",
    "shortname": ":woman_bouncing_ball_tone1:",
    "keyWords": [
      "ball",
      "light skin tone",
      "woman"
    ],
    "output": "26f9-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman bouncing ball: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_bouncing_ball_tone2:",
    "keyWords": [
      "ball",
      "medium-light skin tone",
      "woman"
    ],
    "output": "26f9-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman bouncing ball: medium skin tone",
    "category": "activity",
    "shortname": ":woman_bouncing_ball_tone3:",
    "keyWords": [
      "ball",
      "medium skin tone",
      "woman"
    ],
    "output": "26f9-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman bouncing ball: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_bouncing_ball_tone4:",
    "keyWords": [
      "ball",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "26f9-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman bouncing ball: dark skin tone",
    "category": "activity",
    "shortname": ":woman_bouncing_ball_tone5:",
    "keyWords": [
      "ball",
      "dark skin tone",
      "woman"
    ],
    "output": "26f9-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man bouncing ball",
    "category": "activity",
    "shortname": ":man_bouncing_ball:",
    "keyWords": [
      "ball",
      "man"
    ],
    "output": "26f9-fe0f-200d-2642-fe0f"
  },
  {
    "name": "man bouncing ball: light skin tone",
    "category": "activity",
    "shortname": ":man_bouncing_ball_tone1:",
    "keyWords": [
      "ball",
      "light skin tone",
      "man"
    ],
    "output": "26f9-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man bouncing ball: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_bouncing_ball_tone2:",
    "keyWords": [
      "ball",
      "man",
      "medium-light skin tone"
    ],
    "output": "26f9-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man bouncing ball: medium skin tone",
    "category": "activity",
    "shortname": ":man_bouncing_ball_tone3:",
    "keyWords": [
      "ball",
      "man",
      "medium skin tone"
    ],
    "output": "26f9-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man bouncing ball: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_bouncing_ball_tone4:",
    "keyWords": [
      "ball",
      "man",
      "medium-dark skin tone"
    ],
    "output": "26f9-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man bouncing ball: dark skin tone",
    "category": "activity",
    "shortname": ":man_bouncing_ball_tone5:",
    "keyWords": [
      "ball",
      "dark skin tone",
      "man"
    ],
    "output": "26f9-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person fencing",
    "category": "activity",
    "shortname": ":person_fencing:",
    "keyWords": [
      "fencer",
      "fencing",
      "sword"
    ],
    "output": "1f93a"
  },
  {
    "name": "person playing handball",
    "category": "activity",
    "shortname": ":person_playing_handball:",
    "keyWords": [
      "ball",
      "handball"
    ],
    "output": "1f93e"
  },
  {
    "name": "person playing handball: light skin tone",
    "category": "activity",
    "shortname": ":person_playing_handball_tone1:",
    "keyWords": [
      "ball",
      "handball",
      "light skin tone"
    ],
    "output": "1f93e-1f3fb"
  },
  {
    "name": "person playing handball: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_playing_handball_tone2:",
    "keyWords": [
      "ball",
      "handball",
      "medium-light skin tone"
    ],
    "output": "1f93e-1f3fc"
  },
  {
    "name": "person playing handball: medium skin tone",
    "category": "activity",
    "shortname": ":person_playing_handball_tone3:",
    "keyWords": [
      "ball",
      "handball",
      "medium skin tone"
    ],
    "output": "1f93e-1f3fd"
  },
  {
    "name": "person playing handball: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_playing_handball_tone4:",
    "keyWords": [
      "ball",
      "handball",
      "medium-dark skin tone"
    ],
    "output": "1f93e-1f3fe"
  },
  {
    "name": "person playing handball: dark skin tone",
    "category": "activity",
    "shortname": ":person_playing_handball_tone5:",
    "keyWords": [
      "ball",
      "dark skin tone",
      "handball"
    ],
    "output": "1f93e-1f3ff"
  },
  {
    "name": "woman playing handball",
    "category": "activity",
    "shortname": ":woman_playing_handball:",
    "keyWords": [
      "handball",
      "woman"
    ],
    "output": "1f93e-200d-2640-fe0f"
  },
  {
    "name": "woman playing handball: light skin tone",
    "category": "activity",
    "shortname": ":woman_playing_handball_tone1:",
    "keyWords": [
      "handball",
      "light skin tone",
      "woman"
    ],
    "output": "1f93e-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman playing handball: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_playing_handball_tone2:",
    "keyWords": [
      "handball",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f93e-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman playing handball: medium skin tone",
    "category": "activity",
    "shortname": ":woman_playing_handball_tone3:",
    "keyWords": [
      "handball",
      "medium skin tone",
      "woman"
    ],
    "output": "1f93e-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman playing handball: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_playing_handball_tone4:",
    "keyWords": [
      "handball",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f93e-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman playing handball: dark skin tone",
    "category": "activity",
    "shortname": ":woman_playing_handball_tone5:",
    "keyWords": [
      "dark skin tone",
      "handball",
      "woman"
    ],
    "output": "1f93e-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man playing handball",
    "category": "activity",
    "shortname": ":man_playing_handball:",
    "keyWords": [
      "handball",
      "man"
    ],
    "output": "1f93e-200d-2642-fe0f"
  },
  {
    "name": "man playing handball: light skin tone",
    "category": "activity",
    "shortname": ":man_playing_handball_tone1:",
    "keyWords": [
      "handball",
      "light skin tone",
      "man"
    ],
    "output": "1f93e-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man playing handball: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_playing_handball_tone2:",
    "keyWords": [
      "handball",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f93e-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man playing handball: medium skin tone",
    "category": "activity",
    "shortname": ":man_playing_handball_tone3:",
    "keyWords": [
      "handball",
      "man",
      "medium skin tone"
    ],
    "output": "1f93e-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man playing handball: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_playing_handball_tone4:",
    "keyWords": [
      "handball",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f93e-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man playing handball: dark skin tone",
    "category": "activity",
    "shortname": ":man_playing_handball_tone5:",
    "keyWords": [
      "dark skin tone",
      "handball",
      "man"
    ],
    "output": "1f93e-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person golfing",
    "category": "activity",
    "shortname": ":person_golfing:",
    "keyWords": [
      "ball",
      "golf"
    ],
    "output": "1f3cc"
  },
  {
    "name": "person golfing: light skin tone",
    "category": "activity",
    "shortname": ":person_golfing_tone1:",
    "keyWords": [
      "ball",
      "golf",
      "light skin tone"
    ],
    "output": "1f3cc-1f3fb"
  },
  {
    "name": "person golfing: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_golfing_tone2:",
    "keyWords": [
      "ball",
      "golf",
      "medium-light skin tone"
    ],
    "output": "1f3cc-1f3fc"
  },
  {
    "name": "person golfing: medium skin tone",
    "category": "activity",
    "shortname": ":person_golfing_tone3:",
    "keyWords": [
      "ball",
      "golf",
      "medium skin tone"
    ],
    "output": "1f3cc-1f3fd"
  },
  {
    "name": "person golfing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_golfing_tone4:",
    "keyWords": [
      "ball",
      "golf",
      "medium-dark skin tone"
    ],
    "output": "1f3cc-1f3fe"
  },
  {
    "name": "person golfing: dark skin tone",
    "category": "activity",
    "shortname": ":person_golfing_tone5:",
    "keyWords": [
      "ball",
      "dark skin tone",
      "golf"
    ],
    "output": "1f3cc-1f3ff"
  },
  {
    "name": "woman golfing",
    "category": "activity",
    "shortname": ":woman_golfing:",
    "keyWords": [
      "golf",
      "woman"
    ],
    "output": "1f3cc-fe0f-200d-2640-fe0f"
  },
  {
    "name": "woman golfing: light skin tone",
    "category": "activity",
    "shortname": ":woman_golfing_tone1:",
    "keyWords": [
      "golf",
      "light skin tone",
      "woman"
    ],
    "output": "1f3cc-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman golfing: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_golfing_tone2:",
    "keyWords": [
      "golf",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f3cc-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman golfing: medium skin tone",
    "category": "activity",
    "shortname": ":woman_golfing_tone3:",
    "keyWords": [
      "golf",
      "medium skin tone",
      "woman"
    ],
    "output": "1f3cc-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman golfing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_golfing_tone4:",
    "keyWords": [
      "golf",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f3cc-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman golfing: dark skin tone",
    "category": "activity",
    "shortname": ":woman_golfing_tone5:",
    "keyWords": [
      "dark skin tone",
      "golf",
      "woman"
    ],
    "output": "1f3cc-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man golfing",
    "category": "activity",
    "shortname": ":man_golfing:",
    "keyWords": [
      "golf",
      "man"
    ],
    "output": "1f3cc-fe0f-200d-2642-fe0f"
  },
  {
    "name": "man golfing: light skin tone",
    "category": "activity",
    "shortname": ":man_golfing_tone1:",
    "keyWords": [
      "golf",
      "light skin tone",
      "man"
    ],
    "output": "1f3cc-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man golfing: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_golfing_tone2:",
    "keyWords": [
      "golf",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f3cc-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man golfing: medium skin tone",
    "category": "activity",
    "shortname": ":man_golfing_tone3:",
    "keyWords": [
      "golf",
      "man",
      "medium skin tone"
    ],
    "output": "1f3cc-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man golfing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_golfing_tone4:",
    "keyWords": [
      "golf",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f3cc-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man golfing: dark skin tone",
    "category": "activity",
    "shortname": ":man_golfing_tone5:",
    "keyWords": [
      "dark skin tone",
      "golf",
      "man"
    ],
    "output": "1f3cc-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "horse racing",
    "category": "activity",
    "shortname": ":horse_racing:",
    "keyWords": [
      "horse",
      "jockey",
      "racehorse",
      "racing"
    ],
    "output": "1f3c7"
  },
  {
    "name": "horse racing: light skin tone",
    "category": "activity",
    "shortname": ":horse_racing_tone1:",
    "keyWords": [
      "horse",
      "jockey",
      "light skin tone",
      "racehorse",
      "racing"
    ],
    "output": "1f3c7-1f3fb"
  },
  {
    "name": "horse racing: medium-light skin tone",
    "category": "activity",
    "shortname": ":horse_racing_tone2:",
    "keyWords": [
      "horse",
      "jockey",
      "medium-light skin tone",
      "racehorse",
      "racing"
    ],
    "output": "1f3c7-1f3fc"
  },
  {
    "name": "horse racing: medium skin tone",
    "category": "activity",
    "shortname": ":horse_racing_tone3:",
    "keyWords": [
      "horse",
      "jockey",
      "medium skin tone",
      "racehorse",
      "racing"
    ],
    "output": "1f3c7-1f3fd"
  },
  {
    "name": "horse racing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":horse_racing_tone4:",
    "keyWords": [
      "horse",
      "jockey",
      "medium-dark skin tone",
      "racehorse",
      "racing"
    ],
    "output": "1f3c7-1f3fe"
  },
  {
    "name": "horse racing: dark skin tone",
    "category": "activity",
    "shortname": ":horse_racing_tone5:",
    "keyWords": [
      "dark skin tone",
      "horse",
      "jockey",
      "racehorse",
      "racing"
    ],
    "output": "1f3c7-1f3ff"
  },
  {
    "name": "person in lotus position",
    "category": "activity",
    "shortname": ":person_in_lotus_position:",
    "keyWords": [
      ""
    ],
    "output": "1f9d8"
  },
  {
    "name": "person in lotus position: light skin tone",
    "category": "activity",
    "shortname": ":person_in_lotus_position_tone1:",
    "keyWords": [
      "light skin tone",
      "meditation",
      "yoga"
    ],
    "output": "1f9d8-1f3fb"
  },
  {
    "name": "person in lotus position: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_in_lotus_position_tone2:",
    "keyWords": [
      "meditation",
      "medium-light skin tone",
      "yoga"
    ],
    "output": "1f9d8-1f3fc"
  },
  {
    "name": "person in lotus position: medium skin tone",
    "category": "activity",
    "shortname": ":person_in_lotus_position_tone3:",
    "keyWords": [
      "meditation",
      "medium skin tone",
      "yoga"
    ],
    "output": "1f9d8-1f3fd"
  },
  {
    "name": "person in lotus position: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_in_lotus_position_tone4:",
    "keyWords": [
      "meditation",
      "medium-dark skin tone",
      "yoga"
    ],
    "output": "1f9d8-1f3fe"
  },
  {
    "name": "person in lotus position: dark skin tone",
    "category": "activity",
    "shortname": ":person_in_lotus_position_tone5:",
    "keyWords": [
      "dark skin tone",
      "meditation",
      "yoga"
    ],
    "output": "1f9d8-1f3ff"
  },
  {
    "name": "woman in lotus position",
    "category": "activity",
    "shortname": ":woman_in_lotus_position:",
    "keyWords": [
      "meditation",
      "yoga"
    ],
    "output": "1f9d8-200d-2640-fe0f"
  },
  {
    "name": "woman in lotus position: light skin tone",
    "category": "activity",
    "shortname": ":woman_in_lotus_position_tone1:",
    "keyWords": [
      "light skin tone",
      "meditation",
      "yoga"
    ],
    "output": "1f9d8-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman in lotus position: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_in_lotus_position_tone2:",
    "keyWords": [
      "meditation",
      "medium-light skin tone",
      "yoga"
    ],
    "output": "1f9d8-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman in lotus position: medium skin tone",
    "category": "activity",
    "shortname": ":woman_in_lotus_position_tone3:",
    "keyWords": [
      "meditation",
      "medium skin tone",
      "yoga"
    ],
    "output": "1f9d8-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman in lotus position: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_in_lotus_position_tone4:",
    "keyWords": [
      "meditation",
      "medium-dark skin tone",
      "yoga"
    ],
    "output": "1f9d8-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman in lotus position: dark skin tone",
    "category": "activity",
    "shortname": ":woman_in_lotus_position_tone5:",
    "keyWords": [
      "dark skin tone",
      "meditation",
      "yoga"
    ],
    "output": "1f9d8-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man in lotus position",
    "category": "activity",
    "shortname": ":man_in_lotus_position:",
    "keyWords": [
      "meditation",
      "yoga"
    ],
    "output": "1f9d8-200d-2642-fe0f"
  },
  {
    "name": "man in lotus position: light skin tone",
    "category": "activity",
    "shortname": ":man_in_lotus_position_tone1:",
    "keyWords": [
      "light skin tone",
      "meditation",
      "yoga"
    ],
    "output": "1f9d8-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man in lotus position: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_in_lotus_position_tone2:",
    "keyWords": [
      "meditation",
      "medium-light skin tone",
      "yoga"
    ],
    "output": "1f9d8-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man in lotus position: medium skin tone",
    "category": "activity",
    "shortname": ":man_in_lotus_position_tone3:",
    "keyWords": [
      "meditation",
      "medium skin tone",
      "yoga"
    ],
    "output": "1f9d8-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man in lotus position: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_in_lotus_position_tone4:",
    "keyWords": [
      "meditation",
      "medium-dark skin tone",
      "yoga"
    ],
    "output": "1f9d8-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man in lotus position: dark skin tone",
    "category": "activity",
    "shortname": ":man_in_lotus_position_tone5:",
    "keyWords": [
      "dark skin tone",
      "meditation",
      "yoga"
    ],
    "output": "1f9d8-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person surfing",
    "category": "activity",
    "shortname": ":person_surfing:",
    "keyWords": [
      "surfing"
    ],
    "output": "1f3c4"
  },
  {
    "name": "person surfing: light skin tone",
    "category": "activity",
    "shortname": ":person_surfing_tone1:",
    "keyWords": [
      "light skin tone",
      "surfing"
    ],
    "output": "1f3c4-1f3fb"
  },
  {
    "name": "person surfing: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_surfing_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "surfing"
    ],
    "output": "1f3c4-1f3fc"
  },
  {
    "name": "person surfing: medium skin tone",
    "category": "activity",
    "shortname": ":person_surfing_tone3:",
    "keyWords": [
      "medium skin tone",
      "surfing"
    ],
    "output": "1f3c4-1f3fd"
  },
  {
    "name": "person surfing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_surfing_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "surfing"
    ],
    "output": "1f3c4-1f3fe"
  },
  {
    "name": "person surfing: dark skin tone",
    "category": "activity",
    "shortname": ":person_surfing_tone5:",
    "keyWords": [
      "dark skin tone",
      "surfing"
    ],
    "output": "1f3c4-1f3ff"
  },
  {
    "name": "woman surfing",
    "category": "activity",
    "shortname": ":woman_surfing:",
    "keyWords": [
      "surfing",
      "woman"
    ],
    "output": "1f3c4-200d-2640-fe0f"
  },
  {
    "name": "woman surfing: light skin tone",
    "category": "activity",
    "shortname": ":woman_surfing_tone1:",
    "keyWords": [
      "light skin tone",
      "surfing",
      "woman"
    ],
    "output": "1f3c4-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman surfing: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_surfing_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "surfing",
      "woman"
    ],
    "output": "1f3c4-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman surfing: medium skin tone",
    "category": "activity",
    "shortname": ":woman_surfing_tone3:",
    "keyWords": [
      "medium skin tone",
      "surfing",
      "woman"
    ],
    "output": "1f3c4-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman surfing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_surfing_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "surfing",
      "woman"
    ],
    "output": "1f3c4-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman surfing: dark skin tone",
    "category": "activity",
    "shortname": ":woman_surfing_tone5:",
    "keyWords": [
      "dark skin tone",
      "surfing",
      "woman"
    ],
    "output": "1f3c4-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man surfing",
    "category": "activity",
    "shortname": ":man_surfing:",
    "keyWords": [
      "man",
      "surfing"
    ],
    "output": "1f3c4-200d-2642-fe0f"
  },
  {
    "name": "man surfing: light skin tone",
    "category": "activity",
    "shortname": ":man_surfing_tone1:",
    "keyWords": [
      "light skin tone",
      "man",
      "surfing"
    ],
    "output": "1f3c4-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man surfing: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_surfing_tone2:",
    "keyWords": [
      "man",
      "medium-light skin tone",
      "surfing"
    ],
    "output": "1f3c4-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man surfing: medium skin tone",
    "category": "activity",
    "shortname": ":man_surfing_tone3:",
    "keyWords": [
      "man",
      "medium skin tone",
      "surfing"
    ],
    "output": "1f3c4-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man surfing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_surfing_tone4:",
    "keyWords": [
      "man",
      "medium-dark skin tone",
      "surfing"
    ],
    "output": "1f3c4-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man surfing: dark skin tone",
    "category": "activity",
    "shortname": ":man_surfing_tone5:",
    "keyWords": [
      "dark skin tone",
      "man",
      "surfing"
    ],
    "output": "1f3c4-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person swimming",
    "category": "activity",
    "shortname": ":person_swimming:",
    "keyWords": [
      "swim"
    ],
    "output": "1f3ca"
  },
  {
    "name": "person swimming: light skin tone",
    "category": "activity",
    "shortname": ":person_swimming_tone1:",
    "keyWords": [
      "light skin tone",
      "swim"
    ],
    "output": "1f3ca-1f3fb"
  },
  {
    "name": "person swimming: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_swimming_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "swim"
    ],
    "output": "1f3ca-1f3fc"
  },
  {
    "name": "person swimming: medium skin tone",
    "category": "activity",
    "shortname": ":person_swimming_tone3:",
    "keyWords": [
      "medium skin tone",
      "swim"
    ],
    "output": "1f3ca-1f3fd"
  },
  {
    "name": "person swimming: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_swimming_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "swim"
    ],
    "output": "1f3ca-1f3fe"
  },
  {
    "name": "person swimming: dark skin tone",
    "category": "activity",
    "shortname": ":person_swimming_tone5:",
    "keyWords": [
      "dark skin tone",
      "swim"
    ],
    "output": "1f3ca-1f3ff"
  },
  {
    "name": "woman swimming",
    "category": "activity",
    "shortname": ":woman_swimming:",
    "keyWords": [
      "swim",
      "woman"
    ],
    "output": "1f3ca-200d-2640-fe0f"
  },
  {
    "name": "woman swimming: light skin tone",
    "category": "activity",
    "shortname": ":woman_swimming_tone1:",
    "keyWords": [
      "light skin tone",
      "swim",
      "woman"
    ],
    "output": "1f3ca-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman swimming: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_swimming_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "swim",
      "woman"
    ],
    "output": "1f3ca-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman swimming: medium skin tone",
    "category": "activity",
    "shortname": ":woman_swimming_tone3:",
    "keyWords": [
      "medium skin tone",
      "swim",
      "woman"
    ],
    "output": "1f3ca-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman swimming: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_swimming_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "swim",
      "woman"
    ],
    "output": "1f3ca-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman swimming: dark skin tone",
    "category": "activity",
    "shortname": ":woman_swimming_tone5:",
    "keyWords": [
      "dark skin tone",
      "swim",
      "woman"
    ],
    "output": "1f3ca-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man swimming",
    "category": "activity",
    "shortname": ":man_swimming:",
    "keyWords": [
      "man",
      "swim"
    ],
    "output": "1f3ca-200d-2642-fe0f"
  },
  {
    "name": "man swimming: light skin tone",
    "category": "activity",
    "shortname": ":man_swimming_tone1:",
    "keyWords": [
      "light skin tone",
      "man",
      "swim"
    ],
    "output": "1f3ca-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man swimming: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_swimming_tone2:",
    "keyWords": [
      "man",
      "medium-light skin tone",
      "swim"
    ],
    "output": "1f3ca-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man swimming: medium skin tone",
    "category": "activity",
    "shortname": ":man_swimming_tone3:",
    "keyWords": [
      "man",
      "medium skin tone",
      "swim"
    ],
    "output": "1f3ca-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man swimming: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_swimming_tone4:",
    "keyWords": [
      "man",
      "medium-dark skin tone",
      "swim"
    ],
    "output": "1f3ca-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man swimming: dark skin tone",
    "category": "activity",
    "shortname": ":man_swimming_tone5:",
    "keyWords": [
      "dark skin tone",
      "man",
      "swim"
    ],
    "output": "1f3ca-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person playing water polo",
    "category": "activity",
    "shortname": ":person_playing_water_polo:",
    "keyWords": [
      "polo",
      "water"
    ],
    "output": "1f93d"
  },
  {
    "name": "person playing water polo: light skin tone",
    "category": "activity",
    "shortname": ":person_playing_water_polo_tone1:",
    "keyWords": [
      "light skin tone",
      "polo",
      "water"
    ],
    "output": "1f93d-1f3fb"
  },
  {
    "name": "person playing water polo: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_playing_water_polo_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "polo",
      "water"
    ],
    "output": "1f93d-1f3fc"
  },
  {
    "name": "person playing water polo: medium skin tone",
    "category": "activity",
    "shortname": ":person_playing_water_polo_tone3:",
    "keyWords": [
      "medium skin tone",
      "polo",
      "water"
    ],
    "output": "1f93d-1f3fd"
  },
  {
    "name": "person playing water polo: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_playing_water_polo_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "polo",
      "water"
    ],
    "output": "1f93d-1f3fe"
  },
  {
    "name": "person playing water polo: dark skin tone",
    "category": "activity",
    "shortname": ":person_playing_water_polo_tone5:",
    "keyWords": [
      "dark skin tone",
      "polo",
      "water"
    ],
    "output": "1f93d-1f3ff"
  },
  {
    "name": "woman playing water polo",
    "category": "activity",
    "shortname": ":woman_playing_water_polo:",
    "keyWords": [
      "water polo",
      "woman"
    ],
    "output": "1f93d-200d-2640-fe0f"
  },
  {
    "name": "woman playing water polo: light skin tone",
    "category": "activity",
    "shortname": ":woman_playing_water_polo_tone1:",
    "keyWords": [
      "light skin tone",
      "water polo",
      "woman"
    ],
    "output": "1f93d-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman playing water polo: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_playing_water_polo_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "water polo",
      "woman"
    ],
    "output": "1f93d-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman playing water polo: medium skin tone",
    "category": "activity",
    "shortname": ":woman_playing_water_polo_tone3:",
    "keyWords": [
      "medium skin tone",
      "water polo",
      "woman"
    ],
    "output": "1f93d-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman playing water polo: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_playing_water_polo_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "water polo",
      "woman"
    ],
    "output": "1f93d-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman playing water polo: dark skin tone",
    "category": "activity",
    "shortname": ":woman_playing_water_polo_tone5:",
    "keyWords": [
      "dark skin tone",
      "water polo",
      "woman"
    ],
    "output": "1f93d-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man playing water polo",
    "category": "activity",
    "shortname": ":man_playing_water_polo:",
    "keyWords": [
      "man",
      "water polo"
    ],
    "output": "1f93d-200d-2642-fe0f"
  },
  {
    "name": "man playing water polo: light skin tone",
    "category": "activity",
    "shortname": ":man_playing_water_polo_tone1:",
    "keyWords": [
      "light skin tone",
      "man",
      "water polo"
    ],
    "output": "1f93d-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man playing water polo: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_playing_water_polo_tone2:",
    "keyWords": [
      "man",
      "medium-light skin tone",
      "water polo"
    ],
    "output": "1f93d-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man playing water polo: medium skin tone",
    "category": "activity",
    "shortname": ":man_playing_water_polo_tone3:",
    "keyWords": [
      "man",
      "medium skin tone",
      "water polo"
    ],
    "output": "1f93d-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man playing water polo: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_playing_water_polo_tone4:",
    "keyWords": [
      "man",
      "medium-dark skin tone",
      "water polo"
    ],
    "output": "1f93d-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man playing water polo: dark skin tone",
    "category": "activity",
    "shortname": ":man_playing_water_polo_tone5:",
    "keyWords": [
      "dark skin tone",
      "man",
      "water polo"
    ],
    "output": "1f93d-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person rowing boat",
    "category": "activity",
    "shortname": ":person_rowing_boat:",
    "keyWords": [
      "boat",
      "rowboat"
    ],
    "output": "1f6a3"
  },
  {
    "name": "person rowing boat: light skin tone",
    "category": "activity",
    "shortname": ":person_rowing_boat_tone1:",
    "keyWords": [
      "boat",
      "light skin tone",
      "rowboat"
    ],
    "output": "1f6a3-1f3fb"
  },
  {
    "name": "person rowing boat: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_rowing_boat_tone2:",
    "keyWords": [
      "boat",
      "medium-light skin tone",
      "rowboat"
    ],
    "output": "1f6a3-1f3fc"
  },
  {
    "name": "person rowing boat: medium skin tone",
    "category": "activity",
    "shortname": ":person_rowing_boat_tone3:",
    "keyWords": [
      "boat",
      "medium skin tone",
      "rowboat"
    ],
    "output": "1f6a3-1f3fd"
  },
  {
    "name": "person rowing boat: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_rowing_boat_tone4:",
    "keyWords": [
      "boat",
      "medium-dark skin tone",
      "rowboat"
    ],
    "output": "1f6a3-1f3fe"
  },
  {
    "name": "person rowing boat: dark skin tone",
    "category": "activity",
    "shortname": ":person_rowing_boat_tone5:",
    "keyWords": [
      "boat",
      "dark skin tone",
      "rowboat"
    ],
    "output": "1f6a3-1f3ff"
  },
  {
    "name": "woman rowing boat",
    "category": "activity",
    "shortname": ":woman_rowing_boat:",
    "keyWords": [
      "boat",
      "rowboat",
      "woman"
    ],
    "output": "1f6a3-200d-2640-fe0f"
  },
  {
    "name": "woman rowing boat: light skin tone",
    "category": "activity",
    "shortname": ":woman_rowing_boat_tone1:",
    "keyWords": [
      "boat",
      "light skin tone",
      "rowboat",
      "woman"
    ],
    "output": "1f6a3-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman rowing boat: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_rowing_boat_tone2:",
    "keyWords": [
      "boat",
      "medium-light skin tone",
      "rowboat",
      "woman"
    ],
    "output": "1f6a3-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman rowing boat: medium skin tone",
    "category": "activity",
    "shortname": ":woman_rowing_boat_tone3:",
    "keyWords": [
      "boat",
      "medium skin tone",
      "rowboat",
      "woman"
    ],
    "output": "1f6a3-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman rowing boat: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_rowing_boat_tone4:",
    "keyWords": [
      "boat",
      "medium-dark skin tone",
      "rowboat",
      "woman"
    ],
    "output": "1f6a3-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman rowing boat: dark skin tone",
    "category": "activity",
    "shortname": ":woman_rowing_boat_tone5:",
    "keyWords": [
      "boat",
      "dark skin tone",
      "rowboat",
      "woman"
    ],
    "output": "1f6a3-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man rowing boat",
    "category": "activity",
    "shortname": ":man_rowing_boat:",
    "keyWords": [
      "boat",
      "man",
      "rowboat"
    ],
    "output": "1f6a3-200d-2642-fe0f"
  },
  {
    "name": "man rowing boat: light skin tone",
    "category": "activity",
    "shortname": ":man_rowing_boat_tone1:",
    "keyWords": [
      "boat",
      "light skin tone",
      "man",
      "rowboat"
    ],
    "output": "1f6a3-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man rowing boat: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_rowing_boat_tone2:",
    "keyWords": [
      "boat",
      "man",
      "medium-light skin tone",
      "rowboat"
    ],
    "output": "1f6a3-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man rowing boat: medium skin tone",
    "category": "activity",
    "shortname": ":man_rowing_boat_tone3:",
    "keyWords": [
      "boat",
      "man",
      "medium skin tone",
      "rowboat"
    ],
    "output": "1f6a3-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man rowing boat: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_rowing_boat_tone4:",
    "keyWords": [
      "boat",
      "man",
      "medium-dark skin tone",
      "rowboat"
    ],
    "output": "1f6a3-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man rowing boat: dark skin tone",
    "category": "activity",
    "shortname": ":man_rowing_boat_tone5:",
    "keyWords": [
      "boat",
      "dark skin tone",
      "man",
      "rowboat"
    ],
    "output": "1f6a3-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person climbing",
    "category": "activity",
    "shortname": ":person_climbing:",
    "keyWords": [
      "climber"
    ],
    "output": "1f9d7"
  },
  {
    "name": "person climbing: light skin tone",
    "category": "activity",
    "shortname": ":person_climbing_tone1:",
    "keyWords": [
      "climber",
      "light skin tone"
    ],
    "output": "1f9d7-1f3fb"
  },
  {
    "name": "person climbing: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_climbing_tone2:",
    "keyWords": [
      "climber",
      "medium-light skin tone"
    ],
    "output": "1f9d7-1f3fc"
  },
  {
    "name": "person climbing: medium skin tone",
    "category": "activity",
    "shortname": ":person_climbing_tone3:",
    "keyWords": [
      "climber",
      "medium skin tone"
    ],
    "output": "1f9d7-1f3fd"
  },
  {
    "name": "person climbing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_climbing_tone4:",
    "keyWords": [
      "climber",
      "medium-dark skin tone"
    ],
    "output": "1f9d7-1f3fe"
  },
  {
    "name": "person climbing: dark skin tone",
    "category": "activity",
    "shortname": ":person_climbing_tone5:",
    "keyWords": [
      "climber",
      "dark skin tone"
    ],
    "output": "1f9d7-1f3ff"
  },
  {
    "name": "woman climbing",
    "category": "activity",
    "shortname": ":woman_climbing:",
    "keyWords": [
      "climber"
    ],
    "output": "1f9d7-200d-2640-fe0f"
  },
  {
    "name": "woman climbing: light skin tone",
    "category": "activity",
    "shortname": ":woman_climbing_tone1:",
    "keyWords": [
      "climber",
      "light skin tone"
    ],
    "output": "1f9d7-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman climbing: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_climbing_tone2:",
    "keyWords": [
      "climber",
      "medium-light skin tone"
    ],
    "output": "1f9d7-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman climbing: medium skin tone",
    "category": "activity",
    "shortname": ":woman_climbing_tone3:",
    "keyWords": [
      "climber",
      "medium skin tone"
    ],
    "output": "1f9d7-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman climbing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_climbing_tone4:",
    "keyWords": [
      "climber",
      "medium-dark skin tone"
    ],
    "output": "1f9d7-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman climbing: dark skin tone",
    "category": "activity",
    "shortname": ":woman_climbing_tone5:",
    "keyWords": [
      "climber",
      "dark skin tone"
    ],
    "output": "1f9d7-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man climbing",
    "category": "activity",
    "shortname": ":man_climbing:",
    "keyWords": [
      "climber"
    ],
    "output": "1f9d7-200d-2642-fe0f"
  },
  {
    "name": "man climbing: light skin tone",
    "category": "activity",
    "shortname": ":man_climbing_tone1:",
    "keyWords": [
      "climber",
      "light skin tone"
    ],
    "output": "1f9d7-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man climbing: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_climbing_tone2:",
    "keyWords": [
      "climber",
      "medium-light skin tone"
    ],
    "output": "1f9d7-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man climbing: medium skin tone",
    "category": "activity",
    "shortname": ":man_climbing_tone3:",
    "keyWords": [
      "climber",
      "medium skin tone"
    ],
    "output": "1f9d7-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man climbing: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_climbing_tone4:",
    "keyWords": [
      "climber",
      "medium-dark skin tone"
    ],
    "output": "1f9d7-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man climbing: dark skin tone",
    "category": "activity",
    "shortname": ":man_climbing_tone5:",
    "keyWords": [
      "climber",
      "dark skin tone"
    ],
    "output": "1f9d7-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person mountain biking",
    "category": "activity",
    "shortname": ":person_mountain_biking:",
    "keyWords": [
      "bicycle",
      "bicyclist",
      "bike",
      "cyclist",
      "mountain"
    ],
    "output": "1f6b5"
  },
  {
    "name": "person mountain biking: light skin tone",
    "category": "activity",
    "shortname": ":person_mountain_biking_tone1:",
    "keyWords": [
      "bicycle",
      "bicyclist",
      "bike",
      "cyclist",
      "light skin tone",
      "mountain"
    ],
    "output": "1f6b5-1f3fb"
  },
  {
    "name": "person mountain biking: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_mountain_biking_tone2:",
    "keyWords": [
      "bicycle",
      "bicyclist",
      "bike",
      "cyclist",
      "medium-light skin tone",
      "mountain"
    ],
    "output": "1f6b5-1f3fc"
  },
  {
    "name": "person mountain biking: medium skin tone",
    "category": "activity",
    "shortname": ":person_mountain_biking_tone3:",
    "keyWords": [
      "bicycle",
      "bicyclist",
      "bike",
      "cyclist",
      "medium skin tone",
      "mountain"
    ],
    "output": "1f6b5-1f3fd"
  },
  {
    "name": "person mountain biking: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_mountain_biking_tone4:",
    "keyWords": [
      "bicycle",
      "bicyclist",
      "bike",
      "cyclist",
      "medium-dark skin tone",
      "mountain"
    ],
    "output": "1f6b5-1f3fe"
  },
  {
    "name": "person mountain biking: dark skin tone",
    "category": "activity",
    "shortname": ":person_mountain_biking_tone5:",
    "keyWords": [
      "bicycle",
      "bicyclist",
      "bike",
      "cyclist",
      "dark skin tone",
      "mountain"
    ],
    "output": "1f6b5-1f3ff"
  },
  {
    "name": "woman mountain biking",
    "category": "activity",
    "shortname": ":woman_mountain_biking:",
    "keyWords": [
      "bicycle",
      "bike",
      "biking",
      "cyclist",
      "mountain",
      "woman"
    ],
    "output": "1f6b5-200d-2640-fe0f"
  },
  {
    "name": "woman mountain biking: light skin tone",
    "category": "activity",
    "shortname": ":woman_mountain_biking_tone1:",
    "keyWords": [
      "bicycle",
      "bike",
      "biking",
      "cyclist",
      "light skin tone",
      "mountain",
      "woman"
    ],
    "output": "1f6b5-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman mountain biking: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_mountain_biking_tone2:",
    "keyWords": [
      "bicycle",
      "bike",
      "biking",
      "cyclist",
      "medium-light skin tone",
      "mountain",
      "woman"
    ],
    "output": "1f6b5-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman mountain biking: medium skin tone",
    "category": "activity",
    "shortname": ":woman_mountain_biking_tone3:",
    "keyWords": [
      "bicycle",
      "bike",
      "biking",
      "cyclist",
      "medium skin tone",
      "mountain",
      "woman"
    ],
    "output": "1f6b5-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman mountain biking: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_mountain_biking_tone4:",
    "keyWords": [
      "bicycle",
      "bike",
      "biking",
      "cyclist",
      "medium-dark skin tone",
      "mountain",
      "woman"
    ],
    "output": "1f6b5-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman mountain biking: dark skin tone",
    "category": "activity",
    "shortname": ":woman_mountain_biking_tone5:",
    "keyWords": [
      "bicycle",
      "bike",
      "biking",
      "cyclist",
      "dark skin tone",
      "mountain",
      "woman"
    ],
    "output": "1f6b5-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man mountain biking",
    "category": "activity",
    "shortname": ":man_mountain_biking:",
    "keyWords": [
      "bicycle",
      "bike",
      "cyclist",
      "man",
      "mountain"
    ],
    "output": "1f6b5-200d-2642-fe0f"
  },
  {
    "name": "man mountain biking: light skin tone",
    "category": "activity",
    "shortname": ":man_mountain_biking_tone1:",
    "keyWords": [
      "bicycle",
      "bike",
      "cyclist",
      "light skin tone",
      "man",
      "mountain"
    ],
    "output": "1f6b5-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man mountain biking: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_mountain_biking_tone2:",
    "keyWords": [
      "bicycle",
      "bike",
      "cyclist",
      "man",
      "medium-light skin tone",
      "mountain"
    ],
    "output": "1f6b5-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man mountain biking: medium skin tone",
    "category": "activity",
    "shortname": ":man_mountain_biking_tone3:",
    "keyWords": [
      "bicycle",
      "bike",
      "cyclist",
      "man",
      "medium skin tone",
      "mountain"
    ],
    "output": "1f6b5-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man mountain biking: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_mountain_biking_tone4:",
    "keyWords": [
      "bicycle",
      "bike",
      "cyclist",
      "man",
      "medium-dark skin tone",
      "mountain"
    ],
    "output": "1f6b5-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man mountain biking: dark skin tone",
    "category": "activity",
    "shortname": ":man_mountain_biking_tone5:",
    "keyWords": [
      "bicycle",
      "bike",
      "cyclist",
      "dark skin tone",
      "man",
      "mountain"
    ],
    "output": "1f6b5-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person biking",
    "category": "activity",
    "shortname": ":person_biking:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist"
    ],
    "output": "1f6b4"
  },
  {
    "name": "person biking: light skin tone",
    "category": "activity",
    "shortname": ":person_biking_tone1:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "light skin tone"
    ],
    "output": "1f6b4-1f3fb"
  },
  {
    "name": "person biking: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_biking_tone2:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "medium-light skin tone"
    ],
    "output": "1f6b4-1f3fc"
  },
  {
    "name": "person biking: medium skin tone",
    "category": "activity",
    "shortname": ":person_biking_tone3:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "medium skin tone"
    ],
    "output": "1f6b4-1f3fd"
  },
  {
    "name": "person biking: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_biking_tone4:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "medium-dark skin tone"
    ],
    "output": "1f6b4-1f3fe"
  },
  {
    "name": "person biking: dark skin tone",
    "category": "activity",
    "shortname": ":person_biking_tone5:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "dark skin tone"
    ],
    "output": "1f6b4-1f3ff"
  },
  {
    "name": "woman biking",
    "category": "activity",
    "shortname": ":woman_biking:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "woman"
    ],
    "output": "1f6b4-200d-2640-fe0f"
  },
  {
    "name": "woman biking: light skin tone",
    "category": "activity",
    "shortname": ":woman_biking_tone1:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "light skin tone",
      "woman"
    ],
    "output": "1f6b4-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman biking: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_biking_tone2:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f6b4-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman biking: medium skin tone",
    "category": "activity",
    "shortname": ":woman_biking_tone3:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "medium skin tone",
      "woman"
    ],
    "output": "1f6b4-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman biking: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_biking_tone4:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f6b4-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman biking: dark skin tone",
    "category": "activity",
    "shortname": ":woman_biking_tone5:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "dark skin tone",
      "woman"
    ],
    "output": "1f6b4-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man biking",
    "category": "activity",
    "shortname": ":man_biking:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "man"
    ],
    "output": "1f6b4-200d-2642-fe0f"
  },
  {
    "name": "man biking: light skin tone",
    "category": "activity",
    "shortname": ":man_biking_tone1:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "light skin tone",
      "man"
    ],
    "output": "1f6b4-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man biking: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_biking_tone2:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f6b4-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man biking: medium skin tone",
    "category": "activity",
    "shortname": ":man_biking_tone3:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "man",
      "medium skin tone"
    ],
    "output": "1f6b4-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man biking: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_biking_tone4:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f6b4-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man biking: dark skin tone",
    "category": "activity",
    "shortname": ":man_biking_tone5:",
    "keyWords": [
      "bicycle",
      "biking",
      "cyclist",
      "dark skin tone",
      "man"
    ],
    "output": "1f6b4-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "trophy",
    "category": "activity",
    "shortname": ":trophy:",
    "keyWords": [
      "prize"
    ],
    "output": "1f3c6"
  },
  {
    "name": "1st place medal",
    "category": "activity",
    "shortname": ":first_place:",
    "keyWords": [
      "first",
      "gold",
      "medal"
    ],
    "output": "1f947"
  },
  {
    "name": "2nd place medal",
    "category": "activity",
    "shortname": ":second_place:",
    "keyWords": [
      "medal",
      "second",
      "silver"
    ],
    "output": "1f948"
  },
  {
    "name": "3rd place medal",
    "category": "activity",
    "shortname": ":third_place:",
    "keyWords": [
      "bronze",
      "medal",
      "third"
    ],
    "output": "1f949"
  },
  {
    "name": "sports medal",
    "category": "activity",
    "shortname": ":medal:",
    "keyWords": [
      "medal"
    ],
    "output": "1f3c5"
  },
  {
    "name": "military medal",
    "category": "activity",
    "shortname": ":military_medal:",
    "keyWords": [
      "celebration",
      "medal",
      "military"
    ],
    "output": "1f396"
  },
  {
    "name": "rosette",
    "category": "activity",
    "shortname": ":rosette:",
    "keyWords": [
      "plant"
    ],
    "output": "1f3f5"
  },
  {
    "name": "reminder ribbon",
    "category": "activity",
    "shortname": ":reminder_ribbon:",
    "keyWords": [
      "celebration",
      "reminder",
      "ribbon"
    ],
    "output": "1f397"
  },
  {
    "name": "ticket",
    "category": "activity",
    "shortname": ":ticket:",
    "keyWords": [
      "admission"
    ],
    "output": "1f3ab"
  },
  {
    "name": "admission tickets",
    "category": "activity",
    "shortname": ":tickets:",
    "keyWords": [
      "admission",
      "ticket"
    ],
    "output": "1f39f"
  },
  {
    "name": "circus tent",
    "category": "activity",
    "shortname": ":circus_tent:",
    "keyWords": [
      "circus",
      "tent"
    ],
    "output": "1f3aa"
  },
  {
    "name": "person juggling",
    "category": "activity",
    "shortname": ":person_juggling:",
    "keyWords": [
      "balance",
      "juggle",
      "multitask",
      "skill"
    ],
    "output": "1f939"
  },
  {
    "name": "person juggling: light skin tone",
    "category": "activity",
    "shortname": ":person_juggling_tone1:",
    "keyWords": [
      "balance",
      "juggle",
      "light skin tone",
      "multitask",
      "skill"
    ],
    "output": "1f939-1f3fb"
  },
  {
    "name": "person juggling: medium-light skin tone",
    "category": "activity",
    "shortname": ":person_juggling_tone2:",
    "keyWords": [
      "balance",
      "juggle",
      "medium-light skin tone",
      "multitask",
      "skill"
    ],
    "output": "1f939-1f3fc"
  },
  {
    "name": "person juggling: medium skin tone",
    "category": "activity",
    "shortname": ":person_juggling_tone3:",
    "keyWords": [
      "balance",
      "juggle",
      "medium skin tone",
      "multitask",
      "skill"
    ],
    "output": "1f939-1f3fd"
  },
  {
    "name": "person juggling: medium-dark skin tone",
    "category": "activity",
    "shortname": ":person_juggling_tone4:",
    "keyWords": [
      "balance",
      "juggle",
      "medium-dark skin tone",
      "multitask",
      "skill"
    ],
    "output": "1f939-1f3fe"
  },
  {
    "name": "person juggling: dark skin tone",
    "category": "activity",
    "shortname": ":person_juggling_tone5:",
    "keyWords": [
      "balance",
      "dark skin tone",
      "juggle",
      "multitask",
      "skill"
    ],
    "output": "1f939-1f3ff"
  },
  {
    "name": "woman juggling",
    "category": "activity",
    "shortname": ":woman_juggling:",
    "keyWords": [
      "juggling",
      "multitask",
      "woman"
    ],
    "output": "1f939-200d-2640-fe0f"
  },
  {
    "name": "woman juggling: light skin tone",
    "category": "activity",
    "shortname": ":woman_juggling_tone1:",
    "keyWords": [
      "juggling",
      "light skin tone",
      "multitask",
      "woman"
    ],
    "output": "1f939-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman juggling: medium-light skin tone",
    "category": "activity",
    "shortname": ":woman_juggling_tone2:",
    "keyWords": [
      "juggling",
      "medium-light skin tone",
      "multitask",
      "woman"
    ],
    "output": "1f939-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman juggling: medium skin tone",
    "category": "activity",
    "shortname": ":woman_juggling_tone3:",
    "keyWords": [
      "juggling",
      "medium skin tone",
      "multitask",
      "woman"
    ],
    "output": "1f939-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman juggling: medium-dark skin tone",
    "category": "activity",
    "shortname": ":woman_juggling_tone4:",
    "keyWords": [
      "juggling",
      "medium-dark skin tone",
      "multitask",
      "woman"
    ],
    "output": "1f939-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman juggling: dark skin tone",
    "category": "activity",
    "shortname": ":woman_juggling_tone5:",
    "keyWords": [
      "dark skin tone",
      "juggling",
      "multitask",
      "woman"
    ],
    "output": "1f939-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man juggling",
    "category": "activity",
    "shortname": ":man_juggling:",
    "keyWords": [
      "juggling",
      "man",
      "multitask"
    ],
    "output": "1f939-200d-2642-fe0f"
  },
  {
    "name": "man juggling: light skin tone",
    "category": "activity",
    "shortname": ":man_juggling_tone1:",
    "keyWords": [
      "juggling",
      "light skin tone",
      "man",
      "multitask"
    ],
    "output": "1f939-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man juggling: medium-light skin tone",
    "category": "activity",
    "shortname": ":man_juggling_tone2:",
    "keyWords": [
      "juggling",
      "man",
      "medium-light skin tone",
      "multitask"
    ],
    "output": "1f939-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man juggling: medium skin tone",
    "category": "activity",
    "shortname": ":man_juggling_tone3:",
    "keyWords": [
      "juggling",
      "man",
      "medium skin tone",
      "multitask"
    ],
    "output": "1f939-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man juggling: medium-dark skin tone",
    "category": "activity",
    "shortname": ":man_juggling_tone4:",
    "keyWords": [
      "juggling",
      "man",
      "medium-dark skin tone",
      "multitask"
    ],
    "output": "1f939-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man juggling: dark skin tone",
    "category": "activity",
    "shortname": ":man_juggling_tone5:",
    "keyWords": [
      "dark skin tone",
      "juggling",
      "man",
      "multitask"
    ],
    "output": "1f939-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "performing arts",
    "category": "activity",
    "shortname": ":performing_arts:",
    "keyWords": [
      "art",
      "mask",
      "performing",
      "theater",
      "theatre"
    ],
    "output": "1f3ad"
  },
  {
    "name": "artist palette",
    "category": "activity",
    "shortname": ":art:",
    "keyWords": [
      "art",
      "museum",
      "painting",
      "palette"
    ],
    "output": "1f3a8"
  },
  {
    "name": "clapper board",
    "category": "activity",
    "shortname": ":clapper:",
    "keyWords": [
      "clapper",
      "movie"
    ],
    "output": "1f3ac"
  },
  {
    "name": "microphone",
    "category": "activity",
    "shortname": ":microphone:",
    "keyWords": [
      "karaoke",
      "mic"
    ],
    "output": "1f3a4"
  },
  {
    "name": "headphone",
    "category": "activity",
    "shortname": ":headphones:",
    "keyWords": [
      "earbud"
    ],
    "output": "1f3a7"
  },
  {
    "name": "musical score",
    "category": "activity",
    "shortname": ":musical_score:",
    "keyWords": [
      "music",
      "score"
    ],
    "output": "1f3bc"
  },
  {
    "name": "musical keyboard",
    "category": "activity",
    "shortname": ":musical_keyboard:",
    "keyWords": [
      "instrument",
      "keyboard",
      "music",
      "piano"
    ],
    "output": "1f3b9"
  },
  {
    "name": "drum",
    "category": "activity",
    "shortname": ":drum:",
    "keyWords": [
      "drum",
      "drumsticks",
      "music"
    ],
    "output": "1f941"
  },
  {
    "name": "saxophone",
    "category": "activity",
    "shortname": ":saxophone:",
    "keyWords": [
      "instrument",
      "music",
      "sax"
    ],
    "output": "1f3b7"
  },
  {
    "name": "trumpet",
    "category": "activity",
    "shortname": ":trumpet:",
    "keyWords": [
      "instrument",
      "music"
    ],
    "output": "1f3ba"
  },
  {
    "name": "guitar",
    "category": "activity",
    "shortname": ":guitar:",
    "keyWords": [
      "instrument",
      "music"
    ],
    "output": "1f3b8"
  },
  {
    "name": "violin",
    "category": "activity",
    "shortname": ":violin:",
    "keyWords": [
      "instrument",
      "music"
    ],
    "output": "1f3bb"
  },
  {
    "name": "game die",
    "category": "activity",
    "shortname": ":game_die:",
    "keyWords": [
      "dice",
      "die",
      "game"
    ],
    "output": "1f3b2"
  },
  {
    "name": "direct hit",
    "category": "activity",
    "shortname": ":dart:",
    "keyWords": [
      "bull",
      "bullseye",
      "dart",
      "eye",
      "game",
      "hit",
      "target"
    ],
    "output": "1f3af"
  },
  {
    "name": "bowling",
    "category": "activity",
    "shortname": ":bowling:",
    "keyWords": [
      "ball",
      "game"
    ],
    "output": "1f3b3"
  },
  {
    "name": "video game",
    "category": "activity",
    "shortname": ":video_game:",
    "keyWords": [
      "controller",
      "game"
    ],
    "output": "1f3ae"
  },
  {
    "name": "slot machine",
    "category": "activity",
    "shortname": ":slot_machine:",
    "keyWords": [
      "game",
      "slot"
    ],
    "output": "1f3b0"
  },
  {
    "name": "watch",
    "category": "objects",
    "shortname": ":watch:",
    "keyWords": [
      "clock"
    ],
    "output": "231a"
  },
  {
    "name": "mobile phone",
    "category": "objects",
    "shortname": ":iphone:",
    "keyWords": [
      "cell",
      "mobile",
      "phone",
      "telephone"
    ],
    "output": "1f4f1"
  },
  {
    "name": "mobile phone with arrow",
    "category": "objects",
    "shortname": ":calling:",
    "keyWords": [
      "arrow",
      "call",
      "cell",
      "mobile",
      "phone",
      "receive",
      "telephone"
    ],
    "output": "1f4f2"
  },
  {
    "name": "laptop computer",
    "category": "objects",
    "shortname": ":computer:",
    "keyWords": [
      "computer",
      "pc",
      "personal"
    ],
    "output": "1f4bb"
  },
  {
    "name": "desktop computer",
    "category": "objects",
    "shortname": ":desktop:",
    "keyWords": [
      "computer",
      "desktop"
    ],
    "output": "1f5a5"
  },
  {
    "name": "printer",
    "category": "objects",
    "shortname": ":printer:",
    "keyWords": [
      "computer"
    ],
    "output": "1f5a8"
  },
  {
    "name": "computer mouse",
    "category": "objects",
    "shortname": ":mouse_three_button:",
    "keyWords": [
      "computer"
    ],
    "output": "1f5b1"
  },
  {
    "name": "trackball",
    "category": "objects",
    "shortname": ":trackball:",
    "keyWords": [
      "computer"
    ],
    "output": "1f5b2"
  },
  {
    "name": "joystick",
    "category": "objects",
    "shortname": ":joystick:",
    "keyWords": [
      "game",
      "video game"
    ],
    "output": "1f579"
  },
  {
    "name": "chess pawn",
    "category": "objects",
    "shortname": ":chess_pawn:",
    "keyWords": [
      ""
    ],
    "output": "265f-fe0f"
  },
  {
    "name": "jigsaw",
    "category": "objects",
    "shortname": ":jigsaw:",
    "keyWords": [
      ""
    ],
    "output": "1f9e9"
  },
  {
    "name": "clamp",
    "category": "objects",
    "shortname": ":compression:",
    "keyWords": [
      "compress",
      "tool",
      "vice"
    ],
    "output": "1f5dc"
  },
  {
    "name": "computer disk",
    "category": "objects",
    "shortname": ":minidisc:",
    "keyWords": [
      "computer",
      "disk",
      "minidisk",
      "optical"
    ],
    "output": "1f4bd"
  },
  {
    "name": "floppy disk",
    "category": "objects",
    "shortname": ":floppy_disk:",
    "keyWords": [
      "computer",
      "disk",
      "floppy"
    ],
    "output": "1f4be"
  },
  {
    "name": "optical disk",
    "category": "objects",
    "shortname": ":cd:",
    "keyWords": [
      "cd",
      "computer",
      "disk",
      "optical"
    ],
    "output": "1f4bf"
  },
  {
    "name": "dvd",
    "category": "objects",
    "shortname": ":dvd:",
    "keyWords": [
      "blu-ray",
      "computer",
      "disk",
      "dvd",
      "optical"
    ],
    "output": "1f4c0"
  },
  {
    "name": "videocassette",
    "category": "objects",
    "shortname": ":vhs:",
    "keyWords": [
      "tape",
      "vhs",
      "video"
    ],
    "output": "1f4fc"
  },
  {
    "name": "camera",
    "category": "objects",
    "shortname": ":camera:",
    "keyWords": [
      "video"
    ],
    "output": "1f4f7"
  },
  {
    "name": "camera with flash",
    "category": "objects",
    "shortname": ":camera_with_flash:",
    "keyWords": [
      "camera",
      "flash",
      "video"
    ],
    "output": "1f4f8"
  },
  {
    "name": "video camera",
    "category": "objects",
    "shortname": ":video_camera:",
    "keyWords": [
      "camera",
      "video"
    ],
    "output": "1f4f9"
  },
  {
    "name": "movie camera",
    "category": "objects",
    "shortname": ":movie_camera:",
    "keyWords": [
      "camera",
      "cinema",
      "movie"
    ],
    "output": "1f3a5"
  },
  {
    "name": "film projector",
    "category": "objects",
    "shortname": ":projector:",
    "keyWords": [
      "cinema",
      "film",
      "movie",
      "projector",
      "video"
    ],
    "output": "1f4fd"
  },
  {
    "name": "film frames",
    "category": "objects",
    "shortname": ":film_frames:",
    "keyWords": [
      "cinema",
      "film",
      "frames",
      "movie"
    ],
    "output": "1f39e"
  },
  {
    "name": "telephone receiver",
    "category": "objects",
    "shortname": ":telephone_receiver:",
    "keyWords": [
      "phone",
      "receiver",
      "telephone"
    ],
    "output": "1f4de"
  },
  {
    "name": "telephone",
    "category": "objects",
    "shortname": ":telephone:",
    "keyWords": [
      "phone"
    ],
    "output": "260e"
  },
  {
    "name": "pager",
    "category": "objects",
    "shortname": ":pager:",
    "keyWords": [
      "pager"
    ],
    "output": "1f4df"
  },
  {
    "name": "fax machine",
    "category": "objects",
    "shortname": ":fax:",
    "keyWords": [
      "fax"
    ],
    "output": "1f4e0"
  },
  {
    "name": "television",
    "category": "objects",
    "shortname": ":tv:",
    "keyWords": [
      "tv",
      "video"
    ],
    "output": "1f4fa"
  },
  {
    "name": "radio",
    "category": "objects",
    "shortname": ":radio:",
    "keyWords": [
      "video"
    ],
    "output": "1f4fb"
  },
  {
    "name": "studio microphone",
    "category": "objects",
    "shortname": ":microphone2:",
    "keyWords": [
      "mic",
      "microphone",
      "music",
      "studio"
    ],
    "output": "1f399"
  },
  {
    "name": "level slider",
    "category": "objects",
    "shortname": ":level_slider:",
    "keyWords": [
      "level",
      "music",
      "slider"
    ],
    "output": "1f39a"
  },
  {
    "name": "control knobs",
    "category": "objects",
    "shortname": ":control_knobs:",
    "keyWords": [
      "control",
      "knobs",
      "music"
    ],
    "output": "1f39b"
  },
  {
    "name": "stopwatch",
    "category": "objects",
    "shortname": ":stopwatch:",
    "keyWords": [
      "clock"
    ],
    "output": "23f1"
  },
  {
    "name": "timer clock",
    "category": "objects",
    "shortname": ":timer:",
    "keyWords": [
      "clock",
      "timer"
    ],
    "output": "23f2"
  },
  {
    "name": "alarm clock",
    "category": "objects",
    "shortname": ":alarm_clock:",
    "keyWords": [
      "alarm",
      "clock"
    ],
    "output": "23f0"
  },
  {
    "name": "mantelpiece clock",
    "category": "objects",
    "shortname": ":clock:",
    "keyWords": [
      "clock"
    ],
    "output": "1f570"
  },
  {
    "name": "hourglass done",
    "category": "objects",
    "shortname": ":hourglass:",
    "keyWords": [
      "sand",
      "timer"
    ],
    "output": "231b"
  },
  {
    "name": "hourglass not done",
    "category": "objects",
    "shortname": ":hourglass_flowing_sand:",
    "keyWords": [
      "hourglass",
      "sand",
      "timer"
    ],
    "output": "23f3"
  },
  {
    "name": "satellite antenna",
    "category": "objects",
    "shortname": ":satellite:",
    "keyWords": [
      "antenna",
      "dish",
      "satellite"
    ],
    "output": "1f4e1"
  },
  {
    "name": "compass",
    "category": "objects",
    "shortname": ":compass:",
    "keyWords": [
      ""
    ],
    "output": "1f9ed"
  },
  {
    "name": "battery",
    "category": "objects",
    "shortname": ":battery:",
    "keyWords": [
      "battery"
    ],
    "output": "1f50b"
  },
  {
    "name": "electric plug",
    "category": "objects",
    "shortname": ":electric_plug:",
    "keyWords": [
      "electric",
      "electricity",
      "plug"
    ],
    "output": "1f50c"
  },
  {
    "name": "magnet",
    "category": "objects",
    "shortname": ":magnet:",
    "keyWords": [
      ""
    ],
    "output": "1f9f2"
  },
  {
    "name": "light bulb",
    "category": "objects",
    "shortname": ":bulb:",
    "keyWords": [
      "bulb",
      "comic",
      "electric",
      "idea",
      "light"
    ],
    "output": "1f4a1"
  },
  {
    "name": "flashlight",
    "category": "objects",
    "shortname": ":flashlight:",
    "keyWords": [
      "electric",
      "light",
      "tool",
      "torch"
    ],
    "output": "1f526"
  },
  {
    "name": "candle",
    "category": "objects",
    "shortname": ":candle:",
    "keyWords": [
      "light"
    ],
    "output": "1f56f"
  },
  {
    "name": "fire extinguisher",
    "category": "objects",
    "shortname": ":fire_extinguisher:",
    "keyWords": [
      ""
    ],
    "output": "1f9ef"
  },
  {
    "name": "wastebasket",
    "category": "objects",
    "shortname": ":wastebasket:",
    "keyWords": [
      "wastebasket"
    ],
    "output": "1f5d1"
  },
  {
    "name": "oil drum",
    "category": "objects",
    "shortname": ":oil:",
    "keyWords": [
      "drum",
      "oil"
    ],
    "output": "1f6e2"
  },
  {
    "name": "money with wings",
    "category": "objects",
    "shortname": ":money_with_wings:",
    "keyWords": [
      "bank",
      "banknote",
      "bill",
      "dollar",
      "fly",
      "money",
      "note",
      "wings"
    ],
    "output": "1f4b8"
  },
  {
    "name": "dollar banknote",
    "category": "objects",
    "shortname": ":dollar:",
    "keyWords": [
      "bank",
      "banknote",
      "bill",
      "currency",
      "dollar",
      "money",
      "note"
    ],
    "output": "1f4b5"
  },
  {
    "name": "yen banknote",
    "category": "objects",
    "shortname": ":yen:",
    "keyWords": [
      "bank",
      "banknote",
      "bill",
      "currency",
      "money",
      "note",
      "yen"
    ],
    "output": "1f4b4"
  },
  {
    "name": "euro banknote",
    "category": "objects",
    "shortname": ":euro:",
    "keyWords": [
      "bank",
      "banknote",
      "bill",
      "currency",
      "euro",
      "money",
      "note"
    ],
    "output": "1f4b6"
  },
  {
    "name": "pound banknote",
    "category": "objects",
    "shortname": ":pound:",
    "keyWords": [
      "bank",
      "banknote",
      "bill",
      "currency",
      "money",
      "note",
      "pound"
    ],
    "output": "1f4b7"
  },
  {
    "name": "money bag",
    "category": "objects",
    "shortname": ":moneybag:",
    "keyWords": [
      "bag",
      "dollar",
      "money",
      "moneybag"
    ],
    "output": "1f4b0"
  },
  {
    "name": "credit card",
    "category": "objects",
    "shortname": ":credit_card:",
    "keyWords": [
      "bank",
      "card",
      "credit",
      "money"
    ],
    "output": "1f4b3"
  },
  {
    "name": "gem stone",
    "category": "objects",
    "shortname": ":gem:",
    "keyWords": [
      "diamond",
      "gem",
      "jewel"
    ],
    "output": "1f48e"
  },
  {
    "name": "nazar amulet",
    "category": "objects",
    "shortname": ":nazar_amulet:",
    "keyWords": [
      ""
    ],
    "output": "1f9ff"
  },
  {
    "name": "bricks",
    "category": "objects",
    "shortname": ":bricks:",
    "keyWords": [
      ""
    ],
    "output": "1f9f1"
  },
  {
    "name": "toolbox",
    "category": "objects",
    "shortname": ":toolbox:",
    "keyWords": [
      ""
    ],
    "output": "1f9f0"
  },
  {
    "name": "wrench",
    "category": "objects",
    "shortname": ":wrench:",
    "keyWords": [
      "spanner",
      "tool",
      "wrench"
    ],
    "output": "1f527"
  },
  {
    "name": "hammer",
    "category": "objects",
    "shortname": ":hammer:",
    "keyWords": [
      "tool"
    ],
    "output": "1f528"
  },
  {
    "name": "hammer and wrench",
    "category": "objects",
    "shortname": ":tools:",
    "keyWords": [
      "hammer",
      "spanner",
      "tool",
      "wrench"
    ],
    "output": "1f6e0"
  },
  {
    "name": "pick",
    "category": "objects",
    "shortname": ":pick:",
    "keyWords": [
      "mining",
      "tool"
    ],
    "output": "26cf"
  },
  {
    "name": "nut and bolt",
    "category": "objects",
    "shortname": ":nut_and_bolt:",
    "keyWords": [
      "bolt",
      "nut",
      "tool"
    ],
    "output": "1f529"
  },
  {
    "name": "chains",
    "category": "objects",
    "shortname": ":chains:",
    "keyWords": [
      "chain"
    ],
    "output": "26d3"
  },
  {
    "name": "pistol",
    "category": "objects",
    "shortname": ":gun:",
    "keyWords": [
      "gun",
      "handgun",
      "revolver",
      "tool",
      "weapon"
    ],
    "output": "1f52b"
  },
  {
    "name": "bomb",
    "category": "objects",
    "shortname": ":bomb:",
    "keyWords": [
      "comic"
    ],
    "output": "1f4a3"
  },
  {
    "name": "kitchen knife",
    "category": "objects",
    "shortname": ":knife:",
    "keyWords": [
      "cooking",
      "hocho",
      "knife",
      "tool",
      "weapon"
    ],
    "output": "1f52a"
  },
  {
    "name": "dagger",
    "category": "objects",
    "shortname": ":dagger:",
    "keyWords": [
      "knife",
      "weapon"
    ],
    "output": "1f5e1"
  },
  {
    "name": "shield",
    "category": "objects",
    "shortname": ":shield:",
    "keyWords": [
      "weapon"
    ],
    "output": "1f6e1"
  },
  {
    "name": "cigarette",
    "category": "objects",
    "shortname": ":smoking:",
    "keyWords": [
      "smoking"
    ],
    "output": "1f6ac"
  },
  {
    "name": "coffin",
    "category": "objects",
    "shortname": ":coffin:",
    "keyWords": [
      "death"
    ],
    "output": "26b0"
  },
  {
    "name": "funeral urn",
    "category": "objects",
    "shortname": ":urn:",
    "keyWords": [
      "ashes",
      "death",
      "funeral",
      "urn"
    ],
    "output": "26b1"
  },
  {
    "name": "amphora",
    "category": "objects",
    "shortname": ":amphora:",
    "keyWords": [
      "Aquarius",
      "cooking",
      "drink",
      "jug",
      "tool",
      "weapon",
      "zodiac"
    ],
    "output": "1f3fa"
  },
  {
    "name": "crystal ball",
    "category": "objects",
    "shortname": ":crystal_ball:",
    "keyWords": [
      "ball",
      "crystal",
      "fairy tale",
      "fantasy",
      "fortune",
      "tool"
    ],
    "output": "1f52e"
  },
  {
    "name": "prayer beads",
    "category": "objects",
    "shortname": ":prayer_beads:",
    "keyWords": [
      "beads",
      "clothing",
      "necklace",
      "prayer",
      "religion"
    ],
    "output": "1f4ff"
  },
  {
    "name": "barber pole",
    "category": "objects",
    "shortname": ":barber:",
    "keyWords": [
      "barber",
      "haircut",
      "pole"
    ],
    "output": "1f488"
  },
  {
    "name": "test tube",
    "category": "objects",
    "shortname": ":test_tube:",
    "keyWords": [
      ""
    ],
    "output": "1f9ea"
  },
  {
    "name": "petri dish",
    "category": "objects",
    "shortname": ":petri_dish:",
    "keyWords": [
      ""
    ],
    "output": "1f9eb"
  },
  {
    "name": "dna",
    "category": "objects",
    "shortname": ":dna:",
    "keyWords": [
      ""
    ],
    "output": "1f9ec"
  },
  {
    "name": "abacus",
    "category": "objects",
    "shortname": ":abacus:",
    "keyWords": [
      ""
    ],
    "output": "1f9ee"
  },
  {
    "name": "telescope",
    "category": "objects",
    "shortname": ":telescope:",
    "keyWords": [
      "science",
      "tool"
    ],
    "output": "1f52d"
  },
  {
    "name": "microscope",
    "category": "objects",
    "shortname": ":microscope:",
    "keyWords": [
      "science",
      "tool"
    ],
    "output": "1f52c"
  },
  {
    "name": "hole",
    "category": "objects",
    "shortname": ":hole:",
    "keyWords": [
      "hole"
    ],
    "output": "1f573"
  },
  {
    "name": "pill",
    "category": "objects",
    "shortname": ":pill:",
    "keyWords": [
      "doctor",
      "medicine",
      "sick"
    ],
    "output": "1f48a"
  },
  {
    "name": "syringe",
    "category": "objects",
    "shortname": ":syringe:",
    "keyWords": [
      "doctor",
      "medicine",
      "needle",
      "shot",
      "sick",
      "tool"
    ],
    "output": "1f489"
  },
  {
    "name": "thermometer",
    "category": "objects",
    "shortname": ":thermometer:",
    "keyWords": [
      "weather"
    ],
    "output": "1f321"
  },
  {
    "name": "toilet",
    "category": "objects",
    "shortname": ":toilet:",
    "keyWords": [
      "toilet"
    ],
    "output": "1f6bd"
  },
  {
    "name": "potable water",
    "category": "objects",
    "shortname": ":potable_water:",
    "keyWords": [
      "drinking",
      "potable",
      "water"
    ],
    "output": "1f6b0"
  },
  {
    "name": "shower",
    "category": "objects",
    "shortname": ":shower:",
    "keyWords": [
      "water"
    ],
    "output": "1f6bf"
  },
  {
    "name": "bathtub",
    "category": "objects",
    "shortname": ":bathtub:",
    "keyWords": [
      "bath"
    ],
    "output": "1f6c1"
  },
  {
    "name": "person taking bath",
    "category": "objects",
    "shortname": ":bath:",
    "keyWords": [
      "bath",
      "bathtub"
    ],
    "output": "1f6c0"
  },
  {
    "name": "person taking bath: light skin tone",
    "category": "objects",
    "shortname": ":bath_tone1:",
    "keyWords": [
      "bath",
      "bathtub",
      "light skin tone"
    ],
    "output": "1f6c0-1f3fb"
  },
  {
    "name": "person taking bath: medium-light skin tone",
    "category": "objects",
    "shortname": ":bath_tone2:",
    "keyWords": [
      "bath",
      "bathtub",
      "medium-light skin tone"
    ],
    "output": "1f6c0-1f3fc"
  },
  {
    "name": "person taking bath: medium skin tone",
    "category": "objects",
    "shortname": ":bath_tone3:",
    "keyWords": [
      "bath",
      "bathtub",
      "medium skin tone"
    ],
    "output": "1f6c0-1f3fd"
  },
  {
    "name": "person taking bath: medium-dark skin tone",
    "category": "objects",
    "shortname": ":bath_tone4:",
    "keyWords": [
      "bath",
      "bathtub",
      "medium-dark skin tone"
    ],
    "output": "1f6c0-1f3fe"
  },
  {
    "name": "person taking bath: dark skin tone",
    "category": "objects",
    "shortname": ":bath_tone5:",
    "keyWords": [
      "bath",
      "bathtub",
      "dark skin tone"
    ],
    "output": "1f6c0-1f3ff"
  },
  {
    "name": "broom",
    "category": "objects",
    "shortname": ":broom:",
    "keyWords": [
      ""
    ],
    "output": "1f9f9"
  },
  {
    "name": "basket",
    "category": "objects",
    "shortname": ":basket:",
    "keyWords": [
      ""
    ],
    "output": "1f9fa"
  },
  {
    "name": "roll of paper",
    "category": "objects",
    "shortname": ":roll_of_paper:",
    "keyWords": [
      ""
    ],
    "output": "1f9fb"
  },
  {
    "name": "soap",
    "category": "objects",
    "shortname": ":soap:",
    "keyWords": [
      ""
    ],
    "output": "1f9fc"
  },
  {
    "name": "sponge",
    "category": "objects",
    "shortname": ":sponge:",
    "keyWords": [
      ""
    ],
    "output": "1f9fd"
  },
  {
    "name": "squeeze bottle",
    "category": "objects",
    "shortname": ":squeeze_bottle:",
    "keyWords": [
      ""
    ],
    "output": "1f9f4"
  },
  {
    "name": "thread",
    "category": "objects",
    "shortname": ":thread:",
    "keyWords": [
      ""
    ],
    "output": "1f9f5"
  },
  {
    "name": "yarn",
    "category": "objects",
    "shortname": ":yarn:",
    "keyWords": [
      ""
    ],
    "output": "1f9f6"
  },
  {
    "name": "bellhop bell",
    "category": "objects",
    "shortname": ":bellhop:",
    "keyWords": [
      "bell",
      "bellhop",
      "hotel"
    ],
    "output": "1f6ce"
  },
  {
    "name": "key",
    "category": "objects",
    "shortname": ":key:",
    "keyWords": [
      "lock",
      "password"
    ],
    "output": "1f511"
  },
  {
    "name": "old key",
    "category": "objects",
    "shortname": ":key2:",
    "keyWords": [
      "clue",
      "key",
      "lock",
      "old"
    ],
    "output": "1f5dd"
  },
  {
    "name": "door",
    "category": "objects",
    "shortname": ":door:",
    "keyWords": [
      "door"
    ],
    "output": "1f6aa"
  },
  {
    "name": "couch and lamp",
    "category": "objects",
    "shortname": ":couch:",
    "keyWords": [
      "couch",
      "hotel",
      "lamp"
    ],
    "output": "1f6cb"
  },
  {
    "name": "bed",
    "category": "objects",
    "shortname": ":bed:",
    "keyWords": [
      "hotel",
      "sleep"
    ],
    "output": "1f6cf"
  },
  {
    "name": "person in bed",
    "category": "objects",
    "shortname": ":sleeping_accommodation:",
    "keyWords": [
      "hotel",
      "sleep"
    ],
    "output": "1f6cc"
  },
  {
    "name": "person in bed: light skin tone",
    "category": "objects",
    "shortname": ":person_in_bed_tone1:",
    "keyWords": [
      "hotel",
      "light skin tone",
      "sleep"
    ],
    "output": "1f6cc-1f3fb"
  },
  {
    "name": "person in bed: medium-light skin tone",
    "category": "objects",
    "shortname": ":person_in_bed_tone2:",
    "keyWords": [
      "hotel",
      "medium-light skin tone",
      "sleep"
    ],
    "output": "1f6cc-1f3fc"
  },
  {
    "name": "person in bed: medium skin tone",
    "category": "objects",
    "shortname": ":person_in_bed_tone3:",
    "keyWords": [
      "hotel",
      "medium skin tone",
      "sleep"
    ],
    "output": "1f6cc-1f3fd"
  },
  {
    "name": "person in bed: medium-dark skin tone",
    "category": "objects",
    "shortname": ":person_in_bed_tone4:",
    "keyWords": [
      "hotel",
      "medium-dark skin tone",
      "sleep"
    ],
    "output": "1f6cc-1f3fe"
  },
  {
    "name": "person in bed: dark skin tone",
    "category": "objects",
    "shortname": ":person_in_bed_tone5:",
    "keyWords": [
      "dark skin tone",
      "hotel",
      "sleep"
    ],
    "output": "1f6cc-1f3ff"
  },
  {
    "name": "teddy bear",
    "category": "objects",
    "shortname": ":teddy_bear:",
    "keyWords": [
      ""
    ],
    "output": "1f9f8"
  },
  {
    "name": "framed picture",
    "category": "objects",
    "shortname": ":frame_photo:",
    "keyWords": [
      "art",
      "frame",
      "museum",
      "painting",
      "picture"
    ],
    "output": "1f5bc"
  },
  {
    "name": "shopping bags",
    "category": "objects",
    "shortname": ":shopping_bags:",
    "keyWords": [
      "bag",
      "hotel",
      "shopping"
    ],
    "output": "1f6cd"
  },
  {
    "name": "shopping cart",
    "category": "objects",
    "shortname": ":shopping_cart:",
    "keyWords": [
      "cart",
      "shopping",
      "trolley"
    ],
    "output": "1f6d2"
  },
  {
    "name": "wrapped gift",
    "category": "objects",
    "shortname": ":gift:",
    "keyWords": [
      "box",
      "celebration",
      "gift",
      "present",
      "wrapped"
    ],
    "output": "1f381"
  },
  {
    "name": "balloon",
    "category": "objects",
    "shortname": ":balloon:",
    "keyWords": [
      "celebration"
    ],
    "output": "1f388"
  },
  {
    "name": "carp streamer",
    "category": "objects",
    "shortname": ":flags:",
    "keyWords": [
      "carp",
      "celebration",
      "streamer"
    ],
    "output": "1f38f"
  },
  {
    "name": "ribbon",
    "category": "objects",
    "shortname": ":ribbon:",
    "keyWords": [
      "celebration"
    ],
    "output": "1f380"
  },
  {
    "name": "confetti ball",
    "category": "objects",
    "shortname": ":confetti_ball:",
    "keyWords": [
      "ball",
      "celebration",
      "confetti"
    ],
    "output": "1f38a"
  },
  {
    "name": "party popper",
    "category": "objects",
    "shortname": ":tada:",
    "keyWords": [
      "celebration",
      "party",
      "popper",
      "tada"
    ],
    "output": "1f389"
  },
  {
    "name": "Japanese dolls",
    "category": "objects",
    "shortname": ":dolls:",
    "keyWords": [
      "Japanese",
      "celebration",
      "doll",
      "festival"
    ],
    "output": "1f38e"
  },
  {
    "name": "red paper lantern",
    "category": "objects",
    "shortname": ":izakaya_lantern:",
    "keyWords": [
      "bar",
      "lantern",
      "light",
      "red"
    ],
    "output": "1f3ee"
  },
  {
    "name": "wind chime",
    "category": "objects",
    "shortname": ":wind_chime:",
    "keyWords": [
      "bell",
      "celebration",
      "chime",
      "wind"
    ],
    "output": "1f390"
  },
  {
    "name": "red envelope",
    "category": "objects",
    "shortname": ":red_envelope:",
    "keyWords": [
      ""
    ],
    "output": "1f9e7"
  },
  {
    "name": "envelope with arrow",
    "category": "objects",
    "shortname": ":envelope_with_arrow:",
    "keyWords": [
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
    "output": "1f4e9"
  },
  {
    "name": "incoming envelope",
    "category": "objects",
    "shortname": ":incoming_envelope:",
    "keyWords": [
      "e-mail",
      "email",
      "envelope",
      "incoming",
      "letter",
      "mail",
      "receive"
    ],
    "output": "1f4e8"
  },
  {
    "name": "e-mail",
    "category": "objects",
    "shortname": ":e-mail:",
    "keyWords": [
      "email",
      "letter",
      "mail"
    ],
    "output": "1f4e7"
  },
  {
    "name": "love letter",
    "category": "objects",
    "shortname": ":love_letter:",
    "keyWords": [
      "heart",
      "letter",
      "love",
      "mail"
    ],
    "output": "1f48c"
  },
  {
    "name": "inbox tray",
    "category": "objects",
    "shortname": ":inbox_tray:",
    "keyWords": [
      "box",
      "inbox",
      "letter",
      "mail",
      "receive",
      "tray"
    ],
    "output": "1f4e5"
  },
  {
    "name": "outbox tray",
    "category": "objects",
    "shortname": ":outbox_tray:",
    "keyWords": [
      "box",
      "letter",
      "mail",
      "outbox",
      "sent",
      "tray"
    ],
    "output": "1f4e4"
  },
  {
    "name": "package",
    "category": "objects",
    "shortname": ":package:",
    "keyWords": [
      "box",
      "parcel"
    ],
    "output": "1f4e6"
  },
  {
    "name": "label",
    "category": "objects",
    "shortname": ":label:",
    "keyWords": [
      "label"
    ],
    "output": "1f3f7"
  },
  {
    "name": "closed mailbox with lowered flag",
    "category": "objects",
    "shortname": ":mailbox_closed:",
    "keyWords": [
      "closed",
      "lowered",
      "mail",
      "mailbox",
      "postbox"
    ],
    "output": "1f4ea"
  },
  {
    "name": "closed mailbox with raised flag",
    "category": "objects",
    "shortname": ":mailbox:",
    "keyWords": [
      "closed",
      "mail",
      "mailbox",
      "postbox"
    ],
    "output": "1f4eb"
  },
  {
    "name": "open mailbox with raised flag",
    "category": "objects",
    "shortname": ":mailbox_with_mail:",
    "keyWords": [
      "mail",
      "mailbox",
      "open",
      "postbox"
    ],
    "output": "1f4ec"
  },
  {
    "name": "open mailbox with lowered flag",
    "category": "objects",
    "shortname": ":mailbox_with_no_mail:",
    "keyWords": [
      "lowered",
      "mail",
      "mailbox",
      "open",
      "postbox"
    ],
    "output": "1f4ed"
  },
  {
    "name": "postbox",
    "category": "objects",
    "shortname": ":postbox:",
    "keyWords": [
      "mail",
      "mailbox"
    ],
    "output": "1f4ee"
  },
  {
    "name": "postal horn",
    "category": "objects",
    "shortname": ":postal_horn:",
    "keyWords": [
      "horn",
      "post",
      "postal"
    ],
    "output": "1f4ef"
  },
  {
    "name": "scroll",
    "category": "objects",
    "shortname": ":scroll:",
    "keyWords": [
      "paper"
    ],
    "output": "1f4dc"
  },
  {
    "name": "page with curl",
    "category": "objects",
    "shortname": ":page_with_curl:",
    "keyWords": [
      "curl",
      "document",
      "page"
    ],
    "output": "1f4c3"
  },
  {
    "name": "page facing up",
    "category": "objects",
    "shortname": ":page_facing_up:",
    "keyWords": [
      "document",
      "page"
    ],
    "output": "1f4c4"
  },
  {
    "name": "receipt",
    "category": "objects",
    "shortname": ":receipt:",
    "keyWords": [
      ""
    ],
    "output": "1f9fe"
  },
  {
    "name": "bookmark tabs",
    "category": "objects",
    "shortname": ":bookmark_tabs:",
    "keyWords": [
      "bookmark",
      "mark",
      "marker",
      "tabs"
    ],
    "output": "1f4d1"
  },
  {
    "name": "bar chart",
    "category": "objects",
    "shortname": ":bar_chart:",
    "keyWords": [
      "bar",
      "chart",
      "graph"
    ],
    "output": "1f4ca"
  },
  {
    "name": "chart increasing",
    "category": "objects",
    "shortname": ":chart_with_upwards_trend:",
    "keyWords": [
      "chart",
      "graph",
      "growth",
      "trend",
      "upward"
    ],
    "output": "1f4c8"
  },
  {
    "name": "chart decreasing",
    "category": "objects",
    "shortname": ":chart_with_downwards_trend:",
    "keyWords": [
      "chart",
      "down",
      "graph",
      "trend"
    ],
    "output": "1f4c9"
  },
  {
    "name": "spiral notepad",
    "category": "objects",
    "shortname": ":notepad_spiral:",
    "keyWords": [
      "note",
      "pad",
      "spiral"
    ],
    "output": "1f5d2"
  },
  {
    "name": "spiral calendar",
    "category": "objects",
    "shortname": ":calendar_spiral:",
    "keyWords": [
      "calendar",
      "pad",
      "spiral"
    ],
    "output": "1f5d3"
  },
  {
    "name": "tear-off calendar",
    "category": "objects",
    "shortname": ":calendar:",
    "keyWords": [
      "calendar"
    ],
    "output": "1f4c6"
  },
  {
    "name": "calendar",
    "category": "objects",
    "shortname": ":date:",
    "keyWords": [
      "date"
    ],
    "output": "1f4c5"
  },
  {
    "name": "card index",
    "category": "objects",
    "shortname": ":card_index:",
    "keyWords": [
      "card",
      "index",
      "rolodex"
    ],
    "output": "1f4c7"
  },
  {
    "name": "card file box",
    "category": "objects",
    "shortname": ":card_box:",
    "keyWords": [
      "box",
      "card",
      "file"
    ],
    "output": "1f5c3"
  },
  {
    "name": "ballot box with ballot",
    "category": "objects",
    "shortname": ":ballot_box:",
    "keyWords": [
      "ballot",
      "box"
    ],
    "output": "1f5f3"
  },
  {
    "name": "file cabinet",
    "category": "objects",
    "shortname": ":file_cabinet:",
    "keyWords": [
      "cabinet",
      "file",
      "filing"
    ],
    "output": "1f5c4"
  },
  {
    "name": "clipboard",
    "category": "objects",
    "shortname": ":clipboard:",
    "keyWords": [
      "clipboard"
    ],
    "output": "1f4cb"
  },
  {
    "name": "file folder",
    "category": "objects",
    "shortname": ":file_folder:",
    "keyWords": [
      "file",
      "folder"
    ],
    "output": "1f4c1"
  },
  {
    "name": "open file folder",
    "category": "objects",
    "shortname": ":open_file_folder:",
    "keyWords": [
      "file",
      "folder",
      "open"
    ],
    "output": "1f4c2"
  },
  {
    "name": "card index dividers",
    "category": "objects",
    "shortname": ":dividers:",
    "keyWords": [
      "card",
      "dividers",
      "index"
    ],
    "output": "1f5c2"
  },
  {
    "name": "rolled-up newspaper",
    "category": "objects",
    "shortname": ":newspaper2:",
    "keyWords": [
      "news",
      "newspaper",
      "paper",
      "rolled"
    ],
    "output": "1f5de"
  },
  {
    "name": "newspaper",
    "category": "objects",
    "shortname": ":newspaper:",
    "keyWords": [
      "news",
      "paper"
    ],
    "output": "1f4f0"
  },
  {
    "name": "notebook",
    "category": "objects",
    "shortname": ":notebook:",
    "keyWords": [
      "notebook"
    ],
    "output": "1f4d3"
  },
  {
    "name": "notebook with decorative cover",
    "category": "objects",
    "shortname": ":notebook_with_decorative_cover:",
    "keyWords": [
      "book",
      "cover",
      "decorated",
      "notebook"
    ],
    "output": "1f4d4"
  },
  {
    "name": "ledger",
    "category": "objects",
    "shortname": ":ledger:",
    "keyWords": [
      "notebook"
    ],
    "output": "1f4d2"
  },
  {
    "name": "closed book",
    "category": "objects",
    "shortname": ":closed_book:",
    "keyWords": [
      "book",
      "closed"
    ],
    "output": "1f4d5"
  },
  {
    "name": "green book",
    "category": "objects",
    "shortname": ":green_book:",
    "keyWords": [
      "book",
      "green"
    ],
    "output": "1f4d7"
  },
  {
    "name": "blue book",
    "category": "objects",
    "shortname": ":blue_book:",
    "keyWords": [
      "blue",
      "book"
    ],
    "output": "1f4d8"
  },
  {
    "name": "orange book",
    "category": "objects",
    "shortname": ":orange_book:",
    "keyWords": [
      "book",
      "orange"
    ],
    "output": "1f4d9"
  },
  {
    "name": "books",
    "category": "objects",
    "shortname": ":books:",
    "keyWords": [
      "book"
    ],
    "output": "1f4da"
  },
  {
    "name": "open book",
    "category": "objects",
    "shortname": ":book:",
    "keyWords": [
      "book",
      "open"
    ],
    "output": "1f4d6"
  },
  {
    "name": "bookmark",
    "category": "objects",
    "shortname": ":bookmark:",
    "keyWords": [
      "mark"
    ],
    "output": "1f516"
  },
  {
    "name": "link",
    "category": "objects",
    "shortname": ":link:",
    "keyWords": [
      "link"
    ],
    "output": "1f517"
  },
  {
    "name": "paperclip",
    "category": "objects",
    "shortname": ":paperclip:",
    "keyWords": [
      "paperclip"
    ],
    "output": "1f4ce"
  },
  {
    "name": "linked paperclips",
    "category": "objects",
    "shortname": ":paperclips:",
    "keyWords": [
      "link",
      "paperclip"
    ],
    "output": "1f587"
  },
  {
    "name": "triangular ruler",
    "category": "objects",
    "shortname": ":triangular_ruler:",
    "keyWords": [
      "ruler",
      "set",
      "triangle"
    ],
    "output": "1f4d0"
  },
  {
    "name": "straight ruler",
    "category": "objects",
    "shortname": ":straight_ruler:",
    "keyWords": [
      "ruler",
      "straight edge"
    ],
    "output": "1f4cf"
  },
  {
    "name": "safety pin",
    "category": "objects",
    "shortname": ":safety_pin:",
    "keyWords": [
      ""
    ],
    "output": "1f9f7"
  },
  {
    "name": "pushpin",
    "category": "objects",
    "shortname": ":pushpin:",
    "keyWords": [
      "pin"
    ],
    "output": "1f4cc"
  },
  {
    "name": "round pushpin",
    "category": "objects",
    "shortname": ":round_pushpin:",
    "keyWords": [
      "pin",
      "pushpin"
    ],
    "output": "1f4cd"
  },
  {
    "name": "pen",
    "category": "objects",
    "shortname": ":pen_ballpoint:",
    "keyWords": [
      "ballpoint"
    ],
    "output": "1f58a"
  },
  {
    "name": "fountain pen",
    "category": "objects",
    "shortname": ":pen_fountain:",
    "keyWords": [
      "fountain",
      "pen"
    ],
    "output": "1f58b"
  },
  {
    "name": "paintbrush",
    "category": "objects",
    "shortname": ":paintbrush:",
    "keyWords": [
      "painting"
    ],
    "output": "1f58c"
  },
  {
    "name": "crayon",
    "category": "objects",
    "shortname": ":crayon:",
    "keyWords": [
      "crayon"
    ],
    "output": "1f58d"
  },
  {
    "name": "memo",
    "category": "objects",
    "shortname": ":pencil:",
    "keyWords": [
      "pencil"
    ],
    "output": "1f4dd"
  },
  {
    "name": "pencil",
    "category": "objects",
    "shortname": ":pencil2:",
    "keyWords": [
      "pencil"
    ],
    "output": "270f"
  },
  {
    "name": "magnifying glass tilted left",
    "category": "objects",
    "shortname": ":mag:",
    "keyWords": [
      "glass",
      "magnifying",
      "search",
      "tool"
    ],
    "output": "1f50d"
  },
  {
    "name": "magnifying glass tilted right",
    "category": "objects",
    "shortname": ":mag_right:",
    "keyWords": [
      "glass",
      "magnifying",
      "search",
      "tool"
    ],
    "output": "1f50e"
  },
  {
    "name": "locked with pen",
    "category": "objects",
    "shortname": ":lock_with_ink_pen:",
    "keyWords": [
      "ink",
      "lock",
      "nib",
      "pen",
      "privacy"
    ],
    "output": "1f50f"
  },
  {
    "name": "locked with key",
    "category": "objects",
    "shortname": ":closed_lock_with_key:",
    "keyWords": [
      "closed",
      "key",
      "lock",
      "secure"
    ],
    "output": "1f510"
  },
  {
    "name": "dog face",
    "category": "nature",
    "shortname": ":dog:",
    "keyWords": [
      "dog",
      "face",
      "pet"
    ],
    "output": "1f436"
  },
  {
    "name": "cat face",
    "category": "nature",
    "shortname": ":cat:",
    "keyWords": [
      "cat",
      "face",
      "pet"
    ],
    "output": "1f431"
  },
  {
    "name": "mouse face",
    "category": "nature",
    "shortname": ":mouse:",
    "keyWords": [
      "face",
      "mouse"
    ],
    "output": "1f42d"
  },
  {
    "name": "hamster face",
    "category": "nature",
    "shortname": ":hamster:",
    "keyWords": [
      "face",
      "hamster",
      "pet"
    ],
    "output": "1f439"
  },
  {
    "name": "rabbit face",
    "category": "nature",
    "shortname": ":rabbit:",
    "keyWords": [
      "bunny",
      "face",
      "pet",
      "rabbit"
    ],
    "output": "1f430"
  },
  {
    "name": "fox face",
    "category": "nature",
    "shortname": ":fox:",
    "keyWords": [
      "face",
      "fox"
    ],
    "output": "1f98a"
  },
  {
    "name": "raccoon",
    "category": "nature",
    "shortname": ":raccoon:",
    "keyWords": [
      ""
    ],
    "output": "1f99d"
  },
  {
    "name": "bear face",
    "category": "nature",
    "shortname": ":bear:",
    "keyWords": [
      "bear",
      "face"
    ],
    "output": "1f43b"
  },
  {
    "name": "panda face",
    "category": "nature",
    "shortname": ":panda_face:",
    "keyWords": [
      "face",
      "panda"
    ],
    "output": "1f43c"
  },
  {
    "name": "kangaroo",
    "category": "nature",
    "shortname": ":kangaroo:",
    "keyWords": [
      ""
    ],
    "output": "1f998"
  },
  {
    "name": "badger",
    "category": "nature",
    "shortname": ":badger:",
    "keyWords": [
      ""
    ],
    "output": "1f9a1"
  },
  {
    "name": "koala",
    "category": "nature",
    "shortname": ":koala:",
    "keyWords": [
      "bear"
    ],
    "output": "1f428"
  },
  {
    "name": "tiger face",
    "category": "nature",
    "shortname": ":tiger:",
    "keyWords": [
      "face",
      "tiger"
    ],
    "output": "1f42f"
  },
  {
    "name": "lion face",
    "category": "nature",
    "shortname": ":lion_face:",
    "keyWords": [
      "Leo",
      "face",
      "lion",
      "zodiac"
    ],
    "output": "1f981"
  },
  {
    "name": "cow face",
    "category": "nature",
    "shortname": ":cow:",
    "keyWords": [
      "cow",
      "face"
    ],
    "output": "1f42e"
  },
  {
    "name": "pig face",
    "category": "nature",
    "shortname": ":pig:",
    "keyWords": [
      "face",
      "pig"
    ],
    "output": "1f437"
  },
  {
    "name": "pig nose",
    "category": "nature",
    "shortname": ":pig_nose:",
    "keyWords": [
      "face",
      "nose",
      "pig"
    ],
    "output": "1f43d"
  },
  {
    "name": "frog face",
    "category": "nature",
    "shortname": ":frog:",
    "keyWords": [
      "face",
      "frog"
    ],
    "output": "1f438"
  },
  {
    "name": "monkey face",
    "category": "nature",
    "shortname": ":monkey_face:",
    "keyWords": [
      "face",
      "monkey"
    ],
    "output": "1f435"
  },
  {
    "name": "see-no-evil monkey",
    "category": "nature",
    "shortname": ":see_no_evil:",
    "keyWords": [
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
    "output": "1f648"
  },
  {
    "name": "hear-no-evil monkey",
    "category": "nature",
    "shortname": ":hear_no_evil:",
    "keyWords": [
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
    "output": "1f649"
  },
  {
    "name": "speak-no-evil monkey",
    "category": "nature",
    "shortname": ":speak_no_evil:",
    "keyWords": [
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
    "output": "1f64a"
  },
  {
    "name": "monkey",
    "category": "nature",
    "shortname": ":monkey:",
    "keyWords": [
      "monkey"
    ],
    "output": "1f412"
  },
  {
    "name": "chicken",
    "category": "nature",
    "shortname": ":chicken:",
    "keyWords": [
      "bird",
      "chicken"
    ],
    "output": "1f414"
  },
  {
    "name": "penguin",
    "category": "nature",
    "shortname": ":penguin:",
    "keyWords": [
      "bird",
      "penguin"
    ],
    "output": "1f427"
  },
  {
    "name": "bird",
    "category": "nature",
    "shortname": ":bird:",
    "keyWords": [
      "bird"
    ],
    "output": "1f426"
  },
  {
    "name": "baby chick",
    "category": "nature",
    "shortname": ":baby_chick:",
    "keyWords": [
      "baby",
      "bird",
      "chick"
    ],
    "output": "1f424"
  },
  {
    "name": "hatching chick",
    "category": "nature",
    "shortname": ":hatching_chick:",
    "keyWords": [
      "baby",
      "bird",
      "chick",
      "hatching"
    ],
    "output": "1f423"
  },
  {
    "name": "front-facing baby chick",
    "category": "nature",
    "shortname": ":hatched_chick:",
    "keyWords": [
      "baby",
      "bird",
      "chick"
    ],
    "output": "1f425"
  },
  {
    "name": "duck",
    "category": "nature",
    "shortname": ":duck:",
    "keyWords": [
      "bird",
      "duck"
    ],
    "output": "1f986"
  },
  {
    "name": "swan",
    "category": "nature",
    "shortname": ":swan:",
    "keyWords": [
      ""
    ],
    "output": "1f9a2"
  },
  {
    "name": "eagle",
    "category": "nature",
    "shortname": ":eagle:",
    "keyWords": [
      "bird",
      "eagle"
    ],
    "output": "1f985"
  },
  {
    "name": "owl",
    "category": "nature",
    "shortname": ":owl:",
    "keyWords": [
      "bird",
      "owl",
      "wise"
    ],
    "output": "1f989"
  },
  {
    "name": "parrot",
    "category": "nature",
    "shortname": ":parrot:",
    "keyWords": [
      ""
    ],
    "output": "1f99c"
  },
  {
    "name": "peacock",
    "category": "nature",
    "shortname": ":peacock:",
    "keyWords": [
      ""
    ],
    "output": "1f99a"
  },
  {
    "name": "bat",
    "category": "nature",
    "shortname": ":bat:",
    "keyWords": [
      "bat",
      "vampire"
    ],
    "output": "1f987"
  },
  {
    "name": "wolf face",
    "category": "nature",
    "shortname": ":wolf:",
    "keyWords": [
      "face",
      "wolf"
    ],
    "output": "1f43a"
  },
  {
    "name": "boar",
    "category": "nature",
    "shortname": ":boar:",
    "keyWords": [
      "pig"
    ],
    "output": "1f417"
  },
  {
    "name": "horse face",
    "category": "nature",
    "shortname": ":horse:",
    "keyWords": [
      "face",
      "horse"
    ],
    "output": "1f434"
  },
  {
    "name": "unicorn face",
    "category": "nature",
    "shortname": ":unicorn:",
    "keyWords": [
      "face",
      "unicorn"
    ],
    "output": "1f984"
  },
  {
    "name": "honeybee",
    "category": "nature",
    "shortname": ":bee:",
    "keyWords": [
      "bee",
      "insect"
    ],
    "output": "1f41d"
  },
  {
    "name": "bug",
    "category": "nature",
    "shortname": ":bug:",
    "keyWords": [
      "insect"
    ],
    "output": "1f41b"
  },
  {
    "name": "butterfly",
    "category": "nature",
    "shortname": ":butterfly:",
    "keyWords": [
      "butterfly",
      "insect",
      "pretty"
    ],
    "output": "1f98b"
  },
  {
    "name": "snail",
    "category": "nature",
    "shortname": ":snail:",
    "keyWords": [
      "snail"
    ],
    "output": "1f40c"
  },
  {
    "name": "spiral shell",
    "category": "nature",
    "shortname": ":shell:",
    "keyWords": [
      "shell",
      "spiral"
    ],
    "output": "1f41a"
  },
  {
    "name": "lady beetle",
    "category": "nature",
    "shortname": ":beetle:",
    "keyWords": [
      "beetle",
      "insect",
      "ladybird",
      "ladybug"
    ],
    "output": "1f41e"
  },
  {
    "name": "ant",
    "category": "nature",
    "shortname": ":ant:",
    "keyWords": [
      "insect"
    ],
    "output": "1f41c"
  },
  {
    "name": "cricket",
    "category": "nature",
    "shortname": ":cricket:",
    "keyWords": [
      ""
    ],
    "output": "1f997"
  },
  {
    "name": "spider",
    "category": "nature",
    "shortname": ":spider:",
    "keyWords": [
      "insect"
    ],
    "output": "1f577"
  },
  {
    "name": "spider web",
    "category": "nature",
    "shortname": ":spider_web:",
    "keyWords": [
      "spider",
      "web"
    ],
    "output": "1f578"
  },
  {
    "name": "scorpion",
    "category": "nature",
    "shortname": ":scorpion:",
    "keyWords": [
      "Scorpius",
      "scorpio",
      "zodiac"
    ],
    "output": "1f982"
  },
  {
    "name": "mosquito",
    "category": "nature",
    "shortname": ":mosquito:",
    "keyWords": [
      ""
    ],
    "output": "1f99f"
  },
  {
    "name": "microbe",
    "category": "nature",
    "shortname": ":microbe:",
    "keyWords": [
      ""
    ],
    "output": "1f9a0"
  },
  {
    "name": "turtle",
    "category": "nature",
    "shortname": ":turtle:",
    "keyWords": [
      "terrapin",
      "tortoise",
      "turtle"
    ],
    "output": "1f422"
  },
  {
    "name": "snake",
    "category": "nature",
    "shortname": ":snake:",
    "keyWords": [
      "Ophiuchus",
      "bearer",
      "serpent",
      "zodiac"
    ],
    "output": "1f40d"
  },
  {
    "name": "lizard",
    "category": "nature",
    "shortname": ":lizard:",
    "keyWords": [
      "lizard",
      "reptile"
    ],
    "output": "1f98e"
  },
  {
    "name": "T-Rex",
    "category": "nature",
    "shortname": ":t_rex:",
    "keyWords": [
      "Tyrannosaurus Rex"
    ],
    "output": "1f996"
  },
  {
    "name": "sauropod",
    "category": "nature",
    "shortname": ":sauropod:",
    "keyWords": [
      "brachiosaurus",
      "brontosaurus",
      "diplodocus"
    ],
    "output": "1f995"
  },
  {
    "name": "octopus",
    "category": "nature",
    "shortname": ":octopus:",
    "keyWords": [
      "octopus"
    ],
    "output": "1f419"
  },
  {
    "name": "squid",
    "category": "nature",
    "shortname": ":squid:",
    "keyWords": [
      "food",
      "molusc",
      "squid"
    ],
    "output": "1f991"
  },
  {
    "name": "shrimp",
    "category": "nature",
    "shortname": ":shrimp:",
    "keyWords": [
      "food",
      "shellfish",
      "shrimp",
      "small"
    ],
    "output": "1f990"
  },
  {
    "name": "crab",
    "category": "nature",
    "shortname": ":crab:",
    "keyWords": [
      "Cancer",
      "zodiac"
    ],
    "output": "1f980"
  },
  {
    "name": "lobster",
    "category": "nature",
    "shortname": ":lobster:",
    "keyWords": [
      ""
    ],
    "output": "1f99e"
  },
  {
    "name": "blowfish",
    "category": "nature",
    "shortname": ":blowfish:",
    "keyWords": [
      "fish"
    ],
    "output": "1f421"
  },
  {
    "name": "tropical fish",
    "category": "nature",
    "shortname": ":tropical_fish:",
    "keyWords": [
      "fish",
      "tropical"
    ],
    "output": "1f420"
  },
  {
    "name": "fish",
    "category": "nature",
    "shortname": ":fish:",
    "keyWords": [
      "Pisces",
      "zodiac"
    ],
    "output": "1f41f"
  },
  {
    "name": "dolphin",
    "category": "nature",
    "shortname": ":dolphin:",
    "keyWords": [
      "flipper"
    ],
    "output": "1f42c"
  },
  {
    "name": "spouting whale",
    "category": "nature",
    "shortname": ":whale:",
    "keyWords": [
      "face",
      "spouting",
      "whale"
    ],
    "output": "1f433"
  },
  {
    "name": "whale",
    "category": "nature",
    "shortname": ":whale2:",
    "keyWords": [
      "whale"
    ],
    "output": "1f40b"
  },
  {
    "name": "shark",
    "category": "nature",
    "shortname": ":shark:",
    "keyWords": [
      "fish",
      "shark"
    ],
    "output": "1f988"
  },
  {
    "name": "crocodile",
    "category": "nature",
    "shortname": ":crocodile:",
    "keyWords": [
      "crocodile"
    ],
    "output": "1f40a"
  },
  {
    "name": "tiger",
    "category": "nature",
    "shortname": ":tiger2:",
    "keyWords": [
      "tiger"
    ],
    "output": "1f405"
  },
  {
    "name": "leopard",
    "category": "nature",
    "shortname": ":leopard:",
    "keyWords": [
      "leopard"
    ],
    "output": "1f406"
  },
  {
    "name": "zebra",
    "category": "nature",
    "shortname": ":zebra:",
    "keyWords": [
      "stripe"
    ],
    "output": "1f993"
  },
  {
    "name": "gorilla",
    "category": "nature",
    "shortname": ":gorilla:",
    "keyWords": [
      "gorilla"
    ],
    "output": "1f98d"
  },
  {
    "name": "elephant",
    "category": "nature",
    "shortname": ":elephant:",
    "keyWords": [
      "elephant"
    ],
    "output": "1f418"
  },
  {
    "name": "rhinoceros",
    "category": "nature",
    "shortname": ":rhino:",
    "keyWords": [
      "rhinoceros"
    ],
    "output": "1f98f"
  },
  {
    "name": "hippopotamus",
    "category": "nature",
    "shortname": ":hippopotamus:",
    "keyWords": [
      ""
    ],
    "output": "1f99b"
  },
  {
    "name": "camel",
    "category": "nature",
    "shortname": ":dromedary_camel:",
    "keyWords": [
      "dromedary",
      "hump"
    ],
    "output": "1f42a"
  },
  {
    "name": "two-hump camel",
    "category": "nature",
    "shortname": ":camel:",
    "keyWords": [
      "bactrian",
      "camel",
      "hump"
    ],
    "output": "1f42b"
  },
  {
    "name": "giraffe",
    "category": "nature",
    "shortname": ":giraffe:",
    "keyWords": [
      "spots"
    ],
    "output": "1f992"
  },
  {
    "name": "llama",
    "category": "nature",
    "shortname": ":llama:",
    "keyWords": [
      ""
    ],
    "output": "1f999"
  },
  {
    "name": "water buffalo",
    "category": "nature",
    "shortname": ":water_buffalo:",
    "keyWords": [
      "buffalo",
      "water"
    ],
    "output": "1f403"
  },
  {
    "name": "ox",
    "category": "nature",
    "shortname": ":ox:",
    "keyWords": [
      "Taurus",
      "bull",
      "zodiac"
    ],
    "output": "1f402"
  },
  {
    "name": "cow",
    "category": "nature",
    "shortname": ":cow2:",
    "keyWords": [
      "cow"
    ],
    "output": "1f404"
  },
  {
    "name": "horse",
    "category": "nature",
    "shortname": ":racehorse:",
    "keyWords": [
      "equestrian",
      "racehorse",
      "racing"
    ],
    "output": "1f40e"
  },
  {
    "name": "pig",
    "category": "nature",
    "shortname": ":pig2:",
    "keyWords": [
      "sow"
    ],
    "output": "1f416"
  },
  {
    "name": "ram",
    "category": "nature",
    "shortname": ":ram:",
    "keyWords": [
      "Aries",
      "male",
      "sheep",
      "zodiac"
    ],
    "output": "1f40f"
  },
  {
    "name": "ewe",
    "category": "nature",
    "shortname": ":sheep:",
    "keyWords": [
      "female",
      "sheep"
    ],
    "output": "1f411"
  },
  {
    "name": "goat",
    "category": "nature",
    "shortname": ":goat:",
    "keyWords": [
      "Capricorn",
      "zodiac"
    ],
    "output": "1f410"
  },
  {
    "name": "deer",
    "category": "nature",
    "shortname": ":deer:",
    "keyWords": [
      "deer"
    ],
    "output": "1f98c"
  },
  {
    "name": "dog",
    "category": "nature",
    "shortname": ":dog2:",
    "keyWords": [
      "pet"
    ],
    "output": "1f415"
  },
  {
    "name": "poodle",
    "category": "nature",
    "shortname": ":poodle:",
    "keyWords": [
      "dog"
    ],
    "output": "1f429"
  },
  {
    "name": "cat",
    "category": "nature",
    "shortname": ":cat2:",
    "keyWords": [
      "pet"
    ],
    "output": "1f408"
  },
  {
    "name": "rooster",
    "category": "nature",
    "shortname": ":rooster:",
    "keyWords": [
      "bird",
      "rooster"
    ],
    "output": "1f413"
  },
  {
    "name": "turkey",
    "category": "nature",
    "shortname": ":turkey:",
    "keyWords": [
      "bird",
      "turkey"
    ],
    "output": "1f983"
  },
  {
    "name": "dove",
    "category": "nature",
    "shortname": ":dove:",
    "keyWords": [
      "bird",
      "fly",
      "peace"
    ],
    "output": "1f54a"
  },
  {
    "name": "rabbit",
    "category": "nature",
    "shortname": ":rabbit2:",
    "keyWords": [
      "bunny",
      "pet"
    ],
    "output": "1f407"
  },
  {
    "name": "mouse",
    "category": "nature",
    "shortname": ":mouse2:",
    "keyWords": [
      "mouse"
    ],
    "output": "1f401"
  },
  {
    "name": "rat",
    "category": "nature",
    "shortname": ":rat:",
    "keyWords": [
      "rat"
    ],
    "output": "1f400"
  },
  {
    "name": "chipmunk",
    "category": "nature",
    "shortname": ":chipmunk:",
    "keyWords": [
      "chipmunk"
    ],
    "output": "1f43f"
  },
  {
    "name": "hedgehog",
    "category": "nature",
    "shortname": ":hedgehog:",
    "keyWords": [
      "spiny"
    ],
    "output": "1f994"
  },
  {
    "name": "paw prints",
    "category": "nature",
    "shortname": ":feet:",
    "keyWords": [
      "feet",
      "paw",
      "print"
    ],
    "output": "1f43e"
  },
  {
    "name": "dragon",
    "category": "nature",
    "shortname": ":dragon:",
    "keyWords": [
      "fairy tale"
    ],
    "output": "1f409"
  },
  {
    "name": "dragon face",
    "category": "nature",
    "shortname": ":dragon_face:",
    "keyWords": [
      "dragon",
      "face",
      "fairy tale"
    ],
    "output": "1f432"
  },
  {
    "name": "cactus",
    "category": "nature",
    "shortname": ":cactus:",
    "keyWords": [
      "plant"
    ],
    "output": "1f335"
  },
  {
    "name": "Christmas tree",
    "category": "nature",
    "shortname": ":christmas_tree:",
    "keyWords": [
      "Christmas",
      "celebration",
      "tree"
    ],
    "output": "1f384"
  },
  {
    "name": "evergreen tree",
    "category": "nature",
    "shortname": ":evergreen_tree:",
    "keyWords": [
      "tree"
    ],
    "output": "1f332"
  },
  {
    "name": "deciduous tree",
    "category": "nature",
    "shortname": ":deciduous_tree:",
    "keyWords": [
      "deciduous",
      "shedding",
      "tree"
    ],
    "output": "1f333"
  },
  {
    "name": "palm tree",
    "category": "nature",
    "shortname": ":palm_tree:",
    "keyWords": [
      "palm",
      "tree"
    ],
    "output": "1f334"
  },
  {
    "name": "seedling",
    "category": "nature",
    "shortname": ":seedling:",
    "keyWords": [
      "young"
    ],
    "output": "1f331"
  },
  {
    "name": "herb",
    "category": "nature",
    "shortname": ":herb:",
    "keyWords": [
      "leaf"
    ],
    "output": "1f33f"
  },
  {
    "name": "four leaf clover",
    "category": "nature",
    "shortname": ":four_leaf_clover:",
    "keyWords": [
      "4",
      "clover",
      "four",
      "leaf"
    ],
    "output": "1f340"
  },
  {
    "name": "pine decoration",
    "category": "nature",
    "shortname": ":bamboo:",
    "keyWords": [
      "Japanese",
      "bamboo",
      "celebration",
      "pine"
    ],
    "output": "1f38d"
  },
  {
    "name": "tanabata tree",
    "category": "nature",
    "shortname": ":tanabata_tree:",
    "keyWords": [
      "Japanese",
      "banner",
      "celebration",
      "tree"
    ],
    "output": "1f38b"
  },
  {
    "name": "leaf fluttering in wind",
    "category": "nature",
    "shortname": ":leaves:",
    "keyWords": [
      "blow",
      "flutter",
      "leaf",
      "wind"
    ],
    "output": "1f343"
  },
  {
    "name": "fallen leaf",
    "category": "nature",
    "shortname": ":fallen_leaf:",
    "keyWords": [
      "falling",
      "leaf"
    ],
    "output": "1f342"
  },
  {
    "name": "maple leaf",
    "category": "nature",
    "shortname": ":maple_leaf:",
    "keyWords": [
      "falling",
      "leaf",
      "maple"
    ],
    "output": "1f341"
  },
  {
    "name": "mushroom",
    "category": "nature",
    "shortname": ":mushroom:",
    "keyWords": [
      "toadstool"
    ],
    "output": "1f344"
  },
  {
    "name": "sheaf of rice",
    "category": "nature",
    "shortname": ":ear_of_rice:",
    "keyWords": [
      "ear",
      "grain",
      "rice"
    ],
    "output": "1f33e"
  },
  {
    "name": "bouquet",
    "category": "nature",
    "shortname": ":bouquet:",
    "keyWords": [
      "flower"
    ],
    "output": "1f490"
  },
  {
    "name": "tulip",
    "category": "nature",
    "shortname": ":tulip:",
    "keyWords": [
      "flower"
    ],
    "output": "1f337"
  },
  {
    "name": "rose",
    "category": "nature",
    "shortname": ":rose:",
    "keyWords": [
      "flower"
    ],
    "output": "1f339"
  },
  {
    "name": "wilted flower",
    "category": "nature",
    "shortname": ":wilted_rose:",
    "keyWords": [
      "flower",
      "wilted"
    ],
    "output": "1f940"
  },
  {
    "name": "hibiscus",
    "category": "nature",
    "shortname": ":hibiscus:",
    "keyWords": [
      "flower"
    ],
    "output": "1f33a"
  },
  {
    "name": "cherry blossom",
    "category": "nature",
    "shortname": ":cherry_blossom:",
    "keyWords": [
      "blossom",
      "cherry",
      "flower"
    ],
    "output": "1f338"
  },
  {
    "name": "blossom",
    "category": "nature",
    "shortname": ":blossom:",
    "keyWords": [
      "flower"
    ],
    "output": "1f33c"
  },
  {
    "name": "sunflower",
    "category": "nature",
    "shortname": ":sunflower:",
    "keyWords": [
      "flower",
      "sun"
    ],
    "output": "1f33b"
  },
  {
    "name": "sun with face",
    "category": "nature",
    "shortname": ":sun_with_face:",
    "keyWords": [
      "bright",
      "face",
      "sun"
    ],
    "output": "1f31e"
  },
  {
    "name": "full moon face",
    "category": "nature",
    "shortname": ":full_moon_with_face:",
    "keyWords": [
      "bright",
      "face",
      "full",
      "moon"
    ],
    "output": "1f31d"
  },
  {
    "name": "first quarter moon face",
    "category": "nature",
    "shortname": ":first_quarter_moon_with_face:",
    "keyWords": [
      "face",
      "moon",
      "quarter"
    ],
    "output": "1f31b"
  },
  {
    "name": "last quarter moon face",
    "category": "nature",
    "shortname": ":last_quarter_moon_with_face:",
    "keyWords": [
      "face",
      "moon",
      "quarter"
    ],
    "output": "1f31c"
  },
  {
    "name": "new moon face",
    "category": "nature",
    "shortname": ":new_moon_with_face:",
    "keyWords": [
      "face",
      "moon"
    ],
    "output": "1f31a"
  },
  {
    "name": "full moon",
    "category": "nature",
    "shortname": ":full_moon:",
    "keyWords": [
      "full",
      "moon"
    ],
    "output": "1f315"
  },
  {
    "name": "waning gibbous moon",
    "category": "nature",
    "shortname": ":waning_gibbous_moon:",
    "keyWords": [
      "gibbous",
      "moon",
      "waning"
    ],
    "output": "1f316"
  },
  {
    "name": "last quarter moon",
    "category": "nature",
    "shortname": ":last_quarter_moon:",
    "keyWords": [
      "moon",
      "quarter"
    ],
    "output": "1f317"
  },
  {
    "name": "waning crescent moon",
    "category": "nature",
    "shortname": ":waning_crescent_moon:",
    "keyWords": [
      "crescent",
      "moon",
      "waning"
    ],
    "output": "1f318"
  },
  {
    "name": "new moon",
    "category": "nature",
    "shortname": ":new_moon:",
    "keyWords": [
      "dark",
      "moon"
    ],
    "output": "1f311"
  },
  {
    "name": "waxing crescent moon",
    "category": "nature",
    "shortname": ":waxing_crescent_moon:",
    "keyWords": [
      "crescent",
      "moon",
      "waxing"
    ],
    "output": "1f312"
  },
  {
    "name": "first quarter moon",
    "category": "nature",
    "shortname": ":first_quarter_moon:",
    "keyWords": [
      "moon",
      "quarter"
    ],
    "output": "1f313"
  },
  {
    "name": "waxing gibbous moon",
    "category": "nature",
    "shortname": ":waxing_gibbous_moon:",
    "keyWords": [
      "gibbous",
      "moon",
      "waxing"
    ],
    "output": "1f314"
  },
  {
    "name": "crescent moon",
    "category": "nature",
    "shortname": ":crescent_moon:",
    "keyWords": [
      "crescent",
      "moon"
    ],
    "output": "1f319"
  },
  {
    "name": "globe showing Americas",
    "category": "nature",
    "shortname": ":earth_americas:",
    "keyWords": [
      "Americas",
      "earth",
      "globe",
      "world"
    ],
    "output": "1f30e"
  },
  {
    "name": "globe showing Europe-Africa",
    "category": "nature",
    "shortname": ":earth_africa:",
    "keyWords": [
      "Africa",
      "Europe",
      "earth",
      "globe",
      "world"
    ],
    "output": "1f30d"
  },
  {
    "name": "globe showing Asia-Australia",
    "category": "nature",
    "shortname": ":earth_asia:",
    "keyWords": [
      "Asia",
      "Australia",
      "earth",
      "globe",
      "world"
    ],
    "output": "1f30f"
  },
  {
    "name": "dizzy",
    "category": "nature",
    "shortname": ":dizzy:",
    "keyWords": [
      "comic",
      "star"
    ],
    "output": "1f4ab"
  },
  {
    "name": "star",
    "category": "nature",
    "shortname": ":star:",
    "keyWords": [
      "star"
    ],
    "output": "2b50"
  },
  {
    "name": "glowing star",
    "category": "nature",
    "shortname": ":star2:",
    "keyWords": [
      "glittery",
      "glow",
      "shining",
      "sparkle",
      "star"
    ],
    "output": "1f31f"
  },
  {
    "name": "high voltage",
    "category": "nature",
    "shortname": ":zap:",
    "keyWords": [
      "danger",
      "electric",
      "electricity",
      "lightning",
      "voltage",
      "zap"
    ],
    "output": "26a1"
  },
  {
    "name": "collision",
    "category": "nature",
    "shortname": ":boom:",
    "keyWords": [
      "boom",
      "comic"
    ],
    "output": "1f4a5"
  },
  {
    "name": "fire",
    "category": "nature",
    "shortname": ":fire:",
    "keyWords": [
      "flame",
      "tool"
    ],
    "output": "1f525"
  },
  {
    "name": "tornado",
    "category": "nature",
    "shortname": ":cloud_tornado:",
    "keyWords": [
      "cloud",
      "whirlwind"
    ],
    "output": "1f32a"
  },
  {
    "name": "rainbow",
    "category": "nature",
    "shortname": ":rainbow:",
    "keyWords": [
      "rain"
    ],
    "output": "1f308"
  },
  {
    "name": "sun behind small cloud",
    "category": "nature",
    "shortname": ":white_sun_small_cloud:",
    "keyWords": [
      "cloud",
      "sun"
    ],
    "output": "1f324"
  },
  {
    "name": "sun behind cloud",
    "category": "nature",
    "shortname": ":partly_sunny:",
    "keyWords": [
      "cloud",
      "sun"
    ],
    "output": "26c5"
  },
  {
    "name": "sun behind large cloud",
    "category": "nature",
    "shortname": ":white_sun_cloud:",
    "keyWords": [
      "cloud",
      "sun"
    ],
    "output": "1f325"
  },
  {
    "name": "sun behind rain cloud",
    "category": "nature",
    "shortname": ":white_sun_rain_cloud:",
    "keyWords": [
      "cloud",
      "rain",
      "sun"
    ],
    "output": "1f326"
  },
  {
    "name": "cloud with rain",
    "category": "nature",
    "shortname": ":cloud_rain:",
    "keyWords": [
      "cloud",
      "rain"
    ],
    "output": "1f327"
  },
  {
    "name": "cloud with lightning and rain",
    "category": "nature",
    "shortname": ":thunder_cloud_rain:",
    "keyWords": [
      "cloud",
      "rain",
      "thunder"
    ],
    "output": "26c8"
  },
  {
    "name": "cloud with lightning",
    "category": "nature",
    "shortname": ":cloud_lightning:",
    "keyWords": [
      "cloud",
      "lightning"
    ],
    "output": "1f329"
  },
  {
    "name": "cloud with snow",
    "category": "nature",
    "shortname": ":cloud_snow:",
    "keyWords": [
      "cloud",
      "cold",
      "snow"
    ],
    "output": "1f328"
  },
  {
    "name": "snowman without snow",
    "category": "nature",
    "shortname": ":snowman:",
    "keyWords": [
      "cold",
      "snow",
      "snowman"
    ],
    "output": "26c4"
  },
  {
    "name": "wind face",
    "category": "nature",
    "shortname": ":wind_blowing_face:",
    "keyWords": [
      "blow",
      "cloud",
      "face",
      "wind"
    ],
    "output": "1f32c"
  },
  {
    "name": "dashing away",
    "category": "nature",
    "shortname": ":dash:",
    "keyWords": [
      "comic",
      "dash",
      "running"
    ],
    "output": "1f4a8"
  },
  {
    "name": "droplet",
    "category": "nature",
    "shortname": ":droplet:",
    "keyWords": [
      "cold",
      "comic",
      "drop",
      "sweat"
    ],
    "output": "1f4a7"
  },
  {
    "name": "sweat droplets",
    "category": "nature",
    "shortname": ":sweat_drops:",
    "keyWords": [
      "comic",
      "splashing",
      "sweat"
    ],
    "output": "1f4a6"
  },
  {
    "name": "water wave",
    "category": "nature",
    "shortname": ":ocean:",
    "keyWords": [
      "ocean",
      "water",
      "wave"
    ],
    "output": "1f30a"
  },
  {
    "name": "fog",
    "category": "nature",
    "shortname": ":fog:",
    "keyWords": [
      "cloud"
    ],
    "output": "1f32b"
  },
  {
    "name": "green apple",
    "category": "food",
    "shortname": ":green_apple:",
    "keyWords": [
      "apple",
      "fruit",
      "green"
    ],
    "output": "1f34f"
  },
  {
    "name": "red apple",
    "category": "food",
    "shortname": ":apple:",
    "keyWords": [
      "apple",
      "fruit",
      "red"
    ],
    "output": "1f34e"
  },
  {
    "name": "pear",
    "category": "food",
    "shortname": ":pear:",
    "keyWords": [
      "fruit"
    ],
    "output": "1f350"
  },
  {
    "name": "tangerine",
    "category": "food",
    "shortname": ":tangerine:",
    "keyWords": [
      "fruit",
      "orange"
    ],
    "output": "1f34a"
  },
  {
    "name": "lemon",
    "category": "food",
    "shortname": ":lemon:",
    "keyWords": [
      "citrus",
      "fruit"
    ],
    "output": "1f34b"
  },
  {
    "name": "banana",
    "category": "food",
    "shortname": ":banana:",
    "keyWords": [
      "fruit"
    ],
    "output": "1f34c"
  },
  {
    "name": "watermelon",
    "category": "food",
    "shortname": ":watermelon:",
    "keyWords": [
      "fruit"
    ],
    "output": "1f349"
  },
  {
    "name": "grapes",
    "category": "food",
    "shortname": ":grapes:",
    "keyWords": [
      "fruit",
      "grape"
    ],
    "output": "1f347"
  },
  {
    "name": "strawberry",
    "category": "food",
    "shortname": ":strawberry:",
    "keyWords": [
      "berry",
      "fruit"
    ],
    "output": "1f353"
  },
  {
    "name": "melon",
    "category": "food",
    "shortname": ":melon:",
    "keyWords": [
      "fruit"
    ],
    "output": "1f348"
  },
  {
    "name": "cherries",
    "category": "food",
    "shortname": ":cherries:",
    "keyWords": [
      "cherry",
      "fruit"
    ],
    "output": "1f352"
  },
  {
    "name": "peach",
    "category": "food",
    "shortname": ":peach:",
    "keyWords": [
      "fruit"
    ],
    "output": "1f351"
  },
  {
    "name": "mango",
    "category": "food",
    "shortname": ":mango:",
    "keyWords": [
      ""
    ],
    "output": "1f96d"
  },
  {
    "name": "pineapple",
    "category": "food",
    "shortname": ":pineapple:",
    "keyWords": [
      "fruit"
    ],
    "output": "1f34d"
  },
  {
    "name": "coconut",
    "category": "food",
    "shortname": ":coconut:",
    "keyWords": [
      "palm",
      "piña colada"
    ],
    "output": "1f965"
  },
  {
    "name": "kiwi fruit",
    "category": "food",
    "shortname": ":kiwi:",
    "keyWords": [
      "food",
      "fruit",
      "kiwi"
    ],
    "output": "1f95d"
  },
  {
    "name": "tomato",
    "category": "food",
    "shortname": ":tomato:",
    "keyWords": [
      "fruit",
      "vegetable"
    ],
    "output": "1f345"
  },
  {
    "name": "eggplant",
    "category": "food",
    "shortname": ":eggplant:",
    "keyWords": [
      "aubergine",
      "vegetable"
    ],
    "output": "1f346"
  },
  {
    "name": "avocado",
    "category": "food",
    "shortname": ":avocado:",
    "keyWords": [
      "avocado",
      "food",
      "fruit"
    ],
    "output": "1f951"
  },
  {
    "name": "broccoli",
    "category": "food",
    "shortname": ":broccoli:",
    "keyWords": [
      "wild cabbage"
    ],
    "output": "1f966"
  },
  {
    "name": "leafy green",
    "category": "food",
    "shortname": ":leafy_green:",
    "keyWords": [
      ""
    ],
    "output": "1f96c"
  },
  {
    "name": "cucumber",
    "category": "food",
    "shortname": ":cucumber:",
    "keyWords": [
      "cucumber",
      "food",
      "pickle",
      "vegetable"
    ],
    "output": "1f952"
  },
  {
    "name": "hot pepper",
    "category": "food",
    "shortname": ":hot_pepper:",
    "keyWords": [
      "hot",
      "pepper"
    ],
    "output": "1f336"
  },
  {
    "name": "ear of corn",
    "category": "food",
    "shortname": ":corn:",
    "keyWords": [
      "corn",
      "ear",
      "maize",
      "maze"
    ],
    "output": "1f33d"
  },
  {
    "name": "carrot",
    "category": "food",
    "shortname": ":carrot:",
    "keyWords": [
      "carrot",
      "food",
      "vegetable"
    ],
    "output": "1f955"
  },
  {
    "name": "potato",
    "category": "food",
    "shortname": ":potato:",
    "keyWords": [
      "food",
      "potato",
      "vegetable"
    ],
    "output": "1f954"
  },
  {
    "name": "roasted sweet potato",
    "category": "food",
    "shortname": ":sweet_potato:",
    "keyWords": [
      "potato",
      "roasted",
      "sweet"
    ],
    "output": "1f360"
  },
  {
    "name": "croissant",
    "category": "food",
    "shortname": ":croissant:",
    "keyWords": [
      "bread",
      "crescent roll",
      "croissant",
      "food",
      "french"
    ],
    "output": "1f950"
  },
  {
    "name": "bread",
    "category": "food",
    "shortname": ":bread:",
    "keyWords": [
      "loaf"
    ],
    "output": "1f35e"
  },
  {
    "name": "baguette bread",
    "category": "food",
    "shortname": ":french_bread:",
    "keyWords": [
      "baguette",
      "bread",
      "food",
      "french"
    ],
    "output": "1f956"
  },
  {
    "name": "pretzel",
    "category": "food",
    "shortname": ":pretzel:",
    "keyWords": [
      ""
    ],
    "output": "1f968"
  },
  {
    "name": "bagel",
    "category": "food",
    "shortname": ":bagel:",
    "keyWords": [
      ""
    ],
    "output": "1f96f"
  },
  {
    "name": "cheese wedge",
    "category": "food",
    "shortname": ":cheese:",
    "keyWords": [
      "cheese"
    ],
    "output": "1f9c0"
  },
  {
    "name": "egg",
    "category": "food",
    "shortname": ":egg:",
    "keyWords": [
      "egg",
      "food"
    ],
    "output": "1f95a"
  },
  {
    "name": "cooking",
    "category": "food",
    "shortname": ":cooking:",
    "keyWords": [
      "egg",
      "frying",
      "pan"
    ],
    "output": "1f373"
  },
  {
    "name": "pancakes",
    "category": "food",
    "shortname": ":pancakes:",
    "keyWords": [
      "crêpe",
      "food",
      "hotcake",
      "pancake"
    ],
    "output": "1f95e"
  },
  {
    "name": "bacon",
    "category": "food",
    "shortname": ":bacon:",
    "keyWords": [
      "bacon",
      "food",
      "meat"
    ],
    "output": "1f953"
  },
  {
    "name": "cut of meat",
    "category": "food",
    "shortname": ":cut_of_meat:",
    "keyWords": [
      "chop",
      "lambchop",
      "porkchop",
      "steak"
    ],
    "output": "1f969"
  },
  {
    "name": "poultry leg",
    "category": "food",
    "shortname": ":poultry_leg:",
    "keyWords": [
      "bone",
      "chicken",
      "leg",
      "poultry"
    ],
    "output": "1f357"
  },
  {
    "name": "meat on bone",
    "category": "food",
    "shortname": ":meat_on_bone:",
    "keyWords": [
      "bone",
      "meat"
    ],
    "output": "1f356"
  },
  {
    "name": "hot dog",
    "category": "food",
    "shortname": ":hotdog:",
    "keyWords": [
      "frankfurter",
      "hotdog",
      "sausage"
    ],
    "output": "1f32d"
  },
  {
    "name": "hamburger",
    "category": "food",
    "shortname": ":hamburger:",
    "keyWords": [
      "burger"
    ],
    "output": "1f354"
  },
  {
    "name": "french fries",
    "category": "food",
    "shortname": ":fries:",
    "keyWords": [
      "french",
      "fries"
    ],
    "output": "1f35f"
  },
  {
    "name": "pizza",
    "category": "food",
    "shortname": ":pizza:",
    "keyWords": [
      "cheese",
      "slice"
    ],
    "output": "1f355"
  },
  {
    "name": "sandwich",
    "category": "food",
    "shortname": ":sandwich:",
    "keyWords": [
      "bread"
    ],
    "output": "1f96a"
  },
  {
    "name": "stuffed flatbread",
    "category": "food",
    "shortname": ":stuffed_flatbread:",
    "keyWords": [
      "falafel",
      "flatbread",
      "food",
      "gyro",
      "kebab",
      "stuffed"
    ],
    "output": "1f959"
  },
  {
    "name": "taco",
    "category": "food",
    "shortname": ":taco:",
    "keyWords": [
      "mexican"
    ],
    "output": "1f32e"
  },
  {
    "name": "burrito",
    "category": "food",
    "shortname": ":burrito:",
    "keyWords": [
      "mexican",
      "wrap"
    ],
    "output": "1f32f"
  },
  {
    "name": "green salad",
    "category": "food",
    "shortname": ":salad:",
    "keyWords": [
      "food",
      "green",
      "salad"
    ],
    "output": "1f957"
  },
  {
    "name": "shallow pan of food",
    "category": "food",
    "shortname": ":shallow_pan_of_food:",
    "keyWords": [
      "casserole",
      "food",
      "paella",
      "pan",
      "shallow"
    ],
    "output": "1f958"
  },
  {
    "name": "canned food",
    "category": "food",
    "shortname": ":canned_food:",
    "keyWords": [
      "can"
    ],
    "output": "1f96b"
  },
  {
    "name": "spaghetti",
    "category": "food",
    "shortname": ":spaghetti:",
    "keyWords": [
      "pasta"
    ],
    "output": "1f35d"
  },
  {
    "name": "steaming bowl",
    "category": "food",
    "shortname": ":ramen:",
    "keyWords": [
      "bowl",
      "noodle",
      "ramen",
      "steaming"
    ],
    "output": "1f35c"
  },
  {
    "name": "pot of food",
    "category": "food",
    "shortname": ":stew:",
    "keyWords": [
      "pot",
      "stew"
    ],
    "output": "1f372"
  },
  {
    "name": "curry rice",
    "category": "food",
    "shortname": ":curry:",
    "keyWords": [
      "curry",
      "rice"
    ],
    "output": "1f35b"
  },
  {
    "name": "sushi",
    "category": "food",
    "shortname": ":sushi:",
    "keyWords": [
      "sushi"
    ],
    "output": "1f363"
  },
  {
    "name": "bento box",
    "category": "food",
    "shortname": ":bento:",
    "keyWords": [
      "bento",
      "box"
    ],
    "output": "1f371"
  },
  {
    "name": "fried shrimp",
    "category": "food",
    "shortname": ":fried_shrimp:",
    "keyWords": [
      "fried",
      "prawn",
      "shrimp",
      "tempura"
    ],
    "output": "1f364"
  },
  {
    "name": "rice ball",
    "category": "food",
    "shortname": ":rice_ball:",
    "keyWords": [
      "Japanese",
      "ball",
      "rice"
    ],
    "output": "1f359"
  },
  {
    "name": "cooked rice",
    "category": "food",
    "shortname": ":rice:",
    "keyWords": [
      "cooked",
      "rice"
    ],
    "output": "1f35a"
  },
  {
    "name": "rice cracker",
    "category": "food",
    "shortname": ":rice_cracker:",
    "keyWords": [
      "cracker",
      "rice"
    ],
    "output": "1f358"
  },
  {
    "name": "fish cake with swirl",
    "category": "food",
    "shortname": ":fish_cake:",
    "keyWords": [
      "cake",
      "fish",
      "pastry",
      "swirl"
    ],
    "output": "1f365"
  },
  {
    "name": "fortune cookie",
    "category": "food",
    "shortname": ":fortune_cookie:",
    "keyWords": [
      "prophecy"
    ],
    "output": "1f960"
  },
  {
    "name": "oden",
    "category": "food",
    "shortname": ":oden:",
    "keyWords": [
      "kebab",
      "seafood",
      "skewer",
      "stick"
    ],
    "output": "1f362"
  },
  {
    "name": "dango",
    "category": "food",
    "shortname": ":dango:",
    "keyWords": [
      "Japanese",
      "dessert",
      "skewer",
      "stick",
      "sweet"
    ],
    "output": "1f361"
  },
  {
    "name": "shaved ice",
    "category": "food",
    "shortname": ":shaved_ice:",
    "keyWords": [
      "dessert",
      "ice",
      "shaved",
      "sweet"
    ],
    "output": "1f367"
  },
  {
    "name": "ice cream",
    "category": "food",
    "shortname": ":ice_cream:",
    "keyWords": [
      "cream",
      "dessert",
      "ice",
      "sweet"
    ],
    "output": "1f368"
  },
  {
    "name": "soft ice cream",
    "category": "food",
    "shortname": ":icecream:",
    "keyWords": [
      "cream",
      "dessert",
      "ice",
      "icecream",
      "soft",
      "sweet"
    ],
    "output": "1f366"
  },
  {
    "name": "pie",
    "category": "food",
    "shortname": ":pie:",
    "keyWords": [
      ""
    ],
    "output": "1f967"
  },
  {
    "name": "shortcake",
    "category": "food",
    "shortname": ":cake:",
    "keyWords": [
      "cake",
      "dessert",
      "pastry",
      "slice",
      "sweet"
    ],
    "output": "1f370"
  },
  {
    "name": "birthday cake",
    "category": "food",
    "shortname": ":birthday:",
    "keyWords": [
      "birthday",
      "cake",
      "celebration",
      "dessert",
      "pastry",
      "sweet"
    ],
    "output": "1f382"
  },
  {
    "name": "moon cake",
    "category": "food",
    "shortname": ":moon_cake:",
    "keyWords": [
      ""
    ],
    "output": "1f96e"
  },
  {
    "name": "cupcake",
    "category": "food",
    "shortname": ":cupcake:",
    "keyWords": [
      ""
    ],
    "output": "1f9c1"
  },
  {
    "name": "custard",
    "category": "food",
    "shortname": ":custard:",
    "keyWords": [
      "dessert",
      "pudding",
      "sweet"
    ],
    "output": "1f36e"
  },
  {
    "name": "lollipop",
    "category": "food",
    "shortname": ":lollipop:",
    "keyWords": [
      "candy",
      "dessert",
      "sweet"
    ],
    "output": "1f36d"
  },
  {
    "name": "candy",
    "category": "food",
    "shortname": ":candy:",
    "keyWords": [
      "dessert",
      "sweet"
    ],
    "output": "1f36c"
  },
  {
    "name": "chocolate bar",
    "category": "food",
    "shortname": ":chocolate_bar:",
    "keyWords": [
      "bar",
      "chocolate",
      "dessert",
      "sweet"
    ],
    "output": "1f36b"
  },
  {
    "name": "popcorn",
    "category": "food",
    "shortname": ":popcorn:",
    "keyWords": [
      "popcorn"
    ],
    "output": "1f37f"
  },
  {
    "name": "salt",
    "category": "food",
    "shortname": ":salt:",
    "keyWords": [
      ""
    ],
    "output": "1f9c2"
  },
  {
    "name": "doughnut",
    "category": "food",
    "shortname": ":doughnut:",
    "keyWords": [
      "dessert",
      "donut",
      "sweet"
    ],
    "output": "1f369"
  },
  {
    "name": "dumpling",
    "category": "food",
    "shortname": ":dumpling:",
    "keyWords": [
      "empanada",
      "gyōza",
      "jiaozi",
      "pierogi",
      "potsticker"
    ],
    "output": "1f95f"
  },
  {
    "name": "cookie",
    "category": "food",
    "shortname": ":cookie:",
    "keyWords": [
      "dessert",
      "sweet"
    ],
    "output": "1f36a"
  },
  {
    "name": "chestnut",
    "category": "food",
    "shortname": ":chestnut:",
    "keyWords": [
      "plant"
    ],
    "output": "1f330"
  },
  {
    "name": "peanuts",
    "category": "food",
    "shortname": ":peanuts:",
    "keyWords": [
      "food",
      "nut",
      "peanut",
      "vegetable"
    ],
    "output": "1f95c"
  },
  {
    "name": "honey pot",
    "category": "food",
    "shortname": ":honey_pot:",
    "keyWords": [
      "honey",
      "honeypot",
      "pot",
      "sweet"
    ],
    "output": "1f36f"
  },
  {
    "name": "glass of milk",
    "category": "food",
    "shortname": ":milk:",
    "keyWords": [
      "drink",
      "glass",
      "milk"
    ],
    "output": "1f95b"
  },
  {
    "name": "baby bottle",
    "category": "food",
    "shortname": ":baby_bottle:",
    "keyWords": [
      "baby",
      "bottle",
      "drink",
      "milk"
    ],
    "output": "1f37c"
  },
  {
    "name": "teacup without handle",
    "category": "food",
    "shortname": ":tea:",
    "keyWords": [
      "beverage",
      "cup",
      "drink",
      "tea",
      "teacup"
    ],
    "output": "1f375"
  },
  {
    "name": "cup with straw",
    "category": "food",
    "shortname": ":cup_with_straw:",
    "keyWords": [
      ""
    ],
    "output": "1f964"
  },
  {
    "name": "sake",
    "category": "food",
    "shortname": ":sake:",
    "keyWords": [
      "bar",
      "beverage",
      "bottle",
      "cup",
      "drink"
    ],
    "output": "1f376"
  },
  {
    "name": "beer mug",
    "category": "food",
    "shortname": ":beer:",
    "keyWords": [
      "bar",
      "beer",
      "drink",
      "mug"
    ],
    "output": "1f37a"
  },
  {
    "name": "clinking beer mugs",
    "category": "food",
    "shortname": ":beers:",
    "keyWords": [
      "bar",
      "beer",
      "clink",
      "drink",
      "mug"
    ],
    "output": "1f37b"
  },
  {
    "name": "clinking glasses",
    "category": "food",
    "shortname": ":champagne_glass:",
    "keyWords": [
      "celebrate",
      "clink",
      "drink",
      "glass"
    ],
    "output": "1f942"
  },
  {
    "name": "wine glass",
    "category": "food",
    "shortname": ":wine_glass:",
    "keyWords": [
      "bar",
      "beverage",
      "drink",
      "glass",
      "wine"
    ],
    "output": "1f377"
  },
  {
    "name": "tumbler glass",
    "category": "food",
    "shortname": ":tumbler_glass:",
    "keyWords": [
      "glass",
      "liquor",
      "shot",
      "tumbler",
      "whisky"
    ],
    "output": "1f943"
  },
  {
    "name": "cocktail glass",
    "category": "food",
    "shortname": ":cocktail:",
    "keyWords": [
      "bar",
      "cocktail",
      "drink",
      "glass"
    ],
    "output": "1f378"
  },
  {
    "name": "tropical drink",
    "category": "food",
    "shortname": ":tropical_drink:",
    "keyWords": [
      "bar",
      "drink",
      "tropical"
    ],
    "output": "1f379"
  },
  {
    "name": "bottle with popping cork",
    "category": "food",
    "shortname": ":champagne:",
    "keyWords": [
      "bar",
      "bottle",
      "cork",
      "drink",
      "popping"
    ],
    "output": "1f37e"
  },
  {
    "name": "spoon",
    "category": "food",
    "shortname": ":spoon:",
    "keyWords": [
      "spoon",
      "tableware"
    ],
    "output": "1f944"
  },
  {
    "name": "fork and knife",
    "category": "food",
    "shortname": ":fork_and_knife:",
    "keyWords": [
      "cooking",
      "fork",
      "knife"
    ],
    "output": "1f374"
  },
  {
    "name": "fork and knife with plate",
    "category": "food",
    "shortname": ":fork_knife_plate:",
    "keyWords": [
      "cooking",
      "fork",
      "knife",
      "plate"
    ],
    "output": "1f37d"
  },
  {
    "name": "bowl with spoon",
    "category": "food",
    "shortname": ":bowl_with_spoon:",
    "keyWords": [
      ""
    ],
    "output": "1f963"
  },
  {
    "name": "takeout box",
    "category": "food",
    "shortname": ":takeout_box:",
    "keyWords": [
      "oyster pail"
    ],
    "output": "1f961"
  },
  {
    "name": "chopsticks",
    "category": "food",
    "shortname": ":chopsticks:",
    "keyWords": [
      ""
    ],
    "output": "1f962"
  },
  {
    "name": "grinning face",
    "category": "people",
    "shortname": ":grinning:",
    "keyWords": [
      "face",
      "grin"
    ],
    "output": "1f600"
  },
  {
    "name": "grinning face with big eyes",
    "category": "people",
    "shortname": ":smiley:",
    "keyWords": [
      "face",
      "mouth",
      "open",
      "smile"
    ],
    "output": "1f603"
  },
  {
    "name": "grinning face with smiling eyes",
    "category": "people",
    "shortname": ":smile:",
    "keyWords": [
      "eye",
      "face",
      "mouth",
      "open",
      "smile"
    ],
    "output": "1f604"
  },
  {
    "name": "beaming face with smiling eyes",
    "category": "people",
    "shortname": ":grin:",
    "keyWords": [
      "eye",
      "face",
      "grin",
      "smile"
    ],
    "output": "1f601"
  },
  {
    "name": "grinning squinting face",
    "category": "people",
    "shortname": ":laughing:",
    "keyWords": [
      "face",
      "laugh",
      "mouth",
      "open",
      "satisfied",
      "smile"
    ],
    "output": "1f606"
  },
  {
    "name": "grinning face with sweat",
    "category": "people",
    "shortname": ":sweat_smile:",
    "keyWords": [
      "cold",
      "face",
      "open",
      "smile",
      "sweat"
    ],
    "output": "1f605"
  },
  {
    "name": "face with tears of joy",
    "category": "people",
    "shortname": ":joy:",
    "keyWords": [
      "face",
      "joy",
      "laugh",
      "tear"
    ],
    "output": "1f602"
  },
  {
    "name": "rolling on the floor laughing",
    "category": "people",
    "shortname": ":rofl:",
    "keyWords": [
      "face",
      "floor",
      "laugh",
      "rolling"
    ],
    "output": "1f923"
  },
  {
    "name": "smiling face with smiling eyes",
    "category": "people",
    "shortname": ":blush:",
    "keyWords": [
      "blush",
      "eye",
      "face",
      "smile"
    ],
    "output": "1f60a"
  },
  {
    "name": "smiling face with halo",
    "category": "people",
    "shortname": ":innocent:",
    "keyWords": [
      "angel",
      "face",
      "fairy tale",
      "fantasy",
      "halo",
      "innocent",
      "smile"
    ],
    "output": "1f607"
  },
  {
    "name": "slightly smiling face",
    "category": "people",
    "shortname": ":slight_smile:",
    "keyWords": [
      "face",
      "smile"
    ],
    "output": "1f642"
  },
  {
    "name": "upside-down face",
    "category": "people",
    "shortname": ":upside_down:",
    "keyWords": [
      "face",
      "upside-down"
    ],
    "output": "1f643"
  },
  {
    "name": "winking face",
    "category": "people",
    "shortname": ":wink:",
    "keyWords": [
      "face",
      "wink"
    ],
    "output": "1f609"
  },
  {
    "name": "relieved face",
    "category": "people",
    "shortname": ":relieved:",
    "keyWords": [
      "face",
      "relieved"
    ],
    "output": "1f60c"
  },
  {
    "name": "smiling face with heart-eyes",
    "category": "people",
    "shortname": ":heart_eyes:",
    "keyWords": [
      "eye",
      "face",
      "love",
      "smile"
    ],
    "output": "1f60d"
  },
  {
    "name": "face blowing a kiss",
    "category": "people",
    "shortname": ":kissing_heart:",
    "keyWords": [
      "face",
      "kiss"
    ],
    "output": "1f618"
  },
  {
    "name": "smiling face with 3 hearts",
    "category": "people",
    "shortname": ":smiling_face_with_3_hearts:",
    "keyWords": [
      ""
    ],
    "output": "1f970"
  },
  {
    "name": "kissing face",
    "category": "people",
    "shortname": ":kissing:",
    "keyWords": [
      "face",
      "kiss"
    ],
    "output": "1f617"
  },
  {
    "name": "kissing face with smiling eyes",
    "category": "people",
    "shortname": ":kissing_smiling_eyes:",
    "keyWords": [
      "eye",
      "face",
      "kiss",
      "smile"
    ],
    "output": "1f619"
  },
  {
    "name": "kissing face with closed eyes",
    "category": "people",
    "shortname": ":kissing_closed_eyes:",
    "keyWords": [
      "closed",
      "eye",
      "face",
      "kiss"
    ],
    "output": "1f61a"
  },
  {
    "name": "face savoring food",
    "category": "people",
    "shortname": ":yum:",
    "keyWords": [
      "delicious",
      "face",
      "savouring",
      "smile",
      "um",
      "yum"
    ],
    "output": "1f60b"
  },
  {
    "name": "face with tongue",
    "category": "people",
    "shortname": ":stuck_out_tongue:",
    "keyWords": [
      "face",
      "tongue"
    ],
    "output": "1f61b"
  },
  {
    "name": "squinting face with tongue",
    "category": "people",
    "shortname": ":stuck_out_tongue_closed_eyes:",
    "keyWords": [
      "eye",
      "face",
      "horrible",
      "taste",
      "tongue"
    ],
    "output": "1f61d"
  },
  {
    "name": "winking face with tongue",
    "category": "people",
    "shortname": ":stuck_out_tongue_winking_eye:",
    "keyWords": [
      "eye",
      "face",
      "joke",
      "tongue",
      "wink"
    ],
    "output": "1f61c"
  },
  {
    "name": "zany face",
    "category": "people",
    "shortname": ":zany_face:",
    "keyWords": [
      "eye",
      "large",
      "small"
    ],
    "output": "1f92a"
  },
  {
    "name": "face with raised eyebrow",
    "category": "people",
    "shortname": ":face_with_raised_eyebrow:",
    "keyWords": [
      ""
    ],
    "output": "1f928"
  },
  {
    "name": "face with monocle",
    "category": "people",
    "shortname": ":face_with_monocle:",
    "keyWords": [
      ""
    ],
    "output": "1f9d0"
  },
  {
    "name": "nerd face",
    "category": "people",
    "shortname": ":nerd:",
    "keyWords": [
      "face",
      "geek",
      "nerd"
    ],
    "output": "1f913"
  },
  {
    "name": "smiling face with sunglasses",
    "category": "people",
    "shortname": ":sunglasses:",
    "keyWords": [
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
    "output": "1f60e"
  },
  {
    "name": "star-struck",
    "category": "people",
    "shortname": ":star_struck:",
    "keyWords": [
      ""
    ],
    "output": "1f929"
  },
  {
    "name": "partying face",
    "category": "people",
    "shortname": ":partying_face:",
    "keyWords": [
      ""
    ],
    "output": "1f973"
  },
  {
    "name": "smirking face",
    "category": "people",
    "shortname": ":smirk:",
    "keyWords": [
      "face",
      "smirk"
    ],
    "output": "1f60f"
  },
  {
    "name": "unamused face",
    "category": "people",
    "shortname": ":unamused:",
    "keyWords": [
      "face",
      "unamused",
      "unhappy"
    ],
    "output": "1f612"
  },
  {
    "name": "disappointed face",
    "category": "people",
    "shortname": ":disappointed:",
    "keyWords": [
      "disappointed",
      "face"
    ],
    "output": "1f61e"
  },
  {
    "name": "pensive face",
    "category": "people",
    "shortname": ":pensive:",
    "keyWords": [
      "dejected",
      "face",
      "pensive"
    ],
    "output": "1f614"
  },
  {
    "name": "worried face",
    "category": "people",
    "shortname": ":worried:",
    "keyWords": [
      "face",
      "worried"
    ],
    "output": "1f61f"
  },
  {
    "name": "confused face",
    "category": "people",
    "shortname": ":confused:",
    "keyWords": [
      "confused",
      "face"
    ],
    "output": "1f615"
  },
  {
    "name": "slightly frowning face",
    "category": "people",
    "shortname": ":slight_frown:",
    "keyWords": [
      "face",
      "frown"
    ],
    "output": "1f641"
  },
  {
    "name": "persevering face",
    "category": "people",
    "shortname": ":persevere:",
    "keyWords": [
      "face",
      "persevere"
    ],
    "output": "1f623"
  },
  {
    "name": "confounded face",
    "category": "people",
    "shortname": ":confounded:",
    "keyWords": [
      "confounded",
      "face"
    ],
    "output": "1f616"
  },
  {
    "name": "tired face",
    "category": "people",
    "shortname": ":tired_face:",
    "keyWords": [
      "face",
      "tired"
    ],
    "output": "1f62b"
  },
  {
    "name": "weary face",
    "category": "people",
    "shortname": ":weary:",
    "keyWords": [
      "face",
      "tired",
      "weary"
    ],
    "output": "1f629"
  },
  {
    "name": "crying face",
    "category": "people",
    "shortname": ":cry:",
    "keyWords": [
      "cry",
      "face",
      "sad",
      "tear"
    ],
    "output": "1f622"
  },
  {
    "name": "loudly crying face",
    "category": "people",
    "shortname": ":sob:",
    "keyWords": [
      "cry",
      "face",
      "sad",
      "sob",
      "tear"
    ],
    "output": "1f62d"
  },
  {
    "name": "face with steam from nose",
    "category": "people",
    "shortname": ":triumph:",
    "keyWords": [
      "face",
      "triumph",
      "won"
    ],
    "output": "1f624"
  },
  {
    "name": "angry face",
    "category": "people",
    "shortname": ":angry:",
    "keyWords": [
      "angry",
      "face",
      "mad"
    ],
    "output": "1f620"
  },
  {
    "name": "pouting face",
    "category": "people",
    "shortname": ":rage:",
    "keyWords": [
      "angry",
      "face",
      "mad",
      "pouting",
      "rage",
      "red"
    ],
    "output": "1f621"
  },
  {
    "name": "face with symbols on mouth",
    "category": "people",
    "shortname": ":face_with_symbols_over_mouth:",
    "keyWords": [
      ""
    ],
    "output": "1f92c"
  },
  {
    "name": "exploding head",
    "category": "people",
    "shortname": ":exploding_head:",
    "keyWords": [
      "shocked"
    ],
    "output": "1f92f"
  },
  {
    "name": "flushed face",
    "category": "people",
    "shortname": ":flushed:",
    "keyWords": [
      "dazed",
      "face",
      "flushed"
    ],
    "output": "1f633"
  },
  {
    "name": "face screaming in fear",
    "category": "people",
    "shortname": ":scream:",
    "keyWords": [
      "face",
      "fear",
      "fearful",
      "munch",
      "scared",
      "scream"
    ],
    "output": "1f631"
  },
  {
    "name": "fearful face",
    "category": "people",
    "shortname": ":fearful:",
    "keyWords": [
      "face",
      "fear",
      "fearful",
      "scared"
    ],
    "output": "1f628"
  },
  {
    "name": "anxious face with sweat",
    "category": "people",
    "shortname": ":cold_sweat:",
    "keyWords": [
      "blue",
      "cold",
      "face",
      "mouth",
      "open",
      "rushed",
      "sweat"
    ],
    "output": "1f630"
  },
  {
    "name": "hot face",
    "category": "people",
    "shortname": ":hot_face:",
    "keyWords": [
      ""
    ],
    "output": "1f975"
  },
  {
    "name": "cold face",
    "category": "people",
    "shortname": ":cold_face:",
    "keyWords": [
      ""
    ],
    "output": "1f976"
  },
  {
    "name": "pleading face",
    "category": "people",
    "shortname": ":pleading_face:",
    "keyWords": [
      ""
    ],
    "output": "1f97a"
  },
  {
    "name": "sad but relieved face",
    "category": "people",
    "shortname": ":disappointed_relieved:",
    "keyWords": [
      "disappointed",
      "face",
      "relieved",
      "whew"
    ],
    "output": "1f625"
  },
  {
    "name": "downcast face with sweat",
    "category": "people",
    "shortname": ":sweat:",
    "keyWords": [
      "cold",
      "face",
      "sweat"
    ],
    "output": "1f613"
  },
  {
    "name": "hugging face",
    "category": "people",
    "shortname": ":hugging:",
    "keyWords": [
      "face",
      "hug",
      "hugging"
    ],
    "output": "1f917"
  },
  {
    "name": "thinking face",
    "category": "people",
    "shortname": ":thinking:",
    "keyWords": [
      "face",
      "thinking"
    ],
    "output": "1f914"
  },
  {
    "name": "face with hand over mouth",
    "category": "people",
    "shortname": ":face_with_hand_over_mouth:",
    "keyWords": [
      ""
    ],
    "output": "1f92d"
  },
  {
    "name": "shushing face",
    "category": "people",
    "shortname": ":shushing_face:",
    "keyWords": [
      "quiet",
      "shush"
    ],
    "output": "1f92b"
  },
  {
    "name": "lying face",
    "category": "people",
    "shortname": ":lying_face:",
    "keyWords": [
      "face",
      "lie",
      "pinocchio"
    ],
    "output": "1f925"
  },
  {
    "name": "face without mouth",
    "category": "people",
    "shortname": ":no_mouth:",
    "keyWords": [
      "face",
      "mouth",
      "quiet",
      "silent"
    ],
    "output": "1f636"
  },
  {
    "name": "neutral face",
    "category": "people",
    "shortname": ":neutral_face:",
    "keyWords": [
      "deadpan",
      "face",
      "neutral"
    ],
    "output": "1f610"
  },
  {
    "name": "expressionless face",
    "category": "people",
    "shortname": ":expressionless:",
    "keyWords": [
      "expressionless",
      "face",
      "inexpressive",
      "unexpressive"
    ],
    "output": "1f611"
  },
  {
    "name": "grimacing face",
    "category": "people",
    "shortname": ":grimacing:",
    "keyWords": [
      "face",
      "grimace"
    ],
    "output": "1f62c"
  },
  {
    "name": "face with rolling eyes",
    "category": "people",
    "shortname": ":rolling_eyes:",
    "keyWords": [
      "eyes",
      "face",
      "rolling"
    ],
    "output": "1f644"
  },
  {
    "name": "hushed face",
    "category": "people",
    "shortname": ":hushed:",
    "keyWords": [
      "face",
      "hushed",
      "stunned",
      "surprised"
    ],
    "output": "1f62f"
  },
  {
    "name": "frowning face with open mouth",
    "category": "people",
    "shortname": ":frowning:",
    "keyWords": [
      "face",
      "frown",
      "mouth",
      "open"
    ],
    "output": "1f626"
  },
  {
    "name": "anguished face",
    "category": "people",
    "shortname": ":anguished:",
    "keyWords": [
      "anguished",
      "face"
    ],
    "output": "1f627"
  },
  {
    "name": "face with open mouth",
    "category": "people",
    "shortname": ":open_mouth:",
    "keyWords": [
      "face",
      "mouth",
      "open",
      "sympathy"
    ],
    "output": "1f62e"
  },
  {
    "name": "astonished face",
    "category": "people",
    "shortname": ":astonished:",
    "keyWords": [
      "astonished",
      "face",
      "shocked",
      "totally"
    ],
    "output": "1f632"
  },
  {
    "name": "sleeping face",
    "category": "people",
    "shortname": ":sleeping:",
    "keyWords": [
      "face",
      "sleep",
      "zzz"
    ],
    "output": "1f634"
  },
  {
    "name": "drooling face",
    "category": "people",
    "shortname": ":drooling_face:",
    "keyWords": [
      "drooling",
      "face"
    ],
    "output": "1f924"
  },
  {
    "name": "sleepy face",
    "category": "people",
    "shortname": ":sleepy:",
    "keyWords": [
      "face",
      "sleep"
    ],
    "output": "1f62a"
  },
  {
    "name": "dizzy face",
    "category": "people",
    "shortname": ":dizzy_face:",
    "keyWords": [
      "dizzy",
      "face"
    ],
    "output": "1f635"
  },
  {
    "name": "zipper-mouth face",
    "category": "people",
    "shortname": ":zipper_mouth:",
    "keyWords": [
      "face",
      "mouth",
      "zipper"
    ],
    "output": "1f910"
  },
  {
    "name": "woozy face",
    "category": "people",
    "shortname": ":woozy_face:",
    "keyWords": [
      ""
    ],
    "output": "1f974"
  },
  {
    "name": "nauseated face",
    "category": "people",
    "shortname": ":nauseated_face:",
    "keyWords": [
      "face",
      "nauseated",
      "vomit"
    ],
    "output": "1f922"
  },
  {
    "name": "face vomiting",
    "category": "people",
    "shortname": ":face_vomiting:",
    "keyWords": [
      "sick",
      "vomit"
    ],
    "output": "1f92e"
  },
  {
    "name": "sneezing face",
    "category": "people",
    "shortname": ":sneezing_face:",
    "keyWords": [
      "face",
      "gesundheit",
      "sneeze"
    ],
    "output": "1f927"
  },
  {
    "name": "face with medical mask",
    "category": "people",
    "shortname": ":mask:",
    "keyWords": [
      "cold",
      "doctor",
      "face",
      "mask",
      "medicine",
      "sick"
    ],
    "output": "1f637"
  },
  {
    "name": "face with thermometer",
    "category": "people",
    "shortname": ":thermometer_face:",
    "keyWords": [
      "face",
      "ill",
      "sick",
      "thermometer"
    ],
    "output": "1f912"
  },
  {
    "name": "face with head-bandage",
    "category": "people",
    "shortname": ":head_bandage:",
    "keyWords": [
      "bandage",
      "face",
      "hurt",
      "injury"
    ],
    "output": "1f915"
  },
  {
    "name": "money-mouth face",
    "category": "people",
    "shortname": ":money_mouth:",
    "keyWords": [
      "face",
      "money",
      "mouth"
    ],
    "output": "1f911"
  },
  {
    "name": "cowboy hat face",
    "category": "people",
    "shortname": ":cowboy:",
    "keyWords": [
      "cowboy",
      "cowgirl",
      "face",
      "hat"
    ],
    "output": "1f920"
  },
  {
    "name": "smiling face with horns",
    "category": "people",
    "shortname": ":smiling_imp:",
    "keyWords": [
      "face",
      "fairy tale",
      "fantasy",
      "horns",
      "smile"
    ],
    "output": "1f608"
  },
  {
    "name": "angry face with horns",
    "category": "people",
    "shortname": ":imp:",
    "keyWords": [
      "demon",
      "devil",
      "face",
      "fairy tale",
      "fantasy",
      "imp"
    ],
    "output": "1f47f"
  },
  {
    "name": "ogre",
    "category": "people",
    "shortname": ":japanese_ogre:",
    "keyWords": [
      ""
    ],
    "output": "1f479"
  },
  {
    "name": "goblin",
    "category": "people",
    "shortname": ":japanese_goblin:",
    "keyWords": [
      "creature",
      "face",
      "fairy tale",
      "fantasy",
      "monster"
    ],
    "output": "1f47a"
  },
  {
    "name": "clown face",
    "category": "people",
    "shortname": ":clown:",
    "keyWords": [
      "clown",
      "face"
    ],
    "output": "1f921"
  },
  {
    "name": "pile of poo",
    "category": "people",
    "shortname": ":poop:",
    "keyWords": [
      "comic",
      "dung",
      "face",
      "monster",
      "poo",
      "poop"
    ],
    "output": "1f4a9"
  },
  {
    "name": "ghost",
    "category": "people",
    "shortname": ":ghost:",
    "keyWords": [
      "creature",
      "face",
      "fairy tale",
      "fantasy",
      "monster"
    ],
    "output": "1f47b"
  },
  {
    "name": "skull",
    "category": "people",
    "shortname": ":skull:",
    "keyWords": [
      "death",
      "face",
      "fairy tale",
      "monster"
    ],
    "output": "1f480"
  },
  {
    "name": "alien",
    "category": "people",
    "shortname": ":alien:",
    "keyWords": [
      "creature",
      "extraterrestrial",
      "face",
      "fairy tale",
      "fantasy",
      "monster",
      "ufo"
    ],
    "output": "1f47d"
  },
  {
    "name": "alien monster",
    "category": "people",
    "shortname": ":space_invader:",
    "keyWords": [
      "alien",
      "creature",
      "extraterrestrial",
      "face",
      "fairy tale",
      "fantasy",
      "monster",
      "ufo"
    ],
    "output": "1f47e"
  },
  {
    "name": "robot face",
    "category": "people",
    "shortname": ":robot:",
    "keyWords": [
      "face",
      "monster",
      "robot"
    ],
    "output": "1f916"
  },
  {
    "name": "jack-o-lantern",
    "category": "people",
    "shortname": ":jack_o_lantern:",
    "keyWords": [
      "celebration",
      "halloween",
      "jack",
      "lantern"
    ],
    "output": "1f383"
  },
  {
    "name": "grinning cat face",
    "category": "people",
    "shortname": ":smiley_cat:",
    "keyWords": [
      "cat",
      "face",
      "mouth",
      "open",
      "smile"
    ],
    "output": "1f63a"
  },
  {
    "name": "grinning cat face with smiling eyes",
    "category": "people",
    "shortname": ":smile_cat:",
    "keyWords": [
      "cat",
      "eye",
      "face",
      "grin",
      "smile"
    ],
    "output": "1f638"
  },
  {
    "name": "cat face with tears of joy",
    "category": "people",
    "shortname": ":joy_cat:",
    "keyWords": [
      "cat",
      "face",
      "joy",
      "tear"
    ],
    "output": "1f639"
  },
  {
    "name": "smiling cat face with heart-eyes",
    "category": "people",
    "shortname": ":heart_eyes_cat:",
    "keyWords": [
      "cat",
      "eye",
      "face",
      "love",
      "smile"
    ],
    "output": "1f63b"
  },
  {
    "name": "cat face with wry smile",
    "category": "people",
    "shortname": ":smirk_cat:",
    "keyWords": [
      "cat",
      "face",
      "ironic",
      "smile",
      "wry"
    ],
    "output": "1f63c"
  },
  {
    "name": "kissing cat face",
    "category": "people",
    "shortname": ":kissing_cat:",
    "keyWords": [
      "cat",
      "eye",
      "face",
      "kiss"
    ],
    "output": "1f63d"
  },
  {
    "name": "weary cat face",
    "category": "people",
    "shortname": ":scream_cat:",
    "keyWords": [
      "cat",
      "face",
      "oh",
      "surprised",
      "weary"
    ],
    "output": "1f640"
  },
  {
    "name": "crying cat face",
    "category": "people",
    "shortname": ":crying_cat_face:",
    "keyWords": [
      "cat",
      "cry",
      "face",
      "sad",
      "tear"
    ],
    "output": "1f63f"
  },
  {
    "name": "pouting cat face",
    "category": "people",
    "shortname": ":pouting_cat:",
    "keyWords": [
      "cat",
      "face",
      "pouting"
    ],
    "output": "1f63e"
  },
  {
    "name": "palms up together",
    "category": "people",
    "shortname": ":palms_up_together:",
    "keyWords": [
      ""
    ],
    "output": "1f932"
  },
  {
    "name": "palms up together: light skin tone",
    "category": "people",
    "shortname": ":palms_up_together_tone1:",
    "keyWords": [
      "light skin tone",
      "prayer"
    ],
    "output": "1f932-1f3fb"
  },
  {
    "name": "palms up together: medium-light skin tone",
    "category": "people",
    "shortname": ":palms_up_together_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "prayer"
    ],
    "output": "1f932-1f3fc"
  },
  {
    "name": "palms up together: medium skin tone",
    "category": "people",
    "shortname": ":palms_up_together_tone3:",
    "keyWords": [
      "medium skin tone",
      "prayer"
    ],
    "output": "1f932-1f3fd"
  },
  {
    "name": "palms up together: medium-dark skin tone",
    "category": "people",
    "shortname": ":palms_up_together_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "prayer"
    ],
    "output": "1f932-1f3fe"
  },
  {
    "name": "palms up together: dark skin tone",
    "category": "people",
    "shortname": ":palms_up_together_tone5:",
    "keyWords": [
      "dark skin tone",
      "prayer"
    ],
    "output": "1f932-1f3ff"
  },
  {
    "name": "open hands",
    "category": "people",
    "shortname": ":open_hands:",
    "keyWords": [
      "hand",
      "open"
    ],
    "output": "1f450"
  },
  {
    "name": "open hands: light skin tone",
    "category": "people",
    "shortname": ":open_hands_tone1:",
    "keyWords": [
      "hand",
      "light skin tone",
      "open"
    ],
    "output": "1f450-1f3fb"
  },
  {
    "name": "open hands: medium-light skin tone",
    "category": "people",
    "shortname": ":open_hands_tone2:",
    "keyWords": [
      "hand",
      "medium-light skin tone",
      "open"
    ],
    "output": "1f450-1f3fc"
  },
  {
    "name": "open hands: medium skin tone",
    "category": "people",
    "shortname": ":open_hands_tone3:",
    "keyWords": [
      "hand",
      "medium skin tone",
      "open"
    ],
    "output": "1f450-1f3fd"
  },
  {
    "name": "open hands: medium-dark skin tone",
    "category": "people",
    "shortname": ":open_hands_tone4:",
    "keyWords": [
      "hand",
      "medium-dark skin tone",
      "open"
    ],
    "output": "1f450-1f3fe"
  },
  {
    "name": "open hands: dark skin tone",
    "category": "people",
    "shortname": ":open_hands_tone5:",
    "keyWords": [
      "dark skin tone",
      "hand",
      "open"
    ],
    "output": "1f450-1f3ff"
  },
  {
    "name": "raising hands",
    "category": "people",
    "shortname": ":raised_hands:",
    "keyWords": [
      "celebration",
      "gesture",
      "hand",
      "hooray",
      "raised"
    ],
    "output": "1f64c"
  },
  {
    "name": "raising hands: light skin tone",
    "category": "people",
    "shortname": ":raised_hands_tone1:",
    "keyWords": [
      "celebration",
      "gesture",
      "hand",
      "hooray",
      "light skin tone",
      "raised"
    ],
    "output": "1f64c-1f3fb"
  },
  {
    "name": "raising hands: medium-light skin tone",
    "category": "people",
    "shortname": ":raised_hands_tone2:",
    "keyWords": [
      "celebration",
      "gesture",
      "hand",
      "hooray",
      "medium-light skin tone",
      "raised"
    ],
    "output": "1f64c-1f3fc"
  },
  {
    "name": "raising hands: medium skin tone",
    "category": "people",
    "shortname": ":raised_hands_tone3:",
    "keyWords": [
      "celebration",
      "gesture",
      "hand",
      "hooray",
      "medium skin tone",
      "raised"
    ],
    "output": "1f64c-1f3fd"
  },
  {
    "name": "raising hands: medium-dark skin tone",
    "category": "people",
    "shortname": ":raised_hands_tone4:",
    "keyWords": [
      "celebration",
      "gesture",
      "hand",
      "hooray",
      "medium-dark skin tone",
      "raised"
    ],
    "output": "1f64c-1f3fe"
  },
  {
    "name": "raising hands: dark skin tone",
    "category": "people",
    "shortname": ":raised_hands_tone5:",
    "keyWords": [
      "celebration",
      "dark skin tone",
      "gesture",
      "hand",
      "hooray",
      "raised"
    ],
    "output": "1f64c-1f3ff"
  },
  {
    "name": "clapping hands",
    "category": "people",
    "shortname": ":clap:",
    "keyWords": [
      "clap",
      "hand"
    ],
    "output": "1f44f"
  },
  {
    "name": "clapping hands: light skin tone",
    "category": "people",
    "shortname": ":clap_tone1:",
    "keyWords": [
      "clap",
      "hand",
      "light skin tone"
    ],
    "output": "1f44f-1f3fb"
  },
  {
    "name": "clapping hands: medium-light skin tone",
    "category": "people",
    "shortname": ":clap_tone2:",
    "keyWords": [
      "clap",
      "hand",
      "medium-light skin tone"
    ],
    "output": "1f44f-1f3fc"
  },
  {
    "name": "clapping hands: medium skin tone",
    "category": "people",
    "shortname": ":clap_tone3:",
    "keyWords": [
      "clap",
      "hand",
      "medium skin tone"
    ],
    "output": "1f44f-1f3fd"
  },
  {
    "name": "clapping hands: medium-dark skin tone",
    "category": "people",
    "shortname": ":clap_tone4:",
    "keyWords": [
      "clap",
      "hand",
      "medium-dark skin tone"
    ],
    "output": "1f44f-1f3fe"
  },
  {
    "name": "clapping hands: dark skin tone",
    "category": "people",
    "shortname": ":clap_tone5:",
    "keyWords": [
      "clap",
      "dark skin tone",
      "hand"
    ],
    "output": "1f44f-1f3ff"
  },
  {
    "name": "handshake",
    "category": "people",
    "shortname": ":handshake:",
    "keyWords": [
      "agreement",
      "hand",
      "handshake",
      "meeting",
      "shake"
    ],
    "output": "1f91d"
  },
  {
    "name": "thumbs up",
    "category": "people",
    "shortname": ":thumbsup:",
    "keyWords": [
      "+1",
      "hand",
      "thumb",
      "up"
    ],
    "output": "1f44d"
  },
  {
    "name": "thumbs up: light skin tone",
    "category": "people",
    "shortname": ":thumbsup_tone1:",
    "keyWords": [
      "+1",
      "hand",
      "light skin tone",
      "thumb",
      "up"
    ],
    "output": "1f44d-1f3fb"
  },
  {
    "name": "thumbs up: medium-light skin tone",
    "category": "people",
    "shortname": ":thumbsup_tone2:",
    "keyWords": [
      "+1",
      "hand",
      "medium-light skin tone",
      "thumb",
      "up"
    ],
    "output": "1f44d-1f3fc"
  },
  {
    "name": "thumbs up: medium skin tone",
    "category": "people",
    "shortname": ":thumbsup_tone3:",
    "keyWords": [
      "+1",
      "hand",
      "medium skin tone",
      "thumb",
      "up"
    ],
    "output": "1f44d-1f3fd"
  },
  {
    "name": "thumbs up: medium-dark skin tone",
    "category": "people",
    "shortname": ":thumbsup_tone4:",
    "keyWords": [
      "+1",
      "hand",
      "medium-dark skin tone",
      "thumb",
      "up"
    ],
    "output": "1f44d-1f3fe"
  },
  {
    "name": "thumbs up: dark skin tone",
    "category": "people",
    "shortname": ":thumbsup_tone5:",
    "keyWords": [
      "+1",
      "dark skin tone",
      "hand",
      "thumb",
      "up"
    ],
    "output": "1f44d-1f3ff"
  },
  {
    "name": "thumbs down",
    "category": "people",
    "shortname": ":thumbsdown:",
    "keyWords": [
      "-1",
      "down",
      "hand",
      "thumb"
    ],
    "output": "1f44e"
  },
  {
    "name": "thumbs down: light skin tone",
    "category": "people",
    "shortname": ":thumbsdown_tone1:",
    "keyWords": [
      "-1",
      "down",
      "hand",
      "light skin tone",
      "thumb"
    ],
    "output": "1f44e-1f3fb"
  },
  {
    "name": "thumbs down: medium-light skin tone",
    "category": "people",
    "shortname": ":thumbsdown_tone2:",
    "keyWords": [
      "-1",
      "down",
      "hand",
      "medium-light skin tone",
      "thumb"
    ],
    "output": "1f44e-1f3fc"
  },
  {
    "name": "thumbs down: medium skin tone",
    "category": "people",
    "shortname": ":thumbsdown_tone3:",
    "keyWords": [
      "-1",
      "down",
      "hand",
      "medium skin tone",
      "thumb"
    ],
    "output": "1f44e-1f3fd"
  },
  {
    "name": "thumbs down: medium-dark skin tone",
    "category": "people",
    "shortname": ":thumbsdown_tone4:",
    "keyWords": [
      "-1",
      "down",
      "hand",
      "medium-dark skin tone",
      "thumb"
    ],
    "output": "1f44e-1f3fe"
  },
  {
    "name": "thumbs down: dark skin tone",
    "category": "people",
    "shortname": ":thumbsdown_tone5:",
    "keyWords": [
      "-1",
      "dark skin tone",
      "down",
      "hand",
      "thumb"
    ],
    "output": "1f44e-1f3ff"
  },
  {
    "name": "oncoming fist",
    "category": "people",
    "shortname": ":punch:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "punch"
    ],
    "output": "1f44a"
  },
  {
    "name": "oncoming fist: light skin tone",
    "category": "people",
    "shortname": ":punch_tone1:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "light skin tone",
      "punch"
    ],
    "output": "1f44a-1f3fb"
  },
  {
    "name": "oncoming fist: medium-light skin tone",
    "category": "people",
    "shortname": ":punch_tone2:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "medium-light skin tone",
      "punch"
    ],
    "output": "1f44a-1f3fc"
  },
  {
    "name": "oncoming fist: medium skin tone",
    "category": "people",
    "shortname": ":punch_tone3:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "medium skin tone",
      "punch"
    ],
    "output": "1f44a-1f3fd"
  },
  {
    "name": "oncoming fist: medium-dark skin tone",
    "category": "people",
    "shortname": ":punch_tone4:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "medium-dark skin tone",
      "punch"
    ],
    "output": "1f44a-1f3fe"
  },
  {
    "name": "oncoming fist: dark skin tone",
    "category": "people",
    "shortname": ":punch_tone5:",
    "keyWords": [
      "clenched",
      "dark skin tone",
      "fist",
      "hand",
      "punch"
    ],
    "output": "1f44a-1f3ff"
  },
  {
    "name": "raised fist",
    "category": "people",
    "shortname": ":fist:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "punch"
    ],
    "output": "270a"
  },
  {
    "name": "raised fist: light skin tone",
    "category": "people",
    "shortname": ":fist_tone1:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "light skin tone",
      "punch"
    ],
    "output": "270a-1f3fb"
  },
  {
    "name": "raised fist: medium-light skin tone",
    "category": "people",
    "shortname": ":fist_tone2:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "medium-light skin tone",
      "punch"
    ],
    "output": "270a-1f3fc"
  },
  {
    "name": "raised fist: medium skin tone",
    "category": "people",
    "shortname": ":fist_tone3:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "medium skin tone",
      "punch"
    ],
    "output": "270a-1f3fd"
  },
  {
    "name": "raised fist: medium-dark skin tone",
    "category": "people",
    "shortname": ":fist_tone4:",
    "keyWords": [
      "clenched",
      "fist",
      "hand",
      "medium-dark skin tone",
      "punch"
    ],
    "output": "270a-1f3fe"
  },
  {
    "name": "raised fist: dark skin tone",
    "category": "people",
    "shortname": ":fist_tone5:",
    "keyWords": [
      "clenched",
      "dark skin tone",
      "fist",
      "hand",
      "punch"
    ],
    "output": "270a-1f3ff"
  },
  {
    "name": "left-facing fist",
    "category": "people",
    "shortname": ":left_facing_fist:",
    "keyWords": [
      "fist",
      "leftwards"
    ],
    "output": "1f91b"
  },
  {
    "name": "left-facing fist: light skin tone",
    "category": "people",
    "shortname": ":left_facing_fist_tone1:",
    "keyWords": [
      "fist",
      "leftwards",
      "light skin tone"
    ],
    "output": "1f91b-1f3fb"
  },
  {
    "name": "left-facing fist: medium-light skin tone",
    "category": "people",
    "shortname": ":left_facing_fist_tone2:",
    "keyWords": [
      "fist",
      "leftwards",
      "medium-light skin tone"
    ],
    "output": "1f91b-1f3fc"
  },
  {
    "name": "left-facing fist: medium skin tone",
    "category": "people",
    "shortname": ":left_facing_fist_tone3:",
    "keyWords": [
      "fist",
      "leftwards",
      "medium skin tone"
    ],
    "output": "1f91b-1f3fd"
  },
  {
    "name": "left-facing fist: medium-dark skin tone",
    "category": "people",
    "shortname": ":left_facing_fist_tone4:",
    "keyWords": [
      "fist",
      "leftwards",
      "medium-dark skin tone"
    ],
    "output": "1f91b-1f3fe"
  },
  {
    "name": "left-facing fist: dark skin tone",
    "category": "people",
    "shortname": ":left_facing_fist_tone5:",
    "keyWords": [
      "dark skin tone",
      "fist",
      "leftwards"
    ],
    "output": "1f91b-1f3ff"
  },
  {
    "name": "right-facing fist",
    "category": "people",
    "shortname": ":right_facing_fist:",
    "keyWords": [
      "fist",
      "rightwards"
    ],
    "output": "1f91c"
  },
  {
    "name": "right-facing fist: light skin tone",
    "category": "people",
    "shortname": ":right_facing_fist_tone1:",
    "keyWords": [
      "fist",
      "light skin tone",
      "rightwards"
    ],
    "output": "1f91c-1f3fb"
  },
  {
    "name": "right-facing fist: medium-light skin tone",
    "category": "people",
    "shortname": ":right_facing_fist_tone2:",
    "keyWords": [
      "fist",
      "medium-light skin tone",
      "rightwards"
    ],
    "output": "1f91c-1f3fc"
  },
  {
    "name": "right-facing fist: medium skin tone",
    "category": "people",
    "shortname": ":right_facing_fist_tone3:",
    "keyWords": [
      "fist",
      "medium skin tone",
      "rightwards"
    ],
    "output": "1f91c-1f3fd"
  },
  {
    "name": "right-facing fist: medium-dark skin tone",
    "category": "people",
    "shortname": ":right_facing_fist_tone4:",
    "keyWords": [
      "fist",
      "medium-dark skin tone",
      "rightwards"
    ],
    "output": "1f91c-1f3fe"
  },
  {
    "name": "right-facing fist: dark skin tone",
    "category": "people",
    "shortname": ":right_facing_fist_tone5:",
    "keyWords": [
      "dark skin tone",
      "fist",
      "rightwards"
    ],
    "output": "1f91c-1f3ff"
  },
  {
    "name": "crossed fingers",
    "category": "people",
    "shortname": ":fingers_crossed:",
    "keyWords": [
      "cross",
      "finger",
      "hand",
      "luck"
    ],
    "output": "1f91e"
  },
  {
    "name": "crossed fingers: light skin tone",
    "category": "people",
    "shortname": ":fingers_crossed_tone1:",
    "keyWords": [
      "cross",
      "finger",
      "hand",
      "light skin tone",
      "luck"
    ],
    "output": "1f91e-1f3fb"
  },
  {
    "name": "crossed fingers: medium-light skin tone",
    "category": "people",
    "shortname": ":fingers_crossed_tone2:",
    "keyWords": [
      "cross",
      "finger",
      "hand",
      "luck",
      "medium-light skin tone"
    ],
    "output": "1f91e-1f3fc"
  },
  {
    "name": "crossed fingers: medium skin tone",
    "category": "people",
    "shortname": ":fingers_crossed_tone3:",
    "keyWords": [
      "cross",
      "finger",
      "hand",
      "luck",
      "medium skin tone"
    ],
    "output": "1f91e-1f3fd"
  },
  {
    "name": "crossed fingers: medium-dark skin tone",
    "category": "people",
    "shortname": ":fingers_crossed_tone4:",
    "keyWords": [
      "cross",
      "finger",
      "hand",
      "luck",
      "medium-dark skin tone"
    ],
    "output": "1f91e-1f3fe"
  },
  {
    "name": "crossed fingers: dark skin tone",
    "category": "people",
    "shortname": ":fingers_crossed_tone5:",
    "keyWords": [
      "cross",
      "dark skin tone",
      "finger",
      "hand",
      "luck"
    ],
    "output": "1f91e-1f3ff"
  },
  {
    "name": "victory hand",
    "category": "people",
    "shortname": ":v:",
    "keyWords": [
      "hand",
      "v",
      "victory"
    ],
    "output": "270c"
  },
  {
    "name": "victory hand: light skin tone",
    "category": "people",
    "shortname": ":v_tone1:",
    "keyWords": [
      "hand",
      "light skin tone",
      "v",
      "victory"
    ],
    "output": "270c-1f3fb"
  },
  {
    "name": "victory hand: medium-light skin tone",
    "category": "people",
    "shortname": ":v_tone2:",
    "keyWords": [
      "hand",
      "medium-light skin tone",
      "v",
      "victory"
    ],
    "output": "270c-1f3fc"
  },
  {
    "name": "victory hand: medium skin tone",
    "category": "people",
    "shortname": ":v_tone3:",
    "keyWords": [
      "hand",
      "medium skin tone",
      "v",
      "victory"
    ],
    "output": "270c-1f3fd"
  },
  {
    "name": "victory hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":v_tone4:",
    "keyWords": [
      "hand",
      "medium-dark skin tone",
      "v",
      "victory"
    ],
    "output": "270c-1f3fe"
  },
  {
    "name": "victory hand: dark skin tone",
    "category": "people",
    "shortname": ":v_tone5:",
    "keyWords": [
      "dark skin tone",
      "hand",
      "v",
      "victory"
    ],
    "output": "270c-1f3ff"
  },
  {
    "name": "love-you gesture",
    "category": "people",
    "shortname": ":love_you_gesture:",
    "keyWords": [
      "ILY",
      "hand"
    ],
    "output": "1f91f"
  },
  {
    "name": "love-you gesture: light skin tone",
    "category": "people",
    "shortname": ":love_you_gesture_tone1:",
    "keyWords": [
      "ILY",
      "hand",
      "light skin tone"
    ],
    "output": "1f91f-1f3fb"
  },
  {
    "name": "love-you gesture: medium-light skin tone",
    "category": "people",
    "shortname": ":love_you_gesture_tone2:",
    "keyWords": [
      "ILY",
      "hand",
      "medium-light skin tone"
    ],
    "output": "1f91f-1f3fc"
  },
  {
    "name": "love-you gesture: medium skin tone",
    "category": "people",
    "shortname": ":love_you_gesture_tone3:",
    "keyWords": [
      "ILY",
      "hand",
      "medium skin tone"
    ],
    "output": "1f91f-1f3fd"
  },
  {
    "name": "love-you gesture: medium-dark skin tone",
    "category": "people",
    "shortname": ":love_you_gesture_tone4:",
    "keyWords": [
      "ILY",
      "hand",
      "medium-dark skin tone"
    ],
    "output": "1f91f-1f3fe"
  },
  {
    "name": "love-you gesture: dark skin tone",
    "category": "people",
    "shortname": ":love_you_gesture_tone5:",
    "keyWords": [
      "ILY",
      "dark skin tone",
      "hand"
    ],
    "output": "1f91f-1f3ff"
  },
  {
    "name": "sign of the horns",
    "category": "people",
    "shortname": ":metal:",
    "keyWords": [
      "finger",
      "hand",
      "horns",
      "rock-on"
    ],
    "output": "1f918"
  },
  {
    "name": "sign of the horns: light skin tone",
    "category": "people",
    "shortname": ":metal_tone1:",
    "keyWords": [
      "finger",
      "hand",
      "horns",
      "light skin tone",
      "rock-on"
    ],
    "output": "1f918-1f3fb"
  },
  {
    "name": "sign of the horns: medium-light skin tone",
    "category": "people",
    "shortname": ":metal_tone2:",
    "keyWords": [
      "finger",
      "hand",
      "horns",
      "medium-light skin tone",
      "rock-on"
    ],
    "output": "1f918-1f3fc"
  },
  {
    "name": "sign of the horns: medium skin tone",
    "category": "people",
    "shortname": ":metal_tone3:",
    "keyWords": [
      "finger",
      "hand",
      "horns",
      "medium skin tone",
      "rock-on"
    ],
    "output": "1f918-1f3fd"
  },
  {
    "name": "sign of the horns: medium-dark skin tone",
    "category": "people",
    "shortname": ":metal_tone4:",
    "keyWords": [
      "finger",
      "hand",
      "horns",
      "medium-dark skin tone",
      "rock-on"
    ],
    "output": "1f918-1f3fe"
  },
  {
    "name": "sign of the horns: dark skin tone",
    "category": "people",
    "shortname": ":metal_tone5:",
    "keyWords": [
      "dark skin tone",
      "finger",
      "hand",
      "horns",
      "rock-on"
    ],
    "output": "1f918-1f3ff"
  },
  {
    "name": "OK hand",
    "category": "people",
    "shortname": ":ok_hand:",
    "keyWords": [
      "OK",
      "hand"
    ],
    "output": "1f44c"
  },
  {
    "name": "OK hand: light skin tone",
    "category": "people",
    "shortname": ":ok_hand_tone1:",
    "keyWords": [
      "OK",
      "hand",
      "light skin tone"
    ],
    "output": "1f44c-1f3fb"
  },
  {
    "name": "OK hand: medium-light skin tone",
    "category": "people",
    "shortname": ":ok_hand_tone2:",
    "keyWords": [
      "OK",
      "hand",
      "medium-light skin tone"
    ],
    "output": "1f44c-1f3fc"
  },
  {
    "name": "OK hand: medium skin tone",
    "category": "people",
    "shortname": ":ok_hand_tone3:",
    "keyWords": [
      "OK",
      "hand",
      "medium skin tone"
    ],
    "output": "1f44c-1f3fd"
  },
  {
    "name": "OK hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":ok_hand_tone4:",
    "keyWords": [
      "OK",
      "hand",
      "medium-dark skin tone"
    ],
    "output": "1f44c-1f3fe"
  },
  {
    "name": "OK hand: dark skin tone",
    "category": "people",
    "shortname": ":ok_hand_tone5:",
    "keyWords": [
      "OK",
      "dark skin tone",
      "hand"
    ],
    "output": "1f44c-1f3ff"
  },
  {
    "name": "backhand index pointing left",
    "category": "people",
    "shortname": ":point_left:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "point"
    ],
    "output": "1f448"
  },
  {
    "name": "backhand index pointing left: light skin tone",
    "category": "people",
    "shortname": ":point_left_tone1:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "light skin tone",
      "point"
    ],
    "output": "1f448-1f3fb"
  },
  {
    "name": "backhand index pointing left: medium-light skin tone",
    "category": "people",
    "shortname": ":point_left_tone2:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "medium-light skin tone",
      "point"
    ],
    "output": "1f448-1f3fc"
  },
  {
    "name": "backhand index pointing left: medium skin tone",
    "category": "people",
    "shortname": ":point_left_tone3:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "medium skin tone",
      "point"
    ],
    "output": "1f448-1f3fd"
  },
  {
    "name": "backhand index pointing left: medium-dark skin tone",
    "category": "people",
    "shortname": ":point_left_tone4:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "medium-dark skin tone",
      "point"
    ],
    "output": "1f448-1f3fe"
  },
  {
    "name": "backhand index pointing left: dark skin tone",
    "category": "people",
    "shortname": ":point_left_tone5:",
    "keyWords": [
      "backhand",
      "dark skin tone",
      "finger",
      "hand",
      "index",
      "point"
    ],
    "output": "1f448-1f3ff"
  },
  {
    "name": "backhand index pointing right",
    "category": "people",
    "shortname": ":point_right:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "point"
    ],
    "output": "1f449"
  },
  {
    "name": "backhand index pointing right: light skin tone",
    "category": "people",
    "shortname": ":point_right_tone1:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "light skin tone",
      "point"
    ],
    "output": "1f449-1f3fb"
  },
  {
    "name": "backhand index pointing right: medium-light skin tone",
    "category": "people",
    "shortname": ":point_right_tone2:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "medium-light skin tone",
      "point"
    ],
    "output": "1f449-1f3fc"
  },
  {
    "name": "backhand index pointing right: medium skin tone",
    "category": "people",
    "shortname": ":point_right_tone3:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "medium skin tone",
      "point"
    ],
    "output": "1f449-1f3fd"
  },
  {
    "name": "backhand index pointing right: medium-dark skin tone",
    "category": "people",
    "shortname": ":point_right_tone4:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "medium-dark skin tone",
      "point"
    ],
    "output": "1f449-1f3fe"
  },
  {
    "name": "backhand index pointing right: dark skin tone",
    "category": "people",
    "shortname": ":point_right_tone5:",
    "keyWords": [
      "backhand",
      "dark skin tone",
      "finger",
      "hand",
      "index",
      "point"
    ],
    "output": "1f449-1f3ff"
  },
  {
    "name": "backhand index pointing up",
    "category": "people",
    "shortname": ":point_up_2:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "point",
      "up"
    ],
    "output": "1f446"
  },
  {
    "name": "backhand index pointing up: light skin tone",
    "category": "people",
    "shortname": ":point_up_2_tone1:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "light skin tone",
      "point",
      "up"
    ],
    "output": "1f446-1f3fb"
  },
  {
    "name": "backhand index pointing up: medium-light skin tone",
    "category": "people",
    "shortname": ":point_up_2_tone2:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "medium-light skin tone",
      "point",
      "up"
    ],
    "output": "1f446-1f3fc"
  },
  {
    "name": "backhand index pointing up: medium skin tone",
    "category": "people",
    "shortname": ":point_up_2_tone3:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "medium skin tone",
      "point",
      "up"
    ],
    "output": "1f446-1f3fd"
  },
  {
    "name": "backhand index pointing up: medium-dark skin tone",
    "category": "people",
    "shortname": ":point_up_2_tone4:",
    "keyWords": [
      "backhand",
      "finger",
      "hand",
      "index",
      "medium-dark skin tone",
      "point",
      "up"
    ],
    "output": "1f446-1f3fe"
  },
  {
    "name": "backhand index pointing up: dark skin tone",
    "category": "people",
    "shortname": ":point_up_2_tone5:",
    "keyWords": [
      "backhand",
      "dark skin tone",
      "finger",
      "hand",
      "index",
      "point",
      "up"
    ],
    "output": "1f446-1f3ff"
  },
  {
    "name": "backhand index pointing down",
    "category": "people",
    "shortname": ":point_down:",
    "keyWords": [
      "backhand",
      "down",
      "finger",
      "hand",
      "index",
      "point"
    ],
    "output": "1f447"
  },
  {
    "name": "backhand index pointing down: light skin tone",
    "category": "people",
    "shortname": ":point_down_tone1:",
    "keyWords": [
      "backhand",
      "down",
      "finger",
      "hand",
      "index",
      "light skin tone",
      "point"
    ],
    "output": "1f447-1f3fb"
  },
  {
    "name": "backhand index pointing down: medium-light skin tone",
    "category": "people",
    "shortname": ":point_down_tone2:",
    "keyWords": [
      "backhand",
      "down",
      "finger",
      "hand",
      "index",
      "medium-light skin tone",
      "point"
    ],
    "output": "1f447-1f3fc"
  },
  {
    "name": "backhand index pointing down: medium skin tone",
    "category": "people",
    "shortname": ":point_down_tone3:",
    "keyWords": [
      "backhand",
      "down",
      "finger",
      "hand",
      "index",
      "medium skin tone",
      "point"
    ],
    "output": "1f447-1f3fd"
  },
  {
    "name": "backhand index pointing down: medium-dark skin tone",
    "category": "people",
    "shortname": ":point_down_tone4:",
    "keyWords": [
      "backhand",
      "down",
      "finger",
      "hand",
      "index",
      "medium-dark skin tone",
      "point"
    ],
    "output": "1f447-1f3fe"
  },
  {
    "name": "backhand index pointing down: dark skin tone",
    "category": "people",
    "shortname": ":point_down_tone5:",
    "keyWords": [
      "backhand",
      "dark skin tone",
      "down",
      "finger",
      "hand",
      "index",
      "point"
    ],
    "output": "1f447-1f3ff"
  },
  {
    "name": "index pointing up",
    "category": "people",
    "shortname": ":point_up:",
    "keyWords": [
      "finger",
      "hand",
      "index",
      "point",
      "up"
    ],
    "output": "261d"
  },
  {
    "name": "index pointing up: light skin tone",
    "category": "people",
    "shortname": ":point_up_tone1:",
    "keyWords": [
      "finger",
      "hand",
      "index",
      "light skin tone",
      "point",
      "up"
    ],
    "output": "261d-1f3fb"
  },
  {
    "name": "index pointing up: medium-light skin tone",
    "category": "people",
    "shortname": ":point_up_tone2:",
    "keyWords": [
      "finger",
      "hand",
      "index",
      "medium-light skin tone",
      "point",
      "up"
    ],
    "output": "261d-1f3fc"
  },
  {
    "name": "index pointing up: medium skin tone",
    "category": "people",
    "shortname": ":point_up_tone3:",
    "keyWords": [
      "finger",
      "hand",
      "index",
      "medium skin tone",
      "point",
      "up"
    ],
    "output": "261d-1f3fd"
  },
  {
    "name": "index pointing up: medium-dark skin tone",
    "category": "people",
    "shortname": ":point_up_tone4:",
    "keyWords": [
      "finger",
      "hand",
      "index",
      "medium-dark skin tone",
      "point",
      "up"
    ],
    "output": "261d-1f3fe"
  },
  {
    "name": "index pointing up: dark skin tone",
    "category": "people",
    "shortname": ":point_up_tone5:",
    "keyWords": [
      "dark skin tone",
      "finger",
      "hand",
      "index",
      "point",
      "up"
    ],
    "output": "261d-1f3ff"
  },
  {
    "name": "raised hand",
    "category": "people",
    "shortname": ":raised_hand:",
    "keyWords": [
      "hand"
    ],
    "output": "270b"
  },
  {
    "name": "raised hand: light skin tone",
    "category": "people",
    "shortname": ":raised_hand_tone1:",
    "keyWords": [
      "hand",
      "light skin tone"
    ],
    "output": "270b-1f3fb"
  },
  {
    "name": "raised hand: medium-light skin tone",
    "category": "people",
    "shortname": ":raised_hand_tone2:",
    "keyWords": [
      "hand",
      "medium-light skin tone"
    ],
    "output": "270b-1f3fc"
  },
  {
    "name": "raised hand: medium skin tone",
    "category": "people",
    "shortname": ":raised_hand_tone3:",
    "keyWords": [
      "hand",
      "medium skin tone"
    ],
    "output": "270b-1f3fd"
  },
  {
    "name": "raised hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":raised_hand_tone4:",
    "keyWords": [
      "hand",
      "medium-dark skin tone"
    ],
    "output": "270b-1f3fe"
  },
  {
    "name": "raised hand: dark skin tone",
    "category": "people",
    "shortname": ":raised_hand_tone5:",
    "keyWords": [
      "dark skin tone",
      "hand"
    ],
    "output": "270b-1f3ff"
  },
  {
    "name": "raised back of hand",
    "category": "people",
    "shortname": ":raised_back_of_hand:",
    "keyWords": [
      "backhand",
      "raised"
    ],
    "output": "1f91a"
  },
  {
    "name": "raised back of hand: light skin tone",
    "category": "people",
    "shortname": ":raised_back_of_hand_tone1:",
    "keyWords": [
      "backhand",
      "light skin tone",
      "raised"
    ],
    "output": "1f91a-1f3fb"
  },
  {
    "name": "raised back of hand: medium-light skin tone",
    "category": "people",
    "shortname": ":raised_back_of_hand_tone2:",
    "keyWords": [
      "backhand",
      "medium-light skin tone",
      "raised"
    ],
    "output": "1f91a-1f3fc"
  },
  {
    "name": "raised back of hand: medium skin tone",
    "category": "people",
    "shortname": ":raised_back_of_hand_tone3:",
    "keyWords": [
      "backhand",
      "medium skin tone",
      "raised"
    ],
    "output": "1f91a-1f3fd"
  },
  {
    "name": "raised back of hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":raised_back_of_hand_tone4:",
    "keyWords": [
      "backhand",
      "medium-dark skin tone",
      "raised"
    ],
    "output": "1f91a-1f3fe"
  },
  {
    "name": "raised back of hand: dark skin tone",
    "category": "people",
    "shortname": ":raised_back_of_hand_tone5:",
    "keyWords": [
      "backhand",
      "dark skin tone",
      "raised"
    ],
    "output": "1f91a-1f3ff"
  },
  {
    "name": "hand with fingers splayed",
    "category": "people",
    "shortname": ":hand_splayed:",
    "keyWords": [
      "finger",
      "hand",
      "splayed"
    ],
    "output": "1f590"
  },
  {
    "name": "hand with fingers splayed: light skin tone",
    "category": "people",
    "shortname": ":hand_splayed_tone1:",
    "keyWords": [
      "finger",
      "hand",
      "light skin tone",
      "splayed"
    ],
    "output": "1f590-1f3fb"
  },
  {
    "name": "hand with fingers splayed: medium-light skin tone",
    "category": "people",
    "shortname": ":hand_splayed_tone2:",
    "keyWords": [
      "finger",
      "hand",
      "medium-light skin tone",
      "splayed"
    ],
    "output": "1f590-1f3fc"
  },
  {
    "name": "hand with fingers splayed: medium skin tone",
    "category": "people",
    "shortname": ":hand_splayed_tone3:",
    "keyWords": [
      "finger",
      "hand",
      "medium skin tone",
      "splayed"
    ],
    "output": "1f590-1f3fd"
  },
  {
    "name": "hand with fingers splayed: medium-dark skin tone",
    "category": "people",
    "shortname": ":hand_splayed_tone4:",
    "keyWords": [
      "finger",
      "hand",
      "medium-dark skin tone",
      "splayed"
    ],
    "output": "1f590-1f3fe"
  },
  {
    "name": "hand with fingers splayed: dark skin tone",
    "category": "people",
    "shortname": ":hand_splayed_tone5:",
    "keyWords": [
      "dark skin tone",
      "finger",
      "hand",
      "splayed"
    ],
    "output": "1f590-1f3ff"
  },
  {
    "name": "vulcan salute",
    "category": "people",
    "shortname": ":vulcan:",
    "keyWords": [
      "finger",
      "hand",
      "spock",
      "vulcan"
    ],
    "output": "1f596"
  },
  {
    "name": "vulcan salute: light skin tone",
    "category": "people",
    "shortname": ":vulcan_tone1:",
    "keyWords": [
      "finger",
      "hand",
      "light skin tone",
      "spock",
      "vulcan"
    ],
    "output": "1f596-1f3fb"
  },
  {
    "name": "vulcan salute: medium-light skin tone",
    "category": "people",
    "shortname": ":vulcan_tone2:",
    "keyWords": [
      "finger",
      "hand",
      "medium-light skin tone",
      "spock",
      "vulcan"
    ],
    "output": "1f596-1f3fc"
  },
  {
    "name": "vulcan salute: medium skin tone",
    "category": "people",
    "shortname": ":vulcan_tone3:",
    "keyWords": [
      "finger",
      "hand",
      "medium skin tone",
      "spock",
      "vulcan"
    ],
    "output": "1f596-1f3fd"
  },
  {
    "name": "vulcan salute: medium-dark skin tone",
    "category": "people",
    "shortname": ":vulcan_tone4:",
    "keyWords": [
      "finger",
      "hand",
      "medium-dark skin tone",
      "spock",
      "vulcan"
    ],
    "output": "1f596-1f3fe"
  },
  {
    "name": "vulcan salute: dark skin tone",
    "category": "people",
    "shortname": ":vulcan_tone5:",
    "keyWords": [
      "dark skin tone",
      "finger",
      "hand",
      "spock",
      "vulcan"
    ],
    "output": "1f596-1f3ff"
  },
  {
    "name": "waving hand",
    "category": "people",
    "shortname": ":wave:",
    "keyWords": [
      "hand",
      "wave",
      "waving"
    ],
    "output": "1f44b"
  },
  {
    "name": "waving hand: light skin tone",
    "category": "people",
    "shortname": ":wave_tone1:",
    "keyWords": [
      "hand",
      "light skin tone",
      "wave",
      "waving"
    ],
    "output": "1f44b-1f3fb"
  },
  {
    "name": "waving hand: medium-light skin tone",
    "category": "people",
    "shortname": ":wave_tone2:",
    "keyWords": [
      "hand",
      "medium-light skin tone",
      "wave",
      "waving"
    ],
    "output": "1f44b-1f3fc"
  },
  {
    "name": "waving hand: medium skin tone",
    "category": "people",
    "shortname": ":wave_tone3:",
    "keyWords": [
      "hand",
      "medium skin tone",
      "wave",
      "waving"
    ],
    "output": "1f44b-1f3fd"
  },
  {
    "name": "waving hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":wave_tone4:",
    "keyWords": [
      "hand",
      "medium-dark skin tone",
      "wave",
      "waving"
    ],
    "output": "1f44b-1f3fe"
  },
  {
    "name": "waving hand: dark skin tone",
    "category": "people",
    "shortname": ":wave_tone5:",
    "keyWords": [
      "dark skin tone",
      "hand",
      "wave",
      "waving"
    ],
    "output": "1f44b-1f3ff"
  },
  {
    "name": "call me hand",
    "category": "people",
    "shortname": ":call_me:",
    "keyWords": [
      "call",
      "hand"
    ],
    "output": "1f919"
  },
  {
    "name": "call me hand: light skin tone",
    "category": "people",
    "shortname": ":call_me_tone1:",
    "keyWords": [
      "call",
      "hand",
      "light skin tone"
    ],
    "output": "1f919-1f3fb"
  },
  {
    "name": "call me hand: medium-light skin tone",
    "category": "people",
    "shortname": ":call_me_tone2:",
    "keyWords": [
      "call",
      "hand",
      "medium-light skin tone"
    ],
    "output": "1f919-1f3fc"
  },
  {
    "name": "call me hand: medium skin tone",
    "category": "people",
    "shortname": ":call_me_tone3:",
    "keyWords": [
      "call",
      "hand",
      "medium skin tone"
    ],
    "output": "1f919-1f3fd"
  },
  {
    "name": "call me hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":call_me_tone4:",
    "keyWords": [
      "call",
      "hand",
      "medium-dark skin tone"
    ],
    "output": "1f919-1f3fe"
  },
  {
    "name": "call me hand: dark skin tone",
    "category": "people",
    "shortname": ":call_me_tone5:",
    "keyWords": [
      "call",
      "dark skin tone",
      "hand"
    ],
    "output": "1f919-1f3ff"
  },
  {
    "name": "flexed biceps",
    "category": "people",
    "shortname": ":muscle:",
    "keyWords": [
      "biceps",
      "comic",
      "flex",
      "muscle"
    ],
    "output": "1f4aa"
  },
  {
    "name": "flexed biceps: light skin tone",
    "category": "people",
    "shortname": ":muscle_tone1:",
    "keyWords": [
      "biceps",
      "comic",
      "flex",
      "light skin tone",
      "muscle"
    ],
    "output": "1f4aa-1f3fb"
  },
  {
    "name": "flexed biceps: medium-light skin tone",
    "category": "people",
    "shortname": ":muscle_tone2:",
    "keyWords": [
      "biceps",
      "comic",
      "flex",
      "medium-light skin tone",
      "muscle"
    ],
    "output": "1f4aa-1f3fc"
  },
  {
    "name": "flexed biceps: medium skin tone",
    "category": "people",
    "shortname": ":muscle_tone3:",
    "keyWords": [
      "biceps",
      "comic",
      "flex",
      "medium skin tone",
      "muscle"
    ],
    "output": "1f4aa-1f3fd"
  },
  {
    "name": "flexed biceps: medium-dark skin tone",
    "category": "people",
    "shortname": ":muscle_tone4:",
    "keyWords": [
      "biceps",
      "comic",
      "flex",
      "medium-dark skin tone",
      "muscle"
    ],
    "output": "1f4aa-1f3fe"
  },
  {
    "name": "flexed biceps: dark skin tone",
    "category": "people",
    "shortname": ":muscle_tone5:",
    "keyWords": [
      "biceps",
      "comic",
      "dark skin tone",
      "flex",
      "muscle"
    ],
    "output": "1f4aa-1f3ff"
  },
  {
    "name": "leg",
    "category": "people",
    "shortname": ":leg:",
    "keyWords": [
      ""
    ],
    "output": "1f9b5"
  },
  {
    "name": "leg: light skin tone",
    "category": "people",
    "shortname": ":leg_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f9b5-1f3fb"
  },
  {
    "name": "leg: medium-light skin tone",
    "category": "people",
    "shortname": ":leg_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f9b5-1f3fc"
  },
  {
    "name": "leg: medium skin tone",
    "category": "people",
    "shortname": ":leg_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f9b5-1f3fd"
  },
  {
    "name": "leg: medium-dark skin tone",
    "category": "people",
    "shortname": ":leg_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f9b5-1f3fe"
  },
  {
    "name": "leg: dark skin tone",
    "category": "people",
    "shortname": ":leg_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f9b5-1f3ff"
  },
  {
    "name": "foot",
    "category": "people",
    "shortname": ":foot:",
    "keyWords": [
      ""
    ],
    "output": "1f9b6"
  },
  {
    "name": "foot: light skin tone",
    "category": "people",
    "shortname": ":foot_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f9b6-1f3fb"
  },
  {
    "name": "foot: medium-light skin tone",
    "category": "people",
    "shortname": ":foot_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f9b6-1f3fc"
  },
  {
    "name": "foot: medium skin tone",
    "category": "people",
    "shortname": ":foot_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f9b6-1f3fd"
  },
  {
    "name": "foot: medium-dark skin tone",
    "category": "people",
    "shortname": ":foot_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f9b6-1f3fe"
  },
  {
    "name": "foot: dark skin tone",
    "category": "people",
    "shortname": ":foot_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f9b6-1f3ff"
  },
  {
    "name": "middle finger",
    "category": "people",
    "shortname": ":middle_finger:",
    "keyWords": [
      "finger",
      "hand"
    ],
    "output": "1f595"
  },
  {
    "name": "middle finger: light skin tone",
    "category": "people",
    "shortname": ":middle_finger_tone1:",
    "keyWords": [
      "finger",
      "hand",
      "light skin tone"
    ],
    "output": "1f595-1f3fb"
  },
  {
    "name": "middle finger: medium-light skin tone",
    "category": "people",
    "shortname": ":middle_finger_tone2:",
    "keyWords": [
      "finger",
      "hand",
      "medium-light skin tone"
    ],
    "output": "1f595-1f3fc"
  },
  {
    "name": "middle finger: medium skin tone",
    "category": "people",
    "shortname": ":middle_finger_tone3:",
    "keyWords": [
      "finger",
      "hand",
      "medium skin tone"
    ],
    "output": "1f595-1f3fd"
  },
  {
    "name": "middle finger: medium-dark skin tone",
    "category": "people",
    "shortname": ":middle_finger_tone4:",
    "keyWords": [
      "finger",
      "hand",
      "medium-dark skin tone"
    ],
    "output": "1f595-1f3fe"
  },
  {
    "name": "middle finger: dark skin tone",
    "category": "people",
    "shortname": ":middle_finger_tone5:",
    "keyWords": [
      "dark skin tone",
      "finger",
      "hand"
    ],
    "output": "1f595-1f3ff"
  },
  {
    "name": "writing hand",
    "category": "people",
    "shortname": ":writing_hand:",
    "keyWords": [
      "hand",
      "write"
    ],
    "output": "270d"
  },
  {
    "name": "writing hand: light skin tone",
    "category": "people",
    "shortname": ":writing_hand_tone1:",
    "keyWords": [
      "hand",
      "light skin tone",
      "write"
    ],
    "output": "270d-1f3fb"
  },
  {
    "name": "writing hand: medium-light skin tone",
    "category": "people",
    "shortname": ":writing_hand_tone2:",
    "keyWords": [
      "hand",
      "medium-light skin tone",
      "write"
    ],
    "output": "270d-1f3fc"
  },
  {
    "name": "writing hand: medium skin tone",
    "category": "people",
    "shortname": ":writing_hand_tone3:",
    "keyWords": [
      "hand",
      "medium skin tone",
      "write"
    ],
    "output": "270d-1f3fd"
  },
  {
    "name": "writing hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":writing_hand_tone4:",
    "keyWords": [
      "hand",
      "medium-dark skin tone",
      "write"
    ],
    "output": "270d-1f3fe"
  },
  {
    "name": "writing hand: dark skin tone",
    "category": "people",
    "shortname": ":writing_hand_tone5:",
    "keyWords": [
      "dark skin tone",
      "hand",
      "write"
    ],
    "output": "270d-1f3ff"
  },
  {
    "name": "folded hands",
    "category": "people",
    "shortname": ":pray:",
    "keyWords": [
      "ask",
      "bow",
      "folded",
      "gesture",
      "hand",
      "please",
      "pray",
      "thanks"
    ],
    "output": "1f64f"
  },
  {
    "name": "folded hands: light skin tone",
    "category": "people",
    "shortname": ":pray_tone1:",
    "keyWords": [
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
    "output": "1f64f-1f3fb"
  },
  {
    "name": "folded hands: medium-light skin tone",
    "category": "people",
    "shortname": ":pray_tone2:",
    "keyWords": [
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
    "output": "1f64f-1f3fc"
  },
  {
    "name": "folded hands: medium skin tone",
    "category": "people",
    "shortname": ":pray_tone3:",
    "keyWords": [
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
    "output": "1f64f-1f3fd"
  },
  {
    "name": "folded hands: medium-dark skin tone",
    "category": "people",
    "shortname": ":pray_tone4:",
    "keyWords": [
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
    "output": "1f64f-1f3fe"
  },
  {
    "name": "folded hands: dark skin tone",
    "category": "people",
    "shortname": ":pray_tone5:",
    "keyWords": [
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
    "output": "1f64f-1f3ff"
  },
  {
    "name": "ring",
    "category": "people",
    "shortname": ":ring:",
    "keyWords": [
      "diamond"
    ],
    "output": "1f48d"
  },
  {
    "name": "lipstick",
    "category": "people",
    "shortname": ":lipstick:",
    "keyWords": [
      "cosmetics",
      "makeup"
    ],
    "output": "1f484"
  },
  {
    "name": "kiss mark",
    "category": "people",
    "shortname": ":kiss:",
    "keyWords": [
      "kiss",
      "lips"
    ],
    "output": "1f48b"
  },
  {
    "name": "mouth",
    "category": "people",
    "shortname": ":lips:",
    "keyWords": [
      "lips"
    ],
    "output": "1f444"
  },
  {
    "name": "tongue",
    "category": "people",
    "shortname": ":tongue:",
    "keyWords": [
      "body"
    ],
    "output": "1f445"
  },
  {
    "name": "ear",
    "category": "people",
    "shortname": ":ear:",
    "keyWords": [
      "body"
    ],
    "output": "1f442"
  },
  {
    "name": "ear: light skin tone",
    "category": "people",
    "shortname": ":ear_tone1:",
    "keyWords": [
      "body",
      "light skin tone"
    ],
    "output": "1f442-1f3fb"
  },
  {
    "name": "ear: medium-light skin tone",
    "category": "people",
    "shortname": ":ear_tone2:",
    "keyWords": [
      "body",
      "medium-light skin tone"
    ],
    "output": "1f442-1f3fc"
  },
  {
    "name": "ear: medium skin tone",
    "category": "people",
    "shortname": ":ear_tone3:",
    "keyWords": [
      "body",
      "medium skin tone"
    ],
    "output": "1f442-1f3fd"
  },
  {
    "name": "ear: medium-dark skin tone",
    "category": "people",
    "shortname": ":ear_tone4:",
    "keyWords": [
      "body",
      "medium-dark skin tone"
    ],
    "output": "1f442-1f3fe"
  },
  {
    "name": "ear: dark skin tone",
    "category": "people",
    "shortname": ":ear_tone5:",
    "keyWords": [
      "body",
      "dark skin tone"
    ],
    "output": "1f442-1f3ff"
  },
  {
    "name": "nose",
    "category": "people",
    "shortname": ":nose:",
    "keyWords": [
      "body"
    ],
    "output": "1f443"
  },
  {
    "name": "nose: light skin tone",
    "category": "people",
    "shortname": ":nose_tone1:",
    "keyWords": [
      "body",
      "light skin tone"
    ],
    "output": "1f443-1f3fb"
  },
  {
    "name": "nose: medium-light skin tone",
    "category": "people",
    "shortname": ":nose_tone2:",
    "keyWords": [
      "body",
      "medium-light skin tone"
    ],
    "output": "1f443-1f3fc"
  },
  {
    "name": "nose: medium skin tone",
    "category": "people",
    "shortname": ":nose_tone3:",
    "keyWords": [
      "body",
      "medium skin tone"
    ],
    "output": "1f443-1f3fd"
  },
  {
    "name": "nose: medium-dark skin tone",
    "category": "people",
    "shortname": ":nose_tone4:",
    "keyWords": [
      "body",
      "medium-dark skin tone"
    ],
    "output": "1f443-1f3fe"
  },
  {
    "name": "nose: dark skin tone",
    "category": "people",
    "shortname": ":nose_tone5:",
    "keyWords": [
      "body",
      "dark skin tone"
    ],
    "output": "1f443-1f3ff"
  },
  {
    "name": "footprints",
    "category": "people",
    "shortname": ":footprints:",
    "keyWords": [
      "clothing",
      "footprint",
      "print"
    ],
    "output": "1f463"
  },
  {
    "name": "eye",
    "category": "people",
    "shortname": ":eye:",
    "keyWords": [
      "body"
    ],
    "output": "1f441"
  },
  {
    "name": "eyes",
    "category": "people",
    "shortname": ":eyes:",
    "keyWords": [
      "eye",
      "face"
    ],
    "output": "1f440"
  },
  {
    "name": "brain",
    "category": "people",
    "shortname": ":brain:",
    "keyWords": [
      "intelligent"
    ],
    "output": "1f9e0"
  },
  {
    "name": "bone",
    "category": "people",
    "shortname": ":bone:",
    "keyWords": [
      ""
    ],
    "output": "1f9b4"
  },
  {
    "name": "tooth",
    "category": "people",
    "shortname": ":tooth:",
    "keyWords": [
      ""
    ],
    "output": "1f9b7"
  },
  {
    "name": "speaking head",
    "category": "people",
    "shortname": ":speaking_head:",
    "keyWords": [
      "face",
      "head",
      "silhouette",
      "speak",
      "speaking"
    ],
    "output": "1f5e3"
  },
  {
    "name": "bust in silhouette",
    "category": "people",
    "shortname": ":bust_in_silhouette:",
    "keyWords": [
      "bust",
      "silhouette"
    ],
    "output": "1f464"
  },
  {
    "name": "busts in silhouette",
    "category": "people",
    "shortname": ":busts_in_silhouette:",
    "keyWords": [
      "bust",
      "silhouette"
    ],
    "output": "1f465"
  },
  {
    "name": "baby",
    "category": "people",
    "shortname": ":baby:",
    "keyWords": [
      "baby",
      "young"
    ],
    "output": "1f476"
  },
  {
    "name": "baby: light skin tone",
    "category": "people",
    "shortname": ":baby_tone1:",
    "keyWords": [
      "baby",
      "light skin tone",
      "young"
    ],
    "output": "1f476-1f3fb"
  },
  {
    "name": "baby: medium-light skin tone",
    "category": "people",
    "shortname": ":baby_tone2:",
    "keyWords": [
      "baby",
      "medium-light skin tone",
      "young"
    ],
    "output": "1f476-1f3fc"
  },
  {
    "name": "baby: medium skin tone",
    "category": "people",
    "shortname": ":baby_tone3:",
    "keyWords": [
      "baby",
      "medium skin tone",
      "young"
    ],
    "output": "1f476-1f3fd"
  },
  {
    "name": "baby: medium-dark skin tone",
    "category": "people",
    "shortname": ":baby_tone4:",
    "keyWords": [
      "baby",
      "medium-dark skin tone",
      "young"
    ],
    "output": "1f476-1f3fe"
  },
  {
    "name": "baby: dark skin tone",
    "category": "people",
    "shortname": ":baby_tone5:",
    "keyWords": [
      "baby",
      "dark skin tone",
      "young"
    ],
    "output": "1f476-1f3ff"
  },
  {
    "name": "girl",
    "category": "people",
    "shortname": ":girl:",
    "keyWords": [
      "Virgo",
      "young",
      "zodiac"
    ],
    "output": "1f467"
  },
  {
    "name": "girl: light skin tone",
    "category": "people",
    "shortname": ":girl_tone1:",
    "keyWords": [
      "Virgo",
      "light skin tone",
      "young",
      "zodiac"
    ],
    "output": "1f467-1f3fb"
  },
  {
    "name": "girl: medium-light skin tone",
    "category": "people",
    "shortname": ":girl_tone2:",
    "keyWords": [
      "Virgo",
      "medium-light skin tone",
      "young",
      "zodiac"
    ],
    "output": "1f467-1f3fc"
  },
  {
    "name": "girl: medium skin tone",
    "category": "people",
    "shortname": ":girl_tone3:",
    "keyWords": [
      "Virgo",
      "medium skin tone",
      "young",
      "zodiac"
    ],
    "output": "1f467-1f3fd"
  },
  {
    "name": "girl: medium-dark skin tone",
    "category": "people",
    "shortname": ":girl_tone4:",
    "keyWords": [
      "Virgo",
      "medium-dark skin tone",
      "young",
      "zodiac"
    ],
    "output": "1f467-1f3fe"
  },
  {
    "name": "girl: dark skin tone",
    "category": "people",
    "shortname": ":girl_tone5:",
    "keyWords": [
      "Virgo",
      "dark skin tone",
      "young",
      "zodiac"
    ],
    "output": "1f467-1f3ff"
  },
  {
    "name": "child",
    "category": "people",
    "shortname": ":child:",
    "keyWords": [
      ""
    ],
    "output": "1f9d2"
  },
  {
    "name": "child: light skin tone",
    "category": "people",
    "shortname": ":child_tone1:",
    "keyWords": [
      "gender-neutral",
      "light skin tone",
      "young"
    ],
    "output": "1f9d2-1f3fb"
  },
  {
    "name": "child: medium-light skin tone",
    "category": "people",
    "shortname": ":child_tone2:",
    "keyWords": [
      "gender-neutral",
      "medium-light skin tone",
      "young"
    ],
    "output": "1f9d2-1f3fc"
  },
  {
    "name": "child: medium skin tone",
    "category": "people",
    "shortname": ":child_tone3:",
    "keyWords": [
      "gender-neutral",
      "medium skin tone",
      "young"
    ],
    "output": "1f9d2-1f3fd"
  },
  {
    "name": "child: medium-dark skin tone",
    "category": "people",
    "shortname": ":child_tone4:",
    "keyWords": [
      "gender-neutral",
      "medium-dark skin tone",
      "young"
    ],
    "output": "1f9d2-1f3fe"
  },
  {
    "name": "child: dark skin tone",
    "category": "people",
    "shortname": ":child_tone5:",
    "keyWords": [
      "dark skin tone",
      "gender-neutral",
      "young"
    ],
    "output": "1f9d2-1f3ff"
  },
  {
    "name": "boy",
    "category": "people",
    "shortname": ":boy:",
    "keyWords": [
      "boy",
      "young"
    ],
    "output": "1f466"
  },
  {
    "name": "boy: light skin tone",
    "category": "people",
    "shortname": ":boy_tone1:",
    "keyWords": [
      "boy",
      "light skin tone",
      "young"
    ],
    "output": "1f466-1f3fb"
  },
  {
    "name": "boy: medium-light skin tone",
    "category": "people",
    "shortname": ":boy_tone2:",
    "keyWords": [
      "boy",
      "medium-light skin tone",
      "young"
    ],
    "output": "1f466-1f3fc"
  },
  {
    "name": "boy: medium skin tone",
    "category": "people",
    "shortname": ":boy_tone3:",
    "keyWords": [
      "boy",
      "medium skin tone",
      "young"
    ],
    "output": "1f466-1f3fd"
  },
  {
    "name": "boy: medium-dark skin tone",
    "category": "people",
    "shortname": ":boy_tone4:",
    "keyWords": [
      "boy",
      "medium-dark skin tone",
      "young"
    ],
    "output": "1f466-1f3fe"
  },
  {
    "name": "boy: dark skin tone",
    "category": "people",
    "shortname": ":boy_tone5:",
    "keyWords": [
      "boy",
      "dark skin tone",
      "young"
    ],
    "output": "1f466-1f3ff"
  },
  {
    "name": "woman",
    "category": "people",
    "shortname": ":woman:",
    "keyWords": [
      "woman"
    ],
    "output": "1f469"
  },
  {
    "name": "woman: light skin tone",
    "category": "people",
    "shortname": ":woman_tone1:",
    "keyWords": [
      "light skin tone",
      "woman"
    ],
    "output": "1f469-1f3fb"
  },
  {
    "name": "woman: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f469-1f3fc"
  },
  {
    "name": "woman: medium skin tone",
    "category": "people",
    "shortname": ":woman_tone3:",
    "keyWords": [
      "medium skin tone",
      "woman"
    ],
    "output": "1f469-1f3fd"
  },
  {
    "name": "woman: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f469-1f3fe"
  },
  {
    "name": "woman: dark skin tone",
    "category": "people",
    "shortname": ":woman_tone5:",
    "keyWords": [
      "dark skin tone",
      "woman"
    ],
    "output": "1f469-1f3ff"
  },
  {
    "name": "adult",
    "category": "people",
    "shortname": ":adult:",
    "keyWords": [
      ""
    ],
    "output": "1f9d1"
  },
  {
    "name": "adult: light skin tone",
    "category": "people",
    "shortname": ":adult_tone1:",
    "keyWords": [
      "gender-neutral",
      "light skin tone"
    ],
    "output": "1f9d1-1f3fb"
  },
  {
    "name": "adult: medium-light skin tone",
    "category": "people",
    "shortname": ":adult_tone2:",
    "keyWords": [
      "gender-neutral",
      "medium-light skin tone"
    ],
    "output": "1f9d1-1f3fc"
  },
  {
    "name": "adult: medium skin tone",
    "category": "people",
    "shortname": ":adult_tone3:",
    "keyWords": [
      "gender-neutral",
      "medium skin tone"
    ],
    "output": "1f9d1-1f3fd"
  },
  {
    "name": "adult: medium-dark skin tone",
    "category": "people",
    "shortname": ":adult_tone4:",
    "keyWords": [
      "gender-neutral",
      "medium-dark skin tone"
    ],
    "output": "1f9d1-1f3fe"
  },
  {
    "name": "adult: dark skin tone",
    "category": "people",
    "shortname": ":adult_tone5:",
    "keyWords": [
      "dark skin tone",
      "gender-neutral"
    ],
    "output": "1f9d1-1f3ff"
  },
  {
    "name": "man",
    "category": "people",
    "shortname": ":man:",
    "keyWords": [
      "man"
    ],
    "output": "1f468"
  },
  {
    "name": "man: light skin tone",
    "category": "people",
    "shortname": ":man_tone1:",
    "keyWords": [
      "light skin tone",
      "man"
    ],
    "output": "1f468-1f3fb"
  },
  {
    "name": "man: medium-light skin tone",
    "category": "people",
    "shortname": ":man_tone2:",
    "keyWords": [
      "man",
      "medium-light skin tone"
    ],
    "output": "1f468-1f3fc"
  },
  {
    "name": "man: medium skin tone",
    "category": "people",
    "shortname": ":man_tone3:",
    "keyWords": [
      "man",
      "medium skin tone"
    ],
    "output": "1f468-1f3fd"
  },
  {
    "name": "man: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_tone4:",
    "keyWords": [
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f468-1f3fe"
  },
  {
    "name": "man: dark skin tone",
    "category": "people",
    "shortname": ":man_tone5:",
    "keyWords": [
      "dark skin tone",
      "man"
    ],
    "output": "1f468-1f3ff"
  },
  {
    "name": "blond-haired person",
    "category": "people",
    "shortname": ":blond_haired_person:",
    "keyWords": [
      "blond"
    ],
    "output": "1f471"
  },
  {
    "name": "blond-haired person: light skin tone",
    "category": "people",
    "shortname": ":blond_haired_person_tone1:",
    "keyWords": [
      "blond",
      "light skin tone"
    ],
    "output": "1f471-1f3fb"
  },
  {
    "name": "blond-haired person: medium-light skin tone",
    "category": "people",
    "shortname": ":blond_haired_person_tone2:",
    "keyWords": [
      "blond",
      "medium-light skin tone"
    ],
    "output": "1f471-1f3fc"
  },
  {
    "name": "blond-haired person: medium skin tone",
    "category": "people",
    "shortname": ":blond_haired_person_tone3:",
    "keyWords": [
      "blond",
      "medium skin tone"
    ],
    "output": "1f471-1f3fd"
  },
  {
    "name": "blond-haired person: medium-dark skin tone",
    "category": "people",
    "shortname": ":blond_haired_person_tone4:",
    "keyWords": [
      "blond",
      "medium-dark skin tone"
    ],
    "output": "1f471-1f3fe"
  },
  {
    "name": "blond-haired person: dark skin tone",
    "category": "people",
    "shortname": ":blond_haired_person_tone5:",
    "keyWords": [
      "blond",
      "dark skin tone"
    ],
    "output": "1f471-1f3ff"
  },
  {
    "name": "blond-haired woman",
    "category": "people",
    "shortname": ":blond-haired_woman:",
    "keyWords": [
      "blonde",
      "woman"
    ],
    "output": "1f471-200d-2640-fe0f"
  },
  {
    "name": "blond-haired woman: light skin tone",
    "category": "people",
    "shortname": ":blond-haired_woman_tone1:",
    "keyWords": [
      "blonde",
      "light skin tone",
      "woman"
    ],
    "output": "1f471-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "blond-haired woman: medium-light skin tone",
    "category": "people",
    "shortname": ":blond-haired_woman_tone2:",
    "keyWords": [
      "blonde",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f471-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "blond-haired woman: medium skin tone",
    "category": "people",
    "shortname": ":blond-haired_woman_tone3:",
    "keyWords": [
      "blonde",
      "medium skin tone",
      "woman"
    ],
    "output": "1f471-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "blond-haired woman: medium-dark skin tone",
    "category": "people",
    "shortname": ":blond-haired_woman_tone4:",
    "keyWords": [
      "blonde",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f471-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "blond-haired woman: dark skin tone",
    "category": "people",
    "shortname": ":blond-haired_woman_tone5:",
    "keyWords": [
      "blonde",
      "dark skin tone",
      "woman"
    ],
    "output": "1f471-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "blond-haired man",
    "category": "people",
    "shortname": ":blond-haired_man:",
    "keyWords": [
      "blond",
      "man"
    ],
    "output": "1f471-200d-2642-fe0f"
  },
  {
    "name": "blond-haired man: light skin tone",
    "category": "people",
    "shortname": ":blond-haired_man_tone1:",
    "keyWords": [
      "blond",
      "light skin tone",
      "man"
    ],
    "output": "1f471-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "blond-haired man: medium-light skin tone",
    "category": "people",
    "shortname": ":blond-haired_man_tone2:",
    "keyWords": [
      "blond",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f471-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "blond-haired man: medium skin tone",
    "category": "people",
    "shortname": ":blond-haired_man_tone3:",
    "keyWords": [
      "blond",
      "man",
      "medium skin tone"
    ],
    "output": "1f471-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "blond-haired man: medium-dark skin tone",
    "category": "people",
    "shortname": ":blond-haired_man_tone4:",
    "keyWords": [
      "blond",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f471-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "blond-haired man: dark skin tone",
    "category": "people",
    "shortname": ":blond-haired_man_tone5:",
    "keyWords": [
      "blond",
      "dark skin tone",
      "man"
    ],
    "output": "1f471-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "woman, red haired",
    "category": "people",
    "shortname": ":woman_red_haired:",
    "keyWords": [
      ""
    ],
    "output": "1f469-200d-1f9b0"
  },
  {
    "name": "woman, red haired: light skin tone",
    "category": "people",
    "shortname": ":woman_red_haired_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fb-200d-1f9b0"
  },
  {
    "name": "woman, red haired: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_red_haired_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fc-200d-1f9b0"
  },
  {
    "name": "woman, red haired: medium skin tone",
    "category": "people",
    "shortname": ":woman_red_haired_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fd-200d-1f9b0"
  },
  {
    "name": "woman, red haired: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_red_haired_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fe-200d-1f9b0"
  },
  {
    "name": "woman, red haired: dark skin tone",
    "category": "people",
    "shortname": ":woman_red_haired_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3ff-200d-1f9b0"
  },
  {
    "name": "man, red haired",
    "category": "people",
    "shortname": ":man_red_haired:",
    "keyWords": [
      ""
    ],
    "output": "1f468-200d-1f9b0"
  },
  {
    "name": "man, red haired: light skin tone",
    "category": "people",
    "shortname": ":man_red_haired_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fb-200d-1f9b0"
  },
  {
    "name": "man, red haired: medium-light skin tone",
    "category": "people",
    "shortname": ":man_red_haired_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fc-200d-1f9b0"
  },
  {
    "name": "man, red haired: medium skin tone",
    "category": "people",
    "shortname": ":man_red_haired_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fd-200d-1f9b0"
  },
  {
    "name": "man, red haired: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_red_haired_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fe-200d-1f9b0"
  },
  {
    "name": "man, red haired: dark skin tone",
    "category": "people",
    "shortname": ":man_red_haired_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3ff-200d-1f9b0"
  },
  {
    "name": "woman, curly haired",
    "category": "people",
    "shortname": ":woman_curly_haired:",
    "keyWords": [
      ""
    ],
    "output": "1f469-200d-1f9b1"
  },
  {
    "name": "woman, curly haired: light skin tone",
    "category": "people",
    "shortname": ":woman_curly_haired_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fb-200d-1f9b1"
  },
  {
    "name": "woman, curly haired: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_curly_haired_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fc-200d-1f9b1"
  },
  {
    "name": "woman, curly haired: medium skin tone",
    "category": "people",
    "shortname": ":woman_curly_haired_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fd-200d-1f9b1"
  },
  {
    "name": "woman, curly haired: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_curly_haired_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fe-200d-1f9b1"
  },
  {
    "name": "woman, curly haired: dark skin tone",
    "category": "people",
    "shortname": ":woman_curly_haired_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3ff-200d-1f9b1"
  },
  {
    "name": "man, curly haired",
    "category": "people",
    "shortname": ":man_curly_haired:",
    "keyWords": [
      ""
    ],
    "output": "1f468-200d-1f9b1"
  },
  {
    "name": "man, curly haired: light skin tone",
    "category": "people",
    "shortname": ":man_curly_haired_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fb-200d-1f9b1"
  },
  {
    "name": "man, curly haired: medium-light skin tone",
    "category": "people",
    "shortname": ":man_curly_haired_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fc-200d-1f9b1"
  },
  {
    "name": "man, curly haired: medium skin tone",
    "category": "people",
    "shortname": ":man_curly_haired_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fd-200d-1f9b1"
  },
  {
    "name": "man, curly haired: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_curly_haired_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fe-200d-1f9b1"
  },
  {
    "name": "man, curly haired: dark skin tone",
    "category": "people",
    "shortname": ":man_curly_haired_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3ff-200d-1f9b1"
  },
  {
    "name": "woman, white haired",
    "category": "people",
    "shortname": ":woman_white_haired:",
    "keyWords": [
      ""
    ],
    "output": "1f469-200d-1f9b3"
  },
  {
    "name": "woman, white haired: light skin tone",
    "category": "people",
    "shortname": ":woman_white_haired_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fb-200d-1f9b3"
  },
  {
    "name": "woman, white haired: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_white_haired_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fc-200d-1f9b3"
  },
  {
    "name": "woman, white haired: medium skin tone",
    "category": "people",
    "shortname": ":woman_white_haired_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fd-200d-1f9b3"
  },
  {
    "name": "woman, white haired: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_white_haired_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fe-200d-1f9b3"
  },
  {
    "name": "woman, white haired: dark skin tone",
    "category": "people",
    "shortname": ":woman_white_haired_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3ff-200d-1f9b3"
  },
  {
    "name": "man, white haired",
    "category": "people",
    "shortname": ":man_white_haired:",
    "keyWords": [
      ""
    ],
    "output": "1f468-200d-1f9b3"
  },
  {
    "name": "man, white haired: light skin tone",
    "category": "people",
    "shortname": ":man_white_haired_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fb-200d-1f9b3"
  },
  {
    "name": "man, white haired: medium-light skin tone",
    "category": "people",
    "shortname": ":man_white_haired_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fc-200d-1f9b3"
  },
  {
    "name": "man, white haired: medium skin tone",
    "category": "people",
    "shortname": ":man_white_haired_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fd-200d-1f9b3"
  },
  {
    "name": "man, white haired: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_white_haired_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fe-200d-1f9b3"
  },
  {
    "name": "man, white haired: dark skin tone",
    "category": "people",
    "shortname": ":man_white_haired_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3ff-200d-1f9b3"
  },
  {
    "name": "woman, bald",
    "category": "people",
    "shortname": ":woman_bald:",
    "keyWords": [
      ""
    ],
    "output": "1f469-200d-1f9b2"
  },
  {
    "name": "woman, bald: light skin tone",
    "category": "people",
    "shortname": ":woman_bald_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fb-200d-1f9b2"
  },
  {
    "name": "woman, bald: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_bald_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fc-200d-1f9b2"
  },
  {
    "name": "woman, bald: medium skin tone",
    "category": "people",
    "shortname": ":woman_bald_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fd-200d-1f9b2"
  },
  {
    "name": "woman, bald: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_bald_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3fe-200d-1f9b2"
  },
  {
    "name": "woman, bald: dark skin tone",
    "category": "people",
    "shortname": ":woman_bald_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f469-1f3ff-200d-1f9b2"
  },
  {
    "name": "man, bald",
    "category": "people",
    "shortname": ":man_bald:",
    "keyWords": [
      ""
    ],
    "output": "1f468-200d-1f9b2"
  },
  {
    "name": "man, bald: light skin tone",
    "category": "people",
    "shortname": ":man_bald_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fb-200d-1f9b2"
  },
  {
    "name": "man, bald: medium-light skin tone",
    "category": "people",
    "shortname": ":man_bald_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fc-200d-1f9b2"
  },
  {
    "name": "man, bald: medium skin tone",
    "category": "people",
    "shortname": ":man_bald_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fd-200d-1f9b2"
  },
  {
    "name": "man, bald: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_bald_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3fe-200d-1f9b2"
  },
  {
    "name": "man, bald: dark skin tone",
    "category": "people",
    "shortname": ":man_bald_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f468-1f3ff-200d-1f9b2"
  },
  {
    "name": "bearded person",
    "category": "people",
    "shortname": ":bearded_person:",
    "keyWords": [
      ""
    ],
    "output": "1f9d4"
  },
  {
    "name": "bearded person: light skin tone",
    "category": "people",
    "shortname": ":bearded_person_tone1:",
    "keyWords": [
      "beard",
      "light skin tone"
    ],
    "output": "1f9d4-1f3fb"
  },
  {
    "name": "bearded person: medium-light skin tone",
    "category": "people",
    "shortname": ":bearded_person_tone2:",
    "keyWords": [
      "beard",
      "medium-light skin tone"
    ],
    "output": "1f9d4-1f3fc"
  },
  {
    "name": "bearded person: medium skin tone",
    "category": "people",
    "shortname": ":bearded_person_tone3:",
    "keyWords": [
      "beard",
      "medium skin tone"
    ],
    "output": "1f9d4-1f3fd"
  },
  {
    "name": "bearded person: medium-dark skin tone",
    "category": "people",
    "shortname": ":bearded_person_tone4:",
    "keyWords": [
      "beard",
      "medium-dark skin tone"
    ],
    "output": "1f9d4-1f3fe"
  },
  {
    "name": "bearded person: dark skin tone",
    "category": "people",
    "shortname": ":bearded_person_tone5:",
    "keyWords": [
      "beard",
      "dark skin tone"
    ],
    "output": "1f9d4-1f3ff"
  },
  {
    "name": "old woman",
    "category": "people",
    "shortname": ":older_woman:",
    "keyWords": [
      "old",
      "woman"
    ],
    "output": "1f475"
  },
  {
    "name": "old woman: light skin tone",
    "category": "people",
    "shortname": ":older_woman_tone1:",
    "keyWords": [
      "light skin tone",
      "old",
      "woman"
    ],
    "output": "1f475-1f3fb"
  },
  {
    "name": "old woman: medium-light skin tone",
    "category": "people",
    "shortname": ":older_woman_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "old",
      "woman"
    ],
    "output": "1f475-1f3fc"
  },
  {
    "name": "old woman: medium skin tone",
    "category": "people",
    "shortname": ":older_woman_tone3:",
    "keyWords": [
      "medium skin tone",
      "old",
      "woman"
    ],
    "output": "1f475-1f3fd"
  },
  {
    "name": "old woman: medium-dark skin tone",
    "category": "people",
    "shortname": ":older_woman_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "old",
      "woman"
    ],
    "output": "1f475-1f3fe"
  },
  {
    "name": "old woman: dark skin tone",
    "category": "people",
    "shortname": ":older_woman_tone5:",
    "keyWords": [
      "dark skin tone",
      "old",
      "woman"
    ],
    "output": "1f475-1f3ff"
  },
  {
    "name": "older adult",
    "category": "people",
    "shortname": ":older_adult:",
    "keyWords": [
      ""
    ],
    "output": "1f9d3"
  },
  {
    "name": "older adult: light skin tone",
    "category": "people",
    "shortname": ":older_adult_tone1:",
    "keyWords": [
      "gender-neutral",
      "light skin tone",
      "old"
    ],
    "output": "1f9d3-1f3fb"
  },
  {
    "name": "older adult: medium-light skin tone",
    "category": "people",
    "shortname": ":older_adult_tone2:",
    "keyWords": [
      "gender-neutral",
      "medium-light skin tone",
      "old"
    ],
    "output": "1f9d3-1f3fc"
  },
  {
    "name": "older adult: medium skin tone",
    "category": "people",
    "shortname": ":older_adult_tone3:",
    "keyWords": [
      "gender-neutral",
      "medium skin tone",
      "old"
    ],
    "output": "1f9d3-1f3fd"
  },
  {
    "name": "older adult: medium-dark skin tone",
    "category": "people",
    "shortname": ":older_adult_tone4:",
    "keyWords": [
      "gender-neutral",
      "medium-dark skin tone",
      "old"
    ],
    "output": "1f9d3-1f3fe"
  },
  {
    "name": "older adult: dark skin tone",
    "category": "people",
    "shortname": ":older_adult_tone5:",
    "keyWords": [
      "dark skin tone",
      "gender-neutral",
      "old"
    ],
    "output": "1f9d3-1f3ff"
  },
  {
    "name": "old man",
    "category": "people",
    "shortname": ":older_man:",
    "keyWords": [
      "man",
      "old"
    ],
    "output": "1f474"
  },
  {
    "name": "old man: light skin tone",
    "category": "people",
    "shortname": ":older_man_tone1:",
    "keyWords": [
      "light skin tone",
      "man",
      "old"
    ],
    "output": "1f474-1f3fb"
  },
  {
    "name": "old man: medium-light skin tone",
    "category": "people",
    "shortname": ":older_man_tone2:",
    "keyWords": [
      "man",
      "medium-light skin tone",
      "old"
    ],
    "output": "1f474-1f3fc"
  },
  {
    "name": "old man: medium skin tone",
    "category": "people",
    "shortname": ":older_man_tone3:",
    "keyWords": [
      "man",
      "medium skin tone",
      "old"
    ],
    "output": "1f474-1f3fd"
  },
  {
    "name": "old man: medium-dark skin tone",
    "category": "people",
    "shortname": ":older_man_tone4:",
    "keyWords": [
      "man",
      "medium-dark skin tone",
      "old"
    ],
    "output": "1f474-1f3fe"
  },
  {
    "name": "old man: dark skin tone",
    "category": "people",
    "shortname": ":older_man_tone5:",
    "keyWords": [
      "dark skin tone",
      "man",
      "old"
    ],
    "output": "1f474-1f3ff"
  },
  {
    "name": "man with Chinese cap",
    "category": "people",
    "shortname": ":man_with_chinese_cap:",
    "keyWords": [
      "gua pi mao",
      "hat",
      "man"
    ],
    "output": "1f472"
  },
  {
    "name": "man with Chinese cap: light skin tone",
    "category": "people",
    "shortname": ":man_with_chinese_cap_tone1:",
    "keyWords": [
      "gua pi mao",
      "hat",
      "light skin tone",
      "man"
    ],
    "output": "1f472-1f3fb"
  },
  {
    "name": "man with Chinese cap: medium-light skin tone",
    "category": "people",
    "shortname": ":man_with_chinese_cap_tone2:",
    "keyWords": [
      "gua pi mao",
      "hat",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f472-1f3fc"
  },
  {
    "name": "man with Chinese cap: medium skin tone",
    "category": "people",
    "shortname": ":man_with_chinese_cap_tone3:",
    "keyWords": [
      "gua pi mao",
      "hat",
      "man",
      "medium skin tone"
    ],
    "output": "1f472-1f3fd"
  },
  {
    "name": "man with Chinese cap: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_with_chinese_cap_tone4:",
    "keyWords": [
      "gua pi mao",
      "hat",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f472-1f3fe"
  },
  {
    "name": "man with Chinese cap: dark skin tone",
    "category": "people",
    "shortname": ":man_with_chinese_cap_tone5:",
    "keyWords": [
      "dark skin tone",
      "gua pi mao",
      "hat",
      "man"
    ],
    "output": "1f472-1f3ff"
  },
  {
    "name": "person wearing turban",
    "category": "people",
    "shortname": ":person_wearing_turban:",
    "keyWords": [
      "turban"
    ],
    "output": "1f473"
  },
  {
    "name": "person wearing turban: light skin tone",
    "category": "people",
    "shortname": ":person_wearing_turban_tone1:",
    "keyWords": [
      "light skin tone",
      "turban"
    ],
    "output": "1f473-1f3fb"
  },
  {
    "name": "person wearing turban: medium-light skin tone",
    "category": "people",
    "shortname": ":person_wearing_turban_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "turban"
    ],
    "output": "1f473-1f3fc"
  },
  {
    "name": "person wearing turban: medium skin tone",
    "category": "people",
    "shortname": ":person_wearing_turban_tone3:",
    "keyWords": [
      "medium skin tone",
      "turban"
    ],
    "output": "1f473-1f3fd"
  },
  {
    "name": "person wearing turban: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_wearing_turban_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "turban"
    ],
    "output": "1f473-1f3fe"
  },
  {
    "name": "person wearing turban: dark skin tone",
    "category": "people",
    "shortname": ":person_wearing_turban_tone5:",
    "keyWords": [
      "dark skin tone",
      "turban"
    ],
    "output": "1f473-1f3ff"
  },
  {
    "name": "woman wearing turban",
    "category": "people",
    "shortname": ":woman_wearing_turban:",
    "keyWords": [
      "turban",
      "woman"
    ],
    "output": "1f473-200d-2640-fe0f"
  },
  {
    "name": "woman wearing turban: light skin tone",
    "category": "people",
    "shortname": ":woman_wearing_turban_tone1:",
    "keyWords": [
      "light skin tone",
      "turban",
      "woman"
    ],
    "output": "1f473-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman wearing turban: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_wearing_turban_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "turban",
      "woman"
    ],
    "output": "1f473-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman wearing turban: medium skin tone",
    "category": "people",
    "shortname": ":woman_wearing_turban_tone3:",
    "keyWords": [
      "medium skin tone",
      "turban",
      "woman"
    ],
    "output": "1f473-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman wearing turban: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_wearing_turban_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "turban",
      "woman"
    ],
    "output": "1f473-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman wearing turban: dark skin tone",
    "category": "people",
    "shortname": ":woman_wearing_turban_tone5:",
    "keyWords": [
      "dark skin tone",
      "turban",
      "woman"
    ],
    "output": "1f473-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man wearing turban",
    "category": "people",
    "shortname": ":man_wearing_turban:",
    "keyWords": [
      "man",
      "turban"
    ],
    "output": "1f473-200d-2642-fe0f"
  },
  {
    "name": "man wearing turban: light skin tone",
    "category": "people",
    "shortname": ":man_wearing_turban_tone1:",
    "keyWords": [
      "light skin tone",
      "man",
      "turban"
    ],
    "output": "1f473-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man wearing turban: medium-light skin tone",
    "category": "people",
    "shortname": ":man_wearing_turban_tone2:",
    "keyWords": [
      "man",
      "medium-light skin tone",
      "turban"
    ],
    "output": "1f473-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man wearing turban: medium skin tone",
    "category": "people",
    "shortname": ":man_wearing_turban_tone3:",
    "keyWords": [
      "man",
      "medium skin tone",
      "turban"
    ],
    "output": "1f473-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man wearing turban: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_wearing_turban_tone4:",
    "keyWords": [
      "man",
      "medium-dark skin tone",
      "turban"
    ],
    "output": "1f473-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man wearing turban: dark skin tone",
    "category": "people",
    "shortname": ":man_wearing_turban_tone5:",
    "keyWords": [
      "dark skin tone",
      "man",
      "turban"
    ],
    "output": "1f473-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "woman with headscarf",
    "category": "people",
    "shortname": ":woman_with_headscarf:",
    "keyWords": [
      ""
    ],
    "output": "1f9d5"
  },
  {
    "name": "woman with headscarf: light skin tone",
    "category": "people",
    "shortname": ":woman_with_headscarf_tone1:",
    "keyWords": [
      "headscarf",
      "hijab",
      "light skin tone",
      "mantilla",
      "tichel"
    ],
    "output": "1f9d5-1f3fb"
  },
  {
    "name": "woman with headscarf: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_with_headscarf_tone2:",
    "keyWords": [
      "headscarf",
      "hijab",
      "mantilla",
      "medium-light skin tone",
      "tichel"
    ],
    "output": "1f9d5-1f3fc"
  },
  {
    "name": "woman with headscarf: medium skin tone",
    "category": "people",
    "shortname": ":woman_with_headscarf_tone3:",
    "keyWords": [
      "headscarf",
      "hijab",
      "mantilla",
      "medium skin tone",
      "tichel"
    ],
    "output": "1f9d5-1f3fd"
  },
  {
    "name": "woman with headscarf: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_with_headscarf_tone4:",
    "keyWords": [
      "headscarf",
      "hijab",
      "mantilla",
      "medium-dark skin tone",
      "tichel"
    ],
    "output": "1f9d5-1f3fe"
  },
  {
    "name": "woman with headscarf: dark skin tone",
    "category": "people",
    "shortname": ":woman_with_headscarf_tone5:",
    "keyWords": [
      "dark skin tone",
      "headscarf",
      "hijab",
      "mantilla",
      "tichel"
    ],
    "output": "1f9d5-1f3ff"
  },
  {
    "name": "police officer",
    "category": "people",
    "shortname": ":police_officer:",
    "keyWords": [
      "cop",
      "officer",
      "police"
    ],
    "output": "1f46e"
  },
  {
    "name": "police officer: light skin tone",
    "category": "people",
    "shortname": ":police_officer_tone1:",
    "keyWords": [
      "cop",
      "light skin tone",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3fb"
  },
  {
    "name": "police officer: medium-light skin tone",
    "category": "people",
    "shortname": ":police_officer_tone2:",
    "keyWords": [
      "cop",
      "medium-light skin tone",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3fc"
  },
  {
    "name": "police officer: medium skin tone",
    "category": "people",
    "shortname": ":police_officer_tone3:",
    "keyWords": [
      "cop",
      "medium skin tone",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3fd"
  },
  {
    "name": "police officer: medium-dark skin tone",
    "category": "people",
    "shortname": ":police_officer_tone4:",
    "keyWords": [
      "cop",
      "medium-dark skin tone",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3fe"
  },
  {
    "name": "police officer: dark skin tone",
    "category": "people",
    "shortname": ":police_officer_tone5:",
    "keyWords": [
      "cop",
      "dark skin tone",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3ff"
  },
  {
    "name": "woman police officer",
    "category": "people",
    "shortname": ":woman_police_officer:",
    "keyWords": [
      "cop",
      "officer",
      "police",
      "woman"
    ],
    "output": "1f46e-200d-2640-fe0f"
  },
  {
    "name": "woman police officer: light skin tone",
    "category": "people",
    "shortname": ":woman_police_officer_tone1:",
    "keyWords": [
      "cop",
      "light skin tone",
      "officer",
      "police",
      "woman"
    ],
    "output": "1f46e-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman police officer: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_police_officer_tone2:",
    "keyWords": [
      "cop",
      "medium-light skin tone",
      "officer",
      "police",
      "woman"
    ],
    "output": "1f46e-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman police officer: medium skin tone",
    "category": "people",
    "shortname": ":woman_police_officer_tone3:",
    "keyWords": [
      "cop",
      "medium skin tone",
      "officer",
      "police",
      "woman"
    ],
    "output": "1f46e-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman police officer: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_police_officer_tone4:",
    "keyWords": [
      "cop",
      "medium-dark skin tone",
      "officer",
      "police",
      "woman"
    ],
    "output": "1f46e-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman police officer: dark skin tone",
    "category": "people",
    "shortname": ":woman_police_officer_tone5:",
    "keyWords": [
      "cop",
      "dark skin tone",
      "officer",
      "police",
      "woman"
    ],
    "output": "1f46e-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man police officer",
    "category": "people",
    "shortname": ":man_police_officer:",
    "keyWords": [
      "cop",
      "man",
      "officer",
      "police"
    ],
    "output": "1f46e-200d-2642-fe0f"
  },
  {
    "name": "man police officer: light skin tone",
    "category": "people",
    "shortname": ":man_police_officer_tone1:",
    "keyWords": [
      "cop",
      "light skin tone",
      "man",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man police officer: medium-light skin tone",
    "category": "people",
    "shortname": ":man_police_officer_tone2:",
    "keyWords": [
      "cop",
      "man",
      "medium-light skin tone",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man police officer: medium skin tone",
    "category": "people",
    "shortname": ":man_police_officer_tone3:",
    "keyWords": [
      "cop",
      "man",
      "medium skin tone",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man police officer: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_police_officer_tone4:",
    "keyWords": [
      "cop",
      "man",
      "medium-dark skin tone",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man police officer: dark skin tone",
    "category": "people",
    "shortname": ":man_police_officer_tone5:",
    "keyWords": [
      "cop",
      "dark skin tone",
      "man",
      "officer",
      "police"
    ],
    "output": "1f46e-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "construction worker",
    "category": "people",
    "shortname": ":construction_worker:",
    "keyWords": [
      "construction",
      "hat",
      "worker"
    ],
    "output": "1f477"
  },
  {
    "name": "construction worker: light skin tone",
    "category": "people",
    "shortname": ":construction_worker_tone1:",
    "keyWords": [
      "construction",
      "hat",
      "light skin tone",
      "worker"
    ],
    "output": "1f477-1f3fb"
  },
  {
    "name": "construction worker: medium-light skin tone",
    "category": "people",
    "shortname": ":construction_worker_tone2:",
    "keyWords": [
      "construction",
      "hat",
      "medium-light skin tone",
      "worker"
    ],
    "output": "1f477-1f3fc"
  },
  {
    "name": "construction worker: medium skin tone",
    "category": "people",
    "shortname": ":construction_worker_tone3:",
    "keyWords": [
      "construction",
      "hat",
      "medium skin tone",
      "worker"
    ],
    "output": "1f477-1f3fd"
  },
  {
    "name": "construction worker: medium-dark skin tone",
    "category": "people",
    "shortname": ":construction_worker_tone4:",
    "keyWords": [
      "construction",
      "hat",
      "medium-dark skin tone",
      "worker"
    ],
    "output": "1f477-1f3fe"
  },
  {
    "name": "construction worker: dark skin tone",
    "category": "people",
    "shortname": ":construction_worker_tone5:",
    "keyWords": [
      "construction",
      "dark skin tone",
      "hat",
      "worker"
    ],
    "output": "1f477-1f3ff"
  },
  {
    "name": "woman construction worker",
    "category": "people",
    "shortname": ":woman_construction_worker:",
    "keyWords": [
      "construction",
      "woman",
      "worker"
    ],
    "output": "1f477-200d-2640-fe0f"
  },
  {
    "name": "woman construction worker: light skin tone",
    "category": "people",
    "shortname": ":woman_construction_worker_tone1:",
    "keyWords": [
      "construction",
      "light skin tone",
      "woman",
      "worker"
    ],
    "output": "1f477-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman construction worker: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_construction_worker_tone2:",
    "keyWords": [
      "construction",
      "medium-light skin tone",
      "woman",
      "worker"
    ],
    "output": "1f477-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman construction worker: medium skin tone",
    "category": "people",
    "shortname": ":woman_construction_worker_tone3:",
    "keyWords": [
      "construction",
      "medium skin tone",
      "woman",
      "worker"
    ],
    "output": "1f477-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman construction worker: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_construction_worker_tone4:",
    "keyWords": [
      "construction",
      "medium-dark skin tone",
      "woman",
      "worker"
    ],
    "output": "1f477-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman construction worker: dark skin tone",
    "category": "people",
    "shortname": ":woman_construction_worker_tone5:",
    "keyWords": [
      "construction",
      "dark skin tone",
      "woman",
      "worker"
    ],
    "output": "1f477-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man construction worker",
    "category": "people",
    "shortname": ":man_construction_worker:",
    "keyWords": [
      "construction",
      "man",
      "worker"
    ],
    "output": "1f477-200d-2642-fe0f"
  },
  {
    "name": "man construction worker: light skin tone",
    "category": "people",
    "shortname": ":man_construction_worker_tone1:",
    "keyWords": [
      "construction",
      "light skin tone",
      "man",
      "worker"
    ],
    "output": "1f477-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man construction worker: medium-light skin tone",
    "category": "people",
    "shortname": ":man_construction_worker_tone2:",
    "keyWords": [
      "construction",
      "man",
      "medium-light skin tone",
      "worker"
    ],
    "output": "1f477-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man construction worker: medium skin tone",
    "category": "people",
    "shortname": ":man_construction_worker_tone3:",
    "keyWords": [
      "construction",
      "man",
      "medium skin tone",
      "worker"
    ],
    "output": "1f477-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man construction worker: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_construction_worker_tone4:",
    "keyWords": [
      "construction",
      "man",
      "medium-dark skin tone",
      "worker"
    ],
    "output": "1f477-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man construction worker: dark skin tone",
    "category": "people",
    "shortname": ":man_construction_worker_tone5:",
    "keyWords": [
      "construction",
      "dark skin tone",
      "man",
      "worker"
    ],
    "output": "1f477-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "guard",
    "category": "people",
    "shortname": ":guard:",
    "keyWords": [
      "guard"
    ],
    "output": "1f482"
  },
  {
    "name": "guard: light skin tone",
    "category": "people",
    "shortname": ":guard_tone1:",
    "keyWords": [
      "guard",
      "light skin tone"
    ],
    "output": "1f482-1f3fb"
  },
  {
    "name": "guard: medium-light skin tone",
    "category": "people",
    "shortname": ":guard_tone2:",
    "keyWords": [
      "guard",
      "medium-light skin tone"
    ],
    "output": "1f482-1f3fc"
  },
  {
    "name": "guard: medium skin tone",
    "category": "people",
    "shortname": ":guard_tone3:",
    "keyWords": [
      "guard",
      "medium skin tone"
    ],
    "output": "1f482-1f3fd"
  },
  {
    "name": "guard: medium-dark skin tone",
    "category": "people",
    "shortname": ":guard_tone4:",
    "keyWords": [
      "guard",
      "medium-dark skin tone"
    ],
    "output": "1f482-1f3fe"
  },
  {
    "name": "guard: dark skin tone",
    "category": "people",
    "shortname": ":guard_tone5:",
    "keyWords": [
      "dark skin tone",
      "guard"
    ],
    "output": "1f482-1f3ff"
  },
  {
    "name": "woman guard",
    "category": "people",
    "shortname": ":woman_guard:",
    "keyWords": [
      "guard",
      "woman"
    ],
    "output": "1f482-200d-2640-fe0f"
  },
  {
    "name": "woman guard: light skin tone",
    "category": "people",
    "shortname": ":woman_guard_tone1:",
    "keyWords": [
      "guard",
      "light skin tone",
      "woman"
    ],
    "output": "1f482-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman guard: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_guard_tone2:",
    "keyWords": [
      "guard",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f482-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman guard: medium skin tone",
    "category": "people",
    "shortname": ":woman_guard_tone3:",
    "keyWords": [
      "guard",
      "medium skin tone",
      "woman"
    ],
    "output": "1f482-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman guard: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_guard_tone4:",
    "keyWords": [
      "guard",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f482-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman guard: dark skin tone",
    "category": "people",
    "shortname": ":woman_guard_tone5:",
    "keyWords": [
      "dark skin tone",
      "guard",
      "woman"
    ],
    "output": "1f482-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man guard",
    "category": "people",
    "shortname": ":man_guard:",
    "keyWords": [
      "guard",
      "man"
    ],
    "output": "1f482-200d-2642-fe0f"
  },
  {
    "name": "man guard: light skin tone",
    "category": "people",
    "shortname": ":man_guard_tone1:",
    "keyWords": [
      "guard",
      "light skin tone",
      "man"
    ],
    "output": "1f482-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man guard: medium-light skin tone",
    "category": "people",
    "shortname": ":man_guard_tone2:",
    "keyWords": [
      "guard",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f482-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man guard: medium skin tone",
    "category": "people",
    "shortname": ":man_guard_tone3:",
    "keyWords": [
      "guard",
      "man",
      "medium skin tone"
    ],
    "output": "1f482-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man guard: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_guard_tone4:",
    "keyWords": [
      "guard",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f482-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man guard: dark skin tone",
    "category": "people",
    "shortname": ":man_guard_tone5:",
    "keyWords": [
      "dark skin tone",
      "guard",
      "man"
    ],
    "output": "1f482-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "detective",
    "category": "people",
    "shortname": ":detective:",
    "keyWords": [
      "detective",
      "sleuth",
      "spy"
    ],
    "output": "1f575"
  },
  {
    "name": "detective: light skin tone",
    "category": "people",
    "shortname": ":detective_tone1:",
    "keyWords": [
      "detective",
      "light skin tone",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3fb"
  },
  {
    "name": "detective: medium-light skin tone",
    "category": "people",
    "shortname": ":detective_tone2:",
    "keyWords": [
      "detective",
      "medium-light skin tone",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3fc"
  },
  {
    "name": "detective: medium skin tone",
    "category": "people",
    "shortname": ":detective_tone3:",
    "keyWords": [
      "detective",
      "medium skin tone",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3fd"
  },
  {
    "name": "detective: medium-dark skin tone",
    "category": "people",
    "shortname": ":detective_tone4:",
    "keyWords": [
      "detective",
      "medium-dark skin tone",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3fe"
  },
  {
    "name": "detective: dark skin tone",
    "category": "people",
    "shortname": ":detective_tone5:",
    "keyWords": [
      "dark skin tone",
      "detective",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3ff"
  },
  {
    "name": "woman detective",
    "category": "people",
    "shortname": ":woman_detective:",
    "keyWords": [
      "detective",
      "sleuth",
      "spy",
      "woman"
    ],
    "output": "1f575-fe0f-200d-2640-fe0f"
  },
  {
    "name": "woman detective: light skin tone",
    "category": "people",
    "shortname": ":woman_detective_tone1:",
    "keyWords": [
      "detective",
      "light skin tone",
      "sleuth",
      "spy",
      "woman"
    ],
    "output": "1f575-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman detective: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_detective_tone2:",
    "keyWords": [
      "detective",
      "medium-light skin tone",
      "sleuth",
      "spy",
      "woman"
    ],
    "output": "1f575-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman detective: medium skin tone",
    "category": "people",
    "shortname": ":woman_detective_tone3:",
    "keyWords": [
      "detective",
      "medium skin tone",
      "sleuth",
      "spy",
      "woman"
    ],
    "output": "1f575-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman detective: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_detective_tone4:",
    "keyWords": [
      "detective",
      "medium-dark skin tone",
      "sleuth",
      "spy",
      "woman"
    ],
    "output": "1f575-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman detective: dark skin tone",
    "category": "people",
    "shortname": ":woman_detective_tone5:",
    "keyWords": [
      "dark skin tone",
      "detective",
      "sleuth",
      "spy",
      "woman"
    ],
    "output": "1f575-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man detective",
    "category": "people",
    "shortname": ":man_detective:",
    "keyWords": [
      "detective",
      "man",
      "sleuth",
      "spy"
    ],
    "output": "1f575-fe0f-200d-2642-fe0f"
  },
  {
    "name": "man detective: light skin tone",
    "category": "people",
    "shortname": ":man_detective_tone1:",
    "keyWords": [
      "detective",
      "light skin tone",
      "man",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man detective: medium-light skin tone",
    "category": "people",
    "shortname": ":man_detective_tone2:",
    "keyWords": [
      "detective",
      "man",
      "medium-light skin tone",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man detective: medium skin tone",
    "category": "people",
    "shortname": ":man_detective_tone3:",
    "keyWords": [
      "detective",
      "man",
      "medium skin tone",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man detective: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_detective_tone4:",
    "keyWords": [
      "detective",
      "man",
      "medium-dark skin tone",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man detective: dark skin tone",
    "category": "people",
    "shortname": ":man_detective_tone5:",
    "keyWords": [
      "dark skin tone",
      "detective",
      "man",
      "sleuth",
      "spy"
    ],
    "output": "1f575-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "woman health worker",
    "category": "people",
    "shortname": ":woman_health_worker:",
    "keyWords": [
      "doctor",
      "healthcare",
      "nurse",
      "therapist",
      "woman"
    ],
    "output": "1f469-200d-2695-fe0f"
  },
  {
    "name": "woman health worker: light skin tone",
    "category": "people",
    "shortname": ":woman_health_worker_tone1:",
    "keyWords": [
      "doctor",
      "healthcare",
      "light skin tone",
      "nurse",
      "therapist",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-2695-fe0f"
  },
  {
    "name": "woman health worker: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_health_worker_tone2:",
    "keyWords": [
      "doctor",
      "healthcare",
      "medium-light skin tone",
      "nurse",
      "therapist",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-2695-fe0f"
  },
  {
    "name": "woman health worker: medium skin tone",
    "category": "people",
    "shortname": ":woman_health_worker_tone3:",
    "keyWords": [
      "doctor",
      "healthcare",
      "medium skin tone",
      "nurse",
      "therapist",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-2695-fe0f"
  },
  {
    "name": "woman health worker: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_health_worker_tone4:",
    "keyWords": [
      "doctor",
      "healthcare",
      "medium-dark skin tone",
      "nurse",
      "therapist",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-2695-fe0f"
  },
  {
    "name": "woman health worker: dark skin tone",
    "category": "people",
    "shortname": ":woman_health_worker_tone5:",
    "keyWords": [
      "dark skin tone",
      "doctor",
      "healthcare",
      "nurse",
      "therapist",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-2695-fe0f"
  },
  {
    "name": "man health worker",
    "category": "people",
    "shortname": ":man_health_worker:",
    "keyWords": [
      "doctor",
      "healthcare",
      "man",
      "nurse",
      "therapist"
    ],
    "output": "1f468-200d-2695-fe0f"
  },
  {
    "name": "man health worker: light skin tone",
    "category": "people",
    "shortname": ":man_health_worker_tone1:",
    "keyWords": [
      "doctor",
      "healthcare",
      "light skin tone",
      "man",
      "nurse",
      "therapist"
    ],
    "output": "1f468-1f3fb-200d-2695-fe0f"
  },
  {
    "name": "man health worker: medium-light skin tone",
    "category": "people",
    "shortname": ":man_health_worker_tone2:",
    "keyWords": [
      "doctor",
      "healthcare",
      "man",
      "medium-light skin tone",
      "nurse",
      "therapist"
    ],
    "output": "1f468-1f3fc-200d-2695-fe0f"
  },
  {
    "name": "man health worker: medium skin tone",
    "category": "people",
    "shortname": ":man_health_worker_tone3:",
    "keyWords": [
      "doctor",
      "healthcare",
      "man",
      "medium skin tone",
      "nurse",
      "therapist"
    ],
    "output": "1f468-1f3fd-200d-2695-fe0f"
  },
  {
    "name": "man health worker: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_health_worker_tone4:",
    "keyWords": [
      "doctor",
      "healthcare",
      "man",
      "medium-dark skin tone",
      "nurse",
      "therapist"
    ],
    "output": "1f468-1f3fe-200d-2695-fe0f"
  },
  {
    "name": "man health worker: dark skin tone",
    "category": "people",
    "shortname": ":man_health_worker_tone5:",
    "keyWords": [
      "dark skin tone",
      "doctor",
      "healthcare",
      "man",
      "nurse",
      "therapist"
    ],
    "output": "1f468-1f3ff-200d-2695-fe0f"
  },
  {
    "name": "woman farmer",
    "category": "people",
    "shortname": ":woman_farmer:",
    "keyWords": [
      "farmer",
      "gardener",
      "rancher",
      "woman"
    ],
    "output": "1f469-200d-1f33e"
  },
  {
    "name": "woman farmer: light skin tone",
    "category": "people",
    "shortname": ":woman_farmer_tone1:",
    "keyWords": [
      "farmer",
      "gardener",
      "light skin tone",
      "rancher",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f33e"
  },
  {
    "name": "woman farmer: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_farmer_tone2:",
    "keyWords": [
      "farmer",
      "gardener",
      "medium-light skin tone",
      "rancher",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f33e"
  },
  {
    "name": "woman farmer: medium skin tone",
    "category": "people",
    "shortname": ":woman_farmer_tone3:",
    "keyWords": [
      "farmer",
      "gardener",
      "medium skin tone",
      "rancher",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f33e"
  },
  {
    "name": "woman farmer: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_farmer_tone4:",
    "keyWords": [
      "farmer",
      "gardener",
      "medium-dark skin tone",
      "rancher",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f33e"
  },
  {
    "name": "woman farmer: dark skin tone",
    "category": "people",
    "shortname": ":woman_farmer_tone5:",
    "keyWords": [
      "dark skin tone",
      "farmer",
      "gardener",
      "rancher",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f33e"
  },
  {
    "name": "man farmer",
    "category": "people",
    "shortname": ":man_farmer:",
    "keyWords": [
      "farmer",
      "gardener",
      "man",
      "rancher"
    ],
    "output": "1f468-200d-1f33e"
  },
  {
    "name": "man farmer: light skin tone",
    "category": "people",
    "shortname": ":man_farmer_tone1:",
    "keyWords": [
      "farmer",
      "gardener",
      "light skin tone",
      "man",
      "rancher"
    ],
    "output": "1f468-1f3fb-200d-1f33e"
  },
  {
    "name": "man farmer: medium-light skin tone",
    "category": "people",
    "shortname": ":man_farmer_tone2:",
    "keyWords": [
      "farmer",
      "gardener",
      "man",
      "medium-light skin tone",
      "rancher"
    ],
    "output": "1f468-1f3fc-200d-1f33e"
  },
  {
    "name": "man farmer: medium skin tone",
    "category": "people",
    "shortname": ":man_farmer_tone3:",
    "keyWords": [
      "farmer",
      "gardener",
      "man",
      "medium skin tone",
      "rancher"
    ],
    "output": "1f468-1f3fd-200d-1f33e"
  },
  {
    "name": "man farmer: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_farmer_tone4:",
    "keyWords": [
      "farmer",
      "gardener",
      "man",
      "medium-dark skin tone",
      "rancher"
    ],
    "output": "1f468-1f3fe-200d-1f33e"
  },
  {
    "name": "man farmer: dark skin tone",
    "category": "people",
    "shortname": ":man_farmer_tone5:",
    "keyWords": [
      "dark skin tone",
      "farmer",
      "gardener",
      "man",
      "rancher"
    ],
    "output": "1f468-1f3ff-200d-1f33e"
  },
  {
    "name": "woman cook",
    "category": "people",
    "shortname": ":woman_cook:",
    "keyWords": [
      "chef",
      "cook",
      "woman"
    ],
    "output": "1f469-200d-1f373"
  },
  {
    "name": "woman cook: light skin tone",
    "category": "people",
    "shortname": ":woman_cook_tone1:",
    "keyWords": [
      "chef",
      "cook",
      "light skin tone",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f373"
  },
  {
    "name": "woman cook: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_cook_tone2:",
    "keyWords": [
      "chef",
      "cook",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f373"
  },
  {
    "name": "woman cook: medium skin tone",
    "category": "people",
    "shortname": ":woman_cook_tone3:",
    "keyWords": [
      "chef",
      "cook",
      "medium skin tone",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f373"
  },
  {
    "name": "woman cook: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_cook_tone4:",
    "keyWords": [
      "chef",
      "cook",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f373"
  },
  {
    "name": "woman cook: dark skin tone",
    "category": "people",
    "shortname": ":woman_cook_tone5:",
    "keyWords": [
      "chef",
      "cook",
      "dark skin tone",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f373"
  },
  {
    "name": "man cook",
    "category": "people",
    "shortname": ":man_cook:",
    "keyWords": [
      "chef",
      "cook",
      "man"
    ],
    "output": "1f468-200d-1f373"
  },
  {
    "name": "man cook: light skin tone",
    "category": "people",
    "shortname": ":man_cook_tone1:",
    "keyWords": [
      "chef",
      "cook",
      "light skin tone",
      "man"
    ],
    "output": "1f468-1f3fb-200d-1f373"
  },
  {
    "name": "man cook: medium-light skin tone",
    "category": "people",
    "shortname": ":man_cook_tone2:",
    "keyWords": [
      "chef",
      "cook",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f468-1f3fc-200d-1f373"
  },
  {
    "name": "man cook: medium skin tone",
    "category": "people",
    "shortname": ":man_cook_tone3:",
    "keyWords": [
      "chef",
      "cook",
      "man",
      "medium skin tone"
    ],
    "output": "1f468-1f3fd-200d-1f373"
  },
  {
    "name": "man cook: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_cook_tone4:",
    "keyWords": [
      "chef",
      "cook",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f468-1f3fe-200d-1f373"
  },
  {
    "name": "man cook: dark skin tone",
    "category": "people",
    "shortname": ":man_cook_tone5:",
    "keyWords": [
      "chef",
      "cook",
      "dark skin tone",
      "man"
    ],
    "output": "1f468-1f3ff-200d-1f373"
  },
  {
    "name": "woman student",
    "category": "people",
    "shortname": ":woman_student:",
    "keyWords": [
      "graduate",
      "student",
      "woman"
    ],
    "output": "1f469-200d-1f393"
  },
  {
    "name": "woman student: light skin tone",
    "category": "people",
    "shortname": ":woman_student_tone1:",
    "keyWords": [
      "graduate",
      "light skin tone",
      "student",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f393"
  },
  {
    "name": "woman student: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_student_tone2:",
    "keyWords": [
      "graduate",
      "medium-light skin tone",
      "student",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f393"
  },
  {
    "name": "woman student: medium skin tone",
    "category": "people",
    "shortname": ":woman_student_tone3:",
    "keyWords": [
      "graduate",
      "medium skin tone",
      "student",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f393"
  },
  {
    "name": "woman student: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_student_tone4:",
    "keyWords": [
      "graduate",
      "medium-dark skin tone",
      "student",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f393"
  },
  {
    "name": "woman student: dark skin tone",
    "category": "people",
    "shortname": ":woman_student_tone5:",
    "keyWords": [
      "dark skin tone",
      "graduate",
      "student",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f393"
  },
  {
    "name": "man student",
    "category": "people",
    "shortname": ":man_student:",
    "keyWords": [
      "graduate",
      "man",
      "student"
    ],
    "output": "1f468-200d-1f393"
  },
  {
    "name": "man student: light skin tone",
    "category": "people",
    "shortname": ":man_student_tone1:",
    "keyWords": [
      "graduate",
      "light skin tone",
      "man",
      "student"
    ],
    "output": "1f468-1f3fb-200d-1f393"
  },
  {
    "name": "man student: medium-light skin tone",
    "category": "people",
    "shortname": ":man_student_tone2:",
    "keyWords": [
      "graduate",
      "man",
      "medium-light skin tone",
      "student"
    ],
    "output": "1f468-1f3fc-200d-1f393"
  },
  {
    "name": "man student: medium skin tone",
    "category": "people",
    "shortname": ":man_student_tone3:",
    "keyWords": [
      "graduate",
      "man",
      "medium skin tone",
      "student"
    ],
    "output": "1f468-1f3fd-200d-1f393"
  },
  {
    "name": "man student: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_student_tone4:",
    "keyWords": [
      "graduate",
      "man",
      "medium-dark skin tone",
      "student"
    ],
    "output": "1f468-1f3fe-200d-1f393"
  },
  {
    "name": "man student: dark skin tone",
    "category": "people",
    "shortname": ":man_student_tone5:",
    "keyWords": [
      "dark skin tone",
      "graduate",
      "man",
      "student"
    ],
    "output": "1f468-1f3ff-200d-1f393"
  },
  {
    "name": "woman singer",
    "category": "people",
    "shortname": ":woman_singer:",
    "keyWords": [
      "actor",
      "entertainer",
      "rock",
      "singer",
      "star",
      "woman"
    ],
    "output": "1f469-200d-1f3a4"
  },
  {
    "name": "woman singer: light skin tone",
    "category": "people",
    "shortname": ":woman_singer_tone1:",
    "keyWords": [
      "actor",
      "entertainer",
      "light skin tone",
      "rock",
      "singer",
      "star",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f3a4"
  },
  {
    "name": "woman singer: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_singer_tone2:",
    "keyWords": [
      "actor",
      "entertainer",
      "medium-light skin tone",
      "rock",
      "singer",
      "star",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f3a4"
  },
  {
    "name": "woman singer: medium skin tone",
    "category": "people",
    "shortname": ":woman_singer_tone3:",
    "keyWords": [
      "actor",
      "entertainer",
      "medium skin tone",
      "rock",
      "singer",
      "star",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f3a4"
  },
  {
    "name": "woman singer: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_singer_tone4:",
    "keyWords": [
      "actor",
      "entertainer",
      "medium-dark skin tone",
      "rock",
      "singer",
      "star",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f3a4"
  },
  {
    "name": "woman singer: dark skin tone",
    "category": "people",
    "shortname": ":woman_singer_tone5:",
    "keyWords": [
      "actor",
      "dark skin tone",
      "entertainer",
      "rock",
      "singer",
      "star",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f3a4"
  },
  {
    "name": "man singer",
    "category": "people",
    "shortname": ":man_singer:",
    "keyWords": [
      "actor",
      "entertainer",
      "man",
      "rock",
      "singer",
      "star"
    ],
    "output": "1f468-200d-1f3a4"
  },
  {
    "name": "man singer: light skin tone",
    "category": "people",
    "shortname": ":man_singer_tone1:",
    "keyWords": [
      "actor",
      "entertainer",
      "light skin tone",
      "man",
      "rock",
      "singer",
      "star"
    ],
    "output": "1f468-1f3fb-200d-1f3a4"
  },
  {
    "name": "man singer: medium-light skin tone",
    "category": "people",
    "shortname": ":man_singer_tone2:",
    "keyWords": [
      "actor",
      "entertainer",
      "man",
      "medium-light skin tone",
      "rock",
      "singer",
      "star"
    ],
    "output": "1f468-1f3fc-200d-1f3a4"
  },
  {
    "name": "man singer: medium skin tone",
    "category": "people",
    "shortname": ":man_singer_tone3:",
    "keyWords": [
      "actor",
      "entertainer",
      "man",
      "medium skin tone",
      "rock",
      "singer",
      "star"
    ],
    "output": "1f468-1f3fd-200d-1f3a4"
  },
  {
    "name": "man singer: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_singer_tone4:",
    "keyWords": [
      "actor",
      "entertainer",
      "man",
      "medium-dark skin tone",
      "rock",
      "singer",
      "star"
    ],
    "output": "1f468-1f3fe-200d-1f3a4"
  },
  {
    "name": "man singer: dark skin tone",
    "category": "people",
    "shortname": ":man_singer_tone5:",
    "keyWords": [
      "actor",
      "dark skin tone",
      "entertainer",
      "man",
      "rock",
      "singer",
      "star"
    ],
    "output": "1f468-1f3ff-200d-1f3a4"
  },
  {
    "name": "woman teacher",
    "category": "people",
    "shortname": ":woman_teacher:",
    "keyWords": [
      "instructor",
      "professor",
      "teacher",
      "woman"
    ],
    "output": "1f469-200d-1f3eb"
  },
  {
    "name": "woman teacher: light skin tone",
    "category": "people",
    "shortname": ":woman_teacher_tone1:",
    "keyWords": [
      "instructor",
      "light skin tone",
      "professor",
      "teacher",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f3eb"
  },
  {
    "name": "woman teacher: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_teacher_tone2:",
    "keyWords": [
      "instructor",
      "medium-light skin tone",
      "professor",
      "teacher",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f3eb"
  },
  {
    "name": "woman teacher: medium skin tone",
    "category": "people",
    "shortname": ":woman_teacher_tone3:",
    "keyWords": [
      "instructor",
      "medium skin tone",
      "professor",
      "teacher",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f3eb"
  },
  {
    "name": "woman teacher: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_teacher_tone4:",
    "keyWords": [
      "instructor",
      "medium-dark skin tone",
      "professor",
      "teacher",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f3eb"
  },
  {
    "name": "woman teacher: dark skin tone",
    "category": "people",
    "shortname": ":woman_teacher_tone5:",
    "keyWords": [
      "dark skin tone",
      "instructor",
      "professor",
      "teacher",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f3eb"
  },
  {
    "name": "man teacher",
    "category": "people",
    "shortname": ":man_teacher:",
    "keyWords": [
      "instructor",
      "man",
      "professor",
      "teacher"
    ],
    "output": "1f468-200d-1f3eb"
  },
  {
    "name": "man teacher: light skin tone",
    "category": "people",
    "shortname": ":man_teacher_tone1:",
    "keyWords": [
      "instructor",
      "light skin tone",
      "man",
      "professor",
      "teacher"
    ],
    "output": "1f468-1f3fb-200d-1f3eb"
  },
  {
    "name": "man teacher: medium-light skin tone",
    "category": "people",
    "shortname": ":man_teacher_tone2:",
    "keyWords": [
      "instructor",
      "man",
      "medium-light skin tone",
      "professor",
      "teacher"
    ],
    "output": "1f468-1f3fc-200d-1f3eb"
  },
  {
    "name": "man teacher: medium skin tone",
    "category": "people",
    "shortname": ":man_teacher_tone3:",
    "keyWords": [
      "instructor",
      "man",
      "medium skin tone",
      "professor",
      "teacher"
    ],
    "output": "1f468-1f3fd-200d-1f3eb"
  },
  {
    "name": "man teacher: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_teacher_tone4:",
    "keyWords": [
      "instructor",
      "man",
      "medium-dark skin tone",
      "professor",
      "teacher"
    ],
    "output": "1f468-1f3fe-200d-1f3eb"
  },
  {
    "name": "man teacher: dark skin tone",
    "category": "people",
    "shortname": ":man_teacher_tone5:",
    "keyWords": [
      "dark skin tone",
      "instructor",
      "man",
      "professor",
      "teacher"
    ],
    "output": "1f468-1f3ff-200d-1f3eb"
  },
  {
    "name": "woman factory worker",
    "category": "people",
    "shortname": ":woman_factory_worker:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "woman",
      "worker"
    ],
    "output": "1f469-200d-1f3ed"
  },
  {
    "name": "woman factory worker: light skin tone",
    "category": "people",
    "shortname": ":woman_factory_worker_tone1:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "light skin tone",
      "woman",
      "worker"
    ],
    "output": "1f469-1f3fb-200d-1f3ed"
  },
  {
    "name": "woman factory worker: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_factory_worker_tone2:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "medium-light skin tone",
      "woman",
      "worker"
    ],
    "output": "1f469-1f3fc-200d-1f3ed"
  },
  {
    "name": "woman factory worker: medium skin tone",
    "category": "people",
    "shortname": ":woman_factory_worker_tone3:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "medium skin tone",
      "woman",
      "worker"
    ],
    "output": "1f469-1f3fd-200d-1f3ed"
  },
  {
    "name": "woman factory worker: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_factory_worker_tone4:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "medium-dark skin tone",
      "woman",
      "worker"
    ],
    "output": "1f469-1f3fe-200d-1f3ed"
  },
  {
    "name": "woman factory worker: dark skin tone",
    "category": "people",
    "shortname": ":woman_factory_worker_tone5:",
    "keyWords": [
      "assembly",
      "dark skin tone",
      "factory",
      "industrial",
      "woman",
      "worker"
    ],
    "output": "1f469-1f3ff-200d-1f3ed"
  },
  {
    "name": "man factory worker",
    "category": "people",
    "shortname": ":man_factory_worker:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "man",
      "worker"
    ],
    "output": "1f468-200d-1f3ed"
  },
  {
    "name": "man factory worker: light skin tone",
    "category": "people",
    "shortname": ":man_factory_worker_tone1:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "light skin tone",
      "man",
      "worker"
    ],
    "output": "1f468-1f3fb-200d-1f3ed"
  },
  {
    "name": "man factory worker: medium-light skin tone",
    "category": "people",
    "shortname": ":man_factory_worker_tone2:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "man",
      "medium-light skin tone",
      "worker"
    ],
    "output": "1f468-1f3fc-200d-1f3ed"
  },
  {
    "name": "man factory worker: medium skin tone",
    "category": "people",
    "shortname": ":man_factory_worker_tone3:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "man",
      "medium skin tone",
      "worker"
    ],
    "output": "1f468-1f3fd-200d-1f3ed"
  },
  {
    "name": "man factory worker: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_factory_worker_tone4:",
    "keyWords": [
      "assembly",
      "factory",
      "industrial",
      "man",
      "medium-dark skin tone",
      "worker"
    ],
    "output": "1f468-1f3fe-200d-1f3ed"
  },
  {
    "name": "man factory worker: dark skin tone",
    "category": "people",
    "shortname": ":man_factory_worker_tone5:",
    "keyWords": [
      "assembly",
      "dark skin tone",
      "factory",
      "industrial",
      "man",
      "worker"
    ],
    "output": "1f468-1f3ff-200d-1f3ed"
  },
  {
    "name": "woman technologist",
    "category": "people",
    "shortname": ":woman_technologist:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "software",
      "technologist",
      "woman"
    ],
    "output": "1f469-200d-1f4bb"
  },
  {
    "name": "woman technologist: light skin tone",
    "category": "people",
    "shortname": ":woman_technologist_tone1:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "light skin tone",
      "software",
      "technologist",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f4bb"
  },
  {
    "name": "woman technologist: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_technologist_tone2:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "medium-light skin tone",
      "software",
      "technologist",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f4bb"
  },
  {
    "name": "woman technologist: medium skin tone",
    "category": "people",
    "shortname": ":woman_technologist_tone3:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "medium skin tone",
      "software",
      "technologist",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f4bb"
  },
  {
    "name": "woman technologist: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_technologist_tone4:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "medium-dark skin tone",
      "software",
      "technologist",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f4bb"
  },
  {
    "name": "woman technologist: dark skin tone",
    "category": "people",
    "shortname": ":woman_technologist_tone5:",
    "keyWords": [
      "coder",
      "dark skin tone",
      "developer",
      "inventor",
      "software",
      "technologist",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f4bb"
  },
  {
    "name": "man technologist",
    "category": "people",
    "shortname": ":man_technologist:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "man",
      "software",
      "technologist"
    ],
    "output": "1f468-200d-1f4bb"
  },
  {
    "name": "man technologist: light skin tone",
    "category": "people",
    "shortname": ":man_technologist_tone1:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "light skin tone",
      "man",
      "software",
      "technologist"
    ],
    "output": "1f468-1f3fb-200d-1f4bb"
  },
  {
    "name": "man technologist: medium-light skin tone",
    "category": "people",
    "shortname": ":man_technologist_tone2:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "man",
      "medium-light skin tone",
      "software",
      "technologist"
    ],
    "output": "1f468-1f3fc-200d-1f4bb"
  },
  {
    "name": "man technologist: medium skin tone",
    "category": "people",
    "shortname": ":man_technologist_tone3:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "man",
      "medium skin tone",
      "software",
      "technologist"
    ],
    "output": "1f468-1f3fd-200d-1f4bb"
  },
  {
    "name": "man technologist: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_technologist_tone4:",
    "keyWords": [
      "coder",
      "developer",
      "inventor",
      "man",
      "medium-dark skin tone",
      "software",
      "technologist"
    ],
    "output": "1f468-1f3fe-200d-1f4bb"
  },
  {
    "name": "man technologist: dark skin tone",
    "category": "people",
    "shortname": ":man_technologist_tone5:",
    "keyWords": [
      "coder",
      "dark skin tone",
      "developer",
      "inventor",
      "man",
      "software",
      "technologist"
    ],
    "output": "1f468-1f3ff-200d-1f4bb"
  },
  {
    "name": "woman office worker",
    "category": "people",
    "shortname": ":woman_office_worker:",
    "keyWords": [
      "architect",
      "business",
      "manager",
      "office",
      "white-collar",
      "woman"
    ],
    "output": "1f469-200d-1f4bc"
  },
  {
    "name": "woman office worker: light skin tone",
    "category": "people",
    "shortname": ":woman_office_worker_tone1:",
    "keyWords": [
      "architect",
      "business",
      "light skin tone",
      "manager",
      "office",
      "white-collar",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f4bc"
  },
  {
    "name": "woman office worker: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_office_worker_tone2:",
    "keyWords": [
      "architect",
      "business",
      "manager",
      "medium-light skin tone",
      "office",
      "white-collar",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f4bc"
  },
  {
    "name": "woman office worker: medium skin tone",
    "category": "people",
    "shortname": ":woman_office_worker_tone3:",
    "keyWords": [
      "architect",
      "business",
      "manager",
      "medium skin tone",
      "office",
      "white-collar",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f4bc"
  },
  {
    "name": "woman office worker: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_office_worker_tone4:",
    "keyWords": [
      "architect",
      "business",
      "manager",
      "medium-dark skin tone",
      "office",
      "white-collar",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f4bc"
  },
  {
    "name": "woman office worker: dark skin tone",
    "category": "people",
    "shortname": ":woman_office_worker_tone5:",
    "keyWords": [
      "architect",
      "business",
      "dark skin tone",
      "manager",
      "office",
      "white-collar",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f4bc"
  },
  {
    "name": "man office worker",
    "category": "people",
    "shortname": ":man_office_worker:",
    "keyWords": [
      "architect",
      "business",
      "man",
      "manager",
      "office",
      "white-collar"
    ],
    "output": "1f468-200d-1f4bc"
  },
  {
    "name": "man office worker: light skin tone",
    "category": "people",
    "shortname": ":man_office_worker_tone1:",
    "keyWords": [
      "architect",
      "business",
      "light skin tone",
      "man",
      "manager",
      "office",
      "white-collar"
    ],
    "output": "1f468-1f3fb-200d-1f4bc"
  },
  {
    "name": "man office worker: medium-light skin tone",
    "category": "people",
    "shortname": ":man_office_worker_tone2:",
    "keyWords": [
      "architect",
      "business",
      "man",
      "manager",
      "medium-light skin tone",
      "office",
      "white-collar"
    ],
    "output": "1f468-1f3fc-200d-1f4bc"
  },
  {
    "name": "man office worker: medium skin tone",
    "category": "people",
    "shortname": ":man_office_worker_tone3:",
    "keyWords": [
      "architect",
      "business",
      "man",
      "manager",
      "medium skin tone",
      "office",
      "white-collar"
    ],
    "output": "1f468-1f3fd-200d-1f4bc"
  },
  {
    "name": "man office worker: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_office_worker_tone4:",
    "keyWords": [
      "architect",
      "business",
      "man",
      "manager",
      "medium-dark skin tone",
      "office",
      "white-collar"
    ],
    "output": "1f468-1f3fe-200d-1f4bc"
  },
  {
    "name": "man office worker: dark skin tone",
    "category": "people",
    "shortname": ":man_office_worker_tone5:",
    "keyWords": [
      "architect",
      "business",
      "dark skin tone",
      "man",
      "manager",
      "office",
      "white-collar"
    ],
    "output": "1f468-1f3ff-200d-1f4bc"
  },
  {
    "name": "woman mechanic",
    "category": "people",
    "shortname": ":woman_mechanic:",
    "keyWords": [
      "electrician",
      "mechanic",
      "plumber",
      "tradesperson",
      "woman"
    ],
    "output": "1f469-200d-1f527"
  },
  {
    "name": "woman mechanic: light skin tone",
    "category": "people",
    "shortname": ":woman_mechanic_tone1:",
    "keyWords": [
      "electrician",
      "light skin tone",
      "mechanic",
      "plumber",
      "tradesperson",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f527"
  },
  {
    "name": "woman mechanic: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_mechanic_tone2:",
    "keyWords": [
      "electrician",
      "mechanic",
      "medium-light skin tone",
      "plumber",
      "tradesperson",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f527"
  },
  {
    "name": "woman mechanic: medium skin tone",
    "category": "people",
    "shortname": ":woman_mechanic_tone3:",
    "keyWords": [
      "electrician",
      "mechanic",
      "medium skin tone",
      "plumber",
      "tradesperson",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f527"
  },
  {
    "name": "woman mechanic: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_mechanic_tone4:",
    "keyWords": [
      "electrician",
      "mechanic",
      "medium-dark skin tone",
      "plumber",
      "tradesperson",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f527"
  },
  {
    "name": "woman mechanic: dark skin tone",
    "category": "people",
    "shortname": ":woman_mechanic_tone5:",
    "keyWords": [
      "dark skin tone",
      "electrician",
      "mechanic",
      "plumber",
      "tradesperson",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f527"
  },
  {
    "name": "man mechanic",
    "category": "people",
    "shortname": ":man_mechanic:",
    "keyWords": [
      "electrician",
      "man",
      "mechanic",
      "plumber",
      "tradesperson"
    ],
    "output": "1f468-200d-1f527"
  },
  {
    "name": "man mechanic: light skin tone",
    "category": "people",
    "shortname": ":man_mechanic_tone1:",
    "keyWords": [
      "electrician",
      "light skin tone",
      "man",
      "mechanic",
      "plumber",
      "tradesperson"
    ],
    "output": "1f468-1f3fb-200d-1f527"
  },
  {
    "name": "man mechanic: medium-light skin tone",
    "category": "people",
    "shortname": ":man_mechanic_tone2:",
    "keyWords": [
      "electrician",
      "man",
      "mechanic",
      "medium-light skin tone",
      "plumber",
      "tradesperson"
    ],
    "output": "1f468-1f3fc-200d-1f527"
  },
  {
    "name": "man mechanic: medium skin tone",
    "category": "people",
    "shortname": ":man_mechanic_tone3:",
    "keyWords": [
      "electrician",
      "man",
      "mechanic",
      "medium skin tone",
      "plumber",
      "tradesperson"
    ],
    "output": "1f468-1f3fd-200d-1f527"
  },
  {
    "name": "man mechanic: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_mechanic_tone4:",
    "keyWords": [
      "electrician",
      "man",
      "mechanic",
      "medium-dark skin tone",
      "plumber",
      "tradesperson"
    ],
    "output": "1f468-1f3fe-200d-1f527"
  },
  {
    "name": "man mechanic: dark skin tone",
    "category": "people",
    "shortname": ":man_mechanic_tone5:",
    "keyWords": [
      "dark skin tone",
      "electrician",
      "man",
      "mechanic",
      "plumber",
      "tradesperson"
    ],
    "output": "1f468-1f3ff-200d-1f527"
  },
  {
    "name": "woman scientist",
    "category": "people",
    "shortname": ":woman_scientist:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "mathematician",
      "physicist",
      "scientist",
      "woman"
    ],
    "output": "1f469-200d-1f52c"
  },
  {
    "name": "woman scientist: light skin tone",
    "category": "people",
    "shortname": ":woman_scientist_tone1:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "light skin tone",
      "mathematician",
      "physicist",
      "scientist",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f52c"
  },
  {
    "name": "woman scientist: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_scientist_tone2:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "mathematician",
      "medium-light skin tone",
      "physicist",
      "scientist",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f52c"
  },
  {
    "name": "woman scientist: medium skin tone",
    "category": "people",
    "shortname": ":woman_scientist_tone3:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "mathematician",
      "medium skin tone",
      "physicist",
      "scientist",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f52c"
  },
  {
    "name": "woman scientist: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_scientist_tone4:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "mathematician",
      "medium-dark skin tone",
      "physicist",
      "scientist",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f52c"
  },
  {
    "name": "woman scientist: dark skin tone",
    "category": "people",
    "shortname": ":woman_scientist_tone5:",
    "keyWords": [
      "biologist",
      "chemist",
      "dark skin tone",
      "engineer",
      "mathematician",
      "physicist",
      "scientist",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f52c"
  },
  {
    "name": "man scientist",
    "category": "people",
    "shortname": ":man_scientist:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "man",
      "mathematician",
      "physicist",
      "scientist"
    ],
    "output": "1f468-200d-1f52c"
  },
  {
    "name": "man scientist: light skin tone",
    "category": "people",
    "shortname": ":man_scientist_tone1:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "light skin tone",
      "man",
      "mathematician",
      "physicist",
      "scientist"
    ],
    "output": "1f468-1f3fb-200d-1f52c"
  },
  {
    "name": "man scientist: medium-light skin tone",
    "category": "people",
    "shortname": ":man_scientist_tone2:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "man",
      "mathematician",
      "medium-light skin tone",
      "physicist",
      "scientist"
    ],
    "output": "1f468-1f3fc-200d-1f52c"
  },
  {
    "name": "man scientist: medium skin tone",
    "category": "people",
    "shortname": ":man_scientist_tone3:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "man",
      "mathematician",
      "medium skin tone",
      "physicist",
      "scientist"
    ],
    "output": "1f468-1f3fd-200d-1f52c"
  },
  {
    "name": "man scientist: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_scientist_tone4:",
    "keyWords": [
      "biologist",
      "chemist",
      "engineer",
      "man",
      "mathematician",
      "medium-dark skin tone",
      "physicist",
      "scientist"
    ],
    "output": "1f468-1f3fe-200d-1f52c"
  },
  {
    "name": "man scientist: dark skin tone",
    "category": "people",
    "shortname": ":man_scientist_tone5:",
    "keyWords": [
      "biologist",
      "chemist",
      "dark skin tone",
      "engineer",
      "man",
      "mathematician",
      "physicist",
      "scientist"
    ],
    "output": "1f468-1f3ff-200d-1f52c"
  },
  {
    "name": "woman artist",
    "category": "people",
    "shortname": ":woman_artist:",
    "keyWords": [
      "artist",
      "palette",
      "woman"
    ],
    "output": "1f469-200d-1f3a8"
  },
  {
    "name": "woman artist: light skin tone",
    "category": "people",
    "shortname": ":woman_artist_tone1:",
    "keyWords": [
      "artist",
      "light skin tone",
      "palette",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f3a8"
  },
  {
    "name": "woman artist: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_artist_tone2:",
    "keyWords": [
      "artist",
      "medium-light skin tone",
      "palette",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f3a8"
  },
  {
    "name": "woman artist: medium skin tone",
    "category": "people",
    "shortname": ":woman_artist_tone3:",
    "keyWords": [
      "artist",
      "medium skin tone",
      "palette",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f3a8"
  },
  {
    "name": "woman artist: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_artist_tone4:",
    "keyWords": [
      "artist",
      "medium-dark skin tone",
      "palette",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f3a8"
  },
  {
    "name": "woman artist: dark skin tone",
    "category": "people",
    "shortname": ":woman_artist_tone5:",
    "keyWords": [
      "artist",
      "dark skin tone",
      "palette",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f3a8"
  },
  {
    "name": "man artist",
    "category": "people",
    "shortname": ":man_artist:",
    "keyWords": [
      "artist",
      "man",
      "palette"
    ],
    "output": "1f468-200d-1f3a8"
  },
  {
    "name": "man artist: light skin tone",
    "category": "people",
    "shortname": ":man_artist_tone1:",
    "keyWords": [
      "artist",
      "light skin tone",
      "man",
      "palette"
    ],
    "output": "1f468-1f3fb-200d-1f3a8"
  },
  {
    "name": "man artist: medium-light skin tone",
    "category": "people",
    "shortname": ":man_artist_tone2:",
    "keyWords": [
      "artist",
      "man",
      "medium-light skin tone",
      "palette"
    ],
    "output": "1f468-1f3fc-200d-1f3a8"
  },
  {
    "name": "man artist: medium skin tone",
    "category": "people",
    "shortname": ":man_artist_tone3:",
    "keyWords": [
      "artist",
      "man",
      "medium skin tone",
      "palette"
    ],
    "output": "1f468-1f3fd-200d-1f3a8"
  },
  {
    "name": "man artist: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_artist_tone4:",
    "keyWords": [
      "artist",
      "man",
      "medium-dark skin tone",
      "palette"
    ],
    "output": "1f468-1f3fe-200d-1f3a8"
  },
  {
    "name": "man artist: dark skin tone",
    "category": "people",
    "shortname": ":man_artist_tone5:",
    "keyWords": [
      "artist",
      "dark skin tone",
      "man",
      "palette"
    ],
    "output": "1f468-1f3ff-200d-1f3a8"
  },
  {
    "name": "woman firefighter",
    "category": "people",
    "shortname": ":woman_firefighter:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "woman"
    ],
    "output": "1f469-200d-1f692"
  },
  {
    "name": "woman firefighter: light skin tone",
    "category": "people",
    "shortname": ":woman_firefighter_tone1:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "light skin tone",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f692"
  },
  {
    "name": "woman firefighter: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_firefighter_tone2:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f692"
  },
  {
    "name": "woman firefighter: medium skin tone",
    "category": "people",
    "shortname": ":woman_firefighter_tone3:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "medium skin tone",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f692"
  },
  {
    "name": "woman firefighter: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_firefighter_tone4:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f692"
  },
  {
    "name": "woman firefighter: dark skin tone",
    "category": "people",
    "shortname": ":woman_firefighter_tone5:",
    "keyWords": [
      "dark skin tone",
      "firefighter",
      "firetruck",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f692"
  },
  {
    "name": "man firefighter",
    "category": "people",
    "shortname": ":man_firefighter:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "man"
    ],
    "output": "1f468-200d-1f692"
  },
  {
    "name": "man firefighter: light skin tone",
    "category": "people",
    "shortname": ":man_firefighter_tone1:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "light skin tone",
      "man"
    ],
    "output": "1f468-1f3fb-200d-1f692"
  },
  {
    "name": "man firefighter: medium-light skin tone",
    "category": "people",
    "shortname": ":man_firefighter_tone2:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f468-1f3fc-200d-1f692"
  },
  {
    "name": "man firefighter: medium skin tone",
    "category": "people",
    "shortname": ":man_firefighter_tone3:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "man",
      "medium skin tone"
    ],
    "output": "1f468-1f3fd-200d-1f692"
  },
  {
    "name": "man firefighter: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_firefighter_tone4:",
    "keyWords": [
      "firefighter",
      "firetruck",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f468-1f3fe-200d-1f692"
  },
  {
    "name": "man firefighter: dark skin tone",
    "category": "people",
    "shortname": ":man_firefighter_tone5:",
    "keyWords": [
      "dark skin tone",
      "firefighter",
      "firetruck",
      "man"
    ],
    "output": "1f468-1f3ff-200d-1f692"
  },
  {
    "name": "woman pilot",
    "category": "people",
    "shortname": ":woman_pilot:",
    "keyWords": [
      "pilot",
      "plane",
      "woman"
    ],
    "output": "1f469-200d-2708-fe0f"
  },
  {
    "name": "woman pilot: light skin tone",
    "category": "people",
    "shortname": ":woman_pilot_tone1:",
    "keyWords": [
      "light skin tone",
      "pilot",
      "plane",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-2708-fe0f"
  },
  {
    "name": "woman pilot: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_pilot_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "pilot",
      "plane",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-2708-fe0f"
  },
  {
    "name": "woman pilot: medium skin tone",
    "category": "people",
    "shortname": ":woman_pilot_tone3:",
    "keyWords": [
      "medium skin tone",
      "pilot",
      "plane",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-2708-fe0f"
  },
  {
    "name": "woman pilot: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_pilot_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "pilot",
      "plane",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-2708-fe0f"
  },
  {
    "name": "woman pilot: dark skin tone",
    "category": "people",
    "shortname": ":woman_pilot_tone5:",
    "keyWords": [
      "dark skin tone",
      "pilot",
      "plane",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-2708-fe0f"
  },
  {
    "name": "man pilot",
    "category": "people",
    "shortname": ":man_pilot:",
    "keyWords": [
      "man",
      "pilot",
      "plane"
    ],
    "output": "1f468-200d-2708-fe0f"
  },
  {
    "name": "man pilot: light skin tone",
    "category": "people",
    "shortname": ":man_pilot_tone1:",
    "keyWords": [
      "light skin tone",
      "man",
      "pilot",
      "plane"
    ],
    "output": "1f468-1f3fb-200d-2708-fe0f"
  },
  {
    "name": "man pilot: medium-light skin tone",
    "category": "people",
    "shortname": ":man_pilot_tone2:",
    "keyWords": [
      "man",
      "medium-light skin tone",
      "pilot",
      "plane"
    ],
    "output": "1f468-1f3fc-200d-2708-fe0f"
  },
  {
    "name": "man pilot: medium skin tone",
    "category": "people",
    "shortname": ":man_pilot_tone3:",
    "keyWords": [
      "man",
      "medium skin tone",
      "pilot",
      "plane"
    ],
    "output": "1f468-1f3fd-200d-2708-fe0f"
  },
  {
    "name": "man pilot: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_pilot_tone4:",
    "keyWords": [
      "man",
      "medium-dark skin tone",
      "pilot",
      "plane"
    ],
    "output": "1f468-1f3fe-200d-2708-fe0f"
  },
  {
    "name": "man pilot: dark skin tone",
    "category": "people",
    "shortname": ":man_pilot_tone5:",
    "keyWords": [
      "dark skin tone",
      "man",
      "pilot",
      "plane"
    ],
    "output": "1f468-1f3ff-200d-2708-fe0f"
  },
  {
    "name": "woman astronaut",
    "category": "people",
    "shortname": ":woman_astronaut:",
    "keyWords": [
      "astronaut",
      "rocket",
      "woman"
    ],
    "output": "1f469-200d-1f680"
  },
  {
    "name": "woman astronaut: light skin tone",
    "category": "people",
    "shortname": ":woman_astronaut_tone1:",
    "keyWords": [
      "astronaut",
      "light skin tone",
      "rocket",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-1f680"
  },
  {
    "name": "woman astronaut: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_astronaut_tone2:",
    "keyWords": [
      "astronaut",
      "medium-light skin tone",
      "rocket",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-1f680"
  },
  {
    "name": "woman astronaut: medium skin tone",
    "category": "people",
    "shortname": ":woman_astronaut_tone3:",
    "keyWords": [
      "astronaut",
      "medium skin tone",
      "rocket",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-1f680"
  },
  {
    "name": "woman astronaut: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_astronaut_tone4:",
    "keyWords": [
      "astronaut",
      "medium-dark skin tone",
      "rocket",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-1f680"
  },
  {
    "name": "woman astronaut: dark skin tone",
    "category": "people",
    "shortname": ":woman_astronaut_tone5:",
    "keyWords": [
      "astronaut",
      "dark skin tone",
      "rocket",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-1f680"
  },
  {
    "name": "man astronaut",
    "category": "people",
    "shortname": ":man_astronaut:",
    "keyWords": [
      "astronaut",
      "man",
      "rocket"
    ],
    "output": "1f468-200d-1f680"
  },
  {
    "name": "man astronaut: light skin tone",
    "category": "people",
    "shortname": ":man_astronaut_tone1:",
    "keyWords": [
      "astronaut",
      "light skin tone",
      "man",
      "rocket"
    ],
    "output": "1f468-1f3fb-200d-1f680"
  },
  {
    "name": "man astronaut: medium-light skin tone",
    "category": "people",
    "shortname": ":man_astronaut_tone2:",
    "keyWords": [
      "astronaut",
      "man",
      "medium-light skin tone",
      "rocket"
    ],
    "output": "1f468-1f3fc-200d-1f680"
  },
  {
    "name": "man astronaut: medium skin tone",
    "category": "people",
    "shortname": ":man_astronaut_tone3:",
    "keyWords": [
      "astronaut",
      "man",
      "medium skin tone",
      "rocket"
    ],
    "output": "1f468-1f3fd-200d-1f680"
  },
  {
    "name": "man astronaut: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_astronaut_tone4:",
    "keyWords": [
      "astronaut",
      "man",
      "medium-dark skin tone",
      "rocket"
    ],
    "output": "1f468-1f3fe-200d-1f680"
  },
  {
    "name": "man astronaut: dark skin tone",
    "category": "people",
    "shortname": ":man_astronaut_tone5:",
    "keyWords": [
      "astronaut",
      "dark skin tone",
      "man",
      "rocket"
    ],
    "output": "1f468-1f3ff-200d-1f680"
  },
  {
    "name": "woman judge",
    "category": "people",
    "shortname": ":woman_judge:",
    "keyWords": [
      "judge",
      "scales",
      "woman"
    ],
    "output": "1f469-200d-2696-fe0f"
  },
  {
    "name": "woman judge: light skin tone",
    "category": "people",
    "shortname": ":woman_judge_tone1:",
    "keyWords": [
      "judge",
      "light skin tone",
      "scales",
      "woman"
    ],
    "output": "1f469-1f3fb-200d-2696-fe0f"
  },
  {
    "name": "woman judge: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_judge_tone2:",
    "keyWords": [
      "judge",
      "medium-light skin tone",
      "scales",
      "woman"
    ],
    "output": "1f469-1f3fc-200d-2696-fe0f"
  },
  {
    "name": "woman judge: medium skin tone",
    "category": "people",
    "shortname": ":woman_judge_tone3:",
    "keyWords": [
      "judge",
      "medium skin tone",
      "scales",
      "woman"
    ],
    "output": "1f469-1f3fd-200d-2696-fe0f"
  },
  {
    "name": "woman judge: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_judge_tone4:",
    "keyWords": [
      "judge",
      "medium-dark skin tone",
      "scales",
      "woman"
    ],
    "output": "1f469-1f3fe-200d-2696-fe0f"
  },
  {
    "name": "woman judge: dark skin tone",
    "category": "people",
    "shortname": ":woman_judge_tone5:",
    "keyWords": [
      "dark skin tone",
      "judge",
      "scales",
      "woman"
    ],
    "output": "1f469-1f3ff-200d-2696-fe0f"
  },
  {
    "name": "man judge",
    "category": "people",
    "shortname": ":man_judge:",
    "keyWords": [
      "justice",
      "man",
      "scales"
    ],
    "output": "1f468-200d-2696-fe0f"
  },
  {
    "name": "man judge: light skin tone",
    "category": "people",
    "shortname": ":man_judge_tone1:",
    "keyWords": [
      "justice",
      "light skin tone",
      "man",
      "scales"
    ],
    "output": "1f468-1f3fb-200d-2696-fe0f"
  },
  {
    "name": "man judge: medium-light skin tone",
    "category": "people",
    "shortname": ":man_judge_tone2:",
    "keyWords": [
      "justice",
      "man",
      "medium-light skin tone",
      "scales"
    ],
    "output": "1f468-1f3fc-200d-2696-fe0f"
  },
  {
    "name": "man judge: medium skin tone",
    "category": "people",
    "shortname": ":man_judge_tone3:",
    "keyWords": [
      "justice",
      "man",
      "medium skin tone",
      "scales"
    ],
    "output": "1f468-1f3fd-200d-2696-fe0f"
  },
  {
    "name": "man judge: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_judge_tone4:",
    "keyWords": [
      "justice",
      "man",
      "medium-dark skin tone",
      "scales"
    ],
    "output": "1f468-1f3fe-200d-2696-fe0f"
  },
  {
    "name": "man judge: dark skin tone",
    "category": "people",
    "shortname": ":man_judge_tone5:",
    "keyWords": [
      "dark skin tone",
      "justice",
      "man",
      "scales"
    ],
    "output": "1f468-1f3ff-200d-2696-fe0f"
  },
  {
    "name": "bride with veil",
    "category": "people",
    "shortname": ":bride_with_veil:",
    "keyWords": [
      "bride",
      "veil",
      "wedding"
    ],
    "output": "1f470"
  },
  {
    "name": "bride with veil: light skin tone",
    "category": "people",
    "shortname": ":bride_with_veil_tone1:",
    "keyWords": [
      "bride",
      "light skin tone",
      "veil",
      "wedding"
    ],
    "output": "1f470-1f3fb"
  },
  {
    "name": "bride with veil: medium-light skin tone",
    "category": "people",
    "shortname": ":bride_with_veil_tone2:",
    "keyWords": [
      "bride",
      "medium-light skin tone",
      "veil",
      "wedding"
    ],
    "output": "1f470-1f3fc"
  },
  {
    "name": "bride with veil: medium skin tone",
    "category": "people",
    "shortname": ":bride_with_veil_tone3:",
    "keyWords": [
      "bride",
      "medium skin tone",
      "veil",
      "wedding"
    ],
    "output": "1f470-1f3fd"
  },
  {
    "name": "bride with veil: medium-dark skin tone",
    "category": "people",
    "shortname": ":bride_with_veil_tone4:",
    "keyWords": [
      "bride",
      "medium-dark skin tone",
      "veil",
      "wedding"
    ],
    "output": "1f470-1f3fe"
  },
  {
    "name": "bride with veil: dark skin tone",
    "category": "people",
    "shortname": ":bride_with_veil_tone5:",
    "keyWords": [
      "bride",
      "dark skin tone",
      "veil",
      "wedding"
    ],
    "output": "1f470-1f3ff"
  },
  {
    "name": "man in tuxedo",
    "category": "people",
    "shortname": ":man_in_tuxedo:",
    "keyWords": [
      "groom",
      "man",
      "tuxedo"
    ],
    "output": "1f935"
  },
  {
    "name": "man in tuxedo: light skin tone",
    "category": "people",
    "shortname": ":man_in_tuxedo_tone1:",
    "keyWords": [
      "groom",
      "light skin tone",
      "man",
      "tuxedo"
    ],
    "output": "1f935-1f3fb"
  },
  {
    "name": "man in tuxedo: medium-light skin tone",
    "category": "people",
    "shortname": ":man_in_tuxedo_tone2:",
    "keyWords": [
      "groom",
      "man",
      "medium-light skin tone",
      "tuxedo"
    ],
    "output": "1f935-1f3fc"
  },
  {
    "name": "man in tuxedo: medium skin tone",
    "category": "people",
    "shortname": ":man_in_tuxedo_tone3:",
    "keyWords": [
      "groom",
      "man",
      "medium skin tone",
      "tuxedo"
    ],
    "output": "1f935-1f3fd"
  },
  {
    "name": "man in tuxedo: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_in_tuxedo_tone4:",
    "keyWords": [
      "groom",
      "man",
      "medium-dark skin tone",
      "tuxedo"
    ],
    "output": "1f935-1f3fe"
  },
  {
    "name": "man in tuxedo: dark skin tone",
    "category": "people",
    "shortname": ":man_in_tuxedo_tone5:",
    "keyWords": [
      "dark skin tone",
      "groom",
      "man",
      "tuxedo"
    ],
    "output": "1f935-1f3ff"
  },
  {
    "name": "princess",
    "category": "people",
    "shortname": ":princess:",
    "keyWords": [
      "fairy tale",
      "fantasy"
    ],
    "output": "1f478"
  },
  {
    "name": "princess: light skin tone",
    "category": "people",
    "shortname": ":princess_tone1:",
    "keyWords": [
      "fairy tale",
      "fantasy",
      "light skin tone"
    ],
    "output": "1f478-1f3fb"
  },
  {
    "name": "princess: medium-light skin tone",
    "category": "people",
    "shortname": ":princess_tone2:",
    "keyWords": [
      "fairy tale",
      "fantasy",
      "medium-light skin tone"
    ],
    "output": "1f478-1f3fc"
  },
  {
    "name": "princess: medium skin tone",
    "category": "people",
    "shortname": ":princess_tone3:",
    "keyWords": [
      "fairy tale",
      "fantasy",
      "medium skin tone"
    ],
    "output": "1f478-1f3fd"
  },
  {
    "name": "princess: medium-dark skin tone",
    "category": "people",
    "shortname": ":princess_tone4:",
    "keyWords": [
      "fairy tale",
      "fantasy",
      "medium-dark skin tone"
    ],
    "output": "1f478-1f3fe"
  },
  {
    "name": "princess: dark skin tone",
    "category": "people",
    "shortname": ":princess_tone5:",
    "keyWords": [
      "dark skin tone",
      "fairy tale",
      "fantasy"
    ],
    "output": "1f478-1f3ff"
  },
  {
    "name": "prince",
    "category": "people",
    "shortname": ":prince:",
    "keyWords": [
      "prince"
    ],
    "output": "1f934"
  },
  {
    "name": "prince: light skin tone",
    "category": "people",
    "shortname": ":prince_tone1:",
    "keyWords": [
      "light skin tone",
      "prince"
    ],
    "output": "1f934-1f3fb"
  },
  {
    "name": "prince: medium-light skin tone",
    "category": "people",
    "shortname": ":prince_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "prince"
    ],
    "output": "1f934-1f3fc"
  },
  {
    "name": "prince: medium skin tone",
    "category": "people",
    "shortname": ":prince_tone3:",
    "keyWords": [
      "medium skin tone",
      "prince"
    ],
    "output": "1f934-1f3fd"
  },
  {
    "name": "prince: medium-dark skin tone",
    "category": "people",
    "shortname": ":prince_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "prince"
    ],
    "output": "1f934-1f3fe"
  },
  {
    "name": "prince: dark skin tone",
    "category": "people",
    "shortname": ":prince_tone5:",
    "keyWords": [
      "dark skin tone",
      "prince"
    ],
    "output": "1f934-1f3ff"
  },
  {
    "name": "Mrs. Claus",
    "category": "people",
    "shortname": ":mrs_claus:",
    "keyWords": [
      "Christmas",
      "Mrs.",
      "celebration",
      "claus",
      "mother"
    ],
    "output": "1f936"
  },
  {
    "name": "Mrs. Claus: light skin tone",
    "category": "people",
    "shortname": ":mrs_claus_tone1:",
    "keyWords": [
      "Christmas",
      "Mrs.",
      "celebration",
      "claus",
      "light skin tone",
      "mother"
    ],
    "output": "1f936-1f3fb"
  },
  {
    "name": "Mrs. Claus: medium skin tone",
    "category": "people",
    "shortname": ":mrs_claus_tone3:",
    "keyWords": [
      "Christmas",
      "Mrs.",
      "celebration",
      "claus",
      "medium skin tone",
      "mother"
    ],
    "output": "1f936-1f3fd"
  },
  {
    "name": "Mrs. Claus: medium-light skin tone",
    "category": "people",
    "shortname": ":mrs_claus_tone2:",
    "keyWords": [
      "Christmas",
      "Mrs.",
      "celebration",
      "claus",
      "medium-light skin tone",
      "mother"
    ],
    "output": "1f936-1f3fc"
  },
  {
    "name": "Mrs. Claus: medium-dark skin tone",
    "category": "people",
    "shortname": ":mrs_claus_tone4:",
    "keyWords": [
      "Christmas",
      "Mrs.",
      "celebration",
      "claus",
      "medium-dark skin tone",
      "mother"
    ],
    "output": "1f936-1f3fe"
  },
  {
    "name": "Mrs. Claus: dark skin tone",
    "category": "people",
    "shortname": ":mrs_claus_tone5:",
    "keyWords": [
      "Christmas",
      "Mrs.",
      "celebration",
      "claus",
      "dark skin tone",
      "mother"
    ],
    "output": "1f936-1f3ff"
  },
  {
    "name": "Santa Claus",
    "category": "people",
    "shortname": ":santa:",
    "keyWords": [
      "Christmas",
      "celebration",
      "claus",
      "father",
      "santa"
    ],
    "output": "1f385"
  },
  {
    "name": "Santa Claus: light skin tone",
    "category": "people",
    "shortname": ":santa_tone1:",
    "keyWords": [
      "Christmas",
      "celebration",
      "claus",
      "father",
      "light skin tone",
      "santa"
    ],
    "output": "1f385-1f3fb"
  },
  {
    "name": "Santa Claus: medium-light skin tone",
    "category": "people",
    "shortname": ":santa_tone2:",
    "keyWords": [
      "Christmas",
      "celebration",
      "claus",
      "father",
      "medium-light skin tone",
      "santa"
    ],
    "output": "1f385-1f3fc"
  },
  {
    "name": "Santa Claus: medium skin tone",
    "category": "people",
    "shortname": ":santa_tone3:",
    "keyWords": [
      "Christmas",
      "celebration",
      "claus",
      "father",
      "medium skin tone",
      "santa"
    ],
    "output": "1f385-1f3fd"
  },
  {
    "name": "Santa Claus: medium-dark skin tone",
    "category": "people",
    "shortname": ":santa_tone4:",
    "keyWords": [
      "Christmas",
      "celebration",
      "claus",
      "father",
      "medium-dark skin tone",
      "santa"
    ],
    "output": "1f385-1f3fe"
  },
  {
    "name": "Santa Claus: dark skin tone",
    "category": "people",
    "shortname": ":santa_tone5:",
    "keyWords": [
      "Christmas",
      "celebration",
      "claus",
      "dark skin tone",
      "father",
      "santa"
    ],
    "output": "1f385-1f3ff"
  },
  {
    "name": "superhero",
    "category": "people",
    "shortname": ":superhero:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8"
  },
  {
    "name": "superhero: light skin tone",
    "category": "people",
    "shortname": ":superhero_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fb"
  },
  {
    "name": "superhero: medium-light skin tone",
    "category": "people",
    "shortname": ":superhero_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fc"
  },
  {
    "name": "superhero: medium skin tone",
    "category": "people",
    "shortname": ":superhero_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fd"
  },
  {
    "name": "superhero: medium-dark skin tone",
    "category": "people",
    "shortname": ":superhero_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fe"
  },
  {
    "name": "superhero: dark skin tone",
    "category": "people",
    "shortname": ":superhero_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3ff"
  },
  {
    "name": "woman superhero",
    "category": "people",
    "shortname": ":woman_superhero:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-200d-2640-fe0f"
  },
  {
    "name": "woman superhero: light skin tone",
    "category": "people",
    "shortname": ":woman_superhero_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman superhero: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_superhero_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman superhero: medium skin tone",
    "category": "people",
    "shortname": ":woman_superhero_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman superhero: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_superhero_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman superhero: dark skin tone",
    "category": "people",
    "shortname": ":woman_superhero_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man superhero",
    "category": "people",
    "shortname": ":man_superhero:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-200d-2642-fe0f"
  },
  {
    "name": "man superhero: light skin tone",
    "category": "people",
    "shortname": ":man_superhero_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man superhero: medium-light skin tone",
    "category": "people",
    "shortname": ":man_superhero_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man superhero: medium skin tone",
    "category": "people",
    "shortname": ":man_superhero_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man superhero: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_superhero_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man superhero: dark skin tone",
    "category": "people",
    "shortname": ":man_superhero_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f9b8-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "supervillain",
    "category": "people",
    "shortname": ":supervillain:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9"
  },
  {
    "name": "supervillain: light skin tone",
    "category": "people",
    "shortname": ":supervillain_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fb"
  },
  {
    "name": "supervillain: medium-light skin tone",
    "category": "people",
    "shortname": ":supervillain_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fc"
  },
  {
    "name": "supervillain: medium skin tone",
    "category": "people",
    "shortname": ":supervillain_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fd"
  },
  {
    "name": "supervillain: medium-dark skin tone",
    "category": "people",
    "shortname": ":supervillain_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fe"
  },
  {
    "name": "supervillain: dark skin tone",
    "category": "people",
    "shortname": ":supervillain_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3ff"
  },
  {
    "name": "woman supervillain: light skin tone",
    "category": "people",
    "shortname": ":woman_supervillain_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman supervillain",
    "category": "people",
    "shortname": ":woman_supervillain:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-200d-2640-fe0f"
  },
  {
    "name": "woman supervillain: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_supervillain_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman supervillain: medium skin tone",
    "category": "people",
    "shortname": ":woman_supervillain_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman supervillain: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_supervillain_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman supervillain: dark skin tone",
    "category": "people",
    "shortname": ":woman_supervillain_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man supervillain",
    "category": "people",
    "shortname": ":man_supervillain:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-200d-2642-fe0f"
  },
  {
    "name": "man supervillain: light skin tone",
    "category": "people",
    "shortname": ":man_supervillain_tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man supervillain: medium-light skin tone",
    "category": "people",
    "shortname": ":man_supervillain_tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man supervillain: medium skin tone",
    "category": "people",
    "shortname": ":man_supervillain_tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man supervillain: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_supervillain_tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man supervillain: dark skin tone",
    "category": "people",
    "shortname": ":man_supervillain_tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f9b9-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "mage",
    "category": "people",
    "shortname": ":mage:",
    "keyWords": [
      "sorcerer",
      "sorceress",
      "witch",
      "wizard"
    ],
    "output": "1f9d9"
  },
  {
    "name": "mage: light skin tone",
    "category": "people",
    "shortname": ":mage_tone1:",
    "keyWords": [
      "light skin tone",
      "sorcerer",
      "sorceress",
      "witch",
      "wizard"
    ],
    "output": "1f9d9-1f3fb"
  },
  {
    "name": "mage: medium-light skin tone",
    "category": "people",
    "shortname": ":mage_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "sorcerer",
      "sorceress",
      "witch",
      "wizard"
    ],
    "output": "1f9d9-1f3fc"
  },
  {
    "name": "mage: medium skin tone",
    "category": "people",
    "shortname": ":mage_tone3:",
    "keyWords": [
      "medium skin tone",
      "sorcerer",
      "sorceress",
      "witch",
      "wizard"
    ],
    "output": "1f9d9-1f3fd"
  },
  {
    "name": "mage: medium-dark skin tone",
    "category": "people",
    "shortname": ":mage_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "sorcerer",
      "sorceress",
      "witch",
      "wizard"
    ],
    "output": "1f9d9-1f3fe"
  },
  {
    "name": "mage: dark skin tone",
    "category": "people",
    "shortname": ":mage_tone5:",
    "keyWords": [
      "dark skin tone",
      "sorcerer",
      "sorceress",
      "witch",
      "wizard"
    ],
    "output": "1f9d9-1f3ff"
  },
  {
    "name": "woman mage",
    "category": "people",
    "shortname": ":woman_mage:",
    "keyWords": [
      "sorceress",
      "witch"
    ],
    "output": "1f9d9-200d-2640-fe0f"
  },
  {
    "name": "woman mage: light skin tone",
    "category": "people",
    "shortname": ":woman_mage_tone1:",
    "keyWords": [
      "light skin tone",
      "sorceress",
      "witch"
    ],
    "output": "1f9d9-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman mage: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_mage_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "sorceress",
      "witch"
    ],
    "output": "1f9d9-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman mage: medium skin tone",
    "category": "people",
    "shortname": ":woman_mage_tone3:",
    "keyWords": [
      "medium skin tone",
      "sorceress",
      "witch"
    ],
    "output": "1f9d9-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman mage: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_mage_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "sorceress",
      "witch"
    ],
    "output": "1f9d9-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman mage: dark skin tone",
    "category": "people",
    "shortname": ":woman_mage_tone5:",
    "keyWords": [
      "dark skin tone",
      "sorceress",
      "witch"
    ],
    "output": "1f9d9-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man mage",
    "category": "people",
    "shortname": ":man_mage:",
    "keyWords": [
      "sorcerer",
      "wizard"
    ],
    "output": "1f9d9-200d-2642-fe0f"
  },
  {
    "name": "man mage: light skin tone",
    "category": "people",
    "shortname": ":man_mage_tone1:",
    "keyWords": [
      "light skin tone",
      "sorcerer",
      "wizard"
    ],
    "output": "1f9d9-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man mage: medium-light skin tone",
    "category": "people",
    "shortname": ":man_mage_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "sorcerer",
      "wizard"
    ],
    "output": "1f9d9-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man mage: medium skin tone",
    "category": "people",
    "shortname": ":man_mage_tone3:",
    "keyWords": [
      "medium skin tone",
      "sorcerer",
      "wizard"
    ],
    "output": "1f9d9-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man mage: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_mage_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "sorcerer",
      "wizard"
    ],
    "output": "1f9d9-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man mage: dark skin tone",
    "category": "people",
    "shortname": ":man_mage_tone5:",
    "keyWords": [
      "dark skin tone",
      "sorcerer",
      "wizard"
    ],
    "output": "1f9d9-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "elf",
    "category": "people",
    "shortname": ":elf:",
    "keyWords": [
      ""
    ],
    "output": "1f9dd"
  },
  {
    "name": "elf: light skin tone",
    "category": "people",
    "shortname": ":elf_tone1:",
    "keyWords": [
      "light skin tone",
      "magical"
    ],
    "output": "1f9dd-1f3fb"
  },
  {
    "name": "elf: medium-light skin tone",
    "category": "people",
    "shortname": ":elf_tone2:",
    "keyWords": [
      "magical",
      "medium-light skin tone"
    ],
    "output": "1f9dd-1f3fc"
  },
  {
    "name": "elf: medium skin tone",
    "category": "people",
    "shortname": ":elf_tone3:",
    "keyWords": [
      "magical",
      "medium skin tone"
    ],
    "output": "1f9dd-1f3fd"
  },
  {
    "name": "elf: medium-dark skin tone",
    "category": "people",
    "shortname": ":elf_tone4:",
    "keyWords": [
      "magical",
      "medium-dark skin tone"
    ],
    "output": "1f9dd-1f3fe"
  },
  {
    "name": "elf: dark skin tone",
    "category": "people",
    "shortname": ":elf_tone5:",
    "keyWords": [
      "dark skin tone",
      "magical"
    ],
    "output": "1f9dd-1f3ff"
  },
  {
    "name": "woman elf",
    "category": "people",
    "shortname": ":woman_elf:",
    "keyWords": [
      "magical"
    ],
    "output": "1f9dd-200d-2640-fe0f"
  },
  {
    "name": "woman elf: light skin tone",
    "category": "people",
    "shortname": ":woman_elf_tone1:",
    "keyWords": [
      "light skin tone",
      "magical"
    ],
    "output": "1f9dd-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman elf: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_elf_tone2:",
    "keyWords": [
      "magical",
      "medium-light skin tone"
    ],
    "output": "1f9dd-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman elf: medium skin tone",
    "category": "people",
    "shortname": ":woman_elf_tone3:",
    "keyWords": [
      "magical",
      "medium skin tone"
    ],
    "output": "1f9dd-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman elf: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_elf_tone4:",
    "keyWords": [
      "magical",
      "medium-dark skin tone"
    ],
    "output": "1f9dd-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman elf: dark skin tone",
    "category": "people",
    "shortname": ":woman_elf_tone5:",
    "keyWords": [
      "dark skin tone",
      "magical"
    ],
    "output": "1f9dd-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man elf",
    "category": "people",
    "shortname": ":man_elf:",
    "keyWords": [
      "magical"
    ],
    "output": "1f9dd-200d-2642-fe0f"
  },
  {
    "name": "man elf: light skin tone",
    "category": "people",
    "shortname": ":man_elf_tone1:",
    "keyWords": [
      "light skin tone",
      "magical"
    ],
    "output": "1f9dd-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man elf: medium-light skin tone",
    "category": "people",
    "shortname": ":man_elf_tone2:",
    "keyWords": [
      "magical",
      "medium-light skin tone"
    ],
    "output": "1f9dd-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man elf: medium skin tone",
    "category": "people",
    "shortname": ":man_elf_tone3:",
    "keyWords": [
      "magical",
      "medium skin tone"
    ],
    "output": "1f9dd-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man elf: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_elf_tone4:",
    "keyWords": [
      "magical",
      "medium-dark skin tone"
    ],
    "output": "1f9dd-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man elf: dark skin tone",
    "category": "people",
    "shortname": ":man_elf_tone5:",
    "keyWords": [
      "dark skin tone",
      "magical"
    ],
    "output": "1f9dd-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "vampire",
    "category": "people",
    "shortname": ":vampire:",
    "keyWords": [
      "Dracula",
      "undead"
    ],
    "output": "1f9db"
  },
  {
    "name": "vampire: light skin tone",
    "category": "people",
    "shortname": ":vampire_tone1:",
    "keyWords": [
      "Dracula",
      "light skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fb"
  },
  {
    "name": "vampire: medium-light skin tone",
    "category": "people",
    "shortname": ":vampire_tone2:",
    "keyWords": [
      "Dracula",
      "medium-light skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fc"
  },
  {
    "name": "vampire: medium skin tone",
    "category": "people",
    "shortname": ":vampire_tone3:",
    "keyWords": [
      "Dracula",
      "medium skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fd"
  },
  {
    "name": "vampire: medium-dark skin tone",
    "category": "people",
    "shortname": ":vampire_tone4:",
    "keyWords": [
      "Dracula",
      "medium-dark skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fe"
  },
  {
    "name": "vampire: dark skin tone",
    "category": "people",
    "shortname": ":vampire_tone5:",
    "keyWords": [
      "Dracula",
      "dark skin tone",
      "undead"
    ],
    "output": "1f9db-1f3ff"
  },
  {
    "name": "woman vampire",
    "category": "people",
    "shortname": ":woman_vampire:",
    "keyWords": [
      "undead"
    ],
    "output": "1f9db-200d-2640-fe0f"
  },
  {
    "name": "woman vampire: light skin tone",
    "category": "people",
    "shortname": ":woman_vampire_tone1:",
    "keyWords": [
      "light skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman vampire: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_vampire_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman vampire: medium skin tone",
    "category": "people",
    "shortname": ":woman_vampire_tone3:",
    "keyWords": [
      "medium skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman vampire: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_vampire_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman vampire: dark skin tone",
    "category": "people",
    "shortname": ":woman_vampire_tone5:",
    "keyWords": [
      "dark skin tone",
      "undead"
    ],
    "output": "1f9db-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man vampire",
    "category": "people",
    "shortname": ":man_vampire:",
    "keyWords": [
      "Dracula",
      "undead"
    ],
    "output": "1f9db-200d-2642-fe0f"
  },
  {
    "name": "man vampire: light skin tone",
    "category": "people",
    "shortname": ":man_vampire_tone1:",
    "keyWords": [
      "Dracula",
      "light skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man vampire: medium-light skin tone",
    "category": "people",
    "shortname": ":man_vampire_tone2:",
    "keyWords": [
      "Dracula",
      "medium-light skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man vampire: medium skin tone",
    "category": "people",
    "shortname": ":man_vampire_tone3:",
    "keyWords": [
      "Dracula",
      "medium skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man vampire: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_vampire_tone4:",
    "keyWords": [
      "Dracula",
      "medium-dark skin tone",
      "undead"
    ],
    "output": "1f9db-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man vampire: dark skin tone",
    "category": "people",
    "shortname": ":man_vampire_tone5:",
    "keyWords": [
      "Dracula",
      "dark skin tone",
      "undead"
    ],
    "output": "1f9db-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "zombie",
    "category": "people",
    "shortname": ":zombie:",
    "keyWords": [
      ""
    ],
    "output": "1f9df"
  },
  {
    "name": "woman zombie",
    "category": "people",
    "shortname": ":woman_zombie:",
    "keyWords": [
      "undead",
      "walking dead"
    ],
    "output": "1f9df-200d-2640-fe0f"
  },
  {
    "name": "man zombie",
    "category": "people",
    "shortname": ":man_zombie:",
    "keyWords": [
      "undead",
      "walking dead"
    ],
    "output": "1f9df-200d-2642-fe0f"
  },
  {
    "name": "genie",
    "category": "people",
    "shortname": ":genie:",
    "keyWords": [
      ""
    ],
    "output": "1f9de"
  },
  {
    "name": "woman genie",
    "category": "people",
    "shortname": ":woman_genie:",
    "keyWords": [
      "djinn"
    ],
    "output": "1f9de-200d-2640-fe0f"
  },
  {
    "name": "man genie",
    "category": "people",
    "shortname": ":man_genie:",
    "keyWords": [
      "djinn"
    ],
    "output": "1f9de-200d-2642-fe0f"
  },
  {
    "name": "merperson",
    "category": "people",
    "shortname": ":merperson:",
    "keyWords": [
      "mermaid",
      "merman",
      "merwoman"
    ],
    "output": "1f9dc"
  },
  {
    "name": "merperson: light skin tone",
    "category": "people",
    "shortname": ":merperson_tone1:",
    "keyWords": [
      "light skin tone",
      "mermaid",
      "merman",
      "merwoman"
    ],
    "output": "1f9dc-1f3fb"
  },
  {
    "name": "merperson: medium-light skin tone",
    "category": "people",
    "shortname": ":merperson_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "mermaid",
      "merman",
      "merwoman"
    ],
    "output": "1f9dc-1f3fc"
  },
  {
    "name": "merperson: medium skin tone",
    "category": "people",
    "shortname": ":merperson_tone3:",
    "keyWords": [
      "medium skin tone",
      "mermaid",
      "merman",
      "merwoman"
    ],
    "output": "1f9dc-1f3fd"
  },
  {
    "name": "merperson: medium-dark skin tone",
    "category": "people",
    "shortname": ":merperson_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "mermaid",
      "merman",
      "merwoman"
    ],
    "output": "1f9dc-1f3fe"
  },
  {
    "name": "merperson: dark skin tone",
    "category": "people",
    "shortname": ":merperson_tone5:",
    "keyWords": [
      "dark skin tone",
      "mermaid",
      "merman",
      "merwoman"
    ],
    "output": "1f9dc-1f3ff"
  },
  {
    "name": "mermaid",
    "category": "people",
    "shortname": ":mermaid:",
    "keyWords": [
      "merwoman"
    ],
    "output": "1f9dc-200d-2640-fe0f"
  },
  {
    "name": "mermaid: light skin tone",
    "category": "people",
    "shortname": ":mermaid_tone1:",
    "keyWords": [
      "light skin tone",
      "merwoman"
    ],
    "output": "1f9dc-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "mermaid: medium-light skin tone",
    "category": "people",
    "shortname": ":mermaid_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "merwoman"
    ],
    "output": "1f9dc-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "mermaid: medium skin tone",
    "category": "people",
    "shortname": ":mermaid_tone3:",
    "keyWords": [
      "medium skin tone",
      "merwoman"
    ],
    "output": "1f9dc-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "mermaid: medium-dark skin tone",
    "category": "people",
    "shortname": ":mermaid_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "merwoman"
    ],
    "output": "1f9dc-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "mermaid: dark skin tone",
    "category": "people",
    "shortname": ":mermaid_tone5:",
    "keyWords": [
      "dark skin tone",
      "merwoman"
    ],
    "output": "1f9dc-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "merman",
    "category": "people",
    "shortname": ":merman:",
    "keyWords": [
      "Triton"
    ],
    "output": "1f9dc-200d-2642-fe0f"
  },
  {
    "name": "merman: light skin tone",
    "category": "people",
    "shortname": ":merman_tone1:",
    "keyWords": [
      "Triton",
      "light skin tone"
    ],
    "output": "1f9dc-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "merman: medium-light skin tone",
    "category": "people",
    "shortname": ":merman_tone2:",
    "keyWords": [
      "Triton",
      "medium-light skin tone"
    ],
    "output": "1f9dc-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "merman: medium skin tone",
    "category": "people",
    "shortname": ":merman_tone3:",
    "keyWords": [
      "Triton",
      "medium skin tone"
    ],
    "output": "1f9dc-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "merman: medium-dark skin tone",
    "category": "people",
    "shortname": ":merman_tone4:",
    "keyWords": [
      "Triton",
      "medium-dark skin tone"
    ],
    "output": "1f9dc-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "merman: dark skin tone",
    "category": "people",
    "shortname": ":merman_tone5:",
    "keyWords": [
      "Triton",
      "dark skin tone"
    ],
    "output": "1f9dc-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "fairy",
    "category": "people",
    "shortname": ":fairy:",
    "keyWords": [
      "Oberon",
      "Puck",
      "Titania"
    ],
    "output": "1f9da"
  },
  {
    "name": "fairy: light skin tone",
    "category": "people",
    "shortname": ":fairy_tone1:",
    "keyWords": [
      "Oberon",
      "Puck",
      "Titania",
      "light skin tone"
    ],
    "output": "1f9da-1f3fb"
  },
  {
    "name": "fairy: medium-light skin tone",
    "category": "people",
    "shortname": ":fairy_tone2:",
    "keyWords": [
      "Oberon",
      "Puck",
      "Titania",
      "medium-light skin tone"
    ],
    "output": "1f9da-1f3fc"
  },
  {
    "name": "fairy: medium skin tone",
    "category": "people",
    "shortname": ":fairy_tone3:",
    "keyWords": [
      "Oberon",
      "Puck",
      "Titania",
      "medium skin tone"
    ],
    "output": "1f9da-1f3fd"
  },
  {
    "name": "fairy: medium-dark skin tone",
    "category": "people",
    "shortname": ":fairy_tone4:",
    "keyWords": [
      "Oberon",
      "Puck",
      "Titania",
      "medium-dark skin tone"
    ],
    "output": "1f9da-1f3fe"
  },
  {
    "name": "fairy: dark skin tone",
    "category": "people",
    "shortname": ":fairy_tone5:",
    "keyWords": [
      "Oberon",
      "Puck",
      "Titania",
      "dark skin tone"
    ],
    "output": "1f9da-1f3ff"
  },
  {
    "name": "woman fairy",
    "category": "people",
    "shortname": ":woman_fairy:",
    "keyWords": [
      "Titania"
    ],
    "output": "1f9da-200d-2640-fe0f"
  },
  {
    "name": "woman fairy: light skin tone",
    "category": "people",
    "shortname": ":woman_fairy_tone1:",
    "keyWords": [
      "Titania",
      "light skin tone"
    ],
    "output": "1f9da-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman fairy: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_fairy_tone2:",
    "keyWords": [
      "Titania",
      "medium-light skin tone"
    ],
    "output": "1f9da-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman fairy: medium skin tone",
    "category": "people",
    "shortname": ":woman_fairy_tone3:",
    "keyWords": [
      "Titania",
      "medium skin tone"
    ],
    "output": "1f9da-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman fairy: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_fairy_tone4:",
    "keyWords": [
      "Titania",
      "medium-dark skin tone"
    ],
    "output": "1f9da-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman fairy: dark skin tone",
    "category": "people",
    "shortname": ":woman_fairy_tone5:",
    "keyWords": [
      "Titania",
      "dark skin tone"
    ],
    "output": "1f9da-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man fairy",
    "category": "people",
    "shortname": ":man_fairy:",
    "keyWords": [
      "Oberon",
      "Puck"
    ],
    "output": "1f9da-200d-2642-fe0f"
  },
  {
    "name": "man fairy: light skin tone",
    "category": "people",
    "shortname": ":man_fairy_tone1:",
    "keyWords": [
      "Oberon",
      "Puck",
      "light skin tone"
    ],
    "output": "1f9da-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man fairy: medium-light skin tone",
    "category": "people",
    "shortname": ":man_fairy_tone2:",
    "keyWords": [
      "Oberon",
      "Puck",
      "medium-light skin tone"
    ],
    "output": "1f9da-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man fairy: medium skin tone",
    "category": "people",
    "shortname": ":man_fairy_tone3:",
    "keyWords": [
      "Oberon",
      "Puck",
      "medium skin tone"
    ],
    "output": "1f9da-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man fairy: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_fairy_tone4:",
    "keyWords": [
      "Oberon",
      "Puck",
      "medium-dark skin tone"
    ],
    "output": "1f9da-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man fairy: dark skin tone",
    "category": "people",
    "shortname": ":man_fairy_tone5:",
    "keyWords": [
      "Oberon",
      "Puck",
      "dark skin tone"
    ],
    "output": "1f9da-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "baby angel",
    "category": "people",
    "shortname": ":angel:",
    "keyWords": [
      "angel",
      "baby",
      "face",
      "fairy tale",
      "fantasy"
    ],
    "output": "1f47c"
  },
  {
    "name": "baby angel: light skin tone",
    "category": "people",
    "shortname": ":angel_tone1:",
    "keyWords": [
      "angel",
      "baby",
      "face",
      "fairy tale",
      "fantasy",
      "light skin tone"
    ],
    "output": "1f47c-1f3fb"
  },
  {
    "name": "baby angel: medium-light skin tone",
    "category": "people",
    "shortname": ":angel_tone2:",
    "keyWords": [
      "angel",
      "baby",
      "face",
      "fairy tale",
      "fantasy",
      "medium-light skin tone"
    ],
    "output": "1f47c-1f3fc"
  },
  {
    "name": "baby angel: medium skin tone",
    "category": "people",
    "shortname": ":angel_tone3:",
    "keyWords": [
      "angel",
      "baby",
      "face",
      "fairy tale",
      "fantasy",
      "medium skin tone"
    ],
    "output": "1f47c-1f3fd"
  },
  {
    "name": "baby angel: medium-dark skin tone",
    "category": "people",
    "shortname": ":angel_tone4:",
    "keyWords": [
      "angel",
      "baby",
      "face",
      "fairy tale",
      "fantasy",
      "medium-dark skin tone"
    ],
    "output": "1f47c-1f3fe"
  },
  {
    "name": "baby angel: dark skin tone",
    "category": "people",
    "shortname": ":angel_tone5:",
    "keyWords": [
      "angel",
      "baby",
      "dark skin tone",
      "face",
      "fairy tale",
      "fantasy"
    ],
    "output": "1f47c-1f3ff"
  },
  {
    "name": "pregnant woman",
    "category": "people",
    "shortname": ":pregnant_woman:",
    "keyWords": [
      "pregnant",
      "woman"
    ],
    "output": "1f930"
  },
  {
    "name": "pregnant woman: light skin tone",
    "category": "people",
    "shortname": ":pregnant_woman_tone1:",
    "keyWords": [
      "light skin tone",
      "pregnant",
      "woman"
    ],
    "output": "1f930-1f3fb"
  },
  {
    "name": "pregnant woman: medium-light skin tone",
    "category": "people",
    "shortname": ":pregnant_woman_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "pregnant",
      "woman"
    ],
    "output": "1f930-1f3fc"
  },
  {
    "name": "pregnant woman: medium skin tone",
    "category": "people",
    "shortname": ":pregnant_woman_tone3:",
    "keyWords": [
      "medium skin tone",
      "pregnant",
      "woman"
    ],
    "output": "1f930-1f3fd"
  },
  {
    "name": "pregnant woman: medium-dark skin tone",
    "category": "people",
    "shortname": ":pregnant_woman_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "pregnant",
      "woman"
    ],
    "output": "1f930-1f3fe"
  },
  {
    "name": "pregnant woman: dark skin tone",
    "category": "people",
    "shortname": ":pregnant_woman_tone5:",
    "keyWords": [
      "dark skin tone",
      "pregnant",
      "woman"
    ],
    "output": "1f930-1f3ff"
  },
  {
    "name": "breast-feeding",
    "category": "people",
    "shortname": ":breast_feeding:",
    "keyWords": [
      "baby",
      "breast",
      "nursing"
    ],
    "output": "1f931"
  },
  {
    "name": "breast-feeding: light skin tone",
    "category": "people",
    "shortname": ":breast_feeding_tone1:",
    "keyWords": [
      "baby",
      "breast",
      "light skin tone",
      "nursing"
    ],
    "output": "1f931-1f3fb"
  },
  {
    "name": "breast-feeding: medium-light skin tone",
    "category": "people",
    "shortname": ":breast_feeding_tone2:",
    "keyWords": [
      "baby",
      "breast",
      "medium-light skin tone",
      "nursing"
    ],
    "output": "1f931-1f3fc"
  },
  {
    "name": "breast-feeding: medium skin tone",
    "category": "people",
    "shortname": ":breast_feeding_tone3:",
    "keyWords": [
      "baby",
      "breast",
      "medium skin tone",
      "nursing"
    ],
    "output": "1f931-1f3fd"
  },
  {
    "name": "breast-feeding: medium-dark skin tone",
    "category": "people",
    "shortname": ":breast_feeding_tone4:",
    "keyWords": [
      "baby",
      "breast",
      "medium-dark skin tone",
      "nursing"
    ],
    "output": "1f931-1f3fe"
  },
  {
    "name": "breast-feeding: dark skin tone",
    "category": "people",
    "shortname": ":breast_feeding_tone5:",
    "keyWords": [
      "baby",
      "breast",
      "dark skin tone",
      "nursing"
    ],
    "output": "1f931-1f3ff"
  },
  {
    "name": "person bowing",
    "category": "people",
    "shortname": ":person_bowing:",
    "keyWords": [
      "apology",
      "bow",
      "gesture",
      "sorry"
    ],
    "output": "1f647"
  },
  {
    "name": "person bowing: light skin tone",
    "category": "people",
    "shortname": ":person_bowing_tone1:",
    "keyWords": [
      "apology",
      "bow",
      "gesture",
      "light skin tone",
      "sorry"
    ],
    "output": "1f647-1f3fb"
  },
  {
    "name": "person bowing: medium-light skin tone",
    "category": "people",
    "shortname": ":person_bowing_tone2:",
    "keyWords": [
      "apology",
      "bow",
      "gesture",
      "medium-light skin tone",
      "sorry"
    ],
    "output": "1f647-1f3fc"
  },
  {
    "name": "person bowing: medium skin tone",
    "category": "people",
    "shortname": ":person_bowing_tone3:",
    "keyWords": [
      "apology",
      "bow",
      "gesture",
      "medium skin tone",
      "sorry"
    ],
    "output": "1f647-1f3fd"
  },
  {
    "name": "person bowing: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_bowing_tone4:",
    "keyWords": [
      "apology",
      "bow",
      "gesture",
      "medium-dark skin tone",
      "sorry"
    ],
    "output": "1f647-1f3fe"
  },
  {
    "name": "person bowing: dark skin tone",
    "category": "people",
    "shortname": ":person_bowing_tone5:",
    "keyWords": [
      "apology",
      "bow",
      "dark skin tone",
      "gesture",
      "sorry"
    ],
    "output": "1f647-1f3ff"
  },
  {
    "name": "woman bowing",
    "category": "people",
    "shortname": ":woman_bowing:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "sorry",
      "woman"
    ],
    "output": "1f647-200d-2640-fe0f"
  },
  {
    "name": "woman bowing: light skin tone",
    "category": "people",
    "shortname": ":woman_bowing_tone1:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "light skin tone",
      "sorry",
      "woman"
    ],
    "output": "1f647-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman bowing: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_bowing_tone2:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "medium-light skin tone",
      "sorry",
      "woman"
    ],
    "output": "1f647-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman bowing: medium skin tone",
    "category": "people",
    "shortname": ":woman_bowing_tone3:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "medium skin tone",
      "sorry",
      "woman"
    ],
    "output": "1f647-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman bowing: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_bowing_tone4:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "medium-dark skin tone",
      "sorry",
      "woman"
    ],
    "output": "1f647-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman bowing: dark skin tone",
    "category": "people",
    "shortname": ":woman_bowing_tone5:",
    "keyWords": [
      "apology",
      "bowing",
      "dark skin tone",
      "favor",
      "gesture",
      "sorry",
      "woman"
    ],
    "output": "1f647-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man bowing",
    "category": "people",
    "shortname": ":man_bowing:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "man",
      "sorry"
    ],
    "output": "1f647-200d-2642-fe0f"
  },
  {
    "name": "man bowing: light skin tone",
    "category": "people",
    "shortname": ":man_bowing_tone1:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "light skin tone",
      "man",
      "sorry"
    ],
    "output": "1f647-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man bowing: medium-light skin tone",
    "category": "people",
    "shortname": ":man_bowing_tone2:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "man",
      "medium-light skin tone",
      "sorry"
    ],
    "output": "1f647-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man bowing: medium skin tone",
    "category": "people",
    "shortname": ":man_bowing_tone3:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "man",
      "medium skin tone",
      "sorry"
    ],
    "output": "1f647-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man bowing: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_bowing_tone4:",
    "keyWords": [
      "apology",
      "bowing",
      "favor",
      "gesture",
      "man",
      "medium-dark skin tone",
      "sorry"
    ],
    "output": "1f647-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man bowing: dark skin tone",
    "category": "people",
    "shortname": ":man_bowing_tone5:",
    "keyWords": [
      "apology",
      "bowing",
      "dark skin tone",
      "favor",
      "gesture",
      "man",
      "sorry"
    ],
    "output": "1f647-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person tipping hand",
    "category": "people",
    "shortname": ":person_tipping_hand:",
    "keyWords": [
      "hand",
      "help",
      "information",
      "sassy",
      "tipping"
    ],
    "output": "1f481"
  },
  {
    "name": "person tipping hand: light skin tone",
    "category": "people",
    "shortname": ":person_tipping_hand_tone1:",
    "keyWords": [
      "hand",
      "help",
      "information",
      "light skin tone",
      "sassy",
      "tipping"
    ],
    "output": "1f481-1f3fb"
  },
  {
    "name": "person tipping hand: medium-light skin tone",
    "category": "people",
    "shortname": ":person_tipping_hand_tone2:",
    "keyWords": [
      "hand",
      "help",
      "information",
      "medium-light skin tone",
      "sassy",
      "tipping"
    ],
    "output": "1f481-1f3fc"
  },
  {
    "name": "person tipping hand: medium skin tone",
    "category": "people",
    "shortname": ":person_tipping_hand_tone3:",
    "keyWords": [
      "hand",
      "help",
      "information",
      "medium skin tone",
      "sassy",
      "tipping"
    ],
    "output": "1f481-1f3fd"
  },
  {
    "name": "person tipping hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_tipping_hand_tone4:",
    "keyWords": [
      "hand",
      "help",
      "information",
      "medium-dark skin tone",
      "sassy",
      "tipping"
    ],
    "output": "1f481-1f3fe"
  },
  {
    "name": "person tipping hand: dark skin tone",
    "category": "people",
    "shortname": ":person_tipping_hand_tone5:",
    "keyWords": [
      "dark skin tone",
      "hand",
      "help",
      "information",
      "sassy",
      "tipping"
    ],
    "output": "1f481-1f3ff"
  },
  {
    "name": "woman tipping hand",
    "category": "people",
    "shortname": ":woman_tipping_hand:",
    "keyWords": [
      "sassy",
      "tipping hand",
      "woman"
    ],
    "output": "1f481-200d-2640-fe0f"
  },
  {
    "name": "woman tipping hand: light skin tone",
    "category": "people",
    "shortname": ":woman_tipping_hand_tone1:",
    "keyWords": [
      "light skin tone",
      "sassy",
      "tipping hand",
      "woman"
    ],
    "output": "1f481-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman tipping hand: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_tipping_hand_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "sassy",
      "tipping hand",
      "woman"
    ],
    "output": "1f481-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman tipping hand: medium skin tone",
    "category": "people",
    "shortname": ":woman_tipping_hand_tone3:",
    "keyWords": [
      "medium skin tone",
      "sassy",
      "tipping hand",
      "woman"
    ],
    "output": "1f481-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman tipping hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_tipping_hand_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "sassy",
      "tipping hand",
      "woman"
    ],
    "output": "1f481-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman tipping hand: dark skin tone",
    "category": "people",
    "shortname": ":woman_tipping_hand_tone5:",
    "keyWords": [
      "dark skin tone",
      "sassy",
      "tipping hand",
      "woman"
    ],
    "output": "1f481-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man tipping hand",
    "category": "people",
    "shortname": ":man_tipping_hand:",
    "keyWords": [
      "man",
      "sassy",
      "tipping hand"
    ],
    "output": "1f481-200d-2642-fe0f"
  },
  {
    "name": "man tipping hand: light skin tone",
    "category": "people",
    "shortname": ":man_tipping_hand_tone1:",
    "keyWords": [
      "light skin tone",
      "man",
      "sassy",
      "tipping hand"
    ],
    "output": "1f481-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man tipping hand: medium-light skin tone",
    "category": "people",
    "shortname": ":man_tipping_hand_tone2:",
    "keyWords": [
      "man",
      "medium-light skin tone",
      "sassy",
      "tipping hand"
    ],
    "output": "1f481-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man tipping hand: medium skin tone",
    "category": "people",
    "shortname": ":man_tipping_hand_tone3:",
    "keyWords": [
      "man",
      "medium skin tone",
      "sassy",
      "tipping hand"
    ],
    "output": "1f481-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man tipping hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_tipping_hand_tone4:",
    "keyWords": [
      "man",
      "medium-dark skin tone",
      "sassy",
      "tipping hand"
    ],
    "output": "1f481-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man tipping hand: dark skin tone",
    "category": "people",
    "shortname": ":man_tipping_hand_tone5:",
    "keyWords": [
      "dark skin tone",
      "man",
      "sassy",
      "tipping hand"
    ],
    "output": "1f481-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person gesturing NO",
    "category": "people",
    "shortname": ":person_gesturing_no:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "no",
      "not",
      "prohibited"
    ],
    "output": "1f645"
  },
  {
    "name": "person gesturing NO: light skin tone",
    "category": "people",
    "shortname": ":person_gesturing_no_tone1:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "light skin tone",
      "no",
      "not",
      "prohibited"
    ],
    "output": "1f645-1f3fb"
  },
  {
    "name": "person gesturing NO: medium-light skin tone",
    "category": "people",
    "shortname": ":person_gesturing_no_tone2:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "medium-light skin tone",
      "no",
      "not",
      "prohibited"
    ],
    "output": "1f645-1f3fc"
  },
  {
    "name": "person gesturing NO: medium skin tone",
    "category": "people",
    "shortname": ":person_gesturing_no_tone3:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "medium skin tone",
      "no",
      "not",
      "prohibited"
    ],
    "output": "1f645-1f3fd"
  },
  {
    "name": "person gesturing NO: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_gesturing_no_tone4:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "medium-dark skin tone",
      "no",
      "not",
      "prohibited"
    ],
    "output": "1f645-1f3fe"
  },
  {
    "name": "person gesturing NO: dark skin tone",
    "category": "people",
    "shortname": ":person_gesturing_no_tone5:",
    "keyWords": [
      "dark skin tone",
      "forbidden",
      "gesture",
      "hand",
      "no",
      "not",
      "prohibited"
    ],
    "output": "1f645-1f3ff"
  },
  {
    "name": "woman gesturing NO",
    "category": "people",
    "shortname": ":woman_gesturing_no:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "no",
      "prohibited",
      "woman"
    ],
    "output": "1f645-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing NO: light skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_no_tone1:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "light skin tone",
      "no",
      "prohibited",
      "woman"
    ],
    "output": "1f645-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing NO: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_no_tone2:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "medium-light skin tone",
      "no",
      "prohibited",
      "woman"
    ],
    "output": "1f645-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing NO: medium skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_no_tone3:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "medium skin tone",
      "no",
      "prohibited",
      "woman"
    ],
    "output": "1f645-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing NO: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_no_tone4:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "medium-dark skin tone",
      "no",
      "prohibited",
      "woman"
    ],
    "output": "1f645-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing NO: dark skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_no_tone5:",
    "keyWords": [
      "dark skin tone",
      "forbidden",
      "gesture",
      "hand",
      "no",
      "prohibited",
      "woman"
    ],
    "output": "1f645-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man gesturing NO",
    "category": "people",
    "shortname": ":man_gesturing_no:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "man",
      "no",
      "prohibited"
    ],
    "output": "1f645-200d-2642-fe0f"
  },
  {
    "name": "man gesturing NO: light skin tone",
    "category": "people",
    "shortname": ":man_gesturing_no_tone1:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "light skin tone",
      "man",
      "no",
      "prohibited"
    ],
    "output": "1f645-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man gesturing NO: medium-light skin tone",
    "category": "people",
    "shortname": ":man_gesturing_no_tone2:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "man",
      "medium-light skin tone",
      "no",
      "prohibited"
    ],
    "output": "1f645-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man gesturing NO: medium skin tone",
    "category": "people",
    "shortname": ":man_gesturing_no_tone3:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "man",
      "medium skin tone",
      "no",
      "prohibited"
    ],
    "output": "1f645-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man gesturing NO: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_gesturing_no_tone4:",
    "keyWords": [
      "forbidden",
      "gesture",
      "hand",
      "man",
      "medium-dark skin tone",
      "no",
      "prohibited"
    ],
    "output": "1f645-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man gesturing NO: dark skin tone",
    "category": "people",
    "shortname": ":man_gesturing_no_tone5:",
    "keyWords": [
      "dark skin tone",
      "forbidden",
      "gesture",
      "hand",
      "man",
      "no",
      "prohibited"
    ],
    "output": "1f645-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person gesturing OK",
    "category": "people",
    "shortname": ":person_gesturing_ok:",
    "keyWords": [
      "OK",
      "gesture",
      "hand"
    ],
    "output": "1f646"
  },
  {
    "name": "person gesturing OK: light skin tone",
    "category": "people",
    "shortname": ":person_gesturing_ok_tone1:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "light skin tone"
    ],
    "output": "1f646-1f3fb"
  },
  {
    "name": "person gesturing OK: medium-light skin tone",
    "category": "people",
    "shortname": ":person_gesturing_ok_tone2:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "medium-light skin tone"
    ],
    "output": "1f646-1f3fc"
  },
  {
    "name": "person gesturing OK: medium skin tone",
    "category": "people",
    "shortname": ":person_gesturing_ok_tone3:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "medium skin tone"
    ],
    "output": "1f646-1f3fd"
  },
  {
    "name": "person gesturing OK: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_gesturing_ok_tone4:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "medium-dark skin tone"
    ],
    "output": "1f646-1f3fe"
  },
  {
    "name": "person gesturing OK: dark skin tone",
    "category": "people",
    "shortname": ":person_gesturing_ok_tone5:",
    "keyWords": [
      "OK",
      "dark skin tone",
      "gesture",
      "hand"
    ],
    "output": "1f646-1f3ff"
  },
  {
    "name": "woman gesturing OK",
    "category": "people",
    "shortname": ":woman_gesturing_ok:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "woman"
    ],
    "output": "1f646-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing OK: light skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_ok_tone1:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "light skin tone",
      "woman"
    ],
    "output": "1f646-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing OK: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_ok_tone2:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f646-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing OK: medium skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_ok_tone3:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "medium skin tone",
      "woman"
    ],
    "output": "1f646-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing OK: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_ok_tone4:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f646-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman gesturing OK: dark skin tone",
    "category": "people",
    "shortname": ":woman_gesturing_ok_tone5:",
    "keyWords": [
      "OK",
      "dark skin tone",
      "gesture",
      "hand",
      "woman"
    ],
    "output": "1f646-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man gesturing OK",
    "category": "people",
    "shortname": ":man_gesturing_ok:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "man"
    ],
    "output": "1f646-200d-2642-fe0f"
  },
  {
    "name": "man gesturing OK: light skin tone",
    "category": "people",
    "shortname": ":man_gesturing_ok_tone1:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "light skin tone",
      "man"
    ],
    "output": "1f646-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man gesturing OK: medium-light skin tone",
    "category": "people",
    "shortname": ":man_gesturing_ok_tone2:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f646-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man gesturing OK: medium skin tone",
    "category": "people",
    "shortname": ":man_gesturing_ok_tone3:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "man",
      "medium skin tone"
    ],
    "output": "1f646-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man gesturing OK: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_gesturing_ok_tone4:",
    "keyWords": [
      "OK",
      "gesture",
      "hand",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f646-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man gesturing OK: dark skin tone",
    "category": "people",
    "shortname": ":man_gesturing_ok_tone5:",
    "keyWords": [
      "OK",
      "dark skin tone",
      "gesture",
      "hand",
      "man"
    ],
    "output": "1f646-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person raising hand",
    "category": "people",
    "shortname": ":person_raising_hand:",
    "keyWords": [
      "gesture",
      "hand",
      "happy",
      "raised"
    ],
    "output": "1f64b"
  },
  {
    "name": "person raising hand: light skin tone",
    "category": "people",
    "shortname": ":person_raising_hand_tone1:",
    "keyWords": [
      "gesture",
      "hand",
      "happy",
      "light skin tone",
      "raised"
    ],
    "output": "1f64b-1f3fb"
  },
  {
    "name": "person raising hand: medium-light skin tone",
    "category": "people",
    "shortname": ":person_raising_hand_tone2:",
    "keyWords": [
      "gesture",
      "hand",
      "happy",
      "medium-light skin tone",
      "raised"
    ],
    "output": "1f64b-1f3fc"
  },
  {
    "name": "person raising hand: medium skin tone",
    "category": "people",
    "shortname": ":person_raising_hand_tone3:",
    "keyWords": [
      "gesture",
      "hand",
      "happy",
      "medium skin tone",
      "raised"
    ],
    "output": "1f64b-1f3fd"
  },
  {
    "name": "person raising hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_raising_hand_tone4:",
    "keyWords": [
      "gesture",
      "hand",
      "happy",
      "medium-dark skin tone",
      "raised"
    ],
    "output": "1f64b-1f3fe"
  },
  {
    "name": "person raising hand: dark skin tone",
    "category": "people",
    "shortname": ":person_raising_hand_tone5:",
    "keyWords": [
      "dark skin tone",
      "gesture",
      "hand",
      "happy",
      "raised"
    ],
    "output": "1f64b-1f3ff"
  },
  {
    "name": "woman raising hand",
    "category": "people",
    "shortname": ":woman_raising_hand:",
    "keyWords": [
      "gesture",
      "raising hand",
      "woman"
    ],
    "output": "1f64b-200d-2640-fe0f"
  },
  {
    "name": "woman raising hand: light skin tone",
    "category": "people",
    "shortname": ":woman_raising_hand_tone1:",
    "keyWords": [
      "gesture",
      "light skin tone",
      "raising hand",
      "woman"
    ],
    "output": "1f64b-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman raising hand: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_raising_hand_tone2:",
    "keyWords": [
      "gesture",
      "medium-light skin tone",
      "raising hand",
      "woman"
    ],
    "output": "1f64b-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman raising hand: medium skin tone",
    "category": "people",
    "shortname": ":woman_raising_hand_tone3:",
    "keyWords": [
      "gesture",
      "medium skin tone",
      "raising hand",
      "woman"
    ],
    "output": "1f64b-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman raising hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_raising_hand_tone4:",
    "keyWords": [
      "gesture",
      "medium-dark skin tone",
      "raising hand",
      "woman"
    ],
    "output": "1f64b-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman raising hand: dark skin tone",
    "category": "people",
    "shortname": ":woman_raising_hand_tone5:",
    "keyWords": [
      "dark skin tone",
      "gesture",
      "raising hand",
      "woman"
    ],
    "output": "1f64b-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man raising hand",
    "category": "people",
    "shortname": ":man_raising_hand:",
    "keyWords": [
      "gesture",
      "man",
      "raising hand"
    ],
    "output": "1f64b-200d-2642-fe0f"
  },
  {
    "name": "man raising hand: light skin tone",
    "category": "people",
    "shortname": ":man_raising_hand_tone1:",
    "keyWords": [
      "gesture",
      "light skin tone",
      "man",
      "raising hand"
    ],
    "output": "1f64b-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man raising hand: medium-light skin tone",
    "category": "people",
    "shortname": ":man_raising_hand_tone2:",
    "keyWords": [
      "gesture",
      "man",
      "medium-light skin tone",
      "raising hand"
    ],
    "output": "1f64b-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man raising hand: medium skin tone",
    "category": "people",
    "shortname": ":man_raising_hand_tone3:",
    "keyWords": [
      "gesture",
      "man",
      "medium skin tone",
      "raising hand"
    ],
    "output": "1f64b-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man raising hand: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_raising_hand_tone4:",
    "keyWords": [
      "gesture",
      "man",
      "medium-dark skin tone",
      "raising hand"
    ],
    "output": "1f64b-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man raising hand: dark skin tone",
    "category": "people",
    "shortname": ":man_raising_hand_tone5:",
    "keyWords": [
      "dark skin tone",
      "gesture",
      "man",
      "raising hand"
    ],
    "output": "1f64b-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person facepalming",
    "category": "people",
    "shortname": ":person_facepalming:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "face",
      "palm"
    ],
    "output": "1f926"
  },
  {
    "name": "person facepalming: light skin tone",
    "category": "people",
    "shortname": ":person_facepalming_tone1:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "face",
      "light skin tone",
      "palm"
    ],
    "output": "1f926-1f3fb"
  },
  {
    "name": "person facepalming: medium-light skin tone",
    "category": "people",
    "shortname": ":person_facepalming_tone2:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "face",
      "medium-light skin tone",
      "palm"
    ],
    "output": "1f926-1f3fc"
  },
  {
    "name": "person facepalming: medium skin tone",
    "category": "people",
    "shortname": ":person_facepalming_tone3:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "face",
      "medium skin tone",
      "palm"
    ],
    "output": "1f926-1f3fd"
  },
  {
    "name": "person facepalming: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_facepalming_tone4:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "face",
      "medium-dark skin tone",
      "palm"
    ],
    "output": "1f926-1f3fe"
  },
  {
    "name": "person facepalming: dark skin tone",
    "category": "people",
    "shortname": ":person_facepalming_tone5:",
    "keyWords": [
      "dark skin tone",
      "disbelief",
      "exasperation",
      "face",
      "palm"
    ],
    "output": "1f926-1f3ff"
  },
  {
    "name": "woman facepalming",
    "category": "people",
    "shortname": ":woman_facepalming:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "woman"
    ],
    "output": "1f926-200d-2640-fe0f"
  },
  {
    "name": "woman facepalming: light skin tone",
    "category": "people",
    "shortname": ":woman_facepalming_tone1:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "light skin tone",
      "woman"
    ],
    "output": "1f926-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman facepalming: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_facepalming_tone2:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f926-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman facepalming: medium skin tone",
    "category": "people",
    "shortname": ":woman_facepalming_tone3:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "medium skin tone",
      "woman"
    ],
    "output": "1f926-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman facepalming: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_facepalming_tone4:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f926-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman facepalming: dark skin tone",
    "category": "people",
    "shortname": ":woman_facepalming_tone5:",
    "keyWords": [
      "dark skin tone",
      "disbelief",
      "exasperation",
      "facepalm",
      "woman"
    ],
    "output": "1f926-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man facepalming",
    "category": "people",
    "shortname": ":man_facepalming:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "man"
    ],
    "output": "1f926-200d-2642-fe0f"
  },
  {
    "name": "man facepalming: light skin tone",
    "category": "people",
    "shortname": ":man_facepalming_tone1:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "light skin tone",
      "man"
    ],
    "output": "1f926-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man facepalming: medium-light skin tone",
    "category": "people",
    "shortname": ":man_facepalming_tone2:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f926-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man facepalming: medium skin tone",
    "category": "people",
    "shortname": ":man_facepalming_tone3:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "man",
      "medium skin tone"
    ],
    "output": "1f926-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man facepalming: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_facepalming_tone4:",
    "keyWords": [
      "disbelief",
      "exasperation",
      "facepalm",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f926-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man facepalming: dark skin tone",
    "category": "people",
    "shortname": ":man_facepalming_tone5:",
    "keyWords": [
      "dark skin tone",
      "disbelief",
      "exasperation",
      "facepalm",
      "man"
    ],
    "output": "1f926-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person shrugging",
    "category": "people",
    "shortname": ":person_shrugging:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "shrug"
    ],
    "output": "1f937"
  },
  {
    "name": "person shrugging: light skin tone",
    "category": "people",
    "shortname": ":person_shrugging_tone1:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "light skin tone",
      "shrug"
    ],
    "output": "1f937-1f3fb"
  },
  {
    "name": "person shrugging: medium-light skin tone",
    "category": "people",
    "shortname": ":person_shrugging_tone2:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "medium-light skin tone",
      "shrug"
    ],
    "output": "1f937-1f3fc"
  },
  {
    "name": "person shrugging: medium skin tone",
    "category": "people",
    "shortname": ":person_shrugging_tone3:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "medium skin tone",
      "shrug"
    ],
    "output": "1f937-1f3fd"
  },
  {
    "name": "person shrugging: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_shrugging_tone4:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "medium-dark skin tone",
      "shrug"
    ],
    "output": "1f937-1f3fe"
  },
  {
    "name": "person shrugging: dark skin tone",
    "category": "people",
    "shortname": ":person_shrugging_tone5:",
    "keyWords": [
      "dark skin tone",
      "doubt",
      "ignorance",
      "indifference",
      "shrug"
    ],
    "output": "1f937-1f3ff"
  },
  {
    "name": "woman shrugging",
    "category": "people",
    "shortname": ":woman_shrugging:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "shrug",
      "woman"
    ],
    "output": "1f937-200d-2640-fe0f"
  },
  {
    "name": "woman shrugging: light skin tone",
    "category": "people",
    "shortname": ":woman_shrugging_tone1:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "light skin tone",
      "shrug",
      "woman"
    ],
    "output": "1f937-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman shrugging: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_shrugging_tone2:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "medium-light skin tone",
      "shrug",
      "woman"
    ],
    "output": "1f937-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman shrugging: medium skin tone",
    "category": "people",
    "shortname": ":woman_shrugging_tone3:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "medium skin tone",
      "shrug",
      "woman"
    ],
    "output": "1f937-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman shrugging: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_shrugging_tone4:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "medium-dark skin tone",
      "shrug",
      "woman"
    ],
    "output": "1f937-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman shrugging: dark skin tone",
    "category": "people",
    "shortname": ":woman_shrugging_tone5:",
    "keyWords": [
      "dark skin tone",
      "doubt",
      "ignorance",
      "indifference",
      "shrug",
      "woman"
    ],
    "output": "1f937-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man shrugging",
    "category": "people",
    "shortname": ":man_shrugging:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "man",
      "shrug"
    ],
    "output": "1f937-200d-2642-fe0f"
  },
  {
    "name": "man shrugging: light skin tone",
    "category": "people",
    "shortname": ":man_shrugging_tone1:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "light skin tone",
      "man",
      "shrug"
    ],
    "output": "1f937-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man shrugging: medium-light skin tone",
    "category": "people",
    "shortname": ":man_shrugging_tone2:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "man",
      "medium-light skin tone",
      "shrug"
    ],
    "output": "1f937-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man shrugging: medium skin tone",
    "category": "people",
    "shortname": ":man_shrugging_tone3:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "man",
      "medium skin tone",
      "shrug"
    ],
    "output": "1f937-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man shrugging: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_shrugging_tone4:",
    "keyWords": [
      "doubt",
      "ignorance",
      "indifference",
      "man",
      "medium-dark skin tone",
      "shrug"
    ],
    "output": "1f937-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man shrugging: dark skin tone",
    "category": "people",
    "shortname": ":man_shrugging_tone5:",
    "keyWords": [
      "dark skin tone",
      "doubt",
      "ignorance",
      "indifference",
      "man",
      "shrug"
    ],
    "output": "1f937-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person pouting",
    "category": "people",
    "shortname": ":person_pouting:",
    "keyWords": [
      "gesture",
      "pouting"
    ],
    "output": "1f64e"
  },
  {
    "name": "person pouting: light skin tone",
    "category": "people",
    "shortname": ":person_pouting_tone1:",
    "keyWords": [
      "gesture",
      "light skin tone",
      "pouting"
    ],
    "output": "1f64e-1f3fb"
  },
  {
    "name": "person pouting: medium-light skin tone",
    "category": "people",
    "shortname": ":person_pouting_tone2:",
    "keyWords": [
      "gesture",
      "medium-light skin tone",
      "pouting"
    ],
    "output": "1f64e-1f3fc"
  },
  {
    "name": "person pouting: medium skin tone",
    "category": "people",
    "shortname": ":person_pouting_tone3:",
    "keyWords": [
      "gesture",
      "medium skin tone",
      "pouting"
    ],
    "output": "1f64e-1f3fd"
  },
  {
    "name": "person pouting: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_pouting_tone4:",
    "keyWords": [
      "gesture",
      "medium-dark skin tone",
      "pouting"
    ],
    "output": "1f64e-1f3fe"
  },
  {
    "name": "person pouting: dark skin tone",
    "category": "people",
    "shortname": ":person_pouting_tone5:",
    "keyWords": [
      "dark skin tone",
      "gesture",
      "pouting"
    ],
    "output": "1f64e-1f3ff"
  },
  {
    "name": "woman pouting",
    "category": "people",
    "shortname": ":woman_pouting:",
    "keyWords": [
      "gesture",
      "pouting",
      "woman"
    ],
    "output": "1f64e-200d-2640-fe0f"
  },
  {
    "name": "woman pouting: light skin tone",
    "category": "people",
    "shortname": ":woman_pouting_tone1:",
    "keyWords": [
      "gesture",
      "light skin tone",
      "pouting",
      "woman"
    ],
    "output": "1f64e-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman pouting: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_pouting_tone2:",
    "keyWords": [
      "gesture",
      "medium-light skin tone",
      "pouting",
      "woman"
    ],
    "output": "1f64e-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman pouting: medium skin tone",
    "category": "people",
    "shortname": ":woman_pouting_tone3:",
    "keyWords": [
      "gesture",
      "medium skin tone",
      "pouting",
      "woman"
    ],
    "output": "1f64e-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman pouting: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_pouting_tone4:",
    "keyWords": [
      "gesture",
      "medium-dark skin tone",
      "pouting",
      "woman"
    ],
    "output": "1f64e-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman pouting: dark skin tone",
    "category": "people",
    "shortname": ":woman_pouting_tone5:",
    "keyWords": [
      "dark skin tone",
      "gesture",
      "pouting",
      "woman"
    ],
    "output": "1f64e-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man pouting",
    "category": "people",
    "shortname": ":man_pouting:",
    "keyWords": [
      "gesture",
      "man",
      "pouting"
    ],
    "output": "1f64e-200d-2642-fe0f"
  },
  {
    "name": "man pouting: light skin tone",
    "category": "people",
    "shortname": ":man_pouting_tone1:",
    "keyWords": [
      "gesture",
      "light skin tone",
      "man",
      "pouting"
    ],
    "output": "1f64e-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man pouting: medium-light skin tone",
    "category": "people",
    "shortname": ":man_pouting_tone2:",
    "keyWords": [
      "gesture",
      "man",
      "medium-light skin tone",
      "pouting"
    ],
    "output": "1f64e-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man pouting: medium skin tone",
    "category": "people",
    "shortname": ":man_pouting_tone3:",
    "keyWords": [
      "gesture",
      "man",
      "medium skin tone",
      "pouting"
    ],
    "output": "1f64e-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man pouting: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_pouting_tone4:",
    "keyWords": [
      "gesture",
      "man",
      "medium-dark skin tone",
      "pouting"
    ],
    "output": "1f64e-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man pouting: dark skin tone",
    "category": "people",
    "shortname": ":man_pouting_tone5:",
    "keyWords": [
      "dark skin tone",
      "gesture",
      "man",
      "pouting"
    ],
    "output": "1f64e-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person frowning",
    "category": "people",
    "shortname": ":person_frowning:",
    "keyWords": [
      "frown",
      "gesture"
    ],
    "output": "1f64d"
  },
  {
    "name": "person frowning: light skin tone",
    "category": "people",
    "shortname": ":person_frowning_tone1:",
    "keyWords": [
      "frown",
      "gesture",
      "light skin tone"
    ],
    "output": "1f64d-1f3fb"
  },
  {
    "name": "person frowning: medium-light skin tone",
    "category": "people",
    "shortname": ":person_frowning_tone2:",
    "keyWords": [
      "frown",
      "gesture",
      "medium-light skin tone"
    ],
    "output": "1f64d-1f3fc"
  },
  {
    "name": "person frowning: medium skin tone",
    "category": "people",
    "shortname": ":person_frowning_tone3:",
    "keyWords": [
      "frown",
      "gesture",
      "medium skin tone"
    ],
    "output": "1f64d-1f3fd"
  },
  {
    "name": "person frowning: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_frowning_tone4:",
    "keyWords": [
      "frown",
      "gesture",
      "medium-dark skin tone"
    ],
    "output": "1f64d-1f3fe"
  },
  {
    "name": "person frowning: dark skin tone",
    "category": "people",
    "shortname": ":person_frowning_tone5:",
    "keyWords": [
      "dark skin tone",
      "frown",
      "gesture"
    ],
    "output": "1f64d-1f3ff"
  },
  {
    "name": "woman frowning",
    "category": "people",
    "shortname": ":woman_frowning:",
    "keyWords": [
      "frowning",
      "gesture",
      "woman"
    ],
    "output": "1f64d-200d-2640-fe0f"
  },
  {
    "name": "woman frowning: light skin tone",
    "category": "people",
    "shortname": ":woman_frowning_tone1:",
    "keyWords": [
      "frowning",
      "gesture",
      "light skin tone",
      "woman"
    ],
    "output": "1f64d-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman frowning: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_frowning_tone2:",
    "keyWords": [
      "frowning",
      "gesture",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f64d-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman frowning: medium skin tone",
    "category": "people",
    "shortname": ":woman_frowning_tone3:",
    "keyWords": [
      "frowning",
      "gesture",
      "medium skin tone",
      "woman"
    ],
    "output": "1f64d-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman frowning: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_frowning_tone4:",
    "keyWords": [
      "frowning",
      "gesture",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f64d-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman frowning: dark skin tone",
    "category": "people",
    "shortname": ":woman_frowning_tone5:",
    "keyWords": [
      "dark skin tone",
      "frowning",
      "gesture",
      "woman"
    ],
    "output": "1f64d-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man frowning",
    "category": "people",
    "shortname": ":man_frowning:",
    "keyWords": [
      "frowning",
      "gesture",
      "man"
    ],
    "output": "1f64d-200d-2642-fe0f"
  },
  {
    "name": "man frowning: light skin tone",
    "category": "people",
    "shortname": ":man_frowning_tone1:",
    "keyWords": [
      "frowning",
      "gesture",
      "light skin tone",
      "man"
    ],
    "output": "1f64d-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man frowning: medium-light skin tone",
    "category": "people",
    "shortname": ":man_frowning_tone2:",
    "keyWords": [
      "frowning",
      "gesture",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f64d-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man frowning: medium skin tone",
    "category": "people",
    "shortname": ":man_frowning_tone3:",
    "keyWords": [
      "frowning",
      "gesture",
      "man",
      "medium skin tone"
    ],
    "output": "1f64d-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man frowning: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_frowning_tone4:",
    "keyWords": [
      "frowning",
      "gesture",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f64d-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man frowning: dark skin tone",
    "category": "people",
    "shortname": ":man_frowning_tone5:",
    "keyWords": [
      "dark skin tone",
      "frowning",
      "gesture",
      "man"
    ],
    "output": "1f64d-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person getting haircut",
    "category": "people",
    "shortname": ":person_getting_haircut:",
    "keyWords": [
      "barber",
      "beauty",
      "haircut",
      "parlor"
    ],
    "output": "1f487"
  },
  {
    "name": "person getting haircut: light skin tone",
    "category": "people",
    "shortname": ":person_getting_haircut_tone1:",
    "keyWords": [
      "barber",
      "beauty",
      "haircut",
      "light skin tone",
      "parlor"
    ],
    "output": "1f487-1f3fb"
  },
  {
    "name": "person getting haircut: medium-light skin tone",
    "category": "people",
    "shortname": ":person_getting_haircut_tone2:",
    "keyWords": [
      "barber",
      "beauty",
      "haircut",
      "medium-light skin tone",
      "parlor"
    ],
    "output": "1f487-1f3fc"
  },
  {
    "name": "person getting haircut: medium skin tone",
    "category": "people",
    "shortname": ":person_getting_haircut_tone3:",
    "keyWords": [
      "barber",
      "beauty",
      "haircut",
      "medium skin tone",
      "parlor"
    ],
    "output": "1f487-1f3fd"
  },
  {
    "name": "person getting haircut: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_getting_haircut_tone4:",
    "keyWords": [
      "barber",
      "beauty",
      "haircut",
      "medium-dark skin tone",
      "parlor"
    ],
    "output": "1f487-1f3fe"
  },
  {
    "name": "person getting haircut: dark skin tone",
    "category": "people",
    "shortname": ":person_getting_haircut_tone5:",
    "keyWords": [
      "barber",
      "beauty",
      "dark skin tone",
      "haircut",
      "parlor"
    ],
    "output": "1f487-1f3ff"
  },
  {
    "name": "woman getting haircut",
    "category": "people",
    "shortname": ":woman_getting_haircut:",
    "keyWords": [
      "haircut",
      "woman"
    ],
    "output": "1f487-200d-2640-fe0f"
  },
  {
    "name": "woman getting haircut: light skin tone",
    "category": "people",
    "shortname": ":woman_getting_haircut_tone1:",
    "keyWords": [
      "haircut",
      "light skin tone",
      "woman"
    ],
    "output": "1f487-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman getting haircut: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_getting_haircut_tone2:",
    "keyWords": [
      "haircut",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f487-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman getting haircut: medium skin tone",
    "category": "people",
    "shortname": ":woman_getting_haircut_tone3:",
    "keyWords": [
      "haircut",
      "medium skin tone",
      "woman"
    ],
    "output": "1f487-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman getting haircut: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_getting_haircut_tone4:",
    "keyWords": [
      "haircut",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f487-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman getting haircut: dark skin tone",
    "category": "people",
    "shortname": ":woman_getting_haircut_tone5:",
    "keyWords": [
      "dark skin tone",
      "haircut",
      "woman"
    ],
    "output": "1f487-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man getting haircut",
    "category": "people",
    "shortname": ":man_getting_haircut:",
    "keyWords": [
      "haircut",
      "man"
    ],
    "output": "1f487-200d-2642-fe0f"
  },
  {
    "name": "man getting haircut: light skin tone",
    "category": "people",
    "shortname": ":man_getting_haircut_tone1:",
    "keyWords": [
      "haircut",
      "light skin tone",
      "man"
    ],
    "output": "1f487-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man getting haircut: medium-light skin tone",
    "category": "people",
    "shortname": ":man_getting_haircut_tone2:",
    "keyWords": [
      "haircut",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f487-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man getting haircut: medium skin tone",
    "category": "people",
    "shortname": ":man_getting_haircut_tone3:",
    "keyWords": [
      "haircut",
      "man",
      "medium skin tone"
    ],
    "output": "1f487-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man getting haircut: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_getting_haircut_tone4:",
    "keyWords": [
      "haircut",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f487-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man getting haircut: dark skin tone",
    "category": "people",
    "shortname": ":man_getting_haircut_tone5:",
    "keyWords": [
      "dark skin tone",
      "haircut",
      "man"
    ],
    "output": "1f487-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person getting massage",
    "category": "people",
    "shortname": ":person_getting_massage:",
    "keyWords": [
      "face",
      "massage",
      "salon"
    ],
    "output": "1f486"
  },
  {
    "name": "person getting massage: light skin tone",
    "category": "people",
    "shortname": ":person_getting_massage_tone1:",
    "keyWords": [
      "face",
      "light skin tone",
      "massage",
      "salon"
    ],
    "output": "1f486-1f3fb"
  },
  {
    "name": "person getting massage: medium-light skin tone",
    "category": "people",
    "shortname": ":person_getting_massage_tone2:",
    "keyWords": [
      "face",
      "massage",
      "medium-light skin tone",
      "salon"
    ],
    "output": "1f486-1f3fc"
  },
  {
    "name": "person getting massage: medium skin tone",
    "category": "people",
    "shortname": ":person_getting_massage_tone3:",
    "keyWords": [
      "face",
      "massage",
      "medium skin tone",
      "salon"
    ],
    "output": "1f486-1f3fd"
  },
  {
    "name": "person getting massage: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_getting_massage_tone4:",
    "keyWords": [
      "face",
      "massage",
      "medium-dark skin tone",
      "salon"
    ],
    "output": "1f486-1f3fe"
  },
  {
    "name": "person getting massage: dark skin tone",
    "category": "people",
    "shortname": ":person_getting_massage_tone5:",
    "keyWords": [
      "dark skin tone",
      "face",
      "massage",
      "salon"
    ],
    "output": "1f486-1f3ff"
  },
  {
    "name": "woman getting massage",
    "category": "people",
    "shortname": ":woman_getting_face_massage:",
    "keyWords": [
      "face",
      "massage",
      "woman"
    ],
    "output": "1f486-200d-2640-fe0f"
  },
  {
    "name": "woman getting massage: light skin tone",
    "category": "people",
    "shortname": ":woman_getting_face_massage_tone1:",
    "keyWords": [
      "face",
      "light skin tone",
      "massage",
      "woman"
    ],
    "output": "1f486-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman getting massage: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_getting_face_massage_tone2:",
    "keyWords": [
      "face",
      "massage",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f486-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman getting massage: medium skin tone",
    "category": "people",
    "shortname": ":woman_getting_face_massage_tone3:",
    "keyWords": [
      "face",
      "massage",
      "medium skin tone",
      "woman"
    ],
    "output": "1f486-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman getting massage: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_getting_face_massage_tone4:",
    "keyWords": [
      "face",
      "massage",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f486-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman getting massage: dark skin tone",
    "category": "people",
    "shortname": ":woman_getting_face_massage_tone5:",
    "keyWords": [
      "dark skin tone",
      "face",
      "massage",
      "woman"
    ],
    "output": "1f486-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man getting massage",
    "category": "people",
    "shortname": ":man_getting_face_massage:",
    "keyWords": [
      "face",
      "man",
      "massage"
    ],
    "output": "1f486-200d-2642-fe0f"
  },
  {
    "name": "man getting massage: light skin tone",
    "category": "people",
    "shortname": ":man_getting_face_massage_tone1:",
    "keyWords": [
      "face",
      "light skin tone",
      "man",
      "massage"
    ],
    "output": "1f486-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man getting massage: medium-light skin tone",
    "category": "people",
    "shortname": ":man_getting_face_massage_tone2:",
    "keyWords": [
      "face",
      "man",
      "massage",
      "medium-light skin tone"
    ],
    "output": "1f486-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man getting massage: medium skin tone",
    "category": "people",
    "shortname": ":man_getting_face_massage_tone3:",
    "keyWords": [
      "face",
      "man",
      "massage",
      "medium skin tone"
    ],
    "output": "1f486-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man getting massage: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_getting_face_massage_tone4:",
    "keyWords": [
      "face",
      "man",
      "massage",
      "medium-dark skin tone"
    ],
    "output": "1f486-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man getting massage: dark skin tone",
    "category": "people",
    "shortname": ":man_getting_face_massage_tone5:",
    "keyWords": [
      "dark skin tone",
      "face",
      "man",
      "massage"
    ],
    "output": "1f486-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person in steamy room",
    "category": "people",
    "shortname": ":person_in_steamy_room:",
    "keyWords": [
      ""
    ],
    "output": "1f9d6"
  },
  {
    "name": "person in steamy room: light skin tone",
    "category": "people",
    "shortname": ":person_in_steamy_room_tone1:",
    "keyWords": [
      "light skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fb"
  },
  {
    "name": "person in steamy room: medium-light skin tone",
    "category": "people",
    "shortname": ":person_in_steamy_room_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fc"
  },
  {
    "name": "person in steamy room: medium skin tone",
    "category": "people",
    "shortname": ":person_in_steamy_room_tone3:",
    "keyWords": [
      "medium skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fd"
  },
  {
    "name": "person in steamy room: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_in_steamy_room_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fe"
  },
  {
    "name": "person in steamy room: dark skin tone",
    "category": "people",
    "shortname": ":person_in_steamy_room_tone5:",
    "keyWords": [
      "dark skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3ff"
  },
  {
    "name": "woman in steamy room",
    "category": "people",
    "shortname": ":woman_in_steamy_room:",
    "keyWords": [
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-200d-2640-fe0f"
  },
  {
    "name": "woman in steamy room: light skin tone",
    "category": "people",
    "shortname": ":woman_in_steamy_room_tone1:",
    "keyWords": [
      "light skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman in steamy room: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_in_steamy_room_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman in steamy room: medium skin tone",
    "category": "people",
    "shortname": ":woman_in_steamy_room_tone3:",
    "keyWords": [
      "medium skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman in steamy room: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_in_steamy_room_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman in steamy room: dark skin tone",
    "category": "people",
    "shortname": ":woman_in_steamy_room_tone5:",
    "keyWords": [
      "dark skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man in steamy room",
    "category": "people",
    "shortname": ":man_in_steamy_room:",
    "keyWords": [
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-200d-2642-fe0f"
  },
  {
    "name": "man in steamy room: light skin tone",
    "category": "people",
    "shortname": ":man_in_steamy_room_tone1:",
    "keyWords": [
      "light skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man in steamy room: medium-light skin tone",
    "category": "people",
    "shortname": ":man_in_steamy_room_tone2:",
    "keyWords": [
      "medium-light skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man in steamy room: medium skin tone",
    "category": "people",
    "shortname": ":man_in_steamy_room_tone3:",
    "keyWords": [
      "medium skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man in steamy room: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_in_steamy_room_tone4:",
    "keyWords": [
      "medium-dark skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man in steamy room: dark skin tone",
    "category": "people",
    "shortname": ":man_in_steamy_room_tone5:",
    "keyWords": [
      "dark skin tone",
      "sauna",
      "steam room"
    ],
    "output": "1f9d6-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "nail polish",
    "category": "people",
    "shortname": ":nail_care:",
    "keyWords": [
      "care",
      "cosmetics",
      "manicure",
      "nail",
      "polish"
    ],
    "output": "1f485"
  },
  {
    "name": "nail polish: light skin tone",
    "category": "people",
    "shortname": ":nail_care_tone1:",
    "keyWords": [
      "care",
      "cosmetics",
      "light skin tone",
      "manicure",
      "nail",
      "polish"
    ],
    "output": "1f485-1f3fb"
  },
  {
    "name": "nail polish: medium-light skin tone",
    "category": "people",
    "shortname": ":nail_care_tone2:",
    "keyWords": [
      "care",
      "cosmetics",
      "manicure",
      "medium-light skin tone",
      "nail",
      "polish"
    ],
    "output": "1f485-1f3fc"
  },
  {
    "name": "nail polish: medium skin tone",
    "category": "people",
    "shortname": ":nail_care_tone3:",
    "keyWords": [
      "care",
      "cosmetics",
      "manicure",
      "medium skin tone",
      "nail",
      "polish"
    ],
    "output": "1f485-1f3fd"
  },
  {
    "name": "nail polish: medium-dark skin tone",
    "category": "people",
    "shortname": ":nail_care_tone4:",
    "keyWords": [
      "care",
      "cosmetics",
      "manicure",
      "medium-dark skin tone",
      "nail",
      "polish"
    ],
    "output": "1f485-1f3fe"
  },
  {
    "name": "nail polish: dark skin tone",
    "category": "people",
    "shortname": ":nail_care_tone5:",
    "keyWords": [
      "care",
      "cosmetics",
      "dark skin tone",
      "manicure",
      "nail",
      "polish"
    ],
    "output": "1f485-1f3ff"
  },
  {
    "name": "selfie",
    "category": "people",
    "shortname": ":selfie:",
    "keyWords": [
      "camera",
      "phone",
      "selfie"
    ],
    "output": "1f933"
  },
  {
    "name": "selfie: light skin tone",
    "category": "people",
    "shortname": ":selfie_tone1:",
    "keyWords": [
      "camera",
      "light skin tone",
      "phone",
      "selfie"
    ],
    "output": "1f933-1f3fb"
  },
  {
    "name": "selfie: medium-light skin tone",
    "category": "people",
    "shortname": ":selfie_tone2:",
    "keyWords": [
      "camera",
      "medium-light skin tone",
      "phone",
      "selfie"
    ],
    "output": "1f933-1f3fc"
  },
  {
    "name": "selfie: medium skin tone",
    "category": "people",
    "shortname": ":selfie_tone3:",
    "keyWords": [
      "camera",
      "medium skin tone",
      "phone",
      "selfie"
    ],
    "output": "1f933-1f3fd"
  },
  {
    "name": "selfie: medium-dark skin tone",
    "category": "people",
    "shortname": ":selfie_tone4:",
    "keyWords": [
      "camera",
      "medium-dark skin tone",
      "phone",
      "selfie"
    ],
    "output": "1f933-1f3fe"
  },
  {
    "name": "selfie: dark skin tone",
    "category": "people",
    "shortname": ":selfie_tone5:",
    "keyWords": [
      "camera",
      "dark skin tone",
      "phone",
      "selfie"
    ],
    "output": "1f933-1f3ff"
  },
  {
    "name": "woman dancing",
    "category": "people",
    "shortname": ":dancer:",
    "keyWords": [
      "dancing",
      "woman"
    ],
    "output": "1f483"
  },
  {
    "name": "woman dancing: light skin tone",
    "category": "people",
    "shortname": ":dancer_tone1:",
    "keyWords": [
      "dancing",
      "light skin tone",
      "woman"
    ],
    "output": "1f483-1f3fb"
  },
  {
    "name": "woman dancing: medium-light skin tone",
    "category": "people",
    "shortname": ":dancer_tone2:",
    "keyWords": [
      "dancing",
      "medium-light skin tone",
      "woman"
    ],
    "output": "1f483-1f3fc"
  },
  {
    "name": "woman dancing: medium skin tone",
    "category": "people",
    "shortname": ":dancer_tone3:",
    "keyWords": [
      "dancing",
      "medium skin tone",
      "woman"
    ],
    "output": "1f483-1f3fd"
  },
  {
    "name": "woman dancing: medium-dark skin tone",
    "category": "people",
    "shortname": ":dancer_tone4:",
    "keyWords": [
      "dancing",
      "medium-dark skin tone",
      "woman"
    ],
    "output": "1f483-1f3fe"
  },
  {
    "name": "woman dancing: dark skin tone",
    "category": "people",
    "shortname": ":dancer_tone5:",
    "keyWords": [
      "dancing",
      "dark skin tone",
      "woman"
    ],
    "output": "1f483-1f3ff"
  },
  {
    "name": "man dancing",
    "category": "people",
    "shortname": ":man_dancing:",
    "keyWords": [
      "dance",
      "man"
    ],
    "output": "1f57a"
  },
  {
    "name": "man dancing: light skin tone",
    "category": "people",
    "shortname": ":man_dancing_tone1:",
    "keyWords": [
      "dance",
      "light skin tone",
      "man"
    ],
    "output": "1f57a-1f3fb"
  },
  {
    "name": "man dancing: medium-light skin tone",
    "category": "people",
    "shortname": ":man_dancing_tone2:",
    "keyWords": [
      "dance",
      "man",
      "medium-light skin tone"
    ],
    "output": "1f57a-1f3fc"
  },
  {
    "name": "man dancing: medium skin tone",
    "category": "people",
    "shortname": ":man_dancing_tone3:",
    "keyWords": [
      "dance",
      "man",
      "medium skin tone"
    ],
    "output": "1f57a-1f3fd"
  },
  {
    "name": "man dancing: dark skin tone",
    "category": "people",
    "shortname": ":man_dancing_tone5:",
    "keyWords": [
      "dance",
      "dark skin tone",
      "man"
    ],
    "output": "1f57a-1f3ff"
  },
  {
    "name": "man dancing: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_dancing_tone4:",
    "keyWords": [
      "dance",
      "man",
      "medium-dark skin tone"
    ],
    "output": "1f57a-1f3fe"
  },
  {
    "name": "people with bunny ears",
    "category": "people",
    "shortname": ":people_with_bunny_ears_partying:",
    "keyWords": [
      "bunny ear",
      "dancer",
      "partying"
    ],
    "output": "1f46f"
  },
  {
    "name": "women with bunny ears",
    "category": "people",
    "shortname": ":women_with_bunny_ears_partying:",
    "keyWords": [
      "bunny ear",
      "dancer",
      "partying",
      "women"
    ],
    "output": "1f46f-200d-2640-fe0f"
  },
  {
    "name": "men with bunny ears",
    "category": "people",
    "shortname": ":men_with_bunny_ears_partying:",
    "keyWords": [
      "bunny ear",
      "dancer",
      "men",
      "partying"
    ],
    "output": "1f46f-200d-2642-fe0f"
  },
  {
    "name": "man in suit levitating",
    "category": "people",
    "shortname": ":levitate:",
    "keyWords": [
      "business",
      "man",
      "suit"
    ],
    "output": "1f574"
  },
  {
    "name": "man in suit levitating: light skin tone",
    "category": "people",
    "shortname": ":levitate_tone1:",
    "keyWords": [
      "business",
      "light skin tone",
      "man",
      "suit"
    ],
    "output": "1f574-1f3fb"
  },
  {
    "name": "man in suit levitating: medium-light skin tone",
    "category": "people",
    "shortname": ":levitate_tone2:",
    "keyWords": [
      "business",
      "man",
      "medium-light skin tone",
      "suit"
    ],
    "output": "1f574-1f3fc"
  },
  {
    "name": "man in suit levitating: medium skin tone",
    "category": "people",
    "shortname": ":levitate_tone3:",
    "keyWords": [
      "business",
      "man",
      "medium skin tone",
      "suit"
    ],
    "output": "1f574-1f3fd"
  },
  {
    "name": "man in suit levitating: medium-dark skin tone",
    "category": "people",
    "shortname": ":levitate_tone4:",
    "keyWords": [
      "business",
      "man",
      "medium-dark skin tone",
      "suit"
    ],
    "output": "1f574-1f3fe"
  },
  {
    "name": "man in suit levitating: dark skin tone",
    "category": "people",
    "shortname": ":levitate_tone5:",
    "keyWords": [
      "business",
      "dark skin tone",
      "man",
      "suit"
    ],
    "output": "1f574-1f3ff"
  },
  {
    "name": "person walking",
    "category": "people",
    "shortname": ":person_walking:",
    "keyWords": [
      "hike",
      "walk",
      "walking"
    ],
    "output": "1f6b6"
  },
  {
    "name": "person walking: light skin tone",
    "category": "people",
    "shortname": ":person_walking_tone1:",
    "keyWords": [
      "hike",
      "light skin tone",
      "walk",
      "walking"
    ],
    "output": "1f6b6-1f3fb"
  },
  {
    "name": "person walking: medium-light skin tone",
    "category": "people",
    "shortname": ":person_walking_tone2:",
    "keyWords": [
      "hike",
      "medium-light skin tone",
      "walk",
      "walking"
    ],
    "output": "1f6b6-1f3fc"
  },
  {
    "name": "person walking: medium skin tone",
    "category": "people",
    "shortname": ":person_walking_tone3:",
    "keyWords": [
      "hike",
      "medium skin tone",
      "walk",
      "walking"
    ],
    "output": "1f6b6-1f3fd"
  },
  {
    "name": "person walking: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_walking_tone4:",
    "keyWords": [
      "hike",
      "medium-dark skin tone",
      "walk",
      "walking"
    ],
    "output": "1f6b6-1f3fe"
  },
  {
    "name": "person walking: dark skin tone",
    "category": "people",
    "shortname": ":person_walking_tone5:",
    "keyWords": [
      "dark skin tone",
      "hike",
      "walk",
      "walking"
    ],
    "output": "1f6b6-1f3ff"
  },
  {
    "name": "woman walking",
    "category": "people",
    "shortname": ":woman_walking:",
    "keyWords": [
      "hike",
      "walk",
      "woman"
    ],
    "output": "1f6b6-200d-2640-fe0f"
  },
  {
    "name": "woman walking: light skin tone",
    "category": "people",
    "shortname": ":woman_walking_tone1:",
    "keyWords": [
      "hike",
      "light skin tone",
      "walk",
      "woman"
    ],
    "output": "1f6b6-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman walking: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_walking_tone2:",
    "keyWords": [
      "hike",
      "medium-light skin tone",
      "walk",
      "woman"
    ],
    "output": "1f6b6-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman walking: medium skin tone",
    "category": "people",
    "shortname": ":woman_walking_tone3:",
    "keyWords": [
      "hike",
      "medium skin tone",
      "walk",
      "woman"
    ],
    "output": "1f6b6-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman walking: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_walking_tone4:",
    "keyWords": [
      "hike",
      "medium-dark skin tone",
      "walk",
      "woman"
    ],
    "output": "1f6b6-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman walking: dark skin tone",
    "category": "people",
    "shortname": ":woman_walking_tone5:",
    "keyWords": [
      "dark skin tone",
      "hike",
      "walk",
      "woman"
    ],
    "output": "1f6b6-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man walking",
    "category": "people",
    "shortname": ":man_walking:",
    "keyWords": [
      "hike",
      "man",
      "walk"
    ],
    "output": "1f6b6-200d-2642-fe0f"
  },
  {
    "name": "man walking: light skin tone",
    "category": "people",
    "shortname": ":man_walking_tone1:",
    "keyWords": [
      "hike",
      "light skin tone",
      "man",
      "walk"
    ],
    "output": "1f6b6-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man walking: medium-light skin tone",
    "category": "people",
    "shortname": ":man_walking_tone2:",
    "keyWords": [
      "hike",
      "man",
      "medium-light skin tone",
      "walk"
    ],
    "output": "1f6b6-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man walking: medium skin tone",
    "category": "people",
    "shortname": ":man_walking_tone3:",
    "keyWords": [
      "hike",
      "man",
      "medium skin tone",
      "walk"
    ],
    "output": "1f6b6-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man walking: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_walking_tone4:",
    "keyWords": [
      "hike",
      "man",
      "medium-dark skin tone",
      "walk"
    ],
    "output": "1f6b6-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man walking: dark skin tone",
    "category": "people",
    "shortname": ":man_walking_tone5:",
    "keyWords": [
      "dark skin tone",
      "hike",
      "man",
      "walk"
    ],
    "output": "1f6b6-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "person running",
    "category": "people",
    "shortname": ":person_running:",
    "keyWords": [
      "marathon",
      "running"
    ],
    "output": "1f3c3"
  },
  {
    "name": "person running: light skin tone",
    "category": "people",
    "shortname": ":person_running_tone1:",
    "keyWords": [
      "light skin tone",
      "marathon",
      "running"
    ],
    "output": "1f3c3-1f3fb"
  },
  {
    "name": "person running: medium-light skin tone",
    "category": "people",
    "shortname": ":person_running_tone2:",
    "keyWords": [
      "marathon",
      "medium-light skin tone",
      "running"
    ],
    "output": "1f3c3-1f3fc"
  },
  {
    "name": "person running: medium skin tone",
    "category": "people",
    "shortname": ":person_running_tone3:",
    "keyWords": [
      "marathon",
      "medium skin tone",
      "running"
    ],
    "output": "1f3c3-1f3fd"
  },
  {
    "name": "person running: medium-dark skin tone",
    "category": "people",
    "shortname": ":person_running_tone4:",
    "keyWords": [
      "marathon",
      "medium-dark skin tone",
      "running"
    ],
    "output": "1f3c3-1f3fe"
  },
  {
    "name": "person running: dark skin tone",
    "category": "people",
    "shortname": ":person_running_tone5:",
    "keyWords": [
      "dark skin tone",
      "marathon",
      "running"
    ],
    "output": "1f3c3-1f3ff"
  },
  {
    "name": "woman running",
    "category": "people",
    "shortname": ":woman_running:",
    "keyWords": [
      "marathon",
      "racing",
      "running",
      "woman"
    ],
    "output": "1f3c3-200d-2640-fe0f"
  },
  {
    "name": "woman running: light skin tone",
    "category": "people",
    "shortname": ":woman_running_tone1:",
    "keyWords": [
      "light skin tone",
      "marathon",
      "racing",
      "running",
      "woman"
    ],
    "output": "1f3c3-1f3fb-200d-2640-fe0f"
  },
  {
    "name": "woman running: medium-light skin tone",
    "category": "people",
    "shortname": ":woman_running_tone2:",
    "keyWords": [
      "marathon",
      "medium-light skin tone",
      "racing",
      "running",
      "woman"
    ],
    "output": "1f3c3-1f3fc-200d-2640-fe0f"
  },
  {
    "name": "woman running: medium skin tone",
    "category": "people",
    "shortname": ":woman_running_tone3:",
    "keyWords": [
      "marathon",
      "medium skin tone",
      "racing",
      "running",
      "woman"
    ],
    "output": "1f3c3-1f3fd-200d-2640-fe0f"
  },
  {
    "name": "woman running: medium-dark skin tone",
    "category": "people",
    "shortname": ":woman_running_tone4:",
    "keyWords": [
      "marathon",
      "medium-dark skin tone",
      "racing",
      "running",
      "woman"
    ],
    "output": "1f3c3-1f3fe-200d-2640-fe0f"
  },
  {
    "name": "woman running: dark skin tone",
    "category": "people",
    "shortname": ":woman_running_tone5:",
    "keyWords": [
      "dark skin tone",
      "marathon",
      "racing",
      "running",
      "woman"
    ],
    "output": "1f3c3-1f3ff-200d-2640-fe0f"
  },
  {
    "name": "man running",
    "category": "people",
    "shortname": ":man_running:",
    "keyWords": [
      "man",
      "marathon",
      "racing",
      "running"
    ],
    "output": "1f3c3-200d-2642-fe0f"
  },
  {
    "name": "man running: light skin tone",
    "category": "people",
    "shortname": ":man_running_tone1:",
    "keyWords": [
      "light skin tone",
      "man",
      "marathon",
      "racing",
      "running"
    ],
    "output": "1f3c3-1f3fb-200d-2642-fe0f"
  },
  {
    "name": "man running: medium-light skin tone",
    "category": "people",
    "shortname": ":man_running_tone2:",
    "keyWords": [
      "man",
      "marathon",
      "medium-light skin tone",
      "racing",
      "running"
    ],
    "output": "1f3c3-1f3fc-200d-2642-fe0f"
  },
  {
    "name": "man running: medium skin tone",
    "category": "people",
    "shortname": ":man_running_tone3:",
    "keyWords": [
      "man",
      "marathon",
      "medium skin tone",
      "racing",
      "running"
    ],
    "output": "1f3c3-1f3fd-200d-2642-fe0f"
  },
  {
    "name": "man running: medium-dark skin tone",
    "category": "people",
    "shortname": ":man_running_tone4:",
    "keyWords": [
      "man",
      "marathon",
      "medium-dark skin tone",
      "racing",
      "running"
    ],
    "output": "1f3c3-1f3fe-200d-2642-fe0f"
  },
  {
    "name": "man running: dark skin tone",
    "category": "people",
    "shortname": ":man_running_tone5:",
    "keyWords": [
      "dark skin tone",
      "man",
      "marathon",
      "racing",
      "running"
    ],
    "output": "1f3c3-1f3ff-200d-2642-fe0f"
  },
  {
    "name": "man and woman holding hands",
    "category": "people",
    "shortname": ":couple:",
    "keyWords": [
      "couple",
      "hand",
      "hold",
      "man",
      "woman"
    ],
    "output": "1f46b"
  },
  {
    "name": "two women holding hands",
    "category": "people",
    "shortname": ":two_women_holding_hands:",
    "keyWords": [
      "couple",
      "hand",
      "hold",
      "woman"
    ],
    "output": "1f46d"
  },
  {
    "name": "two men holding hands",
    "category": "people",
    "shortname": ":two_men_holding_hands:",
    "keyWords": [
      "Gemini",
      "couple",
      "hand",
      "hold",
      "man",
      "twins",
      "zodiac"
    ],
    "output": "1f46c"
  },
  {
    "name": "couple with heart",
    "category": "people",
    "shortname": ":couple_with_heart:",
    "keyWords": [
      "couple",
      "love"
    ],
    "output": "1f491"
  },
  {
    "name": "couple with heart: woman, man",
    "category": "people",
    "shortname": ":couple_with_heart_woman_man:",
    "keyWords": [
      "couple",
      "love",
      "man",
      "woman"
    ],
    "output": "1f469-200d-2764-fe0f-200d-1f468"
  },
  {
    "name": "couple with heart: woman, woman",
    "category": "people",
    "shortname": ":couple_ww:",
    "keyWords": [
      "couple",
      "love",
      "woman"
    ],
    "output": "1f469-200d-2764-fe0f-200d-1f469"
  },
  {
    "name": "couple with heart: man, man",
    "category": "people",
    "shortname": ":couple_mm:",
    "keyWords": [
      "couple",
      "love",
      "man"
    ],
    "output": "1f468-200d-2764-fe0f-200d-1f468"
  },
  {
    "name": "kiss",
    "category": "people",
    "shortname": ":couplekiss:",
    "keyWords": [
      "couple"
    ],
    "output": "1f48f"
  },
  {
    "name": "kiss: woman, man",
    "category": "people",
    "shortname": ":kiss_woman_man:",
    "keyWords": [
      "couple",
      "man",
      "woman"
    ],
    "output": "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468"
  },
  {
    "name": "kiss: woman, woman",
    "category": "people",
    "shortname": ":kiss_ww:",
    "keyWords": [
      "couple",
      "woman"
    ],
    "output": "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469"
  },
  {
    "name": "kiss: man, man",
    "category": "people",
    "shortname": ":kiss_mm:",
    "keyWords": [
      "couple",
      "man"
    ],
    "output": "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468"
  },
  {
    "name": "family",
    "category": "people",
    "shortname": ":family:",
    "keyWords": [
      "family"
    ],
    "output": "1f46a"
  },
  {
    "name": "family: man, woman, boy",
    "category": "people",
    "shortname": ":family_man_woman_boy:",
    "keyWords": [
      "boy",
      "family",
      "man",
      "woman"
    ],
    "output": "1f468-200d-1f469-200d-1f466"
  },
  {
    "name": "family: man, woman, girl",
    "category": "people",
    "shortname": ":family_mwg:",
    "keyWords": [
      "family",
      "girl",
      "man",
      "woman"
    ],
    "output": "1f468-200d-1f469-200d-1f467"
  },
  {
    "name": "family: man, woman, girl, boy",
    "category": "people",
    "shortname": ":family_mwgb:",
    "keyWords": [
      "boy",
      "family",
      "girl",
      "man",
      "woman"
    ],
    "output": "1f468-200d-1f469-200d-1f467-200d-1f466"
  },
  {
    "name": "family: man, woman, boy, boy",
    "category": "people",
    "shortname": ":family_mwbb:",
    "keyWords": [
      "boy",
      "family",
      "man",
      "woman"
    ],
    "output": "1f468-200d-1f469-200d-1f466-200d-1f466"
  },
  {
    "name": "family: man, woman, girl, girl",
    "category": "people",
    "shortname": ":family_mwgg:",
    "keyWords": [
      "family",
      "girl",
      "man",
      "woman"
    ],
    "output": "1f468-200d-1f469-200d-1f467-200d-1f467"
  },
  {
    "name": "family: woman, woman, boy",
    "category": "people",
    "shortname": ":family_wwb:",
    "keyWords": [
      "boy",
      "family",
      "woman"
    ],
    "output": "1f469-200d-1f469-200d-1f466"
  },
  {
    "name": "family: woman, woman, girl",
    "category": "people",
    "shortname": ":family_wwg:",
    "keyWords": [
      "family",
      "girl",
      "woman"
    ],
    "output": "1f469-200d-1f469-200d-1f467"
  },
  {
    "name": "family: woman, woman, girl, boy",
    "category": "people",
    "shortname": ":family_wwgb:",
    "keyWords": [
      "boy",
      "family",
      "girl",
      "woman"
    ],
    "output": "1f469-200d-1f469-200d-1f467-200d-1f466"
  },
  {
    "name": "family: woman, woman, boy, boy",
    "category": "people",
    "shortname": ":family_wwbb:",
    "keyWords": [
      "boy",
      "family",
      "woman"
    ],
    "output": "1f469-200d-1f469-200d-1f466-200d-1f466"
  },
  {
    "name": "family: woman, woman, girl, girl",
    "category": "people",
    "shortname": ":family_wwgg:",
    "keyWords": [
      "family",
      "girl",
      "woman"
    ],
    "output": "1f469-200d-1f469-200d-1f467-200d-1f467"
  },
  {
    "name": "family: man, man, boy",
    "category": "people",
    "shortname": ":family_mmb:",
    "keyWords": [
      "boy",
      "family",
      "man"
    ],
    "output": "1f468-200d-1f468-200d-1f466"
  },
  {
    "name": "family: man, man, girl",
    "category": "people",
    "shortname": ":family_mmg:",
    "keyWords": [
      "family",
      "girl",
      "man"
    ],
    "output": "1f468-200d-1f468-200d-1f467"
  },
  {
    "name": "family: man, man, girl, boy",
    "category": "people",
    "shortname": ":family_mmgb:",
    "keyWords": [
      "boy",
      "family",
      "girl",
      "man"
    ],
    "output": "1f468-200d-1f468-200d-1f467-200d-1f466"
  },
  {
    "name": "family: man, man, boy, boy",
    "category": "people",
    "shortname": ":family_mmbb:",
    "keyWords": [
      "boy",
      "family",
      "man"
    ],
    "output": "1f468-200d-1f468-200d-1f466-200d-1f466"
  },
  {
    "name": "family: man, man, girl, girl",
    "category": "people",
    "shortname": ":family_mmgg:",
    "keyWords": [
      "family",
      "girl",
      "man"
    ],
    "output": "1f468-200d-1f468-200d-1f467-200d-1f467"
  },
  {
    "name": "family: woman, boy",
    "category": "people",
    "shortname": ":family_woman_boy:",
    "keyWords": [
      "boy",
      "family",
      "woman"
    ],
    "output": "1f469-200d-1f466"
  },
  {
    "name": "family: woman, girl",
    "category": "people",
    "shortname": ":family_woman_girl:",
    "keyWords": [
      "family",
      "girl",
      "woman"
    ],
    "output": "1f469-200d-1f467"
  },
  {
    "name": "family: woman, girl, boy",
    "category": "people",
    "shortname": ":family_woman_girl_boy:",
    "keyWords": [
      "boy",
      "family",
      "girl",
      "woman"
    ],
    "output": "1f469-200d-1f467-200d-1f466"
  },
  {
    "name": "family: woman, boy, boy",
    "category": "people",
    "shortname": ":family_woman_boy_boy:",
    "keyWords": [
      "boy",
      "family",
      "woman"
    ],
    "output": "1f469-200d-1f466-200d-1f466"
  },
  {
    "name": "family: woman, girl, girl",
    "category": "people",
    "shortname": ":family_woman_girl_girl:",
    "keyWords": [
      "family",
      "girl",
      "woman"
    ],
    "output": "1f469-200d-1f467-200d-1f467"
  },
  {
    "name": "family: man, boy",
    "category": "people",
    "shortname": ":family_man_boy:",
    "keyWords": [
      "boy",
      "family",
      "man"
    ],
    "output": "1f468-200d-1f466"
  },
  {
    "name": "family: man, girl",
    "category": "people",
    "shortname": ":family_man_girl:",
    "keyWords": [
      "family",
      "girl",
      "man"
    ],
    "output": "1f468-200d-1f467"
  },
  {
    "name": "family: man, girl, boy",
    "category": "people",
    "shortname": ":family_man_girl_boy:",
    "keyWords": [
      "boy",
      "family",
      "girl",
      "man"
    ],
    "output": "1f468-200d-1f467-200d-1f466"
  },
  {
    "name": "family: man, boy, boy",
    "category": "people",
    "shortname": ":family_man_boy_boy:",
    "keyWords": [
      "boy",
      "family",
      "man"
    ],
    "output": "1f468-200d-1f466-200d-1f466"
  },
  {
    "name": "family: man, girl, girl",
    "category": "people",
    "shortname": ":family_man_girl_girl:",
    "keyWords": [
      "family",
      "girl",
      "man"
    ],
    "output": "1f468-200d-1f467-200d-1f467"
  },
  {
    "name": "coat",
    "category": "people",
    "shortname": ":coat:",
    "keyWords": [
      "jacket"
    ],
    "output": "1f9e5"
  },
  {
    "name": "woman’s clothes",
    "category": "people",
    "shortname": ":womans_clothes:",
    "keyWords": [
      "clothing",
      "woman"
    ],
    "output": "1f45a"
  },
  {
    "name": "t-shirt",
    "category": "people",
    "shortname": ":shirt:",
    "keyWords": [
      "clothing",
      "shirt",
      "tshirt"
    ],
    "output": "1f455"
  },
  {
    "name": "jeans",
    "category": "people",
    "shortname": ":jeans:",
    "keyWords": [
      "clothing",
      "pants",
      "trousers"
    ],
    "output": "1f456"
  },
  {
    "name": "necktie",
    "category": "people",
    "shortname": ":necktie:",
    "keyWords": [
      "clothing"
    ],
    "output": "1f454"
  },
  {
    "name": "dress",
    "category": "people",
    "shortname": ":dress:",
    "keyWords": [
      "clothing"
    ],
    "output": "1f457"
  },
  {
    "name": "bikini",
    "category": "people",
    "shortname": ":bikini:",
    "keyWords": [
      "clothing",
      "swim"
    ],
    "output": "1f459"
  },
  {
    "name": "kimono",
    "category": "people",
    "shortname": ":kimono:",
    "keyWords": [
      "clothing"
    ],
    "output": "1f458"
  },
  {
    "name": "lab coat",
    "category": "people",
    "shortname": ":lab_coat:",
    "keyWords": [
      ""
    ],
    "output": "1f97c"
  },
  {
    "name": "high-heeled shoe",
    "category": "people",
    "shortname": ":high_heel:",
    "keyWords": [
      "clothing",
      "heel",
      "shoe",
      "woman"
    ],
    "output": "1f460"
  },
  {
    "name": "woman’s sandal",
    "category": "people",
    "shortname": ":sandal:",
    "keyWords": [
      "clothing",
      "sandal",
      "shoe",
      "woman"
    ],
    "output": "1f461"
  },
  {
    "name": "woman’s boot",
    "category": "people",
    "shortname": ":boot:",
    "keyWords": [
      "boot",
      "clothing",
      "shoe",
      "woman"
    ],
    "output": "1f462"
  },
  {
    "name": "man’s shoe",
    "category": "people",
    "shortname": ":mans_shoe:",
    "keyWords": [
      "clothing",
      "man",
      "shoe"
    ],
    "output": "1f45e"
  },
  {
    "name": "running shoe",
    "category": "people",
    "shortname": ":athletic_shoe:",
    "keyWords": [
      "athletic",
      "clothing",
      "shoe",
      "sneaker"
    ],
    "output": "1f45f"
  },
  {
    "name": "hiking boot",
    "category": "people",
    "shortname": ":hiking_boot:",
    "keyWords": [
      ""
    ],
    "output": "1f97e"
  },
  {
    "name": "woman’s flat shoe",
    "category": "people",
    "shortname": ":womans_flat_shoe:",
    "keyWords": [
      ""
    ],
    "output": "1f97f"
  },
  {
    "name": "socks",
    "category": "people",
    "shortname": ":socks:",
    "keyWords": [
      "stocking"
    ],
    "output": "1f9e6"
  },
  {
    "name": "gloves",
    "category": "people",
    "shortname": ":gloves:",
    "keyWords": [
      "hand"
    ],
    "output": "1f9e4"
  },
  {
    "name": "scarf",
    "category": "people",
    "shortname": ":scarf:",
    "keyWords": [
      "neck"
    ],
    "output": "1f9e3"
  },
  {
    "name": "top hat",
    "category": "people",
    "shortname": ":tophat:",
    "keyWords": [
      "clothing",
      "hat",
      "top",
      "tophat"
    ],
    "output": "1f3a9"
  },
  {
    "name": "billed cap",
    "category": "people",
    "shortname": ":billed_cap:",
    "keyWords": [
      "baseball cap"
    ],
    "output": "1f9e2"
  },
  {
    "name": "woman’s hat",
    "category": "people",
    "shortname": ":womans_hat:",
    "keyWords": [
      "clothing",
      "hat",
      "woman"
    ],
    "output": "1f452"
  },
  {
    "name": "graduation cap",
    "category": "people",
    "shortname": ":mortar_board:",
    "keyWords": [
      "cap",
      "celebration",
      "clothing",
      "graduation",
      "hat"
    ],
    "output": "1f393"
  },
  {
    "name": "rescue worker’s helmet",
    "category": "people",
    "shortname": ":helmet_with_cross:",
    "keyWords": [
      "aid",
      "cross",
      "face",
      "hat",
      "helmet"
    ],
    "output": "26d1"
  },
  {
    "name": "crown",
    "category": "people",
    "shortname": ":crown:",
    "keyWords": [
      "clothing",
      "king",
      "queen"
    ],
    "output": "1f451"
  },
  {
    "name": "clutch bag",
    "category": "people",
    "shortname": ":pouch:",
    "keyWords": [
      "bag",
      "clothing",
      "pouch"
    ],
    "output": "1f45d"
  },
  {
    "name": "purse",
    "category": "people",
    "shortname": ":purse:",
    "keyWords": [
      "clothing",
      "coin"
    ],
    "output": "1f45b"
  },
  {
    "name": "handbag",
    "category": "people",
    "shortname": ":handbag:",
    "keyWords": [
      "bag",
      "clothing",
      "purse"
    ],
    "output": "1f45c"
  },
  {
    "name": "briefcase",
    "category": "people",
    "shortname": ":briefcase:",
    "keyWords": [
      "briefcase"
    ],
    "output": "1f4bc"
  },
  {
    "name": "school backpack",
    "category": "people",
    "shortname": ":school_satchel:",
    "keyWords": [
      "bag",
      "satchel",
      "school"
    ],
    "output": "1f392"
  },
  {
    "name": "glasses",
    "category": "people",
    "shortname": ":eyeglasses:",
    "keyWords": [
      "clothing",
      "eye",
      "eyeglasses",
      "eyewear"
    ],
    "output": "1f453"
  },
  {
    "name": "sunglasses",
    "category": "people",
    "shortname": ":dark_sunglasses:",
    "keyWords": [
      "dark",
      "eye",
      "eyewear",
      "glasses"
    ],
    "output": "1f576"
  },
  {
    "name": "goggles",
    "category": "people",
    "shortname": ":goggles:",
    "keyWords": [
      ""
    ],
    "output": "1f97d"
  },
  {
    "name": "closed umbrella",
    "category": "people",
    "shortname": ":closed_umbrella:",
    "keyWords": [
      "clothing",
      "rain",
      "umbrella"
    ],
    "output": "1f302"
  },
  {
    "name": "red-haired",
    "category": "people",
    "shortname": ":red_haired:",
    "keyWords": [
      ""
    ],
    "output": "1f9b0"
  },
  {
    "name": "curly-haired",
    "category": "people",
    "shortname": ":curly_haired:",
    "keyWords": [
      ""
    ],
    "output": "1f9b1"
  },
  {
    "name": "white-haired",
    "category": "people",
    "shortname": ":white_haired:",
    "keyWords": [
      ""
    ],
    "output": "1f9b3"
  },
  {
    "name": "bald",
    "category": "people",
    "shortname": ":bald:",
    "keyWords": [
      ""
    ],
    "output": "1f9b2"
  },
  {
    "name": "regional indicator symbol letter z",
    "category": "regional",
    "shortname": ":regional_indicator_z:",
    "keyWords": [
      ""
    ],
    "output": "1f1ff"
  },
  {
    "name": "regional indicator symbol letter y",
    "category": "regional",
    "shortname": ":regional_indicator_y:",
    "keyWords": [
      ""
    ],
    "output": "1f1fe"
  },
  {
    "name": "regional indicator symbol letter x",
    "category": "regional",
    "shortname": ":regional_indicator_x:",
    "keyWords": [
      ""
    ],
    "output": "1f1fd"
  },
  {
    "name": "regional indicator symbol letter w",
    "category": "regional",
    "shortname": ":regional_indicator_w:",
    "keyWords": [
      ""
    ],
    "output": "1f1fc"
  },
  {
    "name": "regional indicator symbol letter v",
    "category": "regional",
    "shortname": ":regional_indicator_v:",
    "keyWords": [
      ""
    ],
    "output": "1f1fb"
  },
  {
    "name": "regional indicator symbol letter u",
    "category": "regional",
    "shortname": ":regional_indicator_u:",
    "keyWords": [
      ""
    ],
    "output": "1f1fa"
  },
  {
    "name": "regional indicator symbol letter t",
    "category": "regional",
    "shortname": ":regional_indicator_t:",
    "keyWords": [
      ""
    ],
    "output": "1f1f9"
  },
  {
    "name": "regional indicator symbol letter s",
    "category": "regional",
    "shortname": ":regional_indicator_s:",
    "keyWords": [
      ""
    ],
    "output": "1f1f8"
  },
  {
    "name": "regional indicator symbol letter r",
    "category": "regional",
    "shortname": ":regional_indicator_r:",
    "keyWords": [
      ""
    ],
    "output": "1f1f7"
  },
  {
    "name": "regional indicator symbol letter q",
    "category": "regional",
    "shortname": ":regional_indicator_q:",
    "keyWords": [
      ""
    ],
    "output": "1f1f6"
  },
  {
    "name": "regional indicator symbol letter p",
    "category": "regional",
    "shortname": ":regional_indicator_p:",
    "keyWords": [
      ""
    ],
    "output": "1f1f5"
  },
  {
    "name": "regional indicator symbol letter o",
    "category": "regional",
    "shortname": ":regional_indicator_o:",
    "keyWords": [
      ""
    ],
    "output": "1f1f4"
  },
  {
    "name": "regional indicator symbol letter n",
    "category": "regional",
    "shortname": ":regional_indicator_n:",
    "keyWords": [
      ""
    ],
    "output": "1f1f3"
  },
  {
    "name": "regional indicator symbol letter m",
    "category": "regional",
    "shortname": ":regional_indicator_m:",
    "keyWords": [
      ""
    ],
    "output": "1f1f2"
  },
  {
    "name": "regional indicator symbol letter l",
    "category": "regional",
    "shortname": ":regional_indicator_l:",
    "keyWords": [
      ""
    ],
    "output": "1f1f1"
  },
  {
    "name": "regional indicator symbol letter k",
    "category": "regional",
    "shortname": ":regional_indicator_k:",
    "keyWords": [
      ""
    ],
    "output": "1f1f0"
  },
  {
    "name": "regional indicator symbol letter j",
    "category": "regional",
    "shortname": ":regional_indicator_j:",
    "keyWords": [
      ""
    ],
    "output": "1f1ef"
  },
  {
    "name": "regional indicator symbol letter i",
    "category": "regional",
    "shortname": ":regional_indicator_i:",
    "keyWords": [
      ""
    ],
    "output": "1f1ee"
  },
  {
    "name": "regional indicator symbol letter h",
    "category": "regional",
    "shortname": ":regional_indicator_h:",
    "keyWords": [
      ""
    ],
    "output": "1f1ed"
  },
  {
    "name": "regional indicator symbol letter g",
    "category": "regional",
    "shortname": ":regional_indicator_g:",
    "keyWords": [
      ""
    ],
    "output": "1f1ec"
  },
  {
    "name": "regional indicator symbol letter f",
    "category": "regional",
    "shortname": ":regional_indicator_f:",
    "keyWords": [
      ""
    ],
    "output": "1f1eb"
  },
  {
    "name": "regional indicator symbol letter e",
    "category": "regional",
    "shortname": ":regional_indicator_e:",
    "keyWords": [
      ""
    ],
    "output": "1f1ea"
  },
  {
    "name": "regional indicator symbol letter d",
    "category": "regional",
    "shortname": ":regional_indicator_d:",
    "keyWords": [
      ""
    ],
    "output": "1f1e9"
  },
  {
    "name": "regional indicator symbol letter c",
    "category": "regional",
    "shortname": ":regional_indicator_c:",
    "keyWords": [
      ""
    ],
    "output": "1f1e8"
  },
  {
    "name": "regional indicator symbol letter b",
    "category": "regional",
    "shortname": ":regional_indicator_b:",
    "keyWords": [
      ""
    ],
    "output": "1f1e7"
  },
  {
    "name": "regional indicator symbol letter a",
    "category": "regional",
    "shortname": ":regional_indicator_a:",
    "keyWords": [
      ""
    ],
    "output": "1f1e6"
  },
  {
    "name": "automobile",
    "category": "travel",
    "shortname": ":red_car:",
    "keyWords": [
      "car"
    ],
    "output": "1f697"
  },
  {
    "name": "taxi",
    "category": "travel",
    "shortname": ":taxi:",
    "keyWords": [
      "vehicle"
    ],
    "output": "1f695"
  },
  {
    "name": "sport utility vehicle",
    "category": "travel",
    "shortname": ":blue_car:",
    "keyWords": [
      "recreational",
      "sport utility"
    ],
    "output": "1f699"
  },
  {
    "name": "bus",
    "category": "travel",
    "shortname": ":bus:",
    "keyWords": [
      "vehicle"
    ],
    "output": "1f68c"
  },
  {
    "name": "trolleybus",
    "category": "travel",
    "shortname": ":trolleybus:",
    "keyWords": [
      "bus",
      "tram",
      "trolley"
    ],
    "output": "1f68e"
  },
  {
    "name": "racing car",
    "category": "travel",
    "shortname": ":race_car:",
    "keyWords": [
      "car",
      "racing"
    ],
    "output": "1f3ce"
  },
  {
    "name": "police car",
    "category": "travel",
    "shortname": ":police_car:",
    "keyWords": [
      "car",
      "patrol",
      "police"
    ],
    "output": "1f693"
  },
  {
    "name": "ambulance",
    "category": "travel",
    "shortname": ":ambulance:",
    "keyWords": [
      "vehicle"
    ],
    "output": "1f691"
  },
  {
    "name": "fire engine",
    "category": "travel",
    "shortname": ":fire_engine:",
    "keyWords": [
      "engine",
      "fire",
      "truck"
    ],
    "output": "1f692"
  },
  {
    "name": "minibus",
    "category": "travel",
    "shortname": ":minibus:",
    "keyWords": [
      "bus"
    ],
    "output": "1f690"
  },
  {
    "name": "delivery truck",
    "category": "travel",
    "shortname": ":truck:",
    "keyWords": [
      "delivery",
      "truck"
    ],
    "output": "1f69a"
  },
  {
    "name": "articulated lorry",
    "category": "travel",
    "shortname": ":articulated_lorry:",
    "keyWords": [
      "lorry",
      "semi",
      "truck"
    ],
    "output": "1f69b"
  },
  {
    "name": "tractor",
    "category": "travel",
    "shortname": ":tractor:",
    "keyWords": [
      "vehicle"
    ],
    "output": "1f69c"
  },
  {
    "name": "kick scooter",
    "category": "travel",
    "shortname": ":scooter:",
    "keyWords": [
      "kick",
      "scooter"
    ],
    "output": "1f6f4"
  },
  {
    "name": "bicycle",
    "category": "travel",
    "shortname": ":bike:",
    "keyWords": [
      "bike"
    ],
    "output": "1f6b2"
  },
  {
    "name": "motor scooter",
    "category": "travel",
    "shortname": ":motor_scooter:",
    "keyWords": [
      "motor",
      "scooter"
    ],
    "output": "1f6f5"
  },
  {
    "name": "motorcycle",
    "category": "travel",
    "shortname": ":motorcycle:",
    "keyWords": [
      "racing"
    ],
    "output": "1f3cd"
  },
  {
    "name": "police car light",
    "category": "travel",
    "shortname": ":rotating_light:",
    "keyWords": [
      "beacon",
      "car",
      "light",
      "police",
      "revolving"
    ],
    "output": "1f6a8"
  },
  {
    "name": "oncoming police car",
    "category": "travel",
    "shortname": ":oncoming_police_car:",
    "keyWords": [
      "car",
      "oncoming",
      "police"
    ],
    "output": "1f694"
  },
  {
    "name": "oncoming bus",
    "category": "travel",
    "shortname": ":oncoming_bus:",
    "keyWords": [
      "bus",
      "oncoming"
    ],
    "output": "1f68d"
  },
  {
    "name": "oncoming automobile",
    "category": "travel",
    "shortname": ":oncoming_automobile:",
    "keyWords": [
      "automobile",
      "car",
      "oncoming"
    ],
    "output": "1f698"
  },
  {
    "name": "oncoming taxi",
    "category": "travel",
    "shortname": ":oncoming_taxi:",
    "keyWords": [
      "oncoming",
      "taxi"
    ],
    "output": "1f696"
  },
  {
    "name": "aerial tramway",
    "category": "travel",
    "shortname": ":aerial_tramway:",
    "keyWords": [
      "aerial",
      "cable",
      "car",
      "gondola",
      "tramway"
    ],
    "output": "1f6a1"
  },
  {
    "name": "mountain cableway",
    "category": "travel",
    "shortname": ":mountain_cableway:",
    "keyWords": [
      "cable",
      "gondola",
      "mountain"
    ],
    "output": "1f6a0"
  },
  {
    "name": "suspension railway",
    "category": "travel",
    "shortname": ":suspension_railway:",
    "keyWords": [
      "railway",
      "suspension"
    ],
    "output": "1f69f"
  },
  {
    "name": "railway car",
    "category": "travel",
    "shortname": ":railway_car:",
    "keyWords": [
      "car",
      "electric",
      "railway",
      "train",
      "tram",
      "trolleybus"
    ],
    "output": "1f683"
  },
  {
    "name": "tram car",
    "category": "travel",
    "shortname": ":train:",
    "keyWords": [
      "car",
      "tram",
      "trolleybus"
    ],
    "output": "1f68b"
  },
  {
    "name": "mountain railway",
    "category": "travel",
    "shortname": ":mountain_railway:",
    "keyWords": [
      "car",
      "mountain",
      "railway"
    ],
    "output": "1f69e"
  },
  {
    "name": "monorail",
    "category": "travel",
    "shortname": ":monorail:",
    "keyWords": [
      "vehicle"
    ],
    "output": "1f69d"
  },
  {
    "name": "high-speed train",
    "category": "travel",
    "shortname": ":bullettrain_side:",
    "keyWords": [
      "railway",
      "shinkansen",
      "speed",
      "train"
    ],
    "output": "1f684"
  },
  {
    "name": "bullet train",
    "category": "travel",
    "shortname": ":bullettrain_front:",
    "keyWords": [
      "bullet",
      "railway",
      "shinkansen",
      "speed",
      "train"
    ],
    "output": "1f685"
  },
  {
    "name": "light rail",
    "category": "travel",
    "shortname": ":light_rail:",
    "keyWords": [
      "railway"
    ],
    "output": "1f688"
  },
  {
    "name": "locomotive",
    "category": "travel",
    "shortname": ":steam_locomotive:",
    "keyWords": [
      "engine",
      "railway",
      "steam",
      "train"
    ],
    "output": "1f682"
  },
  {
    "name": "train",
    "category": "travel",
    "shortname": ":train2:",
    "keyWords": [
      "railway"
    ],
    "output": "1f686"
  },
  {
    "name": "metro",
    "category": "travel",
    "shortname": ":metro:",
    "keyWords": [
      "subway"
    ],
    "output": "1f687"
  },
  {
    "name": "tram",
    "category": "travel",
    "shortname": ":tram:",
    "keyWords": [
      "trolleybus"
    ],
    "output": "1f68a"
  },
  {
    "name": "station",
    "category": "travel",
    "shortname": ":station:",
    "keyWords": [
      "railway",
      "train"
    ],
    "output": "1f689"
  },
  {
    "name": "airplane departure",
    "category": "travel",
    "shortname": ":airplane_departure:",
    "keyWords": [
      "aeroplane",
      "airplane",
      "check-in",
      "departure",
      "departures"
    ],
    "output": "1f6eb"
  },
  {
    "name": "airplane arrival",
    "category": "travel",
    "shortname": ":airplane_arriving:",
    "keyWords": [
      "aeroplane",
      "airplane",
      "arrivals",
      "arriving",
      "landing"
    ],
    "output": "1f6ec"
  },
  {
    "name": "small airplane",
    "category": "travel",
    "shortname": ":airplane_small:",
    "keyWords": [
      "aeroplane",
      "airplane"
    ],
    "output": "1f6e9"
  },
  {
    "name": "seat",
    "category": "travel",
    "shortname": ":seat:",
    "keyWords": [
      "chair"
    ],
    "output": "1f4ba"
  },
  {
    "name": "luggage",
    "category": "travel",
    "shortname": ":luggage:",
    "keyWords": [
      ""
    ],
    "output": "1f9f3"
  },
  {
    "name": "satellite",
    "category": "travel",
    "shortname": ":satellite_orbital:",
    "keyWords": [
      "space"
    ],
    "output": "1f6f0"
  },
  {
    "name": "rocket",
    "category": "travel",
    "shortname": ":rocket:",
    "keyWords": [
      "space"
    ],
    "output": "1f680"
  },
  {
    "name": "flying saucer",
    "category": "travel",
    "shortname": ":flying_saucer:",
    "keyWords": [
      "UFO"
    ],
    "output": "1f6f8"
  },
  {
    "name": "helicopter",
    "category": "travel",
    "shortname": ":helicopter:",
    "keyWords": [
      "vehicle"
    ],
    "output": "1f681"
  },
  {
    "name": "canoe",
    "category": "travel",
    "shortname": ":canoe:",
    "keyWords": [
      "boat",
      "canoe"
    ],
    "output": "1f6f6"
  },
  {
    "name": "sailboat",
    "category": "travel",
    "shortname": ":sailboat:",
    "keyWords": [
      "boat",
      "resort",
      "sea",
      "yacht"
    ],
    "output": "26f5"
  },
  {
    "name": "speedboat",
    "category": "travel",
    "shortname": ":speedboat:",
    "keyWords": [
      "boat"
    ],
    "output": "1f6a4"
  },
  {
    "name": "motor boat",
    "category": "travel",
    "shortname": ":motorboat:",
    "keyWords": [
      "boat",
      "motorboat"
    ],
    "output": "1f6e5"
  },
  {
    "name": "passenger ship",
    "category": "travel",
    "shortname": ":cruise_ship:",
    "keyWords": [
      "passenger",
      "ship"
    ],
    "output": "1f6f3"
  },
  {
    "name": "ferry",
    "category": "travel",
    "shortname": ":ferry:",
    "keyWords": [
      "boat",
      "passenger"
    ],
    "output": "26f4"
  },
  {
    "name": "ship",
    "category": "travel",
    "shortname": ":ship:",
    "keyWords": [
      "boat",
      "passenger"
    ],
    "output": "1f6a2"
  },
  {
    "name": "fuel pump",
    "category": "travel",
    "shortname": ":fuelpump:",
    "keyWords": [
      "fuel",
      "fuelpump",
      "gas",
      "pump",
      "station"
    ],
    "output": "26fd"
  },
  {
    "name": "construction",
    "category": "travel",
    "shortname": ":construction:",
    "keyWords": [
      "barrier"
    ],
    "output": "1f6a7"
  },
  {
    "name": "vertical traffic light",
    "category": "travel",
    "shortname": ":vertical_traffic_light:",
    "keyWords": [
      "light",
      "signal",
      "traffic"
    ],
    "output": "1f6a6"
  },
  {
    "name": "horizontal traffic light",
    "category": "travel",
    "shortname": ":traffic_light:",
    "keyWords": [
      "light",
      "signal",
      "traffic"
    ],
    "output": "1f6a5"
  },
  {
    "name": "bus stop",
    "category": "travel",
    "shortname": ":busstop:",
    "keyWords": [
      "bus",
      "busstop",
      "stop"
    ],
    "output": "1f68f"
  },
  {
    "name": "world map",
    "category": "travel",
    "shortname": ":map:",
    "keyWords": [
      "map",
      "world"
    ],
    "output": "1f5fa"
  },
  {
    "name": "moai",
    "category": "travel",
    "shortname": ":moyai:",
    "keyWords": [
      "face",
      "moyai",
      "statue"
    ],
    "output": "1f5ff"
  },
  {
    "name": "Statue of Liberty",
    "category": "travel",
    "shortname": ":statue_of_liberty:",
    "keyWords": [
      "liberty",
      "statue"
    ],
    "output": "1f5fd"
  },
  {
    "name": "Tokyo tower",
    "category": "travel",
    "shortname": ":tokyo_tower:",
    "keyWords": [
      "Tokyo",
      "tower"
    ],
    "output": "1f5fc"
  },
  {
    "name": "castle",
    "category": "travel",
    "shortname": ":european_castle:",
    "keyWords": [
      "European"
    ],
    "output": "1f3f0"
  },
  {
    "name": "Japanese castle",
    "category": "travel",
    "shortname": ":japanese_castle:",
    "keyWords": [
      "Japanese",
      "castle"
    ],
    "output": "1f3ef"
  },
  {
    "name": "stadium",
    "category": "travel",
    "shortname": ":stadium:",
    "keyWords": [
      "stadium"
    ],
    "output": "1f3df"
  },
  {
    "name": "ferris wheel",
    "category": "travel",
    "shortname": ":ferris_wheel:",
    "keyWords": [
      "amusement park",
      "ferris",
      "wheel"
    ],
    "output": "1f3a1"
  },
  {
    "name": "roller coaster",
    "category": "travel",
    "shortname": ":roller_coaster:",
    "keyWords": [
      "amusement park",
      "coaster",
      "roller"
    ],
    "output": "1f3a2"
  },
  {
    "name": "carousel horse",
    "category": "travel",
    "shortname": ":carousel_horse:",
    "keyWords": [
      "carousel",
      "horse"
    ],
    "output": "1f3a0"
  },
  {
    "name": "fountain",
    "category": "travel",
    "shortname": ":fountain:",
    "keyWords": [
      "fountain"
    ],
    "output": "26f2"
  },
  {
    "name": "umbrella on ground",
    "category": "travel",
    "shortname": ":beach_umbrella:",
    "keyWords": [
      "rain",
      "sun",
      "umbrella"
    ],
    "output": "26f1"
  },
  {
    "name": "beach with umbrella",
    "category": "travel",
    "shortname": ":beach:",
    "keyWords": [
      "beach",
      "umbrella"
    ],
    "output": "1f3d6"
  },
  {
    "name": "desert island",
    "category": "travel",
    "shortname": ":island:",
    "keyWords": [
      "desert",
      "island"
    ],
    "output": "1f3dd"
  },
  {
    "name": "desert",
    "category": "travel",
    "shortname": ":desert:",
    "keyWords": [
      "desert"
    ],
    "output": "1f3dc"
  },
  {
    "name": "volcano",
    "category": "travel",
    "shortname": ":volcano:",
    "keyWords": [
      "eruption",
      "mountain"
    ],
    "output": "1f30b"
  },
  {
    "name": "mountain",
    "category": "travel",
    "shortname": ":mountain:",
    "keyWords": [
      "mountain"
    ],
    "output": "26f0"
  },
  {
    "name": "snow-capped mountain",
    "category": "travel",
    "shortname": ":mountain_snow:",
    "keyWords": [
      "cold",
      "mountain",
      "snow"
    ],
    "output": "1f3d4"
  },
  {
    "name": "mount fuji",
    "category": "travel",
    "shortname": ":mount_fuji:",
    "keyWords": [
      "fuji",
      "mountain"
    ],
    "output": "1f5fb"
  },
  {
    "name": "camping",
    "category": "travel",
    "shortname": ":camping:",
    "keyWords": [
      "camping"
    ],
    "output": "1f3d5"
  },
  {
    "name": "tent",
    "category": "travel",
    "shortname": ":tent:",
    "keyWords": [
      "camping"
    ],
    "output": "26fa"
  },
  {
    "name": "house",
    "category": "travel",
    "shortname": ":house:",
    "keyWords": [
      "home",
      "house"
    ],
    "output": "1f3e0"
  },
  {
    "name": "house with garden",
    "category": "travel",
    "shortname": ":house_with_garden:",
    "keyWords": [
      "garden",
      "home",
      "house"
    ],
    "output": "1f3e1"
  },
  {
    "name": "houses",
    "category": "travel",
    "shortname": ":homes:",
    "keyWords": [
      "houses"
    ],
    "output": "1f3d8"
  },
  {
    "name": "derelict house",
    "category": "travel",
    "shortname": ":house_abandoned:",
    "keyWords": [
      "derelict",
      "house"
    ],
    "output": "1f3da"
  },
  {
    "name": "building construction",
    "category": "travel",
    "shortname": ":construction_site:",
    "keyWords": [
      "construction"
    ],
    "output": "1f3d7"
  },
  {
    "name": "factory",
    "category": "travel",
    "shortname": ":factory:",
    "keyWords": [
      "building"
    ],
    "output": "1f3ed"
  },
  {
    "name": "office building",
    "category": "travel",
    "shortname": ":office:",
    "keyWords": [
      "building"
    ],
    "output": "1f3e2"
  },
  {
    "name": "department store",
    "category": "travel",
    "shortname": ":department_store:",
    "keyWords": [
      "department",
      "store"
    ],
    "output": "1f3ec"
  },
  {
    "name": "Japanese post office",
    "category": "travel",
    "shortname": ":post_office:",
    "keyWords": [
      "Japanese",
      "post"
    ],
    "output": "1f3e3"
  },
  {
    "name": "post office",
    "category": "travel",
    "shortname": ":european_post_office:",
    "keyWords": [
      "European",
      "post"
    ],
    "output": "1f3e4"
  },
  {
    "name": "hospital",
    "category": "travel",
    "shortname": ":hospital:",
    "keyWords": [
      "doctor",
      "medicine"
    ],
    "output": "1f3e5"
  },
  {
    "name": "bank",
    "category": "travel",
    "shortname": ":bank:",
    "keyWords": [
      "building"
    ],
    "output": "1f3e6"
  },
  {
    "name": "hotel",
    "category": "travel",
    "shortname": ":hotel:",
    "keyWords": [
      "building"
    ],
    "output": "1f3e8"
  },
  {
    "name": "convenience store",
    "category": "travel",
    "shortname": ":convenience_store:",
    "keyWords": [
      "convenience",
      "store"
    ],
    "output": "1f3ea"
  },
  {
    "name": "school",
    "category": "travel",
    "shortname": ":school:",
    "keyWords": [
      "building"
    ],
    "output": "1f3eb"
  },
  {
    "name": "love hotel",
    "category": "travel",
    "shortname": ":love_hotel:",
    "keyWords": [
      "hotel",
      "love"
    ],
    "output": "1f3e9"
  },
  {
    "name": "wedding",
    "category": "travel",
    "shortname": ":wedding:",
    "keyWords": [
      "chapel",
      "romance"
    ],
    "output": "1f492"
  },
  {
    "name": "classical building",
    "category": "travel",
    "shortname": ":classical_building:",
    "keyWords": [
      "classical"
    ],
    "output": "1f3db"
  },
  {
    "name": "church",
    "category": "travel",
    "shortname": ":church:",
    "keyWords": [
      "Christian",
      "cross",
      "religion"
    ],
    "output": "26ea"
  },
  {
    "name": "mosque",
    "category": "travel",
    "shortname": ":mosque:",
    "keyWords": [
      "Muslim",
      "islam",
      "religion"
    ],
    "output": "1f54c"
  },
  {
    "name": "synagogue",
    "category": "travel",
    "shortname": ":synagogue:",
    "keyWords": [
      "Jew",
      "Jewish",
      "religion",
      "temple"
    ],
    "output": "1f54d"
  },
  {
    "name": "kaaba",
    "category": "travel",
    "shortname": ":kaaba:",
    "keyWords": [
      "Muslim",
      "islam",
      "religion"
    ],
    "output": "1f54b"
  },
  {
    "name": "shinto shrine",
    "category": "travel",
    "shortname": ":shinto_shrine:",
    "keyWords": [
      "religion",
      "shinto",
      "shrine"
    ],
    "output": "26e9"
  },
  {
    "name": "railway track",
    "category": "travel",
    "shortname": ":railway_track:",
    "keyWords": [
      "railway",
      "train"
    ],
    "output": "1f6e4"
  },
  {
    "name": "motorway",
    "category": "travel",
    "shortname": ":motorway:",
    "keyWords": [
      "highway",
      "road"
    ],
    "output": "1f6e3"
  },
  {
    "name": "map of Japan",
    "category": "travel",
    "shortname": ":japan:",
    "keyWords": [
      "Japan",
      "map"
    ],
    "output": "1f5fe"
  },
  {
    "name": "moon viewing ceremony",
    "category": "travel",
    "shortname": ":rice_scene:",
    "keyWords": [
      "celebration",
      "ceremony",
      "moon"
    ],
    "output": "1f391"
  },
  {
    "name": "national park",
    "category": "travel",
    "shortname": ":park:",
    "keyWords": [
      "park"
    ],
    "output": "1f3de"
  },
  {
    "name": "sunrise",
    "category": "travel",
    "shortname": ":sunrise:",
    "keyWords": [
      "morning",
      "sun"
    ],
    "output": "1f305"
  },
  {
    "name": "sunrise over mountains",
    "category": "travel",
    "shortname": ":sunrise_over_mountains:",
    "keyWords": [
      "morning",
      "mountain",
      "sun",
      "sunrise"
    ],
    "output": "1f304"
  },
  {
    "name": "shooting star",
    "category": "travel",
    "shortname": ":stars:",
    "keyWords": [
      "falling",
      "shooting",
      "star"
    ],
    "output": "1f320"
  },
  {
    "name": "sparkler",
    "category": "travel",
    "shortname": ":sparkler:",
    "keyWords": [
      "celebration",
      "fireworks",
      "sparkle"
    ],
    "output": "1f387"
  },
  {
    "name": "fireworks",
    "category": "travel",
    "shortname": ":fireworks:",
    "keyWords": [
      "celebration"
    ],
    "output": "1f386"
  },
  {
    "name": "firecracker",
    "category": "travel",
    "shortname": ":firecracker:",
    "keyWords": [
      ""
    ],
    "output": "1f9e8"
  },
  {
    "name": "sunset",
    "category": "travel",
    "shortname": ":city_sunset:",
    "keyWords": [
      "dusk",
      "sun"
    ],
    "output": "1f307"
  },
  {
    "name": "cityscape at dusk",
    "category": "travel",
    "shortname": ":city_dusk:",
    "keyWords": [
      "city",
      "dusk",
      "evening",
      "landscape",
      "sun",
      "sunset"
    ],
    "output": "1f306"
  },
  {
    "name": "cityscape",
    "category": "travel",
    "shortname": ":cityscape:",
    "keyWords": [
      "city"
    ],
    "output": "1f3d9"
  },
  {
    "name": "night with stars",
    "category": "travel",
    "shortname": ":night_with_stars:",
    "keyWords": [
      "night",
      "star"
    ],
    "output": "1f303"
  },
  {
    "name": "milky way",
    "category": "travel",
    "shortname": ":milky_way:",
    "keyWords": [
      "space"
    ],
    "output": "1f30c"
  },
  {
    "name": "bridge at night",
    "category": "travel",
    "shortname": ":bridge_at_night:",
    "keyWords": [
      "bridge",
      "night"
    ],
    "output": "1f309"
  },
  {
    "name": "locked",
    "category": "objects",
    "shortname": ":lock:",
    "keyWords": [
      "closed"
    ],
    "output": "1f512"
  },
  {
    "name": "unlocked",
    "category": "objects",
    "shortname": ":unlock:",
    "keyWords": [
      "lock",
      "open",
      "unlock"
    ],
    "output": "1f513"
  },
  {
    "name": "foggy",
    "category": "travel",
    "shortname": ":foggy:",
    "keyWords": [
      "fog"
    ],
    "output": "1f301"
  },
  {
    "name": "white flag",
    "category": "flags",
    "shortname": ":flag_white:",
    "keyWords": [
      "waving"
    ],
    "output": "1f3f3"
  },
  {
    "name": "black flag",
    "category": "flags",
    "shortname": ":flag_black:",
    "keyWords": [
      "waving"
    ],
    "output": "1f3f4"
  },
  {
    "name": "chequered flag",
    "category": "flags",
    "shortname": ":checkered_flag:",
    "keyWords": [
      "checkered",
      "chequered",
      "racing"
    ],
    "output": "1f3c1"
  },
  {
    "name": "triangular flag",
    "category": "flags",
    "shortname": ":triangular_flag_on_post:",
    "keyWords": [
      "post"
    ],
    "output": "1f6a9"
  },
  {
    "name": "rainbow flag",
    "category": "flags",
    "shortname": ":rainbow_flag:",
    "keyWords": [
      "rainbow"
    ],
    "output": "1f3f3-fe0f-200d-1f308"
  },
  {
    "name": "pirate flag",
    "category": "flags",
    "shortname": ":pirate_flag:",
    "keyWords": [
      ""
    ],
    "output": "1f3f4-200d-2620-fe0f"
  },
  {
    "name": "Afghanistan",
    "category": "flags",
    "shortname": ":flag_af:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1eb"
  },
  {
    "name": "Åland Islands",
    "category": "flags",
    "shortname": ":flag_ax:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1fd"
  },
  {
    "name": "Albania",
    "category": "flags",
    "shortname": ":flag_al:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1f1"
  },
  {
    "name": "Algeria",
    "category": "flags",
    "shortname": ":flag_dz:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e9-1f1ff"
  },
  {
    "name": "American Samoa",
    "category": "flags",
    "shortname": ":flag_as:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1f8"
  },
  {
    "name": "Andorra",
    "category": "flags",
    "shortname": ":flag_ad:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1e9"
  },
  {
    "name": "Angola",
    "category": "flags",
    "shortname": ":flag_ao:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1f4"
  },
  {
    "name": "Anguilla",
    "category": "flags",
    "shortname": ":flag_ai:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1ee"
  },
  {
    "name": "Antarctica",
    "category": "flags",
    "shortname": ":flag_aq:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1f6"
  },
  {
    "name": "Antigua &amp; Barbuda",
    "category": "flags",
    "shortname": ":flag_ag:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1ec"
  },
  {
    "name": "Argentina",
    "category": "flags",
    "shortname": ":flag_ar:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1f7"
  },
  {
    "name": "Armenia",
    "category": "flags",
    "shortname": ":flag_am:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1f2"
  },
  {
    "name": "Aruba",
    "category": "flags",
    "shortname": ":flag_aw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1fc"
  },
  {
    "name": "Australia",
    "category": "flags",
    "shortname": ":flag_au:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1fa"
  },
  {
    "name": "Austria",
    "category": "flags",
    "shortname": ":flag_at:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1f9"
  },
  {
    "name": "Azerbaijan",
    "category": "flags",
    "shortname": ":flag_az:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1ff"
  },
  {
    "name": "Bahamas",
    "category": "flags",
    "shortname": ":flag_bs:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1f8"
  },
  {
    "name": "Bahrain",
    "category": "flags",
    "shortname": ":flag_bh:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1ed"
  },
  {
    "name": "Bangladesh",
    "category": "flags",
    "shortname": ":flag_bd:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1e9"
  },
  {
    "name": "Barbados",
    "category": "flags",
    "shortname": ":flag_bb:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1e7"
  },
  {
    "name": "Belarus",
    "category": "flags",
    "shortname": ":flag_by:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1fe"
  },
  {
    "name": "Belgium",
    "category": "flags",
    "shortname": ":flag_be:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1ea"
  },
  {
    "name": "Belize",
    "category": "flags",
    "shortname": ":flag_bz:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1ff"
  },
  {
    "name": "Benin",
    "category": "flags",
    "shortname": ":flag_bj:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1ef"
  },
  {
    "name": "Bermuda",
    "category": "flags",
    "shortname": ":flag_bm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1f2"
  },
  {
    "name": "Bhutan",
    "category": "flags",
    "shortname": ":flag_bt:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1f9"
  },
  {
    "name": "Bolivia",
    "category": "flags",
    "shortname": ":flag_bo:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1f4"
  },
  {
    "name": "Bosnia &amp; Herzegovina",
    "category": "flags",
    "shortname": ":flag_ba:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1e6"
  },
  {
    "name": "Botswana",
    "category": "flags",
    "shortname": ":flag_bw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1fc"
  },
  {
    "name": "Brazil",
    "category": "flags",
    "shortname": ":flag_br:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1f7"
  },
  {
    "name": "British Indian Ocean Territory",
    "category": "flags",
    "shortname": ":flag_io:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1f4"
  },
  {
    "name": "British Virgin Islands",
    "category": "flags",
    "shortname": ":flag_vg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fb-1f1ec"
  },
  {
    "name": "Brunei",
    "category": "flags",
    "shortname": ":flag_bn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1f3"
  },
  {
    "name": "Bulgaria",
    "category": "flags",
    "shortname": ":flag_bg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1ec"
  },
  {
    "name": "Burkina Faso",
    "category": "flags",
    "shortname": ":flag_bf:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1eb"
  },
  {
    "name": "Burundi",
    "category": "flags",
    "shortname": ":flag_bi:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1ee"
  },
  {
    "name": "Cambodia",
    "category": "flags",
    "shortname": ":flag_kh:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1ed"
  },
  {
    "name": "Cameroon",
    "category": "flags",
    "shortname": ":flag_cm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1f2"
  },
  {
    "name": "Canada",
    "category": "flags",
    "shortname": ":flag_ca:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1e6"
  },
  {
    "name": "Canary Islands",
    "category": "flags",
    "shortname": ":flag_ic:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1e8"
  },
  {
    "name": "Cape Verde",
    "category": "flags",
    "shortname": ":flag_cv:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1fb"
  },
  {
    "name": "Caribbean Netherlands",
    "category": "flags",
    "shortname": ":flag_bq:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1f6"
  },
  {
    "name": "Cayman Islands",
    "category": "flags",
    "shortname": ":flag_ky:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1fe"
  },
  {
    "name": "Central African Republic",
    "category": "flags",
    "shortname": ":flag_cf:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1eb"
  },
  {
    "name": "Chad",
    "category": "flags",
    "shortname": ":flag_td:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1e9"
  },
  {
    "name": "Chile",
    "category": "flags",
    "shortname": ":flag_cl:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1f1"
  },
  {
    "name": "China",
    "category": "flags",
    "shortname": ":flag_cn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1f3"
  },
  {
    "name": "Christmas Island",
    "category": "flags",
    "shortname": ":flag_cx:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1fd"
  },
  {
    "name": "Cocos (Keeling) Islands",
    "category": "flags",
    "shortname": ":flag_cc:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1e8"
  },
  {
    "name": "Colombia",
    "category": "flags",
    "shortname": ":flag_co:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1f4"
  },
  {
    "name": "Comoros",
    "category": "flags",
    "shortname": ":flag_km:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1f2"
  },
  {
    "name": "Congo - Brazzaville",
    "category": "flags",
    "shortname": ":flag_cg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1ec"
  },
  {
    "name": "Congo - Kinshasa",
    "category": "flags",
    "shortname": ":flag_cd:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1e9"
  },
  {
    "name": "Cook Islands",
    "category": "flags",
    "shortname": ":flag_ck:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1f0"
  },
  {
    "name": "Costa Rica",
    "category": "flags",
    "shortname": ":flag_cr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1f7"
  },
  {
    "name": "Côte d’Ivoire",
    "category": "flags",
    "shortname": ":flag_ci:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1ee"
  },
  {
    "name": "Croatia",
    "category": "flags",
    "shortname": ":flag_hr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ed-1f1f7"
  },
  {
    "name": "Cuba",
    "category": "flags",
    "shortname": ":flag_cu:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1fa"
  },
  {
    "name": "Curaçao",
    "category": "flags",
    "shortname": ":flag_cw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1fc"
  },
  {
    "name": "Cyprus",
    "category": "flags",
    "shortname": ":flag_cy:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1fe"
  },
  {
    "name": "Czechia",
    "category": "flags",
    "shortname": ":flag_cz:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1ff"
  },
  {
    "name": "Denmark",
    "category": "flags",
    "shortname": ":flag_dk:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e9-1f1f0"
  },
  {
    "name": "Djibouti",
    "category": "flags",
    "shortname": ":flag_dj:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e9-1f1ef"
  },
  {
    "name": "Dominica",
    "category": "flags",
    "shortname": ":flag_dm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e9-1f1f2"
  },
  {
    "name": "Dominican Republic",
    "category": "flags",
    "shortname": ":flag_do:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e9-1f1f4"
  },
  {
    "name": "Ecuador",
    "category": "flags",
    "shortname": ":flag_ec:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ea-1f1e8"
  },
  {
    "name": "Egypt",
    "category": "flags",
    "shortname": ":flag_eg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ea-1f1ec"
  },
  {
    "name": "El Salvador",
    "category": "flags",
    "shortname": ":flag_sv:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1fb"
  },
  {
    "name": "Equatorial Guinea",
    "category": "flags",
    "shortname": ":flag_gq:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1f6"
  },
  {
    "name": "Eritrea",
    "category": "flags",
    "shortname": ":flag_er:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ea-1f1f7"
  },
  {
    "name": "Estonia",
    "category": "flags",
    "shortname": ":flag_ee:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ea-1f1ea"
  },
  {
    "name": "Ethiopia",
    "category": "flags",
    "shortname": ":flag_et:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ea-1f1f9"
  },
  {
    "name": "European Union",
    "category": "flags",
    "shortname": ":flag_eu:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ea-1f1fa"
  },
  {
    "name": "Falkland Islands",
    "category": "flags",
    "shortname": ":flag_fk:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1eb-1f1f0"
  },
  {
    "name": "Faroe Islands",
    "category": "flags",
    "shortname": ":flag_fo:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1eb-1f1f4"
  },
  {
    "name": "Fiji",
    "category": "flags",
    "shortname": ":flag_fj:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1eb-1f1ef"
  },
  {
    "name": "Finland",
    "category": "flags",
    "shortname": ":flag_fi:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1eb-1f1ee"
  },
  {
    "name": "France",
    "category": "flags",
    "shortname": ":flag_fr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1eb-1f1f7"
  },
  {
    "name": "French Guiana",
    "category": "flags",
    "shortname": ":flag_gf:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1eb"
  },
  {
    "name": "French Polynesia",
    "category": "flags",
    "shortname": ":flag_pf:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1eb"
  },
  {
    "name": "French Southern Territories",
    "category": "flags",
    "shortname": ":flag_tf:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1eb"
  },
  {
    "name": "Gabon",
    "category": "flags",
    "shortname": ":flag_ga:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1e6"
  },
  {
    "name": "Gambia",
    "category": "flags",
    "shortname": ":flag_gm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1f2"
  },
  {
    "name": "Georgia",
    "category": "flags",
    "shortname": ":flag_ge:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1ea"
  },
  {
    "name": "Germany",
    "category": "flags",
    "shortname": ":flag_de:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e9-1f1ea"
  },
  {
    "name": "Ghana",
    "category": "flags",
    "shortname": ":flag_gh:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1ed"
  },
  {
    "name": "Gibraltar",
    "category": "flags",
    "shortname": ":flag_gi:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1ee"
  },
  {
    "name": "Greece",
    "category": "flags",
    "shortname": ":flag_gr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1f7"
  },
  {
    "name": "Greenland",
    "category": "flags",
    "shortname": ":flag_gl:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1f1"
  },
  {
    "name": "Grenada",
    "category": "flags",
    "shortname": ":flag_gd:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1e9"
  },
  {
    "name": "Guadeloupe",
    "category": "flags",
    "shortname": ":flag_gp:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1f5"
  },
  {
    "name": "Guam",
    "category": "flags",
    "shortname": ":flag_gu:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1fa"
  },
  {
    "name": "Guatemala",
    "category": "flags",
    "shortname": ":flag_gt:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1f9"
  },
  {
    "name": "Guernsey",
    "category": "flags",
    "shortname": ":flag_gg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1ec"
  },
  {
    "name": "Guinea",
    "category": "flags",
    "shortname": ":flag_gn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1f3"
  },
  {
    "name": "Guinea-Bissau",
    "category": "flags",
    "shortname": ":flag_gw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1fc"
  },
  {
    "name": "Guyana",
    "category": "flags",
    "shortname": ":flag_gy:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1fe"
  },
  {
    "name": "Haiti",
    "category": "flags",
    "shortname": ":flag_ht:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ed-1f1f9"
  },
  {
    "name": "Honduras",
    "category": "flags",
    "shortname": ":flag_hn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ed-1f1f3"
  },
  {
    "name": "Hong Kong SAR China",
    "category": "flags",
    "shortname": ":flag_hk:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ed-1f1f0"
  },
  {
    "name": "Hungary",
    "category": "flags",
    "shortname": ":flag_hu:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ed-1f1fa"
  },
  {
    "name": "Iceland",
    "category": "flags",
    "shortname": ":flag_is:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1f8"
  },
  {
    "name": "India",
    "category": "flags",
    "shortname": ":flag_in:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1f3"
  },
  {
    "name": "Indonesia",
    "category": "flags",
    "shortname": ":flag_id:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1e9"
  },
  {
    "name": "Iran",
    "category": "flags",
    "shortname": ":flag_ir:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1f7"
  },
  {
    "name": "Iraq",
    "category": "flags",
    "shortname": ":flag_iq:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1f6"
  },
  {
    "name": "Ireland",
    "category": "flags",
    "shortname": ":flag_ie:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1ea"
  },
  {
    "name": "Isle of Man",
    "category": "flags",
    "shortname": ":flag_im:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1f2"
  },
  {
    "name": "Israel",
    "category": "flags",
    "shortname": ":flag_il:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1f1"
  },
  {
    "name": "Italy",
    "category": "flags",
    "shortname": ":flag_it:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ee-1f1f9"
  },
  {
    "name": "Jamaica",
    "category": "flags",
    "shortname": ":flag_jm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ef-1f1f2"
  },
  {
    "name": "Japan",
    "category": "flags",
    "shortname": ":flag_jp:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ef-1f1f5"
  },
  {
    "name": "crossed flags",
    "category": "flags",
    "shortname": ":crossed_flags:",
    "keyWords": [
      "Japanese",
      "celebration",
      "cross",
      "crossed"
    ],
    "output": "1f38c"
  },
  {
    "name": "Jersey",
    "category": "flags",
    "shortname": ":flag_je:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ef-1f1ea"
  },
  {
    "name": "Jordan",
    "category": "flags",
    "shortname": ":flag_jo:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ef-1f1f4"
  },
  {
    "name": "Kazakhstan",
    "category": "flags",
    "shortname": ":flag_kz:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1ff"
  },
  {
    "name": "Kenya",
    "category": "flags",
    "shortname": ":flag_ke:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1ea"
  },
  {
    "name": "Kiribati",
    "category": "flags",
    "shortname": ":flag_ki:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1ee"
  },
  {
    "name": "Kosovo",
    "category": "flags",
    "shortname": ":flag_xk:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fd-1f1f0"
  },
  {
    "name": "Kuwait",
    "category": "flags",
    "shortname": ":flag_kw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1fc"
  },
  {
    "name": "Kyrgyzstan",
    "category": "flags",
    "shortname": ":flag_kg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1ec"
  },
  {
    "name": "Laos",
    "category": "flags",
    "shortname": ":flag_la:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1e6"
  },
  {
    "name": "Latvia",
    "category": "flags",
    "shortname": ":flag_lv:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1fb"
  },
  {
    "name": "Lebanon",
    "category": "flags",
    "shortname": ":flag_lb:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1e7"
  },
  {
    "name": "Lesotho",
    "category": "flags",
    "shortname": ":flag_ls:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1f8"
  },
  {
    "name": "Liberia",
    "category": "flags",
    "shortname": ":flag_lr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1f7"
  },
  {
    "name": "Libya",
    "category": "flags",
    "shortname": ":flag_ly:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1fe"
  },
  {
    "name": "Liechtenstein",
    "category": "flags",
    "shortname": ":flag_li:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1ee"
  },
  {
    "name": "Lithuania",
    "category": "flags",
    "shortname": ":flag_lt:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1f9"
  },
  {
    "name": "Luxembourg",
    "category": "flags",
    "shortname": ":flag_lu:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1fa"
  },
  {
    "name": "Macau SAR China",
    "category": "flags",
    "shortname": ":flag_mo:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f4"
  },
  {
    "name": "Macedonia",
    "category": "flags",
    "shortname": ":flag_mk:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f0"
  },
  {
    "name": "Madagascar",
    "category": "flags",
    "shortname": ":flag_mg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1ec"
  },
  {
    "name": "Malawi",
    "category": "flags",
    "shortname": ":flag_mw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1fc"
  },
  {
    "name": "Malaysia",
    "category": "flags",
    "shortname": ":flag_my:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1fe"
  },
  {
    "name": "Maldives",
    "category": "flags",
    "shortname": ":flag_mv:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1fb"
  },
  {
    "name": "Mali",
    "category": "flags",
    "shortname": ":flag_ml:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f1"
  },
  {
    "name": "Malta",
    "category": "flags",
    "shortname": ":flag_mt:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f9"
  },
  {
    "name": "Marshall Islands",
    "category": "flags",
    "shortname": ":flag_mh:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1ed"
  },
  {
    "name": "Martinique",
    "category": "flags",
    "shortname": ":flag_mq:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f6"
  },
  {
    "name": "Mauritania",
    "category": "flags",
    "shortname": ":flag_mr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f7"
  },
  {
    "name": "Mauritius",
    "category": "flags",
    "shortname": ":flag_mu:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1fa"
  },
  {
    "name": "Mayotte",
    "category": "flags",
    "shortname": ":flag_yt:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fe-1f1f9"
  },
  {
    "name": "Mexico",
    "category": "flags",
    "shortname": ":flag_mx:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1fd"
  },
  {
    "name": "Micronesia",
    "category": "flags",
    "shortname": ":flag_fm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1eb-1f1f2"
  },
  {
    "name": "Moldova",
    "category": "flags",
    "shortname": ":flag_md:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1e9"
  },
  {
    "name": "Monaco",
    "category": "flags",
    "shortname": ":flag_mc:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1e8"
  },
  {
    "name": "Mongolia",
    "category": "flags",
    "shortname": ":flag_mn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f3"
  },
  {
    "name": "Montenegro",
    "category": "flags",
    "shortname": ":flag_me:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1ea"
  },
  {
    "name": "Montserrat",
    "category": "flags",
    "shortname": ":flag_ms:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f8"
  },
  {
    "name": "Morocco",
    "category": "flags",
    "shortname": ":flag_ma:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1e6"
  },
  {
    "name": "Mozambique",
    "category": "flags",
    "shortname": ":flag_mz:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1ff"
  },
  {
    "name": "Myanmar (Burma)",
    "category": "flags",
    "shortname": ":flag_mm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f2"
  },
  {
    "name": "Namibia",
    "category": "flags",
    "shortname": ":flag_na:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1e6"
  },
  {
    "name": "Nauru",
    "category": "flags",
    "shortname": ":flag_nr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1f7"
  },
  {
    "name": "Nepal",
    "category": "flags",
    "shortname": ":flag_np:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1f5"
  },
  {
    "name": "Netherlands",
    "category": "flags",
    "shortname": ":flag_nl:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1f1"
  },
  {
    "name": "New Caledonia",
    "category": "flags",
    "shortname": ":flag_nc:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1e8"
  },
  {
    "name": "New Zealand",
    "category": "flags",
    "shortname": ":flag_nz:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1ff"
  },
  {
    "name": "Nicaragua",
    "category": "flags",
    "shortname": ":flag_ni:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1ee"
  },
  {
    "name": "Niger",
    "category": "flags",
    "shortname": ":flag_ne:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1ea"
  },
  {
    "name": "Nigeria",
    "category": "flags",
    "shortname": ":flag_ng:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1ec"
  },
  {
    "name": "Niue",
    "category": "flags",
    "shortname": ":flag_nu:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1fa"
  },
  {
    "name": "Norfolk Island",
    "category": "flags",
    "shortname": ":flag_nf:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1eb"
  },
  {
    "name": "North Korea",
    "category": "flags",
    "shortname": ":flag_kp:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1f5"
  },
  {
    "name": "Northern Mariana Islands",
    "category": "flags",
    "shortname": ":flag_mp:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1f5"
  },
  {
    "name": "Norway",
    "category": "flags",
    "shortname": ":flag_no:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f3-1f1f4"
  },
  {
    "name": "Oman",
    "category": "flags",
    "shortname": ":flag_om:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f4-1f1f2"
  },
  {
    "name": "Pakistan",
    "category": "flags",
    "shortname": ":flag_pk:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1f0"
  },
  {
    "name": "Palau",
    "category": "flags",
    "shortname": ":flag_pw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1fc"
  },
  {
    "name": "Palestinian Territories",
    "category": "flags",
    "shortname": ":flag_ps:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1f8"
  },
  {
    "name": "Panama",
    "category": "flags",
    "shortname": ":flag_pa:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1e6"
  },
  {
    "name": "Papua New Guinea",
    "category": "flags",
    "shortname": ":flag_pg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1ec"
  },
  {
    "name": "Paraguay",
    "category": "flags",
    "shortname": ":flag_py:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1fe"
  },
  {
    "name": "Peru",
    "category": "flags",
    "shortname": ":flag_pe:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1ea"
  },
  {
    "name": "Philippines",
    "category": "flags",
    "shortname": ":flag_ph:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1ed"
  },
  {
    "name": "Pitcairn Islands",
    "category": "flags",
    "shortname": ":flag_pn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1f3"
  },
  {
    "name": "Poland",
    "category": "flags",
    "shortname": ":flag_pl:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1f1"
  },
  {
    "name": "Portugal",
    "category": "flags",
    "shortname": ":flag_pt:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1f9"
  },
  {
    "name": "Puerto Rico",
    "category": "flags",
    "shortname": ":flag_pr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1f7"
  },
  {
    "name": "Qatar",
    "category": "flags",
    "shortname": ":flag_qa:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f6-1f1e6"
  },
  {
    "name": "Réunion",
    "category": "flags",
    "shortname": ":flag_re:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f7-1f1ea"
  },
  {
    "name": "Romania",
    "category": "flags",
    "shortname": ":flag_ro:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f7-1f1f4"
  },
  {
    "name": "Russia",
    "category": "flags",
    "shortname": ":flag_ru:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f7-1f1fa"
  },
  {
    "name": "Rwanda",
    "category": "flags",
    "shortname": ":flag_rw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f7-1f1fc"
  },
  {
    "name": "Samoa",
    "category": "flags",
    "shortname": ":flag_ws:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fc-1f1f8"
  },
  {
    "name": "San Marino",
    "category": "flags",
    "shortname": ":flag_sm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1f2"
  },
  {
    "name": "São Tomé &amp; Príncipe",
    "category": "flags",
    "shortname": ":flag_st:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1f9"
  },
  {
    "name": "Saudi Arabia",
    "category": "flags",
    "shortname": ":flag_sa:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1e6"
  },
  {
    "name": "Senegal",
    "category": "flags",
    "shortname": ":flag_sn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1f3"
  },
  {
    "name": "Serbia",
    "category": "flags",
    "shortname": ":flag_rs:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f7-1f1f8"
  },
  {
    "name": "Seychelles",
    "category": "flags",
    "shortname": ":flag_sc:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1e8"
  },
  {
    "name": "Sierra Leone",
    "category": "flags",
    "shortname": ":flag_sl:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1f1"
  },
  {
    "name": "Singapore",
    "category": "flags",
    "shortname": ":flag_sg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1ec"
  },
  {
    "name": "Sint Maarten",
    "category": "flags",
    "shortname": ":flag_sx:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1fd"
  },
  {
    "name": "Slovakia",
    "category": "flags",
    "shortname": ":flag_sk:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1f0"
  },
  {
    "name": "Slovenia",
    "category": "flags",
    "shortname": ":flag_si:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1ee"
  },
  {
    "name": "South Georgia &amp; South Sandwich Islands",
    "category": "flags",
    "shortname": ":flag_gs:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1f8"
  },
  {
    "name": "Solomon Islands",
    "category": "flags",
    "shortname": ":flag_sb:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1e7"
  },
  {
    "name": "Somalia",
    "category": "flags",
    "shortname": ":flag_so:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1f4"
  },
  {
    "name": "South Africa",
    "category": "flags",
    "shortname": ":flag_za:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ff-1f1e6"
  },
  {
    "name": "South Korea",
    "category": "flags",
    "shortname": ":flag_kr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1f7"
  },
  {
    "name": "South Sudan",
    "category": "flags",
    "shortname": ":flag_ss:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1f8"
  },
  {
    "name": "Spain",
    "category": "flags",
    "shortname": ":flag_es:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ea-1f1f8"
  },
  {
    "name": "Sri Lanka",
    "category": "flags",
    "shortname": ":flag_lk:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1f0"
  },
  {
    "name": "St. Barthélemy",
    "category": "flags",
    "shortname": ":flag_bl:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1f1"
  },
  {
    "name": "St. Helena",
    "category": "flags",
    "shortname": ":flag_sh:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1ed"
  },
  {
    "name": "St. Kitts &amp; Nevis",
    "category": "flags",
    "shortname": ":flag_kn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f0-1f1f3"
  },
  {
    "name": "St. Lucia",
    "category": "flags",
    "shortname": ":flag_lc:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f1-1f1e8"
  },
  {
    "name": "St. Pierre &amp; Miquelon",
    "category": "flags",
    "shortname": ":flag_pm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f5-1f1f2"
  },
  {
    "name": "St. Vincent &amp; Grenadines",
    "category": "flags",
    "shortname": ":flag_vc:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fb-1f1e8"
  },
  {
    "name": "Sudan",
    "category": "flags",
    "shortname": ":flag_sd:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1e9"
  },
  {
    "name": "Suriname",
    "category": "flags",
    "shortname": ":flag_sr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1f7"
  },
  {
    "name": "Swaziland",
    "category": "flags",
    "shortname": ":flag_sz:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1ff"
  },
  {
    "name": "Sweden",
    "category": "flags",
    "shortname": ":flag_se:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1ea"
  },
  {
    "name": "Switzerland",
    "category": "flags",
    "shortname": ":flag_ch:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1ed"
  },
  {
    "name": "Syria",
    "category": "flags",
    "shortname": ":flag_sy:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1fe"
  },
  {
    "name": "Taiwan",
    "category": "flags",
    "shortname": ":flag_tw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1fc"
  },
  {
    "name": "Tajikistan",
    "category": "flags",
    "shortname": ":flag_tj:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1ef"
  },
  {
    "name": "Tanzania",
    "category": "flags",
    "shortname": ":flag_tz:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1ff"
  },
  {
    "name": "Thailand",
    "category": "flags",
    "shortname": ":flag_th:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1ed"
  },
  {
    "name": "Timor-Leste",
    "category": "flags",
    "shortname": ":flag_tl:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1f1"
  },
  {
    "name": "Togo",
    "category": "flags",
    "shortname": ":flag_tg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1ec"
  },
  {
    "name": "Tokelau",
    "category": "flags",
    "shortname": ":flag_tk:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1f0"
  },
  {
    "name": "Tonga",
    "category": "flags",
    "shortname": ":flag_to:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1f4"
  },
  {
    "name": "Trinidad &amp; Tobago",
    "category": "flags",
    "shortname": ":flag_tt:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1f9"
  },
  {
    "name": "Tunisia",
    "category": "flags",
    "shortname": ":flag_tn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1f3"
  },
  {
    "name": "Turkey",
    "category": "flags",
    "shortname": ":flag_tr:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1f7"
  },
  {
    "name": "Turkmenistan",
    "category": "flags",
    "shortname": ":flag_tm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1f2"
  },
  {
    "name": "Turks &amp; Caicos Islands",
    "category": "flags",
    "shortname": ":flag_tc:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1e8"
  },
  {
    "name": "U.S. Virgin Islands",
    "category": "flags",
    "shortname": ":flag_vi:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fb-1f1ee"
  },
  {
    "name": "Tuvalu",
    "category": "flags",
    "shortname": ":flag_tv:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1fb"
  },
  {
    "name": "Uganda",
    "category": "flags",
    "shortname": ":flag_ug:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fa-1f1ec"
  },
  {
    "name": "Ukraine",
    "category": "flags",
    "shortname": ":flag_ua:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fa-1f1e6"
  },
  {
    "name": "United Arab Emirates",
    "category": "flags",
    "shortname": ":flag_ae:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1ea"
  },
  {
    "name": "United Kingdom",
    "category": "flags",
    "shortname": ":flag_gb:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ec-1f1e7"
  },
  {
    "name": "England",
    "category": "flags",
    "shortname": ":england:",
    "keyWords": [
      "flag"
    ],
    "output": "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f"
  },
  {
    "name": "Scotland",
    "category": "flags",
    "shortname": ":scotland:",
    "keyWords": [
      "flag"
    ],
    "output": "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f"
  },
  {
    "name": "Wales",
    "category": "flags",
    "shortname": ":wales:",
    "keyWords": [
      "flag"
    ],
    "output": "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f"
  },
  {
    "name": "United States",
    "category": "flags",
    "shortname": ":flag_us:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fa-1f1f8"
  },
  {
    "name": "Uruguay",
    "category": "flags",
    "shortname": ":flag_uy:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fa-1f1fe"
  },
  {
    "name": "Uzbekistan",
    "category": "flags",
    "shortname": ":flag_uz:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fa-1f1ff"
  },
  {
    "name": "Vanuatu",
    "category": "flags",
    "shortname": ":flag_vu:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fb-1f1fa"
  },
  {
    "name": "Vatican City",
    "category": "flags",
    "shortname": ":flag_va:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fb-1f1e6"
  },
  {
    "name": "Venezuela",
    "category": "flags",
    "shortname": ":flag_ve:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fb-1f1ea"
  },
  {
    "name": "Vietnam",
    "category": "flags",
    "shortname": ":flag_vn:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fb-1f1f3"
  },
  {
    "name": "Wallis &amp; Futuna",
    "category": "flags",
    "shortname": ":flag_wf:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fc-1f1eb"
  },
  {
    "name": "Western Sahara",
    "category": "flags",
    "shortname": ":flag_eh:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ea-1f1ed"
  },
  {
    "name": "Yemen",
    "category": "flags",
    "shortname": ":flag_ye:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fe-1f1ea"
  },
  {
    "name": "Zambia",
    "category": "flags",
    "shortname": ":flag_zm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ff-1f1f2"
  },
  {
    "name": "Zimbabwe",
    "category": "flags",
    "shortname": ":flag_zw:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ff-1f1fc"
  },
  {
    "name": "Ascension Island",
    "category": "flags",
    "shortname": ":flag_ac:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e6-1f1e8"
  },
  {
    "name": "Bouvet Island",
    "category": "flags",
    "shortname": ":flag_bv:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e7-1f1fb"
  },
  {
    "name": "Clipperton Island",
    "category": "flags",
    "shortname": ":flag_cp:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e8-1f1f5"
  },
  {
    "name": "Ceuta &amp; Melilla",
    "category": "flags",
    "shortname": ":flag_ea:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ea-1f1e6"
  },
  {
    "name": "Diego Garcia",
    "category": "flags",
    "shortname": ":flag_dg:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1e9-1f1ec"
  },
  {
    "name": "Heard &amp; McDonald Islands",
    "category": "flags",
    "shortname": ":flag_hm:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1ed-1f1f2"
  },
  {
    "name": "St. Martin",
    "category": "flags",
    "shortname": ":flag_mf:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f2-1f1eb"
  },
  {
    "name": "Svalbard &amp; Jan Mayen",
    "category": "flags",
    "shortname": ":flag_sj:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f8-1f1ef"
  },
  {
    "name": "Tristan da Cunha",
    "category": "flags",
    "shortname": ":flag_ta:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1f9-1f1e6"
  },
  {
    "name": "U.S. Outlying Islands",
    "category": "flags",
    "shortname": ":flag_um:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fa-1f1f2"
  },
  {
    "name": "United Nations",
    "category": "flags",
    "shortname": ":united_nations:",
    "keyWords": [
      "flag"
    ],
    "output": "1f1fa-1f1f3"
  },
  {
    "name": "light skin tone",
    "category": "modifier",
    "shortname": ":tone1:",
    "keyWords": [
      ""
    ],
    "output": "1f3fb"
  },
  {
    "name": "medium-light skin tone",
    "category": "modifier",
    "shortname": ":tone2:",
    "keyWords": [
      ""
    ],
    "output": "1f3fc"
  },
  {
    "name": "medium skin tone",
    "category": "modifier",
    "shortname": ":tone3:",
    "keyWords": [
      ""
    ],
    "output": "1f3fd"
  },
  {
    "name": "medium-dark skin tone",
    "category": "modifier",
    "shortname": ":tone4:",
    "keyWords": [
      ""
    ],
    "output": "1f3fe"
  },
  {
    "name": "dark skin tone",
    "category": "modifier",
    "shortname": ":tone5:",
    "keyWords": [
      ""
    ],
    "output": "1f3ff"
  }
];

    var factory = {
        emojiList: emojiList,
        convert: convert
    };

    return factory;
  
  }]);