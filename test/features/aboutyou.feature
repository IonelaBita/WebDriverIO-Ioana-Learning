Feature: Homepage

  @aboutyou 
  Scenario: Open AboutYou, switch language, close cookie banner and verify that the men and women buttons from the header work
    Given I open the "https://www.aboutyou.com/magazinul-tau" site
    # The site automatically redirects us to .ro, so we change it to .com
    When I click on the "aboutYouCountryButton"
    And I click on the "aboutYouCountryDropdown"
    And I click on the "aboutYouWorldwideLanguage"
    And I click on the "aboutYouConfirmCountrySwitch"
    # Close Cookie Banner
    And I click on the "aboutYouCookieBannerOkButton"
    # Click on the Women button in the header to verify the URL changes
    And I click on the "aboutYouWomenHeaderButton"
    Then I verify that the URL is "https://www.aboutyou.com/?gender=female"
    # Click on the Men button in the header to verify the URL changes
    When I click on the "aboutYouMenHeaderButton"
    Then I verify that the URL is "https://www.aboutyou.com/?gender=male"
    # Click to the Women button, go to the clothing drop-down, then click to the dresses categories, filter by size S and red color, add a dress to the basket and then check that the confirmation message is displayed.
    When I click on the "aboutYouWomenHeaderButton"
    And I click on the "aboutYouClothingDropdown"
    And I click on the "aboutYouClothingDropdownDresses"
    And I click on the "aboutYouFilterSize"
    And I click on the "aboutYouFilterSizeS"
    And I click on the "aboutYouFilterColor"
    And I click on the "aboutYouFilterColorRed"
    And I click on the "aboutYouRandomClickForDissapearColorFilter"
    And I click on the "aboutYouGoToBasket"
    And I click on the "aboutYouAddToBasket"
    Then I validate that the "aboutYouConfirmationMessage" is: "Successfully added to your basket!"

    @hotels
  Scenario: Opens hotels.com and close cookie banner and, then sign in and validate the sign in
    Given I open the "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025" site
    When I click on the "Hotels Accept All Button"
    When I wait for "1" seconds
    ## Here we signin with Ioana Bita account and I validate that we are logged in
    When I click on the "Hotels Sign In Menu"
    When I click on the "Hotels Sign In Button"
    And I fill in the "Hotels Email Text Box" with: "ioanabita47@gmail.com"
    When I click on the "Hotels Continue Button"
    When I click on the "Hotels Enter Password Instead Button"
    And I fill in the "Hotels Password Text Box" with: "IoanaBita1!"
    When I click on the "Hotels Sign In Button From Password"
    Then I validate that the "Hotels Confirm Account" is: "Ioana"
    ## Here we enter a random destination from a list
    When I click on the "Hotels Going To Field"
    When I find the selector "Hotels Destination Field" and I insert the destination
    When I wait for "1" seconds
    When I click on the "Hotels Destination First Result"
    ## Here we set the desired number of travelers by increasing or decreasing the number
    When I click on the "Hotels Travelers Button"
    When I set the travelers count to "1"
    # When I find the "Hotels Increase Number Children" and I set the children traveler count to "1"
    # And I click on the "Hotels Child Age Option"
    When I click on the "Hotels Traveler Done Button"
    And I click on the "Hotels Search Button"
    ## Here we choose a random hotel from the search results and then we validate that the randomly chosen hotel matches with the hotel name from the details page
    When I choose a random hotel from the hotel search results list
    When I switch to tab "2"
    When I validate that the name of the randomly chosen hotel matches the name from the hotel details page
    ## Here we choose a random room from the hotel
    When I choose a random room from the hotel
    ## Here we validate the autocompleted fields and the required fields with the details neded for complete the reservation
    Then I verify the "Hotels First Name Text Box" to be autocompleted with: "Ioana" and then I delete it
    When I fill in the "Hotels First Name Text Box" with: "Brad"
    Then I verify the "Hotels Last Name Text Box" to be autocompleted with: "Bita" and then I delete it
    When I fill in the "Hotels Last Name Text Box" with: "Pit"
    Then I verify the "Hotels Email Address Text Box" to be autocompleted with: "ioanabita47@gmail.com" and then I delete it
    When I fill in the "Hotels Email Address Text Box" with: "pitti@gmail.com"
    And I fill in the "Hotels Phone Number Text Box" with: "0712345678"
    And I fill in the "Hotels Payment Details Card Number Text Box" with: "5271764004134104"
    And I fill in the "Hotels Payment Details Expiry Month Text Box" with: "07"
    And I fill in the "Hotels Payment Details Expiry Year Text Box" with: "25"
    And I fill in the "Hotels Payment Details CVV Text Box" with: "123"
    ## Here we validate the matching of the randomly chosen room with the room name from the payment details
    Then I validate that the name of the randomly room chosen hotel matches the name from the hotel payment details
    ## Here we continue with the reservation of the room and then we check the error messages that should be displayed for transaction declined
    When I click on the "Hotels Payment Details Book Button"
    Then I validate that the "Hotels Error Message Transaction Declined" with failed transaction is displayed "Sorry, "
    Then I validate that the "Hotels Payment Details CVV Text Box" is: ""
    Then I validate that the "Hotels CVV Payment Details Error Message" is: "Please re-enter your three-digit card security code. This is the last three digits on the signature strip on the back of your card."
    When I fill in the "Hotels Payment Details CVV Text Box" with: "123"
    And I click on the "Hotels Payment Details Expiry Month Text Box"
    Then I validate that the "Hotels CVV Payment Details Error Message" is: ""