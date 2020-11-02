# Problem #29 [Easy]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Amazon.  

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string `"AAAABBBCCDAA"` would be encoded as `"4A3B2C1D2A"`.  

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.  

## Solution  

For encoding tun-length I created a method that runs through the given string and check if the current character is the same as previous, and if so, increment a counter and otherwise moves counter back to one and continue on the next until string is finished.  

For decoding, when iterating through the string, rather than looking for repeats, seach for number characters (`N`) and when they are not found, just concatenate to the answer string, otherwise loo for the next non-number character and concatenate `N` instances of that character to the answer variable, so return it.  

The time complexity for both methods is linear `O(N)` (where `N` is the number of characters of the given string) as each element of the string will be visited once always. And space is also linear `O(N)` (where N is the number of characters of given string) for encoding - as in the worst case where no repeats occur, the answer will have the same size as string given.  
