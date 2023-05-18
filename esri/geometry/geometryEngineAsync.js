// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../geometry ../core/workers/workers ./Point ./support/jsonUtils".split(" "),function(d,g,Y,X,p,U){function f(a){return Array.isArray(a)?a[0]?.spatialReference:a?.spatialReference}function q(a){return a?Array.isArray(a)?a.map(q):a.toJSON?a.toJSON():a:a}function k(a){return Array.isArray(a)?a.map(b=>U.fromJSON(b)):U.fromJSON(a)}function V(){return r.apply(this,arguments)}function r(){r=g._asyncToGenerator(function*(){t||(t=X.open("geometryEngineWorker",
{strategy:"distributed"}));return t});return r.apply(this,arguments)}function e(a,b){return u.apply(this,arguments)}function u(){u=g._asyncToGenerator(function*(a,b){return(yield V()).invoke("executeGEOperation",{operation:a,parameters:q(b)})});return u.apply(this,arguments)}function W(a,b){return v.apply(this,arguments)}function v(){v=g._asyncToGenerator(function*(a,b){const c=yield V();return Promise.all(c.broadcast("executeGEOperation",{operation:a,parameters:q(b)}))});return v.apply(this,arguments)}
function w(){w=g._asyncToGenerator(function*(a,b){a=yield e("clip",[f(a),a,b]);return k(a)});return w.apply(this,arguments)}function x(){x=g._asyncToGenerator(function*(a,b){a=yield e("cut",[f(a),a,b]);return k(a)});return x.apply(this,arguments)}function y(){y=g._asyncToGenerator(function*(a){a=yield e("simplify",[f(a),a]);return k(a)});return y.apply(this,arguments)}function z(){z=g._asyncToGenerator(function*(a,b=!1){a=yield e("convexHull",[f(a),a,b]);return k(a)});return z.apply(this,arguments)}
function A(){A=g._asyncToGenerator(function*(a,b){a=yield e("difference",[f(a),a,b]);return k(a)});return A.apply(this,arguments)}function B(){B=g._asyncToGenerator(function*(a,b){a=yield e("symmetricDifference",[f(a),a,b]);return k(a)});return B.apply(this,arguments)}function C(){C=g._asyncToGenerator(function*(a,b){a=yield e("intersect",[f(a),a,b]);return k(a)});return C.apply(this,arguments)}function D(){D=g._asyncToGenerator(function*(a,b=null){let c;Array.isArray(a)?c=a:(c=[],c.push(a),null!=
b&&c.push(b));a=c;a=yield e("union",[f(a),a]);return k(a)});return D.apply(this,arguments)}function E(){E=g._asyncToGenerator(function*(a,b,c,h,l,n){a=yield e("offset",[f(a),a,b,c,h,l,n]);return k(a)});return E.apply(this,arguments)}function F(){F=g._asyncToGenerator(function*(a,b,c,h=!1){a=[f(a),a,b,c,h];a=yield e("buffer",a);return k(a)});return F.apply(this,arguments)}function G(){G=g._asyncToGenerator(function*(a,b,c,h,l,n){a=[f(a),a,b,c,h,l,n];a=yield e("geodesicBuffer",a);return k(a)});return G.apply(this,
arguments)}function H(){H=g._asyncToGenerator(function*(a,b,c=!0){a=yield e("nearestCoordinate",[f(a),a,b,c]);return{...a,coordinate:p.fromJSON(a.coordinate)}});return H.apply(this,arguments)}function I(){I=g._asyncToGenerator(function*(a,b){a=yield e("nearestVertex",[f(a),a,b]);return{...a,coordinate:p.fromJSON(a.coordinate)}});return I.apply(this,arguments)}function J(){J=g._asyncToGenerator(function*(a,b,c,h){return(yield e("nearestVertices",[f(a),a,b,c,h])).map(l=>({...l,coordinate:p.fromJSON(l.coordinate)}))});
return J.apply(this,arguments)}function K(a){return"xmin"in a?a.center:"x"in a?a:a.extent?.center}function L(){L=g._asyncToGenerator(function*(a,b,c){if(null==a)throw new m;const h=a.spatialReference;c=c??K(a);if(null==c)throw new m;a=a.constructor.fromJSON(yield e("rotate",[h,a,b,c]));a.spatialReference=h;return a});return L.apply(this,arguments)}function M(){M=g._asyncToGenerator(function*(a,b){if(null==a)throw new m;const c=a.spatialReference;b=b??K(a);if(null==b)throw new m;a=a.constructor.fromJSON(yield e("flipHorizontal",
[c,a,b]));a.spatialReference=c;return a});return M.apply(this,arguments)}function N(){N=g._asyncToGenerator(function*(a,b){if(null==a)throw new m;const c=a.spatialReference;b=b??K(a);if(null==b)throw new m;a=a.constructor.fromJSON(yield e("flipVertical",[c,a,b]));a.spatialReference=c;return a});return N.apply(this,arguments)}function O(){O=g._asyncToGenerator(function*(a,b,c,h){a=yield e("generalize",[f(a),a,b,c,h]);return k(a)});return O.apply(this,arguments)}function P(){P=g._asyncToGenerator(function*(a,
b,c){a=yield e("densify",[f(a),a,b,c]);return k(a)});return P.apply(this,arguments)}function Q(){Q=g._asyncToGenerator(function*(a,b,c,h=0){a=yield e("geodesicDensify",[f(a),a,b,c,h]);return k(a)});return Q.apply(this,arguments)}function R(){R=g._asyncToGenerator(function*(a,b){a=yield e("intersectLinesToPoints",[f(a),a,b]);return k(a)});return R.apply(this,arguments)}function S(){S=g._asyncToGenerator(function*(a,b){yield W("changeDefaultSpatialReferenceTolerance",[a,b])});return S.apply(this,arguments)}
function T(){T=g._asyncToGenerator(function*(a){yield W("clearDefaultSpatialReferenceTolerance",[a])});return T.apply(this,arguments)}let t,m=function(a){function b(){return a.call(this,"Illegal Argument Exception")||this}g._inheritsLoose(b,a);return b}(g._wrapNativeSuper(Error));d.buffer=function(a,b,c){return F.apply(this,arguments)};d.changeDefaultSpatialReferenceTolerance=function(a,b){return S.apply(this,arguments)};d.clearDefaultSpatialReferenceTolerance=function(a){return T.apply(this,arguments)};
d.clip=function(a,b){return w.apply(this,arguments)};d.contains=function(a,b){return e("contains",[f(a),a,b])};d.convexHull=function(a){return z.apply(this,arguments)};d.crosses=function(a,b){return e("crosses",[f(a),a,b])};d.cut=function(a,b){return x.apply(this,arguments)};d.densify=function(a,b,c){return P.apply(this,arguments)};d.difference=function(a,b){return A.apply(this,arguments)};d.disjoint=function(a,b){return e("disjoint",[f(a),a,b])};d.distance=function(a,b,c){return e("distance",[f(a),
a,b,c])};d.equals=function(a,b){return e("equals",[f(a),a,b])};d.extendedSpatialReferenceInfo=function(a){return e("extendedSpatialReferenceInfo",[a])};d.flipHorizontal=function(a,b){return M.apply(this,arguments)};d.flipVertical=function(a,b){return N.apply(this,arguments)};d.generalize=function(a,b,c,h){return O.apply(this,arguments)};d.geodesicArea=function(a,b,c){return e("geodesicArea",[f(a),a,b,c])};d.geodesicBuffer=function(a,b,c,h,l,n){return G.apply(this,arguments)};d.geodesicDensify=function(a,
b,c){return Q.apply(this,arguments)};d.geodesicLength=function(a,b,c){return e("geodesicLength",[f(a),a,b,c])};d.intersect=function(a,b){return C.apply(this,arguments)};d.intersectLinesToPoints=function(a,b){return R.apply(this,arguments)};d.intersects=function(a,b){return e("intersects",[f(a),a,b])};d.isSimple=function(a){return e("isSimple",[f(a),a])};d.nearestCoordinate=function(a,b){return H.apply(this,arguments)};d.nearestVertex=function(a,b){return I.apply(this,arguments)};d.nearestVertices=
function(a,b,c,h){return J.apply(this,arguments)};d.offset=function(a,b,c,h,l,n){return E.apply(this,arguments)};d.overlaps=function(a,b){return e("overlaps",[f(a),a,b])};d.planarArea=function(a,b){return e("planarArea",[f(a),a,b])};d.planarLength=function(a,b){return e("planarLength",[f(a),a,b])};d.relate=function(a,b,c){return e("relate",[f(a),a,b,c])};d.rotate=function(a,b,c){return L.apply(this,arguments)};d.simplify=function(a){return y.apply(this,arguments)};d.symmetricDifference=function(a,
b){return B.apply(this,arguments)};d.touches=function(a,b){return e("touches",[f(a),a,b])};d.union=function(a){return D.apply(this,arguments)};d.within=function(a,b){return e("within",[f(a),a,b])};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});