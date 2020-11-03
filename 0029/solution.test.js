const { encodeRunLength, decodeRunLength } = require('./solution');

it('Problem #29 - Run-length encode a string', () => {
    expect(encodeRunLength('')).toEqual('');
    expect(encodeRunLength('XYZ')).toEqual('XYZ');
    expect(encodeRunLength('AABBBCCCC')).toEqual('2A3B4C');
    expect(encodeRunLength('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')).toEqual('12WB12W3B24WB');
    expect(encodeRunLength('  hsqq qww  ')).toEqual('2 hs2q q2w2 ');
    expect(encodeRunLength('aabbbcccc')).toEqual('2a3b4c');
  });
  
  it('Problem #29 - Run-length decode a string', () => {
    expect(decodeRunLength('')).toEqual('');
    expect(decodeRunLength('XYZ')).toEqual('XYZ');
    expect(decodeRunLength('2A3B4C')).toEqual('AABBBCCCC');
    expect(decodeRunLength('12WB12W3B24WB')).toEqual('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB');
    expect(decodeRunLength('2 hs2q q2w2 ')).toEqual('  hsqq qww  ');
    expect(decodeRunLength('2a3b4c')).toEqual('aabbbcccc');
  });
  
  it('Problem #29 - Run-length encode and then decode', () => {
    expect(decodeRunLength(encodeRunLength('zzz ZZ  zZ'))).toEqual('zzz ZZ  zZ');
  });