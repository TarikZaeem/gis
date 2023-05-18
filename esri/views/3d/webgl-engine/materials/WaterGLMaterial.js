// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../core/shaderLibrary/ShaderOutput ../lib/GLMaterial ./WaterTechnique".split(" "),function(e,g,h,k,c,l){c=function(f){function d(){return f.apply(this,arguments)||this}g._inheritsLoose(d,f);var b=d.prototype;b._updateShadowState=function(a){a.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:a.shadowMap.enabled})};b._updateSSRState=function(a){a.ssr.enabled!==
this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:a.ssr.enabled})};b._updateCloudsReflectionState=function(a){a=h.isSome(a.cloudsFade.data);a!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:a})};b.ensureResources=function(a){return this._techniqueRepository.constructionContext.waterTextureRepository.ensureResources(a)};b.beginSlot=function(a){this._output===k.ShaderOutput.Color&&(this._updateShadowState(a),
this._updateSSRState(a),this._updateCloudsReflectionState(a));this._material.setParameters(this._techniqueRepository.constructionContext.waterTextureRepository.passParameters);return this.ensureTechnique(l.WaterTechnique,a)};return d}(c);e.WaterGLMaterial=c;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});