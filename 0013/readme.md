# Problem #13  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Amazon.  

Given an integer `k` and a string `s`, find the length of the longest substring that contains at most `k` distinct characters.  

For example, given `s = "abcba"` and `k = 2`, the longest substring with `k` distinct characters is `"bcb"`.  

## Solution  

The solution I developed for this problem was simple: I run through the string counting the number of appearences of repeated characters until the sum of new characters is over k (in this case I return the sum). And then I check if the count is the size of the string (this means the whole string is the greater substring) and return the count if true - as there won't be any greater substrings after that. If false, then I check if there are substrings starting from second character that would have more characters than the current count and compare the results of the substring with the current string and return the greater.  

This solution will have a quadratic time complexity for the worst scenario as it runs the function n times recursively and it has a for loop inside that visits every item in the string.  
