// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass".split(" "),function(g,h,d,e,m,n,l){g.ScaleRangeLayer=c=>{c=function(k){function f(){var a=k.apply(this,arguments)||this;a.minScale=0;a.maxScale=0;return a}h._inheritsLoose(f,k);h._createClass(f,[{key:"effectiveScaleRange",get:function(){const a={minScale:this.minScale,
maxScale:this.maxScale};var b=this.parent;b&&"effectiveScaleRange"in b&&(b=b.effectiveScaleRange,a.minScale=0<a.minScale?0<b.minScale?Math.min(a.minScale,b.minScale):a.minScale:b.minScale,a.maxScale=0<a.maxScale?0<b.maxScale?Math.max(a.maxScale,b.maxScale):a.maxScale:b.maxScale);return(b=this._get("effectiveScaleRange"))&&b.minScale===a.minScale&&b.maxScale===a.maxScale?b:a}}]);return f}(c);d.__decorate([e.property({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minScale",void 0);d.__decorate([e.property({type:Number,
nonNullable:!0,json:{write:!0}})],c.prototype,"maxScale",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"effectiveScaleRange",null);return c=d.__decorate([l.subclass("esri.layers.mixins.ScaleRangeLayer")],c)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});