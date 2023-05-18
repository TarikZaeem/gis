// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/mathUtils ../../../core/maybe ../../../core/promiseUtils ../../../geometry/Multipoint ../../../geometry/support/coordsUtils ../../../geometry/support/spatialReferenceUtils ../../../views/support/QueueProcessor ../../../views/support/Scheduler ./constants ./geometryUtils ./ProfileGenerationError ./statisticsUtils ../../support/traversalUtils".split(" "),function(v,r,K,L,w,u,M,N,O,P,Q,z,A,t,R,S){function B(){B=
r._wrapAsyncGenerator(function*(a,b){const {view:c,geometry:g,elevationInfo:h,providers:l,options:k}=a;var f=c.spatialReference;if(!f||w.isNone(g)||!A.isValidInputPath(g))throw new t.ProfileGenerationError(t.ProfileGenerationErrorCause.InvalidGeometry);const e=l.length;if(0===e)return w.none;var m=Math.round(k.maxTotalSamples/e);if(A.countPoints(g)>m)throw new t.ProfileGenerationError(t.ProfileGenerationErrorCause.TooComplex);var n=yield r._awaitAsyncGenerator(A.densifyPath(g,h,c,f,k,m,b)),p=0;f=
Array(e);m=Array(e);for(let d=0;d<e;d++){const q=T(n);f[d]=q;p+=q.samples.length;m[d]=G({...a,provider:l[d],result:q,densificationResult:n},b)[Symbol.iterator]()}if(p>k.maxTotalSamples)throw new t.ProfileGenerationError(t.ProfileGenerationErrorCause.TooComplex);n=yield r._awaitAsyncGenerator(Promise.all(m.map(d=>{d=d.next();return!0===d.done?Promise.resolve(null):d.value})));u.throwIfAborted(b);for(p=0;p<e;p++)f[p]=n[p];yield f;yield r._awaitAsyncGenerator(u.after(a.delayAfterPreview??z.getConfig().delayAfterPreviewMillis,
null,b.signal));a=[];try{let d;do for(d=!1,n=0;n<e;n++){const q=m[n].next();!1===q.done&&(a.push({resultPromise:q.value,index:n}),d=!0)}while(d)}finally{m.forEach(d=>d.return?.())}for(const {resultPromise:d,index:q}of a)f[q]=yield r._awaitAsyncGenerator(d),u.throwIfAborted(b),yield f;w.forEachSome(f,d=>{d.progress=1});yield f});return B.apply(this,arguments)}function*G(a,b){var {densificationResult:c}=a;a={...a,abortOptions:b,densificationResult:c};b=S.breadthFirstBinaryPartitioning(0,a.result.samples.length);
c=b.slice(0,a.provider.numSamplesForPreview);yield H(a,c,!0);b=K.splitIntoChunks(b,a.provider.numSamplesPerChunk);for(const g of b)yield H(a,g,!1)}function H(a,b,c){return C.apply(this,arguments)}function C(){C=r._asyncToGenerator(function*({densificationResult:a,result:b,provider:c,queue:g,abortOptions:h,cache:l},k,f){const {densifiedPath:e,pathLength:m}=a;a=b.spatialReference;const {samples:n}=b,p=[];for(let d=0;d<k.length;d++)p[d]=n[k[d]].coordinate;try{return yield g.push({geometry:new M({spatialReference:a,
points:p,hasZ:e.hasZ}),provider:c,indices:k,preview:f,result:b,queryOptions:{...z.getConfig().defaultQueryOptions(),minDemResolution:f?Math.round(m/c.numSamplesForPreview):Math.round(m/n.length),cache:l}},h),{...b}}catch(d){return u.isAbortError(d)?null:z.ERROR_RESULT}});return C.apply(this,arguments)}function U(a){return D.apply(this,arguments)}function D(){D=r._asyncToGenerator(function*({geometry:a,provider:b,indices:c,preview:g,result:h,queryOptions:l}){if(0!==c.length){a=(yield V(b,a,l)).geometry;
var {hasZ:k,points:f}=a;l=l.noDataValue;({samples:a}=h);for(b=0;b<c.length;b++){const e=a[c[b]];if(e.isHole)continue;const m=k?f[b][2]:null;null===m||m===l?e.sampledZ=null:(h.hasZ=!0,e.sampledZ=m);e.sampled=!0}I(a);h.progress=g?0:h.progress+c.length/a.length;h.statistics=R.getStatistics(h.samples,h.spatialReference)}});return D.apply(this,arguments)}function I(a){const b=a.length-1;var c=0;for(let e=1;e<=b;e++)if(a[e].sampled||e===b){a:{var g=a,h=c;c=e;if(1===c-h)break a;var l=g[h],k=l.sampledZ,f=
g[c];const m=f.sampledZ;if(w.isNone(k)||w.isNone(m))for(k=h+1;k<c;k++)g[k].sampledZ=null;else for(l=l.distance,f=f.distance-l,h+=1;h<c;h++){const n=g[h];n.sampledZ=L.lerp(k,m,(n.distance-l)/f)}}c=e}}function T({densifiedPath:a,distances:b}){const c=a.spatialReference,g=O.getInfo(c);a=a.paths;const h=a.length,l=[];let k=null,f=0;for(let p=0;p<h;p++){const d=a[p],q=d.length,W=b[p];for(let x=0;x<q;x++){const y=d[x],E=W[x];g&&(y[0]=N.unnormalizedCoordinate(y[0],g.valid[0],g.valid[1]));if(k&&0===x){var e=
l,m=y,n=E;e.push(J(k,f));e.push(J(m,n))}l.push({coordinate:y,distance:E,sampledZ:null,sampled:!1,isHole:!1});k=y;f=E}}return{progress:0,samples:l,hasZ:!1,statistics:null,spatialReference:c}}function J(a,b){return{coordinate:a,distance:b,sampledZ:null,sampled:!0,isHole:!0}}function V(a,b,c){return F.apply(this,arguments)}function F(){F=r._asyncToGenerator(function*(a,b,c){try{return yield a.queryElevation(b,c)}catch(g){throw new t.ProfileGenerationError(t.ProfileGenerationErrorCause.ElevationQueryError);
}});return F.apply(this,arguments)}v.createProfileQueue=function(a){return new P.QueueProcessor({priority:Q.TaskPriority.ELEVATION_PROFILE,concurrency:1,scheduler:a,process:function(){var b=r._asyncToGenerator(function*(c){u.throwIfAborted(c.queryOptions);try{yield U(c)}catch(g){u.throwIfNotAbortError(g)}});return function(c){return b.apply(this,arguments)}}()})};v.generateProfile=G;v.generateProfiles=function(a,b){return B.apply(this,arguments)};v.interpolateElevations=I;Object.defineProperty(v,
Symbol.toStringTag,{value:"Module"})});