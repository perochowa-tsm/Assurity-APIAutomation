Feature: API Testing

    @accessAPI
    @all
    Scenario: Verify API Address can be accessed
        Given the API address to test
            | APIAddress | https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false |
        When a GET request is sent to the API
        Then a response with status code 200 should be received

    @firstCriteria
    @all
    Scenario: Verify Name Key/Value Pair of API
        Given the API address to test
            | APIAddress | https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false |
        When a GET request is sent to the API
        Then a Name Key Value pair should exist in response's body
            | Key   | Name           |
            | Value | Carbon credits |
    @secondCriteria
    @all
    Scenario: Verify CanRelist Key/Value Pair of API
        Given the API address to test
            | APIAddress | https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false |
        When a GET request is sent to the API
        Then a CanRelist Key Value pair should exist in response's body
            | Key   | CanRelist |
            | Value | true      |
    @thirdCriteria
    @all
    Scenario: Verify Promotions element Key/Value Pair of API
        Given the API address to test
            | APIAddress | https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false |
        When a GET request is sent to the API
        Then the Promotions element with Name = Gallery should have an Key Value pair of Description = Good position in category
            | Array  | Promotions                |
            | Key1   | Name                      |
            | Value1 | Gallery                   |
            | Key2   | Description               |
            | Value2 | Good position in category |


