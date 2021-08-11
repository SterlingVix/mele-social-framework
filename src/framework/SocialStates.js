// TODO: ideally these values would all be non-exclusive,
//  so we could support multiple simultaneous identities.
//  In the meantime, these are exclusive.

import _ from 'lodash';
import Characters from './Characters.js';

export const Genders = {
  1: 'Female',
  2: 'Genderqueer',
  3: 'Male',
  4: 'Non-binary',
  5: 'Transgendered',
  // '06': reserved. We could have more options here, but we're low on room.
};
export const getGenderId = (genderDescription) =>
  _.findKey(Genders, (gender) =>
    _.includes(_.lowerCase(gender), _.lowerCase(genderDescription)));

export const Hereditaries = {
  '07': 'Asari',
  '08': 'Batarian',
  '09': 'Drell',
  '10': 'Elcor',
  '11': 'Geth',
  '12': 'Hanar',
  '13': 'Human',
  '14': 'Krogan',
  '15': 'Quarian',
  '16': 'Salarian',
  '17': 'Turian',
  '18': 'Volus',
  '19': 'Vorcha',
};
export const getHereditaryId = (hereditaryDescription) =>
  _.findKey(Hereditaries, (hereditary) =>
    _.includes(_.lowerCase(hereditary), _.lowerCase(hereditaryDescription)));

export const Professions = {
  '20': 'Biotic',
  '21': 'Diplomat',
  '22': 'Educator',
  '23': 'Engineer',
  '24': 'Laborer',
  '25': 'Mercenary',
  '26': 'Professional',
  '27': 'Security',
  '28': 'Soldier',
  '29': 'Warlord',
};
export const getProfessionId = (professionDescription) =>
  _.findKey(Professions, (profession) =>
    _.includes(_.lowerCase(profession), _.lowerCase(professionDescription)));

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
  31: 'Loyalty',
  32: 'Rivalry', // adversary, antagonist
  33: 'Romantic Attraction',
  34: 'Sexual Attraction',
};
export const getSocRelatId = (socRelatDescription) =>
  _.findKey(SocialRelationships, (socRelat) =>
    _.includes(_.lowerCase(socRelat), _.lowerCase(socRelatDescription)));

export const forEachSocialRelationship = (mapFunc) =>
  _.forEach(SocialRelationships, mapFunc);

const _getKeyByName = (collection, name) =>
  _.toInteger(_.findKey(collection, (prop) => _.includes(
    _.toLower(prop),
    _.toLower(name),
  )));

export const getSocialFrameworkKey = (charNameOrId, socialPropOrId, prefix) => {
  const charId = _.toInteger(charNameOrId) !== 0
    ? _.toInteger(charNameOrId)
    : _getKeyByName(Characters, charNameOrId);

  const socialId = _.toInteger(socialPropOrId) !== 0
    ? _.toInteger(socialPropOrId)
    : _getKeyByName(SocialRelationships, socialPropOrId);

  return (_.toInteger(prefix) * 10000) + (charId * 100) + socialId;
};

