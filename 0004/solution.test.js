const {bruteForce, spareList, oneList, oneListImproved} = require('./solution.js');

it('Problem #4 - Missing min positive => Brute force', () => {
    expect(bruteForce([3, 4, -1, 1])).toBe(2);
    expect(bruteForce([1, 2, 0])).toBe(3);
    expect(bruteForce([1, 2, 3, 4, 5])).toBe(6);
});

it('Problem #4 - Missing min positive => Spare list', () => {
    expect(spareList([3, 4, -1, 1])).toBe(2);
    expect(spareList([1, 2, 0])).toBe(3);
    expect(spareList([1, 2, 3, 4, 5])).toBe(6);
});

it('Problem #4 - Missing min positive => One list', () => {
    expect(oneList([3, 4, -1, 1])).toBe(2);
    expect(oneList([1, 2, 0])).toBe(3);
    expect(oneList([1, 2, 3, 5, 4])).toBe(6);
});

it('Problem #4 - Missing min positive => One list improved', () => {
    expect(oneListImproved([3, 4, -1, 1])).toBe(2);
    expect(oneListImproved([1, 2, 0])).toBe(3);
    expect(oneListImproved([1, 2, 3, 5, 4])).toBe(6);
});
