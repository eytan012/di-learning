const express = require('express');
const app = express()
const fs = require('fs')
const bp = require('body-parser');
const path = require('path');
const cors = require('cors');
// app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use('/',express.static(__dirname+'/public'))
app.use('/register',express.static(__dirname+'/public/register.html'))
app.route('/getData')
    .get((req, res) => {
        console.log('get')
        let data = []
        const listJson = fs.readFileSync('./users')
        let listJsonStrimg = listJson.toString()
        data = JSON.parse(listJsonStrimg)
        res.send(data)
    })
    .post((req, res) => {
        console.log('post...')
        res.sendFile(path.join(__dirname, './public/register.html'));
        console.log(req.body)
        let data = []
        const listJson = fs.readFileSync('./users')
        let listJsonStrimg = listJson.toString()
        data = JSON.parse(listJsonStrimg)
        data.push(req.body)
        fs.writeFile('./users', JSON.stringify(data), function (err) {
            if (err) return console.log(err);
        });
    })
app.listen(3000)