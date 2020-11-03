const {calculateTrappedWaterBruteForce, calculateTrappedWater} = require('./solution');

it ('Problem #30 - Calculate trapped water - Brute force', function () {
    expect(calculateTrappedWaterBruteForce([8])).toBe(0);
    expect(calculateTrappedWaterBruteForce([1, 2])).toBe(0);
    expect(calculateTrappedWaterBruteForce([2, 1, 2])).toBe(1);
    expect(calculateTrappedWaterBruteForce([3, 0, 1, 3, 0, 5])).toBe(8);
    expect(calculateTrappedWaterBruteForce([3, 0, 5, 3, 0, 5])).toBe(10);
    expect(calculateTrappedWaterBruteForce([6, 0, 5, 3, 0, 5])).toBe(12);
    expect(calculateTrappedWaterBruteForce([6, 0, 5, 3, 2, 1])).toBe(5);
    expect(calculateTrappedWaterBruteForce([6, 0, 5, 3, 1, 2])).toBe(6);
    expect(calculateTrappedWaterBruteForce([1, 2, 5, 3, 0, 5])).toBe(7);
    expect(calculateTrappedWaterBruteForce([1, 2, 5, 3, 4, 2])).toBe(1);
    expect(calculateTrappedWaterBruteForce([1, 2, 5, 4, 4, 2])).toBe(0);
    expect(calculateTrappedWaterBruteForce([2, 0, 3, 1, 4, 0, 5])).toBe(8);
    expect(calculateTrappedWaterBruteForce([2, 0, 2, 0, 2, 0, 2])).toBe(6);
    expect(calculateTrappedWaterBruteForce([2, 0, 3, 0, 3, 0, 2])).toBe(7);
    expect(calculateTrappedWaterBruteForce([2, 0, 6, 0, 8, 0, 5, 0, 2])).toBe(15);
    expect(calculateTrappedWaterBruteForce([8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8])).toBe(64);
    expect(calculateTrappedWaterBruteForce([0, 1, 2, 3, 4, 5, 6, 7, 5])).toBe(0);
    expect(calculateTrappedWaterBruteForce([0, 1, 2, 3, 4, 5, 6, 7, 6, 7, 6])).toBe(1);
});

it ('Problem #30 - Calculate trapped water - Double pointer', function () {
    expect(calculateTrappedWater([8])).toBe(0);
    expect(calculateTrappedWater([1, 2])).toBe(0);
    expect(calculateTrappedWater([2, 1, 2])).toBe(1);
    expect(calculateTrappedWater([3, 0, 1, 3, 0, 5])).toBe(8);
    expect(calculateTrappedWater([3, 0, 5, 3, 0, 5])).toBe(10);
    expect(calculateTrappedWater([6, 0, 5, 3, 0, 5])).toBe(12);
    expect(calculateTrappedWater([6, 0, 5, 3, 2, 1])).toBe(5);
    expect(calculateTrappedWater([6, 0, 5, 3, 1, 2])).toBe(6);
    expect(calculateTrappedWater([1, 2, 5, 3, 0, 5])).toBe(7);
    expect(calculateTrappedWater([1, 2, 5, 3, 4, 2])).toBe(1);
    expect(calculateTrappedWater([1, 2, 5, 4, 4, 2])).toBe(0);
    expect(calculateTrappedWater([2, 0, 3, 1, 4, 0, 5])).toBe(8);
    expect(calculateTrappedWater([2, 0, 2, 0, 2, 0, 2])).toBe(6);
    expect(calculateTrappedWater([2, 0, 3, 0, 3, 0, 2])).toBe(7);
    expect(calculateTrappedWater([2, 0, 6, 0, 8, 0, 5, 0, 2])).toBe(15);
    expect(calculateTrappedWaterBruteForce([8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8])).toBe(64);
    expect(calculateTrappedWater([0, 1, 2, 3, 4, 5, 6, 7, 5])).toBe(0);
    expect(calculateTrappedWater([5, 7, 6, 5, 4, 3, 2, 1, 0])).toBe(0);
    expect(calculateTrappedWater([0, 1, 2, 3, 4, 5, 6, 7, 6, 7, 6])).toBe(1);
    expect(calculateTrappedWater([6, 7, 6, 7, 6, 5, 4, 3, 2, 1, 0])).toBe(1);
    expect(calculateTrappedWater([6, 7, 6, 7, 6, 5, 4, 3, 2, 0, 1])).toBe(2);
});
