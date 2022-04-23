import Authors from "../requests/Authors.request";

const payloadAllAuthors = require("../fixtures/Authors/GET/getAllAuthors.json");
const payloadBookOfAuthor = require("../fixtures/Authors/GET/getBookOfAuthor.json");
const payloadAAuthor = require("../fixtures/Authors/GET/getAuthor.json");


describe('GET - Endpoint Authors', () => {
    it("Return Success all authors", () => {
        Authors.getAllAuthors().should(response => {
            expect(response.status).to.eq(payloadAllAuthors.success.statusCode);
            expect(response.body[0].id).to.eq(payloadAllAuthors.success.responseBody[0].id);
        });
    });

    it("Return Success a book of authors", () => {
        Authors.getBookOfAuthors(payloadBookOfAuthor.success.payload.idOfBooks[0]).should(response => {
            expect(response.status).to.eq(payloadBookOfAuthor.success.statusCode);
        });
    });

    it("Return success a author", () => {
        Authors.getAuthor(payloadAAuthor.success.payload.idAuthor[0]).should(response => {
            expect(response.status).to.eq(payloadAAuthor.success.statusCode);
            expect(response.body.id).to.eq(payloadAAuthor.success.response.responseNumberOne.id);
        });
    });
})