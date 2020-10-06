const isValid = (message) => {
    return parseInt(message) <= 26;
}

const countPossibleDecodedMessages = message => {
    if (message.substr(0,1) == 0) {
        throw 'Invalid message';
    }

    if (message.length == 1) {
        return 1;
    }

    if (message.length == 2) {
        return isValid(message) ? 2 : 1;
    }

    let count = 0;

    count += isValid(message.substr(0,2)) ? countPossibleDecodedMessages(message.substr(2)) : 0;
    count += countPossibleDecodedMessages(message.substr(1));

    return count;
};

module.exports = {
    countPossibleDecodedMessages,
};
