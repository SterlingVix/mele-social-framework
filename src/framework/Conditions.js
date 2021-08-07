import State from './GlobalState'

const conditionsNamed = {
  getShepardGender: (genderNum) => State.shepardGender === genderNum,
  romanticInterest: (characterId) => State[`romanticInterest${characterId}`],
};


export default {
};
