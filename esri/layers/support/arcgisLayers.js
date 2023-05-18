// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ../../core/urlUtils ./arcgisLayerUrl ./fetchService ./layerUtils ./lazyLayerLoader ../../support/requestPresets".split(" "),function(D,u,h,E,k,v,w,F,x,G,l){function m(){m=h._asyncToGenerator(function*(a){const b=yield H(a.url,a.properties?.customParameters);a={...a.properties,url:a.url};if(!b.sublayerIds)return null!=b.layerOrTableId&&(a.layerId=b.layerOrTableId,a.sourceJSON=b.sourceJSON),new b.Constructor(a);
const c=new (yield new Promise((e,d)=>D(["../GroupLayer"],f=>e(Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}))),d))).default({title:b.parsedUrl.title});I(c,b,a);return c});return m.apply(this,arguments)}function y(a,b){return a?a.find(c=>c.id===b):null}function I(a,b,c){function e(d,f){d={...c,layerId:d,sublayerTitleMode:"service-name"};k.isSome(f)&&(d.sourceJSON=f);return new b.Constructor(d)}b.sublayerIds.forEach(d=>{d=e(d,y(b.sublayerInfos,d));
a.add(d)});b.tableIds.forEach(d=>{d=e(d,y(b.tableInfos,d));a.tables.add(d)})}function H(a,b){return n.apply(this,arguments)}function n(){n=h._asyncToGenerator(function*(a,b){var c=w.parse(a);k.isNone(c)&&(c=yield J(a,b));if(k.isNone(c))throw new E("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const {serverType:e,sublayer:d}=c;var f={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(e){case "MapServer":f=null!=
d?"FeatureLayer":(yield K(a,b))?"TileLayer":"MapImageLayer";break;case "ImageServer":f=yield l.fetchArcGISServiceJSON(a,{customParameters:b});const {tileInfo:z,cacheType:A}=f;f=z?"LERC"!==z?.format?.toUpperCase()||A&&"elevation"!==A.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break;case "SceneServer":var g=yield l.fetchArcGISServiceJSON(c.url.path,{customParameters:b});f="SceneLayer";if(g){const B=g?.layers;"Voxel"===g?.layerType?f="VoxelLayer":B?.length&&(g=B[0]?.layerType,null!=
g&&null!=x.sceneServiceLayerTypeToClassName[g]&&(f=x.sceneServiceLayerTypeToClassName[g]))}break;default:f=f[e]}g="FeatureServer"===e;c={parsedUrl:c,Constructor:null,layerOrTableId:g?d:void 0,sublayerIds:null,tableIds:null};L[f]&&null==d&&(a=yield M(a,e,b),g&&(c.sublayerInfos=a.layerInfos,c.tableInfos=a.tableInfos),1!==a.layerIds.length+a.tableIds.length?(c.sublayerIds=a.layerIds,c.tableIds=a.tableIds):g&&(c.layerOrTableId=a.layerIds[0]??a.tableIds[0],c.sourceJSON=a.layerInfos?.[0]??a.tableInfos?.[0]));
c.Constructor=yield N(f);return c});return n.apply(this,arguments)}function J(a,b){return p.apply(this,arguments)}function p(){p=h._asyncToGenerator(function*(a,b){b=yield l.fetchArcGISServiceJSON(a,{customParameters:b});let c=null,e=null;var d=b.type;"Feature Layer"===d||"Table"===d?(c="FeatureServer",e=b.id??null):"indexedVector"===d?c="VectorTileServer":b.hasOwnProperty("mapName")?c="MapServer":b.hasOwnProperty("bandCount")&&b.hasOwnProperty("pixelSizeX")?c="ImageServer":b.hasOwnProperty("maxRecordCount")&&
b.hasOwnProperty("allowGeometryUpdates")?c="FeatureServer":b.hasOwnProperty("streamUrls")?c="StreamServer":C(b)?(c="SceneServer",e=b.id):b.hasOwnProperty("layers")&&C(b.layers?.[0])&&(c="SceneServer");if(!c)return null;d=null!=e?w.parseNonStandardSublayerUrl(a):null;return{title:k.isSome(d)&&b.name||v.getFilename(a),serverType:c,sublayer:e,url:{path:k.isSome(d)?d.serviceUrl:v.urlToObject(a).path}}});return p.apply(this,arguments)}function C(a){return null!=a&&a.hasOwnProperty("store")&&a.hasOwnProperty("id")&&
"number"===typeof a.id}function M(a,b,c){return q.apply(this,arguments)}function q(){q=h._asyncToGenerator(function*(a,b,c){let e=!1;"FeatureServer"===b?(a=yield F.fetchFeatureService(a,{customParameters:c}),e=!!a.layersJSON,b=a.layersJSON||a.serviceJSON):b=yield l.fetchArcGISServiceJSON(a,{customParameters:c});a=b?.layers;b=b?.tables;return{layerIds:a?.map(d=>d.id).reverse()||[],tableIds:b?.map(d=>d.id).reverse()||[],layerInfos:e?a:[],tableInfos:e?b:[]}});return q.apply(this,arguments)}function N(a){return r.apply(this,
arguments)}function r(){r=h._asyncToGenerator(function*(a){return(0,G.layerLookupMap[a])()});return r.apply(this,arguments)}function K(a,b){return t.apply(this,arguments)}function t(){t=h._asyncToGenerator(function*(a,b){return(yield l.fetchArcGISServiceJSON(a,{customParameters:b})).tileInfo});return t.apply(this,arguments)}const L={FeatureLayer:!0,SceneLayer:!0};u.fromUrl=function(a){return m.apply(this,arguments)};Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});