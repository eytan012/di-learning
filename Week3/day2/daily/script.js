let planetsArray =['Mercury', 'Venus', 'Earth', 'Mars',
    'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']


function createDivs(){
    for (let i=0; i<planetsArray.length; i++){
        let divs = document.createElement('div')
        divs.className = "planet"
        planetsArray[i] = divs
    }
}
createDivs()

// let colors=['black','brown','blue']
// function changeColors(){
//     for (let i=0;i<planetsArray.length;i++){
//         let elemenets = document.getElementsByClassName('plane')
//         console.log(elemenets[i])
//     }
// }
// changeColors()
