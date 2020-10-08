# Problem #9  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Airbnb.  

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be `0` or negative.  

For example, `[2, 4, 6, 2, 5]` should return `13`, since we pick `2`, `6`, and `5`. `[5, 1, 1, 5]` should return `10`, since we pick `5` and `5`.

Follow-up: Can you do this in O(N) time and constant space?  

## Solution

In this problem I tried to do the version where the time complexity was linear at the first time. And I decided not to use recursivity as well, to keep the space complexity as constant.  
My first thought was that I would never skip more than 2 elements, because it would always generate a lower sum, so I don't need to worry about comparing numbers too far from the current.  
So for every iteration of the loop I took those steps:  

* I first want to check if the element is the first and if there at least 3 more elements remaining in the list. If so, I compare if the sum of the current with the second ahead is greater or equal than the next with the third, if true I choose the first to use on the sum, otherwise the second, and then I add 2 to iterator from the index of the used element.  
* So I check if there are at least 2 more elements than the current. If so, I compare if the sum of the current with the second ahead is greater or equal then the next itself, and if true, I choose the first, otherwise the second. And as the previous step, I increment the iterator by 2 from the index of the used element.  
* So I check if there are 1 one element on the list. If so, I compare the current with the next and choose the greater. And is this case, I leave the loop as there won't be more elements to compare.  
* And the last case will be if there is only the current element in the list and no other remaining, and in this case I just add its value to the sum and leave the loop.  

After the loop I just need to return the value of the sum and voilà!  

**OBS**: Probably there are better solutions for this problem, and I decided not to look for any solution before finishing this one by myself. :)  
