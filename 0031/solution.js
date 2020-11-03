const getEditDistance = (string1, string2) => {
    if (string1.length === 0) {
        return string2.length;
    }

    if (string2.length === 0) {
        return string1.length;
    }

    if (string1 === string2) {
        return 0;
    }

    if (string1[0] == string2[0]) {
        return getEditDistance(string1.substr(1), string2.substr(1));
    }

    const deletion = getEditDistance(string1.substr(1), string2);
    const insertion = getEditDistance(string1, string2.substr(1));
    const substitution = getEditDistance(string1.substr(1), string2.substr(1));

    if (deletion <= insertion && deletion <= substitution) {
        return 1 + deletion;
    }

    if (insertion <= deletion && insertion <= substitution) {
        return 1 + insertion;
    }

    return 1 + substitution;
};

module.exports = {
    getEditDistance,
};