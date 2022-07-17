import CommonPage from '../CommonPage';

export default class AccountOverview extends CommonPage {
  private accountNumberLink = this.page.locator('#accountTable a');

  title() {
    return this.page.locator('text="Account Services"');
  }

  async clickAccountNumber() {
    await this.accountNumberLink.click();
  }
}
