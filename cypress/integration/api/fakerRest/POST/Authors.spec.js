import Authors from "../../../../support/requests/fakerRest/Authors";;
const payload = require("../../../../fixtures/api/fakerRest/Authors/POST/postAuthor.json");


describe("POST - Endpoint Authors", () => {
    it("Return success after post", () => {
        Authors.postAAuthor(payload.success.payload).should(response => {
            expect(response.status).to.eq(payload.success.statusCode);
            expect(response.body.id).to.eq(payload.success.response.id);
        });
    });
})