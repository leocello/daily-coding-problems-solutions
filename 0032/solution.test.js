const {checkArbitrageExists} = require('./solution');

it('Problem #32 - Check if there is arbitrage in a currency changes table', function () {
    expect(checkArbitrageExists([
        [1   , 2   , 0.5 ],
        [0.5 , 1   , 0.25],
        [2   , 4   , 1   ],
    ])).toBe(false);

    expect(checkArbitrageExists([
        [1   , 2   , 0.5 ],
        [0.6 , 1   , 0.25],
        [2   , 4   , 1   ],
    ])).toBe(true);

    expect(checkArbitrageExists([
        [1   , 2   , 0.5 ],
        [0.5 , 1   , 0.25],
        [2   , 3.5   , 1   ],
    ])).toBe(true);
});