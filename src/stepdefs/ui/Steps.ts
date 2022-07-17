import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the homepage', async function () {
  await paraBank.homepage.navigateTo();
});

Given('account overview page', async function () {
  await paraBank.homepage.navigateTo();
  await paraBank.homepage.login(this.parameters['username'], this.parameters['password']);
});

When('user login with valid credentials', async function login() {
  await paraBank.homepage.login(this.parameters['username'], this.parameters['password']);
});

When('user clicks on account number', async function login() {
  await paraBank.accountOverview.clickAccountNumber();
});

Then('account overview page should display', async function () {
  await expect(paraBank.accountOverview.title()).toBeVisible();
});
Then('account details page should display', async function () {
  await expect(paraBank.accountDetails.title()).toBeVisible();
});
