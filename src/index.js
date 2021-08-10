import fs from 'fs';
import path from 'path';

import GlobalState, {
  getSocialFrameworkKey,
  IdToSocialState,
  ShepardStates,
  SocialStates,
  SocialStateToId,
} from './framework/GlobalState.js';

const _buildDir = path.resolve('./build');

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
  if (comment) {
    fs.appendFileSync(dirPath, `// ${comment}
`);
  }
  fs.appendFileSync(dirPath, JSON.stringify(toWrite, null, 2));
  fs.appendFileSync(dirPath, `

`);
};

makeDir(_buildDir);
const _outFile = path.resolve(_buildDir, 'out.txt');
makeFile(_outFile);


const _le1Dir = path.resolve(_buildDir, 'LE1');
const _le2Dir = path.resolve(_buildDir, 'LE2');
const _le3Dir = path.resolve(_buildDir, 'LE3');
makeDir(_le1Dir);
makeDir(_le2Dir);
makeDir(_le3Dir);
const le2ConditionalsFiles = [
  path.resolve(_le2Dir, 'PlotManager.pcc.txt'),
];
makeFile(le2ConditionalsFiles[0]);
addContents(le2ConditionalsFiles[0], '', `
/*
// PlotManager.pcc > BioAutoConditionals has conditionals functions, like:

Class BioAutoConditionals extends BioConditionals;

// Functions
public function bool F1194(BioWorldInfo bioWorld, int Argument)
{
  local BioGlobalVariableTable gv;

  gv = bioWorld.GetGlobalVariables();
  return gv.GetBool(4266) == TRUE;
}
*/
`);



addContents(_outFile, GlobalState, 'GlobalState');
// addContents(_outFile, getSocialFrameworkKey, 'getSocialFrameworkKey');
addContents(_outFile, IdToSocialState, 'IdToSocialState');
addContents(_outFile, ShepardStates, 'ShepardStates');
addContents(_outFile, SocialStates, 'SocialStates');
// addContents(_outFile, SocialStateToId, 'SocialStateToId');

const writeCondition = (dirPath, comment, cndId, int = null, bool = null) => {
  /*

   */

}