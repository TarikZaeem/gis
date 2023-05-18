// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./Domain".split(" "),function(h,e,g,d,n,k,l,m){var f;d=f=function(c){function a(b){b=c.call(this,b)||this;b.maxValue=null;b.minValue=null;b.type="range";return b}h._inheritsLoose(a,c);a.prototype.clone=function(){return new f({maxValue:this.maxValue,
minValue:this.minValue,name:this.name})};return a}(m);e.__decorate([g.property({type:Number,json:{type:[Number],read:{source:"range",reader(c,a){return a.range&&a.range[1]}},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(c,a,b){a[b]=[this.minValue||0,c]}}}})],d.prototype,"maxValue",void 0);e.__decorate([g.property({type:Number,json:{type:[Number],read:{source:"range",reader(c,a){return a.range&&a.range[0]}},write:{target:"range",
writer(c,a,b){a[b]=[c,this.maxValue||0]}}}})],d.prototype,"minValue",void 0);e.__decorate([k.enumeration({range:"range"})],d.prototype,"type",void 0);return d=f=e.__decorate([l.subclass("esri.layers.support.RangeDomain")],d)});