import { Given, Then, When } from '@cucumber/cucumber';
import Homepage from 'pages/luma/Home';
import { expect } from '@playwright/test';

let homepage: Homepage;
Given('the homepage', async function () {
  homepage = luma.homepage;
  await homepage.load();
});

When('user loads home page', async function login() {
  homepage = luma.homepage;
  await homepage.load();
});

When('user search for {word}', async function login(item: string) {
  await homepage.search(item);
});

Then('logo should exists', async function () {
  await expect(homepage.logo).toBeVisible();
});

Then('count of watch should be {int}', async function (count: number) {
  await expect(homepage.itemCount).toHaveText(String(count));
});