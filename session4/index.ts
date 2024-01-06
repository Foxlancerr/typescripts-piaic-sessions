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
let count: number = 1;
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
let i:number = 1;
const n:number = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);