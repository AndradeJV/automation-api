import Activities from "../requests/Activities.request";
const payload = require("../fixtures/Activities/DELETE/deleteABook.json");


describe("DELETE - Endpoint Activities", () => {
    it("Should to return success - DELETE Activities", () => {
        Activities.deleteActivities(payload.sendSuccess.id).should(response => {
            expect(response.status).to.equal(payload.sendSuccess.statusCode);
            expect(response.headers.server).to.equal(payload.sendSuccess.responseHeaders.server);
        });
    });

    it("Should to return not success - DELETE Activities", () => {
        Activities.deleteActivities(payload.sendSuccess).should(response => {
            expect(response.status).to.equal(payload.sendNotSuccess.statusCode)
        })
    })
})