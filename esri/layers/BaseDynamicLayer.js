// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../request ../core/Error ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./Layer ./mixins/BlendLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer".split(" "),function(h,k,g,p,q,f,z,t,u,v,w,x){var l;f=l=function(r){function m(){var e=r.apply(this,arguments)||this;e.type="base-dynamic";return e}h._inheritsLoose(m,r);var n=m.prototype;n.getImageUrl=
function(){throw new p("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented");};n.fetchImage=function(){var e=h._asyncToGenerator(function*(a,c,d,b){a=this.getImageUrl(a,c,d);b={responseType:"image",signal:b&&b.signal,query:{...this.refreshParameters}};if("string"===typeof a)return{data:b}=yield g(a,b),b;a=yield a;({data:b}=yield g(a,b));return b});return function(a,c,d,b){return e.apply(this,arguments)}}();n.fetchImageBitmap=function(){var e=h._asyncToGenerator(function*(a,
c,d,b={}){if(this.fetchImage!==l.prototype.fetchImage){b=yield this.fetchImage(a,c,d,b);try{return createImageBitmap(b)}catch(y){throw new p("request:server","Unable to load image",{error:y,extent:a,width:c,height:d});}}a=this.getImageUrl(a,c,d);c={responseType:"blob",signal:b&&b.signal,query:{...this.refreshParameters}};if("string"===typeof a)return{data:a}=yield g(a,c),createImageBitmap(a);a=yield a;({data:a}=yield g(a,c));return createImageBitmap(a)});return function(a,c,d){return e.apply(this,
arguments)}}();return m}(v.BlendLayer(x.ScaleRangeLayer(w.RefreshableLayer(u))));k.__decorate([q.property({readOnly:!0,value:"base-dynamic"})],f.prototype,"type",void 0);k.__decorate([q.property({type:["show","hide"]})],f.prototype,"listMode",void 0);return f=l=k.__decorate([t.subclass("esri.layers.BaseDynamicLayer")],f)});