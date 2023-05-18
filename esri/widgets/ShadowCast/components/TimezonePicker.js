// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../Widget ../css ../../support/timeWidgetUtils ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(q,b,n,d,e,f,z,A,r,t,h,u,B,v,g){b.TimezonePicker=function(p){function l(a,
c){a=p.call(this,a,c)||this;a._focused=!1;return a}n._inheritsLoose(l,p);var k=l.prototype;k.loadDependencies=function(){return new Promise((a,c)=>q(["../../../chunks/calcite-icon"],a,c))};k.render=function(){const a=this._gmtOffsets,c=this._timezoneMessages;if(e.isNone(a)||e.isNone(c))return g.tsx("div",{class:h.TIMEZONE_PICKER_CSS.base});const m=this._selectedItemText;return g.tsx("div",{class:h.TIMEZONE_PICKER_CSS.base},g.tsx("select",{key:"hidden-select",class:h.TIMEZONE_PICKER_CSS.hiddenSelect,
"aria-label":c.chooseTimezone,title:c.chooseTimezone,value:String(this.value),bind:this,onfocus:this._onFocus,onblur:this._onBlur,onchange:this._onDropdownSelectChange},a.map(({utcOffset:w,shortWithUTC:x,long:y})=>g.tsx("option",{value:String(w)},x," - ",y))),g.tsx("div",{key:"visible-select",class:this.classes({[h.TIMEZONE_PICKER_CSS.select]:!0,[h.TIMEZONE_PICKER_CSS.selectFocused]:this._focused})},m,g.tsx("calcite-icon",{icon:"chevron-down",scale:"s"})))};k._onDropdownSelectChange=function(a){a=
parseInt(a.target?.value,10);if(Number.isFinite(a)&&e.isSome(this.onChange))this.onChange(a)};k._onFocus=function(){this._focused=!0};k._onBlur=function(){this._focused=!1};n._createClass(l,[{key:"_gmtOffsets",get:function(){return e.applySome(this._timezoneMessages,u.getTimezoneInfos)}},{key:"_selectedItem",get:function(){const a=this.value,c=this._gmtOffsets;return e.isNone(a)||e.isNone(c)?null:c.find(m=>m.utcOffset===a)}},{key:"_selectedItemText",get:function(){const a=this._selectedItem;return e.isSome(a)?
a.short:""}}]);return l}(t);d.__decorate([f.property()],b.TimezonePicker.prototype,"value",void 0);d.__decorate([f.property()],b.TimezonePicker.prototype,"onChange",void 0);d.__decorate([f.property(),v.messageBundle("esri/widgets/support/t9n/timezone")],b.TimezonePicker.prototype,"_timezoneMessages",void 0);d.__decorate([f.property()],b.TimezonePicker.prototype,"_focused",void 0);d.__decorate([f.property({readOnly:!0})],b.TimezonePicker.prototype,"_gmtOffsets",null);d.__decorate([f.property({readOnly:!0})],
b.TimezonePicker.prototype,"_selectedItem",null);d.__decorate([f.property({readOnly:!0})],b.TimezonePicker.prototype,"_selectedItemText",null);b.TimezonePicker=d.__decorate([r.subclass("esri.widgets.ShadowCast.components.TimezonePicker")],b.TimezonePicker);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});