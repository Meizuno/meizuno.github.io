import puppeteer from "puppeteer";

const url = "http://localhost:3000/cv-ats";
const outputPath = "./public/yurii-myronov.pdf";

const browser = await puppeteer.launch({
  headless: true,
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
  margin: { top: "0in", right: "0in", bottom: "0in", left: "0in" },
});

await browser.close();
console.log("✅ PDF generated:", outputPath);
