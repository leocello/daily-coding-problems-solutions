# Problem #36 [Medium]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Dropbox.  

Given the `root` to a binary search tree, find the second largest `node` in the tree.  

## Solution  

So in first instance I created the Binary search tree structure, and the method to get the second largest has the following solution:  

1. Check if the tree has a `right` node and if not, get the largest value of the `left` subtree by getting the most right element from that subtree. *OBS*: in case there are no left nodes as well, return `null`  
2. If there are right nodes, get the second largest by iterating through right nodes and checking if the right node from the current iteration had a node to its right and if so, go further, otherwise, return the current node as the only item larger then itself would be the one on its right.  

This algorithm runs in linear time `O(N)` and in constant space `O(1)`.  
