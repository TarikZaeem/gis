// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../webgl-engine/lib/basicInterfaces"],function(d,n,p){function h(){h=n._asyncToGenerator(function*(a){return new Promise((e,f)=>{const k=new Blob([a]),c=new FileReader;c.onload=()=>{e(JSON.parse(c.result))};c.onerror=g=>{f(g)};c.readAsText(k)})});return h.apply(this,arguments)}function l(){l=n._asyncToGenerator(function*(a,e){return e===p.TextureEncodingMimeType.KTX2_ENCODING?new q(a):new Promise((f,k)=>{const c=new Blob([a],{type:e}),
g=URL.createObjectURL(c),b=new Image,r=()=>{URL.revokeObjectURL(g);"decode"in b?b.decode().then(()=>f(b),()=>f(b)).then(m):(f(b),m())},t=u=>{URL.revokeObjectURL(g);k(u);m()},m=()=>{b.removeEventListener("load",r);b.removeEventListener("error",t)};b.addEventListener("load",r);b.addEventListener("error",t);b.src=g})});return l.apply(this,arguments)}let q=function(a){this.data=a;this.type="encoded-mesh-texture";this.encoding=p.TextureEncodingMimeType.KTX2_ENCODING};d.EncodedMeshTexture=q;d.imageFromBinaryData=
function(a,e){return l.apply(this,arguments)};d.isEncodedMeshTexture=function(a){return"encoded-mesh-texture"===a?.type};d.jsonFromBinaryData=function(a){return h.apply(this,arguments)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});