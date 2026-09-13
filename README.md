# 🚀 TypeScript Playwright BDD Allure Reporting Automation Framework
### Beginner-Friendly TypeScript Playwright BDD Automation Framework

Build reliable, maintainable, and reusable UI automation using **TypeScript, Playwright, BDD, Gherkin, and Allure Reporting**.

⭐ If this project helps you, please consider giving it a Star!

---

# 📖 About

This repository provides a simple and beginner-friendly **TypeScript Playwright BDD Automation Framework** built using:

- 🟦 TypeScript
- 🌐 Playwright
- 🥒 BDD (bddgen) / Gherkin
- 🧩 playwright-bdd
- 📊 Allure Reporting
- 🧱 Page Object Model
- ⚙️ Playwright Configuration
- 📸 Screenshot on Failure
- 🎥 Video on Failure
- 🔍 Trace on Failure
- 🏷️ Tag-Based Test Execution
- 🌍 Cross-Browser Execution
- 🚀 CI/CD Friendly

The framework intentionally focuses on **simplicity, readability, maintainability, and reusability** without introducing unnecessary design patterns.

It is suitable for:

- Automation Engineers
- SDET Engineers
- Software Engineers
- Beginners learning TypeScript automation
- Beginners learning Playwright
- Beginners learning BDD
- Teams migrating from Python Playwright to TypeScript Playwright
- Enterprise UI automation projects

---

# ✨ Features

- 🟦 TypeScript
- 🌐 Playwright
- 🥒 BDD (bddgen) using Gherkin
- 🧩 playwright-bdd
- 📝 Feature Files
- 🧱 Simple Page Object Model
- 📊 Allure Reporting
- 📸 Automatic Screenshot on Failure
- 🎥 Video on Failure
- 🔍 Trace on Failure
- 🔄 Reusable Utilities
- 🎯 Tag-Based Test Execution
- 🌐 Cross-Browser Execution
- 🧪 Positive & Negative Test Scenarios
- 📋 Scenario Outline and Examples
- 🪝 BDD Hooks through Playwright/BDD lifecycle
- 🚀 CI/CD Friendly
- 🧹 Easy Maintenance
- 📁 Clean Project Structure
- 🔎 TypeScript Type Checking

---

# 🏗 Framework Design

The framework intentionally follows a simple and practical architecture.

It uses:

- ✅ Page Object Model
- ✅ Playwright BDD
- ✅ Gherkin language
- ✅ Reusable utility functions
- ✅ Configuration-driven execution
- ✅ Playwright test lifecycle
- ✅ Allure Reporting
- ✅ Failure diagnostics

The goal is:

> **Simple to understand → Easy to maintain → Easy to extend → Ready for CI/CD**

---

# 🥒 BDD with Gherkin

BDD allows business-readable scenarios to be written using Gherkin syntax.

Example:

```gherkin
@smoke
Scenario: Successful Login with Valid Credentials
  Given I navigate to the login page
  When I enter valid username "standard_user" and password "secret_sauce"
  And I click the login button
  Then I should be redirected to the inventory dashboard
```

The execution flow is:

```text
Feature File
     │
     ▼
BDD Generator
     │
     ▼
Step Definitions
     │
     ▼
Page Objects
     │
     ▼
Playwright
     │
     ▼
Web Application
     │
     ▼
Allure Report
```

---

# 🧩 Page Object Model

The framework uses a simple Page Object Model.

Each Page Object contains:

- Locators
- Page actions
- Element interactions
- Page-specific validations

Example:

```typescript
export class LoginPage {
  private readonly usernameInput: string = "#user-name";
  private readonly passwordInput: string = "#password";
  private readonly loginButton: string = "#login-button";

  async login(username: string, password: string): Promise<void> {
    await this.enterText(this.usernameInput, username);
    await this.enterText(this.passwordInput, password);
  }
}
```

The Page Object keeps Playwright implementation separate from the Gherkin step definitions.

---

# 📊 Allure Reporting

The framework uses **Allure Playwright** for test execution reporting.

Reports can provide:

- Test execution summary
- Passed scenarios
- Failed scenarios
- Skipped scenarios
- Feature names
- Scenario names
- BDD steps
- Execution duration
- Failure information
- Screenshots
- Videos
- Playwright traces
- Test attachments

Generate the HTML report with:

```bash
allure generate path\to\allure-results -o allure-report --clean
```

Open the report with:

```bash
allure open allure-report
```

---

