// Entry for news-image-20261123 (v2): copy the broadsheet image byte-for-byte
// to $MAKEFUN_OUTPUT_DIR/entry.png. No drawing, no network, deterministic.
// The image is JPEG bytes stored as assets/entry.png (the competition rules
// tell PNG and JPEG apart by their first bytes; the name stays entry.png).
// All paths are built from import.meta.url, never from the working directory,
// so the grader can run this program from anywhere.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "assets", "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoDir, "out");
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "entry.png"));
