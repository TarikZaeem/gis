// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./TextInput".split(" "),function(g,e,h,a,m,k,l){var c;a=c=function(f){function d(b){b=f.call(this,b)||this;b.type="text-box";return b}g._inheritsLoose(d,f);d.prototype.clone=function(){return new c({maxLength:this.maxLength,minLength:this.minLength})};return d}(l);
e.__decorate([h.property({type:["text-box"],json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=c=e.__decorate([k.subclass("esri.form.elements.inputs.TextBoxInput")],a)});