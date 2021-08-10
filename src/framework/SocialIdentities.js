export const Genders = {
  '01': 'Female',
  '02': 'Male',
  '03': 'Genderqueer',
  '04': 'Non-binary',
  '05': 'Transgendered',
};

export const Hereditaries = {
  '07': 'Asari',
  '08': 'Batarian',
  '09': 'Drell',
  '10': 'Elcor',
  '11': 'Geth',
  '12': 'Hanar',
  '13': 'Human',
  '14': 'Krogan',
  '15': 'Quarian',
  '16': 'Salarian',
  '17': 'Turian',
  '18': 'Volus',
  '19': 'Vorcha',
};

export const Professions = {
  '20': 'Biotic',
  '21': 'Diplomat',
  '22': 'Educator',
  '23': 'Engineer',
  '24': 'Laborer',
  '25': 'Mercenary',
  '26': 'Professional',
  '27': 'Security',
  '28': 'Soldier',
  '29': 'Warlord',
};

export const SocialIdentities = {
  ...Genders,
  ...Hereditaries,
  ...Professions,
};

export default SocialIdentities;
