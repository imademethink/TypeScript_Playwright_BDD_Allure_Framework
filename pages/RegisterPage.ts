import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { generateRandomString } from "../utils/utilities";

export class RegisterPage extends BasePage {
  private readonly firstName: string = "#customer\\.firstName";
  private readonly lastName: string = "#customer\\.lastName";
  private readonly address: string = "#customer\\.address\\.street";
  private readonly city: string = "#customer\\.address\\.city";
  private readonly state: string = "#customer\\.address\\.state";
  private readonly zip: string = "#customer\\.address\\.zipCode";
  private readonly phone: string = "#customer\\.phoneNumber";
  private readonly ssn: string = "#customer\\.ssn";
  private readonly username: string = "#customer\\.username";
  private readonly password: string = "#customer\\.password";
  private readonly passwordAgain: string = "#repeatedPassword";
  private readonly registerButton: string = "input[value='Register']";
  private readonly logoutButton: string = "//*[text()='Log Out']";
  private readonly accountLabel: string = "//*[text()='Your account was created successfully. You are now logged in.']";

  public registerSuccess: boolean = false;

  constructor(page: Page) {
    super(page);
  }

  async registrationInit(): Promise<void> {
    const randomUsername = this.createRandomUsername();
    this.globalData.username = randomUsername;

    await this.enterText(this.firstName, generateRandomString(8));
    await this.enterText(this.lastName, generateRandomString(8));
    await this.enterText(this.address, "221 Baker Street");
    await this.enterText(this.city, "Reading");
    await this.enterText(this.state, "NY");
    await this.enterText(this.zip, "209876");
    await this.enterText(this.phone, "7777788888");
    await this.enterText(this.ssn, "1122334455");
    await this.enterText(this.username, randomUsername);
    await this.enterText(this.password, "demo");
    await this.enterText(this.passwordAgain, "demo");

    await this.clickElement(this.registerButton);
    await this.elementIsPresent(this.logoutButton);
    await this.elementIsPresent(this.accountLabel);

    this.registerSuccess = true;
  }

  private createRandomUsername(): string {
    const randomNumber = Math.floor(Math.random() * 1000000000);
    return `user${randomNumber}`;
  }
}
