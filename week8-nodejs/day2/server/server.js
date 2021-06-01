
const express = require('express');
//body-parser because we want to read data from the post requests
const bp = require('body-parser')
const app = express();
const port = 3000

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())


//static, because we want to show a static file
app.use('/',express.static(__dirname+'/public'))
app.use('/about',express.static(__dirname+'/public/about.html'))


app.route('/login')
    .get((req,res)=>{
        console.log(req.query)
        res.send(req.query)
    })
    .post((req,res)=>{
        console.log(req.body)
    res.send({message:'got ur post'})
    })


app.get('/contact',(req,res)=>{
    res.send('<h1>Contact</h1>')
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    res.send('hello user id:' + req.params.id)
})


app.listen(port)