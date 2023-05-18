// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../Color ../../../../../core/analysisThemeUtils ../../../../../core/Handles ../../../../../core/lang ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/screenUtils ../../../../../chunks/vec3f64 ../../manipulatorUtils ../support/PickRequest ../../visualElements/LaserlineVisualElement ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/IntersectorInterfaces ../../../../interactive/ManipulatorCollection".split(" "),
function(r,m,n,t,u,d,k,v,p,q,w,x,y,z,A){function B(e,b,a,c){for(;e.length<b;)e.push(a());if(c)for(;e.length>b;)a=e.pop(),c(a);else e.length=b}return function(){function e(a){this.vertexManipulators=[];this._destroyed=!1;this._visible=this._isManipulatorsOwner=!0;this._listenerHandles=this._cursorManipulator=this._laserLine=null;this._tempHandlePosition=p.create();this._defaultStyle={laserLineGlowColor:m.toUnitRGB(n.getAccentColor()),laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:m.toUnitRGB(n.getContrastColor()),
laserLineInnerWidth:1,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:m.toUnitRGB(n.getAccentColor()),handleOpacity:.5,handleRadius:5,handleRadiusHovered:10,handleRadiusMouse:10,handleRadiusTouch:25};const {analysisViewData:c,manipulators:g,toolState:h,view:f,visible:C}=a;this._analysisViewData=c;this._toolState=h;null!=g?(this._manipulators=g,this._isManipulatorsOwner=!1):this._manipulators=new A.ManipulatorCollection;this._view=f;a=this._style={...this._defaultStyle,...u.clone(a.style)};
this._intersector=y.newIntersector(f.state.viewingMode);this._intersector.options.store=z.StoreResults.MIN;const l=q.createSphereManipulator(f,a.handleColor,a.handleOpacity);l.available=!1;l.radius=a.handleRadius;l.interactive=!1;this._manipulators.add(l);this._cursorManipulator=l;this._laserLine=new x.LaserlineVisualElement({view:f,attached:!0,style:{glowColor:a.laserLineGlowColor,glowWidth:a.laserLineGlowWidth,glowFalloff:a.laserLineGlowFalloff,innerColor:a.laserLineInnerColor,innerWidth:a.laserLineInnerWidth,
globalAlpha:a.laserLineGlobalAlpha}});this._updateVisibility(C||!0)}var b=e.prototype;b.destroy=function(){this._listenerHandles=d.destroyMaybe(this._listenerHandles);this._manipulators=this._isManipulatorsOwner?d.destroyMaybe(this._manipulators):null;this._laserLine=d.destroyMaybe(this._laserLine);this._destroyed=!0};b.show=function(){this._setVisibility(!0)};b.hide=function(){this._setVisibility(!1)};b._setVisibility=function(a){this._destroyed||this._visible===a||this._updateVisibility(a)};b._updateVisibility=
function(a){this._visible=a;(this._laserLine.visible=a)?(this._initializeListeners(),this._updateAll()):(this._destroyListeners(),this.vertexManipulators.forEach(c=>this._removeVertexManipulator(c)),this.vertexManipulators=[],this._view.cursor=null)};b.vertexHandleAt=function(a,c){a=this._manipulators.intersect(a,c);return d.isSome(a)?a.metadata:null};b.pick=function(a){var c=this._view.spatialReference;a=v.screenPointObjectToArray(a.screenPoint);this._view.sceneIntersectionHelper.intersectToolIntersectorScreen(a,
this._intersector);const g=this._intersector.results.min;a=p.create();if(!g.getIntersectionPoint(a))return null;c=this._view.renderCoordsHelper.fromRenderCoords(a,c);return d.isNone(c)?null:new w.PickResult(a,c)};b._updateAll=function(){this._visible&&(this._updateVertexManipulators(),this._updateLaserLine())};b._createVertexManipulator=function(){const a=q.createSphereManipulator(this._view,this._style.handleColor,this._style.handleOpacity);a.radius=this._style.handleRadius;this._manipulators.add(a);
return a};b._removeVertexManipulator=function(a){this._manipulators.remove(a)};b._updateVertexManipulators=function(){const {viewData:a}=this._analysisViewData,c=this._analysisViewData.path?this._analysisViewData.path.vertices:[],g=this.vertexManipulators;B(g,c.length,()=>this._createVertexManipulator(),h=>this._removeVertexManipulator(h));g.forEach((h,f)=>{h.metadata=c[f];h.renderLocation=a.positionsRenderCoords[f];h.cursor=0===f&&"drawing"===this._toolState.polygonState?"crosshair":null});"drawing"===
this._toolState.polygonState&&d.isSome(this._analysisViewData.cursorPoint)?(this._cursorManipulator.available=!0,this._cursorManipulator.location=this._analysisViewData.cursorPoint):this._cursorManipulator.available=!1};b._getFocusPoint=function(){const {lastDraggedVertex:a}=this._analysisViewData;switch(this._toolState.polygonState){case "drawing":return d.isSome(this._analysisViewData.cursorPoint)?this._analysisViewData.cursorPoint:d.isSome(a)?this._analysisViewData.path.getVertexPositionAsPoint(a):
d.unwrap(this._analysisViewData.path.lastPoint);case "editing":return d.isSome(a)?this._analysisViewData.path.getVertexPositionAsPoint(a):null;default:return this._analysisViewData.cursorPoint}};b._updateLaserLine=function(){var a=this._style.laserLineEnabled&&"measured"!==this._toolState.polygonState&&this._toolState.active;const c=this._getFocusPoint();a&&d.isSome(c)?(a=this._tempHandlePosition,this._view.renderCoordsHelper.toRenderCoords(c,a),this._laserLine.heightManifoldTarget=a):this._laserLine.heightManifoldTarget=
null};b._initializeListeners=function(){this._listenerHandles=new t;this._listenerHandles.add([k.watch(()=>this._toolState.polygonState,()=>this._updateLaserLine()),k.watch(()=>this._analysisViewData.viewData,()=>this._updateAll(),k.sync),k.watch(()=>({lastDraggedVertex:this._analysisViewData.lastDraggedVertex,cursorPoint:this._analysisViewData.cursorPoint}),()=>this._updateLaserLine()),k.watch(()=>this._toolState.active,()=>this._updateAll())])};b._destroyListeners=function(){this._listenerHandles=
d.destroyMaybe(this._listenerHandles)};r._createClass(e,[{key:"destroyed",get:function(){return this._destroyed}},{key:"visible",get:function(){return this._visible},set:function(a){a?this.show():this.hide()}},{key:"testData",get:function(){const a=this._laserLine.testData;return{laserLineRenderer:d.isSome(a)?{heightManifoldEnabled:a.heightManifoldEnabled,heightManifoldTarget:a.heightManifoldTarget,pointDistanceEnabled:a.pointDistanceEnabled,pointDistanceOrigin:a.pointDistanceOrigin,pointDistanceTarget:a.pointDistanceTarget,
lineVerticalPlaneEnabled:a.lineVerticalPlaneEnabled}:{heightManifoldEnabled:!1,heightManifoldTarget:null,pointDistanceEnabled:!1,pointDistanceOrigin:null,pointDistanceTarget:null,lineVerticalPlaneEnabled:!1}}}}]);return e}()});