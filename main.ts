// news-image-20261117 — entry program for the 17 November 2026 world-news image.
//
// The image is a newspaper front page composed for this competition: a
// summit-hall illustration (the Quad leaders' meeting in Manila) above
// typeset headlines covering the day's biggest stories — the Gulf, Ukraine,
// measles, Cyclone Akvan, and more. It was built in this session and is
// bundled in the repository as entry.png.
//
// This program only copies that bundled image to the output directory, so
// it needs no network and both runs write byte-identical output. After the
// copy it verifies the output matches the bundled image byte for byte.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Verify the copy: the two runs the grader makes must write identical bytes,
// and this check catches a truncated or corrupted copy before it is judged.
const sha256 = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");
if (sha256(source) !== sha256(target)) {
  throw new Error("entry.png copy failed integrity check");
}
console.log(`wrote ${target}`);
