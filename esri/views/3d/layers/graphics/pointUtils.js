// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/coordsUtils ../../../../layers/graphics/dehydratedFeatures ./elevationAlignmentUtils ./graphicUtils ../../webgl-engine/lib/Object3D".split(" "),function(f,k,n,h,p,l,m,q,r,t){const d=n.create();f.createStageObject=function(a,b,c,u,e,v){var g=a.clippingExtent;h.projectPointToVector(b,d,a.elevationProvider.spatialReference);if(k.isSome(g)&&
!p.containsPoint(g,d))return null;h.projectPointToVector(b,d,a.renderCoordsHelper.spatialReference);g=a.localOriginFactory.getOrigin(d);e=new t.Object3D({castShadow:!1,metadata:{layerUid:a.layer.uid,graphicUid:e,usesVerticalDistanceToGround:!0}});c.shaderTransformer=v;c.localOrigin=g;e.addGeometry(c);a=q.applyElevationAlignmentForHUD(e,b,a.elevationProvider,a.renderCoordsHelper,u);return{object:e,sampledElevation:a}};f.extendPointGraphicElevationContext=function(a,b,c){a=a.elevationContext;c=c.spatialReference;
h.projectPointToVector(b,d,c);a.centerPointInElevationSR=m.makeDehydratedPoint(d[0],d[1],b.hasZ?d[2]:0,k.isSome(c)?c:null)};f.placePointOnGeometry=function(a){switch(a.type){case "point":return a;case "polygon":case "extent":return r.computeCentroid(a);case "polyline":var b=a.paths[0];if(!b||0===b.length)break;b=l.getPointOnPath(b,l.getPathLength(b)/2);return m.makeDehydratedPoint(b[0],b[1],b[2],a.spatialReference);case "mesh":return a.origin}return null};Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});