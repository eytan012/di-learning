const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port: '5433',
        user : 'postgres',
        password : '2391',
        database : 'dvdrental'
    }
});

db.select('country').from('country').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})