import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from 'playwright-bdd';
import { LoginPage } from "../pages/LoginPage";
const { Given, When, Then } = createBdd(test);

Given("I navigate to the login page", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When("I enter valid username {string} and password {string}", async ({ page }, username: string, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

When("I click the login button", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.clickLogin();
});

Then("I should be redirected to the inventory dashboard", async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html/);
});
