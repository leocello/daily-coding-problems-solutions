const {cons, car, cdr} = require('./solution.js');

it('Problem #5 - Pairs', () => {
    expect(car(cons(3, 4))).toBe(3);
    expect(cdr(cons(3, 4))).toBe(4);

    expect(car(cons(1, 250))).toBe(1);
    expect(cdr(cons(1, 250))).toBe(250);
});

