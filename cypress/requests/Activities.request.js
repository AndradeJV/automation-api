/// <reference types="cypress" />


class Activities {
    getAllActivities(){
        return cy.request({
            method: 'GET',
            url: 'Activities',
            failOnStatusCode: false 
        });
    }

    getActivity(idActivity){
        return cy.request({
            method: 'GET',
            url: `Activities/${idActivity}`,
            failOnStatusCode: false
        });
    }

    postActivities(payload){
        return cy.request({
            method: 'POST',
            url: 'Activities',
            failOnStatusCode: false,
            body: payload
        });
    }

    putActivities(idActivities, payload){
        return cy.request({
            method: 'PUT',
            url: `Activities/${idActivities}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    deleteActivities(idActivities){
        return cy.request({
            method: 'DELETE',
            url: `Activities/${idActivities}`,
            failOnStatusCode: false,
        });
    }
}


export default new Activities;