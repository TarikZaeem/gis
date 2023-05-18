// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./Widget ./Measurement/MeasurementViewModel ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(r,p,e,y,w,f,c,D,z,A,x,E,B,C){const u=t=>Object.freeze(Object.defineProperty({__proto__:null,default:t},
Symbol.toStringTag,{value:"Module"}));c=function(t){function v(a,b){a=t.call(this,a,b)||this;a._widgets=new Map;a.activeWidget=null;a.iconClass="esri-icon-measure";a.messages=null;a.viewModel=new x;return a}p._inheritsLoose(v,t);var g=v.prototype;g.initialize=function(){var a=this;this.activeWidget&&this.viewModel.set("activeViewModel",this.activeWidget.viewModel);this.view&&this.activeTool&&this._getActiveWidget().then(b=>{this._set("activeWidget",b)});this.addHandles([w.watch(()=>[this.view,this.activeTool],
p._asyncToGenerator(function*(){a._set("activeWidget",yield a._getActiveWidget())})),w.watch(()=>this.activeWidget,(b,h)=>{this.viewModel.set("activeViewModel",b?b.viewModel:null);h&&(h.visible=!1)}),w.watch(()=>[this.areaUnit,this.linearUnit,this.uiStrings],()=>this._updateSubWidgetProperties())])};g.destroy=function(){this._destroyWidgets()};g.render=function(){var {activeWidget:a}=this;a=a&&!a.destroyed?a.render():null;return C.tsx("div",{class:"esri-measurement"},a)};g.clear=function(){this.activeTool=
null;this._destroyWidgets()};g.startMeasurement=function(){const {activeViewModel:a}=this.viewModel;a&&y.ignoreAbortErrors(a.start())};g._createWidget=function(){var a=p._asyncToGenerator(function*(b){const {areaUnit:h,linearUnit:d,view:k}=this;switch(b){case "area":var {type:q}=k;switch(q){case "2d":return new (yield new Promise((l,m)=>r(["./AreaMeasurement2D"],n=>l(u(n)),m))).default({view:k,unit:h,uiStrings:this._createUIStringsForWidget(b)});case "3d":return new (yield new Promise((l,m)=>r(["./AreaMeasurement3D"],
n=>l(u(n)),m))).default({view:k,unit:h,uiStrings:this._createUIStringsForWidget(b)});default:return null}case "distance":switch({type:q}=k,q){case "2d":return new (yield new Promise((l,m)=>r(["./DistanceMeasurement2D"],n=>l(u(n)),m))).default({view:k,unit:d,uiStrings:this._createUIStringsForWidget(b)});default:return null}case "direct-line":switch({type:q}=k,q){case "3d":return new (yield new Promise((l,m)=>r(["./DirectLineMeasurement3D"],n=>l(u(n)),m))).default({view:k,unit:d,uiStrings:this._createUIStringsForWidget(b)});
default:return null}default:return null}});return function(b){return a.apply(this,arguments)}}();g._destroyWidgets=function(){this._widgets.forEach(a=>a.destroy());this._widgets.clear()};g._getActiveWidget=function(){var a=p._asyncToGenerator(function*(){const {activeTool:b,view:h}=this;if(!h||!b)return null;let d=null;if(this._widgets.has(b))d=this._widgets.get(b),d.visible=!0;else{d=yield this._createWidget(b);if(!d)return null;yield d.viewModel.start();this._widgets.set(b,d)}return d});return function(){return a.apply(this,
arguments)}}();g._createUIStringsForWidget=function(a){return this.uiStrings?this.uiStrings[a+"-"+this.view.type]:null};g._updateSubWidgetProperties=function(){this._widgets.forEach((a,b)=>{const {areaUnit:h,linearUnit:d}=this;a.unit="esri.widgets.AreaMeasurement2D"===a?.declaredClass||"esri.widgets.AreaMeasurement3D"===a?.declaredClass?h:d;a.uiStrings=this._createUIStringsForWidget(b)})};p._createClass(v,[{key:"activeTool",get:function(){return this.viewModel.activeTool},set:function(a){this.viewModel.activeTool=
a}},{key:"areaUnit",get:function(){return this.viewModel.areaUnit},set:function(a){this.viewModel.areaUnit=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"linearUnit",get:function(){return this.viewModel.linearUnit},set:function(a){this.viewModel.linearUnit=a}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return v}(A);e.__decorate([f.property()],c.prototype,"activeTool",
null);e.__decorate([f.property({readOnly:!0})],c.prototype,"activeWidget",void 0);e.__decorate([f.property()],c.prototype,"areaUnit",null);e.__decorate([f.property()],c.prototype,"iconClass",void 0);e.__decorate([f.property()],c.prototype,"label",null);e.__decorate([f.property()],c.prototype,"linearUnit",null);e.__decorate([f.property(),B.messageBundle("esri/widgets/Measurement/t9n/Measurement")],c.prototype,"messages",void 0);e.__decorate([f.property()],c.prototype,"uiStrings",void 0);e.__decorate([f.property()],
c.prototype,"view",null);e.__decorate([f.property({type:x})],c.prototype,"viewModel",void 0);return c=e.__decorate([z.subclass("esri.widgets.Measurement")],c)});