function serviceHeader(){return new ServiceHeader(13,"Babylon",'<a href="http://translation.babylon.com/">http://translation.babylon.com/</a>'+Const.NL+"Copyright \u00a9 1997-2015 Babylon Ltd. All Rights Reserved to Babylon Translation Software.",Capability.TRANSLATE)}function serviceHost(a,b,c){return"translation.babylon.com"}function serviceLink(a,b,c){return"http://translation.babylon.com/"}
SupportedLanguages=[-1,-1,-1,-1,-1,15,-1,-1,-1,-1,99,10,9,-1,31,43,4,0,-1,-1,-1,1,-1,6,11,-1,14,60,30,-1,-1,2,-1,8,-1,12,-1,-1,-1,-1,-1,46,51,29,5,47,7,-1,-1,-1,3,-1,48,16,13,49,39,-1,-1,-1,-1,-1,-1,-1,-1,-1];function serviceTranslateRequest(a,b,c){a=format("/translate/babylon.php?v=1.0&q={0}&langpair={1}%7C{2}&callback=callbackFn&context=babylon",encodeGetParam(a),codeFromLanguage(b),codeFromLanguage(c));return new RequestData(HttpMethod.GET,a)}
function serviceTranslateResponse(a,b,c,e){if(a=b){b=a.indexOf("(");if(-1!==b){var d=a.lastIndexOf(")");-1!==d&&(a=a.slice(b+1,d),a="["+a+"]")}(b=eval(a))&&2<b.length&&(b=b[1])&&(a=stripHtml(b.translatedText),a=a.replace(/\*/g,Const.NL))}return new ResponseData(a,c,e)};
