import { mkdirSync, writeFileSync } from "node:fs";

const entry = "fix: one-liner, fully tested in my head, shipping straight to prod. Enjoy your weekend!";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry + "\n");
} catch {
  writeFileSync("entry.txt", entry + "\n");
}
