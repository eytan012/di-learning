//Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.
// If x equals 5 and y equals 2, the program should display:

//Exercise 1: Simple If/Else Statement
let x = 5
let y = 2

if (x > y) {
    console.log(x, " is bigger then", y)
} else {
    console.log(x, "is smaller then", y)
}


//Exercise 2: Chihuahua
let newDog = "Chihuahua"
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog === "Chihuahua") {
    console.log("‘I love Chihuahuas, it’s my favorite dog breed’")
} else {
    console.log(" ‘I dont care, I prefer cats’")
}

//Exercise 3: Even Or Odd
let userNumber = prompt("Please enter a number!")
if(userNumber % 2 == 0) {
    console.log(`${userNumber} is an even number`);
}
else {
    console.log(`${userNumber} is an odd number`);
}

//Exercise 4 : Switch Case
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
//What is the returned value when moveCommand("forward")
//you encounter a monster
// What is the returned value when moveCommand("back")
//you arrived home
// What is the returned value when moveCommand("right")
//you found a river
// What is the returned value when moveCommand("left")
//you run into a troll

//Exercise 5: Group Chat
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
if (users.length === 0){
    console.log("no one is online")
} else if (users.length === 1){
    console.log(`${users[0]} is online”`)
} else if (users.length === 2){
    console.log(`${users[0]} + ${users[1]} is online`)
} else if (users.length > 2){
    console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`)
}