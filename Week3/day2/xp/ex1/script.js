let navBar = document.getElementById("navBar")
navBar.id = "socialNetworkNavigation"
let newLi = document.createElement("li")
let ul = navBar.children[0]
let aTag = document.createElement('a')
aTag.setAttribute('href','#')
aTag.innerText = "Logout"
newLi.append(aTag)
ul.appendChild(newLi)

let firstChild = ul.firstElementChild.textContent
let lastChild = ul.lastElementChild.textContent

navBar.append(firstChild," ",lastChild)
