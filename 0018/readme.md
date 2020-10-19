# Problem #18 [Hard]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

Given an array of integers and a number `k`, where `1 <= k <= length of the array`, compute the maximum values of each subarray of length `k`.  

For example, given array = `[10, 5, 2, 7, 8, 7]` and `k = 3`, we should get: `[10, 7, 8, 8]`, since:  

* `10 = max(10, 5, 2)`  
* `7 = max(5, 2, 7)`  
* `8 = max(2, 7, 8)`  
* `8 = max(7, 8, 7)`  

Do this in `O(n)` time and `O(k)` space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.  

## Solutions  

### Brute force  

I couldn't find a solutions that would run in linear time complexity at the beginning so I started building a brute force solution to see if I came with some ideas.  

This solution is simply going through the items array `n-k` times and checking the elements from `i` to `i+k` and print the greater value.  

### Linear  

So after doing the first solution, I spent some time thinking on how I could solve it, and came with a solution using a double linked list, where I would store in the linked list the indexes of the values from the items array that had potential to be the greatest among `k` items.  

So as I solved the problem using Javascript I had to implement the linked list and did it inside the function as it wouldn't be used anywhere else and made the solution using it.  

I don't know if it's the best solution but it runs linearly in time.  

### OBS  

I did the output using console.log() and it buffers so that's why the brute force test is commented on test file or the results for second test would include the first. I don't know a better solution to test console outputs on Jest, if you have a better idea, please let me know :).  
