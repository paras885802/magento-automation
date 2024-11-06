Feature: User Sign Up

  Scenario: Successful sign-up and login
    Given the user is on the signup page
    When the user enters valid sign-up details
    And submits the form
    Then the user account should be created successfully
    When Logout as a user
    When verify user logut
    And the user should be able to log in with the new account