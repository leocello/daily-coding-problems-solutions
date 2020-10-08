const {maxSum} = require('./solution.js');

it('Problem #9 - Get max not adjascent sum', () => {
    expect(maxSum([2, 4, 6, 2, 5])).toBe(13);
    expect(maxSum([5, 1, 1, 5])).toBe(10);
    expect(maxSum([5, 1, 5, 1])).toBe(10);
    expect(maxSum([2, 4, 3, 3])).toBe(7);
    expect(maxSum([2, 4, 6, 17, 5, 0])).toBe(21);
    expect(maxSum([2, 4, 6, 17, 5, 2, 36, 129])).toBe(152);
    expect(maxSum([2, 4, 40, 15, 1, 16, 1, 17])).toBe(75);
});

