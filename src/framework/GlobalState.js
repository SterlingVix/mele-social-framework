import _ from 'lodash';
import Genders from './Genders';
import Characters, { getShortName } from './Characters';

export const ShepardStates = {
  10: 'shepardGender',
};

export const SocialStates = {
  30: 'Friendship', // protagonist, supporter
  31: 'Loyalty',
  32: 'Rivalry', // adversary, antagonist
  33: 'RomanticInterest',
  34: 'SexualInterest', // either if >= 1, will flirt; otherwise need shepardWillFlirtWithAshley: true
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
