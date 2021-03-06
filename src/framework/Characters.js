import _ from 'lodash';

import {CharactersById, Genders, Hereditaries, Professions} from './GlobalVariables.js';
import CharacterClass from './CharacterClass.js'

export const getShortName = charName =>
  charName.split(/[ -']/)[0];

export const forEachCharacter = (mapFunc) =>
  _.forEach(CharactersById, mapFunc);

export const padCharName = (charName) =>
  _.pad(charName, 20, ' ');

const LE2CharNicknames = [
  `Assassin`,
  `Convict`,
  `Garrus`,
  `Geth`,
  `Grunt`,
  `Leading`,
  `Mystic`,
  `Professor`,
  `Tali`,
  `Thief`,
  `Veteran`,
  `Vixen`,
];

const charactersConfigs = [
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Aria T'Loak`)),
    characterName: `Aria T'Loak`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Asari')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Warlord')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Armando-Owen Bailey`)),
    characterName: `Armando-Owen Bailey`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Security')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Ashley Williams`)),
    characterName: `Ashley Williams`,
    gamesWithCharacter: [1, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [1, 3],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Soldier')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `David Anderson`)),
    characterName: `David Anderson`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Soldier')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Diana Allers`)),
    characterName: `Diana Allers`,
    gamesWithCharacter: [3],
    gamesWithVanillaRomanceFemale: [3],
    gamesWithVanillaRomanceMale: [3],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Reporter')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Donnel Udina`)),
    characterName: `Donnel Udina`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Diplomat')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `EDI`)),
    characterName: `EDI`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Non-gendered')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Synthetic')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Specialist')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Emily Wong`)),
    characterName: `Emily Wong`,
    gamesWithCharacter: [1],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Reporter')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Eve Urdnot Bakara`)),
    characterName: `Eve Urdnot Bakara`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Krogan')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Diplomat')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Gabriella Daniels`)),
    characterName: `Gabriella Daniels`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Engineer')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Garrus Vakarian`)),
    characterName: `Garrus Vakarian`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [2, 3],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Turian')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Security')),
    vanillaBuddyRomancePlotInt: [undefined, 270, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Gianni Parasini`)),
    characterName: `Gianni Parasini`,
    gamesWithCharacter: [1, 2],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [2],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Security')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Gregory Adams`)),
    characterName: `Gregory Adams`,
    gamesWithCharacter: [1, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Engineer')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Grunt`)),
    characterName: `Grunt`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Krogan')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Warrior')),
    vanillaBuddyRomancePlotInt: [undefined, 274, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Illusive Man`)),
    characterName: `Illusive Man`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Warlord')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Jack`)),
    characterName: `Jack`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [2, 3],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Educator')), // FIXME: is this OK? Warrior?
    vanillaBuddyRomancePlotInt: [undefined, 213, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Jacob Taylor`)),
    characterName: `Jacob Taylor`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Soldier')),
    vanillaBuddyRomancePlotInt: [undefined, 267, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `James Vega`)),
    characterName: `James Vega`,
    gamesWithCharacter: [3],
    gamesWithVanillaRomanceFemale: [3],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Soldier')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Javik`)),
    characterName: `Javik`,
    gamesWithCharacter: [3],
    gamesWithVanillaRomanceFemale: [3],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Prothean')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Warrior')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Joker Moreau`)),
    characterName: `Joker Moreau`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Soldier')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Kaidan Alenko`)),
    characterName: `Kaidan Alenko`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [1, 2, 3],
    gamesWithVanillaRomanceMale: [3],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Soldier')), // Biotic?
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Karin Chakwas`)),
    characterName: `Karin Chakwas`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Doctor')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Kasumi Goto`)),
    characterName: `Kasumi Goto`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Criminal')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Kelly Chambers`)),
    characterName: `Kelly Chambers`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [2, 3],
    gamesWithVanillaRomanceMale: [2, 3],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Doctor')),
    vanillaBuddyRomancePlotInt: [undefined, 197, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Kenneth Donnelly`)),
    characterName: `Kenneth Donnelly`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Engineer')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Legion`)),
    characterName: `Legion`,
    gamesWithCharacter: [],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Non-gendered')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Geth')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Specialist')),
    vanillaBuddyRomancePlotInt: [undefined, 268, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Liara T'Soni`)),
    characterName: `Liara T'Soni`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [1, 2, 3],
    gamesWithVanillaRomanceMale: [1, 2, 3],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Mono-gendered')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Asari')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Scientist')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Miranda Lawson`)),
    characterName: `Miranda Lawson`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [2, 3],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Specialist')),
    vanillaBuddyRomancePlotInt: [undefined, 266, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Mordin Solus`)),
    characterName: `Mordin Solus`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Salarian')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Doctor')),
    vanillaBuddyRomancePlotInt: [undefined, 273, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Morinth`)),
    characterName: `Morinth`,
    gamesWithCharacter: [2],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Mono-gendered')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Asari')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Criminal')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Nyreen Kandros`)),
    characterName: `Nyreen Kandros`,
    gamesWithCharacter: [3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Turian')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Warlord')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Samantha Traynor`)),
    characterName: `Samantha Traynor`,
    gamesWithCharacter: [3],
    gamesWithVanillaRomanceFemale: [3],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Specialist')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Samara`)),
    characterName: `Samara`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [2, 3],
    gamesWithVanillaRomanceMale: [2, 3],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Mono-gendered')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Asari')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Assassin')), // Do we need "Justicar" as a profession?
    vanillaBuddyRomancePlotInt: [undefined, 275, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Shepard`)),
    characterName: `Shepard`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === undefined)),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Soldier')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Steve Cortez`)),
    characterName: `Steve Cortez`,
    gamesWithCharacter: [3],
    gamesWithVanillaRomanceFemale: [3],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Soldier')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Steven Hackett`)),
    characterName: `Steven Hackett`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Soldier')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Tali'Zorah vas Normandy`)),
    characterName: `Tali'Zorah vas Normandy`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [2, 3],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Female')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Quarian')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Engineer')),
    vanillaBuddyRomancePlotInt: [undefined, 272, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Thane Krios`)),
    characterName: `Thane Krios`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [2, 3],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Drell')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Assassin')),
    vanillaBuddyRomancePlotInt: [undefined, 271, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Urdnot Wrex`)),
    characterName: `Urdnot Wrex`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Krogan')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Warlord')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
  {
    characterId: _.toInteger(_.findKey(CharactersById, (charName) => charName === `Zaeed Massani`)),
    characterName: `Zaeed Massani`,
    gamesWithCharacter: [2, 3],
    gamesWithVanillaRomanceFemale: [],
    gamesWithVanillaRomanceMale: [],
    gender: _.toInteger(_.findKey(Genders, (val) => val === 'Male')),
    hereditary: _.toInteger(_.findKey(Hereditaries, (val) => val === 'Human')),
    profession: _.toInteger(_.findKey(Professions, (val) => val === 'Mercenary')),
    vanillaBuddyRomancePlotInt: [undefined, undefined, undefined],
  },
];

// const Characters = _.map(charactersConfigs, (character) =>
const Characters = _.map(charactersConfigs, ({
  characterId,
  characterName,
  gamesWithCharacter,
  gamesWithVanillaRomanceFemale,
  gamesWithVanillaRomanceMale,
  gender,
  hereditary,
  profession,
  vanillaBuddyRomancePlotInt,
}) =>
  new CharacterClass({
    characterId,
    characterName,
    gamesWithCharacter,
    gender,
    hereditary,
    profession,
    gamesWithVanillaRomanceFemale,
    gamesWithVanillaRomanceMale,
    vanillaBuddyRomancePlotInt,
    // friendship:                     character.friendship,
    // loyalty:                        character.loyalty,
    // rivalry:                        character.rivalry,
    // romanticInterest:               character.romanticInterest,
    // sexualInterest:                 character.sexualInterest,
  }));

export default Characters;
