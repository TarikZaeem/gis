// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/arrayUtils ../../core/handleUtils ../../core/maybe ../../core/reactiveUtils ../../core/uuid ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/support/layerUtils ../../views/draw/support/helpMessageUtils ../../views/interactive/snapping/FeatureSnappingLayerSource ./CreateFeaturesWorkflowData ./Workflow ./workflowUtils".split(" "),
function(k,z,H,B,p,C,I,D,x,L,J,M,N,O,P,u){var E;const F=Symbol();x=E=function(K){function y(a){a=K.call(this,a)||this;a.type="create-features";a.createFeatureState="create-new";a._featureFormHandle=null;a._visualVariableAttributes={rotation:null,size:null};a._attachmentFileInfos=new Map;a._highlightHandles=new Map;a._preventDefaultActionOnCancel=!1;a._lastActiveGraphics=[];return a}k._inheritsLoose(y,K);var v=y.prototype;v.updatePendingFeature=function(){var a=k._asyncToGenerator(function*(f,b){this._preventDefaultActionOnCancel=
!0;this.data.viewModel.sketchViewModel.cancel();H.remove(this._lastActiveGraphics,f);return this._startUpdating(f,b)});return function(f,b){return a.apply(this,arguments)}}();y.create=function(a,f,b,h,r){const l=new E({data:new O.CreateFeaturesWorkflowData({creationInfo:p.unwrap(f),viewModel:a}),onCommit:function(){var m=k._asyncToGenerator(function*(e){var d=e.viewModel.sketchViewModel.layer.graphics.toArray();e=e.creationInfo.layer;var g=e.capabilities.editing.supportsGlobalId&&"globalIdField"in
e;const A=l._attachmentFileInfos;0===A.size?yield h(e,{addFeatures:d}):g?(d=l._getAttachmentEditsWithGlobalIds(d,e,A),yield h(e,d,"addAttachments"in d?{globalIdUsed:!0}:void 0)):({addFeatureResults:g}=yield h(e,{addFeatures:d}),d=l._getAddAttachmentsData(d,g,e,A),yield r(e,d))});return function(e){return m.apply(this,arguments)}}()});l._set("steps",this._createWorkflowSteps(l,b));return l};v._fadeExistingFeatures=function(a){if("effect"in a){const b=a.effect;a.effect="saturate(0.6) opacity(0.8)";
return B.makeHandle(()=>a.effect=b)}const f=a.opacity;a.opacity=.7;return B.makeHandle(()=>a.opacity=f)};v._highlight=function(a){const f=this.data.viewModel.view;"3d"===f?.type&&this._highlightHandles.set(a,f.highlight(a))};v._removeHighlight=function(a){p.removeMaybe(this._highlightHandles.get(a));this._highlightHandles.delete(a)};v._startCreating=function(){var a=k._asyncToGenerator(function*(f){this.createFeatureState="create-new";return u.startCreatingNewFeature(this.data.viewModel.sketchViewModel,
this.data.creationInfo,f)});return function(f){return a.apply(this,arguments)}}();v._startUpdating=function(){var a=k._asyncToGenerator(function*(f,b){const {featureFormViewModel:h,layerInfos:r,sketchViewModel:l,view:m}=this.data.viewModel;if(m){var e=this.data.creationInfo.layer,d=u.findLayerInfo(r,e);h.set({arcadeEditType:"INSERT",feature:f,formTemplate:d?.formTemplate,spatialReference:m.spatialReference,view:m});p.removeMaybe(this._featureFormHandle);this._featureFormHandle=B.handlesGroup([h.on("value-change",
k._asyncToGenerator(function*(){f.attributes=h.getValues();yield u.updateGraphicSymbolWhenRequired(f,b)})),l.on(["update","undo","redo"],g=>{("undo"===g.type||"redo"===g.type||"update"===g.type&&p.isSome(g.toolEventInfo)&&u.isTerminalUpdateEventType(g.toolEventInfo.type))&&h.notifyFeatureGeometryChanged()})]);this._removeHighlight(f);this.createFeatureState="update-pending";this._visualVariableAttributes=u.getVisualVariableAttributes(f);return u.startUpdatingFeature(l,f,e,this._visualVariableAttributes,
b)}});return function(f,b){return a.apply(this,arguments)}}();y._createWorkflowSteps=function(a,f="awaiting-feature-creation-info"){const {data:b,handles:h}=a;let r=null,l=!0;const m=new Map;f=u.createWorkflowSteps(["awaiting-feature-creation-info","creating-features","adding-attachment","editing-attachment"],f,{"awaiting-feature-creation-info":()=>({id:"awaiting-feature-creation-info",setUp(){var e=this;return k._asyncToGenerator(function*(){b.creationInfo=null;h.add(b.viewModel.featureTemplatesViewModel.on("select",
({item:d})=>{d&&(b.creationInfo=d,b.viewModel.activeWorkflow?.next())}),e.id)})()},tearDown(){var e=this;return k._asyncToGenerator(function*(){h.remove(e.id)})()}}),"creating-features":()=>({id:"creating-features",setUp(){var e=this;return k._asyncToGenerator(function*(){if(!h.has(e.id)){var d=b.viewModel.view;if(d){var g=b.viewModel.sketchViewModel;l=g.updateOnGraphicClick;g.updateOnGraphicClick=!1;a._lastActiveGraphics=[];a._featureFormHandle=p.removeMaybe(a._featureFormHandle);a._visualVariableAttributes=
{rotation:null,size:null};u.prepareAttachmentsForCreateWorkflow(b.viewModel.attachmentsViewModel);var A="2d"===d.type?a._fadeExistingFeatures(b.creationInfo.layer):null,Q=g.on("create",function(){var q=k._asyncToGenerator(function*(c){if("cancel"===c.state){if(a._preventDefaultActionOnCancel){a._preventDefaultActionOnCancel=!1;return}if(1>a._lastActiveGraphics.length)return a._startCreating(m);c=a._lastActiveGraphics.pop();return a._startUpdating(c,m)}if("complete"===c.state&&c.graphic)return a._startUpdating(c.graphic,
m)});return function(c){return q.apply(this,arguments)}}()),S=g.on("update",function(){var q=k._asyncToGenerator(function*(c){var n=c.graphics[0];if("complete"===c.state){n!==r&&(a._lastActiveGraphics.push(n),a._highlight(n));r=null;"add"!==b.viewModel.attachmentsViewModel.mode&&"edit"!==b.viewModel.attachmentsViewModel.mode||b.viewModel.activeWorkflow?.previous();if(c.aborted&&a._preventDefaultActionOnCancel){a._preventDefaultActionOnCancel=!1;return}const w=d.cursor;d.cursor="progress";h.add([B.makeHandle(()=>
d.cursor=w),d.on("click",G=>G.preventDefault())],F);return C.whenOnce(()=>!b.viewModel.featureFormViewModel.updating).then(()=>{h.remove(F);a._startCreating(m)})}if("start"===c.state){a._removeHighlight(n);const w=b.viewModel.attachmentsViewModel;"add"!==w.mode&&"edit"!==w.mode||b.viewModel.activeWorkflow?.previous();w.fileInfos.removeAll();w.graphic=n;w.mode="view";(a._attachmentFileInfos.get(n)||[]).forEach(({file:G,form:R})=>w.addFile(G,R))}yield u.visualVariableInteractiveUpdate(d,n,c,a._visualVariableAttributes,
m);c=n.attributes;p.isSome(a._visualVariableAttributes.rotation)&&({field:n}=a._visualVariableAttributes.rotation,b.viewModel.featureFormViewModel.setValue(n,c[n]));p.isSome(a._visualVariableAttributes.size)&&({field:n}=a._visualVariableAttributes.size,b.viewModel.featureFormViewModel.setValue(n,c[n]))});return function(c){return q.apply(this,arguments)}}()),T=g.on("delete",function(){var q=k._asyncToGenerator(function*(c){c=c.graphics[0];H.remove(a._lastActiveGraphics,c);r=c});return function(c){return q.apply(this,
arguments)}}()),t=null,U=C.watch(()=>{const q=g.snappingOptions.featureSources.find(c=>c.layer===b.creationInfo.layer);return{hasFeatureLayerSource:!!q,enabled:q?.enabled??!1}},({hasFeatureLayerSource:q,enabled:c})=>{const n=g.snappingOptions.featureSources;q?(p.isNone(t)&&(t=new N({layer:g.layer,enabled:c}),n.add(t)),t.enabled=c):(p.isSome(t)&&n.remove(t),t=p.destroyMaybe(t))},C.syncAndInitial),V=d.on("immediate-click",function(){var q=k._asyncToGenerator(function*(c){({results:c}=yield d.hitTest(c,
{include:g.layer}));if(c=c.find(n=>"graphic"===n.type))c=c.graphic,"transform"!==g.activeTool&&"reshape"!==g.activeTool||g.updateGraphics.getItemAt(0)===c||(yield a.updatePendingFeature(c,m))});return function(c){return q.apply(this,arguments)}}()),W=C.watch(()=>b.viewModel.attachmentsViewModel.mode,q=>{"add"===q&&b.viewModel.activeWorkflow.go("adding-attachment");"edit"===q&&b.viewModel.activeWorkflow.go("editing-attachment")});yield a._startCreating(m);h.add({remove:()=>{p.removeMaybe(a._featureFormHandle);
Q.remove();S.remove();T.remove();U.remove();p.isSome(t)&&g.snappingOptions.featureSources.remove(t);t=p.destroyMaybe(t);g.cancel();V.remove();W.remove();p.removeMaybe(A)}},e.id)}}})()},tearDown(e){var d=this;return k._asyncToGenerator(function*(){e.cancelled&&(b.viewModel.sketchViewModel.layer.removeAll(),h.remove([d.id,F]),b.viewModel.attachmentsViewModel.fileInfos.removeAll(),a._attachmentFileInfos.clear(),b.viewModel.sketchViewModel.updateOnGraphicClick=l)})()}}),"adding-attachment":()=>({id:"adding-attachment",
parent:"creating-features",setUp(){return k._asyncToGenerator(function*(){})()},tearDown(){return k._asyncToGenerator(function*(){const {graphic:e,fileInfos:d}=b.viewModel.attachmentsViewModel;a._attachmentFileInfos.set(e,d.toArray());b.viewModel.attachmentsViewModel.mode="view"})()}}),"editing-attachment":()=>({id:"editing-attachment",parent:"creating-features",setUp(){return k._asyncToGenerator(function*(){})()},tearDown(){return k._asyncToGenerator(function*(){const {graphic:e,fileInfos:d}=b.viewModel.attachmentsViewModel;
a._attachmentFileInfos.set(e,d.toArray());b.viewModel.attachmentsViewModel.mode="view"})()}})});return u.avoidFeatureTemplateSelectionWithOnlyOneItem(b,f)};v._getAddAttachmentsData=function(a,f,b,h){const r=[];f.forEach((l,m)=>{if(!l.error){const e=a[m];m=h.get(e)||[];e.attributes[b.objectIdField]=l.objectId;m.forEach(({form:d})=>r.push({feature:e,attachment:d}))}});return r};v._getAttachmentEditsWithGlobalIds=function(a,f,b){const h=[],r=f.globalIdField;a.forEach((l,m)=>{const e=b.get(l)||[];let d=
l.attributes[r];p.isNone(d)&&(d=I.generateUUID(),a[m].attributes[r]=d);e.forEach(({file:g})=>h.push({feature:l,attachment:{globalId:I.generateUUID(),data:g}}))});return h.length?{addFeatures:a,addAttachments:h}:{addFeatures:a}};k._createClass(y,[{key:"numPendingFeatures",get:function(){return this.data.viewModel.sketchViewModel.layer.graphics.length}},{key:"pendingFeatures",get:function(){return this.data.viewModel.sketchViewModel.layer.graphics}},{key:"reliesOnOwnerAdminPrivileges",get:function(){const {layer:a}=
this.data.creationInfo,f=a.capabilities?.operations.supportsAdd,b=J.getEffectiveLayerCapabilities(a)?.operations.supportsAdd;return J.getEffectiveEditingEnabled(a)&&!a.editingEnabled||!!b&&!f}},{key:"shouldShowAttachments",get:function(){return this.data&&this.data.creationInfo&&this.data.viewModel?u.shouldShowAttachmentsForCreateWorkflow(this.data):!1}},{key:"shouldAllowAttachmentEditing",get:function(){return this.shouldShowAttachments}},{key:"helpMessage",get:function(){if("creating-features"===
this.stepId){var {creationInfo:a,viewModel:f}=this.data;return M.getDrawHelpMessage(a.layer.geometryType,f.sketchViewModel.createGraphic?.geometry)}}}]);return y}(P);z.__decorate([D.property()],x.prototype,"reliesOnOwnerAdminPrivileges",null);z.__decorate([D.property()],x.prototype,"shouldShowAttachments",null);z.__decorate([D.property()],x.prototype,"shouldAllowAttachmentEditing",null);z.__decorate([D.property()],x.prototype,"helpMessage",null);return x=E=z.__decorate([L.subclass("esri.widgets.Editor.CreateFeaturesWorkflow")],
x)});