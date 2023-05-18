// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../intl ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../Widget ../css ./Statistics ../support/intlUtils ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory ../../../intl/substitute".split(" "),function(b,
p,e,C,t,u,h,D,E,v,w,c,x,q,F,y,f,z){b.LegendItem=function(r){function l(a,d){a=r.call(this,a,d)||this;a.expanded=!1;a.checkboxVisible=!0;a._messages=null;return a}p._inheritsLoose(l,r);var g=l.prototype;g.initialize=function(){this._statistics=new x.Statistics(this._statisticsProps);this.addHandles(u.watch(()=>this._statisticsProps,a=>this._statistics.set(a)))};g.destroy=function(){this._statistics=t.destroyMaybe(this._statistics)};g.render=function(){const a=this.expanded;return f.tsx("div",{key:this,
class:this.classes(c.LEGEND_ITEM_CSS.base,{[c.LEGEND_ITEM_CSS.disabled]:this.disabled,[c.LEGEND_ITEM_CSS.expanded]:a})},this._renderColorIndicator(),f.tsx("div",{key:"header",class:c.LEGEND_ITEM_CSS.header},this._renderLabelWithCheckbox(),this._renderCollapseToggleButton()),a&&f.tsx("div",{key:"content",class:c.LEGEND_ITEM_CSS.content},this._statistics.render()))};g._renderColorIndicator=function(){return f.tsx("div",{key:"color-indicator",class:c.LEGEND_ITEM_CSS.colorIndicator,styles:{backgroundColor:this.line.color.toCss()}})};
g._renderCollapseToggleButton=function(){var a=this._messages;a=this.expanded?a.hideDetails:a.showDetails;return f.tsx("button",{key:"collapse-toggle",bind:this,class:c.LEGEND_ITEM_CSS.collapseToggle,onclick:this._onCollapseToggleClick,title:a,"aria-label":a,type:"button"},f.tsx("span",{class:c.LEGEND_ITEM_CSS.collapseToggleIcon}))};g._onCollapseToggleClick=function(){this.onExpandedToggle()};g._renderLabelWithCheckbox=function(){const {line:a,checkboxVisible:d,disabled:m}=this,n=`${c.LEGEND_ITEM_CSS.base}__check-${a.id}`;
return f.tsx("label",{key:"id",for:n,class:this.classes(c.LEGEND_ITEM_CSS.label,{[c.LEGEND_ITEM_CSS.labelDisabled]:m||!d})},d&&this._renderCheckbox(n),f.tsx("span",null,q.getTranslatedLineTitle(a,this._messages)))};g._renderCheckbox=function(a){const d=this.line,m=d.visible,n=this.disabled;var k=this._messages;k=m?k.hideProfile:k.showProfile;const A=q.getTranslatedLineTitle(d,this._messages);k=z.substitute(k,{name:A});return f.tsx("input",{key:"checkbox",id:a,type:"checkbox",class:c.LEGEND_ITEM_CSS.checkbox,
title:k,checked:m,disabled:n,"aria-label":k,bind:this,onchange:B=>this._onCheckboxToggle(B,d)})};g._onCheckboxToggle=function(a,d){a.stopPropagation();d.toggleVisibility()};p._createClass(l,[{key:"disabled",get:function(){return!this.line.available}},{key:"_statisticsProps",get:function(){return{line:this.line,effectiveUnits:this.effectiveUnits}}}]);return l}(w);e.__decorate([h.property({nonNullable:!0})],b.LegendItem.prototype,"effectiveUnits",void 0);e.__decorate([h.property({nonNullable:!0})],
b.LegendItem.prototype,"line",void 0);e.__decorate([h.property()],b.LegendItem.prototype,"expanded",void 0);e.__decorate([h.property()],b.LegendItem.prototype,"disabled",null);e.__decorate([h.property()],b.LegendItem.prototype,"checkboxVisible",void 0);e.__decorate([h.property()],b.LegendItem.prototype,"onExpandedToggle",void 0);e.__decorate([h.property()],b.LegendItem.prototype,"_statistics",void 0);e.__decorate([h.property(),y.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],
b.LegendItem.prototype,"_messages",void 0);b.LegendItem=e.__decorate([v.subclass("esri.widgets.ElevationProfile.LegendItem")],b.LegendItem);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});