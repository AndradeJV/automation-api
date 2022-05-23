import Activities from "../../../../support/requests/fakerRest/Activities";

const payloadAllActivities = require("../../../../fixtures/api/fakerRest/Activities/GET/listAllActivities.json");
const payloadActivity = require("../../../../fixtures/api/fakerRest/Activities/GET/Activity.json");


describe('GET - Endpoint Activities', () => {
    it('Should to return success - All activities', () => {
        Activities.getAllActivities().should(response => {
            if(expect(response.status).to.equal(200)){
                expect(response.body[0].id).to.equal(payloadAllActivities.success.responseBody.id);
                expect(response.body[0].title).to.equal(payloadAllActivities.success.responseBody.title);
            }
        });
    });

    it('Should to return success - Activity', () => {
        Activities.getActivity(payloadActivity.success.responseBody10.id).should(response => {
            expect(response.status).to.not.equal(400);
            expect(response.body.title).to.equal(payloadActivity.success.responseBody10.title);
        });
    });
})