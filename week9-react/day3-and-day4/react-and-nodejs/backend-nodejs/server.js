const exp = require('express');
const bp = require('body-parser');
const cors = require('cors');
const DB = require('./modules/db')
const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use(cors());


app.get('/getCountries', (req,res)=> {
DB.getCountries().then(countries => res.send(countries))
    .catch(err=>res.send({message:err}))
})
app.get('/getCities/:id', (req,res)=> {
DB.getCities(req.params.id)
    .then(city =>res.send(city))
    .catch(err=>res.send({message:err}))
})


// app.listen(5000);
app.set('port', 5001);
app.listen(app.get('port'), ()=>{
    console.log(`App started at port ${app.get('port')}`);
})
