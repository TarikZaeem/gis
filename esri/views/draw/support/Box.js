// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../Graphic ../../../core/Evented ../../../core/maybe ../../../core/quantityUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/coordsUtils ../../../geometry/support/rotate ../../../symbols/SimpleFillSymbol ../../../symbols/SimpleLineSymbol ../../../symbols/SimpleMarkerSymbol ./drawUtils ./GraphicMover ./HighlightHelper ./layerUtils ./settings ../../interactive/sketch/SketchTooltipOptions ../../interactive/tooltip/ExtentTooltipInfos ../../interactive/tooltip/Tooltip ../../interactive/tooltip/TranslateTooltipInfos ../../support/automaticLengthMeasurementUtils ../../../geometry/Point ../../../geometry/Polygon ../../../geometry/Polyline".split(" "),
function(O,t,p,E,r,A,ba,C,v,sa,ta,ca,F,P,Q,H,R,da,G,w,ea,fa,ha,ia,S,T,U,ja,K,x,ka,la){let ma=function(n,m,d,a){this.graphics=n;this.mover=m;this.dx=d;this.dy=a;this.type="move-start"},na=function(n,m,d,a){this.graphics=n;this.mover=m;this.dx=d;this.dy=a;this.type="move"},V=function(n,m,d,a){this.graphics=n;this.mover=m;this.dx=d;this.dy=a;this.type="move-stop"},oa=function(n,m,d){this.graphics=n;this.mover=m;this.angle=d;this.type="rotate-start"},pa=function(n,m,d){this.graphics=n;this.mover=m;this.angle=
d;this.type="rotate"},W=function(n,m,d){this.graphics=n;this.mover=m;this.angle=d;this.type="rotate-stop"},qa=function(n,m,d,a){this.graphics=n;this.mover=m;this.xScale=d;this.yScale=a;this.type="scale-start"},ra=function(n,m,d,a){this.graphics=n;this.mover=m;this.xScale=d;this.yScale=a;this.type="scale"},X=function(n,m,d,a){this.graphics=n;this.mover=m;this.xScale=d;this.yScale=a;this.type="scale-stop"};p=ia.settings.transformGraphics;const D={centerIndicator:new G({style:"cross",size:p.center.size,
color:p.center.color}),fill:{default:new R({color:p.fill.color,outline:{color:p.fill.outlineColor,join:"round",width:1}}),active:new R({color:p.fill.stagedColor,outline:{color:p.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new G({style:"square",size:p.vertex.size,color:p.vertex.color,outline:{color:p.vertex.outlineColor,width:1}}),hover:new G({style:"square",size:p.vertex.hoverSize,color:p.vertex.hoverColor,outline:{color:p.vertex.hoverOutlineColor,width:1}})},rotator:{default:new G({style:"circle",
size:p.vertex.size,color:p.vertex.color,outline:{color:p.vertex.outlineColor,width:1}}),hover:new G({style:"circle",size:p.vertex.hoverSize,color:p.vertex.hoverColor,outline:{color:p.vertex.hoverOutlineColor,width:1}})},rotatorLine:new da({color:p.line.color,width:1})};r=function(n){function m(a){a=n.call(this,a)||this;a._activeHandleGraphic=null;a._graphicAttributes={esriSketchTool:"box"};a._mover=null;a._centerGraphic=null;a._backgroundGraphic=null;a._vertexGraphics=[];a._rotateHandleGraphic=null;
a._rotateGraphicOffset=20;a._angleOfRotation=0;a._rotateLineGraphic=null;a._startInfo=null;a._tooltip=null;a._totalDx=0;a._totalDy=0;a._xScale=1;a._yScale=1;a.type="box";a.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}};a.enableMovement=!0;a.enableRotation=!0;a.enableScaling=!0;a.graphics=[];a.highlightsEnabled=!0;a.layer=null;a.preserveAspectRatio=!1;a.showCenterGraphic=!0;a.symbols=
D;a.tooltipOptions=new S;a.view=null;a._getBounds=(()=>{const b=F.create();return(c,e)=>{c[0]=Number.POSITIVE_INFINITY;c[1]=Number.POSITIVE_INFINITY;c[2]=Number.NEGATIVE_INFINITY;c[3]=Number.NEGATIVE_INFINITY;for(const g of e){if(!g)continue;let h,k,f;"point"===g.type?(e=k=g.x,h=f=g.y):"multipoint"===g.type?(e=Q.geometryToCoordinates(g),[e,h,k,f]=P.getRingsOrPathsBounds(b,[e])):"extent"===g.type?[e,h,k,f]=[g.xmin,g.ymin,g.xmax,g.ymax]:(e=Q.geometryToCoordinates(g),[e,h,k,f]=P.getRingsOrPathsBounds(b,
e));c[0]=Math.min(e,c[0]);c[1]=Math.min(h,c[1]);c[2]=Math.max(k,c[2]);c[3]=Math.max(f,c[3])}return c}})();return a}O._inheritsLoose(m,n);var d=m.prototype;d.initialize=function(){const a=this.view;this._highlightHelper=new fa({view:a});this._tooltip=new U.Tooltip({view:a});this._setup();this.addHandles([C.when(()=>a?.ready,()=>{const {layer:b,view:c}=this;ha.addUniqueLayer(c,b)},{once:!0,initial:!0}),C.watch(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),
this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),C.watch(()=>a?.scale,()=>{this._updateRotateGraphic();this._updateRotateLineGraphic()}),C.watch(()=>this.graphics,()=>this.refresh()),C.watch(()=>this.layer,(b,c)=>{c&&this._resetGraphics(c);this.refresh()}),C.watch(()=>this.highlightsEnabled,()=>{this._highlightHelper?.removeAll();this._setUpHighlights()}),C.watch(()=>this.tooltipOptions.enabled,b=>{this._tooltip=b?new U.Tooltip({view:this.view}):A.destroyMaybe(this._tooltip)},
C.syncAndInitial),this.on("move-start",b=>this.callbacks?.onMoveStart?.(b)),this.on("move",b=>this.callbacks?.onMove?.(b)),this.on("move-stop",b=>this.callbacks?.onMoveStop?.(b)),this.on("rotate-start",b=>this.callbacks?.onRotateStart?.(b)),this.on("rotate",b=>this.callbacks?.onRotate?.(b)),this.on("rotate-stop",b=>this.callbacks?.onRotateStop?.(b)),this.on("scale-start",b=>this.callbacks?.onScaleStart?.(b)),this.on("scale",b=>this.callbacks?.onScale?.(b)),this.on("scale-stop",b=>this.callbacks?.onScaleStop?.(b))])};
d.destroy=function(){this._reset();this._tooltip=A.destroyMaybe(this._tooltip)};d.isUIGraphic=function(a){return this._vertexGraphics.includes(a)||a===this._backgroundGraphic||a===this._centerGraphic||a===this._rotateHandleGraphic||a===this._rotateLineGraphic};d.move=function(a,b){if(this._mover&&this.graphics.length){for(const c of this.graphics){const e=w.cloneMove(c.geometry,a,b,this.view);c.geometry=e}this.refresh();this.emit("move-stop",new V(this.graphics,null,a,b))}};d.scale=function(a,b){if(this._mover&&
this.graphics.length){for(const c of this.graphics){const e=w.scale(c.geometry,a,b);c.geometry=e}this.refresh();this.emit("scale-stop",new X(this.graphics,null,a,b))}};d.rotate=function(a,b){if(this._mover&&this.graphics.length){b||(b=new x(this._vertexGraphics[1].geometry.x,this._vertexGraphics[3].geometry.y,this.view.spatialReference));for(const c of this.graphics){const e=H(c.geometry,a,b);c.geometry=e}this.refresh();this.emit("rotate-stop",new W(this.graphics,null,a))}};d.refresh=function(){this._reset();
this._setup()};d.reset=function(){this.graphics=[]};d._setup=function(){"active"===this.state&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())};d._reset=function(){this._highlightHelper.removeAll();this._resetGraphicStateVars();this._resetGraphics();this._updateTooltip();this._mover&&this._mover.destroy();this._mover=null;this.view.cursor="default"};d._resetGraphicStateVars=function(){this._activeHandleGraphic=this._startInfo=null;this._totalDy=this._totalDx=
0;this._yScale=this._xScale=1;this._angleOfRotation=0};d._resetGraphics=function(a){if(a=a||this.layer)a.removeMany(this._vertexGraphics),a.remove(this._backgroundGraphic),a.remove(this._centerGraphic),a.remove(this._rotateHandleGraphic),a.remove(this._rotateLineGraphic);this._vertexGraphics=[];this._rotateLineGraphic=this._rotateHandleGraphic=this._centerGraphic=this._backgroundGraphic=null};d._setupMover=function(){let a=[];this.enableScaling&&(a=a.concat(this._vertexGraphics));this.enableMovement&&
(a=a.concat(this.graphics,this._backgroundGraphic));this.enableRotation&&a.push(this._rotateHandleGraphic);this.showCenterGraphic&&a.push(this._centerGraphic);this._mover=new ea({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:a,callbacks:{onGraphicClick:b=>this._onGraphicClickCallback(b),onGraphicMoveStart:b=>this._onGraphicMoveStartCallback(b),onGraphicMove:b=>this._onGraphicMoveCallback(b),onGraphicMoveStop:b=>this._onGraphicMoveStopCallback(b),onGraphicPointerOver:b=>
this._onGraphicPointerOverCallback(b),onGraphicPointerOut:b=>this._onGraphicPointerOutCallback(b)}})};d._getStartInfo=function(a){const [b,c,e,g]=this._getBoxBounds(F.create()),h=Math.abs(e-b),k=Math.abs(g-c),{x:f,y:l}=a.geometry;return{width:h,height:k,centerX:(e+b)/2,centerY:(g+c)/2,startX:f,startY:l,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}};d._getGraphicInfos=function(){return this.graphics.map(a=>this._getGraphicInfo(a))};
d._getGraphicInfo=function(a){a=a.geometry;const [b,c,e,g]=this._getBounds(F.create(),[a]);return{width:Math.abs(e-b),height:Math.abs(g-c),centerX:(e+b)/2,centerY:(g+c)/2,geometry:a}};d._onGraphicClickCallback=function(a){a.viewEvent.stopPropagation();this.emit("graphic-click",a);if(this.callbacks.onGraphicClick)this.callbacks.onGraphicClick(a)};d._onGraphicMoveStartCallback=function(a){const {_angleOfRotation:b,_xScale:c,_yScale:e,_backgroundGraphic:g,_vertexGraphics:h,_rotateHandleGraphic:k,symbols:f}=
this,l=a.graphic;this._resetGraphicStateVars();this._hideGraphicsBeforeUpdate();g.symbol=f.fill.active;this._startInfo=this._getStartInfo(l);this._updateTooltip(l,a.viewEvent);l===k?(this.view.cursor="grabbing",this.emit("rotate-start",new oa(this.graphics,l,b))):h.includes(l)?(this._activeHandleGraphic=l,this.emit("scale-start",new qa(this.graphics,l,c,e))):this.emit("move-start",new ma(this.graphics,l,a.dx,a.dy))};d._onGraphicMoveCallback=function(a){const b=a.graphic;if(this._startInfo)if(this._vertexGraphics.includes(b))this._scaleGraphic(b),
this._updateTooltip(b,a.viewEvent),this.emit("scale",new ra(this.graphics,b,this._xScale,this._yScale));else if(b===this._rotateHandleGraphic)this._rotateGraphic(b),this._updateTooltip(b,a.viewEvent),this.emit("rotate",new pa(this.graphics,b,this._angleOfRotation));else{const {dx:c,dy:e}=a;this._totalDx+=c;this._totalDy+=e;this._moveGraphic(b,c,e);this._updateTooltip(b,a.viewEvent);this.emit("move",new na(this.graphics,b,c,e))}};d._onGraphicMoveStopCallback=function(a){a=a.graphic;if(this._startInfo){var {_angleOfRotation:b,
_totalDx:c,_totalDy:e,_xScale:g,_yScale:h,_vertexGraphics:k,_rotateHandleGraphic:f}=this;this.refresh();a===f?(this.view.cursor="pointer",this.emit("rotate-stop",new W(this.graphics,a,b))):k.includes(a)?this.emit("scale-stop",new X(this.graphics,a,g,h)):this.emit("move-stop",new V(this.graphics,a,c,e))}else this.refresh()};d._onGraphicPointerOverCallback=function(a){const {_backgroundGraphic:b,_vertexGraphics:c,graphics:e,_rotateHandleGraphic:g,symbols:h,view:k}=this;var f=a.graphic;if(f===g)g.symbol=
h.rotator.hover,k.cursor="pointer",this._updateTooltip(f);else if(e.includes(f)||f===b)k.cursor="move";else if(c.includes(f)){this._updateTooltip(f);a.graphic.symbol=h.handles.hover;f=k.rotation;a=a.index;8>a&&(a=0<=f&&45>f?a%8:45<=f&&90>f?(a+1)%8:90<=f&&135>f?(a+2)%8:135<=f&&180>f?(a+3)%8:180<=f&&225>f?(a+4)%8:225<=f&&270>f?(a+5)%8:270<=f&&315>f?(a+6)%8:(a+7)%8);switch(a){case 0:a="nwse-resize";break;case 1:a="ns-resize";break;case 2:a="nesw-resize";break;case 3:a="ew-resize";break;case 4:a="nwse-resize";
break;case 5:a="ns-resize";break;case 6:a="nesw-resize";break;case 7:a="ew-resize";break;default:a="pointer"}k.cursor=a}else k.cursor="pointer"};d._onGraphicPointerOutCallback=function(a){const {_vertexGraphics:b,_rotateHandleGraphic:c,symbols:e,view:g}=this;a.graphic===c?c.symbol=e.rotator.default:b.includes(a.graphic)&&(a.graphic.symbol=e.handles.default);g.cursor="default";this._updateTooltip()};d._scaleGraphic=function(a){const {_startInfo:b,_vertexGraphics:c,preserveAspectRatio:e,view:g}=this,
{centerX:h,centerY:k,startX:f,startY:l}=b,{resolution:B,transform:q}=g.state;var u=c.indexOf(a);1!==u&&5!==u||this._updateX(a,h);3!==u&&7!==u||this._updateY(a,k);const {x:L,y:M}=a.geometry;var z=q[0]*L+q[2]*M+q[4],N=q[1]*L+q[3]*M+q[5];a=b.graphicInfos?.map(I=>I.geometry)??[];if(e){this._xScale=this._yScale=w.getScaleRatio(q[0]*h+q[2]*k+q[4],q[1]*h+q[3]*k+q[5],q[0]*f+q[2]*l+q[4],q[1]*f+q[3]*l+q[5],z,N);for(var y of a){var J=a.indexOf(y);this.graphics[J].geometry=w.scale(y,this._xScale,this._yScale,
[h,k])}this._updateBackgroundGraphic()}else{const {width:I,height:Y}=b;z=L-f;y=l-M;if(1===u||5===u)z=0;else if(3===u||7===u)y=0;if(0!==z||0!==y){this._xScale=(I+(f>h?z:-1*z))/I||1;this._yScale=(Y+(l<k?y:-1*y))/Y||1;if(1===u||5===u)this._xScale=1;else if(3===u||7===u)this._yScale=1;u=(h+z/2-h)/B;y=(k+y/2-k)/B;z=w.scale(b.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=w.cloneMove(z,u,y,g,!0);var {centerX:Z,centerY:aa}=this._getGraphicInfo(this._backgroundGraphic);u=(Z-h)/B;y=-1*(aa-
k)/B;for(J of a)z=a.indexOf(J),N=w.scale(J,this._xScale,this._yScale,[h,k]),this.graphics[z].geometry=w.cloneMove(N,u,y,g,!0);this._centerGraphic.geometry=new x(Z,aa,g.spatialReference)}}};d._rotateGraphic=function(a){const {centerX:b,centerY:c,startX:e,startY:g,box:h,rotate:k}=this._startInfo;var f=this.view.spatialReference,l=new x(e,g,f);f=new x(b,c,f);this._angleOfRotation=w.getRotationAngle(l,a.geometry,f);a=this._startInfo.graphicInfos?.map(B=>B.geometry)??[];for(const B of a){l=a.indexOf(B);
const q=H(B,this._angleOfRotation,f);this.graphics[l].geometry=q}this._backgroundGraphic.geometry=H(h,this._angleOfRotation,f);this._rotateHandleGraphic.geometry=H(k,this._angleOfRotation,f)};d._moveGraphic=function(a,b,c){if(this.graphics.includes(a)){this._backgroundGraphic.geometry=w.cloneMove(this._backgroundGraphic.geometry,b,c,this.view);for(const e of this.graphics)e!==a&&(e.geometry=w.cloneMove(e.geometry,b,c,this.view))}else a===this._centerGraphic&&(this._backgroundGraphic.geometry=w.cloneMove(this._backgroundGraphic.geometry,
b,c,this.view));if(a===this._backgroundGraphic||a===this._centerGraphic)for(const e of this.graphics)e.geometry=w.cloneMove(e.geometry,b,c,this.view)};d._setUpHighlights=function(){this.highlightsEnabled&&this.graphics.length&&this._highlightHelper?.add(this.graphics)};d._setupGraphics=function(){const {_graphicAttributes:a,symbols:b}=this;this._centerGraphic=new E(null,b.centerIndicator,a);this.showCenterGraphic&&this.layer.add(this._centerGraphic);this._backgroundGraphic=new E(null,b.fill.default,
a);this.layer.add(this._backgroundGraphic);this._rotateLineGraphic=new E(null,b.rotatorLine,a);this._rotateHandleGraphic=new E(null,b.rotator.default,a);this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let c=0;8>c;c++)this._vertexGraphics.push(new E(null,b.handles.default,a));this.enableScaling&&this.layer.addMany(this._vertexGraphics)};d._updateGraphics=function(){this._updateBackgroundGraphic();this._updateHandleGraphics();
this._updateCenterGraphic();this._updateRotateGraphic();this._updateRotateLineGraphic()};d._hideGraphicsBeforeUpdate=function(){this._centerGraphic.visible=!1;this._rotateHandleGraphic.visible=!1;this._rotateLineGraphic.visible=!1;this._vertexGraphics.forEach(a=>a.visible=!1)};d._updateHandleGraphics=function(){const a=this._getCoordinates(!0);this._vertexGraphics.forEach((b,c)=>{const [e,g]=a[c];this._updateXY(b,e,g)})};d._updateBackgroundGraphic=function(){const a=this._getCoordinates();this._backgroundGraphic.geometry=
new ka({rings:a,spatialReference:this.view.spatialReference})};d._updateCenterGraphic=function(){const [a,b,c,e]=this._getBoxBounds(F.create());this._centerGraphic.geometry=new x((c+a)/2,(e+b)/2,this.view.spatialReference)};d._updateRotateGraphic=function(){if(this._vertexGraphics.length){var {x:a,y:b}=this._vertexGraphics[1].geometry;this._rotateHandleGraphic.geometry=new x(a,b+this.view.state.resolution*this._rotateGraphicOffset,this.view.spatialReference)}};d._updateRotateLineGraphic=function(){if(this._vertexGraphics.length&&
this._rotateHandleGraphic&&this._rotateHandleGraphic.geometry){var a=this._vertexGraphics[1].geometry,b=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new la({paths:[[a.x,a.y],[b.x,b.y]],spatialReference:this.view.spatialReference})}};d._updateXY=function(a,b,c){a.geometry=new x(b,c,this.view.spatialReference)};d._updateX=function(a,b){a.geometry=new x(b,a.geometry.y,this.view.spatialReference)};d._updateY=function(a,b){a.geometry=new x(a.geometry.x,b,this.view.spatialReference)};
d._hasExtentGraphic=function(){return this.graphics.some(a=>a&&A.isSome(a.geometry)&&"extent"===a.geometry.type)};d._getBoxBounds=function(a){const b=this.graphics.map(c=>c.geometry);return this._getBounds(a,b)};d._getCoordinates=function(a){const [b,c,e,g]=this._getBoxBounds(F.create());if(a){a=(b+e)/2;const h=(g+c)/2;return[[b,g],[a,g],[e,g],[e,h],[e,c],[a,c],[b,c],[b,h]]}return[[b,g],[e,g],[e,c],[b,c]]};d._updateTooltip=function(a,b){if(!A.isNone(this._tooltip))if(a){var {_backgroundGraphic:c,
graphics:e,_vertexGraphics:g,_rotateHandleGraphic:h}=this;a===h?this._updateRotateTooltip():g.includes(a)?this._updateScaleTooltip():(e.includes(a)||a===c)&&this._updateMoveTooltip(b)}else this._tooltip.clear()};d._updateRotateTooltip=function(){A.isNone(this._tooltip)||(this._tooltip.info=new T.ExtentRotateTooltipInfo({tooltipOptions:this.tooltipOptions,angle:-this._angleOfRotation}))};d._updateScaleTooltip=function(){const {_tooltip:a,_xScale:b,_yScale:c,tooltipOptions:e,view:g}=this;if(!A.isNone(a)){var h=
g.spatialReference,k=this._getCoordinates(),f=new x(k[0][0],k[0][1],h),l=new x(k[1][0],k[1][1],h);h=new x(k[2][0],k[2][1],h);f=K.autoDistanceBetweenPoints2D(f,l);l=K.autoDistanceBetweenPoints2D(l,h);A.isNone(f)||A.isNone(l)||(a.info=new T.ExtentScaleTooltipInfo({tooltipOptions:e,xScale:Math.abs(b),yScale:Math.abs(c),xSize:f,ySize:l}))}};d._updateMoveTooltip=function(a){const {_tooltip:b,tooltipOptions:c,view:e}=this;if(!A.isNone(b)){var g=new ja.TranslateGraphicTooltipInfo({tooltipOptions:c});if(a){const {x:h,
y:k}=a.origin;a=e.toMap(a);const f=e.toMap({x:h,y:k});a=K.autoDistanceBetweenPoints2D(f,a);g.distance=A.isSome(a)?a:ba.zeroMeters}b.info=g}};O._createClass(m,[{key:"state",get:function(){const a=this.view?.ready??!1,b=this.graphics.length&&this.layer;return a&&b?"active":a?"ready":"disabled"}}]);return m}(r.EventedAccessor);t.__decorate([v.property()],r.prototype,"_tooltip",void 0);t.__decorate([v.property({readOnly:!0})],r.prototype,"type",void 0);t.__decorate([v.property()],r.prototype,"callbacks",
void 0);t.__decorate([v.property()],r.prototype,"enableMovement",void 0);t.__decorate([v.property()],r.prototype,"enableRotation",void 0);t.__decorate([v.property()],r.prototype,"enableScaling",void 0);t.__decorate([v.property()],r.prototype,"graphics",void 0);t.__decorate([v.property()],r.prototype,"highlightsEnabled",void 0);t.__decorate([v.property()],r.prototype,"layer",void 0);t.__decorate([v.property()],r.prototype,"preserveAspectRatio",void 0);t.__decorate([v.property()],r.prototype,"showCenterGraphic",
void 0);t.__decorate([v.property({readOnly:!0})],r.prototype,"state",null);t.__decorate([v.property({value:D,cast(n){const {centerIndicator:m=D.centerIndicator,fill:d=D.fill,handles:a=D.handles,rotator:b=D.rotator,rotatorLine:c=D.rotatorLine}=n||{};return{centerIndicator:m,fill:d,handles:a,rotator:b,rotatorLine:c}}})],r.prototype,"symbols",void 0);t.__decorate([v.property({type:S})],r.prototype,"tooltipOptions",void 0);t.__decorate([v.property({constructOnly:!0})],r.prototype,"view",void 0);return r=
t.__decorate([ca.subclass("esri.views.draw.support.Box")],r)});