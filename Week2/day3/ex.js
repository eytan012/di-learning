//Exercise 1 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

let colors = ["blue","white","grey","green"]
for (let i=0; i<colors.length; i++) {
    // console.log(`My #${i} choice is ${colors[i]}”`)
}



//Exercise 2 : List Of People
// Instructions
//Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// Write code that console.logs Mary’s index. take a look at indexOf on google.
// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let people = ["Greg", "Mary", "Devon", "James"]
people.shift()
people.splice(2,1,"Jason")
people.push("Eytan")
for (let i=0; i<people.length; i++){
    // console.log(people[i])
}

for (let i=0; i<people.length; i++){
    // console.log(people[i])
    if (people[i] === "Jason"){
        // console.log("i arrive to Jason bye bye")
        break;
    }
}
// console.log(people)
// console.log(people.slice(1,3))
// console.log(people.indexOf("Mary"))
// console.log(people.indexOf("Foo"))
// let last = people[3]
// console.log(last)

//Exercise 3 : Repeat The Question
// Instructions
// Promt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// let userNum = prompt("Enter a number")
//
// while (userNum > 10 ){
//     userNum = prompt("Enter a number")
// }

//Exercise 4 : Attendance
// Instructions
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
for (const guest in guestList){
    // console.log(`Hi! I'm ${guest}, and I'm from ${guestList[guestList]}.`)
}

//Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).

const family = {
    Eytan : "25",
    Netanel : "29",
    Naama: "20"
}
for (const name in family) {
    // console.log(name)
    // console.log(family[name])
}

//Exercise 6
// Instructions
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above, console.log “my name is Rudolf the raindeer”
let arr = []
for (let item in details){
    arr.push(item,details[item])
}
console.log(arr.join(" "))
console.log(arr)



//Exercise 7 : Secret Group
//A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let names2 = names.map((name) => name[0] ).join(" ")

