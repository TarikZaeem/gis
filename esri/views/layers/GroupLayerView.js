// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/collectionUtils ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ./LayerView".split(" "),function(l,f,r,m,n,d,h,e,v,t,u){e=function(p){function g(a){a=p.call(this,a)||this;a.type="group";a.layerViews=new r;return a}l._inheritsLoose(g,p);var c=g.prototype;
c._allLayerViewVisibility=function(a){this.layerViews.forEach(b=>{b.visible=a})};c.initialize=function(){this.handles.add([this.layerViews.on("change",a=>this._layerViewsChangeHandler(a)),d.watch(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),d.sync),d.watch(()=>this.visible,a=>{this._applyVisibility(()=>this._allLayerViewVisibility(a),()=>{})},d.sync)],"grouplayerview");this._layerViewsChangeHandler({target:null,
added:this.layerViews.toArray(),removed:[],moved:[]})};c.isUpdating=function(){return this.layerViews.some(a=>a.updating)};c._hasLayerViewVisibleOverrides=function(){return this.layerViews.some(a=>a._isOverridden("visible"))};c._findLayerViewForLayer=function(a){return a&&this.layerViews.find(b=>b.layer===a)};c._firstVisibleOnLayerOrder=function(){const a=this.layer.layers.find(b=>!!this._findLayerViewForLayer(b)?.visible);return a&&this._findLayerViewForLayer(a)};c._applyExclusiveVisibility=function(a){n.isNone(a)&&
(a=this._firstVisibleOnLayerOrder(),n.isNone(a)&&0<this.layerViews.length&&(a=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))));this.layerViews.forEach(b=>{b.visible=b===a})};c._layerViewsChangeHandler=function(a){this.handles.remove("grouplayerview:visible");this.handles.add(this.layerViews.map(k=>d.watch(()=>k.visible,q=>this._applyVisibility(()=>{q!==this.visible&&(k.visible=this.visible)},()=>this._applyExclusiveVisibility(q?k:null)),d.sync)).toArray(),"grouplayerview:visible");const b=
a.added[a.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(b?.visible?b:null))};c._applyVisibility=function(a,b){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?a():"exclusive"===this.layer?.visibilityMode&&b())};l._createClass(g,[{key:"layerViews",set:function(a){this._set("layerViews",m.referenceSetter(a,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?
1:this.layerViews.reduce((a,b)=>a+b.updatingProgress,0)/this.layerViews.length}}]);return g}(u);f.__decorate([h.property({cast:m.castForReferenceSetter})],e.prototype,"layerViews",null);f.__decorate([h.property({readOnly:!0})],e.prototype,"updatingProgress",null);f.__decorate([h.property()],e.prototype,"view",void 0);return e=f.__decorate([t.subclass("esri.views.layers.GroupLayerView")],e)});