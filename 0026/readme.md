# Problem #26 [Medium]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

Given a singly linked list and an integer `k`, remove the kth last element from the list. `k` is guaranteed to be smaller than the length of the list.  

The list is very long, so making more than one pass is prohibitively expensive.  

Do this in constant space and in one pass.  

## Solution  

My solution for this problem is creating a method `remove(index)` in the class `LinkedList` that will first check if the element to be removed is the first one, and if so, just change the pointer for the head node to its next. If it's not the first one, it will create a pointer to navigate on the linked list until the element `index - 1` (`k - 1`) and change the pointer for the next to next of next.  
