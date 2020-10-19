const {maxFromSubArrayBruteForce, maxFromSubArrayLinear} = require('./solution.js');

// it('Problem #18 - Maximum from subarray => Brute force', function () {
//     const consoleSpy = jest.spyOn(console, 'log');

//     maxFromSubArrayBruteForce([10, 5, 2, 7, 8, 7], 3);

//     expect(consoleSpy.mock.calls).toEqual([[10], [7], [8], [8]]);
// });

it('Problem #18 - Maximum from subarray => linear', function () {
    const consoleSpy = jest.spyOn(console, 'log');

    maxFromSubArrayLinear([10, 5, 2, 7, 8, 7], 3);

    expect(consoleSpy.mock.calls).toEqual([[10], [7], [8], [8]]);
});