// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../SmartMappingSliderViewModel".split(" "),function(p,h,q,b,w,r,t){b=function(k){function e(a){a=k.call(this,a)||this;a.zoomingEnabled=!1;return a}p._inheritsLoose(e,k);e.prototype.getStopInfo=function(){const {breaks:a,max:c,min:l}=this,f=c-l;if(!a||!a.length||
!f)return[];const m=[];a.forEach(d=>{const {color:n,max:u,min:v}=d;let g;c===l?d=g=0:(d=(c-v)/f,g=(c-u)/f);m.push({offset:d,color:n},{offset:g,color:n})});return m};return e}(t);h.__decorate([q.property({readOnly:!0})],b.prototype,"zoomingEnabled",void 0);return b=h.__decorate([r.subclass("esri.widgets.smartMapping.ClassedColorSlider.ClassedColorSliderViewModel")],b)});