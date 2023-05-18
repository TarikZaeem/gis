// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/events ../../../core/Handles ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../Widget ../../../chunks/constants ./css ./Label ./LevelItem ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(v,f,r,x,
y,m,l,g,e,F,A,B,k,p,C,D,E,q){const w={selectLevel:"selectLevel",clearLevel:"clearLevel",nextLevel:"nextLevel",previousLevel:"previousLevel",currentLevel:"{{value}}"};e=function(z){function t(a,c){var b=z.call(this,a,c)||this;b._levelHandles=new x;b._levelEventHandles=new x;b._levelWidgets=[];b._labelWidget=new C.Label({onClear:()=>b.vm.clear()});b._hoveredLevel=null;b._expandedLevelsHeight=void 0;b._normalizedPointerPosition=0;b._hovering=!1;b._containerPosTop=null;b._levelsContainer=null;b._onPointerUp=
()=>{window.getSelection()?.removeAllRanges();if(!m.isNone(b._hoveredLevel)){var {vm:d}=v._assertThisInitialized(b);d.enabled&&b._hoveredLevel===d.value?d.clear():d.select(b._hoveredLevel)}};b._onPointerEnter=()=>{b._hovering||m.isNone(b._levelsContainer)||(b._hovering=!0,b._containerPosTop=b._levelsContainer.getBoundingClientRect().top??0)};b._onPointerLeave=()=>{b._hovering&&(b._normalizedPointerPosition=0,b._hoveredLevel=null,b._hovering=!1)};b._onPointerMove=d=>{if(!b._hovering)return!1;window.getSelection()?.removeAllRanges();
if(m.isSome(b._containerPosTop)){const n=b._levelHeight/2;d=(d.clientY-(b._containerPosTop+k.LEVELS_PADDING*k.LEVELS_MARGIN_FACTOR+b._expandedLevelsMargin+n))/(b._levelsHeight-n);d+=k.LEVELS_POINTER_ADJUSTMENT;b._normalizedPointerPosition=d}return!1};return b}v._inheritsLoose(t,z);var h=t.prototype;h.postInitialize=function(){this.addHandles([l.watch(()=>this._levelsContainer,()=>this._onContainerChange(),l.initial),l.watch(()=>this._levels,()=>this._createLevelWidgets(),l.initial),l.watch(()=>this.messages,
()=>{this._labelWidget.messages=m.unwrapOr(this.messages,w)},l.initial)])};h.destroy=function(){this._levelHandles.destroy();this._levelEventHandles.destroy();this._levelWidgets.forEach(a=>a.destroy());this._labelWidget.destroy()};h.render=function(){const a=this._levelWidgets.length,c=1<a?this._levelWidgets.map(u=>u.render()):null;var b=k.LEVELS_PADDING*k.LEVELS_MARGIN_FACTOR;const d=-b/k.LEVELS_MARGIN_FACTOR,n=this._levelsHeight;b=n+2*b;return q.tsx("div",{bind:this,key:this,class:this.classes("esri-widget",
p.CSS.container,{[p.CSS.animateLevel]:!this._hovering,[p.CSS.noLevel]:2>a}),onkeydown:this._onKeyDown},this._renderLabelContainer(),q.tsx("div",{bind:this,class:p.CSS.levelsContainer,styles:{height:`${b}px`,marginTop:`${d}px`,marginBottom:`${d}px`},onfocus:this._onFocus,afterCreate:E.storeNode,"data-node-ref":"_levelsContainer"},q.tsx("div",{styles:{height:`${n}px`,margin:`${k.LEVELS_PADDING-this._expandedLevelsMargin}px 0 0 0`},class:p.CSS.innerLevelsContainer},c)))};h._renderLabelContainer=function(){var a=
m.unwrapOr(this.messages,w);const c=a.previousLevel;a=a.nextLevel;return q.tsx("div",{class:p.CSS.labelContainer,tabIndex:0},q.tsx("button",{bind:this,class:p.CSS.arrowUp,disabled:!this.vm.hasNext,onclick:this._onArrowUpClick,"aria-label":a,title:a,type:"button"}),this._labelWidget.render(),q.tsx("button",{bind:this,class:p.CSS.arrowDown,disabled:!this.vm.hasPrevious,onclick:this._onArrowDownClick,"aria-label":c,title:c,type:"button"}))};h._updateComponents=function(){const a=m.unwrapOr(this.messages,
w),c=this.vm.enabled?this.vm.value:null,b=m.isSome(this._hoveredLevel)?this._hoveredLevel:c;this._levelWidgets.forEach(d=>{const n=this.vm.getValueLabel(d.level);d.label=m.isSome(n)?n:a.currentLevel?.replace("{{level}}",String(d.level));d.active=d.level===c;d.hovering=d.level===this._hoveredLevel});this._labelWidget.level=b;this._labelWidget.active=b===c;this._labelWidget.hovering=m.isSome(this._hoveredLevel)};h._createLevelWidgets=function(){this._levelWidgets.forEach(a=>a.destroy());this._levelWidgets=
this._levels.map(a=>new D.LevelItem({level:a,onSelect:()=>this._onLevelToggle(a)}));this._levelHandles.removeAll();this._levelHandles.add([l.watch(()=>{const {vm:a}=this;return[this.messages,a?.value,a?.enabled,this._hoveredLevel,this._hovering]},()=>this._updateComponents(),l.initial),l.watch(()=>[this._normalizedPointerPosition,this._hovering],()=>this._onPointerPositionChange(),l.initial),l.watch(()=>this._levelWidth,a=>this._levelWidgets.forEach(c=>c.width=a),l.initial)])};h._onContainerChange=
function(){const a=this._levelsContainer;m.isNone(a)||(this._levelEventHandles.removeAll(),this._levelEventHandles.add([r.on(a,"pointerenter",this._onPointerEnter),r.on(a,"pointerover",this._onPointerEnter),r.on(a,"pointerleave",this._onPointerLeave),r.on(a,"pointerup",this._onPointerUp),r.on(a,"pointermove",this._onPointerMove)]))};h._onKeyDown=function(a){switch(a.key){case "ArrowDown":case "ArrowLeft":a.preventDefault();a.stopPropagation();this.vm.previous();this._focusCurrentLevel();break;case "ArrowUp":case "ArrowRight":a.preventDefault(),
a.stopPropagation(),this.vm.next(),this._focusCurrentLevel()}};h._focusCurrentLevel=function(){const a=this._levelWidgets.find(c=>c.level===this.vm.value);a&&a.focus()};h._onFocus=function(){this._hoveredLevel=0<this._levels.length?this._levels[0]:null};h._onLevelToggle=function(a){const {vm:c}=this;c.enabled&&c.value===a?c.clear():c.select(a)};h._onArrowUpClick=function(){this.vm.next()};h._onArrowDownClick=function(){this.vm.previous()};h._onPointerPositionChange=function(){let a=0;this._levelWidgets.forEach((b,
d)=>{const {width:n,height:u}=this._getLevelWidgetSize(d);b.height=u;b.width=n;a+=u});this._hoveredLevel=this._levelClosestToPointer;const c=this._expandedLevelsHeight;if(null==c||30<Math.abs(c-a))this._expandedLevelsHeight=a};h._getLevelWidgetSize=function(a){const c={width:this._levelWidth,height:this._levelHeight};this._hovering&&(a=this._getGaussianFactor(a,this._normalizedPointerPosition),c.width+=k.LEVEL_HOVERED_EXTRA_WIDTH*a,c.height+=k.LEVEL_HOVERED_EXTRA_HEIGHT*a);return c};h._getGaussianFactor=
function(a,c){const b=this._numLevels-1;return Math.exp(-((this._gaussianFactor*((b-a)/b-c))**2))};v._createClass(t,[{key:"_levels",get:function(){return this.vm.allowedValues}},{key:"_numLevels",get:function(){return this._levels.length}},{key:"_levelsHeight",get:function(){return Math.round(this._levelHeight*this._numLevels)}},{key:"_expandedLevelsMargin",get:function(){return Math.round(((this._expandedLevelsHeight??0)-this._levelsHeight)/2)}},{key:"_levelWidth",get:function(){const {LEVEL_WIDTH_NOMINATOR:a,
LEVEL_WIDTH_CONSTANT:c}=k.constants;return Math.round(y.clamp(a/Math.sqrt(this._numLevels)+c,k.LEVEL_WIDTH_MIN,k.LEVEL_WIDTH_MAX))}},{key:"_levelHeight",get:function(){const a=k.LEVEL_HEIGHT_DEFAULT;return Math.round(y.clamp(2*a/Math.sqrt(this._numLevels),2,a))}},{key:"_gaussianFactor",get:function(){const a=this._numLevels;return a/Math.log(k.ALPHA_LEVEL_DEPENDENCY_FACTOR*a)*k.ALPHA_SPREAD_FACTOR}},{key:"_levelClosestToPointer",get:function(){if(!this._hovering)return null;const a=this._numLevels-
1,c=this._normalizedPointerPosition;return 0<=a&&m.isSome(c)?this._levels[Math.round((1-c)*a)]:null}}]);return t}(B);f.__decorate([g.property()],e.prototype,"vm",void 0);f.__decorate([g.property()],e.prototype,"messages",void 0);f.__decorate([g.property()],e.prototype,"_levelWidgets",void 0);f.__decorate([g.property()],e.prototype,"_labelWidget",void 0);f.__decorate([g.property()],e.prototype,"_hoveredLevel",void 0);f.__decorate([g.property()],e.prototype,"_levels",null);f.__decorate([g.property()],
e.prototype,"_numLevels",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"_levelsHeight",null);f.__decorate([g.property()],e.prototype,"_expandedLevelsHeight",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"_expandedLevelsMargin",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"_levelWidth",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"_levelHeight",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"_gaussianFactor",null);f.__decorate([g.property({readOnly:!0})],
e.prototype,"_levelClosestToPointer",null);f.__decorate([g.property({type:Number,range:{min:0,max:1}})],e.prototype,"_normalizedPointerPosition",void 0);f.__decorate([g.property()],e.prototype,"_hovering",void 0);f.__decorate([g.property()],e.prototype,"_containerPosTop",void 0);f.__decorate([g.property()],e.prototype,"_levelsContainer",void 0);return e=f.__decorate([A.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.BuildingLevelPicker")],e)});