// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/mathUtils ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../../chunks/common ../../geometry/Extent ../../geometry/Polygon ./GeoreferenceBase".split(" "),function(r,m,v,l,p,h,E,w,x,t,y,z){function u(k,f,a){a=x.toRadian(a);const c=Math.cos(a),b=Math.sin(a);return(e,g)=>[c*(e-k)+b*(g-f)+k,c*(g-f)-b*
(e-k)+f]}h=function(k){function f(a){a=k.call(this,a)||this;a.extent=null;a.rotation=0;a.type="extent-and-rotation";return a}r._inheritsLoose(f,k);r._createClass(f,[{key:"coords",get:function(){if(l.isNone(this.extent))return null;const {xmin:a,ymin:c,xmax:b,ymax:e,spatialReference:g}=this.extent;if(this.rotation){const {x:q,y:n}=this.extent.center;var d=u(q,n,this.rotation);d=[d(a,c),d(a,e),d(b,e),d(b,c)];d.push(d[0])}else d=[[a,c],[a,e],[b,e],[b,c],[a,c]];return new y({rings:[d],spatialReference:g})},
set:function(a){if(!l.isNone(a)&&!l.isNone(this.extent)){var c=this.extent.spatialReference;a=this.projectOrWarn(a,c);if(!l.isNone(a)&&!l.isNone(a.extent)){var {rings:[[b,e,g]],extent:{center:{x:d,y:q}}}=a;a=v.rad2deg(Math.PI/2-Math.atan2(e[1]-b[1],e[0]-b[0]));var n=u(d,q,-a),[A,B]=n(b[0],b[1]),[C,D]=n(g[0],g[1]);this.extent=new t({xmin:A,ymin:B,xmax:C,ymax:D,spatialReference:c});this.rotation=a}}}}]);return f}(z);m.__decorate([p.property()],h.prototype,"coords",null);m.__decorate([p.property({type:t})],
h.prototype,"extent",void 0);m.__decorate([p.property({type:Number})],h.prototype,"rotation",void 0);return h=m.__decorate([w.subclass("esri.layers.support.ExtentAndRotationGeoreference")],h)});