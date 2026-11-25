import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const scene =
  "Mum still cuts the crusts off Dad's sandwiches, and Dad still pretends not to notice \u2014 forty years in, he eats them first, like they're the best part of the meal.\n";

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, scene, "utf8");
chmodSync(entryPath, 0o644);
