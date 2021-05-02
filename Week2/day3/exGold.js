//Exercise 1 : Building Management
//Console.log the number of levels in the building.
// Console.log how many apartments are on levels 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
// If it is than increase Dan’s rent.

let building = {
    number_levels : 4,
    number_of_apt_by_level : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants : ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent:  {
        "Sarah": [3, 990],
        "Dan":  [4, 1000],
        "David": [1, 500],
    },
}

console.log(building.number_levels)
console.log(building.number_of_apt_by_level["1"], building.number_of_apt_by_level["3"])
console.log(building.name_of_tenants[1], building.number_of_rooms_and_rent.Dan[0])

let davidRent = 500
if (building.number_of_rooms_and_rent.Sarah[1] + building.number_of_rooms_and_rent.David[1] > davidRent){
    console.log(davidRent = davidRent++)
}

//Exercise 2 : Divisible By Three
//Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log “true” or “false”.
let numbers = [123, 8409, 100053, 333333333, 7]
for (const num of numbers){
    if (num % 3){
        console.log(true)
    }
    else console.log(false)
}

//Exercise 3 : Playing With Numbers
let age = [20,5,12,43,98,55];
let sum = 0
for (let i=0; i<age.length; i++){
    sum += age[i]
}
console.log(sum)