// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){function h(a,d=5){if(k(a.params)){let c=a.params.allowedValues;if(c){c=c.map(b=>JSON.stringify(b));if(c.length>d){const b="("+(c.length-d)+" more...)";c=c.slice(0,d);c.push(b)}a.message="should be equal to one of: "+c.join(", ")}}else l(a.params)&&(a.message="should NOT have additional property: "+a.params.additionalProperty);return a}function k(a){return null!=(a&&a.allowedValues)}function l(a){return null!=(a&&a.additionalProperty)}g.convertAjvErrors=function(a,d=
10){const c={};a=a.map(h).map((b,e)=>({e:b,i:e})).sort(({e:b,i:e},{e:f,i:m})=>{b=b.dataPath?b.dataPath.split(".").length:0;f=f.dataPath?f.dataPath.split(".").length:0;return b===f?e-m:f-b}).map(({e:b})=>`${b.dataPath?b.dataPath+": ":""}${b.message}`).filter(b=>{const e=!c[b];c[b]=!0;return e});if(a.length>d){const b="("+(a.length-d)+" more...)";a=a.slice(0,d);a.push(b)}return a};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});