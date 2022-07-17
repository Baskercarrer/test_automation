import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import RestClient from 'restClient';
import UiClient from 'uiClient';
import Pages from 'pages';

export default class TestContext extends World {
  private _value: unknown;

  constructor(options: IWorldOptions) {
    super(options);
    global.restClient = new RestClient();
    global.uiClient = new UiClient();
  }

  get value(): unknown {
    return this._value;
  }

  set value(value: unknown) {
    this._value = value;
  }
}
setWorldConstructor(TestContext);

declare global {
  var oneMail: Pages;
  var restClient: RestClient;
  var uiClient: UiClient;
  var testContext: TestContext;
}
