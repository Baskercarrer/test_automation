import { Page } from 'playwright';
export default class Common {
  protected typeDelay = 100;
  protected _page: Page;
  constructor(protected page: Page) {
    this._page = page;
  }

  protected async goTo(path: string) {
    await this._page.goto(path);
  }
}
