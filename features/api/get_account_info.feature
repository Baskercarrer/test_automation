@api
Feature: Test API
  Verfies the response body

  Scenario: Verify Test API details
    Given the parabank rest api
    When client send GET request: '/accounts/18339'
    Then response status should be successfull
