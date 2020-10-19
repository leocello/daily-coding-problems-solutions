const {getSizeOfLongestPath} = require('./solution.js');

it('Problem #17 - Size of the longest path', function () {
    expect(getSizeOfLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext')).toBe(20);
    expect(getSizeOfLongestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext')).toBe(32);
});