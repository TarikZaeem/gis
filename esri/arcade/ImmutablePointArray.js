// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers","./ImmutableArray","../geometry/Point"],function(l,m,f){return function(k){function g(a,b,c,d,e,n){a=k.call(this,a)||this;a._lazyPt=[];a._hasZ=!1;a._hasM=!1;a._spRef=b;a._hasZ=c;a._hasM=d;a._cacheId=e;a._partId=n;return a}l._inheritsLoose(g,k);var h=g.prototype;h.get=function(a){if(void 0===this._lazyPt[a]){const b=this._elements[a];if(void 0===b)return;const c=this._hasZ,d=this._hasM;let e=null;e=c&&!d?new f(b[0],b[1],b[2],void 0,this._spRef):d&&!c?new f(b[0],
b[1],void 0,b[2],this._spRef):c&&d?new f(b[0],b[1],b[2],b[3],this._spRef):new f(b[0],b[1],this._spRef);e.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+a.toString();this._lazyPt[a]=e}return this._lazyPt[a]};h.equalityTest=function(a){return a===this?!0:null===a||!1===a instanceof g?!1:a.getUniqueHash()===this.getUniqueHash()};h.getUniqueHash=function(){return this._cacheId.toString()+"-"+this._partId.toString()};return g}(m)});