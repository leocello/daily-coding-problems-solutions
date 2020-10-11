const steps12 = n => {
    if (n === 1 || n === 0) {
        return 1;
    }

    return steps12(n - 1) + steps12(n - 2);
};

const stepsDynamic = (n, steps) => {
    if (n < 0) {
        return 0;
    }

    if (n === 0) {
        return 1;
    }
    
    let total = 0;
    for(let i in steps) {
        total += stepsDynamic(n - steps[i], steps);
    }

    return total;
};

module.exports = {
    steps12,
    stepsDynamic,
};