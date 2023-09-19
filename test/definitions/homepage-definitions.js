import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/homepage.js';
import Exercises from '../pageobjects/exercises.js';

Given(/^I open the aboutyou site$/, async function () {
  await HomePage.openAboutYou();
});

When(/^I click on "Lista Favorite" button$/, async function () {
  await HomePage.clickButton();
});
