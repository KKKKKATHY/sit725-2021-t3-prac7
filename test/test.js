let expect = require("chai").expect
let request = require("request")

describe("Test: kathy project", function () {
    let url_init = "http://localhost:8080/api/init"
    //
    it("check if init api works", (done) => {
        request(url_init, (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    //
    it("check statusCode key in body(200)", (done) => {
        request(url_init, (error, response, body) => {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200)
            done()
        })
    })
})