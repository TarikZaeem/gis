// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,d,m,n,k,l){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.type="snowy";b.cloudCover=.5;b.precipitation=.5;b.snowCover="disabled";return b}h._inheritsLoose(f,
g);f.prototype.clone=function(){return new e({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})};return f}(a.JSONSupport);c.__decorate([k.enumeration({snowy:"snowy"})],a.prototype,"type",void 0);c.__decorate([d.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],a.prototype,"cloudCover",void 0);c.__decorate([d.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],a.prototype,"precipitation",void 0);c.__decorate([d.property({type:["enabled",
"disabled"],nonNullable:!0,json:{write:!0}})],a.prototype,"snowCover",void 0);return a=e=c.__decorate([l.subclass("esri.views.3d.environment.SnowyWeather")],a)});