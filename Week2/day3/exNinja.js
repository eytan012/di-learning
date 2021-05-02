
let obj1 = {
    fullName: "Eytan",
    mass: 75,
    height: 1.75,
    calc: function (){
       return obj1.mass/obj1.height**2
    }
}

let obj2 = {
    fullName: "Liad",
    mass: 80,
    height: 1.81,
    calc: function (){
        return obj1.mass/obj1.height**2
    }
}

function compareBmi(person1,person2){
    if (person1.calc() > person2.calc()){
        console.log(`${person1.fullName} has the larget BMI`)
    } else {
        console.log(`${person2.fullName} has the larget BMI`)
    }
}
compareBmi(obj1,obj2)


//Exercise 2 : Grade Average
let gradesList = [55,61,70,10,100,70,90]
function findAvg(gradesList){
    let sum = 0
    let avg = 0
    for (const grade of gradesList){
        sum += grade
    }
    avg = sum/gradesList.length
    if (avg < 65){
        console.log("FAILED")
    }else {
        console.log("PASSED")
    }
}
findAvg(gradesList)


