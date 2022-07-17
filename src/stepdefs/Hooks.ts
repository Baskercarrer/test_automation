import { After, AfterStep, Before, Status, setDefaultTimeout } from '@cucumber/cucumber';
import Environment from '@utils/Environment';
import TestContext from 'testContext';

setDefaultTimeout(180000);

Before(function (this: TestContext) {
  global.testContext = this as TestContext;
});

Before({ tags: '@ui', name: 'Initialize UI Client' }, async function () {
  await uiClient.init(Environment.getUiConfig);
});

Before({ tags: '@api', name: 'Initialize API Client' }, async function () {
  await restClient.init(Environment.getApiConfig);
});
After({ tags: '@ui', name: 'Closing UI Instance' }, async function () {
  await uiClient.close();
});

AfterStep('@ui', async function (this: TestContext, scenario) {
  if (scenario.result.status === Status.FAILED) {
    this.attach(await uiClient.screenshot(), 'base64:image/png');
    await uiClient.close();
  }
});
