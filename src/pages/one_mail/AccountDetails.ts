import CommonPage from '../CommonPage';

export default class AccountDetails extends CommonPage {
  private accountNumberLink = this.page.locator('#accountTable a');
  title() {
    return this.page.locator('text="Account Details"');
  }
}
