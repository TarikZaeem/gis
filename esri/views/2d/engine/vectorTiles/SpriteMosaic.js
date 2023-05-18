// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["../../../../symbols/cim/rasterizingUtils","./RectangleBinPack","../webgl/Rect","../../../webgl/enums","../../../webgl/Texture"],function(u,r,v,t,w){return function(){function n(a,c,b=0){this._size=[];this._mosaicsData=[];this._textures=[];this._dirties=[];this._pageHeight=this._pageWidth=this._currentPage=this._maxItemSize=0;this._mosaicRects={};this.pixelRatio=1;(0>=a||0>=c)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!");this._pageWidth=a;this._pageHeight=
c;0<b&&(this._maxItemSize=b);this._binPack=new r(a-4,c-4)}var g=n.prototype;g.dispose=function(){this._binPack=null;this._mosaicRects={};for(const a of this._textures)a&&a.dispose();this._textures.length=0};g.getWidth=function(a){return a>=this._size.length?-1:this._size[a][0]};g.getHeight=function(a){return a>=this._size.length?-1:this._size[a][1]};g.getPageSize=function(a){return a>=this._size.length?null:this._size[a]};g.setSpriteSource=function(a){this.dispose();this.pixelRatio=a.devicePixelRatio;
if(0===this._mosaicsData.length){this._binPack=new r(this._pageWidth-4,this._pageHeight-4);const c=new Uint32Array(Math.floor(this._pageWidth)*Math.floor(this._pageHeight));this._mosaicsData[0]=c;this._dirties.push(!0);this._size.push([this._pageWidth,this._pageHeight]);this._textures.push(void 0)}this._sprites=a};g.getSpriteItem=function(a,c=!1){var b=this._mosaicRects[a];if(b)return b;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;let d;a&&a.startsWith("dasharray-")?([b,d]=this._rasterizeDash(a),
c=!0):b=this._sprites.getSpriteInfo(a);if(!b||!b.width||!b.height||0>b.width||0>b.height)return null;const f=b.width,k=b.height,[e,h,l]=this._allocateImage(f,k);if(0>=e.width)return null;this._copy(e,b,h,l,c,d);b={rect:e,width:f,height:k,sdf:b.sdf,simplePattern:!1,pixelRatio:b.pixelRatio,page:h};return this._mosaicRects[a]=b};g.getSpriteItems=function(a){const c={};for(const b of a)c[b.name]=this.getSpriteItem(b.name,b.repeat);return c};g.getMosaicItemPosition=function(a,c){c=(a=this.getSpriteItem(a,
c))&&a.rect;if(!c)return null;c.width=a.width;c.height=a.height;return{tl:[c.x+2,c.y+2],br:[c.x+2+a.width,c.y+2+a.height],page:a.page}};g.bind=function(a,c,b=0,d=0){if(!(b>=this._size.length||b>=this._mosaicsData.length)){this._textures[b]||(this._textures[b]=new w.Texture(a,{pixelFormat:t.PixelFormat.RGBA,dataType:t.PixelType.UNSIGNED_BYTE,wrapMode:t.TextureWrapMode.CLAMP_TO_EDGE,width:this._size[b][0],height:this._size[b][1]},new Uint8Array(this._mosaicsData[b].buffer)));var f=this._textures[b];
f.setSamplingMode(c);this._dirties[b]&&f.setData(new Uint8Array(this._mosaicsData[b].buffer));a.bindTexture(f,d);this._dirties[b]=!1}};n._copyBits=function(a,c,b,d,f,k,e,h,l,p,m){let q=d*c+b;e=h*k+e;if(m)for(e-=k,m=-1;m<=p;m++,q=((m+p)%p+d)*c+b,e+=k)for(h=-1;h<=l;h++)f[e+h]=a[q+(h+l)%l];else for(b=0;b<p;b++){for(d=0;d<l;d++)f[e+d]=a[q+d];q+=c;e+=k}};g._copy=function(a,c,b,d,f,k){if(this._sprites&&"loaded"===this._sprites.loadStatus&&!(b>=this._mosaicsData.length)){var e=new Uint32Array(k?k.buffer:
this._sprites.image.buffer),h=this._mosaicsData[b];h&&e||console.error("Source or target images are uninitialized!");n._copyBits(e,k?c.width:this._sprites.width,c.x,c.y,h,d[0],a.x+2,a.y+2,c.width,c.height,f);this._dirties[b]=!0}};g._allocateImage=function(a,c){a+=2;c+=2;var b=Math.max(a,c);if(this._maxItemSize&&this._maxItemSize<b)return b=new v(0,0,a,c),this._mosaicsData.push(new Uint32Array(a*c)),this._dirties.push(!0),this._size.push([a,c]),this._textures.push(void 0),[b,this._mosaicsData.length-
1,[a,c]];b=a%4?4-a%4:4;let d=c%4?4-c%4:4;1===b&&(b=5);1===d&&(d=5);b=this._binPack.allocate(a+b,c+d);return 0>=b.width?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new r(this._pageWidth-4,this._pageHeight-4),this._allocateImage(a,c)):
[b,this._currentPage,[this._pageWidth,this._pageHeight]]};g._rasterizeDash=function(a){var c=a.match(/\[(.*?)\]/);if(!c)return null;c=c[1].split(",").map(Number);a=a.slice(a.lastIndexOf("-")+1);const [b,d,f]=u.rasterizeDash(c,a);a=new Uint8Array(b.buffer);return[{x:0,y:0,width:d,height:f,sdf:!0,pixelRatio:1},a]};return n}()});