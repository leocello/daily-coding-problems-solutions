# Problem #27 [Easy]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Facebook.  

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).  

For example, given the string `"\(\[\]\)\[\]\(\{\}\)"`, you should return `true`.  

Given the string `"\(\[\)\]"` or `"\(\(\(\)"`, you should return `false`.  

## Solution

In my solution I created a blank string and called it `open` that will store all open brackets in order. So after that I iterate through the string and append to `open` all opening brackets and if it finds a closing bracket, it checks if it's the same type as the last character from `open` and if not, return false. After iterating through the whole string, if there are still any character into `open`, return false, otherwise true.  

The time complexity for that solution is linear `O(n)` where `n` is the size of the string. And the space complexity is linear on the worst case as well `O(n)`.  
