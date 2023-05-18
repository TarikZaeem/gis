// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/time ../../../../chunks/vec2 ./glUtil3D ./SSAOBlurTechnique ./SSAONoiseData ./SSAOTechnique ../../../../chunks/SSAO.glsl ../shaders/SSAOParameters ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/Texture ../../../webgl/Util".split(" "),function(n,w,a,x,t,y,z,A,B,C,u,c,p,D,E){let F=function(){function q(b,f,d,g){this._view=b;this._techniqueRepository=f;this._rctx=d;this._requestRender=
g;this._quadVAO=null;this._passParameters=new u.SSAOPassParameters;this._drawParameters=new u.BlurDrawParameters}var l=q.prototype;l.dispose=function(){this.enabled=!1;this._quadVAO=a.disposeMaybe(this._quadVAO)};l.disposeOffscreenBuffers=function(){a.applySome(this._ssaoFBO,b=>b.resize(0,0));a.applySome(this._blur0FBO,b=>b.resize(0,0));a.applySome(this._blur1FBO,b=>b.resize(0,0))};l.render=function(b,f,d,g){if(!(a.isNone(this._enableTime)||a.isNone(d)||a.isNone(g)||a.isNone(this._ssaoFBO)||a.isNone(this._blur0FBO)||
a.isNone(this._blur1FBO)))if(this.active){0===this._enableTime&&(this._enableTime=f);var e=this._rctx,h=b.camera,k=this._view.qualitySettings.fadeDuration;f=0<k?Math.min(k,f-this._enableTime)/k:1;this._passParameters.normalTexture=g;this._passParameters.depthTexture=d;this._passParameters.projScale=1/h.computeRenderPixelSizeAtDist(1);this._passParameters.intensity=2/C.getRadius(h)**6*f;d=h.fullViewport;g=d[2];h=d[3];k=g/2;var m=h/2;this._ssaoFBO.resize(g,h);this._blur0FBO.resize(k,m);this._blur1FBO.resize(k,
m);a.isNone(this._quadVAO)&&(this._quadVAO=y.createQuadVAO(this._rctx));e.bindFramebuffer(this._ssaoFBO);e.setViewport(0,0,g,h);e.bindTechnique(this._ssaoTechnique,this._passParameters,b).bindDraw(this._drawParameters,b,this._passParameters);e.bindVAO(this._quadVAO);var r=E.vertexCount(this._quadVAO,"geometry");e.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,r);var v=e.bindTechnique(this._blurTechnique,this._passParameters,b);e.setViewport(0,0,k,m);e.bindFramebuffer(this._blur0FBO);this._drawParameters.colorTexture=
this._ssaoFBO.colorTexture;t.set(this._drawParameters.blurSize,0,2/h);v.bindDraw(this._drawParameters,b,this._passParameters);e.setViewport(0,0,k,m);e.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,r);e.bindFramebuffer(this._blur1FBO);this._drawParameters.colorTexture=this._blur0FBO.colorTexture;t.set(this._drawParameters.blurSize,2/g,0);v.bindDraw(this._drawParameters,b,this._passParameters);e.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,r);e.setViewport(d[0],d[1],d[2],d[3]);1>f&&this._requestRender()}else this._enableTime=
f,this._requestRender()};l._enable=function(){if(!a.isSome(this._enableTime)){var b={target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,samplingMode:c.TextureSamplingMode.LINEAR,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,width:0,height:0},f={colorTarget:c.TargetType.TEXTURE,depthStencilTarget:c.DepthStencilTargetType.NONE};this._ssaoFBO=new p.FramebufferObject(this._rctx,f,b);this._blur0FBO=new p.FramebufferObject(this._rctx,f,b);this._blur1FBO=new p.FramebufferObject(this._rctx,
f,b);b=Uint8Array.from(atob(A.noiseData),d=>d.charCodeAt(0));this._passParameters.noiseTexture=new D.Texture(this._rctx,{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGB,dataType:c.PixelType.UNSIGNED_BYTE,hasMipmap:!0,width:32,height:32},b);a.isNone(this._ssaoTechnique)&&(this._ssaoTechnique=this._techniqueRepository.acquire(B.SSAOTechnique));a.isNone(this._blurTechnique)&&(this._blurTechnique=this._techniqueRepository.acquire(z.SSAOBlurTechnique));this._enableTime=x.Milliseconds(0);
this._requestRender()}};l._disable=function(){this._enableTime=null;this._passParameters.noiseTexture=a.disposeMaybe(this._passParameters.noiseTexture);this._blur1FBO=a.disposeMaybe(this._blur1FBO);this._blur0FBO=a.disposeMaybe(this._blur0FBO);this._ssaoFBO=a.disposeMaybe(this._ssaoFBO)};w._createClass(q,[{key:"enabled",get:function(){return a.isSome(this._enableTime)},set:function(b){b?this._enable():this._disable()}},{key:"active",get:function(){return this.enabled&&this._ssaoTechnique.compiled&&
this._blurTechnique.compiled}},{key:"colorTexture",get:function(){return a.isSome(this._blur1FBO)?this._blur1FBO.colorTexture:null}},{key:"gpuMemoryUsage",get:function(){return(a.isSome(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+(a.isSome(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+(a.isSome(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}},{key:"test",get:function(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}]);return q}();n.SSAOHelper=F;n.blurSizePixels=2;Object.defineProperty(n,
Symbol.toStringTag,{value:"Module"})});