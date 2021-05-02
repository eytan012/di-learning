//I. Methods Of The Object Constructor
// Object.keys(obj)– returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj)– returns an array of [key, value] pairs.
// Object.fromEntries(array)– returns an object of {key: value} pairs.

//Use the methods above to :
//
// Count how many keys and values are in the object below
// Display : "The x# key is : --- The x# value is : ---".
// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }
// const keys = Object.keys(myObj)
// const values = Object.values(myObj)
// const keyAndValue = keys.length + values.length
// console.log(keyAndValue)
//
// for (const [key,value] of Object.entries(myObj)){
//     console.log(`The x# key is : ${key} The x# value is : ${value}`)
// }

// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

/* Birthday Cake Candles
*  This array are Birthday Cake Candles
*  You can blow only the tallest candles
*  birthdayCakeCandles function will return
*  how many candles you can blow
*/


const users = {
    user1: {
        age: 44,
        name: 'picard',
    },
    user2: {
        age: 12,
        name: 'sisko',
    },
    user3: {
        age: 109,
        name: 'janeway',
    },
}

const array = Object.entries(users)
console.log(array)

console.log(array.keys())
// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map
//     [
//     { id: 'user1', age: 44, name: 'picard' },
//         { id: 'user3', age: 109, name: 'janeway' }
//     ]