# 📸 Screenshot on Failure

Playwright is configured to capture screenshots when a test fails.

Configuration:

```typescript
use: {
  screenshot: "only-on-failure"
}
```

This makes failed UI tests easier to investigate.

---

# 🎥 Video on Failure

Video recording is enabled for failed tests:

```typescript
use: {
  video: "retain-on-failure"
}
```

This provides a visual record of the failed test execution.

---

# 🔍 Trace on Failure

Playwright trace collection is enabled for failed tests:

```typescript
use: {
  trace: "retain-on-failure"
}
```

The trace can be opened using Playwright's trace viewer for detailed debugging.

---

# 🌐 Cross-Browser Testing

The framework is configured for:

- Google Chrome
- Microsoft Edge
- Firefox

Configured projects include:

```text
chrome
edge
firefox
```

Run Chrome tests:

```bash
npm run test:chrome
```

Run all configured browsers:

```bash
npm test
```

---

# 🏷️ Tag-Based Test Execution

BDD tags can be used to organize and selectively execute scenarios.

Example:

```gherkin
@smoke
Scenario: Successful Login with Valid Credentials
```

Run smoke tests:

```bash
npm run test:smoke
```

Regression tests can be marked with:

```gherkin
@regression
```

Run regression tests:

```bash
npm run test:regression
```

The tag filtering is performed during BDD generation so that only matching scenarios are generated for execution.

---

# 📋 Scenario Outline / Data-Driven Testing

The framework supports Gherkin `Scenario Outline` and `Examples`.

Example:

```gherkin
@MultipleScenario
Scenario Outline: Transfer Flow Validation
  When User initiate New Account Opening
  When User initiate Fund Transfer "<TransferAmount>"
  Then Fund Transfer should be successful

Examples:
  | TransferAmount |
  | 20             |
  | 30             |
```

This allows the same scenario to execute with multiple data values.

---

# 📂 Project Structure

```text
TypeScript_Playwright_BDD_Allure_Framework/
│
├── features/
│   ├── Demo.feature
│   ├── Demo1_Parabank.feature
│   └── Demo2_Parabank.feature
│
├── steps/
│   ├── login.steps.ts
│   └── parabank.steps.ts
│
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── OpenAccountPage.ts
│   └── RegisterPage.ts
│
├── utilities/
│   └── README.md
│
├── scripts/
│   └── clean.js
│
├── allure-results/
├── allure-report/
├── .features-gen/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

# 🔄 Framework Execution Flow

```text
                 ┌──────────────────────┐
                 │    Gherkin Feature   │
                 │         File         │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │    playwright-bdd    │
                 │     BDD Generator    │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   Step Definitions   │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │    Page Objects      │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │      Playwright      │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │    Web Application   │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   Allure Reporting   │
                 │ Screenshots / Video  │
                 │       / Trace        │
                 └──────────────────────┘
