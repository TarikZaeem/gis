// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/maybe","../../VertexStream","../../../../../webgl/enums","../../../../../webgl/FramebufferObject"],function(u,q,w,c,l){const x=[1,0],y=[0,1],z=[1,.8,.6,.4,.2],A=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];let F=function(){function v(){this._compositeFBO=this._intensityFBO=null;this._mipsFBOs=Array(5);this._nMips=5;this._kernelSizeArray=[3,5,7,9,11];this._size=[0,0];this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",
attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}var r=v.prototype;r.dispose=function(){this._quad=q.disposeMaybe(this._quad);this._intensityFBO=q.disposeMaybe(this._intensityFBO);
this._compositeFBO=q.disposeMaybe(this._compositeFBO);if(this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose());this._mipsFBOs=null}};r.draw=function(e,f,a){const {width:d,height:t}=f,{context:b,painter:B}=e,{materialManager:m}=B;var h=b.gl;const n=this._programDesc,{strength:C,radius:D,threshold:E}=a;this._quad||(this._quad=new w(b,[-1,-1,1,-1,-1,1,1,1]));this._createOrResizeResources(e,d,t);b.setStencilTestEnabled(!1);
b.setBlendingEnabled(!0);b.setBlendFunction(c.BlendFactor.ONE,c.BlendFactor.ONE_MINUS_SRC_ALPHA);b.setStencilWriteMask(0);e=this._quad;e.bind();b.bindFramebuffer(this._intensityFBO);a=m.getProgram(n.luminosityHighPass);b.useProgram(a);b.bindTexture(f.colorTexture,0);a.setUniform1i("u_texture",0);a.setUniform3fv("u_defaultColor",[0,0,0]);a.setUniform1f("u_defaultOpacity",0);a.setUniform1f("u_luminosityThreshold",E);a.setUniform1f("u_smoothWidth",.01);a=[Math.round(d/2),Math.round(t/2)];b.setViewport(0,
0,a[0],a[1]);b.setClearColor(0,0,0,0);b.clear(h.COLOR_BUFFER_BIT);e.draw();b.setBlendingEnabled(!1);h=this._intensityFBO.colorTexture;for(let g=0;g<this._nMips;g++){const k=m.getProgram(n.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[g]}]);b.useProgram(k);b.bindTexture(h,g+1);k.setUniform1i("u_colorTexture",g+1);k.setUniform2fv("u_texSize",a);k.setUniform2fv("u_direction",x);b.setViewport(0,0,a[0],a[1]);const p=this._mipsFBOs[g];b.bindFramebuffer(p.horizontal);e.draw();h=p.horizontal.colorTexture;
b.bindFramebuffer(p.vertical);b.bindTexture(h,g+1);k.setUniform2fv("u_direction",y);e.draw();h=p.vertical.colorTexture;a[0]=Math.round(a[0]/2);a[1]=Math.round(a[1]/2)}b.setViewport(0,0,d,t);a=m.getProgram(n.composite,[{name:"nummips",value:5}]);b.bindFramebuffer(this._compositeFBO);b.useProgram(a);a.setUniform1f("u_bloomStrength",C);a.setUniform1f("u_bloomRadius",D);a.setUniform1fv("u_bloomFactors",z);a.setUniform3fv("u_bloomTintColors",A);b.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1);
a.setUniform1i("u_blurTexture1",1);b.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2);a.setUniform1i("u_blurTexture2",2);b.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3);a.setUniform1i("u_blurTexture3",3);b.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4);a.setUniform1i("u_blurTexture4",4);b.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5);a.setUniform1i("u_blurTexture5",5);e.draw();b.bindFramebuffer(f);b.setBlendingEnabled(!0);f=m.getProgram(n.blit);b.useProgram(f);b.bindTexture(this._compositeFBO.colorTexture,
6);f.setUniform1i("u_texture",6);b.setBlendFunction(c.BlendFactor.ONE,c.BlendFactor.ONE);e.draw();e.unbind();b.setBlendFunction(c.BlendFactor.ONE,c.BlendFactor.ONE_MINUS_SRC_ALPHA);b.setStencilTestEnabled(!0)};r._createOrResizeResources=function(e,f,a){({context:e}=e);if(!this._compositeFBO||this._size[0]!==f||this._size[1]!==a){this._size[0]=f;this._size[1]=a;var d=[Math.round(f/2),Math.round(a/2)];this._compositeFBO?this._compositeFBO.resize(f,a):this._compositeFBO=new l.FramebufferObject(e,{colorTarget:c.TargetType.TEXTURE,
depthStencilTarget:c.DepthStencilTargetType.NONE,width:f,height:a});this._intensityFBO?this._intensityFBO.resize(d[0],d[1]):this._intensityFBO=new l.FramebufferObject(e,{colorTarget:c.TargetType.TEXTURE,depthStencilTarget:c.DepthStencilTargetType.NONE,width:d[0],height:d[1]},{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,internalFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:c.TextureSamplingMode.LINEAR,flipped:!1,
width:d[0],height:d[1]});for(f=0;f<this._nMips;f++)this._mipsFBOs[f]?(this._mipsFBOs[f].horizontal.resize(d[0],d[1]),this._mipsFBOs[f].vertical.resize(d[0],d[1])):this._mipsFBOs[f]={horizontal:new l.FramebufferObject(e,{colorTarget:c.TargetType.TEXTURE,depthStencilTarget:c.DepthStencilTargetType.NONE,width:d[0],height:d[1]},{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,internalFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:c.TextureSamplingMode.LINEAR,
flipped:!1,width:d[0],height:d[1]}),vertical:new l.FramebufferObject(e,{colorTarget:c.TargetType.TEXTURE,depthStencilTarget:c.DepthStencilTargetType.NONE,width:d[0],height:d[1]},{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,internalFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:c.TextureSamplingMode.LINEAR,flipped:!1,width:d[0],height:d[1]})},d[0]=Math.round(d[0]/2),d[1]=Math.round(d[1]/2)}};return v}();u.Bloom=
F;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});