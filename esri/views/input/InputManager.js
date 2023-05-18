// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Logger ../../core/maybe ../../core/Queue ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../3d/support/PropertiesPool ./keys ./handlers/LatestPointer ./handlers/MultiTouch".split(" "),function(h,t,n,y,u,v,w,q,I,J,z,A,x,B,C){h.InputManager=function(k){function m(a){var b=k.call(this,a)||
this;b._pointerCaptures=new Map;b._nameToGroup={};b._handlers=[];b._handlersPriority=[];b._currentPropagation=null;b._updateDependenciesAfterPropagation=!1;b._sourceEvents=new Set;b._keyModifiers=new Set;b._activeKeyModifiers=new Set;b._stoppedPropagationEventIds=new Set;b.primaryKey=x.primaryKey;b._latestPointerType="mouse";b._propertiesPool=new A.PropertiesPool({latestPointerLocation:D},t._assertThisInitialized(b));b.latestPointerLocation=null;b.test={timestamp:void 0,hasCurrentPropagation:()=>
!!b._currentPropagation};return b}t._inheritsLoose(m,k);var e=m.prototype;e.initialize=function(){this.eventSource.onEventReceived=this._onEventReceived.bind(this);this._installRecognizers()};e.destroy=function(){const a=Object.keys(this._nameToGroup);for(const b of a)this.uninstallHandlers(b);this.eventSource.destroy();this._currentPropagation=null;this._propertiesPool.destroy()};e.installHandlers=function(a,b,c=r.INTERNAL){if(this._nameToGroup[a])u.getLogger(this.declaredClass).error("There is already an InputHandler group registered under the name `"+
a+"`");else if(0===b.length)u.getLogger(this.declaredClass).error("Can't register a group of zero handlers");else{var d={name:a,handlers:b.map(g=>({handler:g,active:!0,removed:!1,priorityIndex:0,groupPriority:c,eventCallback:null,uninstallCallback:null}))};this._nameToGroup[a]=d;for(a=d.handlers.length-1;0<=a;a--){const g=d.handlers[a];this._handlers.push(g);g.handler.onInstall({updateDependencies:()=>{this.updateDependencies()},emit:(f,l,E,F,G)=>{this._emitInputEvent(g.priorityIndex+1,f,l,E,G,F)},
setPointerCapture:(f,l)=>{this._setPointerCapture(d,g,f,l)},setEventCallback:f=>{g.eventCallback=f},setUninstallCallback:f=>{g.uninstallCallback=f},refreshHasPendingInputs:()=>{this.notifyChange("hasPendingInputs")}})}this.updateDependencies()}};e.uninstallHandlers=function(a){const b=this._nameToGroup[a];b?(b.handlers.forEach(c=>{c.removed=!0;c.uninstallCallback?.()}),delete this._nameToGroup[a],this._currentPropagation?this._currentPropagation.needsHandlerGarbageCollect=!0:this._garbageCollectRemovedHandlers()):
u.getLogger(this.declaredClass).error("There is no InputHandler group registered under the name `"+a+"`")};e.hasHandlers=function(a){return void 0!==this._nameToGroup[a]};e.updateDependencies=function(){if(this._currentPropagation)this._updateDependenciesAfterPropagation=!0;else{this._updateDependenciesAfterPropagation=!1;var a=new Set,b=new Set;this._handlersPriority=[];for(var c=this._handlers.length-1;0<=c;c--){var d=this._handlers[c];d.priorityIndex=c;this._handlersPriority.push(d)}this._handlersPriority=
this._sortHandlersPriority(this._handlersPriority);for(c=this._handlersPriority.length-1;0<=c;c--){d=this._handlersPriority[c];d.priorityIndex=c;let g=d.handler.hasSideEffects;if(!g)for(const f of d.handler.outgoingEventTypes)if(a.has(f)){g=!0;break}if(g)for(const f of d.handler.incomingEventMatches){a.add(f.eventType);for(const l of f.keyModifiers)x.isSystemModifier(l)||b.add(l)}d.active=g}this._sourceEvents=a;this._keyModifiers=b;0<this._pointerCaptures.size&&this._sourceEvents.add("pointer-capture-lost");
0<this._keyModifiers.size&&(this._sourceEvents.add("key-down"),this._sourceEvents.add("key-up"));this.eventSource&&(this.eventSource.activeEvents=this._sourceEvents)}};e._setLatestPointer=function(a,b,c){this._latestPointerType=a;a=this._get("latestPointerLocation");if(v.isNone(a)||a.x!==b||a.y!==c)a=this._propertiesPool.get("latestPointerLocation"),a.x=b,a.y=c,this._set("latestPointerLocation",a)};e._onEventReceived=function(a,b){"pointer-capture-lost"===a&&this._pointerCaptures.delete(b.native.pointerId);
this._updateKeyModifiers(a,b);this._emitInputEventFromSource(a,b,null!=this.test.timestamp?this.test.timestamp:b.native?b.native.timestamp:void 0,b.native?b.native.cancelable:void 0)};e._updateKeyModifiers=function(a,b){if(b){var c=!1,d=()=>{if(!c){const f=new Set;this._activeKeyModifiers.forEach(l=>{f.add(l)});this._activeKeyModifiers=f;c=!0}},g=(f,l)=>{l&&!this._activeKeyModifiers.has(f)?(d(),this._activeKeyModifiers.add(f)):!l&&this._activeKeyModifiers.has(f)&&(d(),this._activeKeyModifiers.delete(f))};
if("key-down"===a||"key-up"===a){const f=b.key;this._keyModifiers.has(f)&&g(f,"key-down"===a)}a=b.native;g("Alt",!(!a||!a.altKey));g("Ctrl",!(!a||!a.ctrlKey));g("Shift",!(!a||!a.shiftKey));g("Meta",!(!a||!a.metaKey));g("Primary",this._activeKeyModifiers.has(this.primaryKey))}};e._installRecognizers=function(){this._latestPointerHandler=new B.LatestPointer((a,b,c)=>this._setLatestPointer(a,b,c));this._multiTouchHandler=new C.MultiTouch;this.installHandlers("input-manager-logic",[this._latestPointerHandler,
this._multiTouchHandler],r.ALWAYS);0<this.recognizers.length&&this.installHandlers("default",this.recognizers,r.INTERNAL)};e._setPointerCapture=function(a,b,c,d){a=a.name+"-"+b.priorityIndex;b=this._pointerCaptures.get(c.pointerId)||new Set;this._pointerCaptures.set(c.pointerId,b);d?(b.add(a),1===b.size&&this.eventSource&&this.eventSource.setPointerCapture(c,!0)):b.has(a)&&(b.delete(a),0===b.size&&(this._pointerCaptures.delete(c.pointerId),this.eventSource&&this.eventSource.setPointerCapture(c,!1)))};
e._garbageCollectRemovedHandlers=function(){this._handlers=this._handlers.filter(a=>!a.removed);this.updateDependencies()};e._emitInputEventFromSource=function(a,b,c,d){this._emitInputEvent(0,a,b,c,d)};e._emitInputEvent=function(a,b,c,d,g,f){d=void 0!==d?d:this._currentPropagation?this._currentPropagation.timestamp:performance.now();a={event:new H(b,c,d,f||this._activeKeyModifiers,void 0!==g?g:!1),priorityIndex:a};this._currentPropagation?this._currentPropagation.events.push(a):this._doNewPropagation(a)};
e._doNewPropagation=function(a){this._currentPropagation={events:new w,currentHandler:null,needsHandlerGarbageCollect:!1,timestamp:a.event.timestamp};this._currentPropagation.events.push(a);this._continuePropagation()};e._continuePropagation=function(){const a=v.unwrapOrThrow(this._currentPropagation);for(;0<a.events.length;){const {event:b,priorityIndex:c}=a.events.pop(),d=b.data&&b.data.eventId;if(null==d||!this._stoppedPropagationEventIds.has(d))for(a.currentHandler=this._handlersPriority[c];a.currentHandler;){if(a.currentHandler.removed)a.needsHandlerGarbageCollect=
!0;else{a.currentHandler.active&&!b.shouldStopPropagation()&&a.currentHandler.eventCallback?.(b);if(b.shouldStopPropagation()){null!=d&&this._stoppedPropagationEventIds.add(d);break}if(b.shouldPausePropagation(()=>this._continuePropagation())){this._pausePropagation({event:b,priorityIndex:a.currentHandler.priorityIndex+1});return}}a.currentHandler=this._handlersPriority[a.currentHandler.priorityIndex+1]}}a.needsHandlerGarbageCollect&&this._garbageCollectRemovedHandlers();this.hasPendingInputs||this._stoppedPropagationEventIds.clear();
this._currentPropagation=null;this._updateDependenciesAfterPropagation&&this.updateDependencies()};e._pausePropagation=function(a){const b=new w;b.push(a);if(a=this._currentPropagation){for(;a.events.length;)b.push(a.events.pop());a.events=b;a.currentHandler=null}};e._compareHandlerPriority=function(a,b){if(a.handler.hasSideEffects!==b.handler.hasSideEffects)return a.handler.hasSideEffects?1:-1;if(a.groupPriority!==b.groupPriority)return a.groupPriority>b.groupPriority?-1:1;for(const c of a.handler.incomingEventMatches)for(const d of b.handler.incomingEventMatches){if(c.eventType!==
d.eventType)continue;const g=c.keyModifiers.filter(f=>d.keyModifiers.includes(f));if(g.length===c.keyModifiers.length!==(g.length===d.keyModifiers.length))return c.keyModifiers.length>d.keyModifiers.length?-1:1}return a.priorityIndex>b.priorityIndex?-1:1};e._sortHandlersPriority=function(a){const b=[];for(const c of a){for(a=0;a<b.length&&0<=this._compareHandlerPriority(c,b[a]);)a++;b.splice(a,0,c)}return b};t._createClass(m,[{key:"hasPendingInputs",get:function(){return this._handlers.some(a=>a.handler.hasPendingInputs)}},
{key:"latestPointerType",get:function(){return this._latestPointerType}},{key:"multiTouchActive",get:function(){return this._multiTouchHandler.multiTouchActive}},{key:"debug",get:function(){const a=b=>{const c=this._setPointerCapture;this._setPointerCapture=()=>{};b();this._setPointerCapture=c};return{injectEvent:(b,c)=>{a(()=>{this._onEventReceived(b,c)})},disablePointerCapture:a}}}]);return m}(y);n.__decorate([q.property({readOnly:!0})],h.InputManager.prototype,"hasPendingInputs",null);n.__decorate([q.property({constructOnly:!0})],
h.InputManager.prototype,"eventSource",void 0);n.__decorate([q.property({constructOnly:!0})],h.InputManager.prototype,"recognizers",void 0);n.__decorate([q.property()],h.InputManager.prototype,"_latestPointerType",void 0);n.__decorate([q.property()],h.InputManager.prototype,"latestPointerType",null);n.__decorate([q.property()],h.InputManager.prototype,"multiTouchActive",null);n.__decorate([q.property({readOnly:!0})],h.InputManager.prototype,"latestPointerLocation",void 0);h.InputManager=n.__decorate([z.subclass("esri.views.input.InputManager")],
h.InputManager);let H=function(){function k(e,a,b,c,d){this.type=e;this.data=a;this.timestamp=b;this.modifiers=c;this.cancelable=d;this._propagationState=p.NONE;this._resumeCallback=null}var m=k.prototype;m.stopPropagation=function(){this._propagationState|=p.STOPPED};m.shouldStopPropagation=function(){return 0!==(this._propagationState&p.STOPPED)};m.async=function(e){this._propagationState|=p.PAUSED;const a=(b,c)=>{this._propagationState&=~p.PAUSED;const d=this._resumeCallback;this._resumeCallback=
null;d&&d();if(c)throw b;return b};return("function"===typeof e?e():e).then(b=>a(b,!1),b=>a(b,!0))};m.shouldPausePropagation=function(e){return this._propagationState&p.PAUSED?(this._resumeCallback=e,!0):!1};m.preventDefault=function(){this.data.native.preventDefault()};return k}();var p;(function(k){k[k.NONE=0]="NONE";k[k.STOPPED=1]="STOPPED";k[k.PAUSED=2]="PAUSED"})(p||(p={}));const r={ALWAYS:1,DEFAULT:0,TOOL:-1,WIDGET:-2,INTERNAL:-3},D=function(){};h.ViewEventPriorities=r;Object.defineProperty(h,
Symbol.toStringTag,{value:"Module"})});