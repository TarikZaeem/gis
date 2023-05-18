// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../assets ../core/Handles ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./Widget ./BasemapGallery/BasemapGalleryViewModel ./BasemapGallery/css ./support/Heading ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(x,t,e,y,z,r,
h,c,H,A,B,C,d,D,E,F,f,I){c=function(u){function n(a,b){a=u.call(this,a,b)||this;a._handles=new z;a._focusBasemapItemEnabled=!1;a.disabled=!1;a.headingLevel=2;a.iconClass=d.CSS.widgetIcon;a.messages=null;a.viewModel=new C;return a}t._inheritsLoose(n,u);var k=n.prototype;k.initialize=function(){const a=this._handles;this.addHandles([r.on(()=>this.viewModel.items,"change",b=>{const {added:g,moved:l}=b;a.remove("basemap-gallery-item-changes");a.add([...g,...l].map(m=>r.watch(()=>m.state,()=>this.scheduleRender())),
"basemap-gallery-item-changes");this.scheduleRender()}),r.when(()=>this.source,()=>this.viewModel.load(),{initial:!0,once:!0})])};k.destroy=function(){this._handles.destroy()};k.loadDependencies=function(){return new Promise((a,b)=>x(["../chunks/calcite-scrim"],a,b))};k.render=function(){var a="loading"===this.source.state,b=this.disabled||"disabled"===this.viewModel.state;const g=this.viewModel.items.map((m,p)=>this._renderBasemapGalleryItem(m,p)).toArray();b={[d.CSS.sourceLoading]:a,[d.CSS.disabled]:b};
const l=a?f.tsx("div",{class:d.CSS.loader,key:"esri-basemap-gallery__loader"}):null;a=a?null:0<g.length?f.tsx("ul",{bind:this,"aria-disabled":this.disabled,"aria-label":this.label,class:d.CSS.itemContainer,key:"esri-basemap-gallery__item-container",onkeydown:this._handleKeyDown,role:"radiogroup"},g):f.tsx("div",{class:d.CSS.emptyMessage,key:"esri-basemap-gallery__empty-message"},f.tsx(D.Heading,{level:this.headingLevel},this.messages.noBasemaps));return f.tsx("div",{class:this.classes(d.CSS.base,
b)},l,a)};k._getRoundRobinIndex=function(a,b){return(a+b)%b};k._handleKeyDown=function(a){const {key:b}=a;if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(b)){a.preventDefault();var {items:g,activeBasemapIndex:l}=this.viewModel;a="ArrowUp"===b||"ArrowLeft"===b?this._getRoundRobinIndex(Math.max(l-1,-1),g.length):this._getRoundRobinIndex(l+1,g.length);a=g.getItemAt(a);"ready"===a?.state&&(this.viewModel.activeBasemap=a.basemap);this._focusBasemapItemEnabled=!0}};k._focusBasemapItem=function(a){this._focusBasemapItemEnabled&&
0===a.tabIndex&&(a.focus(),this._focusBasemapItemEnabled=!1)};k._handleClick=function(a){a=a.currentTarget["data-item"];"ready"===a.state&&(this.viewModel.activeBasemap=a.basemap)};k._renderBasemapGalleryItem=function(a,b){const g=a.basemap.thumbnailUrl||y.getAssetUrl("esri/themes/base/images/basemap-toggle-64.svg"),l=a.basemap.title;var m=a.basemap.portalItem?.snippet;m=a.error?.message||m||l;const {viewModel:{state:p,activeBasemapIndex:v}}=this,q=v===b;b=q||-1===v&&0===b?0:-1;const G="loading"===
p,w=`basemapgallery-item-${a.uid}`;return f.tsx("li",{"aria-checked":q.toString(),"aria-disabled":(this.disabled||"disabled"===p).toString(),"aria-labelledby":w,bind:this,class:this.classes(d.CSS.item,{[d.CSS.selectedItem]:q,[d.CSS.itemError]:"error"===a.state}),"data-item":a,onkeydown:this._handleClick,onclick:this._handleClick,role:"radio",tabIndex:b,afterUpdate:this._focusBasemapItem,title:m},f.tsx("img",{alt:"",class:d.CSS.itemThumbnail,src:g}),f.tsx("div",{id:w,class:d.CSS.itemTitle},l),"loading"===
a.state||q&&G?f.tsx("calcite-scrim",null,f.tsx("span",{"aria-hidden":"true",role:"presentation",class:d.CSS.loaderAnimation})):null)};t._createClass(n,[{key:"activeBasemap",get:function(){return this.viewModel.activeBasemap},set:function(a){this.viewModel.activeBasemap=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"source",get:function(){return this.viewModel.source},set:function(a){this.viewModel.source=a}},{key:"view",
get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return n}(B);e.__decorate([h.property()],c.prototype,"activeBasemap",null);e.__decorate([h.property()],c.prototype,"disabled",void 0);e.__decorate([h.property()],c.prototype,"headingLevel",void 0);e.__decorate([h.property()],c.prototype,"iconClass",void 0);e.__decorate([h.property()],c.prototype,"label",null);e.__decorate([h.property(),F.messageBundle("esri/widgets/BasemapGallery/t9n/BasemapGallery")],c.prototype,
"messages",void 0);e.__decorate([h.property()],c.prototype,"source",null);e.__decorate([h.property()],c.prototype,"view",null);e.__decorate([h.property()],c.prototype,"viewModel",void 0);e.__decorate([E.accessibleHandler()],c.prototype,"_handleClick",null);return c=e.__decorate([A.subclass("esri.widgets.BasemapGallery")],c)});