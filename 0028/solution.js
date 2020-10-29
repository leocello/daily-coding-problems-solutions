const justify = (words, lineLength) => {
    let ret = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > lineLength) {
            throw "There are words greater than line max length";
        }

        if (ret.length == 0) {
            ret.push(words[i]);
        } else {
            const phrase = ret[ret.length - 1];

            let count = words[i].length + (phrase.length > 0 ? phrase.length + 1 : 0);
            if (count <= lineLength) {
                ret[ret.length - 1] += ' ' + words[i];
            } else {
                ret.push(words[i]);
            }
        }
    }

    for (let i = 0; i < ret.length; i++) {
        let phrase = ret[i];
        if (phrase.length < lineLength) {
            const numWords = phrase.split(/\s+/g).length;
            if (numWords == 1) {
                phrase = ' '.repeat(lineLength - phrase.length) + phrase;
            } else {
                let numSpaces = 1;

                while(true) {
                    const re = new RegExp(`\\S${'\\s'.repeat(numSpaces)}\\S`, 'g');

                    if ((phrase.match(re) || []).length > 0) {
                        let index = (re.exec(phrase)).index;
                        phrase = phrase.substring(0, index + 1) + ' ' + phrase.substr(index + 1);

                        if (phrase.length == lineLength) {
                            break;
                        }
                    } else {
                        numSpaces++;
                    }
                }
            }

            ret[i] = phrase;
        }
    }

    return ret;

};

module.exports = {
    justify,
};