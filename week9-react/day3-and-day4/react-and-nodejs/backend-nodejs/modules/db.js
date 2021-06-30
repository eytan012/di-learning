const knex = require('knex');
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5433',
        user: 'postgres',
        password: '2391',
        database: 'dvdrental'
    }
});


const getCountries = () => {
    return db.select('*').from('country').orderBy('country')
}

const getCities = (id)=>{
    return db.select('city','city_id')
        .from('city')
        .where({country_id:id})
        .orderBy('city')
}





module.exports = {
    getCountries,getCities
}