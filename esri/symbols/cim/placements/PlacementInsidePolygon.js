// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../core/RandomLCG","../CIMPlacements","../enums"],function(B,E,F,G,A){function C(l,u,d,b){let a=b.get(l);a||(a=[],b.set(l,a));a.push([u,d])}let D=function(){function l(){}l.local=function(){null===l.instance&&(l.instance=new l);return l.instance};l.prototype.execute=function(u,d,b,a,h){return new H(u,d,b,a,h)};return l}();D.instance=null;let H=function(){function l(d,b,a,h,e){this._currentY=this._currentX=this._yMax=this._yMin=this._xMax=this._xMin=0;
this._accelerationMap=null;this._testInsidePolygon=!1;this._verticalSubdivision=!0;this._stepX=Math.abs(b.stepX??16)*a;this._stepY=Math.abs(b.stepY??16)*a;if(0!==this._stepX&&0!==this._stepY&&d&&void 0!==d.rings&&d.rings){this._gridType=b.gridType??A.PlacementGridType.Fixed;if(this._gridType===A.PlacementGridType.Random)this._randomLCG=new F(1*(b.seed??13)),this._randomness=(b.randomness??100)/100,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._offsetY=this._offsetX=this._sinAngle=
0,this._buildRandomValues();else{this._randomness=0;this._gridAngle=b.gridAngle??0;this._shiftOddRows=b.shiftOddRows??!1;this._offsetX=(b.offsetX??0)*a;this._offsetY=(b.offsetY??0)*a;this._cosAngle=Math.cos(this._gridAngle/180*Math.PI);this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI);if(this._stepX)if(0>this._offsetX)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX;else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX;if(this._stepY)if(0>this._offsetY)for(;this._offsetY<
-.5*this._stepY;)this._offsetY+=this._stepY;else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=this._stepY}this._graphicOriginY=this._graphicOriginX=0;if(null!=h){const [,k,f]=h.split("/");b=parseFloat(k);this._graphicOriginX=512*-parseFloat(f);this._graphicOriginY=512*b;this._testInsidePolygon=!0}this._internalPlacement=new G.Placement;this._calculateMinMax(d);this._geometry=d}}var u=l.prototype;u.next=function(){return this._geometry?this._nextInside():null};u._buildRandomValues=function(){if(!l._randValues){l._randValues=
[];for(let d=0;24>d;d++)for(let b=0;24>b;b++)l._randValues.push(this._randomLCG.getFloat()),l._randValues.push(this._randomLCG.getFloat())}};u._calculateMinMax=function(d){this._yMax=this._yMin=this._xMax=this._xMin=0;let b;let a,h,e,k,f,c,g,m;a=h=g=f=Number.MAX_VALUE;e=k=m=c=-Number.MAX_VALUE;var q=1!==this._cosAngle;let y=0;for(var n of d.rings){var p=n?n.length:0;for(var r=0;r<p;r++){var t=n[r][0];var w=n[r][1];var v=t-this._graphicOriginX-this._offsetX;b=w-this._graphicOriginY-this._offsetY;if(q){var x=
this._cosAngle*v-this._sinAngle*b;v=this._sinAngle*v+this._cosAngle*b}else x=v,v=b;a=Math.min(a,x);e=Math.max(e,x);h=Math.min(h,v);k=Math.max(k,v);f=Math.min(f,w);c=Math.max(c,w);g=Math.min(g,t);m=Math.max(m,t);y++}}f=f!==Number.MAX_VALUE?f:-512-this._stepY;c=c!==-Number.MAX_VALUE?c:this._stepY;g=g!==Number.MAX_VALUE?g:-this._stepX;m=m!==-Number.MAX_VALUE?m:512+this._stepX;x=c-f;w=m-g;this._polygonMin=(this._verticalSubdivision=x>=w)?f:g;if(this._testInsidePolygon){t=0-this._graphicOriginX-this._offsetX-
this._stepX;n=512-this._graphicOriginX-this._offsetX+this._stepX;p=-512-this._graphicOriginY-this._offsetY-this._stepY;r=0-this._graphicOriginY-this._offsetY+this._stepY;if(q){q=[[t,p],[t,r],[n,p],[n,r]];t=p=Number.MAX_VALUE;n=r=-Number.MAX_VALUE;for(const z of q)q=this._cosAngle*z[0]-this._sinAngle*z[1],v=this._sinAngle*z[0]+this._cosAngle*z[1],t=Math.min(t,q),n=Math.max(n,q),p=Math.min(p,v),r=Math.max(r,v)}a=a!==Number.MAX_VALUE?Math.max(a,t):t;h=h!==Number.MAX_VALUE?Math.max(h,p):p;e=e!==-Number.MAX_VALUE?
Math.min(e,n):n;k=k!==-Number.MAX_VALUE?Math.min(k,r):r}this._xMin=Math.round(a/this._stepX);this._xMax=Math.round(e/this._stepX);this._yMin=Math.round(h/this._stepY);this._yMax=Math.round(k/this._stepY);this._currentX=this._xMax+1;this._currentY=this._yMin-1;this._testInsidePolygon&&12<y&&(25<x||25<w)&&this._buildAccelerationMap(d,g,m,f,c)};u._buildAccelerationMap=function(d,b,a,h,e){({rings:d}=d);const k=new Map,f=this._verticalSubdivision;a=f?e-h:a-b;e=Math.ceil(a/10);if(!(1>=e)){a=Math.floor(a/
e);e++;this._delta=a;if(f){e=-512-this._stepY;var c=this._stepY}else e=-this._stepX,c=512+this._stepX,h=b;for(let n=0;n<d.length;n++)if(b=d[n],!(2>b.length))for(let p=1;p<b.length;p++){var g=b[p-1];var m=b[p];if(f){if(g[1]===m[1]||g[1]<e&&m[1]<e||g[1]>c&&m[1]>c)continue;var q=Math.min(g[1],m[1]);g=Math.max(g[1],m[1])}else{if(g[0]===m[0]||g[0]<e&&m[0]<e||g[0]>c&&m[0]>c)continue;q=Math.min(g[0],m[0]);g=Math.max(g[0],m[0])}for(;q<g;){var y=Math.floor((q-h)/a);C(y,n,p,k);q+=a}q=Math.floor((g-h)/a);q>
y&&C(q,n,p,k)}this._accelerationMap=k}};u._nextInside=function(){for(;;){if(this._currentX>this._xMax){this._currentY++;if(this._currentY>this._yMax)return null;this._currentX=this._xMin;this._shiftOddRows&&this._currentY%2&&this._currentX--}var d=this._currentX*this._stepX+this._offsetX;this._shiftOddRows&&this._currentY%2&&(d+=.5*this._stepX);const b=this._currentY*this._stepY+this._offsetY;this._currentX++;let a;if(this._gridType===A.PlacementGridType.Random){const h=(this._currentX%24+24)%24,
e=(this._currentY%24+24)%24;a=this._graphicOriginX+d+this._stepX*this._randomness*(.5-l._randValues[24*e+h])*2/3;d=this._graphicOriginY+b+this._stepY*this._randomness*(.5-l._randValues[24*e+h+1])*2/3}else a=this._graphicOriginX+this._cosAngle*d+this._sinAngle*b,d=this._graphicOriginY-this._sinAngle*d+this._cosAngle*b;if(!this._testInsidePolygon||this._isInsidePolygon(a,d,this._geometry))return this._internalPlacement.setTranslate(a,d),this._internalPlacement}};u._isInsidePolygon=function(d,b,a){var {rings:h}=
a;if(E.isNone(this._accelerationMap)){var {rings:e}=a;h=0;for(var k of e){e=k.length;for(var f=1;f<e;++f){a=k[f-1];var c=k[f];a[1]>b!==c[1]>b&&(0<(c[0]-a[0])*(b-a[1])-(c[1]-a[1])*(d-a[0])?h++:h--)}}return 0!==h}k=this._verticalSubdivision;c=this._accelerationMap.get(Math.floor(((k?b:d)-this._polygonMin)/this._delta));if(!c)return!1;a=0;for(e of c){c=e[0];const g=h[c];f=e[1];c=g[f-1];f=g[f];if(k){if(c[1]>b===f[1]>b)continue;c=(f[0]-c[0])*(b-c[1])-(f[1]-c[1])*(d-c[0])}else{if(c[0]>d===f[0]>d)continue;
c=(f[1]-c[1])*(d-c[0])-(f[0]-c[0])*(b-c[1])}0<c?a++:a--}return 0!==a};return l}();B.PlacementInsidePolygon=D;Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});