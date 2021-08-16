import _ from 'lodash';
import fs from 'fs';
import {
  BuildDir,
  LE1Dir,
  LE2CndFile,
  LE2Dir,
  LE2ModsDirSringsFile,
  LE2TerseTransApiFile,
  LE2TransDecrFile,
  LE2TransIncrFile,
  LE2TransSetFile,
  LE3Dir,
  OutFile,
  StringsApiFile,
} from './Paths.js';
import Characters from './framework/Characters.js';
import Strings from './framework/StringNames.js'
import {Comparators} from "./framework/GlobalVariables.js";


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

const appendCounter = (file, thisCounter) => addContents(file, `

// Added ${thisCounter} entries.`);

const writeConditionals = (conditionalsFile) => {
  counter = 0;
  // initialize files.
  makeFile(conditionalsFile);

  // Conditionals file.
  _.forEach(Characters, (character) => {
    _.forEach(character.conditionals, (conditional) => {
      _.forEach(conditional, (conditionalForComparator) => {
        counter++;
        addContents(conditionalsFile, conditionalForComparator);
      });
    });
  });

  appendCounter(conditionalsFile, counter);
};

writeConditionals(LE2CndFile);

const writeTransitionals = () => {
  let transDecrCounter = 0;
  let transIncrCounter = 0;
  let transSetCounter = 0;

  // initialize files.
  makeFile(LE2TransDecrFile);
  makeFile(LE2TransIncrFile);
  makeFile(LE2TransSetFile);

  // Transitions files.
  _.forEach(Characters, (character) => {
    _.forEach(character.transitions, (transition) => {
      _.forEach(transition, (transitionByModificationType, comparatorId) => {

        if (comparatorId === _.findKey(Comparators, cmp => cmp === '==')) {
          transSetCounter++;
          addContents(LE2TransSetFile, transitionByModificationType);
        } else if (comparatorId === _.findKey(Comparators, cmp => cmp === '<')) {
          transDecrCounter++;
          addContents(LE2TransDecrFile, transitionByModificationType);
        } else if (comparatorId === _.findKey(Comparators, cmp => cmp === '>')) {
          transIncrCounter++;
          addContents(LE2TransIncrFile, transitionByModificationType);
        }
      });
    });
  });

  appendCounter(LE2TransDecrFile, transDecrCounter);
  appendCounter(LE2TransIncrFile, transIncrCounter);
  appendCounter(LE2TransSetFile, transSetCounter);
};
writeTransitionals();


// Strings files
const genStringsXmlStart = () => (`<?xml version="1.0" encoding="utf-8"?>
<tlkFile TLKToolVersion="4.0.0.0">
    <!--Male entries section begin-->
    <String id="3030">Social Framework</String>
    <String id="3031">DLC_3030</String>
    <String id="3032">en-us</String>
    <String id="3033">Male</String>
`);
const genStringsXmlEnd = () => (`    <!--Male entries section end-->
    <!--Female entries section begin-->
    <String id="3033">Female</String>
    <!--Female entries section end-->
</tlkFile>`);

const genStringsFiles = () => {
  makeFile(StringsApiFile);
  makeFile(LE2ModsDirSringsFile);


  addContents(StringsApiFile, genStringsXmlStart());
  addContents(LE2ModsDirSringsFile, genStringsXmlStart());
  _.forEach(Strings, (stringContent, stringId) => {
    addContents(StringsApiFile, `    <String id="${stringId}">${stringContent}</String>
`);
    addContents(LE2ModsDirSringsFile, `    <String id="${stringId}">${stringContent}</String>
`);
  });
  addContents(StringsApiFile, genStringsXmlEnd());
  addContents(LE2ModsDirSringsFile, genStringsXmlEnd());
};

genStringsFiles();
