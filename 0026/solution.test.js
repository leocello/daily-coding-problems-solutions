const {LinkedList, Node} = require('./solution');

const generateList = () => {
    return new LinkedList(
        new Node(
            1,
            new Node(
                2,
                new Node(
                    3,
                    new Node(
                        4,
                        new Node(
                            5,
                            new Node(
                                6,
                                new Node(
                                    7,
                                    new Node(
                                        8,
                                        new Node(9)
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

it('Problem #26 - Remove item from linked list', function () {
    const list = generateList();

    expect(list.head.val).toBe(1);
    expect(list.head.next.val).toBe(2);
    expect(list.head.next.next.val).toBe(3);
    expect(list.head.next.next.next.val).toBe(4);
    expect(list.head.next.next.next.next.val).toBe(5);
    expect(list.head.next.next.next.next.next.val).toBe(6);
    expect(list.head.next.next.next.next.next.next.val).toBe(7);
    expect(list.head.next.next.next.next.next.next.next.val).toBe(8);
    expect(list.head.next.next.next.next.next.next.next.next.val).toBe(9);

    const list2 = generateList();
    list2.remove(3);
    list2.remove(5);
    expect(list2.head.val).toBe(1);
    expect(list2.head.next.val).toBe(2);
    expect(list2.head.next.next.val).toBe(3);
    expect(list2.head.next.next.next.val).toBe(5);
    expect(list2.head.next.next.next.next.val).toBe(6);
    expect(list2.head.next.next.next.next.next.val).toBe(8);
    expect(list2.head.next.next.next.next.next.next.val).toBe(9);

    const list3 = generateList();
    list3.remove(0);
    expect(list3.head.val).toBe(2);
    list3.remove(0);
    expect(list3.head.val).toBe(3);
    list3.remove(0);
    expect(list3.head.val).toBe(4);
    expect(list3.head.next.val).toBe(5);
    expect(list3.head.next.next.val).toBe(6);
    expect(list3.head.next.next.next.val).toBe(7);
    expect(list3.head.next.next.next.next.val).toBe(8);
    expect(list3.head.next.next.next.next.next.val).toBe(9);
});