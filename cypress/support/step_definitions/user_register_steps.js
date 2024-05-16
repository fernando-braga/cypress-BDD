/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import user_register_page from "../pages/user_register_page";


Given("I am on register screen", () => { 
    user_register_page.accessRegisterPage();
}); 

Given("I fill name", () => {
    user_register_page.fillName();
});

Given("I fill invalid e-mail", () => {
    user_register_page.fillInvalidEmail();
});

Given("I fill my e-mail", () => {
    user_register_page.fillEmail();
});

Given("I fill invalid password", () => {
    user_register_page.fillInvalidPassword();
});

Given("I fill the credentials", () => {
    user_register_page.fillTheCredentials();
});

When("I click on Register", () => {
    user_register_page.clickOnRegisterBtn();
});

Then("I see the error message {string}", (message) => { 
    user_register_page.verifyErrorMessage(message);
}); 

Then("I see the success message on register", () => {
    user_register_page.verifySuccessMessage();
});