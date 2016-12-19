'********************************************************************
' ���: CreateFolderWithNameDate.vbs
' ����: VBScript
' �����������: ��������� ������� aka ApceH Hypocrite
' ��������: ������ � ��������� ����� ����� ����� � ������� ����� � ��������.
'           ���� ����� ��� ����������, � ����� ����������� ����� � �������.
'********************************************************************

Option Explicit
Dim ws,FSO,Target,NewTarget,CurDate,CurTime,DirName,Number

On Error Resume Next 

If (WScript.Arguments.Count <> 1) Then
 MsgBox "������ ������������ ��� ������� � ������ Total Commander!" & vbCrlf & vbCrlf & "������ ������� ����� 1 ��������:" & vbCrlf & "� ����� ���������� (������ ""%P"")" & vbCrlf & vbCrlf & "��������!" & vbCrlf & "� ����� ��������� � ������� ���������, ���������� �������.", vbOKOnly+vbCritical, "������������ �������������" 
 WScript.Quit
End If

Set FSO = CreateObject("Scripting.FileSystemObject")
Target  = WScript.Arguments(0)

CurDate = Date
CurTime = Time
DirName = Year(CurDate) & "-" & Right("0" & Month(CurDate), 2) & "-" & Right("0" & Day(CurDate), 2) & "." & Right("0" & Hour(CurTime), 2) & "-" & Right("0" & Minute(CurTime), 2)

NewTarget = Target & "\" & DirName
If Not FSO.FolderExists(NewTarget) Then 
 FSO.CreateFolder(NewTarget)
Else
 Number = 2
 NewTarget = NewTarget & " ("
 Do While FSO.FolderExists(NewTarget & Number & ")")
  Number = Number + 1
 Loop
 FSO.CreateFolder(NewTarget & Number & ")")
End If

Set ws = WScript.CreateObject("WScript.Shell")
ws.SendKeys "^R"

On Error Goto 0
'************* ����� ************************************************
