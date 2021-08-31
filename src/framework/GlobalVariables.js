
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

export const getBool = () => {};
export const getInt = () => {};
export const setBool = () => {};
export const setInt = () => {};
export const getGlobalVars = () => ({
  sfBuddyRomanceMultiplier: 1,
});

/**
 * Social Framework values for Plot Ints, Conditionals,
 * Transitions can be derived by concatenating:
 *   [[Character ID]]   [[Social Property ID]]   [[Operator/Comparator]]
 *
 * PLOT INT: 30111
 *   Aria Friendship [[value]]
 *    30     11          1
 * CONDITIONAL: 45342
 *   Jack Loyalty [[Less than Argument]]
 *    45    34             2
 * TRANSITION: 51373
 *   Dr.Chakwas RomanticInterest [[Increment]]
 *        51          37               3
 *
 *
 * Whenever possible, Plot Ints, Conditionals, and Transitions
 * for the same property will share the same ID. For example,
 * to get, compare, or set EDI's Friendship.
 *   EDI: 36
 *   Friendship: 31
 *   Equals/get/set: 1
 *
 * PLOT INT:
 *   36311 ==> Int of current "Friendship" value
 * CONDITIONAL:
 *   36311 ==> "true" If EDI's "Friendship" value equals "Argument"
 * TRANSITION:
 *   36311 ==> Sets EDI's current "Friendship" value to "Argument"
 *
 *
 * Shepard's Plot Ints are also accessed, compared, and set the same way:
 *   Shepard: 63
 *   Gender: 32
 *   Equals: 1
 *
 * PLOT INT:
 *   63321 ==> Get Shepard's Gender (an Int)
 * CONDITIONAL:
 *   63321 ==> is Shepard's Gender == [[Argument]]?
 */
export const SocialProperties = {
  Friendship:        31, // protagonist, supporter
  Gender:            32,
  Hereditary:        33,
  Loyalty:           34,
  Profession:        35,
  Rivalry:           36, // adversary, antagonist
  RomanticInterest:  37,
  SexualInterest:    38,
};

export const CharactersById = {
  30: `Aria T'Loak`,
  31: `Armando-Owen Bailey`,
  32: `Ashley Williams`,
  33: `David Anderson`,
  34: `Diana Allers`,
  35: `Donnel Udina`,
  36: `EDI`,
  37: `Emily Wong`,
  38: `Eve Urdnot Bakara`,
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
  63: `Shepard`,
  64: `Steve Cortez`,
  65: `Steven Hackett`,
  66: `Tali'Zorah vas Normandy`,
  67: `Thane Krios`,
  68: `Urdnot Wrex`,
  69: `Zaeed Massani`,
};
export const Comparators = {
  1: '==', // ALSO "Set" for Transitions and the current value for the Plot Int.
  2: '<',  // ALSO "Decrement" for Transitions (unused for Plot Ints?)
  3: '>',  // Also "Increment" for Transitions (unused for Plot Ints?)
};
export const Genders = {
  11: 'Female',
  12: 'Genderqueer',
  13: 'Male',
  14: 'Mono-gendered',
  15: 'Non-binary',
  16: 'Non-gendered',
  17: 'Transgendered',
  // 18: reserved. Add more genders here.
  // 19: reserved. Add more genders here.
};
export const Hereditaries = {
  11: 'Asari',
  12: 'Batarian',
  13: 'Drell',
  14: 'Elcor',
  15: 'Geth',
  16: 'Hanar',
  17: 'Human',
  18: 'Krogan',
  19: 'Prothean',
  20: 'Quarian',
  21: 'Salarian',
  22: 'Synthetic',
  23: 'Turian',
  24: 'Volus',
  25: 'Vorcha',
};
export const Professions = {
  11: 'Assassin',
  12: 'Biotic',
  13: 'Criminal',
  14: 'Diplomat',
  15: 'Doctor',
  16: 'Educator',
  17: 'Engineer',
  18: 'Mercenary',
  19: 'Reporter',
  20: 'Scientist',
  21: 'Security',
  22: 'Soldier',
  23: 'Specialist',
  24: 'Warlord',
  25: 'Warrior',
};
export const ShepardStates = {
  gender: 0, // one of Genders
  hereditary: 0, // 'human'
  profession: 0, // 'soldier'
};