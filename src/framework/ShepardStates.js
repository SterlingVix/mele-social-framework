// TODO this file might benefit from different/better organization.

import Characters from './Characters.js';
import {
  Genders,
  Hereditaries,
  Professions,
} from './SocialIdentities.js';
import { SocialRelationshipsWithComparators } from './SocialRelationships.js'
import {getHereditaryId, getGenderId} from "./SocialStates";

export const ShepardStates = {
  gender: 0, // one of Genders
  hereditary: 0, // 'human'
  profession: 0, // 'soldier'
};

const defaultMaleShep = {
  gender: getGenderId('male'),
  hereditary: getHereditaryId('human'),
};

const defaultFemaleShep = {
  gender: getGenderId('female'),
  hereditary: getHereditaryId('human'),
};

/**
 NOTES:





 */
