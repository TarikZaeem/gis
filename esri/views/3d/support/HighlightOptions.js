// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Color ../../../core/Accessor ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec4f32 ../../../chunks/vec4f64".split(" "),function(u,c,d,b,v,e,y,z,w,l,x){const m=new d([0,255,255]),n=new d([0,0,0]);b=function(p){function k(){var a=p.apply(this,arguments)||this;a.color=
m.clone();a.haloColor=null;a.haloOpacity=1;a.fillOpacity=.25;a.shadowOpacity=.4;a.shadowColor=n.clone();a.shadowDifference=.2;return a}u._inheritsLoose(k,p);k.toEngineOptions=function(a){const f=d.toUnitRGBA(a.color??m),g=v.isSome(a.haloColor)?d.toUnitRGBA(a.haloColor):f,h=d.toUnitRGBA(a.shadowColor??n),q=a.haloOpacity??1,r=a.fillOpacity??.25,t=a.shadowOpacity??.4;a=a.shadowDifference??.2;return{color:l.fromValues(f[0],f[1],f[2],f[3]),haloColor:l.fromValues(g[0],g[1],g[2],g[3]),haloOpacity:q,haloOpacityOccluded:.25*
q,fillOpacity:r,fillOpacityOccluded:.25*r,shadowOpacity:t,shadowColor:x.fromValues(h[0],h[1],h[2],h[3]),occludedShadowOpacity:t*(1-a)}};return k}(b);c.__decorate([e.property({type:d})],b.prototype,"color",void 0);c.__decorate([e.property({type:d})],b.prototype,"haloColor",void 0);c.__decorate([e.property()],b.prototype,"haloOpacity",void 0);c.__decorate([e.property()],b.prototype,"fillOpacity",void 0);c.__decorate([e.property()],b.prototype,"shadowOpacity",void 0);c.__decorate([e.property({type:d})],
b.prototype,"shadowColor",void 0);c.__decorate([e.property()],b.prototype,"shadowDifference",void 0);return b=c.__decorate([w.subclass("esri.views.3d.support.HighlightOptions")],b)});