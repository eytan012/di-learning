//Exercise 1 : Move The Box
// Instructions
// Move the box from left to right
// function myMove() {
//     let animate = document.querySelector('#animate')
//     let position = 0
//     let interval = setInterval(() => {
//         if (position === 500) {
//             clearInterval(interval)
//         } else {
//             position++
//             animate.style.top = position + "px";
//             animate.style.left = position + "px";
//         }
//     },5)
// }

//Exercise 2: Drag & Drop
// Instructions
// Create a draggable square/box element in your HTML file.
// In your javascript file add the functionality which
// will allow you to drag the square/box and drop it into a larger box.

// let box = document.querySelector('.box1')
// box.setAttribute('draggable', 'true')
// console.log(box)
//
// box.addEventListener('dragstart',(e)=>{
//     e.dataTransfer.setData("text",e.target.id)
//     console.log("event:",e)
//     let posX = e.clientX
//     let posY = e.clientY
//     console.log("drag start:",posX,posY)
// })
//
// box.addEventListener('dragend',(e)=>{
//     e.dataTransfer.getData("text")
//     console.log(e.dataTransfer)
//     let posX = e.clientX
//     let posY = e.clientY
//     box.style.position = "absolute"
//     e.target.style.left = `${posX}px`
//     e.target.style.top = `${posY}px`
//     console.log("dragend:",posX,posY)
// })

// let box = document.querySelector('.box1')
// // box.addEventListener('dragstart',(e)=>{
// //    // let x =  e.clientX
// //    //  let y= e.clientY
// //    //  console.log(x,y)
// // })
//
// box.addEventListener('dragend',(e)=>{
//     let x = e.clientX
//     let y = e.clientY
//     box.style.position = "absolute"
//     box.style.top = `${y}px`
//     box.style.left = `${x}px`
// })

function allowDrop(event) {
    event.preventDefault(); // Necessary. Allows us to drop.
}

//add dashes
function allowEnter(event) {
    event.target.classList.add('over');
}

//remove dashes
function allowLeave(event) {
    event.target.classList.remove('over');
}

function dragStart(event) {
//set the data to be dragged
    console.log("target:",  event.target)
    console.log("id: ",  event.target.id ) // id: square1
    event.dataTransfer.setData("text", event.target.id);
}

function dragDrop(event) {
    event.preventDefault();
// retrieve the data dragged

    let data = event.dataTransfer.getData("text");
    console.log("data: ",  data) //data: square1

    let box = document.getElementById(data)
    event.target.appendChild(box);
}

