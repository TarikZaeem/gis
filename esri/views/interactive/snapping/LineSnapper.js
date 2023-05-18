// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../support/elevationInfoUtils ./SnappingAlgorithm ./SnappingPoint ./snappingUtils ./candidates/LineSnappingCandidate ../support/viewUtils ../../support/geometry3dUtils ../../support/geometry2dUtils".split(" "),function(u,w,x,l,m,n,p,y,q,z,A){m=function(v){function r(){return v.apply(this,arguments)||this}w._inheritsLoose(r,v);var t=r.prototype;t.snapNewVertex=function(g,a){var d=a.editGeometryOperations.data.components[0],
b=d.edges.length;const e=[];if(1>b)return e;var {spatialReference:f}=a;f=q.vectorToScreenPoint(g,f,l.absoluteHeightElevationInfo,this.view);const {view:h}=this;b=d=d.edges[b-1];do{if(this.edgeExceedsShortLineThreshold(b,a)){const c=p.editEdgeToSnappingEdge(b,h,a);this._processCandidateProposal(c.left,c.right,g,f,a,e)}b=b.leftVertex.leftEdge}while(b&&b!==d);return e};t.snapExistingVertex=function(g,a){const d=[],b=x.unwrap(a.vertexHandle);var e=b.component;if(2>e.edges.length)return d;const {view:f}=
this;var {spatialReference:h}=a;h=q.vectorToScreenPoint(g,h,l.absoluteHeightElevationInfo,f);var c=b.leftEdge,k=b.rightEdge;c&&k&&this.edgeExceedsShortLineThreshold(c,a)&&this.edgeExceedsShortLineThreshold(k,a)&&this._processCandidateProposal(n.anyMapPointToSnappingPoint(c.leftVertex.pos,f,a),n.anyMapPointToSnappingPoint(k.rightVertex.pos,f,a),g,h,a,d);c=e=e.edges[0];do c!==b.leftEdge&&c!==b.rightEdge&&this.edgeExceedsShortLineThreshold(c,a)&&(k=p.editEdgeToSnappingEdge(c,f,a),this._processCandidateProposal(k.left,
k.right,g,h,a,d)),c=c.rightVertex.rightEdge;while(c&&c!==e);return d};t._processCandidateProposal=function(g,a,d,b,e,f){const {spatialReference:h,pointer:c}=e;d=n.asSnappingPoint(z.projectPointToLineLike(d,{start:g,end:a,type:A.LineType.LINE}));p.squaredScreenDistance(b,q.vectorToScreenPoint(d,h,l.absoluteHeightElevationInfo,this.view))<this.squaredProximityThreshold(c)&&f.push(new y.LineSnappingCandidate({lineStart:g,lineEnd:a,targetPoint:d,isDraped:"on-the-ground"===e.elevationInfo?.mode}))};return r}(m.SnappingAlgorithm);
u.LineSnapper=m;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});