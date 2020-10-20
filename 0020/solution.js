class Node {
    constructor(v, next) {
        this.v = v;
        this.next = !!next ? next : null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = !!head ? head : null;
    }
};

const getIntersectFromListsBruteForce = (a, b) => {
    let ai = a.head;

    while (!!ai.next) {
        let bi = b.head;
        while (!!bi.next) {
            if (ai.next.v === bi.next.v) {
                return ai.next.v;
            }
            bi = bi.next;
        }
        ai = ai.next;
    }

    return null;
};

const getIntersectFromListsFromReverse = (a, b) => {
    const reverseList = list => {
        let i = list.head;
        let tmp = null;
        let prev = null;

        while(!!i.next) {
            tmp = i.next;
            i.next = prev;

            prev = i;
            i = tmp;
        }

        i.next = prev;

        list.head = i;
        return list;
    };

    reverseList(a);
    reverseList(b);

    let ia = a.head;
    let ib = b.head;

    if (ia.v === ib.v) {
        while(ia.next.v === ib.next.v) {
            ia = ia.next;
            ib = ib.next;
        }

        return ia.v;
    }

    return null;
};

module.exports = {
    Node,
    LinkedList,
    getIntersectFromListsBruteForce,
    getIntersectFromListsFromReverse,
};
