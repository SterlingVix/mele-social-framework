import _ from 'lodash';
import {forEachCharacter, getShortName} from './Characters.js';
import {forEachSocialRelationship, getSocialFrameworkKey} from "./SocialRelationships";

// TODO: do we want "romanticHistoryLe1Ashley", "romanticHistoryLe2Ashley", "loyaltyLe1Ashley", etc.,
//  or just track LE1, etc. in each core var?

const genIdToNameMap = () => {
  const dict = {};
  forEachCharacter((charName, charIdStr) => {
    forEachSocialRelationship((socialRelationshipName, stateIdStr) => {
      const socialRelationship = `${getShortName(charName)}${socialRelationshipName}`;
      const key = getSocialFrameworkKey(charIdStr, stateIdStr, 1);
      dict[key] = socialRelationship;
    });
  });
  return dict;
};

const genStateDefaultVals = () => {
  const dict = {};
  forEachCharacter((charName, charIdStr) => {
    forEachSocialRelationship((socialRelationshipName, stateIdStr) => {
      const key = getSocialFrameworkKey(charIdStr, stateIdStr, 2);
      dict[key] = 0; // 0 by default?
    });
  });
  return dict;
};

const genSocialStateToId = () => {
  const dict = {};
  forEachCharacter((charName, charIdStr) => {
    forEachSocialRelationship((socialRelationshipName, stateIdStr) => {
      const socialRelationship = `${getShortName(charName)}${socialRelationshipName}`;
      dict[socialRelationship] = getSocialFrameworkKey(charIdStr, stateIdStr, 3);
    });
  });
  return dict;
};

export const IdToSocialState = genIdToNameMap();
export const StateDefaultVals = genStateDefaultVals();
export const SocialStateToId = genSocialStateToId();


/**
 * This is an "id-to-names" map (for development) and
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
const genSocialFrameworkApi = () => {
  const dict = {};
  forEachCharacter((charName, charIdStr) => {
    forEachSocialRelationship((socialRelationshipName, stateIdStr) => {
      const key = getSocialFrameworkKey(charIdStr, stateIdStr, 1);
      dict[key] = {
        charName: charName,
        charShortName: getShortName(charName),
        description: `${charName} - ${socialRelationshipName}`,
        rootId: getSocialFrameworkKey(charIdStr, stateIdStr),
      };
    });
  });
  return dict;
};
// export default IdToSocialState;
export default genSocialFrameworkApi();
