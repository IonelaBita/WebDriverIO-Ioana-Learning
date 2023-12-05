import { When } from '@wdio/cucumber-framework';
import ApiExercises from '../pageobjects/api-exercises.js';

When(
  /^I send an API request to "([^"]*)", the expected response should be "([^"]*)"$/,
  async function (path, expectedStatus) {
    await ApiExercises.getDummyUsers(path, expectedStatus);
  }
);

When(
  /^I send an GET request to "([^"]*)" with "([^"]*)"$/,
  async function (endPoint, pathId) {
    await ApiExercises.getMethod(endPoint, pathId);
  }
);

When(
  /^I send a request with the following parameters:$/,
  async function (dataTable) {
    let requestData = dataTable.rowsHash();
    await ApiExercises.sendRequest(requestData);
  }
);

When(/^I update an user, return updated user data$/, async function () {
  await ApiExercises.putMethod();
});
