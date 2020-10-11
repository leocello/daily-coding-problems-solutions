const {steps12, stepsDynamic} = require('./solution.js');

it('Problem #12 - Number of steps => 1 or 2', () => {
    expect(steps12(4)).toBe(5);
    expect(steps12(5)).toBe(8);
});

it('Problem #12 - Number of steps => Dynamic', () => {
    expect(stepsDynamic(5, [1, 3, 5])).toBe(5);
    expect(stepsDynamic(6, [1, 4, 5])).toBe(6);
    expect(stepsDynamic(5, [1, 2])).toBe(8);
});