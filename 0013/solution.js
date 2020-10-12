const countSubstr = (k, s) => {
    let chars = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (chars.includes(s[i])) {
            count++;
        } else {
            if (chars.length >= k) {
                break;
            }

            chars.push(s[i]);
            count++;
        }
    }

    if (count == s.length) {
        return count;
    }

    const nextCount = s.length > count ? countSubstr(k, s.substr(1)) : 0;

    return count > nextCount ? count : nextCount;
};

module.exports = {
    countSubstr,
};