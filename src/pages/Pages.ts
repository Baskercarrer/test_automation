/* eslint-disable no-var */
import Home from 'pages/luma/Home';
import Men from 'pages/luma/Men';
import { Page } from 'playwright';

export default class Pages {
  constructor(page: Page) {
    globalThis.homepage = new Home(page);
    globalThis.men = new Men(page);
  }
}

declare global {
  var homepage: Home;
  var men: Men;
}
