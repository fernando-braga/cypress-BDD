/// <reference types="cypress" />

export default{
    accessRegisterPage() {
        cy.visit('/')
        .get('#top_header');

        cy.get('.fa-lock').click();

    },

    fillName() {
        cy.get('#user').type('Fernando');
    },

    fillInvalidEmail() {
        cy.get('#email').type('fernando@');
    },

    fillEmail(){
        cy.get('#email').type('fernando@gmail.com');
    },

    fillInvalidPassword() {
        cy.get('#password').type('123');
    },

    fillTheCredentials() {
        cy.get('#user').type('Fernando');
        cy.get('#email').type('fernando@gmail.com');
        cy.get('#password').type('123456');
    },

    clickOnRegisterBtn() {
        cy.get('#btnRegister').click();
    },

    verifyErrorMessage(message) {
        cy.get('#errorMessageFirstName')
        .should('have.text', message )
    },

    verifySuccessMessage(){
        nome = 'Fernando';
        cy.get('#swal2-title').should('be.visible').contains('Cadastro realizado!');
        cy.get('.swal2-popup').contains(`Bem-vindo ${nome}`);
    }
}