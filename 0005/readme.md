# Problem #5  

04 Oct 2020  

Good morning! Here's your coding interview problem for today.

This problem was asked by Jane Street.

`cons(a, b)` constructs a pair, and `car(pair)` and `cdr(pair)` returns the first and last element of that pair. For example, `car(cons(3, 4))` returns `3`, and `cdr(cons(3, 4))` returns `4`.

Given this implementation of cons:

```python
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
```

Implement `car` and `cdr`.

## Solution  

As I could understand the main problem to be solved here is how to work properly with callbacks.  
Well, first I implemented the constructor defined on the problem. This returns a function with a callback that I can use on the new functions `car` and `cdr`. After that implemented the functions themselves that would receive a function as parameter (the function returned by `cons`), and use an internal function as callback to return the first element (in case of `car`) and the last (in case of `cdr`).  
