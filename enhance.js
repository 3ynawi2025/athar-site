// Enhanced version — adds glass blobs + card glow + counter glow to original
const fs=require('fs');
const path='C:\\athar-site\\index.html';
const h=fs.readFileSync(path,'utf8');

let out=h;

// 1. Add glass-refraction blobs after the hero__field div
out=out.replace(
  '<div class="hero__field" aria-hidden="true">',
  '<!-- Glass-refraction animated blobs -->\n<div class="hero-blobs" aria-hidden="true"><div class="hero-blob hero-blob--a"></div><div class="hero-blob hero-blob--b"></div><div class="hero-blob hero-blob--c"></div></div>\n<div class="hero__field" aria-hidden="true">'
);

// 2. Add new CSS
out=out.replace(
  '/* ---------- حركة ---------- */',
  '/* ---------- زجاج معكوس — فقاعات ---------- */\n.hero-blobs{position:absolute;inset:0;z-index:-2;pointer-events:none;overflow:hidden}\n.hero-blob{position:absolute;border-radius:50%;filter:blur(130px);opacity:.16}\n.hero-blob--a{width:clamp(420px,45vw,620px);height:clamp(420px,45vw,620px);background:radial-gradient(circle,var(--back),#1E40AF 50%,transparent 100%);inset-inline-end:-10vw;top:5vh;animation:blobA 28s ease-in-out infinite}\n.hero-blob--b{width:clamp(380px,40vw,560px);height:clamp(380px,40vw,560px);background:radial-gradient(circle,var(--gnss),#047857 50%,transparent 100%);inset-inline-start:-8vw;bottom:10vh;animation:blobB 32s ease-in-out infinite}\n.hero-blob--c{width:clamp(280px,28vw,420px);height:clamp(280px,28vw,420px);background:radial-gradient(circle,var(--pdr),#B45309 50%,transparent 100%);inset-inline-start:30%;top:45%;animation:blobC 36s ease-in-out infinite}\n@keyframes blobA{0%,100%{transform:translate(0,0)scale(1)rotate(0deg)}33%{transform:translate(-5vw,8vh)scale(1.2)rotate(120deg)}66%{transform:translate(4vw,-6vh)scale(.85)rotate(240deg)}}\n@keyframes blobB{0%,100%{transform:translate(0,0)scale(1)rotate(0deg)}33%{transform:translate(6vw,-10vh)scale(1.25)rotate(-120deg)}66%{transform:translate(-3vw,5vh)scale(.8)rotate(-240deg)}}\n@keyframes blobC{0%,100%{transform:translate(0,0)scale(1)rotate(0deg)}50%{transform:translate(3vw,-7vh)scale(1.15)rotate(180deg)}}\n/* بطاقات — توهج يتبع الماوس */\n.wp__art{position:relative;overflow:hidden}\n.wp__art::after{content:"";position:absolute;inset:0;opacity:0;transition:opacity .4s;background:radial-gradient(circle 160px at var(--mx,50%) var(--my,50%),rgba(63,207,142,.07),transparent 70%);pointer-events:none;z-index:2}\n.wp__art:hover::after{opacity:1}\n/* وهج الأزرار */\n.btn--go:hover{box-shadow:0 0 32px rgba(63,207,142,.35)}\n.btn--ghost:hover{box-shadow:0 0 24px rgba(95,168,232,.15)}\n/* عدادادت */\n.readout__v.counted{color:var(--gnss)}\n/* ---------- حركة ---------- */'
);

// 3. Add mouse tracking JS
out=out.replace(
  '/* ---- كشف الظهور عند التمرير ---- */',
  '/* ---- توهج البطاقات — ماوس ---- */\ndocument.querySelectorAll(\'.wp__art\').forEach(function(c){c.addEventListener(\'mousemove\',function(e){var r=c.getBoundingClientRect();c.style.setProperty(\'--mx\',((e.clientX-r.left)/r.width*100).toFixed(1)+\'%\');c.style.setProperty(\'--my\',((e.clientY-r.top)/r.height*100).toFixed(1)+\'%\')});c.addEventListener(\'mouseleave\',function(){c.style.setProperty(\'--mx\',\'50%\');c.style.setProperty(\'--my\',\'50%\')})});\n/* ---- كشف الظهور عند التمرير ---- */'
);

// 4. Add counted class
out=out.replace('el.textContent = Math.round(end * eased) + suffix;','el.textContent = Math.round(end * eased) + suffix; el.classList.add(\'counted\');');

fs.writeFileSync(path,out);
console.log('ENHANCED');
