// Brute force - O((n-k)*k)
const maxFromSubArrayBruteForce = (items, k) => {
    if (k > items.length) {
        throw "Invalid value of K";
    }

    for (let i = 0; i <= items.length - k; i++) {
        let max = null;
        for (let j = i; j < i + k; j++) {
            if (max === null || items[j] > max) {
                max = items[j];
            }
        }
        console.log(max);
    }
};

const maxFromSubArrayLinear = (items, k) => {
    if (k > items.length) {
        throw "Invalid value of K";
    }

    const list = {
        head: null,
        last: null,
        getHead: () => {
            return list.head.v;
        },
        getLast: () => {
            return list.last.v;
        },
        hasHead: () => {
            return !!list.head;
        },
        add: (v) => {
            const newItem = {
                v: v,
                prev: list.last,
                next: null,
            };

            if (!list.hasHead()) {
                list.head = newItem;
            }

            if (!!list.last) {
                list.last.next = newItem;
            }

            list.last = newItem;
        },
        clear: () => {
            list.head = null;
            list.last = null;
        },
        removeHead: () => {
            if (!!list.head.next) {
                list.head.next.prev = null;
                list.head = list.head.next;
            } else {
                list.clear();
            }
        },
        removeLast: () => {
            if (!!list.last.prev) {
                list.last.prev.next = null;
                list.last = list.last.prev;
            } else {
                list.clear();
            }
        },
    };

    for (let i = 0; i < k; i++) {
        while (!!list.hasHead() && items[list.getLast()] < items[i]) {
            list.removeLast();
        }

        list.add(i);
    }

    for (let i = k; i < items.length; i++) {
        console.log(items[list.getHead()]);

        while (!!list.hasHead() && list.getHead() < i-k+1) {
            list.removeHead();
        }

        while (!!list.hasHead() && items[list.getLast()] < items[i]) {
            list.removeLast();
        }

        list.add(i);
    }

    console.log(items[list.getHead()]);
};

module.exports = {
    maxFromSubArrayBruteForce,
    maxFromSubArrayLinear,
};