# Problem #31 [Easy]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between `“kitten”` and `“sitting”` is three: substitute the `“k”` for `“s”`, substitute the `“e”` for `“i”`, and append a `“g”`.  

Given two strings, compute the edit distance between them.  

## Solution

To solve this problem, the method I created does:

* Check if one of the strings is empty and if so, return the length of the other one (it would mean delete all character from one or insert all relative characters to the other).  
* Check if they have the same value, and in this case the return will be `0`, it means no changes need to be made.  
* Check if the first character of each one is the same, and if they are, it means no changes need to be made to it, so check how many changes need to be made from the second character of each string, running the method recursively from position `1` of each string.  
* Check how many changes would happen on every case (inserting, deleting or substituting) and return the lowest number found summing 1, calling the function recursively.  
