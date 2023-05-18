// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../core/has ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/centroid ../../../geometry/support/labelPoint ../CIMPlacements ../enums".split(" "),function(g,l,m,n,p,h,q,f){let k=function(){function c(){}c.local=function(){null===c.instance&&(c.instance=new c);return c.instance};c.prototype.execute=function(e,a,b,d,t){return new r(e,a,b)};return c}();k.instance=null;let r=function(){function c(a,b,d){this._geometry=a;this._offsetX=
void 0!==b.offsetX?b.offsetX*d:0;this._offsetY=void 0!==b.offsetY?b.offsetY*d:0;this._method=void 0!==b.method?b.method:f.PlacementPolygonCenterMethod.OnPolygon;this._internalPlacement=new q.Placement}var e=c.prototype;e.next=function(){const a=this._geometry;this._geometry=null;return a&&void 0!==a.rings?this._polygonCenter(a):null};e._polygonCenter=function(a){let b=!1;switch(this._method){case f.PlacementPolygonCenterMethod.CenterOfMass:if(a=p.weightedAreaCentroid(a))this._internalPlacement.setTranslate(a[0]+
this._offsetX,a[1]+this._offsetY),b=!0;break;case f.PlacementPolygonCenterMethod.BoundingBoxCenter:const d=m.create();n.getBoundsXY(d,a);d&&(this._internalPlacement.setTranslate((d[2]+d[0])/2+this._offsetX,(d[3]+d[1])/2+this._offsetY),b=!0);break;default:a=l("polylabel-placement-enabled")?h.getPolylabelPoint(a):h.getLabelPoint(a),null!==a&&(this._internalPlacement.setTranslate(a[0]+this._offsetX,a[1]+this._offsetY),b=!0)}return b?this._internalPlacement:null};return c}();g.PlacementPolygonCenter=
k;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});