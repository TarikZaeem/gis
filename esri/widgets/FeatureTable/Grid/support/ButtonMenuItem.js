// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/decorators/cast ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass".split(" "),function(k,c,b,d,l,n,m){var e;b=e=function(h){function f(a){a=h.call(this,a)||this;a.autoCloseMenu=!1;a.iconClass=null;a.items=null;a.label=null;a.open=!1;a.selected=!1;a.selectionEnabled=!1;a.clickFunction=
null;return a}k._inheritsLoose(f,h);f.prototype.castItems=function(a){return a?a.map(g=>g instanceof e?g:new e(g)):null};return f}(b);c.__decorate([d.property()],b.prototype,"autoCloseMenu",void 0);c.__decorate([d.property()],b.prototype,"iconClass",void 0);c.__decorate([d.property()],b.prototype,"items",void 0);c.__decorate([l.cast("items")],b.prototype,"castItems",null);c.__decorate([d.property()],b.prototype,"label",void 0);c.__decorate([d.property()],b.prototype,"open",void 0);c.__decorate([d.property()],
b.prototype,"selected",void 0);c.__decorate([d.property()],b.prototype,"selectionEnabled",void 0);c.__decorate([d.property()],b.prototype,"clickFunction",void 0);return b=e=c.__decorate([m.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenuItem")],b)});