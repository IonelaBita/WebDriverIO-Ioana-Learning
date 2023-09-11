import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/homepage.js';

Given(/^I open the aboutyou site$/, async function () {  
    await HomePage.openAboutYou();
  });

Given(/^I open the Google site$/, async function () {
    await HomePage.openGoogle();
  });

Given(/^I click on "Lista Favorite" button$/, async function () {
    await HomePage.clickButton();
  });

