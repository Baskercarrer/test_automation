import CommonPage from '../CommonPage';

export default class Homepage extends CommonPage {
  private username = this.page.locator('input[name=username]');
  private password = this.page.locator('input[name=password]');
  private logInButton = this.page.locator('input[value="Log In"]');

  async navigateTo() {
    await this.goTo('/parabank/index.htm');
  }

  async login(username: string, password: string) {
    await this.username.type(username, { delay: this.typeDelay });
    await this.password.type(password, { delay: this.typeDelay });
    await this.logInButton.click();
  }
}
