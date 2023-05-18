// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../geometry/support/buffer/math/common"],function(r,G){function H(b,c,a){if(b.count!==c.count)G.mathLogger.error("source and destination buffers need to have the same number of elements");else{var k=b.count,g=a[0],d=a[1],e=a[2],f=a[3],h=a[4],p=a[5],q=a[6],F=a[7],t=a[8],u=a[9],m=a[10],v=a[11],w=a[12],x=a[13],y=a[14];a=a[15];var n=b.typedBuffer;b=b.typedBufferStride;var z=c.typedBuffer;c=c.typedBufferStride;for(let A=0;A<k;A++){const B=A*b;var l=A*c;const C=z[l],D=z[l+1],E=z[l+2];
l=z[l+3];n[B]=g*C+h*D+t*E+w*l;n[B+1]=d*C+p*D+u*E+x*l;n[B+2]=e*C+q*D+m*E+y*l;n[B+3]=f*C+F*D+v*E+a*l}}}function I(b,c,a){if(b.count!==c.count)G.mathLogger.error("source and destination buffers need to have the same number of elements");else{var k=b.count,g=a[0],d=a[1],e=a[2],f=a[3],h=a[4],p=a[5],q=a[6],F=a[7];a=a[8];var t=b.typedBuffer;b=b.typedBufferStride;var u=c.typedBuffer;c=c.typedBufferStride;for(let v=0;v<k;v++){const w=v*b;var m=v*c;const x=u[m],y=u[m+1],n=u[m+2];m=u[m+3];t[w]=g*x+f*y+q*n;t[w+
1]=d*x+h*y+F*n;t[w+2]=e*x+p*y+a*n;t[w+3]=m}}}function J(b,c){const a=Math.min(b.count,c.count),k=b.typedBuffer;b=b.typedBufferStride;const g=c.typedBuffer;c=c.typedBufferStride;for(let f=0;f<a;f++){const h=f*b;var d=f*c;const p=g[d],q=g[d+1];d=g[d+2];var e=p*p+q*q+d*d;0<e&&(e=1/Math.sqrt(e),k[h]=e*p,k[h+1]=e*q,k[h+2]=e*d)}}function K(b,c,a){const k=Math.min(b.count,c.count),g=b.typedBuffer;b=b.typedBufferStride;const d=c.typedBuffer;c=c.typedBufferStride;for(let e=0;e<k;e++){const f=e*b,h=e*c;g[f]=
a*d[h];g[f+1]=a*d[h+1];g[f+2]=a*d[h+2];g[f+3]=a*d[h+3]}}function L(b,c,a){const k=Math.min(b.count,c.count),g=b.typedBuffer;b=b.typedBufferStride;const d=c.typedBuffer;c=c.typedBufferStride;for(let e=0;e<k;e++){const f=e*b,h=e*c;g[f]=d[h]>>a;g[f+1]=d[h+1]>>a;g[f+2]=d[h+2]>>a;g[f+3]=d[h+3]>>a}}const M=Object.freeze(Object.defineProperty({__proto__:null,normalize:J,scale:K,shiftRight:L,transformMat3:I,transformMat4:H},Symbol.toStringTag,{value:"Module"}));r.normalize=J;r.scale=K;r.shiftRight=L;r.transformMat3=
I;r.transformMat4=H;r.vec4=M});