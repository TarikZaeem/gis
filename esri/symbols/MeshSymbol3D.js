// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./FillSymbol3DLayer ./Symbol3D".split(" "),function(l,e,b,f,m,r,n,p,g,q){var c;const h=b.ofType({base:null,key:"type",typeMap:{fill:g}});b=c=function(k){function d(a){a=k.call(this,a)||this;a.symbolLayers=new h;a.type="mesh-3d";return a}
l._inheritsLoose(d,k);d.prototype.clone=function(){return new c({styleOrigin:f.clone(this.styleOrigin),symbolLayers:f.clone(this.symbolLayers),thumbnail:f.clone(this.thumbnail)})};d.fromSimpleFillSymbol=function(a){return new c({symbolLayers:[g.fromSimpleFillSymbol(a)]})};return d}(q);e.__decorate([m.property({type:h})],b.prototype,"symbolLayers",void 0);e.__decorate([n.enumeration({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],b.prototype,"type",void 0);return b=c=e.__decorate([p.subclass("esri.symbols.MeshSymbol3D")],
b)});