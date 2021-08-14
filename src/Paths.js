import path from "path";

export const BuildDir = path.resolve('./build');
export const LE1Dir = path.resolve(BuildDir, 'LE1');
export const LE2Dir = path.resolve(BuildDir, 'LE2');
export const LE3Dir = path.resolve(BuildDir, 'LE3');

export const LE2CndApiFile = path.resolve(LE2Dir, 'LE2ConditionalsAPI.txt');
export const LE2TerseCndApiFile = path.resolve(LE2Dir, 'LE2TerseCndAPI.txt');
export const LE2TerseTransApiFile = path.resolve(LE2Dir, 'LE2TerseTransAPI.txt');
export const LE2CndFile = path.resolve(LE2Dir, 'PlotManager.pcc.txt');

export const OutFile = path.resolve(BuildDir, 'out.txt');
export const StringsApiFile = path.resolve(BuildDir, 'Strings.txt');
