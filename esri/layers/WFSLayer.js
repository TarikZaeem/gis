// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/graphics/sources/WFSSource":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/HandleOwner ../../../core/has ../../../core/Loadable ../../../core/maybe ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/typeUtils ./support/clientSideDefaults ../../ogc/wfsUtils ../../../rest/support/FeatureSet ../../../geometry/Extent".split(" "),
function(r,h,D,w,p,A,L,S,H,M,I,F,aa,W,E,m,Q,O,a,g){r.WFSSource=function(q){function v(){var n=q.apply(this,arguments)||this;n._connection=null;n.capabilities=Q.createCapabilities(!1,!1);n.type="wfs";n.refresh=M.debounce(function(){var k=h._asyncToGenerator(function*(t){yield n.load();({extent:t}=yield n._connection.invoke("refresh",t));t&&(n.sourceJSON.extent=t);return{dataChanged:!0,updates:{extent:n.sourceJSON.extent}}});return function(t){return k.apply(this,arguments)}}());return n}h._inheritsLoose(v,
q);var z=v.prototype;z.load=function(n){n=H.isSome(n)?n.signal:null;this.addResolvingPromise(this._startWorker({signal:n}));return Promise.resolve(this)};z.destroy=function(){this._connection?.close();this._connection=null};z.openPorts=function(){var n=h._asyncToGenerator(function*(){yield this.load();return this._connection.openPorts()});return function(){return n.apply(this,arguments)}}();z.queryFeatures=function(){var n=h._asyncToGenerator(function*(k,t={}){yield this.load(t);k=yield this._connection.invoke("queryFeatures",
k?k.toJSON():null,t);return a.fromJSON(k)});return function(k){return n.apply(this,arguments)}}();z.queryFeaturesJSON=function(){var n=h._asyncToGenerator(function*(k,t={}){yield this.load(t);return this._connection.invoke("queryFeatures",k?k.toJSON():null,t)});return function(k){return n.apply(this,arguments)}}();z.queryFeatureCount=function(){var n=h._asyncToGenerator(function*(k,t={}){yield this.load(t);return this._connection.invoke("queryFeatureCount",k?k.toJSON():null,t)});return function(k){return n.apply(this,
arguments)}}();z.queryObjectIds=function(){var n=h._asyncToGenerator(function*(k,t={}){yield this.load(t);return this._connection.invoke("queryObjectIds",k?k.toJSON():null,t)});return function(k){return n.apply(this,arguments)}}();z.queryExtent=function(){var n=h._asyncToGenerator(function*(k,t={}){yield this.load(t);k=yield this._connection.invoke("queryExtent",k?k.toJSON():null,t);return{count:k.count,extent:g.fromJSON(k.extent)}});return function(k){return n.apply(this,arguments)}}();z.querySnapping=
function(){var n=h._asyncToGenerator(function*(k,t={}){yield this.load(t);return this._connection.invoke("querySnapping",k,t)});return function(k){return n.apply(this,arguments)}}();z._createLoadOptions=function(){var n=h._asyncToGenerator(function*(k){const {url:t,customParameters:B,name:x,namespaceUri:G,spatialReference:P,fields:K,geometryType:N,swapXY:C}=this.layer;if(!t)throw new p("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=yield O.getCapabilities(t,
{customParameters:B,...k}));k="fields geometryType name namespaceUri spatialReference swapXY".split(" ").some(X=>null==this.layer[X])?yield O.getWFSLayerInfo(this.wfsCapabilities,x,G,{spatialReference:P,customParameters:B,signal:k?.signal}):{...O.prepareWFSLayerFields(K??[]),geometryType:N,name:x,namespaceUri:G,spatialReference:P,swapXY:C};const T=H.unwrap(O.findFeatureType(this.wfsCapabilities.readFeatureTypes(),k.name,k.namespaceUri)),ba=m.featureGeometryTypeKebabDictionary.toJSON(k.geometryType);
return{customParameters:B,featureType:T,fields:k.fields?.map(X=>X.toJSON())??[],geometryField:k.geometryField,geometryType:ba,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:k.objectIdField,spatialReference:k.spatialReference.toJSON(),swapXY:!!k.swapXY}});return function(k){return n.apply(this,arguments)}}();z._startWorker=function(){var n=h._asyncToGenerator(function*(k){const [t,B]=yield M.eachAlways([this._createLoadOptions(k),
I.open("WFSSourceWorker",{...k,strategy:L("feature-layers-workers")?"dedicated":"local"})]);var x=t.error||B.error||null;const G=B.value||null;if(x)throw G&&G.close(),x;x=t.value;this._connection=B.value;this.sourceJSON={extent:(yield this._connection.invoke("load",x,k)).extent,fields:x.fields,geometryType:x.geometryType,objectIdField:x.objectIdField,geometryField:x.geometryField,drawingInfo:Q.createDrawingInfo(x.geometryType),name:x.featureType.title,wfsInfo:{name:x.featureType.name,featureUrl:x.getFeatureUrl,
maxFeatures:3E3,swapXY:x.swapXY,supportedSpatialReferences:x.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:x.featureType.namespaceUri}}});return function(k){return n.apply(this,arguments)}}();return v}(A.HandleOwnerMixin(S));D.__decorate([F.property()],r.WFSSource.prototype,"capabilities",void 0);D.__decorate([F.property({constructOnly:!0})],r.WFSSource.prototype,"layer",void 0);D.__decorate([F.property()],r.WFSSource.prototype,"sourceJSON",void 0);D.__decorate([F.property()],
r.WFSSource.prototype,"type",void 0);D.__decorate([F.property()],r.WFSSource.prototype,"wfsCapabilities",void 0);r.WFSSource=D.__decorate([E.subclass("esri.layers.graphics.sources.WFSSource")],r.WFSSource);Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})},"esri/layers/ogc/wfsUtils":function(){define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../../request ../../core/Error ../../core/iteratorUtils ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../geometry/projection ../../geometry/support/spatialReferenceUtils ../../geometry/support/typeUtils ../graphics/sources/geojson/geojson ./dateUtils ./xmlUtils ../support/Field ../../geometry/SpatialReference ../../geometry/Extent".split(" "),
function(r,h,D,w,p,A,L,S,H,M,I,F,aa,W,E,m,Q,O){function a(){a=h._asyncToGenerator(function*(c,d){d=yield w(c,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:"2.0.0",...d?.customParameters},signal:d?.signal});d=g(d.data);H.isHTTPSProtocol(c)&&(H.hasSameOrigin(c,d.operations.DescribeFeatureType.url,!0)&&(d.operations.DescribeFeatureType.url=H.toHTTPS(d.operations.DescribeFeatureType.url)),H.hasSameOrigin(c,d.operations.GetFeature.url,!0)&&(d.operations.GetFeature.url=H.toHTTPS(d.operations.GetFeature.url)));
return d});return a.apply(this,arguments)}function g(c){c=Y(c);ia(c);V(c);c=c.firstElementChild;const d=A.cache(v(c));return{operations:q(c),get featureTypes(){return Array.from(d())},readFeatureTypes:d}}function q(c){let d=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};E.visitXML(c,{OperationsMetadata:{Operation:l=>{switch(l.getAttribute("name")){case "GetCapabilities":return{DCP:{HTTP:{Get:f=>{e.GetCapabilities.url=
f.getAttribute("xlink:href")}}}};case "DescribeFeatureType":return{DCP:{HTTP:{Get:f=>{e.DescribeFeatureType.url=f.getAttribute("xlink:href")}}}};case "GetFeature":return{DCP:{HTTP:{Get:f=>{e.GetFeature.url=f.getAttribute("xlink:href")}}},Parameter:f=>{if("outputFormat"===f.getAttribute("name"))return{AllowedValues:{Value:b=>{(b=b.textContent)&&ja.has(b.toLowerCase())&&(e.GetFeature.outputFormat=b)}}}}}}},Constraint:l=>{switch(l.getAttribute("name")){case "KVPEncoding":return{DefaultValue:f=>{d="true"===
f.textContent.toLowerCase()}};case "ImplementsResultPaging":return{DefaultValue:f=>{e.GetFeature.supportsPagination="true"===f.textContent.toLowerCase()}}}}}});if(!d)throw new p("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if(L.isNone(e.GetFeature.outputFormat))throw new p("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return e}function v(c){return E.iterateXML(c,{FeatureTypeList:{FeatureType:d=>{const e=
{typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},l=new Set([4326]),f=b=>{b=parseInt(b.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);Number.isNaN(b)||l.add(b)};E.visitXML(d,{Name:b=>{const {name:u,prefix:y}=Z(b.textContent);e.typeName=`${y}:${u}`;e.name=u;e.namespacePrefix=y;e.namespaceUri=b.lookupNamespaceURI(y)},Abstract:b=>{e.description=b.textContent},Title:b=>{e.title=b.textContent},WGS84BoundingBox:b=>
{e.extent=z(b)},DefaultSRS:f,DefaultCRS:f,OtherSRS:f,OtherCRS:f});e.title||(e.title=e.name);e.supportedSpatialReferences.push(...l);return e}}})}function z(c){let d,e,l,f;for(const b of c.children)switch(b.localName){case "LowerCorner":[d,e]=b.textContent.split(" ").map(u=>Number.parseFloat(u));break;case "UpperCorner":[l,f]=b.textContent.split(" ").map(u=>Number.parseFloat(u))}return{xmin:d,ymin:e,xmax:l,ymax:f,spatialReference:I.WGS84}}function n(c,d,e){return A.find(c,l=>e?l.name===d&&l.namespaceUri===
e:l.typeName===d||l.name===d)}function k(){k=h._asyncToGenerator(function*(c,d,e,l={}){const {featureType:f,extent:b}=yield t(c,d,e,l),{fields:u,geometryType:y,swapXY:J,objectIdField:U,geometryField:ca}=yield x(c,f.typeName,l);return{url:c.operations.GetCapabilities.url,name:f.name,namespaceUri:f.namespaceUri,fields:u,geometryField:ca,geometryType:y,objectIdField:U,spatialReference:l.spatialReference??Q.WGS84,extent:b,swapXY:J,wfsCapabilities:c,customParameters:l.customParameters}});return k.apply(this,
arguments)}function t(c,d,e){return B.apply(this,arguments)}function B(){B=h._asyncToGenerator(function*(c,d,e,l={}){const {spatialReference:f=Q.WGS84}=l;c=c.readFeatureTypes();e=d?n(c,d,e):c.next().value;if(L.isNone(e)){if(d)throw new p("wfs-layer:feature-type-not-found",`The type '${d}' could not be found in the service`);throw new p("wfs-layer:empty-service","The service is empty");}d=new O({...e.extent,spatialReference:f});if(!I.equals(f,I.WGS84))try{yield M.initializeProjection(I.WGS84,f,void 0,
l),d=M.project(d,I.WGS84)}catch{throw new p("wfs-layer:unsupported-spatial-reference","Projection not supported");}return{extent:d,spatialReference:f,featureType:e}});return B.apply(this,arguments)}function x(c,d){return G.apply(this,arguments)}function G(){G=h._asyncToGenerator(function*(c,d,e={}){const [l,f]=yield S.eachAlways([C(c.operations.DescribeFeatureType.url,d,e),K(c,d,e)]);if(l.error||f.error)throw new p("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${d}'`,
{error:l.error||f.error});const {fields:b,errors:u}=l.value??{};c=l.value?.geometryType||f.value?.geometryType;e=f.value?.swapXY??!1;if(L.isNone(c))throw new p("wfs-layer:unknown-geometry-type",`The geometry type could not be determined for type '${d}`,{typeName:d,geometryType:c,fields:b,errors:u});return{...P(b??[]),geometryType:c,swapXY:e}});return G.apply(this,arguments)}function P(c){const d=c.find(l=>"geometry"===l.type);let e=c.find(l=>"oid"===l.type);c=c.filter(l=>"geometry"!==l.type);e||(e=
new m({name:"__esri_wfs_id__",type:"oid",alias:"__esri_wfs_id__"}),c.unshift(e));return{geometryField:d?.name??null,objectIdField:e.name,fields:c}}function K(c,d){return N.apply(this,arguments)}function N(){N=h._asyncToGenerator(function*(c,d,e={}){let l,f=!1;const [b,u]=yield Promise.all([fa(c.operations.GetFeature.url,d,c.operations.GetFeature.outputFormat,{...e,count:1}),w(c.operations.GetFeature.url,{responseType:"text",query:da(d,void 0,{...e,count:1}),signal:e?.signal})]);if(c="FeatureCollection"===
b.type&&b.features[0]?.geometry){l=F.featureGeometryTypeKebabDictionary.fromJSON(aa.getGeometryType(c.type));switch(c.type){case "Point":var y=c.coordinates;break;case "LineString":case "MultiPoint":y=c.coordinates[0];break;case "MultiLineString":case "Polygon":y=c.coordinates[0][0];break;case "MultiPolygon":y=c.coordinates[0][0][0]}if(d=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data))c=y[0].toFixed(3),y=y[1].toFixed(3),e=parseFloat(d[1]).toFixed(3),d=parseFloat(d[2]).toFixed(3),
c===d&&y===e&&(f=!0)}return{geometryType:l,swapXY:f}});return N.apply(this,arguments)}function C(c,d,e){return T.apply(this,arguments)}function T(){T=h._asyncToGenerator(function*(c,d,e){c=yield w(c,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:"2.0.0",TYPENAME:d,...e?.customParameters},signal:e?.signal});return ba(d,c.data)});return T.apply(this,arguments)}function ba(c,d){const {name:e}=Z(c);d=Y(d);V(d);const l=A.find(E.iterateXML(d.firstElementChild,{element:f=>
({name:f.getAttribute("name"),typeName:Z(f.getAttribute("type")).name})}),({name:f})=>f===e);if(L.isSome(l)){const f=A.find(E.iterateXML(d.firstElementChild,{complexType:b=>b}),b=>b.getAttribute("name")===l.typeName);if(L.isSome(f))return X(f)}throw new p("wfs-layer:feature-type-not-found",`Type '${c}' not found in document`,{document:(new XMLSerializer).serializeToString(d)});}function X(c){const d=[],e=[];let l=void 0;var f=E.iterateXML(c,{complexContent:{extension:{sequence:{element:b=>b}}}});
for(const b of f){f=b.getAttribute("name");if(!f)continue;let u,y;b.hasAttribute("type")?u=Z(b.getAttribute("type")).name:E.visitXML(b,{simpleType:{restriction:ca=>{u=Z(ca.getAttribute("base")).name;return{maxLength:ka=>{y=+ka.getAttribute("value")}}}}});if(!u)continue;const J="true"===b.getAttribute("nillable");let U=!1;switch(u.toLowerCase()){case "integer":case "nonpositiveinteger":case "negativeinteger":case "long":case "int":case "short":case "byte":case "nonnegativeinteger":case "unsignedlong":case "unsignedint":case "unsignedshort":case "unsignedbyte":case "positiveinteger":e.push(new m({name:f,
alias:f,type:"integer",nullable:J}));break;case "float":case "double":case "decimal":e.push(new m({name:f,alias:f,type:"double",nullable:J}));break;case "boolean":case "string":case "gyearmonth":case "gyear":case "gmonthday":case "gday":case "gmonth":case "anyuri":case "qname":case "notation":case "normalizedstring":case "token":case "language":case "idrefs":case "entities":case "nmtoken":case "nmtokens":case "name":case "ncname":case "id":case "idref":case "entity":case "duration":case "time":e.push(new m({name:f,
alias:f,type:"string",nullable:J,length:y??255}));break;case "datetime":case "date":e.push(new m({name:f,alias:f,type:"date",nullable:J,length:y??36}));break;case "pointpropertytype":l="point";U=!0;break;case "multipointpropertytype":l="multipoint";U=!0;break;case "curvepropertytype":case "multicurvepropertytype":case "multilinestringpropertytype":l="polyline";U=!0;break;case "surfacepropertytype":case "multisurfacepropertytype":case "multipolygonpropertytype":l="polygon";U=!0;break;case "geometrypropertytype":case "multigeometrypropertytype":U=
!0;d.push(new p("wfs-layer:unknown-geometry-type",`geometry type '${u}' is not supported`,{type:(new XMLSerializer).serializeToString(c)}));break;default:d.push(new p("wfs-layer:unknown-field-type",`Unknown field type '${u}'`,{type:(new XMLSerializer).serializeToString(c)}))}U&&e.push(new m({name:f,alias:f,type:"geometry",nullable:J}))}for(const b of e)if("integer"===b.type&&!b.nullable&&ha.has(b.name.toLowerCase())){b.type="oid";break}return{geometryType:l,fields:e,errors:d}}function fa(c,d,e,l){return R.apply(this,
arguments)}function R(){R=h._asyncToGenerator(function*(c,d,e,l){({data:c}=yield w(c,{responseType:"text",query:da(d,e,l),signal:l?.signal}));c=c.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(l?.dateFields?.length){const f=new Set(l.dateFields);return JSON.parse(c,(b,u)=>f.has(b)?W.parseDate(u):u)}return JSON.parse(c)}catch(f){throw new p("wfs-layer:malformed-json","Error while parsing the\u00a0response",{response:c,error:f});}});return R.apply(this,arguments)}function da(c,d,e){return{SERVICE:"WFS",
REQUEST:"GetFeature",VERSION:"2.0.0",TYPENAMES:c,OUTPUTFORMAT:d,SRSNAME:"EPSG:4326",STARTINDEX:e?.startIndex,COUNT:e?.count,...e?.customParameters}}function ea(){ea=h._asyncToGenerator(function*(c,d,e){c=yield w(c,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:"2.0.0",TYPENAMES:d,RESULTTYPE:"hits",...e?.customParameters},signal:e?.signal});c=Y(c.data);V(c);c=Number.parseFloat(c.firstElementChild.getAttribute("numberMatched"));return Number.isNaN(c)?0:c});return ea.apply(this,
arguments)}function Y(c){return(new DOMParser).parseFromString(c.trim(),"text/xml")}function Z(c){const [d,e]=c.split(":");return{prefix:e?d:"",name:e??d}}function ia(c){if((c=c.firstElementChild?.getAttribute("version"))&&"2.0.0"!==c)throw new p("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${c}. Supported version: ${"2.0.0"}`);}function V(c){let d="",e="";E.visitXML(c.firstElementChild,{Exception:l=>{d=l.getAttribute("exceptionCode");return{ExceptionText:f=>{e=f.textContent}}}});
if(d)throw new p(`wfs-layer:${d}`,e);}const ja=new Set(["json","application/json","geojson","application/json; subtype\x3dgeojson"]),ha=new Set(["objectid","fid"]);r.WFS_OID_FIELD_NAME="__esri_wfs_id__";r.describeFeatureType=C;r.findFeatureType=n;r.getCapabilities=function(c,d){return a.apply(this,arguments)};r.getFeature=fa;r.getFeatureCount=function(c,d,e){return ea.apply(this,arguments)};r.getFeatureTypeInfo=t;r.getWFSLayerInfo=function(c,d,e){return k.apply(this,arguments)};r.parseDescribeFeatureTypeResponse=
ba;r.parseGetCapabilitiesResponse=g;r.prepareWFSLayerFields=P;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})},"esri/layers/graphics/sources/geojson/geojson":function(){define(["exports","../../../../core/Error","../../OptimizedFeature","../../OptimizedGeometry","../../../support/fieldUtils"],function(r,h,D,w,p){function*A(a){switch(a.type){case "Feature":yield a;break;case "FeatureCollection":for(const g of a.features)g&&(yield g)}}function*L(a){if(a)switch(a.type){case "Point":yield a.coordinates;
break;case "LineString":case "MultiPoint":yield*a.coordinates;break;case "MultiLineString":case "Polygon":for(const g of a.coordinates)yield*g;break;case "MultiPolygon":for(const g of a.coordinates)for(const q of g)yield*q}}function*S(a,g={}){const {geometryType:q,objectIdField:v}=g;for(const z of a){const {geometry:n,properties:k,id:t}=z;if(n&&O[n.type]!==q)continue;a=k||{};let B=void 0;v&&(B=a[v],null==t||B||(a[v]=B=t));yield new D.OptimizedFeature(n?F(new w,n,g):null,a,null,B??void 0)}}function H(a){for(const g of a)if(2<
g.length)return!0;return!1}function M(a){let g=0;for(let q=0;q<a.length;q++){const v=a[q],z=a[(q+1)%a.length];g+=v[0]*z[1]-z[0]*v[1]}return 0>=g}function I(a){const g=a[0],q=a[a.length-1];g[0]===q[0]&&g[1]===q[1]&&g[2]===q[2]||a.push(g);return a}function F(a,g,q){switch(g.type){case "LineString":return E(a,g.coordinates,q),a;case "MultiLineString":for(const z of g.coordinates)E(a,z,q);return a;case "MultiPoint":return E(a,g.coordinates,q),a;case "MultiPolygon":for(var v of g.coordinates)for(aa(a,
v[0],q),g=1;g<v.length;g++)W(a,v[g],q);return a;case "Point":return Q(a,g.coordinates,q),a;case "Polygon":v=g.coordinates;aa(a,v[0],q);for(g=1;g<v.length;g++)W(a,v[g],q);return a}}function aa(a,g,q){g=I(g);M(g)?E(a,g,q):m(a,g,q)}function W(a,g,q){g=I(g);M(g)?m(a,g,q):E(a,g,q)}function E(a,g,q){for(const v of g)Q(a,v,q);a.lengths.push(g.length)}function m(a,g,q){for(let v=g.length-1;0<=v;v--)Q(a,g[v],q);a.lengths.push(g.length)}function Q(a,g,q){const [v,z,n]=g;a.coords.push(v,z);q.hasZ&&a.coords.push(n||
0)}const O={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};r.createOptimizedFeatures=function(a,g){return Array.from(S(A(a),g))};r.getGeometryType=function(a){return O[a]};r.inferLayerProperties=function(a,g={}){const q=[];var v=new Set;const z=new Set;var n=!1;let k=null,t=!1,B=void 0;({geometryType:g=null}=g);var x=!1;for(const G of A(a)){const {geometry:P,
properties:K,id:N}=G;if(P&&(g||(g=O[P.type]),O[P.type]!==g))continue;n||(n=L(P),n=H(n));!t&&(t=null!=N)&&(B=typeof N,K&&(k=Object.keys(K).filter(C=>K[C]===N)));K&&k&&t&&null!=N&&(1<k.length?k=k.filter(C=>K[C]===N):1===k.length&&(k=K[k[0]]===N?k:[]));if(!x&&K){a=!0;for(const C in K){if(v.has(C))continue;x=K[C];if(null==x){a=!1;z.add(C);continue}a:switch(typeof x){case "string":x="esriFieldTypeString";break a;case "number":x="esriFieldTypeDouble";break a;default:x="unknown"}if("unknown"===x){z.add(C);
continue}z.delete(C);v.add(C);const T=p.normalizeFieldName(C);T&&q.push({name:T,alias:C,type:x})}x=a}}if(v=p.normalizeFieldName(1===k?.length&&k[0]||null)??void 0)for(const G of q)if(G.name===v&&p.isNumericField(G)){G.type="esriFieldTypeOID";break}return{fields:q,geometryType:g,hasZ:n,objectIdFieldName:v,objectIdFieldType:B,unknownFields:Array.from(z)}};r.validateGeoJSON=function(a){if(!a)throw new h("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==a.type&&"FeatureCollection"!==a.type)throw new h("geojson-layer:unsupported-geojson-object",
"missing or not supported GeoJSON object type",{data:a});({crs:a}=a);if(a){var g="string"===typeof a?a:"name"===a.type?a.properties.name:"EPSG"===a.type?a.properties.code:null,q=RegExp(".*(CRS84H?|4326)$","i");if(!g||!q.test(g))throw new h("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:a});}};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})},"esri/layers/ogc/dateUtils":function(){define(["exports"],function(r){function h(w){w=(new Date(w)).getTime();return Number.isNaN(w)?
null:w}const D=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;r.parseDate=function(w){var p=D.exec(w);if(p?.groups){p=p.groups;var A=+p.year,L=+p.month-1,S=+p.day,H=+(p.hours??0),M=+(p.minutes??0),I=+(p.seconds??0);if(23<H||59<M||59<I)p=null;else{var F=p.ms??"0";F=F?+F.padEnd(3,"0").substring(0,3):0;p=p.isUTC?Date.UTC(A,L,S,H,M,I,F):
p.offsetSign?6E4*("+"===p.offsetSign?-1:1)*(60*+p.offsetHours+ +p.offsetMinutes)+Date.UTC(A,L,S,H,M,I,F):(new Date(A,L,S,H,M,I,F)).getTime();p=Number.isNaN(p)?null:p}}else p=null;return p??h(w)};r.parseJSDate=h;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})},"esri/layers/ogc/xmlUtils":function(){define(["exports"],function(r){function h(w,p){if(w&&p)for(const A of w.children)A.localName in p&&(w=p[A.localName],"function"===typeof w?(w=w(A))&&h(A,w):h(A,w))}function*D(w,p){for(const A of w.children)A.localName in
p&&(w=p[A.localName],"function"===typeof w?yield w(A):yield*D(A,w))}r.iterateXML=D;r.visitXML=h;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})},"*noref":1}});
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../geometry/support/typeUtils ./Layer ./graphics/sources/WFSSource ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/FeatureEffectLayer ./mixins/FeatureReductionLayer ./mixins/OperationalLayer ./mixins/OrderedLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./ogc/wfsUtils ./support/commonProperties ./support/Field ./support/fieldProperties ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ../rest/support/Query ../support/popupUtils ../geometry/SpatialReference ../geometry/Extent".split(" "),function(r,
h,D,w,p,A,L,S,H,M,I,F,aa,W,E,m,Q,O,a,g,q,v,z,n,k,t,B,x,G,P,K,N,C,T,ba,X,fa,R,da,ea,Y,Z,ia,V,ja,ha,c){var d;D=ea.defineFieldProperties();m=d=function(e){function l(b){b=e.call(this,b)||this;b.copyright=null;b.customParameters=null;b.definitionExpression=null;b.displayField=null;b.elevationInfo=null;b.featureUrl=void 0;b.fields=null;b.fieldsIndex=null;b.fullExtent=null;b.geometryType=null;b.labelsVisible=!0;b.labelingInfo=null;b.legendEnabled=!0;b.objectIdField=null;b.operationalLayerType="WFS";b.maxFeatures=
3E3;b.mode=0;b.name=null;b.namespaceUri=null;b.outFields=null;b.popupEnabled=!0;b.popupTemplate=null;b.screenSizePerspectiveEnabled=!0;b.source=new t.WFSSource({layer:r._assertThisInitialized(b)});b.spatialReference=ha.WGS84;b.spatialReferences=[4326];b.swapXY=void 0;b.title="WFS";b.type="wfs";b.url=null;b.version=void 0;return b}r._inheritsLoose(l,e);l.fromWFSLayerInfo=function(b){const {customParameters:u,fields:y,geometryField:J,geometryType:U,name:ca,namespaceUri:ka,objectIdField:la,spatialReference:ma,
swapXY:na,url:oa,wfsCapabilities:pa}=b;return new d({customParameters:u,fields:y,geometryField:J,geometryType:U,name:ca,namespaceUri:ka,objectIdField:la,spatialReference:ma,swapXY:na,url:oa,wfsCapabilities:pa})};var f=l.prototype;f.destroy=function(){this.source?.destroy()};f.load=function(b){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},b).then(()=>this.source.load(b)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl});this.revert("objectIdField fields timeInfo spatialReference name namespaceUri".split(" "),
"service");Y.fixRendererFields(this.renderer,this.fieldsIndex);Y.fixTimeInfoFields(this.timeInfo,this.fieldsIndex)}));return Promise.resolve(this)};f.writeFields=function(b,u,y){b=b.filter(J=>J.name!==fa.WFS_OID_FIELD_NAME);this.geometryField&&b.unshift(new da({name:this.geometryField,alias:this.geometryField,type:"geometry"}));Q.setDeepValue(y,b.map(J=>J.toJSON()),u)};f.createPopupTemplate=function(b){return ja.createPopupTemplate(this,b)};f.createQuery=function(){const b=new V;b.returnGeometry=
!0;b.outFields=["*"];b.where=this.definitionExpression||"1\x3d1";const {timeOffset:u,timeExtent:y}=this;b.timeExtent=null!=u&&null!=y?y.offset(-u.value,u.unit):y||null;return b};f.getFieldDomain=function(b,u){return this.getField(b)?.domain};f.getField=function(b){return this.fieldsIndex?.get(b)};f.queryFeatures=function(b,u){return this.load().then(()=>this.source.queryFeatures(V.from(b)||this.createQuery(),u)).then(y=>{if(y?.features)for(const J of y.features)J.layer=J.sourceLayer=this;return y})};
f.queryObjectIds=function(b,u){return this.load().then(()=>this.source.queryObjectIds(V.from(b)||this.createQuery(),u))};f.queryFeatureCount=function(b,u){return this.load().then(()=>this.source.queryFeatureCount(V.from(b)||this.createQuery(),u))};f.queryExtent=function(b,u){return this.load().then(()=>this.source.queryExtent(V.from(b)||this.createQuery(),u))};f.hasDataChanged=function(){var b=r._asyncToGenerator(function*(){try{const {dataChanged:u,updates:y}=yield this.source.refresh(this.customParameters);
E.isSome(y)&&this.read(y,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0});return u}catch{}return!1});return function(){return b.apply(this,arguments)}}();r._createClass(l,[{key:"capabilities",get:function(){return this.source?.capabilities}},{key:"createQueryVersion",get:function(){this.commitProperty("definitionExpression");this.commitProperty("timeExtent");this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("capabilities");return(this._get("createQueryVersion")||
0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"parsedUrl",get:function(){return O.urlToObject(this.url)}},{key:"renderer",set:function(b){Y.fixRendererFields(b,this.fieldsIndex);this._set("renderer",b)}},{key:"wfsCapabilities",get:function(){return this.source?.wfsCapabilities},set:function(b){this.source&&(this.source.wfsCapabilities=b)}}]);return l}(N.OrderedLayer(x.CustomParametersMixin(P.FeatureReductionLayer(G.FeatureEffectLayer(B.BlendLayer(X.TemporalLayer(T.RefreshableLayer(ba.ScaleRangeLayer(K.OperationalLayer(C.PortalLayer(m.MultiOriginJSONMixin(k))))))))))));
h.__decorate([a.property({readOnly:!0})],m.prototype,"capabilities",null);h.__decorate([a.property({type:String})],m.prototype,"copyright",void 0);h.__decorate([a.property({readOnly:!0})],m.prototype,"createQueryVersion",null);h.__decorate([a.property({json:{name:"wfsInfo.customParameters",write:{overridePolicy(e){return{enabled:!!(e&&0<Object.keys(e).length),ignoreOrigin:!0}}}}})],m.prototype,"customParameters",void 0);h.__decorate([a.property({readOnly:!0})],m.prototype,"defaultPopupTemplate",null);
h.__decorate([a.property({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],m.prototype,"definitionExpression",void 0);h.__decorate([a.property({type:String})],m.prototype,"displayField",void 0);h.__decorate([a.property(R.elevationInfo)],m.prototype,"elevationInfo",void 0);h.__decorate([a.property({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"featureUrl",void 0);h.__decorate([a.property({type:[da],
json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],m.prototype,"fields",void 0);h.__decorate([z.writer("fields")],m.prototype,"writeFields",null);h.__decorate([a.property(D.fieldsIndex)],m.prototype,"fieldsIndex",void 0);h.__decorate([a.property({type:c,json:{name:"extent"}})],m.prototype,"fullExtent",void 0);h.__decorate([a.property()],m.prototype,"geometryField",void 0);h.__decorate([a.property({type:String,json:{read:{source:"layerDefinition.geometryType",
reader:n.featureGeometryTypeKebabDictionary.read},write:{target:"layerDefinition.geometryType",writer:n.featureGeometryTypeKebabDictionary.write,ignoreOrigin:!0},origins:{service:{read:n.featureGeometryTypeKebabDictionary.read}}}})],m.prototype,"geometryType",void 0);h.__decorate([a.property({type:String})],m.prototype,"id",void 0);h.__decorate([a.property(R.labelsVisible)],m.prototype,"labelsVisible",void 0);h.__decorate([a.property({type:[Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",
read:{reader:ia.reader},write:!0}})],m.prototype,"labelingInfo",void 0);h.__decorate([a.property(R.legendEnabled)],m.prototype,"legendEnabled",void 0);h.__decorate([a.property({type:["show","hide"]})],m.prototype,"listMode",void 0);h.__decorate([a.property({type:String})],m.prototype,"objectIdField",void 0);h.__decorate([a.property({type:["WFS"]})],m.prototype,"operationalLayerType",void 0);h.__decorate([a.property({type:g.Integer,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],
m.prototype,"maxFeatures",void 0);h.__decorate([a.property({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],m.prototype,"mode",void 0);h.__decorate([a.property({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"name",void 0);h.__decorate([a.property({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"namespaceUri",void 0);h.__decorate([a.property(R.opacityDrawingInfo)],
m.prototype,"opacity",void 0);h.__decorate([a.property(D.outFields)],m.prototype,"outFields",void 0);h.__decorate([a.property({readOnly:!0})],m.prototype,"parsedUrl",null);h.__decorate([a.property(R.popupEnabled)],m.prototype,"popupEnabled",void 0);h.__decorate([a.property({type:w,json:{name:"popupInfo",write:!0}})],m.prototype,"popupTemplate",void 0);h.__decorate([a.property({types:W.rendererTypes,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:W.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",
write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],m.prototype,"renderer",null);h.__decorate([a.property(R.screenSizePerspectiveEnabled)],m.prototype,"screenSizePerspectiveEnabled",void 0);h.__decorate([a.property({readOnly:!0})],m.prototype,"source",void 0);h.__decorate([a.property({type:ha,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],m.prototype,"spatialReference",void 0);
h.__decorate([a.property({readOnly:!0,type:[g.Integer],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"spatialReferences",void 0);h.__decorate([a.property({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"swapXY",void 0);h.__decorate([a.property({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],m.prototype,"title",void 0);h.__decorate([a.property({json:{read:!1},
readOnly:!0})],m.prototype,"type",void 0);h.__decorate([a.property(R.url)],m.prototype,"url",void 0);h.__decorate([a.property({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"version",void 0);h.__decorate([a.property()],m.prototype,"wfsCapabilities",null);return m=d=h.__decorate([v.subclass("esri.layers.WFSLayer")],m)});