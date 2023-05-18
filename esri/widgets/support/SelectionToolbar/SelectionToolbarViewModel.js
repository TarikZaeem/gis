// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Evented ../../../core/handleUtils ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../Selector2D".split(" "),function(h,c,b,n,k,d,r,t,p,q){b=function(l){function f(a){a=l.call(this,a)||this;a._operationHandlesGroup=null;a.activeOperation=null;a.layers=null;a.selector=new q;
return a}h._inheritsLoose(f,l);var e=f.prototype;e.destroy=function(){this._operationHandlesGroup=k.removeMaybe(this._operationHandlesGroup);this.selector.destroy()};e.cancel=function(){"active"===this.state&&(this.activeOperation?.cancel(),this.activeOperation=null);this.selector.candidates=null};e.activate=function(a){const {state:m}=this;if("disabled"!==m)return"active"===m&&this.cancel(),this.selector.candidates=this._candidates,a=this.selector.draw(a),this._operationHandlesGroup=n.handlesGroup([a.once("complete",
g=>this._onOperationComplete(g)),a.on("selection-change",g=>this._onOperationSelectionChange(g))]),this.activeOperation=a};e._onOperationSelectionChange=function(a){this.emit("selection-change",a)};e._onOperationComplete=function(a){this._operationHandlesGroup=k.removeMaybe(this._operationHandlesGroup);this.activeOperation=null;this.emit("complete",a)};h._createClass(f,[{key:"_candidates",get:function(){return this.layers?.flatMap(a=>a.graphics.toArray())??[]}},{key:"state",get:function(){return this.activeOperation?
"active":this.view?.ready&&this.layers?.length?"ready":"disabled"}},{key:"view",set:function(a){this.selector.view=a;this._set("view",a)}}]);return f}(b.EventedAccessor);c.__decorate([d.property()],b.prototype,"_candidates",null);c.__decorate([d.property()],b.prototype,"activeOperation",void 0);c.__decorate([d.property()],b.prototype,"layers",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"selector",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property()],
b.prototype,"view",null);return b=c.__decorate([p.subclass("esri.widgets.support.SelectionToolbar.SelectionToolbarViewModel")],b)});