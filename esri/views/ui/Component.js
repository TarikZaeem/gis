// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/domUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,b,l,e,m,p,n){b=function(h){function d(){var a=h.apply(this,arguments)||this;a.widget=null;return a}g._inheritsLoose(d,h);var k=d.prototype;k.destroy=function(){this.widget&&this.widget.destroy();this.node=null};
k.castNode=function(a){if(!a)return this._set("widget",null),null;if("string"===typeof a||a&&"nodeType"in a)return this._set("widget",null),l.byId(a);a&&"function"===typeof a.render&&!a.domNode&&(a.domNode=document.createElement("div"));this._set("widget",a);return a.domNode};g._createClass(d,[{key:"id",get:function(){return this.get("widget.id")||this.get("node.id")}},{key:"node",set:function(a){const f=this._get("node");a!==f&&(a&&a.classList.add("esri-component"),f&&f.classList.remove("esri-component"),
this._set("node",a))}}]);return d}(b);c.__decorate([e.property({dependsOn:[]})],b.prototype,"id",null);c.__decorate([e.property()],b.prototype,"node",null);c.__decorate([m.cast("node")],b.prototype,"castNode",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"widget",void 0);return b=c.__decorate([n.subclass("esri.views.ui.Component")],b)});