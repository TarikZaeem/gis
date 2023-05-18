// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ./elevationAlignmentUtils ./graphicUtils ../../support/debugFlags ../../support/ElevationProvider ../../webgl-engine/lib/GeometryWithMapPositions ../../webgl-engine/lib/VertexAttribute".split(" "),function(u,G,H,A,B,x,z,I,J,y,K,C,D){function E(a,d,h,g,e){let f=!1;var b=a.shaderTransformation;d=d.requiresSampledElevationInfo;m[0]=
b[12];m[1]=b[13];m[2]=b[14];a.invalidateBoundingInfo();var n=a.getMutableAttribute(D.VertexAttribute.POSITION);b=n.data;n=n.size;const q=b.length/n;a=new K.SamplePosition(a.mapPositions,h);let c=0,r=0;for(let v=0;v<q;v++){t[0]=b[c];t[1]=b[c+1];t[2]=b[c+2];g(a,k);d&&(r+=k.sampledElevation);if(y.TESTS_DISABLE_OPTIMIZATIONS)b[c]=a.array[a.offset],b[c+1]=a.array[a.offset+1],b[c+2]=k.z,z.projectBuffer(b,h,c,b,e.spatialReference,c,1),b[c]-=m[0],b[c+1]-=m[1],b[c+2]-=m[2],f=!0;else{l[0]=b[c]+m[0];l[1]=b[c+
1]+m[1];l[2]=b[c+2]+m[2];e.setAltitude(l,k.z);b[c]=l[0]-m[0];b[c+1]=l[1]-m[1];b[c+2]=l[2]-m[2];const w=.01/e.unitInMeters;if(Math.abs(t[0]-b[c])>=w||Math.abs(t[1]-b[c+1])>=w||Math.abs(t[2]-b[c+2])>=w)f=!0}c+=n;a.offset+=3}return{update:f,averageGeometrySampledElevation:r/q}}const L=A.create(),l=x.create(),m=x.create(),t=x.create(),p=A.create(),F=x.create(),k=new I.SampleElevationInfo;u.perLodInstanceElevationAligner=function(a,d,h,g,e){var f=a.graphics3DSymbolLayer.lodRenderer;if(G.isNone(f))return 0;
h=d.centerPointInElevationSR;g(h,k);d="absolute-height"!==d.mode?k.sampledElevation:0;g=f.instanceData;a=a.instanceIndex;g.getGlobalTransform(a,p);f=B.set(F,p[12],p[13],p[14]);y.TESTS_DISABLE_OPTIMIZATIONS?(l[0]=h.x,l[1]=h.y,l[2]=k.z,z.computeTranslationToOriginAndRotation(h.spatialReference,l,p,e.spatialReference)&&g.setGlobalTransform(a,p)):e.setAltitudeOfTransformation(k.z,p);e=.01/e.unitInMeters;(y.TESTS_DISABLE_OPTIMIZATIONS||Math.abs(p[12]-f[0])>=e||Math.abs(p[13]-f[1])>=e||Math.abs(p[14]-f[2])>=
e)&&g.setGlobalTransform(a,p);return d};u.perObjectElevationAligner=function(a,d,h,g,e){a=a.stageObject;const f=d.centerPointInElevationSR;h=0;a.metadata?.usesVerticalDistanceToGround?(g(f,k),J.updateVertexAttributeAuxpos1w(a,k.verticalDistanceToGround),h=k.sampledElevation):(g(f,k),"absolute-height"!==d.mode&&(h=k.sampledElevation));d=H.copy(L,a.transformation);g=B.set(F,d[12],d[13],d[14]);y.TESTS_DISABLE_OPTIMIZATIONS?(l[0]=f.x,l[1]=f.y,l[2]=k.z,z.computeTranslationToOriginAndRotation(f.spatialReference,
l,d,e.spatialReference)&&(a.transformation=d)):e.setAltitudeOfTransformation(k.z,d);e=.01/e.unitInMeters;if(Math.abs(d[12]-g[0])>=e||Math.abs(d[13]-g[1])>=e||Math.abs(d[14]-g[2])>=e)a.transformation=d;return h};u.perVertexElevationAligner=function(a,d,h,g,e){a=a.stageObject;const f=a.geometries;let b=0;for(const n of f){if(!C.isGeometryWithMapPositions(n))continue;const {update:q,averageGeometrySampledElevation:c}=E(n,d,h,g,e);b+=c;q&&a.geometryVertexAttrsUpdated(n)}return b/f.length};u.sharedGeometryElevationAligner=
function(a,d,h,g,e){a=a.stageObject;const f=a.geometries;if(0===f.length)return 0;let b=0,n=null,q=0,c=!1;for(const r of f){if(!C.isGeometryWithMapPositions(r))continue;const v=r.vertexAttributes.get(D.VertexAttribute.POSITION);if(v!==n){const {update:w,averageGeometrySampledElevation:M}=E(r,d,h,g,e);q=M;n=v;c=w}c&&a.geometryVertexAttrsUpdated(r);b+=q}return b/f.length};Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});