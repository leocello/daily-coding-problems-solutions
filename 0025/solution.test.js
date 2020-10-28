const {regexMatch} = require('./solution');

it('Problem #25 - Regex match', function () {
    expect(regexMatch('ra.', 'ray')).toBe(true);
    expect(regexMatch('ra.', 'raymond')).toBe(false);
    expect(regexMatch('ra.*', 'raymond')).toBe(true);
    
    expect(regexMatch('.*at', 'chat')).toBe(true);
    expect(regexMatch('.*at', 'chatchat')).toBe(true);
    expect(regexMatch('.*at', 'chats')).toBe(false);

    expect(regexMatch('a*', '')).toBe(true);
    expect(regexMatch('a*', 'a')).toBe(true);
    expect(regexMatch('a*', 'aa')).toBe(true);
    expect(regexMatch('a*', 'aaa')).toBe(true);
    expect(regexMatch('a*', 'aaaa')).toBe(true);
    expect(regexMatch('a*', 'aaaaa')).toBe(true);

    expect(regexMatch('t*tat', 'ttttttttat')).toBe(true);
    expect(regexMatch('t*tat', 'tat')).toBe(true);

    expect(regexMatch('t*ta*t', 'tat')).toBe(true);
    expect(regexMatch('t*ta*t', 'tt')).toBe(true);
    expect(regexMatch('t*ta*t', 'tttttttttttaaaaaaaaaaat')).toBe(true);
    expect(regexMatch('t*ta*t', 'tttttttttttaaaaaaaaaaatt')).toBe(false);

    expect(regexMatch('t*a*t*', 'tttttttttttaaaaaaaaaaatt')).toBe(true);
    expect(regexMatch('t*a*t*', 'tat')).toBe(true);
    expect(regexMatch('t*a*t*', 'tt')).toBe(true);
    expect(regexMatch('t*a*t*', 'ta')).toBe(true);
    expect(regexMatch('t*a*t*', 'at')).toBe(true);
    expect(regexMatch('t*a*t*', 'a')).toBe(true);
    expect(regexMatch('t*a*t*', '')).toBe(true);

    expect(regexMatch('t*at*', 'a')).toBe(true);
    expect(regexMatch('t*at*', 'ta')).toBe(true);
    expect(regexMatch('t*at*', 'at')).toBe(true);
    expect(regexMatch('t*at*', 'tat')).toBe(true);
    expect(regexMatch('t*at*', 'ttatt')).toBe(true);

    expect(regexMatch('t*t*at*', 'ttatt')).toBe(true);
    expect(regexMatch('t*t*at*', 'tat')).toBe(true);
    expect(regexMatch('t*t*at*', 'at')).toBe(true);
    expect(regexMatch('t*t*at*', 'a')).toBe(true);
    expect(regexMatch('t*t*at*', 'ttttta')).toBe(true);
    expect(regexMatch('t*t*at*', 'ttttt')).toBe(false);

    expect(regexMatch('.*aa*a.*', 'aa')).toBe(true);
    expect(regexMatch('.*aa*a.*', 'a')).toBe(false);
    expect(regexMatch('.*aa*a.*', 'aaaaaaaaaa')).toBe(true);
    expect(regexMatch('.*aa*a.*', 'ffttaaaaaaaaaagh')).toBe(true);
    expect(regexMatch('.*aa*a.*', 'ffttaagh')).toBe(true);
    expect(regexMatch('.*aa*a.*', 'ffttaiagh')).toBe(false);
    expect(regexMatch('.*aa*a.*', 'ffttagh')).toBe(false);

    expect(regexMatch('.*aaa*aa.*', 'ffttaaaagh')).toBe(true);
    expect(regexMatch('.*aaa*aa.*', 'ffttaaaaaaaaaaagh')).toBe(true);
    expect(regexMatch('.*aaa*aa.*', 'ffttaaagh')).toBe(false);
    expect(regexMatch('.*aaa*aa.*', 'ffttaagh')).toBe(false);
    expect(regexMatch('.*aaa*aa.*', 'aaaa')).toBe(true);
    expect(regexMatch('.*aaa*aa.*', 'aaaaaaaaaaaaaaaa')).toBe(true);
    
    expect(regexMatch('t.*aa.*t', 'taat')).toBe(true);
    expect(regexMatch('t.*aa.*t', 'tretaahhjt')).toBe(true);
    expect(regexMatch('t.*aa.*t', 'tretahhjt')).toBe(false);
    expect(regexMatch('t.*aa.*t', 'tretaahhj')).toBe(false);
    expect(regexMatch('t.*aa.*t', 'retaahhjt')).toBe(false);
});