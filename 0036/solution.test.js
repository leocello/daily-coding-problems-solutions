const {BTNode, getSecondFromBT} = require('./solution');

it('Problem #36 - second largest from BT', () => {
    const bt1 = new BTNode(5, new BTNode(2));
    expect(getSecondFromBT(bt1).value).toBe(2);

    const bt2 = new BTNode(5, new BTNode(2), new BTNode(7));
    expect(getSecondFromBT(bt2).value).toBe(5);

    const bt3 = new BTNode(5, new BTNode(2), new BTNode(7, new BTNode(6), new BTNode(8)));
    expect(getSecondFromBT(bt3).value).toBe(7);

    const bt4 = new BTNode(10, new BTNode(5), new BTNode(15, new BTNode(12), new BTNode(17, new BTNode(16), new BTNode(23))));
    expect(getSecondFromBT(bt4).value).toBe(17);

    const bt5 = new BTNode(5, new BTNode(3, new BTNode(2), new BTNode(4)));
    expect(getSecondFromBT(bt5).value).toBe(4);

    const bt6 = new BTNode(5, new BTNode(4, new BTNode(3, new BTNode(2, new BTNode(1)))));
    expect(getSecondFromBT(bt6).value).toBe(4);
});