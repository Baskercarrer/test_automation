import { Then, When } from '@cucumber/cucumber';
import Men from 'pages/luma/Men';
import { expect } from '@playwright/test';

let men: Men;

When('user navigate to men category', async function login() {
  men = luma.men;
  await luma.homepage.gotoMenu('Men');
});
Then('page title should be {word}', async function (title: string) {
  await expect(men.title).toHaveText(title);
});
