const bruteForce = (items) => {
    const results = [];
    for (let i = 0; i < items.length; i++) {
        let result = 1;
        for (let j = 0; j < items.length; j++) {
            if (i != j) {
                result = result * items[j];
            }
        }
        results.push(result);
    }

    return results;
};

const singleIteration = (items) => {
    const results = [];

    for (let i = 0; i < items.length; i++) {
        let result = items.reduce((a, b) => a * b, 1) / items[i];
        results.push(result);
    }

    return results;
};

const singleInstruction = (items) => {
    return items.map(item => items.reduce((a, b) => a * b, 1) / item);
};

const singleInstructionWithoutDivision = (items) => {
    return items.map((item, $index) => items.reduce((a, b, $subIndex) => $index !== $subIndex ? a * b : a, 1));
};

module.exports = {
    bruteForce,
    singleIteration,
    singleInstruction,
    singleInstructionWithoutDivision,
};