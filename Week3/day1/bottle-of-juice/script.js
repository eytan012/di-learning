function singTheSong(){
    let userInput = parseInt(prompt("With how many bottles of beer would you like to start?"))
    while (userInput >=1){
        console.log(`${userInput} bottles of beer on the wall
                     ${userInput} bottles of beer
                    Take 1 down, pass it around... ${userInput - 1} bottles of beer on the wall!`)
        userInput--
    }
}
// singTheSong()


function singTheSong2(userNum){
    while (userNum >= 1){
        console.log(`${userNum} bottles of beer on the wall
                     ${userNum} bottles of beer
                    Take 1 down, pass it around... ${userNum - 1} bottles of beer on the wall!`)
        userNum--
    }
}
// singTheSong2(parseInt(prompt("With how many bottles of beer would you like to start?")))