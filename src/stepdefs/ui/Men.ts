import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('user navigate to men category', async function login() {
  await homepage.gotoMenu('Men');
});
Then('page title should be {word}', async function (title: string) {
  await expect(men.title).toHaveText(title);
});
