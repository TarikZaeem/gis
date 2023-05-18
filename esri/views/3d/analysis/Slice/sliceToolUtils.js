// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../analysis/SlicePlane ../../../../core/has ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/quat ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/Axis ../../../../chunks/boundedPlane ../../../../geometry/support/plane ../../../../geometry/support/ray ../../../../geometry/support/vector ../../../../geometry/support/vectorStacks ./sliceToolConfig ../support/projectionUtils ../../interactive/Manipulator3D ../../interactive/manipulatorUtils ../../interactive/RenderObject ../../interactive/visualElements/LineVisualElement ../../interactive/visualElements/SlicePlaneVisualElement ../../support/RenderCoordsHelper ../../support/geometryUtils/ray ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Material ../../webgl-engine/materials/ColorMaterial ../../webgl-engine/materials/NativeLineMaterial ../../webgl-engine/materials/RibbonLineMaterial ../../../interactive/interfaces ../../../../geometry/Extent".split(" "),
function(k,Ba,oa,Ca,pa,R,y,S,u,T,aa,c,x,qa,ba,A,L,ra,U,m,p,sa,ca,V,C,ta,ua,da,va,M,F,D,N,ea,wa,z,xa){function fa(a,b,e,d,f,l){const g=c.dot(a,b),h=m.sv3d.get(),n=m.sv3d.get();switch(d===k.SliceOrientation.HORIZONTAL_OR_VERTICAL?Math.abs(g)>p.VERTICAL_DOT_THRESHOLD?k.SliceOrientation.HORIZONTAL:k.SliceOrientation.VERTICAL:d){case k.SliceOrientation.VERTICAL:c.cross(h,Math.abs(g)<=p.SMALL_ANGLE_DOT_THRESHOLD?a:e.viewUp,b);c.copy(n,b);break;case k.SliceOrientation.HORIZONTAL:c.cross(h,e.viewUp,b);c.cross(n,
b,h);break;case k.SliceOrientation.TILTED:c.cross(h,Math.abs(g)<=p.SMALL_ANGLE_DOT_THRESHOLD?b:e.viewUp,a),c.cross(n,a,h)}a=c.cross(m.sv3d.get(),h,n);0<c.dot(a,e.viewForward)&&c.scale(n,n,-1);c.normalize(f,h);c.normalize(l,n)}function ha(a,b,e){var d=b.worldUpAtPosition(a.origin,m.sv3d.get());b=a.basis1;d=U.angleAroundAxis(d,a.basis2,a.basis1)+G;return A.rotate(a,Math.round(d/G)*G-d,b,e)}function W(a,b){switch(b){case E.POSITIVE_X:return{basis:a.basis1,direction:1,position:c.add(m.sv3d.get(),a.origin,
a.basis1),edge:b};case E.POSITIVE_Y:return{basis:a.basis2,direction:1,position:c.add(m.sv3d.get(),a.origin,a.basis2),edge:b};case E.NEGATIVE_X:return{basis:a.basis1,direction:-1,position:c.subtract(m.sv3d.get(),a.origin,a.basis1),edge:b};case E.NEGATIVE_Y:return{basis:a.basis2,direction:-1,position:c.subtract(m.sv3d.get(),a.origin,a.basis2),edge:b}}}function X(a,b,e){const d=e.projectToRenderScreen(c.add(m.sv3d.get(),a,b),S.castRenderScreenPointArray3(m.sv3d.get()));a=e.projectToRenderScreen(c.subtract(m.sv3d.get(),
a,b),S.castRenderScreenPointArray3(m.sv3d.get()));return c.squaredLength(c.subtract(d,d,a))}function I(a){const b=c.length(a.basis1);a=c.length(a.basis2);return p.RESIZE_HANDLE_EDGE_PADDING_FRAC*Math.min(b,a)}function O(a){return 0!==a.direction[0]&&0!==a.direction[1]}function Y(a,b,e){const d=new N.ColorMaterial({color:p.SHIFT_RESTART_ARROW_TIP_COLOR,cullFace:M.CullFaceOptions.Back,renderOccluded:D.RenderOccludedFlag.Opaque}),f=new N.ColorMaterial({color:p.SHIFT_RESTART_ARROW_CAP_COLOR,cullFace:M.CullFaceOptions.Back,
renderOccluded:D.RenderOccludedFlag.Opaque}),l=new N.ColorMaterial({color:p.SHIFT_RESTART_TUBE_COLOR,cullFace:M.CullFaceOptions.Back,renderOccluded:D.RenderOccludedFlag.Opaque}),g=new N.ColorMaterial({color:p.SHIFT_RESTART_OUTLINE_COLOR,transparent:!0,writeDepth:!1,cullFace:M.CullFaceOptions.Front,renderOccluded:D.RenderOccludedFlag.Transparent}),h=n=>{a=a.slice(0);var q=c.subtract(m.sv3d.get(),a[0],a[1]);c.normalize(q,q);var r=c.subtract(m.sv3d.get(),a[a.length-1],a[a.length-2]);c.normalize(r,r);
if(0<b){var t=c.scale(x.create(),r,-b);a[a.length-1]=c.add(t,t,a[a.length-1]);t=c.scale(x.create(),q,-b);a[0]=c.add(t,t,a[0])}t=n?p.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER:1;var w=p.SHIFT_RESTART_TIP_LENGTH*t;const H=p.SHIFT_RESTART_TIP_RADIUS*t;t=u.identity(m.sm4d.get());if(0<b){var v=w/4,J=c.set(m.sv3d.get(),0,v,0);v=1+b/v;u.translate(t,t,J);u.scale(t,t,c.set(m.sv3d.get(),v,v,v));u.translate(t,t,c.scale(J,J,-1/v))}v=u.identity(T.create());J=x.fromValues(0,1,0);r=u.fromQuat(T.create(),aa.rotationTo(m.sq4d.get(),
J,r));r[12]=a[a.length-1][0];r[13]=a[a.length-1][1];r[14]=a[a.length-1][2];u.multiply(r,r,t);n=p.SHIFT_RESTART_TUBE_RADIUS*(n?p.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER:1)+b;var ya=a,za=e?g:l;const ia=[];for(let Z=0;12>Z;Z++){const ja=Z/12*2*Math.PI;ia.push([Math.cos(ja)*n,Math.sin(ja)*n])}n=F.createPathExtrusionGeometry(za,ia,ya,[],[],!1);n.transformation=v;v=[n];n=F.createConeGeometry(e?g:d,w,H,24,!1,!1,!0);n.transformation=r;v.push(n);w=F.createConeGeometry(e?g:f,w,H,24,!1,!0,!1);w.transformation=r;
v.push(w);q=u.fromQuat(T.create(),aa.rotationTo(m.sq4d.get(),J,q));q[12]=a[0][0];q[13]=a[0][1];q[14]=a[0][2];u.multiply(q,q,t);v.push(n.instantiate({transformation:q}));v.push(w.instantiate({transformation:q}));return v};return{normal:h(!1),focused:h(!0)}}function ka(a,b){const e=c.subtract(x.create(),a[a.length-1],a[a.length-2]);c.normalize(e,e);c.scale(e,e,p.SHIFT_RESTART_TIP_LENGTH);c.add(e,e,a[a.length-1]);return b?(b=c.subtract(x.create(),a[0],a[1]),c.normalize(b,b),c.scale(b,b,p.SHIFT_RESTART_TIP_LENGTH),
c.add(b,b,a[0]),[b,...a,e]):[...a,e]}function Aa(a,b,e,d,f,l,g=A.create()){if(!l.toRenderCoords(a,g.origin))return pa.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${a.spatialReference.wkid} is not supported`),null;l.worldBasisAtPosition(g.origin,ba.Axis.X,g.basis1);l.worldBasisAtPosition(g.origin,ba.Axis.Y,g.basis2);L.fromVectorsAndPoint(g.basis2,g.basis1,g.origin,g.plane);A.rotate(g,-R.deg2rad(b),A.normal(g),g);A.rotate(g,
R.deg2rad(e),g.basis1,g);c.scale(g.basis1,g.basis1,d/2);c.scale(g.basis2,g.basis2,f/2);A.updateUnboundedPlane(g);return g}function la(a,b){if(y.isNone(a)||y.isNone(a.position))return null;const e=sa.applyProjectionAndElevationAlignment(a.position,b.spatialReference,b.elevationProvider);if(y.isNone(e))return null;b=da.RenderCoordsHelper.renderUnitScaleFactor(a.position.spatialReference,b.spatialReference);return{position:e,heading:a.heading,tilt:a.tilt,renderWidth:a.width*b,renderHeight:a.height*b}}
function ma(a,b,e,d=A.create()){if(y.isNone(a))return null;a=Aa(a.position,a.heading,a.tilt,a.renderWidth,a.renderHeight,b.renderCoordsHelper,d);!e.tiltEnabled&&y.isSome(a)&&ha(a,b.renderCoordsHelper,a);return a}var E;(function(a){a[a.POSITIVE_X=0]="POSITIVE_X";a[a.POSITIVE_Y=1]="POSITIVE_Y";a[a.NEGATIVE_X=2]="NEGATIVE_X";a[a.NEGATIVE_Y=3]="NEGATIVE_Y"})(E||(E={}));const B=z.ManipulatorStateCustomFlags.Custom1;k.RotationAxis=void 0;(function(a){a[a.HEADING=1]="HEADING";a[a.TILT=2]="TILT"})(k.RotationAxis||
(k.RotationAxis={}));k.SliceOrientation=void 0;(function(a){a[a.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL";a[a.HORIZONTAL=1]="HORIZONTAL";a[a.VERTICAL=2]="VERTICAL";a[a.TILTED=3]="TILTED"})(k.SliceOrientation||(k.SliceOrientation={}));const K=z.ManipulatorStateCustomFlags.Custom2,P=ra.create(),G=Math.PI/2,Q=z.ManipulatorStateCustomFlags.Custom1,na=z.ManipulatorStateCustomFlags.Custom2;k.OffsetMode=void 0;(function(a){a[a.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT";a[a.CENTER_ON_ARROW=1]="CENTER_ON_ARROW"})(k.OffsetMode||
(k.OffsetMode={}));k.DidPointerMoveRecentlyFlag=B;k.IsShiftEdgeOnScreenFlag=K;k.addArrowTips=ka;k.calculateBoundedPlaneTranslateRotate=function(a,b){return V.calculateTranslateRotateFromBases(a.basis1,a.basis2,a.origin,b)};k.calculateDiagonalResizeHandleScale=function(a){return I(a)};k.calculatePlaneHalfSize=function(a,b){return p.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION*Math.min(b.width,b.height)*b.computeRenderPixelSizeAt(a)};k.calculateResizeHandlePadding=I;k.calculateScreenSpaceBasisLength2=X;
k.createArrowGeometry=Y;k.createGridVisualElement=function(a){return new ua.SlicePlaneVisualElement({view:a,attached:!1,backgroundColor:[...p.PLANE_BACKGROUND_COLOR],gridColor:p.GRID_COLOR,gridWidth:4,renderOccluded:D.RenderOccludedFlag.OccludeAndTransparent})};k.createOutlineVisualElement=function(a){return new ta.LineVisualElement({view:a,attached:!1,color:p.PLANE_OUTLINE_COLOR,width:p.PLANE_OUTLINE_WIDTH,writeDepthEnabled:!1,renderOccluded:D.RenderOccludedFlag.OccludeAndTransparent,geometry:[[[-1,
-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]]})};k.createPlane=function(a,b,e,d,f,l,g,h){g=g.worldUpAtPosition(a,m.sv3d.get());fa(b,g,f,l,h.basis1,h.basis2);c.scale(h.basis1,h.basis1,e);c.scale(h.basis2,h.basis2,d);c.copy(h.origin,a);L.fromVectorsAndPoint(h.basis2,h.basis1,h.origin,h.plane);return h};k.createResizeManipulator=function(a,b){const e=(b=O(b))?[x.fromValues(1,0,0),x.fromValues(0,0,0),x.fromValues(0,1,0)]:[x.fromValues(1,0,0),x.fromValues(-1,0,0)],d=p.RESIZE_HANDLE_COLOR;var f=q=>new wa.RibbonLineMaterial({color:d,
width:q,renderOccluded:D.RenderOccludedFlag.OccludeAndTransparent});const l=()=>new ea.NativeLineMaterial({color:d,renderOccluded:D.RenderOccludedFlag.OccludeAndTransparent}),g=b?p.RESIZE_HANDLE_CORNER_WIDTH:p.RESIZE_HANDLE_EDGE_WIDTH,h=g*p.DISPLAY_FOCUS_MULTIPLIER,n=p.RESIZE_HANDLE_EDGE_WIDTH;f=[new C.RenderObject(F.createPolylineGeometry(1<g?f(g):l(),e),z.ManipulatorStateFlags.Unfocused|Q),new C.RenderObject(F.createPolylineGeometry(1<h?f(h):l(),e),z.ManipulatorStateFlags.Focused|Q),new C.RenderObject(F.createPolylineGeometry(1<
n?f(n):l(),e),na)];a=new ca.Manipulator3D({view:a,renderObjects:f,collisionType:{type:"line",paths:[e]},radius:b?p.RESIZE_HANDLE_CORNER_INPUT_RADIUS:p.RESIZE_HANDLE_EDGE_INPUT_RADIUS,...V.worldScaledManipulatorSettings});a.state=Q;return a};k.createRotateManipulator=function(a,b){a=V.createRotateManipulator(a,{customStateMask:B,texture:b});a.state=B;return a};k.createRotatePlane=function(a,b,e,d){b=b.worldUpAtPosition(a.origin,m.sv3d.get());const f=m.sv3d.get();switch(e){case k.RotationAxis.HEADING:c.copy(f,
b);break;case k.RotationAxis.TILT:c.copy(f,a.basis1)}return L.fromPositionAndNormal(a.origin,f,d)};k.createShiftManipulator=function(a,b=k.OffsetMode.CENTER_ON_ARROW){var e=b===k.OffsetMode.CENTER_ON_CALLOUT?p.SHIFT_RESTART_OFFSET_DISTANCE:0,d=[x.fromValues(e,0,-p.SHIFT_RESTART_ARROW_LENGTH/2),x.fromValues(e,0,p.SHIFT_RESTART_ARROW_LENGTH/2)];b=ka(d,!0);const f=Y(d,0,!1);d=Y(d,p.SHIFT_RESTART_ARROW_OUTLINE_WIDTH,!0);const l=new ea.NativeLineMaterial({color:p.SHIFT_RESTART_CALLOUT_COLOR,renderOccluded:D.RenderOccludedFlag.OccludeAndTransparent}),
g=F.createPolylineGeometry(l,[[e,0,0],[e-p.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]);e=F.createPolylineGeometry(l,[[e,0,0],[e-p.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]);return new ca.Manipulator3D({view:a,renderObjects:[...f.normal.map(h=>new C.RenderObject(h,z.ManipulatorStateFlags.Unfocused|B)),...d.normal.map(h=>new C.RenderObject(h,z.ManipulatorStateFlags.Unfocused|B)),new C.RenderObject(g,z.ManipulatorStateFlags.Unfocused|B|K),...f.focused.map(h=>new C.RenderObject(h,z.ManipulatorStateFlags.Focused|B)),
...d.focused.map(h=>new C.RenderObject(h,z.ManipulatorStateFlags.Focused|B)),new C.RenderObject(e,z.ManipulatorStateFlags.Focused|B|K)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[b]},collisionPriority:1,radius:p.SHIFT_RESTART_TIP_RADIUS,state:B})};k.createShiftPlane=function(a,b,e,d){e=c.cross(m.sv3d.get(),b,e);c.cross(e,e,b);return L.fromPositionAndNormal(a,e,d)};k.forceHorizontalOrVertical=ha;k.isDiagonalResizeHandle=O;k.isIBuildingSceneLayerView3D=function(a){return y.isSome("building-scene-3d"===
a.type?a:null)};k.normalToBases=fa;k.planeToExtent=function(a,b,e){if(y.isNone(a))return null;const d=a.origin,f=m.sv3d.get(),l=m.sv3d.get(),g=m.sv3d.get(),h=m.sv3d.get();c.add(f,d,a.basis1);c.add(f,f,a.basis2);c.add(l,d,a.basis1);c.sub(l,l,a.basis2);c.sub(g,d,a.basis1);c.sub(g,g,a.basis2);c.sub(h,d,a.basis1);c.add(h,h,a.basis2);let n,q,r,t,w,H;for(const v of[f,l,g,h]){a=b.fromRenderCoords(v,v,e);if(y.isNone(a))return null;n=null==n?a[0]:Math.min(n,a[0]);q=null==q?a[0]:Math.max(q,a[0]);r=null==r?
a[1]:Math.min(r,a[1]);t=null==t?a[1]:Math.max(t,a[1]);w=null==w?a[2]:Math.min(w,a[2]);H=null==H?a[2]:Math.max(H,a[2])}return new xa({xmin:n,xmax:q,ymin:r,ymax:t,zmin:w,zmax:H,spatialReference:e})};k.planeToShape=function(a,b,e,d=new oa){if(y.isNone(a))return null;const {renderCoordsHelper:f}=b;var l=f.fromRenderCoords(a.origin,b.spatialReference);if(y.isNone(l))return null;l=qa.tryProjectWithZConversion(l,e);if(y.isNone(l))return null;d.position=l;l=2*c.length(a.basis1);const g=2*c.length(a.basis2);
b=da.RenderCoordsHelper.renderUnitScaleFactor(b.spatialReference,e);d.width=l*b;d.height=g*b;b=f.worldUpAtPosition(a.origin,m.sv3d.get());d.tilt=R.rad2deg(U.angleAroundAxis(b,a.basis2,a.basis1)+G);d.heading=f.headingAtPosition(a.origin,a.basis1)-90;return d};k.projectAndElevationAlignShape=la;k.projectedShapeToPlane=ma;k.resizeNormal=Q;k.resizeOutlineOnly=na;k.resizePlane=function(a,b,e,d,f,l){const g=c.copy(m.sv3d.get(),f.origin);c.add(g,g,c.scale(m.sv3d.get(),f.basis1,0>a.direction[0]?1:-1));c.add(g,
g,c.scale(m.sv3d.get(),f.basis2,0>a.direction[1]?1:-1));var h=c.length(f.basis1);const n=c.length(f.basis2);e=c.subtract(m.sv3d.get(),e,g);var q=c.subtract(m.sv3d.get(),b,g);let r=0;b=0;if(O(a)){var t=I(f);const w=I(l);r=h-.5*a.direction[0]*c.dot(f.basis1,q)/h;b=n-.5*a.direction[1]*c.dot(f.basis2,q)/n;q=w/t;r*=q;b*=q}q=.5*a.direction[0]*c.dot(f.basis1,e)/h;t=.5*a.direction[1]*c.dot(f.basis2,e)/n;e=r+q;b+=t;h=c.scale(m.sv3d.get(),f.basis1,e/h);f=c.scale(m.sv3d.get(),f.basis2,b/n);(0>=e||X(l.origin,
h,d)<=p.PLANE_MIN_BASIS_SCREEN_LEN2)&&c.copy(h,l.basis1);(0>=b||X(l.origin,f,d)<=p.PLANE_MIN_BASIS_SCREEN_LEN2)&&c.copy(f,l.basis2);d=c.copy(m.sv3d.get(),g);c.add(d,d,c.scale(m.sv3d.get(),h,0>a.direction[0]?-1:1));c.add(d,d,c.scale(m.sv3d.get(),f,0>a.direction[1]?-1:1));return A.fromValues(d,h,f,l)};k.shapeToPlane=function(a,b,e,d=A.create()){a=la(a,b);return y.isNone(a)?null:ma(a,b,e,d)};k.updateResizeHandle=function(a,b,e,d){var f=c.length(d.basis1);const l=c.length(d.basis2),g=I(d),h=I(d),n=c.set(m.sv3d.get(),
0,0,0);c.add(n,c.scale(m.sv3d.get(),d.basis1,b.direction[0]),c.scale(m.sv3d.get(),d.basis2,b.direction[1]));c.add(n,d.origin,n);d=0;let q=1;O(b)?(1===b.direction[0]&&-1===b.direction[1]?d=G:1===b.direction[0]&&1===b.direction[1]?d=Math.PI:-1===b.direction[0]&&1===b.direction[1]&&(d=3*Math.PI/2),q=h):(b=0!==b.direction[0]?1:2,d=1===b?G:0,q=(1===b?l:f)-g);f=u.fromZRotation(m.sm4d.get(),d);u.scale(f,f,c.set(m.sv3d.get(),q,q,q));u.multiply(f,e,f);f[12]=0;f[13]=0;f[14]=0;a.modelTransform=f;a.renderLocation=
n};k.updateRotateHeadingHandle=function(a,b,e,d){d=d.worldUpAtPosition(e.origin,m.sv3d.get());const f=W(e,E.POSITIVE_X),l=u.fromZRotation(m.sm4d.get(),f.edge*Math.PI/2);u.rotateX(l,l,-(U.angleAroundAxis(d,e.basis2,e.basis1)+G));u.multiply(l,b,l);l[12]=0;l[13]=0;l[14]=0;a.modelTransform=l;a.renderLocation=f.position};k.updateRotateTiltHandle=function(a,b,e){e=W(e,E.POSITIVE_Y);const d=u.fromZRotation(m.sm4d.get(),e.edge*Math.PI/2);u.rotateX(d,d,G);u.multiply(d,b,d);d[12]=0;d[13]=0;d[14]=0;a.modelTransform=
d;a.renderLocation=e.position};k.updateShiftRestartHandle=function(a,b,e,d){var f=W(e,E.NEGATIVE_X);const l=m.sm4d.get();u.rotateZ(l,b,f.edge*Math.PI/2);b=c.normalize(m.sv3d.get(),f.basis);b=c.scale(m.sv3d.get(),b,f.direction*d.computeScreenPixelSizeAt(f.position)*p.SHIFT_RESTART_OFFSET_DISTANCE);c.add(b,b,f.position);f=d.projectToRenderScreen(b,S.castRenderScreenPointArray3(m.sv3d.get()));const [g,h,n,q]=d.viewport;var r=Math.min(n,q)/16;let t=!0;f[0]<g+r?(f[0]=g+r,t=!1):f[0]>g+n-r&&(f[0]=g+n-r,
t=!1);f[1]<h+r?(f[1]=h+r,t=!1):f[1]>h+q-r&&(f[1]=h+q-r,t=!1);r=t;va.fromRender(d,f,P);c.normalize(P.direction,P.direction);d=m.sv3d.get();!r&&A.intersectRay(e,P,d)&&(b=d);l[12]=0;l[13]=0;l[14]=0;a.modelTransform=l;a.renderLocation=x.clone(b);a.state=r?a.state|K:a.state&~K};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});