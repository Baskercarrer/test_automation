import Environment, { UiConfig } from '@utils/Environment';
import { Page, chromium } from 'playwright';

export default class UiClient {
  private _page: Page;

  get page(): Page {
    return this._page;
  }

  async init(uiConfig: UiConfig) {
    const browser = await chromium.launch({
      headless: uiConfig.headless,
      channel: uiConfig.browser,
    });

    const context = await browser.newContext({
      baseURL: Environment.getUiConfig.baseUrl,
      viewport: { height: 1060, width: 1920 },
    });
    context.setDefaultTimeout(Environment.getUiConfig.timeout);
    this._page = await context.newPage();
  }

  async close() {
    await this.page.context().close();
  }

  async screenshot() {
    const screenshot = await this._page.screenshot({ fullPage: false });
    return screenshot.toString('base64');
  }
}
