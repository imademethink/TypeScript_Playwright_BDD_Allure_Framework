Feature: User Authentication
  As a registered user
  I want to log into the application
  So that I can access my dashboard

  @smoke
  Scenario: Successful Login with Valid Credentials
    Given I navigate to the login page
    When I enter valid username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory dashboard
