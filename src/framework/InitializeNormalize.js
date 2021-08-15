import _ from 'lodash';
import {Characters} from './GlobalVariables.js';


const initializeSocialFrameworkForCharacter = (configObject) => {
  const {
    leLoyaltyId,
    leShepardGenderBool,
    leShepardRomanceIfMale,
    leShepardRomanceIfFemale,
    leBuddyRomanceInt,

    sfCharFriendshipId,
    sfCharId,
    sfCharName,
    sfCharLoyaltyId,
    sfCharRivalryId,
    sfCharRomanceId,
    sfCharSexualId,
    // TODO: other social identities
  } = configObject;

  const { sfBuddyRomanceMultiplier } = getGlobalVars();

  const isShepardFemale = getBool(leShepardGenderBool);
  const isRomanceable = _.some([
    isShepardFemale && leShepardRomanceIfFemale,
    !isShepardFemale && leShepardRomanceIfMale,
  ]);
  const currentRomanceBuddy = (getInt(leBuddyRomanceInt) * sfBuddyRomanceMultiplier);

  const sfCharFriendship = getInt(currentRomanceBuddy);
  const sfCharLoyalty = getInt(leLoyaltyId);
  const sfCharRivalry = 1;
  const sfCharRomance = isRomanceable
    ? getInt(currentRomanceBuddy)
    : 1;
  const sfCharSexual = 1;

  setInt(sfCharFriendshipId, sfCharFriendship);
  setInt(sfCharLoyaltyId, sfCharLoyalty);
  setInt(sfCharRivalryId, sfCharRivalry);
  setInt(sfCharRomanceId, sfCharRomance);
  setInt(sfCharSexualId, sfCharSexual);
};
