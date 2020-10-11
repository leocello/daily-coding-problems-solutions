class TrieNode {
    constructor() {
        this.children = {};
        this.value = null;
    }
}

const addString = (node, str) => {
    const strAsArray = str.split('');
    for (let i in strAsArray) {
        const char = strAsArray[i];
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.value = str;
};

const findItemsWithPrefix = (root, prefix) => {
    const ret = [];

    const findNodeByString = (node, str) => {
        const strAsArray = str.split('');
        for (let i in strAsArray) {
            if (!node.children[strAsArray[i]]) {
                return null;
            }

            node = node.children[strAsArray[i]];
        }

        return node;
    };

    const findItems = (node, str) => {
        if (!node) {
            return null;
        }

        if (!!node.value) {
            ret.push(node.value);
        }

        for (let i in node.children) {
            str += i;
            findItems(node.children[i], str);
        }
    };

    findItems(findNodeByString(root, prefix), prefix);

    return ret;
};

const autoComplete = (s, items) => {
    const rootNode = new TrieNode();
    items.forEach(element => {
        addString(rootNode, element);
    });

    return findItemsWithPrefix(rootNode, s);
};

module.exports = {
    autoComplete,
};