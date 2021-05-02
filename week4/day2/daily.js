let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//Copy this object using the method that was taught in today’s lesson.
// Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?

let grocString =  JSON.stringify(groceries)
let newObj = JSON.parse(grocString)
newObj.totalPrice = "30$"
newObj.other.payed = false

//when we have a "nested" object. we need to deep clone the object