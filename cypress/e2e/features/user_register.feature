Feature: Register User
    As a client
    I want to register on application
    So I can place a purchase order

Scenario: Empty name field
    Given I am on register screen
    When I click on Register
    Then I see the error message "O campo nome deve ser prenchido"

Scenario: Empty e-mail field
    Given I am on register screen
    And I fill name
    When I click on Register
    Then I see the error message "O campo e-mail deve ser prenchido corretamente"

Scenario: Invalid e-mail
    Given I am on register screen
    And I fill name
    And I fill invalid e-mail 
    When I click on Register
    Then I see the error message "O campo e-mail deve ser prenchido corretamente"

Scenario: Empty password field
    Given I am on register screen
    And I fill name
    And I fill my e-mail 
    When I click on Register
    Then I see the error message "O campo senha deve ter pelo menos 6 dígitos"

Scenario: Invalid password
    Given I am on register screen
    And I fill name
    And I fill my e-mail 
    And I fill invalid password 
    When I click on Register
    Then I see the error message "O campo senha deve ter pelo menos 6 dígitos"

Scenario: Successfully register
    Given I am on register screen
    And I fill the credentials
    When I click on Register
    Then I see the success message on register