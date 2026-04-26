import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, "../src/assets");

async function optimizeImages() {
  const files = await readdir(ASSETS_DIR);
  const images = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`\n🖼️  Found ${images.length} images to optimize...\n`);

  for (const file of images) {
    const inputPath = path.join(ASSETS_DIR, file);
    const webpName = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const outputPath = path.join(ASSETS_DIR, webpName);

    try {
      const inputStat = await stat(inputPath);

      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      const outputStat = await stat(outputPath);
      const savings = Math.round((1 - outputStat.size / inputStat.size) * 100);
      const savedKB = Math.round((inputStat.size - outputStat.size) / 1024);

      console.log(
        `  ✅ ${file.padEnd(40)} → ${webpName} | -${savings}% (saved ${savedKB}KB)`
      );
    } catch (err) {
      console.error(`  ❌ Failed: ${file} — ${err.message}`);
    }
  }

  console.log("\n✨ All done! Imports will be updated next.\n");
}

optimizeImages();
