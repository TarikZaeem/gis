// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../geometry/Point ../../geometry/projection ../../layers/support/rasterFunctions/rasterProjectionHelper ../2d/engine/Bitmap ../2d/engine/webgl/VertexStream ../2d/engine/webgl/shaders/MaterialPrograms ../webgl/enums ../webgl/FramebufferObject ../webgl/rasterUtils ../webgl/RenderingContext ../webgl/Texture".split(" "),function(p,z,A,q,B,r,t,C,D,d,E,F,G,u){let y=function(){function h(a){this._ownsRctx=!1;if(a)this._ownsRctx=!1,this._rctx=
a;else{if(h._instance)return h._instanceRefCount++,h._instance;h._instanceRefCount=1;h._instance=this;this._ownsRctx=!0;a=document.createElement("canvas").getContext("webgl");a.getExtension("OES_texture_float");this._rctx=new G.RenderingContext(a,{})}a=D.createProgramTemplate("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(a.shaders.vertexShader,a.shaders.fragmentShader,a.attributes);this._rctx.useProgram(this._program);
this._program.setUniform1f("u_opacity",1);this._program.setUniform1i("u_image",0);this._program.setUniform1i("u_flipY",0);this._program.setUniform1i("u_transformGrid",1);this._quad=new C(this._rctx,[0,0,1,0,0,1,1,1])}var l=h.prototype;l.reprojectTexture=function(a,b,c=!1){const e=B.project(a.extent,b);var f=new q({x:(a.extent.xmax-a.extent.xmin)/a.texture.descriptor.width,y:(a.extent.ymax-a.extent.ymin)/a.texture.descriptor.height,spatialReference:a.extent.spatialReference});const {x:m,y:H}=r.projectResolution(f,
b,a.extent);var g=(m+H)/2;b=Math.round((e.xmax-e.xmin)/g);f=Math.round((e.ymax-e.ymin)/g);g=(e.width/b+e.height/f)/2;g=new q({x:g,y:g,spatialReference:e.spatialReference});const n=r.getProjectionOffsetGrid({projectedExtent:e,srcBufferExtent:a.extent,pixelSize:g,hasWrapAround:!0,spacing:[16,16]}),v=F.createTransformTexture(this._rctx,n);g=new u.Texture(this._rctx,{width:b,height:f,pixelFormat:d.PixelFormat.RGBA,dataType:d.PixelType.UNSIGNED_BYTE,wrapMode:d.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:d.TextureSamplingMode.LINEAR,
hasMipmap:!1});const k=new E.FramebufferObject(this._rctx,{colorTarget:d.TargetType.TEXTURE,depthStencilTarget:d.DepthStencilTargetType.NONE,width:b,height:f},g);this._rctx.bindFramebuffer(k);this._rctx.setViewport(0,0,b,f);this._rctx.useProgram(this._program);this._rctx.bindTexture(a.texture,0);this._rctx.bindTexture(v,1);this._quad.bind();const {width:I=0,height:J=0}=a.texture.descriptor;this._program.setUniform2f("u_srcImageSize",I,J);this._program.setUniform2fv("u_transformSpacing",n.spacing);
this._program.setUniform2fv("u_transformGridSize",n.size);this._program.setUniform2f("u_targetImageSize",b,f);this._quad.draw();this._quad.unbind();this._rctx.useProgram(null);this._rctx.bindFramebuffer(null);v.dispose();if(c){const {width:w=0,height:x=0}=k.descriptor;a=new ImageData(w,x);k.readPixels(0,0,w,x,d.PixelFormat.RGBA,d.PixelType.UNSIGNED_BYTE,a.data);k.detachColorTexture(d.ColorAttachment.COLOR_ATTACHMENT0);k.dispose();return{texture:g,extent:e,imageData:a}}k.detachColorTexture(d.ColorAttachment.COLOR_ATTACHMENT0);
k.dispose();return{texture:g,extent:e}};l.reprojectBitmapData=function(a,b){var c=t.isImageSource(a.bitmapData)?t.rasterize(a.bitmapData):a.bitmapData;c=new u.Texture(this._rctx,{width:a.bitmapData.width,height:a.bitmapData.height,pixelFormat:d.PixelFormat.RGBA,dataType:d.PixelType.UNSIGNED_BYTE,wrapMode:d.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:d.TextureSamplingMode.LINEAR,hasMipmap:!1},c);a=this.reprojectTexture({texture:c,extent:a.extent},b,!0);a.texture.dispose();b=document.createElement("canvas");
c=a.imageData;b.width=c.width;b.height=c.height;b.getContext("2d").putImageData(c,0,0);return{bitmapData:b,extent:a.extent}};l.loadAndReprojectBitmapData=function(){var a=z._asyncToGenerator(function*(b,c,e){b=(yield A(b,{responseType:"image"})).data;const f=document.createElement("canvas");f.width=b.width;f.height=b.height;const m=f.getContext("2d");m.drawImage(b,0,0);b=m.getImageData(0,0,f.width,f.height);if(c.spatialReference.equals(e))return{bitmapData:b,extent:c};c=this.reprojectBitmapData({bitmapData:b,
extent:c},e);return{bitmapData:c.bitmapData,extent:c.extent}});return function(b,c,e){return a.apply(this,arguments)}}();l.destroy=function(){this._ownsRctx?(h._instanceRefCount--,0===h._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),h._instance=null)):(this._quad.dispose(),this._program.dispose())};return h}();y._instanceRefCount=0;p.ImageReprojector=y;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});