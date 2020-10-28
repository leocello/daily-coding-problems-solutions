# Problem #25 [Hard]  

Good morning! Here's your coding interview problem for today.  

This problem was asked by Facebook.  

Implement regular expression matching with the following special characters:  

* `.` (period) which matches any single character  
* `*` (asterisk) which matches zero or more of the preceding element  

That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.  

For example, given the regular expression `"ra."` and the string `"ray"`, your function should return `true`. The same regular expression on the string `"raymond"` should return `false`.

Given the regular expression `".*at"` and the string `"chat"`, your function should return `true`. The same regular expression on the string `"chats"` should return `false`.  

## Solution  

To solve this problem I created a matrix `N + 1` x `M + 1`, where `N` is the number of characters of the given string and `M` the number of characters of the given regular expression and added boolean values for all matchings into the indexes related using the following formula:  

* For equal characters or `.` on regular expression, the flag is true.  
* For `*`, I assume that it will be `true` if the result of the previous iteration on the string is `true` for that character or if the value of 2 indexes before on regex match is `true`.  
* Otherwise, `false`.  

So after populating the matrix, the value of the very last element of the matrix `[N][M]` will be my answer if the whole expression matches or not.  
