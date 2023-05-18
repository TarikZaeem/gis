// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./mat4 ./mat4f64 ./vec3f64 ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(h,u,v,k,m,n,w,x,y,p,l,g,q,z,A,B){function r(e){const d=new z.ShaderBuilder;d.attributes.add(B.VertexAttribute.POSITION,"vec2");d.include(n.TextureCoordinateAttribute,{textureCoordinateType:n.TextureCoordinateAttributeType.Default});d.varyings.add("worldRay","vec3");d.varyings.add("eyeDir","vec3");const {vertex:b,fragment:c}=d;b.uniforms.add([new q.Matrix4PassUniform("inverseProjectionMatrix",(a,f)=>f.camera.inverseProjectionMatrix),new q.Matrix4PassUniform("inverseViewMatrix",(a,f)=>v.invertOrIdentity(C,
f.camera.viewMatrix))]);b.code.add(g.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`);c.uniforms.add(new l.FloatPassUniform("atmosphereC",a=>a.atmosphereC));c.uniforms.add(new p.Float3PassUniform("cameraPosition",(a,f)=>f.camera.eye));c.uniforms.add(new y.Float2PassUniform("nearFar",(a,f)=>f.camera.nearFar));c.uniforms.add(new A.Texture2DPassUniform("depthTex",a=>a.depthTexture));c.uniforms.add(new l.FloatPassUniform("fogStrength",a=>e.haze?a.hazeStrength:a.fogStrength));c.uniforms.add(new l.FloatPassUniform("fogAmount",a=>e.haze?a.hazeAmount:a.fogAmount));c.uniforms.add(new p.Float3PassUniform("fogColor",
a=>e.haze?a.hazeColor:a.fogColor));d.include(x.Gamma);c.include(w.ReadLinearDepth);c.code.add(g.glsl`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`);c.code.add(g.glsl`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`);c.code.add(g.glsl`
    vec3 tonemapACES(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    void main() {
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;

      float depthSample = texture2D(depthTex, vuv0).r;
      float zNorm = 2.0 * depthSample - 1.0;
      float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
      if(depthSample < 1.0 && depthSample > 0.0){
        vec3 cameraSpaceRay = normalize(eyeDir);
        cameraSpaceRay /= cameraSpaceRay.z;
        cameraSpaceRay *= linDepth;
        terrainDepth = max(0.0, length(cameraSpaceRay));
      }

      ${e.haze?g.glsl`
          if(terrainDepth == -1.0){
            gl_FragColor = vec4(0);
            return;
          }`:""}

      vec4 fog = applyFog(terrainDepth, rayDir);

      gl_FragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
    }
  `);return d}let t=function(e){function d(){var b=e.apply(this,arguments)||this;b.fogColor=m.create();b.hazeColor=m.create();b.fogStrength=4E-6;b.hazeStrength=4E-6;b.atmosphereC=1;b.fogAmount=0;b.hazeAmount=0;return b}u._inheritsLoose(d,e);return d}(g.NoParameters);const C=k.create();k=Object.freeze(Object.defineProperty({__proto__:null,FogHazePassParameters:t,build:r},Symbol.toStringTag,{value:"Module"}));h.FogHazePassParameters=t;h.Haze=k;h.build=r});