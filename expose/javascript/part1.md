Part 1. A Quick Introduction
1. What is printed by line 9? If the code returns an error, explain why. (VAR)
   "values added: 20" since num 1 = num2 = 10 and add is true.
2. What is printed by line 13? If the code returns an error, explain why. (VAR)
   "values added: undefined" since the code will be trying to use an undefined variable, variable. 
3. What is printed by line 9? If the code returns an error, explain why. (LET)
   "values added: 20"
4. What is printed by line 13? If the code returns an error, explain why. (LET)
   The code returns an error: "ReferenceError: result is not defined" since the code is trying to use a undefined variable.
5. What is printed by line 9? If the code returns an error, explain why. (const)
   The code returns an error: "TypeError: Assignment to constant variable" since the code was trying to change a const variable.
6. What is printed by line 13? If the code returns an error, explain why. (const)
  It produces the same error as problemn 4 and with the same reason.

Part 2. A Little More of a Challenge
1. What will happen at line 12 and why? If the code causes an error, explain why. (i)
   Printed "3" since it is the last value that 'i' was assigned to and is type var and var is function scoped.
2. What will happen at line 13 and why? If the code causes an error, explain why. (discountedPrice)
   Printed "[Function: discountPrices]" since output the information of the specified object. 
3. What will happen at line 14 and why? If the code causes an error, explain why. (finalPrice)
   Prints "150" since it is the last value assigned to finalPrice from the calculation of applying the discount.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
   The function will return an array of values of the new prices with the discount since the function is looping through the given array of prices and applying the discount each price and adding the new price into a new array, discounted.
5. What will happen at line 12 and why?  If the code causes an error, explain why. 
   The code causes an error: "ReferenceError: i is not defined" since let is scope blocked meaning the variable must be declared before use.
6. What will happen at line 13 and why? If the code causes an error, explain why.
   The code causes an error: "ReferenceError: discountedPrice is not defined" since 'discountedPrice' is definded in a different scope and it is scope blocked.
7. What will happen at line 14 and why? If the code causes an error, explain why.
   The code will output "150" since finalPrice is scope blocked, but the usage for 'finalPrice' is within the scope. 
8. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
   The function will return the array of values of the new prices with the discount since it will be looping through the array and applying the discount onto them then adding the values to the 'discounted' array and are passed by value, not by reference.
9. What will happen at line 11 and why? If the code causes an error, explain why.
   The code causes an error since it is trying to access 'i' outside of its scope.
10. What will happen at line 12 and why? If the code causes an error, explain why.
    The code will output "3" since it is the length of the given array and the usage for length is within its scope.
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    The function will return the array of value of the new price since const is refers to constant reference, not constant value, we are able to change the values in the reference however, not the reference itself. For example, we are not able to change const x = 1 to x = 2 since we would be changing the value of 1 into 2, but we can add or remove values from a const array as long as if it in the array and not changing the reference. 
