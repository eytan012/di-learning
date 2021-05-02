//For the following exercise use the HTML presented above:
//
// Add a “light blue” background color and some padding to the <div>.
// Do not display the first name (John) in the list.
// Add a border to the second name (Pete).
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let usersDiv = document.getElementById('users')
usersDiv.style.backgroundColor = "lightblue";
usersDiv.style.padding = "10px";

let lis = document.getElementsByTagName('li')
lis[0].remove()
lis[0].style.border="1px solid black";

let body = document.body
body.style.fontSize="20px"