// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../SnappingConstraint ../snappingUtils ./FeatureSnappingCandidate ../hints/LineSnappingHint".split(" "),function(d,e,g,h,b,k){b=function(f){function c(a){return f.call(this,{...a,isDraped:!0,constraint:new g.DrapedLineConstraint(a.edgeStart,a.edgeEnd,a.getGroundElevation)})||this}e._inheritsLoose(c,f);e._createClass(c,[{key:"hints",get:function(){return[new k.LineSnappingHint(h.LineSegmentHintType.REFERENCE,this.constraint.start,this.constraint.end,
this.isDraped,this.domain)]}}]);return c}(b.FeatureSnappingCandidate);d.DrapedEdgeSnappingCandidate=b;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});