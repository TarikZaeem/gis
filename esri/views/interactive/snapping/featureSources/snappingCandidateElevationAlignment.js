// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/LRUCache ../../../../core/MapUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/unitUtils ../../../../symbols/support/unitConversionUtils".split(" "),function(r,p,E,v,w,q,x,y,z){function t(g,{x:f,y:b,z:a}){return`${g}-${f}-${b}-${a??0}}`}function A(){return[]}let B=function(){function g(){}var f=g.prototype;f.alignCandidates=function(){var b=p._asyncToGenerator(function*(a,c){return a});
return function(a,c){return b.apply(this,arguments)}}();f.notifyElevationSourceChange=function(){};return g}(),D=function(){function g(b,a,c){this._elevationInfo=b;this._alignPointsInFeatures=a;this.spatialReference=c;this._alignmentsCache=new v(1024);this._cacheVersion=0;this._metersPerVerticalUnit=y.getMetersPerVerticalUnitForSR(c)}var f=g.prototype;f.alignCandidates=function(){var b=p._asyncToGenerator(function*(a,c){const d=this._elevationInfo;return q.isSome(d)&&"absolute-height"===d.mode&&!d.featureExpressionInfo?
(this._alignAbsoluteElevationCandidates(a,d),a):this._alignComputedElevationCandidates(a,c)});return function(a,c){return b.apply(this,arguments)}}();f.notifyElevationSourceChange=function(){this._alignmentsCache.clear();this._cacheVersion++};f._alignAbsoluteElevationCandidates=function(b,a){const {offset:c,unit:d}=a;if(!q.isNone(c)){a=z.getMetersPerUnit(d??"meters")/this._metersPerVerticalUnit;a*=c;for(const e of b)switch(e.type){case "edge":e.start.z+=a;e.end.z+=a;continue;case "vertex":e.target.z+=
a}}};f._alignComputedElevationCandidates=function(){var b=p._asyncToGenerator(function*(a,c){var d=new Map;for(const k of a)w.getOrCreateMapValue(d,k.objectId,A).push(k);const [e,h,l]=this._prepareQuery(d);d=yield this._alignPointsInFeatures(e,c);x.throwIfAborted(c);if(l!==this._cacheVersion)return this._alignComputedElevationCandidates(a,c);this._applyCacheAndResponse(e,d,h);const {drapedObjectIds:m,failedObjectIds:n}=d;c=[];for(const k of a)({objectId:a}=k),m.has(a)&&"edge"===k.type&&(k.draped=
!0),n.has(a)||c.push(k);return c});return function(a,c){return b.apply(this,arguments)}}();f._prepareQuery=function(b){const a=[],c=[];for(const [d,e]of b){b=[];for(const h of e)this._addToQueriesOrCachedResult(d,h.target,b,c),"edge"===h.type&&(this._addToQueriesOrCachedResult(d,h.start,b,c),this._addToQueriesOrCachedResult(d,h.end,b,c));0!==b.length&&a.push({objectId:d,points:b})}return[a,c,this._cacheVersion]};f._addToQueriesOrCachedResult=function(b,a,c,d){b=t(b,a);b=this._alignmentsCache.get(b);
q.isSome(b)?d.push(new C(a,b)):c.push(a)};f._applyCacheAndResponse=function(b,{elevations:a,drapedObjectIds:c,failedObjectIds:d},e){for(var h of e)h.apply();e=0;h=this._alignmentsCache;for(const {objectId:l,points:m}of b)if(d.has(l))e+=m.length;else{b=!c.has(l);for(const n of m){const k=t(l,n),u=a[e++];n.z=u;b&&h.put(k,u,1)}}};return g}(),C=function(){function g(f,b){this.point=f;this.z=b}g.prototype.apply=function(){this.point.z=this.z};return g}();r.getSnappingCandidateElevationAligner=function(g=
!1,f){if(g){const {elevationInfo:b,alignPointsInFeatures:a,spatialReference:c}=f;return new D(b,a,c)}return new B};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});