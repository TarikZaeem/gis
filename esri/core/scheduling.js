// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./maybe ./nextTick ./PerformanceSampler ./PooledArray ./promiseUtils ./time".split(" "),function(c,I,w,x,y,m,e){function z(a){a=new J(a);r.push(a);h.willDispatch||(h.willDispatch=!0,w.nextTick(A));return a}function B(a){a=new K(a);f.push(a);null==n&&(t=performance.now(),n=requestAnimationFrame(C));return new D(a)}function C(){const a=performance.now();n=null;n=0<f.length?requestAnimationFrame(C):null;h.executeFrameTasks(a)}function E(){f.forAll(a=>{a.removed&&p.push(a)});f.removeUnorderedMany(p.data,
p.length);p.clear()}function A(){for(;r.length;){const a=I.assumeNonNull(r.shift());a.isActive&&a.callback()}h.willDispatch=!1}let K=function(a){this.phases=a;this.paused=!1;this.ticks=-1;this.removed=!1},J=function(){function a(b){this.callback=b;this.isActive=!0}a.prototype.remove=function(){this.isActive=!1};return a}(),t=0,u=0;const k={time:e.Milliseconds(0),deltaTime:e.Milliseconds(0),elapsedFrameTime:e.Milliseconds(0),frameDuration:e.Milliseconds(0)},v="prepare preRender render postRender update finish".split(" "),
r=[],f=new y;let D=function(){function a(d){this._task=d}var b=a.prototype;b.remove=function(){this._task.removed=!0};b.pause=function(){this._task.paused=!0};b.resume=function(){this._task.paused=!1};return a}();const h={frameTasks:f,willDispatch:!1,clearFrameTasks:function(a=!1){f.forAll(b=>{b.removed=!0});a&&E()},dispatch:A,executeFrameTasks:function(a){const b=e.Milliseconds(a-t);t=a;var d=0<u?u:1E3/60;const q=Math.max(0,b-d);k.time=a;k.frameDuration=e.Milliseconds(d-q);for(let l=0;l<v.length;l++){d=
performance.now();const F=v[l];f.forAll(g=>{g.paused||g.removed||(0===l&&g.ticks++,g.phases[F]&&(k.elapsedFrameTime=e.Milliseconds(performance.now()-a),k.deltaTime=0===g.ticks?e.Milliseconds(0):b,g.phases[F]?.call(g,k)))});G[l].record(performance.now()-d)}E();H.record(performance.now()-a)}};let n=null;const p=new y,G=v.map(a=>new x(a)),H=new x("total");c.FrameTaskHandle=D;c.addFrameTask=B;c.debug=h;c.performanceInfo=G;c.performanceTotal=H;c.schedule=z;c.setFrameDuration=function(a){u=Math.max(0,a)};
c.waitAnimationFrame=function(){const a=m.createResolver(),b=B({postRender:()=>{b.remove();z(a)}});return a.promise};c.waitTicks=function(a=1,b){const d=m.createResolver(),q=()=>{m.isAborted(b)?d.reject(m.createAbortError()):0===a?d():(--a,w.nextTick(()=>q()))};q();return d.promise};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});