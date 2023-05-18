// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3f64 ../../../support/elevationInfoUtils ./SnappingAlgorithm ./SnappingPoint ./snappingUtils ./candidates/RightAngleTriangleSnappingCandidate ../support/viewUtils ../../support/geometry2dUtils".split(" "),function(n,v,w,p,x,y,q,h,g,z,A,r,B){h=function(t){function k(){return t.apply(this,arguments)||this}v._inheritsLoose(k,t);var l=k.prototype;l.snapNewVertex=
function(f,a){var b=a.editGeometryOperations.data.components[0];const c=[];var e=b.vertices.length;if("polygon"!==a.editGeometryOperations.data.type||2>e)return c;var {view:d}=this;e=b.vertices[e-1];b=g.anyMapPointToSnappingPoint(b.vertices[0].pos,d,a);d=g.anyMapPointToSnappingPoint(e.pos,d,a);this._processCandidateProposal(b,d,f,a,c);return c};l.snapExistingVertex=function(f,a){const b=[];var c=w.unwrap(a.vertexHandle),e=c.component;if(2>e.edges.length||"polyline"===a.editGeometryOperations.data.type&&
(0===c.index||c.index===e.vertices.length-1))return b;const {view:d}=this;e=g.anyMapPointToSnappingPoint(c.leftEdge.leftVertex.pos,d,a);c=g.anyMapPointToSnappingPoint(c.rightEdge.rightVertex.pos,d,a);this._processCandidateProposal(e,c,f,a,b);return b};l._processCandidateProposal=function(f,a,b,c,e){if(this.exceedsShortLineThreshold(f,a,c)){var d=p.lerp(C,f,a,.5),D=.5*p.distance(f,a),m=y.create();B.projectPointToCircle(m,b,d,D);m[2]=b[2];d=g.asSnappingPoint(m);var {spatialReference:u,pointer:E}=c;
b=r.vectorToScreenPoint(b,u,q.absoluteHeightElevationInfo,this.view);z.squaredScreenDistance(b,r.vectorToScreenPoint(d,u,q.absoluteHeightElevationInfo,this.view))<this.squaredProximityThreshold(E)&&!this.isVertical(f,d)&&!this.isVertical(d,a)&&e.push(new A.RightAngleTriangleSnappingCandidate({targetPoint:d,point1:f,point2:a,isDraped:"on-the-ground"===c.elevationInfo?.mode}))}};return k}(h.SnappingAlgorithm);const C=x.create();n.RightAngleTriangleSnapper=h;Object.defineProperty(n,Symbol.toStringTag,
{value:"Module"})});