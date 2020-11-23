const {getPowerSet} = require('./solution');

it('Problem #37 - Power set from set', () => {
    expect(getPowerSet([1, 2, 3])).toEqual(expect.arrayContaining([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]));
    expect(getPowerSet([1, 2])).toEqual(expect.arrayContaining([[], [1], [2], [1, 2]]));
    expect(getPowerSet([1, 2, 3, 4])).toEqual(expect.arrayContaining([[], [1], [2], [3], [4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]));
    expect(getPowerSet([1, 2, 3, 4, 5]).length).toEqual(32);
    expect(getPowerSet([1, 2, 3, 4, 5, 6]).length).toEqual(64);
});