const characters = `
Aria T'Loak
Armando-Owen Bailey
Ashley Williams
David Anderson
Diana Allers
Donnel Udina
EDI
Emily Wong
Gabriella Daniels
Garrus Vakarian
Gianni Parasini
Gregory Adams
Grunt
Illusive Man
Jack
Jacob Taylor
James Vega
Javik
Joker Moreau
Kaidan Alenko
Karin Chakwas
Kasumi Goto
Kelly Chambers
Kenneth Donnelly
Legion
Liara T'Soni
Miranda Lawson
Mordin Solus
Morinth
Nyreen Kandros
Samantha Traynor
Samara
Steve Cortez
Steven Hackett
Tali'Zorah vas Normandy
Thane Krios
Urdnot Bakara
Urdnot Wrex
Zaeed Massani
`;

const genders = ['Female', 'Male', 'Non-binary']; // genderqueer, trans, etc.

// TODO: do we want "romanticHistoryLe1Ashley", "romanticHistoryLe2Ashley", "loyaltyLe1Ashley", etc.,
//  or just track LE1, etc. in each core var?
state = {

  ashleyFriendship: 0, // protagonist, supporter
  ashleyLoyalty: 0,
  ashleyRivalry: 0, // adversary, antagonist
  ashleyRomanticInterest: 0,
  ashleySexualInterest: 0, // either if >= 1, will flirt; otherwise need shepardWillFlirtWithAshley: true
  shepardGender: genders[0],

};
const conditions = {
  getShepardGender: (genderNum) => state.shepardGender === genderNum,
  romanticInterest: (characterId) => state[`romanticInterest${characterId}`],


};

const transitions = {

};
