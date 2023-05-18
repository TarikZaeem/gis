// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer".split(" "),function(l,c,g,m,f,n,p,q,a){var h;a=h=function(d){function e(b){b=d.call(this,b)||this;b.color=k.clone();b.type="water";b.waterbodySize="medium";b.waveDirection=null;b.waveStrength="moderate";return b}l._inheritsLoose(e,
d);e.prototype.clone=function(){return new h({color:m.clone(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})};return e}(a);c.__decorate([f.property({type:g,nonNullable:!0,json:{type:[n.Integer],write:(d,e,b)=>e[b]=d.toArray(g.AlphaMode.UNLESS_OPAQUE),default:()=>k.clone(),defaultEquals:d=>d.toCss(!0)===k.toCss(!0)}})],a.prototype,"color",void 0);c.__decorate([p.enumeration({Water:"water"},{readOnly:!0})],a.prototype,"type",void 0);c.__decorate([f.property({type:["small",
"medium","large"],json:{write:!0,default:"medium"}})],a.prototype,"waterbodySize",void 0);c.__decorate([f.property({type:Number,json:{write:!0,default:null}})],a.prototype,"waveDirection",void 0);c.__decorate([f.property({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],a.prototype,"waveStrength",void 0);a=h=c.__decorate([q.subclass("esri.symbols.WaterSymbol3DLayer")],a);const k=new g([0,119,190]);return a});