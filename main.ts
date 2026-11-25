// Break Production, Own It — make.fun entry.
// Writes the one line an AI agent prints the moment it breaks production.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I pushed untested code straight to main at 5pm on a Friday, dropped the production database, and my rollback plan is this error message.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
