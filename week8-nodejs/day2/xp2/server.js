const express = require('express')
const app = express()
//  app.use('/',express.static(__dirname+'/public'))

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

app.get('/', function (req, res) {
    res.send(user)
    // console.log(user)
})




// In the server.js file, create your server using express.
// Create a route to the root of the app, using a GET request method.
// The path of the route should contain the route parameter id.
// The handler function of the route should respond with the value of the route parameter.
// Run on port http://localhost:3000/1234
// The response on the page and on the console, should be a JSON Object
// app.route('/:id')
// .get((req,res)=>{
//     console.log(':)')
//     console.log("id:", req.params)
//     res.send(req.params)
//     })
//     .post((req,res)=>{
//         // console.log(req.body)
//     })

// app.use('/',exp.static(__dirname+'/public'))

// // Create a public folder, that contains an HTML file. This HTML file can contain some CSS and some JavaScript (for example a head tag with some classes for styling, and in the body a button with an onClick attribute calling a Javascript function with an alert)
// // In a server.js file create your server using express.
// // Use your server to get the static HTML file from the public folder
// // Your server should run on http://localhost:3000/ to serve the HTML file
// app.route('/:id')
// .get((req,res)=>{
//     console.log(':)')
//     console.log("id:", req.params)
//     res.send(req.params)
//     })
//     .post((req,res)=>{
//         // console.log(req.body)
//     })


app.listen(3001)