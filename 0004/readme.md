# Problem #4  

03 Oct 2020  

Good morning! Here's your coding interview problem for today.

This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

## Solutions  

### 1. Brute-force - `bruteForce(listOfNumbers)`  

I couldn't think about a solution that would run in linear time and constant space, so I first started with a brute force solution and see if something comes up with it. So I created a function `bruteForce(listOfItems)` that iterates in the array `n` times (where `n = <size of array>`) checking for the missing number. I came with this solution thinking that if I have an array with `n` elements, the min positive number needs to be from `1` to `n + 1`, this last case if there are no missing numbers in the middle, so it would be the next integer.  
The space complexity in this solution is actually constant but the problem is that the time complexity is quadratic, not linear.  
And when coding this solution in javascript, I found that I could replace the array iteration with a method that finds the object in the array, I'm not sure how the method works so I don't know f or sure its time complexity but I think it would still keep the time complexity as quadratic but would make the code a little bit cleaner. So I replaced the iteration with the method includes() from the array prototype.  

### 2. Spare list - `spareList(listOfNumbers)`

I was not happy with my solution as it was running in quadratic time, so thinking on how to run it on linear I thought I could use the values of the array as indexes of a new array, in this case it would be easy to check if in this new array the element on all indexes existed, and if they didn't I could easily find the missing number. So I implemented this new function, even knowing this would make the space complexity grow to linear. :(  

### 3. One list - `oneList(listOfNumbers)`  

Was it possible to use the elements as indexes but on the same array, without having to create a new array screweing the space complexity? I tried changing the values of the same array, but I was losing track of the value I had there before, so I thought about a way to change it without losing the value I had there before, so I still could use it to check the related index. So I first had to append one item to the array (as our indexes always start at 0), then eliminate all the invalid values (negative or greater than array size), so I changed them all to zero. After that I iterate among the array and I would add the size of the array to the values, and to make sure I will access the right items after updating them, I am using the indexes as `listOfNumbers[i] % size`, so I know I won't access items greater than the size. After that I just need to check the first element with a value of 0 (invalid), and the index of this element will be my missing number. If it was not found, I returned the size of the array which always would be the original size + 1.  

### 4. One list improved - `oneListImproved(listOfNumbers)`  

The solution 3 was return the right results and it was running on linear time complexity with a constant space complexity, but the code was terrible to understand. So I thought that I could actually change the sign of the number to negative and when accessing the index I always check the absolute number, so I tried doing it but had some problems so I had to check some conditions first. So those are all the steps I had to follow to make it work:  

1. Iterate through the list of numbers and change all invalid values (numbers `< 1` or `> size + 1`) and change them to 1 (just have to check if for some reason I didn't have a number 1 in the original array, as this will be the missing number and because I'm changing all invalid to 1, it will be found when checked later, so at the same time, I'll check if there is a one and if not, return 1 as the missing number)  
2. Iterate through the list of numbers again, but this time, I will change the values to negative for the found indexes - so after this, all negative numbers are the found indexes, and positive are the missing. And for this to work, when checking the index, I need to check its absolute number, because it it was already visited, it will be negative, and I don't have any negative index in my array.  
3. Iterate through the list of numbers for the last time and look for the first positive number, this will be my no visted index, and my missing number.  
4. If no positive number found, it means there are no missing number so the result will be the `size + 1`.

## Conclusion  

I don't know which solution is better (3 or 4) as they have the same time/space complexity. But I think the solution 4 is more readable which made me value it as better.  
