import puppeteer from "puppeteer";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7dd0e4"/>
      <stop offset="1" stop-color="#0b6b82"/>
    </linearGradient>
    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d69bb7"/>
      <stop offset="1" stop-color="#7a3b5d"/>
    </linearGradient>
    <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a8c4e8"/>
      <stop offset="1" stop-color="#3b5e8a"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <g filter="url(#shadow)">
    <!-- bottom book (widest, slight lean left) -->
    <g transform="rotate(-2 64 102)">
      <rect x="18" y="92" width="92" height="20" rx="3" fill="url(#g1)"/>
      <rect x="24" y="98" width="50" height="2" fill="#fff" opacity="0.45"/>
      <rect x="24" y="103" width="36" height="2" fill="#fff" opacity="0.30"/>
    </g>

    <!-- middle book (straight) -->
    <g>
      <rect x="22" y="68" width="84" height="20" rx="3" fill="url(#g2)"/>
      <rect x="28" y="74" width="48" height="2" fill="#fff" opacity="0.45"/>
      <rect x="28" y="79" width="32" height="2" fill="#fff" opacity="0.30"/>
    </g>

    <!-- top book (narrower, slight lean right) -->
    <g transform="rotate(3 64 54)">
      <rect x="30" y="44" width="68" height="20" rx="3" fill="url(#g3)"/>
      <rect x="36" y="50" width="40" height="2" fill="#fff" opacity="0.45"/>
      <rect x="36" y="55" width="26" height="2" fill="#fff" opacity="0.30"/>
    </g>
  </g>
</svg>
`;

const html = `<!doctype html><html><head><style>
  html, body { margin: 0; padding: 0; background: transparent; }
  body { display: flex; align-items: center; justify-content: center; width: 256px; height: 256px; }
  svg { width: 256px; height: 256px; }
</style></head><body>${svg}</body></html>`;

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 256, height: 256, deviceScaleFactor: 1 });
await page.setContent(html);
await page.screenshot({
  path: "./public/images/library.webp",
  type: "webp",
  omitBackground: true,
  quality: 95,
  clip: { x: 0, y: 0, width: 256, height: 256 },
});

await browser.close();
console.log("✅ Icon generated: public/images/library.webp");
