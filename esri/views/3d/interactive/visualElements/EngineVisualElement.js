// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./DrapedVisualElementResources","./VisualElement","./VisualElementResources"],function(g,h,k,e,l){e=function(f){function d({view:a,isDraped:m}){var b=f.call(this,a)||this;b._isDraped=!1;b.object3dResources=new l.VisualElementResources(b.createObject3DResourceFactory(a));b.drapedResources=new k.DrapedVisualElementResources(b.createDrapedResourceFactory(a));b.isDraped=m??!1;return b}h._inheritsLoose(d,f);var c=d.prototype;c.createResources=
function(){this.object3dResources.attached=!this._isDraped;this.drapedResources.attached=this._isDraped};c.destroyResources=function(){this.object3dResources.attached=!1;this.drapedResources.attached=!1};c.recreate=function(){this.object3dResources.recreate();this.drapedResources.recreate()};c.recreateGeometry=function(){this.object3dResources.recreateGeometry();this.drapedResources.recreateGeometry()};c.destroy=function(){this.object3dResources.destroy();this.drapedResources.destroy();f.prototype.destroy.call(this)};
c.updateVisibility=function(a){this.object3dResources.visible=a;this.drapedResources.visible=a};h._createClass(d,[{key:"isDraped",get:function(){return this._isDraped},set:function(a){a!==this._isDraped&&(this._isDraped=a,this.object3dResources.attached=this.attached&&!a,this.drapedResources.attached=this.attached&&a)}},{key:"renderGroup",get:function(){return this.drapedResources.renderGroup},set:function(a){this.drapedResources.renderGroup=a}}]);return d}(e.VisualElement);g.EngineVisualElement=
e;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});