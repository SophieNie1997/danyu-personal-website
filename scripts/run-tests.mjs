import { readdir } from "node:fs/promises";
import { spawn } from "node:child_process";

const entries = await readdir("tests", { withFileTypes: true }).catch(() => []);
const testFiles = entries
  .filter((entry) => entry.isFile() && entry.name.endsWith(".test.mjs"))
  .map((entry) => `tests/${entry.name}`);

if (testFiles.length === 0) {
  console.log("No test files found yet.");
  process.exit(0);
}

const child = spawn(process.execPath, ["--test", ...testFiles], {
  stdio: "inherit"
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
