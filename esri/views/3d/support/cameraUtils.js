// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Camera ../../../core/Cyclical ../../../core/Logger ../../../core/mathUtils ../../../core/maybe ../../../core/promiseUtils ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/ellipsoidUtils ../../../geometry/Point ../../../geometry/projection ../../../geometry/SpatialReference ../../ViewingMode ../camera/intersectionUtils ../../../chunks/cameraUtilsPlanar ../../../chunks/cameraUtilsSpherical ./earthUtils ./ElevationProvider ../../support/spatialReferenceSupport".split(" "),
function(l,M,N,O,Y,C,n,Z,x,r,aa,u,p,y,H,ba,P,Q,ca,R,da){function v(a){return"global"===a.viewingMode?Q.cameraUtilsSpherical:P.cameraUtilsPlanar}function S(a,b,c){const d=a.state.camera,f=d.width/2/d.pixelRatio;a.renderCoordsHelper.viewingMode===H.ViewingMode.Global&&null!=c&&(b*=Math.cos(C.deg2rad(c)));b/=a.renderCoordsHelper.unitInMeters;return f/(96*39.37/b)/Math.tan(d.fovX/2)}function T(a,b,c){const d=a.state.camera;b=96*39.37/(d.width/2/d.pixelRatio/(b*Math.tan(d.fovX/2)));a.renderCoordsHelper.viewingMode===
H.ViewingMode.Global&&null!=c&&(b/=Math.cos(C.deg2rad(c)));return b*=a.renderCoordsHelper.unitInMeters}function U(a,b,c,d,f,e){if(z(e)){const h=new I(e.signal);D(a,d.heading,d.tilt,b,c,f,h);h.resolver.promise.then(g=>{g=E(a,g,d.fov);if(n.isNone(g))e.resolver.reject();else return e.resolver.resolve(g)},g=>e.resolver.reject(g))}else return b=D(a,d.heading,d.tilt,b,c,f),E(a,b,d.fov,e)}function V(a,b,c,d,f){return v(a).directionToHeadingTilt(b,c,d,f)}function ea(a,b){return!!(a.basemapTerrain&&a.renderCoordsHelper.fromRenderCoords(b,
w,a.spatialReference)&&a.elevationProvider&&n.unwrapOr(R.getElevationAtPoint(a.elevationProvider,w),0)>(w.z??0)-1)}function fa(a,b,c){return J.apply(this,arguments)}function J(){J=M._asyncToGenerator(function*(a,b,c){if(!a.renderCoordsHelper.fromRenderCoords(b,w,a.spatialReference)||!a.elevationProvider)return!1;b=w.z??0;a=yield a.elevationProvider.queryElevation(w.x,w.y,b,w.spatialReference,"ground",c);return n.unwrapOr(a,0)>b-1});return J.apply(this,arguments)}function ha(a,b,c){return K.apply(this,
arguments)}function K(){K=M._asyncToGenerator(function*(a,b,c){const d=r.create();b?b instanceof u?(p.projectPointToVector(b,d,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain&&null!=a.elevationProvider&&(b=yield a.elevationProvider.queryElevation(b.x,b.y,b.z??0,b.spatialReference,"ground",c),n.isSome(b)&&a.renderCoordsHelper.setAltitude(d,b))):x.copy(d,b):x.copy(d,a.state.camera.center);return d});return K.apply(this,arguments)}function ia(a,b){const c=r.create();b&&b instanceof u?(p.projectPointToVector(b,
c,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain&&null!=a.elevationProvider&&(b=R.getElevationAtPoint(a.elevationProvider,b),n.isSome(b)&&a.renderCoordsHelper.setAltitude(c,b))):b?x.copy(c,b):x.copy(c,a.state.camera.center);return c}function D(a,b,c,d,f,e,h){const g=d&&d instanceof u?d:null;if(z(h))return ha(a,d,h.signal).then(k=>{L(a,b,c,g,k,f,e,h)},k=>h.resolver.reject(k)),null;d=ia(a,d);return L(a,b,c,g,d,f,e,h)}function L(a,b,c,d,f,e,h,g){if(n.isNone(d)&&(d=p.projectVectorToPoint(f,
a.renderSpatialReference,a.spatialReference||y.WGS84),n.isNone(d)))return null;e=Math.max(e,a.state.constraints.minimumPoiDistance);var k=ja(a,b,c,f,e,h);const q=v(a).eyeForCenterWithHeadingTilt,m=q(f,e,k.heading,k.tilt);if(h===l.OrientationMode.ADJUST&&"global"===a.viewingMode&&0<c){const A=()=>{var t=e;var G=e;var F=v(a).eyeTiltToLookAtTilt(c,f,G);a.state.constraints.tilt&&(G=a.state.constraints.tilt(G),F=Math.min(F,.5*Math.PI),F=G.min*(1-.7)+.7*F);t=v(a).lookAtTiltToEyeTilt(F,f,t);h=1>c-t?l.OrientationMode.LOCKED:
l.OrientationMode.ADJUST;return L(a,b,t,d,f,e,h,g)};k=a.map.ground.navigationConstraint;if(!k||"stay-above"===k.type){if(ea(a,m.eye))return A();if(z(g))return fa(a,m.eye,g.signal).then(t=>{if(t)return A();g.resolver.resolve({eye:m.eye,up:m.up,center:r.clone(f),heading:m.heading,tilt:m.tilt});return null}),null}}k=!g||z(g)?{center:r.create(),eye:r.create(),up:r.create(),tilt:0,heading:0}:g;k.eye=m.eye;k.up=m.up;k.center=r.clone(f);k.heading=m.heading;k.tilt=m.tilt;z(g)&&g.resolver.resolve(k);return k}
function ja(a,b,c,d,f,e){var h=0;if(e=e===l.OrientationMode.ADJUST)if(h=a.pointsOfInterest.centerOnSurfaceFrequent.distance,8<Math.log(f/h)/Math.LN2)e=!0;else{var g=a.renderSpatialReference,k=a.spatialReference||y.WGS84;e=p.projectVectorToPoint(d,g,k);g=p.projectVectorToPoint(a.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,g,k);n.isNone(e)||n.isNone(g)?e=!1:(h*=Math.tan(.5*a.state.camera.fov),e=5<g.distance(e)/h)}e?(b=0,c=v(a).eyeTiltToLookAtTilt(c,d,f),a.state.constraints.tilt?(e=a.state.constraints.tilt(f),
e.max=Math.min(e.max,.5*Math.PI),h=Math.min(c,e.min*(1-.7)+.7*e.max)):h=c):h=v(a).eyeTiltToLookAtTilt(c,d,f);c=h=a.state.constraints.clampTilt(f,h);c=v(a).lookAtTiltToEyeTilt(c,d,f);return{heading:b,tilt:c}}function E(a,b,c,d){if(n.isNone(b))return null;a=p.projectVectorToPoint(b.eye,a.renderSpatialReference,a.spatialReference||y.WGS84);return n.isNone(a)?null:n.isSome(d)?(d.position=a,d.heading=b.heading,d.tilt=b.tilt,d.fov=c,d):new N(a,b.heading,b.tilt,c)}function z(a){return a&&"resolver"in a}
const W=Y.getLogger("esri.views.3d.support.cameraUtils"),X=r.create(),ka={heading:0,tilt:0},w=new u,la=new O.Cyclical(-2.0037508342788905E7,2.0037508342788905E7),ma=new O.Cyclical(-180,180);l.OrientationMode=void 0;(function(a){a[a.LOCKED=0]="LOCKED";a[a.ADJUST=1]="ADJUST"})(l.OrientationMode||(l.OrientationMode={}));const B=r.create();let I=function(a){this.signal=a;this.resolver=Z.createResolver()};l.AsyncContext=I;l.computeScale=function(a,b){p.projectVectorToVector(b.center,a.renderSpatialReference,
X,y.WGS84);return T(a,b.distance,X[1])};l.directionToHeadingTilt=V;l.distanceToScale=T;l.externalToInternal=function(a,b){if(n.isNone(b))return null;var c=a.renderSpatialReference;const d=v(a).headingTiltToDirectionUp,f=r.create();if(!p.projectPointToVector(b.position,f,c))return null;c=d(f,b.heading,b.tilt);x.scale(c.direction,c.direction,a.state.camera.distance);x.add(c.direction,c.direction,f);a=ba.cameraOnContentAlongViewDirection(a,f,c.direction,c.up);a.fov=C.deg2rad(b.fov);return a};l.fromCenterDistance=
U;l.fromCenterScale=function(a,b,c,d,f,e){c=S(a,c,b.latitude);return U(a,b,c,d,f,e)};l.fromExtent=function(a,b,c,d,f,e=null){if(a.state.isGlobal){if(!da.isSpatialReferenceSupported(b.spatialReference,H.ViewingMode.Global))return z(e)&&e.resolver.reject(),null;var h=new u(b.xmin,b.ymin,b.spatialReference);const m=new u(b.xmax,b.ymax,b.spatialReference),A=b.spatialReference.isGeographic?ma:la;var g=new u({x:A.center(h.x,m.x),y:(m.y+h.y)/2,z:null!=b.zmax&&null!=b.zmin?(b.zmax+b.zmin)/2:void 0,spatialReference:b.spatialReference});
const t=aa.getReferenceEllipsoid(b.spatialReference);var k=ca.getGreatCircleSpanAt(g,h,m);var q=k.lon;k=k.lat;A.diff(h.x,m.x)>A.range/2&&(q+=t.halfCircumference);q=Math.min(q,t.halfCircumference);k=Math.min(k,t.halfCircumference)}else g=n.unwrapOr(a.renderSpatialReference,b.spatialReference),g.equals(b.spatialReference)||(b=p.project(b,g)),q=b.xmax-b.xmin,k=b.ymax-b.ymin,g=new u({x:b.xmin+.5*q,y:b.ymin+.5*k,z:null!=b.zmax&&null!=b.zmin?(b.zmax+b.zmin)/2:void 0,spatialReference:g});h=a.state.camera;
b=Math.max(1/Math.tan(h.fovX/2)*q*.5,1/Math.tan(h.fovY/2)*k*.5,1/Math.tan(h.fov/2)*(null!=b.zmax&&null!=b.zmin?b.zmax-b.zmin:0)*.5)/1;if(z(e))q=new I(e.signal),D(a,c,d,g,b,f,q),q.resolver.promise.then(m=>{m=E(a,m,a.camera.fov);if(n.isNone(m))e.resolver.reject();else return e.resolver.resolve(m)},m=>e.resolver.reject(m));else return c=D(a,c,d,g,b,f),E(a,c,a.camera.fov,e)};l.getObserverForPointAtDistance=D;l.headingTiltToDirectionUp=function(a,b,c,d,f){return v(a).headingTiltToDirectionUp(b,c,d,f)};
l.internalToExternal=function(a,b,c){const d=a.renderSpatialReference,f=V(a,b.eye,b.viewForward,b.up,ka);a=a.spatialReference||y.WGS84;p.projectVectorToVector(b.eye,d,B,a)||(a=y.WGS84,p.projectVectorToVector(b.eye,d,B,a));if(n.isNone(c))return new N(new u(B,a),f.heading,f.tilt,C.rad2deg(b.fov));c.position.x=B[0];c.position.y=B[1];c.position.z=B[2];c.position.spatialReference=a;c.heading=f.heading;c.tilt=f.tilt;c.fov=C.rad2deg(b.fov);return c};l.observerToCamera=E;l.scaleToDistance=S;l.scaleToZoom=
function(a,b){if(a=a.basemapTerrain?.tilingScheme)return a.levelAtScale(b);W.error("#scaleToZoom()","Cannot compute zoom from scale without a tiling scheme")};l.toExtent=function(a,b,c){const d=p.projectVectorToPoint(c,a.renderSpatialReference,a.spatialReference||y.WGS84);if(n.isNone(d))return null;var f=Math.tan(b.fovX/2),e=Math.tan(b.fovY/2);b=x.dist(b.eye,c);f*=2*b;e*=2*b;return"global"===a.viewingMode?Q.toExtent(a,d,f,e):P.toExtent(a,d,f,e)};l.zoomToScale=function(a,b){if(a=a.basemapTerrain?.tilingScheme)return a.scaleAtLevel(b);
W.error("#zoomToScale()","Cannot compute scale from zoom without a tiling scheme")};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});