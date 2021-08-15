export const genConditionalText = (
  condId, // conditionId
  comparator, // comparator
  plotInt, // Social Framework Plot Int
  intArgument = 'Argument', // if provided, compare against this; otherwise accepts the Cnd argument.
) =>
  `public function bool F${condId}(BioWorldInfo bioWorld, int Argument) {\
local BioGlobalVariableTable gv; \
gv = bioWorld.GetGlobalVariables(); \
return gv.GetInt(${plotInt}) ${comparator} ${intArgument}; \
}
`;

// export const genTerseApiText = (
//   conditionId,
//   charName,
//   conditionName,
//   rootId,
//   comparator,
//   leGamePrefix,
// ) =>
//   `Cnd ${conditionId} ==> LE${leGamePrefix} | ${charName} | ${conditionName}(${rootId}) ${comparator} [[Argument]]
// `;
//
// export const le2ConditionalsHint = `These functions are appended to PlotManager.pcc > BioAutoConditionals
// // Functions should look like this:
// //   public function bool F1194(BioWorldInfo bioWorld, int Argument)
// //   {
// //     local BioGlobalVariableTable gv;
// //
// //     gv = bioWorld.GetGlobalVariables();
// //     return gv.GetBool(4266) == TRUE;
// //   }
// `;
