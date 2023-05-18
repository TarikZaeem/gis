// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ./VisualVariable ./support/ColorStop".split(" "),function(l,c,d,b,r,m,n,p){var f;b=f=function(g){function e(a){a=g.call(this,a)||this;a.type="color";a.normalizationField=null;return a}l._inheritsLoose(e,g);var h=e.prototype;h.clone=function(){return new f({field:this.field,normalizationField:this.normalizationField,
valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(a=>a.clone()),legendOptions:this.legendOptions&&this.legendOptions.clone()})};h.getAttributeHash=function(){return`${g.prototype.getAttributeHash.call(this)}-${this.normalizationField}`};h._interpolateData=function(){return this.stops&&this.stops.map(a=>a.value||0)};l._createClass(e,[{key:"cache",get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,
compiledFunc:null}}},{key:"stops",set:function(a){a&&Array.isArray(a)&&(a=a.filter(k=>!!k),a.sort((k,q)=>k.value-q.value));this._set("stops",a)}}]);return e}(n);c.__decorate([d.property({readOnly:!0})],b.prototype,"cache",null);c.__decorate([d.property({type:["color"],json:{type:["colorInfo"]}})],b.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"normalizationField",void 0);c.__decorate([d.property({type:[p],json:{write:!0}})],b.prototype,"stops",null);
return b=f=c.__decorate([m.subclass("esri.renderers.visualVariables.ColorVariable")],b)});