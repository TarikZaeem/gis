// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./pbfFeatureServiceParser"],function(e,f){e.parsePBFFeatureQuery=function(a,c){var b=f.parseFeatureQuery(a,c);a=b.queryResult.featureResult;c=b.queryResult.queryGeometry;b=b.queryResult.queryGeometryType;if(a&&a.features&&a.features.length&&a.objectIdFieldName){const g=a.objectIdFieldName;for(const d of a.features)d.attributes&&(d.objectId=d.attributes[g])}a&&(a.queryGeometry=c,a.queryGeometryType=b);return a};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});