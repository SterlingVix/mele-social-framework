import State from './GlobalState.js'
import Characters, {forEachCharacter} from './Characters.js';
import {
  Genders,
  SocialRelationships,
} from './SocialIdentities.js'
import {forEachSocialRelationship, getSocFrmwrkCndKey, getSocFrmwrkRootId} from './SocialRelationships.js';



const setSocialStatePerCharacter = () => {
  const res = {};

  forEachCharacter((charName, charId) => {
    forEachSocialRelationship((socRelatName, socRelatId) => {
      const leVersion = 2;
      const frameworkKey = getSocFrmwrkCndKey(charId, socRelatId, leVersion);
      const rootKey = getSocFrmwrkRootId(charId, socRelatId);
      res[frameworkKey] = `Trans ${frameworkKey} ==> LE${leVersion} | ${charName} | Set ${socRelatName}(${rootKey}) to [[Argument]]`;
    });
  });

  return res;
};



export default setSocialStatePerCharacter();
