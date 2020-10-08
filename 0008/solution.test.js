const {BinTree, countUnival} = require('./solution.js');

it('Problem #8 - Find univals', () => {
    const binTree = new BinTree(0, new BinTree(1), new BinTree(0, new BinTree(1, new BinTree(1), new BinTree(1)), new BinTree(0)));

    expect(countUnival(binTree)).toBe(5);
});

