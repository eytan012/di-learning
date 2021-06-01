const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require('cors')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(cors)
app.use('/',express.static(__dirname+'/public'))


app.get('/show',((req,res)=>{
    let users = []
    console.log('server')
    const userJson = fs.readFileSync('./users');
    const userJsonString = userJson.toString()
    users = JSON.parse(userJsonString)
    console.log('users file:',users)
    res.send(users)
}))

app.route('/post').post((req,res)=>{
    console.log('req.body:',req.body) //this will console log at the server side
    let users = []

    const userJson = fs.readFileSync('./users');
    const userJsonString = userJson.toString()
    users = JSON.parse(userJsonString)
    console.log('users file:',users)


    users.push(req.body)
    fs.writeFile('./users', JSON.stringify(users),err => {
        if (err){
            console.log('error:',err)
        }
    });
        res.send({message: 'OK'})
    })


app.set('port',5010)
app.listen(app.get('port'),()=>{
    console.log(`Server is running at port ${app.get('port')}`)
})


