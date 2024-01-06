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
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
        console.log(i, j);
    }
}
// for(let i = 0; i < num.length; i++){
//     for(let j = 0; j < num[i].length; j++){
//         console.log(num[i][j]);
//     }
// }
/**
 * @param {Loops and arrays}
 *
 */
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
/**
 * @param {for of loop}
 * There is another loop we can use to iterate over the elements of an array: the for of loop.
 * It cannot be used to change the value associated with the index as we can do with the regular loop,
 * but for processing values it is a very nice and readable loop.
 */
let names1 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name of names1) {
    console.log(name);
}
// cannot change the values
for (let name of names1) {
    names[names1.indexOf(name)] = "hello " + name;
}
console.log(names1);
// for (let i = 0; i < names1.length; i++) {
//   names1[i] = "hello " + names1[i]
// }
// console.log(names1);
let namesObj = {
    id: 0,
    name: "kamran",
    city: "peshawar"
};
for (let [key, value] of Object.entries(namesObj)) {
    console.log(key, value);
}
console.log(Object.entries(namesObj));
console.log(Object.keys(namesObj));
console.log(Object.values(namesObj));
