// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../core/handleUtils","./symbols"],function(g,m,n){function h(b,a){let d=a.children;if(d&&d.length)for(var c=0;c<d.length;++c)d[c]=h(b,d[c]);else d=p;c=a.vnodeSelector;if(k(c)){a=a.properties||q;const e=a.key||c;return{vnodeSelector:"div",properties:{key:e,afterCreate:r,afterUpdate:t,afterRemoved:l,parentWidget:b,widgetConstructor:c,widgetProperties:{...a,key:e,children:d}},children:void 0,text:void 0,domNode:null}}return a}function r(b,a,d,{parentWidget:c,widgetConstructor:e,
widgetProperties:u}){a=new e(u);a.container=b;f.set(b,a);a.afterCreate?.(a,b);c._internalHandles.add(m.makeHandle(()=>l(b)))}function t(b,a,d,{widgetProperties:c}){if(a=f.get(b))a.set(c),a.afterUpdate?.(a,b)}function l(b){const a=f.get(b);a&&(a.afterRemoved?.(a,b),a.destroy(),f.delete(b))}function k(b){return"function"===typeof b&&b[n.WIDGET_SYMBOL]}const p=[],q={},f=new WeakMap;g.isWidgetConstructor=k;g.processWidgets=h;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});