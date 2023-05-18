// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/jsonMap ../../../core/maybe ../../../core/unitUtils ../../../geometry/projection ../../../geometry/support/extentUtils ../../../geometry/support/jsonUtils ../../../geometry/support/normalizeUtils ../../../geometry/support/spatialReferenceUtils ../featureConversionUtils ../OptimizedGeometry ./projectionSupport".split(" "),function(G,l,p,H,q,I,J,K,m,L,n,k,v,r){function w(){w=p._asyncToGenerator(function*(a,b,e){const {outFields:c,
orderByFields:f,groupByFieldsForStatistics:g,outStatistics:h}=a;if(c)for(var d=0;d<c.length;d++)c[d]=c[d].trim();if(f)for(d=0;d<f.length;d++)f[d]=f[d].trim();if(g)for(d=0;d<g.length;d++)g[d]=g[d].trim();if(h)for(d=0;d<h.length;d++)h[d].onStatisticField&&(h[d].onStatisticField=h[d].onStatisticField.trim());a.geometry&&!a.outSR&&(a.outSR=a.geometry.spatialReference);return D(a,b,e)});return w.apply(this,arguments)}function D(a,b,e){return x.apply(this,arguments)}function x(){x=p._asyncToGenerator(function*(a,
b,e){if(!a)return null;var {where:c}=a;a.where=c=c&&c.trim();if(!c||/^1 *= *1$/.test(c)||b&&b===c)a.where=null;if(!a.geometry)return a;b=yield M(a);a.distance=0;a.units=null;"esriSpatialRelEnvelopeIntersects"===a.spatialRel&&({spatialReference:c}=a.geometry,b=K.getGeometryExtent(b),b.spatialReference=c);if(b){yield r.checkProjectionSupport(b.spatialReference,e);c=b.spatialReference;b=E(b,e)&&m.isExtent(b)?{spatialReference:c,rings:[[[b.xmin,b.ymin],[b.xmin,b.ymax],[b.xmax,b.ymax],[b.xmax,b.ymin],
[b.xmin,b.ymin]]]}:b;c=(yield L.normalizeCentralMeridian(m.fromJSON(b)))[0];if(q.isNone(c))throw y;const f="quantizationParameters"in a&&a.quantizationParameters?.tolerance||"maxAllowableOffset"in a&&a.maxAllowableOffset||0;b=f&&E(b,e)?{densificationStep:8*f}:void 0;c=c.toJSON();b=yield r.project(c,c.spatialReference,e,b);if(!b)throw y;b.spatialReference=e;a.geometry=b}return a});return x.apply(this,arguments)}function E(a,b){if(!a)return!1;const e=a.spatialReference;return(m.isExtent(a)||m.isPolygon(a)||
m.isPolyline(a))&&!n.equals(e,b)&&!J.canProjectWithoutEngine(e,b)}function M(a){return z.apply(this,arguments)}function z(){z=p._asyncToGenerator(function*(a){const {distance:b,units:e}=a,c=a.geometry;if(null==b||"vertexAttributes"in c)return c;var f=c.spatialReference;a=e?N.fromJSON(e):I.getUnitString(f);f=f&&(n.isGeographic(f)||n.isWebMercator(f))?c:yield r.checkProjectionSupport(f,n.WGS84).then(()=>r.project(c,n.WGS84));return(yield O())(f.spatialReference,f,b,a)});return z.apply(this,arguments)}
function O(){return A.apply(this,arguments)}function A(){A=p._asyncToGenerator(function*(){return(yield new Promise((a,b)=>G(["../../../geometry/geometryEngineJSON"],a,b))).geodesicBuffer});return A.apply(this,arguments)}const N=new H.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),y=Object.freeze({}),F=new v,P=new v,B=new v,C={esriGeometryPoint:k.convertToPoint,
esriGeometryPolyline:k.convertToPolyline,esriGeometryPolygon:k.convertToPolygon,esriGeometryMultipoint:k.convertToMultipoint},Q=(a,b)=>"_geVersion"!==a?b:void 0;l.QUERY_ENGINE_EMPTY_RESULT=y;l.cleanFromGeometryEngine=function(a){return a&&"_geVersion"in a?JSON.parse(JSON.stringify(a,Q)):a};l.getGeometry=function(a,b,e,c,f,g,h=b,d=e){const t=b&&h,u=e&&d;c=q.isSome(c)?"coords"in c?c:c.geometry:null;if(q.isNone(c))return null;if(f)return b=k.generalizeOptimizedGeometry(P,c,b,e,a,f,h,d),g&&(b=k.quantizeOptimizedGeometry(B,
b,t,u,a,g)),C[a]?.(b,t,u)??null;if(g)return g=k.quantizeOptimizedGeometry(B,c,b,e,a,g,h,d),C[a]?.(g,t,u)??null;k.removeZMValues(F,c,b,e,h,d);return C[a]?.(F,t,u)??null};l.normalizeQuery=function(a,b,e){return w.apply(this,arguments)};l.normalizeQueryLike=D;l.transformCentroid=function(a,b,e,c=a.hasZ,f=a.hasM){if(q.isNone(b))return null;const g=a.hasZ&&c,h=a.hasM&&f;return e?(a=k.quantizeOptimizedGeometry(B,b,a.hasZ,a.hasM,"esriGeometryPoint",e,c,f),k.convertToPoint(a,g,h)):k.convertToPoint(b,g,h)};
Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});