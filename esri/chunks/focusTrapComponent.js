// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(D,q){function M(c,e){var d=Object.keys(c);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(c);e&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(c,g).enumerable}));d.push.apply(d,f)}return d}function N(c){for(var e=1;e<arguments.length;e++){var d=null!=arguments[e]?arguments[e]:{};e%2?M(Object(d),!0).forEach(function(f){var g=d[f];a:if("object"===typeof f&&null!==f){var w=f[Symbol.toPrimitive];if(void 0!==w){f=w.call(f,"string");
if("object"!==typeof f)break a;throw new TypeError("@@toPrimitive must return a primitive value.");}f=String(f)}f="symbol"===typeof f?f:String(f);f in c?Object.defineProperty(c,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):c[f]=g}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(d)):M(Object(d)).forEach(function(f){Object.defineProperty(c,f,Object.getOwnPropertyDescriptor(d,f))})}return c}var O={activateTrap:function(c,e){if(0<c.length){var d=c[c.length-
1];d!==e&&d.pause()}d=c.indexOf(e);-1!==d&&c.splice(d,1);c.push(e)},deactivateTrap:function(c,e){e=c.indexOf(e);-1!==e&&c.splice(e,1);0<c.length&&c[c.length-1].unpause()}},x=function(c){return"Tab"===c.key||9===c.keyCode},W=function(c){return x(c)&&!c.shiftKey},X=function(c){return x(c)&&c.shiftKey},P=function(c,e){var d=-1;c.every(function(f,g){return e(f)?(d=g,!1):!0});return d},y=function(c){for(var e=arguments.length,d=Array(1<e?e-1:0),f=1;f<e;f++)d[f-1]=arguments[f];return"function"===typeof c?
c.apply(void 0,d):c},E=function(c){return c.target.shadowRoot&&"function"===typeof c.composedPath?c.composedPath()[0]:c.target},Y=[],aa=function(c,e){var d=(null===e||void 0===e?void 0:e.document)||document,f=(null===e||void 0===e?void 0:e.trapStack)||Y,g=N({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:W,isKeyBackward:X},e),w=[],F=[],m=[],I=null,J=null,r=!1,u=!1,K=void 0,v=function(k,a,b){return k&&void 0!==k[a]?k[a]:g[b||a]},z=function(k){return F.findIndex(function(a){var b=
a.tabbableNodes;return a.container.contains(k)||b.find(function(h){return h===k})})},A=function(k){var a=g[k];if("function"===typeof a){for(var b=arguments.length,h=Array(1<b?b-1:0),l=1;l<b;l++)h[l-1]=arguments[l];a=a.apply(void 0,h)}!0===a&&(a=void 0);if(!a){if(void 0===a||!1===a)return a;throw Error("`".concat(k,"` was specified but was not a node, or did not return a node"));}b=a;if("string"===typeof a&&(b=d.querySelector(a),!b))throw Error("`".concat(k,"` as selector refers to no known node"));
return b},G=function(){var k=A("initialFocus");if(!1===k)return!1;void 0===k&&(k=0<=z(d.activeElement)?d.activeElement:(k=m[0])&&k.firstTabbableNode||A("fallbackFocus"));if(!k)throw Error("Your focus-trap needs to have at least one focusable element");return k},B=function(){F=w.map(function(k){var a=q.tabbable(k,g.tabbableOptions),b=q.focusable(k,g.tabbableOptions);return{container:k,tabbableNodes:a,focusableNodes:b,firstTabbableNode:0<a.length?a[0]:null,lastTabbableNode:0<a.length?a[a.length-1]:
null,nextTabbableNode:function(h){var l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0,p=b.findIndex(function(n){return n===h});if(!(0>p))return l?b.slice(p+1).find(function(n){return q.isTabbable(n,g.tabbableOptions)}):b.slice(0,p).reverse().find(function(n){return q.isTabbable(n,g.tabbableOptions)})}}});m=F.filter(function(k){return 0<k.tabbableNodes.length});if(0>=m.length&&!A("fallbackFocus"))throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
},C=function b(a){!1!==a&&a!==d.activeElement&&(a&&a.focus?(a.focus({preventScroll:!!g.preventScroll}),J=a,a.tagName&&"input"===a.tagName.toLowerCase()&&"function"===typeof a.select&&a.select()):b(G()))},Q=function(a){var b=A("setReturnFocus",a);return b?b:!1===b?!1:a},H=function(a){var b=E(a);0<=z(b)||(y(g.clickOutsideDeactivates,a)?t.deactivate({returnFocus:g.returnFocusOnDeactivate&&!q.isFocusable(b,g.tabbableOptions)}):y(g.allowOutsideClick,a)||a.preventDefault())},R=function(a){var b=E(a),h=
0<=z(b);h||b instanceof Document?h&&(J=b):(a.stopImmediatePropagation(),C(J||G()))},Z=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!1,h=E(a);B();var l=null;if(0<m.length){var p=z(h),n=0<=p?F[p]:void 0;0>p?l=b?m[m.length-1].lastTabbableNode:m[0].firstTabbableNode:b?(b=P(m,function(L){return h===L.firstTabbableNode}),0>b&&(n.container===h||q.isFocusable(h,g.tabbableOptions)&&!q.isTabbable(h,g.tabbableOptions)&&!n.nextTabbableNode(h,!1))&&(b=p),0<=b?l=m[0===b?m.length-1:b-
1].lastTabbableNode:x(a)||(l=n.nextTabbableNode(h,!1))):(b=P(m,function(L){return h===L.lastTabbableNode}),0>b&&(n.container===h||q.isFocusable(h,g.tabbableOptions)&&!q.isTabbable(h,g.tabbableOptions)&&!n.nextTabbableNode(h))&&(b=p),0<=b?l=m[b===m.length-1?0:b+1].firstTabbableNode:x(a)||(l=n.nextTabbableNode(h)))}else l=A("fallbackFocus");l&&(x(a)&&a.preventDefault(),C(l))},S=function(a){"Escape"!==a.key&&"Esc"!==a.key&&27!==a.keyCode||!1===y(g.escapeDeactivates,a)?(g.isKeyForward(a)||g.isKeyBackward(a))&&
Z(a,g.isKeyBackward(a)):(a.preventDefault(),t.deactivate())},T=function(a){var b=E(a);0<=z(b)||y(g.clickOutsideDeactivates,a)||y(g.allowOutsideClick,a)||(a.preventDefault(),a.stopImmediatePropagation())},U=function(){if(r)return O.activateTrap(f,t),K=g.delayInitialFocus?setTimeout(function(){C(G())},0):C(G()),d.addEventListener("focusin",R,!0),d.addEventListener("mousedown",H,{capture:!0,passive:!1}),d.addEventListener("touchstart",H,{capture:!0,passive:!1}),d.addEventListener("click",T,{capture:!0,
passive:!1}),d.addEventListener("keydown",S,{capture:!0,passive:!1}),t},V=function(){if(r)return d.removeEventListener("focusin",R,!0),d.removeEventListener("mousedown",H,!0),d.removeEventListener("touchstart",H,!0),d.removeEventListener("click",T,!0),d.removeEventListener("keydown",S,!0),t};var t={get active(){return r},get paused(){return u},activate:function(a){if(r)return this;var b=v(a,"onActivate"),h=v(a,"onPostActivate"),l=v(a,"checkCanFocusTrap");l||B();r=!0;u=!1;I=d.activeElement;b&&b();
a=function(){l&&B();U();h&&h()};if(l)return l(w.concat()).then(a,a),this;a();return this},deactivate:function(a){if(!r)return this;var b=N({onDeactivate:g.onDeactivate,onPostDeactivate:g.onPostDeactivate,checkCanReturnFocus:g.checkCanReturnFocus},a);clearTimeout(K);K=void 0;V();u=r=!1;O.deactivateTrap(f,t);var h=v(b,"onDeactivate"),l=v(b,"onPostDeactivate");a=v(b,"checkCanReturnFocus");var p=v(b,"returnFocus","returnFocusOnDeactivate");h&&h();b=function(){setTimeout(function(){p&&C(Q(I));l&&l()},
0)};if(p&&a)return a(Q(I)).then(b,b),this;b();return this},pause:function(){if(u||!r)return this;u=!0;V();return this},unpause:function(){if(!u||!r)return this;u=!1;B();U();return this},updateContainerElements:function(a){w=[].concat(a).filter(Boolean).map(function(b){return"string"===typeof b?d.querySelector(b):b});r&&B();return this}};t.updateContainerElements(c);return t};const ba=[];D.activateFocusTrap=function(c){c.focusTrapDisabled||c.focusTrap?.activate()};D.connectFocusTrap=function(c){const {focusTrapEl:e}=
c;e&&(null==e.tabIndex&&(e.tabIndex=-1),c.focusTrap=aa(e,{clickOutsideDeactivates:!0,document:e.ownerDocument,escapeDeactivates:!1,fallbackFocus:e,setReturnFocus:d=>{q.focusElement(d);return!1},tabbableOptions:q.tabbableOptions,trapStack:ba}))};D.deactivateFocusTrap=function(c){c.focusTrap?.deactivate()};D.updateFocusTrapElements=function(c){c.focusTrap?.updateContainerElements(c.focusTrapEl)}});