// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ./ShadowCastAccumulate.glsl ../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration".split(" "),
function(h,r,k,t,u,v,w,x,g,f,y,z,A,l){function m(d){const e=new y.ShaderBuilder,c=e.fragment;c.include(w.RgbaFloatEncoding);c.include(u.ReadLinearDepth);e.include(v.CameraSpace);e.include(t.ScreenSpacePass);const {visualization:b,bandsEnabled:n}=d;c.constants.add("inverseSampleValue","float",A.ShadowCastMaxSamples);c.uniforms.add([new z.Texture2DPassUniform("shadowCastMap",a=>a.shadowCastMap),new g.FloatPassUniform("sampleScale",a=>a.sampleScale),new g.FloatPassUniform("opacityFromElevation",a=>a.opacityFromElevation),
new x.Float4PassUniform("uColor",a=>a.color)]);d=b===l.ShadowCastVisualization.Gradient;const p=b===l.ShadowCastVisualization.Threshold;d&&n?c.uniforms.add(new g.FloatPassUniform("bandSize",a=>a.bandSize)):p&&c.uniforms.add(new g.FloatPassUniform("threshold",a=>a.threshold));c.code.add(f.glsl`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;
        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${p?f.glsl`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${d&&n?f.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${d?f.glsl`* strength`:""});
      }
    `);return e}let q=function(d){function e(c){var b=d.call(this)||this;b.shadowCastMap=c;b.sampleScale=0;b.opacityFromElevation=1;b.color=k.clone(B);b.bandSize=.1;b.threshold=.5;return b}r._inheritsLoose(e,d);return e}(f.NoParameters);const B=k.fromValues(.01,0,.25,1),C=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:q,build:m},Symbol.toStringTag,{value:"Module"}));h.ShadowCastVisualize=C;h.ShadowCastVisualizePassParameters=q;h.build=m});