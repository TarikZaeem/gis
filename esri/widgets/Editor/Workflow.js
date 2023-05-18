// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/Evented ../../core/HandleOwner ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass".split(" "),function(f,d,n,b,p,e,r,t,q){b=function(m){function k(a){a=m.call(this,a)||this;a._indexHistory=[];a._lastStepIndex=-1;a._stepIndex=-1;a._handleKeys={afterCommit:"after-commit",beforeCommit:"before-commit"};
a.data=void 0;a.started=!1;a.steps=[];a.type=null;return a}f._inheritsLoose(k,m);var g=k.prototype;g.cancel=function(){var a=f._asyncToGenerator(function*(c={force:!0}){return!1!==c.force?this._cancel():new Promise((h,l)=>{this.emit("cancel-request",{controller:{allow:()=>{this._cancel().then(h)},deny:()=>l(new n("workflow:cancel-denied","Request to cancel workflow was denied."))}})})});return function(){return a.apply(this,arguments)}}();g.commit=function(){var a=f._asyncToGenerator(function*(){this.handles.remove(this._handleKeys.beforeCommit);
yield this.onCommit(this.data);this.handles.remove(this._handleKeys.afterCommit);this.emit("commit");this.started&&(yield this.reset())});return function(){return a.apply(this,arguments)}}();g.go=function(){var a=f._asyncToGenerator(function*(c){var {steps:h}=this;h=h.findIndex(l=>l.id===c);this._indexHistory.push(this._stepIndex);yield this._go(h)});return function(c){return a.apply(this,arguments)}}();g.next=function(){var a=f._asyncToGenerator(function*(){this._indexHistory.push(this._stepIndex);
yield this._go(this._stepIndex+1)});return function(){return a.apply(this,arguments)}}();g.previous=function(){var a=f._asyncToGenerator(function*(c={cancelCurrentStep:!1}){yield this._go(this._indexHistory.pop(),c.cancelCurrentStep)});return function(){return a.apply(this,arguments)}}();g.reset=function(){var a=f._asyncToGenerator(function*(){yield this._cancel(!1);yield this.start()});return function(){return a.apply(this,arguments)}}();g.start=function(){var a=f._asyncToGenerator(function*(){this._set("started",
!0);yield this._go(-1===this._stepIndex?0:this._stepIndex)});return function(){return a.apply(this,arguments)}}();g._cancel=function(){var a=f._asyncToGenerator(function*(c=!0){this.started&&(this._set("started",!1),yield this.steps[this._stepIndex].tearDown({cancelled:!0}),this.data&&this.data.viewModel.sketchViewModel.layer.removeAll());this.handles.remove([this._handleKeys.afterCommit,this._handleKeys.beforeCommit]);this._resetIndexing(c);c&&this.emit("cancel")});return function(){return a.apply(this,
arguments)}}();g._go=function(){var a=f._asyncToGenerator(function*(c=-1,h=!1){-1>=c||c>=this.steps.length||(this.started&&(-1<this._lastStepIndex&&(yield this.steps[this._lastStepIndex].tearDown({cancelled:h})),yield this.steps[c].setUp(),this._lastStepIndex=c),this._stepIndex=c,this._notifyStepProps())});return function(){return a.apply(this,arguments)}}();g._resetIndexing=function(a=!0){this._lastStepIndex=this._stepIndex=-1;this._indexHistory.length=0;a&&this._notifyStepProps()};g._notifyStepProps=
function(){this.notifyChange("stepId");this.notifyChange("hasPreviousStep");this.notifyChange("hasNextStep")};f._createClass(k,[{key:"hasNextStep",get:function(){const {steps:a}=this;return!!(a&&this._stepIndex<a.filter(c=>!c.parent).length-1)}},{key:"hasPreviousStep",get:function(){return 0<this._stepIndex}},{key:"reliesOnOwnerAdminPrivileges",get:function(){return!1}},{key:"shouldShowAttachments",get:function(){return!1}},{key:"shouldAllowAttachmentEditing",get:function(){return!1}},{key:"stepId",
get:function(){var {steps:a}=this;return(a=a&&a[this._stepIndex])&&a.id}},{key:"helpMessage",get:function(){}}]);return k}(p.HandleOwnerMixin(b.EventedAccessor));d.__decorate([e.property()],b.prototype,"data",void 0);d.__decorate([e.property()],b.prototype,"hasNextStep",null);d.__decorate([e.property()],b.prototype,"hasPreviousStep",null);d.__decorate([e.property()],b.prototype,"onCommit",void 0);d.__decorate([e.property()],b.prototype,"reliesOnOwnerAdminPrivileges",null);d.__decorate([e.property()],
b.prototype,"shouldShowAttachments",null);d.__decorate([e.property()],b.prototype,"shouldAllowAttachmentEditing",null);d.__decorate([e.property()],b.prototype,"started",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"stepId",null);d.__decorate([e.property()],b.prototype,"steps",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"type",void 0);d.__decorate([e.property()],b.prototype,"helpMessage",null);d.__decorate([e.property()],b.prototype,"commit",null);return b=d.__decorate([q.subclass("esri.widgets.Editor.Workflow")],
b)});