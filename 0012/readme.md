# Problem #12

Good morning! Here's your coding interview problem for today.  

This problem was asked by Amazon.  

There exists a staircase with `N` steps, and you can climb up either 1 or 2 steps at a time. Given `N`, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.  

For example, if `N` is `4`, then there are 5 unique ways:  

* `1, 1, 1, 1`  
* `2, 1, 1`  
* `1, 2, 1`  
* `1, 1, 2`  
* `2, 2`  

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers `X`? For example, if `X = {1, 3, 5}`, you could climb 1, 3, or 5 steps at a time.  

## Solutions  

The solution for first problem is not a bit deal. As we can think that if there is only 1 step, the number of possibilities will be `1` and if there are no steps, the answer is `1` as well as staying could be considered an action. And the solution for greater number of steps is the sum of the number of possibilities for `n - 1` with `n - 2`.  

The second problem has a similar solution but with a dynamic number of steps that could be taken. Also as we can't assume `1` is on the list of steps that can be taken, we can't assume that is there is only `1` step, it can't be considered. So What I did was consider only if there are no steps, it will increment one and if it's under `0`, no increments, it will be prevent the miscalculations in the case `3` steps are taken but only `2` spots are available.  

Thinking about the second solution, we could improve the first one, to look like the second. So rather than assuming `1` and `0` have both `1` possibility, we can assume only `0` has a possibility and negatives have `0` possibilities. This will return the same result.  

An interesting fact is that this problem is actually solved by fibonacci sequence.  
