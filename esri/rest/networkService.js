// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../request ../core/Error ../core/Logger ../core/maybe ../core/object ../core/urlUtils ./utils ./support/NetworkServiceDescription".split(" "),function(g,l,h,r,t,u,v,m,k,w){function n(){n=l._asyncToGenerator(function*(a,c,b){if(!a)throw new r("network-service:missing-url","Url to Network service is missing");var d=k.asValidOptions({f:"json",token:c},b);({data:d}=yield h(a,d));a=10.4<=d.currentVersion?x(a,c,b):y(a,b);const {defaultTravelMode:e,supportedTravelModes:f}=
yield a;d.defaultTravelMode=e;d.supportedTravelModes=f;return w.fromJSON(d)});return n.apply(this,arguments)}function y(a,c){return p.apply(this,arguments)}function p(){p=l._asyncToGenerator(function*(a,c){var b=k.asValidOptions({f:"json"},c);({data:a}=yield h(a.replace(/\/rest\/.*$/i,"/info"),b));if(!a||!a.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};({owningSystemUrl:a}=a);const d=m.removeTrailingSlash(a)+"/sharing/rest/portals/self";({data:b}=yield h(d,b));b=v.getDeepValue("helperServices.routingUtilities.url",
b);if(!b)return{supportedTravelModes:[],defaultTravelMode:null};a=k.parseUrl(a);a={f:"json",serviceName:/\/solve$/i.test(a.path)?"Route":/\/solveclosestfacility$/i.test(a.path)?"ClosestFacility":"ServiceAreas"};c=k.asValidOptions(a,c);b=m.removeTrailingSlash(b)+"/GetTravelModes/execute";a=yield h(b,c);c=[];b=null;if(a?.data?.results?.length){a=a.data.results;for(const e of a)if("supportedTravelModes"===e.paramName){if(e.value?.features)for(const {attributes:f}of e.value.features)f&&(a=JSON.parse(f.TravelMode),
c.push(a))}else"defaultTravelMode"===e.paramName&&(b=e.value)}return{supportedTravelModes:c,defaultTravelMode:b}});return p.apply(this,arguments)}function x(a,c,b){return q.apply(this,arguments)}function q(){q=l._asyncToGenerator(function*(a,c,b){try{const d=k.asValidOptions({f:"json",token:c},b),e=m.removeTrailingSlash(a)+"/retrieveTravelModes",{data:{supportedTravelModes:f,defaultTravelMode:z}}=yield h(e,d);return{supportedTravelModes:f,defaultTravelMode:z}}catch(d){throw new r("network-service:retrieveTravelModes",
"Could not get to the NAServer's retrieveTravelModes.",{error:d});}});return q.apply(this,arguments)}const A=t.getLogger("esri.rest.networkService");g.collectGeometries=function(a,c,b,d){d[b]=[c.length,c.length+a.length];a.forEach(e=>{c.push(e.geometry)})};g.dropZValuesOffInputGeometry=function(a,c){for(let b=0;b<c.length;b++){const d=a[c[b]];if(d&&d.length)for(const e of d)e.z=void 0}A.warnOnce("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")};
g.fetchServiceDescription=function(a,c,b){return n.apply(this,arguments)};g.isInputGeometryZAware=function(a,c){for(let b=0;b<c.length;b++){const d=a[c[b]];if(d&&d.length)for(const e of d)if(u.isSome(e)&&e.hasZ)return!0}return!1};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});