// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../SmartMappingPrimaryHandleSliderViewModel".split(" "),function(q,m,r,f,z,t,u){f=function(n){function h(a){a=n.call(this,a)||this;a.persistSizeRangeEnabled=!1;return a}q._inheritsLoose(h,n);h.prototype.updateStops=function(a){const {primaryHandleEnabled:v,persistSizeRangeEnabled:w,
stops:x}=this,k=this.getValuesFromStops();if(k?.length&&(a.sort((b,e)=>b.value>e.value?1:-1).forEach(b=>{k[b.index]=b.value}),x.forEach((b,e)=>b.value=k[e]),v&&w)){({stops:a}=this);var c=this.getValuesFromStops(),d=a.map(g=>g.size);const b=Math.max(...d),e=Math.min(...d);d=Math.max(...c);c=Math.min(...c);const l=a[5===a.length?2:1].value;d=Math.abs(d-l);c=Math.abs(c-l);const p=d>c?d:c,y=b-e;0!==p&&a.forEach(g=>{g.size=Math.abs(g.value-l)/p*y+e})}};return h}(u);m.__decorate([r.property()],f.prototype,
"persistSizeRangeEnabled",void 0);return f=m.__decorate([t.subclass("esri.widgets.smartMapping.SizeSlider.SizeSliderViewModel")],f)});