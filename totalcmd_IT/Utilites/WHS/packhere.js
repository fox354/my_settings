// � �������� ������� ��������� ���� � ������� 
// ���������c� ������������� %commander_path% 
// ��������� ������: %S 
objFolder='' 
outDir=WScript.CreateObject('WScript.Shell').CurrentDirectory.replace(/\//gi,'\\')+'\\' 
objFolder=outDir.replace(/.*\\([^\\]*)\\/,'$1') 
if (objFolder==''){objFolder='Root'} 
strArg='' 
for (i=0;i<WScript.Arguments.length;i++){ 
strArg+=' "'+WScript.Arguments(i)+'"'} 
cmd='cmd /c title RaR-packing...&%commander_path%\\Plugins\\arc\\rar a -m5 -os -s -ep1 "'+objFolder+'.rar"'+strArg 
WScript.CreateObject('WScript.Shell').Run(cmd,2)