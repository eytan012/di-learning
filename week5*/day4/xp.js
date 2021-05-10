// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen that takes a number as an argument.
//     The function should return a Promise that tests if the value of the given argument is less or greater than 10.

// function compareToTen(num){
//     return new Promise((resolve,reject)=>{
//         if (num > 10){
//             resolve(`${num} is Greater then 10`)
//         } else {
//             reject(`${num} is Less then 10`)
//         }
//     })
// }
//
// compareToTen(5).then(data=>console.log(data)).catch(err=>console.log(err))

//Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.



// const p = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         if (true){
//             res('success')
//         }else {
//             rej('somthing went wrong')
//         }
//     },5000)
// }).then((message)=>{
//     console.log(message)
// }).catch((err)=>{
//     console.log(err)
// })


//Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

// const p = Promise.resolve(3).then(res =>{
//     console.log(res)
// })
//
// const promise2 = Promise.reject('failed')
//     .catch(console.log('Ooops something went wrong'))