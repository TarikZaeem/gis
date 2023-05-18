// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ./createFlowStyle ./dataUtils ./FlowContainer ./FlowStrategy".split(" "),function(l,c,t,b,m,d,z,A,u,v,q,w,x){b=function(r){function n(){var a=r.apply(this,arguments)||
this;a._loadImagery=(e,g,h,k,p)=>q.loadImagery(a.layer,e,g,h,k,p);a._createFlowMesh=(e,g,h,k)=>a.layer.createFlowMesh({meshType:e,flowData:h,simulationSettings:g},{signal:k});a.attached=!1;a.type="flow";a.timeExtent=null;a.redrawOrRefetch=l._asyncToGenerator(function*(){a._updateVisualization()});return a}l._inheritsLoose(n,r);var f=n.prototype;f.attach=function(){const {layer:a}=this,e=()=>{this._loadImagery=(g,h,k,p,y)=>q.loadImagery(a,g,h,k,p,y);this._updateVisualization()};"multidimensionalDefinition"in
a?this.addHandles(m.watch(()=>a.multidimensionalDefinition,e)):this.addHandles([m.watch(()=>a.mosaicRule,e),m.watch(()=>a.renderingRule,e),m.watch(()=>a.definitionExpression,e)]);this.container=new w;this._strategy=new x({flowContainer:this.container});this._updateVisualization()};f.detach=function(){this._strategy.destroy();this.container?.removeAllChildren();this.container=null;this.removeHandles()};f.update=function(a){a.stationary?this._strategy.update(a):this.layerView.requestUpdate()};f.hitTest=
function(a){return new t({attributes:{},geometry:a.clone(),layer:this.layer})};f.moveEnd=function(){};f.doRefresh=function(){var a=l._asyncToGenerator(function*(){});return function(){return a.apply(this,arguments)}}();f._updateVisualization=function(){var a=this.layer.renderer;null!=a&&"flow"===a.type&&(a=v(a,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent}),this.container.flowStyle=a,this.layerView.requestUpdate())};l._createClass(n,[{key:"updating",
get:function(){return!this.attached||this._strategy.updating}}]);return n}(b);c.__decorate([d.property()],b.prototype,"_strategy",void 0);c.__decorate([d.property()],b.prototype,"attached",void 0);c.__decorate([d.property()],b.prototype,"container",void 0);c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property()],b.prototype,"layerView",void 0);c.__decorate([d.property()],b.prototype,"type",void 0);c.__decorate([d.property()],b.prototype,"updating",null);c.__decorate([d.property()],
b.prototype,"timeExtent",void 0);return b=c.__decorate([u.subclass("esri.views.2d.engine.flow.FlowView2D")],b)});