// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../geometry/Extent ../../geometry/Point ../../geometry/SpatialReference ../../layers/support/RasterInfo ../utils ../support/FeatureSet".split(" "),function(n,y,e,w,z,A,B,p,C){function x(c,b,a){return q.apply(this,arguments)}function q(){q=y._asyncToGenerator(function*(c,b,a){c=p.parseUrl(c);const {renderingRule:r,sourceJSON:D}=b||{};b=r?JSON.stringify(r.rasterFunctionDefinition||r):null;b=p.encode({...c.query,renderingRule:b,
f:"json"});b=p.asValidOptions(b,a);c=c.path;a=D||(yield e(c,b).then(f=>f.data));var d=a.hasRasterAttributeTable?e(`${c}/rasterAttributeTable`,b):null,g=a.hasColormap?e(`${c}/colormap`,b):null,k=a.hasHistograms?e(`${c}/histograms`,b):null,t=10.3<=a.currentVersion?e(`${c}/keyProperties`,b):null;c=a.hasMultidimensions?e(`${c}/multidimensionalInfo`,b):null;b=yield Promise.allSettled([d,g,k,t,c]);c=null;if(a.minValues&&a.minValues.length===a.bandCount)for(c=[],d=0;d<a.minValues.length;d++)c.push({min:a.minValues[d],
max:a.maxValues[d],avg:a.meanValues[d],stddev:a.stdvValues[d]});g=w.fromJSON(a.extent);d=Math.ceil(g.width/a.pixelSizeX-.1);g=Math.ceil(g.height/a.pixelSizeY-.1);k=A.fromJSON(a.spatialReference||a.extent.spatialReference);t="fulfilled"===b[0].status?b[0].value?C.fromJSON(b[0].value.data):null:null;const E="fulfilled"===b[1].status?b[1].value?.data.colormap:null,F="fulfilled"===b[2].status?b[2].value?.data.histograms:null,h="fulfilled"===b[3].status?b[3].value?.data??{}:{};b="fulfilled"===b[4].status?
b[4].value?.data.multidimensionalInfo:null;b?.variables?.length&&b.variables.forEach(f=>{f.statistics?.length&&f.statistics.forEach(l=>{l.avg=l.mean;l.stddev=l.standardDeviation})});const {defaultVariable:u,serviceDataType:m}=a;u&&u!==h.DefaultVariable&&(h.DefaultVariable=u);m&&m.includes("esriImageServiceDataTypeVector")&&!m.includes(h.DataType)&&(h.DataType=m.replace("esriImageServiceDataType",""));let v=a.noDataValue;a.noDataValues?.length&&a.noDataValues.some(f=>f!==v)&&(v=a.noDataValues);return new B({width:d,
height:g,bandCount:a.bandCount,extent:w.fromJSON(a.extent),spatialReference:k,pixelSize:new z({x:a.pixelSizeX,y:a.pixelSizeY,spatialReference:k}),pixelType:a.pixelType.toLowerCase(),statistics:c,attributeTable:t,colormap:E,histograms:F,keyProperties:h,noDataValue:v,multidimensionalInfo:b})});return q.apply(this,arguments)}n.fetchServiceRasterInfo=function(c,b,a){return x(c,{sourceJSON:b},a)};n.generateRasterInfo=function(c,b,a){return x(c,{renderingRule:b},a)};Object.defineProperty(n,Symbol.toStringTag,
{value:"Module"})});