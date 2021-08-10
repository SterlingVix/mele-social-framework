import fs from 'fs';
import GlobalState, {getSocialFrameworkKey, IdToSocialState, ShepardStates, SocialStates, SocialStatesWithComparators,} from './framework/GlobalState.js';
import {genConditionalText, le2ConditionalsHint,} from './framework/Conditions.js';
import {BuildDir, LE1Dir, LE2CndFile, LE2Dir, LE3Dir, OutFile,} from './Paths.js';
import {forEachCharacter} from './framework/Characters.js';
import _ from 'lodash';


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
  const mainContent = (!_.isObject(toWrite) || toWrite === "")
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

makeDir(BuildDir);
makeFile(OutFile);

makeDir(LE1Dir);
makeDir(LE2Dir);
makeDir(LE3Dir);
const initLe2ConditionalsFile = () => {
  makeFile(LE2CndFile);
  // addContents(LE2CndFile, '', le2ConditionalsHint);
};

let counter = 0;

initLe2ConditionalsFile();
const writeConditionals = (conditionalsFile, leGamePrefix = 2) => {
  forEachCharacter((charName, charIdStr) => {
    _.forEach(SocialStatesWithComparators, ({comparator, socialStateName}, stateIdStr) => {
      // const charShortName = getShortName(charName);
      const comment = `LE${leGamePrefix} | ${charName} | ${socialStateName} ${comparator} [[Argument]]`;
      const conditionId = getSocialFrameworkKey(charIdStr, stateIdStr, leGamePrefix);
      const rootId = getSocialFrameworkKey(charIdStr, stateIdStr);

      counter++;
      addContents(conditionalsFile, genConditionalText(
        conditionId,
        comment,
        comparator,
        rootId,
      ));
    });
  });

  addContents(LE2CndFile, `

// Added ${counter} entries.`);
};
writeConditionals(LE2CndFile, 2);
console.log("-> counter", counter);

addContents(OutFile, GlobalState, 'GlobalState');
// addContents(OutFile, getSocialFrameworkKey, 'getSocialFrameworkKey');
addContents(OutFile, IdToSocialState, 'IdToSocialState');
addContents(OutFile, ShepardStates, 'ShepardStates');
addContents(OutFile, SocialStates, 'SocialStates');
// addContents(OutFile, SocialStateToId, 'SocialStateToId');

const writeCondition = (dirPath, comment, cndId, int = null, bool = null) => {
  /*

   */

}