import _ from 'lodash';
import Characters, {getShortName} from './Characters.js';

const _getKeyByName = (collection, name) =>
  _.toInteger(_.findKey(collection, (prop) => _.includes(
    _.toLower(prop),
    _.toLower(name),
  )));

export const getSocialFrameworkKey = (charNameOrId, socialPropOrId) => {
  const charId = _.toInteger(charNameOrId) !== 0
    ? _.toInteger(charNameOrId)
    : _getKeyByName(Characters, charNameOrId);

  const socialId = _.toInteger(socialPropOrId) !== 0
    ? _.toInteger(socialPropOrId)
    : _getKeyByName(SocialStates, socialPropOrId);

  return (charId * 100) + socialId;
};

export const ShepardStates = {
  10: 'shepardGender',
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
export const SocialStates = {
  30: 'Friendship', // protagonist, supporter
  31: 'Loyalty',
  32: 'Rivalry', // adversary, antagonist
  33: 'RomanticInterest',
  34: 'SexualInterest',
};

// TODO: do we want "romanticHistoryLe1Ashley", "romanticHistoryLe2Ashley", "loyaltyLe1Ashley", etc.,
//  or just track LE1, etc. in each core var?

/**
 * This produces a "id-to-names" map (for development) and
 * an "id-to-values" map (for the in-game Int vals).
 *
 * __idToNameMap__
 * The ID Map is an object of:
 *   { ExportInt: NameString }
 *
 *
 *
 * __idValsMap__
 * The ID Map is an object of:
 *   { ExportInt: IntValue }
 *
 * "ExportInt" represents social states. It can be
 *  easily inferred by concatenating
 *  "CharacterId" & "SocialState", like:
 *
 *   3230 (for AshleyFriendship) (Ashley === 32) (Friendship === 30)
 *   3231 (for AshleyLoyalty)
 *   3232 (for AshleyRivalry)
 *   3233 (for AshleyRomanticInterest)
 *   3234 (for AshleySexualInterest)
 *   ...
 *   3633 (for EDIRomanticInterest)
 *
 * "IntValue" is the value for the state, i.e.:
 *   4231: 6, // GruntLoyalty is "6".
 */
const _idToNameMap = {};
const _idValsMap = {};
const _nameToIdMap = {};
(() => {
  _.forEach(Characters, (charName, charIdStr) => {
    _.forEach(SocialStates, (socialStateName, stateIdStr) => {
      const socialState = `${getShortName(charName)}${socialStateName}`;
      const key = _.toInteger(`${charIdStr}${stateIdStr}`);
      _idToNameMap[key] = socialState;
      _nameToIdMap[socialState] = key;
      _idValsMap[key] = 0; // 0 by default?
    });
  });
})();

export const SocialStateToId = _nameToIdMap;
export const IdToSocialState = _idToNameMap;

export default _idValsMap;
