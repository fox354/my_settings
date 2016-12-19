Option Explicit 
Dim FSO, TCS, F1, F2, Str1, Str2, Str3, Str4, Text1, Text2 
Set FSO = CreateObject("Scripting.FileSystemObject") 
On Error Resume Next 
Set TCS = CreateObject("TCScript.Helper") 
If Err.Number <> 0 Then 
  Err.Clear 
  TCScriptHelperRegistration 
  If Err.Number  = 0 Then Set TCS = CreateObject("TCScript.Helper") 
  If Err.Number <> 0 Then 
    MsgBox """TCScript.Helper"" в системе не зарегистрирован!", vbCritical, "Ошибка" 
    WScript.Quit Err.Number 
  End If 
End If 
On Error GoTo 0
F1 = "%COMMANDER_PATH%\bars\Bar_01.bar"
Str1 = "button29=wcmicons.dll,225"
Str2 = "button29=wcmicons.dll,224"
F2   = "%COMMANDER_PATH%\WinCmd.ini" 
Str3 = "[Associations]" 
Str4 = "[-Associations]" 

F1 = FSO.GetAbsolutePathName(CreateObject("WScript.Shell").ExpandEnvironmentStrings(F1)) 
F2 = FSO.GetAbsolutePathName(CreateObject("WScript.Shell").ExpandEnvironmentStrings(F2)) 

Text1 = FSO.OpenTextFile(F1, 1).ReadAll 
Text2 = FSO.OpenTextFile(F2, 1).ReadAll 
If bCheck Then 
  Text1 = Replace(Text1, Str2, Str1, 1, -1, 1) 
  Text2 = Replace(Text2, Str4, Str3, 1, -1, 1) 
Else 
  Text1 = Replace(Text1, Str1, Str2, 1, -1, 1) 
  Text2 = Replace(Text2, Str3, Str4, 1, -1, 1) 
End If 
FSO.OpenTextFile(F1, 2).Write Text1 
FSO.OpenTextFile(F2, 2).Write Text2 

With TCS 
  .LockTC True 
  .Pause = 100 
  .SendCommand   "cm_ButtonConfig" 
  .SendKeystroke "{Tab}" 
  .SendKeystroke "{Enter}" 
  .SendCommand   "cm_InternalAssociate" 
  .SendKeystroke "{Enter}" 
End With 

Set TCS = Nothing 
Set FSO = Nothing 
WScript.Quit

Function bCheck() 
   Dim sFile 
   sFile=WScript.ScriptFullName 
   bCheck=TCS.INIRead(sFile, "Ass", "Line", 0) 
   TCS.INIWrite sFile, "Ass", "Line", Not bCheck 
End Function 

[Ass] 
Line =0

'Процедура регистрации TCScript.Helper 
Sub TCScriptHelperRegistration 
  Dim HelperPath, Sudo 
  '===== Изменяемые параметры =============================== 
  'Путь к TCWSHelp.exe 
  HelperPath = "%Commander_Path%\Utilites\WHS\TCWSHelp.exe" 
  'Путь к утилите Sudo 
  Sudo       = "%Commander_Path%\Utilites\WHS\Sudo.exe" 
  '========================================================== 
  With CreateObject("WScript.Shell") 
    HelperPath = .ExpandEnvironmentStrings(HelperPath) 
    Sudo       = .ExpandEnvironmentStrings(Sudo) 
    CreateObject("WScript.Shell").Run """" & Sudo & """ """ & HelperPath & """ /REGSERVER", 7, True 
  End With 
End Sub
