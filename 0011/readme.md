# Problem #11

Good morning! Here's your coding interview problem for today.  

This problem was asked by Twitter.  

Implement an autocomplete system. That is, given a query string `s` and a set of all possible query strings, return all strings in the set that have s as a prefix.  

For example, given the query string `de` and the set of strings `[dog, deer, deal]`, return `[deer, deal]`.  

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.  

## Solution

We could create an array and search in all item values to check the prefix and return a new array with the items containing the prefix. We also could create a dictionary (hashtable). But the problem requires a more efficient solution, so I implemented a [trie](https://en.wikipedia.org/wiki/Trie). Using a trie, it makes the search for prefixes very efficient making the complexity for the search algorithm to be in the worst case O(L*W) where L is the average length of the words in the trie and W the number of words.  
