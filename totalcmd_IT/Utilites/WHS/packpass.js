// � �������� ������� ��������� ���� � ������� 
// ���������c� ������������� %commander_path% 
// ��������� ������: ������_���_�������� %S 
// �����: LocKtaR-o-DarK
// ����������� �� DimitarSerg (������, ��� ������������ ��������) 21_�����_2012

//--------------------------------------------------------------
// ��� AskParam ������ ���������� ������ ��������� �������� ���:
// /c"�������� �������������� ������" /t"������� ������" /p"�������� ����� � ����� � �������� �������:" %%commander_path%%\Utilites\WHS\packpass.js %%1 %S
//--------------------------------------------------------------

objFolder='' 
outDir=WScript.CreateObject('WScript.Shell').CurrentDirectory.replace(/\//gi,'\\')+'\\' 
objFolder=outDir.replace(/.*\\([^\\]*)\\/,'$1') 
if (objFolder==''){objFolder='Root'} 
strArg='' 
argPass='' 					
argPass=WScript.Arguments(0)			// ������ �������� (������� ������� ������� ����������) - ������
for (i=1;i<WScript.Arguments.length;i++){ 	// ��� ��������� ��������� - ����� ��� ������������:)
strArg+=' "'+WScript.Arguments(i)+'"'} 
cmd='cmd /c title RaR-packing secure...&%commander_path%\\Plugins\\arc\\rar a -m5 -os -s -ep1 -ag_[yyyy.mm.dd-hh.mm] -hp'+argPass+' "'+objFolder+'.rar"'+strArg
WScript.CreateObject('WScript.Shell').Run(cmd,2)