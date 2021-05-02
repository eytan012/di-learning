let sentence = "The food is not that bad , it was great!"
let sentenceArray = sentence.split(" ")
let wordNot = sentenceArray.indexOf("not")
let wordBad = sentenceArray.indexOf("bad")
console.log(wordNot)
console.log(wordBad)
if (wordNot < wordBad && sentenceArray.includes("not") && sentenceArray.includes("bad")){
    console.log("good")
} else {
    console.log("bad")
}