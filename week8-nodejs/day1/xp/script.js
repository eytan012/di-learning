// let a = 5
// let b = 4
// // console.log(a+b)
//
// // console.log(__filename)
//
// const c = require('./script2')
// console.log(c)
//
// const axios = require('axios')
// const fetchData = async () => {
//     try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
//         console.log(res)
//     } catch (e) {
//         console.log(e)
//     }
// }
// fetchData()

// const axios = require('axios')
// axios.get('https://jsonplaceholder.typicode.com/users/')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });

// const a = require('./data')
// a.users().then(res=>console.log(res))

// console.log('hello world')
//
// let a = 5;
// let b = 10;
// let x;
// let c = 6;
// x = a + b;
// console.log(x)





//file system module
const fs = require('fs');

// //read async
// server.readFile('./data.txt',(err,data)=>{
//     if (err){
//         console.log('error:',err)
//     }
//     console.log(data.toString())
// })
//
// //read synchronise
// const data = server.readFileSync('./data.txt')
// console.log(data.toString())


//appending to file - 3 arguments - path, the data, err
//if we dont have the file- it will create it
// const data = JSON.stringify({name:'daniell'})
// server.appendFile('./blublu',data,(err)=>{
//     if (err){
//         console.log(err)
//     }
// })

//difference between write / append to file is
//write:overwrite the whole file, append:will add

// const data = '1,23,4'
// server.writeFile('./blabla',data,err=>{
//     if (err){
//         console.log(err)
//     }
// })


//delete
// server.unlink('./blabla',err=>{
//     if (err){
//         console.log(err)
//     }
// })

//copy-data
//first argument- copy from, second- copy to
// server.copyFile('./data.txt','./blublu',err => {
//     if (err){
//         console.log(err)
//     }
// })