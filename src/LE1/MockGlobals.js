import { _bools } from './originals/_bools.js';
import { _conditions } from './originals/_conditions.js';
import { _floats } from './originals/_floats.js';
import { _ints } from './originals/_ints.js';
import { _transitions } from './originals/_transitions.js';


export const bioWorld = {
  GetGlobalVariables: () => gv,
};


export const gv = {
  GetBool: (key) => _bools[key],
  GetInt: (key) => _ints[key],
};

