// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/lang","../../../../core/maybe","../support/attributeUtils"],function(y,C,z,A){function D(a,b){const c=b.edits.updateFeatures;if(!c||0===c.length)return new B;const l=E(b),g=new B;b=new Map;for(let d=0;d<a.attributeStorageInfo.length;d++)b.set(a.attributeStorageInfo[d].name,d);const q=a.fieldsIndex,m=a.objectIdField,u=c.filter(d=>{d=A.attributeLookup(q,d.attributes,m);return l.has(d)});a.forEachNode((d,e)=>{const v=new Set(e);for(const n of u){const p=A.attributeLookup(q,
n.attributes,m);if(!v.has(p))continue;const w=e.indexOf(p);for(const x in n.attributes){var h=a.fieldsIndex.normalizeFieldName(x);var f=g;var k=d.index,r=f.get(k);r?f=r:(r=new F,f.set(k,r),f=r);(k=null!=h&&f.get(h))?h=k:(k=[],f.set(h,k),h=k);h.push({featureIndex:w,featureId:p,value:n.attributes[x]})}}});return g}function E(a){const b=new Set;if(!a.updatedFeatures)return b;for(const c of a.updatedFeatures)null!=c.objectId&&null==c.error&&b.add(c.objectId);return b}const G={setAttribute(){},rollback(){},
commit(){}};var t;(function(a){a[a.EDITING=0]="EDITING";a[a.ROLLED_BACK=1]="ROLLED_BACK";a[a.COMMITTED=2]="COMMITTED"})(t||(t={}));const F=Map,B=Map;y.createInteractiveEditSession=function(a,b){const c=b.attributes[a.objectIdField];var l=a.sessions.get(c);if(l)return l;const g=C.clone(b.attributes),q=new Set;if(null==c)return G;const m=a.i3sOverrides.createInteractiveEditSession(c),u=new Map;let d=t.EDITING;l={setAttribute(e,v){if(d===t.EDITING){var h=a.fieldsIndex.get(e);if(!z.isNone(h)){var f=a.attributeStorageInfo.findIndex(n=>
n.name===h.name);if(!(0>f)){m.set(f,v);var k=a.attributeStorageInfo[f],r=!1;q.add(e);a.forEachNode((n,p)=>{var w=u.get(n);null==w?(p=p.indexOf(c),u.set(n,p)):p=w;if(-1!==p&&(w=a.getAttributeData(n.index))){const x=w[k.name];x&&(x[p]=v,a.setAttributeData(n.index,w,b),r=!0)}});r&&a.clearMemCache()}}}},rollback(){if(d===t.EDITING){for(const e of q)this.setAttribute(e,g[e]);m.rollback();d=t.ROLLED_BACK;a.sessions.delete(c)}},commit(){d===t.EDITING&&(m.commit(),d=t.COMMITTED,a.sessions.delete(c))}};a.sessions.set(c,
l);return l};y.processAttributeEdits=function(a,b){b=D(a,b);if(0!==b.size){var c=new Map;for(let g=0;g<a.attributeStorageInfo.length;g++)c.set(a.attributeStorageInfo[g].name,g);var l=!1;b.forEach((g,q)=>{const m=a.getAttributeData(q);let u=!1;g.forEach((d,e)=>{const v=z.isSome(m)?m[e]:null;e=c.get(e);for(const {featureIndex:h,value:f,featureId:k}of d)v&&(v[h]=f,l=u=!0),a.i3sOverrides.updateAttributeValue(k,e,f)});u&&a.setAttributeData(q,m,null)});l&&a.clearMemCache()}};y.processGeometryEdits=function(a,
b){b=[...b.addedFeatures,...b.updatedFeatures,...b.deletedFeatures];for(const c of b)c.objectId&&a.i3sOverrides.updateGeometry(c.objectId)};Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});