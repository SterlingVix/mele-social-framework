import _ from 'lodash';
import Characters, { getShortName } from './framework/Characters.js';

export const getCharName = (charId) => {
  if (!_.isNumber(charId)) {
    throw new Error(`'charId' must be an integer. Received: ${typeof charId}: ${charId}.`);
  } else {
    return Characters[charId]
  }
};

export const getCharId = (charName) =>
  _.toInteger(
    _.findKey(Characters, (name) =>
      _.includes(name, charName)),
  );

export const getCharacter = (charNameOrId) => {
  if (_.isNumber(charNameOrId)) {
    return getCharName(charNameOrId);
  } else if (_.isString(charNameOrId)) {
    return getCharId(charNameOrId);
  } else {
    throw new Error(`'charNameOrId' must be a string or integer. Received: ${typeof charNameOrId}: ${charNameOrId}.`);
  }
};
