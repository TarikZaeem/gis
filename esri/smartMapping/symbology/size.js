// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../Color","./support/symbologyUtils","./support/utils"],function(n,d,r,e){function t(a){if(a)return a={...a},"color"in a&&a.color&&(a.color=new d(a.color)),"noDataColor"in a&&a.noDataColor&&(a.noDataColor=new d(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new d(a.outline.color),width:a.outline.width}),"marker"in a&&a.marker&&(a.marker=t(a.marker)),"background"in a&&a.background&&(a.background=t(a.background)),a}function v(a,b){var c="mesh"!==a.geometryType&&
a.worldScale?a.view:null;switch(a.geometryType){case "point":case "multipoint":return w({color:b.color,noDataColor:b.noDataColor,outline:b.outline,size:b.size,noDataSize:b.noDataSize,minSize:b.minSize,maxSize:b.maxSize,opacity:b.opacity||1},c);case "polyline":a=b.noDataColor;var f=b.width,p=b.noDataWidth,q=b.minWidth,x=b.maxWidth;return{color:new d(b.color),noDataColor:new d(a),width:c?e.toWorldScale(f,c):f,noDataWidth:c?e.toWorldScale(p,c):p,minWidth:c?e.toWorldScale(q,c):q,maxWidth:c?e.toWorldScale(x,
c):x,opacity:1};case "polygon":return f=b.marker,delete f.opacity,a=b.background,b=b.opacity||1,c=w(f,c),delete c.opacity,a={color:new d(a.color),outline:{color:new d(a.outline.color),width:a.outline.width}},{marker:c,background:a,opacity:b}}}function w(a,b){return{color:new d(a.color),noDataColor:new d(a.noDataColor),outline:{color:new d(a.outline.color),width:a.outline.width},size:b?e.toWorldScale(a.size,b):a.size,noDataSize:b?e.toWorldScale(a.noDataSize,b):a.noDataSize,minSize:b?e.toWorldScale(a.minSize,
b):a.minSize,maxSize:b?e.toWorldScale(a.maxSize,b):a.maxSize,opacity:a.opacity}}const k=[128,128,128,1],l=[128,128,128,1],g={primary:{color:[227,139,79,1],noDataColor:k,outline:{color:[255,255,255,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"4px",maxSize:"40px",opacity:.8},secondary:[{color:[128,128,128,1],noDataColor:k,outline:{color:[255,255,255,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"4px",maxSize:"40px",opacity:.8},{color:[255,255,255,1],noDataColor:k,outline:{color:[128,
128,128,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"4px",maxSize:"40px",opacity:.8}]},h={primary:{color:[227,139,79,1],noDataColor:l,outline:{color:[92,92,92,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"4px",maxSize:"40px",opacity:.8},secondary:[{color:[178,178,178,1],noDataColor:l,outline:{color:[92,92,92,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"4px",maxSize:"40px",opacity:.8},{color:[26,26,26,1],noDataColor:l,outline:{color:[128,128,128,.25],width:"1px"},noDataSize:"4px",
size:"12px",minSize:"4px",maxSize:"40px",opacity:.8}]};var m=[0,0,0,0];const u={color:m,outline:{color:[166,166,166,.25],width:"1px"}};m={color:m,outline:{color:[153,153,153,.25],width:"1px"}};const y=r.createThemes({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features by varying their size to show data.",schemes:{point:{light:g,dark:h},polyline:{light:{primary:{color:[226,119,40,1],noDataColor:k,noDataWidth:"1px",width:"1px",minWidth:"1px",
maxWidth:"18px"},secondary:[{color:[77,77,77,1],noDataColor:k,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},{color:[153,153,153,1],noDataColor:k,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"}]},dark:{primary:{color:[226,119,40,1],noDataColor:l,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},secondary:[{color:[255,255,255,1],noDataColor:l,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},{color:[153,153,153,1],noDataColor:l,noDataWidth:"1px",
width:"1px",minWidth:"1px",maxWidth:"18px"}]}},polygon:{light:{primary:{marker:g.primary,background:m,opacity:g.primary.opacity},secondary:[{marker:g.secondary[0],background:m,opacity:g.secondary[0].opacity},{marker:g.secondary[1],background:m,opacity:g.secondary[1].opacity}]},dark:{primary:{marker:h.primary,background:u,opacity:h.primary.opacity},secondary:[{marker:h.secondary[0],background:u,opacity:h.secondary[0].opacity},{marker:h.secondary[1],background:u,opacity:h.secondary[1].opacity}]}}}}}});
n.cloneScheme=t;n.getSchemes=function(a){if("mesh"===a.geometryType)return null;const b=r.getRawSchemes({basemap:a.basemap,geometryType:a.geometryType,basemapTheme:a.basemapTheme,theme:y.get("default")});if(b){var {schemesInfo:c,basemapId:f,basemapTheme:p}=b;return{primaryScheme:v(a,c.primary),secondarySchemes:c.secondary.map(q=>v(a,q)).filter(Boolean),basemapId:f,basemapTheme:p}}};n.getThemes=function(a){return r.getThemesforBasemap(y,a)};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});