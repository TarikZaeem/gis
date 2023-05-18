// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../geometry ../../../../analysis/dimensionUtils ../../../../core/Cyclical ../../../../core/mathUtils ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/plane ../../../../geometry/support/vectorStacks ../../../../layers/graphics/hydratedFeatures ./lengthDimensionUtils ./settings ../../interactive/Manipulator3D ../../interactive/manipulatorUtils ../../interactive/RenderObject ../../interactive/editingTools/dragEventPipeline3D ../../interactive/visualElements/support/Segment ../../support/engineContent/marker ../../webgl-engine/lib/GeometryUtil ../../../interactive/dragEventPipeline ../../../interactive/interfaces ../../../../geometry/Point".split(" "),
function(l,aa,P,E,J,ba,F,K,L,ca,m,p,w,z,da,k,t,Q,x,G,C,ea,fa,M,y,D,ha){function R(c,{lineSizePt:a,material:b}){const {calloutOffsetPx:d,calloutOpacity:e,calloutWidth:f,discScale:h,focusMultiplier:g}=t.settings.orientationManipulator;return{calloutLength:.25*fa.MARKER_SIZE_PER_LINE_WIDTH*t.settings.markers.lineSizeFraction*K.pt2px(a)+d,calloutOpacity:e,calloutWidth:f,customStateMask:A,discScale:h,focusMultiplier:g,material:b,metadata:c}}function S(c){const {cancel:a,computation:b,settingHeading:d,
steps:e,view:f}=c;if(k.isValidComputation(b)){({renderCoordsHelper:c}=f);var {dimension:h,geometry:g}=b,n=p.create(),u=T(p.create(),g,g.directSegment,c);c=U(z.sv3d.get(),{forHeading:d,geometry:g,renderCoordsHelper:c});var r=w.fromPositionAndNormal(u,c,w.create()),v=d?F.unwrapOr(h.orientation,()=>k.headingFromGeometry(g,f.renderCoordsHelper)):F.unwrapOr(h.orientation,0);e.next(C.screenToRenderPlane(f,r)).next(q=>{"start"===q.action&&m.copy(n,q.renderStart);const B=w.normal(r);q=x.calculateInputRotationTransform(n,
q.renderEnd,u,B);q=v-ba.rad2deg(q);d||(q=V(q));h.orientation=q});a.next(y.resetProperties(h,["orientation"]))}}function V(c){const a=J.cyclicalDegrees.normalize(c)%90;return a<t.settings.orientationSnapThresholdDegrees?c-a:90-a<t.settings.orientationSnapThresholdDegrees?c+(90-a):c}function W(c,a,b,d){var e=m.subtract(z.sv3d.get(),b.endRenderSpace,b.startRenderSpace);m.cross(e,e,d);e=w.fromPositionAndNormal(b.startRenderSpace,e,w.create());const f=w.fromPositionAndNormal(b.startRenderSpace,d,w.create()),
h=a.offset;let g=0,n;const u=new y.EventPipeline;u.next(C.screenToRenderPlane(c,e)).next(r=>{"start"===r.action&&(g=w.signedDistance(f,r.renderStart));const v=(w.signedDistance(f,r.renderEnd)-g)*c.renderCoordsHelper.unitInMeters;a.offset=h+v;n=r});return r=>{u.execute(r);return n}}function X(c,a){var {directSegment:b}=c;const {renderCoordsHelper:d}=a;var e=k.directUp(z.sv3d.get(),c,d);c=k.directStartToEnd(z.sv3d.get(),c);e=m.cross(z.sv3d.get(),c,e);({viewForward:a}=a.state.camera);0<m.dot(e,a)&&m.scale(e,
e,-1);b=b.eval(.5,z.sv3d.get());return d.headingAtPosition(b,e)}function Y(c,a,b,{forHeading:d}){const {dimension:e,geometry:f}=a;({primaryOffsetAxis:a}=f);a=m.scale(ia,a,0<=e.offset?1:-1);d=U(ja,{forHeading:d,geometry:f,renderCoordsHelper:b});m.cross(d,d,a);d=x.calculateTranslateRotateFromBases(a,d,p.ZEROS,I);c.modelTransform=d;c.renderLocation=T(H,f,f.dimensionSegment,b)}function T(c,a,b,d){const {startRenderSpace:e,endRenderSpace:f}=b;b=k.directStartToEnd(ka,a);a=k.directUp(la,a,d);a=0<m.dot(b,
a);return m.copy(c,a?e:f)}function U(c,{forHeading:a,geometry:b,renderCoordsHelper:d}){return a?k.directUp(c,b,d):k.dimensionStartToEnd(c,b,{invert:!0})}function N(c){return K.pt2px(c)+t.settings.offsetManipulator.focusedLinePaddingPx}P=function(){function c(b){this.start=b.start;this.end=b.end;this.offset=b.offset;this.heading=b.heading;this.rotation=b.rotation;this.direct=b.direct;this.horizontal=b.horizontal;this.vertical=b.vertical}var a=c.prototype;a.manipulatorName=function(b){return Object.keys(this).find(d=>
this.hasOwnProperty(d)&&b===this[d])};a.values=function(){return[this.start,this.end,this.offset,this.heading,this.rotation,this.direct,this.horizontal,this.vertical]};a.forEachMeasureTypeManipulator=function(b){for(const d of E.lengthDimensionMeasureType)b(this.manipulatorForMeasureType(d),d)};a.manipulatorForMeasureType=function(b){switch(b){case E.LengthDimensionMeasureType.Direct:return this.direct;case E.LengthDimensionMeasureType.Horizontal:return this.horizontal;case E.LengthDimensionMeasureType.Vertical:return this.vertical}};
return c}();const ia=p.create(),ja=p.create(),ka=p.create(),la=p.create(),A=D.ManipulatorStateCustomFlags.Custom1,H=p.create(),O=p.create(),I=ca.create(),Z=new ea.EuclideanSegment;l.DidPointerMoveRecentlyFlag=A;l.LengthDimensionManipulators=P;l.automaticHeadingFromCamera=X;l.createMeasureTypeManipulator=function(c,a){const b=[p.fromValues(-.5,0,0),p.fromValues(.5,0,0)],{lengthFraction:d}=t.settings.offsetManipulator,e=M.createPolylineGeometry(a.thinOffsetManipulatorMaterial,b),f=M.createPolylineGeometry(a.unfocusedMaterial,
b.map(g=>m.scale(p.create(),g,d))),h=f.instantiate({material:a.focusedMaterial});return new Q.Manipulator3D({view:c,renderObjects:[new G.RenderObject(f,D.ManipulatorStateFlags.Unfocused|A),new G.RenderObject(h,D.ManipulatorStateFlags.Focused|A),new G.RenderObject(e,A)],collisionType:{type:"line",paths:[b]},radius:N(a.lineSizePt)/2,available:!1,metadata:a.metadata,...x.worldScaledManipulatorSettings})};l.createOffsetManipulator=function(c,a){const b=[p.fromValues(-.5,0,0),p.fromValues(.5,0,0)],{lengthFraction:d}=
t.settings.offsetManipulator,e=M.createPolylineGeometry(a.unfocusedMaterial,b.map(h=>m.scale(p.create(),h,d))),f=e.instantiate({material:a.focusedMaterial});return new Q.Manipulator3D({view:c,renderObjects:[new G.RenderObject(e,D.ManipulatorStateFlags.Unfocused|D.ManipulatorStateFlags.Selected|A),new G.RenderObject(f,D.ManipulatorStateFlags.Focused|A)],collisionType:{type:"line",paths:[b]},radius:N(a.lineSizePt)/2,metadata:a.metadata,available:!1,...x.worldScaledManipulatorSettings})};l.createOrientationManipulator=
function(c,a){return x.createRotateManipulator(c,R(a.metadata,a))};l.createPointManipulator=function(c,a){c=x.createSphereManipulator(c,aa.toUnitRGB(t.settings.pointManipulators.color),t.settings.pointManipulators.opacity,A);c.available=!1;c.grabCursor="crosshair";c.radius=t.settings.pointManipulators.radius;c.metadata=a.metadata;c.collisionPriority=1;return c};l.focusedOffsetWidth=N;l.headingManipulatorHandles=function(c,{computation:a,view:b}){return[y.createManipulatorDragEventPipeline(c,(d,e,
f)=>{S({cancel:f,computation:a,settingHeading:!0,steps:e,view:b})})]};l.measureTypeManipulatorHandles=function(c,{computation:a,manipulatorMeasureType:b,view:d}){let e=E.LengthDimensionMeasureType.Direct,f=0,h=0;return[c.events.on("grab-changed",g=>{if("start"===g.action&&k.isValidComputation(a)){var {dimension:n,geometry:u}=a;e=n.measureType;f=n.offset;h=n.orientation;g=m.copy(z.sv3d.get(),c.renderLocation);n.measureType=b;n.offset=k.computeOffsetForPoint(g,b,u,d.renderCoordsHelper);n.orientation=
0}}),y.createManipulatorDragEventPipeline(c,(g,n,u)=>{if(k.isValidComputation(a)){var {geometry:r,dimension:v}=a,{renderCoordsHelper:q}=d,B=k.computeSegmentForMeasureType(Z,b,a,q);q=k.computeOffsetAxis(z.sv3d.get(),{measureType:b,directSegment:r.directSegment,renderCoordsHelper:q});g=C.hideManipulatorWhileDragging(g);n.next(g).next(W(d,v,B,q));u.next(g).next(ma=>{v.measureType=e;v.offset=f;v.orientation=h;return ma})}})]};l.offsetManipulatorHandles=function(c,{computation:a,view:b}){return[y.createManipulatorDragEventPipeline(c,
(d,e,f)=>{if(k.isValidComputation(a)&&d.selected){var {geometry:h,dimension:g}=a;d=C.hideManipulatorWhileDragging(d);e.next(d).next(W(b,g,h.dimensionSegment,h.primaryOffsetAxis));f.next(d).next(y.resetProperties(g,["offset"]))}})]};l.pointManipulatorHandles=function(c,{isStart:a,createSnappingPipelineStep:b,dimension:d,onUpdate:e,view:f}){const h=a?"startPoint":"endPoint";return[y.createManipulatorDragEventPipeline(c,(g,n,u,r)=>{g=C.hideManipulatorWhileDragging(g);const {snappingStep:v,cancelSnapping:q}=
b(r);u=u.next(g).next(y.resetProperties(d,[h,"measureType","orientation"])).next(q);n.next(g).next(C.screenToMap3D(f)).next(...v).next(B=>{B=da.clonePoint(B.mapEnd,new ha);e("startPoint"===h?{startPoint:B}:{endPoint:B})})})]};l.rotationManipulatorHandles=function(c,{computation:a,view:b}){return[y.createManipulatorDragEventPipeline(c,(d,e,f)=>{S({cancel:f,computation:a,settingHeading:!1,steps:e,view:b})}),c.events.on("immediate-click",d=>{{const {dimension:g,geometry:n}=a;if(90===g.orientation||270===
g.orientation)g.orientation=0,d.stopPropagation();else if(!F.isNone(n)){var {renderCoordsHelper:e}=b,f=k.computeGeometryFromDimension({...k.computationToGeometryDependencies(a),orientation:90},e),h=k.computeGeometryFromDimension({...k.computationToGeometryDependencies(a),orientation:270},e);F.isNone(f)||F.isNone(h)||(f=k.headingFromGeometry(f,e),e=k.headingFromGeometry(h,e),h=X(n,b),f=J.cyclicalDegrees.shortestSignedDiff(h,f),e=J.cyclicalDegrees.shortestSignedDiff(h,e),g.orientation=Math.abs(f)<Math.abs(e)?
90:270,d.stopPropagation())}}})]};l.snapOrientationToNearestRightAngle=V;l.unfocusedOffsetWidth=function(c){return K.pt2px(c)+t.settings.offsetManipulator.linePaddingPx};l.updateHeadingManipulatorTransform=function(c,a,b){Y(c,a,b,{forHeading:!0})};l.updateMeasureTypeManipulatorTransform=function(c,a,b,d){const {geometry:e}=a;a=k.computeSegmentForMeasureType(Z,b,a,d);d=k.computeOffsetAxis(H,{measureType:b,directSegment:e.directSegment,renderCoordsHelper:d});b=m.sub(O,a.endRenderSpace,a.startRenderSpace);
d=x.calculateTranslateRotateFromBases(b,d,p.ZEROS,I);b=m.length(b);L.scale(d,d,m.set(O,b,b,b));c.modelTransform=d;c.renderLocation=a.eval(.5,O)};l.updateOffsetManipulatorTransform=function(c,a,b){const {dimensionSegment:d,primaryOffsetAxis:e}=a,f=k.dimensionStartToEnd(H,a);a=m.exactEquals(f,p.ZEROS)?L.identity(I):x.calculateTranslateRotateFromBases(f,e,p.ZEROS,I);b=Math.max(m.length(f),t.settings.offsetManipulator.minLengthMeters/b.unitInMeters);L.scale(a,a,m.set(H,b,b,b));c.modelTransform=a;c.renderLocation=
d.eval(.5,H)};l.updateOrientationManipulator=function(c,a){x.updateRotateManipulator(c,R(c.metadata,a))};l.updateRotationManipulatorTransform=function(c,a,b){Y(c,a,b,{forHeading:!1})};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});