// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/JSONSupport ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass".split(" "),function(g,e,a,f,k,l,h){a=function(b){function d(c){c=b.call(this,c)||this;c.moment=null;c.success=!1;return c}g._inheritsLoose(d,b);return d}(a.JSONSupport);e.__decorate([f.property({type:Date,json:{type:Number,
write:{writer:(b,d)=>{d.moment=b?b.getTime():null}}}})],a.prototype,"moment",void 0);e.__decorate([f.property({type:Boolean,json:{write:!0}})],a.prototype,"success",void 0);return a=e.__decorate([h.subclass("esri.rest.versionManagementService.gdbVersion.support.PostResult")],a)});