// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../enums ../Utils ./WGLGeometryBrush ../materialKey/MaterialKey ../../../../webgl/enums".split(" "),function(x,n,y,z,A,B,a){return function(p){function l(){return p.apply(this,arguments)||this}x._inheritsLoose(l,p);var k=l.prototype;k.dispose=function(){};k.getGeometryType=function(){return y.WGLGeometryType.LINE};k.supportsSymbology=function(d){return!0};k.drawGeometry=function(d,e,c,b){const {context:f,painter:q,rendererInfo:r,
displayLevel:C,passOptions:t,requestRender:u,allowDelayedRender:D}=d,g=B.LineMaterialKey.load(c.materialKey),m=n.isSome(t)&&"hittest"===t.type;var h=z.createProgramDescriptor(g.data,{geometry:[{location:0,name:"a_pos",count:2,type:a.DataType.SHORT},{location:1,name:"a_id",count:4,type:a.DataType.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:a.DataType.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:a.DataType.BYTE},{location:4,name:"a_accumulatedDistanceAndHalfWidth",
count:2,type:a.DataType.UNSIGNED_SHORT},{location:5,name:"a_tlbr",count:4,type:a.DataType.UNSIGNED_SHORT},{location:6,name:"a_segmentDirection",count:4,type:a.DataType.BYTE},{location:7,name:"a_aux",count:2,type:a.DataType.UNSIGNED_SHORT},{location:8,name:"a_zoomRange",count:2,type:a.DataType.UNSIGNED_SHORT}]});let v=a.PrimitiveType.TRIANGLES;m&&(h=this._getTriangleDesc(c.materialKey,h),v=a.PrimitiveType.POINTS);const {attributes:w,bufferLayouts:E}=h;b=q.materialManager.getMaterialProgram(d,g,"materials/line",
w,b);D&&n.isSome(u)&&!b.compiled?u():(h=1/d.pixelRatio,f.useProgram(b),this._setSharedUniforms(b,d,e),g.textureBinding&&q.textureManager.bindTextures(f,b,g),b.setUniform1f("u_zoomFactor",2**(C-e.key.level)),b.setUniform1f("u_blur",0+h),b.setUniform1f("u_antialiasing",h),this._setSizeVVUniforms(g,b,r,e),this._setColorAndOpacityVVUniforms(g,b,r),f.setFaceCullingEnabled(!1),d=c.target.getVAO(f,E,w,m),e=c.indexCount,c=c.indexFrom*Uint32Array.BYTES_PER_ELEMENT,m&&(e/=3,c/=3),f.bindVAO(d),f.drawElements(v,
e,a.DataType.UNSIGNED_INT,c))};return l}(A)});