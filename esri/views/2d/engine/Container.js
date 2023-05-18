// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/mat3f32 ../../../layers/effects/EffectView ./DisplayObject ./webgl/effects/highlight/HighlightGradient".split(" "),function(h,k,l,m,f,n){f=function(d){function e(){var a=d.apply(this,arguments)||this;a._childrenSet=new Set;a._needsSort=!1;a.children=[];a._effectView=null;a._highlightOptions=null;a._highlightGradient=null;return a}k._inheritsLoose(e,d);var b=e.prototype;b.updateTransitionProperties=function(a,c){d.prototype.updateTransitionProperties.call(this,
a,c);this._effectView&&(this._effectView.transitionStep(a,c),this._effectView.transitioning&&this.requestRender())};b.doRender=function(a){a=this.createRenderParams(a);this.renderChildren(a)};b.addChild=function(a){return this.addChildAt(a,this.children.length)};b.addChildAt=function(a,c=this.children.length){if(!a||this.contains(a))return a;this._needsSort=!0;const g=a.parent;g&&g!==this&&g.removeChild(a);c>=this.children.length?this.children.push(a):this.children.splice(c,0,a);this._childrenSet.add(a);
a.parent=this;a.stage=this.stage;this!==this.stage&&(a.clips=this.clips);this.requestRender();return a};b.contains=function(a){return this._childrenSet.has(a)};b.endTransitions=function(){d.prototype.endTransitions.call(this);this._effectView&&(this._effectView.endTransitions(),this.requestRender())};b.removeAllChildren=function(){this._childrenSet.clear();this._needsSort=!0;for(const a of this.children)this!==this.stage&&(a.clips=null),a.stage=null,a.parent=null;this.children.length=0};b.removeChild=
function(a){return this.contains(a)?this.removeChildAt(this.children.indexOf(a)):a};b.removeChildAt=function(a){if(0>a||a>=this.children.length)return null;this._needsSort=!0;a=this.children.splice(a,1)[0];this._childrenSet.delete(a);this!==this.stage&&(a.clips=null);a.stage=null;a.parent=null;return a};b.sortChildren=function(a){this._needsSort&&(this.children.sort(a),this._needsSort=!1)};b.beforeRender=function(a){d.prototype.beforeRender.call(this,a);for(const c of this.children)c.beforeRender(a)};
b.afterRender=function(a){d.prototype.afterRender.call(this,a);for(const c of this.children)c.afterRender(a)};b._createTransforms=function(){return{dvs:l.create()}};b.onAttach=function(){d.prototype.onAttach.call(this);const a=this.stage;for(const c of this.children)c.stage=a};b.onDetach=function(){d.prototype.onDetach.call(this);for(const a of this.children)a.stage=null};b.renderChildren=function(a){for(const c of this.children)c.processRender(a)};b.createRenderParams=function(a){return{...a,blendMode:this.blendMode,
effects:this.computedEffects,globalOpacity:a.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||a.highlightGradient}};k._createClass(e,[{key:"blendMode",get:function(){return this._blendMode},set:function(a){this._blendMode=a;this.requestRender()}},{key:"clips",get:function(){return this._clips},set:function(a){this._clips=a;this.children.forEach(c=>c.clips=a)}},{key:"computedEffects",get:function(){return this._effectView?.effects??
null}},{key:"effect",get:function(){return this._effectView?.effect??""},set:function(a){if(this._effectView||a)this._effectView||(this._effectView=new m.EffectView),this._effectView.effect=a,this.requestRender()}},{key:"highlightOptions",get:function(){return this._highlightOptions},set:function(a){a?this._highlightOptions&&this._highlightOptions.equals(a)||(this._highlightOptions=a,this._highlightGradient||(this._highlightGradient=new n),this._highlightGradient.setHighlightOptions(a),this.requestRender()):
(this._highlightOptions=null,this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()))}}]);return e}(f.DisplayObject);h.Container=f;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});