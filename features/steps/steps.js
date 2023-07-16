const { Given, When, Then } = require("@cucumber/cucumber");
const { assert, expect } = require("chai");
const { spec } = require("pactum");
const { Verify, Get } = require("../support/functions")

const verify = new Verify();
const get = new Get();

Given('the API address to test', function (table) {
    let data = table.rowsHash();
    this.baseUrl = data.APIAddress;
});

When("a GET request is sent to the API", async function () {
    const url = this.baseUrl;
    this.response = await spec().get(url);
});

Then("a response with status code 200 should be received", async function () {
    assert.strictEqual(this.response.statusCode, 200);
    console.log("===> Verified that API can be accessed successfully and has returned a status code of: " + this.response.statusCode)
});

Then("a Name Key Value pair should exist in response's body", function (table) {
    let data = table.rowsHash();

    verify.responseContainsKey(this.response.body, data.Key);
    verify.keyValueIsEqualToTestValue(this.response.body[data.Key], data.Key, data.Value)
});

Then("a CanRelist Key Value pair should exist in response's body", function (table) {
    let data = table.rowsHash();
    let booleanValue = get.booleanEquivalent(data.Value)

    verify.responseContainsKey(this.response.body, data.Key);
    verify.keyValueIsEqualToTestValue(this.response.body[data.Key], data.Key, booleanValue)
});

Then("the Promotions element with Name = Gallery should have an Key Value pair of Description = Good position in category", function (table) {
    let data = table.rowsHash();

    verify.responseContainsKey(this.response.body, data.Array);
    const promotions = this.response.body[data.Array]

    const descriptionValue = get.valueOfDescriptionKey(promotions, data.Key1, data.Value1, data.Key2);
    verify.secondKeyValueIsEqualToTestValue(descriptionValue, data.Value2)

});