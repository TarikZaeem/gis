// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../route/utils ./DirectionsString ../../geometry/Point".split(" "),function(m,c,a,n,d,t,u,g,p,q,r,h){a=function(k){function f(b){b=k.call(this,b)||this;b.arriveTime=null;b.arriveTimeOffset=null;
b.geometry=null;b.strings=null;return b}m._inheritsLoose(f,k);var l=f.prototype;l.readArriveTimeOffset=function(b,e){return q.getTimezoneOffset(e.ETA,e.arriveTimeUTC)};l.readGeometry=function(b,e){return h.fromJSON(e.point)};return f}(n.JSONSupport);c.__decorate([d.property({type:Date,json:{read:{source:"arriveTimeUTC"}}})],a.prototype,"arriveTime",void 0);c.__decorate([d.property()],a.prototype,"arriveTimeOffset",void 0);c.__decorate([g.reader("arriveTimeOffset",["arriveTimeUTC","ETA"])],a.prototype,
"readArriveTimeOffset",null);c.__decorate([d.property({type:h})],a.prototype,"geometry",void 0);c.__decorate([g.reader("geometry",["point"])],a.prototype,"readGeometry",null);c.__decorate([d.property({type:[r]})],a.prototype,"strings",void 0);return a=c.__decorate([p.subclass("esri.rest.support.DirectionsEvent")],a)});