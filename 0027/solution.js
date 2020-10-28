const checkBrackets = str => {
    let open = '';
    for (let i = 0; i < str.length; i++) {
        if (['(', '[', '{'].includes(str[i])) {
            open += str[i];
        } else if (
            open.length > 0
            && (
                (str[i] === ')' && open.substr(-1) == '(')
                || (str[i] === ']' && open.substr(-1) == '[')
                || (str[i] === '}' && open.substr(-1) == '{')
            )
         ) {
            open = open.substr(0, open.length - 1);
        } else {
            return false;
        }
    }

    return open.length === 0;
};

module.exports = {
    checkBrackets,
};