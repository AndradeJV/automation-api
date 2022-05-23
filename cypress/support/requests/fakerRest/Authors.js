/// <reference types="cypress" />


class Authors {
    getAllAuthors(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerRestApi')}/Authors`,
            failOnStatusCode: false
        });
    }

    postAAuthor(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('fakerRestApi')}/Authors`,
            failOnStatusCode: false,
            body: payload
        });
    }

    getBookOfAuthors(idBook){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerRestApi')}/Authors/authors/books/${idBook}`,
            failOnStatusCode: false
        });
    }

    getAuthor(idAuthor){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerRestApi')}/Authors/${idAuthor}`,
            failOnStatusCode: false
        });
    }

    putAAuthor(idAuthor, payload){
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('fakerRestApi')}/Authors/${idAuthor}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    deleteAAuthor(idAuthor){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('fakerRestApi')}/Authors/${idAuthor}`,
            failOnStatusCode: false
        });
    }
}


export default new Authors;