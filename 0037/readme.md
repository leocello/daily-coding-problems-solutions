# Problem #37 [Easy]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.  

For example, given the set `{1, 2, 3}`, it should return `{{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}`.  

You may also use a list or array to represent a set.  

## Solution

The solution for this problem was to create a return array with one element (blank subset), and for every `i` element on original set, create `i` elements on the result array with the current item value concatenated to all previous possibilities.  

This algorithm has a lot of space and time cost as it runs in exponential time and space as `O(2^N)` where `N` is the size of the original array.  
