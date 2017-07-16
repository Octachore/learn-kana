const placeholder = { romaji: " ", hiragana: " ", katakana: " "}

let basics = {
  simple: [
    { romaji: "a", hiragana: "あ", katakana: "ア" },
    { romaji: "i", hiragana: "い", katakana: "イ" },
    { romaji: "u", hiragana: "う", katakana: "ウ" },
    { romaji: "e", hiragana: "え", katakana: "エ" },
    { romaji: "o", hiragana: "お", katakana: "オ" }
  ],
  k: [

    { romaji: "ka", hiragana: "か", katakana: "カ" },
    { romaji: "ki", hiragana: "き", katakana: "キ" },
    { romaji: "ku", hiragana: "く", katakana: "ク" },
    { romaji: "ke", hiragana: "け", katakana: "ケ" },
    { romaji: "ko", hiragana: "こ", katakana: "コ" }
  ],
  s: [
    { romaji: "sa", hiragana: "さ", katakana: "サ" },
    { romaji: "shi", hiragana: "し", katakana: "シ" },
    { romaji: "su", hiragana: "す", katakana: "ス" },
    { romaji: "se", hiragana: "せ", katakana: "セ" },
    { romaji: "so", hiragana: "そ", katakana: "ソ" }
  ],
  t: [
    { romaji: "ta", hiragana: "た", katakana: "タ" },
    { romaji: "chi", hiragana: "ち", katakana: "チ" },
    { romaji: "tsu", hiragana: "つ", katakana: "ツ" },
    { romaji: "te", hiragana: "て", katakana: "テ" },
    { romaji: "to", hiragana: "と", katakana: "ト" }
  ],
  n: [
    { romaji: "na", hiragana: "な", katakana: "ナ" },
    { romaji: "ni", hiragana: "に", katakana: "ニ" },
    { romaji: "nu", hiragana: "ぬ", katakana: "ヌ" },
    { romaji: "ne", hiragana: "ね", katakana: "ネ" },
    { romaji: "no", hiragana: "の", katakana: "ノ" }
  ],
  h: [
    { romaji: "ha", hiragana: "は", katakana: "ハ" },
    { romaji: "hi", hiragana: "ひ", katakana: "ヒ" },
    { romaji: "fu", hiragana: "ふ", katakana: "フ" },
    { romaji: "he", hiragana: "へ", katakana: "ヘ" },
    { romaji: "ho", hiragana: "ほ", katakana: "ホ" }
  ],
  m: [
    { romaji: "ma", hiragana: "ま", katakana: "マ" },
    { romaji: "mi", hiragana: "み", katakana: "ミ" },
    { romaji: "mu", hiragana: "む", katakana: "ム" },
    { romaji: "me", hiragana: "め", katakana: "メ" },
    { romaji: "mo", hiragana: "も", katakana: "モ" }
  ],
  y: [
    { romaji: "ya", hiragana: "や", katakana: "ヤ" },
    placeholder,
    { romaji: "yu", hiragana: "ゆ", katakana: "ユ" },
    placeholder,
    { romaji: "yo", hiragana: "よ", katakana: "ヨ" }
  ],
  r: [
    { romaji: "ra", hiragana: "ら", katakana: "ラ" },
    { romaji: "ri", hiragana: "り", katakana: "リ" },
    { romaji: "ru", hiragana: "る", katakana: "ル" },
    { romaji: "re", hiragana: "れ", katakana: "レ" },
    { romaji: "ro", hiragana: "ろ", katakana: "ロ" }
  ],
  w: [
    { romaji: "wa", hiragana: "わ", katakana: "ワ" },
    placeholder,
    placeholder,
    placeholder,
    { romaji: "wo", hiragana: "を", katakana: "ヲ" }
  ],
  nn: [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    { romaji: "n", hiragana: "ん", katakana: "ン" }
  ]
}

let diacritics = {
  g: [
    { romaji: "ga", hiragana: "か゛", katakana: "カ゛" },
    { romaji: "gi", hiragana: "き゛", katakana: "キ゛" },
    { romaji: "gu", hiragana: "く゛", katakana: "ク゛" },
    { romaji: "ge", hiragana: "け゛", katakana: "ケ゛" },
    { romaji: "go", hiragana: "こ゛", katakana: "コ゛" },
  ],
  z: [
    { romaji: "za", hiragana: "さ゛", katakana: "サ゛" },
    { romaji: "ji", hiragana: "し゛", katakana: "シ゛" },
    { romaji: "zu", hiragana: "す゛", katakana: "ス゛" },
    { romaji: "ze", hiragana: "せ゛", katakana: "セ゛" },
    { romaji: "zo", hiragana: "そ゛", katakana: "ソ゛" },
  ],
  d: [
    { romaji: "da", hiragana: "た゛", katakana: "タ゛" },
    { romaji: "ji(di)", hiragana: "ち゛", katakana: "チ゛" },
    { romaji: "zu(du)", hiragana: "つ゛", katakana: "ツ゛" },
    { romaji: "de", hiragana: "て゛", katakana: "テ゛" },
    { romaji: "do", hiragana: "と゛", katakana: "ト゛" },
  ],
  b: [
    { romaji: "ba", hiragana: "は゛", katakana: "ハ゛" },
    { romaji: "bi", hiragana: "ひ゛", katakana: "ヒ゛" },
    { romaji: "bu", hiragana: "ふ゛", katakana: "フ゛" },
    { romaji: "be", hiragana: "へ゛", katakana: "ヘ゛" },
    { romaji: "bo", hiragana: "ほ゛", katakana: "ホ゛" },
  ],
  p: [
    { romaji: "pa", hiragana: "は゜", katakana: "ハ゜" },
    { romaji: "pi", hiragana: "ひ゜", katakana: "ヒ゜" },
    { romaji: "pu", hiragana: "ふ゜", katakana: "フ゜" },
    { romaji: "pe", hiragana: "へ゜", katakana: "ヘ゜" },
    { romaji: "po", hiragana: "ほ゜", katakana: "ホ゜" }
  ]
}

