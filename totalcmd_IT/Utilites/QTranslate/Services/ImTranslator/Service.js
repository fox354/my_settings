function serviceHeader(){return new ServiceHeader(18,"ImTranslator",'<a href="http://imtranslator.net/">http://imtranslator.net/</a>'+Const.NL+"Copyright \u00a9 2013 Smart Link Corporation. All rights reserved.",Capability.DICTIONARY)}function serviceHost(a,b,c){return"imtranslator.net"}function serviceLink(a,b,c){return"http://dictionary.imtranslator.net/"}
SupportedLanguages=[-1,"","af","az","sq","ar","hy","eu","be","bg","ca","zh","zt","hr","cs","da","nl","en","et","fi","tl","fr","gl","de","el","ht","iw","hi","hu","is","id","it","ga","ja","ka","ko","lv","lt","mk","ms","mt","no","fa","pl","pt","ro","ru","sr","sk","sl","es","sw","sv","th","tr","uk","ur","vi","cy","yi","eo","hmn","la","lo",-1,-1];
function serviceDictionaryRequest(a,b,c){a=format("/translation/dictionary/DicService.asmx/lookup?text={0}&dicID=&mydicID=%7B7D05B000-6B7D-11D3-93C5-006052077C13%7D&lang={1}%2F{2}&langs={1}%2F{2}&flags=DEFAULT",encodeGetParam(a),codeFromLanguage(b),codeFromLanguage(c));return new RequestData(HttpMethod.GET,a)}
function serviceDictionaryResponse(a,b,c,d){a=midString(b,'<translation status="ok" format="html">',"</translation>",!1);a=unquoteHtml(a);b=serviceHost(Capability.DICTIONARY,c,d);b=format("http://{0}/translation/",b);return new ResponseData(a,c,d,b)};
