@ui
Feature: Login Functionality

Business Need: In order to access banking services with user identity

  Scenario: Verify login functionality with valid credentials
    Given the homepage
    When user login with valid credentials
    Then account overview page should display


