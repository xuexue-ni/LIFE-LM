// bg-gl.js — WebGL 背景：漣漪＋八色記憶球（取代 js.js 2D canvas）
(function () {
  const cv = document.createElement('canvas');
  cv.id = 'bg-gl';
  cv.setAttribute('aria-hidden', 'true');
  cv.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;';
  document.body.prepend(cv);

  const gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) { cv.remove(); return; }

  const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  // 八色順序同 story-card/data.js EMOTION_COLORS；黑球以青色外框呈現
  const FS = `precision mediump float;
uniform vec2 R;uniform float T;uniform vec2 M;uniform float S;
uniform vec3 C[8];
float h(float n){return fract(sin(n)*43758.5453);}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*R)/R.y;
  vec3 col=vec3(.0196,.0196,.0314);
  vec2 m=(M-.5*R)/R.y;
  float d=length(uv-m*.35);
  float rip=sin(d*42.-T*1.1)*.5+.5;
  rip=pow(rip,18.)*smoothstep(1.4,.1,d);
  col+=vec3(0.,.9,1.)*rip*.07;
  for(int i=0;i<8;i++){
    float f=float(i);
    vec2 c=vec2(sin(T*.05*(.6+h(f))+f*2.1)*.75*R.x/R.y,
                cos(T*.04*(.6+h(f+9.))+f*1.7)*.42);
    c.y+=sin(S*.0006+f)*.08;
    float r=.035+.025*h(f+5.);
    float q=length(uv-c);
    float core=smoothstep(r,r*.2,q);
    float glow=exp(-q*q/(r*r*9.))*.22;
    if(i==7){
      float rim=smoothstep(.006,0.,abs(q-r*.8));
      col=mix(col,vec3(.03,.035,.05),core*.9)+vec3(0.,.9,1.)*(rim*.5+glow*.25);
    }else{
      col+=C[i]*(core*.55+glow);
    }
  }
  col+=(h(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))-.5)*.012;
  gl_FragColor=vec4(col,1.);
}`;

  function sh(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn('[bg-gl]', gl.getShaderInfoLog(s)); return null; }
    return s;
  }
  const vs = sh(gl.VERTEX_SHADER, VS), fs = sh(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) { cv.remove(); return; }
  const pg = gl.createProgram();
  gl.attachShader(pg, vs); gl.attachShader(pg, fs); gl.linkProgram(pg); gl.useProgram(pg);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pg, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const U = n => gl.getUniformLocation(pg, n);
  const uR = U('R'), uT = U('T'), uM = U('M'), uS = U('S');
  const HEX = ['#F2C94C', '#5B8DEF', '#E5484D', '#9B7BE0', '#5FBF8F', '#F29BB8', '#EEE9DE', '#161926'];
  gl.uniform3fv(U('C'), HEX.flatMap(x => [1, 3, 5].map(i => parseInt(x.substr(i, 2), 16) / 255)));

  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  function resize() {
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    gl.viewport(0, 0, cv.width, cv.height);
    gl.uniform2f(uR, cv.width, cv.height);
    mouse.x = mouse.tx = cv.width / 2; mouse.y = mouse.ty = cv.height / 2;
  }
  addEventListener('resize', resize);
  addEventListener('mousemove', e => { mouse.tx = e.clientX * dpr; mouse.ty = (innerHeight - e.clientY) * dpr; });
  resize();

  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let raf = 0;
  const t0 = performance.now();
  function frame(now) {
    mouse.x += (mouse.tx - mouse.x) * .05; mouse.y += (mouse.ty - mouse.y) * .05;
    gl.uniform1f(uT, still ? 20 : (now - t0) / 1000);
    gl.uniform2f(uM, mouse.x, mouse.y);
    gl.uniform1f(uS, scrollY);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!still) raf = requestAnimationFrame(frame);
  }
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(raf);
    if (!document.hidden) raf = requestAnimationFrame(frame);
  });
  raf = requestAnimationFrame(frame);
})();
