// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/promiseUtils ../core/unitUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./Widget ./DistanceMeasurement2D/DistanceMeasurement2DViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(t,d,D,E,F,e,c,O,G,H,u,v,w,b,P){c=function(x){function k(a,
f){a=x.call(this,a,f)||this;a.iconClass="esri-icon-measure-line";a.messages=null;a.messagesUnits=null;a.viewModel=new u;return a}t._inheritsLoose(k,x);var p=k.prototype;p.render=function(){const {id:a,messages:f,messagesUnits:y,viewModel:I,visible:J}=this,{active:z,supported:A,measurementLabel:K,state:l,unit:L,unitOptions:M}=I;var m="disabled"===l;const n="measuring"===l||"measured"===l;var q=z&&"ready"===l?b.tsx("section",{key:"hint",class:"esri-distance-measurement-2d__hint"},b.tsx("p",{class:"esri-distance-measurement-2d__hint-text"},
f.hint)):null;const N=A?null:b.tsx("section",{key:"unsupported",class:"esri-distance-measurement-2d__panel--error"},b.tsx("p",null,f.unsupported));var r=(g,B,C)=>D.isSome(B)?b.tsx("div",{key:`${C}-enabled`,class:"esri-distance-measurement-2d__measurement-item"},b.tsx("span",{class:"esri-distance-measurement-2d__measurement-item-title"},g),b.tsx("span",{"aria-live":"polite",class:"esri-distance-measurement-2d__measurement-item-value"},B)):b.tsx("div",{key:`${C}-disabled`,class:this.classes("esri-distance-measurement-2d__measurement-item",
"esri-distance-measurement-2d__measurement-item--disabled"),"aria-disabled":"true"},b.tsx("span",{class:"esri-distance-measurement-2d__measurement-item-title"},g));r=n?b.tsx("section",{key:"measurement",class:"esri-distance-measurement-2d__measurement"},r(f.distance,K,"distance")):null;var h=`${a}-units`;h=n?b.tsx("section",{key:"units",class:"esri-distance-measurement-2d__units"},b.tsx("label",{class:"esri-distance-measurement-2d__units-label",for:h},f.unit),b.tsx("div",{class:"esri-distance-measurement-2d__units-select-wrapper"},
b.tsx("select",{class:"esri-distance-measurement-2d__units-select esri-select",id:h,onchange:this._changeUnit,bind:this,value:L},M.map(g=>b.tsx("option",{key:g,value:g},F.isMeasurementSystem(g)?y.systems[g]:y.units[g]?.pluralCapitalized))))):null;h=n?b.tsx("div",{key:"settings",class:"esri-distance-measurement-2d__settings"},h):null;m=!A||z&&!n?null:b.tsx("div",{class:"esri-distance-measurement-2d__actions"},b.tsx("button",{"aria-label":f.newMeasurement,bind:this,class:this.classes("esri-distance-measurement-2d__clear-button esri-button esri-button--primary",
m&&"esri-button--disabled"),disabled:m,onclick:this._newMeasurement,title:f.newMeasurement,type:"button"},f.newMeasurement));q=J?b.tsx("div",{class:"esri-distance-measurement-2d__container"},N,q,h,r,m):null;return b.tsx("div",{"aria-label":f.widgetLabel,class:"esri-distance-measurement-2d esri-widget esri-widget--panel",role:"region"},q)};p._newMeasurement=function(){E.ignoreAbortErrors(this.viewModel.start())};p._changeUnit=function(a){a=a.target;if(a=a.options[a.selectedIndex])this.viewModel.unit=
a.value};t._createClass(k,[{key:"active",get:function(){return this.viewModel.active}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"unit",get:function(){return this.viewModel.unit},set:function(a){this.viewModel.unit=a}},{key:"unitOptions",get:function(){return this.viewModel.unitOptions},set:function(a){this.viewModel.unitOptions=a}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=
a}},{key:"visible",get:function(){return this.viewModel.visible},set:function(a){this.viewModel.visible=a}}]);return k}(H);d.__decorate([e.property({readOnly:!0})],c.prototype,"active",null);d.__decorate([e.property()],c.prototype,"iconClass",void 0);d.__decorate([e.property()],c.prototype,"label",null);d.__decorate([e.property()],c.prototype,"uiStrings",void 0);d.__decorate([e.property(),w.messageBundle("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],c.prototype,"messages",void 0);
d.__decorate([e.property(),w.messageBundle("esri/core/t9n/Units")],c.prototype,"messagesUnits",void 0);d.__decorate([e.property()],c.prototype,"unit",null);d.__decorate([e.property()],c.prototype,"unitOptions",null);d.__decorate([e.property()],c.prototype,"view",null);d.__decorate([e.property({type:u})],c.prototype,"viewModel",void 0);d.__decorate([e.property({type:Boolean})],c.prototype,"visible",null);d.__decorate([v.accessibleHandler()],c.prototype,"_newMeasurement",null);d.__decorate([v.accessibleHandler()],
c.prototype,"_changeUnit",null);return c=d.__decorate([G.subclass("esri.widgets.DistanceMeasurement2D")],c)});