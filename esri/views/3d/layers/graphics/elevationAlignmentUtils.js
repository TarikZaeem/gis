// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../layers/graphics/dehydratedFeatureUtils ./graphicUtils ../../support/ElevationProvider".split(" "),function(l,r,B,C,D,y,E,F,v){function z(a,c,b,d,e){const g=(E.isDehydratedPoint(a)?a.z:v.isSamplePosition(a)?a.array[a.offset+2]:a[2])||0;switch(b.mode){case "on-the-ground":b=r.unwrapOr(v.getElevationAtPoint(c,a,"ground"),0);e.verticalDistanceToGround=
0;e.sampledElevation=b;e.z=b;break;case "relative-to-ground":a=r.unwrapOr(v.getElevationAtPoint(c,a,"ground"),0);b=b.geometryZWithOffset(g,d);e.verticalDistanceToGround=b;e.sampledElevation=a;e.z=b+a;break;case "relative-to-scene":a=r.unwrapOr(v.getElevationAtPoint(c,a,"scene"),0);b=b.geometryZWithOffset(g,d);e.verticalDistanceToGround=b;e.sampledElevation=a;e.z=b+a;break;case "absolute-height":b=b.geometryZWithOffset(g,d);d=r.unwrapOr(v.getElevationAtPoint(c,a,"ground"),0);e.verticalDistanceToGround=
b-d;e.sampledElevation=d;e.z=b;break;default:e.z=0}}let A=function(){this.z=this.sampledElevation=this.verticalDistanceToGround=0};l.SymbolUpdateType=void 0;(function(a){a[a.NONE=0]="NONE";a[a.UPDATE=1]="UPDATE";a[a.RECREATE=2]="RECREATE"})(l.SymbolUpdateType||(l.SymbolUpdateType={}));const G={"absolute-height":{applyElevationAlignmentBuffer:function(a,c,b,d,e,g,f,h){g=h.calculateOffsetRenderUnits(f);h=h.featureExpressionInfoContext;c*=3;d*=3;for(f=0;f<e;++f){const k=a[c+1],n=a[c+2];b[d+0]=a[c+0];
b[d+1]=k;b[d+2]=null==h?n+g:g;c+=3;d+=3}return 0},requiresAlignment:function(a){const c=a.featureExpressionInfoContext;return 0!==a.meterUnitOffset||null!=c}},"on-the-ground":{applyElevationAlignmentBuffer:function(a,c,b,d,e,g){let f=0;const h=g.spatialReference;c*=3;d*=3;for(let k=0;k<e;++k){const n=a[c+0],m=a[c+1],p=r.unwrapOr(g.getElevation(n,m,a[c+2],h,"ground"),0);f+=p;b[d+0]=n;b[d+1]=m;b[d+2]=p;c+=3;d+=3}return f/e},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(a,
c,b,d,e,g,f,h){let k=0;f=h.calculateOffsetRenderUnits(f);h=h.featureExpressionInfoContext;const n=g.spatialReference;c*=3;d*=3;for(let m=0;m<e;++m){const p=a[c+0],q=a[c+1],w=a[c+2],t=r.unwrapOr(g.getElevation(p,q,w,n,"ground"),0);k+=t;b[d+0]=p;b[d+1]=q;b[d+2]=null==h?w+t+f:t+f;c+=3;d+=3}return k/e},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(a,c,b,d,e,g,f,h){let k=0;f=h.calculateOffsetRenderUnits(f);h=h.featureExpressionInfoContext;const n=g.spatialReference;
c*=3;d*=3;for(let m=0;m<e;++m){const p=a[c+0],q=a[c+1],w=a[c+2],t=r.unwrapOr(g.getElevation(p,q,w,n,"scene"),0);k+=t;b[d+0]=p;b[d+1]=q;b[d+2]=null==h?w+t+f:t+f;c+=3;d+=3}return k/e},requiresAlignment:()=>!0}},H=C.create(),u=new A,x=D.create();l.SampleElevationInfo=A;l.applyElevationAlignmentForHUD=function(a,c,b,d,e){z(c,b,e,d,u);F.updateVertexAttributeAuxpos1w(a,u.verticalDistanceToGround);b=u.sampledElevation;e=B.copy(H,a.transformation);x[0]=c.x;x[1]=c.y;x[2]=u.z;y.computeTranslationToOriginAndRotation(c.spatialReference,
x,e,d.spatialReference)?a.transformation=e:console.warn("Could not locate symbol object properly, it might be misplaced");return b};l.applyPerVertexElevationAlignment=function(a,c,b,d,e,g,f,h,k,n,m){const p=G[m.mode];let q=0;if(y.projectBuffer(a,c,b,d,k.spatialReference,e,h)&&(p.requiresAlignment(m)?(q=p.applyElevationAlignmentBuffer(d,e,g,f,h,k,n,m),a=g,e=f):a=d,y.projectBuffer(a,k.spatialReference,e,g,n.spatialReference,f,h)))return q};l.elevationModeChangeUpdateType=function(a,c,b){return null==
c||null==b?a.definedChanged:"on-the-ground"===c&&"on-the-ground"===b?a.staysOnTheGround:c===b||"on-the-ground"!==c&&"on-the-ground"!==b?l.SymbolUpdateType.UPDATE:a.onTheGroundChanged};l.evaluateElevationAlignmentAtPoint=function(a,c,b,d){z(a,c,b,d,u);return u.z};l.evaluateElevationInfoAtPoint=z;l.needsElevationUpdates2D=function(a){return"relative-to-ground"===a||"relative-to-scene"===a};l.needsElevationUpdates3D=function(a){return"absolute-height"!==a};Object.defineProperty(l,Symbol.toStringTag,
{value:"Module"})});