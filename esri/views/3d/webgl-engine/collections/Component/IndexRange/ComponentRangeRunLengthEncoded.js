// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(h){let l=function(){function k(b){this._totalCount=b;this._indexRanges=[0,b]}var f=k.prototype;f.allVisible=function(){return this.componentCount()===this._totalCount};f.allInvisible=function(){return 0===this._indexRanges.length};f.componentCount=function(){const b=this._indexRanges;let c=0;for(let a=0;a<b.length;a+=2)c+=b[a+1];return c};f.reset=function(b){if("all"===b||b.length===this._totalCount)this._indexRanges=[0,this._totalCount];else{{const d=[];if(0!==b.length){var c=
b[0],a=1;for(let e=1;e<b.length;e++){const g=b[e];c+a===g?a+=1:(d.push(c),d.push(a),c=g,a=1)}d.push(c);d.push(a)}b=d}this._indexRanges=b}};f.forEachComponent=function(b){const c=this._indexRanges;for(let d=0;d<c.length;d+=2){var a=c[d];const e=a+c[d+1];for(;a<e;a++)if(!b(a))return!1}return!0};f.forEachComponentRange=function(b){const c=this._indexRanges;for(let a=0;a<c.length;a+=2){const d=c[a];if(!b(d,d+c[a+1]))return!1}return!0};f.computeOffsetRanges=function(b){const c=Array(this._indexRanges.length),
a=this._indexRanges;for(let e=0;e<a.length;e+=2){var d=a[e];const g=b[d];d=b[d+a[e+1]];c[e]=g;c[e+1]=d-g}return c};return k}();h.ComponentRangeRunLengthEncoded=l;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});