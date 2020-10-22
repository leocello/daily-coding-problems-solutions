const {checkNumberOfRooms} = require('./solution.js');

it('Problem #21 - Number of rooms for lectures => Brute force', () => {
    expect(checkNumberOfRooms([[30, 75], [0, 50], [60, 150]])).toBe(2);
    expect(checkNumberOfRooms([[30, 90], [0, 120], [0, 50], [0, 30], [60, 150]])).toBe(3);
    expect(checkNumberOfRooms([])).toBe(0);
    expect(checkNumberOfRooms([0, 45])).toBe(1);
    expect(checkNumberOfRooms([0, 30], [60, 120], [160, 190], [30, 60], 120, 160)).toBe(1);
});