// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers"],function(p){const q=(e,k)=>e<k?-1:e>k?1:0;return function(){function e(a=q){this._data=[];this._compare=a}var k=e.prototype;k.enqueue=function(a){if(null!=a){var {_data:b,_compare:l}=this;b.push(a);a=b.length-1>>>0;for(var c=b[a];0<a;){const f=a-1>>1,g=b[f];if(0>=l(g,c))b[f]=c,b[a]=g,a=f;else break}}};k.dequeue=function(){const {_data:a,_compare:b}=this,l=a[0];var c=a.pop();if(0===a.length)return l;a[0]=c;c=0;const f=a.length,g=a[0];let m;let d=null;
for(;;){var h=2*c+1;const n=2*c+2;d=null;h<f&&(m=a[h],0<b(m,g)&&(d=h));n<f&&(h=a[n],null===d&&0>=b(h,g)||null!==d&&0>=b(h,m))&&(d=n);if(null===d)break;a[c]=a[d];a[d]=g;c=d}return l};p._createClass(e,[{key:"size",get:function(){return this._data.length}}]);return e}()});