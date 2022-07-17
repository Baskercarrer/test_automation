@api
Feature: Test API
  Verfies the response body

  Scenario: Verify Test API details
    Given the parabank rest api
    When client send GET request: '/accounts/45756'
    Then response status should be successfull
