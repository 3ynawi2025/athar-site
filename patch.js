const fs=require('fs');
const h=fs.readFileSync('C:\\athar-site\\index.html','utf8');

let out = h;

// 1. Add store badge CSS
out = out.replace(
  '.get{scroll-margin-block-start:5rem;',
  `/* ---------- أزرار المتجر ---------- */
.store-btns{display:flex;flex-wrap:wrap;gap:.85rem;justify-content:center;align-items:stretch}
.store-btn{display:flex;align-items:center;gap:.65rem;padding:.65rem 1.1rem;border-radius:10px;text-decoration:none;transition:.22s;font-family:var(--f-cond),var(--f-body);font-weight:600;font-size:.82rem;line-height:1.25;min-width:172px}
.store-btn:hover{transform:translateY(-3px)}
.store-btn--apple{background:#000;color:#FFF;border:1px solid rgba(255,255,255,.15)}
.store-btn--apple:hover{background:#1a1a1a;box-shadow:0 8px 24px rgba(0,0,0,.5)}
.store-btn--google{background:#FFF;color:#1a1a1a;border:1px solid rgba(0,0,0,.12)}
.store-btn--google:hover{background:#F5F5F5;box-shadow:0 8px 24px rgba(0,0,0,.18)}
.store-btn--apk{background:var(--ink-800);color:var(--sand-50);border:1px solid var(--line)}
.store-btn--apk:hover{background:var(--ink-700);border-color:var(--gnss);box-shadow:0 8px 24px rgba(63,207,142,.15)}
.store-btn svg{flex:0 0 auto}
.store-btn__label{font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;opacity:.75;line-height:1.1}
.store-btn__name{font-size:1.05rem;line-height:1.15;letter-spacing:-.01em}

.get{scroll-margin-block-start:5rem;`
);

// 2. Hero buttons
const IOS = 'https://testflight.apple.com/join/Qg8URQx3';
const ANDROID = 'https://expo.dev/accounts/3ynawi/projects/atharios/builds/812fe5a0-d2fe-45ce-aaed-6fef5f8e1c4d';

const heroBtns = `<div class="hero__actions">
      <a class="btn btn--go" href="${IOS}"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> <span data-ar="آب ستور" data-en="App Store">App Store</span></a>
      <a class="btn btn--ghost" href="${ANDROID}"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.2 2.6 14.5 12 4.2 21.4c-.4-.3-.7-.8-.7-1.4V4c0-.6.3-1.1.7-1.4zm11.9 6.8L6.4 3.7l8.1 7.4 1.6-1.7zm2.8 1.6c.7.4 1.1.9 1.1 1.5s-.4 1.1-1.1 1.5l-1.9 1.1-2-2.6 2-2.6 1.9 1.1zM6.4 20.3l9.7-5.7-1.6-1.7-8.1 7.4z"/></svg> <span data-ar="قوقل بلاي" data-en="Google Play">Google Play</span></a>
    </div>`;

out = out.replace(/<div class="hero__actions">[\s\S]*?<\/div>/, heroBtns);

// 3. Get section buttons
const getBtns = `<div class="get__actions">
      <a class="btn btn--go" href="${IOS}"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> <span data-ar="آب ستور" data-en="App Store">App Store</span></a>
      <a class="btn btn--ghost" href="${ANDROID}"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.2 2.6 14.5 12 4.2 21.4c-.4-.3-.7-.8-.7-1.4V4c0-.6.3-1.1.7-1.4zm11.9 6.8L6.4 3.7l8.1 7.4 1.6-1.7zm2.8 1.6c.7.4 1.1.9 1.1 1.5s-.4 1.1-1.1 1.5l-1.9 1.1-2-2.6 2-2.6 1.9 1.1zM6.4 20.3l9.7-5.7-1.6-1.7-8.1 7.4z"/></svg> <span data-ar="قوقل بلاي" data-en="Google Play">Google Play</span></a>
      <a class="btn btn--ghost" href="${ANDROID}" data-ar="تحميل APK مباشر" data-en="Direct APK">APK مباشر</a>
    </div>`;

out = out.replace(/<div class="get__actions">[\s\S]*?<\/div>/, getBtns);

fs.writeFileSync('C:\\athar-site\\index.html', out);
console.log('ALL DONE');
