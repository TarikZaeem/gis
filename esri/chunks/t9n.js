// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./index","./locale"],function(c,l,m){async function n(a,b){const d=`${b}_${a}`;if(e[d])return e[d];e[d]=fetch(l.getAssetPath(`./assets/${b}/t9n/messages_${a}.json`)).then(g=>{g.ok||h();return g.json()}).catch(()=>h());return e[d]}function h(){throw Error("could not fetch component message bundle");}function f(a){a.messages={...a.defaultMessages,...a.messageOverrides}}async function k(a,b){({el:a}=a);a=a.tagName.toLowerCase().replace("calcite-","");return n(m.getSupportedLocale(b,
"t9n"),a)}function p(){f(this)}const e={};c.connectMessages=function(a){a.onMessagesChange=p};c.disconnectMessages=function(a){a.onMessagesChange=void 0};c.setUpMessages=async function(a){a.defaultMessages=await k(a,a.effectiveLocale);f(a)};c.updateMessages=async function(a,b){a.defaultMessages=await k(a,b);f(a)}});