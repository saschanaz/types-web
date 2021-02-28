import { execSync } from "child_process";
import { createRequire } from "module";
import fetch from "node-fetch";

const require = createRequire(import.meta.url);
const packageJson = require("../package.json");

const res = await fetch(
  "https://api.github.com/repos/w3c/webref/git/trees/HEAD"
);
if (!res.ok) {
  throw new Error("Tree API request failed");
}
const data = await res.json();
if (packageJson.devDependencies.webref.endsWith(`#${data.sha}`)) {
  console.log(`Already using the latest commit ${data.sha}`);
  process.exit(1);
}

console.log(`Found a new commit ${data.sha}`);
execSync(`npm i github:w3c/webref#${data.sha}`, { stdio: "inherit" });
