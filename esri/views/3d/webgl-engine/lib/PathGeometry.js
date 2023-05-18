// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./ContentObjectType","./Geometry"],function(c,f,g,d){d=function(a){function e(b,h,k,l,m,n,p,q){b=a.call(this,b,h,k,null,g.ContentObjectType.Mesh,q)||this;b.path=l;b.geometrySR=m;b.upVectorAlignment=n;b.stencilWidth=p;return b}f._inheritsLoose(e,a);return e}(d.Geometry);c.UpVectorAlignment=void 0;(function(a){a[a.World=0]="World";a[a.Path=1]="Path"})(c.UpVectorAlignment||(c.UpVectorAlignment={}));c.PathGeometry=d;c.isPathGeometry=function(a){return"upVectorAlignment"in
a};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});