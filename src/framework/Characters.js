import _ from "lodash";

import {Characters, ShepardChar} from './SocialIdentities.js';

export const getShortName = charName =>
  charName.split(/[ -']/)[0];

export const forEachCharacter = (mapFunc) =>
  _.forEach(Characters, mapFunc);


export default Characters;
