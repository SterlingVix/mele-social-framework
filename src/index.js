import _ from 'lodash';
import fs from 'fs';
import {BuildDir, LE1Dir, LE2CndApiFile, LE2CndFile, LE2Dir, LE2TerseApiFile, LE3Dir, OutFile,} from './Paths.js';
import {forEachCharacter, ShepardChar} from './framework/Characters.js';
import {genConditionalApiText, genTerseApiText, genConditionalText, le2ConditionalsHint} from './framework/Conditions.js';
import {getSocialFrameworkKey, SocialRelationshipsWithComparators} from './framework/SocialRelationships.js';
import {ShepardConds} from "./framework/ShepardStates.js";


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
};

let counter = 0;

makeDir(BuildDir);
makeDir(LE1Dir);
makeDir(LE2Dir);
makeDir(LE3Dir);

makeFile(OutFile);

const appendCounter = (file) => addContents(file, `

// Added ${counter} entries.`);

const writeConditionals = (conditionalsFile, apiFile, terseFile, leGamePrefix = 2) => {
  counter = 0;
  // initialize files.
  makeFile(conditionalsFile);
  makeFile(apiFile);
  addContents(apiFile, '', le2ConditionalsHint);
  makeFile(terseFile);


  // Write contents to files.
  forEachCharacter((charName, charIdStr) => {
    _.forEach(SocialRelationshipsWithComparators, ({comparator, conditionName}, stateIdStr) => {
      counter++;

      const conditionId = getSocialFrameworkKey(charIdStr, stateIdStr, leGamePrefix);
      const comment = `LE${leGamePrefix} | ${charName} | ${conditionName} ${comparator} [[Argument]]`;
      const rootId = getSocialFrameworkKey(charIdStr, stateIdStr);

      const conditionalsParams = [
        conditionId,
        comment,
        comparator,
        rootId,
      ];
      addContents(conditionalsFile, genConditionalText(...conditionalsParams));
      addContents(apiFile, genConditionalApiText(...conditionalsParams));
      addContents(
        terseFile,
        genTerseApiText(
          conditionId,
          charName,
          conditionName,
          rootId,
          comparator,
          leGamePrefix,
        ),
      );
    });
  });

  // Shepard Conditions
  counter++;
  addContents(conditionalsFile, ShepardConds.genderCnds.cnd);
  addContents(apiFile, ShepardConds.genderCnds.api);
  addContents(terseFile, ShepardConds.genderCnds.terse);



  // TODO: iterate over SocialIdentities here next.

  appendCounter(conditionalsFile);
  // appendCounter(apiFile);
  appendCounter(LE2TerseApiFile);
};
writeConditionals(LE2CndFile, LE2CndApiFile, LE2TerseApiFile, 2);

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