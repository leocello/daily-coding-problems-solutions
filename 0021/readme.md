# Problem #21 [Easy]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Snapchat.  

Given an array of time intervals `(start, end)` for classroom lectures (possibly overlapping), find the minimum number of rooms required.  

For example, given `[(30, 75), (0, 50), (60, 150)]`, you should return 2.  

## Solution  

The solution is a function where at first I order the time intervals by its start and then iterate through the array until the position before the last and for each item, iterate again from next to the last, and comparing if the start time of second iteration is lower than end time from dirst, and if so, increment the number of rooms required. The time complexity in the worst case (all intervals clash) is quadratic `O(n^2)` and the space complexity is constant `O(1)`.  
