import _ from 'lodash';
import {
  characters,
  getCharacterId,
} from './GetById';

const characters = {
  30: `Aria T'Loak`,
  31: `Armando-Owen Bailey`,
  32: `Ashley Williams`,
  33: `David Anderson`,
  34: `Diana Allers`,
  35: `Donnel Udina`,
  36: `EDI`,
  37: `Emily Wong`,
  38: `Gabriella Daniels`,
  39: `Garrus Vakarian`,
  40: `Gianni Parasini`,
  41: `Gregory Adams`,
  42: `Grunt`,
  43: `Illusive Man`,
  44: `Jack`,
  45: `Jacob Taylor`,
  46: `James Vega`,
  47: `Javik`,
  48: `Joker Moreau`,
  49: `Kaidan Alenko`,
  50: `Karin Chakwas`,
  51: `Kasumi Goto`,
  52: `Kelly Chambers`,
  53: `Kenneth Donnelly`,
  54: `Legion`,
  55: `Liara T'Soni`,
  56: `Miranda Lawson`,
  57: `Mordin Solus`,
  58: `Morinth`,
  59: `Nyreen Kandros`,
  60: `Samantha Traynor`,
  61: `Samara`,
  62: `Steve Cortez`,
  63: `Steven Hackett`,
  64: `Tali'Zorah vas Normandy`,
  65: `Thane Krios`,
  66: `Urdnot Bakara`,
  67: `Urdnot Wrex`,
  68: `Zaeed Massani`,
}

const conditions = {
  getShepardGender: (genderNum) => state.shepardGender === genderNum,
  romanticInterest: (characterId) => state[`romanticInterest${characterId}`],


};

const transitions = {

};
