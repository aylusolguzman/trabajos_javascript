
// Exercise 1:
// Declare two variables: Our task will be to declare two variables: one
// named age and the other named weight. Then you will need to assign a
// value to each.

let age;
let weight;

// Exercise 2:
//  Using variables: Write a program that asks the user to
// enter their name, age, and weight, and then displays a personalized message
// that includes all this information.

const prompt = require('prompt-sync')();
let name = prompt('Enter your name here: ');
age = parseInt(prompt('Enter your age here: '));
weight = parseFloat(prompt('Enter your weight here: '));
console.log(`Hello ${name}, you are ${age} years old and your weight is ${weight} kg`);

// Exercise 3:
// Constants / Age Validation:
// Later on, we will want to validate that our respondents are at least 18 years old and no older than 99 years old.
// No one can change these definitions, so we will write them as two constants (assigning them the numeric values 18 and 99 respectively).
// Finally, you must ask the user to enter their age and validate it using parseInt.

const MINIMUM_AGE = 18
const MAXIMUM_AGE = 99
age = parseInt(prompt('Enter your age here: '));
if (age > MINIMUM_AGE && age < MAXIMUM_AGE)
    console.log('You are within age range')
else
    console.log('You are not within age range, sorry!')

// Exercise 4 – Data Types:
// Declare 4 variables using the reserved word `let` and assign values to them according to the data type suggested by their names. Additionally, perform extra operations and validations on these values.
let verdadero = false
let texto = 'Hello'
let numero = parseFloat(1.56)
let nada = null

console.log(numero * 2);
console.log(texto + ' world');
if (verdadero == true)
    console.log('The variable is true')
else
    console.log('The variable is false')

if (nada === null) {
  console.log('The variable nada is null');
}

/*
Exercise 5 – Operators:
We have seen how to declare a variable and assign it a value, and you may have wondered: why store data in variables? Variables allow us to reuse the assigned data simply by referring to its name.

Also, something very important: just as we can perform mathematical operations such as addition (+) or subtraction (−) with numbers, we can do the same with the variables that reference them.

Steps to follow:

Variable Declaration and Assignment:

1. Declare and assign a numeric value to two variables: `firstNumber` and `secondNumber`.

Mathematical Operations:
2. Declare the following variables: `sumResult`, `subtractionResult`, `multiplicationResult`, `divisionResult`.
3. Assign to each of these variables the result of the addition, subtraction, multiplication, and division of the variables `firstNumber` and `secondNumber`.

Display Results:

1. Use `console.log(variableName)` to print each of the results and see how they appear.
*/
let firstNumber = 5
let secondNumber = 19
let sumResult = firstNumber + secondNumber
let subtractionResult = secondNumber - firstNumber
let multiplicationResult = firstNumber * secondNumber
let divisionResult = secondNumber / firstNumber

console.log(sumResult);
console.log(subtractionResult);
console.log(multiplicationResult);
console.log(divisionResult);

/*
Exercise 6 – Comparisons and Logical Operators:
Declare two variables with numeric values. Use comparison and logical operators to check whether both numbers are greater than 10 and display the result in the console.

Steps to follow:

Variable Declaration and Assignment:

1. Declare two variables and assign them numeric values of your choice.

Comparison and Logical Operators:
2. Use the `>` (greater than) and `&&` (logical AND) operators to verify whether both numbers are greater than 10.

Display the Result in the Console:
3. Use `console.log()` to display the result of the comparison.
*/
let randomNumberOne = 7
let randomNumberTwo = 67

if (randomNumberOne > 10 && randomNumberTwo > 10) {
  console.log('Both numbers are bigger than 10');
} else if (randomNumberOne > 10) {
  console.log('The first number is bigger than 10');
} else if (randomNumberTwo > 10) {
  console.log('The second number is bigger than 10');
} else {
  console.log('Both numbers are smaller than or equal to 10');
}

/*
Exercise 7 – Value Swapping:
Declare two variables with initial values and then swap their values. Display the values before and after the swap in the console.

To swap values, you can use different methods (using a temporary variable, arithmetic operations, or simultaneous assignment). You are free to choose the method you prefer, but make sure to research the one you will use.
*/

/*
Exercise 8 – Temperature Conversion:
Write a program that converts a given temperature from degrees Celsius to degrees Fahrenheit. The conversion formula is:

Ask the user to enter the temperature in Celsius and display the result in Fahrenheit.
*/

/*
Exercise 9 – BMI Calculation:
Write a program that calculates the Body Mass Index (BMI). The BMI is calculated using the following formula:

Ask the user to enter their weight and height, and display the calculated BMI.
*/

/*
Exercise 10 – Discount Calculation:
Write a program that calculates the final price of a product after applying a discount. Ask the user to enter the original price and the discount percentage, and display the final price.
*/
