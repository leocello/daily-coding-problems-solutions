const {autoComplete} = require('./solution.js');

it('Problem #11 - Auto complete string', () => {
    expect(autoComplete('d', ['dear', 'dog', 'deal', 'cat', 'can', 'deer'].sort())).toEqual(['dear', 'dog', 'deal', 'deer'].sort());
    expect(autoComplete('de', ['dear', 'dog', 'deal', 'cat', 'can', 'deer'].sort())).toEqual(['dear', 'deal', 'deer'].sort());
});