// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(r){function p(a,g){const f=(a&65535)+(g&65535);return(a>>16)+(g>>16)+(f>>16)<<16|f&65535}function h(a,g,f,b,d,e){a=p(p(g,a),p(b,e));return p(a<<d|a>>>32-d,f)}function k(a,g,f,b,d,e,c){return h(g&f|~g&b,a,g,d,e,c)}function l(a,g,f,b,d,e,c){return h(g&b|f&~b,a,g,d,e,c)}function m(a,g,f,b,d,e,c){return h(f^(g|~b),a,g,d,e,c)}const q={Base64:0,Hex:1,String:2,Raw:3};r.createMD5Hash=function(a,g=q.Hex){g=g||q.Base64;var f=[];for(let c=0,n=8*a.length;c<n;c+=8)f[c>>5]|=(a.charCodeAt(c/
8)&255)<<c%32;a=8*a.length;f[a>>5]|=128<<a%32;f[(a+64>>>9<<4)+14]=a;a=1732584193;var b=-271733879;let d=-1732584194,e=271733878;for(let c=0;c<f.length;c+=16){const n=a,t=b,u=d,v=e;a=k(a,b,d,e,f[c+0],7,-680876936);e=k(e,a,b,d,f[c+1],12,-389564586);d=k(d,e,a,b,f[c+2],17,606105819);b=k(b,d,e,a,f[c+3],22,-1044525330);a=k(a,b,d,e,f[c+4],7,-176418897);e=k(e,a,b,d,f[c+5],12,1200080426);d=k(d,e,a,b,f[c+6],17,-1473231341);b=k(b,d,e,a,f[c+7],22,-45705983);a=k(a,b,d,e,f[c+8],7,1770035416);e=k(e,a,b,d,f[c+9],
12,-1958414417);d=k(d,e,a,b,f[c+10],17,-42063);b=k(b,d,e,a,f[c+11],22,-1990404162);a=k(a,b,d,e,f[c+12],7,1804603682);e=k(e,a,b,d,f[c+13],12,-40341101);d=k(d,e,a,b,f[c+14],17,-1502002290);b=k(b,d,e,a,f[c+15],22,1236535329);a=l(a,b,d,e,f[c+1],5,-165796510);e=l(e,a,b,d,f[c+6],9,-1069501632);d=l(d,e,a,b,f[c+11],14,643717713);b=l(b,d,e,a,f[c+0],20,-373897302);a=l(a,b,d,e,f[c+5],5,-701558691);e=l(e,a,b,d,f[c+10],9,38016083);d=l(d,e,a,b,f[c+15],14,-660478335);b=l(b,d,e,a,f[c+4],20,-405537848);a=l(a,b,d,
e,f[c+9],5,568446438);e=l(e,a,b,d,f[c+14],9,-1019803690);d=l(d,e,a,b,f[c+3],14,-187363961);b=l(b,d,e,a,f[c+8],20,1163531501);a=l(a,b,d,e,f[c+13],5,-1444681467);e=l(e,a,b,d,f[c+2],9,-51403784);d=l(d,e,a,b,f[c+7],14,1735328473);b=l(b,d,e,a,f[c+12],20,-1926607734);a=h(b^d^e,a,b,f[c+5],4,-378558);e=h(a^b^d,e,a,f[c+8],11,-2022574463);d=h(e^a^b,d,e,f[c+11],16,1839030562);b=h(d^e^a,b,d,f[c+14],23,-35309556);a=h(b^d^e,a,b,f[c+1],4,-1530992060);e=h(a^b^d,e,a,f[c+4],11,1272893353);d=h(e^a^b,d,e,f[c+7],16,-155497632);
b=h(d^e^a,b,d,f[c+10],23,-1094730640);a=h(b^d^e,a,b,f[c+13],4,681279174);e=h(a^b^d,e,a,f[c+0],11,-358537222);d=h(e^a^b,d,e,f[c+3],16,-722521979);b=h(d^e^a,b,d,f[c+6],23,76029189);a=h(b^d^e,a,b,f[c+9],4,-640364487);e=h(a^b^d,e,a,f[c+12],11,-421815835);d=h(e^a^b,d,e,f[c+15],16,530742520);b=h(d^e^a,b,d,f[c+2],23,-995338651);a=m(a,b,d,e,f[c+0],6,-198630844);e=m(e,a,b,d,f[c+7],10,1126891415);d=m(d,e,a,b,f[c+14],15,-1416354905);b=m(b,d,e,a,f[c+5],21,-57434055);a=m(a,b,d,e,f[c+12],6,1700485571);e=m(e,a,
b,d,f[c+3],10,-1894986606);d=m(d,e,a,b,f[c+10],15,-1051523);b=m(b,d,e,a,f[c+1],21,-2054922799);a=m(a,b,d,e,f[c+8],6,1873313359);e=m(e,a,b,d,f[c+15],10,-30611744);d=m(d,e,a,b,f[c+6],15,-1560198380);b=m(b,d,e,a,f[c+13],21,1309151649);a=m(a,b,d,e,f[c+4],6,-145523070);e=m(e,a,b,d,f[c+11],10,-1120210379);d=m(d,e,a,b,f[c+2],15,718787259);b=m(b,d,e,a,f[c+9],21,-343485551);a=p(a,n);b=p(b,t);d=p(d,u);e=p(e,v)}f=[a,b,d,e];switch(g){case q.Raw:return f;case q.Hex:g=[];for(let c=0,n=4*f.length;c<n;c++)g.push("0123456789abcdef".charAt(f[c>>
2]>>c%4*8+4&15)+"0123456789abcdef".charAt(f[c>>2]>>c%4*8&15));return g.join("");case q.String:g=[];for(let c=0,n=32*f.length;c<n;c+=8)g.push(String.fromCharCode(f[c>>5]>>>c%32&255));return g.join("");case q.Base64:g=[];for(let c=0,n=4*f.length;c<n;c+=3)for(a=(f[c>>2]>>c%4*8&255)<<16|(f[c+1>>2]>>(c+1)%4*8&255)<<8|f[c+2>>2]>>(c+2)%4*8&255,b=0;4>b;b++)8*c+6*b>32*f.length?g.push("\x3d"):g.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>6*(3-b)&63));return g.join("")}};
r.outputTypes=q;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});