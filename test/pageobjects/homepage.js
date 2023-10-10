class HomePage {
  obtainSelector(element) {
    let formattedElement = element.toLowerCase().replace(/ /g, '_');
    // console.log(`>>> the element is: ${formattedElement}`);
    // console.log(`>>> the element is: ${formattedElement}`);
    //here is a return method with an object
    return {
      about_you_cookie_banner_ok_button: "[id='onetrust-accept-btn-handler']",
      about_you_women_header_button: "[data-testid='genderSwitch-1']",
      about_you_men_header_button: "[data-testid='genderSwitch-2']",
      about_you_country_button: "[data-testid='languageCountrySwitch']",
      about_you_country_dropdown:
        "[data-testid='languageCountrySwitchCountriesOpener']",
      about_you_worldwide_language:
        "[data-testid='languageCountrySwitchCountry-Worldwide']",
      about_you_confirm_country_switch:
        "[data-testid='countrySwitchCurrentCountry']",
      about_you_clothing_dropdown: "[data-testid='Label_Clothing']",
      about_you_clothing_dropdown_dresses:
        "[href='/c/women/clothing/dresses-20236']",
      about_you_filter_size: "[data-testid='filterDropdownSizeGrouped']",
      about_you_filter_size_s: "[data-testid='filterSize_39090']",
      about_you_filter_color: "[data-testid='filterDropdownColor']",
      about_you_filter_color_red:
        "[data-testid='filterFlyoutColorCheckbox-38931']",
      about_you_random_click_for_dissapear_color_filter:
        "[data-testid='USP_Banner_Content']",
      about_you_go_to_basket: "[data-testid*='productTileTracker']",
      about_you_add_to_basket: "[data-testid='addToBasketButton']",
      about_you_confirmation_message: "//span[contains(text(),'your basket!')]",
      // hotels.com selectors
      hotels_accept_all_button: "[class*='accept-all']",
      hotels_sign_in_menu: "[id='gc-custom-header-nav-bar-acct-menu']",
      hotels_sign_in_button: "[data-stid='link-header-account-signin']",
      hotels_sign_in_with_google: "[id='social-auth-provider-google-web']",
      hotels_email_text_box: "[id='loginFormEmailInput']",
      hotels_continue_button: "[id='loginFormSubmitButton']",
      hotels_enter_password_instead_button: "[id='passwordButton']",
      hotels_password_text_box: "[id='enterPasswordFormPasswordInput']",
      hotels_sign_in_button_from_password:
        "[id='enterPasswordFormSubmitButton']",
      hotels_confirm_account: "//button[contains(text(), 'Ioana')]",
      hotels_destination_button: "[aria-label='Going to']",
      hotels_destination_field:
        "[data-stid='destination_form_field-menu-input']",
      hotels_destination_first_result:
        "[data-stid='destination_form_field-results'] >:first-child button",
      hotels_travelers_button: "[data-stid='open-room-picker']",
      hotels_increase_number_adults:
        "[type='button'] svg[aria-label='Increase the number of adults in room 1']",
      hotels_decrease_number_adults:
        "[type='button'] svg[aria-label='Decrease the number of adults in room 1']",
      hotels_input_adults: "[id='traveler_selector_adult_step_input-0']",
      hotels_decrease_number_children:
        "[aria-label='Decrease the number of children in room 1']",
      hotels_increase_number_children:
        "[aria-label='Increase the number of children in room 1']",
      hotels_traveler_done_button: "[id='traveler_selector_done_button']",
      hotels_search_button: "[id='search_button']",
      hotels_child_age_option:
        "[id='age-traveler_selector_children_age_selector-0-0'] :nth-child(2)",
    }[formattedElement]; // for using the value of a property of this object, we specify the parameter in definitions file with his value in feature file folder
  }

  async openSite(site) {
    await browser.url(site);
    await browser.pause(3000);
  }

  /**
   * This function receives one parameter and its value comes from the feature file step
   * @param {string} element, indicating the selector that will be used, e.g. 'aboutYouCookieBannerOkButton', 'asd'
   */
  async clickElement(element) {
    let selector = this.obtainSelector(element); // here, we call this function to obtain the desired selector

    await $(selector).click(); // $ sign is used for finding elements
    await browser.pause(500);
  }

  async verifyUrlValue(url) {
    await expect(browser).toHaveUrl(url);
  }

  async verifyText(element, expectedText) {
    let selector = this.obtainSelector(element);
    await expect($(selector)).toHaveText(expectedText);
  }

  async writeTextInField(element, text) {
    let selector = this.obtainSelector(element);
    await $(selector).addValue(text);
    await browser.pause(500);
  }

  arrays() {
    let destinations = [
      'Amsterdam',
      'Abu Daby',
      'Antalya',
      'Athens',
      'Alicante',
    ];
    let destinationsToBeRandom =
      destinations[Math.floor(Math.random() * destinations.length)];
    return destinationsToBeRandom;
  }

  async chooseDestination(element) {
    let selector = this.obtainSelector(element);
    let destination = this.arrays();
    await $(selector).addValue(destination);
  }

  async increaseOrDecreaseValue(desiredCount) {
    desiredCount = parseInt(desiredCount); // parseInt() for convert string to number
    if (desiredCount <= 0 || desiredCount > 14) {
      throw new Error(`Please set a value between 1 to 14`);
    }

    let currentCount = parseInt(
      await $("[id='traveler_selector_adult_step_input-0']").getValue()
    );

    if (currentCount < desiredCount) {
      await this.countIncreaseAdultsTravelers(currentCount, desiredCount);
    } else if (currentCount > desiredCount) {
      await this.countDecreaseAdultsTravelers(currentCount, desiredCount);
    }
  }

  async countIncreaseAdultsTravelers(currentCount, desiredCount) {
    for (currentCount; currentCount < desiredCount; currentCount++) {
      await $('div:nth-child(2) > div > div > button:nth-child(3)').click();
      browser.pause(200);
    }
  }

  async countDecreaseAdultsTravelers(currentCount, desiredCount) {
    for (currentCount; currentCount > desiredCount; currentCount--) {
      await $('div:nth-child(2) > div > div > button:nth-child(1)').click();
      browser.pause(200);
    }
  }

  async countChildrenTravelers(element, count) {
    for (let i = 0; i < count; i++) {
      let selector = this.obtainSelector(element);
      await $(selector).click();
    }
  }
}

export default new HomePage();
