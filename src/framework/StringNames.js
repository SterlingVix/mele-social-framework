import _ from 'lodash';
import Characters from './Characters.js'
import {CharactersById, Comparators, Genders, getBool, getGlobalVars, getInt, Hereditaries, Professions, setBool, setInt, ShepardStates, SocialProperties} from "./GlobalVariables.js";

const _prefixString = (sfPropId, stringBody) =>
  `1111${sfPropId}${stringBody}`;

const sfPropIds = {
  devText: 0,
  character: 1,
  comparators: 2,
  genders: 3,
  hereditaries: 4,
  professions: 5,
  socialProperties: 6,
}

// These will be added to TLK files to provide Strings for convenience.
const Strings = {};










_.forEach(Characters, (character) => {
  const charNameKey = _.toInteger(_prefixString(sfPropIds.character, character.characterId));
  Strings[charNameKey] = character.characterName;
});

Strings[_prefixString(sfPropIds.comparators, 10)] = 'Comparators';
_.forEach(Comparators, (descr, idx) => {
  const key = _.toInteger(_prefixString(sfPropIds.comparators, `0${idx}`));
  const xmlFriendlyDescriptions = {
    '==': 'Equals',
    '<': 'Less than',
    '>': 'Greater than',
  };
  Strings[key] = xmlFriendlyDescriptions[descr];
});

Strings[_prefixString(sfPropIds.genders, 10)] = 'Genders';
_.forEach(Genders, (descr, idx) => {
  const key = _.toInteger(_prefixString(sfPropIds.genders, idx));
  Strings[key] = descr;
});

Strings[_prefixString(sfPropIds.hereditaries, 10)] = 'Hereditaries';
_.forEach(Hereditaries, (descr, idx) => {
  const key = _.toInteger(_prefixString(sfPropIds.hereditaries, idx));
  Strings[key] = descr;
});

Strings[_prefixString(sfPropIds.professions, 10)] = 'Professions';
_.forEach(Professions, (descr, idx) => {
  const key = _.toInteger(_prefixString(sfPropIds.professions, idx));
  Strings[key] = descr;
});

Strings[_prefixString(sfPropIds.socialProperties, 10)] = 'Social Properties';
_.forEach(SocialProperties, (idx, descr) => {
  const key = _.toInteger(_prefixString(sfPropIds.socialProperties, idx));
  Strings[key] = descr;
});


Strings[_prefixString(`${sfPropIds.devText}`, 10)] = 'Start loop';
Strings[_prefixString(`${sfPropIds.devText}`, 11)] = 'Back to loop start';
Strings[_prefixString(`${sfPropIds.devText}`, 12)] = 'Decrement';
Strings[_prefixString(`${sfPropIds.devText}`, 13)] = 'Increment';
Strings[_prefixString(`${sfPropIds.devText}`, 14)] = 'Initialize';
Strings[_prefixString(`${sfPropIds.devText}`, 15)] = 'Set';

export default Strings;
