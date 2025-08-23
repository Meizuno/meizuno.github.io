import puppeteer from "puppeteer";

const url = "http://localhost:3000/pdf";
const outputPath = "./public/yurii-myronov.pdf";

const browser = await puppeteer.launch({
  headless: true,
  slowMo: 1000,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.emulateMediaFeatures([
  { name: "prefers-color-scheme", value: "light" },
]);

await page.goto(url, { waitUntil: "networkidle0" });
await page.pdf({
  path: outputPath,
  width: "934px",
  height: "1320px",
  printBackground: true,
  pageRanges: "1",
});

await browser.close();

console.log("✅ PDF generated:", outputPath);
