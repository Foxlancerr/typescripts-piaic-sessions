"use strict";
/**
 * @param {chapter 5 Looping in typescript}
 *
 * Automation is the technique of making a system operate automatically;
 * in programming, we use loops to automate repetitious tasks. Loops are
 * one of the most useful features of programming languages.
 */
/**
 * @param {while loop}
 *
 * In JavaScript, a while statement is a loop that executes as long as the specified condition evaluates to true.
 */
// The syntax is very similar to an if statement, as seen below.
// while (condition) {
// execute code as long as condition is true
// }
/**
 * @param {when to used while loop}
 */
// when you donot know the number of iterations used it.
// Use a while loop for reading a file into a variable.
// Use a while loop when asking for user input.
/**
 * @param {Example}
 */
let count = 1;
while (count < 10) {
    console.log(count);
    count++;
}
/**
 * @param {Do…While Loop}
 * the do...while statement, which is very similar to while with the major
 * difference being that a do...while loop will always execute once,
 * even if the condition is never true.
 */
/**
 * @param {syntex}
 */
// do {
// 	// execute code
// } while (condition);
/**
 * @param {Example}
 */
// program to display numbers
let i = 1;
const n = 5;
// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while (i <= n);
/**
 * @param {for Loop}
 * The for statement is a type of loop that will use up to three optional expressions to
 * implement the repeated execution of a code block.
 */
/**
 * @param {syntex}
 */
// for (initialization; condition; final expression) {
// 	// code to be executed
// }
/**
 * @param {How it works}
 */
// 1. Initialize the variables.
// 2. Check the condition.
// 3. If the condition is true, execute the code block. If the condition is false, the
// loop will end here.
// 4. Perform the statement (the third part, for example, i++).
// 5. Go back to step 2.
/**
 * @param {no loop used}
 *
 */
// Set initial variable to 0
let i1 = 0;
// Manually increment variable by 1 four times
console.log(i1++);
console.log(i1++);
console.log(i1++);
console.log(i1++);
console.log(i1++);
console.log(i1++);
/**
 * @param {Example}
 *
 */
// Initialize empty array
let arrayExample = [];
// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
    // Update array with variable value
    arrayExample.push(i);
    console.log(arrayExample);
}
// Nested loops
// Sometimes it can be necessary to use a loop inside a loop. A loop inside a loop is
// called a nested loop.
let num = [
    [10, 20, 30, 40],
    [100, 200, 300, 400],
];
console.table(num);
// for (let i = 0; i < num.length; i++) {
//   for (let j = 0; j < num[i].length; j++) {
//     console.log(i, j);
//   }
// }
// for(let i = 0; i < num.length; i++){
//     for(let j = 0; j < num[i].length; j++){
//         console.log(num[i][j]);
//     }
// }
/**
 * @param {Loops and arrays}
 *
 */
// let names: string[] = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
/**
 * @param {for of loop}
 * There is another loop we can use to iterate over the elements of an array: the for of loop.
 * It cannot be used to change the value associated with the index as we can do with the regular loop,
 * but for processing values it is a very nice and readable loop.
 */
// let names1: string[] = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names1) {
//   console.log(name);
// }
// cannot change the values
// for (let name of names1) {
//   names[names1.indexOf(name)] = "hello " + name;
// }
// console.log(names1);
// for (let i = 0; i < names1.length; i++) {
//   names1[i] = "hello " + names1[i]
// }
// console.log(names1);
/**
 * @param {for in loop}
 * There is another loop we can use to iterate over the index value [0,1,2...,n] of an array: the for in loop.
 */
let names1 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let index in names1) {
    console.log(index);
}
for (let value of names1) {
    console.log(value);
}
/**
 * @param {break and continue statements}
 *
 **/
// The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.
for (let c = 0; c < 10; c++) {
    if (c == 6) {
        continue;
    }
    console.log(c);
}
// The break statement is used to terminate the loop immediately when it is encountered
for (let b = 0; b < 10; b++) {
    if (b == 6) {
        break;
    }
    console.log(b);
}
/**
 * @param { chapter 4 Conditional OR Logical statements}
 *
 * We will be dealing with logical statements. Logical statements allow us to make
 * multiple paths in our code. Depending on the outcome of a certain expression,
 * we will follow one code path or another.
 */
/**
 * @param { if statement}
 */
// An if statement will evaluate whether a statement is true or false,
// and only run if the statement returns true. The code block will be ignored
// in the case of a false result, and the program will skip to the next section.
// Set balance and price of item
const balance = 500;
const jeans = 40;
// Check if there are enough funds to purchase item
if (jeans <= balance) {
    console.log("You have enough money to purchase the item!");
}
/**
 * @param { if-else statement}
 */
// With if statements, we only execute code when a statement evaluates to true,
// but often we will want something else to happen if the condition fails.
if (jeans <= balance) {
    console.log("You have enough money to purchase the item!");
}
else {
    console.log("You do not have enough money in your account to purchase this item.");
}
/**
 * @param { else-if statement}
 */
// With if and else, we can run blocks of code depending on whether a condition is true or false. However, sometimes we might have multiple possible conditions and outputs, and need more than simply two options. One way to do this is with the else if statement, which can evaluate more than two possible outcomes.
// if (condition a) {
// 	// code that will execute if condition a is true
// } else if (condition b) {
// 	// code that will execute if condition b is true
// } else if (condition c) {
// 	// code that will execute if condition c is true
// } else {
// 	// code that will execute if all above conditions are false
// }
// Set the current grade of the student
let grade = 87;
// Check if grade is an A, B, C, D, or F
if (grade >= 90) {
    console.log("A");
}
else if (grade >= 80) {
    console.log("B");
}
else if (grade >= 70) {
    console.log("C");
}
else if (grade >= 60) {
    console.log("D");
}
else {
    console.log("F");
}
/**
 * @param {Ternary Operator}
 */
// The ternary operator, also known as the conditional operator, is used as shorthand for an if...else statement.
// (condition) ? expression on true : expression on false
// Set age of user
let age = 20;
// Place result of ternary operation in a variable
const oldEnough = age >= 21 ? "You may enter." : "You may not enter.";
console.log(oldEnough);
/**
 * @param {switch statement}
 */
// switch is a type of conditional statement that will evaluate an expression against multiple possible cases and execute one or more blocks of code based on matching cases. The switch statement is closely related to a conditional statement containing many else if blocks, and they can often be used interchangeably.
let activity = "Getup";
switch (activity) {
    case "Getup":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
}
// multiple cases
// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();
switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}
