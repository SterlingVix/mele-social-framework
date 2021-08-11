import _ from 'lodash';
import Characters, {getShortName} from './Characters.js';

describe(`Shepard states`, () => {

});

describe(`Social states (IdsValuesMap)`, () => {
  _.forEach(Characters, (charName, charId) => {
    const shortName = getShortName(charName);
    _.forEach(SocialRelationships, (socialRelationshipName, socialRelationshipId) => {
      const stateId = _.toInteger(`${charId}${socialRelationshipId}`);
      const stateName = `${shortName}${socialRelationshipName}`;
      it(`GlobalState key "${stateId}" is default value.`, () => {
        expect(GlobalState[stateId]).toEqual(0);
      });
    });
  });
});

describe(`SocialStateToId`, () => {
  _.forEach(Characters, (charName, charId) => {
    const shortName = getShortName(charName);
    _.forEach(SocialRelationships, (socialRelationshipName, socialRelationshipId) => {
      const stateId = _.toInteger(`${charId}${socialRelationshipId}`);
      const stateName = `${shortName}${socialRelationshipName}`;
      it(`SocialStateToId key "${stateId}" is "${stateName}".`, () => {
        expect(SocialStateToId[stateName]).toEqual(stateId);
      });
    });
  });
});

describe(`IdToSocialState`, () => {
  _.forEach(Characters, (charName, charId) => {
    const shortName = getShortName(charName);
    _.forEach(SocialRelationships, (socialRelationshipName, socialRelationshipId) => {
      const stateId = _.toInteger(`${charId}${socialRelationshipId}`);
      const stateName = `${shortName}${socialRelationshipName}`;
      it(`IdToSocialState key "${stateId}" is "${stateName}".`, () => {
        expect(IdToSocialState[stateId]).toEqual(stateName);
      });
    });
  });
});

describe(`getSocialFrameworkKey`, () => {
  [
    {char: 'Aria', social: 'roman', expected: 3033},
    {char: 'Loak', social: 'Roman', expected: 3033},
    {char: 'Grunt', social: 'Loyalty', expected: 4331},
    {char: 'Samara', social: 'loyal', expected: 6231},
    {char: 'Morinth', social: 'friend', expected: 5930},
    {char: 'Jack', social: 'sex', expected: 4534},
    {char: 'Parasini', social: 'SexualInterest', expected: 4134},
    {char: 'Chakwas', social: 'Rival', expected: 5132},
  ].forEach(({char, social, expected}) => {
    it(`"${char}" "${social}" is "${expected}".`, () => {
      expect(getSocialFrameworkKey(char, social)).toEqual(expected);
    });
  })
});
