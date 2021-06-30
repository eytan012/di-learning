const express = require('express');
const app = express()
const multer  = require('multer')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const catRoute = require('./routes/categories')
const nodeMailerRoute = require('./routes/nodemailer')

require('dotenv').config()

app.use(express.json())
app.use("/assets/images",express.static(path.join(__dirname,"assets/images")))
app.use(cors())

const uri = process.env.DB_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:true,
    }).then(r => console.log('connected')).catch(err => console.log(err));



const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./assets/images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
});

const upload = multer({
    storage:storage
});

app.post('/api/upload',upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded.")
})
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/categories',catRoute);
app.use('/api/nodemailer',nodeMailerRoute)


app.listen(process.env.PORT || '5003', () => {
    console.log(`server is running on port 5003`)
})