import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from 'playwright-bdd';
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
import {
    wait_util,
    takeScreenshot,
    readJsonFile,
    getCurrentDate,
    generateRandomString,
    generateRandomEmail,
    getEnvironmentValue,
    logInfo
} from "../utils/utilities";
const { Given, When, Then } = createBdd(test);


Given("User is in on home page", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateHome();
  await homePage.validateLoginElements();
});

When("User validates main menu items", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.validateMainMenuItems();
});

Then("Main menu item validation should be successful", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.validateMainMenuItems();
});

When("User validates welcome section items", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.validateWelcomeSectionElements();
});

Then("Welcome section item validation should be successful", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.validateWelcomeSectionElements();
});

When("User perform registration", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateRegistration();

  const registerPage = new RegisterPage(page);
  await registerPage.registrationInit();
});

Then("Registration should be successful", async ({ page }) => {
  await expect(page.getByText("Your account was created successfully. You are now logged in.")).toBeVisible();
});

Then("Account opening should not be successful", async ({ page }) => {
  // This keeps the same intentional failure from the original Python framework.
  await expect(page.getByText("Account Opened!", { exact: true })).toBeVisible();
});

Given("User registration is successful", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateHome();
  await homePage.navigateRegistration();

  const registerPage = new RegisterPage(page);
  await registerPage.registrationInit();
});

When("User initiate New Account Opening", async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.openNewAccount();
});

Then("New Account Opening should be successful", async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.newAccountValidation();
});

When("User initiate Fund Transfer {string}", async ({ page }, transferAmount: string) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.initFundTransfer(transferAmount);
});

Then("Fund Transfer should be successful", async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.fundTransferValidation();
});
