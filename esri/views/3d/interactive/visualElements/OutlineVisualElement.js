// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Evented ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f32 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures ../../../../support/elevationInfoUtils ../../../../symbols/support/ElevationInfo ./EngineVisualElement ./LaserlineVisualElement ../../layers/graphics/ElevationContext ../../support/engineContent/line ../../support/renderInfoUtils/line ../../webgl-engine/lib/DoubleArray ../../webgl-engine/lib/Material ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(u,v,B,g,n,w,h,p,C,l,D,E,F,q,G,H,x,y,I,r,J,K,z){q=function(t){function m(a){var b=t.call(this,a)||this;b._attachmentOrigin=D.makeDehydratedPoint(0,0,0,null);b._attachmentOriginDirty=!0;b.events=new B;b._geometry=null;b._width=1;b._color=p.fromValues(1,0,1,1);b._innerWidth=0;b._innerColor=p.fromValues(1,1,1,1);b._stipplePattern=null;b._stippleOffColor=null;b._falloff=0;b._elevationInfo=null;b._laserlineStyle=null;b._laserlineEnabled=!1;b._renderOccluded=r.RenderOccludedFlag.OccludeAndTransparentStencil;
b._attachmentOrigin.spatialReference=a.view.spatialReference;b._laserline=new G.LaserlineVisualElement({view:a.view});b.applyProps(a);b.attached=a.attached??!0;return b}v._inheritsLoose(m,t);var f=m.prototype;f.destroy=function(){this._laserline.destroy();t.prototype.destroy.call(this)};f.createObject3DResourceFactory=function(a){return{view:a,createResources:b=>this._createObject3DResources(b),destroyResources:b=>this._destroyExternalResources(b),recreateGeometry:(b,c)=>{b.geometries.length=0;this._recreateGeometry(c,
b.material,b.geometries)}}};f.createDrapedResourceFactory=function(a){return{view:a,createResources:()=>this._createDrapedResources(),destroyResources:b=>this._destroyExternalResources(b),recreateGeometry:b=>{b.geometries=this._createRenderGeometriesDraped(b.material);this._attachmentOriginChanged()}}};f.onAttachedChange=function(a){this._laserline.attached=this._laserlineAttached;a&&this._attachmentOriginChanged()};f._updateMaterial=function(){g.isSome(this.object3dResources.resources)&&this.object3dResources.resources.material.setParameters(this._materialParameters);
g.isSome(this.drapedResources.resources)&&this.drapedResources.resources.material.setParameters(this._materialParameters)};f._recreateGeometry=function(a,b,c){this._createRenderGeometries(b,c);for(const e of c)a.addGeometry(e);this._attachmentOriginChanged()};f._attachmentOriginChanged=function(){this._attachmentOriginDirty=!0;this.events.emit("attachment-origin-changed")};f._destroyExternalResources=function(a){a.geometries=[];a.material.dispose()};f._createObject3DResources=function(a){const b=
new z.RibbonLineMaterial(this._materialParameters),c=[];this._recreateGeometry(a,b,c);return{material:b,geometries:c,forEach:e=>{e(b);c.forEach(e)}}};f._createDrapedResources=function(){const a=new z.RibbonLineMaterial(this._materialParameters),b=this._createRenderGeometriesDraped(a);return{material:a,geometries:b}};f._createRenderGeometriesDraped=function(a){var b=this.geometry;if(g.isNone(b)||g.isNone(this.view.basemapTerrain.spatialReference))return[];var c=y.geometryToRenderInfoDraped(b,this.view.basemapTerrain.spatialReference);
b=[];for(const {position:e}of c.lines){c=new J.RenderGeometry(x.createGeometry(a,{overlayInfo:{spatialReference:this.view.basemapTerrain.spatialReference,renderCoordsHelper:this.view.renderCoordsHelper},attributeData:{position:e},removeDuplicateStartEnd:this._isClosed}));const d=l.empty(L);l.expandWithBuffer(d,e);h.set(c.boundingSphere,.5*(d[0]+d[3]),.5*(d[1]+d[4]),0,.5*Math.sqrt((d[3]-d[0])*(d[3]-d[0])+(d[4]-d[1])*(d[4]-d[1])));b.push(c)}return b};f.calculateMapBounds=function(a){if(g.isNone(this.object3dResources.resources))return!1;
const b=this.view.renderCoordsHelper;for(const c of this.object3dResources.resources.geometries){const e=c.vertexAttributes.get(K.VertexAttribute.POSITION),d=I.newDoubleArray(e.data.length);C.projectBuffer(e.data,b.spatialReference,0,d,this.view.spatialReference,0,e.data.length/3);l.expandWithBuffer(a,d)}return!0};f._createRenderGeometries=function(a,b){var c=this.geometry;if(!g.isNone(c)){c=y.geometryToRenderInfo(c,this.view.elevationProvider,this.view.renderCoordsHelper,H.ElevationContext.fromElevationInfo(this.elevationInfo??
new F({mode:E.getGeometryEffectiveElevationMode(c,null)})));var e=[];for(const {position:d,mapPositions:M}of c.lines)b.push(x.createGeometry(a,{mapPositions:M,attributeData:{position:d},removeDuplicateStartEnd:this._isClosed})),e.push(d);this._laserline.pathVerticalPlane=e}};v._createClass(m,[{key:"_laserlineAttached",get:function(){return this.attached&&this.visible&&g.isSome(this._laserlineStyle)&&!this.isDraped&&this.laserlineEnabled}},{key:"geometry",get:function(){return this._geometry},set:function(a){this._geometry=
a;this.recreateGeometry()}},{key:"width",get:function(){return this._width},set:function(a){a!==this._width&&(this._width=a,this._updateMaterial())}},{key:"color",get:function(){return this._color},set:function(a){h.exactEquals(a,this._color)||(h.copy(this._color,a),this._updateMaterial())}},{key:"innerWidth",get:function(){return this._innerWidth},set:function(a){a!==this._innerWidth&&(this._innerWidth=a,this._updateMaterial())}},{key:"innerColor",get:function(){return this._innerColor},set:function(a){h.exactEquals(a,
this._innerColor)||(h.copy(this._innerColor,a),this._updateMaterial())}},{key:"stipplePattern",get:function(){return this._stipplePattern},set:function(a){const b=g.isSome(a)!==g.isSome(this._stipplePattern);this._stipplePattern=a;b?this.recreate():this._updateMaterial()}},{key:"stippleOffColor",get:function(){return this._stippleOffColor},set:function(a){a&&this._stippleOffColor&&h.exactEquals(a,this._stippleOffColor)||(this._stippleOffColor=a?p.clone(a):null,this._updateMaterial())}},{key:"falloff",
get:function(){return this._falloff},set:function(a){a!==this._falloff&&(this._falloff=a,this._updateMaterial())}},{key:"elevationInfo",get:function(){return this._elevationInfo},set:function(a){this._elevationInfo=a;this.recreateGeometry()}},{key:"laserlineStyle",get:function(){return this._laserlineStyle},set:function(a){this._laserlineStyle=a;this._laserline.attached=this._laserlineAttached;g.isSome(a)&&(this._laserline.style=a)}},{key:"laserlineEnabled",get:function(){return this._laserlineEnabled},
set:function(a){this._laserlineEnabled!==a&&(this._laserlineEnabled=a,this._laserline.attached=this._laserlineAttached)}},{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}},{key:"attachmentOrigin",get:function(){if(!this._attachmentOriginDirty)return this._attachmentOrigin;const a=g.toNullable(this.object3dResources.resources)?.geometries;if(!a||0===a.length)return null;n.set(k,0,0,0);let b=
0;for(const c of a)c.computeAttachmentOrigin(A)&&(n.add(k,k,A),b++);if(0===b)return null;n.scale(k,k,1/b);this.view.renderCoordsHelper.fromRenderCoords(k,this._attachmentOrigin);this._attachmentOriginDirty=!1;return this._attachmentOrigin}},{key:"_isClosed",get:function(){return g.isSome(this.geometry)&&"polygon"===this.geometry.type}},{key:"_materialParameters",get:function(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:!1,
isClosed:this._isClosed,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,join:"round",hasPolygonOffset:!0,renderOccluded:this._normalizedRenderOccluded}}},{key:"_normalizedRenderOccluded",get:function(){return this.isDraped&&this._renderOccluded===r.RenderOccludedFlag.OccludeAndTransparentStencil?r.RenderOccludedFlag.OccludeAndTransparent:this._renderOccluded}}]);return m}(q.EngineVisualElement);const L=l.create(),A=w.create(),k=w.create();u.OutlineVisualElement=q;Object.defineProperty(u,
Symbol.toStringTag,{value:"Module"})});