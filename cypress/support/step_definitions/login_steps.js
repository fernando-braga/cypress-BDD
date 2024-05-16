import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import login_page from "../pages/login_page";

const email = 'fernando@gmail.com';

Given("I am on login screen", () => {
    home_page.accessLogin();
});

Given("I fill e-mail", () => {
    login_page.fillEmail(email);

});

Given("I fill my credentials", () => {
    login_page.fillEmail(email);
    login_page.fillPassword('123456');
});

When("I click on login", () => {
    login_page.doLogin();
});

Then("I see the message {string}", (message) => {
    login_page.checkErrorMessage(message)
});

Then("I see the success message", () => {
    login_page.checkSuccessMessage(email);
});
