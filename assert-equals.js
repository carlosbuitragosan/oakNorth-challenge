const { getType, compareObjects } = require('./utils.js');

function assertEquals(expect, actual) {
  if (JSON.stringify(expect) !== JSON.stringify(actual)) {
    // DIFFERENT TYPES
    if (getType(expect) !== getType(actual)) {
      throw new Error(
        `Expected type ${typeof expect} but found type ${typeof actual}.`
      );
    }
    // EMPTY ELEMENTS
    if (actual === '' || actual.length === 0) {
      throw new Error(
        `Expected ${expect} but found an empty ${getType(actual)}.`
      );
    }
    if (getType(expect) === 'array') {
      // DIFFERENT ELEMENTS IN ARRAY
      for (let i = 0; i < expect.length; i++) {
        if (expect[i] !== actual[i]) {
          throw new Error(`Expected ${expect[i]} but found ${actual[i]}.`);
        }
      }
    }
    // COMPARES COMPLEX OBJECTS
    if (getType(expect) === 'object') {
      compareObjects(expect, actual);
    }
    throw new Error(`Expected ${expect} but found ${actual}`);
  }
  return 'No error.';
}

module.exports = assertEquals;
