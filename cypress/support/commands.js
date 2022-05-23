Cypress.Commands.add("waitTime", time => {
    let result = time * 1000;

    cy.wait(result);
});