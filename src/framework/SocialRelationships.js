import _ from 'lodash';
import Characters from './Characters.js';
import {SocialRelationships, _socRelats, Comparators} from './SocialIdentities.js';

export const forEachSocialRelationship = (mapFunc) =>
  _.forEach(SocialRelationships, mapFunc);

const genConditionalsWithComparators = (conditionsMap, startingIdx) => {
  const initialMap = [];

  _.forEach(conditionsMap, (conditionName) => {
    _.forEach(Comparators, (comparator) => {
      initialMap.push({
        comparator,
        conditionName,
      });
    });
  });

  const res = {};
  _.forEach(initialMap, (cndObj, idx) => res[_.toInteger(startingIdx + idx)] = cndObj);

  return res;
};


export const SocialRelationshipsWithComparators =
  genConditionalsWithComparators(_socRelats, 30);

export const forEachSocialRelationshipWithComparator = (mapFunc) =>
  _.forEach(SocialRelationshipsWithComparators, mapFunc);


const _getKeyByName = (collection, name) =>
  _.toInteger(_.findKey(collection, (prop) => _.includes(
    _.toLower(prop),
    _.toLower(name),
  )));

/**
 * Gets the "root id"; i.e.
 *   "30" for all "Friendships",
 *   "33" for all "Loyalty",
 *   etc.
 *
 * @param charNameOrId
 * @param socialPropName
 * @returns {*}
 */
export const getSocFrmwrkRootId = (charNameOrId, socialPropName) => {
  if (!_.isString(socialPropName) && (_.toInteger(socialPropName) !== 0)) {
    throw new Error(`socialPropName must be a string; received ${socialPropName}`);
  }

  const socialId = _.toInteger(socialPropName) !== 0
    ? _.toInteger(socialPropName)
    : _getKeyByName(SocialRelationships, socialPropName);

  const charId = _.toInteger(charNameOrId) !== 0
    ? _.toInteger(charNameOrId)
    : _getKeyByName(Characters, charNameOrId);

  return (charId * 100) + socialId;
};

/**
 * Conditional Social Framework key.
 *
 * @param charNameOrId
 * @param socialPropOrId
 * @param prefix
 * @returns {*}
 */
export const getSocFrmwrkCndKey = (charNameOrId, socialPropOrId, prefix) => {
  const charId = _.toInteger(charNameOrId) !== 0
    ? _.toInteger(charNameOrId)
    : _getKeyByName(Characters, charNameOrId);

  const socialId = _.toInteger(socialPropOrId) !== 0
    ? _.toInteger(socialPropOrId)
    : _getKeyByName(SocialRelationships, socialPropOrId);

  return (_.toInteger(prefix) * 10000) + (charId * 100) + socialId;
};

export default {
  _socRelats,
  Comparators,
  SocialRelationships,
};
