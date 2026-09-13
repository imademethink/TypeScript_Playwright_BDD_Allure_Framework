const fs = require("fs");
const path = require("path");

const folders = [
  "allure-results",
  "allure-report",
  "playwright-report",
  "test-results",
  ".features-gen"
];

for (const folder of folders) {
  const folderPath = path.join(process.cwd(), folder);

  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
}

console.log("Clean completed.");
