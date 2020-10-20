# Problem #19 [Medium]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Facebook.  

A builder is looking to build a row of `N` houses that can be of `K` different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.  

Given an `N` by `K` matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.  

## Solutions

First thought to solve this problem was using a greedy algorithm that consists in getting the best option from the first list and figuring out the best from the next, and from there, the next until the last list. This algorithm has a very good time `O(n*k)` and space `O(1)` complexity but won't bring the best result always, as maybe the best result overall uses the second best from first list.  

So I came with a second solution where using recursivity, compares if the result using the best from current list is better than result using the best from next list, until reaching the last list which will always resturn the best from its own items. The time complexity `O(n^k)` for this case is not as good as a greedy algorithm as it has multiply recursive calls.  

Then I decided to reimplement the second solution but this time using memoisation to try reducing the time complexity. It didn't change the formula for the complexity but running some simulations I found it iterates at least a half less times. The problem is that it will impact the space complexity, turning it to `O(n*k)`.  
