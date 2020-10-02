const BinTree = require('./solution.js');

it('Problem #3 - Binary tree => Serialise', () => {
    const root = new BinTree(20, new BinTree(8, new BinTree (4), new BinTree (12, new BinTree(10), new BinTree(14))));
    expect(root.serialise()).toBe('20||8||4||[[NULL]]||[[NULL]]||12||10||[[NULL]]||[[NULL]]||14||[[NULL]]||[[NULL]]||[[NULL]]');
});

it('Problem #3 - Binary tree => Deserialise', () => {
    const serialisedValue = '20||8||4||[[NULL]]||[[NULL]]||12||10||[[NULL]]||[[NULL]]||14||[[NULL]]||[[NULL]]||[[NULL]]';
    expect(BinTree.deserialise(serialisedValue).serialise()).toBe(serialisedValue);
});

it('Problem #3 - Binary tree => Serialise / deserialise', () => {
    const root = new BinTree('root', new BinTree('left', new BinTree('left.left')), new BinTree('right'));
    expect(BinTree.deserialise(root.serialise()).left.left.val).toBe('left.left');
});