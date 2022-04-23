import Authors from "../requests/Authors.request";
const payload = require("../fixtures/Authors/POST/postAuthor.json");


describe("POST - Endpoint Authors", () => {
    it("Return success after post", () => {
        Authors.postAAuthor(payload.success.payload).should(response => {
            expect(response.status).to.eq(payload.success.statusCode);
            expect(response.body.id).to.eq(payload.success.response.id);
        });
    });
})