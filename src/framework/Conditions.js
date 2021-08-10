import _ from 'lodash';
import State, {
  getSocialFrameworkKey,
  SocialStates,
} from './GlobalState.js'


const conditionsNamed = {
  getShepardGender: (genderNum) => State.shepardGender === genderNum,
  romanticInterest: (characterId) => State[`romanticInterest${characterId}`],

  getRomanticInterestFor: (charId) => {
    const romanceSuffix = _.findKey(SocialStates)
    return getInt
  }
};

export const genLe2CndTxt = (
  cndId,
  comment, // generate in iteration
  comparator,
  intArgument,
  socialStateId, // generate in iteration
) => {
  // Validate options
  // const validGvTypes = ['bool', 'int'];
  // if (!_.includes(validGvTypes, gvType)) {
  //   throw new Error(`gvType must be one of ${validGvTypes}. Received ${gvType}.`);
  // }
  // const validComparators = gvType === 'int'
  //   ? ['!=', '<', '<=', '==', '>', '>=']
  //   : ['==', '!='];
  const validComparators = ['!=', '<', '<=', '==', '>', '>='];
  if (!_.includes(validComparators, comparator)) {
    throw new Error(`comparator must be one of ${validComparators}. Received ${comparator}.`);
  }

  /*
  TODO: Do this next. Should produce a Cnd check for each
   Social Framework Int, like:
   // Aria T'Loak: Friendship == Argument
   return gv.GetInt(3030) == Argument

   Do this for each comparator
   */
  return `
// ${comment}  
public function bool F${cndId}(BioWorldInfo bioWorld, int Argument)
{ 
  local BioGlobalVariableTable gv;

  gv = bioWorld.GetGlobalVariables();
  return gv.GetInt(${socialStateId}) ${comparator} Argument;
}
`;
};

export default {
};
