// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,k,a,f,l,n,m){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.color=null;b.ratio=null;return b}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({color:this.color,ratio:this.ratio})};return e}(a.JSONSupport);
c.__decorate([f.property({type:k,json:{type:[l.Integer],default:null,write:!0}})],a.prototype,"color",void 0);c.__decorate([f.property({type:Number,json:{write:!0}})],a.prototype,"ratio",void 0);return a=d=c.__decorate([m.subclass("esri.renderers.support.HeatmapColorStop")],a)});