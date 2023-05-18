// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../analysis/Slice/sliceToolUtils","../../../../interactive/dragEventPipeline"],function(d,g,e,h,k){let l=function(){function c(){this._next=this._lastDragEvent=null;this._enabled=!1}var f=c.prototype;f.createDragEventPipelineStep=function(){this._lastDragEvent=null;const a=new k.EventPipeline;this._next=a;return[b=>{this._lastDragEvent="end"!==b.action?{...b}:null;this._enabled&&this._adjustScaleFactors(b);
return b},a]};f._adjustScaleFactors=function(a){const b=h.isDiagonalResizeHandle(a.handle)?Math.max(Math.abs(a.factor1),Math.abs(a.factor2)):0===a.handle.direction[0]?Math.abs(a.factor2):Math.abs(a.factor1);a.factor1=0>a.factor1?-b:b;a.factor2=0>a.factor2?-b:b};g._createClass(c,[{key:"enabled",get:function(){return this._enabled},set:function(a){if(this._enabled!==a&&e.isSome(this._lastDragEvent)&&e.isSome(this._next)){const b={...this._lastDragEvent,action:"update"};a&&this._adjustScaleFactors(b);
this._next.execute(b)}this._enabled=a}},{key:"test",get:function(){return{_adjustScaleFactors:a=>this._adjustScaleFactors(a)}}}]);return c}();d.PreserveAspectRatio=l;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});