const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : '5555',
    user : 'postgres',
    password : '123456',
    database : 'dvdrental'
  }
});




db.from('city')
.innerJoin('country', 'city.country_id', 'country.country_id')
// .where({'country':'JavaScript1'})
// .update({'country':'Tuvalu'})
// .insert(
//   [
//     {'country':'JavaScript1'},
//     {'country':'JavaScript2'},
//     {'country':'JavaScript3'}
//   ]
// )
// .del()
// .returning('*')
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})
