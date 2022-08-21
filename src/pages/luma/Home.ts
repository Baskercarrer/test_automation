import Common from '../Common';

export default class Home extends Common {
  get logo() {
    return this.page.locator('a[aria-label*=store]>img');
  }
  get itemCount() {
    return this.page.locator('span.amount');
  }

  async search(item: string) {
    await this.page.locator('#search').type(item, { delay: this.typeDelay });
  }

  async gotoMenu(name: string) {
    await this.page.locator(`span:text-is('${name}')`).click();
  }

  async load(): Promise<void> {
    await this.goTo('/');
  }
}
