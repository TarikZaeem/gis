// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../support/buffer/glUtil ../DefaultVertexAttributeLocations ../GLMaterials ../Intersector ../IntersectorInterfaces ../VertexArrayObject ./Intersector ../../../../webgl/BufferObject ../../../../webgl/enums".split(" "),function(q,t,u,v,w,x,d,y,z,A,B){let F=function(){function m(a,b){const h=a.renderContext.rctx;b=b.geometry;this._materialRepository=a.materialRepository;b.material.setParameters({instancedDoublePrecision:!0});a=b.material.createBufferWriter();
const k=a.vertexBufferLayout,l=a.elementCount(b),e=a.allocate(l);a.write(null,null,b,e,0);this.geometry=b;this.material=b.material;this.glMaterials=new w.GLMaterials(b.material,this._materialRepository);this.vertexBufferLayout=k;this.vbo=A.BufferObject.createVertex(h,B.Usage.STATIC_DRAW,e.buffer);this.vao=new y.VertexArrayObject(h,v.Default3D,{geometry:u.glLayout(k)},{geometry:this.vbo});this.vertexCount=l}var r=m.prototype;r.destroy=function(){this.glMaterials.destroy();this.vbo.dispose();this.vao.dispose()};
r.intersect=function(a,b,h,k,l,e,C,D){const E=this.geometry.id;this.material.intersect(this.geometry,a.transform.transform,a,h,k,(c,n,f,p,g)=>{0<=c&&(null==b||b(a.rayBegin,a.rayEnd,c))&&(f=new z.LodTarget(e.layerUid,e.graphicUid(l),E,f,C,D),(null==a.results.min.drapedLayerOrder||g>=a.results.min.drapedLayerOrder)&&(null==a.results.min.dist||c<a.results.min.dist)&&a.results.min.set(d.IntersectorType.LOD,f,c,n,a.transform.transform,g),a.options.store!==d.StoreResults.MIN&&(null==a.results.max.drapedLayerOrder||
g>=a.results.max.drapedLayerOrder)&&(null==a.results.max.dist||c>a.results.max.dist)&&a.results.max.set(d.IntersectorType.LOD,f,c,n,a.transform.transform,g),a.options.store===d.StoreResults.ALL&&(p=x.newIntersectorResult(a.results.min.ray),p.set(d.IntersectorType.LOD,f,c,n,a.transform.transform,g),a.results.all.push(p)))})};t._createClass(m,[{key:"boundingInfo",get:function(){return this.geometry.boundingInfo}},{key:"triangleCount",get:function(){return this.vertexCount/3}}]);return m}();q.LodComponentData=
F;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});