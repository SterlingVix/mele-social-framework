import _ from "lodash";

const Characters = {
  30: `Aria T'Loak`,
  31: `Armando-Owen Bailey`,
  32: `Ashley Williams`,
  33: `David Anderson`,
  34: `Diana Allers`,
  35: `Donnel Udina`,
  36: `EDI`,
  37: `Emily Wong`,
  38: `Eve Urdnot Bakara`, // NOTE: "Eve" prevents a collision with "Urdnot Bakara" & "Urdnot Wrex"
  39: `Gabriella Daniels`,
  40: `Garrus Vakarian`,
  41: `Gianni Parasini`,
  42: `Gregory Adams`,
  43: `Grunt`,
  44: `Illusive Man`,
  45: `Jack`,
  46: `Jacob Taylor`,
  47: `James Vega`,
  48: `Javik`,
  49: `Joker Moreau`,
  50: `Kaidan Alenko`,
  51: `Karin Chakwas`,
  52: `Kasumi Goto`,
  53: `Kelly Chambers`,
  54: `Kenneth Donnelly`,
  55: `Legion`,
  56: `Liara T'Soni`,
  57: `Miranda Lawson`,
  58: `Mordin Solus`,
  59: `Morinth`,
  60: `Nyreen Kandros`,
  61: `Samantha Traynor`,
  62: `Samara`,
  63: `Steve Cortez`, // FIXME: _.includes(Steve) will match Steven
  64: `Steven Hackett`, // FIXME: _.includes(Steve) will match Steven
  65: `Tali'Zorah vas Normandy`,
  66: `Thane Krios`,
  67: `Urdnot Wrex`,
  68: `Zaeed Massani`,
};

export const getShortName = charName =>
  charName.split(/[ -']/)[0];

export const forEachCharacter = (mapFunc) =>
  _.forEach(Characters, mapFunc);


export default Characters;
