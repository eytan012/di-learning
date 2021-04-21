function playTheGame() {
    let userAnswer = confirm("Do you want to play the game?")
    if (!userAnswer) {
        alert("No problem, Goodbye")
    } else {
        let userAnswer2 = parseInt(prompt("Please enter a number between 0 and 10"))
        if (userAnswer2 <= 10 && userAnswer2 >= 0) {
            let computerNumber = Math.floor(Math.random()* 11)
            test(userAnswer2,computerNumber)
        } else {
             alert("Too bad")
        }
    }
}

function test(userNumber, computerNumber) {
    if (userNumber === computerNumber) {
       return  alert("WINNER")
    } else if (userNumber > computerNumber){
        alert("Your number is bigger then the computer’s, guess again")
        playTheGame()
    } else if (userNumber < computerNumber){
        alert("Your number is smaller then the computer’s, guess again")
        playTheGame()
    }
}