//Exercise 1 : Keyless Car
//Instructions
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.
function checkDriverAge(){
    let userAge = prompt("How old are you?")
    if (userAge < 18){
        alert("Sorry, you are too young to drive this car. Powering off")
    } else if (userAge === "18"){
        alert("Congratulations on your first year of driving. Enjoy the ride!")
    } else {
        alert("You are old enough to drive, Powering On. Enjoy the ride!")
    }
}
//checkDriverAge()

//Exercise 2 : What’s In My Wallet ?
// Instructions
// Given a item price and an array representing the amount of change in your pocket,
// determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.



//Exercise 3: Find The Multiples Of 23
// Instructions
// Write a js function that console.logs all multiples of 23 less than 500,
// at the end return the sum of all the multiples.
function multiplesOf() {
    let sum=0;
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0){
            console.log(i)
            sum += i
        }
    }
    return sum
}
// console.log(multiplesOf())


//Exercise 4 : Amazon Shopping
// Instructions
//Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
function checkBasket(){
let userAnswer = prompt("enter item")
    for (const item in amazonBasket){
        if (userAnswer === item){
        return alert("its already in")
        } else if (userAnswer !== item){
            return alert("didnt found")
        }
    }
}
// checkBasket()


//Exercise 5 : Shopping List
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
let shoppingList = ["banana","orange","apple"]
function myBill() {
    let totalPrice = 0
    for (let item of shoppingList){
        if (item in stock){
            totalPrice += prices[item]
        }
    }
    return console.log(totalPrice)
}
// myBill()

//Exercise 6 : Tips
//John created a simple tip calculator to help calculate
// how much to tip when he and his family go to restaurants.
//
// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.
//
// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

function tipCalc(){
    let bill = prompt("Enter the bill")
    if (bill <= 50 ){
      return `the bill is ${bill} and the tip is ${bill *0.2}`
    }
    else if (bill >= 50 <=200){
        return bill *0.15
    }
    else if (bill >= 200){
        return bill*0.1
    }
}
// tipCalc()