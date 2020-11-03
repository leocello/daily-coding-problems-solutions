# Problem #32 [Hard]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Jane Street.  

Suppose you are given a table of currency exchange rates, represented as a 2D array. Determine whether there is a possible arbitrage: that is, whether there is some sequence of trades you can make, starting with some amount `A` of any currency, so that you can end up with some amount greater than `A` of that currency.  

There are no transaction costs and you can trade fractional quantities.  

## Solution  

As the given table is represented by a simple 2D array, I can assume that all currencies that on axis `X` exist on axix `Y`. And in this case we can also assume that when `X` = `N` and `Y` = `N`, the value will be always `1` as the convertion rate will be `1`, and for the other items, I have to check if the conversion from any item from `X` to `Y` has the same ratio as the item from `Y` to `X` (I do it by multiplying the 2 values and checking if it's equal to `1`), if it's true for all items, there is no arbitrage, but if I find at least one difference, there is arbitrage.  

The method created runs in constant space `O(1)` and quadratic time `O(n²)`.  
