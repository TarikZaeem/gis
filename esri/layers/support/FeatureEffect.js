// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/JSONSupport ../../core/maybe ../../core/object ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../effects/jsonUtils ./FeatureFilter".split(" "),function(t,g,p,b,u,q,k,l,m,v,d,w){var n;l={read:{reader:d.read},write:{writer:d.write,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==
this.excludedEffect}}}};d={read:{reader:d.read},write:{writer:d.write,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}};m={name:"showExcludedLabels",default:!0};b=n=function(c){function e(a){a=c.call(this,a)||this;a.filter=null;a.includedEffect=null;a.excludedEffect=null;a.excludedLabelsVisible=!1;return a}t._inheritsLoose(e,c);var h=e.prototype;h.write=function(a,f){a=c.prototype.write.call(this,a,f);if(f?.origin){if(a.filter){const r=Object.keys(a.filter);
if(1<r.length||"where"!==r[0])return f.messages?.push(new p("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:f.layer,effect:this})),null}if("showExcludedLabels"in a)return f.messages?.push(new p("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:f.layer,effect:this})),null}return a};h.clone=function(){return new n({filter:u.isSome(this.filter)?
this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})};return e}(b.JSONSupport);g.__decorate([k.property({type:w,json:{write:{allowNull:!0,writer(c,e,h,a){(c=c?.write({},a))&&0!==Object.keys(c).length?q.setDeepValue(h,c,e):q.setDeepValue(h,null,e)}}}})],b.prototype,"filter",void 0);g.__decorate([k.property({json:{write:!0,origins:{"web-map":l,"portal-item":l}}})],b.prototype,"includedEffect",void 0);g.__decorate([k.property({json:{write:!0,
origins:{"web-map":d,"portal-item":d}}})],b.prototype,"excludedEffect",void 0);g.__decorate([k.property({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":m,"portal-item":m}}})],b.prototype,"excludedLabelsVisible",void 0);return b=n=g.__decorate([v.subclass("esri.layers.support.FeatureEffect")],b)});