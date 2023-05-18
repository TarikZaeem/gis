// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/arrayUtils ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/aaBoundingBox ../../lib/ContentObjectType ../../lib/screenSizePerspectiveUtils ../../lib/Util ../../lib/VertexAttribute".split(" "),function(w,Z,aa,G,H,J,L,ba,ca,da,P){function Q(a,b,c,d,h,e){if(!G.isNone(a)){var m=R(b,c,ea);L.setMin(K,a.bbMin);L.setMax(K,a.bbMax);G.isSome(h)&&h.applyToAabb(K);if(S(K,b,m,d)){const {primitiveIndices:p,
indices:C,position:D}=a;m=p?p.length:C.length/3;if(1E3<m&&(a=a.getChildren(),void 0!==a)){for(const z of a)Q(z,b,c,d,h,e);return}M(b,c,0,m,C,D,p,h,e)}}}function M(a,b,c,d,h,e,m,p,C){if(m){const {data:t,stride:E}=e;e=a[0];var D=a[1];a=a[2];var z=b[0]-e,F=b[1]-D;for(b=b[2]-a;c<d;++c){var y=m[c],f=3*y,g=E*h[f++],q=t[g++],l=t[g++],k=t[g];g=E*h[f++];var r=t[g++],v=t[g++],n=t[g];g=E*h[f];f=t[g++];var u=t[g++];g=t[g];G.isSome(p)&&([q,l,k]=p.applyToVertex(q,l,k,c),[r,v,n]=p.applyToVertex(r,v,n,c),[f,u,g]=
p.applyToVertex(f,u,g,c));r-=q;v-=l;n-=k;f-=q;u-=l;g-=k;var A=F*g-u*b,I=b*f-g*z;const T=z*u-f*F;var x=r*A+v*I+n*T;if(!(Math.abs(x)<=Number.EPSILON)){q=e-q;l=D-l;k=a-k;A=q*A+l*I+k*T;if(0<x){if(0>A||A>x)continue}else if(0<A||A<x)continue;I=l*n-v*k;k=k*r-n*q;l=q*v-r*l;q=z*I+F*k+b*l;if(0<x){if(0>q||A+q>x)continue}else if(0<q||A+q<x)continue;k=(f*I+u*k+g*l)/x;0<=k&&(r=N(r,v,n,f,u,g,U),C(k,r,y,!1))}}}else{var {data:B,stride:O}=e;m=a[0];e=a[1];D=a[2];a=b[0]-m;z=b[1]-e;F=b[2]-D;for(let t=c,E=3*c;t<d;++t)if(f=
O*h[E++],l=B[f++],k=B[f++],n=B[f],f=O*h[E++],b=B[f++],c=B[f++],y=B[f],f=O*h[E++],r=B[f++],v=B[f++],f=B[f],G.isSome(p)&&([l,k,n]=p.applyToVertex(l,k,n,t),[b,c,y]=p.applyToVertex(b,c,y,t),[r,v,f]=p.applyToVertex(r,v,f,t)),b-=l,c-=k,y-=n,r-=l,v-=k,f-=n,g=z*f-v*F,q=F*r-f*a,x=a*v-r*z,u=b*g+c*q+y*x,!(Math.abs(u)<=Number.EPSILON)){l=m-l;k=e-k;n=D-n;g=l*g+k*q+n*x;if(0<u){if(0>g||g>u)continue}else if(0<g||g<u)continue;q=k*y-c*n;n=n*b-y*l;k=l*c-b*k;l=a*q+z*n+F*k;if(0<u){if(0>l||g+l>u)continue}else if(0<l||
g+l<u)continue;n=(r*q+v*n+f*k)/u;0<=n&&(b=N(b,c,y,r,v,f,U),C(n,b,t,!1))}}}function N(a,b,c,d,h,e,m){H.set(V,a,b,c);H.set(W,d,h,e);H.cross(m,V,W);H.normalize(m,m);return m}function R(a,b,c){return H.set(c,1/(b[0]-a[0]),1/(b[1]-a[1]),1/(b[2]-a[2]))}function S(a,b,c,d){return X(a,b,c,d,Infinity)}function X(a,b,c,d,h){var e=(a[0]-d-b[0])*c[0],m=(a[3]+d-b[0])*c[0];let p=Math.min(e,m);e=Math.max(e,m);m=(a[1]-d-b[1])*c[1];const C=(a[4]+d-b[1])*c[1];e=Math.min(e,Math.max(m,C));if(0>e)return!1;p=Math.max(p,
Math.min(m,C));if(p>e)return!1;m=(a[2]-d-b[2])*c[2];a=(a[5]+d-b[2])*c[2];e=Math.min(e,Math.max(m,a));if(0>e)return!1;p=Math.max(p,Math.min(m,a));return p>e?!1:p<h}function Y(a,b){b=b?Y(b):{};for(const c in a){let d=a[c];d&&d.forEach&&(d=fa(d));null==d&&c in b||(b[c]=d)}return b}function fa(a){const b=[];a.forEach(c=>b.push(c));return b}const K=L.create(),ea=J.create(),U=J.create(),V=J.create(),W=J.create();w.colorMixModes={multiply:1,ignore:2,replace:3,tint:4};w.computeInvDir=R;w.computeNormal=N;
w.copyParameters=Y;w.intersectAabbInvDir=S;w.intersectAabbInvDirBefore=X;w.intersectTriangleGeometry=function(a,b,c,d,h,e){a.visible&&(a.boundingInfo?(da.assert(a.type===ba.ContentObjectType.Mesh),Q(a.boundingInfo,c,d,b.tolerance,h,e)):(b=a.indices.get(P.VertexAttribute.POSITION),a=a.vertexAttributes.get(P.VertexAttribute.POSITION),M(c,d,0,b.length/3,b,a,void 0,h,e)))};w.intersectTriangles=M;w.updateParameters=function(a,b){let c=!1;for(const d in b){const h=b[d];void 0!==h&&(Array.isArray(h)?null===
a[d]?(a[d]=h.slice(),c=!0):Z.update(a[d],h)&&(c=!0):a[d]!==h&&(c=!0,a[d]=h))}return c};w.verticalOffsetAtDistance=function(a,b,c,d,h){let e=(c.screenLength||0)*a.pixelRatio;G.isSome(h)&&(e=ca.scale(e,d,b,h));return aa.clamp(e*Math.tan(.5*a.fovY)/(.5*a.fullHeight)*b,c.minWorldLength||0,null!=c.maxWorldLength?c.maxWorldLength:Infinity)};Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});