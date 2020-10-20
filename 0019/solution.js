const getMinimumCostGreedy = sheet => {
    if (sheet.length > 1 && sheet[0].length == 1) {
        throw "Impossible to have neighbours with different colours";
    }

    let cost = 0;
    let lastColor = null;

    for (let i = 0; i < sheet.length; i++) {
        let thisCost = null;
        let thisColor = null;
        for (let j = 0; j < sheet[i].length; j++) {
            if ((lastColor === null || lastColor != j) && (thisCost === null || sheet[i][j] < thisCost)) {
                thisCost = sheet[i][j];
                console.log(sheet[i][j]);
                thisColor = j;
            }
        }
        lastColor = thisColor;
        cost += thisCost;
    }

    return cost;
};

const getMinimumCost = sheet => {
    if (sheet.length > 1 && sheet[0].length == 1) {
        throw "Impossible to have neighbours with different colours";
    }

    const getMinFromRow = (row, excludedColumns = [], move = true) => {
        let currentLowestIndex = null;
        for (let i = 0; i < sheet[row].length; i++) {
            if (!excludedColumns.includes(i)) {
                if (currentLowestIndex === null || sheet[row][i] < sheet[row][currentLowestIndex]) {
                    currentLowestIndex = i;
                }
            }
        }

        let currentLowestSum = sheet[row][currentLowestIndex];

        if (row === sheet.length - 1 || !move) {
            return [currentLowestIndex, currentLowestSum];
        }

        currentLowestSum += getMinFromRow(row + 1, [currentLowestIndex])[1];

        const nextLower = getMinFromRow(row + 1);
        const currentBasedOnNextLower = getMinFromRow(row, [excludedColumns[0], nextLower[0]], false);

        currentBasedOnNextLower[1] = currentBasedOnNextLower[1] + nextLower[1];

        if (currentBasedOnNextLower[1] < currentLowestSum) {
            return [currentBasedOnNextLower[0], currentBasedOnNextLower[1]];
        }

        return [currentLowestIndex, currentLowestSum];
    };

    return getMinFromRow(0)[1];
};

const getMinimumCostWithMemoisation = sheet => {
    if (sheet.length > 1 && sheet[0].length == 1) {
        throw "Impossible to have neighbours with different colours";
    }

    const getMinFromRow = (row, excludedColumns = [], move = true, memo = {}) => {
        if (!!memo[JSON.stringify({row, excludedColumns, move})]) {
            return memo[JSON.stringify({row, excludedColumns, move})];
        }

        let currentLowestIndex = null;
        for (let i = 0; i < sheet[row].length; i++) {
            if (!excludedColumns.includes(i)) {
                if (currentLowestIndex === null || sheet[row][i] < sheet[row][currentLowestIndex]) {
                    currentLowestIndex = i;
                }
            }
        }

        let currentLowestSum = sheet[row][currentLowestIndex];

        if (row === sheet.length - 1 || !move) {
            memo[JSON.stringify({row, excludedColumns, move})] = [currentLowestIndex, currentLowestSum];
            return [currentLowestIndex, currentLowestSum];
        }

        currentLowestSum += getMinFromRow(row + 1, [currentLowestIndex], true, memo)[1];

        const nextLower = getMinFromRow(row + 1, [], true, memo);
        const currentBasedOnNextLower = getMinFromRow(row, [excludedColumns[0], nextLower[0]], false, memo);

        currentBasedOnNextLower[1] = currentBasedOnNextLower[1] + nextLower[1];

        if (currentBasedOnNextLower[1] < currentLowestSum) {
            memo[JSON.stringify({row, excludedColumns, move})] = [currentBasedOnNextLower[0], currentBasedOnNextLower[1]];
            return [currentBasedOnNextLower[0], currentBasedOnNextLower[1]];
        }

        memo[JSON.stringify({row, excludedColumns, move})] = [currentLowestIndex, currentLowestSum];
        return [currentLowestIndex, currentLowestSum];
    };

    return getMinFromRow(0)[1];
};

module.exports = {
    getMinimumCost,
    getMinimumCostWithMemoisation,
};