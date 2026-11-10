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
  float ar=R.x/R.y;
  float dim=mix(1.,.4,smoothstep(0.,1400.,S));
  // 聲波紋：15 條獨立環，各自速度／瓣數／偏心，越外越起伏、間距越大
  vec2 p=uv-m*.12;
  for(int k=0;k<15;k++){
    float fk=float(k),s=h(fk)*150.;
    float life=fract(T*(.008+.014*h(fk+3.))+h(fk+1.));
    float rr=pow(life,1.5)*1.45;
    vec2 q=p-vec2(sin(s),cos(s))*.05*life;
    float d=length(q),a=atan(q.y,q.x);
    float lobes=5.+floor(h(fk+2.)*4.);
    float w=(sin(a*lobes+s+T*.4)*.6+sin(a*2.+s*1.7-T*.25)*.4)*(.006+.05*rr);
    float e=abs(d+w-rr);
    // 線寬比照舊版：約 4 成 0.6px、6 成 0.1px 細線＋5px 柔光
    float px=1./R.y,thick=h(fk+4.)>.6?1.:.35;
    float ln=smoothstep(px*(.6+thick),0.,e)*thick+exp(-e*e/(px*px*25.))*.18;
    float ci=mod(fk,4.);
    vec3 nc=ci<1.?vec3(0.,.9,1.):ci<2.?vec3(0.,.67,1.):ci<3.?vec3(.44,0.,1.):vec3(.2,1.,.67);
    col+=nc*ln*sin(life*3.1416)*(.05+.13*h(fk+7.))*dim;
  }
  // 中央閱讀區遮罩：光球靠兩側
  float lane=smoothstep(.18,.55,abs(uv.x)/max(ar*.5,.5));
  // 靜態小光點：每 28px 格隨機放一顆
  vec2 g=gl_FragCoord.xy/(28.*R.y/900.),gi=floor(g);
  float sr=h(dot(gi,vec2(127.1,311.7)));
  if(sr>.9){
    vec2 sp=gi+.2+.6*vec2(h(sr*91.),h(sr*57.));
    float sd=length(g-sp);
    col+=vec3(.75,.85,1.)*smoothstep(.12,0.,sd)*(.25+.45*h(sr*13.))*dim;
  }
  for(int i=0;i<7;i++){
    float f=float(i);
    float side=mod(f,2.)<1.?-1.:1.;
    vec2 c=vec2(side*(.62+.22*sin(T*.05*(.6+h(f))+f*2.1))*ar*.5,
                cos(T*.04*(.6+h(f+9.))+f*1.7)*.42+sin(S*.0006+f)*.08);
    float r=.03+.02*h(f+5.);
    float q=length(uv-c);
    float core=smoothstep(r*1.4,0.,q);
    float glow=exp(-q*q/(r*r*12.))*.12;
    float k=dim*(.35+.65*lane);
    col+=C[i]*(core*.28+glow)*k;
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
  const HEX = ['#F2C94C', '#5B8DEF', '#E5484D', '#9B7BE0', '#5FBF8F', '#F29BB8', '#EEE9DE', '#161926']; // 第 8 色（黑）目前不畫
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
