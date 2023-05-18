// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/maybe ../PixelBlock ./ImageCanvasDecoder ./JpgPlus ./Lerc ./Lzw ./pixelRangeUtils ../../../chunks/Zlib ./Raw ./TiffDecoder ./utils".split(" "),function(B,A,y,H,w,N,O,I,P,Q,J,R,K,S){function T(a,c){return C.apply(this,arguments)}function C(){C=A._asyncToGenerator(function*(a,c){if(!S.isPlatformLittleEndian)throw new y("rasterCoded:decode","lerc decoder is not supported on big endian platform");yield I.load();
const {offset:m}=c,{width:l,height:r,pixelType:b,statistics:f,depthCount:e,noDataValues:d,bandMasks:g,pixels:h,mask:k}=I.decode(a,{inputOffset:m,returnInterleaved:c.returnInterleaved});return new w({width:l,height:r,pixelType:b.toLowerCase(),pixels:h,mask:k,statistics:f,bandMasks:g,depthCount:e,noDataValues:d})});return C.apply(this,arguments)}function U(a,c){return D.apply(this,arguments)}function D(){D=A._asyncToGenerator(function*(a,c){a=yield K.decode(a,{...c,noDataValue:null});H.assertIsSome(a);
a=new w({width:a.width,height:a.height,pixels:a.pixels,pixelType:a.pixelType.toLowerCase(),mask:a.mask,statistics:null});a.updateStatistics();return a});return D.apply(this,arguments)}function V(a,c){return E.apply(this,arguments)}function E(){E=A._asyncToGenerator(function*(a,c){a=yield K.decodeTileOrStrip(a,c.customOptions);a=new w({width:a.width,height:a.height,pixels:a.pixels,pixelType:a.pixelType.toLowerCase(),mask:a.mask,statistics:null});a.updateStatistics();return a});return E.apply(this,
arguments)}function L(a,c){const m=c.pixelType||"u8",l=w.getPixelArrayConstructor(m),r="u8"===m?a:new l(a.buffer),b=[],f=c.planes||1;if(1===f)b.push(r);else for(let e=0;e<f;e++){const d=(c.width||1)*(c.height||a.length),g=new l(d);for(let h=0;h<d;h++)g[h]=r[h*f+e];b.push(g)}a=new w({width:c.width||1,height:c.height||a.length,pixels:b,pixelType:m,statistics:null});a.updateStatistics();return a}function W(a,c){a=(new J.Zlib(new Uint8Array(a))).getBytes();return L(a,c)}function X(a,c){a=P.decode(a,c.offset,
c.eof,!c.isInputBigEndian);return L(a,c)}function Y(a,c){a=O.decode(a,c.hasNoZlibMask??void 0);a=new w({width:a.width,height:a.height,pixels:a.pixels,pixelType:"U8",mask:a.mask,statistics:null});a.updateStatistics();return a}function Z(a,c){a=new Uint8Array(a);a=new aa(a);const {width:m,height:l}=c;c=m*l;a=a.decode();let r=0;var b=0;let f;b=new Uint8Array(c);for(r=0;r<c;r++)b[r]=a[4*r+3];const e=new w({width:m,height:l,pixels:[],pixelType:"U8",mask:b,statistics:[]});for(r=0;3>r;r++){f=new Uint8Array(c);
for(b=0;b<c;b++)f[b]=a[4*b+r];e.addData({pixels:f})}e.updateStatistics();return e}function ba(a,c,m,l){return F.apply(this,arguments)}function F(){F=A._asyncToGenerator(function*(a,c,m,l){a=yield(new N).decode(a,{applyJpegMask:!1,format:c,...m},l);a=new w(a);a.updateStatistics();return a});return F.apply(this,arguments)}function M(a){if(null==a)throw new y("rasterCodec:decode","parameter encodeddata is required.");a=new Uint8Array(a,0,10);let c="";255===a[0]&&216===a[1]?c="jpg":137===a[0]&&80===a[1]&&
78===a[2]&&71===a[3]?c="png":67===a[0]&&110===a[1]&&116===a[2]&&90===a[3]&&73===a[4]&&109===a[5]&&97===a[6]&&103===a[7]&&101===a[8]&&32===a[9]?c="lerc":76===a[0]&&101===a[1]&&114===a[2]&&99===a[3]&&50===a[4]&&32===a[5]?c="lerc2":73===a[0]&&73===a[1]&&42===a[2]&&0===a[3]||77===a[0]&&77===a[1]&&0===a[2]&&42===a[3]||73===a[0]&&73===a[1]&&43===a[2]&&0===a[3]||77===a[0]&&77===a[1]&&0===a[2]&&43===a[3]?c="tiff":71===a[0]&&73===a[1]&&70===a[2]?c="gif":66===a[0]&&77===a[1]?c="bmp":String.fromCharCode.apply(null,
a).toLowerCase().includes("error")&&(c="error");return c}function ca(a){let c=null;switch(a){case "lerc":case "lerc2":c=T;break;case "jpg":c=Y;break;case "png":c=Z;break;case "bsq":case "bip":c=(m,l)=>{var r=l.pixelType,b=null;let f=null;switch(r?r.toLowerCase():"f32"){case "u1":case "u2":case "u4":case "u8":f=255;b=Uint8Array;break;case "u16":f=f||65535;b=Uint16Array;break;case "u32":f=f||2**32-1;b=Uint32Array;break;case "s8":f=f||-128;b=Int8Array;break;case "s16":f=f||-32768;b=Int16Array;break;
case "s32":f=f||-(2**31);b=Int32Array;break;default:b=Float32Array}({pixelTypeCtor:r}={pixelTypeCtor:b,noDataValue:f});b=R.decode;m=b(m,{width:l.width,height:l.height,pixelType:r,format:a});l=new w({width:l.width,height:l.height,pixels:m.pixels,pixelType:l.pixelType,mask:m.mask,statistics:null});l.updateStatistics();return l};break;case "tiff":c=U;break;case "deflate":c=W;break;case "lzw":c=X;break;case "error":c=()=>{throw new y("rasterCodec:decode","input data contains error");};break;default:c=
()=>{throw new y("rasterCodec:decode","unsupported raster format");}}return c}function da(a,c=1){if(a){var {pixels:m,width:l,height:r,mask:b}=a;if(m&&0!==m.length){var f=m.length,e=l-1,d=r-1,g=[],h,k,t=null,p=w.getPixelArrayConstructor(a.pixelType);if(0===c){for(c=0;c<f;c++){var n=m[c];var u=new p(e*d);for(h=0;h<d;h++){var q=h*l;for(k=0;k<e;k++)u[h*e+k]=n[q+k]}g.push(u)}if(H.isSome(b))for(t=new Uint8Array(e*d),h=0;h<d;h++)for(q=h*l,k=0;k<e;k++)t[h*e+k]=b[q+k]}else{for(c=0;c<f;c++){n=m[c];u=new p(e*
d);for(h=0;h<d;h++)for(q=h*l,k=0;k<e;k++)u[h*e+k]=(n[q+k]+n[q+k+1]+n[q+l+k]+n[q+l+k+1])/4;g.push(u)}if(b)for(t=new Uint8Array(e*d),h=0;h<d;h++)for(q=h*l,k=0;k<e;k++)t[h*e+k]=Math.min.apply(null,[b[q+k],b[q+k+1],b[q+l+k],b[q+l+k+1]])}a.width=e;a.height=d;a.mask=t;a.pixels=g}}}function G(){G=A._asyncToGenerator(function*(a,c={},m){if(null==a)throw new y("rasterCodec:decode","missing encodeddata parameter.");let l=c.format&&c.format.toLowerCase();if(!("bsq"!==l&&"bip"!==l||null!=c.width&&null!=c.height))throw new y("rasterCodec:decode",
"requires width and height in options parameter.");if("tiff"===l&&c.customOptions)return V(a,c);if(!l||"bsq"!==l&&"bip"!==l&&"deflate"!==l&&"lzw"!==l)l=M(a);if(c.useCanvas&&ea.has(l))return ba(a,l,c,m);m=ca(l);c.isPoint&&(c={...c},null!=c.width&&c.width++,null!=c.height&&c.height++);a=yield m(a,c);if(!a)return a;"jpg"!==l&&null!=c.noDataValue&&1===a.depthCount&&Q.convertNoDataToMask(a,c.noDataValue,{customFloatTolerance:c.tolerance});c.isPoint&&da(a);return a});return G.apply(this,arguments)}var aa=
function(a){function c(b){var f,e;this.data=b;this.pos=8;this.palette=[];this.imgData=[];this.transparency={};this.animation=null;this.text={};for(e=null;;){var d=this.readUInt32();var g=b=void 0;b=[];for(g=0;4>g;++g)b.push(String.fromCharCode(this.data[this.pos++]));b=b.join("");switch(b){case "IHDR":this.width=this.readUInt32();this.height=this.readUInt32();this.bits=this.data[this.pos++];this.colorType=this.data[this.pos++];this.compressionMethod=this.data[this.pos++];this.filterMethod=this.data[this.pos++];
this.interlaceMethod=this.data[this.pos++];break;case "acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||Infinity,frames:[]};break;case "PLTE":this.palette=this.read(d);break;case "fcTL":e&&this.animation.frames.push(e);this.pos+=4;e={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()};b=this.readUInt16();d=this.readUInt16()||100;e.delay=1E3*b/d;e.disposeOp=this.data[this.pos++];e.blendOp=this.data[this.pos++];e.data=[];
break;case "IDAT":case "fdAT":"fdAT"===b&&(this.pos+=4,d-=4);b=(null!=e?e.data:void 0)||this.imgData;for(g=0;0<=d?g<d:g>d;0<=d?++g:--g)b.push(this.data[this.pos++]);break;case "tRNS":this.transparency={};switch(this.colorType){case 3:this.transparency.indexed=this.read(d);d=255-this.transparency.indexed.length;if(0<d)for(b=0;0<=d?b<d:b>d;0<=d?++b:--b)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(d)[0];break;case 2:this.transparency.rgb=this.read(d)}break;case "tEXt":g=
this.read(d);d=g.indexOf(0);b=String.fromCharCode.apply(String,g.slice(0,d));this.text[b]=String.fromCharCode.apply(String,g.slice(d+1));break;case "IEND":e&&this.animation.frames.push(e);a:{switch(this.colorType){case 0:case 3:case 4:e=1;break a;case 2:case 6:e=3;break a}e=void 0}this.colors=e;this.hasAlphaChannel=4===(f=this.colorType)||6===f;f=this.colors+(this.hasAlphaChannel?1:0);this.pixelBitlength=this.bits*f;a:{switch(this.colors){case 1:f="DeviceGray";break a;case 3:f="DeviceRGB";break a}f=
void 0}this.colorSpace=f;this.imgData=new Uint8Array(this.imgData);return;default:this.pos+=d}this.pos+=4;if(this.pos>this.data.length)throw Error("Incomplete or corrupt PNG file");}}var m;c.load=function(b,f,e){"function"===typeof f&&(e=f);var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=function(){var g=new Uint8Array(d.response||d.mozResponseArrayBuffer);g=new c(g);"function"===typeof(null!=f?f.getContext:void 0)&&g.render(f);return"function"===typeof e?e(g):void 0};
return d.send(null)};c.prototype.read=function(b){var f;var e=[];for(f=0;0<=b?f<b:f>b;0<=b?++f:--f)e.push(this.data[this.pos++]);return e};c.prototype.readUInt32=function(){var b=this.data[this.pos++]<<24;var f=this.data[this.pos++]<<16;var e=this.data[this.pos++]<<8;var d=this.data[this.pos++];return b|f|e|d};c.prototype.readUInt16=function(){var b=this.data[this.pos++]<<8;var f=this.data[this.pos++];return b|f};c.prototype.decodePixels=function(b){var f,e,d,g,h,k,t,p;null==b&&(b=this.imgData);if(0===
b.length)return new Uint8Array(0);b=new J.Zlib(b);b=b.getBytes();var n=this.pixelBitlength/8;var u=n*this.width;var q=new Uint8Array(u*this.height);var fa=b.length;for(e=g=h=0;g<fa;){switch(b[g++]){case 0:for(d=f=0;f<u;d=f+=1)q[e++]=b[g++];break;case 1:for(d=k=0;k<u;d=k+=1){f=b[g++];var v=d<n?0:q[e-n];q[e++]=(f+v)%256}break;case 2:for(d=v=0;v<u;d=v+=1){f=b[g++];var x=(d-d%n)/n;k=h&&q[(h-1)*u+x*n+d%n];q[e++]=(k+f)%256}break;case 3:for(d=p=0;p<u;d=p+=1)f=b[g++],x=(d-d%n)/n,v=d<n?0:q[e-n],k=h&&q[(h-
1)*u+x*n+d%n],q[e++]=(f+Math.floor((v+k)/2))%256;break;case 4:for(d=p=0;p<u;d=p+=1){f=b[g++];x=(d-d%n)/n;v=d<n?0:q[e-n];0===h?k=t=0:(k=q[(h-1)*u+x*n+d%n],t=x&&q[(h-1)*u+(x-1)*n+d%n]);var z=v+k-t;d=Math.abs(z-v);x=Math.abs(z-k);z=Math.abs(z-t);v=d<=x&&d<=z?v:x<=z?k:t;q[e++]=(f+v)%256}break;default:throw Error("Invalid filter algorithm: "+b[g-1]);}h++}return q};c.prototype.decodePalette=function(){var b,f,e,d;var g=this.palette;var h=this.transparency.indexed||[];var k=new Uint8Array((h.length||0)+
g.length);var t=0;g.length;var p=f=b=0;for(e=g.length;f<e;p=f+=3)k[t++]=g[p],k[t++]=g[p+1],k[t++]=g[p+2],k[t++]=null!=(d=h[b++])?d:255;return k};c.prototype.copyToImageData=function(b,f){var e,d;var g=this.colors;var h=null;var k=this.hasAlphaChannel;this.palette.length&&(h=null!=(e=this._decodedPalette)?e:this._decodedPalette=this.decodePalette(),g=4,k=!0);b=b.data||b;var t=b.length;var p=h||f;e=d=0;if(1===g)for(;e<t;)g=h?4*f[e/4]:d,d=p[g++],b[e++]=d,b[e++]=d,b[e++]=d,b[e++]=k?p[g++]:this.transparency.grayscale&&
this.transparency.grayscale===d?0:255,d=g;else for(;e<t;)g=h?4*f[e/4]:d,b[e++]=p[g++],b[e++]=p[g++],b[e++]=p[g++],b[e++]=k?p[g++]:this.transparency.rgb&&this.transparency.rgb[1]===p[g-3]&&this.transparency.rgb[3]===p[g-2]&&this.transparency.rgb[5]===p[g-1]?0:255,d=g};c.prototype.decode=function(){var b=new Uint8Array(this.width*this.height*4);this.copyToImageData(b,this.decodePixels());return b};var l=(m=a.document&&a.document.createElement("canvas"))&&m.getContext("2d");var r=function(b){l.width=
b.width;l.height=b.height;l.clearRect(0,0,b.width,b.height);l.putImageData(b,0,0);b=new Image;b.src=m.toDataURL();return b};c.prototype.decodeFrames=function(b){var f,e;if(this.animation){var d=this.animation.frames;var g=[];var h=f=0;for(e=d.length;f<e;h=++f){h=d[h];var k=b.createImageData(h.width,h.height);var t=this.decodePixels(new Uint8Array(h.data));this.copyToImageData(k,t);h.imageData=k;g.push(h.image=r(k))}return g}};c.prototype.renderFrame=function(b,f){var e=this.animation.frames;var d=
e[f];e=e[f-1];0===f&&b.clearRect(0,0,this.width,this.height);1===(null!=e?e.disposeOp:void 0)?b.clearRect(e.xOffset,e.yOffset,e.width,e.height):2===(null!=e?e.disposeOp:void 0)&&b.putImageData(e.imageData,e.xOffset,e.yOffset);0===d.blendOp&&b.clearRect(d.xOffset,d.yOffset,d.width,d.height);return b.drawImage(d.image,d.xOffset,d.yOffset)};c.prototype.animate=function(b){var f,e=this;var d=0;var g=this.animation;var h=g.numFrames;var k=g.frames;var t=g.numPlays;return(f=function(){var p=d++%h;var n=
k[p];e.renderFrame(b,p);if(1<h&&d/h<t)return e.animation._timeout=setTimeout(f,n.delay)})()};c.prototype.stopAnimation=function(){var b;return clearTimeout(null!=(b=this.animation)?b._timeout:void 0)};c.prototype.render=function(b){b._png&&b._png.stopAnimation();b._png=this;b.width=this.width;b.height=this.height;b=b.getContext("2d");if(this.animation)return this.decodeFrames(b),this.animate(b);var f=b.createImageData(this.width,this.height);this.copyToImageData(f,this.decodePixels());return b.putImageData(f,
0,0)};return c}(self);const ea=new Set(["jpg","png","bmp","gif"]);B.decode=function(a){return G.apply(this,arguments)};B.getFormat=function(a){a=M(a);"lerc2"===a?a="lerc":"error"===a&&(a="");return a};Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});