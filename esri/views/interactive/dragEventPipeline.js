// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../core/has ../../core/lang ../../core/mathUtils ../../core/maybe ../../core/screenUtils ../../chunks/vec3f64 ../../geometry/projection ../../layers/graphics/hydratedFeatures ../../support/elevationInfoUtils ../ViewingMode ../draw/support/drawUtils ../../geometry/Point".split(" "),function(l,P,Q,G,u,h,H,v,n,w,r,I,x,J){function y(b,d){let c=null,a=null;return e=>{if("cancel"===e.action)h.isSome(a)&&(a.execute({action:"cancel"}),a=c=null);else{var f={action:e.action,
screenStart:e.start,screenEnd:e.screenPoint};"start"===e.action&&h.isNone(c)&&(c=new t,a=new t,d(b,c,a,e.pointerType,f));h.isSome(c)&&c.execute(f);"end"===e.action&&h.isSome(c)&&(a=c=null)}}}function z(b,d){let c=null;return a=>{"start"===a.action&&(c=K(b,a.mapStart.spatialReference,d));if(h.isNone(c))return null;const e=a.mapEnd.x-a.mapStart.x,f=a.mapEnd.y-a.mapStart.y,g=a.mapEnd.z-a.mapStart.z;c.move(e,f,g);return{...a,translationX:e,translationY:f,translationZ:g}}}function A(b,d){return h.isNone(b)?
null:b.spatialReference.equals(d)?b.clone():n.project(b,d)}function K(b,d,c){const a=b.geometry;d=w.hydratedSpatialReference(d);if(h.isNone(a))return null;if("mesh"===a.type)return L(b,a,d,c);const e=A(a,d),f=a.spatialReference;return h.isNone(e)?null:{move:(g,k,m)=>{g=x.move(e.clone(),g,k,m);g.spatialReference.equals(f)?b.geometry=g:b.geometry=n.project(g,f)}}}function L(b,d,c,a){if(h.isSome(d.transform))return M(b,d,d.transform,c);if(!d.spatialReference.equals(c))return null;let e=0,f=0,g=0;return{move:(k,
m,p)=>{var q=k-e;const B=m-f,C=p-g;if(q||B||C)q=new J(d.origin.x+q,d.origin.y+B,d.origin.z+C,d.origin.spatialReference),d.centerAt(q,{geographic:a===I.ViewingMode.Global}),b.notifyGeometryChanged(),e=k,f=m,g=p}}}function M(b,d,c,a){const e=c.getOriginPoint(d.spatialReference),f=A(e,a),g=d.spatialReference;return h.isNone(f)?null:{move:(k,m,p)=>{k=x.move(f.clone(),k,m,p);k.spatialReference.equals(g)?c.origin=v.fromValues(k.x,k.y,k.z):(k=n.project(k,g),h.isSome(k)&&(c.origin=v.fromValues(k.x,k.y,k.z)));
b.notifyMeshTransformChanged();b.notifyGeometryChanged()}}}function D(b,d){const c=new Map;for(const a of d)c.set(a,G.clone(b[a]));return a=>{c.forEach((e,f)=>{b[f]=e});return a}}function E(b){return h.isSome(b.geometry)&&"mesh"===b.geometry.type?N(b,b.geometry):D(b,["geometry"])}function N(b,d){const c=h.isSome(d.transform)?d.transform.clone():null,a=d.vertexAttributes.clonePositional();return e=>{d.transform=c;d.vertexAttributes=a;b.notifyGeometryChanged();return e}}function F(b,d,c){const a=h.toNullable(d.elevationProvider.getElevation(b.x,
b.y,b.z??0,b.spatialReference,"scene"))??0;b=w.clonePoint(b);b.z=a;b.hasZ=!0;b.z=r.getZForElevationMode(b,d,c);return b}const O=()=>{};let t=function(){function b(){this.execute=O}b.prototype.next=function(d,c=new b){h.isSome(d)&&(this.execute=a=>{a=d(a);h.isSome(a)&&c.execute(a)});return c};return b}();l.EventPipeline=t;l.addMapDelta=function(){let b=0,d=0,c=0;return a=>{"start"===a.action&&(b=a.mapStart.x,d=a.mapStart.y,c=a.mapStart.z);const e=a.mapEnd.x-b,f=a.mapEnd.y-d,g=a.mapEnd.z-c;b=a.mapEnd.x;
d=a.mapEnd.y;c=a.mapEnd.z;return{...a,mapDeltaX:e,mapDeltaY:f,mapDeltaZ:g,mapDeltaSpatialReference:a.mapStart.spatialReference}}};l.addScreenDelta=function(){let b=0,d=0;return c=>{"start"===c.action&&(b=c.screenStart.x,d=c.screenStart.y);const a=c.screenEnd.x-b,e=c.screenEnd.y-d;b=c.screenEnd.x;d=c.screenEnd.y;return{...c,screenDeltaX:a,screenDeltaY:e}}};l.constrainToMapAxis=function(b,d){const c=[b.x,b.y,b.z??0],a=[Math.cos(d),Math.sin(d)];b=Math.sqrt(a[0]*a[0]+a[1]*a[1]);if(0===b)return null;a[0]/=
b;a[1]/=b;const e=f=>{const g=(f.x-c[0])*a[0]+(f.y-c[1])*a[1];f.x=c[0]+g*a[0];f.y=c[1]+g*a[1]};return f=>{e(f.mapStart);e(f.mapEnd);return{...f,axis:a}}};l.createDragEventPipelineCallback=y;l.createManipulatorDragEventPipeline=function(b,d){return b.events.on("drag",y(b,d))};l.dragAtLocation=function(b,d){let c=null,a=0,e=0;return f=>{"start"===f.action&&(c=b.toScreen?.(d),null!=c&&(0>c.x||c.x>b.width||0>c.y||c.y>b.height?c=null:(a=f.screenStart.x-c.x,e=f.screenStart.y-c.y)));if(null==c)return null;
var g=u.clamp(f.screenEnd.x-a,0,b.width);const k=u.clamp(f.screenEnd.y-e,0,b.height);g=H.createScreenPoint(g,k);f.screenStart=c;f.screenEnd=g;return f}};l.dragGraphic=z;l.dragGraphicMany=function(b,d){const c=b.map(a=>h.unwrap(z(a,d))).filter(a=>h.isSome(a));return a=>{const e=a.mapEnd.x-a.mapStart.x,f=a.mapEnd.y-a.mapStart.y,g=a.mapEnd.z-a.mapStart.z;c.forEach(k=>k(a));return{...a,translationX:e,translationY:f,translationZ:g}}};l.resetGraphic=E;l.resetGraphicMany=function(b){const d=b.map(c=>h.unwrap(E(c))).filter(c=>
h.isSome(c));return c=>{d.forEach(a=>a(c));return c}};l.resetProperties=D;l.sceneSnappingAtLocation=function(b,d,c=[]){if("2d"===b.type)return e=>e;let a=null;return e=>{"start"===e.action&&(a=b.toMap(e.screenStart,{exclude:c}),h.isSome(a)&&(a.z=r.getZForElevationMode(a,b,d)));var f=b.toMap(e.screenEnd,{exclude:c});h.isSome(f)&&(f.z=r.getZForElevationMode(f,b,d));f=h.isSome(a)&&h.isSome(f)?{sceneStart:a,sceneEnd:f}:null;return{...e,scenePoints:f}}};l.sceneSnappingAtProjectedLocation=function(b,d){if("2d"===
b.type)return a=>a;let c=null;return a=>{"start"===a.action&&(c=F(a.mapStart,b,d));var e=F(a.mapEnd,b,d);e=h.isSome(c)&&h.isSome(e)?{sceneStart:c,sceneEnd:e}:null;return{...a,scenePoints:e}}};l.screenToMap=function(b,d=null,c){let a=null;const e=h.isSome(d)&&!b.spatialReference?.equals(d)?g=>h.isSome(g)?n.project(g,d):g:g=>g,f={exclude:[],...c};return g=>{"start"===g.action&&(a=e(b.toMap(g.screenStart,f)));if(h.isNone(a))return null;const k=e(b.toMap(g.screenEnd,f));return h.isSome(k)?{...g,mapStart:a,
mapEnd:k}:null}};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});