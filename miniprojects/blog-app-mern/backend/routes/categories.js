const router = require('express').Router();
const Category = require('../models/Category');



//CREATE NEW CATEGORY
router.post('/', async (req,res)=>{
    const newCat = new Category(req.body);
    try{
        const savedCat = await newCat.save();
        res.status(200).json(savedCat)
    }catch (e) {
        res.status(500).json(e)
    }
})

//READ ALL
router.get('/', async (req,res)=>{
    try{
        const cats = await Category.find()
        res.status(200).json(cats)
    }catch (e) {
        res.status(500).json(e)
    }
})




module.exports = router;