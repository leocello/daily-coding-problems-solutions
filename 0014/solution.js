const monteCarloPi = totalPoints => {
    let assertions = 0;
    let x, y;
    for (let i = 1; i <= totalPoints; i++) {
        x = Math.random();
        y = Math.random();
        if ((x * x) + (y * y) < 1) {
            assertions++;
        }
    }

    const pi = assertions / totalPoints * 4;

    return Math.round(pi * 1000) / 1000;
};

console.log(monteCarloPi(10));
console.log(monteCarloPi(100));
console.log(monteCarloPi(1000));
console.log(monteCarloPi(10000));
console.log(monteCarloPi(100000));
console.log(monteCarloPi(1000000));
console.log(monteCarloPi(10000000));
console.log(monteCarloPi(100000000));
