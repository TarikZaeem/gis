// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/HandleOwner ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass".split(" "),function(k,c,b,n,f,l,e,r,t,p){b=function(m){function g(a){a=m.call(this,a)||this;a._expressionTrackingHandles=new Map;a.visibilityExpressionExecutor=null;a.feature=null;a.groupElement=
null;return a}k._inheritsLoose(g,m);var h=g.prototype;h.initialize=function(){this.addHandles([l.watch(()=>[this.visible,this.inputFields],([a])=>{const {inputFields:d}=this;a=a?void 0:!1;for(const q of d)q.required=a},{initial:!0,equals:(a,d)=>d[0]===a[0]&&d[1]===a[1]})])};h.destroy=function(){for(const a of this._expressionTrackingHandles.values())a.remove()};h._dirtyEvaluatedVisibilityExpression=function(){const {groupElement:a}=this;f.isSome(a)&&a.visibilityExpression&&this.notifyChange("evaluatedVisibilityExpression")};
k._createClass(g,[{key:"visibilityExpression",get:function(){return f.unwrap(this.groupElement)?.visibilityExpression},set:function(a){f.applySome(this.groupElement,d=>{d.visibilityExpression=a})}},{key:"evaluatedVisibilityExpression",get:function(){const {visibilityExpressionExecutor:a}=this;return f.isSome(a)?!!a.lastEvaluatedValue:null}},{key:"description",get:function(){return f.unwrap(this.groupElement)?.description},set:function(a){f.applySome(this.groupElement,d=>{d.description=a})}},{key:"inputFields",
get:function(){return this._get("inputFields")},set:function(a){this.handles.removeAll();a&&this.handles.add(a.map(d=>l.watch(()=>d.visible,()=>this._dirtyEvaluatedVisibilityExpression())));this._set("inputFields",a)}},{key:"label",get:function(){return f.unwrap(this.groupElement)?.label},set:function(a){f.applySome(this.groupElement,d=>{d.label=a})}},{key:"state",get:function(){return f.isSome(this.groupElement)&&this.groupElement.initialState||"expanded"},set:function(a){this._overrideIfSome("state",
a)}},{key:"visible",get:function(){return!1!==this.evaluatedVisibilityExpression&&this.inputFields&&this.inputFields.some(a=>a.visible)}}]);return g}(n.HandleOwnerMixin(b));c.__decorate([e.property()],b.prototype,"visibilityExpression",null);c.__decorate([e.property()],b.prototype,"visibilityExpressionExecutor",void 0);c.__decorate([e.property()],b.prototype,"evaluatedVisibilityExpression",null);c.__decorate([e.property()],b.prototype,"description",null);c.__decorate([e.property()],b.prototype,"feature",
void 0);c.__decorate([e.property()],b.prototype,"groupElement",void 0);c.__decorate([e.property()],b.prototype,"initialFeature",void 0);c.__decorate([e.property()],b.prototype,"inputFields",null);c.__decorate([e.property()],b.prototype,"label",null);c.__decorate([e.property()],b.prototype,"state",null);c.__decorate([e.property()],b.prototype,"visible",null);return b=c.__decorate([p.subclass("esri.widgets.FeatureForm.InputFieldGroup")],b)});