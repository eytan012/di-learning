//Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:
//
// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);
// async function fetchData() {
//     try {
//         const res = await fetch('https://swapi.dev/api/starships/9/')
//         return res.json()
//     } catch (e) {
//         return e
//     }
// }
//
// fetchData()
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

//Exercise 2: Analyze
// Instructions
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }
//
// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }
//
// asyncCall();
//first 'calling', next after 2 seconds 'resolved'

