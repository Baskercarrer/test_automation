import { AfterStep, Before, Status, setDefaultTimeout } from '@cucumber/cucumber';
import Environment from '@utils/Environment';
import TestContext from 'testContext';

setDefaultTimeout(180000);

Before(function (this: TestContext) {
  global.testContext = this as TestContext;
});

Before('@ui', async function () {
  await uiClient.init(Environment.getUiConfig);
});

Before('@api', async function () {
  await restClient.init(Environment.getApiConfig);
});

AfterStep('@ui', async function (this: TestContext, scenario) {
  if (scenario.result.status === Status.FAILED) {
    this.attach(await uiClient.screenshot(), 'base64:image/png');
    await uiClient.close();
  }
});
