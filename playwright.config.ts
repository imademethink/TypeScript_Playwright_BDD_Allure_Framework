import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/**/*.feature",
  steps: ["steps/**/*.ts"]
});

export default defineConfig({
  testDir,
  timeout: 30000,
  fullyParallel: false,
  workers: 2,
  retries: 1,
  reporter: [
    ["line"],
    ["allure-playwright", { resultsDir: "allure-results" }]
  ],
  use: {
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    headless: false
  },
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome"
      }
    },
    // {
    //   name: "edge",
    //   use: {
    //     ...devices["Desktop Chrome"],
    //     channel: "msedge"
    //   }
    // },
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"]
    //   }
    // }
  ]
});
