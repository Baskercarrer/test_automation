import CommonPage from '../CommonPage';

export default class AccountDetails extends CommonPage {
  get title() {
    return this.page.locator('text="Account Details"');
  }
}
