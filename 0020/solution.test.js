const {Node, LinkedList, getIntersectFromListsBruteForce, getIntersectFromListsFromReverse} = require('./solution.js');

const A = new LinkedList(new Node(3, new Node(7, new Node(8, new Node(10)))));
const B = new LinkedList(new Node(99, new Node(1, new Node(8, new Node(10)))));

it('Problem #20 - Linked lists intersections => Brute force', function () {
    expect(getIntersectFromListsBruteForce(A, B)).toEqual(8);
});

it('Problem #20 - Linked lists intersections => reversing', function () {
    expect(getIntersectFromListsFromReverse(A, B)).toEqual(8);
});