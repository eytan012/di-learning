const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');


//CREATE NEW POST
router.post('/', async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (e) {
        res.status(500).json(e)
    }
})


//UPDATE BY ID
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                        $set: req.body
                    },
                    {new: true}
                );
                res.status(200).json(updatedPost)
            } catch (e) {
                res.status(500).json(e)
            }
        } else {
            res.status(401).json("You can update only your post")
        }
    } catch (e) {
        res.status(500).json(e)
    }

})


//DELETE BY ID
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json("Post Deleted.")
            } catch (e) {
                res.status(500).json(e)
            }
        } else {
            res.status(401).json("You can delete only your post")
        }
    } catch (e) {
        res.status(500).json(e)
    }

})

//GET POST BY ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json(e)
    }

})

//GET ALL POSTS
router.get('/', async (req, res) => {
    const username = req.query.user
    const category = req.query.category
    try {
        let posts;
        if (username) {
            posts = await Post.find({username})
        } else if (category) {
            posts = await Post.find({
                categories: {
                    $in: [category]
                }
            })
        } else {
            posts = await Post.find()
        }
        res.status(200).json(posts)
    } catch (e) {
        res.status(500).json(e)
    }

})


module.exports = router