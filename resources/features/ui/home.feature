@ui
Feature: Home page

Business Need: As a user I want check my home page behaviour

  Scenario: Home page logo details
    When user loads home page
    Then logo should exists

  Scenario: Check product count using search
    Given the homepage
    When user search for watch
    Then count of watch should be 9


