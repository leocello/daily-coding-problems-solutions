# Problem #6  

05 Oct 2020  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Google.  

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding `next` and `prev` fields, it holds a field named `both`, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an `add(element)` which adds the element to the end, and a `get(index)` which returns the node at index.  

If using a language that has no pointers (such as Python), you can assume you have access to `get_pointer` and `dereference_pointer` functions that converts between nodes and memory addresses.  

## Solution  

Well, I was using Javascript to write the solution for other problems but I couldn't use it for this one as Javascript doesn't have pointers, so I decided to use C++ in this case.  

These are the steps I used to complete this solution:  

1. Declare the class Node with the attribute for data (as it was not described on problem, I decided to use integer for data) and another one for the XOR of prev and next addresses (I called it `xorAddr`)  
2. Create a helper function (called `XOR`) to return the calculated xor for given 2 Nodes (used to populate value of `xorAddr` for new nodes).  
3. Implement function `add()` - this function receives 2 parameters, the double pointer to `head` and the value of new `element`. This function will create a new instance of class `Node` and add it to the beginning of the linked list with the data set as the value received and calculates xorAddr using the helper `XOR()`.  
4. Implement function `get()` - this function receives 2 parameters, the pointer to `head` `Node` and the `index` requested. This was a bit tricky as XOR lists add new nodes to the beginning of the list, so I had to navigate between nodes from last node to first. So this function creates 3 pointers (`curr`, `prev` and `next`) and navigate among the nodes calculating the next value using helper `XOR` until reaching the last node, and navigate back counting the index requested.  
