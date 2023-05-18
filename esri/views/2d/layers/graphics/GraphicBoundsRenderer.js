// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f32 ../../../../chunks/vec2f32 ../../../../chunks/vec3f32 ../../../../geometry/support/normalizeUtils ../../engine/DisplayObject ../../engine/webgl/Utils ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/VertexArrayObject".split(" "),function(x,y,p,t,z,A,B,C,D,u,m,E){const F=Math.PI/180,v=()=>D.createProgramDescriptor("bounds",{geometry:[{location:0,name:"a_position",
count:2,type:m.DataType.FLOAT}]});return function(w){function q(c){var a=w.call(this)||this;a._program=null;a._vao=null;a._vertexBuffer=null;a._indexBuffer=null;a._dvsMat3=t.create();a._localOrigin={x:0,y:0};a._getBounds=c;return a}x._inheritsLoose(q,w);var n=q.prototype;n.destroy=function(){this._vao&&(this._vao.dispose(!0),this._indexBuffer=this._vertexBuffer=this._vao=null);this._program=y.disposeMaybe(this._program)};n.doRender=function(c){const {context:a}=c,h=this._getBounds();1>h.length||(this._createShaderProgram(a),
this._updateMatricesAndLocalOrigin(c),this._updateBufferData(a,h),a.setBlendingEnabled(!0),a.setDepthTestEnabled(!1),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setBlendFunction(m.BlendFactor.ONE,m.BlendFactor.ONE_MINUS_SRC_ALPHA),a.setColorMask(!0,!0,!0,!0),c=this._program,a.bindVAO(this._vao),a.useProgram(c),c.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),a.gl.lineWidth(1),a.drawElements(m.PrimitiveType.LINES,8*h.length,m.DataType.UNSIGNED_INT,0),a.bindVAO())};n._createTransforms=function(){return{dvs:t.create()}};
n._createShaderProgram=function(c){this._program||(this._program=c.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos \x3d u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position \x3d vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor \x3d vec4(0.75, 0.0, 0.0, 0.75);\n      }",v().attributes))};n._updateMatricesAndLocalOrigin=
function(c){var {state:a}=c;const {displayMat3:h,size:k,resolution:d,pixelRatio:e,rotation:b,viewpoint:f}=a;c=F*b;const {x:g,y:G}=f.targetGeometry;a=B.normalizeMapX(g,a.spatialReference);this._localOrigin.x=a;this._localOrigin.y=G;a=e*k[0];const r=e*k[1],H=d*a,I=d*r,l=p.identity(this._dvsMat3);p.multiply(l,l,h);p.translate(l,l,z.fromValues(a/2,r/2));p.scale(l,l,A.fromValues(k[0]/H,-r/I,1));p.rotate(l,l,-c)};n._updateBufferData=function(c,a){const {x:h,y:k}=this._localOrigin,d=new Float32Array(8*a.length),
e=new Uint32Array(8*a.length);let b=0,f=0;for(const g of a)g&&(d[2*b]=g[0]-h,d[2*b+1]=g[1]-k,d[2*b+2]=g[0]-h,d[2*b+3]=g[3]-k,d[2*b+4]=g[2]-h,d[2*b+5]=g[3]-k,d[2*b+6]=g[2]-h,d[2*b+7]=g[1]-k,e[f+0]=b+0,e[f+1]=b+3,e[f+2]=b+3,e[f+3]=b+2,e[f+4]=b+2,e[f+5]=b+1,e[f+6]=b+1,e[f+7]=b+0,b+=4,f+=8);this._vertexBuffer?this._vertexBuffer.setData(d.buffer):this._vertexBuffer=u.BufferObject.createVertex(c,m.Usage.DYNAMIC_DRAW,d.buffer);this._indexBuffer?this._indexBuffer.setData(e):this._indexBuffer=u.BufferObject.createIndex(c,
m.Usage.DYNAMIC_DRAW,e);this._vao||(a=v(),this._vao=new E.VertexArrayObject(c,a.attributes,a.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer))};return q}(C.DisplayObject)});