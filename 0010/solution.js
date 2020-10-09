const scheduleJob = (job, milliseconds) => {
    if (!typeof(job) === 'function') {
        throw "job is not a valid function";
    }

    setTimeout(job, milliseconds);
};

const sum = (number1, number2) => {
    return number1 + number2;
};

scheduleJob(() => {
    console.log(sum(1, 2));
}, 1000);

scheduleJob(() => {
    console.log(sum(5, 6));
}, 500);

scheduleJob(() => {
    console.log(sum(15, 11));
}, 1500);

scheduleJob(() => {
    console.log(sum(1, 1));
}, 100);