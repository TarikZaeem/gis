// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/jsonMap ../../../../core/JSONSupport ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass".split(" "),function(h,d,c,a,e,l,m,k){c=new c.JSONMap({byObject:"by-object",byAttribute:"by-attribute"});a=function(f){function g(b){b=f.call(this,b)||this;b.sessionId=void 0;b.abortIfConflicts=
!1;b.conflictDetection=null;b.withPost=!1;return b}h._inheritsLoose(g,f);return g}(a.JSONSupport);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"sessionId",void 0);d.__decorate([e.property({type:Boolean,json:{write:!0}})],a.prototype,"abortIfConflicts",void 0);d.__decorate([e.property({type:c.apiValues,json:{type:c.jsonValues,read:c.read,write:c.write}})],a.prototype,"conflictDetection",void 0);d.__decorate([e.property({type:Boolean,json:{write:!0}})],a.prototype,"withPost",
void 0);return a=d.__decorate([k.subclass("esri.rest.versionManagementService.gdbVersion.support.ReconcileParameters")],a)});