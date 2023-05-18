// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./constants ../../support/AnchorElementViewModel".split(" "),function(g,r,k,t,u,v,m,n,A,B,w,x,y){g.HoveredPoints=function(p){function l(a){a=p.call(this,a)||
this;a._hoveredPoints=new u;return a}r._inheritsLoose(l,p);var h=l.prototype;h.initialize=function(){this.addHandles(m.watch(()=>this._hoveredPoints.toArray().map(({anchor:a,element:b})=>({screenLocation:a.screenLocation,element:b})),a=>{for(const {screenLocation:b,element:d}of a)v.applySome(b,({x:e,y:f})=>{d.style.transform=`translate(${e}px, ${f}px)`})},m.syncAndInitial))};h.destroy=function(){this._hoveredPoints.drain(a=>this._destroyHoveredPoint(a))};h.update=function(a){var b=this.view;const d=
this._hoveredPoints,e=a.length;for(;this._hoveredPoints.length>e;)this._destroyHoveredPoint(this._hoveredPoints.pop());for(;this._hoveredPoints.length<e;){var f=this._makeHoveredPoint();d.push(f);b.surface?.appendChild(f.element)}for(b=0;b<e;++b)f=d.getItemAt(e-1-b),this._updateHoveredPoint(f,a[b])};h._makeHoveredPoint=function(){const {size:a,borderStyle:b,borderColor:d,borderWidth:e,boxShadow:f}=x.getConfig().hoveredPointsStyle,z=new y({view:this.view,screenLocationEnabled:!0}),q=document.createElement("div"),
c=q.style;c.position="absolute";c.top="0";c.left="0";c.contain="strict";c.boxSizing="border-box";c.width=`${a}px`;c.height=`${a}px`;c.marginTop=`-${a/2}px`;c.marginLeft=`-${a/2}px`;c.border=`${b} ${e}px ${d}`;c.borderRadius=`${a}px`;c.boxShadow=f;return{anchor:z,element:q}};h._updateHoveredPoint=function({anchor:a,element:b},d){a.screenLocationEnabled=!0;a.location=d.hoveredPoint;a=b.style;a.display="block";a.background=d.color.toCss()};h._destroyHoveredPoint=function({anchor:a,element:b}){a.destroy();
this.view.surface?.removeChild(b)};return l}(t);k.__decorate([n.property()],g.HoveredPoints.prototype,"view",void 0);k.__decorate([n.property()],g.HoveredPoints.prototype,"_hoveredPoints",void 0);g.HoveredPoints=k.__decorate([w.subclass("esri.widgets.ElevationProfile.support.HoveredPoints")],g.HoveredPoints);Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});