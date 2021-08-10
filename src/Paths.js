import path from "path";

export const BuildDir = path.resolve('./build');
export const LE1Dir = path.resolve(BuildDir, 'LE1');
export const LE2Dir = path.resolve(BuildDir, 'LE2');
export const LE3Dir = path.resolve(BuildDir, 'LE3');

export const LE2CndFile = path.resolve(LE2Dir, 'PlotManager.pcc.txt');
export const OutFile = path.resolve(BuildDir, 'out.txt');
