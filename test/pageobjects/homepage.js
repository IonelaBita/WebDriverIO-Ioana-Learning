import { expect as chaiExpect } from 'chai';

let chosenHotelTitleExpectedText;
let chosenRoomHotelTitleExpectedText;
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
      hotels_going_to_field: "[aria-label='Going to']",
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
      hotels_reserve_room_button: "[data-stid='submit-hotel-reserve']",
      hotels_first_name_text_box: "[id='room-details-room-0-first-name']",
      hotels_last_name_text_box: "[id='room-details-room-0-last-name']",
      hotels_email_address_text_box: "[id='contact-details-email']",
      hotels_phone_number_text_box: "[id='contact-details-phone']",
      hotels_payment_details_first_name_text_box:
        "[id='payment-details-first-name']",
      hotels_payment_details_last_name_text_box:
        "[id='payment-details-last-name']",
      hotels_payment_details_card_number_text_box:
        "[id='payment-details-card-number']",
      hotels_payment_details_expiry_month_text_box: "[id='expiry-month']",
      hotels_payment_details_expiry_year_text_box: "[id='expiry-year']",
      hotels_payment_details_cvv_text_box: "[id='payment-details-cvv']",
      hotels_payment_details_book_button: "[id='book-button']",
      hotels_declined_payment_error_message: '#main-box>div>div.msg',
      hotels_cvv_payment_details_error_message:
        "[id='cvv-field-container'] [data-for='payment-details-cvv'] >span",
      // next three search fields selectors are just for an particular test (after that I will delete it)
      hotels_search_field_button:
        "[class='uitk-field has-floatedLabel-label has-icon'] button[class='uitk-fake-input uitk-form-field-trigger']",
      hotels_search_field: "[placeholder*='e.g.']",
      hotels_search_field_first_result: "[data-index='0'] button",
      hotels_error_message_transaction_declined:
        "[id='main-box'] [class*='msg bdra-big  bdc-error']",
    }[formattedElement]; // for using the value of a property of this object, we specify the parameter in definitions file with his value in feature file folder
  }

  async openSite(site) {
    await browser.url(site);
  }

  /**
   * This function receives one parameter and its value comes from the feature file step
   * @param {string} element, indicating the selector that will be used, e.g. 'aboutYouCookieBannerOkButton', 'asd'
   */
  async clickElement(element) {
    let selector = this.obtainSelector(element); // here, we call this function to obtain the desired selector
    await $(selector).waitForDisplayed({ timeout: 5000 });
    await $(selector).waitForClickable({ timeout: 5000 });
    await $(selector).click(); // "$": is used for finding one element, "$$": is used for finding more than one element
  }

  async verifyUrlValue(url) {
    await expect(browser).toHaveUrl(url);
  }

  async verifyText(element, expectedText) {
    let selector = this.obtainSelector(element);
    await $(selector).waitForDisplayed();
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
      'Abu Dhabi',
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
    console.log(`>>>>>> Destination is: ${destination}`);
    await $(selector).waitForDisplayed();
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

  async chooseRandomHotel() {
    await $("section [aria-label='Loading']").waitForDisplayed();
    await $("section [aria-label='Loading']").waitForDisplayed({
      reverse: true,
    });
    let hotelResults = await $$(
      "[data-stid='property-listing-results'] >div[class*='margin'] a[data-stid='open-hotel-information']"
    );

    let hotelNames = await $$(
      "[data-stid='property-listing-results'] >div[class*='margin'] h3[class*=' overflow-wrap']"
    );
    console.log(`The hotel Names list length is: ${hotelNames.length}`);

    let randomIndex = Math.floor(Math.random() * hotelResults.length);

    console.log(`The hotel list length is: ${hotelResults.length}`);
    console.log(`The randomindex is: ${randomIndex}`);
    chosenHotelTitleExpectedText = await hotelNames[randomIndex].getText();
    console.log(
      `>>>>>>>>> Before click, destination is: ${chosenHotelTitleExpectedText}`
    );
    await hotelResults[randomIndex].click();
  }

  async validateRandomlyChosenHotelName() {
    let actualHotelNameSelector = await $("[class*='uitk-heading-3']");
    await expect(actualHotelNameSelector).toHaveText(
      chosenHotelTitleExpectedText
    ); // chosenHotelTitleExpectedText (is global variabile)
    // left:selector(actual result), right:text(expected result)
  }

  async switchTab(desiredTab) {
    let tabHandle = await browser.getWindowHandles();
    console.log(`>>>>>>>> Tab handles: ${tabHandle}`);
    console.log(`>>>>>>>> We want tab number: ${desiredTab}`);
    console.log(`>>>>>>>> Tab number 2 is at index 1 in the array`);
    console.log(`>>>>>>>> We obtain index 1 by substracting 1 from desiredTab`);
    console.log(
      `>>>>>>>> The tab handle at index 1 is: ${tabHandle[desiredTab - 1]}`
    );
    await browser.switchToWindow(tabHandle[desiredTab - 1]);
    console.log(`We switched to tab number ${desiredTab}`);
  }

  async chooseRandomRoom() {
    await $('[class*="uitk-skeleton-block-square"]').waitForExist({
      reverse: true,
    });
    let roomResults = await $$(
      "div[class*='uitk-layout-flex']>div>[data-stid='submit-hotel-reserve'], [data-stid='see-options-dialog']"
    );
    let roomHotelNames = await $$("[class='uitk-heading uitk-heading-6']");
    let roomRandomIndex = Math.floor(Math.random() * roomResults.length);
    console.log(`The room list length is: ${await roomResults.length}`);
    console.log(`The room random index is: ${roomRandomIndex}`);
    console.log(
      `>>>>> roomResults[romRandomIndex] ${roomResults[roomRandomIndex]}`
    );
    chosenRoomHotelTitleExpectedText = await roomHotelNames[
      roomRandomIndex
    ].getText();
    console.log(
      `>>>>>>>>> Before click, the chosen room is: ${chosenRoomHotelTitleExpectedText}`
    );
    await roomResults[roomRandomIndex].click();
    this.confirmRoomSelection();
  }

  async confirmRoomSelection() {
    let displayPaymentOptions = await $(
      "[data-stid='payment-option-PAY_NOW'] [data-stid='submit-hotel-reserve']"
    );
    let displayCustomizeYourStay = await $(
      "section[role='dialog'] [class*='uitk-layout'] > div >button[data-stid='submit-hotel-reserve']"
    );
    if (await displayPaymentOptions.isExisting()) {
      await displayPaymentOptions.click();
    } else if (await displayCustomizeYourStay.isExisting()) {
      await displayCustomizeYourStay.click();
      if (await displayPaymentOptions.isDisplayed()) {
        await displayPaymentOptions.click();
      }
    }
  }

  async validateRandomlyChosenRoomHotelName() {
    let roomHotelNameSelector = await $("p[class='room-type-name']");
    let readRoomHotelNameSelector = await roomHotelNameSelector.getText();
    let readRoomHotelNameSelectorFormatted = readRoomHotelNameSelector.replace(
      /[.]/g,
      ''
    );
    expect(
      chosenRoomHotelTitleExpectedText.startsWith(
        readRoomHotelNameSelectorFormatted
      )
    ).toBe(true);
  }

  //same with validateRandomlyChosenRoomHotelName()
  async learnChaiExpect() {
    let roomHotelNameSelector = await $("p[class='room-type-name']");
    let readRoomHotelNameSelector = await roomHotelNameSelector.getText();
    let final = readRoomHotelNameSelector.replace(/[.]/g, '');
    console.log(final);
    chaiExpect(chosenRoomHotelTitleExpectedText).to.include(final);
  }

  async verifyTheAutocompleteTextBoxes(element, text) {
    let selector = this.obtainSelector(element);
    console.log(`Get Value: ${await $(selector).getValue()}`);
    await expect(await $(selector)).toHaveValue(text);
    await $(selector).clearValue();
  }

  async validateErrorMessage(element, expectedText) {
    let selector = this.obtainSelector(element);
    await expect($(selector)).toHaveTextContaining(expectedText);
    console.log(
      `>>>>> The displayed error message is: ${await $(selector).getText()}`
    );
  }
}
export default new HomePage();
