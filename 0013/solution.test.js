const {countSubstr} = require('./solution.js');

it('Problem #13 - Count substrings', () => {
    expect(countSubstr(2, 'abcba')).toBe(3);
    expect(countSubstr(2, 'abcbaabb')).toBe(5);
    expect(countSubstr(1, 'abcbaabb')).toBe(2);
    expect(countSubstr(3, 'abcbaabb')).toBe(8);
    expect(countSubstr(1, 'abcabcabc')).toBe(1);
});