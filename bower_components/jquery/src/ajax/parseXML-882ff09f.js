define(["../core"],function(t){return t.parseXML=function(e){var n,i;if(!e||"string"!=typeof e)return null;try{i=new DOMParser,n=i.parseFromString(e,"text/xml")}catch(r){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&t.error("Invalid XML: "+e),n},t.parseXML});