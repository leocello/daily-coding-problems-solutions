const solution = require('./solution.js');

test('2020-09-30 - Simple tests', () => {
    expect(solution([10, 15, 3, 7], 17)).toBe(true);
    //               10    +    7 = 17
    
    expect(solution([10, 15, 3, 6], 17)).toBe(false);
});