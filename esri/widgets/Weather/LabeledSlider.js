// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../Widget ../support/widgetUtils ../support/jsxFactory ./css".split(" "),function(h,b,m,d,e,t,u,n,p,v,f,q){b.LabeledSlider=function(k){function g(a){var c=k.call(this,a)||this;c._onChange=r=>{c.onChange(r.target.value)};return c}m._inheritsLoose(g,k);var l=g.prototype;
l.render=function(){const {label:a}=this;return f.tsx("div",{class:q.LABELED_SLIDER_CSS.base},f.tsx("calcite-label",{scale:"s"},a,f.tsx("calcite-slider",{"aria-label":a,disabled:this.disabled,max:1,min:0,step:.01,value:this.value,onCalciteSliderInput:this._onChange,onCalciteSliderChange:this._onChange})))};l.loadDependencies=function(){return Promise.all([new Promise((a,c)=>h(["../../chunks/calcite-label"],a,c)),new Promise((a,c)=>h(["../../chunks/calcite-slider"],a,c))])};return g}(p);d.__decorate([e.property()],
b.LabeledSlider.prototype,"value",void 0);d.__decorate([e.property()],b.LabeledSlider.prototype,"onChange",void 0);d.__decorate([e.property()],b.LabeledSlider.prototype,"disabled",void 0);b.LabeledSlider=d.__decorate([n.subclass("esri.widgets.Weather.LabeledSlider")],b.LabeledSlider);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});