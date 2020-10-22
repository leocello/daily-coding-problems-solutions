const buildSentence = (dictionary, string) => {
    let answer = [];

    let i = 0;
    while(i < string.length) {
        for (let j = 1; j < string.length - i + 1; j++) {
            if (dictionary.includes(string.substr(i, j))) {
                answer.push(string.substr(i, j));
                i += j - 1;

                break;
            }
        }
        i++;
    }

    return answer;
};

module.exports = {
    buildSentence,
};