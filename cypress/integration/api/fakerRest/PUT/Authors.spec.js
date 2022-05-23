import Authors from "../../../../support/requests/fakerRest/Authors";;
const payload = require("../../../../fixtures/api/fakerRest/Authors/PUT/putAuthor.json");


describe("PUT - Endpoint Authors", () => {
    it("Update with success in endpoint", () => {
        Authors.putAAuthor(payload.success.data.id, payload.success.data.body).should(response => {
            expect(response.status).to.eq(payload.success.statusCode);
            expect(response.body.id).to.eq(payload.success.data.body.id);
        });
    })
})