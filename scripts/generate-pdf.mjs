import puppeteer from "puppeteer";

const targets = [
  {
    label: "Visual",
    url: "http://localhost:3000/pdf",
    output: "./public/yurii-myronov.pdf",
    pdfOptions: {
      width: "934px",
      height: "1320px",
      pageRanges: "1",
    },
  },
  {
    label: "ATS",
    url: "http://localhost:3000/cv-ats",
    output: "./public/yurii-myronov-ats.pdf",
    pdfOptions: {
      format: "A4",
      margin: {
        top: "0in",
        right: "0in",
        bottom: "0in",
        left: "0in",
      },
    },
  },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const t of targets) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "light" },
  ]);
  await page.goto(t.url, { waitUntil: "networkidle0" });
  await page.pdf({
    path: t.output,
    printBackground: true,
    ...t.pdfOptions,
  });
  await page.close();
  console.log(`✅ ${t.label} PDF generated:`, t.output);
}

await browser.close();
