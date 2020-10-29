const {justify} = require('./solution');

it('Problem #28 - Justify lines', function () {
    // expect(justify(['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'], 16)).toEqual([
    //     'the  quick brown',
    //     'fox  jumps  over',
    //     'the   lazy   dog',
    // ]);

    expect(justify(['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'], 5)).toEqual([
        '  the',
        'quick', 
        'brown', 
        '  fox', 
        'jumps', 
        ' over', 
        '  the', 
        ' lazy', 
        '  dog'
    ]);
});