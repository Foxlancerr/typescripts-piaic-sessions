
// /**
//  * @param {varaibles}
//  */
// // let stringName = "ahmad";
// // let age = 45;


// /**
//  * @param {how i assign a varaibles}
//  */

// /**
//  * @param {let, var , const}
//  */

// // var name = "qurish";
// // var name = "sudais";

// // let marks = 67;
// // marks = 56

// // var is global scope
// // var name1 = "kamran";
// // console.log(name1);
// // {
// //     var name1 = "sudais";
// //     console.log(name1);
// // }
// // console.log(name1);

// // let name1 = "kamran";
// // console.log(name1);
// // {
// //     let name1 = "sudais";
// //     console.log(name1);
// // }
// // console.log(name1);

// // console.log(name1);
// // var name1 = "sudais";

// // var name1;
// // console.log(name1);
// // name1 = "sudaias";




// /**
//  * @param {Premative datatype}
//  */

// // let name3 = "string";
// // let name4 = new String("kamran");
// // let name5 = `ahmad ali \n "new line is added`;

// // console.log(name3);
// // console.log(name4);
// // console.log(name5);

// // let number = 23
// // let number1 = 23.56
// // let number3 = -34;

// // console.log(number);


// /**
//  * @param {Premative datatype}
//  */

// // let bigintNumber = 4n;
// // console.log(bigintNumber);

// // let number = 4;
// // console.log(Number.MAX_VALUE +1)
// // console.log(Number.MIN_VALUE - 1)

// let symbo2 = Symbol("value")
// let symbol1 = Symbol("value")

// // console.log(symbo2 == symbol1);

// // let name2;

// // let name1 = null;
// // console.log(typeof name2, typeof name1);

// // let student = "kamran";
// // student ="imran"


// // let age = "50";
// // // let convertToNumber = Number(age);
// // // let convertToNumber =+ age;

// // console.log(typeof age);
// // console.log(typeof convertToNumber);

// // let string1 = 56;
// // let cvttoSTr =string1.toString();
// // let cvttoSTr2 =String(string1);

// // console.log(typeof string1);
// // console.log(typeof cvttoSTr);
// // console.log(typeof cvttoSTr2);

// // console.log(3 + 4 / 2);
// // 4 / 2 = 2
// //  2 + 3 = 5

// console.log((4 + 4) / 2 * 2);
// // 4 / 2 = 2
// //  2 * 2 = 4
// //  4 + 3 = 7

let counter = document.getElementById("counter");
let incremnet = document.getElementById("inc");
let decrement = document.getElementById("dec");


let initailValue = 0
incremnet.addEventListener("click", () => {
    counter.innerText = ++initailValue
    console.log(initailValue);
})
decrement.addEventListener("click", () => {
    counter.innerText = --initailValue
    console.log(initailValue);
})
