/// <reference types="cypress" />


class BookStore {
    getBookStore(){
        cy.request({
            method: 'GET',
            url: `${Cypress.env('bookStoreApi')}/BookStore/v1/Books`,
            failOnStatusCode: false
        });
    }

    postBookStore(payload){
        cy.request({
            method: 'POST',
            url: `${Cypress.env('bookStoreApi')}/BookStore/v1/Books`,
            failOnStatusCode: false,
            body: payload
        });
    }

    deleteBookStore(id){
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env('bookStoreApi')}/BookStore/v1/Books`,
            failOnStatusCode: false,
            body: id
        })
    }

    putBookStore(isbn, payload){
        cy.request({
            method: 'PUT',
            url: `${Cypress.env('bookStoreApi')}//BookStore/v1/Books/${isbn}`,
            failOnStatusCode: false,
            body: payload
        })
    }
}


export default new BookStore;