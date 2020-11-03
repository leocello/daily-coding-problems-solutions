const checkArbitrageExists = table => {
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table.length; j++) {
            if (table[i][j] * table[j][i] !== 1) {
                return true;
            }
        }
    }

    return false;
};

module.exports = {
    checkArbitrageExists,
};