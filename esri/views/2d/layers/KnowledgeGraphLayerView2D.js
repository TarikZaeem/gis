// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./LayerView2D ../../layers/LayerView".split(" "),function(g,e,m,h,k,c,r,n,p,q){c=function(l){function d(a){a=l.call(this,a)||this;a.layerViews=new m;return a}g._inheritsLoose(d,l);var b=d.prototype;b.attach=
function(){this._updateStageChildren();this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))};b.detach=function(){this.container.removeAllChildren()};b.update=function(a){};b.moveStart=function(){};b.viewChange=function(){};b.moveEnd=function(){};b._updateStageChildren=function(){this.container.removeAllChildren();this.layerViews.forEach((a,f)=>this.container.addChildAt(a.container,f))};g._createClass(d,[{key:"layerViews",set:function(a){this._set("layerViews",
h.referenceSetter(a,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce((a,f)=>a+f.updatingProgress,0)/this.layerViews.length}}]);return d}(p.LayerView2DMixin(q));e.__decorate([k.property({cast:h.castForReferenceSetter})],c.prototype,"layerViews",null);e.__decorate([k.property({readOnly:!0})],c.prototype,"updatingProgress",null);return c=e.__decorate([n.subclass("esri.views.2d.layers.KnowledgeGraphLayerView2D")],c)});