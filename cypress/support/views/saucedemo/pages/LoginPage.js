/// <reference types="cypress" />


class LoginPage {
    // Ir para página
    goToPage(){
        cy.visit(`${Cypress.env('saucedemoWeb')}`);
    }

    // Escrever o nome do usuário
    writeUser(user){
        cy.get("user-name").type(user);
    }

    // Escrever a senha
    writePassword(password){
        cy.get("password").type(password);
    }

    // Clicar no botão de Login
    clickButtonSubmit(){
        cy.get("login-button").click();
    }

    // Login com usuário padrão
    loginDefault(){
        this.writeUser("standard_user");
        this.writePassword("secret_sauce");
        this.clickButtonSubmit();
    }
}


export default new LoginPage;