// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Evented ../../../core/has ../../../core/maybe ../../../core/promiseUtils".split(" "),function(g,h,f,m,n,k){const p=1/m("mapview-transitions-duration");f=function(l){function d(){var a=l.apply(this,arguments)||this;a._fadeOutResolver=null;a._fadeInResolver=null;a._clips=null;a.computedVisible=!0;a.computedOpacity=1;a.fadeTransitionEnabled=!1;a.inFadeTransition=!1;a._isReady=!1;a._opacity=1;a.parent=null;a._stage=null;a._visible=
!0;return a}h._inheritsLoose(d,l);var b=d.prototype;b._getTransforms=function(){n.isNone(this._transforms)&&(this._transforms=this._createTransforms());return this._transforms};b.fadeIn=function(){if(this._fadeInResolver)return this._fadeInResolver.promise;this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null);this.opacity=1;this.computedOpacity=0;this.fadeTransitionEnabled=!0;this._fadeInResolver=k.createResolver();this.requestRender();return this._fadeInResolver.promise};b.fadeOut=
function(){if(this._fadeOutResolver)return this._fadeOutResolver.promise;this.opacity=0;this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null);this.fadeTransitionEnabled=!0;this._fadeOutResolver=k.createResolver();this.requestRender();return this._fadeOutResolver.promise};b.endTransitions=function(){this._fadeInResolver?.();this._fadeInResolver=null;this._fadeOutResolver?.();this._fadeOutResolver=null;this.computedOpacity=this.visible?this.opacity:0;this.requestRender()};b.beforeRender=
function(a){this.updateTransitionProperties(a.deltaTime,a.state.scale)};b.afterRender=function(a){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)};b.remove=function(){this.parent?.removeChild(this)};b.setTransform=function(a){};b.processRender=function(a){this.stage&&this.computedVisible&&this.doRender(a)};b.requestRender=function(){this.stage&&
this.stage.requestRender()};b.processDetach=function(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null);this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null);this.onDetach();this.emit("detach")};b.updateTransitionProperties=function(a,c){if(this.fadeTransitionEnabled){c=this._fadeOutResolver||!this.visible?0:this.opacity;const e=this.computedOpacity;e===c?this.computedVisible=this.visible:(a*=p,this.computedOpacity=e>c?Math.max(c,e-a):Math.min(c,e+a),
this.computedVisible=0<this.computedOpacity,a=c===this.computedOpacity,this.inFadeTransition=!a,a||this.requestRender())}else this.computedOpacity=this.opacity,this.computedVisible=this.visible};b.onAttach=function(){};b.onDetach=function(){};b.doRender=function(a){};b.ready=function(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())};h._createClass(d,[{key:"clips",get:function(){return this._clips},set:function(a){this._clips=a;this.requestRender()}},{key:"isReady",get:function(){return this._isReady}},
{key:"opacity",get:function(){return this._opacity},set:function(a){this._opacity!==a&&(this._opacity=Math.min(1,Math.max(a,0)),this.requestRender())}},{key:"stage",get:function(){return this._stage},set:function(a){if(this._stage!==a){var c=this._stage;(this._stage=a)?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):c?.trashDisplayObject(this)}}},{key:"transforms",get:function(){return this._getTransforms()}},{key:"visible",get:function(){return this._visible},set:function(a){this._visible!==
a&&(this._visible=a,this.requestRender())}}]);return d}(f);g.DisplayObject=f;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});