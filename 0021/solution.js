const sortTime = (a, b) => {
    if (a[0] == b[0]) {
        return a[1] - b[1];
    }

    return a[0] - b[0];
};

const checkNumberOfRooms = intervals => {
    if (intervals.length <= 1) {
        return intervals.length;
    }
    
    intervals = intervals.sort(sortTime);

    let minGlobal = 1;

    for (let i = 0; i < intervals.length - 1; i++) {
        let min = 1;
        for (let j = i + 1; j < intervals.length; j++) {
            if (intervals[j][0] < intervals[i][1]) {
                min++;
            } else {
                break;
            }
        }
        if (min > minGlobal) {
            minGlobal = min;
        }
    }

    return minGlobal;
};

module.exports = {
    checkNumberOfRooms,
};