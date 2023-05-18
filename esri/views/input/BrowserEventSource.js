// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/has ../../core/maybe ./keys ./gamepad/GamepadSource ../support/screenUtils".split(" "),function(k,m,e,n,p,q,r){const l=e("edge"),t=e("chrome"),u=e("ff"),v=e("safari");e=function(){function f(b,a){this._input=a;this._active={};this._callback=()=>{};this._activePointerCaptures=new Set;this._keyDownState=new Set;this._eventId=1;this._browserTouchPanningEnabled=!1;this._element=b;b.getAttribute("tabindex")||b.setAttribute("tabindex","0");
this._eventHandlers={"key-down":this._handleKey,"key-up":this._handleKey,"pointer-down":this._handlePointer,"pointer-move":this._handlePointerPreventDefault,"pointer-up":this._handlePointerPreventDefault,"pointer-enter":this._handlePointer,"pointer-leave":this._handlePointer,"pointer-cancel":this._handlePointer,"mouse-wheel":this._handleMouseWheel,"pointer-capture-lost":this._handlePointerCaptureLost};this._updateTouchAction();this._element.addEventListener("keydown",this._preventAltKeyDefault);this._gamepadSource=
new q.GamepadSource(b,this._input);this._gamepadSource.onEvent=c=>this._callback("gamepad",c)}var d=f.prototype;d.destroy=function(){this._callback=()=>{};this.activeEvents=null;this._activePointerCaptures.forEach(b=>{this._releasePointerCaptureSafe(b)});this._gamepadSource=n.destroyMaybe(this._gamepadSource);this._activePointerCaptures=null;this._removeTouchAction();this._element.removeEventListener("keydown",this._preventAltKeyDefault)};d.setPointerCapture=function(b,a){a?(this._element.setPointerCapture(b.pointerId),
this._activePointerCaptures.add(b.pointerId)):(this._releasePointerCaptureSafe(b.pointerId),this._activePointerCaptures.delete(b.pointerId))};d._updateTouchAction=function(){this._element.classList.remove(this._browserTouchPanningEnabled?"esri-view-surface--touch-none":"esri-view-surface--touch-pan");this._element.classList.add(this._browserTouchPanningEnabled?"esri-view-surface--touch-pan":"esri-view-surface--touch-none")};d._updateTouchEventHandling=function(){this._browserTouchPanningEnabled?this._element.addEventListener("touchmove",
this._preventMultiTouchPanning):this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)};d._removeTouchAction=function(){this._element.classList.remove("esri-view-surface--touch-none");this._element.classList.remove("esri-view-surface--touch-pan");this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)};d._releasePointerCaptureSafe=function(b){try{this._element.hasPointerCapture&&!this._element.hasPointerCapture(b)||this._element.releasePointerCapture(b)}catch(a){}};
d._updateNormalizedPointerLikeEvent=function(b,a){b=r.createScreenPointFromNativeEvent(this._element,b);f.test.disableSubpixelCoordinates&&(b.x=Math.round(b.x),b.y=Math.round(b.y));a.x=b.x;a.y=b.y;return a};d._handleKey=function(b,a){const c=p.eventKey(a);c&&"key-up"===b&&this._keyDownState.delete(c);a={native:a,key:c,repeat:!!c&&this._keyDownState.has(c)};c&&"key-down"===b&&this._keyDownState.add(a.key);this._callback(b,a)};d._handlePointer=function(b,a){a=this._updateNormalizedPointerLikeEvent(a,
{native:a,x:0,y:0,pointerType:a.pointerType,button:a.button,buttons:a.buttons,eventId:this._eventId++});this._callback(b,a)};d._handlePointerPreventDefault=function(b,a){const c=this._updateNormalizedPointerLikeEvent(a,{native:a,x:0,y:0,pointerType:a.pointerType,button:a.button,buttons:a.buttons,eventId:this._eventId++});a.preventDefault();this._callback(b,c)};d._handleMouseWheel=function(b,a){let c=a.deltaY;switch(a.deltaMode){case 0:l&&(c=c/document.documentElement.clientHeight*600);break;case 1:c*=
30;break;case 2:c*=900}l?c*=.7:t||v?c*=.6:u&&(c*=1.375);const g=Math.abs(c);100<g&&(c=c/g*200/(1+Math.exp(-.02*(g-100))));a=this._updateNormalizedPointerLikeEvent(a,{native:a,x:0,y:0,deltaY:c});this._callback(b,a)};d._handlePointerCaptureLost=function(b,a){this._activePointerCaptures.delete(a.pointerId);this._handleDefault(b,a)};d._handleDefault=function(b,a){const c={native:a};a.preventDefault();this._callback(b,c)};d._preventAltKeyDefault=function(b){"Alt"===b.key&&b.preventDefault()};d._preventMultiTouchPanning=
function(b){1<b.touches.length&&b.preventDefault()};m._createClass(f,[{key:"browserTouchPanningEnabled",get:function(){return this._browserTouchPanningEnabled},set:function(b){this._browserTouchPanningEnabled=b;this._updateTouchAction();this._updateTouchEventHandling()}},{key:"onEventReceived",set:function(b){this._callback=b}},{key:"activeEvents",set:function(b){for(const a in this._active)b&&b.has(a)||(this._element.removeEventListener(h[a],this._active[a]),delete this._active[a]);b&&b.forEach(a=>
{if(!this._active[a]&&h[a]){const c=(this._eventHandlers[a]||this._handleDefault).bind(this,a);this._element.addEventListener(h[a],c);this._active[a]=c}});this._gamepadSource.hasEventListeners=b?.has("gamepad")??!1}}]);return f}();e.test={disableSubpixelCoordinates:!1};const h={"key-down":"keydown","key-up":"keyup","pointer-down":"pointerdown","pointer-up":"pointerup","pointer-move":"pointermove","mouse-wheel":"wheel","pointer-capture-got":"gotpointercapture","pointer-capture-lost":"lostpointercapture",
"context-menu":"contextmenu","pointer-enter":"pointerenter","pointer-leave":"pointerleave","pointer-cancel":"pointercancel",focus:"focus",blur:"blur"};k.BrowserEventSource=e;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});