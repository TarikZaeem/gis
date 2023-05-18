// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/maybe ../FeatureDisplayList ./Buffer ./DisplayRecordReader ../../../../webgl/VertexArrayObject".split(" "),function(t,l,x,u,v,y){let z=function(){function w(a,c){this._vaos=new Map;this._indicesInvalid=!1;this.geometryType=a;this._stage=c}var m=w.prototype;m.destroy=function(){for(const [,a]of this._vaos)l.isSome(a)&&a.dispose(!1);this._indexBuffer=l.destroyMaybe(this._indexBuffer);this._vertexBuffer=l.destroyMaybe(this._vertexBuffer)};m.insert=function(a,c,e){if(a.records.byteLength)if(e=
a.stride,this._vertexBuffer&&this._indexBuffer){var d=a.vertices.byteLength/e;this._indexBuffer.ensure(a.indices.byteLength/4);this._vertexBuffer.ensure(d);const {vertices:f,indices:b}=a;a=v.DisplayRecordReader.from(a.records);const h=this._vertexBuffer.insert(f,0,f.byteLength/e,0),k=this._indexBuffer.insert(b,0,b.byteLength/4,h);a.forEach(g=>{g.indexFrom+=k;g.vertexFrom+=h});l.unwrapOrThrow(this._records,"Expected records to be defined").link(a);if(c)this._indicesInvalid=!0;else if(this._displayList)for(c=
a.getCursor();c.next();)this._displayList.addRecord(c)}else{d=a.indices.byteLength/4;const f=a.vertices.byteLength/e,b=e/Uint32Array.BYTES_PER_ELEMENT,h=this._stage.bufferPool;this._records=v.DisplayRecordReader.from(a.records);this._indexBuffer=new u.Buffer("index",d,1,h);this._vertexBuffer=new u.Buffer("vertex",f,b,h);this._indexBuffer.insert(a.indices,0,a.indices.byteLength/4,0);this._vertexBuffer.insert(a.vertices,0,a.vertices.byteLength/e,0);c&&(this._indicesInvalid=!0)}};m.remove=function(a){if(!l.isNone(this._records))for(const c of a){a=
this._records.getCursor();if(!a.lookup(c))continue;const e=a.indexFrom,d=a.vertexFrom;let f=a.indexCount,b=a.vertexCount;for(;a.next()&&a.id===c;)f+=a.indexCount,b+=a.vertexCount;this._indexBuffer.free(e,f);this._vertexBuffer.free(d,b,!0);this._records.delete(c)}};m.getVAO=function(a,c,e,d){if(!this._vertexBuffer||!this._indexBuffer||l.isNone(this._records)||!this._vertexBuffer.bufferSize)return null;const f=d?1:0;let b=this._vaos.get(f);if(this._vertexBuffer.invalidated||this._indexBuffer.invalidated||
d&&this._indexBuffer.invalidatedComputeBuffer)l.applySome(b,k=>k.dispose(!1)),b=null;this._vertexBuffer.upload();this._indexBuffer.upload();d=this._indexBuffer.getGPUBuffer(a,1===f);const h=this._vertexBuffer.getGPUBuffer(a);b||(b=new y.VertexArrayObject(a,e,c,{geometry:h},d),this._vaos.set(f,b));return b};m.forEachCommand=function(a){if(!l.isNone(this._records)){this._sortIndices(this._records);if(!this._displayList){const c=this._cursorIndexOrder;this._displayList=x.FeatureDisplayList.from(this,
this.geometryType,this._records.getCursor(),c)}this._displayList.forEach(a)}};m._sortIndices=function(a){const c=!!this._indexBuffer.bufferSize;if(this._indicesInvalid){this._indicesInvalid=!1;for(var e=0,d=a.getCursor(),f=[],b=[],h=[];d.next();)b.push(d.index),h.push(d.sortKey),f.push(d.id);b.sort((r,n)=>{const p=h[n],q=h[r];return q===p?f[n]-f[r]:p-q});a=a.getCursor();d=c?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const r of b){if(!a.seekIndex(r))throw Error("Expected to find index");
if(c){const {indexFrom:n,indexCount:p}=a;a.indexFrom=e;for(var k=0;k<p;k++)this._indexBuffer.set(e++,d.array[n+k])}else{const {vertexFrom:n,vertexCount:p}=a;var g=this._vertexBuffer.strideInt;const q=n*g;k=q+p*g;a.vertexFrom=e/g;for(g=q;g<k;g++)this._vertexBuffer.set(e++,d.array[g])}}this._cursorIndexOrder=b;this._displayList=null}};return w}();t.Geometry=z;Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});