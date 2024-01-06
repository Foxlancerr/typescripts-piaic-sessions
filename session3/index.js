
/**
 * @param { chapter 3 projects}
 */

/**
 * @param {Project1: Minipulating an arrays}
 */
// Take the following array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']]
console.log(theList);


/*
Manipulate your array using various methods, such as pop(), push(), shift(), and
unshift(), and transform it into the following:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

You can take the following steps, or adopt your own approach:
• Remove the first item and the last item.
• Add FIRST to the start of the array.
• Assign hello World to the fourth item value.
• Assign MIDDLE to the third index value.
• Add LAST to the last position in the array.
• Output it to the console.
*/

// theList.shift()
// theList.unshift("FIRST")
// theList.splice(2, 1, "Middle")
// theList.splice(3, 1, "hello world")
// theList.splice(4, 3, "LAST")
// theList.pop()
// console.log(theList);

// Your final output is look like ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

/**
 * @param {Project2: Company product catalog}
 */
/*
In this project, you will implement a data structure for a product catalog and create
queries to retrieve data.
1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model, cost, and
quantity.
3. Add all three objects to the main array using an array method, and then log
the inventory array to the console.
4. Access the quantity element of your third item, and log it to the console.
Experiment by adding and accessing more elements within your data
structure.
*/

/**
 * @param { Solution}
 */

// const inventory = [];

// const item1 = { name: 'Laptop', model: 'ABC123', cost: 999.99, quantity: 10 };
// const item2 = { name: 'Smartphone', model: 'XYZ456', cost: 499.99, quantity: 20 };
// const item3 = { name: 'Headphones', model: 'PQR789', cost: 79.99, quantity: 30 };

// inventory.push(item1, item2, item3);

// console.log('Inventory:', inventory);

// // Step 4: Access the quantity element of the third item and log it to the console.
// const thirdItemQuantity = inventory[2].quantity;
// console.log('Quantity of the third item:', thirdItemQuantity);

// // Experiment: Add and access more elements within the data structure.
// const newItem = { name: 'Tablet', model: 'JKL012', cost: 299.99, quantity: 15 };
// inventory.push(newItem);

// // Log the updated inventory array to the console.
// console.log('Updated Inventory:', inventory);

/**
 * @param { chapter 3 projects}
 */

/**
 * @param {project 1: Evaluating a number game}
 */

// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.

/**
 * @param {Solution}
 */

// // Step 1: Set a dynamic number value (you can change this to any number).
// const dynamicNumber = 10;

// // Step 2: Prompt the user to enter a number.
// const userNumber = parseFloat(prompt("Enter a number:"));

// // Step 3: Check and compare the user's number with the dynamic number.
// if (isNaN(userNumber)) {
//     // Check if the user entered a valid number.
//     console.log("Please enter a valid number.");
// } else {
//     if (userNumber > dynamicNumber) {
//         console.log(`${userNumber} is greater than ${dynamicNumber}.`);
//     } else if (userNumber < dynamicNumber) {
//         console.log(`${userNumber} is less than ${dynamicNumber}.`);
//     } else {
//         console.log(`${userNumber} is equal to ${dynamicNumber}.`);
//     }
// }



/**
 * @param {project 2: Friend checker game}
 */

// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.

/**
 * @param {Solution}
 */

// // Prompt the user to enter a name.
// const userName = prompt("Enter your name:");

// // Switch statement to check if the entered name is known.
// switch (userName.toLowerCase()) {
//     case "alice":
//         console.log("Hello, Alice! You're my friend.");
//         break;
//     case "bob":
//         console.log("Hey Bob! You're my friend too.");
//         break;
//     case "charlie":
//         console.log("Charlie! Nice to see you, my friend.");
//         break;
//     default:
//         console.log(`Sorry, I don't know ${userName}.`);
// }


/**
 * @param {project 3: Rock Paper Scissors game}
 */

// This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
// Scissors will beat out Paper. You can use JavaScript to create your own version of
// this game, applying the logic with an if statement. Since this project is a little more
// difficult, here are some suggested steps:

// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.

/**
 * @param {Solution}
 */

// // Step 1: Create an array that contains Rock, Paper, and Scissors.
// const choices = ['Rock', 'Paper', 'Scissors'];

// // Step 2: Set up variables for player and computer selections.
// const playerSelectionIndex = Math.floor(Math.random() * 3); // Generates a random index for player
// const computerSelectionIndex = Math.floor(Math.random() * 3); // Generates a random index for computer

// // Step 3: Create a variable to hold a response message to the user.
// let resultMessage;

// // Step 4: Create a condition to handle player and computer selections.
// if (playerSelectionIndex === computerSelectionIndex) {
//     resultMessage = 'It\'s a tie!';
// } else {
//     // Step 5: Use conditions to apply the game logic and return the correct results.
//     if (
//         (playerSelectionIndex === 0 && computerSelectionIndex === 2) ||
//         (playerSelectionIndex === 1 && computerSelectionIndex === 0) ||
//         (playerSelectionIndex === 2 && computerSelectionIndex === 1)
//     ) {
//         resultMessage = 'You win!';
//     } else {
//         resultMessage = 'Computer wins!';
//     }
// }

// // Step 6: Output the result message to the console.
// console.log(`Player chose ${choices[playerSelectionIndex]}. Computer chose ${choices[computerSelectionIndex]}. ${resultMessage}`);


/**
 * @param {chapter 5 projects}
 */


/**
 * @param { project1: Math multiplication table }
 */

// In this project, you will create a math multiplication table using loops. You can do
// this using your own creativity or by following some of the following suggested steps:
// 1. Set up a blank array to contain the final multiplication table.
// 2. Set a value variable to specify how many values you want to multiply with
// one another and show the results for.
// 3. Create an outer for loop to iterate through each row and a temp array to store
// the row values. Each row will be an array of cells that will be nested into the
// final table.
// 4. Add an inner for loop for the column values, which will push the multiplied
// row and column values to the temp array.
// 5. Add the temporary row data that contains the calculated solutions to the
// main array of the final table. The final result will add a row of values for the
// calculations.

/**
 * @param { Solution }
 */


// // Step 1: Set up a blank array to contain the final multiplication table.
// const multiplicationTable = [];

// // Step 2: Set a value variable to specify how many values you want to multiply.
// const valuesToMultiply = 10; // You can change this to generate a table for a different range.

// // Step 3: Create an outer for loop to iterate through each row.
// for (let i = 1; i <= valuesToMultiply; i++) {
//     // Create a temporary array to store the row values.
//     const tempRow = [];

//     // Step 4: Add an inner for loop for the column values.
//     for (let j = 1; j <= valuesToMultiply; j++) {
//         // Push the multiplied row and column values to the temp array.
//         tempRow.push(i * j);
//     }

//     // Step 5: Add the temporary row data to the main array of the final table.
//     multiplicationTable.push(tempRow);
// }

// // Display the final multiplication table.
// console.log(multiplicationTable);


