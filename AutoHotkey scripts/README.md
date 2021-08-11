First things first: there *SHOULD* be a better way to do this. I really hope to improve this process.

In `index.js` we can generate script entries for the Social Framework. For example, generating LE2 Conditionals will output functions like:
```
public function bool F23031(BioWorldInfo bioWorld, int Argument) { 
  local BioGlobalVariableTable gv; 
  gv = bioWorld.GetGlobalVariables(); 
  return gv.GetInt(3031) == Argument; 
}
```
Unfortunately, ME3Tweaks tools will only compile *Functions*, not *Classes*, so we can't just paste all these functions into a class.

The current workflow I'm using is (for example, in LE2 `PlotManager.pcc`) to:
* Multi-clone a function 584 times (or however many funcs are produced)
* Run the AutoHotkey script to automate alt-tabbing and copy-pasting between the `index.js` functions output file and the PackageManager.

This sucks, is brittle and failure-prone (for example, by bumping the goddamned mouse), and is inelegant; but it does allow for a degree of automation that makes this project possible.
