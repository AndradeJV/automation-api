import Authors from "../requests/Authors.request";
const payload = require("../fixtures/Authors/DELETE/deleteAuthor.json");


describe("DELETE - Endpoint Authors", () => {
    it("Return with success delete in endpoint", () => {
        Authors.deleteAAuthor(payload.success.id).should(response => {
            expect(response.status).to.eq(payload.success.statusCode);
        });
    });
})