const {bruteForce, singleIteration, singleInstruction, singleInstructionWithoutDivision} = require('./solution.js');

it('Problem #2 - Brute force', () => {
    expect(bruteForce([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24]);
    expect(bruteForce([3, 2, 1])).toStrictEqual([2, 3, 6]);
});

it('Problem #2 - Single iteration', () => {
    expect(singleIteration([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24]);
    expect(singleIteration([3, 2, 1])).toStrictEqual([2, 3, 6]);
});

it('Problem #2 - Single iteration', () => {
    expect(singleInstruction([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24]);
    expect(singleInstruction([3, 2, 1])).toStrictEqual([2, 3, 6]);
});

it('Problem #2 - Single iteration without division', () => {
    expect(singleInstructionWithoutDivision([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24]);
    expect(singleInstructionWithoutDivision([3, 2, 1])).toStrictEqual([2, 3, 6]);
});