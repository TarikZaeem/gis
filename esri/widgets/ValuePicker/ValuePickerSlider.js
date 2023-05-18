// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../Slider ../support/widgetUtils ../support/jsxFactory ./ValuePickerBaseComponent ./ValuePickerSliderVisibleElements".split(" "),function(t,c,q,d,b,G,y,z,H,u,A,v){function r(p){return(m,h)=>{h.classList.add(p)}}b=function(p){function m(a,e){a=p.call(this,
a,e)||this;a._majorTickCreatedFunction=r("esri-value-picker__slider__tick-major");a._minorTickCreatedFunction=r("esri-value-picker__slider__tick-minor");a._stepsTickCreatedFunction=r("esri-value-picker__slider__tick-steps");a._slider=new z({visibleElements:{labels:!0}});a.labelFormatFunction=null;a.labels=null;a.min=null;a.minorTicks=null;a.majorTicks=null;a.max=null;a.reversed=!1;a.steps=null;a.type="slider";a.visibleElements=new v;return a}t._inheritsLoose(m,p);var h=m.prototype;h.initialize=function(){this.addHandles([q.watch(()=>
this.viewModel?.values,a=>{this._slider.values=a},q.initial),q.watch(()=>this._slider.values,a=>{this.viewModel&&this.viewModel.values!==a&&(this.viewModel.values=a)})])};h.destroy=function(){this._slider.destroy()};h.render=function(){const {labels:a,labelFormatFunction:e,min:k,max:g,steps:l,minorTicks:f,majorTicks:w,reversed:B,viewModel:x}=this;if(!x)return u.tsx("div",null);const {disabled:C,layout:D}=x,E=`${D}${B?"-reversed":""}`,n=[],F={labels:this.visibleElements.thumbTooltip};null!=k&&null!=
g&&(f&&n.push({mode:"position",values:f,tickCreatedFunction:this._minorTickCreatedFunction}),w&&n.push({mode:"position",values:w,tickCreatedFunction:this._majorTickCreatedFunction}),a&&n.push({mode:"position",values:a,labelsVisible:!0}),this.visibleElements.steps&&this.steps&&n.push({mode:"position",values:this.steps,tickCreatedFunction:this._stepsTickCreatedFunction}));this._slider.set({disabled:C,labelFormatFunction:e,layout:E,min:k,max:g,steps:l,tickConfigs:n,visibleElements:F});return u.tsx("div",
{class:"esri-value-picker__slider"},this._slider.render())};h.animate=function(){this._step(this._ascending?1:-1)};h.next=function(){this._step(this._ascending?1:-1)};h.previous=function(){this._step(this._ascending?-1:1)};h._step=function(a){if(this.viewModel&&this.steps?.length)if(this.viewModel.values&&this.steps.includes(this.viewModel.values[0])){var e=this.steps.indexOf(this.viewModel.values[0])+a;0>e||e>=this.steps.length?this.viewModel.loop?this.viewModel.values=[this.steps[1===a?0:this.steps.length-
1]]:"playing"===this.viewModel.state&&this.viewModel.pause():this.viewModel.values=[this.steps[e]]}else this.viewModel.values=[this.steps[0]]};t._createClass(m,[{key:"_ascending",get:function(){const {reversed:a,viewModel:e}=this;if(!e)return null;const {layout:k}=e;return"horizontal"===k&&!a||"vertical"===k&&a}},{key:"canNext",get:function(){const {_ascending:a,min:e,max:k,steps:g,viewModel:l}=this;if(null==a||null==e||null==k||!g?.length||!l)return!1;var {values:f}=l;f=f?.[0];return null==f?!0:
a?f!==g[g.length-1]:f!==g[0]}},{key:"canPlay",get:function(){return null!=this.viewModel&&!!this.steps?.length&&null!=this.min&&null!=this.max}},{key:"canPrevious",get:function(){const {_ascending:a,min:e,max:k,steps:g,viewModel:l}=this;if(null==a||null==e||null==k||!g?.length||!l)return!1;var {values:f}=l;f=f?.[0];return null==f?!0:a?f!==g[0]:f!==g[g.length-1]}}]);return m}(A);c.__decorate([d.property()],b.prototype,"_ascending",null);c.__decorate([d.property()],b.prototype,"canNext",null);c.__decorate([d.property()],
b.prototype,"canPlay",null);c.__decorate([d.property()],b.prototype,"canPrevious",null);c.__decorate([d.property()],b.prototype,"labelFormatFunction",void 0);c.__decorate([d.property()],b.prototype,"labels",void 0);c.__decorate([d.property()],b.prototype,"min",void 0);c.__decorate([d.property()],b.prototype,"minorTicks",void 0);c.__decorate([d.property()],b.prototype,"majorTicks",void 0);c.__decorate([d.property()],b.prototype,"max",void 0);c.__decorate([d.property({nonNullable:!0})],b.prototype,
"reversed",void 0);c.__decorate([d.property()],b.prototype,"steps",void 0);c.__decorate([d.property()],b.prototype,"type",void 0);c.__decorate([d.property({type:v,nonNullable:!0})],b.prototype,"visibleElements",void 0);return b=c.__decorate([y.subclass("esri.widgets.ValuePicker.ValuePickerSlider")],b)});