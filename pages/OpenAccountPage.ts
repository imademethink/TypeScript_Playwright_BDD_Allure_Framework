import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class OpenAccountPage extends BasePage {
  private readonly openNewAccountLink: string = "//a[@href='openaccount.htm']";
  private readonly openNewAccountButton: string = "//input[@value='Open New Account']";
  private readonly accountOpenedLabel: string = "//*[text()='Account Opened!']";
  private readonly accountIdLabel: string = "//*[@id='fromAccountId']";
  private readonly transferFundsButton: string = "//*[text()='Transfer Funds']";
  private readonly transferAmountInput: string = "//*[@id='amount']";
  private readonly transferButton: string = "//input[@type='submit']";
  private readonly transferCompleteLabel: string = "//*[text()='Transfer Complete!']";

  public accountOpenSuccess: boolean = false;

  constructor(page: Page) {
    super(page);
  }

  async openNewAccount(): Promise<void> {
    await this.clickElement(this.openNewAccountLink);
    await this.elementIsPresent(this.openNewAccountButton);
    await this.clickElement(this.openNewAccountButton);
  }

  async newAccountValidation(): Promise<void> {
    await this.elementIsPresent(this.accountOpenedLabel);
    await this.elementIsPresent(this.accountIdLabel);
    console.log(await this.getElementText(this.accountIdLabel));
    this.accountOpenSuccess = true;
  }

  async initFundTransfer(transferAmount: string): Promise<void> {
    await this.clickElement(this.transferFundsButton);
    await this.elementIsPresent(this.transferAmountInput);
    await this.enterText(this.transferAmountInput, transferAmount);
  }

  async fundTransferValidation(): Promise<void> {
    await this.clickElement(this.transferButton);
    await this.elementIsPresent(this.transferCompleteLabel);
  }
}
