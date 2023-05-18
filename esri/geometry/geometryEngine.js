// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/geometryEngineBase","./geometryAdapters/hydrated"],function(c,p,d,e){function f(a){return Array.isArray(a)?a[0].spatialReference:a&&a.spatialReference}function l(a){return"xmin"in a?"center"in a?a.center:null:"x"in a?a:"extent"in a?a.extent?.center??null:null}let k=function(a){function b(){return a.call(this,"Illegal Argument Exception")||this}p._inheritsLoose(b,a);return b}(p._wrapNativeSuper(Error));c.buffer=function(a,b,g,h=!1){return d.GeometryEngineApi.buffer(e.hydratedAdapter,
f(a),a,b,g,h)};c.changeDefaultSpatialReferenceTolerance=function(a,b){d.GeometryEngineApi.changeDefaultSpatialReferenceTolerance(a,b)};c.clearDefaultSpatialReferenceTolerance=function(a){d.GeometryEngineApi.clearDefaultSpatialReferenceTolerance(a)};c.clip=function(a,b){return d.GeometryEngineApi.clip(e.hydratedAdapter,f(a),a,b)};c.contains=function(a,b){return d.GeometryEngineApi.contains(e.hydratedAdapter,f(a),a,b)};c.convexHull=function(a,b=!1){return d.GeometryEngineApi.convexHull(e.hydratedAdapter,
f(a),a,b)};c.crosses=function(a,b){return d.GeometryEngineApi.crosses(e.hydratedAdapter,f(a),a,b)};c.cut=function(a,b){return d.GeometryEngineApi.cut(e.hydratedAdapter,f(a),a,b)};c.densify=function(a,b,g){return d.GeometryEngineApi.densify(e.hydratedAdapter,f(a),a,b,g)};c.difference=function(a,b){return d.GeometryEngineApi.difference(e.hydratedAdapter,f(a),a,b)};c.disjoint=function(a,b){return d.GeometryEngineApi.disjoint(e.hydratedAdapter,f(a),a,b)};c.distance=function(a,b,g){return d.GeometryEngineApi.distance(e.hydratedAdapter,
f(a),a,b,g)};c.equals=function(a,b){return d.GeometryEngineApi.equals(e.hydratedAdapter,f(a),a,b)};c.extendedSpatialReferenceInfo=function(a){return d.GeometryEngineApi.extendedSpatialReferenceInfo(a)};c.flipHorizontal=function(a,b){if(null==a)throw new k;const g=a.spatialReference;b=b??l(a);if(null==b)throw new k;a=a.constructor.fromJSON(d.GeometryEngineApi.flipHorizontal(a,b));a.spatialReference=g;return a};c.flipVertical=function(a,b){if(null==a)throw new k;const g=a.spatialReference;b=b??l(a);
if(null==b)throw new k;a=a.constructor.fromJSON(d.GeometryEngineApi.flipVertical(a,b));a.spatialReference=g;return a};c.generalize=function(a,b,g,h){return d.GeometryEngineApi.generalize(e.hydratedAdapter,f(a),a,b,g,h)};c.geodesicArea=function(a,b,g){return d.GeometryEngineApi.geodesicArea(e.hydratedAdapter,f(a),a,b,g)};c.geodesicBuffer=function(a,b,g,h,m,n){return d.GeometryEngineApi.geodesicBuffer(e.hydratedAdapter,f(a),a,b,g,h,m,n)};c.geodesicDensify=function(a,b,g,h=0){return d.GeometryEngineApi.geodesicDensify(e.hydratedAdapter,
f(a),a,b,g,h)};c.geodesicLength=function(a,b,g){return d.GeometryEngineApi.geodesicLength(e.hydratedAdapter,f(a),a,b,g)};c.intersect=function(a,b){return d.GeometryEngineApi.intersect(e.hydratedAdapter,f(a),a,b)};c.intersectLinesToPoints=function(a,b){return d.GeometryEngineApi.intersectLinesToPoints(e.hydratedAdapter,f(a),a,b)};c.intersects=function(a,b){return d.GeometryEngineApi.intersects(e.hydratedAdapter,f(a),a,b)};c.isSimple=function(a){return d.GeometryEngineApi.isSimple(e.hydratedAdapter,
f(a),a)};c.nearestCoordinate=function(a,b,g=!0){return d.GeometryEngineApi.nearestCoordinate(e.hydratedAdapter,f(a),a,b,g)};c.nearestVertex=function(a,b){return d.GeometryEngineApi.nearestVertex(e.hydratedAdapter,f(a),a,b)};c.nearestVertices=function(a,b,g,h){return d.GeometryEngineApi.nearestVertices(e.hydratedAdapter,f(a),a,b,g,h)};c.offset=function(a,b,g,h,m,n){return d.GeometryEngineApi.offset(e.hydratedAdapter,f(a),a,b,g,h,m,n)};c.overlaps=function(a,b){return d.GeometryEngineApi.overlaps(e.hydratedAdapter,
f(a),a,b)};c.planarArea=function(a,b){return d.GeometryEngineApi.planarArea(e.hydratedAdapter,f(a),a,b)};c.planarLength=function(a,b){return d.GeometryEngineApi.planarLength(e.hydratedAdapter,f(a),a,b)};c.relate=function(a,b,g){return d.GeometryEngineApi.relate(e.hydratedAdapter,f(a),a,b,g)};c.rotate=function(a,b,g){if(null==a)throw new k;const h=a.spatialReference;g=g??l(a);if(null==g)throw new k;a=a.constructor.fromJSON(d.GeometryEngineApi.rotate(a,b,g));a.spatialReference=h;return a};c.simplify=
function(a){return d.GeometryEngineApi.simplify(e.hydratedAdapter,f(a),a)};c.symmetricDifference=function(a,b){return d.GeometryEngineApi.symmetricDifference(e.hydratedAdapter,f(a),a,b)};c.touches=function(a,b){return d.GeometryEngineApi.touches(e.hydratedAdapter,f(a),a,b)};c.union=function(a,b=null){return d.GeometryEngineApi.union(e.hydratedAdapter,f(a),a,b)};c.within=function(a,b){return d.GeometryEngineApi.within(e.hydratedAdapter,f(a),a,b)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});