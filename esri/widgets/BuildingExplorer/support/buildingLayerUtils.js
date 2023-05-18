// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe"],function(d,f){function h(a,b){for(const c of a.allSublayers.items)if((a="building-component"===c.type?c.getFieldDomain?.(b):null)&&"coded-value"===a.type)return a;return null}function k(a,b){a=a.summaryStatistics?.fields??[];const c=b.toLowerCase();return a.find(e=>e.modelName?.toLowerCase()===c)??null}const l=a=>b=>{const c=a.toLowerCase();return b.sublayers.find(e=>e.modelName?.toLowerCase()===c)??null},m=l("fullmodel"),n=l("overview");d.findFieldCodedValueDomain=
h;d.findFieldInfoByModelName=function(a,b){b=k(a,b);if(f.isNone(b))return null;const c=b.fieldName;if(f.isNone(c)||!c)return null;a=h(a,c);const e=new Map;for(const g of b.mostFrequentValues??[])"number"===typeof g&&e.set(g,f.isSome(a)?a.getName(g):String(g));return{fieldName:c,fieldValueMap:e}};d.findFieldStatisticsByModelName=k;d.findFullModelSublayer=m;d.findOverviewSublayer=n;d.showFullModel=function(a){const b=m(a);f.isSome(b)&&(b.visible=!0);a=n(a);f.isSome(a)&&(a.visible=!1)};Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});