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

const getFuncName = (gameNumber, charId) => `99${gameNumber}${charId}`;

const le2GarrusCndInit = `
public function bool F${getFuncName(2, 40)}(BioWorldInfo bioWorld, int Argument)
{
    local int _note_ThisIsUnsafe_ThisConditionalHasSideEffectsForInitialization;
    local bool ${'Garrus'};
    local bool isVanillaRomanceOption;
    local bool isVanillaShepardFemale;
    local int charPrefixPart;
    local BioGlobalVariableTable gv;
    local int currentBuddyRomanceVal;
    local int friendshipPlotInt;
    local int genderPlotInt;
    local int hereditaryPlotInt;
    local int loyaltyPlotInt;
    local int professionPlotInt;
    local int rivalryPlotInt;
    local int romanticInterestPlotInt;
    local int sexualInterestPlotInt;
    
    gv = bioWorld.GetGlobalVariables();
    currentBuddyRomanceVal = gv.GetInt(270);
    isVanillaShepardFemale = gv.GetBool(66);
    if (isVanillaShepardFemale)
    {
        isVanillaRomanceOption = TRUE;
    }
    else
    {
        isVanillaRomanceOption = FALSE;
    }
    charPrefixPart = 40000;
    friendshipPlotInt = charPrefixPart + 311;
    rivalryPlotInt = charPrefixPart + 361;
    sexualInterestPlotInt = charPrefixPart + 381;
    romanticInterestPlotInt = charPrefixPart + 371;
    gv.SetInt(friendshipPlotInt, currentBuddyRomanceVal);
    gv.SetInt(rivalryPlotInt, 1);
    if (isVanillaRomanceOption)
    {
        gv.SetInt(romanticInterestPlotInt, currentBuddyRomanceVal);
        gv.SetInt(sexualInterestPlotInt, currentBuddyRomanceVal);
    }
    else
    {
        gv.SetInt(romanticInterestPlotInt, -1);
        gv.SetInt(sexualInterestPlotInt, -1);
    }
    return TRUE;
}
`;

const genInitFunc = ({
  buddyRomancePlotInt,
  charId,
  charName,
  gameNumber,
}) => `public function bool F99${gameNumber}${charId}(BioWorldInfo bioWorld, int Argument)
{
    local int _note_ThisIsUnsafe_ThisConditionalHasSideEffectsForInitialization;
    local bool ${charName};
    local bool isVanillaRomanceOption;
    local bool isVanillaShepardFemale;
    local int charPrefixPart;
    local BioGlobalVariableTable gv;
    local int currentBuddyRomanceVal;
    local int friendshipPlotInt;
    local int genderPlotInt;
    local int hereditaryPlotInt;
    local int loyaltyPlotInt;
    local int professionPlotInt;
    local int rivalryPlotInt;
    local int romanticInterestPlotInt;
    local int sexualInterestPlotInt;
    
    gv = bioWorld.GetGlobalVariables();
    currentBuddyRomanceVal = gv.GetInt(${buddyRomancePlotInt});
    isVanillaShepardFemale = gv.GetBool(${({
  1: 4639,
  2: 66,
  3: 66,
})[gameNumber]});
    if (isVanillaShepardFemale)
    {
        isVanillaRomanceOption = TRUE;
    }
    else
    {
        isVanillaRomanceOption = FALSE;
    }
    friendshipPlotInt = ${charId}311;
    rivalryPlotInt = ${charId}361;
    sexualInterestPlotInt = ${charId}381;
    romanticInterestPlotInt = ${charId}371;
    gv.SetInt(friendshipPlotInt, currentBuddyRomanceVal);
    gv.SetInt(rivalryPlotInt, 1);
    if (isVanillaRomanceOption)
    {
        gv.SetInt(romanticInterestPlotInt, currentBuddyRomanceVal);
        gv.SetInt(sexualInterestPlotInt, currentBuddyRomanceVal);
    }
    else
    {
        gv.SetInt(romanticInterestPlotInt, -1);
        gv.SetInt(sexualInterestPlotInt, -1);
    }
    return TRUE;
}
`;