// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../layers/graphics/dehydratedFeatureComparison ../../../layers/graphics/hydratedFeatures ../dragEventPipeline ./SnappingContext ../../support/Scheduler".split(" "),function(z,L,c,A,M,N,O,P,Q,B){function R(a,b,d){return A.debounce(function(){var l=L._asyncToGenerator(function*({frameTask:e,point:k,scenePoint:m,context:f,event:n,delta:q,getLastState:g},r){const t=
yield e.schedule(()=>a.snap({point:k,scenePoint:m,context:f,signal:r}),r);t.valid&&(e=yield e.schedule(()=>t.apply(),r),g=g(),c.isSome(g.point)&&k!==g.point&&(e=a.update({point:g.point,scenePoint:g.scenePoint,context:f})),c.isNone(g.updatePoint)||!N.pointEquals(e,g.updatePoint))&&(C(n.mapEnd,e,q,b),d.execute(n))});return function(e,k){return l.apply(this,arguments)}}())}function S(a){return"3d"===a.type?a.resourceController.scheduler.registerTask(B.TaskPriority.SNAPPING):B.ImmediateTask}function T(a,
b,d){return{context:new Q.SnappingContext({editGeometryOperations:a.editGeometryOperations,elevationInfo:a.elevationInfo,pointer:a.pointer,vertexHandle:c.isSome(b.info)?b.info.handle:null,excludeFeature:a.excludeFeature,visualizer:a.visualizer}),originalPos:c.isSome(b.snapOrigin)?a.coordinateHelper.vectorToDehydratedPoint(b.snapOrigin):b.mapStart,originalScenePos:c.isSome(b.scenePoints)?b.scenePoints.sceneStart:null,frameTask:d}}function D(a,[b,d,l]){a=O.clonePoint(a);a.x+=b;a.y+=d;a.hasZ&&(a.z+=
l);return a}function U(a,b){return c.isNone(a)||c.isNone(b)?null:D(a,u(b.sceneEnd,b.sceneStart))}function u(a,b){return[a.x-b.x,a.y-b.y,a.hasZ&&b.hasZ?a.z-b.z:0]}function C(a,b,[d,l,e],k){a.x=b.x+d;a.y=b.y+l;k&&a.hasZ&&b.hasZ&&(a.z=b.z+e)}function V(a,b){if(!a.hasZ())return null;var d=b.vertices;b=null;for(const l of d){d=a.getZ(l.pos);if(c.isSome(b)&&c.isSome(d)&&1E-6<Math.abs(d-b))return null;c.isNone(b)&&(b=d)}return b}function E(a){return a}z.createSnapDragEventPipelineStep=function({predicate:a=
()=>!0,snappingManager:b,snappingContext:d,updatingHandles:l,useZ:e=!0}){const k=new P.EventPipeline;if(c.isNone(b))return{snappingStep:[E,k],cancelSnapping:E};let m=null,f=null,n,q=null;const g=()=>{m=c.abortMaybe(m);b.doneSnapping();c.isSome(f)&&f.frameTask.remove();f=null;n=c.removeMaybe(n);q=null},r=R(b,e,k);let t=null,F=null,G=null;return{snappingStep:[h=>{if(!a(h))return h;const {action:v}=h;if("start"===v){var {info:p}=h;const w=S(b.view);f=T(d,h,w);f.context.selfSnappingZ=null;!e&&c.isSome(p)&&
(p=V(d.coordinateHelper,p.handle.component),c.isSome(p)&&(f.context.selfSnappingZ={value:p,elevationInfo:d.elevationInfo}))}if(c.isSome(f)){const {context:w,originalScenePos:W,originalPos:H}=f,{mapEnd:I,mapStart:J,scenePoints:X}=h,x=D(H,u(I,J)),K=u(J,H),Y={...h,action:"update"},Z=f.context,y=U(W,X);G=p=b.update({point:x,scenePoint:y,context:w});C(I,p,K,e);t=x;F=y;if("end"!==v){const {frameTask:aa}=f;c.isNone(m)&&(m=new AbortController);q=ba=>{l.addPromise(A.ignoreAbortErrors(r({frameTask:aa,event:Y,
context:Z,point:x,scenePoint:y,delta:K,getLastState:()=>({point:t,scenePoint:F,updatePoint:ba.forceUpdate?null:G})},c.unwrap(m).signal)))};q({forceUpdate:!1});c.isNone(n)&&(n=M.watch(()=>b.options.effectiveEnabled,()=>q?.({forceUpdate:!0})))}}"end"===v&&g();return h},k],cancelSnapping:h=>{g();return h}}};Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});