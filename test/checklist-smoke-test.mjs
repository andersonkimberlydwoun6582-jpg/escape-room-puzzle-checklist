import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const checklist = readFileSync(new URL("../checklist.md", import.meta.url), "utf8");

for (const section of ["Core loop", "Clue design", "Difficulty pacing", "Fail states", "Walkthrough support"]) {
  assert.ok(checklist.includes(section), `missing section: ${section}`);
}

assert.ok(checklist.includes("https://escapethealienprison.xyz/"), "missing target citation");
console.log("checklist smoke test passed");
