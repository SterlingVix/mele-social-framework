import _ from 'lodash';

export const genInitFunc = (
  { // Character Class instance
    characterId,
    characterName,
    gamesWithVanillaRomanceFemale,
    gamesWithVanillaRomanceMale,
    vanillaBuddyRomancePlotInt,
  },
  gameNumber,
) => {
  const buddyRomancePlotInt = _.nth(vanillaBuddyRomancePlotInt, gameNumber - 1);
  const shepardGenderBool = ({
    1: 4639,
    2: 66,
    3: 66,
  })[gameNumber];
  const safeName = _(characterName) // TODO: improve this.
    .replace(' ', '_')
    .replace(' ', '_')
    .replace(' ', '_')
    .replace(' ', '_')
    .replace('\'', '_');

  const isVanillaRomanceOptionFemale = _.includes(gamesWithVanillaRomanceFemale, gameNumber);
  const isVanillaRomanceOptionMale =  _.includes(gamesWithVanillaRomanceMale, gameNumber);
  return `public function bool F99${gameNumber}${characterId}(BioWorldInfo bioWorld, int Argument)
{
    local int _note_ThisIsUnsafe_ThisConditionalHasSideEffectsForInitialization;
    local bool ${safeName};
    
    local BioGlobalVariableTable gv;
    local bool isVanillaRomanceOption;  local bool isVanillaShepardFemale;
    local int charPrefixPart;           local int currentBuddyRomanceVal;
    local int friendshipPlotInt;        local int genderPlotInt;
    local int hereditaryPlotInt;        local int loyaltyPlotInt;
    local int professionPlotInt;        local int rivalryPlotInt;
    local int romanticInterestPlotInt;  local int sexualInterestPlotInt;
    
    gv = bioWorld.GetGlobalVariables();
    currentBuddyRomanceVal = gv.GetInt(${buddyRomancePlotInt}); isVanillaShepardFemale = gv.GetBool(${shepardGenderBool});
    if (isVanillaShepardFemale) { isVanillaRomanceOption = ${isVanillaRomanceOptionFemale}; } 
    else { isVanillaRomanceOption = ${isVanillaRomanceOptionMale}; }
    
    friendshipPlotInt = ${characterId}311; rivalryPlotInt = ${characterId}361; sexualInterestPlotInt = ${characterId}381; romanticInterestPlotInt = ${characterId}371;
    gv.SetInt(friendshipPlotInt, currentBuddyRomanceVal); gv.SetInt(rivalryPlotInt, 1);    
    if (isVanillaRomanceOption) { gv.SetInt(romanticInterestPlotInt, currentBuddyRomanceVal); gv.SetInt(sexualInterestPlotInt, currentBuddyRomanceVal); } 
    else { gv.SetInt(romanticInterestPlotInt, -1); gv.SetInt(sexualInterestPlotInt, -1); }    
    return TRUE;
}



`;
};