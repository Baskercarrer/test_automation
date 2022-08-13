import CommonPage from '../CommonPage';
import { Locator } from 'playwright';

export default class AccountOverview extends CommonPage {
  private accountNumberLink = this.page.locator('#accountTable a');

  get title(): Locator {
    return this.page.locator('text="Account Services"');
  }

  async clickAccountNumber() {
    await this.accountNumberLink.click();
  }
}
