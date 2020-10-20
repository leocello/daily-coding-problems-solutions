# Problem #20 [Easy]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.  

For example, given `A = 3 -> 7 -> 8 -> 10` and `B = 99 -> 1 -> 8 -> 10`, return the node with value `8`.  

In this example, assume nodes with the same value are the exact same node objects.  

Do this in `O(M + N)` time (where `M` and `N` are the lengths of the lists) and constant space.  

## Solution

I first created a brute force solution that will iterate through first list and for each item iterates through the second list and look for same value, and returns it when found, but if not found, return null. The time complexity of this solution is `O(N*M)` and its space complexity is `O(1)`.  

This was not the ideal solution as the problem requires a linear time complexity of `O(M + N)`, so I decided to create a second solution and what I did was reversing both lists and iterates on both reversed lists at the same time and search for a node with different value, so when found the previous was the intersect point. The time complexity for this solution is `O(M+N)` and space is constant.  
