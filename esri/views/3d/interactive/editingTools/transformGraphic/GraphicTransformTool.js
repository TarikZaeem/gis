// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Evented ../../../../../core/HandleOwner ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/quantityUtils ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/Point ../../../../../support/elevationInfoUtils ../../../../ViewingMode ../../Manipulator3D ../../manipulatorUtils ../../SnappingVisualizer3D ../manipulatorUtils ../visualElementUtils ../manipulations/config ../manipulations/MoveManipulation ../manipulations/moveUtils ./GraphicScaleRotateTransform ./ScaleRotateMeshAdapter ./ScaleRotateObjectSymbol3DAdapter ./undoRecords ../../../layers/graphics/GraphicState ../../../../interactive/dragEventPipeline ../../../../interactive/InteractiveToolBase ../../../../interactive/editGeometry/EditGeometryOperations ../../../../interactive/sketch/SketchTooltipOptions ../../../../interactive/snapping/SnappingContext ../../../../interactive/snapping/SnappingDragPipelineStep ../../../../interactive/tooltip/Tooltip ../../../../interactive/tooltip/TranslateTooltipInfos ../../../../support/automaticLengthMeasurementUtils ../../../../support/euclideanLengthMeasurementUtils".split(" "),
function(e,y,h,E,F,G,c,z,t,k,ea,fa,H,I,J,K,L,M,N,A,O,P,m,Q,R,S,T,U,V,W,X,Y,B,Z,aa,ba,w,C,ca){e.GraphicTransformTool=function(D){function u(a){a=D.call(this,a)||this;a.enableZ=!0;a.enableRotation=!0;a.enableScaling=!0;a.tooltipOptions=new B;a.type="transform-3d";a._scaleRotate=null;a._tooltip=null;return a}y._inheritsLoose(u,D);var f=u.prototype;f.initialize=function(){const {graphic:a,view:d}=this;this.graphicState=new V.GraphicState({graphic:a});this.addHandles(t.watch(()=>this.tooltipOptions.enabled,
b=>{this._tooltip=b?new ba.Tooltip({view:d}):c.destroyMaybe(this._tooltip)},t.syncAndInitial));this._moveManipulation=new m.MoveManipulation({tool:this,view:d,snapToScene:this.snapToScene,xyAvailable:!0,xyAxisAvailable:!0,zAvailable:this.enableZ&&A.canMoveZ(a),radius:m.MoveManipulation.radiusForSymbol(a.symbol)});this._moveManipulation.forEachManipulator(b=>this.handles.add(b.events.on("immediate-click",l=>{this.emit("immediate-click",{...l,graphic:a});l.stopPropagation()})));const p=b=>l=>{this.handles.add(l.events.on("focus-changed",
({action:n})=>{const q=this._tooltip;c.isNone(q)||("focus"===n?this._updateMoveTooltip(b):q.clear())}))};this._moveManipulation.xyManipulation.forEachManipulator(p(m.ManipulationType.XY));this._moveManipulation.xyAxisManipulation.forEachManipulator(p(m.ManipulationType.XY_AXIS));this._moveManipulation.zManipulation.forEachManipulator(p(m.ManipulationType.Z));const g=J.getGraphicEffectiveElevationInfo(a);this._moveManipulation.elevationInfo=g;const r=a.geometry;this._moveManipulation.createGraphicDragPipeline((b,
l,n,q,x)=>{if(c.isSome(r)&&b===m.ManipulationType.XY){const {snappingStep:v,cancelSnapping:da}=aa.createSnapDragEventPipelineStep({snappingContext:new Z.SnappingContext({elevationInfo:g,pointer:x,editGeometryOperations:Y.EditGeometryOperations.fromGeometry(new I({spatialReference:r.spatialReference}),d.state.viewingMode),visualizer:new N.SnappingVisualizer3D,excludeFeature:a}),snappingManager:this.snappingManager,updatingHandles:this.updatingHandles,useZ:!1});q=q.next(da);n=n.next(W.sceneSnappingAtProjectedLocation(this.view,
g)).next(...v)}n=n.next(v=>{this._updateMoveTooltip(b,v);return v});return{steps:n,cancel:q}},this.graphicState,b=>{const {action:l,graphic:n,dxScreen:q,dyScreen:x}=b;b={graphic:n,dxScreen:q,dyScreen:x};switch(l){case "start":this.emit("graphic-translate-start",b);this.emit("record-undo",{record:this._createGeometryUndoRecord()});break;case "update":this.emit("graphic-translate",b);break;case "end":this.emit("graphic-translate-stop",b)}});this._moveManipulation.angle=c.isSome(this._scaleRotate)?this._scaleRotate.angle:
0;this._scaleRotateAdapter=this._createScaleRotateAdapter();this.handles.add(t.watch(()=>this._scaleRotateAdapter.angle,()=>this._updateMoveAngle()));if(this.enableScaling||this.enableRotation)this._scaleRotate=new R.GraphicScaleRotateTransform({tool:this,mode:this.enableScaling&&this.enableRotation?null:this.enableScaling?"scale":"rotate",adapter:this._scaleRotateAdapter,tooltipOptions:this.tooltipOptions}),this.handles.add(this._scaleRotate.events.on("scale-changed",()=>this._onScaleChanged()));
this.handles.add([O.createVisualElements({view:this.view,graphic:this.graphic,forEachManipulator:b=>this._forEachManipulator(b),onManipulatorsChanged:()=>G.makeHandle()}),this.graphicState.on("changed",()=>this._onGeometryChanged()),this._hideManipulatorsForGraphicState(),t.watch(()=>d.scale,()=>this._updateMoveAngle())]);this.handles.add(this.view.trackGraphicState(this.graphicState));this._onGeometryChanged();this._updateMoveAngle();this._forEachManipulator(b=>{b instanceof L.Manipulator3D&&this.handles.add(b.events.on("grab-changed",
()=>this._updateManipulatorsInteractive()))});this.finishToolCreation()};f.destroy=function(){this._tooltip=c.destroyMaybe(this._tooltip);this._moveManipulation.destroy();this._scaleRotate=c.destroyMaybe(this._scaleRotate);this._scaleRotateAdapter=c.destroyMaybe(this._scaleRotateAdapter);this._set("view",null);this._set("graphic",null)};f._updateManipulatorsInteractive=function(){c.isNone(this._scaleRotate)||(this._scaleRotate.interactive=!this._moveManipulation.grabbing,this._moveManipulation.interactive=
!this._scaleRotate.grabbing)};f._createScaleRotateAdapter=function(){return c.isSome(this.graphic.geometry)&&"mesh"===this.graphic.geometry.type?new S.ScaleRotateMeshAdapter({graphic:this.graphic,geometry:this.graphic.geometry,viewingMode:this.view.state.viewingMode}):new T.ScaleRotateObjectSymbol3DAdapter({graphic:this.graphic,sizeFilter:a=>this._enforceNonZeroSize(a),findLayerView:()=>this.view.allLayerViews.find(a=>a.layer===this.graphic.layer),sizeAxis:c.isSome(this.tooltipOptions.visualVariables)&&
c.isSome(this.tooltipOptions.visualVariables.size)?this.tooltipOptions.visualVariables.size.axis:null})};f._forEachManipulator=function(a){this._moveManipulation.forEachManipulator(a);c.isSome(this._scaleRotate)&&this._scaleRotate.forEachManipulator(a)};f._hideManipulatorsForGraphicState=function(){return t.watch(()=>this.graphicState.displaying,a=>{this._forEachManipulator(d=>d.available=a);this._moveManipulation.zManipulation.available=a&&this.enableZ&&A.canMoveZ(this.graphic)})};f._createGeometryUndoRecord=
function(){return U.createGraphicGeometryUndoRecord(this.graphic)};f.reset=function(){};f.onHide=function(){c.isSome(this._scaleRotate)&&this._scaleRotate.cancelActiveAnimation()};f._onScaleChanged=function(){if(!c.isNone(this._scaleRotate)){var a=this._scaleRotate.getScale();this._moveManipulation.displayScale=a}};f._updateMoveAngle=function(){this._moveManipulation.angle=this.view.state.viewingMode===K.ViewingMode.Local||this.view.scale<P.ALIGN_ARROWS_SCALE_THRESHOLD?this._scaleRotateAdapter.angle:
0};f._onGeometryChanged=function(){M.placeAtGraphic(this.view,this,this.graphic)};f._enforceNonZeroSize=function(a){return a||this.view.state.camera.computeRenderPixelSizeAt(this._moveManipulation.renderLocation)};f._updateMoveTooltip=function(a,d){const {tooltipOptions:p,_tooltip:g}=this;if(!c.isNone(g)){g.clear();var r=this.graphicState.isDraped?"on-the-ground":"absolute-height";switch(a){case m.ManipulationType.XY:g.info=new w.TranslateGraphicTooltipInfo({tooltipOptions:p});this._updateMoveTooltipDistance(g.info,
d,(b,l)=>C.autoHorizontalDistanceByElevationModeBetweenPoints(b,l,r));break;case m.ManipulationType.XY_AXIS:g.info=new w.TranslateGraphicXYTooltipInfo({tooltipOptions:p});this._updateMoveTooltipDistance(g.info,d,(b,l)=>{b=C.autoHorizontalDistanceByElevationModeBetweenPoints(b,l,r);return z.scale(b,Q.axisConstrainedDragSign(d))});break;case m.ManipulationType.Z:g.info=new w.TranslateGraphicZTooltipInfo({tooltipOptions:p}),this._updateMoveTooltipDistance(g.info,d,ca.verticalSignedDistanceBetweenPoints)}}};
f._updateMoveTooltipDistance=function(a,d,p){if(c.isSome(d)&&"end"!==d.action){const {mapStart:g,mapEnd:r}=d;d=p(g,r);a.distance=c.isSome(d)?d:z.zeroMeters}};y._createClass(u,[{key:"snapToScene",set:function(a){this._moveManipulation&&(this._moveManipulation.snapToScene=a);this._set("snapToScene",a)}},{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"location",set:function(a){this._moveManipulation.location=a;c.isSome(this._scaleRotate)&&(this._scaleRotate.location=a)}},
{key:"elevationAlignedLocation",set:function(a){this._moveManipulation.elevationAlignedLocation=a;c.isSome(this._scaleRotate)&&(this._scaleRotate.elevationAlignedLocation=a)}},{key:"test",get:function(){return{discManipulator:this._moveManipulation.xyManipulation.test.discManipulator,zManipulator:this._moveManipulation.zManipulation.test.manipulator,ringManipulator:c.isSome(this._scaleRotate)?this._scaleRotate.test.ringManipulator:null,arrowManipulators:this._moveManipulation.xyAxisManipulation.test.arrowManipulators,
setRingIndicatorDelayMs:a=>c.isSome(this._scaleRotate)?this._scaleRotate.test.setRingIndicatorDelayMs(a):null,scaleRotateAdapter:this._scaleRotateAdapter,scaleRotateTransform:this._scaleRotate,tooltip:this._tooltip}}}]);return u}(F.HandleOwnerMixin(E.EventedMixin(X.InteractiveToolBase)));h.__decorate([k.property({constructOnly:!0,nonNullable:!0})],e.GraphicTransformTool.prototype,"view",void 0);h.__decorate([k.property({constructOnly:!0,nonNullable:!0})],e.GraphicTransformTool.prototype,"graphic",
void 0);h.__decorate([k.property({constructOnly:!0,nonNullable:!0})],e.GraphicTransformTool.prototype,"enableZ",void 0);h.__decorate([k.property()],e.GraphicTransformTool.prototype,"enableRotation",void 0);h.__decorate([k.property()],e.GraphicTransformTool.prototype,"enableScaling",void 0);h.__decorate([k.property({constructOnly:!0,type:B})],e.GraphicTransformTool.prototype,"tooltipOptions",void 0);h.__decorate([k.property()],e.GraphicTransformTool.prototype,"graphicState",void 0);h.__decorate([k.property({value:!1})],
e.GraphicTransformTool.prototype,"snapToScene",null);h.__decorate([k.property({constructOnly:!0})],e.GraphicTransformTool.prototype,"snappingManager",void 0);h.__decorate([k.property({readOnly:!0})],e.GraphicTransformTool.prototype,"type",void 0);h.__decorate([k.property({readOnly:!0})],e.GraphicTransformTool.prototype,"updating",null);e.GraphicTransformTool=h.__decorate([H.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransformTool")],e.GraphicTransformTool);Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});