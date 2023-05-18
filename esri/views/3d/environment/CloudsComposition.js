// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./CloudsCompositionTechnique ../webgl-engine/core/shaderModules/interfaces ../webgl-engine/lib/glUtil3D ../../webgl/enums".split(" "),function(b,l,d,m,e,f,v,w,n,p,q,r,t){b.CloudsComposition=function(h){function g(a){var c=
h.call(this,a)||this;c._technique=new p.CloudsCompositionTechnique(a);c._vao=r.createQuadVAO(a.rctx);return c}l._inheritsLoose(g,h);var k=g.prototype;k.destroy=function(){this._technique=e.releaseMaybe(this._technique);this._vao=e.disposeMaybe(this._vao)};k.render=function(a){var c=a.bindParameters.cloudsFade;e.isNone(this._vao)||e.isNone(c.data)||(this._technique.compiled?(c=a.rctx.bindTechnique(this._technique,u,a.bindParameters),a.rctx.bindVAO(this._vao),c.assertCompatibleVertexAttributeLocations(this._vao),
a.rctx.drawArrays(t.PrimitiveType.TRIANGLE_STRIP,0,4)):this.requestRender())};return g}(m);d.__decorate([f.property({constructOnly:!0})],b.CloudsComposition.prototype,"rctx",void 0);d.__decorate([f.property({constructOnly:!0})],b.CloudsComposition.prototype,"viewingMode",void 0);d.__decorate([f.property({constructOnly:!0})],b.CloudsComposition.prototype,"planetRadius",void 0);d.__decorate([f.property({constructOnly:!0})],b.CloudsComposition.prototype,"requestRender",void 0);b.CloudsComposition=d.__decorate([n.subclass("esri.views.3d.environment.CloudsComposition")],
b.CloudsComposition);const u=new q.NoParameters;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});