import AccountDetails from '@onemail/AccountDetails';
import AccountOverview from '@onemail/AccountOverview';
import Homepage from '@onemail/Homepage';

export default class Pages {
  get homepage(): Homepage {
    return new Homepage(uiClient.page);
  }

  get accountOverview(): AccountOverview {
    return new AccountOverview(uiClient.page);
  }
  get accountDetails(): AccountDetails {
    return new AccountDetails(uiClient.page);
  }
}
