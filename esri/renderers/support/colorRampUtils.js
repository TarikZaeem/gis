// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../Color","../../core/colorUtils","../../core/jsonMap"],function(n,D,t,M){function z(a,b){if(!a||!b||a.length!==b.length)return!1;for(let g=0;g<a.length;g++)if(a[g]>b[g]+2||a[g]<b[g]-2)return!1;return!0}function E(a,b){if(a){b=b?b:B;var g=null;"algorithmic"===a.type?b.some(h=>{if(z(a.fromColor.toRgb(),h.fromColor)&&z(a.toColor.toRgb(),h.toColor))return g=h.id,!0}):"multipart"===a.type&&b.some(h=>{const c=a.colorRamps,p=h.colorRamps;if(c&&p&&c.length===p.length&&!p.some((u,v)=>
{if(!z(c[v].fromColor.toRgb(),(new D(u.fromColor)).toRgb())||!z(c[v].toColor.toRgb(),(new D(u.toColor)).toRgb()))return!0})){if(g)return!0;g=h.id}});return g}}function F(a){return(a=E(a))?C[a]:null}function G(a){a=a||{};const b=a.numColors||256;return{...a,numColors:b,distanceOffset:a.distanceOffset||0,interpolateAlpha:!!a.interpolateAlpha,distanceInterval:a.distanceInterval||1/(b-1),isCustomInterval:null!=a.isCustomInterval?a.isCustomInterval:null!==a.distanceInterval&&a.distanceInterval!==1/(b-
1),weights:a.weights}}function H(a,b){let {fromColor:g,toColor:h}=a;3===g.length&&(g=g.concat([255]));3===h.length&&(h=h.concat([255]));a=a.algorithm||"esriCIELabAlgorithm";var c=G(b);const {numColors:p,distanceOffset:u,isCustomInterval:v,interpolateAlpha:A}=c;if(1===p&&0===u)return[g];if(2===p&&0===u&&!v)return[g,h];var d={r:g[0],g:g[1],b:g[2]};b={r:h[0],g:h[1],b:h[2]};if("esriCIELabAlgorithm"===a){a=t.toLAB(d);b=t.toLAB(b);const {numColors:w,distanceOffset:r,distanceInterval:k,isCustomInterval:y}=
c;let {l,a:m,b:q}=a;a=(b.l-l)*k;d=(b.a-m)*k;c=(b.b-q)*k;var e=[];if(r){var f=r/k;l+=f*a;m+=f*d;q+=f*c}for(f=0;f<w-1;f++)e.push({l,a:m,b:q}),l+=a,m+=d,q+=c;e.push(y?{l,a:m,b:q}:b);b=e}else if("esriHSVAlgorithm"===a){a=t.toHSV(d);b=t.toHSV(b);const {numColors:w,distanceOffset:r,distanceInterval:k,isCustomInterval:y}=c;e=0===a.s;f=0===b.s;d=a.h;c=b.h;e&&!f?d=c:f&&!e&&(b={...b,h:d},c=d);e=Math.abs(c-d);180>e?c=(c-d)*k:(e=360-e,c=d>c?e*k:-e*k);e=(b.s-a.s)*k;f=(b.v-a.v)*k;let {s:l,v:m}=a;a=d;r&&(d=r/k,
a=(a+d*c+360)%360,l+=d*e,m+=d*f);d=[];for(var x=0;x<w-1;x++)d.push({h:a,s:l,v:m}),a=(a+c+360)%360,l+=e,m+=f;d.push(y?{h:a,s:l,v:m}:b);b=d}else{d=t.toLCH(d);b=t.toLCH(b);const {numColors:w,distanceOffset:r,distanceInterval:k,isCustomInterval:y}=c;c=d.h;e=b.h;a=2*Math.PI;c<=e?(f=e-c,c=e-c-a,c=Math.abs(c)<Math.abs(f)?c:f):(f=e+a-c,c=e-c,c=Math.abs(c)<Math.abs(f)?c:f);c*=k;e=(b.l-d.l)*k;f=(b.c-d.c)*k;let {l,c:m,h:q}=d;r&&(d=r/k,l+=d*e,m+=d*f,q=(q+d*c+a)%a);d=[];for(x=0;x<w-1;x++)d.push({l,c:m,h:q}),l+=
e,m+=f,q=(q+c+a)%a;d.push(y?{l,c:m,h:q}:b);b=d}a=[];d=g[3]??255;c=((h[3]??255)-d)/(p-1);for(e=0;e<p;e++){const {r:w,g:r,b:k}=t.toRGB(b[e]);a.push([w,r,k,A?Math.round(d+c*e):255])}return a}function N(a,b){const {numColors:g,interpolateAlpha:h}=G(b);b=b?.weights;({colorRamps:a}=a);if(b){const e=b.reduce((f,x)=>f+x);b=b.map(f=>f/e)}else{b=[];for(var c=0;c<a.length;c++)b[c]=1/a.length}c=[];let p=0,u=0;const v=1/(g-1);let A=!1;for(let e=0;e<a.length;e++){var d=A?0:p*v-u;let f=e===a.length-1?g-1-p:(b[e]-
d)/v;A=Math.ceil(f)===f;f=Math.ceil(f);0!==f&&(d/=b[e],d=H(a[e],{numColors:f,interpolateAlpha:h,distanceOffset:d,distanceInterval:v/b[e]}),p+=d.length,c.push(...d),u+=b[e])}b=[...a[a.length-1].toColor];3===b.length&&b.push(255);c.push(b);return c}function I(a,b){a="toJSON"in a?a.toJSON():a;return"multipart"===a.type?N(a,b):H(a,b)}function J(a){if(a)return{Algorithm:a.toJSON()?.Algorithm||"esriHSVAlgorithm",type:"AlgorithmicColorRamp",FromColor:K(a.fromColor),ToColor:K(a.toColor)}}function K(a){a=
t.toHSV(a);return{type:"HsvColor",Hue:a.h,Saturation:a.s,Value:a.v,AlphaValue:255}}const B=[{id:"aspect_predefined",type:"multipart",colorRamps:[{fromColor:[190,190,190],toColor:[255,45,8]},{fromColor:[255,45,8],toColor:[255,181,61]},{fromColor:[255,181,61],toColor:[255,254,52]},{fromColor:[255,254,52],toColor:[0,251,50]},{fromColor:[0,251,50],toColor:[255,254,52]},{fromColor:[0,253,255],toColor:[0,181,255]},{fromColor:[0,181,255],toColor:[26,35,253]},{fromColor:[26,35,253],toColor:[255,57,251]},
{fromColor:[255,57,251],toColor:[255,45,8]}]},{id:"blackToWhite_predefined",fromColor:[0,0,0],toColor:[255,255,255]},{id:"blueBright_predefined",fromColor:[204,204,255],toColor:[0,0,224]},{id:"blueLightToDark_predefined",fromColor:[211,229,232],toColor:[46,100,140]},{id:"blueGreenBright_predefined",fromColor:[203,245,234],toColor:[48,207,146]},{id:"blueGreenLightToDark_predefined",fromColor:[216,242,237],toColor:[21,79,74]},{id:"brownLightToDark_predefined",fromColor:[240,236,170],toColor:[102,72,
48]},{id:"brownToBlueGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[156,85,31],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[33,130,145]}]},{id:"brownToBlueGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[110,70,45],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[48,100,102]}]},{id:"coefficientBias_predefined",fromColor:[214,214,255],toColor:[0,57,148]},{id:"coldToHotDiverging_predefined",type:"multipart",colorRamps:[{fromColor:[69,
117,181],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[214,47,39]}]},{id:"conditionNumber_predefined",type:"multipart",colorRamps:[{fromColor:[0,97,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,34,0]}]},{id:"cyanToPurple_predefined",type:"multipart",colorRamps:[{fromColor:[0,245,245],toColor:[0,0,245]},{fromColor:[0,0,245],toColor:[245,0,245]}]},{id:"cyanLightToBlueDark_predefined",type:"multipart",colorRamps:[{fromColor:[182,237,240],toColor:[31,131,224]},{fromColor:[31,
131,224],toColor:[9,9,145]}]},{id:"distance_predefined",fromColor:[255,200,0],toColor:[0,0,255]},{id:"elevation1_predefined",type:"multipart",colorRamps:[{fromColor:[175,240,233],toColor:[255,255,179]},{fromColor:[255,255,179],toColor:[0,128,64]},{fromColor:[0,128,64],toColor:[252,186,3]},{fromColor:[252,186,3],toColor:[128,0,0]},{fromColor:[120,0,0],toColor:[105,48,13]},{fromColor:[105,48,13],toColor:[171,171,171]},{fromColor:[171,171,171],toColor:[255,252,255]}]},{id:"elevation2_predefined",type:"multipart",
colorRamps:[{fromColor:[118,219,211],toColor:[255,255,199]},{fromColor:[255,255,199],toColor:[255,255,128]},{fromColor:[255,255,128],toColor:[217,194,121]},{fromColor:[217,194,121],toColor:[135,96,38]},{fromColor:[135,96,38],toColor:[150,150,181]},{fromColor:[150,150,181],toColor:[181,150,181]},{fromColor:[181,150,181],toColor:[255,252,255]}]},{id:"errors_predefined",fromColor:[255,235,214],toColor:[196,10,10]},{id:"grayLightToDark_predefined",fromColor:[219,219,219],toColor:[69,69,69]},{id:"greenBright_predefined",
fromColor:[204,255,204],toColor:[14,204,14]},{id:"greenLightToDark_predefined",fromColor:[220,245,233],toColor:[34,102,51]},{id:"greenToBlue_predefined",type:"multipart",colorRamps:[{fromColor:[32,204,16],toColor:[0,242,242]},{fromColor:[0,242,242],toColor:[2,33,227]}]},{id:"orangeBright_predefined",fromColor:[255,235,204],toColor:[240,118,5]},{id:"orangeLightToDark_predefined",fromColor:[250,233,212],toColor:[171,65,36]},{id:"partialSpectrum_predefined",type:"multipart",colorRamps:[{fromColor:[242,
241,162],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]},{fromColor:[252,3,69],toColor:[176,7,237]},{fromColor:[176,7,237],toColor:[2,29,173]}]},{id:"partialSpectrum1Diverging_predefined",type:"multipart",colorRamps:[{fromColor:[135,38,38],toColor:[240,149,12]},{fromColor:[240,149,12],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[74,80,181]},{fromColor:[74,80,181],toColor:[39,32,122]}]},{id:"partialSpectrum2Diverging_predefined",type:"multipart",colorRamps:[{fromColor:[115,
77,42],toColor:[201,137,52]},{fromColor:[201,137,52],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[91,63,176]},{fromColor:[91,63,176],toColor:[81,13,97]}]},{id:"pinkToYellowGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[158,30,113],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[99,110,45]}]},{id:"pinkToYellowGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[97,47,73],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[22,59,
15]}]},{id:"precipitation_predefined",type:"multipart",colorRamps:[{fromColor:[194,82,60],toColor:[237,161,19]},{fromColor:[237,161,19],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,219,0]},{fromColor:[0,219,0],toColor:[32,153,143]},{fromColor:[32,153,143],toColor:[11,44,122]}]},{id:"prediction_predefined",type:"multipart",colorRamps:[{fromColor:[40,146,199],toColor:[250,250,100]},{fromColor:[250,250,100],toColor:[232,16,20]}]},{id:"purpleBright_predefined",fromColor:[255,204,255],toColor:[199,
0,199]},{id:"purpleToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[77,32,150],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[20,122,11]}]},{id:"purpleToGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[67,14,89],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[24,79,15]}]},{id:"purpleBlueBright_predefined",fromColor:[223,184,230],toColor:[112,12,242]},{id:"purpleBlueLightToDark_predefined",fromColor:[229,213,242],toColor:[93,44,112]},
{id:"purpleRedBright_predefined",fromColor:[255,204,225],toColor:[199,0,99]},{id:"purpleRedLightToDark_predefined",fromColor:[250,215,246],toColor:[143,17,57]},{id:"redBright_predefined",fromColor:[255,204,204],toColor:[219,0,0]},{id:"redLightToDark_predefined",fromColor:[255,224,224],toColor:[143,10,10]},{id:"redToBlueDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[196,69,57],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[48,95,207]}]},{id:"redToBlueDivergingDark_predefined",
type:"multipart",colorRamps:[{fromColor:[107,13,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[13,53,97]}]},{id:"redToGreen_predefined",type:"multipart",colorRamps:[{fromColor:[245,0,0],toColor:[245,245,0]},{fromColor:[245,245,0],toColor:[0,245,0]}]},{id:"redToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[186,20,20],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[54,145,33]}]},{id:"redToGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[97,
21,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[16,69,16]}]},{id:"slope_predefined",type:"multipart",colorRamps:[{fromColor:[56,168,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]},{id:"spectrumFullBright_predefined",type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}]},{id:"spectrumFullDark_predefined",type:"multipart",colorRamps:[{fromColor:[153,0,0],toColor:[153,
153,0]},{fromColor:[153,153,0],toColor:[0,153,153]},{fromColor:[0,153,153],toColor:[0,0,153]}]},{id:"spectrumFullLight_predefined",type:"multipart",colorRamps:[{fromColor:[255,153,153],toColor:[255,255,153]},{fromColor:[255,255,153],toColor:[153,255,255]},{fromColor:[153,255,255],toColor:[153,153,255]}]},{id:"surface_predefined",type:"multipart",colorRamps:[{fromColor:[112,153,89],toColor:[242,238,162]},{fromColor:[242,238,162],toColor:[242,206,133]},{fromColor:[242,206,133],toColor:[194,140,124]},
{fromColor:[194,140,124],toColor:[255,242,255]}]},{id:"temperature_predefined",type:"multipart",colorRamps:[{fromColor:[255,252,255],toColor:[255,0,255]},{fromColor:[255,0,255],toColor:[0,0,255]},{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,255,0]},{fromColor:[0,255,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,128,0]},{fromColor:[255,128,0],toColor:[128,0,0]}]},{id:"whiteToBlack_predefined",fromColor:[255,255,255],toColor:[0,0,0]},{id:"yellowToDarkRed_predefined",
type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[242,167,46]},{fromColor:[242,167,46],toColor:[107,0,0]}]},{id:"yellowToGreenToDarkBlue_predefined",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[56,224,9]},{fromColor:[56,224,9],toColor:[26,147,171]},{fromColor:[26,147,171],toColor:[12,16,120]}]},{id:"yellowToRed_predefined",fromColor:[245,245,0],toColor:[255,0,0]},{id:"yellowGreenBright_predefined",fromColor:[236,252,204],toColor:[157,204,16]},{id:"yellowGreenLightToDark_predefined",
fromColor:[215,240,175],toColor:[96,107,45]}],C={aspect_predefined:"Aspect",blackToWhite_predefined:"Black to White",blueBright_predefined:"Blue Bright",blueLightToDark_predefined:"Blue Light to Dark",blueGreenBright_predefined:"Blue-Green Bright",blueGreenLightToDark_predefined:"Blue-Green Light to Dark",brownLightToDark_predefined:"Brown Light to Dark",brownToBlueGreenDivergingBright_predefined:"Brown to Blue Green Diverging, Bright",brownToBlueGreenDivergingDark_predefined:"Brown to Blue Green Diverging, Dark",
coefficientBias_predefined:"Coefficient Bias",coldToHotDiverging_predefined:"Cold to Hot Diverging",conditionNumber_predefined:"Condition Number",cyanToPurple_predefined:"Cyan to Purple",cyanLightToBlueDark_predefined:"Cyan-Light to Blue-Dark",distance_predefined:"Distance",elevation1_predefined:"Elevation #1",elevation2_predefined:"Elevation #2",errors_predefined:"Errors",grayLightToDark_predefined:"Gray Light to Dark",greenBright_predefined:"Green Bright",greenLightToDark_predefined:"Green Light to Dark",
greenToBlue_predefined:"Green to Blue",orangeBright_predefined:"Orange Bright",orangeLightToDark_predefined:"Orange Light to Dark",partialSpectrum_predefined:"Partial Spectrum",partialSpectrum1Diverging_predefined:"Partial Spectrum 1 Diverging",partialSpectrum2Diverging_predefined:"Partial Spectrum 2 Diverging",pinkToYellowGreenDivergingBright_predefined:"Pink to YellowGreen Diverging, Bright",pinkToYellowGreenDivergingDark_predefined:"Pink to YellowGreen Diverging, Dark",precipitation_predefined:"Precipitation",
prediction_predefined:"Prediction",purpleBright_predefined:"Purple Bright",purpleToGreenDivergingBright_predefined:"Purple to Green Diverging, Bright",purpleToGreenDivergingDark_predefined:"Purple to Green Diverging, Dark",purpleBlueBright_predefined:"Purple-Blue Bright",purpleBlueLightToDark_predefined:"Purple-Blue Light to Dark",purpleRedBright_predefined:"Purple-Red Bright",purpleRedLightToDark_predefined:"Purple-Red Light to Dark",redBright_predefined:"Red Bright",redLightToDark_predefined:"Red Light to Dark",
redToBlueDivergingBright_predefined:"Red to Blue Diverging, Bright",redToBlueDivergingDark_predefined:"Red to Blue Diverging, Dark",redToGreen_predefined:"Red to Green",redToGreenDivergingBright_predefined:"Red to Green Diverging, Bright",redToGreenDivergingDark_predefined:"Red to Green Diverging, Dark",slope_predefined:"Slope",spectrumFullBright_predefined:"Spectrum-Full Bright",spectrumFullDark_predefined:"Spectrum-Full Dark",spectrumFullLight_predefined:"Spectrum-Full Light",surface_predefined:"Surface",
temperature_predefined:"Temperature",whiteToBlack_predefined:"White to Black",yellowToDarkRed_predefined:"Yellow to Dark Red",yellowToGreenToDarkBlue_predefined:"Yellow to Green to Dark Blue",yellowToRed_predefined:"Yellow to Red",yellowGreenBright_predefined:"Yellow-Green Bright",yellowGreenLightToDark_predefined:"Yellow-Green Light to Dark"},L=new M.JSONMap({Aspect:"aspect","Black to White":"black-to-white","Blue Bright":"blue-bright","Blue Light to Dark":"blue-light-to-dark","Blue-Green Bright":"blue-green-bright",
"Blue-Green Light to Dark":"blue-green-light-to-dark","Brown Light to Dark":"brown-light-to-dark","Brown to Blue Green Diverging, Bright":"brown-to-blue-green-diverging-right","Brown to Blue Green Diverging, Dark":"brown-to-blue-green-diverging-dark","Coefficient Bias":"coefficient-bias","Cold to Hot Diverging":"cold-to-hot-diverging","Condition Number":"condition-number","Cyan to Purple":"cyan-to-purple","Cyan-Light to Blue-Dark":"cyan-light-to-blue-dark",Distance:"distance","Elevation #1":"elevation1",
"Elevation #2":"elevation2",Errors:"errors","Gray Light to Dark":"gray-light-to-dark","Green Bright":"green-bright","Green Light to Dark":"green-light-to-dark","Green to Blue":"green-to-blue","Orange Bright":"orange-bright","Orange Light to Dark":"orange-light-to-dark","Partial Spectrum":"partial-spectrum","Partial Spectrum 1 Diverging":"partial-spectrum-1-diverging","Partial Spectrum 2 Diverging":"partial-spectrum-2-diverging","Pink to YellowGreen Diverging, Bright":"pink-to-yellow-green-diverging-bright",
"Pink to YellowGreen Diverging, Dark":"pink-to-yellow-green-diverging-dark",Precipitation:"precipitation",Prediction:"prediction","urple Bright":"purple-bright","Purple to Green Diverging, Bright":"purple-to-green-diverging-bright","Purple to Green Diverging, Dark":"purple-to-green-diverging-dark","Purple-Blue Bright":"purple-blue-bright","Purple-Blue Light to Dark":"purple-blue-light-to-dark","Purple-Red Bright":"purple-red-bright","Purple-Red Light to Dark":"purple-red-light-to-dark","Red Bright":"red-bright",
"Red Light to Dark":"red-light-to-dark","Red to Blue Diverging, Bright":"red-to-blue-diverging-bright","Red to Blue Diverging, Dark":"red-to-blue-diverging-dark","Red to Green":"red-to-green","Red to Green Diverging, Bright":"red-to-green-diverging-bright","Red to Green Diverging, Dark":"red-to-green-diverging-dark",Slope:"slope","Spectrum-Full Bright":"spectrum-full-bright","Spectrum-Full Dark":"spectrum-full-dark","Spectrum-Full Light":"spectrum-full-light",Surface:"surface",Temperature:"temperature",
"White to Black":"white-to-black","Yellow to Dark Red":"yellow-to-dark-red","Yellow to Green to Dark Blue":"yellow-to-green-to-dark-blue","Yellow to Red":"yellow-to-red","Yellow-Green Bright":"yellow-green-bright","Yellow-Green Light to Dark":"yellow-green-light-to-dark"});n.PREDEFINED_COLOR_RAMP_NAME_MAP=C;n.PREDEFINED_JSON_COLOR_RAMPS=B;n.colorRampDict=L;n.convertColorRampToColormap=function(a,b){a=I(a,b);const g=b?.interpolateAlpha;a.forEach((h,c)=>{h.unshift(c);g||h.pop()});return a};n.convertColorRampToColors=
I;n.getColorRampId=E;n.getColorRampJSON=function(a){const b=L.toJSON(a),g=Object.entries(C).find(h=>h[1]===b)?.[0];return(a=B.find(h=>h.id===g))?a.colorRamps?{type:"multipart",colorRamps:a.colorRamps.map(h=>({type:"algorithmic",algorithm:"esriCIELabAlgorithm",fromColor:h.fromColor,toColor:h.toColor}))}:{type:"algorithmic",algorithm:"esriCIELabAlgorithm",fromColor:a.fromColor,toColor:a.toColor}:null};n.getColorRampName=F;n.getRFxArgColorRampValue=function(a){const b=F(a);if(a){if("algorithmic"===a.type)return{...J(a),
Name:b};if(a.colorRamps)return a=a.colorRamps.map(J),{type:"MultiPartColorRamp",NumColorRamps:a.length,ArrayOfColorRamp:a,Name:b}}};n.rasterColormapNames="random ndvi ndvi2 ndvi3 elevation gray hillshade".split(" ");n.rgbaConvertTo32Bit=function(a){a=a.reverse().map(b=>{b=b.toString(16);return 2>b.length?"0"+b:b});return 4294967295&Number.parseInt(a.join(""),16)};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});