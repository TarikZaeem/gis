// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../SnappingDomain ../snappingUtils ./SnappingCandidate ../hints/LineSnappingHint ../hints/RightAngleSnappingHint".split(" "),function(b,h,m,k,f,l,n){f=function(c){function g({targetPoint:a,constraint:d,previousVertex:e,otherVertex:p,otherVertexType:q,objectId:r,isDraped:t}){a=c.call(this,a,d,t,m.SnappingDomain.SELF)||this;a.previousVertex=e;a.otherVertex=p;a.otherVertexType=q;a.objectId=r;return a}h._inheritsLoose(g,c);h._createClass(g,
[{key:"hints",get:function(){const a=this.previousVertex,d=this.otherVertexType===b.OtherVertexType.CENTER?this.otherVertex:this.targetPoint,e=this.otherVertexType===b.OtherVertexType.CENTER?this.targetPoint:this.otherVertex;return[new l.LineSnappingHint(k.LineSegmentHintType.TARGET,d,e,this.isDraped,this.domain),new l.LineSnappingHint(k.LineSegmentHintType.REFERENCE,a,d,this.isDraped,this.domain),new n.RightAngleSnappingHint(this.previousVertex,d,e,this.isDraped,this.domain)]}}]);return g}(f.SnappingCandidate);
b.OtherVertexType=void 0;(function(c){c[c.NEXT=0]="NEXT";c[c.CENTER=1]="CENTER"})(b.OtherVertexType||(b.OtherVertexType={}));b.RightAngleSnappingCandidate=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});