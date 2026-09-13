Feature: Home page validation part 2

  Background: User registration common
    Given User registration is successful

  @CucumberWithBackground
  Scenario: Registration Flow Validation
    When User initiate New Account Opening
    Then New Account Opening should be successful

  @MultipleScenario
  Scenario Outline: Transfer Flow Validation
    When User initiate New Account Opening
    When User initiate Fund Transfer "<TransferAmount>"
    Then Fund Transfer should be successful
    Examples:
      | TransferAmount |
      | 20             |
      | 30             |
