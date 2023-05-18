// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ./Handles ./maybe ./accessorSupport/beforeDestroy ./accessorSupport/get ./accessorSupport/metadata ./accessorSupport/Properties ./accessorSupport/set ./accessorSupport/watch ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(p,x,l,y,z,A,B,C,u,D,E){function F(d){if(null==d)return{value:d};if(Array.isArray(d))return{type:[d[0]],value:null};switch(typeof d){case "object":return d.constructor?.__accessorMetadata__||
d instanceof Date?{type:d.constructor,value:d}:d;case "boolean":return{type:Boolean,value:d};case "string":return{type:String,value:d};case "number":return{type:Number,value:d};case "function":return{type:d,value:null}}}const f=Symbol("Accessor-Handles"),q=Symbol("Accessor-Initialized");let I=function(){function d(...a){this[G]=null;this[H]=!1;if(this.constructor===d)throw Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,
"__accessor__",{enumerable:!1,value:new B(this)});0<a.length&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,a))}d.createSubclass=function(a={}){if(Array.isArray(a))throw Error("Multi-inheritance unsupported since 4.16");const {properties:b,declaredClass:g,constructor:v}=a;delete a.declaredClass;delete a.properties;delete a.constructor;const r=this;let n=function(e){function k(...m){var h=e.call(this,...m)||this;h.inherited=null;v&&v.apply(p._assertThisInitialized(h),
m);return h}p._inheritsLoose(k,e);return k}(r);A.getPropertiesMetadata(n.prototype);for(const e in a){const k=a[e];n.prototype[e]="function"===typeof k?function(...m){const h=this.inherited;this.inherited=function(...t){if(r.prototype[e])return r.prototype[e].apply(this,t)};let w=void 0;try{w=k.apply(this,m)}catch(t){throw this.inherited=h,t;}this.inherited=h;return w}:a[e]}for(const e in b)a=F(b[e]),D.property(a)(n.prototype,e);return E.subclass(g)(n)};var c=d.prototype;c.postscript=function(a){const b=
this.__accessor__;a=b.ctorArgs||a;b.initialize();a&&(this.set(a),b.ctorArgs=null);b.constructed();this.initialize();this[q]=!0};c.initialize=function(){};c[y.BEFORE_DESTROY_SYMBOL]=function(){this[f]=l.destroyMaybe(this[f])};c.destroy=function(){this.destroyed||(u.removeTarget(this),this.__accessor__.destroy())};c.commitProperty=function(a){this.get(a)};c.get=function(a){return z.get(this,a)};c.hasOwnProperty=function(a){return this.__accessor__?this.__accessor__.has(a):Object.prototype.hasOwnProperty.call(this,
a)};c.keys=function(){return this.__accessor__?this.__accessor__.keys():[]};c.set=function(a,b){C.set(this,a,b);return this};c.watch=function(a,b,g){return u.watch(this,a,b,g)};c.own=function(a){this.addHandles(a)};c.addHandles=function(a,b){let g=this[f];l.isNone(g)&&(g=this[f]=new x);g.add(a,b)};c.removeHandles=function(a){const b=this[f];l.isNone(b)||b.remove(a)};c.hasHandles=function(a){const b=this[f];return l.isSome(b)?b.has(a):!1};c._override=function(a,b){void 0===b?this.__accessor__.clearOverride(a):
this.__accessor__.override(a,b)};c._clearOverride=function(a){return this.__accessor__.clearOverride(a)};c._overrideIfSome=function(a,b){null==b?this.__accessor__.clearOverride(a):this.__accessor__.override(a,b)};c._isOverridden=function(a){return this.__accessor__.isOverridden(a)};c.notifyChange=function(a){this.__accessor__.notifyChange(a)};c._get=function(a){return this.__accessor__.internalGet(a)};c._set=function(a,b){this.__accessor__.internalSet(a,b);return this};p._createClass(d,[{key:"constructed",
get:function(){return this.__accessor__&&this.__accessor__.initialized||!1}},{key:"initialized",get:function(){return this[q]}},{key:"destroyed",get:function(){return this.__accessor__&&this.__accessor__.destroyed||!1}}]);return d}();var G=f;var H=q;return I});