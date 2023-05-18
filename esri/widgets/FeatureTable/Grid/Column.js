// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Evented ../../../core/HandleOwner ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./support/ButtonMenu ../../support/widgetUtils".split(" "),function(n,c,b,t,u,p,d,x,y,v,w,q){b=function(r){function l(g){var a=r.call(this,g)||this;a._menuContainer=
document.createElement("div");a.activeRowIndex=null;a.autoWidth=!1;a.cellValueFormatFunction=({value:f})=>q.renderingSanitizer.sanitize(f);a.flexGrow=1;a.footerRenderFunction=null;a.frozen=!1;a.grid=null;a.header=null;a.headerRenderFunction=f=>{const {root:h}=f;a.removeCellContent(h);h.classList.add("esri-column__header-content");if(a.sortable)a.headerSorterRenderFunction(f);else{const e=document.createElement("div");e.classList.add("esri-column__header-label");e.textContent=a.label;h.appendChild(e)}a.headerMenuEnabled&&
a.headerMenuRenderFunction(f)};a.headerMenuRenderFunction=({root:f})=>{a.menu?.items?.length&&f.appendChild(a._menuContainer)};a.headerSorterRenderFunction=({root:f})=>{const {label:h,sortElement:e}=n._assertThisInitialized(a);e?(e.textContent!==h&&e.setAttribute("textContent",h),f.appendChild(e),(f=a.grid?.getSlotElementByName(f.slot)?.parentElement)&&!f.onkeydown&&(f.onkeydown=({key:m})=>{"Enter"!==m&&"Spacebar"!==m||e.click()})):f.textContent=h};a.hidden=!1;a.headerMenuEnabled=!0;a.initialSortPriority=
null;a.menu=null;a.menuConfig=null;a.messages=null;a.messagesCommon=null;a.messagesURIUtils=null;a.path=null;a.renderFunction=({root:f,column:h,rowData:e})=>{const m=a.getCellValue(h,e);h=a.cellValueFormatFunction({column:h,rowData:e,value:m});f.innerHTML!==h&&(f.innerHTML=h)};a.resizable=!0;a.sortable=!0;a.textAlign="start";a.width=200;return a}n._inheritsLoose(l,r);var k=l.prototype;k.initialize=function(){const {messages:g,path:a}=this;this._set("sortElement",this.createSortElement());this.sortElement.setAttribute("path",
a??"");this._menuContainer.classList.add("esri-column__menu-container");this.menu=new w({label:g?.options,iconClass:"esri-icon-handle-horizontal",...this.menuConfig});this.menu.container=this._menuContainer;this.menu.set("items",this.getMenuItems());this.handles.add(p.watch(()=>this.hidden,()=>this.menu?.set("open",!1)),p.watch(()=>this.path,f=>{this.sortElement&&this.sortElement.path!==f&&this.sortElement.setAttribute("path",f??"")}))};k.destroy=function(){this.menu?.destroy()};k.getMenuItems=function(){const {menuConfig:g,
sortable:a}=this,f=g?.items,h=this.getSortMenuItems(),e=[];a&&e.push(...h);f?.length&&e.push(...f);return e.length?e:null};k.getSortMenuItems=function(){const {messages:g}=this;return[{selected:"asc"===this.direction,iconClass:"esri-icon-arrow-up",label:g?.sortAsc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","asc"!==this.direction?"asc":null)},{selected:"desc"===this.direction,iconClass:"esri-icon-arrow-down",label:g?.sortDesc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","desc"!==
this.direction?"desc":null)}]};k.getCellValue=function(g,a){return a?.item[g?.path]??""};k.createSortElement=function(){const {direction:g,label:a,path:f,initialSortPriority:h}=this,e=document.createElement("vaadin-grid-sorter");e.classList.add("esri-column__sorter");e.setAttribute("path",f??"");e.setAttribute("title",a);e.textContent=a;g&&e.setAttribute("direction",g);u.isSome(h)&&(e._initialOrder=h);e.addEventListener("direction-changed",()=>{this.direction!==e.direction&&this._set("direction",
e.direction)});return e};k.removeCellContent=function(g){if(g)for(;g.firstChild;)try{g.removeChild(g.firstChild)}catch(a){}};n._createClass(l,[{key:"direction",get:function(){return this._get("direction")||null},set:function(g){this.sortable&&(this.sortElement&&(g?this.sortElement.direction!==g&&this.sortElement.setAttribute("direction",g):this.sortElement.removeAttribute("direction")),this._set("direction",g))}},{key:"label",get:function(){return q.renderingSanitizer.sanitize(this.header??this.path??
"")}}]);return l}(t.HandleOwnerMixin(b.EventedAccessor));c.__decorate([d.property()],b.prototype,"activeRowIndex",void 0);c.__decorate([d.property()],b.prototype,"autoWidth",void 0);c.__decorate([d.property()],b.prototype,"cellValueFormatFunction",void 0);c.__decorate([d.property()],b.prototype,"direction",null);c.__decorate([d.property()],b.prototype,"flexGrow",void 0);c.__decorate([d.property()],b.prototype,"footerRenderFunction",void 0);c.__decorate([d.property()],b.prototype,"frozen",void 0);
c.__decorate([d.property()],b.prototype,"grid",void 0);c.__decorate([d.property()],b.prototype,"header",void 0);c.__decorate([d.property()],b.prototype,"headerRenderFunction",void 0);c.__decorate([d.property()],b.prototype,"headerMenuRenderFunction",void 0);c.__decorate([d.property()],b.prototype,"headerSorterRenderFunction",void 0);c.__decorate([d.property()],b.prototype,"hidden",void 0);c.__decorate([d.property()],b.prototype,"headerMenuEnabled",void 0);c.__decorate([d.property({constructOnly:!0})],
b.prototype,"initialSortPriority",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"label",null);c.__decorate([d.property()],b.prototype,"menu",void 0);c.__decorate([d.property()],b.prototype,"menuConfig",void 0);c.__decorate([d.property()],b.prototype,"messages",void 0);c.__decorate([d.property()],b.prototype,"messagesCommon",void 0);c.__decorate([d.property()],b.prototype,"messagesURIUtils",void 0);c.__decorate([d.property()],b.prototype,"path",void 0);c.__decorate([d.property()],b.prototype,
"renderFunction",void 0);c.__decorate([d.property()],b.prototype,"resizable",void 0);c.__decorate([d.property()],b.prototype,"sortable",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"sortElement",void 0);c.__decorate([d.property()],b.prototype,"textAlign",void 0);c.__decorate([d.property()],b.prototype,"width",void 0);return b=c.__decorate([v.subclass("esri.widgets.FeatureTable.Grid.Column")],b)});