//Exercise 1 : Scope
// Instructions
// What is the value of a in all the following functions.
// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// //3
//
// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }
//
// function q22() {
//     alert(a);
// }
//
//
// //#3
// function q3() {
//     window.a = "hello";
// }
//
//
// function q32() {
//     alert(a);
// }
//
// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
//
// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);


//Exercise 2 : Ternary Operator
// Instructions
// Change the conditional into a ternary and assign the
// function to a variable called experiencePoints.
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// function winbattle(){
//     return false
// }
//
// const experiencePoints = winbattle()? '10' : '1'
// console.log(experiencePoints)

//Exercise 3 : Colors
// Instructions
// Using this array :
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// //Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// // Hint : Use the array methods taught in class.
// colors.forEach((item,i)=>{
//     console.log(`${i}# choise is ${item}`)
// })


//Exercise 4 : Colors #2 -need help!
// Instructions
// Using these arrays :
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// //Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// // Hint : Use the array methods taught in class.
// color.forEach((item,i)=>{
//     if (i===1)
//         console.log(`${i++}${ordinal[1]}#  choice is ${item}`)
//     else if(i===2){
//         console.log(`${i++}${ordinal[2]}#  choice is ${item}`)
//     }
//     else if(i===3){
//         console.log(`${i++}${ordinal[3]}#  choice is ${item}`)
//     }
//     else if(i>=3){
//         console.log(`${i++}${ordinal[0]}#  choice is ${item}`)
//     }
// })

//Exercise 5 : Is It A String ?
// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.
// function isString(somthing) {
//     if (typeof somthing === 'string') {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


//Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use:
// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

// let bankAmount = 5000
// function modifiExpenses (){
//     let vat = 1.17
//     let expenses = [200, -100, 146, 167, -2900]
//     console.log(bankAmount*vat)
//
// }
// modifiExpenses()
