import AccountDetails from 'pages/parabank/AccountDetails';
import AccountOverview from 'pages/parabank/AccountOverview';
import Homepage from 'pages/parabank/Homepage';

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
