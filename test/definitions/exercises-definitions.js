import { When } from '@wdio/cucumber-framework';
import Exercises from '../pageobjects/exercises.js';
import Generic from '../pageobjects/generic.js';
When(/^I run exercices$/, function () {
  Exercises.sliceStringExercises();
  Exercises.subStringExercises();
});

When(
  /^I define ziua as "([^"]*)" and vreme as "([^"]*)"$/,
  function (ziua, vreme) {
    Exercises.secondIfExercise(ziua, vreme);
  }
);

When(/^The car brand is "([^"]*)"$/, function (car) {
  Exercises.carBrand(car);
});

When(/^I run arrayExercices$/, function () {
  Exercises.arrayExercises();
});

When(/^I declareArraysVariables$/, function () {
  Exercises.declareArraysVariables();
});

When(/^I execute sortMethod$/, function () {
  Exercises.sortExercise();
});

When(/^I execute callReturn$/, function () {
  Exercises.callReturn();
});

When(/^The number is I want to see$/, function () {
  Exercises.numberType();
});

When(/^Execute for function$/, function () {
  Exercises.forExercise();
});

When(/^Execute while function$/, function () {
  Exercises.whileExercise();
});

When(/^I print numbers from 1 to 100$/, function () {
  Exercises.whilePrintNumbers();
});

When(/^I calculate the sum of numbers from 1 to 100$/, function () {
  Exercises.whileSumNumbers();
});

When(/^I count down from 1 to 10$/, function () {
  Exercises.whileCountDown();
});

When(/^I verify if a number is prime$/, function () {
  Exercises.findPrimeNumbers();
});

When(/^I try to learn switch statement$/, function () {
  Exercises.switchStatement();
});
