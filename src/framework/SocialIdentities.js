export const _socRelats = [
  'Friendship', // protagonist, supporter
  'Loyalty',
  'Rivalry', // adversary, antagonist
  'Romantic Interest',
  'Sexual Interest',
];
export const Characters = {
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
export const Comparators = [
  '<',
  '==',
  '>',
];
export const Genders = {
  60: 'Female',
  61: 'Genderqueer',
  62: 'Male',
  63: 'Non-binary',
  64: 'Transgendered',
  // 65: reserved. Add more genders here (and make room below).
};
export const Hereditaries = {
  70: 'Asari',
  71: 'Batarian',
  72: 'Drell',
  73: 'Elcor',
  74: 'Geth',
  75: 'Hanar',
  76: 'Human',
  77: 'Krogan',
  78: 'Quarian',
  79: 'Salarian',
  80: 'Turian',
  81: 'Volus',
  82: 'Vorcha',
};
export const Professions = {
  90: 'Biotic',
  91: 'Diplomat',
  92: 'Educator',
  93: 'Engineer',
  94: 'Laborer',
  95: 'Mercenary',
  96: 'Professional',
  97: 'Security',
  98: 'Soldier',
  99: 'Warlord',
};
export const ShepardChar = {
  11: `Shepard`,
};
export const ShepardStates = {
  gender: 0, // one of Genders
  hereditary: 0, // 'human'
  profession: 0, // 'soldier'
};

/**
 * For all social states: Int values conform to the following:
 *
 *   -3 or less currently undefined (feel free to use these).
 *   -2 is "ended badly", like if Shepard cheats on a monogamous partner.
 *   -1 is "no longer accessible", like if Shepard declines a proposition for romance.
 *   0 is "uninitialized". Use this to initialize the framework values and for cleanup / keeping vanilla state clean.
 *   1 is "initialized". This probably corresponds to "0" values in vanilla.
 *   2+ are standard incremental values.
 *
 * Here are some examples of how these might be used:
 *   3631: 0 (EDI's Loyalty score in Social Framework is uninitialized)
 *   4030: 3 (Garrus has a Friendship value of "3". What this means is up to your mod!)
 *   4434: 4 (The Illusive Man and Shepard have a SexualInterest value of "4")
 *   3332: 2 (Shepard and Admiral Anderson have a Rivalry value of "2")
 *   3033: -1 (Shepard declined RomanticInterest with Aria T'Loak)
 */
export const SocialRelationships = {
  30: 'Friendship', // protagonist, supporter
  33: 'Loyalty',
  36: 'Rivalry', // adversary, antagonist
  39: 'Romantic Interest',
  42: 'Sexual Interest',
};
