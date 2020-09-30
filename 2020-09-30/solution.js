// Time complexity O(n^2)
const bruteForce = (list, k) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (i !== j && list[i] + list[j] == k) {
                return true;
            }
        }
    }

    return false;
};

// Time complexity O(n log n)
const lessBruteForce = (list, k) => {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] == k) {
                return true;
            }
        }
    }

    return false;
};

// Time complexity O(n)
const singleIteration = (list, k) => {
    for (let i= 0; i < list.length; i++) {
        if (list.splice(i+1).includes(k - list[i])) {
            return true;
        }
    }

    return false;
};

const singleInstruction = (list, k) => {
    return !!list.find((e, $i) => list.splice($i+1).includes(k - e));
};

module.exports = {
    bruteForce,
    lessBruteForce,
    singleIteration,
    singleInstruction,
};
