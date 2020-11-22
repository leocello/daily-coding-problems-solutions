const {swapRGB} = require('./solution');

it('Problem #35 - RGB swaps', () => {
    expect(swapRGB(['G', 'B', 'R', 'R', 'B', 'R', 'G'])).toEqual(['R', 'R', 'R', 'G', 'G', 'B', 'B']);
    expect(swapRGB(['R', 'R', 'B', 'B', 'R', 'G', 'G'])).toEqual(['R', 'R', 'R', 'G', 'G', 'B', 'B']);
    expect(swapRGB(['R', 'G', 'B', 'R', 'G', 'B', 'R'])).toEqual(['R', 'R', 'R', 'G', 'G', 'B', 'B']);
    expect(swapRGB(['R', 'B', 'G', 'R', 'B', 'G', 'R'])).toEqual(['R', 'R', 'R', 'G', 'G', 'B', 'B']);
    expect(swapRGB(['B', 'B', 'G', 'G', 'R', 'R', 'R'])).toEqual(['R', 'R', 'R', 'G', 'G', 'B', 'B']);
    expect(swapRGB(['B', 'R', 'G', 'R', 'B', 'R', 'G'])).toEqual(['R', 'R', 'R', 'G', 'G', 'B', 'B']);
});