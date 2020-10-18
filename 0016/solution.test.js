const {Log} = require('./solution.js');

it('Problem #16 - Products log', function () {
    const log = new Log(5);

    log.record(1);
    log.record(2);
    log.record(3);
    log.record(4);
    log.record(5);
    log.record(6);

    expect(log.get_last(1)).toBe(6);
    expect(log.get_last(2)).toBe(5);
    expect(log.get_last(3)).toBe(4);
    expect(log.get_last(4)).toBe(3);
    expect(log.get_last(5)).toBe(2);
    
    try {
        log.get_last(6);
    } catch (ex) {
        expect(ex).toBe('Overflow');
    }
});