# Problem #30 [Medium]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Facebook.  

You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.  

Compute how many units of water remain trapped on the map in `O(N)` time and `O(1)` space.  

For example, given the input `[2, 1, 2]`, we can hold `1` unit of water in the middle.  

Given the input `[3, 0, 1, 3, 0, 5]`, we can hold `3` units in the first index, `2` in the second, and `3` in the fourth index (we cannot hold `5` since it would run off to the left), so we can trap `8` units of water.  

## Solutions  

### Brute force  

I couldn't get to the solution with the requested time and space complexities at first stage, so to get there I started with a brute force solution. In this case it runs in `O(N²)` time and `O(N)` space. And it's calculated bu iterating through the map from second item until the one before the last and check the highest borders to the left and right of that item, and store in a separated map the amount trapped in that position based on the borders found (if found). So after that sum all the values trapped on each position to get the total of eater trapped.  

### Double pointer

After creating the brute force solution and seeing the for every item I had to check high places on the left and the right to find out how much water would be trapped in that position I decided to create 2 pointers - one to iterate from the left and the second to iterate from the right and stop when they point to the same position, and store the highest spot found on both sides as well, and for every position where the height is lower than the highest found, add the difference to a total value.  

The time complexity is linear `O(N)` and spacde is constant `O(1)` both as requested.  
