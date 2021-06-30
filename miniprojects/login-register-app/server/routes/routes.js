const express = require ('express')
const router = express.Router()
const signUpTemplateCopy = require('../modules/SignUpModule')
const bcrypt = require('bcrypt')


router.post('/signup',async (req,res)=>{
    const signUpUser = new signUpTemplateCopy({
        fullName: req.body.registered.fullName ,
        userName:req.body.registered.userName ,
        email:req.body.registered.email ,
        password: req.body.registered.password
    })
    signUpUser.save()
        .then(data=> {
            res.json(data)
        })
        .catch(e=>{
            res.json(e)
        })
})


module.exports = router