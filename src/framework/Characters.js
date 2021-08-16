import _ from 'lodash';

import {CharactersById, Genders, Hereditaries, Professions} from './GlobalVariables.js';
import CharacterClass from './CharacterClass.js'

export const getShortName = charName =>
  charName.split(/[ -']/)[0];

export const forEachCharacter = (mapFunc) =>
  _.forEach(CharactersById, mapFunc);

export const padCharName = (charName) =>
  _.pad(charName, 20, ' ');

const charactersConfigs = [
  {
    characterId: _.findKey(CharactersById, 40),
    characterName: `Garrus Vakarian`,
    gamesWithCharacter: [1, 2, 3],
    gamesWithVanillaRomanceFemale: [2, 3],
    gamesWithVanillaRomanceMale: [],
    gender: _.findKey(Genders, 'Male'),
    hereditary: _.findKey(Hereditaries, 'Turian'),
    profession: _.findKey(Professions, 'Security'),
    vanillaBuddyRomancePlotInt: [undefined, 270, undefined],
  },
];

// const Characters = _.map(charactersConfigs, (character) =>
const Characters = _.map(CharactersById, (characterName, characterId) =>
  new CharacterClass({
    characterId,
    characterName,
    // friendship,
    // gamesWithCharacter = [],
    // gamesWithVanillaRomanceFemale = [],
    // gamesWithVanillaRomanceMale = [],
    // gender,
    // hereditary,
    // loyalty,
    // profession,
    // rivalry,
    // romanticInterest,
    // sexualInterest,
    // vanillaBuddyRomancePlotInt,
  }));

export default Characters;
