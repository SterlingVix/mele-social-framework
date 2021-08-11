import _ from 'lodash';
import Characters from './Characters.js';

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
  33: 'Romantic Interest',
  34: 'Sexual Interest',
};
export const forEachSocialRelationship = (mapFunc) =>
  _.forEach(SocialRelationships, mapFunc);

export const SocialRelationshipsWithComparators = {
  30: {
    comparator: '==',
    socialRelationshipName: 'Friendship',
  }, // protagonist, supporter
  31: {
    comparator: '==',
    socialRelationshipName: 'Loyalty',
  },
  32: {
    comparator: '==',
    socialRelationshipName: 'Rivalry',
  }, // adversary, antagonist
  33: {
    comparator: '==',
    socialRelationshipName: 'Romantic Interest',
  },
  34: {
    comparator: '==',
    socialRelationshipName: 'Sexual Interest',
  },
  60: {
    comparator: '<',
    socialRelationshipName: 'Friendship',
  }, // protagonist, supporter
  61: {
    comparator: '<',
    socialRelationshipName: 'Loyalty',
  },
  62: {
    comparator: '<',
    socialRelationshipName: 'Rivalry',
  }, // adversary, antagonist
  63: {
    comparator: '<',
    socialRelationshipName: 'Romantic Interest',
  },
  64: {
    comparator: '<',
    socialRelationshipName: 'Sexual Interest',
  },
  90: {
    comparator: '>',
    socialRelationshipName: 'Friendship',
  }, // protagonist, supporter
  91: {
    comparator: '>',
    socialRelationshipName: 'Loyalty',
  },
  92: {
    comparator: '>',
    socialRelationshipName: 'Rivalry',
  }, // adversary, antagonist
  93: {
    comparator: '>',
    socialRelationshipName: 'Romantic Interest',
  },
  94: {
    comparator: '>',
    socialRelationshipName: 'Sexual Interest',
  },
};
export const forEachSocialRelationshipWithComparator = (mapFunc) =>
  _.forEach(SocialRelationshipsWithComparators, mapFunc);


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
