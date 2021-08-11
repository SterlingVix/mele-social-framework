#InstallKeybdHook
#InstallMouseHook
#NoEnv  ; Recommended for performance and compatibility
#Persistent
#MaxThreadsPerHotkey 2
#SingleInstance, Force
#Warn  ; Enable warnings to assist with detecting common errors.

SendMode Input  ; Recommended
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

;   ------------------------------------
;      Only run for Legendary Explorer
;   ------------------------------------
#IfWinActive ahk_exe LegendaryExplorer.exe ; Scripts for LegendaryExplorer modding tools

;   ------------------------------------
;              Functions
;   ------------------------------------
SelectEditor() {
  Click, down, left
  Sleep 5
  Click, up, left
  Sleep 30
}

DeleteContents() {
  Send ^a
  Sleep 30
  Send {Delete}
  Sleep 30
}

CopyPasteLine() {
  Send !{Tab}
  Sleep 150
  Send {Control down}
  Sleep 30
  Send ^x
  Sleep 30
  Send {Control up}
  Sleep 30

  Send !{Tab}
  Sleep 150
  Send {Control down}
  Sleep 30
  Send ^v
  Sleep 30
  Send {Control up}
  Sleep 30
}

CompileSave() {
  Send ^+{Tab}
  Sleep 50
  Send ^{Tab}
  Sleep 50
  Send {Down}
  Sleep 30
  Send {Enter}
  Sleep 30
}

SelectNextFunction() {
  Send {Down}
  Sleep 30
}

SelectTreeView2() {
  Send ^+{Tab}
  Sleep 50
  Send ^{Tab}
  Sleep 50
  Send +{Tab}
  Sleep 30
  Send +{Tab}
  Sleep 30
  Send +{Tab}
  Sleep 30
}

CopyCnd(iter) {
  Sleep 20
  SelectEditor()
  Sleep 20
  DeleteContents()
  Sleep 20
  CopyPasteLine()
  Sleep 20
  CompileSave()
  Sleep 20

  SelectEditor()
  Sleep 20
  SelectTreeView2()
  Sleep 20
  SelectNextFunction()
  Sleep 20

  ; NOTE: update the number of iterations here. AHK will fail if the stack call is 400-ish iterations deep.
  if (iter > 1)
    CopyCnd(--iter)
}

;   ------------------------------------
;         Define script(s) here:
;   ------------------------------------
~LControl & P::
  CopyCnd(100)
  CopyCnd(100)
  CopyCnd(100)
  CopyCnd(100)
  CopyCnd(100)
  CopyCnd(86)
return



;   ------------------------------------
;   ------------------------------------
;               Always on
;   ------------------------------------
;   ------------------------------------
#IfWinActive ; Scripts for all windows

;   ------------------------------------
;              Exit command
;   ------------------------------------
~LShift & ESC::ExitApp