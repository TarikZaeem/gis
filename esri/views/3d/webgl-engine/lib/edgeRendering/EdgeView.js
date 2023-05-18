// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/arrayUtils ../../../../../core/Logger ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/mat3 ../../../../../chunks/mat3f64 ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../core/support/WatchUpdatingTracking ../../../../../chunks/sphere ../../../../../chunks/vec33 ../../../../ViewingMode ../../collections/Component/Material/shader/ComponentData.glsl ../../core/util/TwoVectorPosition ../GridLocalOriginFactory ../localOriginHelper ../LocalOriginManager ../Object3D ../VertexArrayObject ../VertexAttribute ./bufferLayouts ./edgeBufferWriters ./edgePreprocessing ./EdgeRenderer ./EdgeShaderParameters ./EdgeWorkerHandle ./interfaces ./strokes ./util ../TextureBackedBuffer/BufferManager ../../shaders/sources/edgeRenderer/EdgeUtil.glsl ../../../../webgl/BufferObject ../../../../webgl/enums".split(" "),
function(u,v,x,K,N,ca,O,r,z,xa,da,L,ea,P,C,M,fa,Q,ha,ia,ja,ka,la,ma,na,oa,pa,D,E,R,S,B,qa,ra,T,sa,A,ta,F,U,V){function W(n){r.isSome(n)&&(n.vao.vertexBuffers.instances.dispose(),n.vao.dispose(!1),n.vao=null)}function ua(n){let p=null,k=null;for(let b=0;b<n.geometries.length;b++){const a=n.geometries[b];if(a.material.supportsEdges){if(!p)p=a.transformation;else if(!N.equals(p,a.transformation))return!1;if(!k&&r.isSome(a.localOrigin))k=a;else if(k&&r.isSome(k.localOrigin)&&r.isSome(a.localOrigin)&&
k.localOrigin.id!==a.localOrigin.id)return!1}}return!0}function H(n,p,k){p*=k;k=N.binaryIndexOf(n,p,!0);return-1===k?p<n[0]?n.length:0:n.length-k}u.EdgeView=function(n){function p(b){var a=n.call(this,b)||this;a._updatingHandles=new fa.WatchUpdatingTracking;a._perObjectData=new Map;a._perObjectDataEvictionCache=new Set;a._renderers=new Map;a._gpuMemoryUsage=0;a._workerAbort=new AbortController;a._tmpModelPosition=M.create();a._localOrigins=new na.LocalOriginManager(new la.GridLocalOriginFactory(b.renderSR));
return a}v._inheritsLoose(p,n);var k=p.prototype;k.initialize=function(){this._worker=new ra.EdgeWorkerHandle(this.schedule);this._componentColorManager=new ta.BufferManager(this.rctx,3);const b=E.VertexLayout.createBuffer(4);for(let a=0;4>a;a++)b.sideness.set(a,0,0===a||3===a?0:1),b.sideness.set(a,1,0===a||1===a?0:1);this._verticesBufferObject=U.BufferObject.createVertex(this.rctx,V.Usage.STATIC_DRAW,b.buffer)};k.destroy=function(){this.destroyed||(this._perObjectData.forEach(b=>this._discardObjectEntry(b)),
this._perObjectData.clear(),this._strokesTexture=r.disposeMaybe(this._strokesTexture),this._componentColorManager=r.destroyMaybe(this._componentColorManager),this._workerAbort.abort(),this._worker.destroy(),this._verticesBufferObject=r.disposeMaybe(this._verticesBufferObject),this._renderers.clear(),this._updatingHandles.destroy())};k.shouldRender=function(){return 0<this._renderers.size};k.addComponentObject=function(){var b=v._asyncToGenerator(function*(a,c,d,e,f,g,h,l){if(this.hasObject(a))return this.getObjectMemoryUsage(a);
let m;d=new X(new Promise(q=>m=q),d.center,d.radius);this._perObjectData.set(a,d);a=yield this._updatingHandles.addPromise(this._addComponentGeometry(c,d,e,f,g,h,l));this.setNeedsRender();m();return a});return function(a,c,d,e,f,g,h,l){return b.apply(this,arguments)}}();k.addOrUpdateObject3D=function(){var b=v._asyncToGenerator(function*(a,c,d,e){if(this.destroyed)ca.getLogger(this.declaredClass).warn("Attempt to add an object to a destroyed instance");else{var f=this._perObjectData.get(a);0<f?.renderables.length&&
this._perObjectDataEvictionCache.add(f);var g,h=a.boundingVolumeWorldSpace.bounds;h=new X(new Promise(m=>g=m),Q.getCenter(h),Q.getRadius(h));this._perObjectData.set(a,h);var l=[];if(d.mergeGeometries&&1<a.geometries.length&&ua(a))l.push(this._addObjectMergedGeometries(a,h,c,d,e));else for(let m=0;m<a.geometries.length;m++){const q=a.geometries[m];q.material.supportsEdges&&l.push(this._addGeometry(a,h,q,c[0],d,e))}yield this._updatingHandles.addPromise(Promise.all(l));this._perObjectDataEvictionCache.delete(h);
this._discardObjectEntry(f);this.setNeedsRender();g()}});return function(a,c,d,e){return b.apply(this,arguments)}}();k._discardObjectEntry=function(b){b&&(b.renderables.length&&(b.renderables.forEach(a=>this._removeRenderable(a)),this.setNeedsRender()),b.loaded=null)};k.hasObject=function(b){return this._perObjectData.has(b)};k.updateAllComponentOpacities=function(){var b=v._asyncToGenerator(function*(a,c){a=yield this._updatingHandles.addPromise(this._getObjectEntry(a));if(!r.isNone(a)){var d=c instanceof
Array?e=>c[e]:()=>c;a.renderables.forEach(e=>{const f=e.components.meta.length;for(let g=0;g<f;g++){const h=d(g),l=e.components.meta[g],m=l.index;l.material.opacity=h;e.components.buffer.textureBuffer.setDataElement(m,1,3,255*h)}this._updateTransparency(e)});this.setNeedsRender()}});return function(a,c){return b.apply(this,arguments)}}();k.getObjectMemoryUsage=function(){var b=v._asyncToGenerator(function*(a){a=yield this._getObjectEntry(a);return r.isSome(a)?a.renderables.reduce((c,d)=>c+d.statistics.gpuMemoryUsage,
0):0});return function(a){return b.apply(this,arguments)}}();k.updateAllComponentMaterials=function(){var b=v._asyncToGenerator(function*(a,c,d,e){const f=a instanceof oa.Object3D,g=!!d.hasSlicePlane,h=A.determineRendererType(c),l=B.EdgeRenderer.getKey(h,g,f);a=yield this._updatingHandles.addPromise(this._getObjectEntry(a));r.isNone(a)||(a.renderables.forEach(m=>{if(l!==m.rendererKey){var q=this._renderers.get(m.rendererKey);const t=this._acquireRenderer(h,g,f);q.removeRenderable(m);--q.refCount;
m.rendererKey=l;t.addRenderable(m)}for(q=0;q<c.length;q++)m.components.meta[q].material=c[q];e&&this._updateComponentBuffer(m.components);this._updateTransparency(m)}),this.setNeedsRender())});return function(a,c,d,e){return b.apply(this,arguments)}}();k.updateAllVerticalOffsets=function(){var b=v._asyncToGenerator(function*(a,c){a=yield this._updatingHandles.addPromise(this._getObjectEntry(a));r.isNone(a)||(a.renderables.forEach(d=>{const e=d.components.meta;for(let f=0;f<e.length;f++)d.components.meta[f].verticalOffset=
c?.[f]??0;this._updateComponentBuffer(d.components)}),this.setNeedsRender())});return function(a,c){return b.apply(this,arguments)}}();k.updateObjectVisibility=function(){var b=v._asyncToGenerator(function*(a,c){a=yield this._updatingHandles.addPromise(this._getObjectEntry(a));r.isSome(a)&&(a.renderables.forEach(d=>d.visible=c),this.setNeedsRender())});return function(a,c){return b.apply(this,arguments)}}();k.removeObject=function(b){const a=this._perObjectData.get(b);a&&(this._perObjectData.delete(b),
this._discardObjectEntry(a))};k._getObjectEntry=function(){var b=v._asyncToGenerator(function*(a){a=this._perObjectData.get(a);if(!a)throw Error("no object");yield a.loaded;return null==a.loaded?null:a});return function(a){return b.apply(this,arguments)}}();k.render=function(b,a){if(!r.isNone(this._componentColorManager)){this._localOrigins.updateViewMatrices(b.camera.viewMatrix);var c=b.camera.viewInverseTransposeMatrix,d=M.create(),e=new ka.TwoVectorPosition,f=0,g=0;this._renderers.forEach(l=>{if(0===
l.refCount)this._renderers.delete(l.key),l.dispose();else{let m=!0,q=!0;l.forEachRenderable(t=>{t.visible&&(f+=t.statistics.averageEdgeLength,g++,m&&t.regular&&(l.updateTechnique(b,!1),m=!1),q&&t.silhouette&&(l.updateTechnique(b,!0),q=!1))},a)}});this._componentColorManager.garbageCollect();this._componentColorManager.updateTextures();if(0!==g){var h=new qa.EdgePassParameters(40*f/g,a);C.set(d,c[3],c[7],c[11]);e.set(d);C.copy(h.transformWorldFromViewTH,e.high);C.copy(h.transformWorldFromViewTL,e.low);
L.fromMat4(h.transformViewFromCameraRelativeRS,b.camera.viewMatrix);L.transpose(Y,h.transformViewFromCameraRelativeRS);L.invert(h.transformNormalViewFromGlobal,Y);h.transformProjFromView=b.camera.projectionMatrix;this._updateObjectCameraDistances(b);this._renderers.forEach(l=>{this._renderRegularEdges(l,b,h);this._renderSilhouetteEdges(l,b,h)})}}};k._updateTransparency=function(b){const a=A.determineEdgeTransparency(b.components.meta),c=A.determineObjectTransparency(b.components.meta);if(a!==b.edgeTransparency||
c!==b.objectTransparency)b.edgeTransparency=a,b.objectTransparency=c,this._renderers.get(b.rendererKey).setRenderablesDirty()};k._computeModelTransformWithLocalOrigin=function(b,a,c){b.getCombinedStaticTransformation(a,c);b=r.isSome(a.localOrigin)?this._localOrigins.register(a.localOrigin):this._localOrigins.acquire(C.set(this._tmpModelPosition,c[12],c[13],c[14]));a.localOrigin=b.origin;ma.applyToModelMatrix(b.origin.vec3,c);return b};k._updateComponentBuffer=function(b){const {meta:a,buffer:c}=b;
b=new Uint8Array(4);for(let e=0;e<a.length;e++){var d=a[e].material;const f=a[e].index,g=O.clamp(Math.round(d.size*B.LINE_WIDTH_FRACTION_FACTOR),0,255),h=O.clamp(d.extensionLength,-B.EXTENSION_LENGTH_OFFSET,255-B.EXTENSION_LENGTH_OFFSET)+B.EXTENSION_LENGTH_OFFSET,l="solid"===d.type?S.EdgeType.SOLID:S.EdgeType.SKETCH,m=255*d.opacity;d=d.color;c.textureBuffer.setData(f,0,255*d[0],255*d[1],255*d[2],255*d[3]);c.textureBuffer.setData(f,1,g,h,l,m);ja.encodeElevationOffset(a[e].verticalOffset,b);c.textureBuffer.setData(f,
2,b[0],b[1],b[2],b[3])}};k._createComponentBuffers=function(b){if(r.isNone(this._componentColorManager))return null;const a=[],c=this._componentColorManager.getBuffer(b.length);for(let d=0;d<b.length;d++){const e=b[d],f=c.acquireIndex();a.push({index:f,verticalOffset:0,material:e})}b=new va(c,a);this._updateComponentBuffer(b);return b};k._extractEdges=function(b,a,c,d,e,f=e.length){return this._worker.process({data:a,indices:e,indicesLength:f,writerSettings:b,skipDeduplicate:c},this._workerAbort.signal,
d)};k._createRenderable=function(b,a,c,d,e){var f=l=>r.isSome(this._verticesBufferObject)?new wa(new pa.VertexArrayObject(this.rctx,E.EdgeShaderAttributeLocations,{vertices:E.glVertexLayout,instances:l===F.EdgeSilhouette.REGULAR?R.RegularEdgeBufferWriter.glLayout:R.SilhouetteEdgeBufferWriter.glLayout},{vertices:this._verticesBufferObject,instances:U.BufferObject.createVertex(this.rctx,V.Usage.STATIC_DRAW,l===F.EdgeSilhouette.REGULAR?b.regular.instancesData.buffer:b.silhouette.instancesData.buffer)}),
l===F.EdgeSilhouette.REGULAR?b.regular.lodInfo:b.silhouette.lodInfo):null;const g=0<b.regular.lodInfo.lengths.length?f(F.EdgeSilhouette.REGULAR):null;f=0<b.silhouette.lodInfo.lengths.length?f(F.EdgeSilhouette.SILHOUETTE):null;const h=(r.isSome(g)?g.vao.size:0)+(r.isSome(f)?f.vao.size:0);return new I(g,f,{gpuMemoryUsage:h,externalMemoryUsage:e,averageEdgeLength:b.averageEdgeLength},c,A.determineEdgeTransparency(a.meta),A.determineObjectTransparency(a.meta),a,d)};k._addGeometry=function(){var b=v._asyncToGenerator(function*(a,
c,d,e,f,g){var h=d.vertexAttributes.get(D.VertexAttribute.POSITION);const l=d.indices.get(D.VertexAttribute.POSITION),m=P.create();a=this._computeModelTransformWithLocalOrigin(a,d,m);h=new Z(h,l,m,a);return this._addPositionData(c,h,d.edgeIndicesLength,e,f,g)});return function(a,c,d,e,f,g){return b.apply(this,arguments)}}();k._addPositionData=function(){var b=v._asyncToGenerator(function*(a,c,d,e,f,g=!1){if(null!=a.loaded){var h=this._createComponentBuffers([e]);if(!(r.isNone(h)||0>=d)){e=this._acquireRenderer(e.type,
!!f.hasSlicePlane,!0);var {modelTransform:l,origin:m}=c;f=c.indices;c=c.position;var q=c.data.length/c.size,t=E.EdgeInputBufferLayout.createBuffer(q);for(let w=0;w<q;w++)t.position.set(w,0,c.data[w*c.size]),t.position.set(w,1,c.data[w*c.size+1]),t.position.set(w,2,c.data[w*c.size+2]);A.fillComponenBufferIndices(h.meta,[0,t.componentIndex.count],t.componentIndex);d=yield this._updatingHandles.addPromise(this._extractEdges(e.writerSettings,t,!1,g,f,d));null!=a.loaded&&(h=this._createRenderable(d,h,
new aa(l,m),e.key,!1),a.renderables.push(h),e.addRenderable(h),this._gpuMemoryUsage+=h.statistics.gpuMemoryUsage)}}});return function(a,c,d,e,f){return b.apply(this,arguments)}}();k._addComponentGeometry=function(){var b=v._asyncToGenerator(function*(a,c,d,e,f,g,h){if(null==c.loaded)return 0;const l=this._createComponentBuffers(g);if(r.isNone(l))return 0;g=A.determineRendererType(g);h=this._acquireRenderer(g,h.hasSlicePlane||!1,!1);g=E.EdgeInputBufferLayout.createBuffer(d.count);ha.copy(g.position,
d);A.fillComponenBufferIndices(l.meta,f,g.componentIndex,e);d=yield this._updatingHandles.addPromise(this._extractEdges(h.writerSettings,g,!0,!1,e));if(null==c.loaded)return 0;a=this._createRenderable(d,l,a,h.key,!0);c.renderables.push(a);h.addRenderable(a);return a.statistics.gpuMemoryUsage});return function(a,c,d,e,f,g,h){return b.apply(this,arguments)}}();k._addObjectMergedGeometries=function(){var b=v._asyncToGenerator(function*(a,c,d,e,f){var g=new Map,h=0,l=null,m=0;for(var q=0;q<a.geometries.length;q++){var t=
a.geometries[q];if(t.material.supportsEdges){!l&&t.localOrigin&&(l=t);var w=t.vertexAttributes.get(D.VertexAttribute.POSITION);m+=w.data.length/w.size;h+=t.edgeIndicesLength}}m=65536<=m?Uint32Array:Uint16Array;h=h?new m(h):null;m=[];q=0;for(t=0;t<a.geometries.length;t++){w=a.geometries[t];if(!w.material.supportsEdges)continue;var y=w.vertexAttributes.get(D.VertexAttribute.POSITION);const ba=w.indices.get(D.VertexAttribute.POSITION);let J=g.get(y.data);if(null==J){J=m.length/3;for(let G=0;G<y.data.length;G+=
y.size)m.push(y.data[G+0]),m.push(y.data[G+1]),m.push(y.data[G+2]);g.set(y.data,J)}if(ba)for(y=0;y<w.edgeIndicesLength;y++)h[q++]=J+ba[y]}l=l||a.geometries[0];g=P.create();l=this._computeModelTransformWithLocalOrigin(a,l,g);for(q=0;q<a.geometries.length;q++)a.geometries[q].localOrigin=l.origin;a=new Z({data:m,size:3},h,g,l);yield this._updatingHandles.addPromise(this._addPositionData(c,a,h.length,d[0],e,f))});return function(a,c,d,e,f){return b.apply(this,arguments)}}();k._acquireRenderer=function(b,
a,c){const d=B.EdgeRenderer.getKey(b,a,c);let e=this._renderers.get(d);r.isNone(this._strokesTexture)&&(this._strokesTexture=sa.generateStrokesTexture(this.rctx));e||(e=new B.EdgeRenderer(this.rctx,this.techniqueRepository,{type:b,hasSlicePlane:a,strokesTexture:this._strokesTexture,legacy:c,spherical:this.viewingMode===ia.ViewingMode.Global}),this._renderers.set(d,e));++e.refCount;return e};k._removeRenderable=function(b){W(b.regular);W(b.silhouette);const a=this._renderers.get(b.rendererKey);if(a){a.removeRenderable(b);
--a.refCount;"origin"in b.transform&&this._localOrigins.release(b.transform.origin);this._gpuMemoryUsage-=b.statistics.externalMemoryUsage?0:b.statistics.gpuMemoryUsage;for(const c of b.components.meta)b.components.buffer.releaseIndex(c.index)}};k._updateObjectCameraDistances=function(b){const a=b.camera.eye,c=b.camera.viewForward,d=M.create();b=e=>{C.sub(d,e.center,a);const f=C.dot(d,c),g=e.radius,h=f<-g?Infinity:f<g?0:f-g;e.renderables.forEach(l=>l.distanceToCamera=h)};this._perObjectData.forEach(b);
this._perObjectDataEvictionCache.forEach(b)};k._renderRegularEdges=function(b,a,c){const d=b.bindRegularEdges(c,a),e=a.camera.perScreenPixelRatio;b.forEachRenderable(f=>{if(r.isSome(f.regular)&&f.visible){var g=H(f.regular.lod.lengths,f.distanceToCamera,e);b.renderRegularEdges(d,f,c,a,g)}},c.transparency)};k._renderSilhouetteEdges=function(b,a,c){const d=b.bindSilhouetteEdges(c,a),e=a.camera.perScreenPixelRatio;b.forEachRenderable(f=>{if(r.isSome(f.silhouette)&&f.visible){var g=H(f.silhouette.lod.lengths,
f.distanceToCamera,e);b.renderSilhouetteEdges(d,f,c,a,g)}},c.transparency)};v._createClass(p,[{key:"updating",get:function(){return this._updatingHandles.updating}},{key:"usedMemory",get:function(){return this._gpuMemoryUsage}},{key:"test",get:function(){return{hasRenderedPrimitives:b=>{let a=!1;const c=b.perScreenPixelRatio,d=(e,f)=>e.forEachRenderable(g=>{g.visible&&!a&&(r.isSome(g.regular)&&(a=0<H(g.regular.lod.lengths,g.distanceToCamera,c)),!a&&r.isSome(g.silhouette)&&(a=0<H(g.silhouette.lod.lengths,
g.distanceToCamera,c)))},f);this._renderers.forEach(e=>{a||(d(e,T.Transparency.OPAQUE),d(e,T.Transparency.TRANSPARENT))});return a}}}}]);return p}(K);x.__decorate([z.property({constructOnly:!0})],u.EdgeView.prototype,"rctx",void 0);x.__decorate([z.property({constructOnly:!0})],u.EdgeView.prototype,"renderSR",void 0);x.__decorate([z.property({constructOnly:!0})],u.EdgeView.prototype,"viewingMode",void 0);x.__decorate([z.property({constructOnly:!0})],u.EdgeView.prototype,"techniqueRepository",void 0);
x.__decorate([z.property({constructOnly:!0})],u.EdgeView.prototype,"setNeedsRender",void 0);x.__decorate([z.property({constructOnly:!0})],u.EdgeView.prototype,"schedule",void 0);x.__decorate([z.property({readOnly:!0})],u.EdgeView.prototype,"_updatingHandles",void 0);x.__decorate([z.property({readOnly:!0})],u.EdgeView.prototype,"updating",null);u.EdgeView=x.__decorate([da.subclass("esri.views.3d.webgl-engine.lib.edgeRendering.EdgeView")],u.EdgeView);let X=function(n,p,k){this.center=p;this.radius=
k;this.renderables=[];this.loaded=n;this.loaded.then(()=>{null!=this.loaded&&(this.loaded=!0)})},va=function(n,p){this.buffer=n;this.meta=p},wa=function(n,p){this.vao=n;this.lod=p},aa=function(n,p){this.modelMatrix=n;this.origin=p},I=function(n,p,k,b,a,c,d,e){this.regular=n;this.silhouette=p;this.statistics=k;this.transform=b;this.edgeTransparency=a;this.objectTransparency=c;this.components=d;this.rendererKey=e;this.distanceToCamera=0;this.visible=!0};x=function(n){function p(){return n.apply(this,
arguments)||this}v._inheritsLoose(p,n);return p}(I);K=function(n){function p(){return n.apply(this,arguments)||this}v._inheritsLoose(p,n);return p}(I);let Z=function(n,p,k,b){this.position=n;this.indices=p;this.modelTransform=k;this.origin=b};const Y=ea.create();u.LegacyTransform=aa;u.RegularRenderable=x;u.Renderable=I;u.SilhouetteRenderable=K;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});