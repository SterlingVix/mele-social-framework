import _ from 'lodash';
import fs from 'fs';
import {BuildDir, LE1Dir, LE2CndApiFile, LE2CndFile, LE2Dir, LE3Dir, OutFile,} from './Paths.js';
import {forEachCharacter} from './framework/Characters.js';
import {genApiConditionalText, genTerseConditionalText, le2ConditionalsHint} from './framework/Conditions.js';
import {getSocialFrameworkKey, SocialRelationshipsWithComparators} from './framework/SocialRelationships.js';


const makeDir = (dirPath) => {
  try {
    fs.accessSync(dirPath);
  } catch (err) {
    fs.mkdirSync(dirPath);
  }
};
// Makes an empty file.
const makeFile = (dirPath) => {
  try {
    fs.accessSync(dirPath);
    fs.writeFileSync(dirPath, '')
  } catch (err) {
    fs.appendFileSync(dirPath, '');
  }
};
const addContents = (dirPath, toWrite, comment) => {
  const mainContent = (!_.isObject(toWrite) || toWrite === '')
    ? toWrite
    : JSON.stringify(toWrite, null, 2);

  if (comment) {
    fs.appendFileSync(dirPath, `// ${comment}
`);
  }
  fs.appendFileSync(dirPath, mainContent);
//   fs.appendFileSync(dirPath, `
// `);
};

let counter = 0;

makeDir(BuildDir);
makeDir(LE1Dir);
makeDir(LE2Dir);
makeDir(LE3Dir);

makeFile(OutFile);

const initLe2ConditionalsFile = () => {
  makeFile(LE2CndFile);
};
initLe2ConditionalsFile();


const initLe2ConditionalsApiFile = () => {
  makeFile(LE2CndApiFile);
  addContents(LE2CndApiFile, '', le2ConditionalsHint);
};
initLe2ConditionalsApiFile();


const appendCounter = (file) => addContents(file, `

// Added ${counter} entries.`);
const writeConditionals = (conditionalsFile, apiFile, leGamePrefix = 2) => {
  counter = 0;

  forEachCharacter((charName, charIdStr) => {
    _.forEach(SocialRelationshipsWithComparators, ({comparator, socialRelationshipName}, stateIdStr) => {
      // const charShortName = getShortName(charName);

      counter++;
      const conditionalsParams = [
        getSocialFrameworkKey(charIdStr, stateIdStr, leGamePrefix), // conditionId,
        `LE${leGamePrefix} | ${charName} | ${socialRelationshipName} ${comparator} [[Argument]]`, // comment
        comparator,
        getSocialFrameworkKey(charIdStr, stateIdStr), // rootId,
      ];
      addContents(conditionalsFile, genTerseConditionalText(...conditionalsParams));
      addContents(apiFile, genApiConditionalText(...conditionalsParams));
    });
  });

  // TODO: iterate over SocialIdentities here next.

  appendCounter(conditionalsFile);
  appendCounter(apiFile);
};
writeConditionals(LE2CndFile, LE2CndApiFile, 2);

// addContents(OutFile, GlobalState, 'GlobalState');
// addContents(OutFile, getSocialFrameworkKey, 'getSocialFrameworkKey');
// addContents(OutFile, IdToSocialState, 'IdToSocialState');
// addContents(OutFile, ShepardStates, 'ShepardStates');
// addContents(OutFile, SocialRelationships, 'SocialRelationships');
// addContents(OutFile, SocialStateToId, 'SocialStateToId');

const writeCondition = (dirPath, comment, cndId, int = null, bool = null) => {
  /*

   */
}