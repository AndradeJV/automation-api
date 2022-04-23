/// <reference types="cypress" />


class Authors {
    getAllAuthors(){
        return cy.request({
            method: 'GET',
            url: 'Authors',
            failOnStatusCode: false
        });
    }

    postAAuthor(payload){
        return cy.request({
            method: 'POST',
            url: 'Authors',
            failOnStatusCode: false,
            body: payload
        });
    }

    getBookOfAuthors(idBook){
        return cy.request({
            method: 'GET',
            url: `Authors/authors/books/${idBook}`,
            failOnStatusCode: false
        });
    }

    getAuthor(idAuthor){
        return cy.request({
            method: 'GET',
            url: `Authors/${idAuthor}`,
            failOnStatusCode: false
        });
    }

    putAAuthor(idAuthor, payload){
        return cy.request({
            method: 'PUT',
            url: `Authors/${idAuthor}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    deleteAAuthor(idAuthor){
        return cy.request({
            method: 'DELETE',
            url: `Authors/${idAuthor}`,
            failOnStatusCode: false
        });
    }
}


export default new Authors;