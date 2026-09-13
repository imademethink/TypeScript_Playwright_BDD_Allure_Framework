import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private readonly usernameInput: string = "#user-name";
  private readonly passwordInput: string = "#password";
  private readonly loginButton: string = "#login-button";
  private readonly url_saucedemo: string = "https://saucedemo.com";

  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    await this.openUrl(this.url_saucedemo);
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterText(this.usernameInput, username);
    await this.enterText(this.passwordInput, password);
  }

  async clickLogin(): Promise<void> {
    await this.clickElement(this.loginButton);
  }
}
