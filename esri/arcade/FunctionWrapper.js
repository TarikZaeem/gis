// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../chunks/_rollupPluginBabelHelpers","../core/promiseUtils"],function(g,r,t){function m(c,d,e){if(c instanceof h&&!(c instanceof k)){const a=new k;a.fn=c;a.parameterEvaluator=e;a.context=d;return a}return c}let h=function(){},u=function(c){function d(a){var b=c.call(this)||this;b.fn=a;return b}r._inheritsLoose(d,c);var e=d.prototype;e.createFunction=function(a){return(...b)=>this.fn(a,{preparsed:!0,arguments:b})};e.call=function(a,b){return this.fn(a,b)};e.marshalledCall=function(a,
b,n,p){return p(a,b,(l,v,q)=>{q=q.map(f=>f instanceof h&&!(f instanceof k)?m(f,a,p):f);l=this.call(n,{args:q});return t.isPromiseLike(l)?l.then(f=>m(f,n,p)):l})};return d}(h),k=function(c){function d(){var a=c.apply(this,arguments)||this;a.fn=null;a.context=null;return a}r._inheritsLoose(d,c);var e=d.prototype;e.createFunction=function(a){return this.fn.createFunction(this.context)};e.call=function(a,b){return this.fn.marshalledCall(a,b,this.context,this.parameterEvaluator)};e.marshalledCall=function(a,
b,n){return this.fn.marshalledCall(a,b,this.context,this.parameterEvaluator)};return d}(h);g.ArcadeFunction=h;g.NativeFunction=u;g.ScopeMarshalledFunction=k;g.wrapModuleScopedResponse=m;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});