class BinTree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const countUnival = binTree => {
    let count = 0;

    if (
        (
            !binTree.left
            && !binTree.right
        )
        ||
        (
            !!binTree.left
            && !!binTree.right
            && binTree.left.val === binTree.right.val
        )
    ) {
        count ++;
    }

    if (!!binTree.left) {
        count += countUnival(binTree.left);
    }

    if (!!binTree.right) {
        count += countUnival(binTree.right);
    }

    return count;
};

module.exports = {
    BinTree,
    countUnival
};