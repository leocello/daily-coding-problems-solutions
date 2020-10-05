const bruteForce = listOfNumbers => {
    const size = listOfNumbers.length;

    for (let check = 1; check <= size + 1; check++) {
        // Iteration
        /*
        let found = false;
        for (let i = 0; i < listOfNumbers.length; i++) {
            if (listOfNumbers[i] === check) {
                found = true;
                break;
            }
        }

        if (!found) {
            return check;
        }
        */

        // Replacing the iteration for method includes()
        if (!listOfNumbers.includes(check)) {
            return check;
        }
    }

    return 1;
};

const spareList = listOfNumbers => {
    let checkList = [];

    for (let i = 0; i < listOfNumbers.length; i++) {
        checkList.push(false);
    }

    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers[i] > 0 && listOfNumbers[i] <= listOfNumbers.length) {
            checkList[listOfNumbers[i] - 1] = true;
        }
    }

    for (let i = 0; i < checkList.length; i++) {
        if (!checkList[i]) {
            return i + 1;
        }
    }

    return listOfNumbers.length + 1;
};

const oneList = listOfNumbers => {
    if (!listOfNumbers || listOfNumbers.length === 0) {
        return 1;
    }

    listOfNumbers.push(0);
    let size = listOfNumbers.length;

    for (let i = 0; i < size; i++) {
        if (listOfNumbers[i] < 1 || listOfNumbers[i] >= size) {
            listOfNumbers[i] = 0;
        }
    }

    for (let i = 0; i < size; i++) {
        listOfNumbers[listOfNumbers[i] % size] += size;
    }

    for (let i = 0; i < size; i++) {
        if (listOfNumbers[i] === 0) {
            return i;
        }
    }

    return size;
};

const oneListImproved = listOfNumbers => {
    if (!listOfNumbers || listOfNumbers.length === 0) {
        return 1;
    }

    const size = listOfNumbers.length;
    let hasOne = false;

    for (let i = 0; i < size; i++) {
        if (listOfNumbers[i] === 1) {
            hasOne = true;
        } else if (listOfNumbers[i] < 1 || listOfNumbers[i] > size) {
            listOfNumbers[i] = 1;
        }
    }

    // Special case ( no number 1 found )
    if (!hasOne) {
        return 1;
    }

    let index = 0;
    for (let i = 0; i < size; i++) {
        index = Math.abs(listOfNumbers[i]) - 1;
        listOfNumbers[index] = listOfNumbers[index] > 0 ? -1 * listOfNumbers[index] : listOfNumbers[index];
    }

    for (let i = 0; i < size; i++) {
        if (listOfNumbers[i] > 0) {
            return i + 1;
        }
    }

    return size + 1;
};

module.exports = {
    bruteForce,
    spareList,
    oneList,
    oneListImproved,
};
