# Problem #33 [Easy]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Microsoft.  

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.  

Recall that the median of an even-numbered list is the average of the two middle numbers.  

For example, given the sequence `[2, 1, 5, 7, 2, 0, 5]`, your algorithm should print out:  

```javascript
2
1.5
2
3.5
2
2
2
```

## Solution

I decided to create another variable that stores a sub-list with all elements from the first until the current already ordered for every iteration and return the median of that ordered list.  

This method runs in quadratic time `O(N²)` (where `N` is the size of the given list) in the worst case (when the original list is ordered inversely). And in linear space `O(N)` (where `N` is the size of the given list).  
