import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private readonly usernameInput: string = "[name='username']";
  private readonly passwordInput: string = "[name='password']";
  private readonly loginButton: string = "//input[@value='Log In']";
  private readonly solutionsLink: string = "//*[text()='Solutions']";
  private readonly aboutUsLink: string = "//*[text()='About Us']";
  private readonly servicesLink: string = "//*[text()='Services']";
  private readonly productsLink: string = "//*[text()='Products']";
  private readonly locationsLink: string = "//*[text()='Locations']";
  private readonly homeIcon: string = ".home";
  private readonly aboutUsIcon: string = ".aboutus";
  private readonly contactIcon: string = ".contact";
  private readonly registerLink: string = "//*[text()='Register']";
  private readonly registerButton: string = "input[value='Register']";

  public mainMenuItemsCheck: boolean = false;

  constructor(page: Page) {
    super(page);
  }

  async navigateHome(): Promise<void> {
    await this.openUrl(this.url);
  }

  async validateLoginElements(): Promise<void> {
    await this.elementIsPresent(this.usernameInput);
    await this.elementIsPresent(this.passwordInput);
    await this.elementIsPresent(this.loginButton);
  }

  async validateMainMenuItems(): Promise<void> {
    await this.elementIsPresent(this.solutionsLink);
    await this.elementIsPresent(this.aboutUsLink);
    await this.elementIsPresent(this.servicesLink);
    await this.elementIsPresent(this.productsLink);
    await this.elementIsPresent(this.locationsLink);
    this.mainMenuItemsCheck = true;
  }

  async validateWelcomeSectionElements(): Promise<void> {
    await this.elementIsPresent(this.homeIcon);
    await this.elementIsPresent(this.aboutUsIcon);
    await this.elementIsPresent(this.contactIcon);
    this.mainMenuItemsCheck = true;
  }

  async navigateRegistration(): Promise<void> {
    await this.clickElement(this.registerLink);
    await this.elementIsPresent(this.registerButton);
  }
}
