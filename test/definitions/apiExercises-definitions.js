import { When } from '@wdio/cucumber-framework';
import apiExercises from '../pageobjects/apiExercises';

When(/^I make the API request$/, function () {
  apiExercises.getDummyUsers();
});
