// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){e.findInMap=function(a,d){for(const [b,c]of a)if(d(c,b))return c;return null};e.first=function(a){a=a.values().next();return!0!==a.done?a.value:null};e.getOrCreateMapValue=function(a,d,b){const c=a.get(d);if(void 0!==c)return c;b=b();a.set(d,b);return b};e.someMap=function(a,d){for(const [b,c]of a)if(d(c,b))return!0;return!1};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});