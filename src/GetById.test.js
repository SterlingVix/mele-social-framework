import _ from 'lodash';
import Characters from './framework/Characters.js';
import {getCharacter,} from './GetById.js';

describe(`getCharacter`, () => {
  it(`gets the name when given an integer.`, () => {
    expect(getCharacter(30)).toEqual(`Aria T'Loak`);
    expect(getCharacter(68)).toEqual(`Zaeed Massani`);
  });

  it(`gets the integer when given a name.`, () => {
    expect(getCharacter(`Aria T'Loak`)).toEqual(30);
    expect(getCharacter(`Zaeed Massani`)).toEqual(68);
  });

  it(`gets the integer when given a partial name.`, () => {
    expect(getCharacter(`Aria`)).toEqual(30);
    expect(getCharacter(`T'Loak`)).toEqual(30);
    expect(getCharacter(`Zaeed`)).toEqual(68);
    expect(getCharacter(`Massani`)).toEqual(68);
  });

  _.forEach(Characters, (name, charIdStr) => {
    const charId = _.toInteger(charIdStr);

    it(`id "${charId}" is "${name}".`, () => {
      expect(getCharacter(name)).toEqual(charId);
      expect(getCharacter(charId)).toEqual(name);
    });
  });
});

