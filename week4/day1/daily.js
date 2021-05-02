const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
//Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// Tip: Use the ternary operator
// Find and display the total score of the users.

let userNamesArray = []
gameInfo.forEach(user=>{
    let username = user.username
    userNamesArray.push(username+"!")
})
console.log(userNamesArray)

gameInfo.forEach((item)=>{
    if (item.score > 5){
        console.log(item.username)
    }
})

let sum = 0
gameInfo.forEach(item=>{
    sum += item.score
})
console.log(sum)