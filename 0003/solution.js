class BinTree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    serialise() {
        return this.val + '||' + (!!this.left ? this.left.serialise() : '[[NULL]]') +  '||' + (!!this.right ? this.right.serialise() : '[[NULL]]');
    }

    static deserialise(serialised) {
        let serialisedArray = serialised.split('||');

        const runDeserialise = () => {
            let val = serialisedArray.shift();

            if (val === '[[NULL]]') {
                return null;
            }

            return new BinTree(val, runDeserialise(), runDeserialise());
        };

        return runDeserialise();
    }
}

module.exports = BinTree;