// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/mat2d ../../../../chunks/mat2df32 ../../../../chunks/mat3 ../../../../chunks/mat3f32 ./definitions ./TiledDisplayObject".split(" "),function(m,v,n,p,q,r,t,g){let w=function(){function c(){}var a=c.prototype;a.acquire=function(f){return{refCount:1,version:-1,labelMat2d:p.create(),tileMat3:r.create(),dvs:r.create()}};a.release=function(f){};return c}();g=function(c){function a(d,b,e,h){return c.call(this,d,b,e,h,t.TILE_SIZE,
t.TILE_SIZE)||this}v._inheritsLoose(a,c);var f=a.prototype;f.destroy=function(){c.prototype.destroy.call(this);this._transforms&&a.TransformCache.release(this.key.hash)};f.setTransform=function(d){var b=this.resolution/d.resolution,e=this.transforms.tileMat3;const [h,u]=d.toScreenNoRotation([0,0],[this.x,this.y]);var k=this.width/this.rangeX*b;b*=this.height/this.rangeY;q.set(e,k,0,0,0,b,0,h,u,1);q.multiply(this.transforms.dvs,d.displayViewMat3,e);e=this.transforms.labelMat2d;const l=window.devicePixelRatio;
k=n.set(p.create(),k*l,0,0,b*l,h*l,u*l);n.multiply(e,d.viewMat2d,k)};f._createTransforms=function(){return a.TransformCache.acquire(this.key.hash)};return a}(g.TiledDisplayObject);g.TransformCache=new w;m.WGLTile=g;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});