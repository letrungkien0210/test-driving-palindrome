const expect = require('chai').expect;
const isPalindrome = require('./../src/palindrome');

describe('palindrome-test', function(){
    // POSITIVE TESTS
    it('should pass this canary test', function() {
        expect(true).to.be.true;
    })

    it('should return true for argument mom', function() {
        expect(isPalindrome('mom')).to.be.true;

    })

    it('should return true for argument dad', function() {
        expect(isPalindrome('dad')).to.be.true;
    })

    it('should return false for argument dude', function() {
        expect(isPalindrome('dude')).to.be.false;
    })

    it('should return true for argument mom mom', function() {
        expect(isPalindrome('mom mom')).to.be.true;
    })

    it('should return false for argument mom dad', function() {
        expect(isPalindrome('mom dad')).to.be.false;
    })

    // NEGATIVE TESTS
    it('should return false when argument is an empty string', function() {
        expect(isPalindrome('')).to.be.false;
    })

    it('should return false for argument with only two spaces', function() {
        expect(isPalindrome('  ')).to.be.false;
    })

    // Exception tests
    it('should throw an exception if argument is missing', function() {
        const call = function(){ isPalindrome(); };
        expect(call).to.throw(Error, 'Invalid argument');
    })
})