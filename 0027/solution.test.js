const {checkBrackets} = require('./solution');

it('Problem #27 - Check balances brackets', function () {
    expect(checkBrackets('([])[]({})')).toBe(true);
    expect(checkBrackets('([])[]({)')).toBe(false);
    expect(checkBrackets('([)]')).toBe(false);
    expect(checkBrackets('((()')).toBe(false);
    expect(checkBrackets('()')).toBe(true);
    expect(checkBrackets('()[]{}')).toBe(true);
    expect(checkBrackets('({})[()]{[]}')).toBe(true);
    expect(checkBrackets('[({})[()]{[]}]')).toBe(true);
});