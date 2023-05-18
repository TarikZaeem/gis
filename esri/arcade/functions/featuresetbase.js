// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../ArcadeDate ../ArcadePortal ../Dictionary ../executionError ../Feature ../featureSetCollection ../featureSetUtils ../ImmutableArray ../../chunks/languageUtils ../portalUtils ../featureset/actions/Adapted ../featureset/actions/AttributeFilter ../featureset/actions/OrderBy ../featureset/actions/Top ../featureset/sources/Empty ../featureset/sources/FeatureLayerMemory ../featureset/support/OrderbyClause ../featureset/support/shared ../featureset/support/sqlUtils ./fieldStats ../../core/promiseUtils ../../core/sql/WhereClause ../../layers/FeatureLayer ../../layers/support/Field".split(" "),
function(P,y,U,V,A,l,W,Q,B,X,f,Y,u,Z,aa,ba,ca,da,ea,I,R,J,fa,w,K,E){function L(k,b,e){return M.apply(this,arguments)}function M(){M=y._asyncToGenerator(function*(k,b,e){const g=k.getVariables();if(0<g.length){const c=[];for(let d=0;d<g.length;d++)c.push(yield b.evaluateIdentifier(e,{name:g[d]}));b={};for(e=0;e<g.length;e++)b[g[e]]=c[e];k.parameters=b}return k});return M.apply(this,arguments)}function r(k,b,e=null){for(const g in k)if(g.toLowerCase()===b.toLowerCase())return k[g];return e}function S(k){if(null===
k)return null;const b={type:r(k,"type",""),name:r(k,"name","")};if("range"===b.type)b.range=r(k,"range",[]);else{b.codedValues=[];for(const e of r(k,"codedValues",[]))b.codedValues.push({name:r(e,"name",""),code:r(e,"code",null)})}return b}function N(k){if(null===k)return null;const b={},e=r(k,"wkt",null);null!==e&&(b.wkt=e);k=r(k,"wkid",null);null!==k&&(b.wkid=k);return b}function T(k){if(null===k)return null;const b={hasZ:r(k,"hasz",!1),hasM:r(k,"hasm",!1)};var e=r(k,"spatialreference",null);e&&
(b.spatialReference=N(e));e=r(k,"x",null);if(null!==e)return b.x=e,b.y=r(k,"y",null),b;e=r(k,"rings",null);if(null!==e)return b.rings=e,b;e=r(k,"paths",null);if(null!==e)return b.paths=e,b;e=r(k,"points",null);if(null!==e)return b.points=e,b;for(const g of"xmin xmax ymin ymax zmin zmax mmin mmax".split(" "))e=r(k,g,null),null!==e&&(b[g]=e);return b}P.registerFunctions=function(k){"async"===k.mode&&(k.functions.timezone=function(b,e){return k.standardFunctionAsync(b,e,function(){var g=y._asyncToGenerator(function*(c,
d,a){f.pcCheck(a,1,2,b,e);if(f.isFeatureSet(a[0])){yield a[0].load();if(1===a.length||null===a[1])return a[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(a[1]instanceof A)||!1===a[1].hasField("type"))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);c=a[1].field("type");if(!1===f.isString(c))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);switch(f.toString(c).toLowerCase()){case "preferredtimezone":return a[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;
case "editfieldsinfo":return a[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case "timeinfo":return a[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case "field":if(a[1].hasField("fieldname")&&f.isString(a[1].field("fieldname")))return a[0].dateTimeReferenceFieldIndex.fieldTimeZone(f.toString(a[1].field("fieldname")))}throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);}a=f.toDate(a[0],f.defaultTimeZone(b));if(null===a)return null;a=a.timeZone;return"system"===
a?U.ArcadeDate.systemTimeZoneCanonicalName:a});return function(c,d,a){return g.apply(this,arguments)}}())},k.functions.sqltimestamp=function(b,e){return k.standardFunctionAsync(b,e,function(){var g=y._asyncToGenerator(function*(c,d,a){f.pcCheck(a,1,3,b,e);c=a[0];if(f.isDate(c)){if(1===a.length)return c.toSQLString();if(2===a.length)return c.changeTimeZone(f.toString(a[1])).toSQLString();throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);}if(f.isFeatureSet(c)){if(3!==a.length)throw new l.ArcadeExecutionError(b,
l.ExecutionErrorCodes.InvalidParameter,e);yield c.load();d=f.toString(a[1]);if(!1===f.isDate(a[2]))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);c=c.fieldTimeZone(d);return null===c?a[2].toSQLString():a[2].changeTimeZone(c).toSQLString()}throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);});return function(c,d,a){return g.apply(this,arguments)}}())},k.signatures.push({name:"sqltimestamp",min:2,max:4}),k.functions.featuresetbyid=function(b,e){return k.standardFunctionAsync(b,
e,(g,c,d)=>{f.pcCheck(d,2,4,b,e);if(d[0]instanceof Q){g=f.toString(d[1]);c=f.defaultUndefined(d[2],null);const a=f.toBoolean(f.defaultUndefined(d[3],!0));null===c&&(c=["*"]);if(!1===f.isArray(c))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);return d[0].featureSetById(g,a,c)}throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);})},k.signatures.push({name:"featuresetbyid",min:2,max:4}),k.functions.getfeatureset=function(b,e){return k.standardFunctionAsync(b,
e,(g,c,d)=>{f.pcCheck(d,1,2,b,e);if(f.isFeature(d[0]))return g=f.defaultUndefined(d[1],"datasource"),null===g&&(g="datasource"),g=f.toString(g).toLowerCase(),B.convertToFeatureSet(d[0].fullSchema(),g,b.lrucache,b.interceptor,b.spatialReference);throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);})},k.signatures.push({name:"getfeatureset",min:1,max:2}),k.functions.featuresetbyportalitem=function(b,e){return k.standardFunctionAsync(b,e,(g,c,d)=>{f.pcCheck(d,2,5,b,e);if(null===
d[0])throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.PortalRequired,e);if(d[0]instanceof V){g=f.toString(d[1]);c=f.toString(d[2]);var a=f.defaultUndefined(d[3],null);const q=f.toBoolean(f.defaultUndefined(d[4],!0));null===a&&(a=["*"]);if(!1===f.isArray(a))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);let m=null;b.services&&b.services.portal&&(m=b.services.portal);m=Y.getPortal(d[0],m);return B.constructFeatureSetFromPortalItem(g,c,b.spatialReference,a,q,m,b.lrucache,
b.interceptor)}if(!1===f.isString(d[0]))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.PortalRequired,e);g=f.toString(d[0]);c=f.toString(d[1]);a=f.defaultUndefined(d[2],null);d=f.toBoolean(f.defaultUndefined(d[3],!0));null===a&&(a=["*"]);if(!1===f.isArray(a))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);if(b.services&&b.services.portal)return B.constructFeatureSetFromPortalItem(g,c,b.spatialReference,a,d,b.services.portal,b.lrucache,b.interceptor);throw new l.ArcadeExecutionError(b,
l.ExecutionErrorCodes.PortalRequired,e);})},k.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),k.functions.featuresetbyname=function(b,e){return k.standardFunctionAsync(b,e,(g,c,d)=>{f.pcCheck(d,2,4,b,e);if(d[0]instanceof Q){g=f.toString(d[1]);c=f.defaultUndefined(d[2],null);const a=f.toBoolean(f.defaultUndefined(d[3],!0));null===c&&(c=["*"]);if(!1===f.isArray(c))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);return d[0].featureSetByName(g,a,c)}throw new l.ArcadeExecutionError(b,
l.ExecutionErrorCodes.InvalidParameter,e);})},k.signatures.push({name:"featuresetbyname",min:2,max:4}),k.functions.featureset=function(b,e){return k.standardFunction(b,e,(g,c,d)=>{f.pcCheck(d,1,1,b,e);c=d[0];g={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(f.isString(c))c=JSON.parse(c),void 0!==c.layerDefinition?(g.layerDefinition=c.layerDefinition,g.featureSet=c.featureSet,c.layerDefinition.spatialReference&&
(g.layerDefinition.spatialReference=c.layerDefinition.spatialReference)):(g.featureSet.features=c.features,g.featureSet.geometryType=c.geometryType,g.layerDefinition.geometryType=g.featureSet.geometryType,g.layerDefinition.objectIdField=c.objectIdFieldName,g.layerDefinition.typeIdField=c.typeIdFieldName,g.layerDefinition.globalIdField=c.globalIdFieldName,g.layerDefinition.fields=c.fields,c.spatialReference&&(g.layerDefinition.spatialReference=c.spatialReference));else if(d[0]instanceof A)if(c=JSON.parse(d[0].castToText(!0)),
d=r(c,"layerdefinition"),null!==d){g.layerDefinition.geometryType=r(d,"geometrytype","");g.featureSet.geometryType=g.layerDefinition.geometryType;g.layerDefinition.globalIdField=r(d,"globalidfield","");g.layerDefinition.objectIdField=r(d,"objectidfield","");g.layerDefinition.typeIdField=r(d,"typeidfield","");var a=r(d,"spatialreference",null);a&&(g.layerDefinition.spatialReference=N(a));for(const p of r(d,"fields",[]))a={name:r(p,"name",""),alias:r(p,"alias",""),type:r(p,"type",""),nullable:r(p,"nullable",
!0),editable:r(p,"editable",!0),length:r(p,"length",null),domain:S(r(p,"domain"))},g.layerDefinition.fields.push(a);var q=r(c,"featureset",null);if(q){a={};for(var m of g.layerDefinition.fields)a[m.name.toLowerCase()]=m.name;for(var h of r(q,"features",[])){q={};m=r(h,"attributes",{});for(var n in m)q[a[n.toLowerCase()]]=m[n];g.featureSet.features.push({attributes:q,geometry:T(r(h,"geometry",null))})}}}else{g.layerDefinition.geometryType=r(c,"geometrytype","");g.featureSet.geometryType=g.layerDefinition.geometryType;
g.layerDefinition.objectIdField=r(c,"objectidfieldname","");g.layerDefinition.typeIdField=r(c,"typeidfieldname","");if(h=r(c,"spatialreference",null))g.layerDefinition.spatialReference=N(h);for(const p of r(c,"fields",[]))h={name:r(p,"name",""),alias:r(p,"alias",""),type:r(p,"type",""),nullable:r(p,"nullable",!0),editable:r(p,"editable",!0),length:r(p,"length",null),domain:S(r(p,"domain"))},g.layerDefinition.fields.push(h);h={};for(const p of g.layerDefinition.fields)h[p.name.toLowerCase()]=p.name;
for(a of r(c,"features",[])){n={};m=r(a,"attributes",{});for(q in m)n[h[q.toLowerCase()]]=m[q];g.featureSet.features.push({attributes:n,geometry:T(r(a,"geometry",null))})}}else throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);if(g.layerDefinition&&g.featureSet){b:{h=["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"];for(t of h)if(t===g.layerDefinition.geometryType){var t=!0;break b}t=
!1}t=!1===t||null===g.layerDefinition.objectIdField||""===g.layerDefinition.objectIdField||!1===f.isArray(g.layerDefinition.fields)||!1===f.isArray(g.featureSet.features)?!1:!0}else t=!1;if(!1===t)throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);""===(g?.layerDefinition?.geometryType||"")&&(g.layerDefinition.geometryType="esriGeometryNull");return da.create(g,b.spatialReference)})},k.signatures.push({name:"featureset",min:1,max:1}),k.functions.filter=function(b,e){return k.standardFunctionAsync(b,
e,function(){var g=y._asyncToGenerator(function*(c,d,a){f.pcCheck(a,2,2,b,e);if(f.isArray(a[0])||f.isImmutableArray(a[0])){c=[];var q=a[0];q instanceof X&&(q=q.toArray());d=null;if(f.isFunctionParameter(a[1]))d=a[1].createFunction(b);else throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);for(var m of q)a=d(m),fa.isPromiseLike(a)?!0===(yield a)&&c.push(m):!0===a&&c.push(m);return c}if(f.isFeatureSet(a[0])){m=yield a[0].load();m=w.WhereClause.create(a[1],m.getFieldsIndex());
c=m.getVariables();if(0<c.length){d=[];for(q=0;q<c.length;q++)d.push(yield k.evaluateIdentifier(b,{name:c[q]}));q={};for(let h=0;h<c.length;h++)q[c[h]]=d[h];m.parameters=q}return new Z({parentfeatureset:a[0],whereclause:m})}throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);});return function(c,d,a){return g.apply(this,arguments)}}())},k.signatures.push({name:"filter",min:2,max:2}),k.functions.orderby=function(b,e){return k.standardFunctionAsync(b,e,function(){var g=y._asyncToGenerator(function*(c,
d,a){f.pcCheck(a,2,2,b,e);if(f.isFeatureSet(a[0]))return c=new ea(a[1]),new aa({parentfeatureset:a[0],orderbyclause:c});throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);});return function(c,d,a){return g.apply(this,arguments)}}())},k.signatures.push({name:"orderby",min:2,max:2}),k.functions.top=function(b,e){return k.standardFunctionAsync(b,e,function(){var g=y._asyncToGenerator(function*(c,d,a){f.pcCheck(a,2,2,b,e);if(f.isFeatureSet(a[0]))return new ba({parentfeatureset:a[0],
topnum:a[1]});if(f.isArray(a[0]))return f.toNumber(a[1])>=a[0].length?a[0].slice(0):a[0].slice(0,f.toNumber(a[1]));if(f.isImmutableArray(a[0]))return f.toNumber(a[1])>=a[0].length()?a[0].slice(0):a[0].slice(0,f.toNumber(a[1]));throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);});return function(c,d,a){return g.apply(this,arguments)}}())},k.signatures.push({name:"top",min:2,max:2}),k.functions.first=function(b,e){return k.standardFunctionAsync(b,e,function(){var g=y._asyncToGenerator(function*(c,
d,a){f.pcCheck(a,1,1,b,e);return f.isFeatureSet(a[0])?(c=yield a[0].first(c.abortSignal),null!==c?(a=W.createFromGraphicLikeObject(c.geometry,c.attributes,a[0],b.timeReference),a._underlyingGraphic=c,a):c):f.isArray(a[0])?0===a[0].length?null:a[0][0]:f.isImmutableArray(a[0])?0===a[0].length()?null:a[0].get(0):null});return function(c,d,a){return g.apply(this,arguments)}}())},k.signatures.push({name:"first",min:1,max:1}),k.functions.attachments=function(b,e){return k.standardFunctionAsync(b,e,function(){var g=
y._asyncToGenerator(function*(c,d,a){f.pcCheck(a,1,2,b,e);d=c=-1;var q=null,m=!1;if(1<a.length)if(a[1]instanceof A){if(a[1].hasField("minsize")&&(c=f.toNumber(a[1].field("minsize"))),a[1].hasField("metadata")&&(m=f.toBoolean(a[1].field("metadata"))),a[1].hasField("maxsize")&&(d=f.toNumber(a[1].field("maxsize"))),a[1].hasField("types")){var h=f.toStringArray(a[1].field("types"),!1);0<h.length&&(q=h)}}else if(null!==a[1])throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);if(f.isFeature(a[0])){h=
a[0]._layer;h instanceof K&&(h=B.constructFeatureSet(h,b.spatialReference,["*"],!0,b.lrucache,b.interceptor));if(null===h||!1===f.isFeatureSet(h))return[];yield h.load();return h.queryAttachments(a[0].field(h.objectIdField),c,d,q,m)}if(null===a[0])return[];throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);});return function(c,d,a){return g.apply(this,arguments)}}())},k.signatures.push({name:"attachments",min:1,max:2}),k.functions.featuresetbyrelationshipname=function(b,
e){return k.standardFunctionAsync(b,e,function(){var g=y._asyncToGenerator(function*(c,d,a){f.pcCheck(a,2,4,b,e);c=a[0];const q=f.toString(a[1]);d=f.defaultUndefined(a[2],null);var m=f.toBoolean(f.defaultUndefined(a[3],!0));null===d&&(d=["*"]);if(!1===f.isArray(d))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);if(null===a[0])return null;if(!f.isFeature(a[0]))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);a=c._layer;a instanceof K&&(a=B.constructFeatureSet(a,
b.spatialReference,["*"],!0,b.lrucache,b.interceptor));if(null===a||!1===f.isFeatureSet(a))return null;a=yield a.load();const h=a.relationshipMetaData().filter(t=>t.name===q);if(0===h.length)return null;if(void 0!==h[0].relationshipTableId&&null!==h[0].relationshipTableId&&-1<h[0].relationshipTableId)return B.constructFeatureSetFromRelationship(a,h[0],c.field(a.objectIdField),a.spatialReference,d,m,b.lrucache,b.interceptor);let n=a.serviceUrl();if(!n)return null;n="/"===n.charAt(n.length-1)?n+h[0].relatedTableId.toString():
n+"/"+h[0].relatedTableId.toString();d=yield B.constructFeatureSetFromUrl(n,a.spatialReference,d,m,b.lrucache,b.interceptor);yield d.load();m=d.relationshipMetaData();m=m.filter(t=>t.id===h[0].id);if(!1===c.hasField(h[0].keyField)||null===c.field(h[0].keyField))return(c=yield a.getFeatureByObjectId(c.field(a.objectIdField),[h[0].keyField]))?(a=w.WhereClause.create(m[0].keyField+"\x3d @id",d.getFieldsIndex()),a.parameters={id:c.attributes[h[0].keyField]},d.filter(a)):new ca({parentfeatureset:d});a=
w.WhereClause.create(m[0].keyField+"\x3d @id",d.getFieldsIndex());a.parameters={id:c.field(h[0].keyField)};return d.filter(a)});return function(c,d,a){return g.apply(this,arguments)}}())},k.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),k.functions.featuresetbyassociation=function(b,e){return k.standardFunctionAsync(b,e,function(){var g=y._asyncToGenerator(function*(c,d,a){f.pcCheck(a,2,3,b,e);var q=a[0],m=f.toString(f.defaultUndefined(a[1],"")).toLowerCase(),h=f.isString(a[2])?
f.toString(a[2]):null;if(null===a[0])return null;if(!f.isFeature(a[0]))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);var n=q._layer;n instanceof K&&(n=B.constructFeatureSet(n,b.spatialReference,["*"],!0,b.lrucache,b.interceptor));if(null===n||!1===f.isFeatureSet(n))return null;yield n.load();a=n.serviceUrl();a=yield B.constructAssociationMetaDataFeatureSetFromUrl(a,b.spatialReference);let t=d=null;c=!1;if(null!==h&&""!==h&&void 0!==h){for(var p of a.terminals)p.terminalName===
h&&(t=p.terminalId);null===t&&(c=!0)}var v=a.associations.getFieldsIndex();p=v.get("TOGLOBALID").name;h=v.get("FROMGLOBALID").name;const x=v.get("TOTERMINALID").name,O=v.get("FROMTERMINALID").name,F=v.get("FROMNETWORKSOURCEID").name,G=v.get("TONETWORKSOURCEID").name,D=v.get("ASSOCIATIONTYPE").name,ha=v.get("ISCONTENTVISIBLE").name,ia=v.get("OBJECTID").name;for(var H of n.fields)if("global-id"===H.type){d=q.field(H.name);break}let C=null;H=new u.SqlExpressionAdapted(new E({name:"percentalong",alias:"percentalong",
type:"double"}),w.WhereClause.create("0",a.associations.getFieldsIndex()));q=new u.SqlExpressionAdapted(new E({name:"side",alias:"side",type:"string"}),w.WhereClause.create("''",a.associations.getFieldsIndex()));n={};for(var z in a.lkp)n[z]=a.lkp[z].sourceId;z=new u.StringToCodeAdapted(new E({name:"classname",alias:"classname",type:"string"}),null,n);n="";switch(m){case "midspan":n=`((${p}='${d}') OR ( ${h}='${d}')) AND (${D} IN (5))`;z.codefield=w.WhereClause.create(`CASE WHEN (${p}='${d}') THEN ${F} ELSE ${G} END`,
a.associations.getFieldsIndex());m=I.cloneField(u.AdaptedFeatureSet.findField(a.associations.fields,h));m.name="globalid";m.alias="globalid";C=new u.SqlExpressionAdapted(m,w.WhereClause.create(`CASE WHEN (${h}='${d}') THEN ${p} ELSE ${h} END`,a.associations.getFieldsIndex()));H=4<=a.unVersion?new u.OriginalField(u.AdaptedFeatureSet.findField(a.associations.fields,v.get("PERCENTALONG").name)):new u.SqlExpressionAdapted(new E({name:"percentalong",alias:"percentalong",type:"double"}),w.WhereClause.create("0",
a.associations.getFieldsIndex()));break;case "junctionedge":n=`((${p}='${d}') OR ( ${h}='${d}')) AND (${D} IN (4,6))`;z.codefield=w.WhereClause.create(`CASE WHEN (${p}='${d}') THEN ${F} ELSE ${G} END`,a.associations.getFieldsIndex());m=I.cloneField(u.AdaptedFeatureSet.findField(a.associations.fields,h));m.name="globalid";m.alias="globalid";C=new u.SqlExpressionAdapted(m,w.WhereClause.create(`CASE WHEN (${h}='${d}') THEN ${p} ELSE ${h} END`,a.associations.getFieldsIndex()));q=new u.SqlExpressionAdapted(new E({name:"side",
alias:"side",type:"string"}),w.WhereClause.create(`CASE WHEN (${D}=4) THEN 'from' ELSE 'to' END`,a.associations.getFieldsIndex()));break;case "connected":m=`${p}='@T'`;v=`${h}='@T'`;null!==t&&(m+=` AND ${x}=@A`,v+=` AND ${O}=@A`);n="(("+m+") OR ("+v+"))";n=f.multiReplace(n,"@T",d??"");m=f.multiReplace(m,"@T",d??"");null!==t&&(m=f.multiReplace(m,"@A",t.toString()),n=f.multiReplace(n,"@A",t.toString()));z.codefield=w.WhereClause.create("CASE WHEN "+m+` THEN ${F} ELSE ${G} END`,a.associations.getFieldsIndex());
d=I.cloneField(u.AdaptedFeatureSet.findField(a.associations.fields,h));d.name="globalid";d.alias="globalid";C=new u.SqlExpressionAdapted(d,w.WhereClause.create("CASE WHEN "+m+` THEN ${h} ELSE ${p} END`,a.associations.getFieldsIndex()));break;case "container":n=`${p}='${d}' AND ${D} = 2`;null!==t&&(n+=` AND ${x} = `+t.toString());z.codefield=F;n="( "+n+" )";C=new u.FieldRename(u.AdaptedFeatureSet.findField(a.associations.fields,h),"globalid","globalid");break;case "content":n=`(${h}='${d}' AND ${D} = 2)`;
null!==t&&(n+=` AND ${O} = `+t.toString());z.codefield=G;n="( "+n+" )";C=new u.FieldRename(u.AdaptedFeatureSet.findField(a.associations.fields,p),"globalid","globalid");break;case "structure":n=`(${p}='${d}' AND ${D} = 3)`;null!==t&&(n+=` AND ${x} = `+t.toString());z.codefield=F;n="( "+n+" )";C=new u.FieldRename(u.AdaptedFeatureSet.findField(a.associations.fields,h),"globalid","globalId");break;case "attached":n=`(${h}='${d}' AND ${D} = 3)`;null!==t&&(n+=` AND ${O} = `+t.toString());z.codefield=G;
n="( "+n+" )";C=new u.FieldRename(u.AdaptedFeatureSet.findField(a.associations.fields,p),"globalid","globalId");break;default:throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);}c&&(n="1 \x3c\x3e 1");return new u.AdaptedFeatureSet({parentfeatureset:a.associations,adaptedFields:[new u.OriginalField(u.AdaptedFeatureSet.findField(a.associations.fields,ia)),new u.OriginalField(u.AdaptedFeatureSet.findField(a.associations.fields,ha)),C,q,z,H],extraFilter:n?w.WhereClause.create(n,
a.associations.getFieldsIndex()):null})});return function(c,d,a){return g.apply(this,arguments)}}())},k.signatures.push({name:"featuresetbyassociation",min:2,max:6}),k.functions.groupby=function(b,e){return k.standardFunctionAsync(b,e,function(){var g=y._asyncToGenerator(function*(c,d,a){f.pcCheck(a,3,3,b,e);if(!f.isFeatureSet(a[0]))throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);const q=yield a[0].load();c=[];d=[];let m=!1;var h=[];if(f.isString(a[1]))h.push(a[1]);else if(a[1]instanceof
A)h.push(a[1]);else if(f.isArray(a[1]))h=a[1];else if(f.isImmutableArray(a[1]))h=a[1].toArray();else throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);for(var n of h)if(f.isString(n)){h=w.WhereClause.create(f.toString(n),q.getFieldsIndex());var t=!0===R.isSingleField(h)?f.toString(n):"%%%%FIELDNAME";c.push({name:t,expression:h});"%%%%FIELDNAME"===t&&(m=!0)}else if(n instanceof A){h=n.hasField("name")?n.field("name"):"%%%%FIELDNAME";t=n.hasField("expression")?n.field("expression"):
"";"%%%%FIELDNAME"===h&&(m=!0);if(!h)throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);c.push({name:h,expression:w.WhereClause.create(t?t:h,q.getFieldsIndex())})}else throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);h=[];if(f.isString(a[2]))h.push(a[2]);else if(f.isArray(a[2]))h=a[2];else if(f.isImmutableArray(a[2]))h=a[2].toArray();else if(a[2]instanceof A)h.push(a[2]);else throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,
e);for(var p of h)if(p instanceof A){n=p.hasField("name")?p.field("name"):"";h=p.hasField("statistic")?p.field("statistic"):"";t=p.hasField("expression")?p.field("expression"):"";if(!n||!h||!t)throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);d.push({name:n,statistic:h.toLowerCase(),expression:w.WhereClause.create(t,q.getFieldsIndex())})}else throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);if(m){p={};for(var v of q.fields)p[v.name.toLowerCase()]=
1;for(const x of c)"%%%%FIELDNAME"!==x.name&&(p[x.name.toLowerCase()]=1);for(const x of d)"%%%%FIELDNAME"!==x.name&&(p[x.name.toLowerCase()]=1);v=0;for(const x of c)if("%%%%FIELDNAME"===x.name){for(;1===p["field_"+v.toString()];)v++;p["field_"+v.toString()]=1;x.name="FIELD_"+v.toString()}}for(const x of c)yield L(x.expression,k,b);for(const x of d)yield L(x.expression,k,b);return a[0].groupby(c,d)});return function(c,d,a){return g.apply(this,arguments)}}())},k.signatures.push({name:"groupby",min:3,
max:3}),k.functions.distinct=function(b,e){return k.standardFunctionAsync(b,e,function(){var g=y._asyncToGenerator(function*(c,d,a){if(f.isFeatureSet(a[0])){f.pcCheck(a,2,2,b,e);d=yield a[0].load();c=[];var q=[];if(f.isString(a[1]))q.push(a[1]);else if(a[1]instanceof A)q.push(a[1]);else if(f.isArray(a[1]))q=a[1];else if(f.isImmutableArray(a[1]))q=a[1].toArray();else throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);let t=!1;for(var m of q)if(f.isString(m)){q=w.WhereClause.create(f.toString(m),
d.getFieldsIndex());var h=!0===R.isSingleField(q)?f.toString(m):"%%%%FIELDNAME";c.push({name:h,expression:q});"%%%%FIELDNAME"===h&&(t=!0)}else if(m instanceof A){q=m.hasField("name")?m.field("name"):"%%%%FIELDNAME";h=m.hasField("expression")?m.field("expression"):"";"%%%%FIELDNAME"===q&&(t=!0);if(!q)throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,e);c.push({name:q,expression:w.WhereClause.create(h?h:q,d.getFieldsIndex())})}else throw new l.ArcadeExecutionError(b,l.ExecutionErrorCodes.InvalidParameter,
e);if(t){m={};for(var n of d.fields)m[n.name.toLowerCase()]=1;for(const p of c)"%%%%FIELDNAME"!==p.name&&(m[p.name.toLowerCase()]=1);n=0;for(const p of c)if("%%%%FIELDNAME"===p.name){for(;1===m["field_"+n.toString()];)n++;m["field_"+n.toString()]=1;p.name="FIELD_"+n.toString()}}for(const p of c)yield L(p.expression,k,b);return a[0].groupby(c,[])}a:{if(1===a.length){if(f.isArray(a[0])){a=J.calculateStat("distinct",a[0],-1);break a}if(f.isImmutableArray(a[0])){a=J.calculateStat("distinct",a[0].toArray(),
-1);break a}}a=J.calculateStat("distinct",a,-1)}return a});return function(c,d,a){return g.apply(this,arguments)}}())})};Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});