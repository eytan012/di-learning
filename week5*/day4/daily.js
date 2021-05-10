//Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.

function makeAllCaps(arr) {
        return new Promise((res,rej)=>{
            const capsArr = arr.map((item)=>{
                if (typeof item ==='string'){
                    return item.toUpperCase()
                } else {
                    rej('Error: not all items in the array are strings!')
                }
            })
            res(capsArr)
        })
}

function sortWords(arr){
    return new Promise((res,rej)=>{
        if (arr){
            res(arr.sort())
        } else {
            rej('Sorry, no array')
        }
    })
}
sortWords(['cucumber', 'tomatos', 'avocado'])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

makeAllCaps(['cucumber', 'tomatos', 'avocado'])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))