```

---

# 💻 Prerequisites

Install the following before running the framework:

- Node.js LTS
- npm
- Git
- Google Chrome (for Chrome execution)
- Microsoft Edge (for Edge execution)
- VS Code or another TypeScript IDE
- Java/JDK if using the Allure CLI installation method that requires it
- Allure Commandline

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

Check Allure:

```bash
allure --version
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/imademethink/TypeScript_Playwright_BDD_Allure_Framework.git
```

## 2. Navigate to the Project

```bash
cd TypeScript_Playwright_BDD_Allure_Framework
```

## 3. Install Dependencies

```bash
npm install --verbose
```

## 4. Install Playwright Browsers

```bash
npx playwright install
```

For Linux CI environments, you may use:

```bash
npx playwright install --with-deps
```

## 5. TypeScript Validation

```bash
npm run typecheck
```

---

# 🧪 Test Execution

## Run All Tests

```bash
npm test
```

This command:

1. Generates Playwright tests from the feature files.
2. Executes the generated tests.
3. Produces Allure results.

## Run Smoke Tests

```bash
npm run test:smoke
```

## Run Regression Tests

```bash
npm run test:regression
```

## Run Chrome Tests

```bash
npm run test:chrome
```

## Run Tests in Headed Mode

```bash
npm run test:headed
```

## Generate BDD Tests Only

```bash
npm run bddgen
```

---

# 📊 Allure Report Commands

## Generate HTML Report

```bash
allure generate path\to\allure-results -o allure-report --clean
```

## Open Existing HTML Report

```bash
npm run allure:open
```

## Serve Allure Results Directly

```bash
allure open allure-report
```

A typical reporting flow is:

```bash
npm test
allure generate path\to\allure-results -o allure-report --clean
allure open allure-report
```

---

# 🧹 Clean Framework Principles

The framework follows a few simple principles.

### Feature Files

Contain business-readable BDD scenarios.

### Step Definitions

Contain the implementation of Gherkin steps.

### Page Objects

Contain Playwright UI interactions and page-specific behavior.

### Utilities

Contain reusable technical functionality.

### Configuration

Contains Playwright and BDD execution configuration.

### Reporting

Allure receives the results and execution artifacts generated by the framework.

This separation prevents feature files from becoming tightly coupled with Playwright implementation.

---

# 🧰 Main Dependencies

The framework uses the following core packages:

| Package | Purpose |
|---|---|
| `@playwright/test` | Playwright browser automation and assertions |
| `playwright-bdd` | BDD / Gherkin integration with Playwright |
| `allure-playwright` | Allure test reporting |
| `typescript` | TypeScript compilation and type checking |
| `allure` | Allure command-line tooling |
| `@types/node` | Node.js TypeScript type definitions |

---

# ⚙️ Playwright Configuration

The main configuration is located in:

```text
playwright.config.ts
```

Current framework settings include:

```text
Timeout       : 30 seconds
Workers       : 2
Parallel      : Disabled
Retries       : 1
Headless      : false
Screenshot    : Only on failure
Video         : Retain on failure
Trace         : Retain on failure
```

These values can be changed according to project requirements.

---

# 📚 Learning Outcomes

This repository demonstrates:

- TypeScript automation
- Playwright
- BDD automation
- Gherkin
- playwright-bdd
- Page Object Model
- Step Definitions
- Playwright configuration
- Browser configuration
- Cross-browser testing
- Tag-based execution
- Scenario Outline
- Data-driven testing
- Screenshot handling
- Video capture
- Trace capture
- Allure Reporting
- TypeScript type checking
- Maintainable automation framework design

---

# 🎓 Suitable For

This framework can be used by:

- Beginners learning TypeScript Playwright
- Beginners learning BDD
- QA Automation Engineers
- SDETs
- Software Engineers
- Test Automation Leads
- QA Managers
- Teams building BDD automation frameworks
- Teams migrating from Python Playwright to TypeScript Playwright

---

# 🤝 Contributing

Contributions are welcome!

Feel free to:

- ⭐ Star the repository
- 🍴 Fork the project
- 🐞 Report issues
- 💡 Suggest improvements
- 🚀 Submit Pull Requests

---

# 🗺️ Future Roadmap

Potential future enhancements:

- API Automation
- Database Validation
- Docker Support
- Parallel Execution
- Retry Mechanism
- GitHub Actions Pipeline
- Jenkins Pipeline
- Azure DevOps Pipeline
- Test Data Management
- Excel-Based Test Data
- JSON-Based Test Data
- Environment Management
- Advanced Failure Diagnostics
- API + UI combined workflows
- CI/CD reporting integration

---

# 🌟 Why This Framework?

The framework is designed around a simple philosophy:

```text
Readable BDD
     +
Clean TypeScript
     +
Simple Page Objects
     +
Reliable Playwright
     +
Useful Allure Reporting
     +
Simple Configuration
     =
Maintainable Automation
```

No unnecessary framework complexity.

No excessive design patterns.

No complicated TypeScript abstractions.

Just a clean and practical automation architecture that teams can understand, maintain, and extend.

---

# 📌 Useful Commands

| Purpose | Command |
|---|---|
| Install dependencies | `npm install` |
| Install browsers | `npx playwright install` |
| TypeScript validation | `npm run typecheck` |
| Generate BDD tests | `npm run bddgen` |
| Run all tests | `npm test` |
| Run smoke tests | `npm run test:smoke` |
| Run regression tests | `npm run test:regression` |
| Run Chrome tests | `npm run test:chrome` |
| Run headed tests | `npm run test:headed` |
| Generate Allure report | `allure generate path\to\allure-results -o allure-report --clean` |
| Open Allure report | `allure open allure-report` |

---

# ❤️ Community

If you find this framework useful:

⭐ Star the repository

🍴 Fork the project

🐞 Report issues

💡 Suggest improvements

🚀 Contribute

---

### Made with ❤️ for the Automation Testing Community

**TypeScript • Playwright • BDD • Gherkin • Allure Reporting**
