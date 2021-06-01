const axios = require('axios')

const fetchData = async ()=>{
    try{
        const res = axios.get('https://jsonplaceholder.typicode.com/users/')
       return res
    }
    catch (e){
        console.log(e)
    }
}

module.exports = {
    users: fetchData
}