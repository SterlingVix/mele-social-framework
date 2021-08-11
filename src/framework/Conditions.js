import _ from 'lodash';

const _validateComparator = (comparator) => {
  const validComparators = ['!=', '<', '<=', '==', '>', '>='];
  if (!_.includes(validComparators, comparator)) {
    throw new Error(`comparator must be one of ${validComparators}. Received ${comparator}.`);
  }
};

export const genConditionalText = (
  conditionId,
  comment, // generate in iteration
  comparator,
  socialRelationshipId = 'Argument', // if provided, get this SocialStateId; otherwise accepts the Cnd argument.
  intArgument = 'Argument', // if provided, compare against this; otherwise accepts the Cnd argument.
) => {
  _validateComparator(comparator);

  return `public function bool F${conditionId}(BioWorldInfo bioWorld, int Argument) { local BioGlobalVariableTable gv; gv = bioWorld.GetGlobalVariables(); return gv.GetInt(${socialRelationshipId}) ${comparator} Argument; }
`;
};

export const genTerseApiText = (
  conditionId,
  charName,
  conditionName,
  rootId,
  comparator,
  leGamePrefix,
) =>
  `Cnd ${conditionId} ==> LE${leGamePrefix} | ${charName} | ${conditionName}(${rootId}) ${comparator} [[Argument]]
`;

export const genConditionalApiText = (
  conditionId,
  comment, // generate in iteration
  comparator,
  socialRelationshipId = 'Argument', // if provided, get this SocialStateId; otherwise accepts the Cnd argument.
  arg = 'Argument', // if provided, compare against this; otherwise accepts the Cnd argument.
) => {
  _validateComparator(comparator);

  return `

// Cnd ${conditionId} ==> ${comment}
public function bool F${conditionId}(BioWorldInfo bioWorld, int Argument)
{
  local BioGlobalVariableTable gv;
  gv = bioWorld.GetGlobalVariables();
  return gv.GetInt(${socialRelationshipId}) ${comparator} ${arg};
}`;
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
