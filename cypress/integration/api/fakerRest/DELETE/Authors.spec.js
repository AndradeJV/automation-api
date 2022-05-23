import Authors from "../../../../support/requests/fakerRest/Authors";
const payload = require("../../../../fixtures/api/fakerRest/Authors/DELETE/deleteAuthor.json");


describe("DELETE - Endpoint Authors", () => {
    it("Return with success delete in endpoint", () => {
        Authors.deleteAAuthor(payload.success.id).should(response => {
            expect(response.status).to.eq(payload.success.statusCode);
        });
    });
})