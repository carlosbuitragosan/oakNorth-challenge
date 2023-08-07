const assertEquals = require('../assert-equals');

describe('Assert Equals:', () => {
  describe('When expect and actual are the same:', () => {
    it('Returns without an error', () => {
      expect(assertEquals('abc', 'abc')).toBe('No error.');
      expect(assertEquals(1, 1)).toBe('No error.');
    });
  });
  describe('When expect and actual are different:', () => {
    it('Throws an error', () => {
      expect(() => assertEquals('abc', 'adc')).toThrow(
        'Expected abc but found adc'
      );
      expect(() => assertEquals(1, 2)).toThrow('Expected 1 but found 2');
    });
    it('Throws an error when actual is an empty string', () => {
      expect(() => assertEquals('a', '')).toThrow(
        'Expected a but found an empty string.'
      );
    });
    it('Compares data types', () => {
      expect(() => assertEquals(1, '1')).toThrow(
        'Expected type number but found type string.'
      );
    });
    it('compares elements within arrays.', () => {
      expect(() => assertEquals(['a', 'b'], ['a', 'c'])).toThrow(
        'Expected b but found c.'
      );
    });
    it('Throws an error when actual is an empty array', () => {
      expect(() => assertEquals([1, 2], [])).toThrow(
        'Expected 1,2 but found an empty array.'
      );
    });
    it('Returns without an error when 2 objects are the same.', () => {
      expect(assertEquals({ a: 1, b: 'c' }, { a: 1, b: 'c' })).toBe(
        'No error.'
      );
    });
    it('Throws an error when objects do not match.', () => {
      expect(() => assertEquals({ a: 1, b: 'c' }, { a: 2, b: 'c' })).toThrow(
        'Expected 1 but found 2.'
      );
    });
    it('Compares more complex objects', () => {
      const complexObject1 = {
        propA: 1,
        propB: {
          propA: [1, { propA: 'a', propB: 'b' }, 3],
          propB: 1,
          propC: 2,
        },
      };
      const complexObject2 = {
        propA: 1,
        propB: {
          propB: 1,
          propA: [1, { propA: 'a', propB: 'c' }, 3],
          propC: 2,
        },
      };
      expect(() => assertEquals(complexObject1, complexObject2)).toThrow(
        'Expected b but found c.'
      );
    });
  });
});
