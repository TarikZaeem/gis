// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/unitUtils ../../../chunks/pe ../../../geometry/projection ../../../geometry/Extent ../../../geometry/Point ../../../geometry/Polygon ../../../geometry/SpatialReference".split(" "),function(z,na,Aa,oa,w,I,y,B,N,C,pa,qa){function P(a,b,c){return!B.canProjectWithoutEngine(a,b,c)}function J(a,b,c){if((a=P(a,b,c))&&!B.isLoaded())throw new oa("rasterprojectionhelper-project",
"projection engine is not loaded");return a}function Q(){Q=na._asyncToGenerator(function*(){B.isLoaded()||(yield B.load())});return Q.apply(this,arguments)}function R(a,b,c,e=null){const k=a.spatialReference;if(k.equals(b))return a;J(k,b,e);c=c.center;c=new N({xmin:c.x-a.x/2,xmax:c.x+a.x/2,ymin:c.y-a.y/2,ymax:c.y+a.y/2,spatialReference:k});e=B.project(c,b,e);c=F(b);w.isNone(e)||w.isSome(c)&&e.width>=c?(b=I.getMetersPerUnitForSR(k)/I.getMetersPerUnitForSR(b),a={x:a.x*b,y:a.y*b}):a={x:e.width,y:e.height};
return a}function E(a,b=.01){return I.getMetersPerUnitForSR(a)?b/I.getMetersPerUnitForSR(a):0}function S(a,b,c=null,e=!0){const k=a.spatialReference;if(k.equals(b))return a;J(k,b,c);c=B.project(a,b,c);if(!e||!c)return c;aa([a],[c],k,b);return c}function aa(a,b,c,e){const k=O(c,!0),d=O(e,!0);c=E(c,500);e=E(e,500);if(c&&w.isSome(k)&&w.isSome(d))for(let h=0;h<a.length;h++){const g=b[h];if(!g)continue;const {x:f}=a[h],{x:m}=g;m>=d[1]-e&&Math.abs(f-k[0])<c?g.x-=d[1]-d[0]:m<=d[0]+e&&Math.abs(f-k[1])<c&&
(g.x+=d[1]-d[0])}}function ba(a){const {inSR:b,outSR:c,datumTransformation:e,preferPE:k}=a;if(b.equals(c))return{points:a}=T(a,null),a;if(b.isWebMercator&&c.isWGS84||b.isWGS84&&c.isWebMercator){const {cols:m,rows:l,xres:n,yres:q,usePixelCenter:p,inSR:t,outSR:u}=a;let {xmin:v,ymax:r}=a;p&&(v+=n/2,r-=q/2);a=[];var d=[],h=Math.max(m,l);for(var g=0;g<h;g++){var f=B.project(new C({x:v+n*Math.min(m,g),y:r-q*Math.min(l,g),spatialReference:t}),u);g<=m&&a.push(f.x);g<=l&&d.push(f.y)}h=[];for(g=0;g<m;g++)for(f=
0;f<l;f++)h.push([a[g],d[f]]);return h}if(J(b,c,e)&&k){if(b.isGeographic)return ca(a);d=H(b);if(w.isSome(d))return ca(a)}return ra(a)}function ra(a){var {points:b}=T(a,null);const {inSR:c,outSR:e,datumTransformation:k}=a;a=b.map(d=>new C(d[0],d[1],c));b=B.project(a,e,k);k&&aa(a,b,c,e);return b.map(d=>d?[d.x,d.y]:[NaN,NaN])}function ca(a){const {inSR:b,outSR:c,datumTransformation:e}=a;var k=H(b);const {points:d,mask:h}=T(a,k);b.isGeographic||(a=b.wkid?y.PeFactory.coordsys(b.wkid):y.PeFactory.fromString(b.isGeographic?
y.PeDefs.PE_TYPE_GEOGCS:y.PeDefs.PE_TYPE_PROJCS,b.wkt),y.PeCSTransformations.projToGeog(a,d.length,d));if(w.isSome(e)&&e.steps.length){var g;c.isGeographic&&(g=d.map(([f])=>179.9955<f?1:-179.9955>f?-1:0));e.steps.forEach(f=>{const m=f.wkid?y.PeFactory.geogtran(f.wkid):y.PeFactory.fromString(y.PeDefs.PE_TYPE_GEOGTRAN,f.wkt);y.PeGTTransformations.geogToGeog(m,d.length,d,null,f.isInverse?y.PeDefs.PE_TRANSFORM_2_TO_1:y.PeDefs.PE_TRANSFORM_1_TO_2)});if(g)for(a=0;a<d.length;a++){k=g[a];const f=d[a][0],
m=179.9955<f?1:-179.9955>f?-1:0;k&&m&&k!==m&&(d[a][0]=0<k?f+360:f-360)}}c.isGeographic||(g=H(c,!0),g=w.isSome(g)&&g.isEnvelope?[g.bbox[1],g.bbox[3]]:[-90,90],sa(d,g),g=c.wkid?y.PeFactory.coordsys(c.wkid):y.PeFactory.fromString(c.isGeographic?y.PeDefs.PE_TYPE_GEOGCS:y.PeDefs.PE_TYPE_PROJCS,c.wkt),y.PeCSTransformations.geogToProj(g,d.length,d));g=d;if(h&&d.length!==h.length){g=[];for(let f=0,m=0;f<h.length;f++)h[f]?g.push(d[m++]):g.push([NaN,NaN])}return g}function H(a,b=!1){var c=a.wkid||a.wkt;if(!c||
a.isGeographic)return null;c=String(c);if(U.has(c))return c=U.get(c),b?c?.gcs:c?.pcs;var e=a.wkid?y.PeFactory.coordsys(a.wkid):y.PeFactory.fromString(a.isGeographic?y.PeDefs.PE_TYPE_GEOGCS:y.PeDefs.PE_TYPE_PROJCS,a.wkt);a=E(a,1E-4);a=da(e,a);e=da(e,0,!0);U.set(c,{pcs:a,gcs:e});return b?e:a}function da(a,b=0,c=!1){var e=y.PePCSInfo.generate(a),k=c?a.horizonGcsGenerate():a.horizonPcsGenerate();if(!e||!k?.length)return null;a=!1;var d=k.find(l=>1===l.getInclusive()&&1===l.getKind());if(!d){d=k.find(l=>
1===l.getInclusive()&&0===l.getKind());if(!d)return null;a=!0}c=c?0:(2===e.getNorthPoleLocation()?1:0)|(2===e.getSouthPoleLocation()?2:0);e=e.isPannableRectangle();d=d.getCoord();if(a)return{isEnvelope:a,isPannable:e,vertices:d,coef:null,bbox:[d[0][0]-b,d[0][1]-b,d[1][0]+b,d[1][1]+b],poleLocation:c};b=0;a=[];let [h,g]=d[0],[f,m]=d[0];for(let l=0,n=d.length;l<n;l++){b++;b===n&&(b=0);const [q,p]=d[l],[t,u]=d[b];if(u===p)a.push([q,t,p,u,2]);else{k=(t-q)/(u-p||1E-4);const v=q-k*p;p<u?a.push([k,v,p,u,
0]):a.push([k,v,u,p,1])}h=h<q?h:q;g=g<p?g:p;f=f>q?f:q;m=m>p?m:p}return{isEnvelope:!1,isPannable:e,vertices:d,coef:a,bbox:[h,g,f,m],poleLocation:c}}function T(a,b){const c=[],{cols:e,rows:k,xres:d,yres:h,usePixelCenter:g}=a;let {xmin:f,ymax:m}=a;g&&(f+=d/2,m-=h/2);if(w.isNone(b)){for(a=0;a<e;a++)for(b=0;b<k;b++)c.push([f+d*a,m-h*b]);return{points:c}}a=new Uint8Array(e*k);if(b.isEnvelope){const {bbox:[v,r,A,D]}=b;for(let G=0,K=0;G<e;G++){var l=f+d*G,n=b.isPannable||l>=v&&l<=A;for(var q=0;q<k;q++,K++){var p=
m-h*q;n&&p>=r&&p<=D&&(c.push([l,p]),a[K]=1)}}return{points:c,mask:a}}l=b.coef;b=[];for(n=0;n<k;n++){var t=m-h*n;q=[];p=[];for(var u=0;u<l.length;u++){const [v,r,A,D,G]=l[u];t===A&&A===D?(q.push(v),q.push(r),p.push(2),p.push(2)):t>=A&&t<=D&&(q.push(v*t+r),p.push(G))}t=q;if(2<q.length){u=2===p[0]?0:p[0];let v=q[0];t=[];for(let r=1;r<p.length;r++)if(2!==p[r]||r===p.length-1)p[r]!==u&&(t.push(0===u?Math.min(v,q[r-1]):Math.max(v,q[r-1])),u=p[r],v=q[r]),r===p.length-1&&t.push(0===p[r]?Math.min(v,q[r]):
Math.max(v,q[r]));t.sort((r,A)=>r-A)}else q[0]>q[1]&&(t=[q[1],q[0]]);b.push(t)}for(let v=0,r=0;v<e;v++)for(l=f+d*v,n=0;n<k;n++,r++)if(q=m-h*n,p=b[n],2===p.length)l>=p[0]&&l<=p[1]&&(c.push([l,q]),a[r]=1);else if(2<p.length){t=!1;for(u=0;u<p.length;u+=2)if(l>=p[u]&&l<=p[u+1]){t=!0;break}t&&(c.push([l,q]),a[r]=1)}return{points:c,mask:a}}function sa(a,b){const [c,e]=b;for(b=0;b<a.length;b++){const k=a[b][1];if(k<c||k>e)a[b]=[NaN,NaN]}}function ea(a){const b=F(a[0].spatialReference);if(2>a.length||w.isNone(b))return a[0];
let {xmin:c,xmax:e,ymin:k,ymax:d}=a[0];for(let h=1;h<a.length;h++){const g=a[h];e=g.xmax+b*h;k=Math.min(k,g.ymin);d=Math.max(d,g.ymax)}return new N({xmin:c,xmax:e,ymin:k,ymax:d,spatialReference:a[0].spatialReference})}function V(a,b,c=null,e=!0){var k=a.spatialReference;if(k.equals(b))return a;var d=fa(a);const h=F(k,!0);var g=F(b);if(0===d||w.isNone(h)||w.isNone(g))return d=ha(a,b,c,e),w.isNone(h)&&w.isSome(g)&&Math.abs(d.width-g)<E(b)&&B.isLoaded()&&(k=H(k),w.isSome(k)&&k.poleLocation===W.None&&
a.width<(k.bbox[2]-k.bbox[0])/2)?ta(a,b)||d:d;g=a.clone().normalize();if(1===g.length&&a.xmax<h&&a.xmax-h/2>E(k)){const {xmin:f,xmax:m}=a;for(let l=0;l<=d;l++)g[l]=new N({xmin:0===l?f:-h/2,xmax:l===d?m-h*l:h/2,ymin:a.ymin,ymax:a.ymax,spatialReference:k})}a=g.map(f=>ha(f,b,c,e));return ea(a.filter(w.isSome))}function ta(a,b){const c=F(b);if(w.isNone(c))return null;let {xmin:e,ymin:k,xmax:d,ymax:h}=a;var g=a.spatialReference;a=new pa({spatialReference:g,rings:[[[e,k],[d,k],[d,h],[e,h],[e,k]]]});a=B.project(a,
b);if(2!==a.rings.length||!a.rings[0].length||!a.rings[1].length)return null;({rings:a}=a);g=E(g);b=new N({spatialReference:b});for(let f=0;2>f;f++){e=d=a[f][0][0];k=h=a[f][0][1];for(let m=0;m<a[f].length;m++)e=e>a[f][m][0]?a[f][m][0]:e,d=d<a[f][m][0]?a[f][m][0]:d,k=k>a[f][m][1]?a[f][m][1]:k,h=h<a[f][m][1]?a[f][m][1]:h;if(0===f)b.ymin=k,b.ymax=h,b.xmin=e,b.xmax=d;else if(b.ymin=Math.min(b.ymin,k),b.ymax=Math.max(b.ymax,h),Math.abs(d-c/2)<g)b.xmin=e,b.xmax+=c;else if(Math.abs(e+c/2)<g)b.xmax=d+c;else return null}return b}
function ha(a,b,c=null,e=!0,k=!0){const d=a.spatialReference;if(d.equals(b)||!b)return a;J(d,b,c);const h=B.project(a,b,c);if(k&&b.isWebMercator&&h&&(h.ymax=Math.min(2.0037508342787E7,h.ymax),h.ymin=Math.max(-2.0037508342787E7,h.ymin),h.ymin>=h.ymax))return null;if(!e||!h)return h;var g=O(d,!0);e=O(b,!0);if(w.isNone(g)||w.isNone(e))return h;k=E(d,.001);const f=E(d,500);var m=E(b,.001);if(Math.abs(h.xmin-e[0])<m&&Math.abs(h.xmax-e[1])<m){m=Math.abs(a.xmin-g[0]);g=Math.abs(g[1]-a.xmax);if(m<k&&g>f){h.xmin=
e[0];var l=[];l.push(new C(a.xmax,a.ymin,d));l.push(new C(a.xmax,(a.ymin+a.ymax)/2,d));l.push(new C(a.xmax,a.ymax,d));l=l.map(n=>S(n,b,c)).filter(n=>!isNaN(n?.x)).map(n=>n.x);h.xmax=Math.max.apply(null,l)}g<k&&m>f&&(h.xmax=e[1],e=[],e.push(new C(a.xmin,a.ymin,d)),e.push(new C(a.xmin,(a.ymin+a.ymax)/2,d)),e.push(new C(a.xmin,a.ymax,d)),a=e.map(n=>S(n,b,c)).filter(n=>!isNaN(n?.x)).map(n=>n.x),h.xmin=Math.min.apply(null,a))}else a=E(b,.001),Math.abs(h.xmin-e[0])<a&&(h.xmin=e[0]),Math.abs(h.xmax-e[1])<
a&&(h.xmax=e[1]);return h}function F(a,b=!1){return a?a.isWebMercator?2*(b?2.0037508342787E7:2.0037508342788905E7):a.wkid&&a.isGeographic?360:2*ua[a.wkid]||null:null}function O(a,b=!1){if(a.isGeographic)return[-180,180];a=F(a,b);return w.isSome(a)?[-a/2,a/2]:null}function ia(a,b,c,e){a=(a-b)/c;0!==a-Math.floor(a)?a=Math.floor(a):e&&--a;return a}function fa(a,b=!1){var c=F(a.spatialReference);if(w.isNone(c))return 0;const e=b?0:-(c/2),k=E(a.spatialReference),d=!b&&Math.abs(a.xmin+c/2)<k?-c/2:a.xmin;
a=ia(!b&&Math.abs(a.xmax-c/2)<k?c/2:a.xmax,e,c,!0);c=ia(d,e,c,!1);return a-c}function X(a){const {projectedExtent:b,srcBufferExtent:c,pixelSize:e,datumTransformation:k,rasterTransform:d}=a;var h=b.spatialReference;const g=c.spatialReference;var f=J(h,g);const {xmin:m,ymin:l,xmax:n,ymax:q}=b,p=F(g),t=w.isSome(p)&&(a.hasWrapAround||"gcs-shift"===d?.type);a=a.spacing||[32,32];var u=a[0]*e.x,v=a[1]*e.y;const r=1===a[0],A=Math.ceil((n-m)/u-.1/a[0])+(r?0:1),D=Math.ceil((q-l)/v-.1/a[1])+(r?0:1);u=ba({cols:A,
rows:D,xmin:m,ymax:q,xres:u,yres:v,inSR:h,outSR:g,datumTransformation:k,preferPE:4>=a[0],usePixelCenter:r});v=[];let G,K=0;const ja=r?-1:NaN,{xmin:ka,xmax:Y,ymax:va,width:wa,height:xa}=c,ya=E(g,500),za=w.isSome(p)&&0<ka&&Y>p/2;var L=!1;f&&(L=H(h),L=w.isSome(L)&&0<L.poleLocation);for(h=0;h<A;h++){f=[];for(let M=0;M<D;M++){var x=u[h*D+M];t&&x[0]>Y&&x[0]>p/2-ya?x[0]-=p:t&&0===h&&0>x[0]&&za&&!d&&(x[0]+=p);!x||isNaN(x[0])||isNaN(x[1])?(v.push(ja),v.push(ja),f.push(null),K++):(d&&(x=d.inverseTransform(new C({x:x[0],
y:x[1],spatialReference:g})),x=[x.x,x.y]),f.push(x),0<h&&t&&G[M]&&x[0]<G[M][0]&&(x[0]+=p,L&&x[0]>Y&&x[0]>p&&(x[0]-=p)),v.push((x[0]-ka)/wa),v.push((va-x[1])/xa))}G=f}return{offsets:v,error:null,coefficients:null,outofBoundPointCount:K,spacing:a,size:r?[A,D]:[A-1,D-1]}}function la(a,b,c){const {cols:e,rows:k}=b;b=new Float32Array((e-1)*(k-1)*12);const d=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),h=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let q=0;q<e-1;q++){for(var g=0;g<k-1;g++){var f=q*k*2+2*
g,m=a[f];const p=a[f+1];var l=a[f+2],n=a[f+3];f+=2*k;const t=a[f],u=a[f+1],v=a[f+2];f=a[f+3];let r=0,A=12*(g*(e-1)+q);for(let D=0;3>D;D++)b[A++]=d[r++]*m+d[r++]*l+d[r++]*v;r=0;for(l=0;3>l;l++)b[A++]=d[r++]*p+d[r++]*n+d[r++]*f;r=0;for(n=0;3>n;n++)b[A++]=h[r++]*m+h[r++]*t+h[r++]*v;r=0;for(m=0;3>m;m++)b[A++]=h[r++]*p+h[r++]*u+h[r++]*f}if(c)for(g=0;g<b.length;g++)isNaN(b[g])&&(b[g]=-1)}return b}var W;(function(a){a[a.None=0]="None";a[a.North=1]="North";a[a.South=2]="South";a[a.Both=3]="Both"})(W||(W=
{}));const ma=(a,b,c,e=0)=>{if(1===c[0])return[0,0];var k=1,d=-1,h=1,g=-1;for(var f=0;f<a.length;f+=2)isNaN(a[f])||(k=k>a[f]?a[f]:k,d=d>a[f]?d:a[f],h=h>a[f+1]?a[f+1]:h,g=g>a[f+1]?g:a[f+1]);const {cols:m,rows:l}=b;b=(d-k)/m/c[0];c=(g-h)/l/c[1];e*=2;h=0;g=!1;k=[0,0];for(d=0;d<m-3;d++){for(f=0;f<l-3;f++){var n=d*l*2+2*f;const q=Math.abs(((a[n]+a[n+4]+a[n+4*l]+a[n+4*l+4])/4-a[n+2*l+2])/b);n=Math.abs(((a[n+1]+a[n+5]+a[n+4*l+1]+a[n+4*l+5])/4-a[n+2*l+3])/c);q+n>h&&(h=q+n,k=[q,n]);if(e&&h>e){g=!0;break}}if(g)break}return k},
ua={3395:2.0037508342789244E7,3410:1.7334193943686873E7,3857:2.0037508342788905E7,3975:1.7367530445161372E7,4087:2.0037508342789244E7,4088:2.0015108787169147E7,6933:1.7367530445161372E7,32662:2.0037508342789244E7,53001:2.001508679602057E7,53002:1.000754339801029E7,53003:2.001508679602057E7,53004:2.001508679602057E7,53016:1.4152803599503474E7,53017:1.7333573624304302E7,53034:2.001508679602057E7,53079:2.0015114352186374E7,53080:2.0015114352186374E7,54001:2.0037508342789244E7,54002:1.0018754171394624E7,
54003:2.0037508342789244E7,54004:2.0037508342789244E7,54016:1.4168658027268292E7,54017:1.736753044516137E7,54034:2.0037508342789244E7,54079:2.0037508342789244E7,54080:2.0037508342789244E7,54100:2.0037508342789244E7,54101:2.0037508342789244E7},U=new Map,Z=new Map;z.computeProjectedScales=function(a,b,c=512,e=!0){const {extent:k,spatialReference:d,pixelSize:h}=a,g=R(new C({x:h.x,y:h.y,spatialReference:d}),b,k);if(null==g)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};
const f=(g.x+g.y)/2,m=I.getMetersPerUnitForSR(b);var l=f*m*96*39.37,n=b.isGeographic?256/c*2.958287637958547E8:256/c*5.91657527591555E8,q="vector-magdir"===a.dataType||"vector-uv"===a.dataType,p=V(k,b),t=Math.min(Math.ceil(Math.log(Math.min(a.width,a.height)/32)/Math.LN2),Math.ceil(Math.log(n/2/l)/Math.LN2));!q&&e&&(b.isGeographic||b.isWebMercator)&&(q=0>p.xmin*p.xmax,!q&&3>t&&(e=F(b),w.isSome(e)&&(q=2**t*f*c,c=Math.ceil(e/q),q=1===c||2===c&&e/2-p.xmax<q)));e=l;a=Math.min(2,Math.max(1.414,a.storageInfo?.pyramidScalingFactor||
2));if(q)e=n,n=b.isGeographic?1.341104507446289E-6:.29858214164761665,t=96*n*m*39.37,b=R(new C({x:n,y:n,spatialReference:{wkid:b.isGeographic?4326:3857}}),d,p),b.x*=e/t,b.y*=e/t;else{b={x:h.x,y:h.y};for(p=0;e<.5005*n&&p<t;)p++,e*=a,b.x*=a,b.y*=a;1.001>=Math.max(e,n)/Math.min(e,n)&&(e=n)}n=[e];p=[{x:b.x,y:b.y}];for(l=Math.min(70.5310735,l)/1.001;e>=l;)e/=a,b.x/=a,b.y/=a,n.push(e),p.push({x:b.x,y:b.y});return{projectedPixelSize:g,scales:n,srcResolutions:p,isCustomTilingScheme:!q}};z.defaultGridSpacing=
32;z.defaultProjectionToleranceInPixels=4;z.getDefaultDatumTransformationForDataset=function(a,b,c){return J(a.spatialReference,b)?c?B.getTransformation(b,a.spatialReference,a):B.getTransformation(a.spatialReference,b,a):null};z.getProjectedGridPoints=ba;z.getProjectionOffsetGrid=function(a){var b=a.isAdaptive&&null==a.spacing;let c=a.spacing||[32,32],e=X(a);var k={cols:e.size[0]+1,rows:e.size[1]+1};const d=0<e.outofBoundPointCount&&e.outofBoundPointCount<e.offsets.length/2;let h=e.outofBoundPointCount===
e.offsets.length/2||b&&d?[0,0]:ma(e.offsets,k,c,4);const g=(h[0]+h[1])/2;var f=a.projectedExtent.spatialReference;const m=a.srcBufferExtent.spatialReference;b&&(d||4<g)&&(P(f,m,a.datumTransformation)&&(f.isGeographic||w.isSome(H(f))),c=[4,4],e=X({...a,spacing:c}),k={cols:e.size[0]+1,rows:e.size[1]+1},h=ma(e.offsets,k,c,4));e.error=h;1<c[0]&&(e.coefficients=la(e.offsets,k,d));!a.includeGCSGrid||f.isGeographic||f.isWebMercator||(m.isGeographic?e.gcsGrid={offsets:e.offsets,coefficients:e.coefficients,
spacing:c}:(b=H(f),w.isSome(b)&&!b.isEnvelope&&(f&&!f.isGeographic&&(b=String(f.wkid||f.wkt),Z.has(b)?f=Z.get(b):(f=(f.wkid?y.PeFactory.coordsys(f.wkid):y.PeFactory.fromString(y.PeDefs.PE_TYPE_PROJCS,f.wkt)).getGeogcs().getCode(),Z.set(b,f)),f=new qa({wkid:f})),f=V(a.projectedExtent,f),{offsets:a}=X({...a,srcBufferExtent:f,spacing:c}),k=la(a,k,d),e.gcsGrid={offsets:a,coefficients:k,spacing:c})));return e};z.getRasterDatasetAlignmentInfo=function(a){const b=a.storageInfo.origin.x;var c=F(a.spatialReference,
!0);if(w.isNone(c))return{originX:b,halfWorldWidth:null,pyramidsInfo:null};const e=c/2,{nativePixelSize:k,storageInfo:d,extent:h}=a,{maximumPyramidLevel:g,blockWidth:f,pyramidScalingFactor:m}=d;let l=k.x;const n=[];a=w.isSome(a.transform)&&"gcs-shift"===a.transform.type;const q=b+(a?0:e);c=a?c-b:e-b;for(let p=0;p<=g;p++){const t=(h.xmax-b)/l/f,u=c/l/f;n.push({resolutionX:l,blockWidth:f,datsetColumnCount:0===t-Math.floor(t)?t:Math.ceil(t),worldColumnCountFromOrigin:0===u-Math.floor(u)?u:Math.ceil(u),
leftMargin:Math.round(q/l)%f,rightPadding:(f-Math.round(c/l)%f)%f,originColumnOffset:Math.floor(q/l/f)});l*=m}return{originX:b,halfWorldWidth:e,pyramidsInfo:n,hasGCSSShiftTransform:a}};z.getWorldWidth=F;z.getWorldWrapCount=fa;z.load=function(){return Q.apply(this,arguments)};z.minimumGridSpacing=4;z.projectExtent=V;z.projectPoint=S;z.projectResolution=R;z.requirePE=P;z.snapExtent=function(a){a=a.clone().normalize();return 1===a.length?a[0]:ea(a)};z.snapPyramid=function(a,b,c){const {storageInfo:e,
pixelSize:k}=b;var d=0;let h=!1;var {pyramidResolutions:g}=e;if(w.isSome(g)&&g.length){a=(a.x+a.y)/2;var f=g[g.length-1];f=(f.x+f.y)/2;var m=(k.x+k.y)/2;if(a<=m)d=0;else if(a>=f)d=g.length,h=8<a/f;else{f=m;for(let l=1;l<=g.length;l++){m=(g[l-1].x+g[l-1].y)/2;if(a<=m){a===m?d=l:"down"===c?(d=l-1,h=8<a/f):d="up"===c?l:a-f>m-a||2<a/f?l:l-1;break}f=m}}c=0===d?k:g[d-1];h&&(g=Math.min(c.x,c.y),a=I.getMetersPerUnitForSR(b.spatialReference),19567<g*a&&(h=!1));return{pyramidLevel:d,pyramidResolution:new C({x:c.x,
y:c.y,spatialReference:b.spatialReference}),excessiveReading:h}}d=Math.log(a.x/k.x)/Math.LN2;a=Math.log(a.y/k.y)/Math.LN2;g=b.storageInfo.maximumPyramidLevel||0;d="down"===c?Math.floor(Math.min(d,a)):"up"===c?Math.ceil(Math.max(d,a)):Math.round((d+a)/2);0>d?d=0:d>g&&(h=d>g+3,d=g);c=2**d;b=new C({x:c*b.nativePixelSize.x,y:c*b.nativePixelSize.y,spatialReference:b.spatialReference});return{pyramidLevel:d,pyramidResolution:b,excessiveReading:h}};Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});