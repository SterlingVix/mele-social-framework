import _ from 'lodash';

import {CharactersById, Comparators, Hereditaries, Professions, SocialProperties,} from './GlobalVariables.js';
import {genConditionalText} from './Conditions.js';
import {genTransitionText} from './Transitions.js';

export const getShortName = charName =>
  charName.split(/[ -']/)[0];

export const forEachCharacter = (mapFunc) =>
  _.forEach(CharactersById, mapFunc);

export const padCharName = (charName) =>
  _.pad(charName, 20, ' ');

class Character {
  constructor(config) {
    this.characterId = config.characterId;
    this.characterName = config.characterName;
    this.gamesWithCharacter = config.gamesWithCharacter; // [1, 2, 3] for Liara, Tali, Garrus; [2, 3] for Thane; etc.

    this.gender = config.gender; // 32,
    this.hereditary = config.hereditary; // 33,
    this.profession = config.profession; // 35,

    if (this.isShepard) {
      this.hereditary = _.findKey(Hereditaries, 'Human');
      this.profession = _.findKey(Professions, 'Soldier');
    } else {
      this.friendship = config.friendship; // 31, // protagonist, supporter
      this.loyalty = config.loyalty; // 34,
      this.rivalry = config.rivalry; // 36, // adversary, antagonist
      this.romanticInterest = config.romanticInterest; // 37,
      this.sexualInterest = config.sexualInterest; // 38,
    }

    this.conditionals = {};
    this.genConditionals();

    this.transitions = {};
    this.genTransitions();
  }

  get isShepard() {
    return this.characterName === 'Shepard';
  }

  genConditionals = () => {
    const socialPropsWithEqualsOnly = [
      SocialProperties.Gender,
      SocialProperties.Hereditary,
      SocialProperties.Profession,
    ];
    const socialPropsToSkipForEveryoneElse = [
      SocialProperties.Gender,
      SocialProperties.Hereditary, // TODO: this is good to add, but until it's used I'm reducing work.
      SocialProperties.Profession, // TODO: this is good to add, but until it's used I'm reducing work.
    ];
    _.forEach(SocialProperties, (socPropId, socPropName) => {
      this.conditionals[socPropName] = {};

      if (this.isShepard) {
        const conditionalsValidForShepard = [
          SocialProperties.Gender,
          SocialProperties.Hereditary,
          SocialProperties.Profession,
        ];
        const socialPropsToSkipForShepard = [
          SocialProperties.Hereditary, // TODO: this is good to add, but until it's used I'm reducing work.
          SocialProperties.Profession, // TODO: this is good to add, but until it's used I'm reducing work.
        ];
        const isCondValidForShepard = _.includes(conditionalsValidForShepard, socPropId);
        const isCondSkipped = _.includes(socialPropsToSkipForShepard, socPropId);
        if (!isCondValidForShepard || isCondSkipped) {
          return; // This is not a valid condition for Shepard
        }
      } else {
        if (_.includes(socialPropsToSkipForEveryoneElse, socPropId)) {
          return; // This is not a valid condition for Shepard
        }
      }

      const isSocPropEqualsOnly = _.includes(socialPropsWithEqualsOnly, socPropId);
      _.forEach(Comparators, (comparator, comparatorId) => {
        if (isSocPropEqualsOnly && comparator !== '==') {
          return; // This is not a valid condition
        }
        const condId = this.genSfKey(socPropId, comparatorId);
        const plotInt = this.genSfKey(socPropId, _.findKey(Comparators, cmp => cmp === '=='));

        this.conditionals[socPropName][comparatorId] = genConditionalText(
          condId, // conditionId
          comparator, // comparator
          plotInt, // Social Framework Plot Int
        );
      });
    });
  };

  genTransitions = () => {
    const socialPropsWithSettersOnly = [
      SocialProperties.Gender,
      SocialProperties.Hereditary,
      SocialProperties.Profession,
    ];
    const socialPropsToSkipForEveryoneElse = [
      SocialProperties.Gender,
      SocialProperties.Hereditary, // TODO: this is good to add, but until it's used I'm reducing work.
      SocialProperties.Profession, // TODO: this is good to add, but until it's used I'm reducing work.
    ];

    _.forEach(SocialProperties, (socPropId, socPropName) => {
      this.transitions[socPropName] = {};

      if (this.isShepard) {
        const transitionsValidForShepard = [
          SocialProperties.Gender,
          SocialProperties.Hereditary,
          SocialProperties.Profession,
        ];
        const socialPropsToSkipForShepard = [
          SocialProperties.Hereditary, // TODO: this is good to add, but until it's used I'm reducing work.
          SocialProperties.Profession, // TODO: this is good to add, but until it's used I'm reducing work.
        ];
        const isTransValidForShepard = _.includes(transitionsValidForShepard, socPropId);
        const isTransSkipped = _.includes(socialPropsToSkipForShepard, socPropId);
        // console.log("-> socPropName", socPropName);
        // console.log("-> isTransValidForShepard, isTransSkipped", isTransValidForShepard, isTransSkipped);
        if (!isTransValidForShepard || isTransSkipped) {
          return; // This is not a valid transition for Shepard
        }
      } else {
        if (_.includes(socialPropsToSkipForEveryoneElse, socPropId)) {
          return; // This is not a valid transition for Shepard
        }
      }

      const isSocPropSetterOnly = _.includes(socialPropsWithSettersOnly, socPropId);
      _.forEach(Comparators, (comparator, comparatorId) => {
        if (isSocPropSetterOnly && comparator !== '==') {
          return; // This is not a valid transition
        }
        const transId = this.genSfKey(socPropId, comparatorId);
        const plotInt = this.genSfKey(socPropId, _.findKey(Comparators, cmp => cmp === '=='));

        this.transitions[socPropName][comparatorId] = genTransitionText(
          transId, // transitionId
          plotInt, // Social Framework Plot Int
        );
      });
    });
  };

  genSfKey = (socPropId, comparatorId) =>
    _.toInteger(`${this.characterId}${socPropId}${comparatorId}`);
}

const Characters = _.map(CharactersById, (characterName, characterId) =>
  new Character({
    characterId,
    characterName,
    // friendship,
    // gamesWithCharacter = [],
    // gender,
    // hereditary,
    // loyalty,
    // profession,
    // rivalry,
    // romanticInterest,
    // sexualInterest,
  }));

export default Characters;
