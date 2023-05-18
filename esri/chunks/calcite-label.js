// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./index","./label2"],function(c,a,d){function e(){"undefined"!==typeof customElements&&["calcite-label"].forEach(b=>{switch(b){case "calcite-label":customElements.get(b)||customElements.define(b,f)}})}const f=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInternalLabelClick=a.createEvent(this,"calciteInternalLabelClick",2);this.labelClickHandler=b=>{this.calciteInternalLabelClick.emit({sourceEvent:b})};this.alignment=
"start";this.for=void 0;this.scale="m";this.layout="default"}connectedCallback(){document.dispatchEvent(new CustomEvent(d.labelConnectedEvent))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(d.labelDisconnectedEvent))}render(){return a.h(a.Host,{onClick:this.labelClickHandler},a.h("div",{class:"container"},a.h("slot",null)))}get el(){return this}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex}:host([alignment\x3dstart]){text-align:start}:host([alignment\x3dend]){text-align:end}:host([alignment\x3dcenter]){text-align:center}:host([scale\x3ds]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale\x3dm]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale\x3dl]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout\x3ddefault]) .container{display:flex;flex-direction:column}:host([layout\x3dinline]) .container,:host([layout\x3dinline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout\x3dinline][scale\x3dl]) .container{gap:0.75rem}:host([layout\x3dinline-space-between]) .container{justify-content:space-between}:host([disabled])\x3e.container{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*){pointer-events:none}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}"}},
[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]}]);e();c.CalciteLabel=f;c.defineCustomElement=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});