# Problem #14  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

The area of a circle is defined as `πr^2`. Estimate `π` to `3` decimal places using a Monte Carlo method.  

Hint: The basic equation of a circle is `x2 + y2 = r2`.  

## Solution  

Imagine a circle with a `r` of 1, the the area od that circle is `πr^2`, so in this case it will be the value of `π` itself. So if we know the value of the area, so we know the value of `π`.  
The Monte Carlo method is a way to calculate the value of `π` based in probability. So to do it, we will assume a circle with `r` inside a square touching it's 4 sides, so the side of the square will have the size of `2*r`. So randomly we will add `totalPoints` points to that figure and check if that point was inside the circle based on the equation `x2 + y2 = 1` (because `x2 + y2 = r2` and `r^2` = 1) - so any point with the value `x2 + y2 < 1` is inside the circle. The value of `π` will be the probability of getting into the circle (`assertions / totalPoints`) multiplied by the area of the square (`4`), so `assertions / totalPoints * 4`.  
Teorically as greater the number of `totalPoints` is, the more precise the number of `π` will be.  
