function serviceHeader(){return new ServiceHeader(17,"Multitran",'<a href="http://www.multitran.ru/">http://www.multitran.ru/</a>'+Const.NL+"Copyright \u00a9 Multitran. All rights reserved.",Capability.DICTIONARY)}function serviceHost(b,a,c){return"multitran.ru"}function serviceLink(b,a,c){return"http://www.multitran.ru/c/m.exe?s="+encodeGetParam(b)}
SupportedLanguages=[-1,-1,31,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,24,1,26,-1,-1,4,-1,3,-1,-1,-1,-1,-1,-1,-1,23,-1,28,-1,-1,27,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,34,-1,-1,-1,-1,-1];function serviceDictionaryRequest(b,a,c){b=buildUri(b,a,c);return new RequestData(HttpMethod.GET,b,null,null,CodePage.WINDOWS1251)}
function serviceDictionaryResponse(b,a,c,e){var d;if(a=midString(a,'<table border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#DBDBDB"','<a name="phrases">',!1))a=removeAttributes("<table><tr><td "+a,["id","name","class","STYLE"]),a=removeTags(a,["font"]),a=a.replace(/href=\"m.exe/gi,'href="http://www.multitran.ru/c/m.exe'),a=a.replace(/#DBDBDB/gi,"#aaaaaa"),d=serviceHost(Capability.DICTIONARY,c,e),b=buildUri(b,c,e),d="http://"+d+b;return new ResponseData(a,c,e,d)}
function buildUri(b,a,c){b=format("/c/m.exe?l1={0}&l2={1}&s={2}",codeFromLanguage(c),codeFromLanguage(a),encodeGetParam(b));"ru"!=Options.LanguageCode&&(b+="&SHL=1");return b};
