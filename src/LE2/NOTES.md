More complex scripting func at:
ME2/BioGame/DLC/DLC_00_Shared/CookedPCConsole/BioP_Nor.pcc
(Exp 1079) SFXGameContent
(Exp 94) SFXSeqAct_HandleHenchTalk(Class):

```
Class SFXSeqAct_HandleHenchTalk extends SequenceAction;

// Variables
var const int VixenFlag;
var const int LeadingFlag;
var const int ConvictFlag;
var const int GethFlag;
var const int AssassinFlag;
var const int ProfessorFlag;
var const int GruntFlag;
var const int MysticFlag;
var const int GarrusFlag;
var const int TaliFlag;
var const int VixenUnlock;
var const int LeadingUnlock;
var const int ConvictUnlock;
var const int GethUnlock;
var const int AssassinUnlock;
var const int ProfessorUnlock;
var const int GruntUnlock;
var const int MysticUnlock;
var const int GarrusUnlock;
var const int TaliUnlock;
var const int VixenTreasure;
var const int LeadingTreasure;
var const int ConvictTreasure;
var const int GethTreasure;
var const int AssassinTreasure;
var const int ProfessorTreasure;
var const int GruntTreasure;
var const int MysticTreasure;
var const int GarrusTreasure;
var const int TaliTreasure;
var const int nLastUnlockedResearch;

// Functions
public static event function int GetObjClassVersion()
{
return Super(SequenceObject).GetObjClassVersion() + 1;
}
public function HandleSpecMissions()
{
local BioWorldInfo oWorldInfo;
local BioGlobalVariableTable VarTable;

    oWorldInfo = BioWorldInfo(GetWorldInfo());
    VarTable = oWorldInfo.GetGlobalVariables();
    if (VarTable.GetBool(VixenFlag) && VarTable.GetInt(VixenUnlock) <= 0)
    {
        VarTable.SetInt(VixenUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, VixenTreasure);
    }
    if (VarTable.GetBool(LeadingFlag) && VarTable.GetInt(LeadingUnlock) <= 0)
    {
        VarTable.SetInt(LeadingUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, LeadingTreasure);
    }
    if (VarTable.GetBool(ConvictFlag) && VarTable.GetInt(ConvictUnlock) <= 0)
    {
        VarTable.SetInt(ConvictUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, ConvictTreasure);
    }
    if (VarTable.GetBool(GethFlag) && VarTable.GetInt(GethUnlock) <= 0)
    {
        VarTable.SetInt(GethUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, GethTreasure);
    }
    if (VarTable.GetBool(AssassinFlag) && VarTable.GetInt(AssassinUnlock) <= 0)
    {
        VarTable.SetInt(AssassinUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, AssassinTreasure);
    }
    if (VarTable.GetBool(ProfessorFlag) && VarTable.GetInt(ProfessorUnlock) <= 0)
    {
        VarTable.SetInt(ProfessorUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, ProfessorTreasure);
    }
    if (VarTable.GetBool(GruntFlag) && VarTable.GetInt(GruntUnlock) <= 0)
    {
        VarTable.SetInt(GruntUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, GruntTreasure);
    }
    if (VarTable.GetBool(MysticFlag) && VarTable.GetInt(MysticUnlock) <= 0)
    {
        VarTable.SetInt(MysticUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, MysticTreasure);
    }
    if (VarTable.GetBool(GarrusFlag) && VarTable.GetInt(GarrusUnlock) <= 0)
    {
        VarTable.SetInt(GarrusUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, GarrusTreasure);
    }
    if (VarTable.GetBool(TaliFlag) && VarTable.GetInt(TaliUnlock) <= 0)
    {
        VarTable.SetInt(TaliUnlock, 1);
        VarTable.SetInt(nLastUnlockedResearch, TaliTreasure);
    }
}
public function Activated()
{
HandleSpecMissions();
}

//class default properties can be edited in the Properties tab for the class's Default__ object.
defaultproperties
{
VixenFlag = 578
LeadingFlag = 579
ConvictFlag = 580
GethFlag = 581
AssassinFlag = 584
ProfessorFlag = 585
GruntFlag = 586
MysticFlag = 587
GarrusFlag = 583
TaliFlag = 3576
VixenUnlock = 577
LeadingUnlock = 573
ConvictUnlock = 570
GethUnlock = 571
AssassinUnlock = 576
ProfessorUnlock = 572
GruntUnlock = 569
MysticUnlock = 574
GarrusUnlock = 575
TaliUnlock = 578
VixenTreasure = 1186
LeadingTreasure = 1183
ConvictTreasure = 1181
GethTreasure = 1184
AssassinTreasure = 1195
ProfessorTreasure = 4480
GruntTreasure = 1190
MysticTreasure = 1188
GarrusTreasure = 1182
TaliTreasure = 1192
nLastUnlockedResearch = 579
bCallHandler = FALSE
VariableLinks = ()
}
```