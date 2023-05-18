// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Color ../../../../geometry ../../../../analysis/dimensionUtils ../../../../analysis/LengthDimension ../../../../core/HandleOwner ../../../../core/Handles ../../../../core/lang ../../../../core/maybe ../../../../core/memoize ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3f64 ../../../../layers/graphics/hydratedFeatures ./lengthDimensionConstraintUtils ./lengthDimensionManipulatorUtils ./lengthDimensionUtils ./settings ../Slice/images/Factory ../../interactive/SnappingVisualizer3D ../../interactive/visualElements/LineVisualElement ../../interactive/visualElements/VerticesVisualElement ../../webgl-engine/lib/Material ../../webgl-engine/materials/ImageMaterial ../../webgl-engine/materials/lineStippleUtils ../../webgl-engine/materials/RibbonLineMaterial ../../../interactive/coordinateHelper ../../../interactive/editGeometry/EditGeometry ../../../interactive/editGeometry/EditGeometryOperations ../../../interactive/snapping/SceneSnappingManagerPool ../../../interactive/snapping/SnappingContext ../../../interactive/snapping/SnappingDragPipelineStep ../../../interactive/snapping/SnappingOperation ../../../interactive/snapping/snappingUtils ../../../../geometry/Point".split(" "),
function(k,L,n,G,na,u,S,T,U,M,d,V,N,l,p,oa,W,O,H,v,h,A,w,X,Y,Z,aa,x,ba,P,ca,da,ea,fa,ha,ia,ja,ka,la,I){function J(){const {color:B,opacity:y}=w.settings.offsetManipulator;return new ca.RibbonLineMaterial({color:[...G.toUnitRGB(B),y],width:1,renderOccluded:x.RenderOccludedFlag.OccludeAndTransparent,writeDepth:!1,hasPolygonOffset:!0})}k.LengthDimensionSubTool=function(B){function y(b){var a=B.call(this,b)||this;a._stagedDimension=null;a._computationManipulators=new Map;a._computationHandles=new U;a._getSnappingContext=
V.memoize(e=>new ia.SnappingContext({elevationInfo:{mode:"absolute-height",offset:0},pointer:e,editGeometryOperations:new fa.EditGeometryOperations(new ea.EditGeometry("point",da.createCoordinateHelper(!0,!1,a.view.spatialReference))),visualizer:new Y.SnappingVisualizer3D}));a._snappingManagerResult=ha.acquire(b.view);a.addHandles(a._snappingManagerResult);a._unfocusedOffsetManipulatorMaterial=J();a._focusedOffsetManipulatorMaterial=J();a._thinOffsetManipulatorMaterial=J();a._thinOffsetManipulatorMaterial.setParameters({stipplePattern:P.createStipplePatternSimple(2)});
a._constraintSnappingIndicator=new Z.LineVisualElement({view:b.view,attached:!0,width:1,color:G.toUnitRGBA(w.settings.constraint.color),renderOccluded:x.RenderOccludedFlag.OccludeAndTransparent,stipplePattern:P.createStipplePatternSimple(5)});const c=G.toUnitRGBA(w.settings.disabledPointIndicator.color);c[3]*=w.settings.disabledPointIndicator.opacity;a._stagedStartIndicator=new aa.VerticesVisualElement({view:b.view,attached:!1,color:c,size:2*w.settings.disabledPointIndicator.radius,elevationInfo:{mode:"absolute-height",
offset:0},spatialReference:b.view.renderCoordsHelper.spatialReference,outlineSize:0,renderOccluded:x.RenderOccludedFlag.OccludeAndTransparent});return a}L._inheritsLoose(y,B);var g=y.prototype;g.initialize=function(){this._snappingOperation=new ka.SnappingOperation({view:this.view});this._orientationManipulatorTexture=X.getRotateHeadingTexture(this.view.toolViewManager.textures);this._orientationManipulatorMaterial=new ba.ImageMaterial({transparent:!0,writeDepth:!1,textureId:this._orientationManipulatorTexture.texture.id,
renderOccluded:x.RenderOccludedFlag.Opaque});const {computations:b}=this.analysisViewData;for(const a of b)this._addComputation(a);this.addHandles([b.on("after-add",a=>this._addComputation(a.item)),b.on("after-remove",a=>this._removeComputation(a.item))]);this.addHandles([l.watch(()=>({stagedPoint:this._snappingOperation.stagedPoint,stagedComputation:this._stagedComputation}),({stagedPoint:a,stagedComputation:c})=>{d.isNone(c)||d.isNone(a)||(a=H.clonePoint(a,new I),this._applyPointUpdate(c,{endPoint:a}))},
l.sync),l.watch(()=>({stagedDimension:this._stagedDimension,selectedComputation:this.analysisViewData.selectedComputation,firstGrabbedManipulator:this.firstGrabbedManipulator}),(a,c)=>{const {stagedDimension:e,selectedComputation:f,firstGrabbedManipulator:m}=a;if(e!==c?.stagedDimension||m!==c?.firstGrabbedManipulator)for(const [q,z]of this._computationManipulators)this._updateManipulators(q,z,a);else for(const q of[f,c?.selectedComputation])d.isSome(q)&&(c=this._computationManipulators.get(q),this._updateManipulators(q,
c,a))},l.syncAndInitial),l.watch(()=>this.analysis.style.lineSize,a=>{this._updateManipulatorStyle(a)},l.initial),l.watch(()=>this.view.state.camera,()=>{d.isSome(this._stagedComputation)&&this._updateStagedDimensionOffset(this._stagedComputation)}),l.watch(()=>d.applySome(this._stagedComputation,a=>{a=a.elevationAlignedStartPoint;const c=O.create();return d.isSome(a)&&this.view.renderCoordsHelper.toRenderCoords(a,c)?c:null}),a=>{d.isSome(a)?(this._stagedStartIndicator.vertices=[a],this._stagedStartIndicator.attached=
!0):this._stagedStartIndicator.attached=!1})]);this.addHandles(this._constraintHandles);this.addHandles(this._snappingIndicatorHandles);la.setupSnappingToggleHandles(this,()=>{const a=this._activeComputation;var c=this._stagedComputation;if(d.isNone(a)||d.isSome(c))c=d.unwrapOr(this.view.inputManager.latestPointerType,"mouse"),c=this._getSnappingContext(c),this.updatingHandles.addPromise(N.ignoreAbortErrors(this._snappingOperation.resnap(this._snappingManager,c)));if(d.isSome(a)){const {start:e,end:f}=
this._computationManipulators.get(a);if(e.grabbing||f.grabbing){c=e.grabbing?"start":"end";const m=this._computeConstraint(a);v.reapplyConstraint(a,c,{constraint:m,view:this.view})}}})};g.destroy=function(){this._snappingOperation=d.destroyMaybe(this._snappingOperation);this._computationHandles.destroy();this._constraintSnappingIndicator.destroy();this._stagedStartIndicator.destroy();this._orientationManipulatorMaterial.dispose();this._orientationManipulatorTexture.release()};g.removeStaged=function(){return d.isSome(this._stagedDimension)?
(this.analysis.dimensions.remove(this._stagedDimension),this._stagedDimension=null,!0):!1};g.onDeactivate=function(){this.removeStaged();this._resetSnappingState()};g.onClick=function(b){const {_stagedDimension:a}=this;if(d.isNone(a))return b=this._onUnstagedClick(b),this.analysis.dimensions.add(b),null;this._onStagedClick(b);return a};g.onPointerMove=function({mapPoint:b,pointerType:a}){"touch"!==a&&(a=this._getSnappingContext(a),this.updatingHandles.addPromise(N.ignoreAbortErrors(this._snappingOperation.snap({point:b},
this._snappingManager,a))))};g.onManipulatorSelectionChanged=function(){d.isSome(this.analysisViewData.selectedComputation)&&!this._computationManipulators.get(this.analysisViewData.selectedComputation).offset.selected&&(this.analysisViewData.selectedDimension=null)};g._onUnstagedClick=function({mapPoint:b,pointerType:a}){let c=b;"mouse"===a&&(a=this._getSnappingContext(a),c=this._snappingManager.update({point:b,context:a}));this._stagedDimension=b=new S({startPoint:H.clonePoint(c,new I),endPoint:null,
measureType:u.LengthDimensionMeasureType.Horizontal});this._resetSnappingState();return b};g._onStagedClick=function({mapPoint:b,pointerType:a}){const c=this._stagedComputation;if(!d.isNone(c)){var e=b;"mouse"===a&&(a=this._getSnappingContext(a),e=this._snappingManager.update({point:b,context:a}));b=H.clonePoint(e,new I);this._applyPointUpdate(c,{endPoint:b});this._stagedDimension=null;this._resetSnappingState()}};g._resetSnappingState=function(){this._snappingManager.doneSnapping();this._snappingOperation.abort();
this._snappingOperation.stagedPoint=null};g._addComputation=function(b){if(!this._computationManipulators.has(b)){var a=this._setupPointManipulator(b,{isStart:!0}),c=this._setupPointManipulator(b,{isStart:!1}),e=this._setupOffsetManipulator(b),f=this._setupHeadingManipulator(b),m=this._setupRotationManipulator(b),q=this._setupMeasureTypeManipulator(b,u.LengthDimensionMeasureType.Direct),z=this._setupMeasureTypeManipulator(b,u.LengthDimensionMeasureType.Horizontal),C=this._setupMeasureTypeManipulator(b,
u.LengthDimensionMeasureType.Vertical);a=new h.LengthDimensionManipulators({start:a,end:c,offset:e,heading:f,rotation:m,direct:q,horizontal:z,vertical:C});this._setupComputationToManipulatorsSync(b,a);this._computationManipulators.set(b,a);this.manipulators.addMany(a.values())}};g._removeComputation=function(b){const a=this._computationManipulators.get(b);if(!d.isNone(a)){this._computationHandles.remove(b);this._computationManipulators.delete(b);for(const c of a.values())this.manipulators.remove(c)}};
g._setupComputationToManipulatorsSync=function(b,a){this._computationHandles.add([l.watch(()=>b.geometry,()=>this._updateManipulators(b,a),{...l.syncAndInitial,equals:M.equals})],b)};g._setupPointManipulator=function(b,a){const {view:c}=this,{dimension:e}=b,f=h.createPointManipulator(c,{metadata:e});a=h.pointManipulatorHandles(f,{isStart:a.isStart,createSnappingPipelineStep:m=>ja.createSnapDragEventPipelineStep({snappingContext:this._getSnappingContext(m),snappingManager:this._snappingManager,updatingHandles:this.updatingHandles}),
dimension:e,onUpdate:m=>this._applyPointUpdate(b,m),view:c});this._computationHandles.add(a,b);return f};g._setupOffsetManipulator=function(b){var {view:a}=this;const c=h.createOffsetManipulator(a,{lineSizePt:this.analysis.style.lineSize,unfocusedMaterial:this._unfocusedOffsetManipulatorMaterial,focusedMaterial:this._focusedOffsetManipulatorMaterial,metadata:b.dimension});a=h.offsetManipulatorHandles(c,{computation:b,view:a});this._computationHandles.add(a,b);return c};g._setupHeadingManipulator=
function(b){var {view:a}=this;const c=h.createOrientationManipulator(a,{lineSizePt:this.analysis.style.lineSize,material:this._orientationManipulatorMaterial,metadata:b.dimension});a=h.headingManipulatorHandles(c,{computation:b,view:a});this._computationHandles.add(a,b);return c};g._setupRotationManipulator=function(b){var {view:a}=this;const c=h.createOrientationManipulator(a,{lineSizePt:this.analysis.style.lineSize,material:this._orientationManipulatorMaterial,metadata:b.dimension});a=h.rotationManipulatorHandles(c,
{computation:b,view:a});this._computationHandles.add(a,b);return c};g._setupMeasureTypeManipulator=function(b,a){const {view:c}=this,e=h.createMeasureTypeManipulator(c,{lineSizePt:this.analysis.style.lineSize,unfocusedMaterial:this._unfocusedOffsetManipulatorMaterial,focusedMaterial:this._focusedOffsetManipulatorMaterial,thinOffsetManipulatorMaterial:this._thinOffsetManipulatorMaterial,metadata:b.dimension});a=h.measureTypeManipulatorHandles(e,{computation:b,manipulatorMeasureType:a,view:c});this._computationHandles.add(a,
b);return e};g._updateManipulators=function(b,a,c={stagedDimension:this._stagedDimension,selectedComputation:this.analysisViewData.selectedComputation,firstGrabbedManipulator:this.firstGrabbedManipulator}){const {stagedDimension:e,selectedComputation:f,firstGrabbedManipulator:m}=c,{start:q,end:z,offset:C,heading:D,rotation:E}=a;c=f===b;const Q=A.isValidComputation(b),{dimension:K}=b;for(var r of a.values()){const t=Q&&d.isNone(e)&&(d.isNone(m)||r===m);r===C?(r.available=t,r.selected=c):r.available=
t&&c}if(Q){d.isSome(this._computeConstraint(b))?a.forEachMeasureTypeManipulator(t=>t.available=!1):a.manipulatorForMeasureType(K.measureType).available=!1;for(const t of[D,E])if(K.measureType!==u.LengthDimensionMeasureType.Direct||0===K.offset)t.available=!1;A.arePointsVerticallyAligned(b)?E.available=!1:D.available=!1;({geometry:r}=b);q.renderLocation=r.directSegment.startRenderSpace;z.renderLocation=r.directSegment.endRenderSpace;var {renderCoordsHelper:F}=this.view;h.updateOffsetManipulatorTransform(C,
r,F);D.available&&h.updateHeadingManipulatorTransform(D,b,F);E.available&&h.updateRotationManipulatorTransform(E,b,F);a.forEachMeasureTypeManipulator((t,ma)=>{t.available&&h.updateMeasureTypeManipulatorTransform(t,b,ma,F)})}};g._updateManipulatorStyle=function(b){const a=h.unfocusedOffsetWidth(b),c=h.focusedOffsetWidth(b);b={lineSizePt:b,material:this._orientationManipulatorMaterial};for(const {offset:e,heading:f,rotation:m}of this._computationManipulators.values())e.radius=c/2,h.updateOrientationManipulator(f,
b),h.updateOrientationManipulator(m,b);this._unfocusedOffsetManipulatorMaterial.setParameters({width:a});this._focusedOffsetManipulatorMaterial.setParameters({width:c})};g._applyPointUpdate=function(b,a){const {view:c}=this,e=A.computationToGeometryDependencies(b);"startPoint"in a&&(e.elevationAlignedStartPoint=a.startPoint);"endPoint"in a&&(e.elevationAlignedEndPoint=a.endPoint);const f=A.computeGeometryFromDimension(e,c.renderCoordsHelper);if(!d.isNone(f)){var m=this._computeConstraint({...e,geometry:f});
v.applyConstraint(b,a,{...e,constraint:m,unconstrainedGeometry:f,view:c});b===this._stagedComputation&&this._updateStagedDimensionOffset(b)}};g._updateStagedDimensionOffset=function(b){if(!d.isNone(b.geometry)){b.geometry.directSegment.eval(.5,R);var a=this.view.state.camera.computeRenderPixelSizeAt(R);b.dimension.offset=w.settings.initialOffsetPx*a}};g._computeConstraint=function(b){return v.computeConstraint(v.constraintDependencies(b,this._snappingManager.options),this.view)};L._createClass(y,
[{key:"updating",get:function(){return this.updatingHandles.updating||this._snappingManager.updating}},{key:"firstGrabbedManipulator",get:function(){return this.parentTool.firstGrabbedManipulator}},{key:"hasGrabbedManipulators",get:function(){return this.parentTool.hasGrabbedManipulators}},{key:"snappingOptions",get:function(){return this._snappingManager.options}},{key:"_snappingManager",get:function(){return this._snappingManagerResult.snappingManager}},{key:"_activeComputation",get:function(){if(d.isSome(this._stagedComputation))return this._stagedComputation;
const {selectedComputation:b}=this.analysisViewData;return this.hasGrabbedManipulators&&d.isSome(b)?b:null}},{key:"_stagedComputation",get:function(){const b=this._stagedDimension,a=this.analysisViewData.computations.at(-1);return d.isNone(b)||d.isNone(a)||a.dimension!==b?null:a}},{key:"_constraintHandles",get:function(){return[l.when(()=>this.analysisViewData.selectedComputation,b=>{b.previousConstraint=this._computeConstraint(b)},{...l.syncAndInitial,equals:M.equals}),l.watch(()=>{const b=this._activeComputation;
if(d.isNone(b))return null;const {measureType:a,orientation:c}=b.dimension;return{measureType:a,orientation:c,computation:b}},(b,a)=>{if(d.isSome(b)&&d.isNone(a)){const {measureType:c,orientation:e,computation:f}=b;switch(f.previousConstraint){case v.LengthDimensionConstraint.Horizontal:f.preConstraintProperties={measureType:u.LengthDimensionMeasureType.Horizontal,orientation:0};break;case v.LengthDimensionConstraint.Vertical:f.preConstraintProperties={measureType:u.LengthDimensionMeasureType.Vertical,
orientation:0};break;case v.LengthDimensionConstraint.Direct:f.preConstraintProperties={measureType:u.LengthDimensionMeasureType.Direct,orientation:e};break;default:f.preConstraintProperties={measureType:c,orientation:e}}}d.isNone(b)&&d.isSome(a)&&(a.computation.preConstraintProperties=null)},l.sync)]}},{key:"_snappingIndicatorHandles",get:function(){return[l.watch(()=>({stagedComputation:this._stagedComputation,activeComputation:this._activeComputation}),({stagedComputation:b,activeComputation:a})=>
{const c=this._constraintSnappingIndicator;this.removeHandles("snapping-indicator-event-handles");if(d.isNone(a))c.attached=!1;else if(a===b)c.attached=!0;else{const {start:e,end:f}=this._computationManipulators.get(a);b=()=>{c.attached=e.grabbing||f.grabbing};b();this.addHandles([e.events.on("grab-changed",b),f.events.on("grab-changed",b)],"snapping-indicator-event-handles")}}),l.watch(()=>{const b=this._activeComputation;return d.isSome(b)?{geometry:b.geometry,constraint:b.previousConstraint}:{}},
({geometry:b,constraint:a})=>{const c=this._constraintSnappingIndicator;d.isSome(b)&&d.isSome(a)&&a!==v.LengthDimensionConstraint.Direct?(c.visible=!0,c.setGeometryFromSegment(b.directSegment)):c.visible=!1})]}},{key:"testInfo",get:function(){const b=a=>this.analysisViewData.computations.find(c=>c.dimension===a);return{disableManipulatorPartialOcclusion:()=>{this._stagedStartIndicator.renderOccluded=x.RenderOccludedFlag.Occlude;this.manipulators.forEach(({manipulator:a})=>{for(const {geometry:c}of a.renderObjects)c.material.setParameters({renderOccluded:x.RenderOccludedFlag.Occlude})})},
getManipulatorsForDimension:a=>this._computationManipulators.get(b(a)),getComputationForDimension:a=>b(a),getConstraintForDimension:a=>{a=b(a);return d.isSome(a)?this._computeConstraint(a):null},stagedDimension:this._stagedDimension,stagedStartIndicator:this._stagedStartIndicator,constraintSnappingIndicator:this._constraintSnappingIndicator,snappingManager:this._snappingManager}}}]);return y}(T.HandleOwner);n.__decorate([p.property({constructOnly:!0})],k.LengthDimensionSubTool.prototype,"analysis",
void 0);n.__decorate([p.property({constructOnly:!0})],k.LengthDimensionSubTool.prototype,"analysisViewData",void 0);n.__decorate([p.property({constructOnly:!0})],k.LengthDimensionSubTool.prototype,"manipulators",void 0);n.__decorate([p.property({constructOnly:!0})],k.LengthDimensionSubTool.prototype,"parentTool",void 0);n.__decorate([p.property({constructOnly:!0,nonNullable:!0})],k.LengthDimensionSubTool.prototype,"view",void 0);n.__decorate([p.property({readOnly:!0})],k.LengthDimensionSubTool.prototype,
"updating",null);n.__decorate([p.property()],k.LengthDimensionSubTool.prototype,"firstGrabbedManipulator",null);n.__decorate([p.property()],k.LengthDimensionSubTool.prototype,"hasGrabbedManipulators",null);n.__decorate([p.property()],k.LengthDimensionSubTool.prototype,"snappingOptions",null);n.__decorate([p.property()],k.LengthDimensionSubTool.prototype,"_stagedDimension",void 0);n.__decorate([p.property()],k.LengthDimensionSubTool.prototype,"_activeComputation",null);n.__decorate([p.property()],
k.LengthDimensionSubTool.prototype,"_stagedComputation",null);k.LengthDimensionSubTool=n.__decorate([W.subclass("esri.views.3d.analysis.Dimension.LengthDimensionSubTool")],k.LengthDimensionSubTool);const R=O.create();Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});