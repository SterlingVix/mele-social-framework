import _ from 'lodash';
import Characters from './Characters.js';
import {Comparators, SocialProperties} from './GlobalVariables.js';

export const forEachSocialRelationship = (mapFunc) =>
  _.forEach(SocialProperties, mapFunc);

const _getKeyByName = (collection, name) =>
  _.toInteger(_.findKey(collection, (prop) => _.includes(
    _.toLower(prop),
    _.toLower(name),
  )));

export const getSocFrmwrkRootId = (charNameOrId, socialPropName) => {
  if (!_.isString(socialPropName) && (_.toInteger(socialPropName) !== 0)) {
    throw new Error(`socialPropName must be a string; received ${socialPropName}`);
  }

  const socialId = _.toInteger(socialPropName) !== 0
    ? _.toInteger(socialPropName)
    : _getKeyByName(SocialProperties, socialPropName);

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
    : _getKeyByName(SocialProperties, socialPropOrId);

  return (_.toInteger(prefix) * 10000) + (charId * 100) + socialId;
};

export default {
  Comparators,
  SocialProperties,
};
