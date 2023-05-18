// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/mat4f64 ../../../../chunks/vec3 ./AttributeArray ./basicInterfaces ./BoundingInfo ./ContentObject ./ContentObjectType ./geometryDataUtils ./Indices ./Object3DStateID ./Util ./VertexAttribute ../materials/renderers/utils".split(" "),function(v,w,l,r,z,A,B,C,t,p,q,u,D,E,f,x){t=function(y){function m(a,b,c=[],g=null,h=p.ContentObjectType.Mesh,F=null,G=-1){var d=y.call(this)||this;d.material=a;d.mapPositions=
g;d.type=h;d.objectAndLayerIdColor=F;d.edgeIndicesLength=G;d.visible=!0;d._vertexAttributes=new Map;d._indices=new Map;d._boundingInfo=null;for(const [k,n]of b)n&&d._vertexAttributes.set(k,{...n});if(null==c||0===c.length){a=d._vertexAttributes.values().next().value;a=null==a?0:a.data.length/a.size;b=u.generateDefaultIndexArray(a);d.edgeIndicesLength=0>d.edgeIndicesLength?a:d.edgeIndicesLength;for(const k of d._vertexAttributes.keys())d._indices.set(k,b)}else for(const [k,n]of c)n&&(d._indices.set(k,
u.compactIndices(n)),k===f.VertexAttribute.POSITION&&(d.edgeIndicesLength=0>d.edgeIndicesLength?d._indices.get(k).length:d.edgeIndicesLength));return d}w._inheritsLoose(m,y);var e=m.prototype;e.instantiate=function(a={}){const b=new m(a.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);this._vertexAttributes.forEach((c,g)=>{c.exclusive=!1;b._vertexAttributes.set(g,c)});this._indices.forEach((c,g)=>b._indices.set(g,c));b._boundingInfo=
this._boundingInfo;b.transformation=a.transformation||this.transformation;return b};e.getMutableAttribute=function(a){let b=this._vertexAttributes.get(a);b&&!b.exclusive&&(b={...b,exclusive:!0,data:A.cloneAttributeData(b.data)},this._vertexAttributes.set(a,b));return b};e.computeAttachmentOrigin=function(a){return(this.type===p.ContentObjectType.Mesh?this._computeAttachmentOriginTriangles(a):this.type===p.ContentObjectType.Line?this._computeAttachmentOriginLines(a):this._computeAttachmentOriginPoints(a))?
(l.isSome(this._transformation)&&z.transformMat4(a,a,this._transformation),!0):!1};e._computeAttachmentOriginTriangles=function(a){const b=this.indices.get(f.VertexAttribute.POSITION),c=this.vertexAttributes.get(f.VertexAttribute.POSITION);return q.computeAttachmentOriginTriangles(c,b,a)};e._computeAttachmentOriginLines=function(a){const b=this.vertexAttributes.get(f.VertexAttribute.POSITION),c=this.indices.get(f.VertexAttribute.POSITION);var g=q.computeAttachmentOriginLines,h;if(h=c)h=this.material.parameters,
h="isClosed"in h&&h.isClosed?c?2<c.length:6<b.data.length:!1;return g.call(q,b,c,h,a)};e._computeAttachmentOriginPoints=function(a){const b=this.indices.get(f.VertexAttribute.POSITION),c=this.vertexAttributes.get(f.VertexAttribute.POSITION);return q.computeAttachmentOriginPoints(c,b,a)};e.invalidateBoundingInfo=function(){this._boundingInfo=null};e._calculateBoundingInfo=function(){const a=this.indices.get(f.VertexAttribute.POSITION),b=this.vertexAttributes.get(f.VertexAttribute.POSITION);if(!a||
0===a.length||!b)return null;const c=this.type===p.ContentObjectType.Mesh?3:1;E.assert(0===a.length%c,"Indexing error: "+a.length+" not divisible by "+c);const g=u.generateDefaultIndexArray(a.length/c);return new C.BoundingInfo(g,c,a,b)};e.addHighlight=function(){const a=new D.Object3DStateID(B.Object3DState.Highlight);this.highlights=x.addObject3DStateID(this.highlights,a);return a};e.removeHighlight=function(a){this.highlights=x.removeObject3DStateID(this.highlights,a)};w._createClass(m,[{key:"vertexAttributes",
get:function(){return this._vertexAttributes}},{key:"indices",get:function(){return this._indices}},{key:"indexCount",get:function(){const a=this._indices.values().next().value;return a?a.length:0}},{key:"faceCount",get:function(){return this.indexCount/3}},{key:"boundingInfo",get:function(){l.isNone(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo());return this._boundingInfo}},{key:"transformation",get:function(){return l.unwrapOr(this._transformation,r.IDENTITY)},set:function(a){this._transformation=
a&&a!==r.IDENTITY?r.clone(a):null}},{key:"shaderTransformation",get:function(){return l.isSome(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}},{key:"shaderTransformer",get:function(){return this._shaderTransformer},set:function(a){this._shaderTransformer=a}},{key:"hasVolatileTransformation",get:function(){return l.isSome(this._shaderTransformer)}}]);return m}(t.ContentObject);v.Geometry=t;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});