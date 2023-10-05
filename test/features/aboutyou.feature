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
  Scenario: Opens hotels.com and click on Accept All button for the Cookie Banner, then signin to your account 
    Given I open the "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025" site
    When I click on the "Hotels Accept All Button"

    # Here we signin with Ioana Bita
    # When I click on the "Hotels Sign In Menu"
    # When I click on the "Hotels Sign In Button"
    # And I fill in the "Hotels Email Text Box" with: "ioanabita47@gmail.com"
    # When I click on the "Hotels Continue Button"
    # When I click on the "Hotels Enter Password Instead Button"
    # And I fill in the "Hotels Password Text Box" with: "IoanaBita1!"
    # When I click on the "Hotels Sign In Button From Password"
    # Then I validate that the "Hotels Confirm Account" is: "Ioana"
    # When I click on the "Hotels Destination Button"
    # When I find the selector "Hotels Destination Field" and I insert the destination
    # When I click on the "Hotels Destination First Result"

    When I click on the "Hotels Travelers Button"
    When I set the travelers count to "8"
    When I wait for "3" seconds
    # When I set the travelers count to "5"
    # When I wait for "3" seconds
    # When I set the travelers count to "8"
    # When I wait for "3" seconds
    # When I set the travelers count to "1"
    # When I wait for "3" seconds
    # When I set the travelers count to "14"
    # When I wait for "3" seconds
    # When I set the travelers count to "9"
    # When I wait for "3" seconds
    # When I set the travelers count to "13"
    # When I wait for "3" seconds
    # When I set the travelers count to "2"
    # When I wait for "3" seconds
    # When I set the travelers count to "1"
    # When I wait for "3" seconds
    # When I set the travelers count to "8"
    # When I set the travelers count to "1"
    # When I find the "Hotels Increase Number Adults" and I set the adults traveler increase to "5"
    # When I find the "Hotels Decrease Number Adults" and I set the adults traveler decrease to "1"
    # When I find the "Hotels Increase Number Children" and I set the children traveler count to "1"
    # # And I click on the "Hotels Child Age Option"
    # # When I click on the "Hotels Traveler Done Button"
    # And I click on the "Hotels Search Button"
    # When I wait for "3" seconds