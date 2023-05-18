// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../IntersectorInterfaces","../IntersectorTarget","../intersectorUtils"],function(c,h,k,d,l){d=function(b){function e(f,g,m,n,p,q){var a=b.call(this,f,g)||this;a.layerUid=f;a.graphicUid=g;a.geometryId=m;a.triangleNr=n;a.baseBoundingSphere=p;a.numLodLevels=q;return a}h._inheritsLoose(e,b);return e}(d.Graphic3DTarget);c.LodTarget=d;c.isLodIntersectorResult=function(b){return l.isValidIntersectorResult(b)&&b.intersector===k.IntersectorType.LOD&&
!!b.target};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});