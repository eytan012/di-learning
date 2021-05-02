//In the HTML above change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// At the end of each <ul> add a <li> that says “Hey students”.
// Delete the name Sarah from the second <ul>.
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

let firstList = document.getElementsByClassName('list')
firstList[0].children[1].textContent = "Richard"

for (let i = 0; i < firstList.length; i++) {
    firstList[i].children[0].textContent = "Eytan"
}

for (let i = 0; i < firstList.length; i++) {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode("Hey Students"))
    firstList[i].appendChild(li)
}

let uls = document.querySelectorAll('ul')
uls[1].children[1].remove()
