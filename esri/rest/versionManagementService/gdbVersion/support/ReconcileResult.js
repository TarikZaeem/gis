// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/JSONSupport ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,e,k,l,h){a=function(d){function f(b){b=d.call(this,b)||this;b.hasConflicts=!1;b.moment=null;b.didPost=!1;b.success=!1;return b}g._inheritsLoose(f,d);return f}(a.JSONSupport);c.__decorate([e.property({type:Boolean,
json:{write:!0}})],a.prototype,"hasConflicts",void 0);c.__decorate([e.property({type:Date,json:{type:Number,write:{writer:(d,f)=>{f.moment=d?d.getTime():null}}}})],a.prototype,"moment",void 0);c.__decorate([e.property({type:Boolean,json:{write:!0}})],a.prototype,"didPost",void 0);c.__decorate([e.property({type:Boolean,json:{write:!0}})],a.prototype,"success",void 0);return a=c.__decorate([h.subclass("esri.rest.versionManagementService.gdbVersion.support.ReconcileResult")],a)});