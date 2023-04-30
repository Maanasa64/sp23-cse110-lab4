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
12. -A. student.name
    -B. student['Grad Year']
    -C. student.greeting()
    -D. student['Favorite Teacher'].name
    -E. student.courseLoad[0]
