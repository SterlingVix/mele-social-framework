import path from 'path';

export const BuildDir = path.resolve('./build');
export const ModsDir = path.resolve('./ME3TweaksModManager mods');
export const LE1Dir = path.resolve(BuildDir, 'LE1');
export const LE2Dir = path.resolve(BuildDir, 'LE2');
export const LE3Dir = path.resolve(BuildDir, 'LE3');

export const LE2CndApiFile = path.resolve(LE2Dir, 'LE2ConditionalsAPI.txt');
export const LE2TerseCndApiFile = path.resolve(LE2Dir, 'LE2TerseCndAPI.txt');
export const LE2TerseTransApiFile = path.resolve(LE2Dir, 'LE2TerseTransAPI.txt');
export const LE2CndFile = path.resolve(LE2Dir, 'PlotManager.pcc.txt');
export const LE2TransDecrFile = path.resolve(LE2Dir, 'TransDecr.txt');
export const LE2TransIncrFile = path.resolve(LE2Dir, 'TransIncr.txt');
export const LE2TransSetFile = path.resolve(LE2Dir, 'TransSet.txt');


export const OutFile = path.resolve(BuildDir, 'out.txt');
export const StringsApiFile = path.resolve(BuildDir, 'DLC_3030_INT.xml');
export const LE2ModsDirSringsFile = path.resolve(ModsDir, 'LE2', 'Social Framework', 'DLC_MOD_SOCIAL_FRAMEWORK', 'CookedPCConsole', 'DLC_3030_INT.xml');
