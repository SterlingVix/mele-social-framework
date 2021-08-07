import { _bools } from './originals/_bools';
import { _conditions } from './originals/_conditions';
import { _floats } from './originals/_floats';
import { _ints } from './originals/_ints';
import { _transitions } from './originals/_transitions';


export const bioWorld = {
  GetGlobalVariables: () => gv,
};


export const gv = {
  GetBool: (key) => _bools[key],
  GetInt: (key) => _ints[key],
};

