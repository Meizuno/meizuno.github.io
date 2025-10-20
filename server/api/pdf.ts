import { defineEventHandler } from "h3";
import puppeteer from "puppeteer";
import { join } from "path";
import { fileURLToPath } from "url";

export default defineEventHandler(async (event) => {
  try {
    const url = "http://localhost:3000/pdf";

    const __dirname = fileURLToPath(new URL(".", import.meta.url));
    const outputPath = join(__dirname, "../../public/yurii-myronov.pdf");

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
      width: "934px",
      height: "1320px",
      printBackground: true,
      pageRanges: "1",
    });

    await browser.close();

    return {
      success: true,
      message: "✅ PDF generated successfully",
      file: "/yurii-myronov.pdf",
    };
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    return {
      success: false,
      message: "Error generating PDF",
      error: String(error),
    };
  }
});
