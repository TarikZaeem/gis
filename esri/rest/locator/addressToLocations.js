// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../utils ./utils ../support/AddressCandidate ../support/AddressToLocationsParameters".split(" "),function(k,m,n,f,l,p,q){function g(){g=m._asyncToGenerator(function*(b,a,c){a=q.from(a);b=f.parseUrl(b);const {address:e,...d}=a.toJSON();a=f.encode({...b.query,...e,...d,f:"json"});c=f.asValidOptions(a,c);return n(`${b.path}/findAddressCandidates`,c).then(r)});return g.apply(this,arguments)}function r({data:b}){if(!b)return[];const {candidates:a,
spatialReference:c}=b;return a?a.map(e=>{if(e){var {extent:d,location:h}=e,t=d?l.isValidExtent(d):!0;if(l.isValidLocation(h)&&t)return d&&(d.spatialReference=c),h&&(h.spatialReference=c),p.fromJSON(e)}}):[]}k.addressToLocations=function(b,a,c){return g.apply(this,arguments)};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});