// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ./SmartMappingSliderBase ./OpacitySlider/OpacitySliderViewModel ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),function(t,e,c,k,w,B,x,y,z,C,A,h){var p;const u={trackFillColor:new c([0,121,193])};c=p=function(v){function l(a,
b){a=v.call(this,a,b)||this;a._bgFillId=null;a._rampFillId=null;a.messages=null;a.style={...u};a.viewModel=new z;a._rampFillId=`${a.id}-ramp-fill`;a._bgFillId=`${a.id}-bg-fill`;return a}t._inheritsLoose(l,v);var n=l.prototype;n.castStyle=function(a){return{...u,...a}};l.fromVisualVariableResult=function(a,b){const {visualVariable:{stops:f},statistics:d}=a,{avg:g,max:m,min:q,stddev:r}=d;return new p({max:m,min:q,stops:f,histogramConfig:{average:g,standardDeviation:r,bins:b?b.bins:[]}})};n.updateFromVisualVariableResult=
function(a,b){const {visualVariable:{stops:f},statistics:d}=a,{avg:g,max:m,min:q,stddev:r}=d;this.set({max:m,min:q,stops:f,histogramConfig:{average:g,standardDeviation:r,bins:b?b.bins:[]}})};n.render=function(){const {state:a,label:b,visibleElements:f}=this,d="disabled"===a,g=this.classes("esri-opacity-slider","esri-widget","esri-widget--panel",{["esri-disabled"]:d,["esri-opacity-slider--interactive-track"]:f.interactiveTrack});return h.tsx("div",{"aria-label":b,class:g},d?null:this.renderContent(this.renderRamp(),
"esri-opacity-slider__slider-container","esri-opacity-slider__histogram-container"))};n.renderRamp=function(){const {_bgFillId:a,_rampFillId:b,style:{trackFillColor:f},viewModel:d,zoomOptions:g}=this,m=d.getStopInfo(f);return h.tsx("div",{class:"esri-opacity-slider__ramp"},h.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},h.tsx("defs",null,this.renderRampFillDefinition(b,m),this.renderBackgroundFillDefinition(a)),h.tsx("rect",{x:"0",y:"0",fill:`url(#${a})`,height:"100%",width:"100%"}),h.tsx("rect",
{x:"0",y:"0",fill:`url(#${b})`,height:"100%",width:"100%"})),g?this.renderZoomCaps():null)};t._createClass(l,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"stops",get:function(){return this.viewModel.stops},set:function(a){this.viewModel.stops=a}}]);return l}(y.SmartMappingSliderBase);e.__decorate([k.property()],c.prototype,"label",null);e.__decorate([k.property(),A.messageBundle("esri/widgets/smartMapping/OpacitySlider/t9n/OpacitySlider")],
c.prototype,"messages",void 0);e.__decorate([k.property()],c.prototype,"stops",null);e.__decorate([k.property()],c.prototype,"style",void 0);e.__decorate([w.cast("style")],c.prototype,"castStyle",null);e.__decorate([k.property()],c.prototype,"viewModel",void 0);return c=p=e.__decorate([x.subclass("esri.widgets.smartMapping.OpacitySlider")],c)});