import _ from 'lodash';
import {Characters} from './SocialIdentities.js'

const _charNameStringsPrefix = 11111;

// These will be added to TLK files to provide Strings for convenience.
export const genStringsApi = () => {
  const stringMap = {};
  _.forEach(Characters, (characterName, charId) => {
    const charNameKey = _.toInteger(`${_charNameStringsPrefix}${charId}`);
    stringMap[charNameKey] = characterName;
  });

  // TODO: strings for Cnd API?

  return stringMap;
};