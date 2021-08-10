import _ from 'lodash';
import {
  characters,
  getCharacterId,
} from './GetById.js';
import Characters, {
  getShortName,

} from './framework/Characters.js';


const conditions = {
  getShepardGender: (genderNum) => state.shepardGender === genderNum,
  romanticInterest: (characterId) => state[`romanticInterest${characterId}`],


};

const transitions = {

};