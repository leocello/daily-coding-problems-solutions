const maxSum = numbers => {
    let sum = 0;
    let i = 0;

    while (i < numbers.length) {
        if (i + 3 < numbers.length && i == 0) {
            if (numbers[i] + numbers[i + 2] >= numbers[i + 1] + numbers[i + 3]) {
                sum += numbers[i];
                i += 2;
                continue;
            }

            sum += numbers[i + 1];
            i += 3;
            continue;
        }

        if (i + 2 < numbers.length) {
            if (numbers[i] + numbers[i + 2] >= numbers[i + 1]) {
                sum += numbers[i];
                i += 2;
                continue;
            }

            sum += numbers[i + 1];
            i += 3;
            continue;
        }

        if (i + 1 < numbers.length) {
            sum += numbers[i] >= numbers[i + 1] ? numbers[i] : numbers[i + 1];
            break;
        }

        sum += numbers[i];
        break;
    }

    return sum;
};

module.exports = {
    maxSum,
};