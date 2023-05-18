// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../Widget ../css ./LegendItem ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(b,l,e,m,f,g,u,v,n,p,q,r,w,t){b.Legend=function(k){function h(a,c){a=k.call(this,a,c)||this;a._items=
new m;a._expandedLine=null;return a}l._inheritsLoose(h,k);var d=h.prototype;d.initialize=function(){this.addHandles([f.watch(()=>this.profiles,a=>{this._destroyItems();this._items.addMany(a.map(c=>this._createItemForLine(c)))},f.initial),f.watch(()=>this.effectiveUnits,a=>{this._items.forEach(c=>{c.effectiveUnits=a})},f.initial)])};d.destroy=function(){this._destroyItems()};d.render=function(){return t.tsx("div",{class:q.LEGEND_CSS.base},this._items.toArray().map(a=>a.render()))};d._onExpandedToggle=
function(a){this._expandedLine=a===this._expandedLine?null:a;this._items.forEach(c=>c.expanded=c.line===this._expandedLine)};d._createItemForLine=function(a){return new r.LegendItem({line:a,effectiveUnits:this.effectiveUnits,expanded:a===this._expandedLine,checkboxVisible:1<this.profiles.length,onExpandedToggle:()=>this._onExpandedToggle(a)})};d._destroyItems=function(){this._items.drain(a=>a.destroy())};return h}(p);e.__decorate([g.property()],b.Legend.prototype,"profiles",void 0);e.__decorate([g.property()],
b.Legend.prototype,"effectiveUnits",void 0);e.__decorate([g.property()],b.Legend.prototype,"_items",void 0);e.__decorate([g.property()],b.Legend.prototype,"_expandedLine",void 0);b.Legend=e.__decorate([n.subclass("esri.widgets.ElevationProfile.Legend")],b.Legend);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});