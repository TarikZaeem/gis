// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../PixelBlock","./pixelUtils"],function(I,J,L,K){function N(t){let {altitude:r,azimuth:b}=t;const {hillshadeType:v,pixelSizePower:a=1,pixelSizeFactor:d=1,scalingType:c,isGCS:e,resolution:B}=t;var h="multi-directional"===v?2*t.zFactor:t.zFactor;const {x:q,y:A}=B;t=h/(8*q);var C=h/(8*A);e&&.001<h&&(t/=111E3,C/=111E3);"adjusted"===c&&(e?(t=111E3*q,C=111E3*A,t=(h+t**a*d)/(8*t),C=(h+C**a*d)/(8*C)):(t=(h+q**a*d)/(8*q),C=(h+A**a*d)/(8*A)));var k=(90-r)*Math.PI/180;
h=Math.cos(k);let u=(360-b+90)*Math.PI/180,m=Math.sin(k)*Math.cos(u);k=Math.sin(k)*Math.sin(u);const y=[315,270,225,360,180,0],D=[60,60,60,60,60,90];var n=new Float32Array([3,5,3,2,1,4]);const f=n.reduce((w,G)=>w+G);n=n.map(w=>w/f);const g="multi-directional"===v?y.length:1,x=new Float32Array(6),E=new Float32Array(6),z=new Float32Array(6);if("multi-directional"===v)for(let w=0;w<g;w++)r=D[w],b=y[w],k=(90-r)*Math.PI/180,h=Math.cos(k),u=(360-b+90)*Math.PI/180,m=Math.sin(k)*Math.cos(u),k=Math.sin(k)*
Math.sin(u),x[w]=h,E[w]=m,z[w]=k;else x.fill(h),E.fill(m),z.fill(k);return{resolution:B,factor:[t,C],sinZcosA:m,sinZsinA:k,cosZ:h,sinZcosAs:E,sinZsinAs:z,cosZs:x,weights:n,hillshadeType:["traditional","multi-directional"].indexOf(v)}}I.aspect=function(t,r={}){if(!K.isValidPixelBlock(t))return t;const {width:b,height:v,mask:a}=t;var d=t.pixels[0];const c=new Uint8Array(b*v);J.isSome(a)&&c.set(a);const e=new Float32Array(b*v);var {resolution:B}=r;r=B?1/B.x:1;B=B?1/B.y:1;let h;let q,A,C,k;const u=J.isSome(a);
for(let n=1;n<v-1;n++){const f=n*b;for(let g=1;g<b-1;g++)if(a&&!a[f+g])e[f+g]=0;else{var m=0;if(u&&(m=a[f-b+g-1]+a[f-b+g]+a[f-b+g+1]+a[f+g-1]+a[f+g+1]+a[f+b+g-1]+a[f+b+g]+a[f+b+g+1],7>m)){e[f+g]=0;c[f+g]=0;continue}if(a&&7===m){m=a[f-b+g-1]?d[f-b+g-1]:d[f+g];var y=a[f-b+g]?d[f-b+g]:d[f+g];h=a[f-b+g+1]?d[f-b+g+1]:d[f+g];var D=a[f+g-1]?d[f+g-1]:d[f+g];q=a[f+g+1]?d[f+g+1]:d[f+g];A=a[f+b+g-1]?d[f+b+g-1]:d[f+g];C=a[f+b+g]?d[f+b+g]:d[f+g];k=a[f+b+g+1]?d[f+b+g+1]:d[f+g]}else m=d[f-b+g-1],y=d[f-b+g],h=d[f-
b+g+1],D=d[f+g-1],q=d[f+g+1],A=d[f+b+g-1],C=d[f+b+g],k=d[f+b+g+1];D=(h+q+q+k-(m+D+D+A))*r;m=(A+C+C+k-(m+y+y+h))*B;y=-1;if(0!==D||0!==m)y=90-57.29578*Math.atan2(m,-D),0>y&&(y+=360),360===y?y=0:360<y&&(y%=360);e[f+g]=y}}for(d=0;d<v;d++)e[d*b]=e[d*b+1],e[(d+1)*b-1]=e[(d+1)*b-2];for(d=1;d<b-1;d++)e[d]=e[d+b],e[d+(v-1)*b]=e[d+(v-2)*b];return new L({width:b,height:v,pixels:[e],mask:a?c:null,pixelType:"f32",validPixelCount:t.validPixelCount,statistics:[{minValue:0,maxValue:360}]})};I.calculateHillshadeParams=
N;I.hillshade=function(t,r){if(!K.isValidPixelBlock(t))return t;const {width:b,height:v,mask:a}=t,d=new Uint8Array(b*v);var c=1;if(J.isSome(a)){for(var e=0;e<a.length;e++)if(a[e]){c=a[e];break}d.set(a)}const {factor:B,sinZcosA:h,sinZsinA:q,cosZ:A,sinZcosAs:C,sinZsinAs:k,cosZs:u,weights:m}=N(r),[y,D]=B;({hillshadeType:e}=r);const n=t.pixels[0];r=new Uint8Array(b*v);let f;const g=J.isSome(a);for(let M=1;M<v-1;M++){const p=M*b;for(let l=1;l<b-1;l++)if(a&&!a[p+l])r[p+l]=0;else{var x=8;if(g&&(x=(a[p-b+
l-1]+a[p-b+l]+a[p-b+l+1]+a[p+l-1]+a[p+l+1]+a[p+b+l-1]+a[p+b+l]+a[p+b+l+1])/c,7>x)){r[p+l]=0;d[p+l]=0;continue}if(a&&7===x){var E=a[p-b+l-1]?n[p-b+l-1]:n[p+l];var z=a[p-b+l]?n[p-b+l]:n[p+l];var w=a[p-b+l+1]?n[p-b+l+1]:n[p+l];x=a[p+l-1]?n[p+l-1]:n[p+l];f=a[p+l+1]?n[p+l+1]:n[p+l];var G=a[p+b+l-1]?n[p+b+l-1]:n[p+l];var F=a[p+b+l]?n[p+b+l]:n[p+l];var H=a[p+b+l+1]?n[p+b+l+1]:n[p+l]}else E=n[p-b+l-1],z=n[p-b+l],w=n[p-b+l+1],x=n[p+l-1],f=n[p+l+1],G=n[p+b+l-1],F=n[p+b+l],H=n[p+b+l+1];x=(w+f+f+H-(E+x+x+G))*
y;E=(G+F+F+H-(E+z+z+w))*D;z=Math.sqrt(1+x*x+E*E);w=0;if("traditional"===e)x=255*(A+q*E-h*x)/z,0>x&&(x=0),w=x;else for(G=k.length,F=0;F<G;F++)H=255*(u[F]+k[F]*E-C[F]*x)/z,0>H&&(H=0),w+=H*m[F];r[p+l]=w&255}}for(c=0;c<v;c++)r[c*b]=r[c*b+1],r[(c+1)*b-1]=r[(c+1)*b-2];for(c=1;c<b-1;c++)r[c]=r[c+b],r[c+(v-1)*b]=r[c+(v-2)*b];return new L({width:b,height:v,pixels:[r],mask:a?d:null,pixelType:"u8",validPixelCount:t.validPixelCount,statistics:[{minValue:0,maxValue:255}]})};I.slope=function(t,r){if(!K.isValidPixelBlock(t))return t;
var b=r.zFactor,v=r.pixelSizePower??1,a=r.pixelSizeFactor??1,d=r.slopeType,c=r.isGCS;const {width:e,height:B,mask:h}=t,q=t.pixels[0],A=new Uint8Array(e*B);let C=1;if(J.isSome(h)){for(var k=0;k<h.length;k++)if(h[k]){C=h[k];break}A.set(h)}k=new Float32Array(e*B);const {x:u,y:m}=r.resolution;r=b/(8*u);let y=b/(8*m);c&&1E-4>Math.abs(b-1)&&(r/=111E3,y/=111E3);"adjusted"===d&&(r=(b+u**v*a)/(8*u),y=(b+m**v*a)/(8*m));let D,n;let f,g,x,E;b=J.isSome(h);for(v=1;v<B-1;v++)for(a=v*e,c=1;c<e-1;c++)if(h&&!h[a+c])k[a+
c]=0;else{var z=0;if(b&&(z=(h[a-e+c-1]+h[a-e+c]+h[a-e+c+1]+h[a+c-1]+h[a+c+1]+h[a+e+c-1]+h[a+e+c]+h[a+e+c+1])/C,7>z)){k[a+c]=0;A[a+c]=0;continue}if(h&&7===z){z=h[a-e+c-1]?q[a-e+c-1]:q[a+c];D=h[a-e+c]?q[a-e+c]:q[a+c];n=h[a-e+c+1]?q[a-e+c+1]:q[a+c];var w=h[a+c-1]?q[a+c-1]:q[a+c];f=h[a+c+1]?q[a+c+1]:q[a+c];g=h[a+e+c-1]?q[a+e+c-1]:q[a+c];x=h[a+e+c]?q[a+e+c]:q[a+c];E=h[a+e+c+1]?q[a+e+c+1]:q[a+c]}else z=q[a-e+c-1],D=q[a-e+c],n=q[a-e+c+1],w=q[a+c-1],f=q[a+c+1],g=q[a+e+c-1],x=q[a+e+c],E=q[a+e+c+1];w=(n+f+
f+E-(z+w+w+g))*r;z=(g+x+x+E-(z+D+D+n))*y;z=Math.sqrt(w*w+z*z);k[a+c]="percent-rise"===d?100*z:57.2957795*Math.atan(z)}for(d=0;d<B;d++)k[d*e]=k[d*e+1],k[(d+1)*e-1]=k[(d+1)*e-2];for(d=1;d<e-1;d++)k[d]=k[d+e],k[d+(B-1)*e]=k[d+(B-2)*e];t=new L({width:e,height:B,pixels:[k],mask:h?A:null,pixelType:"f32",validPixelCount:t.validPixelCount});t.updateStatistics();return t};I.tintHillshade=function(t,r,b,v){if(K.isValidPixelBlock(t)&&K.isValidPixelBlock(r)){var {min:a,max:d}=v;v=t.pixels[0];var {pixels:c,mask:e}=
r;r=c[0];var B=255.00001/(d-a),h=new Uint8ClampedArray(r.length),q=new Uint8ClampedArray(r.length),A=new Uint8ClampedArray(r.length),C=b.length-1;for(let m=0;m<r.length;m++){if(e&&0===e[m])continue;var k=Math.floor((r[m]-a)*B);const [y,D]=b[0>k?0:k>C?C:k];var u=v[m];k=u*D;const n=k*(1-Math.abs(y%2-1));u-=k;switch(Math.floor(y)){case 0:h[m]=k+u;q[m]=n+u;A[m]=u;break;case 1:h[m]=n+u;q[m]=k+u;A[m]=u;break;case 2:h[m]=u;q[m]=k+u;A[m]=n+u;break;case 3:h[m]=u;q[m]=n+u;A[m]=k+u;break;case 4:h[m]=n+u;q[m]=
u;A[m]=k+u;break;case 5:case 6:h[m]=k+u,q[m]=u,A[m]=n+u}}t.pixels=[h,q,A];t.updateStatistics()}};Object.defineProperty(I,Symbol.toStringTag,{value:"Module"})});