let digraphs = {
  k: [
    { romaji: "kya", hiragana: "きゃ", katakana: "キャ" },
    placeholder,
    { romaji: "kyu", hiragana: "きゅ", katakana: "キユ" },
    placeholder,
    { romaji: "kyo", hiragana: "きょ", katakana: "キョ" },
  ],
  s: [
    { romaji: "sha", hiragana: "しゃ", katakana: "シャ" },
    placeholder,
    { romaji: "shu", hiragana: "しゅ", katakana: "シユ" },
    placeholder,
    { romaji: "sho", hiragana: "しょ", katakana: "ショ" },
  ],
  c: [
    { romaji: "cha", hiragana: "ちゃ", katakana: "チャ" },
    placeholder,
    { romaji: "chu", hiragana: "ちゅ", katakana: "チユ" },
    placeholder,
    { romaji: "cho", hiragana: "ちょ", katakana: "チョ" },
  ],
  n: [
    { romaji: "nya", hiragana: "にゃ", katakana: "ニャ" },
    placeholder,
    { romaji: "nyu", hiragana: "にゅ", katakana: "ニユ" },
    placeholder,
    { romaji: "nyo", hiragana: "にょ", katakana: "ニョ" },
  ],
  h: [
    { romaji: "hya", hiragana: "ひゃ", katakana: "ヒャ" },
    placeholder,
    { romaji: "hyu", hiragana: "ひゅ", katakana: "ヒユ" },
    placeholder,
    { romaji: "hyo", hiragana: "ひょ", katakana: "ヒョ" },
  ],
  m: [
    { romaji: "mya", hiragana: "みゃ", katakana: "ミャ" },
    placeholder,
    { romaji: "myu", hiragana: "みゅ", katakana: "ミユ" },
    placeholder,
    { romaji: "myo", hiragana: "みょ", katakana: "ミョ" },
  ],
  r: [
    { romaji: "rya", hiragana: "りゃ", katakana: "リャ" },
    placeholder,
    { romaji: "ryu", hiragana: "りゅ", katakana: "リユ" },
    placeholder,
    { romaji: "ryo", hiragana: "りょ", katakana: "リョ" },
  ],
  g: [
    { romaji: "gya", hiragana: "き゛ゃ", katakana: "キ゛ャ" },
    placeholder,
    { romaji: "gyu", hiragana: "き゛ゅ", katakana: "キ゛ユ" },
    placeholder,
    { romaji: "gyo", hiragana: "き゛ょ", katakana: "キ゛ョ" },
  ],
  j: [
    { romaji: "ja", hiragana: "し゛ゃ", katakana: "シ゛ャ" },
    placeholder,
    { romaji: "ju", hiragana: "し゛ゅ", katakana: "シ゛ユ" },
    placeholder,
    { romaji: "jo", hiragana: "し゛ょ", katakana: "シ゛ョ" },
  ],
  b: [
    { romaji: "bya", hiragana: "ひ゛ゃ", katakana: "ヒ゛ャ" },
    placeholder,
    { romaji: "byu", hiragana: "ひ゛ゅ", katakana: "ヒ゛ユ" },
    placeholder,
    { romaji: "byo", hiragana: "ひ゛ょ", katakana: "ヒ゛ョ" },
  ],
  p: [
    { romaji: "pya", hiragana: "ひ゜ゃ", katakana: "ヒ゜ャ" },
    placeholder,
    { romaji: "pyu", hiragana: "ひ゜ゅ", katakana: "ヒ゜ユ" },
    placeholder,
    { romaji: "pyo", hiragana: "ひ゜ょ", katakana: "ヒ゜ョ" }
  ]
}

let flatten = (obj) => [].concat.apply([], Object.keys(obj).map((key) => obj[key]))

let get_all_flattend = () => flatten(basics).concat(flatten(diacritics)).concat(flatten(digraphs)).filter(i => i.romaji != ' ')
let get_basics_flattend = () => flatten(basics).filter(i => i.romaji != ' ')
let get_diacritics_flattend = () => flatten(diacritics).filter(i => i.romaji != ' ')
let get_digraphs_flattend = () => flatten(digraphs).filter(i => i.romaji != ' ')

export default {
  basics,
  diacritics,
  digraphs,
  get_all_flattend,
  get_basics_flattend,
  get_diacritics_flattend,
  get_digraphs_flattend
}