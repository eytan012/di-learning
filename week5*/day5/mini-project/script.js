const root = document.getElementById('root')
const box = document.querySelector('.box')
const findBtn = document.getElementById('find')
const starName = document.getElementById('starName')
const starHeight = document.getElementById('starHeight')
const starGender = document.getElementById('starGender')
const starBirth = document.getElementById('starBirth')
const starHome = document.getElementById('starHome')

findBtn.addEventListener('click', getStars)


async function getStars() {
    let randomNum = Math.floor(Math.random() * 88) + 1;
    const urls = [`https://swapi.dev/api/people/${randomNum}`, `https://swapi.dev/api/planets/${randomNum}`]
    try {
        Promise.all(urls.map(u => fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.json()))
        ).then(arr => {
            displayStar(arr)
        })
    } catch (e) {
        alert(e)
    }

    async function displayStar(arr) {
        starName.innerText = `Name: ${arr[0].name}`
        starHeight.innerText = `Height: ${arr[0].height}`
        starGender.innerText = `Gender: ${arr[0].gender}`
        starBirth.innerText = `Birth Year: ${arr[0].birth_year}`
        starHome.innerText = `Home World:${arr[1].name}`
    }
}
// async function getStars() {
//     try {
//         let randomNum = Math.floor(Math.random() * 88) + 1;
//         const data = await fetch(`https://swapi.dev/api/people/${randomNum}`)
//         const dataObj = await data.json()
//         const star = await getStarPlanet(randomNum)
//         displayStar(dataObj, star)
//     } catch (e) {
//         alert(e)
//     }
// }
//
// async function getStarPlanet(randomNum) {
//     try {
//         const data = await fetch(`https://swapi.dev/api/planets/${randomNum}`)
//         const dataObj = await data.json()
//         return dataObj.name
//     } catch (e) {
//         alert(e)
//     }
// }
//
//
// async function displayStar(obj, homeStar) {
//     starName.innerText = `Name: ${obj.name}`
//     starHeight.innerText = `Height: ${obj.height}`
//     starGender.innerText = `Gender: ${obj.gender}`
//     starBirth.innerText = `Birth Year: ${obj.birth_year}`
//     starHome.innerText = `Contact World:${homeStar}`
// }
//
