//Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
//
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// //result =
// console.log(result);
//
// // ------2------
// const country = "USA";
// console.log([...country]);
//
// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

//Exercise 2 : Employees
// Instructions
// Using this array:
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
//Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// Using the filter() method, congratulate only the Full Stack Residents.

// const newUsers = ()=>{
//     const filtered = users.filter((user)=>{
//         return user.role === 'Full Stack Resident'
//     })
//     return filtered
// }
// console.log(newUsers())

// function sayHello(arrayOfUsers){
//     const helloUsers = arrayOfUsers.map((user)=>{
//         return `Hello ${user.firstName}`
//     })
//     return helloUsers
// }
// console.log(sayHello(users))

// const sayHello = (users) =>{
//     const helloUsers = users.map((user)=>{
//         return `Hello ${user.firstName}`
//     })
//     return helloUsers
// }
// console.log(sayHello(users))

// function congratsFullStack(arrayOfUsers){
//     const hello = arrayOfUsers.filter((user)=>{
//         return user.role === 'Full Stack Resident'
//     })
//     return hello
// }
//
// console.log(congratsFullStack(users))

// const congrats = (usersArr)=>{
//     const congratsArr = usersArr.filter((user) => {
//         return  user.role === 'Full Stack Resident'
//     });
//     return congratsArr
// }
//
// console.log(congrats(users))

//Exercise 3 : Star Wars
// Instructions
// Using this array
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.

//Exercise 4 : Employees #2
// Instructions
// Using this object:
// let student = [{name: "Ray", course: "Computer Science", isPassed: true},
//     {name: "Liam", course: "Computer Science", isPassed: false},
//     {name: "Jenner", course: "Information Technology", isPassed: true},
//     {name: "Marco", course: "Robotics", isPassed: true},
//     {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
//     {name: "Jamie", course: "Big Data", isPassed: false}];
//Use the filter() method to congratulate the students that passed the course.

// function retrivePassedUsers(usersArray){
//     const bla = usersArray.filter((user)=>{
//         return user.isPassed === true
//     })
//     return bla
// }
//
//
// function congrats(users){
//    const congratsUsers = users.map((user)=>{
//         return `Congrats ${user.name}`
//     })
//     return congratsUsers
// }
//
// console.log(congrats(retrivePassedUsers(student)))

let arr = [1,2,4,5,6,7,]
let obj = Object.fromEntries(arr)
console.log(obj)