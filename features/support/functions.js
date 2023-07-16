const { assert, expect } = require("chai");
const { spec } = require("pactum");

class Verify {
    /*
    * Verifies if the response from the API contains a specific Key
    */
    responseContainsKey(responseBody, key) {
        expect(responseBody).to.include.any.keys(key);
        console.log('===> Verified that the response has a Key equal to: ' + key)
    }

    /*
    * Verifies if the Key Value pair from the API is equal to the Key Value pair indicated in the Test
    */
    keyValueIsEqualToTestValue(responseBodyKey, key, value) {
        expect(responseBodyKey).to.equal(value);
        console.log('===> Verified that Key Value Pair is equal to: ' + key + ' : ' + value)
    }

    /*
    * Verifies if the Value from the object is the same Value indicated in the Test
    */
    secondKeyValueIsEqualToTestValue(descriptionValue, valueAttained) {
        expect(descriptionValue).to.equal(valueAttained);
        console.log('===> Verified that Specified Key Value: \'' + descriptionValue + '\' is equal to Test Value: \'' + valueAttained + '\'')
    }
}

class Get {
    /*
    * Returns the boolean equivalent of test data
    */
    booleanEquivalent(input) {
        if (input === "true") {
            let booleanValue = true;
            return booleanValue;
        } else {
            let booleanValue = false;
            return booleanValue;
        }
    }

    /*
    * Gets respective value of object with matching Key Value Pair
    */
    valueOfDescriptionKey(array, searchKey, searchValue, searchKey2) {
        const searchValues = [searchValue]
        const resultArray = array.filter(arrayCopy => searchValues.includes(arrayCopy[searchKey])).map(value => value[searchKey2]);
        const [resultValue] = resultArray
        return resultValue;
    }
}

module.exports = { Verify, Get }