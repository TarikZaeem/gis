// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/uuid ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../intl/duration ../../Widget ../css ./Label ./LabeledColorPicker ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(g,c,q,e,n,h,B,C,r,t,u,v,w,x,D,y,d){c.DiscreteConfigurator=
function(p){function k(a){var b=p.call(this,a)||this;b.colorPickerVisible=!0;b._selectId=`select-${n.generateUUID()}`;b._colorPickerId=`color-picker-${n.generateUUID()}`;b._onColorChange=l=>{b.options.color=l};return b}q._inheritsLoose(k,p);var m=k.prototype;m.loadDependencies=function(){return Promise.all([new Promise((a,b)=>g(["../../../chunks/calcite-label"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-option"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-select"],a,b))])};m.render=
function(){const a=this._messages.discrete,b=a.intervalLabel,{color:l,interval:z,intervalOptions:A}=this.options;return d.tsx("div",{class:v.DISCRETE_CONFIGURATOR_CSS.base},d.tsx(w.Label,{for:this._selectId,label:b},d.tsx("calcite-select",{id:this._selectId,label:b,bind:this,onCalciteSelectChange:this._onIntervalChange},A.toArray().map(f=>d.tsx("calcite-option",{key:f,selected:f===z,value:String(f)},t.formatDuration(f))))),this.colorPickerVisible&&d.tsx(x.LabeledColorPicker,{id:this._colorPickerId,
label:a.colorLabel,value:l,onChange:this._onColorChange}))};m._onIntervalChange=function(a){a=parseInt(a.target.selectedOption?.value,10);Number.isFinite(a)&&(this.options.interval=a)};return k}(u);e.__decorate([h.property()],c.DiscreteConfigurator.prototype,"options",void 0);e.__decorate([h.property()],c.DiscreteConfigurator.prototype,"colorPickerVisible",void 0);e.__decorate([h.property(),y.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],c.DiscreteConfigurator.prototype,"_messages",void 0);
c.DiscreteConfigurator=e.__decorate([r.subclass("esri.widgets.ShadowCast.components.DiscreteConfigurator")],c.DiscreteConfigurator);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});