# Problem 2  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Uber.  

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.  

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.  

**Follow-up: what if you can't use division?**  

## Solutions  

### 1. Brute-force - `bruteForce(items)`  

In this solution I run over all elements and for each iteration, run the array again doing the multiplication excluding the current index.  

The problem with this solution was the time complexity that grows on square as O(n^2). So I create another solution.  

### 2. Single iteration - `singleIteration(items)`  

In this solution I was trying to achieve the results with a single iteration, so the time complexity would reduce to O(n). So I created the function `singleIteration()` and it uses the reduce method from javascript multiplying all the items from the array diving by the current item.  

### 3. Single instruction - `singleInstruction(items)`  

I liked the solution 2, but I still wanted to reduce the function to a single instruction, so I created the function `singleInstruction(items)` what has still the same time complexity as the previous solution but rather than iterating in the array using a for loop, it iterates using the method map from array in Javascript.  

### 4. Single instructions without division - `singleInstructionWithoutDivision(items)`  

I know the first solution didn't use a division (as the follow up suggests)m but it was a too heavy solution, so I wanted to create a solution that would have the same time complexity and number of instruction as my best solution but without using a division so I created this solution on method `singleInstructionWithoutDivision(items)`.  

I can be wrong but I guess this is the best solution in Javascript for this problem.  
