let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/')
xhr.responseType = 'json'
xhr.send()
xhr.onload = ()=>{
    const res = xhr.response
    retriveArray(res)
}
const root = document.getElementById('root')
//creating the navbar
const nav = document.createElement('div')
nav.className = 'navbar bg-primary px-3'
const navH3 = document.createElement('h3')
const h3Text = document.createTextNode('ROBOFRIENDS')
const searchLabel = document.createElement('label')
const searchInput = document.createElement('input')
searchInput.setAttribute('placeholder', 'search for robo friends')
searchInput.setAttribute('id', 'searchBar')
searchLabel.appendChild(searchInput)
navH3.appendChild(h3Text)
nav.appendChild(navH3)
nav.appendChild(searchLabel)
root.appendChild(nav)

const container = document.createElement('div')
container.className = "cards-container container"
root.appendChild(container)

const row = document.createElement('div')
row.className = "row"
container.appendChild(row)

function retriveArray(res){
    res.forEach((robot,i) => {
        const col = document.createElement('div')
        col.className = "col"
        row.appendChild(col)
        const card = document.createElement('div')
        card.className = "robotCard card my-3"
        card.style.width = "13rem"
        col.appendChild(card)
        const image = document.createElement('img')
        image.setAttribute("src", `https://robohash.org/${res[i]}?size=200x200`)
        card.appendChild(image)
        const cardBodyDiv = document.createElement('div')
        cardBodyDiv.className = "card-body"
        card.appendChild(cardBodyDiv)
        const h5 = document.createElement('h5')
        cardBodyDiv.appendChild(h5)
        const h5Node = document.createTextNode(`${robot.name}`)
        h5.appendChild(h5Node)
        const span = document.createElement('span')
        cardBodyDiv.appendChild(span)
        const spanNode = document.createTextNode(`${robot.username}`)
        span.appendChild(spanNode)
    })
}


//explain about async
//what do we get from the server
// const data = null;
//
// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
//
// xhr.addEventListener("readystatechange", function () {
//     xhr.responseType = 'json'
//     if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//     }
// });
//
// xhr.open("GET", "https://covid-19-statistics.p.rapidapi.com/reports?date=2020-04-16&iso=ISR");
// xhr.setRequestHeader("x-rapidapi-key", "cf8a4ee456msh5dc6f06a102744dp1cf400jsn6dc5bfdca299");
// xhr.setRequestHeader("x-rapidapi-host", "covid-19-statistics.p.rapidapi.com");
//
// xhr.send(data);
// //{"iso":"ISR","name":"Israel"}