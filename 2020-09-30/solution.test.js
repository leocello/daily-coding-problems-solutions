const {bruteForce, lessBruteForce, singleIteration, singleInstruction} = require('./solution.js');

it('2020-09-30 - bruteForce', () => {
    // 10 + 7 = 17
    expect(bruteForce([10, 15, 3, 7], 17)).toBe(true);
    expect(bruteForce([10, 15, 3, 6], 17)).toBe(false);

    // 10 + 6 = 16
    expect(bruteForce([10, 15, 3, 6], 16)).toBe(true);

    // But 8 + 8 can't be used as I can't sum the same number
    expect(bruteForce([8, 15, 3, 6], 16)).toBe(false);
});

it('2020-09-30 - lessBruteForce', () => {
    // 10 + 7 = 17
    expect(lessBruteForce([10, 15, 3, 7], 17)).toBe(true);
    expect(lessBruteForce([10, 15, 3, 6], 17)).toBe(false);

    // 10 + 6 = 16
    expect(lessBruteForce([10, 15, 3, 6], 16)).toBe(true);

    // But 8 + 8 can't be used as I can't sum the same number
    expect(lessBruteForce([8, 15, 3, 6], 16)).toBe(false);
});

it('2020-09-30 - singleIteration', () => {
    // 10 + 7 = 17
    expect(singleIteration([10, 15, 3, 7], 17)).toBe(true);
    expect(singleIteration([10, 15, 3, 6], 17)).toBe(false);

    // 10 + 6 = 16
    expect(singleIteration([10, 15, 3, 6], 16)).toBe(true);

    // But 8 + 8 can't be used as I can't sum the same number
    expect(singleIteration([8, 15, 3, 6], 16)).toBe(false);
});

it('2020-09-30 - singleInstruction', () => {
    // 10 + 7 = 17
    expect(singleInstruction([10, 15, 3, 7], 17)).toBe(true);
    expect(singleInstruction([10, 15, 3, 6], 17)).toBe(false);

    // 10 + 6 = 16
    expect(singleInstruction([10, 15, 3, 6], 16)).toBe(true);

    // But 8 + 8 can't be used as I can't sum the same number
    expect(singleInstruction([8, 15, 3, 6], 16)).toBe(false);
});