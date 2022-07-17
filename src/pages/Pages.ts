import AccountDetails from '@onemail/AccountDetails';
import AccountOverview from '@onemail/AccountOverview';
import Homepage from '@onemail/Homepage';
import { Page } from 'playwright';

export default class Pages {
  private _page: Page;
  constructor(page: Page) {
    this._page = page;
  }

  get homepage(): Homepage {
    return new Homepage(this._page);
  }

  get accountOverview(): AccountOverview {
    return new AccountOverview(this._page);
  }
  get accountDetails(): AccountDetails {
    return new AccountDetails(this._page);
  }
}
