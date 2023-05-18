// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../Widget ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(p,h,k,q,l,f,y,u,v,w,g){const x={nextPhase:"nextPhase",previousPhase:"previousPhase",currentPhase:"{{value}}"};f=function(r){function n(d,
e){var a=r.call(this,d,e)||this;a._phasesContainer=null;a._shouldScrollCurrentPhaseIntoView=!0;a._shouldFocusCurrentPhase=!1;a._onKeyDown=b=>{const {vm:c}=p._assertThisInitialized(a);switch(b.key){case "ArrowDown":case "ArrowLeft":b.stopPropagation();b.preventDefault();c.previous();a._shouldFocusCurrentPhase=!0;break;case "ArrowUp":case "ArrowRight":b.stopPropagation(),b.preventDefault(),c.next(),a._shouldFocusCurrentPhase=!0}};a._onArrowLeftClick=()=>{a.vm.previous()};a._onArrowRightClick=()=>{a.vm.next()};
a._onPhasesContainerAfterCreate=b=>{a._phasesContainer=b;requestAnimationFrame(a._scrollOrFocusPhase)};a._scrollOrFocusPhase=()=>{const b=a._phasesContainer;if(!a.destroyed&&!k.isNone(b)){var c=b.querySelector(".esri-building-phase-picker__phase--current");c&&(a._shouldScrollCurrentPhaseIntoView&&(b.scrollLeft=-(b.offsetWidth/2)+c.offsetLeft-c.offsetWidth/2,a._shouldScrollCurrentPhaseIntoView=!1),a._shouldFocusCurrentPhase&&(c.focus(),a._shouldFocusCurrentPhase=!1))}};return a}p._inheritsLoose(n,
r);var m=n.prototype;m.initialize=function(){this.addHandles(q.watch(()=>[this._currentPhase,this._phasesContainer,this.container],()=>{this._shouldScrollCurrentPhaseIntoView=!0;requestAnimationFrame(this._scrollOrFocusPhase)},q.initial))};m.render=function(){if(2>this._phases.length)return g.tsx("div",{key:"no-phases"});const {vm:d,container:e,messages:a}=this,{previousPhase:b,nextPhase:c}=k.unwrapOr(a,x),t=w.isRTL(e);return g.tsx("div",{class:this.classes("esri-widget","esri-building-phase-picker"),
key:this,onkeydown:this._onKeyDown},g.tsx("button",{type:"button",class:t?"esri-building-phase-picker__arrow-right":"esri-building-phase-picker__arrow-left",disabled:!d.hasPrevious,"aria-label":b,title:b,onclick:this._onArrowLeftClick}),g.tsx("div",{class:"esri-building-phase-picker__phases-container",afterCreate:this._onPhasesContainerAfterCreate},this._renderPhaseButtons()),g.tsx("button",{type:"button",class:t?"esri-building-phase-picker__arrow-left":"esri-building-phase-picker__arrow-right",disabled:!d.hasNext,
"aria-label":c,title:c,onclick:this._onArrowRightClick}))};m._renderPhaseButtons=function(){const d=this._phases,e=this._currentPhase,a=[];for(let c=0;c<d.length;++c){var b=d[c];b={phase:b,active:k.isSome(e)?b<=e:!1,current:k.isSome(e)?b===e:!1};0<c&&a.push(this._renderDivider(b));a.push(this._renderPhaseButton(b))}return a};m._renderPhaseButton=function({phase:d,active:e,current:a}){const {vm:b}=this,c=k.unwrap(b.getValueLabel(d));return g.tsx("button",{key:`phase-${d}`,class:this.classes("esri-building-phase-picker__phase",
{["esri-building-phase-picker__phase--active"]:e,["esri-building-phase-picker__phase--current"]:a}),"aria-label":c,title:c,onclick:()=>b.select(d),type:"button"},d)};m._renderDivider=function({phase:d,active:e}){return g.tsx("div",{key:`phase-divider-${d}`,class:this.classes("esri-building-phase-picker__divider",{["esri-building-phase-picker__divider--active"]:e})})};p._createClass(n,[{key:"_phases",get:function(){return this.vm.allowedValues}},{key:"_currentPhase",get:function(){const {vm:d}=this;
return d.enabled?d.value:null}}]);return n}(v);h.__decorate([l.property({nonNullable:!0})],f.prototype,"vm",void 0);h.__decorate([l.property()],f.prototype,"messages",void 0);h.__decorate([l.property()],f.prototype,"_phases",null);h.__decorate([l.property()],f.prototype,"_currentPhase",null);h.__decorate([l.property()],f.prototype,"_phasesContainer",void 0);return f=h.__decorate([u.subclass("esri.widgets.BuildingExplorer.BuildingPhasePicker.BuildingPhasePicker")],f)});