// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../form/elements/support/inputs".split(" "),function(e,h,b,d,m,n,k,l){e.EditableColumnTemplateMixin=a=>{a=function(f){function g(){var c=f.apply(this,arguments)||this;c.editable=!0;c.hint=null;c.input=null;c.required=!1;return c}h._inheritsLoose(g,
f);return g}(a);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"editable",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"hint",void 0);b.__decorate([d.property({types:l.types,json:{read:{source:"inputType"},write:{target:"inputType"}}})],a.prototype,"input",void 0);b.__decorate([d.property()],a.prototype,"required",void 0);return a=b.__decorate([k.subclass("esri.widgets.FeatureTable.support.EditableColumnTemplateMixin")],a)};Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});