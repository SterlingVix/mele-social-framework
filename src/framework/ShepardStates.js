// TODO this file might benefit from different/better organization.
import _ from 'lodash';
import {getGenderId, getHereditaryId} from "./SocialStates.js";
import {genConditionalApiText, genTerseApiText, genConditionalText} from "./Conditions.js";
import {getSocFrmwrkCndKey} from "./SocialRelationships.js";
import {
  Genders,
  ShepardChar,
} from './SocialIdentities.js';

const defaultMaleShep = {
  gender: getGenderId('male'),
  hereditary: getHereditaryId('human'),
};

const defaultFemaleShep = {
  gender: getGenderId('female'),
  hereditary: getHereditaryId('human'),
};


const charName = 'Shepard';
const shepardCharId = 99;
const comparator = '==';
const conditionName = 'Gender Identity';
const leGamePrefix = 2; // TODO
const socialRelationshipId = 11;

const conditionId = getSocFrmwrkCndKey(shepardCharId, socialRelationshipId, leGamePrefix);
const rootId = getSocFrmwrkCndKey(shepardCharId, socialRelationshipId);
const comment = `Cnd ${conditionId} ==> LE2 | ${charName} | ${conditionName}(${rootId}) == [[Argument]]`;

// Cnd 29911 ==> LE2 | Shepard | Gender Identity == [[Argument]]
export const ShepardConds = {
  genderCnds: {
    cnd: `public function bool F${conditionId}(BioWorldInfo bioWorld, int Argument) { local BioGlobalVariableTable gv; gv = bioWorld.GetGlobalVariables(); return gv.GetInt(${rootId}) == Argument; }
`,
    api: `
    
// ${comment}
public function bool F${conditionId}(BioWorldInfo bioWorld, int Argument)
{
  local BioGlobalVariableTable gv;
  gv = bioWorld.GetGlobalVariables();
  return gv.GetInt(${rootId}) == Argument;
}
`,
    terse: `${comment}`,
  },
};
