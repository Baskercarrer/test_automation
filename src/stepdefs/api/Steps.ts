import { Given, Then, When } from '@cucumber/cucumber';
import chai from 'chai';
import chaiExclude from 'chai-exclude';
import deepEqualAnyOrder from 'deep-equal-in-any-order';
import { expect } from '@playwright/test';

chai.use(chaiExclude);
chai.use(deepEqualAnyOrder);

Given('the reqRes API', function () {
  //Todo
});

When('client send GET request: {string}', async function (endPoint: string) {
  await restClient.get(endPoint);
  this.log(await restClient.lastResponseBodyAsString());
});

Then('response status should be successfull', async function () {
  await expect(restClient.lastResponse).toBeOK();
});

Then('response status code should be {int}', function (statusCode: number) {
  expect(restClient.lastResponse.status()).toBe(statusCode);
});

Then('response body should not be empty', async function () {
  chai.expect(await restClient.lastResponse.body()).not.to.be.empty;
});
