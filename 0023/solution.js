const getShortestPathSize = (matrix, start, end) => {
    if (matrix[start.r][start.c] === true || matrix[end.r][end.c] === true) {
        return null;
    }
    
    if (start.r == end.r && start.c == end.c) {
        return 0;
    }

    const visit = (pos, weight) => {
        if (pos.r >= 0 && pos.r < matrix.length && pos.c >= 0 && pos.c <= matrix[0].length) {
            const val = matrix[pos.r][pos.c];

            if (val === false || (typeof(val) == 'number' && weight < val)) {
                matrix[pos.r][pos.c] = weight;
                visit({r: pos.r-1, c: pos.c}, weight + 1);
                visit({r: pos.r, c: pos.c + 1}, weight + 1);
                visit({r: pos.r + 1, c: pos.c}, weight + 1);
                visit({r: pos.r, c: pos.c - 1}, weight + 1);
            }
        }
    };

    visit(start, 0);

    if (typeof(matrix[end.r][end.c]) != 'number') {
        return null;
    }

    return matrix[end.r][end.c];
};

module.exports = {
    getShortestPathSize,
};