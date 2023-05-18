// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/maybe ../../../../../chunks/mat4 ../../../../../geometry/support/buffer/BufferView ../../lib/Util ../../lib/VertexAttribute".split(" "),function(v,R,H,z,w,x){function L(h,c,b,d){const a=b.typedBuffer;b=b.typedBufferStride;const f=h.length;d*=b;for(let e=0;e<f;++e){const g=2*h[e];a[d]=c[g];a[d+1]=c[g+1];d+=b}}function I(h,c,b,d,a){const f=b.typedBuffer;b=b.typedBufferStride;const e=h.length;d*=b;if(null==a||1===a)for(a=0;a<e;++a){var g=3*h[a];f[d]=c[g];f[d+1]=c[g+
1];f[d+2]=c[g+2];d+=b}else for(g=0;g<e;++g){const k=3*h[g];for(let u=0;u<a;++u)f[d]=c[k],f[d+1]=c[k+1],f[d+2]=c[k+2],d+=b}}function J(h,c,b,d,a=1){const f=b.typedBuffer;b=b.typedBufferStride;const e=h.length;d*=b;if(1===a)for(a=0;a<e;++a){var g=4*h[a];f[d]=c[g];f[d+1]=c[g+1];f[d+2]=c[g+2];f[d+3]=c[g+3];d+=b}else for(g=0;g<e;++g){const k=4*h[g];for(let u=0;u<a;++u)f[d]=c[k],f[d+1]=c[k+1],f[d+2]=c[k+2],f[d+3]=c[k+3],d+=b}}function M(h,c,b,d,a,f=1){if(b){var e=d.typedBuffer;d=d.typedBufferStride;var g=
h.length,k=b[0],u=b[1],A=b[2],B=b[4],C=b[5],D=b[6],E=b[8],F=b[9],G=b[10],r=b[12],p=b[13],l=b[14];a*=d;var m=0,q=0,n=0;b=H.hasIdentityRotation(b)?t=>{m=c[t]+r;q=c[t+1]+p;n=c[t+2]+l}:t=>{const y=c[t],K=c[t+1];t=c[t+2];m=k*y+B*K+E*t+r;q=u*y+C*K+F*t+p;n=A*y+D*K+G*t+l};if(1===f)for(f=0;f<g;++f)b(3*h[f]),e[a]=m,e[a+1]=q,e[a+2]=n,a+=d;else for(let t=0;t<g;++t){b(3*h[t]);for(let y=0;y<f;++y)e[a]=m,e[a+1]=q,e[a+2]=n,a+=d}}else I(h,c,d,a,f)}function N(h,c,b,d,a,f=1){if(b){var e=d.typedBuffer;d=d.typedBufferStride;
var g=h.length,k=b[0],u=b[1],A=b[2],B=b[4],C=b[5],D=b[6],E=b[8],F=b[9],G=b[10],r=!H.isOrthoNormal(b);a*=d;var p=0,l=0,m=0;b=H.hasIdentityRotation(b)?n=>{p=c[n];l=c[n+1];m=c[n+2]}:n=>{const t=c[n],y=c[n+1];n=c[n+2];p=k*t+B*y+E*n;l=u*t+C*y+F*n;m=A*t+D*y+G*n};if(1===f)if(r)for(f=0;f<g;++f)b(3*h[f]),r=p*p+l*l+m*m,.999999>r&&1E-6<r?(r=1/Math.sqrt(r),e[a]=p*r,e[a+1]=l*r,e[a+2]=m*r):(e[a]=p,e[a+1]=l,e[a+2]=m),a+=d;else for(f=0;f<g;++f)b(3*h[f]),e[a]=p,e[a+1]=l,e[a+2]=m,a+=d;else for(let n=0;n<g;++n){b(3*
h[n]);if(r){var q=p*p+l*l+m*m;.999999>q&&1E-6<q&&(q=1/Math.sqrt(q),p*=q,l*=q,m*=q)}for(q=0;q<f;++q)e[a]=p,e[a+1]=l,e[a+2]=m,a+=d}}else I(h,c,d,a,f)}function O(h,c,b,d,a,f=1){if(b){var e=d.typedBuffer;d=d.typedBufferStride;var g=h.length,k=b[0],u=b[1],A=b[2],B=b[4],C=b[5],D=b[6],E=b[8],F=b[9],G=b[10];b=!H.isOrthoNormal(b);a*=d;if(1===f)for(f=0;f<g;++f){var r=4*h[f],p=c[r],l=c[r+1],m=c[r+2];r=c[r+3];var q=k*p+B*l+E*m,n=u*p+C*l+F*m;p=A*p+D*l+G*m;b&&(l=q*q+n*n+p*p,.999999>l&&1E-6<l&&(l=1/Math.sqrt(l),
q*=l,n*=l,p*=l));e[a]=q;e[a+1]=n;e[a+2]=p;e[a+3]=r;a+=d}else for(r=0;r<g;++r){q=4*h[r];l=c[q];m=c[q+1];const t=c[q+2];q=c[q+3];n=k*l+B*m+E*t;p=u*l+C*m+F*t;l=A*l+D*m+G*t;b&&(m=n*n+p*p+l*l,.999999>m&&1E-6<m&&(m=1/Math.sqrt(m),n*=m,p*=m,l*=m));for(m=0;m<f;++m)e[a]=n,e[a+1]=p,e[a+2]=l,e[a+3]=q,a+=d}}else J(h,c,d,a,f)}function P(h,c,b,d,a,f=1){var e=d.typedBuffer,g=d.typedBufferStride,k=h.length;a*=g;if(b===c.length&&4===b)for(e[a]=c[0],e[a+1]=c[1],e[a+2]=c[2],e[a+3]=c[3],h=new Uint32Array(d.typedBuffer.buffer,
d.start),g/=4,a/=4,c=h[a],a+=g,k*=f,e=1;e<k;++e)h[a]=c,a+=g;else if(1===f)if(4===b)for(f=0;f<k;++f)b=4*h[f],e[a]=c[b],e[a+1]=c[b+1],e[a+2]=c[b+2],e[a+3]=c[b+3],a+=g;else for(f=0;f<k;++f)b=3*h[f],e[a]=c[b],e[a+1]=c[b+1],e[a+2]=c[b+2],e[a+3]=255,a+=g;else if(4===b)for(b=0;b<k;++b){d=4*h[b];for(var u=0;u<f;++u)e[a]=c[d],e[a+1]=c[d+1],e[a+2]=c[d+2],e[a+3]=c[d+3],a+=g}else for(b=0;b<k;++b)for(d=3*h[b],u=0;u<f;++u)e[a]=c[d],e[a+1]=c[d+1],e[a+2]=c[d+2],e[a+3]=255,a+=g}function Q(h,c,b,d,a=1){const f=c.typedBuffer;
c=c.typedBufferStride;d*=c;if(1===a)for(a=0;a<b;++a)f[d]=h[0],f[d+1]=h[1],f[d+2]=h[2],f[d+3]=h[3],d+=c;else for(let e=0;e<b;++e)for(let g=0;g<a;++g)f[d]=h[0],f[d+1]=h[1],f[d+2]=h[2],f[d+3]=h[3],d+=c}v.writeBufferFloat=function(h,c,b,d,a=1){const f=b.typedBuffer;b=b.typedBufferStride;const e=h.length;d*=b;if(1===a)for(a=0;a<e;++a)f[d]=c[h[a]],d+=b;else for(let g=0;g<e;++g){const k=c[h[g]];for(let u=0;u<a;u++)f[d]=k,d+=b}};v.writeBufferMat3f=function(h,c,b,d){const a=b.typedBuffer;b=b.typedBufferStride;
const f=h.length;d*=b;for(let e=0;e<f;++e){const g=9*h[e];for(let k=0;9>k;++k)a[d+k]=c[g+k];d+=b}};v.writeBufferMat4f=function(h,c,b,d){const a=b.typedBuffer;b=b.typedBufferStride;const f=h.length;d*=b;for(let e=0;e<f;++e){const g=16*h[e];for(let k=0;16>k;++k)a[d+k]=c[g+k];d+=b}};v.writeBufferVec2=L;v.writeBufferVec3=I;v.writeBufferVec4=J;v.writeBufferVec4Zeros=function(h,c,b){const d=h.typedBuffer;h=h.typedBufferStride;c*=h;for(let a=0;a<b;++a)d[c]=0,d[c+1]=0,d[c+2]=0,d[c+3]=0,c+=h};v.writeColor=
P;v.writeDefaultAttributes=function(h,c,b,d,a,f){for(const k of c.fieldNames){c=h.vertexAttributes.get(k);var e=h.indices.get(k);if(c&&e)switch(k){case x.VertexAttribute.POSITION:w.assert(3===c.size);var g=a.getField(k,z.BufferViewVec3f);w.assert(!!g,`No buffer view for ${k}`);g&&M(e,c.data,b,g,f);break;case x.VertexAttribute.NORMAL:w.assert(3===c.size);g=a.getField(k,z.BufferViewVec3f);w.assert(!!g,`No buffer view for ${k}`);g&&N(e,c.data,d,g,f);break;case x.VertexAttribute.UV0:w.assert(2===c.size);
g=a.getField(k,z.BufferViewVec2f);w.assert(!!g,`No buffer view for ${k}`);g&&L(e,c.data,g,f);break;case x.VertexAttribute.COLOR:case x.VertexAttribute.SYMBOLCOLOR:w.assert(3===c.size||4===c.size);g=a.getField(k,z.BufferViewVec4u8);w.assert(!!g,`No buffer view for ${k}`);g&&P(e,c.data,c.size,g,f);break;case x.VertexAttribute.TANGENT:w.assert(4===c.size);g=a.getField(k,z.BufferViewVec4f);w.assert(!!g,`No buffer view for ${k}`);g&&O(e,c.data,d,g,f);break;case x.VertexAttribute.PROFILERIGHT:case x.VertexAttribute.PROFILEUP:case x.VertexAttribute.PROFILEVERTEXANDNORMAL:case x.VertexAttribute.FEATUREVALUE:w.assert(4===
c.size),g=a.getField(k,z.BufferViewVec4f),w.assert(!!g,`No buffer view for ${k}`),g&&J(e,c.data,g,f)}else k===x.VertexAttribute.OBJECTANDLAYERIDCOLOR&&R.isSome(h.objectAndLayerIdColor)&&(c=h.indices.get(x.VertexAttribute.POSITION),w.assert(!!c,`No buffer view for ${k}`),c&&(c=c.length,e=a.getField(k,z.BufferViewVec4u8),Q(h.objectAndLayerIdColor,e,c,f)))}};v.writeNormal=N;v.writeObjectAndLayerIdColor=Q;v.writePosition=M;v.writeTangent=O;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});