// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/PooledArray ../../../../../chunks/mat3 ../../../../../chunks/mat3f32 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../chunks/vec32 ../../../../../chunks/vec33 ../../../../ViewingMode ../../../layers/support/symbolColorUtils ../../../support/orientedBoundingBox ../../../support/buffer/glUtil ../../../support/buffer/InterleavedLayout ./ComponentData ./ComponentObject ./IntersectionGeometry ./Renderable ./RenderGeometry ./RenderSubmitSystem ./SourceGeometry ./UniformComponentParameters ./Material/ComponentMaterial ./Material/ComponentTechnique ./Material/shader/ComponentData.glsl ../../lib/ComponentUtils ../../lib/Util ../../lib/VertexAttribute ../../lib/verticalOffsetUtils ../../lib/edgeRendering/bufferLayouts ../../lib/edgeRendering/edgeProcessing ../../lib/TextureBackedBuffer/BufferManager ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/VertexArrayObject".split(" "),
function(L,M,V,E,m,N,O,W,w,F,X,Y,Z,P,z,Q,aa,ba,A,ca,da,ea,fa,ha,ia,r,ja,ka,R,la,ma,na,oa,pa,qa,G,B,ra){function H(u,h){return u===h?r.ComponentParameterSummary.All:0===u?r.ComponentParameterSummary.None:r.ComponentParameterSummary.Some}const S=E.getLogger("esri.views.3d.webgl-engine.collections.Component.ComponentObjectCollection");E=function(){function u(a,b){this._renderManager=a;this._viewingMode=b;this._objects=[new N,new N];this._renderSubmit=new fa.RenderSubmitSystem(this);this._renderManager.register(this._renderSubmit);
this._hasObjectAndLayerId=V("enable-feature:objectAndLayerId-rendering");this._componentBufferManager=new qa.BufferManager(a.rctx,2+(this._hasObjectAndLayerId?1:0))}var h=u.prototype;h.destroy=function(){la.assert(0===this._objects[A.State.Hidden].length&&0===this._objects[A.State.Visible].length,"ObjectCollection should be empty upon disposal");this._componentBufferManager.destroy()};h.createObject=function(a){const b=new A.ComponentObject;b.toMapSpace=a.toMapSpace;b.transform=a.transform;b.obb=
z.clone(a.obb);b.components=new ba(this._componentBufferManager,a.geometry.componentOffsets);b.renderable=this._createRenderable(a,b.components);b.intersectionGeometry=new ca(a.geometry.positionData,b.components);this._objects[b.visible].push(b);return b};h.destroyObject=function(a){this._objects[a.visible].removeUnordered(a);a.destroy();this._notifyDirty()};h.setObjectVisibility=function(a,b){b!==a.visible&&(this._objects[a.visible].removeUnordered(a),this._objects[b].push(a),a.visible=b,this._notifyDirty())};
h.preSubmit=function(a){const b=a.camera.eye;this.visibleObjects.forAll(c=>c.renderable.meta.cameraDepthSquared=w.squaredDistance(b,c.obb.center))};h.getMaterial=function(a){return a.renderable.material};h.updateMaterial=function(a,b){a=a.renderable.material;b(a);a.dirty&&this._notifyDirty()};h.setAllComponentVisibilities=function(a,b){a.components.visibility.reset(b);a.components.visibilityDirty();this._notifyDirty()};h.forEachVisibleComponent=function(a,b){return a.components.visibility.forEachComponent(b)};
h.getComponentCount=function(a){const b=a.components.visibility.componentCount();return{visible:b,invisible:a.components.count-b}};h.setComponentData=function(a,b){const c=a.renderable.material,d=a.components;var e=d.materialDataBuffer;const k=d.materialDataIndices,f=new ia.UniformComponentParameters;e=e.textureBuffer;const g=new Uint8Array(4),l=new Uint32Array(g.buffer);let q=0,p=0,x=0,t=d.verticalOffsets,I=Infinity,J=-Infinity,K=!1,v=!1,T=0;for(let n=0;n<d.count;n++){b(n,f);q+=+(1>f.externalColor[3]);
p+=+(f.externalColorMixMode===P.ColorMixModeEnum.Replace&&1===f.externalColor[3]);x+=+f.castShadows;P.encodeSymbolColor(f.externalColor,f.externalColorMixMode,g);g[2]=g[2]&254|+f.castShadows;e.setData(k[n],0,g[0],g[1],g[2],g[3]);K||(K=0<n&&T!==l[0]);T=l[0];v||(v=0!==f.elevationOffset);v&&m.isNone(t)&&(t=Array(n).fill(0));m.isSome(t)&&(t[n]=f.elevationOffset);I=Math.min(I,f.elevationOffset);J=Math.max(J,f.elevationOffset);ka.encodeElevationOffset(f.elevationOffset,g);e.setData(k[n],1,g[0],g[1],g[2],
g[3]);const y=f.objectAndLayerIdColor;m.isSome(y)&&e.setData(k[n],2,y[0],y[1],y[2],y[3]);f.pickable!==R.getVisibility(d.pickability,n)&&(d.pickability=R.updateVisibilityWithCount(d.pickability,d.count,n,f.pickable))}d.verticalOffsets=v?t:null;a.offsetObb=v?z.computeOffsetObb(a.obb,I,J,this._viewingMode,m.isSome(a.offsetObb)?a.offsetObb:z.clone(a.obb)):null;K||v||this._hasObjectAndLayerId?(c.componentParameters=new r.ComponentParametersVarying,c.componentParameters.castShadows=H(x,d.count),c.componentParameters.transparent=
H(q,d.count),c.componentParameters.opaqueOverride=H(p,d.count),c.componentParameters.texture=e,e.updateTexture()):(c.componentParameters=new r.ComponentParametersUniform,c.componentParameters.castShadows=f.castShadows?r.ComponentParameterSummary.All:r.ComponentParameterSummary.None,c.componentParameters.externalColor=f.externalColor,c.componentParameters.externalColorMixMode=f.externalColorMixMode);this._notifyDirty()};h.getComponentAabb=function(a,b,c,d=!1){a.intersectionGeometry.getComponentAabb(b,
c);const e=a.components.verticalOffsets;if(d||m.isNone(e))return c;b=e[b];if(this._viewingMode===Z.ViewingMode.Local||0===b)return c[2]+=b,c[5]+=b,c;b=m.unwrap(na.getVerticalOffsetI3S(b));b.localOrigin=a.transform.position;return b.applyToAabb(c)};h.getComponentObb=function(a){return a.obb};h.getObjectTransform=function(a){return a.transform};h.getComponentPositions=function(a,b,c){return a.intersectionGeometry.getComponentPositions(b,c)};h.intersect=function(a,b,c,d,e,k){m.isSome(e)&&(e.localOrigin=
a.transform.position);const f=O.invert(U,a.transform.rotationScale);w.sub(C,b,a.transform.position);w.sub(D,c,a.transform.position);w.transformMat3(C,C,f);w.transformMat3(D,D,f);b=O.transpose(U,f);return a.intersectionGeometry.intersect(C,D,d,b,e,a.components.verticalOffsets,k)};h.addEdges=function(a,b,c,d){const {indices:e,positions:k}=a.intersectionGeometry,f=a.components.offsets;return b.addComponentObject(a,a.transform,{center:a.obb.center,radius:z.radius(a.obb)},k,e,f,c,d)};h.extractEdgeInformation=
function(){var a=M._asyncToGenerator(function*(b,c,d){var e=b.components.visibility;if(e.allInvisible())return{buffer:pa.extractComponentsEdgeLocationsLayout.createBuffer(0),origin:[0,0,0]};const {indices:k,positions:f}=b.intersectionGeometry,g=b.components.offsets,l=oa.EdgeInputBufferLayout.createBuffer(f.count);Y.copy(l.position,f);X.transformMat3(l.position,l.position,b.transform.rotationScale);this._setComponentIndices(l.componentIndex,k,g);e=this._computeVisibilityIndices(k,e,g,l.count);b=F.clone(b.transform.position);
c=yield c.extractComponentsEdgeLocations({indices:e,indicesLength:e.length,skipDeduplicate:!0,data:l,writerSettings:{reducedPrecision:!1,variants:0}},d);return{origin:b,buffer:c}});return function(b,c,d){return a.apply(this,arguments)}}();h._setComponentIndices=function(a,b,c){let d=0;for(let k=0;k<c.length-1;k++){var e=c[k];const f=c[k+1];for(;e<f;e++)a.set(b?b[e]:e,d);d++}};h._computeVisibilityIndices=function(a,b,c,d){if(a&&b.allVisible())return a;let e=0;b.forEachComponentRange((g,l)=>{e+=c[l]-
c[g];return!0});const k=Array.isArray(a)?Array(e):2===a?.BYTES_PER_ELEMENT||65536>=d?new Uint16Array(e):new Uint32Array(e);let f=0;b.forEachComponentRange((g,l)=>{g=c[g];for(l=c[l];g<l;g++)k[f++]=a?a[g]:g;return!0});return k};h.addComponentHighlight=function(a,b){a=a.components;m.isNone(a.highlightCounts)&&(a.highlightCounts=new Uint32Array(a.count+1));0===a.highlightCounts[b]++&&(a.highlightsDirty(),this._notifyDirty());a.highlightCounts[a.count]++};h.removeComponentHighlight=function(a,b){a=a.components;
if(m.isNone(a.highlightCounts))S.warn("Removing non-existing highlight.");else{var c=a.highlightCounts[b],d=a.highlightCounts[a.count];0===c?S.warn("Removing non-existing highlight."):1<c?(a.highlightCounts[b]=c-1,a.highlightCounts[a.count]=d-1):(a.highlightCounts[b]=0,a.highlightsDirty(),this._notifyDirty(),1===d?a.highlightCounts=null:a.highlightCounts[a.count]=d-1)}};h.clearHighlights=function(a){a=a.components;m.isSome(a.highlightCounts)&&(a.highlightCounts=null,a.highlightsDirty(),this._notifyDirty())};
h.getObjectGPUMemoryUsage=function(a){return a.renderable.meta.gpuMemoryEstimate};h._createRenderable=function(a,b){const c=this._renderManager.rctx,d=a.geometry;var e=d.vertices.layoutParameters,k=G.BufferObject.createVertex(c,B.Usage.STATIC_DRAW,d.vertices.data);const f=m.applySome(d.indices,p=>G.BufferObject.createIndex(c,B.Usage.STATIC_DRAW,p));var g=Q.glLayout(ha.createVertexBufferLayout(e));const l=new Uint16Array(d.vertices.count);for(let p=0;p<b.count;p++){var q=b.offsets[p];const x=b.offsets[p+
1],t=b.materialDataIndices[p];if(m.isSome(d.indices))for(;q<x;q++)l[d.indices[q]]=t;else for(;q<x;q++)l[q]=t}b=G.BufferObject.createVertex(c,B.Usage.STATIC_DRAW,l.buffer);a=new r.ComponentMaterial(a.transform,a.toMapSpace);g=new ra.VertexArrayObject(c,ja.attributeLocations,{data:g,componentIndices:sa},{data:k,componentIndices:b},m.unwrap(f));e=new ea.RenderGeometry(g,B.PrimitiveType.TRIANGLES,e,m.isSome(f));k={cameraDepthSquared:.5,gpuMemoryEstimate:k.byteSize+b.byteSize+(m.isSome(f)?f.byteSize:0)};
return new da.Renderable(a,e,k)};h._notifyDirty=function(){this._renderManager.notifyDirty()};M._createClass(u,[{key:"visibleObjects",get:function(){return this._objects[A.State.Visible]}}]);return u}();const sa=Q.glLayout(aa.newLayout().u16(ma.VertexAttribute.COMPONENTINDEX)),U=W.create(),C=F.create(),D=F.create();L.ComponentObjectCollection=E;Object.defineProperty(L,Symbol.toStringTag,{value:"Module"})});