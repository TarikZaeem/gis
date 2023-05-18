// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../CIMCursor","../CIMOperators"],function(b,f,g){let m=function(){function c(){}c.getPlacement=function(a,d,h,k,l){const e=g.getPlacementOperator(d);if(!e)return null;a=f.cloneAndDecodeGeometry(a);return e.execute(a,d,h,k,l)};return c}();b.CIMMarkerPlacementHelper=m;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});