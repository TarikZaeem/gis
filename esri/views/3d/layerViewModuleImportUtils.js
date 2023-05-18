// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Error","../../core/maybe"],function(d,h,n,k){const e=a=>Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"})),f=()=>new Promise((a,b)=>d(["./layers/TileLayerView3D"],c=>a(e(c)),b)),l=()=>new Promise((a,b)=>d(["./layers/ElevationLayerView3D"],c=>a(e(c)),b)),m={"base-dynamic":()=>new Promise((a,b)=>d(["./layers/BaseDynamicLayerView3D"],c=>a(e(c)),b)),"base-elevation":l,"base-tile":f,"bing-maps":f,"building-scene":()=>
new Promise((a,b)=>d(["./layers/BuildingSceneLayerView3D"],c=>a(e(c)),b)),csv:()=>new Promise((a,b)=>d(["./layers/CSVLayerView3D"],c=>a(e(c)),b)),dimension:()=>new Promise((a,b)=>d(["./layers/DimensionLayerView3D"],c=>a(e(c)),b)),elevation:l,feature:()=>new Promise((a,b)=>d(["./layers/FeatureLayerView3D"],c=>a(e(c)),b)),geojson:()=>new Promise((a,b)=>d(["./layers/GeoJSONLayerView3D"],c=>a(e(c)),b)),graphics:()=>new Promise((a,b)=>d(["./layers/GraphicsLayerView3D"],c=>a(e(c)),b)),group:()=>new Promise((a,
b)=>d(["../layers/GroupLayerView"],c=>a(e(c)),b)),imagery:()=>new Promise((a,b)=>d(["./layers/ImageryLayerView3D"],c=>a(e(c)),b)),"integrated-mesh":()=>new Promise((a,b)=>d(["./layers/IntegratedMeshLayerView3D"],c=>a(e(c)),b)),"line-of-sight":()=>new Promise((a,b)=>d(["./layers/LineOfSightLayerView3D"],c=>a(e(c)),b)),"map-image":()=>new Promise((a,b)=>d(["./layers/MapImageLayerView3D"],c=>a(e(c)),b)),media:()=>new Promise((a,b)=>d(["./layers/MediaLayerView3D"],c=>a(e(c)),b)),"ogc-feature":()=>new Promise((a,
b)=>d(["./layers/OGCFeatureLayerView3D"],c=>a(e(c)),b)),"open-street-map":f,"oriented-imagery":()=>new Promise((a,b)=>d(["./layers/FeatureLayerView3D"],c=>a(e(c)),b)),"point-cloud":()=>new Promise((a,b)=>d(["./layers/PointCloudLayerView3D"],c=>a(e(c)),b)),voxel:()=>new Promise((a,b)=>d(["./layers/VoxelLayerView3D"],c=>a(e(c)),b)),route:()=>new Promise((a,b)=>d(["./layers/RouteLayerView3D"],c=>a(e(c)),b)),scene:a=>null==a.profile||"mesh-pyramids"===a.profile?new Promise((b,c)=>d(["./layers/SceneLayerView3D"],
g=>b(e(g)),c)):new Promise((b,c)=>d(["./layers/SceneLayerGraphicsView3D"],g=>b(e(g)),c)),stream:()=>new Promise((a,b)=>d(["./layers/StreamLayerView3D"],c=>a(e(c)),b)),tile:f,"imagery-tile":()=>new Promise((a,b)=>d(["./layers/ImageryTileLayerView3D"],c=>a(e(c)),b)),"vector-tile":()=>new Promise((a,b)=>d(["./layers/VectorTileLayerView3D"],c=>a(e(c)),b)),wcs:()=>new Promise((a,b)=>d(["./layers/ImageryTileLayerView3D"],c=>a(e(c)),b)),"web-tile":f,wfs:()=>new Promise((a,b)=>d(["./layers/WFSLayerView3D"],
c=>a(e(c)),b)),wms:()=>new Promise((a,b)=>d(["./layers/WMSLayerView3D"],c=>a(e(c)),b)),wmts:()=>new Promise((a,b)=>d(["./layers/WMTSLayerView3D"],c=>a(e(c)),b)),"geo-rss":null,kml:null,"knowledge-graph":null,"link-chart":null,"knowledge-graph-sublayer":null,"map-notes":null,"subtype-group":null,unknown:null,unsupported:null};h.layerView3DImporter={hasLayerViewModule:a=>k.isSome(m[a.type]),importLayerView:a=>{var b=m[a.type];if(k.isNone(b))throw a=a.declaredClass?a.declaredClass.slice(a.declaredClass.lastIndexOf(".")+
1):"Unknown",b=a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),new n(`${b}:view-not-supported`,`${a} is not supported in 3D`);return b(a)}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});