import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/homepage.js';
import Generic from '../pageobjects/generic.js';

Given(/^I open the "([^"]*)" site$/, async function (sit) {
  await HomePage.openSite(sit);
});

When(/^I click on the "([^"]*)"$/, async function (element) {
  await HomePage.clickElement(element);
});

Then(/^I verify that the URL is "([^"]*)"$/, async function (url) {
  await HomePage.verifyUrlValue(url);
});

Then(
  /^I validate that the "([^"]*)" is: "([^"]*)"$/,
  async function (element, expectedText) {
    await HomePage.verifyText(element, expectedText);
  }
);

When(
  /^I fill in the "([^"]*)" with: "([^"]*)"$/,
  async function (element, text) {
    await HomePage.writeTextInField(element, text);
  }
);

When(
  /^I find the selector "([^"]*)" and I insert the destination$/,
  async function (element) {
    await HomePage.chooseDestination(element);
  }
);

When(/^I wait for "([^"]*)" seconds$/, async function (seconds) {
  await Generic.waitSetAmount(seconds);
});

When(
  /^I find the "([^"]*)" and I set the children traveler count to "([^"]*)"$/,
  async function (element, count) {
    await HomePage.countChildrenTravelers(element, count);
  }
);

When(/^I set the travelers count to "([^"]*)"$/, async function (desiredCount) {
  await HomePage.increaseOrDecreaseValue(desiredCount);
});

When(
  /^I choose a random hotel from the hotel search results list$/,
  async function () {
    await HomePage.chooseRandomHotel();
  }
);

When(
  /^I validate that the name of the randomly chosen hotel matches the name from the hotel details page$/,
  async function () {
    await HomePage.validateRandomlyChosenHotelName();
  }
);

When(/^I switch to tab "([^"]*)"$/, async function (desiredTab) {
  await HomePage.switchTab(desiredTab);
});

When(/^I choose a random room from the hotel$/, async function () {
  await HomePage.chooseRandomRoom();
});

When(/^I select an option with a specific value$/, async function () {
  await HomePage.selectOption();
});

Then(
  /^I validate that the name of the randomly room chosen hotel matches the name from the hotel payment details$/,
  async function () {
    await HomePage.learnChaiExpect();
  }
);

Then(
  /^I validate that the "([^"]*)" with failed transaction is displayed "([^"]*)"$/,
  async function (element, expectedText) {
    await HomePage.validateErrorMessage(element, expectedText);
  }
);

Then(
  /^I verify the "([^"]*)" to be autocompleted with: "([^"]*)" and then I delete it$/,
  async function (element, text) {
    await HomePage.verifyTheAutocompleteTextBoxes(element, text);
  }
);
