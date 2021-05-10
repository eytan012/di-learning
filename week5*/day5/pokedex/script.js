const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
const btnRound = document.getElementById('btnRound')
const pokeDisplay = document.getElementById('pokeDisplay')
const pokeDetails = document.getElementById('pokeDetails')

const randomNum = Math.floor(Math.random() * 100) + 1;
const url = `https://pokeapi.co/api/v2/pokemon/${randomNum}/`

async function getData(){
    try {
        const data = await fetch(url)
        const dataObj = await data.json()
        displayPoke(dataObj)
    } catch (e) {
        console.log(e)
    }
}

async function displayPoke(data) {
    const name = document.getElementById('name')
    const id = document.getElementById('id')
    const height = document.getElementById('height')
    const weight = document.getElementById('weight')
    const type = document.getElementById('type')
    console.log(data)
    const img = document.createElement('img')
    img.setAttribute('src', `${data.sprites.front_default}`)
    pokeDisplay.appendChild(img)
    name.innerText = `${data.name}`
    id.innerText = `Poke Id: ${data.id}`
    height.innerText = `Height: ${data.height}`
    weight.innerText = `Weight: ${data.weight}`
    type.innerText = `Type: ${data.types[0].type.name}`
}


async function leftBtn(){

}


async function rightBtn(){

}
