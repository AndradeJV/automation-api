/// <reference types="cypress" />


class Activities {
    getAllActivities(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerRestApi')}/Activities`,
            failOnStatusCode: false 
        });
    }

    getActivity(idActivity){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerRestApi')}/Activities/${idActivity}`,
            failOnStatusCode: false
        });
    }

    postActivities(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('fakerRestApi')}/Activities`,
            failOnStatusCode: false,
            body: payload
        });
    }

    putActivities(idActivities, payload){
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('fakerRestApi')}/Activities/${idActivities}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    deleteActivities(idActivities){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('fakerRestApi')}/Activities/${idActivities}`,
            failOnStatusCode: false,
        });
    }
}


export default new Activities;