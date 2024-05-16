Feature: Login
    As a client
    I want to login on application
    So I can place a purchase order 

Scenario: Login with empty e-mail field
    Given I am on login screen
    When I click on login
    Then I see the message "E-mail inválido."

Scenario: Login with empty password field
    Given I am on login screen
    And I fill e-mail 
    When I click on login
    Then I see the message "Senha inválida."

Scenario: Successful login
    Given I am on login screen
    And I fill my credentials 
    When I click on login
    Then I see the success message