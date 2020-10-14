# Problem #15 [Medium]  

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

## Solution

The solution is iterating through the stream and returning the first element in the case it's the only one. If it's not the first one, for each element we need a chance of `1 / i` for it to be chosen, so apply a formula to verify the chance and swap the reponse if randomly the chance is met.  
