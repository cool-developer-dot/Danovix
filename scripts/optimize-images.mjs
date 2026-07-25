/**
 * One-shot production image optimizer for DANOVIX.
 * Converts JPG → WebP, recompresses heavy WebPs, trims oversized sources.
 * Visual quality target: luxury photography ≈ q88–92, logos near-lossless.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const report = {
  converted: [],
  recompressed: [],
  resized: [],
  removed: [],
  skipped: [],
  beforeBytes: 0,
  afterBytes: 0,
};

function bytes(n) {
  return `${(n / 1024).toFixed(1)}KB`;
}

async function fileSize(filePath) {
  return fs.statSync(filePath).size;
}

async function writeWebpFrom(inputPath, outputPath, options) {
  const before = await fileSize(inputPath);
  let pipeline = sharp(inputPath, { failOn: "none" }).rotate();

  if (options.maxWidth || options.maxHeight) {
    pipeline = pipeline.resize({
      width: options.maxWidth,
      height: options.maxHeight,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const { data, info } = await pipeline
    .webp({
      quality: options.quality,
      alphaQuality: options.alphaQuality ?? 95,
      effort: 6,
      smartSubsample: true,
    })
    .toBuffer({ resolveWithObject: true });

  // Keep existing file if new encode is larger (already well-optimized).
  if (fs.existsSync(outputPath)) {
    const existing = await fileSize(outputPath);
    if (data.length >= existing && path.resolve(inputPath) === path.resolve(outputPath)) {
      report.skipped.push({
        file: path.relative(root, outputPath),
        reason: "re-encode not smaller",
        size: existing,
      });
      return { before, after: existing, wrote: false };
    }
    if (
      path.resolve(inputPath) !== path.resolve(outputPath) &&
      data.length >= existing
    ) {
      // Prefer smaller existing webp if somehow present
      report.skipped.push({
        file: path.relative(root, outputPath),
        reason: "existing webp smaller",
        size: existing,
      });
      return { before, after: existing, wrote: false };
    }
  }

  fs.writeFileSync(outputPath, data);
  return {
    before,
    after: data.length,
    wrote: true,
    width: info.width,
    height: info.height,
  };
}

async function convertJpgToWebp(jpgPath, quality) {
  const webpPath = jpgPath.replace(/\.jpe?g$/i, ".webp");
  const result = await writeWebpFrom(jpgPath, webpPath, { quality });
  if (result.wrote) {
    report.converted.push({
      from: path.relative(root, jpgPath),
      to: path.relative(root, webpPath),
      before: result.before,
      after: result.after,
      dims: `${result.width}×${result.height}`,
    });
  }
  fs.unlinkSync(jpgPath);
  return webpPath;
}

async function recompressWebp(webpPath, options) {
  const tmp = `${webpPath}.tmp.webp`;
  const before = await fileSize(webpPath);
  const meta = await sharp(webpPath, { failOn: "none" }).metadata();

  let pipeline = sharp(webpPath, { failOn: "none" }).rotate();
  let resized = false;
  if (options.maxWidth && meta.width && meta.width > options.maxWidth) {
    pipeline = pipeline.resize({
      width: options.maxWidth,
      fit: "inside",
      withoutEnlargement: true,
    });
    resized = true;
  }

  const { data, info } = await pipeline
    .webp({
      quality: options.quality,
      alphaQuality: options.alphaQuality ?? 95,
      effort: 6,
      smartSubsample: true,
    })
    .toBuffer({ resolveWithObject: true });

  if (data.length >= before * 0.98 && !resized) {
    report.skipped.push({
      file: path.relative(root, webpPath),
      reason: "already optimal",
      size: before,
    });
    return;
  }

  fs.writeFileSync(tmp, data);
  fs.renameSync(tmp, webpPath);

  const entry = {
    file: path.relative(root, webpPath),
    before,
    after: data.length,
    dims: `${info.width}×${info.height}`,
  };
  if (resized) report.resized.push(entry);
  else report.recompressed.push(entry);
}

async function optimizePngIcon(pngPath, maxSide) {
  const before = await fileSize(pngPath);
  const { data, info } = await sharp(pngPath, { failOn: "none" })
    .resize({
      width: maxSide,
      height: maxSide,
      fit: "inside",
      withoutEnlargement: true,
    })
    .png({ compressionLevel: 9, effort: 10, palette: false })
    .toBuffer({ resolveWithObject: true });

  if (data.length < before) {
    fs.writeFileSync(pngPath, data);
    report.recompressed.push({
      file: path.relative(root, pngPath),
      before,
      after: data.length,
      dims: `${info.width}×${info.height}`,
    });
  } else {
    report.skipped.push({
      file: path.relative(root, pngPath),
      reason: "png already small",
      size: before,
    });
  }
}

function walk(dir, exts) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, exts));
    else if (exts.has(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

async function main() {
  const beforeFiles = walk(publicDir, new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]));
  const appIcons = [
    path.join(root, "app/icon.png"),
    path.join(root, "app/apple-icon.png"),
  ].filter((p) => fs.existsSync(p));

  report.beforeBytes = [...beforeFiles, ...appIcons].reduce(
    (sum, f) => sum + fs.statSync(f).size,
    0,
  );

  // 1) JPG / JPEG → WebP (lifestyle + featured product photography)
  const jpgs = walk(publicDir, new Set([".jpg", ".jpeg"]));
  for (const jpg of jpgs) {
    const isFeatured = jpg.includes(`${path.sep}featured${path.sep}`);
    await convertJpgToWebp(jpg, isFeatured ? 90 : 88);
  }

  // 2) Recompress / resize key WebPs
  await recompressWebp(path.join(publicDir, "handbag.webp"), {
    quality: 90,
    alphaQuality: 95,
    maxWidth: 1120,
  });
  await recompressWebp(path.join(publicDir, "logo.webp"), {
    quality: 92,
    alphaQuality: 100,
    maxWidth: 1024,
  });
  await recompressWebp(path.join(publicDir, "bg.webp"), {
    quality: 88,
    maxWidth: 1920,
  });
  await recompressWebp(path.join(publicDir, "signature-marble.webp"), {
    quality: 90,
    alphaQuality: 95,
    maxWidth: 800,
  });

  for (const craft of walk(path.join(publicDir, "craftsmanship"), new Set([".webp"]))) {
    await recompressWebp(craft, { quality: 88, maxWidth: 800 });
  }

  // 3) Remove unused duplicate PNGs (WebP is the production source)
  for (const dup of [
    "imag-removebg-preview.png",
    "signature-marble.png",
  ]) {
    const full = path.join(publicDir, dup);
    if (fs.existsSync(full)) {
      const size = await fileSize(full);
      fs.unlinkSync(full);
      report.removed.push({ file: `public/${dup}`, size });
    }
  }

  // 4) Compress app icons (PNG required by Next metadata)
  await optimizePngIcon(path.join(root, "app/icon.png"), 512);
  await optimizePngIcon(path.join(root, "app/apple-icon.png"), 180);

  const afterFiles = walk(publicDir, new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]));
  report.afterBytes = [...afterFiles, ...appIcons.filter((p) => fs.existsSync(p))].reduce(
    (sum, f) => sum + fs.statSync(f).size,
    0,
  );

  console.log(JSON.stringify(report, null, 2));
  console.log(
    `\nTOTAL ${bytes(report.beforeBytes)} → ${bytes(report.afterBytes)} (${(
      ((report.beforeBytes - report.afterBytes) / report.beforeBytes) *
      100
    ).toFixed(1)}% reduction)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
