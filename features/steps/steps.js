const { Given, When, Then } = require("@cucumber/cucumber");
const { assert, expect } = require("chai");
const { spec } = require("pactum");


Given('the API address to test', function (table) {
    let data = table.rowsHash();
    this.baseUrl = data.APIAddress;
});

When("a GET request is sent to the API", async function () {
    const url = this.baseUrl;
    this.response = await spec().get(url);
    // console.log(this.response.body);
});

Then("a response with status code 200 should be received", async function () {
    assert.strictEqual(this.response.statusCode, 200);
    console.log("===> Verified that API can be accessed successfully and has returned a status code of: " + this.response.statusCode)
});

Then("a Name Key Value pair should exist in response's body", function (table) {

    let data = table.rowsHash();
    expect(this.response.body).to.include.any.keys(data.Key);
    console.log('===> Verified that the response has a Key equal to: ' + data.Key)

    expect(this.response.body.Name).to.equal(data.Value);
    console.log('===>Verified that the response has a Key Value Pair equal to: ' + data.Key + ' : ' + data.Value)
});

Then("a CanRelist Key Value pair should exist in response's body", function (table) {

    let data = table.rowsHash();
    let booleanString = data.Value
    let booleanValue = booleanString === "true"
    expect(this.response.body).to.include.any.keys(data.Key);
    console.log('===> Verified that the response has a Key equal to: ' + data.Key)
    expect(this.response.body.CanRelist).to.equal(booleanValue);
    console.log('===>Verified that the response has a Key Value Pair equal to: ' + data.Key + ' : ' + data.Value)
});

Then("Promotions element", function (table) {

    let data = table.rowsHash();
    expect(this.response.body).to.include.any.keys(data.Array);
    console.log('===> Verified that the response has a Key equal to: ' + data.Array)
    console.log(this.response.body.Promotions)

    // expect(this.response.body.CanRelist).to.equal(booleanValue);
    // console.log('===>Verified that the response has a Key Value Pair equal to: ' + data.Key + ' : ' + data.Value)
});