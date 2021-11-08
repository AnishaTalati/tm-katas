const {reverseString} = require('../reverseString');

describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('Hi')).toBe('iH');
    expect(reverseString('confusion')).toBe('noisufnoc');
  });
});
