// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/Error ../../../../../core/Logger ../../../../../core/maybe ../enums ../VertexStream ../shaders/BlendPrograms ../../../../webgl/enums ../../../../webgl/Texture".split(" "),function(r,t,n,p,y,z,u,e,A){const v=n.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");n=function(){function w(){this._size=[0,0]}var k=w.prototype;k.dispose=function(a){this._backBufferTexture=p.disposeMaybe(this._backBufferTexture);this._quad=p.disposeMaybe(this._quad)};
k.draw=function(a,c,f,h,l){const {context:b,drawPhase:q}=a;this._setupShader(b);h&&"normal"!==h&&q!==y.WGLDrawPhase.LABEL?this._drawBlended(a,c,f,h,l):(a=u.createProgramTemplate("normal"),(a=b.programCache.acquire(a.shaders.vertexShader,a.shaders.fragmentShader,a.attributes))?(b.useProgram(a),c.setSamplingMode(f),b.bindTexture(c,0),a.setUniform1i("u_layerTexture",0),a.setUniform1f("u_opacity",l),b.setBlendingEnabled(!0),b.setBlendFunction(e.BlendFactor.ONE,e.BlendFactor.ONE_MINUS_SRC_ALPHA),c=this._quad,
c.draw(),c.unbind(),a.dispose()):v.error(new t("mapview-BlendEffect",'Error creating shader program for blend mode "normal"')))};k._drawBlended=function(a,c,f,h,l){const {context:b,state:q,pixelRatio:x,inFadeTransition:B}=a;var {size:g}=q,d=b.getBoundFramebufferObject();let m;p.isSome(d)?(g=d.descriptor,m=g.width,g=g.height):(m=Math.round(x*g[0]),g=Math.round(x*g[1]));this._createOrResizeTexture(a,m,g);a=this._backBufferTexture;d.copyToTexture(0,0,m,g,0,0,a);b.setStencilTestEnabled(!1);b.setStencilWriteMask(0);
b.setBlendingEnabled(!0);b.setDepthTestEnabled(!1);b.setDepthWriteEnabled(!1);d=u.createProgramTemplate(h);(d=b.programCache.acquire(d.shaders.vertexShader,d.shaders.fragmentShader,d.attributes))?(b.useProgram(d),a.setSamplingMode(f),b.bindTexture(a,0),d.setUniform1i("u_backbufferTexture",0),c.setSamplingMode(f),b.bindTexture(c,1),d.setUniform1i("u_layerTexture",1),d.setUniform1f("u_opacity",l),d.setUniform1f("u_inFadeOpacity",B?1:0),b.setBlendFunction(e.BlendFactor.ONE,e.BlendFactor.ZERO),c=this._quad,
c.draw(),c.unbind(),d.dispose(),b.setBlendFunction(e.BlendFactor.ONE,e.BlendFactor.ONE_MINUS_SRC_ALPHA)):v.error(new t("mapview-BlendEffect",`Error creating shader program for blend mode ${h}`))};k._setupShader=function(a){this._quad||(this._quad=new z(a,[-1,-1,1,-1,-1,1,1,1]))};k._createOrResizeTexture=function(a,c,f){({context:a}=a);if(null===this._backBufferTexture||c!==this._size[0]||f!==this._size[1])this._backBufferTexture?this._backBufferTexture.resize(c,f):this._backBufferTexture=new A.Texture(a,
{target:e.TextureType.TEXTURE_2D,pixelFormat:e.PixelFormat.RGBA,internalFormat:e.PixelFormat.RGBA,dataType:e.PixelType.UNSIGNED_BYTE,wrapMode:e.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:e.TextureSamplingMode.LINEAR,flipped:!1,width:c,height:f}),this._size[0]=c,this._size[1]=f};return w}();r.BlendEffect=n;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});