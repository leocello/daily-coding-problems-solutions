const solution = require('./solution.js');

it('2020-09-30 - Simple tests', () => {
    // 10 + 7 = 17
    expect(solution([10, 15, 3, 7], 17)).toBe(true);
    expect(solution([10, 15, 3, 6], 17)).toBe(false);

    // 10 + 6 = 16
    expect(solution([10, 15, 3, 6], 16)).toBe(true);

    // But 8 + 8 can't be used as I can't sum the same number
    expect(solution([8, 15, 3, 6], 16)).toBe(false);
});