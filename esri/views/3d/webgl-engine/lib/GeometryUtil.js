// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f32 ../../../../chunks/vec3f64 ../../../../geometry/support/plane ../../../../geometry/support/ray ./Attribute ./BufferVectorMath ./ContentObjectType ./DoubleArray ./FloatArray ./Geometry ./Indices ./Util ./VertexAttribute".split(" "),function(F,pa,l,t,qa,aa,ra,y,D,ia,sa,G,H,ta,X,k){function ja(n,b,a){function c(g,e){g>e&&([g,e]=[e,g]);const m=g.toString()+"."+e.toString();if(h[m])return h[m];let q=d.length;d.length+=
3;Q.add(d,3*g,d,3*e,d,q);Q.scale(d,q,n/Q.length(d,q));q/=3;return h[m]=q}let d;a?(d=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1]):(a=n*(1+Math.sqrt(5))/2,d=[-n,a,0,n,a,0,-n,-a,0,n,-a,0,0,-n,a,0,n,a,0,-n,-a,0,n,-a,a,0,-n,a,0,n,-a,0,-n,-a,0,n],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]);for(var f=0;f<d.length;f+=3)Q.scale(d,f,n/Q.length(d,f));let h={};for(f=0;f<
b;f++){const g=a.length,e=Array(4*g);for(let m=0;m<g;m+=3){const q=a[m],z=a[m+1],r=a[m+2],p=c(q,z),A=c(z,r),x=c(r,q),w=4*m;e[w]=q;e[w+1]=p;e[w+2]=x;e[w+3]=z;e[w+4]=A;e[w+5]=p;e[w+6]=r;e[w+7]=x;e[w+8]=A;e[w+9]=p;e[w+10]=A;e[w+11]=x}a=e;h={}}b=G.floatArrayFrom(d);for(f=0;f<b.length;f+=3)Q.normalize(b,f);a=[[k.VertexAttribute.POSITION,a],[k.VertexAttribute.NORMAL,a]];return{vertexAttributes:[[k.VertexAttribute.POSITION,new y.Attribute(G.floatArrayFrom(d),3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute(b,
3,!0)]],indices:a}}function ka(n,b,a,c,d,f,h=t.fromValues(0,0,0)){var g=b.length,e=G.newFloatArray(a.length*g*3+(6*c.length||0));const m=G.newFloatArray(a.length*g*3+(c?6:0)),q=[],z=[];let r=0;var p=0;const A=t.create(),x=t.create(),w=t.create(),J=t.create(),C=t.create(),u=t.create(),E=t.create(),v=qa.create(),N=t.create(),K=t.create(),la=t.create(),ba=t.create(),ua=t.create(),ma=aa.create();l.set(N,0,1,0);l.subtract(x,a[1],a[0]);l.normalize(x,x);f?(l.add(v,a[0],h),l.normalize(w,v)):l.set(w,0,0,1);
ca(x,w,N,N,C,w,.99619469809);l.copy(J,w);l.copy(ba,C);for(var B=0;B<c.length;B++)l.scale(u,C,c[B][0]),l.scale(v,w,c[B][2]),l.add(u,u,v),l.add(u,u,a[0]),e[r++]=u[0],e[r++]=u[1],e[r++]=u[2];m[p++]=-x[0];m[p++]=-x[1];m[p++]=-x[2];for(B=0;B<d.length;B++)q.push(0<d[B][0]?d[B][0]:-d[B][0]-1+c.length),q.push(0<d[B][1]?d[B][1]:-d[B][1]-1+c.length),q.push(0<d[B][2]?d[B][2]:-d[B][2]-1+c.length),z.push(0),z.push(0),z.push(0);B=c.length;const va=c.length-1;for(let I=0;I<a.length;I++){let na=!1;0<I&&(l.copy(A,
x),I<a.length-1?(l.subtract(x,a[I+1],a[I]),l.normalize(x,x)):na=!0,l.add(K,A,x),l.normalize(K,K),l.add(la,a[I-1],J),aa.fromPositionAndNormal(a[I],K,ma),aa.intersectRay(ma,ra.wrap(la,A),v)?(l.subtract(v,v,a[I]),l.normalize(w,v),l.cross(C,K,w),l.normalize(C,C)):ca(K,J,ba,N,C,w,.99619469809),l.copy(J,w),l.copy(ba,C));f&&(l.add(v,a[I],h),l.normalize(ua,v));for(let L=0;L<g;L++)if(l.scale(u,C,b[L][0]),l.scale(v,w,b[L][1]),l.add(u,u,v),l.normalize(E,u),m[p++]=E[0],m[p++]=E[1],m[p++]=E[2],l.add(u,u,a[I]),
e[r++]=u[0],e[r++]=u[1],e[r++]=u[2],!na){var O=(L+1)%g;q.push(B+L);q.push(B+g+L);q.push(B+O);q.push(B+O);q.push(B+g+L);q.push(B+g+O);for(O=0;6>O;O++)z.push(q[q.length-6+O]-va)}B+=g}b=a[a.length-1];for(a=0;a<c.length;a++)l.scale(u,C,c[a][0]),l.scale(v,w,c[a][1]),l.add(u,u,v),l.add(u,u,b),e[r++]=u[0],e[r++]=u[1],e[r++]=u[2];c=p/3;m[p++]=x[0];m[p++]=x[1];m[p++]=x[2];g=B-g;for(p=0;p<d.length;p++)q.push(0<=d[p][0]?B+d[p][0]:-d[p][0]-1+g),q.push(0<=d[p][2]?B+d[p][2]:-d[p][2]-1+g),q.push(0<=d[p][1]?B+d[p][1]:
-d[p][1]-1+g),z.push(c),z.push(c),z.push(c);d=[[k.VertexAttribute.POSITION,q],[k.VertexAttribute.NORMAL,z]];e=[[k.VertexAttribute.POSITION,new y.Attribute(e,3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute(m,3,!0)]];return new H.Geometry(n,e,d)}function da(n,b,a,c,d){if(Math.abs(l.dot(b,n))>d)return!1;l.cross(a,n,b);l.normalize(a,a);l.cross(c,a,n);l.normalize(c,c);return!0}function ca(n,b,a,c,d,f,h){return da(n,b,d,f,h)||da(n,a,d,f,h)||da(n,c,d,f,h)}const Q=D.Vec3Compact,ea=[[-.5,-.5,.5],[.5,-.5,
.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],wa=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],xa=[0,0,1,0,1,1,0,1],ya=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],oa=Array(36);for(D=0;6>D;D++)for(var M=0;6>M;M++)oa[6*D+M]=D;const P=Array(36);for(D=0;6>D;D++)P[6*D]=0,P[6*D+1]=1,P[6*D+2]=2,P[6*D+3]=2,P[6*D+4]=3,P[6*D+5]=0;const fa=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],za=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,
-1,1,-1,-1,0],Aa=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Ba=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];D=t.fromValues(-.5,0,-.5);M=t.fromValues(.5,0,-.5);const Y=t.fromValues(0,0,.5),Z=t.fromValues(0,.5,0),R=t.create(),S=t.create(),T=t.create(),U=t.create(),V=t.create();l.subtract(R,D,Z);l.subtract(S,D,M);l.cross(T,R,S);l.normalize(T,T);l.subtract(R,M,Z);l.subtract(S,M,Y);l.cross(U,R,S);l.normalize(U,U);l.subtract(R,Y,Z);l.subtract(S,Y,D);l.cross(V,R,S);l.normalize(V,V);const ha=
[D,M,Y,Z],Ca=[0,-1,0,T[0],T[1],T[2],U[0],U[1],U[2],V[0],V[1],V[2]],Da=[0,1,2,3,1,0,3,2,1,3,0,2],Ea=[0,0,0,1,1,1,2,2,2,3,3,3],Fa=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]],W=t.create();F.cgToGIS=function(n,b=n){var a=n.vertexAttributes;n=a.get(k.VertexAttribute.POSITION).data;if(a=a.get(k.VertexAttribute.NORMAL).data){var c=b.getMutableAttribute(k.VertexAttribute.NORMAL).data;for(let d=0;d<a.length;d+=3){const f=a[d+1];c[d+1]=-a[d+2];c[d+2]=f}}if(n)for(b=b.getMutableAttribute(k.VertexAttribute.POSITION).data,
a=0;a<n.length;a+=3)c=n[a+1],b[a+1]=-n[a+2],b[a+2]=c};F.createBoxGeometry=function(n,b){Array.isArray(b)||(b=[b,b,b]);const a=Array(24);for(let c=0;8>c;c++)a[3*c]=ea[c][0]*b[0],a[3*c+1]=ea[c][1]*b[1],a[3*c+2]=ea[c][2]*b[2];return new H.Geometry(n,[[k.VertexAttribute.POSITION,new y.Attribute(a,3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute(wa,3)],[k.VertexAttribute.UV0,new y.Attribute(xa,2)]],[[k.VertexAttribute.POSITION,ya],[k.VertexAttribute.NORMAL,oa],[k.VertexAttribute.UV0,P]])};F.createConeGeometry=
function(n,b,a,c,d,f=!0,h=!0){let g=0;var e=t.fromValues(0,g,0),m=t.fromValues(0,g+b,0),q=t.fromValues(0,-1,0),z=t.fromValues(0,1,0);d&&(g=b,m=t.fromValues(0,0,0),e=t.fromValues(0,g,0),q=t.fromValues(0,1,0),z=t.fromValues(0,-1,0));e=[m,e];q=[q,z];z=c+2;m=Math.sqrt(b*b+a*a);if(d)for(d=c-1;0<=d;d--){var r=2*Math.PI/c*d,p=t.fromValues(Math.cos(r)*a,g,Math.sin(r)*a);e.push(p);r=t.fromValues(b*Math.cos(r)/m,-a/m,b*Math.sin(r)/m);q.push(r)}else for(d=0;d<c;d++)r=2*Math.PI/c*d,p=t.fromValues(Math.cos(r)*
a,g,Math.sin(r)*a),e.push(p),r=t.fromValues(b*Math.cos(r)/m,a/m,b*Math.sin(r)/m),q.push(r);b=[];a=[];if(f){for(f=3;f<e.length;f++)b.push(1),b.push(f-1),b.push(f),a.push(0),a.push(0),a.push(0);b.push(e.length-1);b.push(2);b.push(1);a.push(0);a.push(0);a.push(0)}if(h){for(h=3;h<e.length;h++)b.push(h),b.push(h-1),b.push(0),a.push(h),a.push(h-1),a.push(1);b.push(0);b.push(2);b.push(e.length-1);a.push(1);a.push(2);a.push(q.length-1)}h=G.newFloatArray(3*z);for(f=0;f<z;f++)h[3*f]=e[f][0],h[3*f+1]=e[f][1],
h[3*f+2]=e[f][2];e=G.newFloatArray(3*z);for(f=0;f<z;f++)e[3*f]=q[f][0],e[3*f+1]=q[f][1],e[3*f+2]=q[f][2];q=[[k.VertexAttribute.POSITION,b],[k.VertexAttribute.NORMAL,a]];e=[[k.VertexAttribute.POSITION,new y.Attribute(h,3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute(e,3,!0)]];return new H.Geometry(n,e,q)};F.createCylinderGeometry=function(n,b,a,c,d,f,h){d=d?t.clone(d):t.fromValues(1,0,0);f=f?t.clone(f):t.fromValues(0,0,0);h=null==h?!0:h;var g=t.create();l.normalize(g,d);var e=t.create();l.scale(e,
g,Math.abs(b));var m=t.create();l.scale(m,e,-.5);l.add(m,m,f);const q=t.fromValues(0,1,0);.2>Math.abs(1-l.dot(g,q))&&l.set(q,0,0,1);const z=t.create();l.cross(z,g,q);l.normalize(z,z);l.cross(q,z,g);const r=2*c+(h?2:0),p=c+(h?2:0);b=G.newFloatArray(3*r);f=G.newFloatArray(3*p);d=G.newFloatArray(2*r);const A=Array(3*c*(h?4:2)),x=Array(3*c*(h?4:2));h&&(b[3*(r-2)]=m[0],b[3*(r-2)+1]=m[1],b[3*(r-2)+2]=m[2],d[2*(r-2)]=0,d[2*(r-2)+1]=0,b[3*(r-1)]=b[3*(r-2)]+e[0],b[3*(r-1)+1]=b[3*(r-2)+1]+e[1],b[3*(r-1)+2]=
b[3*(r-2)+2]+e[2],d[2*(r-1)]=1,d[2*(r-1)+1]=1,f[3*(p-2)]=-g[0],f[3*(p-2)+1]=-g[1],f[3*(p-2)+2]=-g[2],f[3*(p-1)]=g[0],f[3*(p-1)+1]=g[1],f[3*(p-1)+2]=g[2]);g=0;const w=t.create(),J=t.create();for(let v=0;v<c;v++){var C=2*Math.PI/c*v;l.scale(w,q,Math.sin(C));l.scale(J,z,Math.cos(C));l.add(w,w,J);f[3*v]=w[0];f[3*v+1]=w[1];f[3*v+2]=w[2];l.scale(w,w,a);l.add(w,w,m);b[3*v]=w[0];b[3*v+1]=w[1];b[3*v+2]=w[2];d[2*v]=v/c;d[2*v+1]=0;b[3*(v+c)]=b[3*v]+e[0];b[3*(v+c)+1]=b[3*v+1]+e[1];b[3*(v+c)+2]=b[3*v+2]+e[2];
d[2*(v+c)]=v/c;d[2*v+1]=1;C=(v+1)%c;var u=g++,E=v;A[u]=v;x[u]=E;u=g++;E=v;A[u]=v+c;x[u]=E;u=g++;E=C;A[u]=C;x[u]=E;u=g++;E=C;A[u]=C;x[u]=E;u=g++;E=v;A[u]=v+c;x[u]=E;u=g++;E=C;A[u]=C+c;x[u]=E}if(h){for(a=0;a<c;a++)h=(a+1)%c,e=g++,m=p-2,A[e]=r-2,x[e]=m,e=g++,m=p-2,A[e]=a,x[e]=m,e=g++,m=p-2,A[e]=h,x[e]=m;for(a=0;a<c;a++)h=(a+1)%c,e=g++,m=p-1,A[e]=a+c,x[e]=m,e=g++,m=p-1,A[e]=r-1,x[e]=m,e=g++,m=p-1,A[e]=h+c,x[e]=m}c=[[k.VertexAttribute.POSITION,A],[k.VertexAttribute.NORMAL,x],[k.VertexAttribute.UV0,A]];
b=[[k.VertexAttribute.POSITION,new y.Attribute(b,3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute(f,3,!0)],[k.VertexAttribute.UV0,new y.Attribute(d,2,!0)]];return new H.Geometry(n,b,c)};F.createDiamondGeometry=function(n,b){Array.isArray(b)||(b=[b,b,b]);const a=Array(18);for(let c=0;6>c;c++)a[3*c]=fa[c][0]*b[0],a[3*c+1]=fa[c][1]*b[1],a[3*c+2]=fa[c][2]*b[2];return new H.Geometry(n,[[k.VertexAttribute.POSITION,new y.Attribute(a,3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute(za,3)]],[[k.VertexAttribute.POSITION,
Aa],[k.VertexAttribute.NORMAL,Ba]])};F.createExtrudedTriangle=function(n,b,a,c,d,f=0){const h=Array(18);b=[[-a,f,d/2],[c,f,d/2],[0,b+f,d/2],[-a,f,-d/2],[c,f,-d/2],[0,b+f,-d/2]];for(a=0;6>a;a++)h[3*a]=b[a][0],h[3*a+1]=b[a][1],h[3*a+2]=b[a][2];return new H.Geometry(n,[[k.VertexAttribute.POSITION,new y.Attribute(h,3,!0)]],[[k.VertexAttribute.POSITION,[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5]]])};F.createPathExtrusionGeometry=ka;F.createPointGeometry=function(n,b,a,c,d,f,h,g,e=null){a=a?[a[0],
a[1],a[2]]:[0,0,0];b=b?[b[0],b[1],b[2]]:[0,0,1];h=h||[0,0];c=c?[255*c[0],255*c[1],255*c[2],3<c.length?255*c[3]:255]:[255,255,255,255];d=pa.isSome(d)&&2===d.length?d:[1,1];h=[[k.VertexAttribute.POSITION,new y.Attribute(a,3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute(b,3,!0)],[k.VertexAttribute.UV0,new y.Attribute(h,h.length)],[k.VertexAttribute.COLOR,new y.Attribute(c,4,!0)],[k.VertexAttribute.SIZE,new y.Attribute(d,2)]];null!=f&&h.push([k.VertexAttribute.AUXPOS1,new y.Attribute([f[0],f[1],f[2],
f[3]],4)]);null!=g&&h.push([k.VertexAttribute.AUXPOS2,new y.Attribute([g[0],g[1],g[2],g[3]],4)]);return new H.Geometry(n,h,null,null,ia.ContentObjectType.Point,e)};F.createPolySphereData=ja;F.createPolySphereGeometry=function(n,b,a,c){const {vertexAttributes:d,indices:f}=ja(b,a,c);return new H.Geometry(n,d,f)};F.createPolylineGeometry=function(n,b,a,c){X.assert(1<b.length,"createPolylineGeometry(): polyline needs at least 2 points");X.assert(3===b[0].length,"createPolylineGeometry(): malformed vertex");
X.assert(null==a||a.length===b.length,"createPolylineGeometry: need same number of points and normals");X.assert(null==a||3===a[0].length,"createPolylineGeometry(): malformed normal");var d=sa.newDoubleArray(3*b.length);const f=Array(2*(b.length-1));var h=0,g=0;for(var e=0;e<b.length;e++){for(var m=0;3>m;m++)d[h++]=b[e][m];0<e&&(f[g++]=e-1,f[g++]=e)}h=[];g=[];h.push([k.VertexAttribute.POSITION,f]);g.push([k.VertexAttribute.POSITION,new y.Attribute(d,3,!0)]);if(a){d=G.newFloatArray(3*a.length);e=0;
for(m=0;m<b.length;m++)for(let q=0;3>q;q++)d[e++]=a[m][q];h.push([k.VertexAttribute.NORMAL,f]);g.push([k.VertexAttribute.NORMAL,new y.Attribute(d,3,!0)])}c&&(g.push([k.VertexAttribute.COLOR,new y.Attribute(c,4)]),h.push([k.VertexAttribute.COLOR,ta.generateDefaultIndexArray(c.length/4)]));return new H.Geometry(n,g,h,null,ia.ContentObjectType.Line)};F.createSphereGeometry=function(n,b,a,c,d={uv:!0}){var f=-Math.PI,h=2*Math.PI,g=-Math.PI/2,e=Math.PI;a=Math.max(3,Math.floor(a));const m=Math.max(2,Math.floor(c));
var q=(a+1)*(m+1);c=G.newFloatArray(3*q);const z=G.newFloatArray(3*q);q=G.newFloatArray(2*q);const r=[];var p=0;for(var A=0;A<=m;A++){const w=[],J=A/m,C=g+J*e,u=Math.cos(C);for(let E=0;E<=a;E++){const v=E/a;var x=f+v*h;const N=Math.cos(x)*u,K=Math.sin(C);x=-Math.sin(x)*u;c[3*p]=N*b;c[3*p+1]=K*b;c[3*p+2]=x*b;z[3*p]=N;z[3*p+1]=K;z[3*p+2]=x;q[2*p]=v;q[2*p+1]=J;w.push(p);++p}r.push(w)}b=[];for(f=0;f<m;f++)for(h=0;h<a;h++)g=r[f][h],e=r[f][h+1],p=r[f+1][h+1],A=r[f+1][h],0===f?(b.push(g),b.push(p),b.push(A)):
f===m-1?(b.push(g),b.push(e),b.push(p)):(b.push(g),b.push(e),b.push(p),b.push(p),b.push(A),b.push(g));a=[[k.VertexAttribute.POSITION,b],[k.VertexAttribute.NORMAL,b]];c=[[k.VertexAttribute.POSITION,new y.Attribute(c,3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute(z,3,!0)]];d.uv&&(c.push([k.VertexAttribute.UV0,new y.Attribute(q,2,!0)]),a.push([k.VertexAttribute.UV0,b]));d.offset&&(a[0][0]=k.VertexAttribute.OFFSET,c[0][0]=k.VertexAttribute.OFFSET,a.push([k.VertexAttribute.POSITION,Array(b.length).fill(0)]),
c.push([k.VertexAttribute.POSITION,new y.Attribute(Float64Array.from(d.offset),3,!0)]));return new H.Geometry(n,c,a)};F.createSquareGeometry=function(n,b=Fa){var a=Array(12);for(var c=0;4>c;c++)for(let d=0;3>d;d++)a[3*c+d]=b[c][d];b=[0,1,2,2,3,0];c=[0,0,0,0,0,0];b=[[k.VertexAttribute.POSITION,b],[k.VertexAttribute.NORMAL,c],[k.VertexAttribute.UV0,b],[k.VertexAttribute.COLOR,c]];a=[[k.VertexAttribute.POSITION,new y.Attribute(a,3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute([0,0,1],3,!0)],[k.VertexAttribute.UV0,
new y.Attribute([0,0,1,0,1,1,0,1],2,!0)],[k.VertexAttribute.COLOR,new y.Attribute([255,255,255,255],4,!0)]];return new H.Geometry(n,a,b)};F.createTetrahedronGeometry=function(n,b){Array.isArray(b)||(b=[b,b,b]);const a=Array(12);for(let c=0;4>c;c++)a[3*c]=ha[c][0]*b[0],a[3*c+1]=ha[c][1]*b[1],a[3*c+2]=ha[c][2]*b[2];return new H.Geometry(n,[[k.VertexAttribute.POSITION,new y.Attribute(a,3,!0)],[k.VertexAttribute.NORMAL,new y.Attribute(Ca,3)]],[[k.VertexAttribute.POSITION,Da],[k.VertexAttribute.NORMAL,
Ea]])};F.createTubeGeometry=function(n,b,a,c,d,f){c=c||10;d=null!=d?d:!0;X.assert(1<b.length);const h=[],g=[];for(let e=0;e<c;e++){h.push([0,-e-1,-((e+1)%c)-1]);const m=e/c*2*Math.PI;g.push([Math.cos(m)*a,Math.sin(m)*a])}return ka(n,g,b,[[0,0,0]],h,d,f)};F.makeOrthoBasisDirUpFallback=ca;F.transformInPlace=function(n,b){n=n.getMutableAttribute(k.VertexAttribute.POSITION).data;for(let a=0;a<n.length;a+=3)l.set(W,n[a],n[a+1],n[a+2]),l.transformMat4(W,W,b),n[a]=W[0],n[a+1]=W[1],n[a+2]=W[2]};Object.defineProperty(F,
Symbol.toStringTag,{value:"Module"})});