// Hello, Name or World!

// Instructions

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"


const hello = name => `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`


// Sample Tests

const assert = require('chai').assert;
describe("Sample Tests", () => {
  it("should work for sample inputs", () => {
    let actualJohn = hello('johN');
    assert.isDefined(actualJohn, "You have to return a string instead of logging it to the console");
    assert.strictEqual(actualJohn, 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
    assert.strictEqual(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
    assert.strictEqual(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
    assert.strictEqual(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
  });
});