# OakNorth JavaScript Home Test

## Update
- I added a utils file that extracted some functions to make code easier to read and to handle as well.
- Previousle I had tests `.not.toTrhow()` pass but added `.toBe('..expected message')` which made some tests fail and helped me realise some mistakes.
- Tried to do some refactoring in `assertEquals.js` to avoid duplication and make code easier to read.
## Tools Used for this Challenge

I used Jest testing framework to run the tests and Eslint to help maintain code quality.

## Writting the Tests

- I started with strings and numbers and after moved on to array types.
- I wrote one test (the simplest/easiest one), watch it fail, and then wrote the code in the `assertEquals` funnction to make it pass. 
- In that same way I moved from strings to numbers and then to arrays writting tests for typical inputs.
- As I moved into more edge cases I found that it was best to divide the function so that it handled different data types separately:

```javascript
function assertEquals(expect, actual) {

  // handles strings
  if (typeof expect === 'string' && typeof actual === 'string') {
    //....
  }

  // handles numbers
  if (typeof expect === 'number' && typeof actual === 'number') {
    //...
  }

  // handles different data types
  if (typeof expect !== typeof actual) {
    //...
  }

  // handles arrays
  if (Array.isArray(expect) && Array.isArray(actual)) {

    // handles different types of entries in array
    for (let i = 0; i < expect.length; i++) {
      //...
      }

    // handles non-mathcing entries in array
    if (expectCaseInsensitive[i] !== actualFiltered[i]) {
      //...
    }
  }
}
```

- With regards to `assertEquals.spec.js` I used the `describe()` function to group relates cases and improve readability:

```javascript
describe('assertEquals', () => {
  describe('When expected and actual are the same string:', () => {
    //...
  });

  describe('When expected and actual are different strings:', () => {
    //...
  });

  describe('When expected and actual are different data types:', () => {
    //...
  });

  describe('When expected and actual are the same array:', () => {
    //...
  });

  describe('When expected and actual are different arrays:', () => {
    //...
  });
});
```
