// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Logger ../../core/maybe ./enums ./Util".split(" "),function(m,t,k,g,n,p){const d=k.getLogger("esri.views.webgl.VertexArrayObject");k=function(){function l(a,b,c,e,h=null){this._context=a;this._locations=b;this._layout=c;this._buffers=e;this._indexBuffer=h;this._glName=null;this._initialized=!1;a.instanceCounter.increment(n.ResourceType.VertexArrayObject,this)}var f=l.prototype;f.dispose=function(a=!0){if(this._context){if(this._glName){const b=
this._context?.capabilities?.vao;b?(b.deleteVertexArray(this._glName),this._glName=null):d.warn("Leaked WebGL VAO")}this._context.getBoundVAO()===this&&this._context.bindVAO(null);if(a){for(const b in this._buffers)this._buffers[b]?.dispose(),delete this._buffers[b];this._indexBuffer=g.disposeMaybe(this._indexBuffer)}this._context.instanceCounter.decrement(n.ResourceType.VertexArrayObject,this);this._context=g.nullifyNonNullableForDispose(this._context)}else(this._glName||a&&0<Object.getOwnPropertyNames(this._buffers).length)&&
d.warn("Leaked WebGL VAO")};f.initialize=function(){if(!this._initialized){var a=this._context.capabilities.vao;if(a){const b=a.createVertexArray();a.bindVertexArray(b);this._bindLayout();a.bindVertexArray(null);this._glName=b}this._initialized=!0}};f.bind=function(){this.initialize();const a=this._context.capabilities.vao;a?a.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())};f._bindLayout=function(){const {_buffers:a,_layout:b,_indexBuffer:c}=this;a||d.error("Vertex buffer dictionary is empty!");
const e=this._context.gl;for(const h in a){const q=a[h];q||d.error("Vertex buffer is uninitialized!");const r=b[h];r||d.error("Vertex element descriptor is empty!");p.bindVertexBufferLayout(this._context,this._locations,q,r)}g.isSome(c)&&(this._context.capabilities.vao?e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,c.glName):this._context.bindBuffer(c))};f.unbind=function(){this.initialize();const a=this._context.capabilities.vao;a?a.bindVertexArray(null):this._unbindLayout()};f._unbindLayout=function(){const {_buffers:a,
_layout:b}=this;a||d.error("Vertex buffer dictionary is empty!");for(const c in a){const e=a[c];e||d.error("Vertex buffer is uninitialized!");p.unbindVertexBufferLayout(this._context,this._locations,e,b[c])}g.isSome(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)};t._createClass(l,[{key:"glName",get:function(){return this._glName}},{key:"context",get:function(){return this._context}},{key:"vertexBuffers",get:function(){return this._buffers}},{key:"indexBuffer",get:function(){return this._indexBuffer}},
{key:"size",get:function(){return Object.keys(this._buffers).reduce((a,b)=>a+this._buffers[b].size,g.isSome(this._indexBuffer)?this._indexBuffer.size:0)}},{key:"layout",get:function(){return this._layout}},{key:"locations",get:function(){return this._locations}}]);return l}();m.VertexArrayObject=k;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});