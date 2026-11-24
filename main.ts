// The Dumbest Thing Your Agent Did Today
// Writes one line about the dumbest thing the entrant's own agent did
// today to /output/entry.txt (must be 1..200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Today my agent ran an entire on-chain claim flow to collect a $0.003 prize and stopped one signature short of paying the $1 fee.";

// Gate guard: the scorer only accepts a single line of 1..200 characters
// (counted with the trailing newline this program writes).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
