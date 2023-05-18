// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ./Effect ../../../../webgl/enums".split(" "),function(u,p,B,C,q,v){q=function(w){function r(){var a=w.apply(this,arguments)||this;a.name=a.constructor.name;a.defines=["id"];a._lastSize=0;a._boundFBO=null;return a}p._inheritsLoose(r,w);var g=r.prototype;g.dispose=function(){B.isSome(this._fbo)&&this._fbo.dispose()};g.bind=function({context:a,painter:d}){const {width:h,height:e}=a.getViewport();
this._boundFBO=a.getBoundFramebufferObject();d=d.getFbos(h,e).effect0;a.bindFramebuffer(d);a.setColorMask(!0,!0,!0,!0);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT)};g.unbind=function({context:a}){a.bindFramebuffer(this._boundFBO);this._boundFBO=null};g.draw=function(a,d,h=2*C.HITTEST_RADIUS){this._resolve(a,d,h)};g._resolve=function(){var a=p._asyncToGenerator(function*({context:d,state:h,pixelRatio:e},x,D){var t=this;const E=d.getBoundFramebufferObject(),F=h.size[1]*e,b=Math.round(D*e),
y=b/2,z=b/2;this._ensureBuffer(b);x.forEach(function(){var G=p._asyncToGenerator(function*(A,l){var k=new Map;yield E.readPixelsAsync(Math.floor(l.x*e-b/2),Math.floor(F-l.y*e-b/2),b,b,v.PixelFormat.RGBA,v.PixelType.UNSIGNED_BYTE,t._buf);for(let c=0;c<t._buf32.length;c++){const f=t._buf32[c];if(4294967295!==f&&0!==f){var m=c%b,n=b-Math.floor(c/b);m=(y-m)*(y-m)+(z-n)*(z-n);n=k.has(f)?k.get(f):4294967295;k.set(f,Math.min(m,n))}}k=Array.from(k).sort((c,f)=>c[1]-f[1]).map(c=>c[0]);A.resolve(k);x.delete(l)});
return function(A,l){return G.apply(this,arguments)}}())});return function(d,h,e){return a.apply(this,arguments)}}();g._ensureBuffer=function(a){this._lastSize!==a&&(this._lastSize=a,this._buf=new Uint8Array(4*a*a),this._buf32=new Uint32Array(this._buf.buffer))};return r}(q.Effect);u.HittestEffectVTL=q;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});