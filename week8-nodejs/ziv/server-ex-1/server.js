const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
app.use(cors());


// app.use((req,res,next) => {
//   res.header('Access-Control-Allow-Origin','*');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// })

// app.use((req,res,next)=>{
//   console.log('hello students before req & res');
//   next();
// })

app.use('/',exp.static(__dirname +'/public'));

app.get('/showUsers', (req,res)=> {
    let userArr = [];
    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    console.log(fileStr);
    userArr = JSON.parse(fileStr);
    res.send(userArr);
})

app.post('/addUser',(req,res)=>{
    console.log(req.body);
    let userArr = [];

    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    console.log(fileStr);
    userArr = JSON.parse(fileStr);

    console.log(userArr);

    userArr.push(req.body);

    fs.writeFile('./users', JSON.stringify(userArr), err=>{
      if(err){
        console.log(err);
      }
     })
    res.send({message:'ok'})
  })

app.get('/search/:id', (req,res)=>{
    // console.log(req.params.id);
    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    arr = JSON.parse(fileStr);

    let filter = arr.filter(item => {
      return item.user === req.params.id
    })
    if(filter.length > 0){
      res.send({message:'exist'})
    }
    else{
      res.send({message:'not exist'})
    }

})

// app.listen(5000);
app.set('port', 5000);
app.listen(app.get('port'), ()=>{
  console.log(`App started at port ${app.get('port')}`);
})
