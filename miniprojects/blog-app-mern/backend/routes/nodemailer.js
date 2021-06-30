const router = require('express').Router();
require('dotenv').config()
const nodemailer = require('nodemailer')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


const myOAuth2Client = new OAuth2(
    "270253958906-o3m7l5rc22gicfnds492rqd666au1mmk.apps.googleusercontent.com",
    "GpiKwXrNtE9YbZ_EbTPU0kHm",
    "https://developers.google.com/oauthplayground"
)

myOAuth2Client.setCredentials({
    refresh_token:process.env.OAUTH_REFRESH_TOKEN
});

const myAccessToken = myOAuth2Client.getAccessToken()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.OAUTH_EMAIL, //your gmail account you used to set the project up in google cloud console"
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: myAccessToken //access token variable we defined earlier
    }});


transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

router.post('/', (req, res, next) => {
    console.log('reqbody:',req.body)
    const mail = {
        name: req.body.name,
        from: req.body.email,
        to: 'eytan012@gmail.com',
        subject: 'A message from my blog',
        html: `<h1>${req.body.about}</h1>  <p>${req.body.email}</p>`
    }

    transporter.sendMail(mail, (err, data) => {
        console.log(mail)
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

module.exports = router;