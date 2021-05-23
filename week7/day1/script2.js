const cars = [
    {brand: 'Porshe', price: '1000000'},
    {brand: 'Audi', price: '500000'},
    {brand: 'Toyota', price: '250000'},
]

// function calcVat() {
//     cars.map((item) => {
//         item.pricePlusVat = item.price * 1.17
//         return item
//     })
//     console.log(cars)
// }
//
// calcVat()


function calcVat() {
  const newCars =  cars.map((item) => {
      return {...item,pricePlusVat:item.price * 1.17}
    })
    console.log(newCars)
}

calcVat()

function calcVat() {
   const newCars = cars.map (item => { return {...item,pricePlusVat:item.price * 1.17}})
    console.log(newCars)
}

calcVat()

