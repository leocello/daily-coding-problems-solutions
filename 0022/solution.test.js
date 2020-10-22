const {buildSentence} = require('./solution.js');

it('Problem #22 - Build sentence from dictionaty', () => {
    expect(buildSentence(['quick', 'brown', 'the', 'fox'], 'thequickbrownfox')).toEqual(['the', 'quick', 'brown', 'fox']);
    expect(buildSentence(['bed', 'bath', 'bedbath', 'and', 'beyond'], 'bedbathandbeyond')).toEqual(['bed', 'bath', 'and', 'beyond']);
});