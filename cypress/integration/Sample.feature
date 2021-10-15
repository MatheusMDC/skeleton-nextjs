Feature: Sample async autocomplete input

  I want to test open the autocomplete input

  @sample
  Scenario: Open component page and set value to input
    Given The buyier api is mocked
    And I visit the url "http://localhost:3000/negociacao"
    When I see the path "/negociacao" on the url
    And I write the value "mock" on the async autocomplete
    Then The async input should display the value "Mock Mock"