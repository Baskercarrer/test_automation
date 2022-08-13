@ui
Feature: Account Overview

Business Need: In order to access the account

  Scenario: Check account details
    Given account overview page
    When user clicks on account number
    Then account details page should display


