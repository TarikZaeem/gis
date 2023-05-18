// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../layers/Layer ../../layers/support/arcgisLayerUrl ../../layers/support/fetchService ../Portal ../PortalItem ./jsonContext ./portalItemUtils ../../renderers/support/styleUtils ../../support/requestPresets".split(" "),function(k,h,n,z,G,H,I,J,K,L,M,A){function p(){p=h._asyncToGenerator(function*(a,b){var c=a.instance.portalItem;if(c&&c.id){yield c.load(b);c=a.instance.portalItem;if(!c?.type||!a.supportedTypes.includes(c.type))throw new n("portal:invalid-layer-item-type",
"Invalid layer item type '${type}', expected '${expectedType}'",{type:c?.type,expectedType:a.supportedTypes.join(", ")});return N(a,b)}});return p.apply(this,arguments)}function N(a,b){return q.apply(this,arguments)}function q(){q=h._asyncToGenerator(function*(a,b){const c=a.instance,d=c.portalItem;if(d){var {url:f,title:g}=d,e=K.createForItemRead(d);if("group"===c.type)return c.read({title:g},e),O(c,a);f&&c.read({url:f},e);(a=yield B(a,b))&&c.read(a,e);c.resourceReferences={portalItem:d,paths:e.readResourcePaths??
[]};"subtype-group"!==c.type&&c.read({title:g},e);return M.loadStyleRenderer(c,e)}});return q.apply(this,arguments)}function O(a,b){return r.apply(this,arguments)}function r(){r=h._asyncToGenerator(function*(a,b){var {portalItem:c}=a;if(c){var d=c.type,f=b.layerModuleTypeMap;var g=L.hasTypeKeyword(c,"Oriented Imagery Layer")??!1;switch(d){case "Feature Service":g=g?f.OrientedImageryLayer:f.FeatureLayer;break;case "Stream Service":g=f.StreamLayer;break;case "Scene Service":g=f.SceneLayer;break;case "Feature Collection":g=
f.FeatureLayer;break;default:throw new n("portal:unsupported-item-type-as-group",`The item type '${d}' is not supported as a 'IGroupLayer'`);}var [e,l]=yield Promise.all([g(),B(b)]);b=()=>e;if("Feature Service"===d){l=c.url?yield C(l,c.url):{};if(t(l).length){const P=yield(0,f.SubtypeGroupLayer)();b=Q=>"SubtypeGroupLayer"===Q.layerType?P:e}c=yield R(c.url);return u(a,b,l,c)}return 0<m(l)?u(a,b,l):S(a,b)}});return r.apply(this,arguments)}function S(a,b){return v.apply(this,arguments)}function v(){v=
h._asyncToGenerator(function*(a,b){var {portalItem:c}=a;c?.url&&(c=yield A.fetchArcGISServiceJSON(c.url))&&u(a,b,{layers:c.layers?.map(D),tables:c.tables?.map(D)})});return v.apply(this,arguments)}function D(a){return{id:a.id,name:a.name}}function u(a,b,c,d){let f=c.layers||[];const g=c.tables||[];"Feature Collection"===a.portalItem?.type&&(f.forEach(e=>{"Table"===e?.layerDefinition?.type&&g.push(e)}),f=f.filter(e=>"Table"!==e?.layerDefinition?.type));if("coverage"in c){const e=T(c);e&&a.add(e)}f.reverse().forEach(e=>
{e=E(a,b(e),c,e,d?.(e));a.add(e)});g.reverse().forEach(e=>{e=E(a,b(e),c,e,d?.(e));a.tables.add(e)})}function E(a,b,c,d,f){a=a.portalItem;b=new b({portalItem:a.clone(),layerId:d.id});"sourceJSON"in b&&(b.sourceJSON=f);"subtype-group"!==b.type&&(b.sublayerTitleMode="service-name");"Feature Collection"===a.type&&(f={origin:"portal-item",portal:a.portal||I.getDefault()},b.read(d,f),c=c.showLegend,null!=c&&b.read({showLegend:c},f));return b}function B(a,b){return w.apply(this,arguments)}function w(){w=
h._asyncToGenerator(function*(a,b){if(!1!==a.supportsData){a=a.instance;var c=a.portalItem;if(c){var d=null;try{d=yield c.fetchData("json",b)}catch(f){}b="stream"===a.type||"oriented-imagery"===a.type?!1:"layerId"in a;return b?(c=null,b=!0,d&&0<m(d)&&(null==a.layerId&&(c=t(d),a.layerId="subtype-group"===a.type?c?.[0]:F(d)),c=U(d,a))&&(1===m(d)&&(b=!1),null!=d.showLegend&&(c.showLegend=d.showLegend)),b&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),c):d}}});
return w.apply(this,arguments)}function C(a,b){return x.apply(this,arguments)}function x(){x=h._asyncToGenerator(function*(a,b){if(null==a?.layers||null==a?.tables)b=yield A.fetchArcGISServiceJSON(b),a=a||{},a.layers=a.layers||b?.layers,a.tables=a.tables||b?.tables;return a});return x.apply(this,arguments)}function F(a){const b=a.layers;return b&&b.length?b[0].id:(a=a.tables)&&a.length?a[0].id:null}function U(a,b){const {layerId:c}=b;a=a.layers?.find(f=>f.id===c)||a.tables?.find(f=>f.id===c);var d;
if(d=a)d="feature"===b.type&&"layerType"in a&&"SubtypeGroupLayer"===a.layerType||"subtype-group"===b.type&&!("layerType"in a)?!1:!0;return d?a:null}function m(a){return(a?.layers?.length??0)+(a?.tables?.length??0)}function T(a){var {coverage:b}=a;if(!b)return null;a=new URL(b);if(b.toLowerCase().includes("item.html"))return b=a.searchParams.get("id"),z.fromPortalItem({portalItem:new J({id:b,url:a.origin})});if(G.isArcGISUrl(b))return z.fromArcGISServerUrl({url:b});throw new n("portal:oriented-imagery-layer-coverage",
"the provided coverage url couldn't be loaded as a layer");}function t(a){const b=[];a?.layers?.forEach(c=>{"SubtypeGroupLayer"===c.layerType&&b.push(c.id)});return b}function R(a){return y.apply(this,arguments)}function y(){y=h._asyncToGenerator(function*(a){({layersJSON:a}=yield H.fetchFeatureService(a));if(!a)return null;const b=[...a.layers,...a.tables];return c=>b.find(d=>d.id===c.id)});return y.apply(this,arguments)}k.getFirstLayerOrTableId=F;k.getNumLayersAndTables=m;k.getSubtypeGroupLayerIds=
t;k.load=function(a,b){return p.apply(this,arguments)};k.preprocessFSItemData=C;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});