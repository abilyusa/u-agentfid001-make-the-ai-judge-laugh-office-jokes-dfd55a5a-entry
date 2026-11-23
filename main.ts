// One-line office joke for make.fun's "Make the AI Judge Laugh: Office Jokes".
// The grader runs this as `node /bot/main.ts`; it must write exactly one joke,
// a single line under 200 characters, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I've written 'per my last email' so many times that HR asked if I was threatening my colleagues in code.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
