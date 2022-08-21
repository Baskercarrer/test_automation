import Home from 'pages/luma/Home';
import Men from 'pages/luma/Men';

export default class Pages {
  get homepage(): Home {
    return new Home(uiClient.page);
  }

  get men(): Men {
    return new Men(uiClient.page);
  }
}
