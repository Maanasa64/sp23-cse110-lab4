1. `console.log(i)` will print the last value of `i` after the `for` statement has finished executing and since the condition states `i < prices.length`, the last value of `i` will be equal to `prices.length` which will be 3 here as prices is assigned to [100, 200, 300] which has length 3.
2. This line will display the last value assigned to the variable `discountedPrice` which will be `prices[2] * (1 - 0.5)` which is 300 * 0.5 = 150.
3. This line displays the last value assigned to `finalPrice`. The rounded value of 150 * 100 is 15000 and 15000 / 100 is 150.
4. The function returns the array containing the discounted prices. The first value in the array is 100 * 0.5 = 50. The second value is 200 * 0.5 = 100. The final value is 300 * 0.5 = 150. Therefore the function returns [50, 100, 150].
5. Error: `i` is declared using `let` which has a block scope so `i` is not accessible after the `for` block.
6. Error: `discountedPrice` is declared using `let` inside the `for` block so it has a block scope and it is not accessible after the `for` block.
7. This line displays the last value assigned to `finalPrice`. The rounded value of 150 * 100 is 15000 and 15000 / 100 is 150. `finalPrice` is defined within the scope of the function so it can be accessed.
8. The function returns the array containing the discounted prices. The first value in the array is 100 * 0.5 = 50. The second value is 200 * 0.5 = 100. The final value is 300 * 0.5 = 150. Therefore the function returns [50, 100, 150].
9. Error: `i` is declared using `let` which has a block scope so `i` is not accessible after the `for` block.
10. The length of the `prices` array will be displayed which is 3. The variable `length` is called in the scope it is defined in and it is not being reassigned at any point. Therefore, there is no error
11. The function returns the array containing the discounted prices. The first value in the array is 100 * 0.5 = 50. The second value is 200 * 0.5 = 100. The final value is 300 * 0.5 = 150. Therefore the function returns [50, 100, 150]. This is because pushing the values of `discountedPrices` is not reassigning the `const` variable.
12.  A. student.name <br>
     B. student['Grad Year'] <br> 
     C. student.greeting() <br> 
     D. student['Favorite Teacher'].name <br> 
     E. student.courseLoad[0] <br> 
13.  A. 32- as the integer 2 gets concatenated to the string '3'. <br>
     B. 1- as the string gets converted to an integer and 3 - 2 is 1. <br> 
     C. 3- Null is converted to 0 so we get 3 + 0 = 3. <br> 
     D. '3null'- as null becomes a string 'null' and the 2 strings are concatenated. <br> 
     E. 4- as true is converted into an integer which becomes 1 so we get 1 + 3 = 4. <br> 
     F. 0- as false and null are both 0 as integers. <br>
     G. '3undefined'- as undefined is converted into a string and both of the strings are then concatenated. <br>
     H. NaN- as undefined does not have an integer value and 3 is an integer. <br>
14.  A. True- 2 is converted to its integer value and 2 is greater than 1. <br>
     B. False- Both of the values are strings so they are compared character by character and 1 in 12 comes before 2 so gives false. <br> 
     C. True- Irrespective if the integer 2 becomes a string or the string '2' becomes an integer, they end up being equal / the same. <br> 
     D. False- The triple = sign checks if they are the same type and one is an integer and the other is a string. <br> 
     E. False- true is converted into integer so it becomes 1 and 1 is not equal to 2. <br> 
     F. True- Boolean(2) is true and true == true. <br>
