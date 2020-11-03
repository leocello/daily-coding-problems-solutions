const {getEditDistance} = require('./solution');

it('Problem #31 - Get edit distance between 2 strings', function () {
    expect(getEditDistance('kitten', 'sitting')).toBe(3);
    expect(getEditDistance('kittens', 'sitting')).toBe(3);
    expect(getEditDistance('kitt', 'sitting')).toBe(4);
    expect(getEditDistance('asdfg', 'zxcvb')).toBe(5);
    expect(getEditDistance('asifg', 'zxivb')).toBe(4);
    expect(getEditDistance('asifg', 'zxiv')).toBe(4);
    expect(getEditDistance('asifg', 'xiv')).toBe(4);
});