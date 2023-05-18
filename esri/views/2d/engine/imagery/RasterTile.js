// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/mat3f32","./RasterBitmap","../webgl/TiledDisplayObject"],function(g,h,k,n,f){f=function(d){function e(b,p,q,r,l,m,t=null){var a=d.call(this,b,p,q,r,l,m)||this;a.bitmap=null;a.bitmap=new n.RasterBitmap(t,null,null);a.bitmap.coordScale=[l,m];a.bitmap.once("isReady",()=>a.ready());return a}h._inheritsLoose(e,d);var c=e.prototype;c.destroy=function(){d.prototype.destroy.call(this);this.bitmap.destroy();this.stage=this.bitmap=
null};c.setTransform=function(b){d.prototype.setTransform.call(this,b);this.bitmap.transforms.dvs=this.transforms.dvs};c._createTransforms=function(){return{dvs:k.create(),tileMat3:k.create()}};c.onAttach=function(){this.bitmap.stage=this.stage};c.onDetach=function(){this.bitmap.stage=null};h._createClass(e,[{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(b){this.bitmap.stencilRef=b}}]);return e}(f.TiledDisplayObject);g.RasterTile=f;Object.defineProperty(g,Symbol.toStringTag,
{value:"Module"})});