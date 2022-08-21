@ui
Feature: Men Caetegory

Business Need: As a user I want gender based categories

    Scenario: Check category title
        Given the homepage
        When user navigate to men category
        Then page title should be Men