import Activities from "../../../../support/requests/fakerRest/Activities";
const payload = require("../../../../fixtures/api/fakerRest/Activities/POST/postNewBook.json");


describe("POST - Endpoint Activities", () => {
    it("Should to return success", () => {
        Activities.postActivities(payload.sendSuccess.body).should(response => {
            if(expect(response.status).to.equal(payload.sendSuccess.statusCode)){
                expect(response.body.id).to.equal(payload.sendSuccess.body.id);
                expect(response.headers.server).to.equal(payload.sendSuccess.responseHeaders.server);
            }
        });
    });
})