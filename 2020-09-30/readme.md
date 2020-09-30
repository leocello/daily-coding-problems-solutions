# 30 Sep 2020

Good morning! Here's your coding interview problem for today.  
This problem was recently asked by Google.  
Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.  
For example, given `[10, 15, 3, 7]` and `k` of `17`, return `true` since `10 + 7` is `17`.  
**Bonus: Can you do this in one pass?**  

## Solutions

### 1. Brute-force - `bruteForce(list, k)`

The brute-force solution in this case is pretty much summing each number from the array with each other and check the sum, and if it finds the value of this sum equal to k, it returns true, otherwise, false.  
The worst-case time complexity in this case is O(n^2) which is not good.  
One thing that I realised that happens is that it tries each possible sum twice as it runs the array fully for each iteration. So, I came with the second solution solution.  

### 2. Less brute-force - `lessBruteForce(list, k)`

As the brute-force solution ran the array twice, comparing each sum twice as well, I thought I wouldn't have to run the full array on the second iteration, but only the remaining part of the array, excluding the ones I have already gone on the first iteration.  
So, I wrote this method that will have the worst-case time complexity of O(n log n).  
Then I realised I could do it in only one iteration to the array, so I created the third solution.  

### 3. Single iteration solution - `singleIteration(list, k)`

I really wanted to create an algorithm that would have the worst-case time complexity as O(n). So I thought that I actually don't need to sum the numbers to know if the sum is the value of `k`, but knowing the value of the item in the array, I could check if the difference between 'k' and the value of the item existed in the array.  
