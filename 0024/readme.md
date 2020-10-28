# Problem #24 [Medium]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.  

Design a binary tree node class with the following methods:  

* `is_locked`, which returns whether the node is locked  
* `lock`, which attempts to lock the node. If it cannot be locked, then it should return `false`. Otherwise, it should lock it and return `true`.  
* `unlock`, which unlocks the node. If it cannot be unlocked, then it should return `false`. Otherwise, it should unlock it and return `true`.  

You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in `O(h)`, where `h` is the height of the tree.  

## Solution  

On my solution I created a Node class with 3 pointers (parent, left child and right child), a value and a flag for controlling if node is locked or not.  

The method `is_locked()` just returns the value of the property `locked`.  

The methods `lock()` and `unlock()` first check if the Node flag `locked` has already the value requested, if not, calls another method I called `can_update(direction, excluded)` that will check, if not excluded, the current node, and go on direction(s) given calling this same method recursively.  

The time complexity is `O(h)` for the method `can_update()` so it will make the methods `lock()` and `unlock()` linear as well, as requested on the problem description. The method `is_locked()` is constant in time (`O(1)`). The space complexity is constant (`O(1)`) for all methods.
