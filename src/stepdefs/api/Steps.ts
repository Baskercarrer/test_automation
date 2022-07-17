import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the parabank rest api', function () {
  console.log('rest api');
});

When('client send GET request: {string}', async function (endPoint: string) {
  await restClient.get(endPoint);
});

Then('response status should be successfull', async function () {
  await expect(restClient.lastResponse).toBeOK();
});
