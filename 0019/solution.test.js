const {getMinimumCost, getMinimumCostWithMemoisation} = require('./solution.js');

it('Problem #19 - Minimum cost', function () {
    expect(getMinimumCost([
        [100, 65, 15, 180],
        [85, 70, 150, 170],
        [80, 30, 10, 220],
        [130, 120, 200, 70],
    ])).toEqual(165);

    expect(getMinimumCostWithMemoisation([
        [100, 65, 15, 180],
        [85, 70, 150, 170],
        [80, 30, 10, 220],
        [130, 120, 200, 70],
    ])).toEqual(165);

    expect(getMinimumCost([
        [100, 20, 15, 180],
        [85, 70, 20, 170],
        [80, 30, 10, 220],
        [130, 120, 200, 70],
    ])).toEqual(140);

    expect(getMinimumCostWithMemoisation([
        [100, 20, 15, 180],
        [85, 70, 20, 170],
        [80, 30, 10, 220],
        [130, 120, 200, 70],
    ])).toEqual(140);

    expect(getMinimumCost([
        [100, 65, 15, 180],
        [75, 70, 150, 170],
        [80, 10, 75, 220],
        [130, 120, 200, 70],
    ])).toEqual(170);

    expect(getMinimumCostWithMemoisation([
        [100, 65, 15, 180],
        [75, 70, 150, 170],
        [80, 10, 75, 220],
        [130, 120, 200, 70],
    ])).toEqual(170);
});