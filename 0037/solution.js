const getPowerSet = set => {
    const ret = [[]];

    for (let i = 0; i < set.length; i++) {
        const retLength = ret.length;
        for (let j = 0; j < retLength; j++) {
            ret.push(ret[j].concat(set[i]));
        }
    }

    return ret;
};

module.exports = {
    getPowerSet,
}