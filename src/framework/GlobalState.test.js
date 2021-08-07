import _ from 'lodash';
import Characters,{ getShortName } from './Characters';
import GlobalState, {
  ShepardStates,
  SocialStates,
  SocialStateToId,
  IdToSocialState,
} from "./GlobalState";

describe(`Shepard states`, () => {

});

describe(`Social states (IdsValuesMap)`, () => {
  _.forEach(Characters, (charName, charId) => {
    const shortName = getShortName(charName);
    _.forEach(SocialStates, (socialStateName, socialStateId) => {
      const stateId = _.toInteger(`${charId}${socialStateId}`);
      const stateName = `${shortName}${socialStateName}`;
      it(`GlobalState key "${stateId}" is default value.`, () => {
        expect(GlobalState[stateId]).toEqual(0);
      });
    });
  });
});

describe(`SocialStateToId`, () => {
  _.forEach(Characters, (charName, charId) => {
    const shortName = getShortName(charName);
    _.forEach(SocialStates, (socialStateName, socialStateId) => {
      const stateId = _.toInteger(`${charId}${socialStateId}`);
      const stateName = `${shortName}${socialStateName}`;
      it(`SocialStateToId key "${stateId}" is "${stateName}".`, () => {
        expect(SocialStateToId[stateName]).toEqual(stateId);
      });
    });
  });
});

describe(`IdToSocialState`, () => {
  _.forEach(Characters, (charName, charId) => {
    const shortName = getShortName(charName);
    _.forEach(SocialStates, (socialStateName, socialStateId) => {
      const stateId = _.toInteger(`${charId}${socialStateId}`);
      const stateName = `${shortName}${socialStateName}`;
      it(`IdToSocialState key "${stateId}" is "${stateName}".`, () => {
        expect(IdToSocialState[stateId]).toEqual(stateName);
      });
    });
  });
});