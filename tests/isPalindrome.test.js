const { isPalindrome } = require("../isPalindrome")

describe('returns true or false if word is Palindrome', () => {
    it('return true on palindrome', () => {
        expect(isPalindrome('ABBA')).toBe(true)
    });
    it('return false on not palindrome', () => {
        expect(isPalindrome('anisha')).toBe(false)
    });
    it('return true on palindrome even with capitals', () => {
        expect(isPalindrome('Racecar')).toBe(true)
    });
    it('return true on palindrome even with spaces', () => {
        expect(isPalindrome('A Santa At Nasa')).toBe(true)
    });
    it('return false on not palindrome even with spaces', () => {
        expect(isPalindrome('Why is my cat red')).toBe(false)
    });
});