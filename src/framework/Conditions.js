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
    // return getInt
  }
};

export const genConditionalText = (
  cndId,
  comment, // generate in iteration
  comparator,
  socialStateId = 'Argument', // if provided, get this SocialStateId; otherwise accepts the Cnd argument.
  intArgument = 'Argument', // if provided, compare against this; otherwise accepts the Cnd argument.
) => {
  const validComparators = ['!=', '<', '<=', '==', '>', '>='];
  if (!_.includes(validComparators, comparator)) {
    throw new Error(`comparator must be one of ${validComparators}. Received ${comparator}.`);
  }

  const prettyOutput = `

public function bool F${cndId}(BioWorldInfo bioWorld, int Argument)
{ 
  // ${comment}  
  local BioGlobalVariableTable gv;
  gv = bioWorld.GetGlobalVariables();
  return gv.GetInt(${socialStateId}) ${comparator} Argument;
}`;
  const terseOutput = `public function bool F${cndId}(BioWorldInfo bioWorld, int Argument) { local BioGlobalVariableTable gv; gv = bioWorld.GetGlobalVariables(); return gv.GetInt(${socialStateId}) ${comparator} Argument; }
`;
  return terseOutput;
};

export const le2ConditionalsHint = `These functions are appended to PlotManager.pcc > BioAutoConditionals
// Functions should look like this:
//   public function bool F1194(BioWorldInfo bioWorld, int Argument)
//   {
//     local BioGlobalVariableTable gv;
//   
//     gv = bioWorld.GetGlobalVariables();
//     return gv.GetBool(4266) == TRUE;
//   }

`;

export default {
};
