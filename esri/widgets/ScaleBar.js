// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/reactiveUtils ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./Widget ./ScaleBar/css ./ScaleBar/ScaleBarViewModel ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(p,g,v,w,k,q,f,x,y,b,z,B,A,d){f=function(r){function l(a,c){a=r.call(this,a,c)||this;a.messages=null;
a.unit="non-metric";a.viewModel=new z;return a}p._inheritsLoose(l,r);var h=l.prototype;h.initialize=function(){this.addHandles([v.watch(()=>{const {view:a}=this;return[a?.stationary,a?.center,a?.scale,a?.zoom]},([a])=>{a&&this.scheduleRender()})])};h.castStyle=function(a){return"line"===a?a:"ruler"};h.castUnit=function(a){return"metric"===a||"dual"===a?a:"non-metric"};h.render=function(){var a="disabled"===this.get("viewModel.state");const c={[b.CSS.disabled]:a};let e,t;if(!a){const {unit:m,style:u}=
this;a="metric"===m||"dual"===m;if("non-metric"===m||"dual"===m){const n=this.viewModel.getScaleBarProperties(50,"non-metric");n&&(t="ruler"===u?this._renderRuler(n):this._renderLine(n,"bottom"))}a&&(a=this.viewModel.getScaleBarProperties(50,"metric"))&&(e="ruler"===u?this._renderRuler(a):this._renderLine(a,"top"))}return d.tsx("div",{afterCreate:this._handleRootCreateOrUpdate,afterUpdate:this._handleRootCreateOrUpdate,bind:this,class:this.classes(b.CSS.base,c)},e,t)};h._renderRuler=function(a){const c=
2*Math.round(a.length),{messages:e}=this;a=`${2*a.value} ${e[a.unit]||e.unknownUnit}`;return d.tsx("div",{class:this.classes(b.CSS.barContainer,b.CSS.rulerBarContainer),key:"esri-scale-bar__ruler"},d.tsx("div",{class:b.CSS.ruler,styles:{width:`${c}px`}},d.tsx("div",{class:b.CSS.rulerBlock}),d.tsx("div",{class:b.CSS.rulerBlock}),d.tsx("div",{class:b.CSS.rulerBlock}),d.tsx("div",{class:b.CSS.rulerBlock})),d.tsx("div",{class:this.classes(b.CSS.labelContainer,b.CSS.rulerLabelContainer)},d.tsx("div",{class:b.CSS.label},
"0"),d.tsx("div",{class:b.CSS.label},a)))};h._renderLine=function(a,c){var {messages:e}=this;e=`${2*a.value} ${e[a.unit]||e.unknownUnit}`;e=d.tsx("div",{class:this.classes(b.CSS.labelContainer,b.CSS.lineLabelContainer,{[b.CSS.topLabelContainer]:"top"===c,[b.CSS.bottomLabelContainer]:"bottom"===c}),key:"esri-scale-bar__label"},d.tsx("div",{class:b.CSS.label},e));a=2*Math.round(a.length);c=d.tsx("div",{class:this.classes(b.CSS.line,{[b.CSS.topLine]:"top"===c,[b.CSS.bottomLine]:"bottom"===c}),key:"esri-scale-bar__line",
styles:{width:`${a}px`}});return d.tsx("div",{class:this.classes(b.CSS.barContainer,b.CSS.lineBarContainer),key:"esri-scale-bar__line-container"},[c,e])};h._handleRootCreateOrUpdate=function(a){const c=this.viewModel;c&&(a=a.getBoundingClientRect(),a=w.createScreenPoint(a.left+window.pageXOffset,a.top+window.pageYOffset),a.x!==c.scaleComputedFrom.x||a.y!==c.scaleComputedFrom.y)&&(c.scaleComputedFrom=a)};p._createClass(l,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",
a)}},{key:"style",set:function(a){this._set("style","dual"===this.unit?"line":a)}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return l}(y);g.__decorate([k.property()],f.prototype,"label",null);g.__decorate([k.property(),A.messageBundle("esri/widgets/ScaleBar/t9n/ScaleBar")],f.prototype,"messages",void 0);g.__decorate([k.property()],f.prototype,"style",null);g.__decorate([q.cast("style")],f.prototype,"castStyle",null);g.__decorate([k.property()],
f.prototype,"unit",void 0);g.__decorate([q.cast("unit")],f.prototype,"castUnit",null);g.__decorate([k.property()],f.prototype,"view",null);g.__decorate([k.property()],f.prototype,"viewModel",void 0);return f=g.__decorate([x.subclass("esri.widgets.ScaleBar")],f)});