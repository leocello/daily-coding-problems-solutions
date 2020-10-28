# Problem #22 [Easy]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

You are given an `M` by `N` matrix consisting of booleans that represents a board. Each `True` boolean represents a wall. Each `False` boolean represents a tile you can walk on.  

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return `null`. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.  

For example, given the following board:  

```javascript
[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
```

And start = `(3, 0)` (bottom left) and end = `(0, 0)` (top left), the minimum number of steps required to reach the end is `7`, since we would need to go through `(1, 2)` because there is a wall everywhere else on the second row.  

## Solution  

My solution is creating a function that visits the start item and add weight to position and from there navigate to all neighbours recursively and checking if the current weight of each neighbour hasn't been visited yet or has a greater weight and replaces the weight to the given weight (previous weight + 1). After visiting all elements of the matrix, check the weight of end element and if it has been visited, return the weight, otherwise return null (it means the element is not reacheble).  

The time complexity of that solution is O((n\*m)²) in the worst case and the space complexity is O(1) as I'm assuming I can change the original matrix. If the original matrix can't be changed, a new matrix of the same size as the original needs to be created, so the space would go to O(n\*m).  
