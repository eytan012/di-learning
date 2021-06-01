const largeNumber = 356;
const getCurrentDate = ()=>{
return new Date().toLocaleString();
}

module.exports = {
    number: largeNumber,
   currentDate: getCurrentDate
}