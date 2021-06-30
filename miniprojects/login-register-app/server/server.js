const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

app.use(cors())
dotenv.config()
app.use(express.json())


mongoose.connect(process.env.DB_ACCSESS, () => {
    console.log('DB CONNECTED!')
})



app.use('/api', routesUrls)


app.listen(3300, () => {
    console.log(`Example app listening on port 3300!`)
});

