const swapRGB = (list) => {

    if (list.length <= 1) {
        return list;
    }

    if (list.length === 2) {
        return list.sort((a, b) => b - a);
    }

    let r = 0, b = list.length - 1;

    while (list[r] === 'R' && r < list.length) {
        r++;
    }

    while (list[b] === 'B' && b >= 0) {
        b--;
    }
    
    if (r === list.length || b < 0 || r >= b) {
        return list;
    }

    i = r;

    while (i <= b) {
        if (list[i] === 'R') {
            const tmp = list[r];
            list[r] = list[i];
            list[i] = tmp;
            r++;

            if (r > i) {
                i++;
            }
        } else if (list[i] === 'B') {
            const tmp = list[b];
            list[b] = list[i];
            list[i] = tmp;
            b--;
        } else {
            i++;
        }
    }

    return list;
};

module.exports = {
    swapRGB,
};