// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../../renderers/visualVariables/support/SizeStop ../../symbols/support/cimSymbolUtils ./SmartMappingSliderBase ./BinaryColorSizeSlider/BinaryColorSizeSliderViewModel ./support/utils ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),
function(A,k,d,B,n,G,M,H,C,D,I,J,x,K,L,r){var y;const E={trackBackgroundColor:new d([224,224,224]),trackAboveFillColor:new d([149,149,149]),trackBelowFillColor:new d([149,149,149])};d=y=function(F){function t(a,b){a=F.call(this,a,b)||this;a._minRampFillWidth=.2;a._rampNode=null;a._rampFillId=null;a.messages=null;a.style={...E};a.viewModel=new J;a._rampFillId=`${a.id}-linear-gradient`;return a}A._inheritsLoose(t,F);var m=t.prototype;m.castStyle=function(a){return{...E,...a}};t.fromRendererResult=function(a,
b){const {size:{visualVariables:c},statistics:e}=a,{avg:f,stddev:l}=e,u=c[0].stops;var g=a.renderer.authoringInfo.visualVariables[0];const z=g.minSliderValue;g=g.maxSliderValue;a=a.renderer.classBreakInfos;let v,w=null;const p=h=>"cim"===h.type?D.getCIMSymbolColor(h):h.symbolLayers?(h.symbolLayers?.getItemAt(0)).material?.color:h.color;if(1<a.length){var q=a[1].symbol;v=p(a[0].symbol);q=p(q)}1===a.length&&(w=p(a[0].symbol));return new y({max:g,min:z,stops:u,histogramConfig:{average:f,standardDeviation:l,
bins:b?b.bins:[]},style:{trackAboveFillColor:q,trackBelowFillColor:v,trackFillColor:w},handlesSyncedToPrimary:!0,persistSizeRangeEnabled:!0})};m.updateFromRendererResult=function(a,b){const {size:{visualVariables:c},statistics:e}=a,{avg:f,stddev:l}=e,u=c[0].stops;var g=a.renderer.authoringInfo.visualVariables[0];const z=g.minSliderValue;g=g.maxSliderValue;a=a.renderer.classBreakInfos;let v,w=null;const p=h=>"cim"===h.type?D.getCIMSymbolColor(h):h.symbolLayers?(h.symbolLayers?.getItemAt(0)).material?.color:
h.color;if(1<a.length){var q=a[1].symbol;v=p(a[0].symbol);q=p(q)}1===a.length&&(w=p(a[0].symbol));this.set({max:g,min:z,stops:u,histogramConfig:{average:f,standardDeviation:l,bins:b?b.bins:[]},style:{trackAboveFillColor:q,trackBelowFillColor:v,trackFillColor:w},handlesSyncedToPrimary:!0,persistSizeRangeEnabled:!0})};m.updateRenderer=function(a){if("univariate-color-size"!==a.authoringInfo?.type||"above-and-below"!==a.authoringInfo?.univariateTheme)return console.error("Input renderer must be a univariate renderer with an above-and-below theme."),
null;a=a.clone();var b=a.visualVariables.find(f=>"size"===f.type&&"outline"!==f.target&&f.stops);const {stops:c}=this;if(!b||!c)return console.error("No size stops available."),null;const e=a.visualVariables.indexOf(b);a.visualVariables.splice(e,1);b.stops=c;a.visualVariables.push(b);b=c[5===c.length?2:1].value;a.classBreakInfos[0].maxValue=b;a.classBreakInfos[1].minValue=b;return a};m.updateFromVisualVariable=function(a){if(a){var {maxDataValue:b,minDataValue:c,stops:e}=a;if(e)this.stops=e;else{const [f,
l]=x.getSizesFromVariable(a);this.stops=[new C({value:c,size:l}),new C({value:b,size:f})]}}};m.render=function(){const {label:a,state:b,viewModel:{primaryHandleEnabled:c},visibleElements:e}=this,f="disabled"===b,l=this.classes("esri-binary-color-size-slider","esri-widget","esri-widget--panel",{["esri-disabled"]:f,["esri-binary-color-size-slider--primary-handle"]:c,["esri-binary-color-size-slider--interactive-track"]:e.interactiveTrack});return r.tsx("div",{"aria-label":a,class:l},f?null:this.renderContent(this.renderRamp(),
"esri-binary-color-size-slider__slider-container","esri-binary-color-size-slider__histogram-container"))};m.renderRamp=function(){const {style:{trackBackgroundColor:a},zoomOptions:b}=this;return r.tsx("div",{afterCreate:K.storeNode,bind:this,class:"esri-binary-color-size-slider__ramp","data-node-ref":"_rampNode"},r.tsx("svg",{key:"ramp-svg",xmlns:"http://www.w3.org/2000/svg"},r.tsx("rect",{x:"0",y:"0",fill:x.getFillFromColor(a),height:"100%",width:"100%"}),this.renderPrimaryRamp(),this.renderPath()),
b?this.renderZoomCaps():null)};m.renderPrimaryRamp=function(){const {_rampFillId:a,style:{trackAboveFillColor:b,trackBelowFillColor:c},viewModel:e}=this;return[r.tsx("defs",null,this.renderRampFillDefinition(a,e.getGradientStopInfo(b,c)))]};m.renderPath=function(){if(this._rampNode){var {offsetHeight:a=0,offsetWidth:b=0}=this._rampNode;if(!B.isNone(a)&&!B.isNone(b)){var {stops:c,viewModel:{max:e,min:f},_rampFillId:l,_minRampFillWidth:u}=this,g=x.getDynamicPathForSizeStops({max:e,min:f,pathHeight:a,
pathWidth:b,stops:c,padding:u});return r.tsx("path",{d:g,fill:`url(#${l})`})}}};A._createClass(t,[{key:"handlesSyncedToPrimary",get:function(){return this.viewModel.handlesSyncedToPrimary},set:function(a){this.viewModel.handlesSyncedToPrimary=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"persistSizeRangeEnabled",get:function(){return this.viewModel.persistSizeRangeEnabled},set:function(a){this.viewModel.persistSizeRangeEnabled=
a}},{key:"stops",get:function(){return this.viewModel.stops},set:function(a){this.viewModel.stops=a}}]);return t}(I.SmartMappingSliderBase);k.__decorate([n.property()],d.prototype,"handlesSyncedToPrimary",null);k.__decorate([n.property()],d.prototype,"label",null);k.__decorate([n.property(),L.messageBundle("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")],d.prototype,"messages",void 0);k.__decorate([n.property()],d.prototype,"persistSizeRangeEnabled",null);k.__decorate([n.property()],d.prototype,
"stops",null);k.__decorate([n.property()],d.prototype,"style",void 0);k.__decorate([G.cast("style")],d.prototype,"castStyle",null);k.__decorate([n.property()],d.prototype,"viewModel",void 0);return d=y=k.__decorate([H.subclass("esri.widgets.smartMapping.BinaryColorSizeSlider")],d)});