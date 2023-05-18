// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/jsonMap ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./support/AuthoringInfo".split(" "),function(g,h,d,b,l,q,r,n,p){d=new d.JSONMap({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});
b=function(m){function k(a){a=m.call(this,a)||this;a.authoringInfo=null;a.type=null;return a}g._inheritsLoose(k,m);var c=k.prototype;c.getRequiredFields=function(){var a=g._asyncToGenerator(function*(e){if(!this.collectRequiredFields)return[];const f=new Set;yield this.collectRequiredFields(f,e);return Array.from(f).sort()});return function(e){return a.apply(this,arguments)}}();c.getSymbol=function(a,e){};c.getSymbolAsync=function(){var a=g._asyncToGenerator(function*(e,f){});return function(e,f){return a.apply(this,
arguments)}}();c.getSymbols=function(){return[]};c.getAttributeHash=function(){return JSON.stringify(this)};c.getMeshHash=function(){return JSON.stringify(this)};return k}(b.JSONSupport);h.__decorate([l.property({type:p,json:{write:!0}})],b.prototype,"authoringInfo",void 0);h.__decorate([l.property({type:d.apiValues,readOnly:!0,json:{type:d.jsonValues,read:!1,write:{writer:d.write,ignoreOrigin:!0}}})],b.prototype,"type",void 0);return b=h.__decorate([n.subclass("esri.renderers.Renderer")],b)});