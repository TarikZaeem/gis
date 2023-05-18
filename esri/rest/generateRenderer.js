// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../request ../renderers/support/jsonUtils ./query/executeQuery ./utils ../kernel ../core/urlUtils ./query/support/AttachmentInfo ./support/AttachmentQuery ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../geometry/support/normalizeUtils ../core/Error ../core/pbf ../core/unitUtils ../geometry/support/spatialReferenceUtils ./support/Query ../geometry ./support/FeatureSet ../layers/graphics/featureConversionUtils ./support/RelationshipQuery ./support/TopFeaturesQuery ./support/StatisticDefinition".split(" "),
function(n,r,t,u,v,w,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,x,O,P,Q,R,S,p){function l(){l=r._asyncToGenerator(function*(b,a,c,g){b=w.parseUrl(b);const {source:d,checkValueRange:e}=a;({classificationDefinition:a}=c);const f={...c.toJSON(),f:"json"};c=null;c="class-breaks-definition"===a?.type?a.classificationField:a?.attributeField;d&&(a={source:d?.toJSON()},f.layer=JSON.stringify(a));f.classificationDef&&(f.classificationDef=JSON.stringify(f.classificationDef));a={query:f};g&&(a={...g,...a});const h={url:b.path,
field:c,checkValueRange:e};return t(b.path+"/generateRenderer",a).then(k=>y(h,k))});return l.apply(this,arguments)}function y(b,a){const {field:c,checkValueRange:g,url:d}=b,e=a&&a.data;if(e){if(!g)return b=q(e),Promise.resolve(b);b=new p({statisticType:"min",onStatisticField:c});a=new p({statisticType:"max",onStatisticField:c});b=new x({outStatistics:[b,a]});return v.executeQuery(d,b).then(f=>{f=f.features[0].attributes;let h=null,k=null;for(const m in f)0===m.toLowerCase().indexOf("min")?h=f[m]:
k=f[m];return q(e,h,k)})}}function q(b,a,c){if("classBreaks"===b.type){const d=u.fromJSON(b);return{classBreaks:d.classBreakInfos.map((e,f)=>{0===f&&void 0!==a&&null!==a&&(e.minValue=a);f===d.classBreakInfos.length-1&&void 0!==c&&null!==c&&(e.maxValue=c);return{minValue:e.minValue,maxValue:e.maxValue,label:e.label}}),normalizationTotal:d.normalizationTotal}}const {uniqueValueInfos:g}=b;return{uniqueValues:g?.map((d,e)=>{0===e&&void 0!==a&&null!==a&&(d.value=a);e===g.length-1&&void 0!==c&&null!==c&&
(d.value=c);return{count:d.count,value:d.value,label:d.label}})??[]}}n.generateRenderer=function(b,a,c,g){return l.apply(this,arguments)};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});