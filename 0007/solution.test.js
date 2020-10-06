const {countPossibleDecodedMessages} = require('./solution.js');

it('Problem #7 - Encoded message => brute force', () => {
    try {
        countPossibleDecodedMessages('011');
    } catch (ex) {
        expect(ex).toBe('Invalid message');
    }

    expect(countPossibleDecodedMessages('111')).toBe(3); // 'aaa', 'ka', 'ak'
    expect(countPossibleDecodedMessages('1111')).toBe(5); // 'aaaa', 'kaa', 'aak', 'aka', 'kk'
    expect(countPossibleDecodedMessages('11111')).toBe(8); // 'aaaaa', 'kaaa', 'akaa', 'aaka', 'aaak', 'kka', 'akk', 'kak'
    expect(countPossibleDecodedMessages('34226')).toBe(3); // 'cdbbf', 'cdvf', 'cdbz'
});

