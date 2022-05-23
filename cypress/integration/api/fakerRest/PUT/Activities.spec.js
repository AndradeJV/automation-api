import Activities from "../../../../support/requests/fakerRest/Activities";
const payload = require("../../../../fixtures/api/fakerRest/Activities/PUT/putBook.json");


describe("PUT - Endpoint Activities", () => {
    before(() => {
        Activities.getActivity(payload.sendSuccess.id).should(response => {
            expect(response.body.completed).to.equal(payload.sendSuccess.bodyNotPut.completed);
            expect(response.body.title).to.equal(payload.sendSuccess.bodyNotPut.title);
        });
    });

    it("Should to return success", () => {
        Activities.putActivities(payload.sendSuccess.id, payload.sendSuccess.body).should(response => {
            expect(response.status).to.equal(payload.sendSuccess.statusCode);
            expect(response.body.completed).to.equal(payload.sendSuccess.body.completed);
        });
    });
})

