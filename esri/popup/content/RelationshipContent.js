// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ./Content ../support/RelatedRecordsInfoFieldOrder".split(" "),function(h,c,a,d,e,n,k,l,m){a=function(f){function g(b){b=f.call(this,b)||this;b.description=null;b.displayCount=null;b.displayType="list";b.orderByFields=null;b.relationshipId=null;b.title=null;
b.type="relationship";return b}h._inheritsLoose(g,f);return g}(a.ClonableMixin(l));c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c.__decorate([d.property({type:Number,json:{type:e.Integer,write:!0}})],a.prototype,"displayCount",void 0);c.__decorate([d.property({type:["list"],json:{write:!0}})],a.prototype,"displayType",void 0);c.__decorate([d.property({type:[m],json:{write:!0}})],a.prototype,"orderByFields",void 0);c.__decorate([d.property({type:Number,
json:{type:e.Integer,write:!0}})],a.prototype,"relationshipId",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);c.__decorate([d.property({type:["relationship"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=c.__decorate([k.subclass("esri.popup.content.RelationshipContent")],a)});