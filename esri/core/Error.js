// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers","./lang","./Logger","./Message"],function(f,k,l,d){d=function(g){function c(a,b,e){var h=g.call(this,a,b,e)||this;return f._assertThisInitialized(h)instanceof c?h:new c(a,b,e)}f._inheritsLoose(c,g);c.prototype.toJSON=function(){if(null!=this.details)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,(a,b)=>{if(b&&"object"===typeof b&&"function"===typeof b.toJSON)return b;try{return k.clone(b)}catch(e){return"[object]"}}))}}catch(a){throw l.getLogger("esri.core.Error").error(a),
a;}return{name:this.name,message:this.message,details:this.details}};c.fromJSON=function(a){return new c(a.name,a.message,a.details)};return c}(d);d.prototype.type="error";return d});