// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/promiseUtils","./types","../../../../../views/webgl/enums"],function(k,m,n,f,d){let p=function(){function h(a,b,c,g,l){this._buffer=a;this._componentType=c;this._dataType=g;this._data=[];this._isFinalized=!1;this._accessorIndex=-1;this._accessorMax=this._accessorMin=this._accessorAttribute=null;b.bufferViews||(b.bufferViews=[]);this.index=b.bufferViews.length;this._bufferView={buffer:a.index,byteLength:-1,target:l};
a=this._getElementSize();4<=a&&l!==f.TargetBuffer.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a);b.bufferViews.push(this._bufferView);this._numComponentsForDataType=this._calculateNumComponentsForDataType()}var e=h.prototype;e.push=function(a){var b=this._data.length;this._data.push(a);if(0<=this._accessorIndex){b%=this._numComponentsForDataType;var c=this._accessorMin[b];this._accessorMin[b]="number"!==typeof c?a:Math.min(c,a);c=this._accessorMax[b];this._accessorMax[b]="number"!==typeof c?
a:Math.max(c,a)}};e.getByteOffset=function(){if(!this._isFinalized)throw Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)};e._createTypedArray=function(a,b){switch(this._componentType){case d.DataType.BYTE:return new Int8Array(a,b);case d.DataType.FLOAT:return new Float32Array(a,b);case d.DataType.SHORT:return new Int16Array(a,b);case d.DataType.UNSIGNED_BYTE:return new Uint8Array(a,b);case d.DataType.UNSIGNED_INT:return new Uint32Array(a,b);case d.DataType.UNSIGNED_SHORT:return new Uint16Array(a,
b)}};e.writeOutToBuffer=function(a,b){this._createTypedArray(a,b).set(this._data)};e.writeAsync=function(a){if(this._asyncWritePromise)throw Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=a.then(b=>{b=new Uint8Array(b);for(let c=0;c<b.length;++c)this._data.push(b[c]);delete this._asyncWritePromise})};e.startAccessor=function(a){if(0<=this._accessorIndex)throw Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length;
this._accessorAttribute=a;a=this._numComponentsForDataType;this._accessorMin=Array(a);this._accessorMax=Array(a)};e.endAccessor=function(){if(0>this._accessorIndex)throw Error("An accessor was not started, but was attempted to be ended");var a=this._getElementSize();const b=this._numComponentsForDataType,c=(this._data.length-this._accessorIndex)/b;if(c%1)throw Error("An accessor was ended with missing component values");for(let g=0;g<this._accessorMin.length;++g)"number"!==typeof this._accessorMin[g]&&
(this._accessorMin[g]=0),"number"!==typeof this._accessorMax[g]&&(this._accessorMax[g]=0);a={byteOffset:this._accessorIndex/b*a,componentType:this._componentType,count:c,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case "TEXCOORD_0":case "TEXCOORD_1":case "COLOR_0":case "WEIGHTS_0":switch(this._componentType){case d.DataType.UNSIGNED_BYTE:case d.DataType.UNSIGNED_SHORT:a.normalized=!0}}this._accessorIndex=-1;this._accessorMax=
this._accessorMin=this._accessorAttribute=null;return a};e.finalize=function(){const a=this._bufferView;return(new Promise(b=>{const c=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&c.push(this._asyncWritePromise);b(n.eachAlways(c))})).then(()=>{this._isFinalized=!0;a.byteOffset=this.getByteOffset();a.byteLength=this.dataSize;this._finalizedPromiseResolve&&this._finalizedPromiseResolve()})};e._getElementSize=function(){return this._sizeComponentType()*this._numComponentsForDataType};
e._sizeComponentType=function(){switch(this._componentType){case d.DataType.BYTE:case d.DataType.UNSIGNED_BYTE:return 1;case d.DataType.SHORT:case d.DataType.UNSIGNED_SHORT:return 2;case d.DataType.UNSIGNED_INT:case d.DataType.FLOAT:return 4}};e._calculateNumComponentsForDataType=function(){switch(this._dataType){case f.AttributeType.SCALAR:return 1;case f.AttributeType.VEC2:return 2;case f.AttributeType.VEC3:return 3;case f.AttributeType.VEC4:case f.AttributeType.MAT2:return 4;case f.AttributeType.MAT3:return 9;
case f.AttributeType.MAT4:return 16}};m._createClass(h,[{key:"dataSize",get:function(){return this._data.length*this._sizeComponentType()}},{key:"byteSize",get:function(){return 4*Math.ceil(this.dataSize/4)}},{key:"byteOffset",get:function(){if(!this._isFinalized)throw Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}},{key:"finalized",get:function(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():
this._finalizedPromise=new Promise(a=>this._finalizedPromiseResolve=a)}}]);return h}();k.BufferView=p;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});