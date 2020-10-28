const {getShortestPathSize} = require('./solution');

it('Problem #23 - Size of the sortest path', function () {
    expect(
        getShortestPathSize(
            [[ false, false, false, false, ],
             [  true,  true, false,  true, ],
             [ false, false, false, false, ],
             [ false, false, false, false, ]],
            {r: 3, c: 0},
            {r: 0, c: 0}
        )
    ).toBe(7);

    expect(
        getShortestPathSize(
            [[ false, false, false, false, ],
             [  true,  true,  true,  true, ],
             [ false, false, false, false, ],
             [ false, false, false, false, ]],
            {r: 3, c: 0},
            {r: 0, c: 0}
        )
    ).toBe(null);

    expect(
        getShortestPathSize(
            [[ false, false, false, false, ],
             [ false,  true,  true,  true, ],
             [ false, false, false, false, ],
             [ false, false, false, false, ]],
            {r: 3, c: 0},
            {r: 0, c: 0}
        )
    ).toBe(3);

    expect(
        getShortestPathSize(
            [[ false, false, false, false, ],
             [ true, false, false, false, ],
             [ true,  true, false, false, ],
             [ false, false, false, false, ]],
            {r: 0, c: 0},
            {r: 3, c: 0}
        )
    ).toBe(7);

    expect(
        getShortestPathSize(
            [[ false, false, false, false, ],
             [ true, false, false, false, ],
             [ true,  true, false, false, ],
             [ false, false, false, false, ]],
            {r: 0, c: 0},
            {r: 3, c: 3}
        )
    ).toBe(6);

    expect(
        getShortestPathSize(
            [[ false, false, false, false, ],
             [ true, false, false, false, ],
             [ true,  true, false, false, ],
             [ false, false, false, false, ]],
            {r: 0, c: 0},
            {r: 0, c: 0}
        )
    ).toBe(0);

    expect(
        getShortestPathSize(
            [[ true, false, false, false, ],
             [ true, false, false, false, ],
             [ true,  true, false, false, ],
             [ false, false, false, false, ]],
            {r: 3, c: 0},
            {r: 0, c: 0}
        )
    ).toBe(null);
});