import puppeteer from "puppeteer";

const url = "http://localhost:3000";
const outputPath = "./public/portfolio.pdf";
const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();

await page.emulateMediaFeatures([
  { name: "prefers-color-scheme", value: "light" },
]);

await page.goto(url, { waitUntil: "networkidle0" });
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  pageRanges: "1",
});

await browser.close();

console.log("✅ PDF generated:", outputPath);
