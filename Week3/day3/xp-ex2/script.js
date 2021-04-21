//Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
let lastParagraph = document.querySelectorAll("p")[3]
lastParagraph.remove()

//Add an event listener which will change the background
// color of the h2 tag from the DOM when clicked on.

let h2Tag = document.querySelector("h2")
h2Tag.addEventListener('click',changeH2Background)
function changeH2Background(){
    h2Tag.style.backgroundColor = "red"
}

//Set the font size of the h1 tag to a random
// pixel size between 0 to 100.(Check out this documentation)

let h1TagRandom = document.querySelector("h1")
let randomNum = Math.floor(Math.random() * 100);
h1TagRandom.style.fontSize = `${randomNum}px`

//Add an event listener which will hide
// the h3 when it’s clicked on (use the display property).

let h3Tag = document.querySelector("h3")
h3Tag.addEventListener("click",hideH3Tag)
function hideH3Tag(){
    h3Tag.style.display = "none"
}

//Add a <button> to the HTML file, that when clicked on,
// should make the text of all the paragraphs, bold.
let btnBold = document.getElementById('button1')
btnBold.addEventListener('click',makeParaBold)

function makeParaBold(e){
    e.preventDefault()
    let allParagraph = document.getElementsByTagName('p')
    for (let i=0; i<allParagraph.length; i++){
        allParagraph[i].style.fontWeight = "bold"
    }
}

//When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
// then append them to a HTML table, in the div, below the form.

let submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click",getAndAppendValues)

    function getAndAppendValues(e){
    e.preventDefault()
        let fNameInput = document.querySelector('#fname').value
        let lNameInput = document.querySelector('#lname').value
        if (fNameInput.length && lNameInput.length >=0){
            let divUserAnswer = document.querySelector('.usersAnswer')
            let table = document.createElement("table")
            let tbody = document.createElement("tbody")
            divUserAnswer.appendChild(table)
            table.appendChild(tbody)
            let tr = document.createElement("tr")
            tbody.appendChild(tr)
            let text = document.createTextNode(`${fNameInput} ${lNameInput}`)
            tr.appendChild(text)
        } else {
            alert("Please enter first name and last name")
        }
}

let secondParagraph = document.querySelectorAll("p")[1]
console.log(secondParagraph)
secondParagraph.addEventListener('click',fadeCssAnimation)
function fadeCssAnimation(){
    console.log(secondParagraph.innerText)
}
