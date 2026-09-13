import { expect, Page } from "@playwright/test";

export class BasePage {
  protected page: Page;
  protected url: string = "https://parabank.parasoft.com/parabank/index.htm";
  protected globalData: { username?: string } = {};

  constructor(page: Page) {
    this.page = page;
  }

  async openUrl(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async findElement(locator: string) {
    const element = this.page.locator(locator);
    await expect(element).toBeVisible({ timeout: 10000 });
    return element;
  }

  async elementIsPresent(locator: string, index: number = 0) {
    const element = this.page.locator(locator).nth(index);
    await expect(element).toBeAttached({ timeout: 10000 });
    return element;
  }

  async clickElement(locator: string): Promise<void> {
    const element = await this.findElement(locator);
    await element.click();
  }

  async enterText(locator: string, text: string): Promise<void> {
    const element = await this.findElement(locator);
    await element.fill(text);
  }

  getCurrentUrl(): string {
    return this.page.url();
  }

  async getElementText(locator: string, index: number = 0): Promise<string> {
    const element = this.page.locator(locator).nth(index);
    await expect(element).toBeVisible({ timeout: 10000 });
    return (await element.textContent()) ?? "";
  }
}
