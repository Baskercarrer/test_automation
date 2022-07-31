import Environment, { UiConfig } from '@utils/Environment';
import { Page, chromium } from 'playwright';

export default class UiClient {
  private _page: Page;

  get page() {
    return this._page;
  }


  async init(uiConfig: UiConfig) {
    const browser = await chromium.launch({
      headless: uiConfig.headless,
      channel: uiConfig.browser,
      args: ['--start-maximized'],
    });

    const context = await browser.newContext({
      baseURL: Environment.getUiConfig.baseUrl,
      viewport: null,
    });
    context.setDefaultTimeout(uiConfig.timeout);
    this._page = await context.newPage();
  }

  async close() {
    await this._page.context().close();
  }

  async screenshot() {
    const screenshot = await this._page.screenshot({ fullPage: false });
    return screenshot.toString('base64');
  }
}
