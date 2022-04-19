export const typeToColor = (type) => {
  switch (type) {
    case "bug":
      return "linear-gradient(219deg, rgba(113,49,49,1) 0%, rgba(176,208,175,1) 0%, rgba(233,243,255,1) 100%)";
    case "dark":
      return "radial-gradient(circle, rgba(113,49,49,1) 0%, rgba(228,233,249,1) 0%, rgba(115,121,147,1) 100%)";
    case "dragon":
      return "linear-gradient(199deg, rgba(113,49,49,1) 0%, rgba(140,225,251,1) 0%, rgba(198,158,194,1) 100%)";
    case "electric":
      return "linear-gradient(0deg, rgba(113,49,49,1) 0%, rgba(255,216,0,1) 0%, rgba(255,255,243,1) 100%)";
    case "fairy":
      return "linear-gradient(137deg, rgba(218,226,248,1) 0%, rgba(214,164,160,1) 100%)";
    case "fighting":
      return "radial-gradient(circle, rgba(113,49,49,1) 0%, rgba(237,189,189,1) 0%, rgba(208,121,121,1) 100%)";
    case "fire":
      return "radial-gradient(circle, rgba(113,49,49,1) 0%, rgba(246,229,123,1) 0%, rgba(247,146,60,1) 100%)";
    case "flying":
      return "linear-gradient(0deg, rgba(96,190,222,1) 0%, rgba(255,255,255,1) 100%)";
    case "grass":
      return "linear-gradient(339deg, rgba(113,49,49,1) 0%, rgba(76,175,140,1) 0%, rgba(218,254,225,1) 100%)";
    case "ground":
      return "linear-gradient(0deg, rgba(113,49,49,1) 0%, rgba(181,128,81,1) 0%, rgba(179,146,112,1) 13%, rgba(162,182,191,1) 100%)";
    case "ice":
      return "linear-gradient(0deg, rgba(54,139,194,1) 0%, rgba(109,213,250,1) 46%, rgba(255,255,255,1) 100%)";
    case "normal":
      return "linear-gradient(0deg, rgba(238,226,186,1) 0%, rgba(255,255,255,1) 100%)";
    case "poison":
      return "linear-gradient(187deg, rgba(113,49,49,1) 0%, rgba(249,228,247,1) 0%, rgba(143,115,147,1) 100%)";
    case "psychic":
      return "linear-gradient(180deg, rgba(169,142,241,1) 0%, rgba(234,175,200,1) 100%)";
    case "rock":
      return "linear-gradient(184deg, rgba(251,231,226,1) 0%, rgba(168,128,122,1) 100%)";
    case "steel":
      return "linear-gradient(0deg, rgba(117,127,154,1) 0%, rgba(215,221,232,1) 100%)";
    case "water":
      return "linear-gradient(199deg, rgba(113,49,49,1) 0%, rgba(196,241,255,1) 0%, rgba(68,160,194,1) 100%)";
    case "???":
      return "linear-gradient(0deg, rgba(40,48,72,1) 0%, rgba(133,147,152,1) 100%)";
    case "ghost":
      return "linear-gradient(210deg, rgba(113,49,49,1) 0%, rgba(252,252,252,1) 0%, rgba(188,207,233,1) 100%)";
    default:
      return "rgba(255, 255, 255, 1)";
  }
};
