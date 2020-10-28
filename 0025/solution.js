const regexMatch = (regex, str) => {
    const check = [];

    for (let i = 0; i <= str.length; i++) {
        const row = [];
        for (let j = 0; j <= regex.length; j++) {
            if (i == 0 && j == 0) {
                row.push(true);
            } else {
                row.push(false);
            }
        
        }
        check.push(row);
    }

    for (let i = 1; i < check[0].length; i++) {
        if (regex[i - 1] === '*') {
            check[0][i] = check[0][i - 2];
        }
    }

    for (let i = 1; i < check.length; i++) {
        for (let j = 1; j < check[0].length; j++) {
            if (regex[j - 1] === '.' || regex[j - 1] === str[i - 1]) {
                check[i][j] = check[i - 1][j - 1];
            } else if (regex[j - 1] === '*') {
                check[i][j] = check[i][j - 2];
                if (regex[j - 2] === '.' || regex[j - 2] === str[i - 1]) {
                    check[i][j] = check[i][j] || check[i - 1][j];
                }
            } else {
                check[i][j] = false;
            }
        }
    }
  
    return check[str.length][regex.length];
};

module.exports = {
    regexMatch,
};