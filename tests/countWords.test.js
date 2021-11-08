const {countWords} = require('../countWords');

describe('countWords', () => {
  it('should count words in a sentence', () => {
    expect(countWords('Hello There')).toBe(2);
    expect(countWords('The Quick Brown Fox Jumped Over The Lazy Dog')).toBe(9);
  });
});
