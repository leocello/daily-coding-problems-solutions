class BTNode
{
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const getSecondFromBT = root => {
    if (!root.right) {
        let sec = root.left;

        while (!!sec.right) {
            sec = sec.right;
        }

        return sec;
    }

    let sec = root;
    while (!!sec.right.right) {
        sec = sec.right;
    }

    return sec;
};

module.exports = {
    BTNode,
    getSecondFromBT,
};
