import _ from 'lodash';
import Characters from './Characters.js'

const _charNameStringsPrefix = 11111;

// These will be added to TLK files to provide Strings for convenience.
const Strings = {};
_.forEach(Characters, (character) => {
  const charNameKey = _.toInteger(`${_charNameStringsPrefix}${character.characterId}`);
  Strings[charNameKey] = character.characterName;
});

export default Strings;
