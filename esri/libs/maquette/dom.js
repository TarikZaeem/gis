// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./projection"],function(f,d){const e={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(c,b,a)=>{"-"===b.charAt(0)?c.style.setProperty(b,a):c.style[b]=a}};f.applyDefaultProjectionOptions=c=>d.extend(e,c);f.dom={create:(c,b)=>{b=d.extend(e,b);d.createDom(c,document.createElement("div"),void 0,b);return d.createProjection(c,b)},append:(c,b,a)=>{a=d.extend(e,a);d.createDom(b,c,void 0,a);return d.createProjection(b,a)},insertBefore:(c,b,a)=>{a=d.extend(e,
a);d.createDom(b,c.parentNode,c,a);return d.createProjection(b,a)},merge:(c,b,a)=>{a=d.extend(e,a);b.domNode=c;d.initPropertiesAndChildren(c,b,a);return d.createProjection(b,a)},replace:(c,b,a)=>{a=d.extend(e,a);d.createDom(b,c.parentNode,c,a);c.parentNode.removeChild(c);return d.createProjection(b,a)}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});