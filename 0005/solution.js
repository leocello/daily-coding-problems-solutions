const cons = (a, b) => {
    const pair = f => {
        return f(a, b);
    }

    return pair;
};

const car = consFunction => {
    const first = (a, b) => {
        return a;
    };

    return consFunction(first);
};


const cdr = consFunction => {
    const last = (a, b) => {
        return b;
    };

    return consFunction(last);
};


module.exports = {
    cons,
    car,
    cdr,
};
