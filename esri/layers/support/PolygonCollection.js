// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/JSONSupport ../../core/Warning ../../core/Logger ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/Error ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/Polygon ../../geometry/projection".split(" "),function(p,q,d,r,l,u,v,w,x,y,t,h,m){var e;d=e=function(n){function f(a){return n.call(this,a)||this}p._inheritsLoose(f,n);var k=f.prototype;k.clone=function(){return new e(this.items.map(a=>
a.clone()))};k.write=function(a,c){return this.toJSON(c)};k.toJSON=function(a){const c=a?.layer?.spatialReference;return c?this.toArray().map(b=>{if(!c.equals(b.spatialReference)){if(!m.canProjectWithoutEngine(b.spatialReference,c))return a&&a.messages&&a.messages.push(new l("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})),null;const g=new h;m.projectPolygon(b,g,c);b=g}b=b.toJSON(a);
delete b.spatialReference;return b}).filter(b=>null!=b):(a?.messages&&a.messages.push(new l("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})),this.toArray().map(b=>b.toJSON(a)))};f.fromJSON=function(a,c){const b=new e;a.forEach(g=>b.add(h.fromJSON(g,c)));return b};return f}(r.JSONSupportMixin(d.ofType(h)));return d=e=q.__decorate([t.subclass("esri.layers.support.PolygonCollection")],d)});