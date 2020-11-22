# Problem #35 [Hard]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

Given an array of strictly the characters `'R'`, `'G'`, and `'B'`, segregate the values of the array so that all the `R`s come first, the `G`s come second, and the `B`s come last. You can only swap elements of the array.  

Do this in linear time and in-place.  

For example, given the array `['G', 'B', 'R', 'R', 'B', 'R', 'G']`, it should become `['R', 'R', 'R', 'G', 'G', 'B', 'B']`.  

## Solution  

I couldn't use brute sort algorithms to solve that problem like bubble sort, insertion sort or even merge sort, but they would run in quadratic time for the first two and `O(N log N)` for the third, which is not ideal as the problem requests it to run in linear time.

So the solution I could come up with was creating 3 pointers: `r` that would keep record of the next element after all R's in the beginning of the array, another one called `b` that will keep the previous element of all the B's in the end of the array, and `i` that would iterate in the middle and swap with `r` or `b` when necessary. The solution runs in linear time `O(N)` and constant in space `O(1)`.  
