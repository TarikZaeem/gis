// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../core/mathUtils ../../../core/maybe ../../../chunks/vec4 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ./ElevationData ./interfaces ./PatchGeometry ./PatchGeometryLUT ./PatchRenderData ./terrainUtils ./Tile ./tileUtils".split(" "),function(lb,U,La,Kc,Zb,Lc,ia,qb,Y,Mc,$b,I,ac,Ab){function Nc(a){if(a.tile.intersectsClippingArea){var k=a.geometryState,v=k.numVerticesPerSide;const J=v-2;--v;var E=a.geometryInfo,l=E.vertexAttributes,r=l.position;
const T=l.uv0;l=l.normalCompressed;var F=a.tile,f=F.extent;const Z=f[0],ca=f[2],fa=f[1];f=f[3];F=F.ellipsoid.radius;k=k.samplerData;var B=a.localOrigin;a=B[0];const X=B[1];B=B[2];const W=r.typedBuffer;r=r.typedBufferStride;const aa=1/v;E=E.boundingBox;let da=0;if(1<=J){var z=fa*(1-aa)+f*aa,O=pa.sinLatLUT[1],K=pa.cosLatLUT[1];for(var G=1;G<=J;G++){var M=G*aa,w=pa.sinLonLUT[G],t=pa.cosLonLUT[G],S=F+ia.sampleElevation(Z*(1-M)+ca*M,z,k);t=-a+S*t*K;w=-X+S*w*K;S=-B+S*O;Y.minMaxBoundingBox(t,w,S,E);var P=
(G-1)*r;W[P]=t;W[P+1]=w;W[P+2]=S;Y.encodeUVInBuffer(T,G-1,M,aa)}}for(z=1;z<=J;z++){O=z*aa;O=fa*(1-O)+f*O;K=pa.sinLatLUT[z];G=pa.cosLatLUT[z];w=z+1;M=w*aa;t=fa*(1-M)+f*M;S=pa.sinLatLUT[w];w=pa.cosLatLUT[w];var Q=pa.sinLonLUT[0];P=pa.cosLonLUT[0];var n=F+ia.sampleElevation(Z,O,k);P=P*G*n-a;Q=Q*G*n-X;n=K*n-B;var d=da*r;let la=W[d],na=W[d+1];d=W[d+2];for(let ha=1;ha<=J;ha++){var h=ha*aa,m=Z*(1-h)+ca*h,p=pa.sinLonLUT[ha],e=pa.cosLonLUT[ha];let ma=e*G,qa=p*G,c=K;var g=0,x=0,y=0;y=x=g=0;ha<J?(y=(da+1)*r,
g=W[y],x=W[y+1],y=W[y+2]):(x=pa.sinLonLUT[v],g=pa.cosLonLUT[v],y=F+ia.sampleElevation(ca,O,k),g=g*G*y-a,x=x*G*y-X,y=K*y-B);var q=P,A=Q,L=n;P=la;Q=na;n=d;la=g;na=x;d=y;g-=q;x-=A;y-=L;q=A=L=0;if(1<z)q=(da-J)*r,L=W[q],A=W[q+1],q=W[q+2];else{q=pa.sinLatLUT[0];A=pa.cosLatLUT[0];var b=F+ia.sampleElevation(m,fa,k);L=e*A*b-a;A=p*A*b-X;q=q*b-B}m=F+ia.sampleElevation(m,t,k);e=e*w*m-a;p=p*w*m-X;m=S*m-B;if(z<J){b=da+J;const H=b*r;W[H]=e;W[H+1]=p;W[H+2]=m;Y.minMaxBoundingBox(e,p,m,E);Y.encodeUVInBuffer(T,b,h,
M)}h=L-e;p=A-p;e=q-m;.999>c*c&&(ma=y*p-x*e,qa=g*e-y*h,c=x*h-g*p);h=1/Math.sqrt(ma*ma+qa*qa+c*c);Y.encodeNormalToBufferFromValues(l,da,ma*h,qa*h,c*h);++da}}}}function bc(a){a.tile.intersectsClippingArea&&(Bb(a),cc(a))}function cc(a,k=!1){var v=a.geometryState;const E=a.geometryInfo,l=v.neighborData,r=a.tile,F=r.level,f=r.extent,B=r.ellipsoid.radius;var z=r.extentInRadians;const O=z[0],K=z[2],G=z[1];z=z[3];const M=v.samplerData,w=f[0],t=f[2],S=f[1],P=f[3],Q=Gb(a),n=E.boundingBox;v=a.localOrigin;const d=
v[0],h=v[1],m=v[2];v=r.surface.shading||!0;var p=E.vertexAttributes,e=p.position;const g=e.typedBuffer,x=e.typedBufferStride,y=p.uv0;for(let L=0;4>L;++L){const b=1===L||3===L;p=l.edgeResolutions[L];I.internalAssert(U.isPowerOfTwo(p));const J=p+1;var q=$b.neighborTileIfLoadedOrSelf(r,l.edgePeerNeighbors[L]);if(dc(r,q,L)){ec(a,L,q);continue}const T=La.isSome(q);I.internalAssert(!T||q.level===r.level);I.internalAssert(!T||0>=Ab.compareTilesByLij(r,q));e=q?.renderData?.geometryState;if(I.ENABLE_TERRAIN_INTERNAL_CHECKS){var A=
r.surface;if(!q&&A&&!A.updatingRootTiles){const u=I.neighborEdgeIndices[L],R=r.findNeighborTile(u,ea=>ea.isLoaded||ea.isLeaf||ea.level===r.level);R?R.intersectsClippingArea&&(I.internalAssert(!R.isLoaded),I.internalAssert(!R.isLeaf),I.internalAssert(R.level===F)):I.internalAssert(La.isNone(A?.rootTiles)||!r.shouldHaveNeighbor(u))}}const Z=1===L?f[2]:f[0],ca=(q=q?.extent)&&b?1===L?q[0]:q[2]:Z,fa=0===L?f[3]:f[1],X=1===L?1:0,W=0===L?1:0,aa=1===L?K:O,da=0===L?z:G,la=Math.sin(aa),na=Math.cos(aa),ha=Math.sin(da),
ma=Math.cos(da),qa=e?.samplerData;e=(u,R,ea)=>ia.sampleElevation(u,R,M);A=(u,R,ea)=>.5*(ia.sampleElevation(u,R,M)+ia.sampleElevation(ea,R,qa));const c=T?A:e,H=E.outerEdges[L],N=k&&3<J?J-3:1;e=La.isSome(M)&&M.some(u=>null!=u);A=La.isSome(qa)&&qa.some(u=>null!=u);const V=e||A,C=1/p,D=H.index0;v?(I.internalAssert(!q||I.almostEquals(q[2]-q[0],f[2]-f[0])),(()=>{const u=1===L?-1:3===L?1:0,R=0===L?-1:2===L?1:0,ea=(f[2]-f[0])*C,ba=u*ea,wa=R*ea,oa=K-O,ra=b?u*oa*C:0,sa=b?0:R*C,ta=W,Za=b?aa+ra:aa,xa=b?Math.sin(Za):
la,ua=b?Math.cos(Za):na,Ea=b?aa-ra:aa,ya=b?Math.sin(Ea):la,Aa=b?Math.cos(Ea):na,Ba=b?da:Q(ta+sa),Ca=b?ha:Math.sin(Ba),Wa=b?ma:Math.cos(Ba),Ka=b?da:Q(ta-sa),Ma=b?ha:Math.sin(Ka),Fa=b?ma:Math.cos(Ka);let Ga=0,Ha=0,Ia=0;const ja=0*C,db=b?Z:w*(1-ja)+t*ja,gb=b?ca:db,hb=b?S*(1-ja)+P*ja:fa,$a=b?aa:O*(1-ja)+K*ja,eb=b?la:Math.sin($a),ab=b?na:Math.cos($a),Xa=b?Q(ja):da,bb=b?Math.sin(Xa):ha,fb=b?Math.cos(Xa):ma,Pa=B+c(db,hb,gb);Ga=ab*fb*Pa;Ha=eb*fb*Pa;Ia=bb*Pa;let Qa=0,Na=0,Ra=0;const va=1*C,Oa=b?Z:w*(1-va)+
t*va,Ja=b?ca:Oa,Da=b?S*(1-va)+P*va:fa,za=b?aa:O*(1-va)+K*va,Sa=b?la:Math.sin(za),ka=b?na:Math.cos(za),Ta=b?Q(va):da,Ua=b?Math.sin(Ta):ha,mb=b?Math.cos(Ta):ma,ib=B+c(Oa,Da,Ja);Qa=ka*mb*ib;Na=Sa*mb*ib;Ra=Ua*ib;for(let Va=1;Va<J-1;Va+=N){let nb=0,jb=0,cb=0;const Ya=(Va+1)*C,kb=b?Z:w*(1-Ya)+t*Ya,rb=b?ca:kb,wb=b?S*(1-Ya)+P*Ya:fa,ob=b?aa:O*(1-Ya)+K*Ya,Cb=b?la:Math.sin(ob),Oc=b?na:Math.cos(ob),fc=b?Q(Ya):da,Pc=b?Math.sin(fc):ha,gc=b?Math.cos(fc):ma,Hb=B+c(kb,wb,rb);nb=Oc*gc*Hb;jb=Cb*gc*Hb;cb=Pc*Hb;const hc=
nb,ic=jb,jc=cb,Ib=Qa,Jb=Na,Kb=Ra;Qa=hc;Na=ic;Ra=jc;const kc=D+Va,Lb=kc*x,lc=Ib-d,mc=Jb-h,nc=Kb-m;g[Lb]=lc;g[Lb+1]=mc;g[Lb+2]=nc;Y.minMaxBoundingBox(lc,mc,nc,n);const oc=Va*C;Y.encodeUVInBuffer(y,kc,b?X:oc,b?oc:W);const Qc=Ga,Rc=Ha,Sc=Ia;Ga=Ib;Ha=Jb;Ia=Kb;const xb=Ib,yb=Jb,sb=Kb,Db=1/Math.sqrt(xb*xb+yb*yb+sb*sb),pc=sb*Db;let tb=0,ub=0,vb=0;if(V&&.999>pc*pc){let Mb=0,Nb=0,Ob=0;const Pb=0===L?-1:1;Mb=Pb*(hc-Qc);Nb=Pb*(ic-Rc);Ob=Pb*(jc-Sc);const pb=Va*C,qc=b?Z:w*(1-pb)+t*pb,Tc=b?ca:qc,rc=b?S*(1-pb)+P*
pb:fa,sc=b?aa:O*(1-pb)+K*pb,tc=b?la:Math.sin(sc),uc=b?na:Math.cos(sc),vc=b?Q(pb):da,wc=b?Math.sin(vc):ha,xc=b?Math.cos(vc):ma;let Qb=xb,Rb=yb,Sb=sb;if(T){const Tb=B+ia.sampleElevation(Tc-ba,rc-wa,qa),Uc=b?ya:tc,Vc=b?wc:Ma,yc=b?xc:Fa;Qb=(b?Aa:uc)*yc*Tb;Rb=Uc*yc*Tb;Sb=Vc*Tb}const Ub=B+ia.sampleElevation(qc+ba,rc+wa,M),zc=b?xc:Wa,Ac=(b?ua:uc)*zc*Ub,Bc=(b?xa:tc)*zc*Ub,Cc=(b?wc:Ca)*Ub;T||(Qb=2*xb-Ac,Rb=2*yb-Bc,Sb=2*sb-Cc);const Vb=3===L?-1:1,Dc=Vb*(Qb-Ac),Ec=Vb*(Rb-Bc),Fc=Vb*(Sb-Cc);tb=Ob*Ec-Nb*Fc;ub=
Mb*Fc-Ob*Dc;vb=Nb*Dc-Mb*Ec;const Wb=1/Math.sqrt(tb*tb+ub*ub+vb*vb);tb*=Wb;ub*=Wb;vb*=Wb}else tb=xb*Db,ub=yb*Db,vb=sb*Db;H.setNormalFromValues(Va,tb,ub,vb)}})()):(()=>{for(let ra=1;ra<J-1;ra+=N){var u=ra*C;const sa=b?X:u,ta=b?u:W;var R=b?Z:w*(1-u)+t*u,ea=b?S*(1-u)+P*u:fa;const Za=b?ca:R;var ba=b?aa:O*(1-u)+K*u,wa=b?la:Math.sin(ba);ba=b?na:Math.cos(ba);var oa=b?Q(u):da;u=b?Math.sin(oa):ha;oa=b?Math.cos(oa):ma;R=c(R,ea,Za);R=B+R;ba=ba*oa*R-d;wa=wa*oa*R-h;u=u*R-m;Y.minMaxBoundingBox(ba,wa,u,n);R=D+ra;
ea=R*x;g[ea]=ba;g[ea+1]=wa;g[ea+2]=u;Y.encodeUVInBuffer(y,R,sa,ta)}})()}}function Gb(a){a=a.tile;if(a.surface.isWebMercator){const v=a.extent,E=a.ellipsoid.radius;return l=>Math.PI/2-2*Math.atan(Math.exp(-(v[1]*(1-l)+v[3]*l)/E))}const k=a.extentInRadians;return v=>k[1]*(1-v)+k[3]*v}function Wc(a){const k=a.tile;if(k.intersectsClippingArea)if(k.surface.shading){{const v=a.tile,E=a.geometryState,l=E.samplerData,r=a.localOrigin,F=v.surface.isWebMercatorOnPlateeCarree,f=E.clippingArea,B=La.isSome(f)?
f:Eb,z=v.extent,O=z[0],K=z[1],G=z[2],M=z[3],w=Math.max(O,B[0]),t=Math.min(G,B[2]),S=Math.max(K,B[1]),P=Math.min(M,B[3]),Q=v.ellipsoid.radius,n=v.horizontalScale,d=E.numVerticesPerSide,h=d-1,m=d-2,p=a.geometryInfo,e=p.vertexAttributes,g=e.position,x=e.uv0,y=e.normalCompressed,q=p.uvRange,A=q[0],L=q[1],b=q[2],J=q[3],T=p.boundingBox,Z=r[0],ca=r[1],fa=r[2],X=g.typedBuffer,W=g.typedBufferStride;let aa=0;const da=U.clamp(K,S,P),la=F?(Math.PI/2-2*Math.atan(Math.exp(-da/Q)))*Q:da*n,na=1/h,ha=U.clamp(K*(1-
na)+M*na,S,P);let ma=la,qa=F?(Math.PI/2-2*Math.atan(Math.exp(-ha/Q)))*Q:ha*n;for(let c=1;c<=m;c++){const H=c/h,N=U.clamp(K*(1-H)+M*H,S,P),V=U.clamp(H,L,J),C=qa,D=(c-1)/h,u=U.clamp(K*(1-D)+M*D,S,P),R=ma,ea=(c+1)/h,ba=U.clamp(K*(1-ea)+M*ea,S,P),wa=F?(Math.PI/2-2*Math.atan(Math.exp(-ba/Q)))*Q:ba*n,oa=U.clamp(ea,L,J);ma=qa;qa=wa;const ra=U.clamp(O,w,t);let sa=ra*n,ta=ia.sampleElevation(ra,N,l);const Za=1/h,xa=U.clamp(Za,A,b),ua=U.clamp(O*(1-xa)+G*xa,w,t);let Ea=xa,ya=ua,Aa=ua*n,Ba=ia.sampleElevation(ua,
N,l);if(1===c){const Ca=Aa-Z,Wa=ma-ca,Ka=Ba-fa,Ma=0*W;X[Ma]=Ca;X[Ma+1]=Wa;X[Ma+2]=Ka;Y.minMaxBoundingBox(Ca,Wa,Ka,T);const Fa=U.clamp(Za,A,b);Y.encodeUVInBuffer(x,aa,Fa,V)}for(let Ca=1;Ca<=m;Ca++){const Wa=Aa,Ka=Ba,Ma=(Ca+1)/h,Fa=U.clamp(Ma,A,b),Ga=U.clamp(O*(1-Ma)+G*Ma,w,t),Ha=ya;ya=Ga;const Ia=aa+1,ja=Ia*W;if(1===c||Ca===m){const va=ia.sampleElevation(Ga,N,l),Oa=Ga*n,Ja=C,Da=va;if(1===c&&Ca<m){const za=Oa-Z,Sa=Ja-ca,ka=Da-fa;X[ja]=za;X[ja+1]=Sa;X[ja+2]=ka;Y.minMaxBoundingBox(za,Sa,ka,T);Y.encodeUVInBuffer(x,
Ia,Fa,V)}Aa=Oa;Ba=Da}else Aa=X[ja]+Z,Ba=X[ja+2]+fa;const db=Aa,gb=Ba,hb=sa,$a=ta;sa=Wa;ta=Ka;const eb=(aa-m)*W,ab=1===c?ia.sampleElevation(Ha,u,l):X[eb+2]+fa,Xa=ia.sampleElevation(Ha,ba,l);if(c<m){const va=aa+m,Oa=va*W,Ja=Wa-Z,Da=wa-ca,za=Xa-fa;X[Oa]=Ja;X[Oa+1]=Da;X[Oa+2]=za;Y.minMaxBoundingBox(Ja,Da,za,T);const Sa=Ea;Ea=Fa;Y.encodeUVInBuffer(x,va,Sa,oa)}const bb=db-hb,fb=R-wa,Pa=fb*(gb-$a),Qa=bb*(ab-Xa),Na=-fb*bb,Ra=Pa*Pa+Qa*Qa+Na*Na;if(0===Ra)Y.encodeNormalToBufferFromValues(y,aa,0,0,1);else{const va=
1/Math.sqrt(Ra);Y.encodeNormalToBufferFromValues(y,aa,Pa*va,Qa*va,Na*va)}++aa}}}}else{const v=a.geometryState,E=v.samplerData,l=a.tile,r=a.localOrigin,F=l.surface.isWebMercatorOnPlateeCarree,f=v.clippingArea,B=La.isSome(f)?f:Eb,z=l.extent,O=z[0],K=z[1],G=z[2],M=z[3],w=Math.max(O,B[0]),t=Math.min(G,B[2]),S=Math.max(K,B[1]),P=Math.min(M,B[3]),Q=r[0],n=r[1],d=r[2],h=l.horizontalScale,m=Xb(F,l.ellipsoid.radius,h),p=v.numVerticesPerSide,e=p-1,g=p-2,x=a.geometryInfo,y=x.uvRange,q=y[0],A=y[1],L=y[2],b=y[3],
J=x.boundingBox,T=x.vertexAttributes,Z=T.position,ca=T.uv0;let fa=0;for(let X=1;X<=g;X++){const W=X/e,aa=U.clamp(K*(1-W)+M*W,S,P),da=U.clamp(W,A,b),la=m(aa)-n;for(let na=1;na<=g;na++){const ha=na/e,ma=U.clamp(O*(1-ha)+G*ha,w,t),qa=U.clamp(ha,q,L),c=ia.sampleElevation(ma,aa,E),H=ma*h-Q,N=c-d;Y.minMaxBoundingBox(H,la,N,J);Z.setValues(fa,H,la,N);Y.encodeUVInBuffer(ca,fa,qa,da);++fa}}}}function Gc(a,k){a.tile.intersectsClippingArea&&(Bb(a),Hc(a,!1))}function Hc(a,k){const v=a.geometryState,E=v.neighborData,
l=a.tile,r=l.surface,F=r.shading||!0,f=l.extent,B=v.clippingArea,z=La.isSome(B)?B:Eb,O=f[0],K=f[2],G=f[1],M=f[3],w=[M>z[3],K>z[2],G<z[1],O<z[0]],t=a.geometryInfo,S=l.horizontalScale,P=Xb(r.isWebMercatorOnPlateeCarree,l.ellipsoid.radius,S),Q=t.boundingBox,n=t.uvRange[0],d=t.uvRange[1],h=t.uvRange[2],m=t.uvRange[3],p=Math.max(O,z[0]),e=Math.min(K,z[2]),g=Math.max(G,z[1]),x=Math.min(M,z[3]),y=a.localOrigin,q=y[0],A=y[1],L=y[2],b=v.samplerData;for(let J=0;4>J;++J){const T=1===J||3===J,Z=E.edgeResolutions[J];
I.internalAssert(U.isPowerOfTwo(Z));const ca=Z+1,fa=w[J],X=$b.neighborTileIfLoadedOrSelf(l,E.edgePeerNeighbors[J]);if(!fa&&dc(l,X,J)){ec(a,J,X);continue}const W=La.isSome(X)&&!fa,aa=X?.renderData?.geometryState;if(I.ENABLE_TERRAIN_INTERNAL_CHECKS&&(I.internalAssert(!W||X.level===l.level),I.internalAssert(!W||0>=Ab.compareTilesByLij(l,X)),l&&!X&&!r.updatingRootTiles)){const C=I.neighborEdgeIndices[J],D=l.findNeighborTile(C,u=>u.isLoaded||u.isLeaf||u.level===l.level);r.updatingRootTiles||(D?D.intersectsClippingArea&&
(I.internalAssert(!D.isLoaded),I.internalAssert(!D.isLeaf),I.internalAssert(D.level===l.level)):I.internalAssert(La.isNone(r?.rootTiles)||!l.shouldHaveNeighbor(C)))}const da=U.clamp(1===J?K:O,p,e),la=U.clamp(0===J?M:G,g,x),na=aa?.samplerData,ha=t.outerEdges[J],ma=k&&3<ca?ca-3:1,qa=U.clamp(1===J?1:0,n,h),c=U.clamp(0===J?1:0,d,m),H=(C,D)=>ia.sampleElevation(C,D,b),N=(C,D)=>.5*(ia.sampleElevation(C,D,na)+ia.sampleElevation(C,D,b)),V=W?N:H;if(F){const C=(K-O)/Z,D=T?1===J?C:-C:0,u=T?0:0===J?C:-C,R=-D,
ea=-u;let ba=0,wa=0,oa=0;const ra=0/Z,sa=T?da:U.clamp(O*(1-ra)+K*ra,p,e),ta=T?U.clamp(G*(1-ra)+M*ra,g,x):la,Za=V(sa,ta);ba=sa*S;wa=P(ta);oa=Za;let xa=0,ua=0,Ea=0;const ya=1/Z,Aa=T?da:U.clamp(O*(1-ya)+K*ya,p,e),Ba=T?U.clamp(G*(1-ya)+M*ya,g,x):la,Ca=V(Aa,Ba),Wa=Aa*S,Ka=P(Ba),Ma=Ca;xa=Wa;ua=Ka;Ea=Ma;for(let Fa=1;Fa<ca-1;Fa+=ma){const Ga=Fa/Z,Ha=xa,Ia=ua,ja=Ea,db=T?qa:U.clamp(Ga,n,h),gb=T?U.clamp(Ga,d,m):c,hb=Ha-q,$a=Ia-A,eb=ja-L;Y.minMaxBoundingBox(Ha,$a,eb,Q);ha.setVertexFromValuesRawPositionUV(Fa,
hb,$a,eb,db,gb);const ab=(Fa+1)/Z,Xa=T?da:U.clamp(O*(1-ab)+K*ab,p,e),bb=T?U.clamp(G*(1-ab)+M*ab,g,x):la,fb=V(Xa,bb);xa=Xa*S;ua=P(bb);Ea=fb;const Pa=xa,Qa=ua,Na=Ea,Ra=ba,va=wa,Oa=oa;ba=Ha;wa=Ia;oa=ja;let Ja=0,Da=0,za=0;if(T){const ka=Qa-Ia,Ta=Na-ja,Ua=va-Ia,mb=Oa-ja,ib=U.clamp(G*(1-Ga)+M*Ga,g,x),Va=da+R,nb=Va*S,jb=ia.sampleElevation(Va,ib,b),cb=nb-Ha,Ya=jb-ja,kb=3===J?-1:1;Ja=kb*(-Ua+ka)*Ya;Da=kb*cb*(-mb+Ta);za=-kb*cb*(-Ua+ka);if(W){const rb=da+D,wb=rb*S,ob=ia.sampleElevation(rb,ib,na),Cb=wb-Ha;Ja=
(-Ua+ka)*(Ya-(ob-ja));Da=(cb-Cb)*(-mb+Ta);za=-(cb-Cb)*(-Ua+ka)}}else{const ka=Pa-Ha,Ta=Na-ja,Ua=Ra-Ha,mb=Oa-ja,ib=U.clamp(O*(1-Ga)+K*Ga,p,e),Va=la+ea,nb=ia.sampleElevation(ib,Va,b)-ja,jb=P(Va)-Ia,cb=2===J?-1:1;Ja=cb*jb*(-mb+Ta);Da=cb*(-Ua+ka)*nb;za=-cb*jb*(-Ua+ka);if(W){const Ya=ib,kb=la+u,rb=P(kb),wb=ia.sampleElevation(Ya,kb,na)-ja,ob=rb-Ia;Ja=(-jb+ob)*(-mb+Ta);Da=(-Ua+ka)*(-nb+wb);za=-(-jb+ob)*(-Ua+ka)}}const Sa=1/Math.sqrt(Ja*Ja+Da*Da+za*za);ha.setNormalFromValues(Fa,Ja*Sa,Da*Sa,za*Sa)}}else for(let C=
1;C<ca-1;C+=ma){const D=C/Z,u=T?da:U.clamp(O*(1-D)+K*D,p,e),R=T?U.clamp(G*(1-D)+M*D,g,x):la,ea=T?qa:U.clamp(D,n,h),ba=T?U.clamp(D,d,m):c,wa=V(u,R),oa=u*S-q,ra=P(R)-A,sa=wa-L;Y.minMaxBoundingBox(oa,ra,sa,Q);ha.setVertexFromValuesRawPositionUV(C,oa,ra,sa,ea,ba)}}}function Xb(a,k,v){return a?E=>(Math.PI/2-2*Math.atan(Math.exp(-E/k)))*k:E=>E*v}function Ic(a,k,v,E,l,r){const F=k-1,f=a.vertexAttributes.count,B=2*(Math.min(k-2,E[1])-Math.max(1,E[0]))*(Math.min(k-2,l[1])-Math.max(1,l[0])),z=I.neighborEdgeIndices.map((n,
d)=>0===d&&l[1]<k-2||1===d&&E[1]<k-2||2===d&&1<l[0]||3===d&&1<E[0]),O=a.outerEdges.reduce((n,d,h)=>n+(z[h]?0:F-2+d.count-1),0),K=v.reduce((n,d)=>n+F*(2*(d.latitudeResolution-1)+1),0),G=r?2:1,M=3*(B+O+K)*G,w=65536<=f?new Uint32Array(M):new Uint16Array(M);let t=0;const S=k-2,P=F-2;I.internalAssert(0<=P);const Q=(n,d,h,m,p,e)=>{var g=n*p;n=e[g];const x=e[g+1];g=e[g+2];var y=d*p;d=e[y];const q=e[y+1];y=e[y+2];var A=h*p;h=e[A];const L=e[A+1];A=e[A+2];const b=m*p;m=e[b];p=e[b+1];e=e[b+2];return(d-m)*(d-
m)+(q-p)*(q-p)+(y-e)*(y-e)>(n-h)*(n-h)+(x-L)*(x-L)+(g-A)*(g-A)};if(r){const n=(d,h,m)=>{w[t++]=d;w[t++]=h;w[t++]=h;w[t++]=m;w[t++]=m;w[t++]=d;I.ENABLE_TERRAIN_INTERNAL_CHECKS&&(I.internalAssert(d<f),I.internalAssert(h<f),I.internalAssert(m<f),I.internalAssert(t<=M))};(()=>{for(let d=Math.max(l[0],1)-1;d<Math.min(l[1],k-2)-1;++d){const h=d*S;for(let m=Math.max(E[0],1)-1;m<Math.min(E[1],k-2)-1;++m){const p=d*S+m,e=p+1,g=e+S,x=g-1,y=h+m,q=y+1,A=q+S;Q(y,q,A,A-1,a.vertexAttributes.position.typedBufferStride,
a.vertexAttributes.position.typedBuffer)?(n(p,e,g),n(g,x,p)):(n(p,e,x),n(x,g,e))}}})();I.internalAssert(t===3*B*G);(()=>{for(let h=0;4>h;++h){const m=t;if(z[h])continue;const p=a.outerEdges[h],e=a.innerEdges[h];let g=0,x=0;const y=p.count,q=e.count;I.internalAssert(q===F-1);let A=0;const L=1===h||2===h?(b,J,T)=>n(b,J,T):(b,J,T)=>n(b,T,J);for(;g<y-1||x<q-1;){const b=e.getVertexIndex(x),J=p.getVertexIndex(g);var d=g<y-1;const T=x<q-1,Z=d?F*(g+.5)/(y-1):0,ca=T?1+P*(x+.5)/(q-1):0;d&&(!T||Z<=ca)?(++g,
I.ENABLE_TERRAIN_INTERNAL_CHECKS&&I.internalAssert(g<y),d=p.getVertexIndex(g),L(b,J,d)):(++x,I.ENABLE_TERRAIN_INTERNAL_CHECKS&&I.internalAssert(x<q),d=e.getVertexIndex(x),L(b,J,d));A++}I.ENABLE_TERRAIN_INTERNAL_CHECKS&&(I.internalAssert(g===y-1),I.internalAssert(x===q-1),I.internalAssert(A===y+q-2),I.internalAssert(A===F-2+p.count-1),I.internalAssert(t===m+3*A*G))}})();I.internalAssert(t===3*(B+O)*G);v.forEach(d=>{var h=a.outerEdges[d.connectedOuterEdgeOffset];let m=h.getVertexIndex(0);h=h.stride;
for(let p=0;p<d.latitudeResolution;++p){const e=0===p?d.rowOffset:m+k;for(let g=0;g<F;g++)n(m,m+1,e+g),p<d.latitudeResolution-1&&n(m+1,e+g+1,e+g),m+=h;m=e;h=1}})}else(()=>{var n=Math.max(l[0],1)-1;const d=Math.min(l[1],k-2)-1,h=Math.max(E[0],1)-1,m=Math.min(E[1],k-2)-1;for(;n<d;++n){const p=n*S;for(let e=h;e<m;++e){const g=p+e,x=g+1,y=x+S,q=y-1;Q(g,x,y,q,a.vertexAttributes.position.typedBufferStride,a.vertexAttributes.position.typedBuffer)?(w[t]=g,w[t+1]=x,w[t+2]=y,w[t+3]=y,w[t+4]=q,w[t+5]=g):(w[t]=
g,w[t+1]=x,w[t+2]=q,w[t+3]=q,w[t+4]=x,w[t+5]=y);t+=6}}})(),I.internalAssert(t===3*B*G),(()=>{for(let p=0;4>p;++p){if(z[p])continue;var n=a.outerEdges[p],d=a.innerEdges[p];let e=0,g=0;const x=n.count,y=d.count;I.internalAssert(y===F-1);var h=1===p||2===p;const q=h?1:2;h=h?2:1;const A=n.index0;n=n.stride;const L=d.index0;for(d=d.stride;e<x-1||g<y-1;){const b=L+g*d,J=A+e*n;var m=e<x-1;const T=g<y-1,Z=m?F*(e+.5)/(x-1):0,ca=T?1+P*(g+.5)/(y-1):0;(m=m&&(!T||Z<=ca))?++e:++g;m=m?J+n:b+d;w[t]=b;w[t+q]=J;w[t+
h]=m;t+=3}}})(),I.internalAssert(t===3*(B+O)*G),v.forEach(n=>{var d=a.outerEdges[n.connectedOuterEdgeOffset];let h=d.getVertexIndex(0);d=d.stride;for(let m=0;m<n.latitudeResolution;++m){const p=0===m?n.rowOffset:h+k;for(let e=0;e<F;e++){const g=p+e;w[t]=h;w[t+1]=h+1;w[t+2]=g;m<n.latitudeResolution-1?(w[t+3]=h+1,w[t+4]=g+1,w[t+5]=g,t+=6):t+=3;h+=d}h=p;d=1}});I.internalAssert(t===M);a.indices=w;a.indexCount=M}function Jc(a,k){const v=a.localOrigin,E=a.geometryInfo;a=a.geometryState.neighborData.edgeResolutions;
const l=E.numVerticesPerSide-2,r=E.vertexAttributes;for(let f=0;4>f;++f){var F=0===f||2===f;E.innerEdges[f]=new Y.EdgeDescriptor(r,v,(0===f?l-1:0)*l+(1===f?l-1:0),(F?0:1)*l+(F?1:0),l);F=a[f]+1;E.outerEdges[f]=new Y.EdgeDescriptor(r,v,k,1,F);k+=F}}function ec(a,k,v){var E=(k+2)%4,l=a.tile,r=l.level-v.level;const F=1===k||3===k,f=a.geometryState.neighborData.edgeResolutions[k];I.internalAssert(U.isPowerOfTwo(f));const B=f+1;var z=a.geometryInfo;const O=z.boundingBox;var K=z.outerEdges[k];const G=z.uvRange[0],
M=z.uvRange[1],w=z.uvRange[2];z=z.uvRange[3];const t=U.clamp(1===k?1:0,G,w),S=U.clamp(0===k?1:0,M,z);var P=v.renderData,Q=P.geometryState,n=P.geometryInfo.outerEdges[E];k=l.getNeighborEdgeStartVertexIndex(k,v)*f;r=f*2**r;I.internalAssert(Q.neighborData.edgeResolutions[E]===r);I.internalAssert(n.count-1===r);E=P.localOrigin[0]-a.localOrigin[0];r=P.localOrigin[1]-a.localOrigin[1];a=P.localOrigin[2]-a.localOrigin[2];var d=K.attributes;P=K.index0;K=K.stride;Q=d.position.typedBuffer;v=d.position.typedBufferStride;
l=d.normalCompressed.typedBuffer;const h=d.normalCompressed.typedBufferStride;d=d.uv0;var m=n.attributes;const p=n.index0;n=n.stride;const e=m.position.typedBuffer,g=m.position.typedBufferStride,x=m.normalCompressed.typedBuffer;m=m.normalCompressed.typedBufferStride;for(let L=1;L<B-1;++L){const b=P+K*L;var y=p+n*(k+L),q=b*v,A=y*g;const J=e[A]+E,T=e[A+1]+r;A=e[A+2]+a;Q[q]=J;Q[q+1]=T;Q[q+2]=A;Y.minMaxBoundingBox(J,T,A,O);q=b*h;y*=m;l[q]=x[y];l[q+1]=x[y+1];q=L/f;y=F?t:U.clamp(q,G,w);q=F?U.clamp(q,M,
z):S;Y.encodeUVInBuffer(d,b,y,q)}}function Bb(a){const k=a.geometryState,v=a.localOrigin,E=k.neighborData.cornerNeighborData,l=a.geometryInfo,r=l.outerEdges,F=l.boundingBox,f=a.tile,B="local"===a.tile.surface.view?.viewingMode,z=f.ellipsoid.radius,O=f.extentInRadians,K=f.horizontalScale;let G=0,M=0,w=0;const t=()=>{const c=a.geometryState.clippingArea,H=f.extent,N=La.isSome(c)&&(H[3]>c[3]||H[2]>c[2]||H[1]<c[1]||H[0]<c[0]),V=Xb(f.surface.isWebMercatorOnPlateeCarree,f.ellipsoid.radius,K);return(C,D,
u)=>{C=0===C?A[0]:A[2];D=0===D?A[1]:A[3];C=N?U.clamp(C,c[0],c[2]):C;D=N?U.clamp(D,c[1],c[3]):D;G=C*K;M=V(D);w=u}},S=(c,H,N)=>{var V=O[0===H?1:3];c=O[0===c?0:2];H=Math.cos(V);V=Math.sin(V);const C=Math.sin(c);N=z+N;G=Math.cos(c)*H*N;M=C*H*N;w=V*N},P=B?t():S;let Q=0,n=0,d=0,h=0,m=0,p=0,e=0,g=0,x=0;const y=B&&a.tile.surface.isWebMercatorOnPlateeCarree,q=(c,H,N,V,C)=>{var D=0,u=0;let R=0;B?(N=y?(Math.PI/2-2*Math.atan(Math.exp(-N/z)))*z:N*K,D=H*K-G,u=N-M,R=V-w):(D=Gb(c),c=c.tile,u=c.extent,c=c.extentInRadians,
H=(H-u[0])/(u[2]-u[0]),H=c[0]*(1-H)+c[2]*H,D=D((N-u[1])/(u[3]-u[1])),N=Math.cos(D),c=Math.sin(D),u=Math.sin(H),V=z+V,D=Math.cos(H)*N*V-G,u=u*N*V-M,R=c*V-w);switch(C){case 0:e+=D;g+=u;x+=R;break;case 1:h-=D;m-=u;p-=R;break;case 2:e-=D;g-=u;x-=R;break;case 3:h+=D,m+=u,p+=R}},A=f.extent,L=k.clippingArea,b=La.isSome(L)?L:Eb,J=A[0],T=A[2],Z=A[1],ca=A[3],fa=[ca>b[3],T>b[2],Z<b[1],J<b[0]],X=Math.max(J,b[0]),W=Math.min(T,b[2]),aa=Math.max(Z,b[1]),da=Math.min(ca,b[3]),la=l.uvRange[0],na=l.uvRange[1],ha=l.uvRange[2],
ma=l.uvRange[3],qa=c=>{c=E[c].cornerTiles;n=Q=0;d=1;var H=Infinity;for(var N=0;4>N;++N)H=Math.min(H,c[N]?.level??Infinity);for(N=0;4>N;++N){var V=c[N];zb[N]=V?.level===H?V:null}c=1;H=0;for(N=0;4>N;++N)if(V=zb[N])c=Math.max(c,V?.renderData.geometryState.numVerticesPerSide),H=V.extent[2]-V.extent[0];I.internalAssert(1<c);c=H/c;for(H=0;4>H;++H){var C=zb[(H+3)%4],D=zb[H%4];if(C||D){V=0===H?1:1===H?2:2===H?3:0;var u=0===H?2:1===H?3:2===H?0:1;if(C&&D){var R=Yb[H][0]*c,ea=Yb[H][1]*c,ba=C.extent;N=ba[0===
V||1===V?2:0]+R;V=ba[0===V||3===V?3:1]+ea;ba=D.extent;R=ba[0===u||1===u?2:0]+R;u=ba[0===u||3===u?3:1]+ea;C=C.renderData;ea=D.renderData;D=ia.sampleElevation(N,V,C.geometryState.samplerData);u=ia.sampleElevation(R,u,ea.geometryState.samplerData);q(C,N,V,.5*(D+u),H)}else N=C??D,C=C?V:u,D=N.extent,u=Yb[H],V=D[0===C||1===C?2:0]+u[0]*c,C=D[0===C||3===C?3:1]+u[1]*c,N=N.renderData,D=ia.sampleElevation(V,C,N.geometryState.samplerData),q(N,V,C,D,H)}}B||(c=Math.sqrt(G*G+M*M+w*w),Q=G/c,n=M/c,d=w/c);c=Math.sqrt(h*
h+m*m+p*p);h/=c;m/=c;p/=c;c=Math.sqrt(e*e+g*g+x*x);e/=c;g/=c;x/=c;if(B||.999>d*d)Q=p*g-m*x,n=h*x-p*e,d=m*e-h*g,c=1/Math.sqrt(Q*Q+n*n+d*d),Q*=c,n*=c,d*=c};for(let c=0;4>c;++c){const H=c,N=(c+1)%4,V=0===c||1===c?1:0,C=0===c||3===c?1:0,D=U.clamp(V,la,ha),u=U.clamp(C,na,ma),R=r[H],ea=0===c||3===c?R.count-1:0,ba=r[N],wa=0===c||1===c?ba.count-1:0,oa=E[c].cornerTiles;let ra=-1;for(let xa=0;4>xa;++xa){const ua=oa[xa];ua&&(-1===ra||0<Ab.compareTilesByLij(oa[ra],ua))&&(ra=xa)}const sa=ra,ta=oa[sa],Za=ta!==
f;n=Q=0;d=1;if(Za){const xa=f.level-ta.level,ua=2**xa,Ea=[ta.lij[0]+xa,ta.lij[1]*ua,ta.lij[2]*ua],ya=[Ea[1]+ua===f.lij[1],0===c&&(1===sa||0===sa&&ta!==oa[3])||1===c&&(0===sa||1===sa&&ta!==oa[2]),Ea[1]===f.lij[1]+1,2===c&&(3===sa||2===sa&&ta!==oa[1])||3===c&&(2===sa||3===sa&&ta!==oa[0])],Aa=ya.reduce((ka,Ta)=>ka+(Ta?1:0),0);I.internalAssert(1===Aa||2===Aa);let Ba=-1,Ca=-1;const Wa=ta.renderData;if(1===Aa){const ka=ya.findIndex(Ua=>Ua);I.internalAssert(0<=ka&&3>=ka);Ba=(ka+2)%4;const Ta=a.geometryState.neighborData.edgeResolutions[ka];
Ca=f.getNeighborEdgeStartVertexIndex(ka,ta)*Ta+Ta*(0===ka&&0===c||1===ka&&0===c||2===ka&&1===c||3===ka&&3===c?1:0)}else{I.internalAssert(ya[1]||ya[3]);Ba=ya[1]?3:1;const ka=Wa.geometryState.neighborData.edgeResolutions[Ba];Ca=0===c||3===c?0:ka}const Ka=Wa.geometryInfo.outerEdges[Ba],Ma=R.index0+ea*R.stride,Fa=ba.index0+wa*ba.stride,Ga=Ka.index0+Ca*Ka.stride,Ha=Ka.attributes.position,Ia=Ha.typedBuffer,ja=Ga*Ha.typedBufferStride,db=a.localOrigin,gb=Ka.localOrigin,hb=Ia[ja]+gb[0]-db[0],$a=Ia[ja+1]+gb[1]-
db[1],eb=Ia[ja+2]+gb[2]-db[2];Y.minMaxBoundingBox(hb,$a,eb,F);const ab=R.attributes.position,Xa=ab.typedBuffer,bb=Ma*ab.typedBufferStride;Xa[bb]=hb;Xa[bb+1]=$a;Xa[bb+2]=eb;const fb=ba.attributes.position,Pa=fb.typedBuffer,Qa=Fa*fb.typedBufferStride;Pa[Qa]=hb;Pa[Qa+1]=$a;Pa[Qa+2]=eb;Y.encodeUVInBuffer(R.attributes.uv0,Ma,D,u);Y.encodeUVInBuffer(ba.attributes.uv0,Fa,D,u);const Na=Ka.attributes.normalCompressed.typedBuffer,Ra=Ga*Ka.attributes.normalCompressed.typedBufferStride,va=R.attributes.normalCompressed,
Oa=va.typedBuffer,Ja=Ma*va.typedBufferStride;Oa[Ja]=Na[Ra];Oa[Ja+1]=Na[Ra+1];const Da=ba.attributes.normalCompressed,za=Da.typedBuffer,Sa=Fa*Da.typedBufferStride;za[Sa]=Na[Ra];za[Sa+1]=Na[Ra+1]}else{const xa=fa[N];let ua=void 0;if(fa[H]||xa){const Ba=U.clamp(J*(1-V)+T*V,X,W),Ca=U.clamp(Z*(1-C)+ca*C,aa,da);ua=ia.sampleElevation(Ba,Ca,k.samplerData)}else ua=Xc(oa);P(V,C,ua);qa(c);const Ea=G-v[0],ya=M-v[1],Aa=w-v[2];Y.minMaxBoundingBox(Ea,ya,Aa,F);R.setVertexFromValuesRawPositionUVNormal(ea,Ea,ya,Aa,
D,u,Q,n,d);ba.setVertexFromValuesRawPositionUVNormal(wa,Ea,ya,Aa,D,u,Q,n,d)}}for(let c=0;4>c;++c)zb[c]=null}function Xc(a){const k=a.reduce((r,F)=>Math.min(r,F?.level??Infinity),Infinity);I.ENABLE_TERRAIN_INTERNAL_CHECKS&&(I.internalAssert(!a[0]||!a[2]||ac.isCornerNeighbor(a[0],a[2],qb.NeighborIndex.SOUTH_WEST)),I.internalAssert(!a[1]||!a[3]||ac.isCornerNeighbor(a[1],a[3],qb.NeighborIndex.NORTH_WEST)));let v=0,E=0;for(let r=0;4>r;++r){var l=a[r];if(l&&l.level===k){const F=l.extent;l=ia.sampleElevation(F[0===
r||1===r?0:2],F[0===r||3===r?1:3],l.renderData?.geometryState?.samplerData);E+=l;v++}}a=v?E/v:0;I.internalAssert(null!=a);return a}function Fb(a){const k=a.geometryInfo.vertexAttributes.position.typedBuffer;a.vao.vertexBuffers.geometry.setSubData(k,0,0,k.length)}function dc(a,k,v){if(!k)return!1;a=Ab.compareTilesByLij(a,k);return 0<a||0===a&&2<=v}const Yb=[[0,1],[1,0],[0,-1],[-1,0]],pa=new Mc.PatchGeometryLUT,Eb=Lc.fromValues(-Infinity,-Infinity,Infinity,Infinity),zb=[null,null,null,null];lb.createInternalVerticesPositionsSpherical=
function(a){var k=a.geometryState,v=k.numVerticesPerSide;const E=v-2;--v;var l=a.geometryInfo,r=l.vertexAttributes,F=r.position;r=r.uv0;var f=a.tile,B=f.extent;const z=B[0],O=B[2],K=B[1];B=B[3];f=f.ellipsoid.radius;k=k.samplerData;var G=a.localOrigin;a=G[0];const M=G[1];G=G[2];l=l.boundingBox;const w=F.typedBuffer;F=F.typedBufferStride;let t=0;for(let n=1;n<=E;n++){const d=n/v,h=K*(1-d)+B*d,m=pa.sinLatLUT[n],p=pa.cosLatLUT[n];for(let e=1;e<=E;e++){const g=e/v;var S=pa.sinLonLUT[e],P=pa.cosLonLUT[e],
Q=f+ia.sampleElevation(z*(1-g)+O*g,h,k);P=P*p*Q-a;S=S*p*Q-M;Q=m*Q-G;Y.minMaxBoundingBox(P,S,Q,l);const x=t*F;w[x]=P;w[x+1]=S;w[x+2]=Q;Y.encodeUVInBuffer(r,t,g,d);++t}}};lb.createPlanarGlobePatch=function(a,k){var v=a.tile.extent;k=a.geometryState;var E=v[0],l=v[1],r=v[2]-E,F=v[3]-l,f=k.clippingArea;v=La.isSome(f)?Math.max(0,(f[0]-E)/r):0;const B=La.isSome(f)?Math.max(0,(f[1]-l)/F):0;E=La.isSome(f)?Math.min(1,(f[2]-E)/r):1;l=La.isSome(f)?Math.min(1,(f[3]-l)/F):1;r=k.numVerticesPerSide;F=(r-2)**2;f=
k.neighborData.edgeResolutions.reduce((O,K)=>O+K+1,0);f=Y.acquireTerrainAttributes(F+f);const z=a.geometryInfo;Zb.empty(z.boundingBox);z.numVerticesPerSide=k.numVerticesPerSide;z.vertexAttributes=f;Kc.set(z.uvRange,v,B,E,l);Wc(a);Jc(a,F);Gc(a);Ic(z,k.numVerticesPerSide,[],[0,r-1],[0,r-1],k.wireframe);a.intersectionData=null};lb.createSphericalGlobePatch=function(a,k){const v=a.tile,{extent:E,extentInRadians:l,surface:r}=v,F=a.localOrigin,f=a.geometryState;var B=r.isWebMercator;const z=r.shading||
!0,O=f.numVerticesPerSide,K=O-1,G=(O-2)**2,M=B&&(k===qb.PatchType.HAS_SOUTH_POLE||k===qb.PatchType.HAS_BOTH_POLES),w=B&&(k===qb.PatchType.HAS_NORTH_POLE||k===qb.PatchType.HAS_BOTH_POLES);B=6*((M?1:0)+(w?1:0))*(K+1);k=f.neighborData;const t=k.edgeResolutions.reduce((d,h)=>d+h+1,0),S=Y.acquireTerrainAttributes(G+B+t);B=a.geometryInfo;B.numVerticesPerSide=f.numVerticesPerSide;B.vertexAttributes=S;const P=B.boundingBox;Zb.empty(P);const Q=Gb(a);pa.update(K,l,Q);Nc(a);Jc(a,G);bc(a);const n=[];(()=>{let d=
G+t;const h=F[0],m=F[1],p=F[2],e=v.ellipsoid.radius,g=E[1],x=E[3],y=(q,A)=>{A*=O;Y.minMaxBoundingBox(-h,-m,-p+q*e,P);n.push({connectedRowOffset:A,connectedOuterEdgeOffset:1===q?0:2,rowOffset:d,latitudeResolution:6});A=Math.PI/2-2*Math.atan(Math.exp(-(-1===q?g:x)/e));const L=q*Math.PI/2-A;q=.99*(1===q?1:-1);const b=e+0,J=S.position,T=S.uv0,Z=S.normalCompressed;for(let fa=1;6>=fa;++fa){var ca=A+fa/6*L;const X=Math.cos(ca);ca=Math.sin(ca);for(let W=0;W<=K;W++){const aa=W/K,da=pa.cosLonLUT[W]*X,la=pa.sinLonLUT[W]*
X,na=ca,ha=da*b-h,ma=la*b-m,qa=na*b-p;Y.minMaxBoundingBox(ha,ma,qa,P);J.setValues(d,ha,ma,qa);Y.encodeUVInBuffer(T,d,aa,q);z&&Y.encodeNormalToBufferFromValues(Z,d,da,la,na);++d}}};M&&y(-1,0);w&&y(1,K)})();Ic(B,f.numVerticesPerSide,n,[0,O-1],[0,O-1],f.wireframe);a.intersectionData=null;if(I.ENABLE_TERRAIN_INTERNAL_CHECKS)for(a=0;4>a;++a)I.internalAssert(B.outerEdges[a].count===k.edgeResolutions[a]+1)};lb.updateCornerSpherical=function(a){a.tile.intersectsClippingArea&&(Bb(a),cc(a,!0),Fb(a))};lb.updateCornersPlanar=
function(a,k){a.tile.intersectsClippingArea&&(Bb(a),Hc(a,!0),Fb(a))};lb.updateEdgesAndCornersPlanar=function(a,k){a.tile.intersectsClippingArea&&(Gc(a),Fb(a))};lb.updateEdgesAndCornersSpherical=function(a){a.tile.intersectsClippingArea&&(bc(a),Fb(a))};Object.defineProperty(lb,Symbol.toStringTag,{value:"Module"})});