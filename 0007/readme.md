# Problem #7  

06 Oct 2020  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Facebook.  

Given the mapping `a = 1, b = 2, ... z = 26`, and an encoded message, count the number of ways it can be decoded.  

For example, the message `'111'` would give `3`, since it could be decoded as `'aaa'`, `'ka'`, and `'ak'`.  

You can assume that the messages are decodable. For example, `'001'` is not allowed.  

## Solutions  

### 1. Brute force  

I confess it was hard to figure out how to solve this problem, and I couldn't create more than one solution as well. This uses recursion and checks all possible pairs from the message and if they are valid, increments the count and runs agains with a substring starting from the next character counting from after the pair, otherwise just runs again with a substring starting from next character.  
