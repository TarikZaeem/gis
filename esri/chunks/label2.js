// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(f,l){function p(a,c){let b;const m=d=>{d.stopImmediatePropagation();d=d.composedPath();b=d.slice(d.indexOf(c),d.indexOf(a))};a.addEventListener("custom-element-ancestor-check",m,{once:!0});c.dispatchEvent(new CustomEvent("custom-element-ancestor-check",{composed:!0,bubbles:!0}));a.removeEventListener("custom-element-ancestor-check",m);return 0<b.filter(d=>d!==c&&d!==a).filter(d=>d.tagName?.includes("-")).length}function n(a){var c=a.el;var {id:b}=c;(b=b&&l.queryElementRoots(c,
{selector:`${"calcite-label"}[for="${b}"]`}))?c=b:(b=l.closestElementCrossShadowBoundary(c,"calcite-label"),c=!b||p(b,c)?null:b);b=c;h.has(b)||!b&&e.has(a)||(c=q.bind(a),b?(a.labelEl=b,b=r.bind(a),h.set(a.labelEl,b),a.labelEl.addEventListener("calciteInternalLabelClick",b),e.delete(a),document.removeEventListener("calciteInternalLabelConnected",g.get(a)),k.set(a,c),document.addEventListener("calciteInternaLabelDisconnected",c)):e.has(a)||(c(),document.removeEventListener("calciteInternaLabelDisconnected",
k.get(a))))}function r(a){if(!this.disabled&&!this.el.contains(a.detail.sourceEvent.target))this.onLabelClick(a)}function t(){e.has(this)&&n(this)}function q(){e.add(this);const a=g.get(this)||t.bind(this);g.set(this,a);document.addEventListener("calciteInternalLabelConnected",a)}const h=new WeakMap,g=new WeakMap,k=new WeakMap,e=new Set;f.connectLabel=n;f.disconnectLabel=function(a){e.delete(a);document.removeEventListener("calciteInternalLabelConnected",g.get(a));document.removeEventListener("calciteInternaLabelDisconnected",
k.get(a));g.delete(a);k.delete(a);if(a.labelEl){var c=h.get(a.labelEl);a.labelEl.removeEventListener("calciteInternalLabelClick",c);h.delete(a.labelEl)}};f.getLabelText=function(a){return a.label||a.labelEl?.textContent?.trim()||""};f.labelConnectedEvent="calciteInternalLabelConnected";f.labelDisconnectedEvent="calciteInternaLabelDisconnected"});